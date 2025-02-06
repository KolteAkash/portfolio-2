import { useEffect, useRef } from "react"
import * as THREE from "three"

const ThreeBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create a group to hold all the objects
    const group = new THREE.Group()
    scene.add(group)

    // Create multiple geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.TetrahedronGeometry(1),
      new THREE.OctahedronGeometry(1),
      new THREE.DodecahedronGeometry(1),
    ]

    const material = new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true })

    for (let i = 0; i < 50; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const mesh = new THREE.Mesh(geometry, material)

      mesh.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20)

      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)

      const scale = Math.random() * 0.5 + 0.5
      mesh.scale.set(scale, scale, scale)

      group.add(mesh)
    }

    camera.position.z = 15

    const animate = () => {
      requestAnimationFrame(animate)

      group.rotation.x += 0.001
      group.rotation.y += 0.002

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}

export default ThreeBackground
