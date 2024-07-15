import axios from 'axios'

import React, { useEffect, useState } from 'react'

export const Qualification = () => {

  const[id,setId]=useState();
  const [user,setuser]=useState([]);
  const[studentName,setStudentName]=useState();
  const[fatherName,setFatherName]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[dob,setDob]=useState();
  const[phoneNumber,setPhoneNumber]=useState();
  const[education,setEducation]=useState();
  const[college,setCollege]=useState();
  const[session,setSession]=useState();
  const[btnchange,setBtnchange]=useState();

  useEffect(() => {
    axios.get('https://localhost:7195/api/Qualification/GetAllQualification')
      .then((response) => {
        console.log(response.data); // Log the response data
        setuser(response.data); // Set the state with the array data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const AddQualification =(e)=> {
    if(btnchange==="submit"){
      axios.post("https://localhost:7195/api/Qualification/AddQualification",{
        studentName,fatherName,email,password,dob,phoneNumber,education,college,session
        }).then(result => {
          alert("Data Added");
          window.location.reload();
        }).catch(error => {
          console.log(error);
        })
    }
    else{
      axios.put("https://localhost:7195/api/Qualification/UpdateQualification",{
        studentName,fatherName,email,password,dob,phoneNumber,education,college,session,id
        }).then(result => {
          alert("Data Added");
          window.location.reload();
        }).catch(error => {
          console.log(error);
        })
    }
    debugger;
    e.preventDefault();
  
  }
    

  const DeleteData=(id)=>{
    axios.delete('https://localhost:7195/api/Qualification/DeleteQualification?Id='+id).then((res)=>{
      console.log(res);
      window.location.reload();
    })

    .catch((error)=>{
      console.log(error);
    })
  }
    const EditData=(dataedit)=>{
      setId(dataedit.id);
      setStudentName(dataedit.studentName);
      setFatherName(dataedit.fatherName);
      setEmail(dataedit.email);
      setPassword(dataedit.password);
      setDob(dataedit.dob);
      setPhoneNumber(dataedit.phoneNumber);
      setEducation(dataedit.education);
      setCollege(dataedit.college);
      setSession(dataedit.session);
      setBtnchange("saveChange")
      
     }
    

  return (
    <>
    <div>
        <form className="row g-4" onSubmit={AddQualification}>
  <div className="col-md-5">
    <label htmlFor="studentName"  className="form-label">Student Name</label>
    <input type="text" value={studentName} onChange={(e)=>setStudentName(e.target.value)} className="form-control" id="StudentName" placeholder='Enter Student name'/>
  </div>
  <div className="col-md-5">
    <label htmlFor="fatherName"  className="form-label"> Father Name</label>
    <input type="text" value={fatherName} onChange={(e)=>setFatherName(e.target.value)}  className="form-control" id="fatherName" placeholder='Enter your father name'/>
  </div>
  <div className="col-md-5">
    <label htmlFor="email"  className="form-label">Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" placeholder='Enter your email'/>
  </div>
  <div className="col-md-5">
    <label htmlFor="password"  className="form-label">Password</label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="password" placeholder='Enter your password'/>
  </div>
  <div className="col-5">
    <label htmlFor="dob"  className="form-label">DOB</label>
    <input type="text" value={dob} onChange={(e)=>setDob(e.target.value)} className="form-control" id="dob" placeholder="Enter your date of birth"/>
  </div>
  <div className="col-5">
    <label htmlFor="phoneNumber"  className="form-label">Phone Number</label>
    <input type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className="form-control" id="phoneNumber" placeholder="Enter your phone number"/>
  </div>
  <div className="col-md-5">
    <label htmlFor="education"  className="form-label">Education</label>
    <select id="education" value={education} onChange={(e)=>setEducation(e.target.value)} className="form-select">
      <option select>Select your education</option>
      <option>MCA</option>
      <option>MBA</option>
      <option>BCA</option>
      <option>BBA</option>
      <option>B.Tech</option>

    </select>
  </div>
  <div className="col-md-5">
    <label htmlFor="college"  className="form-label">College</label>
    <select id="college" value={college} onChange={(e)=>setCollege(e.target.value)} className="form-select">
      <option select>Select your college</option>
      <option>NIT Bhopal</option>
      <option>NIT Calicut</option>
      <option>NIT Trichy</option>
      <option>NIT Surathkal</option>
      <option>NIT Durgapur</option>

    </select>
  </div>
  <div className="col-md-5">
    <label htmlFor="session" className="form-label">Session</label>
    <select id="session"  value={session} onChange={(e)=>setSession(e.target.value)} className="form-select">
      <option select>Select your session</option>
      <option>2021-22</option>
      <option>2022-23</option>
      <option>2023-24</option>
      <option>2024-25</option>
      <option>2025-26</option>

    </select>
  </div>
  <div className="col-5">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-5">
    <input type="submit" className="btn btn-primary"/>
  </div>
</form>
    </div>
    <div>
    <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Student Name</th>                                       
                        <th>Father Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>DOB</th>
                        <th>Phone Number</th>
                        <th>Education</th>
                        <th>College</th>
                        <th>Session</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(user)&&
                      
                      user.map((val)=>{
                        return(

                          <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.studentName}</td>
                            <td>{val.fatherName}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>{val.dob}</td>
                            <td>{val.phoneNumber}</td>
                            <td>{val.education}</td>
                            <td>{val.college}</td>
                            <td>{val.session}</td>
                            <td><button className='bg-primary rounded-3 mb-1'onClick={(e)=>EditData(val)}>Edit</button>
                            <button className='bg-primary rounded-3' onClick={()=>DeleteData(val.id)}>Delete</button></td>
                          </tr>
                        )
                      })
                    }
                </tbody>
            </table>
    </div>
    </>
  )
}
