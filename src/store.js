import {reactive} from 'vue';

// Variable containing the v-model variable,empty arrays to populate with Api calls,and Api URL components

export const store = reactive({
    SearchKey:``,
    movies:[],
    tvSeries:[],
    ApiMov: `https://api.themoviedb.org/3/search/movie?`,
    ApiTv:`https://api.themoviedb.org/3/search/tv?`,
    ApiKey:`api_key=9ea34e0be580ce095104fa12533a112a&query=`,
    ApiImg:`https://image.tmdb.org/t/p/`
})