import React, { useState,useEffect } from "react";
import "./Login.css";
import { validation } from "./Validation";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { notify } from "./Toast";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    city: "",
    code: "",
    phone: "",
    email: "",
    ischecked: false,
  });

  const [gender, setGender] = useState("");
  const [errors,setErrors]=useState({})
  const [toch,setToch]=useState({})

  useEffect(
      ()=>{
          setErrors(validation(data))
      },[data]
  )

  const focusHandler=(event)=>{
        setToch({...toch,[event.target.name]:true})
  }

  const submitHandeler=(event)=>{
      event.preventDefault();
      if(!Object.keys(errors).length){
          notify("You successfully signed Up","success")
      }else{
          notify("You have errors ","error")
          setToch({
              name:true,
              lastname:true,
              password:true,
              confirmpassword:true,
              email:true,
              ischecked:true
          })
      }
  }

  const changeHandler = (event) => {
    if (event.target.name === "ischecked") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  return (
    <div className="formcontainer">
      <form onSubmit={submitHandeler}>
        <h1>Sign Up</h1>
        <div>
          <label>Name: </label>
          <br />
          <input
            type={"text"}
            name="name"
            value={data.name}
            className="inputname"
            onChange={changeHandler}
            onFocus={focusHandler}
          /><br/>
          {errors.name && toch.name&& <span className="span">{errors.name}</span>}
        </div>
        <div style={{ marginTop: "5%" }}>
          <label>Last Name: </label>
          <br />
          <input
            type={"text"}
            name="lastname"
            value={data.lastname}
            className="inputname"
            onChange={changeHandler}
            onFocus={focusHandler}
          /><br/>
           {errors.lastname && toch.lastname &&<span className="span">{errors.lastname}</span>}
        </div>
        <div style={{ marginTop: "5%" }}>
          <label>your city : </label>
          <br />
          <select
            value={data.city}
            className="inputname"
            name="city"
            onChange={changeHandler}
          >
            <option>Tehran</option>
            <option>Shiraz</option>
            <option>Kermanshah</option>
            <option>Esfahan</option>
            <option>Ahvaz</option>
          </select>
        </div>

        <div style={{ marginTop: "5%" }}>
          <label>Password: </label>
          <br />
          <input
            type={"password"}
            name="password"
            value={data.password}
            className="inputname"
            onChange={changeHandler}
            onFocus={focusHandler}
          /><br/>
           {errors.password && toch.password && <span className="span">{errors.password}</span>}
        </div>
        <div style={{ marginTop: "5%" }}>
          <label className="confirmlable">Confirm Password: </label>
          <br />
          <input
            type={"password"}
            name="confirmpassword"
            value={data.confirmpassword}
            className="inputname"
            onChange={changeHandler}
            onFocus={focusHandler}
          /><br/>
           {errors.confirmpassword &&  toch.confirmpassword &&<span className="span">{errors.confirmpassword}</span>}
        </div>
        <div style={{ marginTop: "5%" }}>
          <label>Email: </label>
          <br />
          <input
            type={"email"}
            name="email"
            value={data.email}
            className="inputname"
            onChange={changeHandler}
            onFocus={focusHandler}
          /><br/>
           {errors.email && toch.email &&<span className="span">{errors.email}</span>}
        </div>
        <div style={{ marginTop: "5%" }}>
          <label>Id code: </label>
          <br />
          <input
            type={"text"}
            name="code"
            value={data.code}
            className="inputname"
            onChange={changeHandler}
            onFocus={focusHandler}
          /><br/>
           {errors.code && toch.email && <span className="span">{errors.code}</span>}
        </div>
        <div style={{ marginTop: "5%" }}>
          <label>Phone number : </label>
          <br />
          <input
            type={"tel"}
            name="phone"
            value={data.phone}
            className="inputname"
            onChange={changeHandler}
          />
        </div>

        <div style={{ marginTop: "5%" }}>
          <span style={{ color: "rgb(32, 128, 238)", fontSize: "1.2rem" }}>
            {" "}
            Choose one :{" "}
          </span>{" "}
          <br />
          <br />
          <label>man </label>
          <input
            type={"radio"}
            checked={gender === "man"}
            value={"man"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <br />
          <label>woman </label>
          <input
            type={"radio"}
            checked={gender === "woman"}
            value={"woman"}
            style={{ marginLeft: "3%" }}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>

        <div style={{ marginTop: "5%", display: "flex", flexDirection: "row",width:"100%" }}>
          <label style={{ fontSize: "1rem", color: "rgb(32, 128, 238)" }}>
            I have accepted all the privacies{" "}
          </label>
          <input
            type={"checkbox"}
            name="ischecked"
            checked={data.ischecked}
            className="check"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          
        </div>
           {errors.ischecked && toch.ischecked &&<span className="span">{errors.ischecked}</span>}
        <div className="bottoncontainer22">
          <a href="#">Login</a>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
