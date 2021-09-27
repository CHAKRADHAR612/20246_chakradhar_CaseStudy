class AuthenticationService{
    registerSuccessfulLogin(username,userId){
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('authenticatedUserId',userId);
        console.log('session with user created successfully');
    }
    registerSuccessfulLogout(){
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('authenticatedUserId');
        sessionStorage.removeItem('authenticatedRole');
        console.log('session with user removed successfully');
    }
    getUser(){
        let user=sessionStorage.getItem('authenticatedUser');
        return user;
    }
    getUserId(){
        let userId=sessionStorage.getItem('authenticatedUserId');
        return userId;
    }
    isLoggedIn(){
        let userLoggedIn=sessionStorage.getItem('authenticatedUser');
        console.log(userLoggedIn);
        if(userLoggedIn===null){
            return false;
        }
        return true;
    }
}
export default new AuthenticationService();