import React from 'react'

type item={
  id:number;
  value:string;
}

function Btn() {
  const items:item[]=[
    {id:1,value:'1'},
    {id:2,value:'2'},
    {id:3,value:'3'},
    {id:4,value:'4'},
    {id:5,value:'5'},
    {id:6,value:'6'},
    {id:7,value:'7'},
    {id:8,value:'8'},
    {id:9,value:'9'},
    {id:0,value:'0'},
  ]
  return (
    <div className='btn'>
      {items.map((Item)=>(
        <input 
          className='number'
          type="button" 
          value={Item.value} 
        /> 
      ))}
    </div>
  )
}

export default Btn