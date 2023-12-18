<script>
import {store} from '../store'
export default{
    data(){
        return{
            store,
            number:'',
        }
    },
    methods: {
        getVote(vote) {
            return Math.ceil(vote / 2 )
        },
        
    }

}


</script>
<template>
    <h2>Movies</h2>
<ul v-for="item in store.movies">
    <li>{{ item.original_title }}</li>
    <li>{{ item.title }}</li>
    <img v-if="item.original_language === 'en'" src="https://flagsapi.com/GB/flat/16.png">
    <img v-else-if="item.original_language === 'it'" src="https://flagsapi.com/IT/flat/16.png">
    <li v-else>No data Available</li>
    <img :src="'https://image.tmdb.org/t/p/w154/'+ item.poster_path " alt="">
    <li>{{ getVote(item.vote_average) }}</li>
</ul>
<h2>Tv Shows</h2>
<ul v-for="item in store.tvSeries">
    <li>{{ item.original_name }}</li>
    <li>{{ item.name }}</li>
    <img v-if="item.original_language === 'en'" src="https://flagsapi.com/GB/flat/16.png">
    <img v-else-if="item.original_language === 'it'" src="https://flagsapi.com/IT/flat/16.png">
    <li v-else>No data Available</li>
    <img :src="'https://image.tmdb.org/t/p/w154/'+ item.poster_path " alt="">
    <li v-for="n in getVote(item.vote_average)"><i class="fa-solid fa-star"></i></li>
</ul>
</template>
<style scoped lang="scss">
</style>