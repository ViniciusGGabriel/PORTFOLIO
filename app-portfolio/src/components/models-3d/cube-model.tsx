// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function CubeModel() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const canvasRef: any = useRef(null);

  useEffect(() => {
    // Cria o three
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 800 / 800, 0.1, 1000);

    // Cria o render o three
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setClearColor("hsl(0, 0%, 7%)");
    renderer.setSize(400, 400);

    // Create cube line
    const geometry = new THREE.BoxGeometry();
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0xffffff })
    );
    scene.add(line);

    // Initial position
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 1;
    camera.position.x = 1.2;
    camera.position.y = 1.2;

    const animate = async () => {
      try {
        requestAnimationFrame(animate);
        // Animation + control
        line.rotation.x += 0.01;
        line.rotation.y += 0.01;
        controls.update();

        renderer.render(scene, camera);
      } catch (error) {
        console.log(error);
      }
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="rounded-sm shadow-xl" />;
}

export default CubeModel;
