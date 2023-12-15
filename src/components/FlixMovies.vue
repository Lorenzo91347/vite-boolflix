<script>
import axios from 'axios'
import {store} from '../store'
export default{
    data(){
        return{
            store,
        }
    },
    created(){
        console.log('created FlixMovies')
        axios.get(this.store.apiUrl)
        .then((response) => {
            this.store.movies = response.data
        });
        console.log(this.store.movies)
    }
}

</script>
<template>
<ul v-for="item in store.movies.results">
    <li>{{ item.original_title }}</li>
    <li>{{ item.title }}</li>
    <li>{{ item.original_language }}</li>
    <li>{{ item.vote_average }}</li>
</ul>
</template>
<style scoped lang="scss"></style>