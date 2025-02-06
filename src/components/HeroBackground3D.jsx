// import { useEffect, useRef } from "react"
// import * as THREE from "three"

// const HeroBackground3D = () => {
//   const mountRef = useRef(null)

//   useEffect(() => {
//     if (!mountRef.current) return

//     // Scene setup
//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

//     renderer.setSize(window.innerWidth, window.innerHeight)
//     mountRef.current.appendChild(renderer.domElement)

//     // Create floating code snippets
//     const createCodeSnippet = (position) => {
//       const geometry = new THREE.PlaneGeometry(2, 1)
//       const material = new THREE.MeshBasicMaterial({
//         color: 0x00ff00,
//         transparent: true,
//         opacity: 0.2,
//         side: THREE.DoubleSide,
//       })
//       const plane = new THREE.Mesh(geometry, material)
//       plane.position.copy(position)
//       scene.add(plane)
//       return plane
//     }

//     const snippets = [
//       createCodeSnippet(new THREE.Vector3(-5, 2, -5)),
//       createCodeSnippet(new THREE.Vector3(0, -1, -3)),
//       createCodeSnippet(new THREE.Vector3(4, 3, -4)),
//       createCodeSnippet(new THREE.Vector3(-3, -2, -2)),
//       createCodeSnippet(new THREE.Vector3(2, 1, -6)),
//     ]

//     // Create floating binary particles
//     const particlesGeometry = new THREE.BufferGeometry()
//     const particlesCnt = 5000
//     const posArray = new Float32Array(particlesCnt * 3)

//     for (let i = 0; i < particlesCnt * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 10
//     }

//     particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: 0x4a5568,
//     })

//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
//     scene.add(particlesMesh)

//     // Camera position
//     camera.position.z = 5

//     // Animation
//     const animate = () => {
//       requestAnimationFrame(animate)

//       snippets.forEach((snippet) => {
//         snippet.rotation.x += 0.005
//         snippet.rotation.y += 0.005
//       })

//       particlesMesh.rotation.y += 0.001

//       renderer.render(scene, camera)
//     }

//     animate()

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight
//       camera.updateProjectionMatrix()
//       renderer.setSize(window.innerWidth, window.innerHeight)
//     }

//     window.addEventListener("resize", handleResize)

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize)
//       mountRef.current?.removeChild(renderer.domElement)
//     }
//   }, [])

//   return <div ref={mountRef} className="fixed inset-0 z-0" />
// }

// export default HeroBackground3D

import { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroBackground3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Store mountRef.current in a local variable
    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    // Create floating code snippets
    const createCodeSnippet = (position) => {
      const geometry = new THREE.PlaneGeometry(2, 1);
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide,
      });
      const plane = new THREE.Mesh(geometry, material);
      plane.position.copy(position);
      scene.add(plane);
      return plane;
    };

    const snippets = [
      createCodeSnippet(new THREE.Vector3(-5, 2, -5)),
      createCodeSnippet(new THREE.Vector3(0, -1, -3)),
      createCodeSnippet(new THREE.Vector3(4, 3, -4)),
      createCodeSnippet(new THREE.Vector3(-3, -2, -2)),
      createCodeSnippet(new THREE.Vector3(2, 1, -6)),
    ];

    // Create floating binary particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 5000;
    const posArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x4a5568,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Camera position
    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      snippets.forEach((snippet) => {
        snippet.rotation.x += 0.005;
        snippet.rotation.y += 0.005;
      });

      particlesMesh.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      currentMount?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0" />;
};

export default HeroBackground3D;
