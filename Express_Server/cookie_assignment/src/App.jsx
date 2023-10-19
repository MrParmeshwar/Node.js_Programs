import { useRef, useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

// This Is A Code For Set User's Choise As A Cookies .
// Express Server For This Code Is Created In Server Folder.
  
function App() {
  const M1 = useRef(null);
  const M2 = useRef(null);
  const M3 = useRef(null);
  const M4 = useRef(null);
  const M5 = useRef(null);
  const M6 = useRef(null);

  // Add state to store newly added movies
  const [newlyAddedMovies, setNewlyAddedMovies] = useState([]);

  // Function to fetch newly added movies
  const fetchNewlyAddedMovies = async () => {
    try {
      const response = await axios.get('http://localhost:3002/newlyAddedMovies');
      setNewlyAddedMovies(response.data.movies);
    } catch (error) {
      console.error("Error fetching newly added movies:", error);
    }
  };

  useEffect(() => {
    if (window.location.pathname === '/Logout') {
      // Fetch the newly added movies when the "/Logout" page is loaded
      fetchNewlyAddedMovies();
    }
  }, []);

  

  const button = async (event) => {
    console.log(`Your Value Is Given Below`);
    let arr = [];
    if (M1.current.checked) {
      console.log(M1.current.value);
      arr.push(M1.current.value);
    }
    if (M2.current.checked) {
      console.log(M2.current.value);
      arr.push(M2.current.value);
    }
    console.log(arr);
    let ob = { Movies: arr };

    await axios.post('http://localhost:3002/movie', ob)
      .then((ob) => {
        alert("Data Sent Successfully");
      })
      .catch((err) => {
        alert("Error Occurred");
      });
  };

  const Home = () => {
    console.log("Now You Are On Your Home Page");
    return (
      <h2>This is Home Page.</h2>
    );
  };

  const button1 = async () => {
    console.log(`Your Value Is Given Below`);
    let arr = [];
    if (M3.current.checked) {
      console.log(M3.current.value);
      arr.push(M3.current.value);
    }
    if (M4.current.checked) {
      console.log(M4.current.value);
      arr.push(M4.current.value);
    }
    console.log(arr);
    let ob = { Movies: arr };

    await axios.post('http://localhost:3002/movie', ob)
      .then((ob) => {
        alert("Data Sent Successfully");
      })
      .catch((err) => {
        alert("Error Occurred");
      });
  };

  const T1 = () => {
    console.log("Add Marathi Movies Here.");

    return (
      <>
        <h2>You Can Add Marathi Movies Here.</h2>
        <table border={2}>
          <tbody>
            <tr>
              <td>Phatteshikast </td><td><input type="checkbox" ref={M1} value="Phatteshikast"></input></td>
            </tr>
            <tr>
              <td>Pawankhind </td><td> <input type="checkbox" ref={M2} value="Pawankhind"></input></td>
            </tr>
          </tbody>
        </table>
        <input type="button" value="Add Movies" onClick={button}></input>
      </>
    );
  };

  const button3 = async () => {
    console.log(`Your Value Is Given Below`);
    let arr = [];
    if (M5.current.checked) {
      console.log(M5.current.value);
      arr.push(M5.current.value);
    }
    if (M6.current.checked) {
      console.log(M6.current.value);
      arr.push(M6.current.value);
    }
    console.log(arr);
    let ob = { Movies: arr };

    await axios.post('http://localhost:3002/movie', ob)
      .then((ob) => {
        alert("Data Sent Successfully");
      })
      .catch((err) => {
        alert("Error Occurred");
      });
  };

  const T2 = () => {
    console.log("Add Hindi Movies Here");
    return (
      <>
        <h2>You Can Add Hindi Movies Here.</h2>
        <table border={2}>
          <tbody>
            <tr>
              <td>KGF-I </td><td><input type="checkbox" ref={M3} value="KGF-I"></input></td>
            </tr>
            <tr>
              <td>KGF-II </td><td> <input type="checkbox" ref={M4} value="KGF-II"></input></td>
            </tr>
          </tbody>
        </table>
        <input type="button" value="Add Movies" onClick={button1}></input>
      </>
    );
  };

  const T3 = () => {
    console.log("Add English Movies Here");
    return (
      <>
        <h2>You Can Add English Movies Here.</h2>
        <table border={2}>
          <tbody>
            <tr>
              <td>Spider-Man </td><td><input type="checkbox" ref={M5} value="Spider-Man"></input></td>
            </tr>
            <tr>
              <td>Lionking </td><td> <input type="checkbox" ref={M6} value="Lionking"></input></td>
            </tr>
          </tbody>
        </table>
        <input type="button" value="Add Movies" onClick={button3}></input>
      </>
    );
  };

  const T4 = () => {
    console.log("Logout Successfully...!");
    return (
      <>
        <h2>You Have Added Following Movies. <br></br></h2> <h4>[Note: Following Data Will Display In FireFox Browser Only.]</h4>
        <ul>
          {newlyAddedMovies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'><b>Home</b></Link></li>
          <li><Link to='/Marathi'><b>Marathi</b></Link></li>
          <li><Link to='/Hindi'><b>Hindi</b></Link></li>
          <li><Link to='/English'><b>English</b></Link></li>
        </ul>
        <Link to='/Logout'><input type='button' value="Logout" /></Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Marathi' element={<T1 />} />
        <Route path='/Hindi' element={<T2 />} />
        <Route path='/English' element={<T3 />} />
        <Route path='/Logout' element={<T4 />} />
      </Routes>
    </>
  );
}

export default App;
