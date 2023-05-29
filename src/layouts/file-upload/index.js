// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import Dropzone from "./Dropzone"

// Data

import projectsTableData from "layouts/all-outpasses-table/data/outpassTableData";

function Tables() {
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{ margin : "50px 0"}}>
      <div style={{ width : '600px', margin : "0 auto"}}>
    <h3 style={{ textAlign: 'center' }}>Admin upload</h3>
      <p style={{ textAlign: 'center', fontSize : '14px' }}>
      Please drop the Excel sheet containing student guardian details here to update and verify the guardians of all students in the database.
        <br />
        <em>Ideal size: 5MB or less.</em>
      </p>
    </div>

    <Dropzone/>
      </div>
      
    
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
