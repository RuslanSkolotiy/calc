import { useState } from "react"
import Display from "./calc/Display"
import LeftPanel from "./calc/LeftPanel"
import Operators from "./calc/Operators"

function Calc() {
  let [value, setValue] = useState(0)
  let [mode, setMode] = useState(1) // 0 - new expression, 1 - old expression

  const onEqual = () => {
    setMode(0)
    value = value.replace(/([^\d\.])+$/, "")
    const result = eval(value).toString()
    setValue(result)
  }
  const onPushChar = (char) => {
    if (mode === 0 && !["*", "/", "+", "-"].includes(char)) {
      value = 0
      setValue(value)
    }
    setMode(1)
    value += String(char)
    value = value.replace(/0+0\./g, "0.")
    value = value.replace(/(^|[^\d\.])0*(\d)/g, "$1$2")
    value = value.replace(/([^\d\.])+$/, "$1")
    setValue(value)
  }

  const onReset = () => {
    setMode(0)
    setValue(0)
  }

  return (
    <div className="calculator">
      <Display value={value} />
      <div className="buttons">
        <Operators onPushOperator={onPushChar} />
        <div className="bottom-buttons">
          <LeftPanel onPushNumber={onPushChar} onReset={onReset} />
          <div className="equal" onClick={() => onEqual()}>
            =
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calc
