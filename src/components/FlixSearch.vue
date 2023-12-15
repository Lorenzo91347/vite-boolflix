<script>
import { store } from '../store';
export default{
    data(){
        return{
            store,
            
        }
    }
}
</script>
<template>
 
<form >
    <input type="text" id="" v-model="store.MovKey" >
    <button  @click.prevent="$emit('search')">Search</button>
    <select name="" id="">
        <option value="">Movies</option>
        <option value="">Tv Shows</option>
    </select>

</form>
</template>
<style scoped lang="scss"></style>