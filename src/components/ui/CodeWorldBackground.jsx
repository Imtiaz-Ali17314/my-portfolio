import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// List of floating code fragments, symbols, and numbers
const CODE_ELEMENTS = [
  "0", "1", "x", "y", "i", "j", "k",
  "function()", "const", "let", "return", "import", "export",
  "{}", "[]", "()", "<>", "=>", "&&", "||", "===", "++", "--",
  "$#@", "*", "&", "|", "^", "%", "!", "?",
  "class", "async", "await", "map", "filter", "reduce", "Promise", "fetch",
  "console.log", "document", "window",
  "<div />", "<span />", "<p>", "<section>", "React", "Vue", "api"
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

    // --- Digital Code Core (replaces bright sun) ---
    // Outer wireframe sphere — green digital grid
    const coreGeo = new THREE.SphereGeometry(7.5, 12, 10);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Tiny inner cyan orb at absolute center
    const innerGeo = new THREE.SphereGeometry(3.2, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.28
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Gimbal ring 1 — green torus on Y-axis
    const ring1Geo = new THREE.TorusGeometry(9.5, 0.18, 8, 80);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.55
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 2;
    scene.add(ring1Mesh);

    // Gimbal ring 2 — cyan torus on X-axis
    const ring2Geo = new THREE.TorusGeometry(9.5, 0.18, 8, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.45
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 2;
    scene.add(ring2Mesh);

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

    // --- Solar System ---
    // Emissive Sun
    const sunGeo = new THREE.SphereGeometry(8.5, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0x82652F}); // Warm orange sun
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sunMesh);

    // Subtle Outer Sun Glow Layer
    const sunGlowGeo = new THREE.SphereGeometry(10.2, 32, 32);
    const sunGlowMat = new THREE.MeshBasicMaterial({
      color: 0x82652F,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending
    });
    const sunGlowMesh = new THREE.Mesh(sunGlowGeo, sunGlowMat);
    scene.add(sunGlowMesh);

    // Planets (Geometries and Materials)
    const planetGeos = [
      new THREE.SphereGeometry(1.8, 24, 24), // Inner planet
      new THREE.SphereGeometry(2.8, 24, 24), // Mid planet
      new THREE.SphereGeometry(2.3, 24, 24)  // Outer planet
    ];

    const planetMats = [
      new THREE.MeshStandardMaterial({
        color: 0x06b6d4, // Cyan
        roughness: 0.45,
        metalness: 0.15,
        emissive: 0x001824
      }),
      new THREE.MeshStandardMaterial({
        color: 0xd946ef, // Purple
        roughness: 0.5,
        metalness: 0.1,
        emissive: 0x1f0028
      }),
      new THREE.MeshStandardMaterial({
        color: 0x10b981, // Emerald Green
        roughness: 0.6,
        metalness: 0.12,
        emissive: 0x002010
      })
    ];

    // Orbit paths
    const orbitLines = [];
    const createOrbitLine = (radius) => {
      const points = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: 0x4f46e5, // indigo
        transparent: true,
        opacity: 0.18
      });
      const line = new THREE.Line(geo, mat);
      scene.add(line);
      orbitLines.push({ geo, mat, line });
    };

    createOrbitLine(45);
    createOrbitLine(72);
    createOrbitLine(105);

    const planets = [
      { mesh: new THREE.Mesh(planetGeos[0], planetMats[0]), radius: 45, speed: 0.0042, angle: Math.random() * Math.PI * 2 },
      { mesh: new THREE.Mesh(planetGeos[1], planetMats[1]), radius: 72, speed: 0.0028, angle: Math.random() * Math.PI * 2 },
      { mesh: new THREE.Mesh(planetGeos[2], planetMats[2]), radius: 105, speed: 0.0016, angle: Math.random() * Math.PI * 2 }
    ];
    planets.forEach(p => scene.add(p.mesh));

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
    const codeCount = 80;

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

      // Animate Digital Code Core
      coreMesh.rotation.y += 0.0015;
      coreMesh.rotation.x += 0.0008;
      innerMesh.rotation.y -= 0.002;
      ring1Mesh.rotation.z += 0.004;  // spin green ring
      ring2Mesh.rotation.x += 0.003;  // spin cyan ring in opposite feel

      // Orbit Planets (Slow peaceful speeds)
      planets.forEach((p) => {
        p.angle += p.speed * 0.65; // Slow down
        p.mesh.position.x = Math.cos(p.angle) * p.radius;
        p.mesh.position.z = Math.sin(p.angle) * p.radius;
        p.mesh.rotation.y += 0.008; // self spinning
      });

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

      // Dispose digital core elements
      scene.remove(coreMesh);
      coreGeo.dispose();
      coreMat.dispose();

      scene.remove(innerMesh);
      innerGeo.dispose();
      innerMat.dispose();

      scene.remove(ring1Mesh);
      ring1Geo.dispose();
      ring1Mat.dispose();

      scene.remove(ring2Mesh);
      ring2Geo.dispose();
      ring2Mat.dispose();

      planets.forEach((p) => {
        scene.remove(p.mesh);
      });
      planetGeos.forEach((g) => g.dispose());
      planetMats.forEach((m) => m.dispose());

      orbitLines.forEach((ol) => {
        scene.remove(ol.line);
        ol.geo.dispose();
        ol.mat.dispose();
      });

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
