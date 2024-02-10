import { useEffect, useRef } from "react";
import * as THREE from "three";

function Loading() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const canvasRef: any = useRef(null);

  // Acessa o local storage
  function getThemeLocalStorage(): number[] {
    if (localStorage.getItem("portfolio-theme") == "dark") {
      return [0x000000, 0xffffff];
    }

    return [0xffffff, 0x000000];
  }

  const themeColors = getThemeLocalStorage();
  const backgroundColor = themeColors[0];
  const cubeColor = themeColors[1];

  useEffect(() => {
    // Cria o three
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Cria o render o three
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setClearColor(backgroundColor);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Cria o cubo
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: cubeColor,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, [backgroundColor, cubeColor]);

  return <canvas ref={canvasRef} />;
}

export default Loading;
