import store from "../app/store";
import {setList} from "../app/slice"
import Api from "../api/api";

const api = new Api();

export const exampleApi = (params, callback) => {
    return api.exampleApi(params).then(data => {
        store.dispatch(setList(data.data))
        callback("", data.data); //화면단으로 데이터 전송 필요시에만 작성
    })
};
