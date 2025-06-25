import { getUsers } from "../services/getUsers";

export const useGetUsers = async () => {
  const users = await getUsers();

  return users;
};
