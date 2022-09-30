import React, { useState } from 'react'

function Square({ value, onClick }) {
  const [state, setState] = useState({
    value: null,
  })

  return (
    <button 
      className="square"
      onClick={() => setState({value: 'X'})}
    >
      {state.value}
    </button>
  )
}

export default Square;