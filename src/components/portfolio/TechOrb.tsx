import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Trail } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.8, 64, 64]}>
      <MeshDistortMaterial
        color="#ffffff"
        wireframe
        distort={0.25}
        speed={1.5}
        roughness={0}
        transparent
        opacity={0.12}
      />
    </Sphere>
  );
}

function InnerGlow() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const s = 0.5 + Math.sin(clock.getElapsedTime() * 0.8) * 0.08;
      meshRef.current.scale.setScalar(s);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
      <meshBasicMaterial color="#ffffff" transparent opacity={0.03} />
    </Sphere>
  );
}

function OrbitRing({ radius, speed, tilt, color, trailWidth }: { radius: number; speed: number; tilt: [number, number, number]; color: string; trailWidth: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
  });

  return (
    <group rotation={tilt}>
      <Trail width={trailWidth} length={8} color={color} attenuation={(t) => t * t}>
        <mesh ref={ref}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </Trail>
    </group>
  );
}

function OrbitLine({ radius, tilt, opacity }: { radius: number; tilt: [number, number, number]; opacity: number }) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);

  const geo = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  return (
    <group rotation={tilt}>
      <primitive object={new THREE.Line(geo, new THREE.LineBasicMaterial({ color: "#ffffff", transparent: true, opacity }))} />
    </group>
  );
}

function FloatingParticles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 2;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.03;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.015} transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

function DataStreams() {
  const count = 5;
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    refs.current.forEach((mesh, i) => {
      if (mesh) {
        const t = clock.getElapsedTime() * (0.3 + i * 0.15) + i * 1.2;
        const r = 1.8 + i * 0.3;
        mesh.position.x = Math.cos(t) * r * 0.5;
        mesh.position.y = Math.sin(t * 2) * 1.5;
        mesh.position.z = Math.sin(t) * r * 0.5;
        const scale = 0.02 + Math.sin(clock.getElapsedTime() * 3 + i) * 0.01;
        mesh.scale.setScalar(scale);
      }
    });
  });

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </mesh>
      ))}
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <CoreSphere />
        <InnerGlow />
      </Float>

      <OrbitRing radius={1.6} speed={0.8} tilt={[0.3, 0, 0.1]} color="#ffffff" trailWidth={0.8} />
      <OrbitRing radius={2.0} speed={0.5} tilt={[-0.5, 0.4, 0.2]} color="#aaaaaa" trailWidth={0.5} />
      <OrbitRing radius={2.4} speed={0.35} tilt={[0.8, -0.3, -0.1]} color="#888888" trailWidth={0.3} />

      <OrbitLine radius={1.6} tilt={[0.3, 0, 0.1]} opacity={0.04} />
      <OrbitLine radius={2.0} tilt={[-0.5, 0.4, 0.2]} opacity={0.03} />
      <OrbitLine radius={2.4} tilt={[0.8, -0.3, -0.1]} opacity={0.02} />

      <FloatingParticles count={120} />
      <DataStreams />
    </>
  );
}

export default function TechOrb() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
