'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import Link from 'next/link';

interface NavigationProps {
  currentId: number;
  totalPosts: number;
}

export default function Navigation({ currentId, totalPosts }: NavigationProps) {
  const router = useRouter();
  
  // Compute IDs directly to avoid hydration issues
  const nextId = useMemo(() => {
    const id = currentId + 1;
    return id > totalPosts ? 1 : id;
  }, [currentId, totalPosts]);
  
  const prevId = useMemo(() => {
    const id = currentId - 1;
    return id < 1 ? totalPosts : id;
  }, [currentId, totalPosts]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        router.push(`/entry/${prevId}`);
      } else if (e.key === 'ArrowRight') {
        router.push(`/entry/${nextId}`);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [router, prevId, nextId]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Left Arrow */}
      <Link
        href={`/entry/${prevId}`}
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-white/80 hover:bg-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center group"
        aria-label="Previous entry"
      >
        <svg
          className="w-8 h-8 text-[#2d2d2d] group-hover:text-[#FFB6C1] transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Link>

      {/* Right Arrow */}
      <Link
        href={`/entry/${nextId}`}
        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-white/80 hover:bg-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center group"
        aria-label="Next entry"
      >
        <svg
          className="w-8 h-8 text-[#2d2d2d] group-hover:text-[#FFB6C1] transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}

