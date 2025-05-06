<template>
  <div id="background-canvas"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

let scene, camera, renderer, sphere, stars;
let animationFrameId;

const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ 
    alpha: true, 
    antialias: true,
    powerPreference: "high-performance"
  });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x0a192f, 0.5);
  document.getElementById('background-canvas').appendChild(renderer.domElement);

  // Create sphere geometry
  const geometry = new THREE.IcosahedronGeometry(6, 3);
  const material = new THREE.MeshBasicMaterial({
    color: 0x64ffda,
    wireframe: true,
    transparent: true,
    opacity: 0.1,
    side: THREE.DoubleSide
  });
  
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  
  // Create stars with larger size and more particles
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.3,
    transparent: true,
    opacity: 0.8
  });

  const starVertices = [];
  for (let i = 0; i < 2000; i++) {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;
    const z = (Math.random() - 0.5) * 200;
    starVertices.push(x, y, z);
  }

  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
  stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
  
  camera.position.z = 20;
};

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);
  
  // Rotate sphere
  sphere.rotation.x += 0.0005;
  sphere.rotation.y += 0.0008;
  sphere.rotation.z += 0.0003;
  
  // Add floating motion to sphere
  sphere.position.y = Math.sin(Date.now() * 0.001) * 0.3;
  
  // Animate stars
  stars.rotation.y += 0.0002;
  stars.rotation.x += 0.0001;
  
  // Make stars twinkle
  const positions = stars.geometry.attributes.position.array;
  for(let i = 0; i < positions.length; i += 3) {
    positions[i + 1] += Math.sin(Date.now() * 0.001 + positions[i]) * 0.02;
  }
  stars.geometry.attributes.position.needsUpdate = true;
  
  renderer.render(scene, camera);
};

const handleResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  init();
  animate();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  cancelAnimationFrame(animationFrameId);
  if (renderer) {
    renderer.dispose();
    const canvas = document.getElementById('background-canvas');
    if (canvas) {
      canvas.innerHTML = '';
    }
  }
});
</script>

<style scoped>
#background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background-color: rgba(10, 25, 47, 0.85);
}

:deep(.hero-title),
:deep(.hero-description),
:deep(.build-title),
:deep(.build-description) {
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

:deep(.hero-title) {
  font-weight: 700;
  color: #ffffff;
}

:deep(.hero-description) {
  color: #ffffff;
  font-weight: 500;
}

:deep(.gradient-text) {
  background: linear-gradient(45deg, #64ffda, #00bcd4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
}
</style>