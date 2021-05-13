import { useEffect, useState } from "react";

// Custom hook for api calls
const useFetch = (url: string) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));

    const callApi = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setState({ data: json, loading: false });
    };
    callApi();
  }, [url, setState]);

  return state;
};

export default useFetch;
