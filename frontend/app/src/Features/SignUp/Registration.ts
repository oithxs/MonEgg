import React from "react";
import axios from "axios";
import { Axios, api } from "../../lib/axios";

const Registration = async (name: string, email: string, password: string, passwordConfirmation: string) => {
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
        console.log(response.data);
        return response.data;
    } catch (error: any) {
        console.log("user ユーザ登録失敗");
        console.log(error.response.data);
        throw error;
    }
};

export default Registration;