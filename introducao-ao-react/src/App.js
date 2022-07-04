import React from 'react';
import './App.css';
import {HelloWorld} from './components/HelloWorld'

let greeting = 'Hello World'

function App() {
  return (
    <div className="container">
        <HelloWorld text={greeting} color="red" textDecoration="underline"/>
        <HelloWorld text={greeting.toLowerCase()} color="pink" textDecoration="overline"/>
        <HelloWorld text={greeting.toUpperCase()} color="gray" textDecoration="line-through"/>
        <HelloWorld text={greeting.slice(0, 6)} color="yellow" textDecoration="blink"/>
        <HelloWorld text={greeting.repeat(2).split('d')} color="purple" textDecoration="none"/>
        <HelloWorld text={greeting.replaceAll('l', '1').replaceAll("o", '0')} color="brown" textDecoration="underline overline"/>
        <HelloWorld text={greeting.toLocaleUpperCase().split("H")} color="orange" textDecoration="underline wavy orange"/>
        <HelloWorld text={greeting.slice(0, -3)} color="green" textDecoration="underline green"/>
        <HelloWorld text={greeting.replaceAll('e', '3').replaceAll('l', '1').toUpperCase()} color="white" textDecoration="blink"/>
        <HelloWorld text={greeting.split("").reverse().join("")} color="black" textDecoration="line-through"/>
    </div>
  );
}

export default App;
