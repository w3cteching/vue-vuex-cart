const mutations={
    ADD(state,params) {
        console.log('触发了ADD方法--state', state);
        state.num += 1;
    },
    JIAN() {
        
    }
}

export default mutations;