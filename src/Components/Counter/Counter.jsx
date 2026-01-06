import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setCustom } from '../../redux/state/CounterSlice/CounterSlice';

const Counter = () => {

    const myNumber = useRef();
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <section>
                <div className='w-full h-screen bg-blue-500'>
                    <h2 className='text-center font-bold text-3xl'>Counter App</h2>
                    <p className='text-center font-bold text-3xl'>{count}</p>

                    <div className='flex item-center justify-center gap-2 my-8'>
                        <button onClick={() => dispatch(increment())} className='bg-red-500 p-2 font-bold text-xl rounded-md'>Increment</button>
                        <button onClick={() => dispatch(decrement())} className='bg-red-500 p-2 font-bold text-xl rounded-md'>Decrement</button>
                    </div>

                    <div>
                        <input ref={myNumber} className='block' type="text" />
                        <button onClick={()=>dispatch(setCustom(myNumber.current.value))} className='bg-red-500 p-2 font-bold text-xl rounded-md' > Set Custom</button>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Counter