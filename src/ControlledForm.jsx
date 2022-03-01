import { useState } from "react";
import "./App.css";
function ControlledForm() {
  const [state,setState] = useState(false)
  const [val,setVal] = useState()
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    course: "React",
  });
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
  });
  const handleOnChange = (e) => {
    if (e.target.value === "") {
      setError({ ...error, [e.target.name]: `${e.target.name} is required` });
    } else {
      setError({ ...error, [e.target.name]: "" });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var err = Object.keys(formData).filter((i) => {
      if (formData[i] === "" && i !== "course") {
        return i;
      }
      return 0;
    });
    if (err.length >= 1) {
      setState(true)
      console.error("Please fill all Data");
    } else {
      console.log(formData);
      setState(false)
      setVal(formData)

    }
  };
  const handleReset = () => {
    setFormData({ firstname: "", lastname: "", email: "", gender: "" });
  };
  return (
    <>
      <div className="contain">
        <h2>Controlled Forms</h2>
        {state?<span className="error">Fill all the fields</span>:null}
        <form onSubmit={(e) => handleSubmit(e)}>
          <table>
            <tbody>
              <tr>
                <td>First Name </td>
                <td>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={(e) => handleOnChange(e)}
                    className="type-text"
                  /> <br />
                  <span className="error">{error.firstname}</span>
                </td>
              </tr>
              <tr>
                <td>Last Name </td>
                <td>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={(e) => handleOnChange(e)}
                    className="type-text"
                  /><br />
                  <span className="error">{error.lastname}</span>
                </td>
              </tr>
              <tr>
                <td>Email ID </td>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleOnChange(e)}
                  className="type-text"
                /> <br />
                <span className="error">{error.email}</span>
              </tr>
              <tr>
                <td>Gender </td>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => handleOnChange(e)}
                  className='type-radio'
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => handleOnChange(e)}
                  className='type-radio'
                />
                Female
              </tr>
              <span style={{ color: "red" }}>{error.gender}</span>
              <tr>
                <td>Courses </td>
                <select name="course" className="type-text" onChange={(e) => handleOnChange(e)}>
                  <option>React</option>
                  <option>Node</option>
                  <option>Java</option>
                  <option>Mongo</option>
                </select>
              </tr>
              <tr>
                <td>
                  <input className="sub-btn" type="submit" value="Submit" />
                </td>
                <td>
                  <input className="sub-btn" type="button" value="Reset" onClick={handleReset} />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      {JSON.stringify(val)}
      </div>
    </>
  );
}

export default ControlledForm;
