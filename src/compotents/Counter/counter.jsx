import React, { useState } from 'react'
import './counter.css'
const Counter = () => {
	const [value, setValue] = useState(0)

	const up = () => {
		setValue(value + 1)
	}
	const down = () => {
		setValue(value - 1)
	}
	return (
		<div className='counter'>
			<div style={{textAlign:'center'}}>
			<h1 className="value">{value}</h1>
			<div className='inCounter'>

				<button onClick={up} className='btn'>Plus</button>
				<button onClick={down} className='btn'>Minus</button>
			</div>
			</div>
		</div>
	)
}

export default Counter