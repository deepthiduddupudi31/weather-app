
import React from "react";
export default function Searchbox(props)
{
    
    return (
        <form onSubmit={props.onSubmit}>
         <label htmlFor="search" id="label"></label>
         <br></br>
         <input type="text" 
                name="search" 
                placeholder="enter the city"
                onChange={props.onChange}
                value={props.value}
                id="searchbar"
                /> 
            <br></br>
          <button type="submit" id="submit">Search</button>
      </form>
     
    )
}
     