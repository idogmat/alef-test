import {createStore, Store} from "vuex";

interface AppState {
    parentName: string;
    parentAge: number|undefined
    children: { name: string, age: number|undefined, id: number }[]
}

const store: Store<AppState> = createStore({
    state: {
        parentName: '',
        parentAge: undefined,
        children: []
    },
    getters: {
        getParentName(state:AppState){
            return state.parentName
        }
    },
    mutations: {
        setParentName(state: AppState, name: string) {
            state.parentName = name
        },
        setParentAge(state: AppState, age: number) {
            state.parentAge = age
        },
        pushNewChildInArray(state: AppState) {
            state.children.push({name: '', age: undefined, id: Math.floor(Math.random() * 1000)})
        },
        setChildName(state: AppState, child: { i: number, name: string }) {
            state.children.forEach(e => e.id === child.i && (e.name = child.name))
        },
        setChildAge(state: AppState, child: { i: number, age: number }) {
            state.children.forEach(e => e.id === child.i && (e.age = child.age))
        },
        removeChild(state: AppState,  i: number) {
            state.children = state.children.filter(e => e.id !== i);
        },
    },
    actions: {
        updateInputValue({ commit }:Store<AppState>,option: {type:string,value:string|number}) {
            commit(option.type, option.value);
        },
        updateInputValueChild({ commit }:Store<AppState>,option: {type:string, child: { i: number, name: string }}) {
            commit(option.type, option.child);
        }
    },
})
export default store