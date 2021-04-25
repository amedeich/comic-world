import http from "../../http";

const resource = "https://xkcd.now.sh/";

export default {
  get: () => {
    const randomParam = Math.floor(Math.random() * 1000) + 1;
    return http.get(`${resource}?comic=${randomParam}`);
  },
};
