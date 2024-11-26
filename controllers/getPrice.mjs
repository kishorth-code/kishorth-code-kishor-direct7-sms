import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

export const getPrice =async(token)=>{
    let config = {
        method: 'get',
        url: 'https://api.d7networks.com/messages/v1/sms/pricing',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json', 
          'Authorization': process.env.bearer || token
        }
      };

      let dataaxios = await axios(config)
      // console.log(JSON.stringify(dataaxios.data));
      let data = JSON.stringify(dataaxios.data)
      return data
     

}

