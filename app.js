// Golden Dallah Wedding Services - React Application (Ultra-Smooth 60FPS Video Animation & Mobile Optimized)

const { useState, useEffect, useRef } = React;
const e = React.createElement;

const { motion, AnimatePresence } = window.FramerMotion || { 
  motion: { 
    div: (props) => e('div', props), 
    button: (props) => e('button', props), 
    header: (props) => e('header', props), 
    section: (props) => e('section', props), 
    footer: (props) => e('footer', props), 
    a: (props) => e('a', props), 
    span: (props) => e('span', props), 
    h1: (props) => e('h1', props), 
    h2: (props) => e('h2', props), 
    h3: (props) => e('h3', props), 
    p: (props) => e('p', props) 
  },
  AnimatePresence: ({ children }) => children 
};

// Icon Components using React.createElement
const Icon = ({ name, className = "w-5 h-5", ...props }) => {
  const svgProps = { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "1.5", ...props };

  const icons = {
    Coffee: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a9 9 0 010-12.728M5.636 5.636l2.829 2.829M3 21l2.829-2.829M12 3v3m0 12v3" })),
    Utensils: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" })),
    Sparkles: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" })),
    Heart: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" })),
    GraduationCap: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.26 10.147L12 14.633l7.74-4.486M12 3L2 8.571l10 5.571 10-5.571L12 3zm0 12.429l7.74-4.486V16.5M4.26 12v4.5" })),
    Users: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" })),
    Crown: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3l3.5 6 5.5-3-2 10.5h-14L3 6l5.5 3L12 3z" })),
    Phone: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.47-5.279-3.853-6.749-6.749l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" })),
    MessageCircle: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641l-.608 2.37a.5.5 0 00.61.61l2.585-.646a2.62 2.62 0 011.58.118A8.93 8.93 0 0012 20.25z" })),
    Instagram: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })),
    ChevronRight: () => e('svg', { ...svgProps, strokeWidth: "2" }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" })),
    ChevronLeft: () => e('svg', { ...svgProps, strokeWidth: "2" }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" })),
    ChevronDown: () => e('svg', { ...svgProps, strokeWidth: "2" }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" })),
    Check: () => e('svg', { ...svgProps, strokeWidth: "2" }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" })),
    Menu: () => e('svg', { ...svgProps, strokeWidth: "2" }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" })),
    X: () => e('svg', { ...svgProps, strokeWidth: "2" }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })),
    MapPin: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" }), e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" })),
    Clock: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" })),
    Copy: () => e('svg', svgProps, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5" })),
    ArrowUp: () => e('svg', { ...svgProps, strokeWidth: "2" }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" }))
  };

  const Component = icons[name] || icons.Sparkles;
  return Component();
};

