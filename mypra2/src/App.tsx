import React,{useState} from 'react';
import './App.css';

type item={
  id:number;
  value:string;
}
type cal={
  id:number;
  value:string;
}

let firstnum:number=0;
let calcu:string='';


const App=()=>{
  const [inputValue,setInputValue]=useState('0')
  const [checknum,setChecknum]=useState(false)
  const [checkcal,setCheckcal]=useState(false)
  const [checkeq,setCheckeq]=useState(false)
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
    {id:10,value:'0'},
    {id:11,value:'.'},
    
  ]

  const calculator:cal[]=[
    {id:1,value:'+'},
    {id:2,value:'-'},
    {id:3,value:'×'},
    {id:4,value:'÷'},
  ]
  

  const handlenumclick=(value:string)=>{
    if(inputValue==='0'&&value!=='.'){
      setInputValue(value)
    }
    else{
      let val:string=inputValue;
      val+=value;
      setInputValue(val);
    }
  }


  const handlecalclick=(value:string)=>{
    setInputValue('0')
    firstnum=Number(inputValue)
    calcu=value
    setCheckcal(true)
  }

  const handleClearclick=()=>{
      setInputValue('0')
      firstnum=0
      calcu=''
      setChecknum(false)
      setCheckcal(false)
      setCheckeq(false)
}

const handleEqallclick=()=>{
  let ans:number
    if(inputValue==='0'){
      setInputValue('0')
    }else if(inputValue!=='0'&&calcu===''){
      setInputValue(inputValue)
    }
    else{
      if(calcu==='+'){
        ans=firstnum+Number(inputValue)
          setInputValue(ans.toPrecision())
      }else if(calcu==='-'){
        ans=firstnum-Number(inputValue)
        setInputValue(ans.toPrecision())
      }else if(calcu==='×'){
        ans=firstnum*Number(inputValue)
        setInputValue(ans.toPrecision())
      }else{
        ans=firstnum/Number(inputValue)
        setInputValue(ans.toPrecision())
      }
      setChecknum(true)
      setCheckeq(true)
    }
    
    
}
  return ( 
   <div className='App'>
      <h1>電卓(2つの数の演算)</h1>
      <input
        type="text"
        className='inputtext'
        value={inputValue}
        disabled />
      
      <div className='btn'>
      {items.map((Item)=>(
        <input 
          className='number'
          type="button" 
          value={Item.value}
          onClick={()=>handlenumclick(Item.value)} 
          disabled={checknum}
        /> 
      ))}
      </div>
      <div className='btn'>
      {calculator.map((Item)=>(
        <input 
          className='number'
          type="button" 
          value={Item.value}
          onClick={()=>handlecalclick(Item.value)}
          disabled={checkcal}
        /> 
      ))}
      </div>
      <div className='btn'>      
        <input 
          className='number'
          type="button" 
          value='C'
          onClick={()=>handleClearclick()}
        /> 
        <input 
          className='number'
          type="button" 
          value='='
          onClick={()=>handleEqallclick()}
          disabled={checkeq}
        /> 
      </div>
    </div>
    
  );
  
}

export default App;
