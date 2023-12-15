<script>
import FlixMovies from './components/FlixMovies.vue';
import FlixSearch from './components/FlixSearch.vue';
export default{
    components:{
        FlixMovies,
        FlixSearch
    }
}
</script>
<template>
    <FlixSearch/>
    <FlixMovies/>
 
</template>
<style scoped lang="scss">
@use '../src/assets/styles/reset.scss' as *;
</style>