import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Dropdown } from './Dropdown';
import { Dropdowns } from './Dropdown';
import { Height } from './Dropdown';









function App() {
  const new_user = [{
   
  }]
  const [user,setUser]=useState(new_user);
  const [firstname,setfirstname] = useState("");
  const [lastname,setlastname] = useState("");
  const [middlename,setmiddlename] = useState("");
  const [address,setaddress] = useState("");
  const [number,setnumber] = useState("");
  const [pincode,setpincode] = useState("");
  const [email,setemail] = useState("");
  const [weight,setweight] = useState("");
  const [height,setheight] = useState("");
  const [selected,setselected]  = useState("Choose Country");
  const [stateselected,setstateselected]  = useState("Choose State");
  const [selectedheight,setselectedheight] = useState("Choose height");
  // const {register,handleSubmit,formState:{ errors }} = useForm();

  // const onSubmit =(data) => {
  //   console.log(data);
  // }
  return (
    <div className="textfield">

      
      <h2>USER DETAILS</h2>
      
      <TextField 
      value={firstname} 
      onChange={(event)=>setfirstname(event.target.value)} 
      type="text" variant="outlined" label="firstname" 
      
      required/>
      
       <br />
       <br />
       <TextField value={middlename} onChange={(event)=>setmiddlename(event.target.value)} type="text" variant="outlined" label="middlename" />
      <br />
      <br />
      <TextField value={lastname} onChange={(event)=>setlastname(event.target.value)} type="text" variant="outlined" label="lastname" />
      <br />
      <br />
      
      <TextField value={address} onChange={(event)=>setaddress(event.target.value)} type="text" variant="outlined" label="address" />
      <br />
      <br />
       <b>Country:</b>
      <Dropdown selected={selected} setselected={setselected}  />
      <br />
      <br />
      <b>State:</b>
      <Dropdowns stateselected={stateselected} setstateselected={setstateselected}  />
      <br />
      <br />
      <TextField value={pincode} onChange={(event)=>setpincode(event.target.value)} type="text" variant="outlined" label="pincode" />
      <br />
      <br />
      <TextField value={number} onChange={(event)=>setnumber(event.target.value)} type="text" variant="outlined" label="number" />
      <br />
      <br />
      <TextField value={email} onChange={(event)=>setemail(event.target.value)} type="text" variant="outlined" label="email" />
      <br />
      <br />
      <TextField value={height} onChange={(event)=>setheight(event.target.value)} type="text" variant="outlined" label="height" />
      <br />
      <br />
      <Height selectedheight={selectedheight} setselectedheight={setselectedheight}  />
      <br />
      <br />
      <TextField value={weight} onChange={(event)=>setweight(event.target.value)} type="text" variant="outlined" label="weight" />
      <br />
      <br />
      
       <Button type="submit"  color="primary" onClick={()=> setUser([...user,{
         firstname:firstname,
         middlename:middlename,
         lastname:lastname,  
         address:address,
         selected:selected,
         stateselected:stateselected,
         number:number,
         pincode:pincode,
         email:email,
         height:height,
         selectedheight:selectedheight,
         weight:weight,
       }])   }>Submit</Button> 
       
       <div>
         {user.map((user)=>(
           <Users firstname={user.firstname} middlename={user.middlename} lastname={user.lastname} address={user.address} selected={user.selected} stateselected={user.stateselected} number={user.number} 
           pincode={user.pincode} email={user.email} height={user.height} selectedheight={selectedheight} weight={user.weight}
           />
         ))}
       </div>
    </div>
  );
}


function Users({firstname,lastname,middlename,address,number,pincode,email,height,weight,selected,stateselected,selectedheight}){
  return(
    <div className="mastercard">
    <div className="usercard">

     

        <h2>Firstname: {firstname}</h2>
        <h2>Middlename: {middlename}</h2>
        <h2>Lastname: {lastname}</h2>
        <h2>Address: {address} , {selected} , {stateselected} , {pincode} .</h2>

        <h2>Number: {number}</h2>
        <h2>Email: {email}</h2>
        <h2>height: {height} {selectedheight} Weight: {weight} kgs</h2>

      
        </div>
    </div>
  );
}

export default App;
