//This is an server for upload & Download .
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const upload = require('./upload');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/uploads', upload.single('file'), (req, res) => {
  res.json({ message: 'File Uploaded Successfully!' });
});

app.get('/downloads/:filename', (req, res) => {
  const file = `${__dirname}/uploads/`;
  res.download(file);
});

app.get('/list-files', (req, res) => {
  const directoryPath = path.join(__dirname, 'uploads');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error listing files:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    const fileNames = files.filter((file) => !file.startsWith('.'));

    res.json(fileNames);
  });
});
app.get('/download/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, 'uploads', fileName);
  
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to download file' });
      }
    });
  });

app.listen(3002, () => {
  console.log("Server Is Running On Port No. 3002.");
});

