# Error Sender API

## Overview

The Error Sender API is a simple Node.js API built with Express that allows users to receive HTTP status codes based on their requests. It provides flexibility in handling errors by allowing users to specify the desired status code and response body.

## Features

- Sends HTTP status codes based on user requests.
- Supports customization of response body.
- Easy integration with any Node.js application.

## Usage

## URL
https://starter-express-api-f1yw.onrender.com

### Sending Status Codes

Send a request with the desired status code. The API will respond with the corresponding HTTP status code.

Example:

```json
Request:
{
    "code": 400
}

Response:
400 Bad Request
```

### Specifying Response Body

Include the `with_res` field in the request to receive a response with a custom message.

Example:

```json
Request:
{
    "code": 503,
    "with_res": true
}

Response:
503 Service Unavailable

{
    "message":"Service Unavailable"
}
```

### Customizing Response Body

Include the `data` field in the request to customize the response body.

Example:

```json
Request:
{
    "code": 503,
    "with_res": false,
    "data": {
        "dd": 0
    }
}

Response:
503 Service Unavailable

{
    "dd":0
}
```


## Cause

The Error Sender API aims to provide a straightforward solution for handling HTTP status codes and customizing error responses. It simplifies error management in Node.js applications, making it easier for developers to communicate errors effectively to test their code.

## How it Works

The API utilizes Express.js to handle incoming requests and respond with the specified status codes and response bodies. It parses JSON payloads to extract the necessary information for generating responses dynamically. With its minimalistic design, the Error Sender API ensures efficiency and simplicity in error handling workflows.
