import Link from "next/link";
import { notFound } from "next/navigation";
import PolaroidImage from "./PolaroidImage";

interface BlogPost {
  id: number;
  cafeName: string;
  rating: number;
  location: string;
  description: string;
  images: string[];
}

// Mock data - in a real app, this would come from a database or API
const blogPosts: BlogPost[] = [
  {
    id: 1,
    cafeName: "[name]",
    rating: 4.5,
    location: "[location]",
    description: "[description]",
    images: ["[image 1]", "[image 2]", "[image 3]"]
  },
  {
    id: 2,
    cafeName: "[name]",
    rating: 4.8,
    location: "[location]",
    description: "[description]",
    images: ["[image 1]", "[image 2]"]
  },
  {
    id: 3,
    cafeName: "[name]",
    rating: 4.2,
    location: "[location]",
    description: "[description]",
    images: ["[image 1]", "[image 2]", "[image 3]", "[image 4]"]
  },
  {
    id: 4,
    cafeName: "[name]",
    rating: 4.7,
    location: "[location]",
    description: "[description]",
    images: ["[image 1]", "[image 2]"]
  }
];

// Sticker Component
function Sticker({ 
  emoji, 
  size, 
  top, 
  left, 
  right,
  rotation = 0,
  delay = 0 
}: { 
  emoji: string; 
  size: string; 
  top: string; 
  left?: string; 
  right?: string;
  rotation?: number;
  delay?: number;
}) {
  return (
    <div
      className="sticker sticker-float"
      data-rotation={`${rotation}deg`}
      style={{
        fontSize: size,
        top,
        left: left || 'auto',
        right: right || 'auto',
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${delay}s`,
        '--rotation': `${rotation}deg`,
      } as React.CSSProperties}
    >
      {emoji}
    </div>
  );
}

// Washi Tape Component
function WashiTape({ 
  color, 
  width, 
  height, 
  top, 
  left, 
  right,
  rotation = 0,
  horizontal = true 
}: { 
  color: string; 
  width: string; 
  height: string; 
  top?: string; 
  left?: string; 
  right?: string;
  rotation?: number;
  horizontal?: boolean;
}) {
  return (
    <div
      className="washi-tape"
      style={{
        backgroundColor: color,
        width: horizontal ? width : height,
        height: horizontal ? height : width,
        top: top || 'auto',
        left: left || 'auto',
        right: right || 'auto',
        transform: `rotate(${rotation}deg)`,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      }}
    />
  );
}

function Rating() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-lg text-[#5a5a5a] font-medium">5/5</span>
    </div>
  );
}

export default async function EntryPage({ 
  params 
}: { 
  params: Promise<{ id: string }> | { id: string } 
}) {
  // Handle both sync and async params (Next.js 15+ compatibility)
  const resolvedParams = params instanceof Promise ? await params : params;
  const postId = parseInt(resolvedParams.id);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen grid-background font-sans relative">
      {/* Background Stickers */}
      <Sticker emoji="☕" size="3rem" top="8%" left="5%" rotation={-15} delay={0} />
      <Sticker emoji="📚" size="2.5rem" top="12%" right="8%" rotation={20} delay={1} />
      <Sticker emoji="✨" size="2rem" top="25%" left="3%" rotation={10} delay={2} />
      <Sticker emoji="💝" size="2.5rem" top="35%" right="4%" rotation={-10} delay={0.5} />
      <Sticker emoji="⭐" size="2rem" top="50%" left="2%" rotation={15} delay={1.5} />
      <Sticker emoji="🌸" size="2.5rem" top="60%" right="6%" rotation={-20} delay={2.5} />
      <Sticker emoji="📝" size="2rem" top="75%" left="4%" rotation={-5} delay={1} />
      <Sticker emoji="🎨" size="2.5rem" top="85%" right="3%" rotation={25} delay={0.8} />

      {/* Washi Tape */}
      <WashiTape 
        color="#FFB6C1" 
        width="200px" 
        height="30px" 
        top="5%" 
        left="10%" 
        rotation={-2}
      />
      <WashiTape 
        color="#FFE4B5" 
        width="180px" 
        height="30px" 
        top="7%" 
        right="15%" 
        rotation={3}
      />

      <main className="min-h-screen w-full max-w-4xl mx-auto px-8 py-16 relative z-10">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-block px-6 py-2 bg-[#FFB6C1] text-[#2d2d2d] font-medium rounded-full hover:bg-[#FF9BB0] transition-colors shadow-md"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Entry Content */}
        <article className="ripped-paper max-w-3xl w-full px-6 md:px-8 py-8 md:py-10 relative z-10 transform rotate-[-0.5deg]">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-xl opacity-40">📝</div>
          <div className="absolute top-5 right-5 text-lg opacity-40">✨</div>

          {/* Polaroid Image with Navigation - Smaller */}
          <div className="mb-6 flex justify-center w-full">
            <PolaroidImage images={post.images} />
          </div>

          {/* Title and Rating */}
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-normal text-[#2d2d2d] mb-3 tracking-tight">
              {post.cafeName}
            </h1>
            <Rating />
          </div>

          {/* Location */}
          <div className="mb-6">
            <p className="text-base text-[#5a5a5a] font-medium">
              📍 {post.location}
            </p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#2d2d2d] mb-3">
              About
            </h2>
            <p className="text-base text-[#5a5a5a] leading-relaxed">
              {post.description}
            </p>
          </div>

          {/* Additional sections with placeholders */}
          <div className="space-y-6 mt-8 pt-6 border-t border-[#e0e0e0]">
            <div>
              <h2 className="text-xl font-semibold text-[#2d2d2d] mb-3">
                [section title]
              </h2>
              <p className="text-base text-[#5a5a5a] leading-relaxed mb-3">
                [section content]
              </p>
              <ul className="list-disc list-inside text-base text-[#5a5a5a] space-y-1.5">
                <li>[list item]</li>
                <li>[list item]</li>
                <li>[list item]</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2d2d2d] mb-3">
                [section title]
              </h2>
              <p className="text-base text-[#5a5a5a] leading-relaxed">
                [section content]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2d2d2d] mb-3">
                [section title]
              </h2>
              <div className="space-y-3">
                <p className="text-base text-[#5a5a5a] leading-relaxed">
                  [paragraph content]
                </p>
                <p className="text-base text-[#5a5a5a] leading-relaxed">
                  [paragraph content]
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2d2d2d] mb-3">
                [section title]
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <h3 className="text-lg font-medium text-[#2d2d2d] mb-2">
                    [subsection title]
                  </h3>
                  <p className="text-sm text-[#5a5a5a]">
                    [subsection content]
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#2d2d2d] mb-2">
                    [subsection title]
                  </h3>
                  <p className="text-sm text-[#5a5a5a]">
                    [subsection content]
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#2d2d2d] mb-3">
                [section title]
              </h2>
              <p className="text-base text-[#5a5a5a] leading-relaxed">
                [section content]
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

