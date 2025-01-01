import React from "react";
import Breadcrombss from "../../../components/common/Breadcrombs/Breadcrombss";
import ContentCard from "../../../components/common/Card/CardContent";
const Dashboard = () => {
  return (
    <section className="p-6 mx-5 mt-[78px] rounded-lg w-full">
      <Breadcrombss menu={"Dashboard"} submenu={"Dashboard"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContentCard>
          Bisa Magang
        </ContentCard>
        <ContentCard>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">No</th>
                  <th className="py-2 px-4 border-b text-left">Nama</th>
                  <th className="py-2 px-4 border-b text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">Budi Santoso</td>
                  <td className="py-2 px-4 border-b">Aktif</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">Siti Rahayu</td>
                  <td className="py-2 px-4 border-b">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentCard>
      </div>
    </section>
  );
};

export default Dashboard;