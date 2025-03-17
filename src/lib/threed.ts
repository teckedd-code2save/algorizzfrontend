// lib/threeScene.ts
"use client"; // Client-side only

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js"; // Updated import

export function initThreeScene(canvas: HTMLCanvasElement): () => void {
  // Scene
  const scene = new THREE.Scene();

  // Geometry and Material
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshStandardMaterial({ color: '#5754AD' });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Sizes
  const sizes: { width: number; height: number } = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Light
  const pointLight = new THREE.PointLight(0xffffff, 5, 150);
  pointLight.position.set(1, 6, 6);
  scene.add(pointLight);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    1000
  );
  camera.position.set(0, 0, 15);
  scene.add(camera);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor('#1E1E1E', 1);

  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.autoRotate = true;

  // Animation Loop
  const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();

  // Resize Handler
  const handleResize = () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
  };
  window.addEventListener("resize", handleResize);

  // Cleanup
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}