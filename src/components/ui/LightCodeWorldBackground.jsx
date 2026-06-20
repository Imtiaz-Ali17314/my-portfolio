import { useEffect, useRef } from "react";
import * as THREE from "three";

// List of floating code fragments, symbols, and keywords
const CODE_ELEMENTS = [
  // Numbers & Variables
  "0", "1", "x", "y", "i", "j", "k", "n", "m", "a", "b", "c",
  "true", "false", "null", "undefined", "NaN", "Infinity",
  
  // Keywords
  "function()", "const", "let", "var", "return", "import", "export",
  "class", "extends", "super", "this", "new", "delete", "void",
  "typeof", "instanceof", "in", "of", "with", "yield", "await",
  
  // Operators
  "{}", "[]", "()", "<>", "=>", "&&", "||", "===", "==", "!=", "!==",
  "++", "--", "+=", "-=", "*=", "/=", "%=", "**", "??", "?.",
  "$#@", "*", "&", "|", "^", "%", "!", "?", "~", ">>", "<<", ">>>",
  
  // Async & Functional
  "async", "await", "map", "filter", "reduce", "forEach", "sort",
  "find", "findIndex", "some", "every", "includes", "push", "pop",
  "shift", "unshift", "splice", "slice", "concat", "join", "split",
  
  // Promises & APIs
  "Promise", "fetch", "axios", "async/await", "callback", "event",
  "eventListener", "setTimeout", "setInterval", "requestAnimationFrame",
  
  // DOM & Browser
  "console.log", "console.error", "console.warn", "console.table",
  "document", "window", "location", "history", "localStorage",
  "sessionStorage", "navigator", "screen", "alert", "confirm", "prompt",
  
  // React & JSX
  "<div />", "<span />", "<p>", "<section>", "<header>", "<footer>",
  "<main>", "<article>", "<nav>", "<aside>", "<button>", "<input>",
  "React", "Vue", "Angular", "Svelte", "Next.js", "Nuxt.js",
  "JSX", "props", "state", "hooks", "useState", "useEffect",
  "useContext", "useReducer", "useCallback", "useMemo", "useRef",
  
  // Backend & APIs
  "api", "REST", "GraphQL", "WebSocket", "gRPC",
  "GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS",
  
  // Databases
  "SQL", "NoSQL", "MongoDB", "PostgreSQL", "MySQL", "Redis",
  "query", "schema", "model", "migration", "seed", "transaction",
  
  // DevOps & Tools
  "git commit", "git push", "git pull", "git merge", "git rebase",
  "npm run dev", "npm install", "npm start", "npm build",
  "yarn add", "yarn start", "yarn build",
  "docker", "kubernetes", "AWS", "Azure", "GCP",
  "CI/CD", "deploy", "build", "test", "debug", "monitor",
  
  // Data Structures & Algorithms
  "array", "object", "string", "number", "boolean", "symbol", "bigint",
  "stack", "queue", "linkedList", "tree", "graph", "hashMap",
  "set", "map", "weakSet", "weakMap",
  "sorting", "searching", "recursion", "dynamic", "greedy",
  "Big-O", "O(1)", "O(n)", "O(log n)", "O(n^2)",
  
  // Design Patterns
  "singleton", "factory", "observer", "mediator", "decorator",
  "adapter", "proxy", "strategy", "state", "command",
  
  // Testing
  "test", "spec", "expect", "assert", "mock", "stub", "spy",
  "Jest", "Mocha", "Chai", "Cypress", "Selenium",
  
  // Miscellaneous
  "TODO", "FIXME", "HACK", "NOTE",
  "undefined", "null", "NaN", "Infinity",
  "arguments", "eval", "strict mode", "use strict",
  "package.json", "tsconfig.json", "webpack", "babel", "vite"
];

// Helper to get random item
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const LightCodeWorldBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- WebGL Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Camera starting position
    camera.position.set(0, 48, 125);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true // allows CSS light background (#fcfaff) to shine through
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xdddddd, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x6366f1, 1.5, 300, 1.0); // Indigo point light
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // --- Floating Code Keyword Sprites ---
    const createCharTexture = (char, color) => {
      const textCanvas = document.createElement("canvas");
      textCanvas.width = 256;
      textCanvas.height = 64;
      const textCtx = textCanvas.getContext("2d");
      textCtx.clearRect(0, 0, 256, 64);
      textCtx.font = "bold 26px 'Fira Code', 'Courier New', monospace";
      textCtx.fillStyle = color;
      textCtx.textAlign = "center";
      textCtx.textBaseline = "middle";
      textCtx.fillText(char, 128, 32);
      const tex = new THREE.CanvasTexture(textCanvas);
      return tex;
    };

    // Pre-cache textures using light-mode safe coding colors
    const textureCache = [];
    const textColors = ["#1e179c", "#461d8d", "#08534d", "#252c35"]; // indigo, violet, teal, slate
    CODE_ELEMENTS.forEach((char) => {
      textColors.forEach((color) => {
        textureCache.push(createCharTexture(char, color));
      });
    });

    const floatingCodeElements = [];
    const codeCount = 135;

    for (let i = 0; i < codeCount; i++) {
      const tex = randomItem(textureCache);
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        opacity: 0.45,
        sizeAttenuation: true
      });

      const sprite = new THREE.Sprite(mat);
      sprite.position.set(
        (Math.random() - 0.5) * 320,
        (Math.random() - 0.5) * 180,
        (Math.random() - 0.5) * 320
      );

      const sizeWidth = 12 + Math.random() * 8;
      sprite.scale.set(sizeWidth, sizeWidth / 4, 1);
      scene.add(sprite);

      floatingCodeElements.push({
        sprite,
        mat,
        speedX: (Math.random() - 0.5) * 0.03,
        speedY: (Math.random() - 0.5) * 0.03,
        speedZ: (Math.random() - 0.5) * 0.04 - 0.1, // slow forward drift
        baseOpacity: 0.35 + Math.random() * 0.22
      });
    }

    // --- Interactive Mouse Parallax ---
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

      // Drift floating code keywords
      floatingCodeElements.forEach((p) => {
        p.sprite.position.x += p.speedX;
        p.sprite.position.y += p.speedY;
        p.sprite.position.z += p.speedZ;

        // Wrap boundaries
        if (p.sprite.position.z < -200) p.sprite.position.z = 200;
        if (p.sprite.position.x < -180) p.sprite.position.x = 180;
        if (p.sprite.position.x > 180) p.sprite.position.x = -180;
        if (p.sprite.position.y < -100) p.sprite.position.y = 100;
        if (p.sprite.position.y > 100) p.sprite.position.y = -100;

        // Fade elements close to the camera to prevent clipping
        const dist = camera.position.distanceTo(p.sprite.position);
        if (dist < 40) {
          p.mat.opacity = Math.max(0, ((dist - 10) / 30) * p.baseOpacity);
        } else {
          p.mat.opacity = p.baseOpacity;
        }
      });

      // Smooth camera parallax drift
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

      // Clean up floating code elements
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

export default LightCodeWorldBackground;
