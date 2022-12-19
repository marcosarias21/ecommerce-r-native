import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    data: null,
    loading: true,
  });
  const getData = async () => {
    const { data } = await axios(url);
    setDataFetch({
      data,
      loading: false,
    });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return dataFetch;
};

export default useFetch;
