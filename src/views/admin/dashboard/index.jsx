
import React from "react";
import Breadcrombss from "../../../components/common/Breadcrombs/Breadcrombss";
import ContentCard from "../../../components/common/Card/CardContent";
const Dashboard = () => {
  return (
    <section className="p-6 mx-5 mt-[78px] rounded-lg w-full">
      <Breadcrombss menu={"Dashboard"} submenu={"Dashboard"} />
      <ContentCard>
        Hehe
      </ContentCard>
    </section>
  );
};

export default Dashboard;