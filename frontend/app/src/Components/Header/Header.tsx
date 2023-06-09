import { HamburgerMenu } from "./HamburgerMenu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ButtonForUser = (): JSX.Element => {
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

  Axios.get("/sanctum/csrf-cookie");

  api
    .get("http://localhost:8000/api/user/", {
      headers: {
        "Content-type": "Application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    })
    .then((res) => {
      return <AccountCircleIcon sx={{ ml: "auto" }} />;
    })
    .catch((err) => {
      return (
        <Button color="inherit" href="/signup" sx={{ ml: "auto" }}>
          Signip
        </Button>
      );
    });

  return (
    <Button color="inherit" href="/signup" sx={{ ml: "auto" }}>
      SignUp
    </Button>
  );
};

/**
 * ヘッダを表示する
 *
 * @return {JSX.Element}
 */
export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <HamburgerMenu />
        <Typography variant="h4" component="div">
          Logpose
        </Typography>
        <ButtonForUser />
      </Toolbar>
    </AppBar>
  );
};
