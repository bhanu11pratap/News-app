import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
export default function ApiCall({ category, title }) {
  const [content, setContent] = useState("");
  const [load, setLoad] = useState(false);

  const callapi = async () => {
    setLoad(true);
    await axios
      .get(
        category
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=bd6c9bca670145fe85546a11c888dc34`
          : `https://newsapi.org/v2/top-headlines?country=in&apiKey=bd6c9bca670145fe85546a11c888dc34`
      )
      .then((data) => setContent(data.data.articles));

    setLoad(false);
  };

  useEffect(() => {
    callapi();
  }, [category]);

  return (
    <div className="container my-4">
      <h3 className="text-center" style={{ textDecoration: "underline" }}>
        TODAY NEWS - {title}
      </h3>
      {load ? (
        <Spinner />
      ) : (
        <div
          className="container d-flex flex-row flex-wrap my-3"
          style={{ minHeight: "100vh" }}
        >
          {content &&
            content.map((item, index) => (
              <div
                className="container my-3 p-3"
                key={item.id}
                style={{
                  width: "600px",
                  boxShadow: "2px 2px 10px black",

                  borderRadius: "10px",
                }}
              >
                <h5 className="my-2">{item.title}</h5>
                <div className="d-flex justify-content-center align-item-center">
                  <img
                    src={item.urlToImage}
                    alt="not found"
                    className="img-fluid "
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="my-1">{item.content}</p>
                <a href={item.url} target="blank">
                  View more
                </a>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
