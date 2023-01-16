/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import { Table } from "antd";
import APIOrder from "../apis/APIOrder";

function ListCarsPage() {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    APIOrder.getListOrders({ page: 1, pageSize: 10 }).then((res) => {
      setData(res);
    });
  }, []);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (__, _, idx) => {
        return <p key={idx}>{idx + 1}</p>;
      },
    },
    { title: "total_price", dataIndex: "total_price", key: "id" },
    { title: "start_rent_at", dataIndex: "start_rent_at", key: "id" },
    { title: "finish_rent_at", dataIndex: "finish_rent_at", key: "id" },
    { title: "status", dataIndex: "status", key: "id" },
    { title: "slip", dataIndex: "slip", key: "id" },
    { title: "UserId", dataIndex: "UserId", key: "id" },
    { title: "CarId", dataIndex: "CarId", key: "id" },
    { title: "createdAt", dataIndex: "createdAt", key: "id" },
    { title: "updatedAt", dataIndex: "updatedAt", key: "id" },
  ];

  return (
    <div>
      <h1>ListCarsPage</h1>
      {data ? <Table columns={columns} dataSource={data.orders} /> : <p>Loading...</p>}
    </div>
  );
}

export default ListCarsPage;
