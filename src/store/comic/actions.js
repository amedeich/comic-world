import { apiFactory } from "@/factories";

const comic = apiFactory.api("comic");

const actions = {
  getComic: async ({ commit }) => {
    try {
      const { data } = await comic.get();
      commit("setComics", data);
      return {
        success: true,
      };
    } catch (e) {
      return {
        error: true,
        reason: e.response.data.error,
      };
    }
  },
};
export default actions;
