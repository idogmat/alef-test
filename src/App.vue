<script lang="ts">
import navbar from "./components/navbar.vue";

export default {
    components: {navbar}
}
</script>

<template>
    <navbar/>
    <div class="container">
    <router-view></router-view>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 620px;
    width: 100%;
    margin: 0 auto;
    gap: 1rem;
}
</style>
