
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

            <MDInput type="text" mb={2} label="Email" type="email" fullWidth style={{marginBottom : "16px"}}/>
            <MDInput type="text" mb={2} label="Password" type="password" fullWidth style={{marginBottom : "16px"}}/>
            <MDInput type="text" mb={2} label="Type of user" type="text" fullWidth style={{marginBottom : "16px"}}/>
            
            <button style={{paddingInline : "20px", paddingBlock : "15px", "backgroundColor" : "#313FDD", width:"100%", borderRadius : "8px", color : "#fff", border : "none", cursor : "pointer", fontWeight : "500", marginBottom: "30px"}}
        onClick={(e) => {
          e.preventDefault();
       ;}}>Add User
      </button>
      </MDBox>
      
    </Card>
      </div>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default CreateUsers;
