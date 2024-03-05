# starter-express-api

This is the simplest possible nodejs api using express that responds to any request with: 

request:-
```
{
    "code": 300,
    "with_res": false,
    "body": {
        "dd": 0
    }
}
```

This api will return the response code with the give {code}
If {with_res} set to true it will return 

request:
```
{
    "code": 503,
    "with_res": true
    
}
```

response:
```
503 Service Unavailable

{
    "message":"Service Unavailable"
}
```

if {body} is present and {with_res} is false it will return the content of the body


request:
```
{
    "code": 503,
    "with_res": false,
    "body": {
        "dd": 0
    }
}
```


response:
```
503 Service Unavailable

{
    "dd":0
}
```

[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://deploy.cyclic.app/)

