import React from "react"

const LeftPanel = ({ onPushNumber, onReset }) => {
  return (
    <div className="leftPanel">
      <div className="numbers">
        <div onClick={() => onPushNumber(7)}>7</div>
        <div onClick={() => onPushNumber(8)}>8</div>
        <div onClick={() => onPushNumber(9)}>9</div>
      </div>
      <div className="numbers">
        <div onClick={() => onPushNumber(4)}>4</div>
        <div onClick={() => onPushNumber(5)}>5</div>
        <div onClick={() => onPushNumber(6)}>6</div>
      </div>
      <div className="numbers">
        <div onClick={() => onPushNumber(1)}>1</div>
        <div onClick={() => onPushNumber(2)}>2</div>
        <div onClick={() => onPushNumber(3)}>3</div>
      </div>
      <div className="numbers">
        <div onClick={() => onPushNumber(0)}>0</div>
        <div onClick={() => onPushNumber(".")}>.</div>
        <div onClick={() => onReset()}>AC</div>
      </div>
    </div>
  )
}

export default LeftPanel
