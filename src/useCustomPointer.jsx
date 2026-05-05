import { useEffect } from 'react'
import { useState } from 'react'

export default function useCustomPointer(component) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        cursor: 'none',
      }}
    >
      {component}
    </div>
  )
}
