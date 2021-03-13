import { parse } from "query-string";
import React from "react";
import { useSelector } from "react-redux";
function Homeasd(props) {
    const listCarts = useSelector((state) => state.GetCarts);
    console.log(listCarts);
    let img = JSON.parse(localStorage.getItem("img"));
    console.log(img.upload);
  return (
    <div style={{ margin: "0 auto" }}>
      <h2 style={{margin: '30px auto', textAlign: 'center'}}>abc</h2>
      <div style={{ display: "flex" }}>
        {img
          ? img.upload.path.map((value, key) => {
              return (
                <li>
                  <img
                    src={value}
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    alt="123"
                  ></img>
                </li>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Homeasd;
