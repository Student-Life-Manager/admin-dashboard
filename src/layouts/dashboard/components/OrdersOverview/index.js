

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OutpassesOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Outpasses overview
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            today
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
      <TimelineItem
          color="info"
          icon="add_circle"
          title="43 Outpasses created"
          dateTime="30 from boys, 13 from girls"
        />    
        <TimelineItem
        color="warning"
        icon="access_time"
        title="10 Outpasses pending"
        dateTime="30 from boys, 13 from girls"
      />
        <TimelineItem
          color="error"
          icon="do_not_disturb"
          title="5 Outpasses rejected by "
          dateTime="4 boys"
        />

<TimelineItem
          color="dark"
          icon="check_circle"
          title="33 Outpasses approved by "
          dateTime="10 boys, 23 girls"
        />

<TimelineItem
          color="secondary"
          icon="apartment"
          title="15 In campus outpass"
          dateTime="15 boys"
        />


<TimelineItem
          color="primary"
          icon="apartment"
          title="10 exited cammpus outpass"
          dateTime="5 boys, 5 girls"
        />


<TimelineItem
          color="success"
          icon="apartment"
          title="2 returned to campus"
          dateTime="21 left"
        />

  
      </MDBox>
    </Card>
  );
}

export default OutpassesOverview;
