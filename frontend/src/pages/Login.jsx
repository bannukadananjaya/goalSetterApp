import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { name, email, password} = formData;

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  };
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h1><FaSignInAlt/> Login</h1>
        <p>PLease create a account</p>
      </section>
      <section className="form">
        <form onSubmit="onSubmit">
          <div className="form">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={onChange}
              />
            </div>
           
            <div className="from-group">
              <button type="submit" className="btn btn-block">Register</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
