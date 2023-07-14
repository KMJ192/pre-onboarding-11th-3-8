import axios from "axios";

const Axios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL ?? "https://api.github.com/repos"}`,
  headers: {
    Accept: "application/vnd.github+json",
    Authorization:
      process.env.REACT_APP_ACCESS_KEY && `Bearer ${process.env.REACT_APP_ACCESS_KEY}`,
    "X-GitHub-Api-Version": "2022-11-28"
  },
  timeout: 5000
});

export default Axios;
