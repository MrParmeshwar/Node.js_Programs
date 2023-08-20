//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

//This is an Example To Get Data From Express Server. 
//[Note: To Get Data From Express Server That Server Should Be In Running State on Port No. That You Have Mentioned.]

const T1 = () => {
  const [userinfo, setuserinfo] = useState([]);
  const B1 = () => {
    axios.get('http://localhost:3000/users')
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
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.Phone}</td>
      </tr>
    ))
  }
  return (
    <>
      <br></br>
      <button onClick={B1}>Get Data </button>
      <table border={2}>
      
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
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
    axios.get(`http://localhost:3000/user/${id}`)
      .then((ob) => {
        alert("Got Data")
        alert(ob.data.id)  //This will Help To Identify That The Data Is Exist In The Database or Not 
        //If The Data Is Not Exist The Above Line Will Display Message Undefind.
        setUserData(ob.data);

      })
      .catch((err) => {
        alert("Error Ocured")

      })
  }


  return (
    < div className="App">
      <input type="text" placeholder="Enter User Id Here" value={id} onChange={(e) => setid(e.target.value)}></input>
      <br></br>
      <br></br>
      <button onClick={B2}>Get Data </button>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>{userData.id}</td>
            <td>{userData.name}</td>
            <td>{userData.Phone}</td>
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
          <li> To Get All Users Data From Server Click On below Link..!</li>
          <Link to='/T1'><b>Get All Data</b></Link>
          <li>To Get Users Data From Server By There ID  Click On below Link..!</li>
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