import axios from "axios";

export default axios.create({
  baseURL: "http://vacabaltata.ddns.net:8000",
});
