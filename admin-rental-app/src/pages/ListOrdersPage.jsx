/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import { Pagination, Table } from "antd";
import APIOrder from "../apis/APIOrder";

export function convertUTCtoLocal(utc) {
  if (!utc) return null;
  const date = new Date(utc);
  const formatter = new Intl.DateTimeFormat("id-ID", { year: "numeric", month: "short", day: "numeric" });
  return formatter.format(date);
}

export function convertNumberToLocalCurrency(number) {
  if (!number) return null;
  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" });
  return formatter.format(number);
}

function ListOrdersPage() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const currentNumber = (pageNum, pageLimit, idx) => {
    return (pageNum - 1) * pageLimit + idx;
  };

  React.useEffect(() => {
    APIOrder.getListOrders({ page: currentPage, pageSize }).then((res) => {
      setData(res);
      setPageSize(res.pageSize);
    });
  }, [currentPage, pageSize]);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (__, _, idx) => {
        return <p key={idx}>{currentNumber(currentPage, pageSize, idx + 1)}</p>;
      },
    },
    {
      title: "User email",
      dataIndex: "User",
      key: "id",
      render: (user) => {
        return <p>{user.email}</p>;
      },
    },
    { title: "Car", dataIndex: "car", key: "id", render: (val) => <p>{val || "-"}</p> },
    { title: "Start rent", dataIndex: "start_rent_at", key: "id", render: (val) => <p>{convertUTCtoLocal(val)}</p> },
    { title: "Finish rent", dataIndex: "finish_rent_at", key: "id", render: (val) => <p>{convertUTCtoLocal(val)}</p> },
    { title: "Price", dataIndex: "total_price", key: "id", render: (val) => <p>{convertNumberToLocalCurrency(val)}</p> },
    { title: "Status order", dataIndex: "status", key: "id", render: (val) => <p>{val ? "Selesai" : "Masih disewa"}</p> },
  ];

  return (
    <div>
      <h1>ListOrdersPage</h1>
      {data ? <Table columns={columns} dataSource={data.orders} pagination={false} /> : <p>Loading...</p>}
      {data && (
        <Pagination
          defaultCurrent={data.page}
          pageSize={data.pageSize}
          total={data.count}
          onChange={(page, pS) => {
            setCurrentPage(page);
            setPageSize(pS);
          }}
        />
      )}
    </div>
  );
}

export default ListOrdersPage;
