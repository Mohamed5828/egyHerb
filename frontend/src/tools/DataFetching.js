import { useState, useEffect } from "react";
import { USERNAME, PASSWORD } from "./config";
import { getToken } from "./SignIn";
const axios = require("axios");
export function useDataFetching(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = await getToken(USERNAME, PASSWORD);
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let reverseItems;
        Array.isArray(response)
          ? (reverseItems = response.reverse())
          : (reverseItems = response);
        console.log(reverseItems);
        setData(reverseItems);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        // setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}
