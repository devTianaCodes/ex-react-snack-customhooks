import { useState } from 'react'

function useSwitch() {
  const [isOn, setIsOn] = useState(false)

  const toggle = () => {
    setIsOn((currentValue) => !currentValue)
  }

  return [isOn, toggle]
}

export default useSwitch
