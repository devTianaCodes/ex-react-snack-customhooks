import useSwitch from './useSwitch'
import useDate from './useDate'
import useCustomPointer from './useCustomPointer'

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

function App() {
  return (
    <div>
      <SwitchExample />
      <DateExample />
      <CustomPointerExample />
    </div>
  )
}

export default App
