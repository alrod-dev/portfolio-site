'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const objectsRef = useRef<THREE.Object3D[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.background = null

    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 3
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x06b6d4, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(0x3b82f6, 0.7)
    pointLight2.position.set(-5, -5, 5)
    scene.add(pointLight2)

    // Create floating geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(1, 4),
      new THREE.TorusGeometry(1.2, 0.4, 8, 100),
      new THREE.OctahedronGeometry(0.8),
      new THREE.TetrahedronGeometry(1),
    ]

    const colors = [0x06b6d4, 0x3b82f6, 0x0284c7, 0x00d9ff]

    geometries.forEach((geometry, index) => {
      const material = new THREE.MeshPhongMaterial({
        color: colors[index],
        emissive: colors[index],
        emissiveIntensity: 0.3,
        wireframe: Math.random() > 0.5,
        shininess: 100,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      )
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )

      scene.add(mesh)
      objectsRef.current.push(mesh)
    })

    // Particle field
    const particleCount = 1000
    const particleGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 10
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.05,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)
    objectsRef.current.push(particles)

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      const newWidth = containerRef.current.clientWidth
      const newHeight = containerRef.current.clientHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      objectsRef.current.forEach((obj, index) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
          obj.rotation.x += 0.0005 * (index + 1)
          obj.rotation.y += 0.0008 * (index + 1)

          if (obj instanceof THREE.Mesh) {
            obj.position.y += Math.sin(Date.now() * 0.0001 + index) * 0.001
          }
        }
      })

      // Rotate particles
      particles.rotation.x += 0.00005
      particles.rotation.y += 0.00008

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
