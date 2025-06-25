import { useState } from "react";
import { Link } from "react-router-dom";
import type { UserTableProps } from "../types/types";
import { formatDate } from "../utilities/formatDate";
import filterIcon from "/assets/icons/filter-icon.svg";
import threeDots from "/assets/icons/three-dots-v.svg";
import eyeIcon from "/assets/icons/eye.svg";
import userTimesLightIcon from "/assets/icons/user-times.svg";

export default function Table({ rows }: UserTableProps) {
  const [showOptionsForIndex, setShowOptionsForIndex] = useState<number | null>(null);

  // when dots icon is clicked
  const toggleOptions = (index: number) => {
    if (showOptionsForIndex === index) {
      setShowOptionsForIndex(null);
      return;
    }

    setShowOptionsForIndex(index);
  };

  return (
    <div className="table_container">
      <table className="table">
        <thead>
          <tr>
            <th className="organization">
              <span>Organization</span>
              <img src={filterIcon} alt="icon" loading="lazy" />
            </th>
            <th className="username">
              <span>Username</span>
              <img src={filterIcon} alt="icon" loading="lazy" />
            </th>
            <th className="email">
              <span>Email</span>
              <img src={filterIcon} alt="icon" loading="lazy" />
            </th>
            <th className="phone_num">
              <span>Phone Number</span>
              <img src={filterIcon} alt="icon" loading="lazy" />
            </th>
            <th className="date">
              <span>Date Joined</span>
              <img src={filterIcon} alt="icon" loading="lazy" />
            </th>
            <th className="status">
              <span>Status</span>
              <img src={filterIcon} alt="icon" loading="lazy" />
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const fullName = `${row.profile.firstName} ${row.profile.lastName}`;

            return (
              <tr key={index} className="table_main_data">
                <td className="lender">{row.profile.lender}</td>
                <td>
                  <Link to={`/dashboard/users/${row.profile.id}`} className="username_link">
                    <span className="name">{fullName}</span>
                  </Link>
                </td>
                <td>
                  <span className="email">{row.profile.email}</span>
                </td>
                <td>
                  <span className="phone">{row.profile.phone}</span>
                </td>
                <td>
                  <span className="date">{formatDate(row.profile.date_joined)}</span>
                </td>
                <td>
                  <span className={row.profile.status}>{row.profile.status}</span>
                </td>

                <img src={threeDots} className="user_options_icon" alt="dots" onClick={() => toggleOptions(index)} />

                {showOptionsForIndex === index && (
                  <span className="options">
                    <Link to={`/dashboard/users/${row.profile.id}`} className="option">
                      <img src={eyeIcon} alt="icon" />
                      <span>view details</span>
                    </Link>
                    {row.profile.status !== "blacklisted" && (
                      <div className="option">
                        <img src={userTimesLightIcon} alt="icon" />
                        <span>blacklist user</span>
                      </div>
                    )}
                    <div className="option">
                      <img src={eyeIcon} alt="icon" />
                      <span>{row.profile.status === "active" ? "deactivate user" : "activate user"}</span>
                    </div>
                  </span>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
