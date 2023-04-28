import axios from "axios";
import { Axios, api } from "../../lib/axios";

const Authenticate = async (email: string, password: string) => {
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
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log("ログイン失敗");
      });
  });
};

export default Authenticate;
