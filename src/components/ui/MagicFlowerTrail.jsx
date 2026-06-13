import { useEffect, useRef } from "react";

// ─── Petal Color Palettes (Light & Dark Mode) ────────────────────────────────
const LIGHT_PALETTES = [
  ["#c084fc", "#f0abfc", "#e879f9"], // violet-pink orchid
  ["#f9a8d4", "#fb7185", "#fda4af"], // rose-coral
  ["#67e8f9", "#38bdf8", "#93c5fd"], // sky-cyan
  ["#fde68a", "#fbbf24", "#f59e0b"], // gold-amber
  ["#a5f3fc", "#6ee7b7", "#86efac"], // mint
];

const DARK_PALETTES = [
  ["#a78bfa", "#c084fc", "#e879f9"], // electric violet
  ["#f472b6", "#fb7185", "#f9a8d4"], // neon pink
  ["#22d3ee", "#67e8f9", "#a5f3fc"], // neon cyan
  ["#fbbf24", "#fde68a", "#fef3c7"], // starlight gold
  ["#34d399", "#6ee7b7", "#a7f3d0"], // aurora green
];

// ─── Particle Class ───────────────────────────────────────────────────────────
class Flower {
  constructor(x, y, isDark) {
    this.x = x;
    this.y = y;
    const palettes = isDark ? DARK_PALETTES : LIGHT_PALETTES;
    this.palette = palettes[Math.floor(Math.random() * palettes.length)];
    this.size = 4 + Math.random() * 9;          // petal radius (px)
    this.petalCount = 5 + Math.floor(Math.random() * 4); // 5-8 petals
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.08;

    // ── Full 360° burst: random angle + random speed ──────────────────────
    const angle = Math.random() * Math.PI * 2;          // any direction
    const speed = 1.8 + Math.random() * 3.2;            // burst magnitude
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.gravity = 0.055 + Math.random() * 0.04;        // gentle pull down
    // ─────────────────────────────────────────────────────────────────────
    this.alpha = 1;
    this.decay = 0.012 + Math.random() * 0.01;
    this.scale = 1;
    this.scaleDecay = 0.003 + Math.random() * 0.002;
    // sparkle center
    this.centerColor = isDark ? "#ffffff" : "#fffbf0";
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.rotation += this.rotationSpeed;
    this.alpha -= this.decay;
    this.scale -= this.scaleDecay;
    if (this.scale < 0) this.scale = 0;
  }

  draw(ctx) {
    if (this.alpha <= 0 || this.scale <= 0) return;

    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.scale(this.scale, this.scale);

    const angleStep = (Math.PI * 2) / this.petalCount;

    // Draw petals
    for (let i = 0; i < this.petalCount; i++) {
      const angle = i * angleStep;
      const px = Math.cos(angle) * this.size;
      const py = Math.sin(angle) * this.size;

      ctx.beginPath();
      ctx.ellipse(px * 0.5, py * 0.5, this.size * 0.45, this.size * 0.28, angle, 0, Math.PI * 2);

      // Pick alternating colors from palette
      const colorIdx = i % this.palette.length;
      const gradient = ctx.createRadialGradient(px * 0.4, py * 0.4, 0, px * 0.5, py * 0.5, this.size * 0.5);
      gradient.addColorStop(0, this.palette[colorIdx] + "ff");
      gradient.addColorStop(1, this.palette[colorIdx] + "44");
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // Draw luminous center dot
    ctx.beginPath();
    ctx.arc(0, 0, this.size * 0.22, 0, Math.PI * 2);
    const centerGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 0.22);
    centerGrad.addColorStop(0, this.centerColor);
    centerGrad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = centerGrad;
    ctx.fill();

    ctx.restore();
  }

  get dead() {
    return this.alpha <= 0;
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
const MagicFlowerTrail = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -999, y: -999, moved: false });
  const rafRef = useRef(null);
  const frameCountRef = useRef(0);
  const isDarkRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas to full viewport
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Detect dark mode
    const updateDarkMode = () => {
      isDarkRef.current = document.documentElement.classList.contains("dark");
    };
    updateDarkMode();
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Track mouse
    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.moved = true;
    };
    const onTouchMove = (e) => {
      const t = e.touches[0];
      mouseRef.current.x = t.clientX;
      mouseRef.current.y = t.clientY;
      mouseRef.current.moved = true;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    // Spawn flowers on each moved frame (throttled to every 2 frames)
    const spawnBurst = () => {
      const { x, y, moved } = mouseRef.current;
      if (!moved) return;
      const count = 1 + Math.floor(Math.random() * 2); // 1-2 per frame burst
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(new Flower(x, y, isDarkRef.current));
      }
    };

    // Animation loop
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      frameCountRef.current++;
      if (frameCountRef.current % 4 === 0) {
        spawnBurst();
      }

      // Update and draw particles; cull dead ones
      particlesRef.current = particlesRef.current.filter((p) => {
        p.update();
        p.draw(ctx);
        return !p.dead;
      });

      // Cap total alive particles
      if (particlesRef.current.length > 300) {
        particlesRef.current.splice(0, particlesRef.current.length - 300);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 99998,
      }}
      aria-hidden="true"
    />
  );
};

export default MagicFlowerTrail;
