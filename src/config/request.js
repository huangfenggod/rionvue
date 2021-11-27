import axios from "axios";

const re =axios.create({
  baseURL:'http://60.247.157.221:8081',
  timeout: 10000
})

export default re
