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
            axios.get(this.store.ApiMov + this.store.ApiKey + this.store.SearchKey  )
            .then((response) => {
                this.store.movies = response.data.results
        });
        axios.get(this.store.ApiTv + this.store.ApiKey + this.store.SearchKey  )
            .then((response) => {
                this.store.tvSeries = response.data.results
        });
        
    }
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