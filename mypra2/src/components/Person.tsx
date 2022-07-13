import * as React from 'react';
import {FC,useState} from 'react';
interface Props {
  email:string;
  age:number;
  name:string; 
}

export const Person:FC<Props>=({name,age,email})=> {
  const [country,setCountry]=useState<string | null>("");
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input placeholder="Whit down your contry ..."/>
    </div>
  );
}
