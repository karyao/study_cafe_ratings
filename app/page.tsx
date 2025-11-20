import Link from "next/link";

interface BlogPost {
  id: number;
  cafeName: string;
  rating: number;
  location: string;
  description: string;
  image: string;
}

// Washi Tape Component
function WashiTape({ 
  color, 
  width, 
  height, 
  top, 
  bottom,
  left, 
  right,
  rotation = 0,
  horizontal = true 
}: { 
  color: string; 
  width: string; 
  height: string; 
  top?: string; 
  bottom?: string;
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
        bottom: bottom || 'auto',
        left: left || 'auto',
        right: right || 'auto',
        transform: `rotate(${rotation}deg)`,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      }}
    />
  );
}

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

const blogPosts: BlogPost[] = [
  {
    id: 1,
    cafeName: "[name]",
    rating: 4.5,
    location: "[location]",
    description: "[description]",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    cafeName: "[name]",
    rating: 4.8,
    location: "[location]",
    description: "[description]",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    cafeName: "[name]",
    rating: 4.2,
    location: "[location]",
    description: "[description]",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    cafeName: "[name]",
    rating: 4.7,
    location: "[location]",
    description: "[description]",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
  }
];

function Rating() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-lg text-[#5a5a5a] font-medium">5/5</span>
    </div>
  );
}

export default function Home() {
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


      <main className="min-h-screen w-full max-w-6xl mx-auto px-8 py-16 relative z-10">
        {/* Hero Section - Ripped Paper Note */}
        <div className="flex flex-col items-center justify-center text-center mb-24 relative">
          {/* Decorative stickers around title */}
          <Sticker emoji="💕" size="2rem" top="-10px" left="10%" rotation={-15} delay={0} />
          <Sticker emoji="⭐" size="1.8rem" top="-5px" right="12%" rotation={20} delay={1} />
          
          {/* Ripped Paper Note */}
          <div className="ripped-paper max-w-2xl w-full px-12 py-16 relative z-10 transform rotate-[-1deg]">
            {/* Small decorative elements on the note */}
            <div className="absolute top-6 left-6 text-2xl opacity-40">📝</div>
            <div className="absolute top-8 right-8 text-xl opacity-40">✨</div>
            
            <h1 className="text-6xl md:text-7xl font-normal text-[#2d2d2d] mb-6 tracking-tight relative z-10">
              Study&Sip
            </h1>
            <p className="text-xl md:text-2xl text-[#5a5a5a] font-light max-w-xl mx-auto relative z-10 mb-8">
              Discover cozy cafés perfect for studying, one sip at a time.
            </p>
            
            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 relative z-10">
              <Link 
                href="/about"
                className="inline-block px-8 py-3 bg-[#E6E6FA] text-[#2d2d2d] font-medium rounded-full hover:bg-[#D8D8F0] transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                About
              </Link>
              <a 
                href="#cafe-entries"
                className="inline-block px-8 py-3 bg-[#FFB6C1] text-[#2d2d2d] font-medium rounded-full hover:bg-[#FF9BB0] transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View Cafe Entries →
              </a>
            </div>
          </div>
        </div>

        {/* Cafe Entries Section */}
        <div id="cafe-entries" className="scroll-mt-24 mb-12">
          <h2 className="text-4xl md:text-5xl font-normal text-[#2d2d2d] text-center mb-12 relative">
            <span className="relative inline-block">
              Café Adventures
              <Sticker emoji="☕" size="1.5rem" top="-15px" left="-30px" rotation={-15} delay={0} />
              <Sticker emoji="📚" size="1.3rem" top="-10px" right="-35px" rotation={20} delay={1} />
            </span>
          </h2>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 relative z-10">
          {blogPosts.map((post, index) => {
            // Different washi tape colors for each card
            const tapeColors = ['#FFB6C1', '#FFE4B5', '#E6E6FA', '#B0E0E6'];
            const tapeColor = tapeColors[index % 4];
            
            return (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-visible hover:shadow-xl transition-all duration-300 relative transform hover:-translate-y-1"
            >
              {/* Washi Tapes - Taping the card to the page */}
              {/* Top left corner tape */}
              <WashiTape 
                color={tapeColor} 
                width="120px" 
                height="25px" 
                top="-12px" 
                left="-10px" 
                rotation={-15}
              />
              {/* Top right corner tape */}
              <WashiTape 
                color={tapeColor} 
                width="100px" 
                height="25px" 
                top="-12px" 
                right="-8px" 
                rotation={15}
              />
              {/* Bottom left corner tape */}
              <WashiTape 
                color={tapeColor} 
                width="110px" 
                height="25px" 
                bottom="-12px" 
                left="-8px" 
                rotation={12}
              />
              {/* Bottom right corner tape */}
              <WashiTape 
                color={tapeColor} 
                width="95px" 
                height="25px" 
                bottom="-12px" 
                right="-10px" 
                rotation={-12}
              />
              
              {/* Small decorative sticker on card */}
              <div className="absolute top-4 left-4 text-2xl opacity-60 z-20">
                {index % 4 === 0 ? '☕' : index % 4 === 1 ? '📚' : index % 4 === 2 ? '✨' : '💝'}
              </div>

              {/* Polaroid Image Placeholder */}
              <div className="p-4 pb-3">
                <div className="polaroid-container">
                  <div className="polaroid-photo">
                    <div className="polaroid-image-placeholder polaroid-image-small">
                      <span className="text-[#5a5a5a] text-xs opacity-50">[image]</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 pt-0 flex flex-col min-h-[150px]">
                {/* Cafe Name and Rating */}
                <div className="mb-3">
                  <h2 className="text-xl font-semibold text-[#2d2d2d] mb-1.5">
                    {post.cafeName}
                  </h2>
                  <Rating />
                </div>

                {/* Location, Description, and Read More */}
                <div className="mt-auto space-y-2">
                  <p className="text-xs text-[#5a5a5a] font-medium">
                    📍 {post.location}
                  </p>
                  <p className="text-[#5a5a5a] leading-relaxed text-sm">
                    {post.description}
                  </p>
                  <Link 
                    href={`/entry/${post.id}`}
                    className="text-[#2d2d2d] font-medium hover:text-[#5a5a5a] transition-colors self-start mt-1 inline-block text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
            );
          })}
          </div>
        </div>
      </main>
    </div>
  );
}
