import {reactive} from 'vue';

export const store = reactive({
    SearchKey:``,
    movies:[],
    tvSeries:[],
    ApiMov: `https://api.themoviedb.org/3/search/movie?`,
    ApiTv:`https://api.themoviedb.org/3/search/tv?`,
    ApiKey:`api_key=9ea34e0be580ce095104fa12533a112a&query=`,
    ApiImg:`https://image.tmdb.org/t/p/`
})