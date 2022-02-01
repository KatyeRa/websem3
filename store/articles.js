export const state = ()=>({artices: []})

export const mutations = {setArticles(state, payload){
    state.artices = payload
}}

export const actions = {
    async fetchArticles({commit}) {
        const response = await fetch('http://demo-api.vsdev.space/api/articles')
        const data = await response.json()

        commit("setArticles", data)
    }
}

export const getters = {getArticlesSlider(state){
    
    return state.articles.filter(item =>{
        if (item.slider)
            return true
        else
            return false
    })
}}