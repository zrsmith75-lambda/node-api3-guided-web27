1. `npm i morgan`
2. require morgan
3. `npm i helmet`
4. require helmet

## Create custom middleware

1. create function with req,res,next
2. make sure you use the middleware
3. use in the endpoint

- passing informtion to the middleware

addName('bob')

function addName(name) {
return function (req, res, next) {
req.name = name
next()
}
}
