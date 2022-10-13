// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// const store = new Vuex.Store({
//     state: {
//         count: 0
//     }
// });

// import { mapState } from 'vuex';

// new Vue({ 
//     el: '#app',
//     store,
//     computed: mapState({
//         count: state => state.count,
//         countAlias: 'count'
//     })
// });

// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

const veryBadRating = "1";
const badRating = "2";
const state = () => ({
    
        // count: 0, 
        val_1: 0,
        val_2: 0,
        val_11: 0,
        val_12: 0,
        val_13: 0,
        val_14: 0,
        val_21:0
    })
 const mutations = {
        // increment (state) {
        //     state.count++
        // },
        set_val_1(state, value) {
            console.log("in val 1 Store",value)
            state.val_1 = value
        },
        set_val_2(state, value) {
            console.log("in val 2 Store",value)
            state.val_2 = value
        },
        set_val_11(state, value) {
            console.log("in val 11 Store",value)
            state.val_11 = value
        },
        set_val_12(state, value) {
            console.log("in val 12 Store",value)
            state.val_12 = value
        },
        set_val_13(state, value) {
            console.log("in val 13 Store",value)
            state.val_13 = value
        },
            set_val_14(state, value) {
        console.log("in val 14 Store",value)
        state.val_14 = value
        },
        set_val_21(state, value) {
            console.log("in val 21 Store",value)
            state.val_21 = value
        }
        
    }


export default {
    state, mutations
}
