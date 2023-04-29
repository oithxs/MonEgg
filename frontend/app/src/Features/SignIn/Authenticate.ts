import axios from "axios";

const Authenticate = async (email: string, password: string) => {
  const Axios = axios.create({
    baseURL: "http://localhost:8000",

    // 以下の項目は必須
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

  const userData = {
    email: email,
    password: password,
  };

  await Axios.get("/sanctum/csrf-cookie").then(async (response: any) => {
    // このブロックは必須
    await api
      .post("/login", userData)
      .then((response: any) => {
        console.log("ログイン成功");
        window.location.href = "/";
      })
      .catch((error: any) => {
        console.log("ログイン失敗");
        alert("ログインに失敗しました");
      });
  });
};

export default Authenticate;
