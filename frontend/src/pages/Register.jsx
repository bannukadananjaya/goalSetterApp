import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = formData;

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
        
        <h1><FaUser/> Register</h1>
        <p>PLease create a account</p>
      </section>
      <section className="form">
        <form onSubmit="onSubmit">
          <div className="form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={onChange}
              />
            </div>
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
            <div className="form-group">
              <input
                type="password"  
                className="form-control"
                id="confirmassword"
                name="confirmassword"
                value={confirmPassword}
                placeholder="Enter password again"
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

export default Register;
