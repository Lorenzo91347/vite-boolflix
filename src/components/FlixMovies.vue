<script>

// Store import

import {store} from '../store'
export default{

    //Include the store variable in the data
    
    data(){
        return{
            store,
        }
    },

    //methods function to transform the average_vote property from the Api call into an integer from 1 to 5

    methods: {
        getVote(vote) {
            return Math.ceil(vote / 2 )
        },
    }
}
</script>

<!-- Movie and Tv card templates,including a v-for to iterate the object arrays populated from the APIs 
    to fill the list tags, and another to iterate the Vue ternary operation to post full or empty stars based on vote,
    including the function found in methods above.-->

<template>
    <h2>Movies</h2>
    <ul v-for="item in store.movies">
        <li>{{ item.original_title }}</li>
        <li>{{ item.title }}</li>

        <!-- directives to render a different flag based on the movie language -->

        <img v-if="item.original_language === 'en'" src="https://flagsapi.com/GB/flat/16.png">
        <img v-else-if="item.original_language === 'it'" src="https://flagsapi.com/IT/flat/16.png">
        <li v-else>No data Available</li>

        <!-- Poster image taken from a first base url plus the end part iterated from the Api arrays -->

        <img :src="'https://image.tmdb.org/t/p/w154/'+ item.poster_path " alt="">

        <!-- Ternary operation to post the right amount of stars from FontAwesome -->

        <font-awesome-icon v-for="n in 5" :icon="`${n <= getVote(item.vote_average)? 'fa-solid' : 'fa-regular'} fa-star`" />
    </ul>

    <h2>Serie</h2>
    <ul v-for="item in store.tvSeries">
        <li>{{ item.original_name }}</li>
        <li>{{ item.name }}</li>

    <!-- directives to render a different flag based on the movie language -->
    
        <img v-if="item.original_language === 'en'" src="https://flagsapi.com/GB/flat/16.png">
        <img v-else-if="item.original_language === 'it'" src="https://flagsapi.com/IT/flat/16.png">
        <li v-else>No data Available</li>

         <!-- Poster image taken from a first base url plus the end part iterated from the Api arrays -->

        <img :src="'https://image.tmdb.org/t/p/w154/'+ item.poster_path " alt="">

        <!-- Ternary operation to post the right amount of stars from FontAwesome -->
        
        <font-awesome-icon v-for="n in 5" :icon="`${n <= getVote(item.vote_average)? 'fa-solid' : 'fa-regular'} fa-star`" />
    </ul>
</template>
<style scoped lang="scss">
</style>