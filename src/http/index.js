import axios from "axios";
import plugins from "@/plugins";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const http = axios.create({
  params: {},
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    const errResponse = err.response;
    plugins.$swal({
      title: "Ha ocurrido un error",
      text: errResponse.data.error ?? "Error inesperado, intente de nuevo.",
      icon: "error",
      confirmButtonColor: "#CBAD6E",
      confirmButtonText: "Ok",
    });
    return Promise.reject(err);
  }
);

export default http;
