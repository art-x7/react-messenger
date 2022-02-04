import React from 'react'
import './Home.css'


const myArray = [
  'apple', 'banana', 'orange'
]

let obj = {
  table: []
}

obj.table.push({id:1, item: 'apple'})
console.log(obj)


export default function Home () {

  return (
    <>
      {myArray.map((item) => <li className='liItem'>{item}</li>)}
    </>
  );
}