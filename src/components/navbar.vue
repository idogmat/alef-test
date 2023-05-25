<template>
    <div class="navbar">
    <Logo/>
        <div class="links">
            <router-link activeClass="active" to="/">Форма</router-link>
            <router-link activeClass="active" to="/preview">Превью</router-link>
        </div>

    </div>
</template>
<script lang="ts">
import Logo from '../assets/logo.svg';


export default {
    name: 'navbar',
    components: {Logo},

}
</script>
<style scoped>
.navbar {
    height: 76px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}
.links{
    display: flex;
    gap: 1rem;
}
.active{
    color: #1a1a1a;
}
</style>
