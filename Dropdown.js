import React from 'react';
import { useState } from 'react';



export function Dropdown({selected,setselected}) {
  const [active,setIsactive] = useState(false);
  
  
  const options =['India', 'USA']
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e)=> setIsactive(!active)}>
        {selected} 
        <span><i class="fas fa-caret-down"></i></span>
        
        </div>
        
       
         {active && (
           <div  className="dropdown-content">
             {options.map(option =>(
              <div onClick={(e) =>{
                setselected(option);
                setIsactive(false);
                }} 
                className="dropdown-item">
             {option}
             
           </div>
           
             ))}
       </div>
         )}
    </div>
  );
}

export function Dropdowns({selected,stateselected,setstateselected}) {
  const [active,setIsactive] = useState(false);
  const India = ['Bangalore','Delhi', 'Tamil Nadu']
  const USA = ['washington','newyork','texas']
  return (
    <div className="dropdown">
   <div className="dropdown-btn" onClick={(e)=> setIsactive(!active)}>
        {stateselected}
        <span><i class="fas fa-caret-down"></i></span>
        </div>
        
       {active && (
           <div  className="dropdown-content">
             {India.map(stateoption =>(
              <div onClick={(e) =>{
                setstateselected(stateoption);
                setIsactive(false);
                }} 
                className="dropdown-item">
             {stateoption}
           </div>
             ))}
       </div>
              )}
              {active && (
           <div  className="dropdown-content">
             {USA.map(stateoption =>(
              <div onClick={(e) =>{
                setstateselected(stateoption);
                setIsactive(false);
                }} 
                className="dropdown-item">
             {stateoption}
           </div>
             ))}
       </div>
              )}
              </div>
  );
}


export function Height({selectedheight,setselectedheight}) {
  const [active,setIsactive] = useState(false);
  
  
  const options =['Ft', 'cm']
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e)=> setIsactive(!active)}>
        {selectedheight} 
        <span><i class="fas fa-caret-down"></i></span>
        
        </div>
        
       
         {active && (
           <div  className="dropdown-content">
             {options.map(option =>(
              <div onClick={(e) =>{
                setselectedheight(option);
                setIsactive(false);
                }} 
                className="dropdown-item">
             {option}
             
           </div>
           
             ))}
       </div>
         )}
    </div>
  );
}















