import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useDropzone } from 'react-dropzone';

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
    }

    reader.readAsBinaryString(acceptedFiles[0])

  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [guardianDetails, setGuardianDetails] = useState([])
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
      {...getRootProps()}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
    <div style={{ width : '600px'}}>
    <h3 style={{ textAlign: 'center' }}>Admin upload</h3>
      <p style={{ textAlign: 'center', fontSize : '14px' }}>
      Please drop the Excel sheet containing student guardian details here to update and verify the guardians of all students in the database.
        <br />
        <em>Ideal size: 5MB or less.</em>
      </p>
    </div>
      <div
        {...getInputProps()}
        style={{
          width: '600px',
          height: '200px',
          border: '2px dashed',
          borderRadius: '8px',
          borderColor: isDragActive ? 'blue' : 'gray',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginTop : "50px"
        }}
        onClick={(e) => {
          addGuardians();
        }}
      >
        {isDragActive ? (
          <p>Drop the file here</p>
        ) : (
          <p>Drag and drop file here</p>
        )}
      </div>
      <button onClick={(e) => {
        addGuardians();
      }} style={{ border: 'none', background: 'pink', padding: '14px', borderRadius: '5px', margin: '14px' }}>{status}</button>
    </div>
  );
};

export default DropzoneComponent;