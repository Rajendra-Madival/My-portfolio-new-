import { useEffect, useRef } from 'react';

const VIDEO_SRC = '/assets/aistudio/kling_20261113_VIDEO_animate_4795_0_eab3969e.mp4';
const SENSITIVITY = 0.8;

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncTargetTime = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) {
        return;
      }

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    const scrubByClientX = (clientX: number) => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) {
        return;
      }

      if (prevXRef.current === null) {
        prevXRef.current = clientX;
        return;
      }

      const delta = clientX - prevXRef.current;
      prevXRef.current = clientX;

      const timeOffset =
        (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const nextTarget = Math.min(
        video.duration,
        Math.max(0, targetTimeRef.current + timeOffset)
      );

      targetTimeRef.current = nextTarget;
      syncTargetTime();
    };

    const handleMouseMove = (event: MouseEvent) => {
      scrubByClientX(event.clientX);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        scrubByClientX(event.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    const handleLoadedMetadata = () => {
      targetTimeRef.current = 0;
      video.currentTime = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const handleSeeked = () => {
    const video = videoRef.current;
    if (!video) return;

    if (Math.abs(targetTimeRef.current - video.currentTime) > 0.01) {
      video.currentTime = targetTimeRef.current;
    } else {
      isSeekingRef.current = false;
    }
  };

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 bg-white pointer-events-none overflow-hidden"
    >
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        onSeeked={handleSeeked}
        className="w-full h-[54vh] mt-14 object-contain md:mt-0 md:h-full md:object-cover md:translate-x-[23%] lg:translate-x-[25%]"
        style={{ objectPosition: 'center center' }}
      />
      {/* Soft bottom fade on mobile so bottom-aligned hero text stays crisp */}
      <div className="md:hidden absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/85 to-transparent" />
    </div>
  );
}
