import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Az21gFMB4FY1C1L4xzNFv2YdL2J1WIX4-xn2Zr4e-U4"
  }
});
