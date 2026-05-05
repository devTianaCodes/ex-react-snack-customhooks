import useSwitch from './useSwitch'
import useDate from './useDate'

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

function App() {
  return (
    <div>
      <SwitchExample />
      <DateExample />
    </div>
  )
}

export default App
