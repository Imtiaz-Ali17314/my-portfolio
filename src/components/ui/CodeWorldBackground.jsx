import { useEffect, useRef } from "react";
import * as THREE from "three";

// List of floating code fragments, symbols, and numbers
const CODE_ELEMENTS = [
  // Core JS Keywords & Statements
  "const", "let", "var", "return", "import", "export",
  "class", "extends", "super", "function()", "typeof", "instanceof", "await", "async",
  "try { ... } catch", "throw new Error()", "if (condition)", "for (let i = 0; i < n; i++)",
  "while (active)", "switch (action.type)", "case 'SUCCESS':",

  // React & Web Frameworks
  "useState()", "useEffect()", "useContext()", "useRef()", "useMemo()", "useCallback()",
  "useLayoutEffect()", "useTransition()", "useDeferredValue()",
  "<div />", "<span />", "<button />", "<input />", "<section />", "<header />", "<footer />",
  "<Layout />", "<Provider />", "<Routes />", "<Route />", "<Outlet />",
  "import React from 'react'", "export default Component", "Vite + React", "Framer Motion",
  "Tailwind CSS", "Three.js WebGL", "Bento Grid Design", "Glassmorphic UI",

  // Async & Fetching
  "Promise", "new Promise()", "fetch()", "axios", "axios.get()", "axios.post()",
  "setTimeout()", "setInterval()", "requestAnimationFrame()",
  "Promise.all()", "Promise.resolve()", "Promise.reject()",

  // Array & Object Methods
  ".map()", ".filter()", ".reduce()", ".forEach()", ".find()", ".includes()",
  "Object.keys()", "Object.values()", "Object.entries()",
  "JSON.stringify()", "JSON.parse()", "Math.random()", "Math.floor()",

  // DOM & Browser APIs
  "console.log()", "console.error()", "console.warn()", "document", "window",
  "localStorage", "sessionStorage", "window.addEventListener()", "document.querySelector()",

  // Node.js & Express (Backend)
  "module.exports =", "require('path')", "fs.readFileSync()", "path.join(__dirname, ...)",
  "app.get()", "app.post()", "app.use()", "next()", "res.status(200)", "res.json()",
  "process.env.NODE_ENV", "GraphQL", "WebSocket", "MongoDB", "PostgreSQL", "Redis",

  // Git & CLI commands
  "git push", "git commit -m '...'", "git pull", "git branch", "git checkout",
  "git status", "git clone", "git diff", "git merge", "git rebase",

  // Configs & Project Files
  "npm run dev", "npm install", "npm run build", "npm run test", "docker", "kubernetes",
  "package.json", "tsconfig.json", "eslint.config.js", "vite.config.js",
  "tailwind.config.js", "postcss.config.js", "README.md", "index.html"
];

