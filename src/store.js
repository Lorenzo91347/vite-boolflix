import {reactive} from 'vue';

export const store = reactive({
    MovKey:'',
    movies:[],
    apiUrlMain: `https://api.themoviedb.org/3/search/movie?api_key=9ea34e0be580ce095104fa12533a112a&query=`,
    Api1:'https://api.themoviedb.org/3/search/',
    Api2:'api_key=9ea34e0be580ce095104fa12533a112a&query='
})