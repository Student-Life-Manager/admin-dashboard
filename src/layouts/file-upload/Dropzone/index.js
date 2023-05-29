import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useDropzone } from 'react-dropzone';
import DescriptionIcon from '@mui/icons-material/Description';
import Icon from '@mui/material/Icon';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import { border, fontSize } from '@mui/system';

const DropzoneComponent = () => {
  const onDrop = (acceptedFiles) => {
    // Handle the dropped files here
    const reader = new FileReader();

    reader.onload = (event) => {
      const wb = XLSX.read(event.target.result, { type: 'binary' })

      const wsName = wb.SheetNames[0]
      const ws = wb.Sheets[wsName];

      const data = XLSX.utils.sheet_to_json(ws)

      console.log(data)

      setGuardianDetails(data)

      data.map((student) => {
        console.log(student.Email)
        console.log(student.Relation)
        console.log(student.Phone)
        return null
      })

      console.log("data",data);
    }

    reader.readAsBinaryString(acceptedFiles[0])

    setFileUploaded(true);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [guardianDetails, setGuardianDetails] = useState([])
  const [fileUploaded, setFileUploaded] = useState(false);
  const [status, setStatus] = useState("Add Guardians")

  const addGuardians = () => {
    setStatus("Adding...")
    fetch("http://localhost:8000/guardians/add_guardians", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guardianDetails)
    })
    .then((response) => response.json())
    .then((data) => {
      if(data !== true) setStatus("Failed! Try Again.")
      setStatus("Done!")
    })
    .catch((err) => {
      console.log(err);
      setStatus("Failed! Try again.")
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '350px',
      }}
    >

      {!fileUploaded ? <div
        {...getRootProps()}
        style={{
          width: '600px',
          height: '200px',
          border: '2px dashed',
          borderRadius: '8px',
          borderColor: isDragActive ? 'blue' : 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginTop : "50px", 
          color : "rgba(0,0,0,0.5)",
          fontSize : "18px"
        }}
      >

      {/* <DescriptionIcon style={{marginRight : "20px", size : "large", color : "rgba(0,0,0,0.5)"}}/> */}
        {isDragActive ? (
          <p>Drop the file here</p>
        ) : (
          <p>Drag and drop file here</p>
        )}
        
      </div> : <div
        {...getRootProps()}
        style={{
          width: '600px',
          height: '200px',
          border: '0.5px solid',
          borderRadius: '8px',
          borderColor: '#313FDD',
          backgroundColor : "#E6EBFF",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginTop : "50px"
        }}
      >
      <FileDownloadDoneIcon   style={{marginRight : "20px", size : "large"}}/>
      File uploaded
        
      </div>}
      <button style={{marginTop : "40px", paddingInline : "20px", paddingBlock : "15px", "backgroundColor" : "#313FDD", width:"200px", borderRadius : "8px", color : "#fff", border : "none", cursor : "pointer", fontWeight : "500"}}
        onClick={(e) => {
          e.preventDefault();
        addGuardians();}}>{status}
      </button>
    </div>
  );
};

export default DropzoneComponent;