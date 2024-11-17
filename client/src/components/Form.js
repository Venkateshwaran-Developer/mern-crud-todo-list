import React from "react";


function Form(props) {

 

  
  return (
    <div>
      <div className="mx-auto max-w-xl">     
        <form onSubmit={props.SumbitDetails} className="space-y-5"> 
          
            <label className="mb-1 block text-sm font-medium text-black"> Name </label>
            <input
              type="text"
              name="name"
              value={props.name}
              className="block w-full h-10 border-2 p-2 rounded-md shadow-sm "
              placeholder="Enter Your Name..."
              onChange={(e)=>props.setName(e.target.value)}    
            />
          
            <label className="mb-1 block text-sm font-medium text-black"> Email </label>
            <input
              type="text"
              name="email"
              value={props.email}
              className="block w-full h-10 border-2 p-2 rounded-md shadow-sm "
              placeholder="you@email.com"
              onChange={(e)=>props.setEmail(e.target.value)}
            />
         
            <label className="mb-1 block text-sm font-medium text-black" > Phone </label>
            <input
              type="text"
              name="phone"
              value={props.phone}
              className="block w-full h-10 border-2 p-2 rounded-md shadow-sm "
              placeholder="Enter Your Phone Number..."
              onChange={(e)=>props.setPhone(e.target.value)}
            />
          
           
          
            <label className="mb-1 block text-sm font-medium text-black" >Password</label>
            <input
              type="password"
              name="password"
              value={props.password}
              className="block w-full h-10 border-2 p-2 rounded-md shadow-sm "
              placeholder="Password"
              onChange={(e)=>props.setPassword(e.target.value)}
            />
          
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white"
            
          >
            Submits
          </button>
          {props.message && <h3>{props.message}</h3>}
          {props.error && <h3>{props.error}</h3>}
        </form>
      </div>
    </div>
  );
}

export default Form;
