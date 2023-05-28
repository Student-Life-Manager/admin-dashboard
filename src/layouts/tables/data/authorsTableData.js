
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";


export default function data(studentDetails) {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const rows = {
    rows: studentDetails.map((student) => (
    {
        author: (
          <Author image={team2} name={`${student.first_name} ${student.last_name}`} email={student.email} />
        ),
        function: (<Job title={`YEAR ${student.academic_details.year_of_study}`} description={student.academic_details.branch} />),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {student.academic_details.section}
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {student.outpasses.length}
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Add guardian
          </MDTypography>
        ),
      }
    ))
  }

  return {
    columns: [
      { Header: "student", accessor: "author", width: "45%", align: "left" },
      { Header: "academic details", accessor: "function", align: "left" },
      { Header: "section", accessor: "status", align: "center" },
      { Header: "number of outpasses", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: rows.rows
  };
}
