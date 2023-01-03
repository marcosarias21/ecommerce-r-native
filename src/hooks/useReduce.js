import { useEffect, useState } from 'react';

const useReduce = ([items]) => {
  const [totalPay, setTotalPay] = useState([]);
  useEffect(() => {
    setTotalPay(items.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0));
    console.log(totalPay);
  }, [items]);
  return totalPay;
};

export default useReduce;
