// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

//This is an Example To Upload And Download Data From Express Server. 
// Use Server Which is created in Upload_File Folder.

const T1 = () => {
  const fileInput = useRef('null');
  const B1 = async () => {
    const file = fileInput.current.files[0]
    const test = new FormData()
    test.append('file', file)
    await axios.post('http://localhost:3002/uploads', test)
      .then((ob) => {
        alert("Data Sent Successfully")
      })
      .catch((err) => {
        alert("Error Ocured");
      });

  }
  return (
    <>
      <br></br>
      <input type='file' ref={fileInput} name='file' ></input>
      <button onClick={B1}>Upload Data</button>
    </>
  )
}
const T2 = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    // It Will Fetch the list of files from our Express server
    axios.get('http://localhost:3002/list-files')
      .then((response) => {
        setFileList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching file list:', error);
      });
  }, []);
  const handleDownload = (fileName) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = `http://localhost:3002/download/${encodeURIComponent(fileName)}`;
    downloadLink.target = '_blank';
    downloadLink.download = fileName;
    downloadLink.click();
  };
//encodeURIComponent This Will Help Us To encrypt Our URL 
  return (
    <div>
      <br />
      <br />

      <table border={2}>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {fileList.map((fileName) => (
            <tr key={fileName}>
              <td>{fileName}</td>
              <td>
                <button onClick={() => handleDownload(fileName)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
function App() {
  return (
    <>
      <nav>
        <ul>
          <li> To Upload Your Data on Server Then Click On below Link..!</li>
          <Link to='/T1'><b>Upload Your Files.</b></Link>
          <li>To Download Data From Server Then Click On below Link..!</li>
          <Link to='/T2'><b>Download Your Data</b></Link>
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