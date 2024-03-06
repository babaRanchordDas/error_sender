# error sender

url: https://frightened-purse-crab.cyclic.app/

This is the simplest possible nodejs api using express that responds the status code to any request with: 

```
{
    "code": 300,
    "with_res": false,
    "data": {
        "dd": 0
    }
}
```

Examples:--->
I only code is given

request:
```
{
    "code": 400
}
```

response:
```
400 Bad Request
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
    "data": {
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