// Helper to get random item
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const CodeWorldBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- WebGL Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Camera starting position looking down slightly onto the solar system
    camera.position.set(0, 48, 125);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true // allows CSS background color to shine through
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x444444);
    scene.add(ambientLight);

    // Soft cybernetic point light — dim enough to not wash out content
    const coreLight = new THREE.PointLight(0x06b6d4, 1.2, 300, 1.0);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // --- Twinkling Starfield ---
    const starCount = 1000;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starOriginalOpacities = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      // Distribute stars in a large bounding box
      starPositions[i * 3] = (Math.random() - 0.5) * 700;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 550;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 700;
      starOriginalOpacities[i] = 0.3 + Math.random() * 0.7;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));

    // Custom material to allow twinkling via opacity oscillation
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.1,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // --- Floating Matrix Code Elements ---
    // Helper to generate canvas texture for text
    const createCharTexture = (char, color) => {
      const textCanvas = document.createElement("canvas");
      textCanvas.width = 128;
      textCanvas.height = 32;
      const textCtx = textCanvas.getContext("2d");
      textCtx.clearRect(0, 0, 128, 32);
      textCtx.font = "bold 16px 'Courier New', monospace";
      textCtx.fillStyle = color;
      textCtx.textAlign = "center";
      textCtx.textBaseline = "middle";
      textCtx.fillText(char, 64, 16);
      const tex = new THREE.CanvasTexture(textCanvas);
      return tex;
    };

    // Pre-cache textures (half green, half cyan)
    const textureCache = [];
    const textColors = ["#10b981", "#06b6d4"]; // green-500, cyan-500
    CODE_ELEMENTS.forEach((char) => {
      textColors.forEach((color) => {
        textureCache.push(createCharTexture(char, color));
      });
    });

    const floatingCodeElements = [];
    const codeCount = 180;

    for (let i = 0; i < codeCount; i++) {
      const tex = randomItem(textureCache);
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        opacity: 0.65,
        sizeAttenuation: true
      });

      const sprite = new THREE.Sprite(mat);
      // Random position spread in 3D box
      sprite.position.set(
        (Math.random() - 0.5) * 350,
        (Math.random() - 0.5) * 180 - 10,
        (Math.random() - 0.5) * 350
      );

      const sizeWidth = 11 + Math.random() * 8;
      sprite.scale.set(sizeWidth, sizeWidth / 4, 1);
      scene.add(sprite);

      floatingCodeElements.push({
        sprite,
        mat,
        speedX: (Math.random() - 0.5) * 0.04,
        speedY: (Math.random() - 0.5) * 0.04,
        speedZ: (Math.random() - 0.5) * 0.04 - 0.12, // general slow forward drift
        baseOpacity: 0.35 + Math.random() * 0.35
      });
    }

    // --- Interactive Parallax Mouse Tracker ---
    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseRef.current.x = (e.clientX - cx) / cx;
      mouseRef.current.y = (e.clientY - cy) / cy;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // --- Resize handler ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // --- Animation Loop ---
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // (Core and Solar System animation removed)

      // Drift Floating Matrix Code
      floatingCodeElements.forEach((p) => {
        p.sprite.position.x += p.speedX;
        p.sprite.position.y += p.speedY;
        p.sprite.position.z += p.speedZ;

        // Boundaries Wrapping
        if (p.sprite.position.z < -200) p.sprite.position.z = 200;
        if (p.sprite.position.x < -180) p.sprite.position.x = 180;
        if (p.sprite.position.x > 180) p.sprite.position.x = -180;
        if (p.sprite.position.y < -100) p.sprite.position.y = 100;
        if (p.sprite.position.y > 100) p.sprite.position.y = -100;

        // Fade elements that are extremely close to prevent clipping
        const dist = camera.position.distanceTo(p.sprite.position);
        if (dist < 40) {
          p.mat.opacity = Math.max(0, ((dist - 10) / 30) * p.baseOpacity);
        } else {
          p.mat.opacity = p.baseOpacity;
        }
      });

      // Twinkle Stars
      starMat.opacity = 0.45 + Math.sin(Date.now() * 0.001) * 0.25;
      // Rotate the entire starfield slowly
      starField.rotation.y += 0.0001;
      starField.rotation.x += 0.00004;

      // Smooth Camera Parallax Drift
      const targetCamX = mouseRef.current.x * 35;
      const targetCamY = 48 + mouseRef.current.y * 24;
      camera.position.x += (targetCamX - camera.position.x) * 0.045;
      camera.position.y += (targetCamY - camera.position.y) * 0.045;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup resources on unmount ---
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Clean up Three.js Objects
      scene.remove(starField);
      starGeo.dispose();
      starMat.dispose();

      // (Core and Solar System resources cleanup removed)

      floatingCodeElements.forEach((p) => {
        scene.remove(p.sprite);
        p.mat.dispose();
      });

      textureCache.forEach((t) => t.dispose());

      renderer.dispose();
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
        zIndex: 0 // Behind content
      }}
      aria-hidden="true"
    />
  );
};

export default CodeWorldBackground;
