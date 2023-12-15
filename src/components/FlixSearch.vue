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
    <input type="text" id="" v-model="this.store.MovKey" >
    <button>Search</button>
    
</form>
</template>
<style scoped lang="scss"></style>