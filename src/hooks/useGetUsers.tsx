import { getUsers } from "../services/getUsers";

export const useGetUsers = async () => {
  const users = await getUsers();

  // set users to local storage
  localStorage.setItem("users", JSON.stringify(users));

  // get users from local storage
  const storedUsers = localStorage.getItem("users");

  return storedUsers;
};
