import React from 'react';

function Table(props){

 

   return (
    <div>        
  <div className="">
  <table className="w-auto  bg-white text-left text-sm text-gray-500">
    <thead className="bg-gray-50 ">
      <tr>
        <th scope="col" className="pr-24 pl-3 py-4 font-medium text-gray-900 ">Name</th>
        <th scope="col" className="pr-24 pl-3 py-4 font-medium text-gray-900">Email</th>
        <th scope="col" className="pr-24 pl-3 py-4 font-medium text-gray-900">Phone</th>
        <th scope="col" className="pr-24 pl-3 py-4 font-medium text-gray-900">Password</th>
        <th scope="col" className="pr-20 pl-3 py-4 font-medium text-gray-900">Edit</th>
        <th scope="col" className="pr-20 pl-3 py-4 font-medium text-gray-900">Delete</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
      {
      props.emp.map((emp)=>{
        return(
          
          <tr key={emp._id}>
            {
              props.editId === -1 || props.editId !== emp._id ? <>

            <td className="px-3 py-4">{emp.name}</td>
            <td className="px-3 py-4">{emp.email}</td>  
            <td className="px-3 py-4">{emp.phone}</td>
            <td className="px-3 py-4">{emp.password}</td>
            
              
              </>:<>
              <td className="px-3 py-4"><input onChange={(e)=>props.setEditname(e.target.value)} value={props.editname}/></td>
              <td className="px-3 py-4"><input onChange={(e)=>props.setEditemail(e.target.value)} value={props.editemail}/></td>  
              <td className="px-3 py-4"><input onChange={(e)=>props.setEditphone(e.target.value)} value={props.editphone}/></td>
              <td className="px-3 py-4"><input onChange={(e)=>props.setEditpassword(e.target.value)} value={props.editpassword}/></td>
              
              </>
            }
            <td className="px-3 py-4">{ props.editId === -1 || props.editId !== emp._id ? <button className='bg-indigo-600 p-2 text-white rounded-lg' onClick={()=>props.handleEdit(emp)}>Edit</button >:<button className='bg-indigo-600 p-2 text-white rounded-lg' onClick={props.handleUpdate}>Update</button>}</td>
            <td className="px-3 py-4">{ props.editId === -1 || props.editId !== emp._id ? <button onClick={()=>{props.handleDelete(emp._id)}} className='bg-red-500 p-2 text-white rounded-lg'>Delete</button>:<button onClick={()=>props.setEditId(-1)} className='bg-red-500 p-2 text-white rounded-lg'>Cancel</button>}</td>
            
          </tr>
          
          )
          })
          
        }
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Table