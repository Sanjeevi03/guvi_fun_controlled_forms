import "./App.css";
function ControlledForm() {
  return (
    <div>
      <h2>Controlled Forms</h2>
      <form >
         <div>
            <label>First Name : </label>
            <input type="text" />
         </div>
         <div>
            <label>Last Name : </label>
            <input type="text" />
         </div>
         <div>
            <label>Email : </label>
            <input type="text" />
         </div>
         <div>
            <label >Gender :</label>
            <input type="radio" name="gender" />Male
            <input type="radio" name="gender" />Female
         </div>
         <div>
            <label>Courses : </label>
            <select name="course">
            <option>React</option>
            <option>Node</option>
            <option>Java</option>
            <option>Mongo</option>
            </select>
         </div>
         <input type="submit" value="Submit" /> 
         <input type="reset" value="Reset" />
      </form>
    </div>
  );
}

export default ControlledForm;
