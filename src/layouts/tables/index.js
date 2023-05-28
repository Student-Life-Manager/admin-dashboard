// @mui material components
import { useState, useEffect } from 'react';
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

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import wardensTableData from "layouts/tables/data/wardensTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {

  const [students, setStudents] = useState({columns: [], rows: []});
  const [wardens, setWardens] = useState({ columns: [], rows: [] });
  const [outpasses, setOutpasses] = useState({ columns: [], rows: [] })

  const fetchStudents = () => {
    const BASE_URL = "http://localhost:8000"
    fetch(`${BASE_URL}/students`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setStudents(authorsTableData(data))
    })
    .catch((err) => console.log(err))
  }

  const fetchWardens = () => {
    const BASE_URL = "http://localhost:8000"
    fetch(`${BASE_URL}/wardens`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setWardens(wardensTableData(data))
    })
    .catch((err) => console.log(err))
  }

  const fetchOutpasses = () => {
    const BASE_URL = "http://localhost:8000"
    fetch(`${BASE_URL}/outpasses`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setOutpasses(projectsTableData(data))
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchStudents()
    fetchWardens()
    fetchOutpasses()
  }, [])

  const { columns, rows } = students;
  const { columns: wColumns, rows: wRows } = wardens;
  const { columns: pColumns, rows: pRows } = outpasses;


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Students
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Wardens
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: wColumns, rows: wRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Outpasses
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
