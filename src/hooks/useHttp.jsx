import React, { useEffect, useState, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Failed to request");
  }

  return resData;
}

const useHttp = (url, config, initialData) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState();

  const sendRequest = useCallback(
    async function sendRequest() {
      try {
        setIsLoading(true);
        const resData = await sendHttpRequest(url, config);
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config)
      sendRequest();
  }, [sendRequest, config]);
  return {
    error,
    isLoading,
    data,
    sendRequest,
  };
};

export default useHttp;
