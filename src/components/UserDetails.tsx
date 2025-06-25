import { useNavigate, useParams } from "react-router-dom";
import type { Guarantor, User } from "../types/types";
import { checkMonthlyIncomeRange } from "../utilities/checkMonthlyIncomeRange";
import { formatNumber } from "../utilities/formatNumber";
import arrowBack from "/assets/icons/arrow-back-long.svg";
import Star from "./Star";
import { CustomLink } from "./CustomLink";

const UserDetails = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  // get and parsed stored users from localStorage
  const raw = localStorage.getItem("users");
  const users: User[] = raw ? JSON.parse(raw) : [];

  const filteredUser = users.filter((user: User) => {
    return user.profile.id === userId;
  });
  const user = filteredUser[0];

  console.log(user);

  const userAvatar = `${import.meta.env.VITE_IMAGE_GEN_URL}?name=${user.profile.firstName}+${user.profile.lastName}`;

  const handleNavigate = function () {
    navigate(-1);
  };

  return (
    <section className="user_profile">
      <main className="user_profile_content">
        <div className="go_back_btn">
          <img src={arrowBack} alt="icon" onClick={handleNavigate} />
          <span>back to users</span>
        </div>

        <section className="user_profile_content_title_wrapper">
          <h3 className="user_profile_content-title">user details</h3>

          <div className="btn_wrapper">
            <button className="blacklist_user">blacklist user</button>
            <button className="activate_user">{user.profile.status === "active" ? "deactivate user" : "activate user"}</button>
          </div>
        </section>

        <section className="user_profile_details">
          <section className="top_details">
            <div className="profile_details">
              <div className="user_id_wrapper">
                <img src={userAvatar} alt="profile picture" />

                <div className="user_id">
                  <h4 className="user_name">
                    {user.profile.firstName} {user.profile.lastName}
                  </h4>
                  <span className="user_id_number">{user.profile.id}</span>
                </div>
              </div>

              <div className="financial_details">
                <div className="user_rating">
                  <span className="tier">user's tier</span>
                  <span>
                    <Star count={user.profile.stars} />
                  </span>
                </div>

                <div className="user_account_details">
                  <span className="amount">₦{formatNumber(user.profile.monthly_income)}</span>
                  <span className="bank_details">
                    {user.profile.bank_account}/{user.profile.bank_name}
                  </span>
                </div>
              </div>
            </div>

            <div className="profile_details_nav">
              <CustomLink to={`/dashboard/users/${user.profile.id}`}>
                <span>general details</span>
              </CustomLink>
              <CustomLink to={"/dashboard/users/documents"}>
                <span>documents</span>
              </CustomLink>
              <CustomLink to={"/dashboard/users/bank-details"}>
                <span>bank details</span>
              </CustomLink>
              <CustomLink to={"/dashboard/users/loans"}>
                <span>loans</span>
              </CustomLink>
              <CustomLink to={"/dashboard/users/savings"}>
                <span>savings</span>
              </CustomLink>
              <CustomLink to={"/dashboard/users/app-and-system"}>
                <span>app and system</span>
              </CustomLink>
            </div>
          </section>

          <section className="bottom_details">
            <section className="information">
              <h4 className="heading">personal information</h4>

              <div className="info_wrapper">
                <div className="info full_name">
                  <h5>full name</h5>
                  <p>
                    {user.profile?.firstName} {user.profile?.lastName}
                  </p>
                </div>
                <div className="info phone_number">
                  <h5>phone number</h5>
                  <p>{user.profile?.phone}</p>
                </div>
                <div className="info email_address">
                  <h5>email address</h5>
                  <p>{user.profile?.email}</p>
                </div>
                <div className="info bvn">
                  <h5>bvn</h5>
                  <p>{user.profile?.bvn}</p>
                </div>
                <div className="info gender">
                  <h5>gender</h5>
                  <p>{user.profile?.gender}</p>
                </div>
                <div className="info marital_status">
                  <h5>marital status</h5>
                  <p>{user.profile?.marital_status}</p>
                </div>
                <div className="info children">
                  <h5>children</h5>
                  <p>{user.profile?.number_of_children < 1 ? "none" : user.profile?.number_of_children}</p>
                </div>
                <div className="info">
                  <h5>type of residence</h5>
                  <p>{user.profile?.type_of_residence}</p>
                </div>
              </div>
            </section>

            <section className="information">
              <h4 className="heading">education and employment</h4>

              <div className="info_wrapper education_and_employment">
                <div className="info education">
                  <h5>level of education</h5>
                  <p>{user.profile?.education_level}</p>
                </div>
                <div className="info employment_status">
                  <h5>employment status</h5>
                  <p>{user.profile?.employment_status}</p>
                </div>
                <div className="info sector">
                  <h5>sector of employment</h5>
                  <p>{user.profile?.sector_of_employment}</p>
                </div>
                <div className="info duration">
                  <h5>duration of employment</h5>
                  <p>{user.profile?.duration_of_employment}</p>
                </div>
                <div className="info office_email">
                  <h5>office email</h5>
                  <p>{user.profile?.official_email}</p>
                </div>
                <div className="info monthly_income">
                  <h5>monthly income</h5>
                  <p>{checkMonthlyIncomeRange(user.profile?.monthly_income)}</p>
                </div>
                <div className="info repayment">
                  <h5>loan repayment</h5>
                  <p>{formatNumber(user.profile?.loan_repayment)}</p>
                </div>
              </div>
            </section>

            <section className="information">
              <h4 className="heading">socials</h4>

              <div className="info_wrapper">
                <div className="info twitter">
                  <h5>twitter</h5>
                  <p>@{user.profile?.social_handle}</p>
                </div>
                <div className="info fb">
                  <h5>facebook</h5>
                  <p>
                    {user.profile?.firstName} {user.profile?.lastName}
                  </p>
                </div>
                <div className="info instagram">
                  <h5>instagram</h5>
                  <p>@{user.profile?.social_handle}</p>
                </div>
              </div>
            </section>

            <section className="information">
              <h4 className="heading">guarantors</h4>

              <div className="guarantors_wrapper">
                {user &&
                  user?.profile.guarantors?.map((guarantor: Guarantor, index: number) => (
                    <div className="guarantors" key={index}>
                      <div className="info full_name" key={index}>
                        <h5>full name</h5>
                        <p>
                          {guarantor.firstName} {guarantor.lastName}
                        </p>
                      </div>
                      <div className="info phone_number">
                        <h5>phone number</h5>
                        <p>{guarantor.phone}</p>
                      </div>
                      <div className="info email_address">
                        <h5>email address</h5>
                        <p>{guarantor.email}</p>
                      </div>
                      <div className="info relationship">
                        <h5>relationship</h5>
                        <p>{guarantor.relationship}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </section>
        </section>
      </main>
    </section>
  );
};

export default UserDetails;
