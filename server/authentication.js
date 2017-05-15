/**
 * Created by luqianyu on 2016/12/30.
 */
// 认证相关
// const OAuth = require('wechat-oauth');
// const client = new OAuth('your appid', 'your secret');
const app = require('./main')

const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const session = require('express-session')
const secret = 'xxxxxxxxxxxxxxx'

var store = {
  user: [
    {
      userId: 1,
      username: 'arluber',
      password: 'asdasd',
      data: {
        msg: 'fuck you'
      }
    }, {
      userId: 2,
      username: 'lqygo123',
      password: '123123',
      data: {
        msg: 'fuck you,too'
      }
    }, {
      userId: 3,
      username: '123123',
      password: '123123',
      data: {
        msg: 'fuck you, three'
      }
    }],
  usernameSet: ['arluber', 'lqygo123', '123123']
}

app.use(cookieParser())
app.use(bodyParser())


function loginCheak (username, password) {
  for (var e in store.user) {
    if (store.user[e].username === username && store.user[e].password === password) {
      return true
    }
  }
  return false
}

//注册验证  账号占用判断
app.get('/accountCheak.json',function (req, res) {
  const username = req.query.username
  if(store.usernameSet.indexOf(username) != -1) {
    res.send({ exist: true })
  } else {
    res.send({ exist: false })
  }
})

//获取验证码
app.get('/getCaptcha.json',function (req, res) {
  res.send("fuckyou")
})

app.use(function (req, res, next) {
  if (req.url === '/signUp.json') {
    if (req.method == 'POST') {
      if (req.body) {
        const obj = {
          userId: store.user.length + 1,
          username: req.body.username,
          password: req.body.password,
          data: req.body.data
        }
        store.user.push(obj)
        store.usernameSet.push(req.body.username)
        res.send("sign up success")
      }
    } else {
      res.statusCode = 405;
      res.send("sign up fail")
    }
  }
  if (req.url === '/login.json') {
    if (loginCheak(req.body.username, req.body.password)) {
      var token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60),
        user: req.body.username,
        type: 'login'
      }, secret)
      res.cookie('token', token)
      res.send('login success')
    } else {
      res.clearCookie('token')
      res.send('login fail')
    }
  }
  if (req.url === '/getStore.json') {
    res.send(store)
  }
  if (req.url === '/signOut.json') {
    res.clearCookie('token')
    res.send('clear cookies success')
  }
  if (req.url === '/cheak.json') {
    if (req.cookies.token) {
      jwt.verify(req.cookies.token, secret, function (err, decoded) {
        if (err) {
          console.log(err.message)
          if (err.message === 'jwt expired') {
            res.send('jwt expired')
          }
        } else {
          decoded.date = Math.floor(Date.now() / 1000)
          res.send(decoded)
        }
      })
    } else {
      res.send("you don't have token")
    }
  }
  if (req.url === '/test.json') {
    console.log(req.body)
    res.send("fuck you")
  }
  next()
})

// app.use(function(req, res, next) {
//   $(req.session.id)
//   const token = jwt.sign({
//     msg: 'fuck you',
//     id: req.session.counter,
//     exp: Math.floor(Date.now() / 1000) + (60 * 60)
//   }, secret)
//   res.cookie('token', token)
//
//   jwt.verify(req.cookies.token, secret, function(err, decoded) {
//     if(err) {
//       console.log(err.message)
//     } else {
//       $(decoded)
//     }
//   })
//   next()
// })
//

app.use(session({
  secret: secret,
  cookie: {
    maxAge: 60 * 1000 * 60 * 24
  }
}))

app.use(function (req, res, next) {
  if (req.session.counter) {
    req.session.counter++
  } else {
    req.session.counter = 1
  }
  if (req.url === '/getState.json') {
    res.send({
      number: req.session.counter,
      str: 'init state'
    })
  }
  next()
})

module.exports = app
