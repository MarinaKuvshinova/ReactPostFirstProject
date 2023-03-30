import React, { useEffect, useRef, useState } from 'react'
import Button from './UI/Button';
import Input from './UI/Input';
// import { decrement,increment } from '../toolkitRedux/toolkitReducer';
import { useDispatch, useSelector } from 'react-redux';
import { decrement,increment } from '../store/counterSlice';

export default function Counter({title, mainCounter}) {
    // const [count, setCount] = useState(0);
    const [value, setValue] = useState('Start value');
    const inputRef = useRef();
    const count = useSelector(state => state.counter.counter); //state => state.toolkit.counter
    const dispatch = useDispatch();


    function incrementFunction () {
        dispatch(increment({text: "increment text"}));
        // setCount(count + 1);
        // mainCounter(count + 1);
    }

    function decrementFunction () {
        dispatch(decrement());

        // setCount(count - 1);
        // mainCounter(count - 1);
    }

    function changeValue(e) {
        // console.log("ref", inputRef.current.value);
        setValue(e.target.value);
    }

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <h5>{value}</h5>
                <Input type="text" ref={inputRef} value={value} onChange={changeValue}/>
                {/* <input ref={inputRef} type="text" value={value} onChange={changeValue}  /> */}
            </div>
            <Button onClick = {decrementFunction}>-</Button>
            {/* <button onClick = {decrement}>-</button> */}
            <span>{count}</span>
            <Button onClick = {incrementFunction}>+</Button>
            {/* <button onClick = {increment}>+</button> */}
        </div>
      )
}
