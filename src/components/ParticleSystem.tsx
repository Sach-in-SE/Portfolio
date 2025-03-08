import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleSystem: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = useMemo(() => window.innerWidth < 768 ? 50 : 100, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 10;
      pos[i + 1] = (Math.random() - 0.5) * 10;
      pos[i + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [particleCount]);

  const colors = useMemo(() => {
    const cols = new Float32Array(particleCount * 3);
    const color = new THREE.Color();
    for (let i = 0; i < particleCount * 3; i += 3) {
      color.setHSL(Math.random(), 0.5, 0.5);
      color.toArray(cols, i);
    }
    return cols;
  }, [particleCount]);

  useFrame((state) => {
    if (!particlesRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(time + positions[i]) * 0.002;
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export default ParticleSystem;