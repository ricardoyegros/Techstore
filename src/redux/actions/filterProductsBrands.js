export const FILTER_BRAND = "FILTER_BRAND";

export function sendFiltersBrand(data){
    return function(dispatch){
            return dispatch({type:FILTER_BRAND,payload:data})
    }
};
