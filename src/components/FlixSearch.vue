<script>

// store imports and registration

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

<!-- Form group with a v-model connected to a avariable in Store, with an event
    listener attached to emit the variable value to the Parent Component(App.vue)-->
<form >
    <input type="text" id="" v-model="store.SearchKey" >
    <button  @click.prevent="$emit('search')">Search</button>
</form>

</template>
<style scoped lang="scss"></style>