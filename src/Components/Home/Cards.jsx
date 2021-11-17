import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
//json불러오기 -> .map하기

function Cards() {
  //데이터 받아오기!:axios, async/await쓰장
  const [postData, setPostData] = useState([]);

  const getPostData = async () => {
    const { data } = await axios.get("http://localhost:4000/data", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`data`, data);
    setPostData(data);
  };
  useEffect(() => {
    getPostData();
  }, []);

  //map으로 배열안에있는 데이터들 반복문 돌려서 렌더링
  return (
    <>
      {postData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </>
  );
}

export default Cards;
