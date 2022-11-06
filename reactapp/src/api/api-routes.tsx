import axios from "axios";
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
