// Illustrative data for the Home page chart: a plausible shape for a sunny
// day on the wholesale electricity market, and the battery schedule an
// optimiser like the homelab one would choose. Not recorded data. Prices are
// unitless (1 = the day's peak) and are never shown as figures.

export type BatteryAction = 'ev' | 'hold' | 'charge' | 'discharge';

export const INTERVALS = 48; // half-hour intervals in a day
export const RESTING_INTERVAL = 25; // 12:30, inside the below-zero window

// prettier-ignore
export const prices: number[] = [
  0.30, 0.29, 0.27, 0.26, 0.25, 0.24, 0.23, 0.22, 0.22, 0.24, // 00:00–04:30
  0.30, 0.40, 0.52, 0.60, 0.62, 0.55,                         // 05:00–07:30
  0.40, 0.24, 0.10, -0.04,                                    // 08:00–09:30
  -0.12, -0.18, -0.23, -0.27, -0.30, -0.32, -0.31, -0.28, -0.22, -0.14, // 10:00–14:30
  -0.04, 0.08, 0.22,                                          // 15:00–16:00
  0.42, 0.66, 0.86, 1.00, 0.96, 0.82, 0.62,                   // 16:30–19:30
  0.50, 0.43, 0.39, 0.36, 0.34, 0.32, 0.31, 0.30,             // 20:00–23:30
];

const schedule: { action: BatteryAction; from: number; to: number }[] = [
  { action: 'ev', from: 0, to: 10 },
  { action: 'hold', from: 10, to: 19 },
  { action: 'charge', from: 19, to: 31 },
  { action: 'hold', from: 31, to: 34 },
  { action: 'discharge', from: 34, to: 42 },
  { action: 'hold', from: 42, to: 48 },
];

export const scheduleBlocks = schedule;

export const blockLabels: Record<BatteryAction, string> = {
  ev: 'EV',
  hold: 'Hold',
  charge: 'Charge',
  discharge: 'Discharge',
};

const actionPhrases: Record<BatteryAction, string> = {
  ev: 'EV charging',
  hold: 'battery holding',
  charge: 'battery charging',
  discharge: 'battery discharging',
};

export function actionAt(interval: number): BatteryAction {
  return schedule.find((b) => interval >= b.from && interval < b.to)!.action;
}

export function priceState(price: number): string {
  if (price < 0) return 'price below zero';
  if (price < 0.35) return 'price low';
  if (price < 0.7) return 'price moderate';
  return 'price high';
}

export function intervalTime(interval: number): string {
  const minutes = interval * 30;
  const h = String(Math.floor(minutes / 60)).padStart(2, '0');
  const m = String(minutes % 60).padStart(2, '0');
  return `${h}:${m}`;
}

export function readoutAt(interval: number): string {
  return `${intervalTime(interval)} · ${priceState(prices[interval])} · ${actionPhrases[actionAt(interval)]}`;
}

export const chartSummary =
  'Illustrative example, not live data: prices fall below zero from about 09:30 to 15:30, when the optimiser charges the battery. It discharges through the 17:00 to 21:00 evening peak and charges the EV overnight.';
