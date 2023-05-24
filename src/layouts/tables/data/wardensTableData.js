
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
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

  return {
    columns: [
      { Header: "warden", accessor: "author", width: "45%", align: "left" },
      { Header: "tower", accessor: "function", align: "left" },
      { Header: "hostel type", accessor: "status", align: "center" },
      // { Header: "your face", accessor: "employed", align: "center" },
      // { Header: "my face", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="Alekhya kullu" email="alekhya_kull@srmap.edu.in" />,
        function: <Job title="TOWER 1" description="Ganga" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Boys
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Add guardian
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Ramadevi Polla" email="ramadevi_polla@srmap.edu.in" />,
        function: <Job title="TOWER 2" description="Yamuna" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Girls
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Add guardian
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Nirmala Patil" email="nirmala_patil@srmap.edu.in" />,
        function: <Job title="TOWER 3" description="Yamuna" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Girls
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Add guardian
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Tharun Kullu" email="tharun_kullu@srmap.edu.in" />,
        function: <Job title="TOWER 2" description="Krishna" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Boys
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            5
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Add guardian
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Reena Deshmukh" email="reena_deshmukh@srmap.edu.in" />,
        function: <Job title="TOWER 3" description="Narmada" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Girls
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Add guardian
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Ananya Pandey" email="ananya_pandey@srmap.edu.in" />,
        function: <Job title="TOWER 3" description="Godavari" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Girls
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Add guardian
          </MDTypography>
        ),
      },
    ],
  };
}
