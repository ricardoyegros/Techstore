export default function setLocalStorage({key, value}){
        localStorage.setItem(key, JSON.stringify(value));
};