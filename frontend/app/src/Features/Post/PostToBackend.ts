import React from "react";
import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
  headers: {
    "Content-type": "Application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-type": "Application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

const user = async () => {
  let userId;
  await api
    .get("/user")
    .then((res) => {
      console.log(res.data);
      userId = res.data.id;
    })
    .catch((error) => {
      console.log(error.data);
      alert("サインインしてください");
      window.location.href = "/signin";
    });

  return userId;
};

const PostToBackend = async (postText: string) => {
  const locationCode = localStorage.getItem("userLocationCode");
  let userId;

  console.log("PostToBackend locationCode: " + locationCode);

  console.log("PostToBackend postText: " + postText);

  await Axios.get("/sanctum/csrf-cookie");

  userId = await user();

  const response = await api.post("/post/store", {
    spot_id: locationCode,
    user_id: userId,
    content: postText,
  });

  console.log(response.data);

  window.location.href = "/";
  window.location.reload();
};

export default PostToBackend;
