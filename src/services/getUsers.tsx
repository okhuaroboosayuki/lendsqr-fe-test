export const getUsers = async () => {
  const api_url = import.meta.env.VITE_JSON_API;
  const api_token = import.meta.env.VITE_API_TOKEN;

  const res = await fetch(`${api_url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_token}`,
    },
  });

  const data = await res.json();
  return data;
};
