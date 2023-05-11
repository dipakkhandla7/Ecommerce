import React, { useState, useEffect } from "react";
import axios from "axios";
import Productscard from "./Productscard";

const Mobile = () => {
  const [tv, settv] = useState([]);
  const [ld, setld] = useState(false);

  const data1 = async () => {
    setld(true);
    await axios
      .get("https://63be7882e348cb07620f754c.mockapi.io/myapi/?catagory=tv")
      .then((response) => {
        settv(response.data);
      });
    setld(false);
  };
  useEffect(() => {
    data1();
  }, []);
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home_content">
            {ld ? (
              <img src="../image/ld3.gif" style={{ marginLeft: "550px" }}></img>
            ) : (
              tv.map((item) => (
                <Productscard key={item.id} {...item}></Productscard>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mobile;
