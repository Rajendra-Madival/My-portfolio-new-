import { useState } from 'react';
import {
  BEYOND_CODE,
  CAREER_GOALS,
  LEARNING_JOURNEY,
  LEETCODE_PROBLEMS,
  MAIN_PROJECTS,
  PRACTICE_EXPERIMENTS,
  PROFILE,
  SHORT_INTRO,
  SKILLS,
} from '../data/portfolio';

export function PortfolioSections() {
  const [copiedFooter, setCopiedFooter] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedFooter(true);
      window.setTimeout(() => setCopiedFooter(false), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = PROFILE.email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopiedFooter(true);
        window.setTimeout(() => setCopiedFooter(false), 1800);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <main className="relative z-[1] bg-white border-t border-black/10">
      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-20 max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-20 border-b border-black/10"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-10">
          <h2 className="font-logo text-[28px] sm:text-[36px] leading-tight tracking-tight text-black text-balance">
            Projects
          </h2>
          <p className="text-[14px] text-black/60 max-w-sm">
            Practical builds and ongoing experiments exploring web engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
          {MAIN_PROJECTS.map((project) => (
            <article
              key={project.title}
              className="flex flex-col justify-between p-6 sm:p-7 border border-black/12 rounded-2xl bg-white hover:border-black/30 transition-colors duration-200"
            >
              <div>
                <p className="text-[13px] text-black/55 mb-2">
                  {project.status}
                </p>
                <h3 className="font-logo text-[22px] sm:text-[24px] tracking-tight text-black mb-3">
                  {project.title}
                </h3>

                <p className="text-[16px] leading-relaxed text-black/80 mb-5">
                  {project.description}
                </p>

                {(project.problem || project.features || project.technologies) && (
                  <dl className="space-y-3 text-[14px] leading-relaxed text-black/75 border-t border-black/10 pt-4">
                    {project.problem && (
                      <div>
                        <dt className="text-black font-medium">
                          Problem it solves
                        </dt>
                        <dd>{project.problem}</dd>
                      </div>
                    )}
                    {project.features && (
                      <div>
                        <dt className="text-black font-medium">Main features</dt>
                        <dd>{project.features}</dd>
                      </div>
                    )}
                    {project.technologies && (
                      <div>
                        <dt className="text-black font-medium">
                          Technologies used
                        </dt>
                        <dd>{project.technologies}</dd>
                      </div>
                    )}
                  </dl>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-black/10">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white rounded-full text-[14px] px-4 py-2 hover:bg-black/85 transition-colors whitespace-nowrap shrink-0"
                >
                  Live demo ↗
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-white text-black border border-black/15 rounded-full text-[14px] px-4 py-2 hover:bg-black hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    GitHub repository ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Experiments & Practice */}
        <div className="pt-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-5">
            <h3 className="font-logo text-[19px] sm:text-[21px] text-black">
              Experiments &amp; Practice
            </h3>
            <p className="text-[14px] text-black/60">
              Smaller builds created while practicing core frontend fundamentals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {PRACTICE_EXPERIMENTS.map((item) => (
              <div
                key={item.name}
                className="p-5 border border-black/10 rounded-xl bg-neutral-50/70 hover:bg-white hover:border-black/25 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-[17px] text-black mb-1">{item.name}</h4>
                  <p className="text-[14px] text-black/65 leading-relaxed">
                    {item.note}
                  </p>
                </div>
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity mt-4 inline-block whitespace-nowrap"
                  >
                    GitHub repository ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-20 max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-20 border-b border-black/10"
      >
        <h2 className="font-logo text-[28px] sm:text-[36px] leading-tight tracking-tight text-black mb-10 text-balance">
          Skills &amp; Active Learning
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Foundations & Current Skills */}
          <div className="p-6 sm:p-7 border border-black/12 rounded-2xl bg-white space-y-6">
            <h3 className="font-logo text-[20px] text-black border-b border-black/10 pb-3">
              Technologies I Use
            </h3>
            {SKILLS.current.map((group) => (
              <div key={group.category}>
                <p className="text-[13px] text-black/55 mb-1.5">
                  {group.category}
                </p>
                <p className="text-[16px] leading-relaxed text-black">
                  {group.items.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Currently Learning */}
          <div className="p-6 sm:p-7 border border-black/12 rounded-2xl bg-neutral-50/70">
            <h3 className="font-logo text-[20px] text-black border-b border-black/10 pb-3 mb-4">
              Currently Learning
            </h3>
            <p className="text-[15px] text-black/70 mb-5 leading-relaxed">
              Expanding from frontend development into backend systems,
              relational databases, and algorithmic problem-solving.
            </p>
            <ul className="divide-y divide-black/8 text-[16px] text-black">
              {SKILLS.learning.map((item) => (
                <li key={item} className="py-2.5 first:pt-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About & Education */}
      <section
        id="about"
        className="scroll-mt-20 max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-20 border-b border-black/10"
      >
        <h2 className="font-logo text-[28px] sm:text-[36px] leading-tight tracking-tight text-black mb-10 text-balance">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-7 space-y-4 text-[17px] sm:text-[18px] leading-relaxed text-black/85">
            {SHORT_INTRO.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="pt-5">
              <h3 className="font-logo text-[19px] text-black mb-3">
                Career Focus
              </h3>
              <ul className="space-y-2.5 text-[15px] leading-relaxed text-black/75 list-disc pl-5">
                {CAREER_GOALS.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5 space-y-6">
            <div className="p-6 border border-black/12 rounded-2xl bg-white">
              <p className="text-[13px] text-black/55 mb-2">Education</p>
              <p className="font-logo text-[18px] text-black mb-1">
                {PROFILE.degree}
              </p>
              <p className="text-[15px] text-black/75 mb-4">
                {PROFILE.college}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-black/70 pt-3 border-t border-black/10 tabular-nums">
                <span>Expected Graduation: {PROFILE.graduationYear}</span>
                <span>CGPA: {PROFILE.cgpa}</span>
              </div>
            </div>

            <div className="p-6 border border-black/12 rounded-2xl bg-neutral-50/70">
              <p className="text-[13px] text-black/55 mb-3">Beyond Code</p>
              <ul className="space-y-2.5 text-[15px] leading-relaxed text-black/75 list-disc pl-5">
                {BEYOND_CODE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solving & Learning Journey */}
      <section
        id="journey"
        className="scroll-mt-20 max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-20 border-b border-black/10"
      >
        <h2 className="font-logo text-[28px] sm:text-[36px] leading-tight tracking-tight text-black mb-10 text-balance">
          Problem Solving &amp; Learning Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* DSA */}
          <div className="p-6 sm:p-7 border border-black/12 rounded-2xl bg-white flex flex-col justify-between">
            <div>
              <h3 className="font-logo text-[21px] text-black mb-3">
                Problem Solving &amp; DSA
              </h3>
              <p className="text-[15px] leading-relaxed text-black/75 mb-5">
                I practise Data Structures and Algorithms and aim to spend at
                least one hour a day sharpening my problem-solving skills.
              </p>
              <p className="text-[13px] text-black/55 mb-2">
                Examples of LeetCode problems I have solved:
              </p>
              <p className="text-[14px] leading-relaxed text-black/80 tabular-nums mb-6">
                {LEETCODE_PROBLEMS.map((num) => `#${num}`).join(', ')}
              </p>
            </div>
            <div className="pt-4 border-t border-black/10">
              <a
                href={PROFILE.links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="text-[15px] text-black underline underline-offset-4 hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                View my LeetCode profile ↗
              </a>
            </div>
          </div>

          {/* Ongoing Journey */}
          <div className="p-6 sm:p-7 border border-black/12 rounded-2xl bg-neutral-50/70">
            <h3 className="font-logo text-[21px] text-black mb-3">
              Ongoing Development Direction
            </h3>
            <p className="text-[15px] text-black/65 mb-5">
              Where I am actively focusing my time right now:
            </p>
            <ol className="space-y-3 text-[15px] leading-relaxed text-black/85 list-decimal pl-5">
              {LEARNING_JOURNEY.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Connect / Footer */}
      <footer
        id="connect"
        className="scroll-mt-20 max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-14 sm:py-16"
      >
        <h2 className="font-logo text-[28px] sm:text-[36px] leading-tight tracking-tight text-black mb-4 text-balance">
          Let&apos;s Connect
        </h2>
        <p className="text-[16px] leading-relaxed text-black/75 max-w-xl mb-8">
          Open to software development and full-stack internship opportunities,
          collaborations, and conversations around building practical software.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center bg-black text-white rounded-full text-[15px] px-5 py-2 hover:bg-black/85 transition-colors whitespace-nowrap shrink-0"
          >
            {PROFILE.email}
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center bg-white text-black border border-black/15 rounded-full text-[15px] px-4 py-2 hover:bg-black hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {copiedFooter ? 'Copied email!' : 'Copy email'}
          </button>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-white text-black border border-black/15 rounded-full text-[15px] px-5 py-2 hover:bg-black hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            GitHub ↗
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-white text-black border border-black/15 rounded-full text-[15px] px-5 py-2 hover:bg-black hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            LinkedIn ↗
          </a>
          <a
            href={PROFILE.links.leetcode}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-white text-black border border-black/15 rounded-full text-[15px] px-5 py-2 hover:bg-black hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            LeetCode ↗
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/10 text-[13px] text-black/55">
          <span>
            {PROFILE.brandName}, {PROFILE.location}
          </span>
          <a
            href="#top"
            className="underline underline-offset-2 hover:opacity-60 transition-opacity text-black whitespace-nowrap"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
