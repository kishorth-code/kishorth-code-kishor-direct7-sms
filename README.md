first :  npm i kishordirect7sms2

let token =process.env.token(set this globally) with dotenv from D7Network in project


getMessagestatus
-----------------

getMessagestatus(paramid,token)


this library function will fetch status of a message with the given request_id




getPrice
-----------

getPrice(token)
this library function will get all the sms rates 



sendMessage
--------------

sendMessage(numbers,text,token)

this will take three parameters 
sendMessage(["+918848970443"],"Greetings from D7 API",token)

can be pass multiple numbers 