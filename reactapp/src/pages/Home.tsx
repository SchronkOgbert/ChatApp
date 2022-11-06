import Cookies from 'js-cookie';
import { useEffect, useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import { getChatView } from '../api/api-routes';

const Home = () => {
 
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    readCookie();
    
  }, []);

  const readCookie = () => {
    const user = Cookies.get("user");
    const csrfToken = Cookies.get("csrfToken");
      if (csrfToken) {
        setAuth(true);
        getChatView(csrfToken,user);
      } else {
        setAuth(false);
        navigate("/login");
      }
    };

    
  return (
    <>
      <div>Logged In</div>
    </>
  )
}
export default Home