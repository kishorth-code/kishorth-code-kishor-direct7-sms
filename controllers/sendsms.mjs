import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

export const sendMessage =async (numbers,text,token)=>{
 try {
    if(!numbers){
        console.log("please pass a number"); 
        return
    }
    let num = numbers.map((data)=> data)
    let data = JSON.stringify({
        "messages": [
          {
            "channel": "sms",
            "recipients":num,
            "content": text,
            "msg_type": "text",
            "data_coding": "text"
          }
        ],
        "message_globals": {
          "originator": "SignOTP",
          "report_url": "https://the_url_to_recieve_delivery_report.com"
        }
      });

      let config = {
        method: 'post',
        url: 'https://api.d7networks.com/messages/v1/send',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json', 
          'Authorization': process.env.bearer || token
        },
        data : data
      };
     let dataaxios = await axios(config)
     console.log(JSON.stringify(dataaxios.data));
     return dataaxios
 } catch (error) {
    console.log(error);
    return error
    
 }

}

 //sendsms(["+918848970443"],"hiiii")



