import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();
    function logout(){
    sessionStorage.removeItem("Food_Service_username_login");
    sessionStorage.removeItem("Food_Service_FirstName_login");
    sessionStorage.removeItem("Food_Service_LastName_login"); 
    history.push("/");}
    logout();
}

export default Logout