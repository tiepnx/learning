import AppConsts from "./appconst"
function setToken(token:any){
    localStorage.setItem(AppConsts.storeKey, JSON.stringify(token))
}
function getToken(){
    const token = localStorage.getItem(AppConsts.storeKey);
    const accesskey = token ? JSON.parse(token).accessToken : null;
    return accesskey;
}
function getUserId(){
    const token = localStorage.getItem(AppConsts.storeKey);
    const userId = token ? JSON.parse(token).userId : null;
    return userId;
}

function clearToken(){
    //localStorage.removeItem(AppConsts.storeKey);
    debugger;
    localStorage.clear();
    sessionStorage.clear();
}
export {setToken, getToken, clearToken, getUserId}