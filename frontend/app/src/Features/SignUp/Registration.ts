import React from "react";
import axios from "axios";

const Registration = async (name: string, email: string, password: string, passwordConfirmation: string) => {
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
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }
    });

    const userData = {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
    }

    await Axios.get("/sanctum/csrf-cookie");

    try {
        const response = await api.post("/register", userData);
        console.log("user ユーザ登録成功");
        window.location.href = "/";
        return response.data;
    } catch (error: any) {
        console.log("user ユーザ登録失敗");
        console.log(error.response.data);
        alert("ユーザ登録に失敗しました");
        throw error;
    }
};

export default Registration;