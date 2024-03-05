const express = require('express')
const app = express()

// Middleware to parse JSON request body
app.use(express.json());
// const indexRouter = require('./errorR');

// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo just visit /error')
// })

// Function to get error message based on error code

/*app.all('/', (req, res) =>
{
    console.log("working in error==>",req.body );

    let { code, with_res, body } = req.body; // Assuming the error code, with_res flag, and body are sent in the request body
    console.log("code: ", code, "with_res", with_res);

        try {
            if (body !== undefined) {
                // If the body is provided, send it as the response
                res.status(code).json(body);
            }

            if(with_res === undefined){
                res.status(code).end();
            }

            if (with_res === true) {
                // Sending response with error code and description
                res.status(code).json({ message: getErrorMessage(code) });
            } else  {
                // Setting status code without sending any response body
                res.status(code).end();
            }
        } catch (e) {
            // Handling any exceptions and setting status code without sending any response body
            res.status(400).json({message:"input proper request"}).end();
        }


}

);*/

app.all('/', (req, res) => {
    console.log("working in error==>", req.body);

    const {code, with_res, data} = req.body;

    try {
        if (code === undefined || isNaN(code)) {
            console.log("code is not defined");
            res.status(400).json({message: "code must be provided."});
        }

        if (data !== undefined) {
            console.log("body is defined")
            // If the body is provided, send it as the response
            res.status(code).json(data);
        }

        if (with_res !== undefined) {
            console.log("with_ref is defined")
            if (with_res === true) {
                console.log("with_ref is true")
                // Sending response with error code and description
                res.status(code).json({message: getErrorMessage(code)});
            } else {
                console.log("with_ref is false")
                // Setting status code without sending any response body
                res.status(code).end();
            }
        } else {
            res.status(code).end();
        }


    } catch (e) {
        // Handling any exceptions and setting status code without sending any response body
        console.error("Error:", e.message);
        res.status(code).json({message: getErrorMessage(code)}).end();
    }
});

function errorHandler(err, req, res, next) {
    if (err.status) {
        // If the error has a status code, return it
        res.status(err.status).json({error: err.message});
    } else {
        // Otherwise, return a generic 500 status code
        res.status(500).json({error: "Internal Server Error"});
    }
}

app.use(errorHandler);

app.all('/error', (req, res) => {
    const {code} = req.body;
    // Some code that might throw an error
    throwHTTPError(code);
});

app.all('/timeout',(req,res)=>{
   console.log("timeout")
});

// app.listen(process.env.PORT || 3000)


module.exports = app;