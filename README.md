first :  npm i kishordirect7sms2

let token =process.env.token(set this globally) with dotenv from D7Network in project



sendMessage
--------------

sendMessage(numbers,text,token)

this will take three parameters 
sendMessage(["+91123456789"],"Greetings from D7 API",token)

can be pass multiple numbers 

after the utilization of this , will receive  data with request_id like this

{"request_id":"001fbc25-3384-4c42-b1f8-0a2067fb4a20","status":"accepted","created_at":"2024-11-26T12:30:56.993533"}


getMessagestatus
-----------------

getMessagestatus(paramid,token)
the paramid is the request_id from the sendMessage function data
token is the bearer token that been set globally


this library function will fetch status of a message with the given request_id




getPrice
-----------

getPrice(token)
token is the bearer token

this library function will get all the sms rates 


