import Link from "next/link";

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

export default function About() {
  return (
    <div className="min-h-screen grid-background font-sans relative overflow-hidden">
      {/* Background decorations - Coffee, Tea, and Pink Hearts (reduced) */}
      <Sticker emoji="☕" size="3.5rem" top="10%" left="5%" rotation={-15} delay={0} />
      <Sticker emoji="☕" size="3rem" top="50%" right="5%" rotation={20} delay={1} />
      <Sticker emoji="☕" size="3.5rem" top="80%" left="4%" rotation={10} delay={2} />
      
      <Sticker emoji="🫖" size="3.5rem" top="25%" right="8%" rotation={-15} delay={2} />
      <Sticker emoji="🫖" size="3rem" top="65%" left="6%" rotation={20} delay={0.8} />
      
      <Sticker emoji="💕" size="3rem" top="15%" left="12%" rotation={-12} delay={0.5} />
      <Sticker emoji="💕" size="2.5rem" top="40%" right="12%" rotation={18} delay={1.5} />
      <Sticker emoji="💕" size="3rem" top="70%" left="10%" rotation={-8} delay={2.2} />
      <Sticker emoji="💕" size="2.5rem" top="85%" right="10%" rotation={22} delay={0.7} />

      <main className="min-h-screen w-full max-w-4xl mx-auto px-8 py-16 relative z-10">
        {/* Navigation */}
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-block px-6 py-2 bg-[#FFB6C1] text-[#2d2d2d] font-medium rounded-full hover:bg-[#FF9BB0] transition-colors shadow-md"
          >
            ← Back to Home
          </Link>
        </div>

        {/* About Content */}
        <div className="ripped-paper max-w-3xl w-full px-12 py-16 relative z-10 transform rotate-[0.5deg]">
          {/* Decorative elements */}
          <div className="absolute top-6 left-6 text-2xl opacity-40">💕</div>
          <div className="absolute top-8 right-8 text-xl opacity-40">☕</div>
          <div className="absolute bottom-6 left-8 text-xl opacity-40">🫖</div>
          
          <h1 className="text-5xl md:text-6xl font-normal text-[#2d2d2d] mb-8 tracking-tight relative z-10">
            About Study&Sip
          </h1>
          
          <div className="space-y-6 text-lg text-[#5a5a5a] leading-relaxed relative z-10">
            <p>
              Welcome to Study&Sip! 
            </p>
            
            <p>
              [about content]
            </p>
            
            <p>
              [more about content]
            </p>
            
            <p>
            </p>
          </div>

          {/* Contact or additional info section */}
          <div className="mt-12 pt-8 border-t border-[#e0e0e0] relative z-10">
            <h2 className="text-2xl font-semibold text-[#2d2d2d] mb-4">
              [section title]
            </h2>
            <p className="text-[#5a5a5a]">
              [section content]
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

