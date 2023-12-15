<script>
import {store} from '../store'
export default{
    data(){
        return{
            store,
        }
    },
    
}

</script>
<template>
<ul v-for="item in store.movies">
    <li>{{ item.original_title }}</li>
    <li>{{ item.title }}</li>
    <li>{{ item.original_language }}</li>
    <li>{{ item.vote_average }}</li>
</ul>
</template>
<style scoped lang="scss"></style>