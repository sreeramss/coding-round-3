// src/api.js
const BASE_URL = "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats";

export const fetchRetreats = async (page = 1, limit = 5, filters = {}) => {
  const filterParams = new URLSearchParams(filters).toString();
  const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}&${filterParams}`);
  console.log(response);
  return response.json();
};

export const optionRetracts =async (filters = {}) => {
    const filterParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${BASE_URL}?${filterParams}`);  return response.json();
};
