export const FILTER_CATEGORIES = "FILTER_CATEGORIES";

export function sendFiltersCatagories(data){
    
    return function(dispatch){
        return dispatch({type:FILTER_CATEGORIES,payload:data})
    }
};
