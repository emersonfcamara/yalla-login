import DashboardEvents from "./DashBoardEvents";
import DashboardHeader from "./DashboardHeader";
import DashboardSideBar from "./DashBoardSideBar";
import DashboardEK8 from "./HomeEK8";
import "./home.css"

const HomePage = () => {
  return (
    <div id="content-container">
      <div id="_bg__home"></div>

      <div id="dashboard_layout">
        <DashboardHeader />

        <DashboardSideBar />
      </div>

      <div id="___ek7">
        <DashboardEK8 />

        <DashboardEvents />
      </div>
    </div>
  );
};

export default HomePage;
