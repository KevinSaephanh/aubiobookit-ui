import { useEffect, useState } from "react";
import axios from "axios";

// Custom hook for api calls
const useAxios = (url: string) => {
  const [state, setState] = useState({ data: {}, loading: true });

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));

    const callApi = async () => {
      const res = await axios.request({ url });

      // Set cookie
      if (res.data.token && !axios.defaults.headers.common["X-CSRF-Token"]) {
        const { csrfToken } = res.data;
        axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;
      }

      // Set data using api response
      setState({ data: res, loading: false });
    };
    callApi();
  }, [url, setState]);

  return state;
};

export default useAxios;
