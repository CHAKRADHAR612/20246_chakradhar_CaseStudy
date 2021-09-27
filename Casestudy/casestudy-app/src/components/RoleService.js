class RoleService{
    setRole(myRole){
        sessionStorage.setItem('authenticatedRole',myRole);
        console.log(myRole);
    }
    
    getRole(){
        let role=sessionStorage.getItem('authenticatedRole');
        return role;
    }

    deleteRole(){
        sessionStorage.removeItem('authenticatedRole')
    }
    isAdmin(){
        if(sessionStorage.getItem('authenticatedRole')==='Admin'){
            return true;
        }else{
            return false;
        }
    }
    isTaskOwner(){
        if(sessionStorage.getItem('authenticatedRole')==='task owner'){
            return true;
        }else{
            return false;
        }
    }
}
export default new RoleService();