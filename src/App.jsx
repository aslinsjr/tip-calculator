import { useState, useEffect } from 'react'

import './App.css'

import FormComponent from './componets/FormComponent'
import ResultComponent from './componets/ResultComponent'

function App() {
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)
  const [tip, setTip] = useState(0)
  const [customTip, setCustomTip] = useState(0)

  const [tipValue, setTipValue] = useState(0)
  const [billPlusTip, setBillPlusTip] = useState(0)

  const [personValueBill, setPersonValueBill] = useState(0)
  const [personValueTip, setPersonValueTip] = useState(0)

  function handleChanges(e) {

    if (e.target.id === "bill") {
      setBill(+e.target.value)
    }

    if (e.target.id === "people") {
      setPeople(+e.target.value)
    }

    if (e.target.id === "custom-tip") {
      setCustomTip(+e.target.value / 100)
    }
  }

  function handleClick(e) {

    setTip(+e.target.id / 100)
  }

  function calculatorTip() {

    if (customTip !== 0) {
      setTipValue(bill * customTip)

      setBillPlusTip(tipValue + bill)

      setPersonValueBill(billPlusTip / people)

      setPersonValueTip(personValueBill * customTip)
    } else {
      setTipValue(bill * tip)

      setBillPlusTip(+tipValue + bill)

      setPersonValueBill(tipValue / people)

      setPersonValueTip(billPlusTip / people)

    }

  }

  useEffect(() => {
    calculatorTip()

  }, [bill, tip, customTip, people, billPlusTip, tipValue, personValueBill, personValueTip])

  function handleClean() {
    setBill(0)
    setPeople(0)
    setCustomTip(0)
    setTip(0)

    const inputs = document.querySelectorAll("input")

    inputs.forEach((input) => {
      input.value = ""
    })
  }

  return (
    <div className="app-container">
      <img src="./logo.svg" alt="Logo" />
      <div className="calculator-container">
        <FormComponent handleChanges={handleChanges} handleClick={handleClick} />
        <ResultComponent personValueBill={personValueBill} personValueTip={personValueTip} handleClean={handleClean} />
      </div>
    </div>
  )
}

export default App
