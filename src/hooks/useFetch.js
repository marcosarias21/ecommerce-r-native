import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    data: null,
    isLoading: true,
  });
  const getData = async () => {
    const { data } = await axios(url);
    setDataFetch({
      data,
      isLoading: false,
    });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return dataFetch;
};

export default useFetch;
