'use client'

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {

decrement,
increment,
incrementByAmount,
selectCount,
} from '../redux/features/counterSlice'

export default function Counter() {
const count = useSelector(selectCount)
const dispatch = useDispatch()
const [amount, setAmount] = useState('2')

const parsed = Number(amount) || 0

return (
    <div style={{ display: 'inline-block', padding: 12, border: '1px solid #ddd', borderRadius: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <button aria-label="decrement" onClick={() => dispatch(decrement())}>
                −
            </button>

            <strong style={{ minWidth: 36, textAlign: 'center' }}>{count}</strong>

            <button aria-label="increment" onClick={() => dispatch(increment())}>
                +
            </button>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
                aria-label="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ width: 80 }}
            />

            <button onClick={() => dispatch(incrementByAmount(parsed))}>Add</button>
            <button onClick={() => dispatch(incrementAsync(parsed))}>Add Async</button>
        </div>
    </div>
)
}