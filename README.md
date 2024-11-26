getMessagestatus
-----------------
let token =process.env.token(set this globally)
getMessagestatus(paramid,token)

this function will fetch status of a message with the given request_id


getPrice
-----------

getPrice(token)
this function will get all the sms rates 


sendMessage
--------------

sendMessage(numbers,text,token)

this will take three parameters 
sendMessage(["+918848970443"],"Greetings from D7 API",token)

can be pass multiple numbers 