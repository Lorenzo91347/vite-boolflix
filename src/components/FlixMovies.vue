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
            console.log(response);
            this.store.movies = response.data.results
        })
    }
}

</script>
<template>

</template>
<style scoped lang="scss"></style>