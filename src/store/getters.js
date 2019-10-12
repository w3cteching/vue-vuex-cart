export default {
    getTotalPrice(state) {
        console.log('getters--state',state);
        //return state;
        let sum = 0;
        state.arr.forEach((item,index) => {
            sum+=item.price*item.num
        });

        return sum;
    }


}