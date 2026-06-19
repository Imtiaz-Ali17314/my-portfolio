import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// List of floating code fragments, symbols, and keywords
const CODE_ELEMENTS = [
  "const", "let", "var", "function", "class", "return", "import", "export",
  "{}", "[]", "()", "<>", "=>", "&&", "||", "===", "++", "--",
  "async", "await", "map", "filter", "reduce", "Promise", "fetch",
  "console.log", "document", "window", "api", "git commit", "npm run dev",
  "<div />", "<span />", "<p>", "<section>", "React", "Vue", "next.js",
  "0", "1", "x", "y", "i", "j", "true", "false", "null", "undefined"
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

    // --- Central Compiler Core (3D wireframes) ---
    // Outer wireframe octahedron (electric indigo)
    const coreGeo = new THREE.OctahedronGeometry(9, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1, // Indigo
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Inner wireframe cube (cyan-teal)
    const innerGeo = new THREE.BoxGeometry(4.5, 4.5, 4.5);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0d9488, // Teal-600
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Gimbal Ring 1 (Horizontal indigo ring)
    const ring1Geo = new THREE.TorusGeometry(12, 0.15, 8, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x4f46e5, // Indigo
      transparent: true,
      opacity: 0.3
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 2;
    scene.add(ring1Mesh);

    // Gimbal Ring 2 (Vertical teal ring)
    const ring2Geo = new THREE.TorusGeometry(12, 0.15, 8, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      transparent: true,
      opacity: 0.25
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 2;
    scene.add(ring2Mesh);

    // --- Connected Node Network (Dynamic Constellation Grid) ---
    const nodeCount = 45;
    const maxDistance = 55;
    const nodes = [];

    // Create node points
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 280,
          (Math.random() - 0.5) * 160,
          (Math.random() - 0.5) * 280
        ),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.12,
          (Math.random() - 0.5) * 0.12,
          (Math.random() - 0.5) * 0.12
        )
      });
    }

    // Node particle system for the joints
    const nodeGeo = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      nodePositions[i * 3] = nodes[i].pos.x;
      nodePositions[i * 3 + 1] = nodes[i].pos.y;
      nodePositions[i * 3 + 2] = nodes[i].pos.z;
    }
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));

    const nodeMat = new THREE.PointsMaterial({
      color: 0x4f46e5,
      size: 3.5,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true
    });
    const nodePointsMesh = new THREE.Points(nodeGeo, nodeMat);
    scene.add(nodePointsMesh);

    // Line segments connecting nodes
    const maxConnections = 200;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 4); // RGBA
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 4));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      linewidth: 1 // note: linewidth > 1 usually not supported by WebGL implementations anyway
    });
    const connectionLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(connectionLines);

    // --- Floating Data Sparks Particle System ---
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 320;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 320;
      particleSpeeds[i] = 0.04 + Math.random() * 0.08;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x6366f1, // indigo
      size: 1.5,
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

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
    const textColors = ["#4f46e5", "#7c3aed", "#0d9488", "#475569"]; // indigo, violet, teal, slate
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

      // Rotate compiler core elements
      coreMesh.rotation.y += 0.0018;
      coreMesh.rotation.x += 0.0009;
      innerMesh.rotation.y -= 0.003;
      innerMesh.rotation.z += 0.0015;
      ring1Mesh.rotation.z += 0.002;
      ring2Mesh.rotation.x += 0.0015;

      // Update Node positions & node position attribute
      const nodePosAttr = nodeGeo.getAttribute("position");
      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        n.pos.add(n.vel);

        // Wrap around boundary limits
        if (n.pos.x < -160) n.pos.x = 160;
        if (n.pos.x > 160) n.pos.x = -160;
        if (n.pos.y < -100) n.pos.y = 100;
        if (n.pos.y > 100) n.pos.y = -100;
        if (n.pos.z < -160) n.pos.z = 160;
        if (n.pos.z > 160) n.pos.z = -160;

        nodePosAttr.setXYZ(i, n.pos.x, n.pos.y, n.pos.z);
      }
      nodePosAttr.needsUpdate = true;

      // Dynamically calculate lines between close nodes
      const linePosAttr = lineGeometry.getAttribute("position");
      const lineColAttr = lineGeometry.getAttribute("color");
      let activeLines = 0;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];
          const dist = nodeA.pos.distanceTo(nodeB.pos);

          if (dist < maxDistance && activeLines < maxConnections) {
            // Write line segment vertex coordinates
            linePosAttr.setXYZ(activeLines * 2, nodeA.pos.x, nodeA.pos.y, nodeA.pos.z);
            linePosAttr.setXYZ(activeLines * 2 + 1, nodeB.pos.x, nodeB.pos.y, nodeB.pos.z);

            // Compute alpha based on distance
            const alpha = (1.0 - dist / maxDistance) * 0.28;

            // Set color colors (slate-indigo blend)
            lineColAttr.setXYZW(activeLines * 2, 0.39, 0.4, 0.95, alpha);
            lineColAttr.setXYZW(activeLines * 2 + 1, 0.39, 0.4, 0.95, alpha);

            activeLines++;
          }
        }
      }
      lineGeometry.setDrawRange(0, activeLines * 2);
      linePosAttr.needsUpdate = true;
      lineColAttr.needsUpdate = true;

      // Animate particle system (upward spark drift)
      const partPosAttr = particleGeo.getAttribute("position");
      const partArray = partPosAttr.array;
      for (let i = 0; i < particleCount; i++) {
        partArray[i * 3 + 1] += particleSpeeds[i];
        // Wrap at boundary height
        if (partArray[i * 3 + 1] > 100) {
          partArray[i * 3 + 1] = -100;
          partArray[i * 3] = (Math.random() - 0.5) * 320;
          partArray[i * 3 + 2] = (Math.random() - 0.5) * 320;
        }
      }
      partPosAttr.needsUpdate = true;

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

      // Clean up core meshes
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

      // Clean up dynamic network
      scene.remove(nodePointsMesh);
      nodeGeo.dispose();
      nodeMat.dispose();

      scene.remove(connectionLines);
      lineGeometry.dispose();
      lineMaterial.dispose();

      // Clean up particles
      scene.remove(particleSystem);
      particleGeo.dispose();
      particleMat.dispose();

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
