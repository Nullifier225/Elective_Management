export const getUser = () => {
 const userStr = sessionStorage.getItem('user');
 if(userStr) return JSON.parse(userStr);
 else return null;
}

export const getToken = () => {
    //alert(sessionStorage.getItem('user'))
    //alert(sessionStorage.getItem('token'))
    return sessionStorage.getItem("token") || null;

}

export const getRole = () => {
    //alert(sessionStorage.getItem('user'))
    //alert(sessionStorage.getItem('token'))
    return sessionStorage.getItem("role");

}

export const setUserSession = (token, user, role) => {
    sessionStorage.setItem("token",token);
    sessionStorage.setItem("user",user);
    sessionStorage.setItem("role",role);

}

export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("role");

}