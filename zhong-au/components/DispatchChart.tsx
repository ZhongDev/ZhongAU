'use client';

import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import {
  INTERVALS,
  RESTING_INTERVAL,
  blockLabels,
  type BatteryAction,
  chartSummary,
  prices,
  readoutAt,
  scheduleBlocks,
} from '@/content/dispatch';

// Plot geometry in viewBox units: 10 per interval, 100 tall.
const UNIT = 10;
const WIDTH = INTERVALS * UNIT;
const TOP = 1.06;
const BOTTOM = -0.42;
const round = (n: number) => Math.round(n * 100) / 100;
const yOf = (price: number) => round(((TOP - price) / (TOP - BOTTOM)) * 100);
const ZERO = yOf(0);

// Dispatch prices hold for a whole interval, so the trace is a step line.
const tracePath = prices
  .map((p, i) => `${i === 0 ? `M0 ${yOf(p)}` : `V${yOf(p)}`} H${(i + 1) * UNIT}`)
  .join(' ');

const washPath = `M0 ${ZERO} ${prices
  .map((p, i) => `L${i * UNIT} ${yOf(p)} L${(i + 1) * UNIT} ${yOf(p)}`)
  .join(' ')} L${WIDTH} ${ZERO} Z`;

const axisLabels = ['00:00', '06:00', '12:00', '18:00', '24:00'];

const keySteps: Record<string, (i: number) => number> = {
  ArrowLeft: (i) => i - 1,
  ArrowDown: (i) => i - 1,
  ArrowRight: (i) => i + 1,
  ArrowUp: (i) => i + 1,
  PageDown: (i) => i - 4,
  PageUp: (i) => i + 4,
  Home: () => 0,
  End: () => INTERVALS - 1,
};

const clamp = (i: number) => Math.min(INTERVALS - 1, Math.max(0, i));

// Written out in full so Tailwind keeps the classes.
const blockClasses: Record<BatteryAction, string> = {
  ev: 'sched-block sched-block--ev',
  hold: 'sched-block sched-block--hold',
  charge: 'sched-block sched-block--charge',
  discharge: 'sched-block sched-block--discharge',
};

// Past this interval the readout sits on the crosshair's left.
const FLIP_AT = 30;

export default function DispatchChart() {
  const [step, setStep] = useState(RESTING_INTERVAL);
  const plot = useRef<HTMLDivElement>(null);

  const scrubTo = (clientX: number) => {
    const rect = plot.current?.getBoundingClientRect();
    if (!rect) return;
    setStep(clamp(Math.floor(((clientX - rect.left) / rect.width) * INTERVALS)));
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' || event.buttons > 0) scrubTo(event.clientX);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const move = keySteps[event.key];
    if (!move) return;
    event.preventDefault();
    setStep((i) => clamp(move(i)));
  };

  const readout = readoutAt(step);
  const position = { '--i': step, '--y': yOf(prices[step]) } as CSSProperties;

  return (
    <figure className="row dispatch">
      <figcaption className="dispatch-caption">
        <span className="dispatch-title">
          Homelab optimiser: schedules a home battery and EV charging against
          wholesale electricity prices.
        </span>
        <span className="dispatch-legend">
          <span className="dispatch-key">
            <svg width="28" height="4" aria-hidden="true" focusable="false">
              <line x1="0" y1="2" x2="28" y2="2" className="dispatch-key-line" />
            </svg>
            Illustrative day · not live data
          </span>
          <span className="dispatch-hint">
            Drag across the chart
            <span className="dispatch-hint-keys"> or use the arrow keys</span> to
            step through it.
          </span>
        </span>
      </figcaption>
      <p className="sr-only">{chartSummary}</p>

      <div
        ref={plot}
        className="dispatch-plot"
        style={position}
        role="slider"
        tabIndex={0}
        aria-label="Illustrative day, in half-hour intervals"
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={INTERVALS - 1}
        aria-valuenow={step}
        aria-valuetext={readout}
        onPointerDown={(event) => scrubTo(event.clientX)}
        onPointerMove={onPointerMove}
        onKeyDown={onKeyDown}
      >
        <div className="dispatch-area">
          <div className="dispatch-field">
            <svg
              className="dispatch-trace"
              viewBox={`0 0 ${WIDTH} 100`}
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <clipPath id="dispatch-below-zero">
                  <rect x="0" y={ZERO} width={WIDTH} height={100 - ZERO} />
                </clipPath>
              </defs>
              <path
                className="dispatch-wash"
                d={washPath}
                clipPath="url(#dispatch-below-zero)"
              />
              <path
                className="dispatch-line"
                d={tracePath}
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="dispatch-zero" style={{ top: `${ZERO}%` }} aria-hidden="true">
              <span>Zero price</span>
            </div>
            <span className="dispatch-dot" aria-hidden="true" />
          </div>
        </div>

        <div className="dispatch-schedule" aria-hidden="true">
          {scheduleBlocks.map((block) => (
            <span
              key={block.from}
              className={
                block.to - block.from < 5
                  ? `${blockClasses[block.action]} sched-block--narrow`
                  : blockClasses[block.action]
              }
              style={{ gridColumn: `${block.from + 1} / ${block.to + 1}` }}
            >
              <span className="sched-block-label">{blockLabels[block.action]}</span>
            </span>
          ))}
        </div>

        <span className="dispatch-crosshair" aria-hidden="true" />
        <span
          className={step >= FLIP_AT ? 'dispatch-readout is-flipped' : 'dispatch-readout'}
          aria-hidden="true"
        >
          {readout}
        </span>
      </div>

      <div className="dispatch-axis" aria-hidden="true">
        {axisLabels.map((label, k) => (
          <span key={label} style={{ left: `${k * 25}%` }}>
            {label}
          </span>
        ))}
      </div>
    </figure>
  );
}
