import { useState } from "react";
import { usePagination } from "@mantine/hooks";

import type { User } from "../types/types";

import userPinkIcon from "/assets/icons/users-pink.svg";
import usersGroup from "/assets/icons/np_users-group.svg";
import moneyFile from "/assets/icons/money-file.svg";
import coinsPink from "/assets/icons/coins-pink.svg";

import Widget from "./Widget";
import Table from "./Table";
import Pagination from "./Pagination";

const Dashboard = () => {
  // get and parsed stored users from localStorage
  const raw = localStorage.getItem("users");
  const users: User[] = raw ? JSON.parse(raw) : [];

  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(10);
  const [currentData, setCurrentData] = useState<User[]>(users?.slice(0, endIndex));

  const itemsPerPage = 10;
  const total = Math.ceil(users?.length / itemsPerPage);

  const pagination = usePagination({
    total,
    initialPage: 1,
    siblings: 1,
    boundaries: 2,
    onChange: (page) => {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const currentList = users.slice(start, end);
      setCurrentData(currentList);
      setStartIndex(start + 1);
      setEndIndex(end > users.length ? users.length : end);
    },
  });

  const usersWithLoan = users.filter((user: User) => user.profile.loan_repayment > 0).length;
  const activeUsers = users.filter((user: User) => user.profile.status === "active").length;
  const usersWithSavings = users.filter((user: User) => user.profile.savings_amount > 0).length;

  return (
    <>
      <h3 className="dashbord_main-title">users</h3>
      <main>
        <section className="widget_wrapper">
          <Widget icon={userPinkIcon} title="users" number={users.length} className="widget_icon_bg_deep-pink" />
          <Widget icon={usersGroup} title="active users" number={activeUsers} className="widget_icon_bg_blue-violet" />
          <Widget icon={moneyFile} title="users with loan" number={usersWithLoan} className="widget_icon_bg_sunset-orange" />
          <Widget icon={coinsPink} title="users with savings" number={usersWithSavings} className="widget_icon_bg_bright-pink" />
        </section>

        <section className="table_wrapper">
          <Table rows={currentData} />
          <Pagination
            currentPage={pagination.active}
            range={pagination.range}
            startIndex={startIndex}
            endIndex={endIndex}
            nextPage={pagination.next}
            prevPage={pagination.previous}
            goToPage={pagination.setPage}
            totalItems={users.length}
            totalPages={total}
          />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
