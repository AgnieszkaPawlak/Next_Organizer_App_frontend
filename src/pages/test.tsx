import React, { useState, useEffect } from 'react';

const getData = async()=>  {
  const res = await fetch('http://localhost:3001/users');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json()

  console.log(data)
  return data;
}

const Test = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return(
    <>
        <div>{JSON.stringify(data)}</div>
         {/* {data.map((el)=> <p key={el.id}>{el.username}</p>)} */}
    </>

    ) 
}

export default Test;