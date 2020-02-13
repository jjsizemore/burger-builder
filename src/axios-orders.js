import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-feb0b.firebaseio.com/"
});

export default instance;
