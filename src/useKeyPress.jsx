import { useState } from 'react'
import { useEffect } from 'react'

export default function useKeyPress(targetKey) {
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === targetKey) setIsPressed(true)
    }

    const handleKeyUp = (event) => {
      if (event.key === targetKey) setIsPressed(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return isPressed
}