// Handcrafted Royal Golden Dallah Logo SVG Icon
const DallahLogo = ({ className = "w-10 h-10" }) => 
  e('svg', { className, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    e('defs', null,
      e('linearGradient', { id: "goldGrad", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
        e('stop', { offset: "0%", stopColor: "#F7E7A9" }),
        e('stop', { offset: "50%", stopColor: "#D4AF37" }),
        e('stop', { offset: "100%", stopColor: "#997011" })
      ),
      e('linearGradient', { id: "goldGlow", x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
        e('stop', { offset: "0%", stopColor: "#FFF2BF" }),
        e('stop', { offset: "100%", stopColor: "#D4AF37" })
      )
    ),
    e('path', { d: "M 25 85 C 40 92, 60 92, 75 85 L 72 78 C 58 83, 42 83, 28 78 Z", fill: "url(#goldGrad)" }),
    e('path', { d: "M 32 78 C 30 55, 38 45, 43 38 C 41 33, 41 28, 44 24 L 56 24 C 59 28, 59 33, 57 38 C 62 45, 70 55, 68 78 Z", fill: "url(#goldGrad)", stroke: "#5E4304", strokeWidth: "1.5" }),
    e('path', { d: "M 33 60 C 45 65, 55 65, 67 60 C 66 63, 66 64, 65 67 C 55 71, 45 71, 35 67 Z", fill: "url(#goldGlow)" }),
    e('path', { d: "M 42 42 C 30 38, 18 28, 14 18 C 19 21, 28 28, 40 33 Z", fill: "url(#goldGrad)", stroke: "#7A590A", strokeWidth: "1" }),
    e('path', { d: "M 14 18 Q 12 12, 16 14 Z", fill: "url(#goldGlow)" }),
    e('path', { d: "M 58 35 C 78 35, 85 55, 67 72 L 64 68 C 78 54, 72 40, 57 40 Z", fill: "url(#goldGrad)" }),
    e('path', { d: "M 44 24 C 44 18, 47 14, 50 8 C 53 14, 56 18, 56 24 Z", fill: "url(#goldGrad)" }),
    e('circle', { cx: "50", cy: "7", r: "3", fill: "url(#goldGlow)" })
  );

// ULTRA-SMOOTH 60FPS FULL-BLEED HERO SCROLL CANVAS COMPONENT
function HeroScrollCanvas({ t, isRtl }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [scrollProgressPercent, setScrollProgressPercent] = useState(0);
  const imagesRef = useRef([]);
  const animFrameIdRef = useRef(null);
  const currentFrameRef = useRef(-1);
  const TOTAL_FRAMES = 299;

  // Preload 299 frames & store fallback loaded states
  useEffect(() => {
    const loadedImages = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `public/images/herosection/ezgif-frame-${frameNum}.jpg`;
      img.onload = () => {
        img.isLoaded = true;
        if (i === 1 && canvasRef.current) {
          renderCanvasFrame(0);
        }
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  // Fast High-DPI 60FPS Canvas Render Function with Nearest Loaded Frame Fallback
  const renderCanvasFrame = (frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const images = imagesRef.current;
    if (!images || images.length === 0) return;

    let targetImg = images[frameIdx];
    if (!targetImg || !targetImg.isLoaded) {
      // Find nearest loaded frame so canvas NEVER goes black or stutters
      for (let delta = 1; delta < TOTAL_FRAMES; delta++) {
        const prev = images[frameIdx - delta];
        if (prev && prev.isLoaded) { targetImg = prev; break; }
        const next = images[frameIdx + delta];
        if (next && next.isLoaded) { targetImg = next; break; }
      }
    }

    if (!targetImg || !targetImg.complete) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const hRatio = displayWidth / targetImg.width;
    const vRatio = displayHeight / targetImg.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (displayWidth - targetImg.width * ratio) / 2;
    const centerShift_y = (displayHeight - targetImg.height * ratio) / 2;

    ctx.clearRect(0, 0, displayWidth, displayHeight);
    ctx.drawImage(
      targetImg,
      0,
      0,
      targetImg.width,
      targetImg.height,
      centerShift_x,
      centerShift_y,
      targetImg.width * ratio,
      targetImg.height * ratio
    );
    ctx.restore();
  };

  // Continuous 60FPS Scroll Animation Loop
  useEffect(() => {
    const updateLoop = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalScrollableHeight = rect.height - windowHeight;

        if (totalScrollableHeight > 0) {
          const currentScroll = Math.max(0, -rect.top);
          const progress = Math.min(1, Math.max(0, currentScroll / totalScrollableHeight));
          const targetFrameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
          );

          if (currentFrameRef.current !== targetFrameIndex) {
            currentFrameRef.current = targetFrameIndex;
            renderCanvasFrame(targetFrameIndex);
            setScrollProgressPercent(Math.round(progress * 100));
          }

          const stage = 
            progress < 0.22 ? 0 :
            progress < 0.48 ? 1 :
            progress < 0.75 ? 2 : 3;

          setActiveStageIndex((prev) => (prev !== stage ? stage : prev));
        }
      }
      animFrameIdRef.current = requestAnimationFrame(updateLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animFrameIdRef.current);
  }, []);

  return e('div', { ref: containerRef, className: "relative h-[340vh] sm:h-[360vh] bg-black" },
    e('div', { className: "sticky top-0 h-screen w-full overflow-hidden flex items-end justify-center pb-6 sm:pb-12" },
      e('canvas', { ref: canvasRef, className: "absolute inset-0 w-full h-full object-cover z-0" }),
      e('div', { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40 pointer-events-none z-10" }),
      e('div', { className: "absolute top-16 sm:top-20 left-0 right-0 h-1 sm:h-1.5 bg-white/10 z-30" },
        e('div', { 
          className: "h-full bg-gradient-to-r from-[#D4AF37] via-[#F7E7A9] to-[#D4AF37] transition-all duration-75",
          style: { width: `${scrollProgressPercent}%` }
        })
      ),
      e('div', { className: "relative z-20 max-w-4xl mx-auto px-4 w-full text-center" },
        e(AnimatePresence, { mode: "wait" },
          activeStageIndex === 0 && e(motion.div, {
            key: "stage0",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: { duration: 0.35 },
            className: "bg-[#0F2A23]/90 backdrop-blur-md p-5 sm:p-10 rounded-2xl sm:rounded-3xl border-2 border-[#D4AF37] shadow-2xl text-white space-y-3 sm:space-y-4"
          },
            e('div', { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4AF37] bg-[#D4AF37]/20" },
              e(Icon, { name: "Crown", className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F7E7A9]" }),
              e('span', { className: "text-[11px] sm:text-sm font-bold text-[#F7E7A9] tracking-wide" }, t.hero.badge)
            ),
            e('h1', { className: "text-2xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight" },
              e('span', { className: "block text-white" }, t.hero.titleLine1),
              e('span', { className: "bg-gradient-to-r from-[#F7E7A9] via-[#D4AF37] to-[#AA7C11] bg-clip-text text-transparent block py-0.5 font-serif" }, t.hero.titleLine2),
              e('span', { className: "text-sm sm:text-2xl font-normal text-[#D4AF37] block" }, t.hero.titleLine3)
            ),
            e('p', { className: "max-w-2xl mx-auto text-xs sm:text-sm text-gray-200 font-light leading-relaxed hidden xs:block sm:block" }, t.hero.subtitle),
            e('div', { className: "pt-1 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-bold text-[#F7E7A9] animate-bounce" },
              e('span', null, t.hero.scrollHint),
              e(Icon, { name: "ChevronDown", className: "w-3.5 h-3.5" })
            )
          ),

          activeStageIndex === 1 && e(motion.div, {
            key: "stage1",
            initial: { opacity: 0, scale: 0.95, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: -20 },
            transition: { duration: 0.35 },
            className: "max-w-xl mx-auto bg-[#0F2A23]/95 backdrop-blur-md p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-[#D4AF37] shadow-2xl text-white text-start space-y-2 sm:space-y-3"
          },
            e('div', { className: "inline-block px-3 py-1 rounded-full bg-[#D4AF37] text-[#0F2A23] text-[10px] sm:text-xs font-bold uppercase tracking-wider" }, t.hero.features[0].tag),
            e('h2', { className: "text-xl sm:text-3xl font-bold font-serif text-[#F7E7A9]" }, t.hero.features[0].title),
            e('p', { className: "text-xs sm:text-sm text-gray-200 leading-relaxed" }, t.hero.features[0].desc)
          ),

          activeStageIndex === 2 && e(motion.div, {
            key: "stage2",
            initial: { opacity: 0, scale: 0.95, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: -20 },
            transition: { duration: 0.35 },
            className: "max-w-xl mx-auto bg-[#0F2A23]/95 backdrop-blur-md p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-[#D4AF37] shadow-2xl text-white text-start space-y-2 sm:space-y-3"
          },
            e('div', { className: "inline-block px-3 py-1 rounded-full bg-[#D4AF37] text-[#0F2A23] text-[10px] sm:text-xs font-bold uppercase tracking-wider" }, t.hero.features[1].tag),
            e('h2', { className: "text-xl sm:text-3xl font-bold font-serif text-[#F7E7A9]" }, t.hero.features[1].title),
            e('p', { className: "text-xs sm:text-sm text-gray-200 leading-relaxed" }, t.hero.features[1].desc)
          ),

          activeStageIndex === 3 && e(motion.div, {
            key: "stage3",
            initial: { opacity: 0, scale: 0.95, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: -20 },
            transition: { duration: 0.35 },
            className: "max-w-2xl mx-auto bg-[#0F2A23]/95 backdrop-blur-md p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-[#D4AF37] shadow-2xl text-white space-y-3 sm:space-y-4"
          },
            e('div', { className: "inline-block px-3 py-1 rounded-full bg-[#D4AF37] text-[#0F2A23] text-[10px] sm:text-xs font-bold uppercase tracking-wider" }, t.hero.features[2].tag),
            e('h2', { className: "text-xl sm:text-3xl font-bold font-serif text-[#F7E7A9]" }, t.hero.features[2].title),
            e('p', { className: "text-xs sm:text-sm text-gray-200 leading-relaxed max-w-lg mx-auto" }, t.hero.features[2].desc),
            e('div', { className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-2" },
              e('a', {
                href: "#booking",
                className: "w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#0F2A23] font-bold text-xs shadow-xl hover:brightness-110 flex items-center justify-center gap-2"
              },
                e('span', null, t.hero.ctaPrimary),
                e(Icon, { name: isRtl ? "ChevronLeft" : "ChevronRight", className: "w-4 h-4" })
              ),
              e('a', {
                href: "https://wa.me/971506672259",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-xl flex items-center justify-center gap-2"
              },
                e(Icon, { name: "MessageCircle", className: "w-4 h-4 sm:w-5 sm:h-5" }),
                e('span', null, t.hero.ctaSecondary)
              )
            )
          )
        )
      )
    )
  );
}

// Main Application Component
function App() {
  const [lang, setLang] = useState('ar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const [activeCapacityTab, setActiveCapacityTab] = useState('medium');
  const [toastMessage, setToastMessage] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: 'wedding',
    eventDate: '',
    location: 'Abu Dhabi (أبوظبي)',
    capacity: '100 – 500 Guests',
    addons: ['gahwa', 'luqaimat'],
    name: '',
    phone: '',
    notes: ''
  });

  const t = translations[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showToast(t.floating.copiedToast);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const eventLabel = t.booking.eventTypes.find(ev => ev.id === formData.eventType)?.label || formData.eventType;
    
    let msg = "";
    if (lang === 'ar') {
      msg = `*طلب حجز واستفسار - الدلة الذهبية لخدمات الأفراح*\n\n` +
        `• *نوع المناسبة:* ${eventLabel}\n` +
        `• *تاريخ الحفل:* ${formData.eventDate || 'غير محدد'}\n` +
        `• *الإمارة / الموقع:* ${formData.location}\n` +
        `• *عدد الضيوف التقديري:* ${formData.capacity}\n` +
        `• *الخدمات المختارة:* ${formData.addons.length > 0 ? formData.addons.map(a => t.booking.addons.find(x => x.id === a)?.label).join('، ') : 'خدمة أساسية'}\n` +
        `• *اسم العميل:* ${formData.name || 'لم يذكر'}\n` +
        `• *رقم التواصل:* ${formData.phone || 'لم يذكر'}\n` +
        `• *ملاحظات إضافية:* ${formData.notes || 'لا يوجد'}\n\n` +
        `يرجى تزويدنا بالتفاصيل والأسعار المتاحة. شكراً لكم.`;
    } else {
      msg = `*Event Booking Inquiry - Golden Dallah Wedding Services*\n\n` +
        `• *Event Type:* ${eventLabel}\n` +
        `• *Event Date:* ${formData.eventDate || 'Not specified'}\n` +
        `• *Location:* ${formData.location}\n` +
        `• *Guest Capacity:* ${formData.capacity}\n` +
        `• *Selected Services:* ${formData.addons.length > 0 ? formData.addons.map(a => t.booking.addons.find(x => x.id === a)?.label).join(', ') : 'Standard'}\n` +
        `• *Client Name:* ${formData.name || 'N/A'}\n` +
        `• *Contact Phone:* ${formData.phone || 'N/A'}\n` +
        `• *Special Notes:* ${formData.notes || 'None'}\n\n` +
        `Please share quotation and availability details. Thank you.`;
    }

    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/971506672259?text=${encodedMsg}`, '_blank');
  };

  return e('div', { className: `min-h-screen bg-white text-[#1A1A1A] font-sans antialiased selection:bg-[#D4AF37] selection:text-white ${isRtl ? 'font-arabic' : 'font-english'}` },
    
    // Toast Notification
    e(AnimatePresence, null,
      toastMessage && e(motion.div, {
        initial: { opacity: 0, y: -50, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -20, scale: 0.9 },
        className: "fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-50 bg-[#0F2A23] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-2xl border border-[#D4AF37] flex items-center gap-2.5 font-semibold text-xs sm:text-sm max-w-[90vw] text-center"
      },
        e(Icon, { name: "Check", className: "w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] shrink-0" }),
        e('span', null, toastMessage)
      )
    ),

    // Header Navbar
    e('header', { className: "sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-sm transition-all duration-300" },
      e('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        e('div', { className: "flex items-center justify-between h-16 sm:h-20" },
          e('a', { href: "#", className: "flex items-center gap-2.5 sm:gap-3 group" },
            e(DallahLogo, { className: "w-9 h-9 sm:w-11 sm:h-11 transform group-hover:scale-105 transition-transform duration-300" }),
            e('div', { className: "flex flex-col" },
              e('span', { className: "text-lg sm:text-2xl font-bold text-[#0F2A23] font-serif tracking-wide" }, t.nav.brandName),
              e('span', { className: "text-[9px] sm:text-xs text-[#D4AF37] font-semibold tracking-widest uppercase" }, t.nav.brandSub)
            )
          ),

          e('nav', { className: "hidden lg:flex items-center gap-8 text-sm font-semibold text-[#2D3748]" },
            e('a', { href: "#about", className: "hover:text-[#D4AF37] transition-colors" }, t.nav.about),
            e('a', { href: "#services", className: "hover:text-[#D4AF37] transition-colors" }, t.nav.services),
            e('a', { href: "#capacity", className: "hover:text-[#D4AF37] transition-colors" }, t.nav.capacity),
            e('a', { href: "#booking", className: "hover:text-[#D4AF37] transition-colors" }, t.nav.booking),
            e('a', { href: "#contact", className: "hover:text-[#D4AF37] transition-colors" }, t.nav.contact)
          ),

          e('div', { className: "hidden sm:flex items-center gap-4" },
            e('a', {
              href: "tel:+971555593389",
              className: "flex items-center gap-2 px-4 py-2 rounded-full border border-[#0F2A23] text-[#0F2A23] hover:bg-[#0F2A23] hover:text-white transition-colors text-xs font-bold"
            },
              e(Icon, { name: "Phone", className: "w-4 h-4 text-[#D4AF37]" }),
              e('span', null, `${t.nav.vipCall}: +971 55 559 3389`)
            ),
            e('button', {
              onClick: toggleLanguage,
              className: "px-4 py-2 rounded-full bg-[#0F2A23] text-[#D4AF37] font-bold text-xs border border-[#D4AF37] hover:bg-[#16382F] transition-all"
            }, t.nav.langSwitch)
          ),

          e('div', { className: "flex sm:hidden items-center gap-2" },
            e('button', {
              onClick: toggleLanguage,
              className: "px-3 py-1.5 rounded-full bg-[#0F2A23] text-[#D4AF37] font-bold text-xs"
            }, t.nav.langSwitch),
            e('button', {
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              className: "p-2 text-[#0F2A23] hover:bg-gray-100 rounded-lg active:scale-95 transition-transform"
            }, e(Icon, { name: mobileMenuOpen ? "X" : "Menu", className: "w-6 h-6" }))
          )
        )
      ),

      e(AnimatePresence, null,
        mobileMenuOpen && e(motion.div, {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          className: "sm:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 px-6 py-6 space-y-4 font-semibold text-[#0F2A23] shadow-2xl"
        },
          e('a', { href: "#about", onClick: () => setMobileMenuOpen(false), className: "block py-1 hover:text-[#D4AF37] text-base" }, t.nav.about),
          e('a', { href: "#services", onClick: () => setMobileMenuOpen(false), className: "block py-1 hover:text-[#D4AF37] text-base" }, t.nav.services),
          e('a', { href: "#capacity", onClick: () => setMobileMenuOpen(false), className: "block py-1 hover:text-[#D4AF37] text-base" }, t.nav.capacity),
          e('a', { href: "#booking", onClick: () => setMobileMenuOpen(false), className: "block py-1 hover:text-[#D4AF37] text-base" }, t.nav.booking),
          e('a', { href: "#contact", onClick: () => setMobileMenuOpen(false), className: "block py-1 hover:text-[#D4AF37] text-base" }, t.nav.contact),
          e('div', { className: "pt-4 border-t border-gray-100 flex flex-col gap-3" },
            e('a', {
              href: "tel:+971555593389",
              className: "flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0F2A23] text-[#D4AF37] font-bold text-sm shadow-md"
            },
              e(Icon, { name: "Phone", className: "w-4 h-4" }),
              e('span', null, "VIP Direct: +971 55 559 3389")
            )
          )
        )
      )
    ),

    // Hero Canvas
    e(HeroScrollCanvas, { t, isRtl }),

    // Stats Section
    e('section', { className: "py-8 sm:py-12 bg-[#F8F9FA] border-t border-b border-[#D4AF37]/30" },
      e('div', { className: "max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center" },
        t.hero.stats.map((stat, idx) =>
          e('div', { key: idx, className: "p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#D4AF37]/30 shadow-sm" },
            e('div', { className: "text-2xl sm:text-4xl font-bold font-serif text-[#0F2A23]" }, stat.value),
            e('div', { className: "text-[11px] sm:text-sm text-[#555] font-semibold mt-0.5 sm:mt-1" }, stat.label)
          )
        )
      )
    ),

    // About Section
    e('section', { id: "about", className: "py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white" },
      e('div', { className: "max-w-7xl mx-auto" },
        e('div', { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center" },
          e(motion.div, {
            initial: { opacity: 0, x: isRtl ? 30 : -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.7 },
            className: "lg:col-span-6 space-y-4 sm:space-y-6"
          },
            e('div', { className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-bold" },
              e('span', { className: "w-6 sm:w-8 h-[2px] bg-[#D4AF37]" }),
              e('span', null, t.about.tag)
            ),
            e('h2', { className: "text-2xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight text-[#0F2A23]" }, t.about.title),
            e('p', { className: "text-sm sm:text-lg text-[#333333] leading-relaxed" }, t.about.desc1),
            e('p', { className: "text-sm sm:text-lg text-[#555555] leading-relaxed font-light" }, t.about.desc2),
            e('div', { className: "pt-2 sm:pt-4 flex items-center gap-4" },
              e('div', { className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0F2A23] text-[#D4AF37] flex items-center justify-center shrink-0" },
                e(Icon, { name: "Crown", className: "w-5 h-5 sm:w-6 sm:h-6" })
              ),
              e('div', null,
                e('h4', { className: "font-bold text-sm sm:text-base text-[#0F2A23]" }, "Established 1998"),
                e('p', { className: "text-xs text-[#666]" }, "25+ Years UAE Hospitality Excellence")
              )
            )
          ),

          e(motion.div, {
            initial: { opacity: 0, x: isRtl ? -30 : 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.7 },
            className: "lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          },
            t.about.features.map((feat, idx) =>
              e('div', {
                key: idx,
                className: "p-5 sm:p-6 rounded-2xl bg-[#F8F9FA] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 group"
              },
                e('div', { className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0F2A23] text-[#D4AF37] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform" },
                  e(Icon, { name: "Sparkles", className: "w-4 h-4 sm:w-5 sm:h-5" })
                ),
                e('h3', { className: "text-base sm:text-lg font-bold font-serif text-[#0F2A23] mb-1.5" }, feat.title),
                e('p', { className: "text-xs sm:text-sm text-[#555] leading-relaxed" }, feat.desc)
              )
            )
          )
        )
      )
    ),

    // Core Services Grid
    e('section', { id: "services", className: "py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] border-t border-b border-gray-100" },
      e('div', { className: "max-w-7xl mx-auto" },
        e('div', { className: "text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16" },
          e('div', { className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-bold" },
            e('span', { className: "w-6 sm:w-8 h-[2px] bg-[#D4AF37]" }),
            e('span', null, t.services.tag),
            e('span', { className: "w-6 sm:w-8 h-[2px] bg-[#D4AF37]" })
          ),
          e('h2', { className: "text-2xl sm:text-5xl font-bold font-serif text-[#0F2A23]" }, t.services.title),
          e('p', { className: "text-xs sm:text-base text-[#555] font-light" }, t.services.subtitle)
        ),

        e('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" },
          t.services.cards.map((service, idx) =>
            e(motion.div, {
              key: service.id,
              initial: { opacity: 0, y: 25 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: idx * 0.15 },
              whileHover: { y: -6 },
              onClick: () => setSelectedServiceModal(service),
              className: "cursor-pointer p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-xl transition-all duration-300 flex flex-col justify-between group active:scale-[0.99]"
            },
              e('div', null,
                e('div', { className: "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0F2A23] text-[#D4AF37] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform" },
                  e(Icon, { name: service.icon, className: "w-6 h-6 sm:w-7 sm:h-7" })
                ),
                e('h3', { className: "text-xl sm:text-2xl font-bold font-serif text-[#0F2A23] mb-2 sm:mb-3 group-hover:text-[#D4AF37] transition-colors" }, service.title),
                e('p', { className: "text-xs sm:text-sm text-[#555] leading-relaxed mb-4 sm:mb-6" }, service.shortDesc)
              ),
              e('div', { className: "space-y-2.5 pt-4 border-t border-gray-100" },
                service.details.slice(0, 2).map((item, itemIdx) =>
                  e('div', { key: itemIdx, className: "flex items-center gap-2 text-xs text-[#333]" },
                    e(Icon, { name: "Check", className: "w-4 h-4 text-[#D4AF37] shrink-0" }),
                    e('span', null, item)
                  )
                ),
                e('div', { className: "pt-3 flex items-center gap-2 text-xs font-bold text-[#0F2A23] group-hover:underline" },
                  e('span', null, t.services.modalCta),
                  e(Icon, { name: isRtl ? "ChevronLeft" : "ChevronRight", className: "w-4 h-4 text-[#D4AF37]" })
                )
              )
            )
          )
        )
      )
    ),

    // Modal
    e(AnimatePresence, null,
      selectedServiceModal && e('div', { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" },
        e(motion.div, {
          initial: { opacity: 0, scale: 0.9, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.9, y: 20 },
          className: "relative w-full max-w-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#D4AF37] shadow-2xl text-[#1A1A1A] space-y-4 sm:space-y-6 max-h-[88vh] overflow-y-auto"
        },
          e('button', {
            onClick: () => setSelectedServiceModal(null),
            className: "absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[#0F2A23]"
          }, e(Icon, { name: "X", className: "w-5 h-5" })),

          e('div', { className: "flex items-center gap-3 sm:gap-4 pr-8" },
            e('div', { className: "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0F2A23] text-[#D4AF37] flex items-center justify-center shrink-0" },
              e(Icon, { name: selectedServiceModal.icon, className: "w-6 h-6 sm:w-7 sm:h-7" })
            ),
            e('div', null,
              e('h3', { className: "text-xl sm:text-2xl font-bold font-serif text-[#0F2A23]" }, selectedServiceModal.title),
              e('p', { className: "text-[11px] sm:text-xs text-[#D4AF37] font-semibold" }, "Golden Dallah Premier Provisioning")
            )
          ),

          e('p', { className: "text-xs sm:text-sm text-[#444] leading-relaxed" }, selectedServiceModal.shortDesc),

          e('div', { className: "space-y-2.5 bg-[#F8F9FA] p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-200" },
            e('h4', { className: "text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0F2A23]" }, "Service Provisions & Specs:"),
            selectedServiceModal.details.map((detail, dIdx) =>
              e('div', { key: dIdx, className: "flex items-start gap-2.5 text-xs sm:text-sm text-[#333]" },
                e(Icon, { name: "Check", className: "w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" }),
                e('span', null, detail)
              )
            )
          ),

          e('div', { className: "pt-2" },
            e('a', {
              href: "#booking",
              onClick: () => setSelectedServiceModal(null),
              className: "block w-full py-3.5 rounded-full bg-[#0F2A23] text-[#D4AF37] font-bold text-center text-xs sm:text-sm shadow-lg hover:bg-[#16382F]"
            }, t.hero.ctaPrimary)
          )
        )
      )
    ),

    // Capacity Section
    e('section', { id: "capacity", className: "py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white" },
      e('div', { className: "max-w-7xl mx-auto" },
        e('div', { className: "text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16" },
          e('div', { className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-bold" },
            e('span', { className: "w-6 sm:w-8 h-[2px] bg-[#D4AF37]" }),
            e('span', null, t.capacity.tag),
            e('span', { className: "w-6 sm:w-8 h-[2px] bg-[#D4AF37]" })
          ),
          e('h2', { className: "text-2xl sm:text-5xl font-bold font-serif text-[#0F2A23]" }, t.capacity.title),
          e('p', { className: "text-xs sm:text-base text-[#555] font-light" }, t.capacity.subtitle)
        ),

        e('div', { className: "flex justify-center mb-8 sm:mb-12" },
          e('div', { className: "p-1 sm:p-1.5 rounded-2xl sm:rounded-full bg-[#F8F9FA] border border-[#D4AF37]/30 flex flex-wrap sm:flex-nowrap justify-center gap-1.5 sm:gap-2 max-w-full" },
            t.capacity.tiers.map((tier) =>
              e('button', {
                key: tier.id,
                onClick: () => setActiveCapacityTab(tier.id),
                className: `px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCapacityTab === tier.id
                    ? 'bg-[#0F2A23] text-[#D4AF37] shadow-lg scale-105'
                    : 'text-[#555] hover:text-[#0F2A23]'
                }`
              }, tier.range)
            )
          )
        ),

        t.capacity.tiers.map((tier) => {
          if (tier.id !== activeCapacityTab) return null;
          return e(motion.div, {
            key: tier.id,
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            className: "max-w-4xl mx-auto p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border-2 border-[#D4AF37] shadow-2xl relative overflow-hidden"
          },
            e('div', { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center" },
              e('div', { className: "lg:col-span-7 space-y-4 sm:space-y-6" },
                e('div', { className: "inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#0F2A23] text-[11px] sm:text-xs font-bold text-[#D4AF37]" }, tier.range),
                e('h3', { className: "text-2xl sm:text-3xl font-bold font-serif text-[#0F2A23]" }, tier.name),
                e('p', { className: "text-xs sm:text-base text-[#444] leading-relaxed" }, tier.desc),
                e('a', {
                  href: "#booking",
                  className: "inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:px-6 sm:py-3 rounded-full bg-[#0F2A23] text-[#D4AF37] font-bold text-xs hover:bg-[#16382F] w-full sm:w-auto"
                },
                  e('span', null, t.hero.ctaPrimary),
                  e(Icon, { name: isRtl ? "ChevronLeft" : "ChevronRight", className: "w-4 h-4" })
                )
              ),
              e('div', { className: "lg:col-span-5 bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm space-y-3 sm:space-y-4" },
                e('h4', { className: "text-[11px] sm:text-xs font-bold text-[#0F2A23] uppercase tracking-wider" }, "What's Included:"),
                tier.includes.map((inc, iIdx) =>
                  e('div', { key: iIdx, className: "flex items-center gap-2.5 text-xs sm:text-sm text-[#333]" },
                    e('div', { className: "w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#0F2A23] shrink-0" },
                      e(Icon, { name: "Check", className: "w-3 h-3 sm:w-3.5 sm:h-3.5" })
                    ),
                    e('span', null, inc)
                  )
                )
              )
            )
          );
        })
      )
    ),

    // Booking Form
    e('section', { id: "booking", className: "py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] border-t border-gray-200" },
      e('div', { className: "max-w-4xl mx-auto" },
        e('div', { className: "text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12" },
          e('div', { className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-bold" },
            e('span', { className: "w-6 sm:w-8 h-[2px] bg-[#D4AF37]" }),
            e('span', null, t.booking.tag),
            e('span', { className: "w-6 sm:w-8 h-[2px] bg-[#D4AF37]" })
          ),
          e('h2', { className: "text-2xl sm:text-5xl font-bold font-serif text-[#0F2A23]" }, t.booking.title),
          e('p', { className: "text-xs sm:text-base text-[#555] font-light max-w-2xl mx-auto" }, t.booking.subtitle)
        ),

        e('div', { className: "p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#D4AF37]/40 shadow-2xl" },
          e('div', { className: "mb-8 sm:mb-10" },
            e('div', { className: "flex justify-between items-center mb-3 sm:mb-4 text-xs font-bold text-[#0F2A23]" },
              e('span', null, `Step ${formStep} of 4`),
              e('span', null, t.booking.steps[formStep - 1])
            ),
            e('div', { className: "w-full bg-gray-100 h-2 sm:h-2.5 rounded-full overflow-hidden" },
              e(motion.div, {
                className: "bg-gradient-to-r from-[#D4AF37] to-[#0F2A23] h-full",
                initial: { width: "25%" },
                animate: { width: `${formStep * 25}%` },
                transition: { duration: 0.3 }
              })
            )
          ),

          e('form', { onSubmit: handleWhatsAppSubmit },
            formStep === 1 && e(motion.div, { initial: { opacity: 0, x: 15 }, animate: { opacity: 1, x: 0 }, className: "space-y-4 sm:space-y-6" },
              e('h3', { className: "text-lg sm:text-xl font-bold font-serif text-[#0F2A23]" }, t.booking.step1Title),
              e('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" },
                t.booking.eventTypes.map((item) =>
                  e('div', {
                    key: item.id,
                    onClick: () => setFormData({ ...formData, eventType: item.id }),
                    className: `cursor-pointer p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all flex items-center gap-3 sm:gap-4 ${
                      formData.eventType === item.id
                        ? 'bg-[#FAF8F5] border-[#0F2A23] shadow-md'
                        : 'bg-white border-gray-200 hover:border-[#D4AF37]'
                    }`
                  },
                    e('div', { className: `w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${formData.eventType === item.id ? 'bg-[#0F2A23] text-[#D4AF37]' : 'bg-gray-100 text-[#0F2A23]'}` },
                      e(Icon, { name: item.icon, className: "w-5 h-5" })
                    ),
                    e('span', { className: "font-bold text-xs sm:text-sm text-[#0F2A23]" }, item.label)
                  )
                )
              )
            ),

            formStep === 2 && e(motion.div, { initial: { opacity: 0, x: 15 }, animate: { opacity: 1, x: 0 }, className: "space-y-4 sm:space-y-6" },
              e('h3', { className: "text-lg sm:text-xl font-bold font-serif text-[#0F2A23]" }, t.booking.step2Title),
              e('div', { className: "space-y-4" },
                e('div', null,
                  e('label', { className: "block text-xs font-bold text-[#0F2A23] mb-2" }, t.booking.dateLabel),
                  e('input', {
                    type: "date",
                    value: formData.eventDate,
                    onChange: (ev) => setFormData({ ...formData, eventDate: ev.target.value }),
                    className: "w-full p-3.5 sm:p-4 rounded-xl bg-[#F8F9FA] border border-gray-300 text-sm sm:text-base text-[#1A1A1A] focus:border-[#0F2A23] outline-none"
                  })
                ),
                e('div', null,
                  e('label', { className: "block text-xs font-bold text-[#0F2A23] mb-2" }, t.booking.locationLabel),
                  e('select', {
                    value: formData.location,
                    onChange: (ev) => setFormData({ ...formData, location: ev.target.value }),
                    className: "w-full p-3.5 sm:p-4 rounded-xl bg-[#F8F9FA] border border-gray-300 text-sm sm:text-base text-[#1A1A1A] focus:border-[#0F2A23] outline-none"
                  },
                    t.booking.emirates.map((em, idx) => e('option', { key: idx, value: em }, em))
                  )
                )
              )
            ),

            formStep === 3 && e(motion.div, { initial: { opacity: 0, x: 15 }, animate: { opacity: 1, x: 0 }, className: "space-y-4 sm:space-y-6" },
              e('h3', { className: "text-lg sm:text-xl font-bold font-serif text-[#0F2A23]" }, t.booking.step3Title),
              e('div', { className: "space-y-4" },
                e('div', null,
                  e('label', { className: "block text-xs font-bold text-[#0F2A23] mb-2" }, t.booking.capacityLabel),
                  e('div', { className: "grid grid-cols-3 gap-2 sm:gap-3" },
                    t.booking.capacityOptions.map((cap, cIdx) =>
                      e('button', {
                        type: "button",
                        key: cIdx,
                        onClick: () => setFormData({ ...formData, capacity: cap }),
                        className: `p-2.5 sm:p-3 rounded-xl border text-[11px] sm:text-xs font-bold transition-all ${
                          formData.capacity === cap
                            ? 'bg-[#0F2A23] text-[#D4AF37] border-[#0F2A23]'
                            : 'bg-[#F8F9FA] text-[#555] border-gray-200'
                        }`
                      }, cap)
                    )
                  )
                ),
                e('div', { className: "pt-2 sm:pt-4" },
                  e('label', { className: "block text-xs font-bold text-[#0F2A23] mb-2" }, t.booking.addonsLabel),
                  e('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3" },
                    t.booking.addons.map((addon) => {
                      const checked = formData.addons.includes(addon.id);
                      return e('div', {
                        key: addon.id,
                        onClick: () => {
                          const newAddons = checked
                            ? formData.addons.filter(a => a !== addon.id)
                            : [...formData.addons, addon.id];
                          setFormData({ ...formData, addons: newAddons });
                        },
                        className: `cursor-pointer p-3.5 sm:p-4 rounded-xl border transition-all flex items-center gap-3 ${
                          checked ? 'bg-[#FAF8F5] border-[#0F2A23]' : 'bg-[#F8F9FA] border-gray-200'
                        }`
                      },
                        e('div', { className: `w-5 h-5 rounded flex items-center justify-center border shrink-0 ${checked ? 'bg-[#0F2A23] border-[#0F2A23] text-[#D4AF37]' : 'border-gray-300'}` },
                          checked && e(Icon, { name: "Check", className: "w-3.5 h-3.5" })
                        ),
                        e('span', { className: "text-xs font-bold text-[#0F2A23]" }, addon.label)
                      );
                    })
                  )
                )
              )
            ),

            formStep === 4 && e(motion.div, { initial: { opacity: 0, x: 15 }, animate: { opacity: 1, x: 0 }, className: "space-y-4 sm:space-y-6" },
              e('h3', { className: "text-lg sm:text-xl font-bold font-serif text-[#0F2A23]" }, t.booking.step4Title),
              e('div', { className: "space-y-3.5 sm:space-y-4" },
                e('div', null,
                  e('label', { className: "block text-xs font-bold text-[#0F2A23] mb-1" }, t.booking.nameLabel),
                  e('input', {
                    type: "text",
                    placeholder: t.booking.namePlaceholder,
                    value: formData.name,
                    onChange: (ev) => setFormData({ ...formData, name: ev.target.value }),
                    className: "w-full p-3.5 sm:p-4 rounded-xl bg-[#F8F9FA] border border-gray-300 text-sm text-[#1A1A1A] outline-none"
                  })
                ),
                e('div', null,
                  e('label', { className: "block text-xs font-bold text-[#0F2A23] mb-1" }, t.booking.phoneLabel),
                  e('input', {
                    type: "text",
                    placeholder: t.booking.phonePlaceholder,
                    value: formData.phone,
                    onChange: (ev) => setFormData({ ...formData, phone: ev.target.value }),
                    className: "w-full p-3.5 sm:p-4 rounded-xl bg-[#F8F9FA] border border-gray-300 text-sm text-[#1A1A1A] outline-none"
                  })
                ),
                e('div', null,
                  e('label', { className: "block text-xs font-bold text-[#0F2A23] mb-1" }, t.booking.notesLabel),
                  e('textarea', {
                    rows: "3",
                    placeholder: t.booking.notesPlaceholder,
                    value: formData.notes,
                    onChange: (ev) => setFormData({ ...formData, notes: ev.target.value }),
                    className: "w-full p-3.5 sm:p-4 rounded-xl bg-[#F8F9FA] border border-gray-300 text-sm text-[#1A1A1A] outline-none"
                  })
                )
              )
            ),

            e('div', { className: "pt-6 sm:pt-8 flex items-center justify-between gap-3" },
              formStep > 1 ? e('button', {
                type: "button",
                onClick: () => setFormStep(formStep - 1),
                className: "px-5 py-3 rounded-full border border-gray-300 text-[#0F2A23] text-xs font-bold hover:bg-gray-100 active:scale-95"
              }, t.booking.btnBack) : e('div'),

              formStep < 4 ? e('button', {
                type: "button",
                onClick: () => setFormStep(formStep + 1),
                className: "px-7 py-3.5 rounded-full bg-[#0F2A23] text-[#D4AF37] font-bold text-xs hover:bg-[#16382F] active:scale-95"
              }, t.booking.btnNext) : e('button', {
                type: "submit",
                className: "w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
              },
                e(Icon, { name: "MessageCircle", className: "w-5 h-5" }),
                e('span', null, t.booking.btnSubmitWhatsApp)
              )
            )
          )
        )
      )
    ),

    // Footer
    e('footer', { id: "contact", className: "py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0F2A23] text-[#FAF8F5]" },
      e('div', { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-12 border-b border-white/10" },
        e('div', { className: "md:col-span-5 space-y-3 sm:space-y-4" },
          e('div', { className: "flex items-center gap-3" },
            e(DallahLogo, { className: "w-10 h-10 sm:w-12 sm:h-12" }),
            e('div', null,
              e('h3', { className: "text-xl sm:text-2xl font-bold font-serif text-[#F7E7A9]" }, t.nav.brandName),
              e('p', { className: "text-[10px] sm:text-xs text-[#D4AF37]" }, t.nav.brandSub)
            )
          ),
          e('p', { className: "text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed max-w-sm" }, t.contact.tagline)
        ),

        e('div', { className: "md:col-span-4 space-y-3 sm:space-y-4" },
          e('h4', { className: "text-xs sm:text-sm font-bold font-serif text-[#D4AF37] uppercase tracking-wider" }, t.contact.title),
          e('div', { className: "space-y-2.5 sm:space-y-3" },
            e('div', { className: "flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10" },
              e('div', null,
                e('div', { className: "text-[11px] text-[#FAF8F5]/60" }, t.contact.bookingDesk),
                e('div', { className: "text-xs sm:text-sm font-bold text-[#F7E7A9]" }, "+971 50 667 2259")
              ),
              e('button', {
                onClick: () => copyToClipboard('+971506672259'),
                className: "p-2 text-[#D4AF37] hover:bg-white/10 rounded-lg active:scale-95"
              }, e(Icon, { name: "Copy", className: "w-4 h-4" }))
            ),
            e('div', { className: "flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10" },
              e('div', null,
                e('div', { className: "text-[11px] text-[#FAF8F5]/60" }, t.contact.vipLine),
                e('div', { className: "text-xs sm:text-sm font-bold text-[#D4AF37]" }, "+971 55 559 3389")
              ),
              e('button', {
                onClick: () => copyToClipboard('+971555593389'),
                className: "p-2 text-[#D4AF37] hover:bg-white/10 rounded-lg active:scale-95"
              }, e(Icon, { name: "Copy", className: "w-4 h-4" }))
            ),
            e('a', {
              href: "https://instagram.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-pink-500/30 hover:border-pink-500/60 transition-colors"
            },
              e(Icon, { name: "Instagram", className: "w-5 h-5 text-pink-400" }),
              e('span', { className: "text-xs font-semibold text-[#FAF8F5]" }, t.contact.instagram)
            )
          )
        ),

        e('div', { className: "md:col-span-3 space-y-3 sm:space-y-4" },
          e('h4', { className: "text-xs sm:text-sm font-bold font-serif text-[#D4AF37] uppercase tracking-wider" }, t.contact.hoursTitle),
          e('div', { className: "space-y-2.5 text-xs text-[#FAF8F5]/80" },
            e('div', { className: "flex items-center gap-2" },
              e(Icon, { name: "Clock", className: "w-4 h-4 text-[#D4AF37]" }),
              e('span', null, t.contact.hoursVal)
            ),
            e('div', { className: "flex items-start gap-2" },
              e(Icon, { name: "MapPin", className: "w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" }),
              e('span', null, t.contact.locationVal)
            )
          )
        )
      ),

      e('div', { className: "max-w-7xl mx-auto pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#FAF8F5]/50 gap-3 sm:gap-4 text-center sm:text-start" },
        e('div', null, t.contact.copyright),
        e('div', { className: "flex items-center justify-center gap-4 sm:gap-6" },
          e('a', { href: "#about", className: "hover:text-[#D4AF37]" }, t.nav.about),
          e('a', { href: "#services", className: "hover:text-[#D4AF37]" }, t.nav.services),
          e('a', { href: "#booking", className: "hover:text-[#D4AF37]" }, t.nav.booking)
        )
      )
    ),

    // Floating Action Buttons
    e('div', { className: "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3" },
      e(AnimatePresence, null,
        showBackToTop && e(motion.button, {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
          onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
          className: "p-2.5 sm:p-3 rounded-full bg-[#0F2A23] border border-[#D4AF37] text-[#D4AF37] shadow-xl hover:bg-[#D4AF37] hover:text-[#0F2A23] transition-colors active:scale-95"
        },
          e(Icon, { name: "ArrowUp", className: "w-4 h-4 sm:w-5 sm:h-5" })
        )
      ),

      e('a', {
        href: "https://wa.me/971506672259",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "relative p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform group flex items-center justify-center"
      },
        e('span', { className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" }),
        e(Icon, { name: "MessageCircle", className: "w-6 h-6 sm:w-7 sm:h-7 relative z-10" })
      )
    )
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(e(App));
}
