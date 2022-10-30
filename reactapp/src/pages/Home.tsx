import Cookies from 'js-cookie';
import { useEffect, useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

const Home = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    readCookie();
  }, []);



  const readCookie = () => {
    const csrfToken = Cookies.get("csrfToken");
      if (csrfToken) {
        setAuth(true);
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