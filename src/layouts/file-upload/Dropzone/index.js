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

      // const data = XLSX.utils.sheet_to_csv(ws);
      const data = XLSX.utils.sheet_to_json(ws)

      setGuardianDetails(data)

      data.map((student) => {
        console.log(student.UUID)
        console.log(student.Name)
        console.log(student.Phone)
        return null
      })
    }

    reader.readAsBinaryString(acceptedFiles[0])

  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [guardianDetails, setGuardianDetails] = useState([])
  const [status, setStatus] = useState("not_started")

  const addGuardians = () => {
    setStatus("started")
    fetch("", {
      headers: {
        'Content-Type': 'application/json'
      },
      body: guardianDetails
    })
    .then((response) => response.json())
    .then((data) => {
      setStatus("completed")
    })
    .catch((err) => {
      console.log(err);
      setStatus("failed")
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
      >
        {isDragActive ? (
          <p>Drop the file here</p>
        ) : (
          <p>Drag and drop file here</p>
        )}
      </div>
      <button style={{ border: 'none', background: 'pink', padding: '14px', borderRadius: '5px', margin: '14px' }}>Add guardians</button>
    </div>
  );
};

export default DropzoneComponent;