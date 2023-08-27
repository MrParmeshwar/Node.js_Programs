import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
//This is An Example To Send Data In Database From Webpage.
// First Start Express Server Which is Created In POST Folder.
function App() {
  const [eid, setEid] = useState('');
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/student', {
        eid: eid,
        name: name,
        salary: salary,
      });

      console.log(response.data);
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h3>Employee Information</h3>
      <form>
        <label>Employee ID: </label>
        <input type="text" value={eid} onChange={(e) => setEid(e.target.value)} />
        <br /><br />

        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />

         <label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salary: </label>
        <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
        <br /><br />

        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
}

export default App;
