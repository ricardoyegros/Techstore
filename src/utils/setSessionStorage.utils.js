export default function setSessionStorage(key, value){
    sessionStorage.setItem(key, JSON.stringify(value));
};