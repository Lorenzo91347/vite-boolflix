import {reactive} from 'vue';

export const store = reactive({
    searchText:'',
    loading: true,
    movies:[],
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=9ea34e0be580ce095104fa12533a112a&query=ritorno+al+futuro'
})