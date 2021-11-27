import axios from "axios";

const re =axios.create({
  baseURL:'http://120.24.176.228:8081',
  timeout: 10000
})

export default re
