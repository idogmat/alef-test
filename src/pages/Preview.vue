<template>
    <h3 class="title">Персональные данные</h3>
  <p v-if="parentName != '' && parentAge != undefined" class="parentInfo">{{parentName}}, {{parentAge}} лет</p>
    <h3 class="title">Дети</h3>
    <div v-for="child in children || []" :key="child.id">
      <p class="childElement">{{child.name}}, {{child.age}} лет</p>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "Preview",
    computed: {
        ...mapState({
            parentName:state => state.parentName,
            parentAge: state => state.parentAge,
            children: state => state.children
        }),
    },
}
</script>

<style scoped>
.title{
    font-weight: 400;
}
.parentInfo{
    font-weight: 700;
}
.childElement{
    margin: 0;
    background: #F1F1F1;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: 700;
    max-width: max-content;
}
</style>