

const iAmMiddleWare = (req, res, next) => {
    console.log("middleware here")
    next()
}
module.exports = iAmMiddleWare;