export const state = () => ({ articles: [], activeArticle: {} });

export const mutations = {
  setArticles(state, payload) {
    state.articles = payload;
  },
  setActiveArticle(state, payLoad) {
    state.activeArticle = payLoad;
  },
};

export const actions = {
  async fetchArticles({ commit }) {
    const response = await fetch(`http://demo-api.vsdev.space/api/articles`);
    const data = await response.json();

    commit("setArticles", data);
  },

  async fetchActiveArticle({ commit }, id) {
    const response = await fetch(
      `http://demo-api.vsdev.space/api/articles/${id}`
    );
    const data = await response.json();
    commit("setActiveArticle", data);
},
};

export const getters = {
  getArticlesSlider(state) {
    return state.articles.filter((item) => {
      if (item.slider) return true;
      else return false;
    });
  },

  getArticles(state) {
    return state.articles;
  },

  getActiveArticle(state) {
    return state.activeArticle;
  },
};
