//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

//This is an Example To Get Data From Mongodb with Express Server. 
//[Note: To Get Data From Express Server That Server Should Be In Running State on Port No. That You Have Mentioned.]
//  Please Before Executing This Code You Have To Run Express Code Which is Present In Side "Get_Records/index.js" 

const T1 = () => {
  const [Salary, setsalary] = useState("");
  const [userinfo, setuserinfo] = useState([]);
  const B1 = () => {
    axios.get(`http://localhost:3000/students/${Salary}`)
      .then((ob) => {
        alert("Got Data")
        setuserinfo(ob.data)
      })
      .catch((err) => {
        alert("Error Ocured");
      });
  }

  const Tr = () => {
    return userinfo.map((user, index) => (
      <tr key={index}>
        <td>{user.eid}</td>
        <td>{user.name}</td>
        <td>{user.Salary}</td>
      </tr>
    ))
  }
  return (
    <>
      <br></br>
      <input type='text' placeholder='Enter Employee Salary Here' value={Salary} onChange={(e) => setsalary(e.target.value)}></input>
      <br></br>
      <br></br>
      <button onClick={B1}>Get Data </button>
      <table border={2}>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {Tr()}
        </tbody>
      </table>
    </>
  )
}

const T2 = () => {

  const [id, setid] = useState("");
  const [userData, setUserData] = useState({});
  const B2 = () => {
    axios.get(`http://localhost:3000/student/${id}`)
      .then((ob) => {
        ob.data.id
        if (ob.data.id === null) {
          alert("Record Not Found")
        }
        else {

          setUserData(ob.data);
          alert("Got Data")
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {

          alert('Resource not found:', err);
        } else {

          alert('Axios request error:', err);
        }
      })
  }


  return (
    < div className="App">
      <input type="text" placeholder="Enter Employee Id Here" value={id} onChange={(e) => setid(e.target.value)}></input>
      <br></br>
      <br></br>
      <button onClick={B2}>Get Data </button>
      <table border={2}>
        <thead>
          <tr>
            <th>EID</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>{userData.eid}</td>
            <td>{userData.name}</td>
            <td>{userData.Salary}</td>
          </tr>

        </tbody>
      </table>

    </div>
  )
}
function App() {


  return (
    <>
      <nav>
        <ul>
          <li> To Get All Users Data From Database With Employee Salary Then Click On below Link..!</li>
          <Link to='/T1'><b>Get All Data</b></Link>
          <li>To Get Users Data From Database By There ID  Click On below Link..!</li>
          <Link to='/T2'><b>Get Data By ID</b></Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/T1' element={<T1></T1>}></Route>
        <Route path='/T2' element={<T2></T2>}></Route>
      </Routes>
      <nav>
        <ul>


        </ul>
      </nav>
    </>
  )
}
export default App;