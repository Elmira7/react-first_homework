import React, {useState} from 'react';

const FunctionComponent = ()=>{
    let [current, setCurent]=useState((1));
    function increment(){
        setCurent(current+1)
    }
    function decrement(){
        setCurent(current-1)
    }
    return <div>
        <p>Функциональный компонент</p>
        <button onClick={increment}>+</button>
        <span>{current}</span>
        <button onClick={decrement}>-</button>
    </div>
};

export default FunctionComponent;