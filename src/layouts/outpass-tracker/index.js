
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Notifications() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <OrdersOverview/>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Notifications;
