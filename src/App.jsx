import useSwitch from './useSwitch'
import useDate from './useDate'
import useCustomPointer from './useCustomPointer'
import useKeyPress from './useKeyPress.jsx'





function SwitchExample() {
  const [isOn, toggle] = useSwitch()

  return (
    <section>
      <h1>Snack 1: useSwitch()</h1>
      <p>Il valore e: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Cambia Stato</button>
    </section>
  )
}



function DateExample() {
  const currentDate = useDate()

  return (
    <section>
      <h1>Snack 2: useDate()</h1>
      <p>{currentDate.toLocaleString()}</p>
    </section>
  )
}


function CustomPointerExample() {
  const customPointer = useCustomPointer('🔥')

  return (
    <section>
      <h1>Snack 3: useCustomPointer()</h1>
      <p>Sposta il mouse per vedere il cursore personalizzato!</p>
      {customPointer}
    </section>
  )
}



function KeyPressExample() {
  const isEnterPressed = useKeyPress('Enter')

  return (
    <section>
      <h1>Bonus: useKeyPress()</h1>
      <p>Tieni premuto "Enter" per testare il custom hook</p>
      <p>{isEnterPressed ? 'Enter premuto! ✅' : 'Aspettando input... ⌨️'}</p>
    </section>
  )
}




function App() {
  return (
    <div>
      <SwitchExample />
      <DateExample />
      <CustomPointerExample />
      <KeyPressExample />
    </div>
  )
}

export default App
