<script>

//Imports for Api calls,Store Management and Components

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

        // Axios Api calls to populate the .movies and .tvseries arrays

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

    // .created section to include the $emit result from the v-model in FlixSearch

    created(){
       this.search()
    },

    //Components registration
    components:{
        FlixMovies,
        FlixSearch
    }
}
</script>
<template>
    
    <!-- Template to migrate the components to the index.html file -->

    <FlixSearch @search="search"/>
    <FlixMovies/>
 
</template>
<style scoped lang="scss">

//Import for the Reset.scss

@use '../src/assets/styles/reset.scss' as *;
</style>