/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "student name", accessor: "project", width: "30%", align: "left" },
      { Header: "out date", accessor: "budget", align: "left" },
      { Header: "reason", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        project: <Project image={LogoAsana} name="Prathyusha Guduru" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            26/05/2021
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            academic
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        action: (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ paddingInline: "10px", cursor: "pointer" }}
            >
              Approve
            </MDTypography>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ cursor: "pointer" }}
            >
              Reject
            </MDTypography>
          </div>
        ),
      },
      {
        project: <Project image={logoGithub} name="Pulkit Jasti" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            28/05/2021
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            medical
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ paddingInline: "10px", cursor: "pointer" }}
            >
              Approve
            </MDTypography>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ cursor: "pointer" }}
            >
              Reject
            </MDTypography>
          </div>
        ),
      },
      {
        project: <Project image={logoAtlassian} name="Nikitha Godavarthi" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            20/05/2021
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            leisure
          </MDTypography>
        ),
        completion: <Progress color="error" value={30} />,
        action: (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ paddingInline: "10px", cursor: "pointer" }}
            >
              Approve
            </MDTypography>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ cursor: "pointer" }}
            >
              Reject
            </MDTypography>
          </div>
        ),
      },
      {
        project: <Project image={logoSpotify} name="Adithi Polamoni" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            21/05/2021
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            home
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ paddingInline: "10px", cursor: "pointer" }}
            >
              Approve
            </MDTypography>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ cursor: "pointer" }}
            >
              Reject
            </MDTypography>
          </div>
        ),
      },
      {
        project: <Project image={logoSlack} name="Janhavi Patil" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            23/05/2021
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            other
          </MDTypography>
        ),
        completion: <Progress color="error" value={0} />,
        action: (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ paddingInline: "10px", cursor: "pointer" }}
            >
              Approve
            </MDTypography>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ cursor: "pointer" }}
            >
              Reject
            </MDTypography>
          </div>
        ),
      },
      {
        project: <Project image={logoInvesion} name="Smaranika Battacharya" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            24/05/2021
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            leisure
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ paddingInline: "10px", cursor: "pointer" }}
            >
              Approve
            </MDTypography>
            <MDTypography
              component="p"
              href="#"
              color="text"
              fontWeight="medium"
              fontSize="small"
              style={{ cursor: "pointer" }}
            >
              Reject
            </MDTypography>
          </div>
        ),
      },
    ],
  };
}
