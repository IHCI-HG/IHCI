const app = require('./main')

//  session使用示例
app.use(function (req, res, next) {
    console.log(req.session)
    if (req.session.counter) {
        req.session.counter++
    } else {
        req.session.counter = 1
    }
    if (req.url === '/getState.json') {
        let temp = ""

        res.send({
            number: req.session.counter,
            str: tem
        })
    }
    next()
})



module.exports = app

