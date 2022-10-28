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
    const user = Cookies.get("user");
      if (user) {
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