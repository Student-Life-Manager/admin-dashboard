import React from 'react';
import { useDropzone } from 'react-dropzone';

const DropzoneComponent = () => {
  const onDrop = (acceptedFiles) => {
    // Handle the dropped files here
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
    </div>
  );
};

export default DropzoneComponent;
