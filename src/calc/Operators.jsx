import React from "react"

const Operators = ({ onPushOperator }) => {
  return (
    <div className="operators">
      <div onClick={() => onPushOperator("+")}>+</div>
      <div onClick={() => onPushOperator("-")}>-</div>
      <div onClick={() => onPushOperator("*")}>*</div>
      <div onClick={() => onPushOperator("/")}>/</div>
    </div>
  )
}

export default Operators
