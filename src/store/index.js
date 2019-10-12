import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

import state from './state'
import actions from './actions'
import mutations from './mutatons'
import getters from './getters'

//引入登录的vuex模块
import login from './login'

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        login
    }
})