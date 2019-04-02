<template>
    <div id="app">
        <div>{{ $store.state.userName }} - {{ message }}</div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Hello World!!!!"
            };
        }
    };
</script>

<style>
    #app {
        font-size: 18px;
        font-family: "Roboto", sans-serif;
        color: red;
    }
</style>