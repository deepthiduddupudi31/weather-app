import React from "react";
import './App.css'
import Searchbox from "./Searchbox";
import City from "./City";
export default function App()
{
   
   const [city,setcity]=React.useState("");
   const [data,setdata]=React.useState({
      search:""
  });
   
   
   function handlechange(e)
   {
       const {name,value,type,check}=e.target;
       setdata((prevdata)=>{
         return{
            ...prevdata,
            [name]:value,
         }
       })
   }
   function handlesubmit(e)
   {
      
      e.preventDefault();
      setcity(data.search)
   
     
   }
   return(
     <div>
      <h1 className="app">Weather App</h1>
      <Searchbox onChange={handlechange}
                 onSubmit={handlesubmit}
                 value={data.search}/>
      <City city={city}/>
      
     </div>
   )
}


