import axios from "axios";

import React, { useEffect, useState } from "react";
export const Contact = () => {
  const [user, setUser] = useState();
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [btnchange, setBtnchange] = useState("Submit");

  useEffect(() => {
    axios
      .get("https://localhost:7195/api/Contacts/GetAllContact")
      .then((response) => {
        console.log(response);
        setUser(response.data); // Log the response data // Set the state with the array data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // const AddContact=()=>{
  //   debugger;
  //   axios.post('https://localhost:7195/api/Contacts/AddContact/',{
  //     firstName,email,password,phoneNumber,city,state,country
  //   }).then(result=>{
  //     alert("Data Added")
  //   }).catch(error=>{

  //     console.log(error)
  //   })
  // }

  const AddContact = (e) => {
    if (btnchange === "submit") {
      axios
        .post("https://localhost:7195/api/Contacts/AddContact", {
          firstName,
          email,
          password,
          phoneNumber,
          city,
          state,
          country,
        })
        .then((result) => {
          alert("Data Added");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put(`https://localhost:7195/api/Contacts/UpdateContact?Id=${id}`, {
          firstName,
          email,
          password,
          phoneNumber,
          city,
          state,
          country,
          id,
        })
        .then((result) => {
          alert("Data Added");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    debugger;
    e.preventDefault();
  };
  const DeleteCountry = (id) => {
    axios
      .delete("https://localhost:7195/api/Contacts/DeleteContact?Id=" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })

      .catch((error) => {
        console.log(error);
      });
  };
  const EditCountry = (dataedit) => {
    setId(dataedit.id);
    setFirstName(dataedit.firstName);
    setEmail(dataedit.email);
    setPassword(dataedit.password);
    setPhoneNumber(dataedit.phoneNumber);
    setCity(dataedit.city);
    setState(dataedit.state);
    setCountry(dataedit.country);
    setBtnchange("saveChange");
  };

  return (
    <>
      <div>
        <form
          className=" container justify-content-center my-3 row g-2 ms-3 "
          onSubmit={AddContact}
        >
          <div className="col-md-5">
            <label htmlFor="firstName" className="form-label">
              <strong>First Name:</strong>
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control"
              id="firstName"
              placeholder="Enter Student Name"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="email" className="form-label">
              <strong>Email:</strong>
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Enter Student Email"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="password" className="form-label">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
              placeholder="Enter your Password "
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="phoneNumber" className="form-label">
              <strong>Mobile:</strong>
            </label>
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-control"
              id="phoneNumber"
              placeholder="Enter your Phone Number"
            />
          </div>

          <div className="col-md-5">
            <label htmlFor="state" className="form-label">
              <strong>State:</strong>
            </label>
            <select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="form-select"
            >
              <option select>Choose...</option>
              <option>Madhya pradesh</option>
              <option>Rajsthan</option>
              <option>Uttar pradesh</option>
              <option>Hariyana</option>
              <option>Panjab</option>
            </select>
          </div>

          <div className="col-md-5">
            <label htmlFor="country" className="form-label">
              <strong>Country:</strong>
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="form-select"
            >
              <option select>Choose...</option>
              <option>India</option>
              <option>USA</option>
              <option>Rasia</option>
              <option>Nepal</option>
              <option>Bhutan</option>
            </select>
          </div>
          <div className="text-center">
            <input
              type="submit"
              value={btnchange}
              className="btn btn-primary"
            />
          </div>
        </form>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone Number</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.map((val) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.firstName}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td>{val.phoneNumber}</td>
                  <td>{val.city}</td>
                  <td>{val.state}</td>
                  <td>{val.country}</td>

                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => EditCountry(val)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => DeleteCountry(val.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
