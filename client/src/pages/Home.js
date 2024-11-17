import React,{useEffect, useState} from 'react';
import Form from '../components/Form';
import Table from '../components/Table';

function Home() {

  const [emp,setEmp]=useState([]);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError]=useState("");
  const [message,setMessage]=useState("");
  const [editId,setEditId]=useState(-1);

  const [editname,setEditname] = useState("");
  const [editemail,setEditemail] = useState("");
  const [editphone,setEditphone] = useState("");
  const [editpassword,setEditpassword] = useState("");

  async function SumbitDetails(e){
    setError("");
    e.preventDefault();
     fetch('http://localhost:8000/api/v1/employee',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
        name,
        email, 
        phone,
        password,
        })    
    }).then(res=>{
      if (res.ok) {
        setEmp([...emp,{name,email,phone,password}])
        setTimeout(()=>{
          setMessage("");          
          },2000);          
        setMessage("Employee Added Successfully");
      } else {
        setTimeout(()=>{
          setError("");          
          },2000);
        setError("Unable to Create Employee")
      }
    }).catch(()=>{
      setError("Unable to Create Employee");
    })

}

  useEffect(()=>{
    getUser();
  },[]);

  
  const getUser = ()=>{
   fetch('http://localhost:8000/api/v1/employee')
   .then(response =>{
    return response.json()
   }).then((res)=>{
    setEmp(res)
   })
     
    };

  async function handleUpdate(e){

    setError("");
    e.preventDefault();
     fetch('http://localhost:8000/api/v1/employee/update/'+editId,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
        name:editname,
        email:editemail, 
        phone:editphone,
        password:editpassword,
        })    
    }).then(res=>{
      if (res.ok) {

        const updatedEmp = emp.map((emp)=>{
            if(emp._id === editId){
               emp.name=editname; 
               emp.email=editemail;
               emp.phone=editphone;
               emp.password=editpassword;
            }
            return emp;            
        })

        setEmp(updatedEmp)
        setTimeout(()=>{
          setMessage("");          
          },2000);          
        setMessage("Employee Updated Successfully");
        setEditId(-1);
      } else {
        setTimeout(()=>{
          setError("");          
          },2000);
        setError("Unable to Updated Employee")
      }
    }).catch(()=>{
      setError("Unable to Updated Employee");
    })


   }
   function handleEdit(emp){

    setEditId(emp._id);
    setEditname(emp.name);
    setEditemail(emp.email);
    setEditphone(emp.phone);
    setEditpassword(emp.password);

  }
  function handleDelete(emp_id){

      if(window.confirm("Do you Want to Delete..?")){

        fetch('http://localhost:8000/api/v1/employee/delete/'+emp_id,{
          method:'DELETE'
        }).then(()=>{
          const updatedEmp = emp.filter((emp)=> emp._id !== emp_id)
          setEmp(updatedEmp)
        })

      }

  }

  return (
    <div>
        <h1 className="container mt-20 ">
         <div className='grid grid-cols-3 ml-7 gap-7'>
          <div className=''>
            <Form setEditId={setEditId} SumbitDetails={SumbitDetails} setName={setName} setEmail={setEmail} setPhone={setPhone} setPassword={setPassword} error={error} message={message} name={name} email={email} password={password} phone={phone} />
          </div>
          <div className=' col-span-2 '>
            <Table handleDelete={handleDelete} handleEdit={handleEdit} handleUpdate={handleUpdate} setEditId={setEditId} editId={editId} emp={emp} setEditname={setEditname} setEditemail={setEditemail} setEditphone={setEditphone} setEditpassword={setEditpassword} editname={editname} editemail={editemail} editpassword={editpassword} editphone={editphone} />
          </div>
          
      </div>
    </h1>
    </div>
  )
}

export default Home