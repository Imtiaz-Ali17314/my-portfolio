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
    this.size = 5 + Math.random() * 8;                  // petal radius (px)
    this.petalCount = 5 + Math.floor(Math.random() * 3); // 5-7 petals
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.05;

    // ── Floating upward physics ──────────────────────────────────────────
    this.vx = (Math.random() - 0.5) * 0.9;              // gentle horizontal sway
    this.vy = -0.5 - Math.random() * 1.2;               // float upward
    this.gravity = -0.008 - Math.random() * 0.012;       // slow upward acceleration
    // ─────────────────────────────────────────────────────────────────────
    this.alpha = 1;
    this.decay = 0.008 + Math.random() * 0.008;         // Fades out in 1 - 2 seconds
    this.scale = 1;
    this.scaleDecay = 0.004 + Math.random() * 0.004;
    // sparkle center
    this.centerColor = isDark ? "#ffffff" : "#fffbf0";
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity; // floats upward (negative gravity)
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
  // Track cursor position, velocities, and idle timer
  const mouseRef = useRef({
    x: -999,
    y: -999,
    lastX: -999,
    lastY: -999,
    speed: 0,
    lastMoveTime: 0
  });
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

    // Track mouse & touch coordinates + speed
    const onMouseMove = (e) => {
      const m = mouseRef.current;
      m.lastX = m.x;
      m.lastY = m.y;
      m.x = e.clientX;
      m.y = e.clientY;

      if (m.lastX !== -999) {
        const dx = m.x - m.lastX;
        const dy = m.y - m.lastY;
        m.speed = Math.sqrt(dx * dx + dy * dy);
      }
      m.lastMoveTime = Date.now();
    };

    const onTouchMove = (e) => {
      const t = e.touches[0];
      const m = mouseRef.current;
      m.lastX = m.x;
      m.lastY = m.y;
      m.x = t.clientX;
      m.y = t.clientY;

      if (m.lastX !== -999) {
        const dx = m.x - m.lastX;
        const dy = m.y - m.lastY;
        m.speed = Math.sqrt(dx * dx + dy * dy);
      }
      m.lastMoveTime = Date.now();
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    // Spawn flowers proportional to movement speed, capped at idle limit (150ms)
    const spawnBurst = () => {
      const m = mouseRef.current;
      const timeSinceLastMove = Date.now() - m.lastMoveTime;
      
      // Stop creating flowers if mouse has stopped moving (e.g. idle for 150ms)
      if (timeSinceLastMove > 150) return;

      const speed = m.speed || 0;
      // Faster mouse movement results in more flowers spawning simultaneously
      const count = Math.min(3, Math.floor(speed / 10) + 1);

      for (let i = 0; i < count; i++) {
        // Slight dispersion offset for natural growth look
        const offsetX = (Math.random() - 0.5) * 12;
        const offsetY = (Math.random() - 0.5) * 12;
        particlesRef.current.push(new Flower(m.x + offsetX, m.y + offsetY, isDarkRef.current));
      }
    };

    // Animation loop
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Decelerate speed value on each frame when movement slows
      mouseRef.current.speed *= 0.9;

      frameCountRef.current++;
      // Check spawning every 3 frames for a rich but performant flow
      if (frameCountRef.current % 3 === 0) {
        spawnBurst();
      }

      // Update and draw particles; cull dead ones
      particlesRef.current = particlesRef.current.filter((p) => {
        p.update();
        p.draw(ctx);
        return !p.dead;
      });

      // Cap total alive particles to optimize CPU load
      if (particlesRef.current.length > 250) {
        particlesRef.current.splice(0, particlesRef.current.length - 250);
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
