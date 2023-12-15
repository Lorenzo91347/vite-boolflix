<script>
import { store } from './store';
import axios from 'axios';
import FlixMovies from './components/FlixMovies.vue';
import FlixSearch from './components/FlixSearch.vue';
export default{
    data(){
    return{
            store,
        }
    },
    methods:{
        search(){
        axios.get(this.store.apiUrlMain + this.store.MovKey)
        .then((response) => {
            this.store.movies = response.data.results
        });
        axios
    },

    },
    created(){
       this.search()
    },
    components:{
        FlixMovies,
        FlixSearch
    }
}
</script>
<template>
    <FlixSearch @search="search"/>
    <FlixMovies/>
 
</template>
<style scoped lang="scss">
@use '../src/assets/styles/reset.scss' as *;
</style>