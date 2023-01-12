import React from "react";
import UserChart from "../Components/UserChart";
import UserPieChart from "../Components/UserPieChart";

function Dashboard() {
  return (
    <div className="ml-16 flex w-5/6 justify-between">
      <div className=" h-80 mt-32 bg-[#f1eeee] rounded ">
        <UserChart />
      </div>
      <div className="mt-32 bg-[#f1eeee] ml-2 h-80 rounded">
        <UserPieChart/>
      </div>
    </div>
  );
}

export default Dashboard;
