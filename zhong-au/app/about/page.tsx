import type { Metadata } from 'next';
import { Fragment } from 'react';
import { Archivo } from 'next/font/google';
import {
  bio,
  education,
  experience,
  languages,
  skillGroups,
  type Inline,
} from '@/content/about';
import { site, subLine } from '@/content/site';
import { skillRefs } from '@/content/skill-refs';

// The bio's one emphasised word gets the real italic, loaded only here.
const archivoItalic = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  style: 'italic',
  display: 'swap',
  preload: false,
  variable: '--font-archivo-italic',
});

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: subLine,
};

function Runs({ runs }: { runs: Inline[] }) {
  return (
    <>
      {runs.map((run, i) =>
        typeof run === 'string' ? run : <em key={i}>{run.em}</em>,
      )}
    </>
  );
}

export default function About() {
  return (
    <main id="main">
      <div className="row about">
        <h1 className="about-title page-title">About</h1>

        <section
          className={`about-bio ${archivoItalic.variable}`}
          aria-labelledby="bio-title"
        >
          <h2 id="bio-title" className="sheet-label">
            Bio
          </h2>
          {bio.map((paragraph, i) => (
            <p key={i}>
              <Runs runs={paragraph} />
            </p>
          ))}
        </section>

        <section className="about-facts" aria-labelledby="background-title">
          <h2 id="background-title" className="sheet-label">
            Background
          </h2>
          <dl className="facts">
            <div className="fact">
              <dt>Education</dt>
              <dd>
                {education.institution} — {education.degree},{' '}
                <span className="fact-years">
                  <time dateTime={education.from}>{education.from}</time>–
                  <time dateTime={education.to}>{education.to}</time>
                </span>
              </dd>
            </div>
            <div className="fact">
              <dt>Experience</dt>
              <dd>
                <ul className="fact-list">
                  {experience.map((item) => (
                    <li key={item.area}>
                      <span className="fact-area">{item.area}:</span>{' '}
                      {item.detail}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="fact">
              <dt>Languages spoken</dt>
              <dd>
                {languages.map((language, i) => (
                  <span key={language.name}>
                    {i > 0 && ', '}
                    {language.name}
                    {language.native && (
                      <>
                        {' '}
                        <span className="nowrap">
                          (
                          <span lang={language.native.lang}>
                            {language.native.text}
                          </span>
                          )
                        </span>
                      </>
                    )}
                  </span>
                ))}
              </dd>
            </div>
            <div className="fact">
              <dt>Based in</dt>
              <dd>{site.location}</dd>
            </div>
          </dl>
        </section>
      </div>

      <section className="row section skills" aria-labelledby="skills-title">
        <div className="span-label">
          <h2 id="skills-title" className="section-title">
            Skills
          </h2>
          <p className="skills-note">
            Where a skill shows up in my projects, the project is linked.
          </p>
        </div>
        <div className="skills-index">
          {skillGroups.map((group) => (
            <div key={group.name} className="skill-group">
              <h3 className="sheet-label">{group.name}</h3>
              <ul>
                {group.skills.map((skill) => {
                  const refs = skillRefs(skill);
                  return (
                    <li key={skill.name} className="skill">
                      <span className="skill-name">{skill.name}</span>
                      {refs.length > 0 && (
                        <span className="skill-refs">
                          <span className="sr-only">, used in</span>
                          {refs.map((ref, i) => (
                            <Fragment key={ref.href}>
                              {i > 0 && (
                                <span className="skill-sep" aria-hidden="true">
                                  ·
                                </span>
                              )}
                              <a href={ref.href} className="skill-ref">
                                {ref.label}
                              </a>
                            </Fragment>
                          ))}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
