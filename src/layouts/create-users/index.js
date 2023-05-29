import { useState } from 'react';

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function CreateUsers() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleAddUser = async (e) => {
    e.preventDefault();

    let endpoint = "";
    if (userType === "warden") {
      endpoint = "http://localhost:8000/wardens/register";
    } else if (userType === "student") {
      endpoint = "http://localhost:8000/students/register";
    } else if (userType === "guard") {
      endpoint = "http://localhost:8000/guards/register";
    }


    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');

    if (endpoint) {``
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: headers,
          body: JSON.stringify({ email, password }),
        });

        console.log("body", JSON.stringify({ email, password }))

        if (response.ok) {
          // User created successfully
          console.log("User created successfully");
        } else {
          // Handle error response
          console.log("Failed to create user");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{
          width: '100%', 
          display: 'flex',
          justifyContent : "center",
          paddingBlock : "100px"
        }}>
      <Card style={{
          width: '600px',
         
          display: 'flex',
        }}>
       
      <MDBox pt={3} px={3}>
        <MDTypography variant="h5" fontWeight="medium">
          Create Users
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
           
            Create different user roles
           
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox component="form" role="form" pr={3} pl={3}>
            {/* <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password"  fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Type of user" fullWidth />
            </MDBox> */}

<MDInput
        type="email"
        mb={2}
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: "16px" }}
      />
      <MDInput
        type="password"
        mb={2}
        label="Password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "16px" }}
      />
      <MDInput
        type="text"
        mb={2}
        label="Type of user"
        fullWidth
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        style={{ marginBottom: "16px" }}
      />
            
            <button style={{paddingInline : "20px", paddingBlock : "15px", "backgroundColor" : "#313FDD", width:"100%", borderRadius : "8px", color : "#fff", border : "none", cursor : "pointer", fontWeight : "500", marginBottom: "30px"}}
        onClick={handleAddUser}>Add User
      </button>
      </MDBox>
      
    </Card>
      </div>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default CreateUsers;
