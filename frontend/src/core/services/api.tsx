import axios from 'axios';
import { parseCookies } from 'nookies';

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API,
  headers: {
    Authorization: parseCookies().TOKEN_JWT,
  },
});
