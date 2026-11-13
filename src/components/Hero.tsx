import { useEffect, useState } from 'react';
import { HERO_CONTENT, PROFILE } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
  const { displayed, done } = useTypewriter(HERO_CONTENT.typewriterText, 38, 600);
  const [actionsVisible, setActionsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActionsVisible(true);
    }, 400);

    return () => window.clearTimeout(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = PROFILE.email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <section
      id="top"
      className="relative z-[1] h-screen flex flex-col justify-end pb-10 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden"
    >
      <div className="max-w-xl relative z-10">
        {/* Clear, unblurred role line */}
        <p className="text-[14px] sm:text-[15px] text-black/60 mb-3 tracking-tight">
          {PROFILE.role}
        </p>

        {/* Typewriter statement */}
        <h1
          className="font-logo text-black mb-6 sm:mb-7 font-medium tracking-tight text-balance"
          style={{
            fontSize: 'clamp(24px, 3.8vw, 38px)',
            lineHeight: 1.22,
            minHeight: '88px',
          }}
        >
          {displayed}
          {!done && (
            <span
              aria-hidden="true"
              className="inline-block w-[2px] h-[1.05em] bg-black align-middle ml-[3px] animate-blink"
            />
          )}
        </h1>

        {/* Action pill buttons */}
        <div
          className="flex flex-wrap items-center gap-2.5"
          style={{
            opacity: actionsVisible ? 1 : 0,
            transform: actionsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {HERO_CONTENT.actions.map((action, index) => (
            <a
              key={action.href}
              href={action.href}
              className={`inline-flex items-center justify-center rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-2 whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                index === 0
                  ? 'bg-black text-white border border-black hover:bg-black/85'
                  : 'bg-white text-black border border-black/15 hover:bg-black hover:text-white'
              }`}
            >
              {action.label}
            </a>
          ))}

          <button
            type="button"
            onClick={handleCopyEmail}
            title="Copy email address"
            className="inline-flex items-center justify-center gap-2 sm:gap-2.5 text-black bg-white/90 border border-black/25 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-2 whitespace-nowrap hover:bg-black hover:text-white hover:border-black transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <span>
              {copied ? (
                'Copied!'
              ) : (
                <>
                  Let&apos;s connect:{' '}
                  <span className="underline underline-offset-2">
                    {PROFILE.email}
                  </span>
                </>
              )}
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <rect
                x="4"
                y="4"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M8 4V2C8 1.44772 7.55228 1 7 1H2C1.44772 1 1 1.44772 1 2V7C1 7.55228 1.44772 8 2 8H4"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
