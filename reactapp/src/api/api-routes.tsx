import axios from "axios";
import Cookies from "js-cookie";
import { ApiConstants } from "./api-constants";
export const getChatView = (csrf:any , user:any) => {
  
        const params = ({
          "username" : user
         })
        axios.get(ApiConstants.chatUrl ,{
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': csrf
          },
          params
        }).then((response:any) =>{
          console.log(response.data);
        }).catch((e:any) => {
          console.log(e);
        });  

};

export const doRegister = (user:string,pwd:string,email:string,navigate:any,registered:boolean) => {
  try {
    axios.post(ApiConstants.registerUrl ,{
      username: user,
      password: pwd,
      email: email,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response:any) =>{
      console.log(response.data.token);
      if (response.data.token !== null) {
        navigate("/login");
        registered = true;
        window.location.reload();
      }
      if (response.data.success){
        console.log("response.data.success!")
      } else {
        console.log("mias pula")
      }
    }).catch((e:any) => {
      console.log(e);
    });  
  } catch (registerError) {
    console.error("[ERROR]: Error: " + registerError)
  }
};

export const doLogin = (user:string ,pwd:string,navigate:any,loggedIn:boolean,setErrMsgValid:any ) =>{
  try {
    axios.post(ApiConstants.loginUrl ,{
      username: user,
      password: pwd,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response:any) =>{
      if (response.data.token !== null) {
        navigate('/')
        Cookies.set("csrfToken", response.data.token);
        loggedIn = true;
        window.location.reload();
      }
      if (response.data.success){
        Cookies.set("user", user);
      } else {
        setErrMsgValid(response.data.message);
      }
    }).catch((e:any) => {
      console.log(e);
    });
  } catch (loginError) {
    console.error ("[ERROR]: Error: " + loginError);  
  }
};

export const getRoomCode = (csrf:any) =>{
    axios.get(ApiConstants.chatRoomCode ,{
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFTOKEN': csrf
      },
    }).then((response:any) =>{
      return response.code;
    }).catch((e:any) => {
      console.log(e);
    });
};

export const doesRoomExist = (csrf:any,room:any) =>{
  const params = ({
    "room" : room
   })
  axios.get(ApiConstants.checkRoomUrl ,{
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFTOKEN': csrf
    },
    params
  }).then((response:any) =>{
    return response.code;
  }).catch((e:any) => {
    console.log(e);
  });
};
