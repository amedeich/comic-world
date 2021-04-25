import Comic from "@/models/Comic";

const getters = {
  comicData: (state) => {
    return new Comic(state.comic);
  },
};
export default getters;
