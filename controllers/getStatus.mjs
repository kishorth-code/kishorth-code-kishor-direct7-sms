import axios from "axios"
import dotenv from "dotenv"
dotenv.config()


export const getMessagestatus=async(paramid,token)=>{    
  try {
    if(!paramid){     
        console.log("please pass a paramid");
        return
    }
    let config = {
        method: 'get',
        url: `https://api.d7networks.com/report/v1/message-log/${paramid}`,
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json', 
          'Authorization': process.env.bearer || token
        }
      };


      let dataaxios = await axios(config)
      console.log(JSON.stringify(dataaxios.data));
      return dataaxios

  } catch (error) {
    console.log("some error occured in the server",error);
    
  }

}

//getstatus("001afff2-684f-42d1-a2d8-8763b7aa64a1")