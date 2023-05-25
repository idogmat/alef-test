<template>
    <h3>Персональные данные</h3>
    <MyInput @input="event=>updateInputValue({type:'setParentName',value:event.target.value})"
             :value="parentName"
             :id="parentName"
             label="Имя"
             type="text"
             />
    <MyInput @input="event=>updateInputValue({type:'setParentAge',value:event.target.value})"
             :value="parentAge"
             :id="parentAge"
             label="Возраст"
             type="number"
             />
    <div class="addChild">
        <h3>Дети (макс.5)</h3>

        <button :disabled="children.length === 5"
                @click="pushChildInArray"> <plusSVG/>   Добавить ребенка
        </button>
    </div>
    <div class="childrenList" v-for="child in children || []" :key="child.id">
        <MyInput @input="event=>updateInputValueChild({type:'setChildName',child:{i:child.id,name:event.target.value}})"
                 :value="child.name" type="text"
                 :id="child.id+'Name'"
                  label="Имя"/>
        <MyInput @input="event=>updateInputValueChild({type:'setChildAge',child:{i:child.id,age:event.target.value}})"
                 :value="child.age"
                 type="number"
                 :id="child.id+'Age'"
                  label="Возраст"/>
        <button @click="removeChild(child.id)">Удалить</button>
    </div>
</template>

<script>
import MyInput from "../components/MyInput.vue";
import plusSVG from '../assets/plus.svg'
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
    name: "Form",
    components: {MyInput,plusSVG},
    computed: {
        ...mapState({
            parentName: state => state.parentName,
            parentAge: state => state.parentAge,
            children: state => state.children
        }),
        ...mapGetters({
            getParentName:'getParentName'
        })
    },
    methods: {
        ...mapMutations({
            pushChildInArray: 'pushNewChildInArray',
            setChildName: 'setChildName',
            setChildAge: 'setChildAge',
            removeChild: 'removeChild'
        }),
        ...mapActions({
            updateInputValue: 'updateInputValue',
            updateInputValueChild: 'updateInputValueChild',
        }),
    }
}
</script>

<style scoped>
* {

}
.addChild{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.childrenList{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
}
</style>