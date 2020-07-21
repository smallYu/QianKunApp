
import { MicroAppStateActions, initGlobalState } from 'qiankun';
//通信
const initialState = {
    count:0,
    //嵌套数据
    nested:{
        data:1
    }
};

const actions = initGlobalState(initialState);

export default actions;