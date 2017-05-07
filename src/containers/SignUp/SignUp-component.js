/**
 * Created by luqianyu on 2017/1/4.
 * TO DO
 * 1.用户名合法性判断尚未进行,只做了长短判断,正则表达部分后面再加
 * 2.验证码模块的引入  当前验证码默认为OK的
 * 3.密码强度检测
 */
import React from 'react'
import $ from 'jquery'
import TermsOfService from './TermsOfService'
// import PopUp from './SignUp-popUp/SignUp-popUp-component'
import PopUp from './SignUp-popUp/SignUp-popUp-container'

const USERNAME_EMPTY = 0
const USERNAME_INVALID_EXIST = 1
const USERNAME_INVALID_TOO_SHORT = 2
const USERNAME_INVALID_TOO_LONG = 3
const USERNAME_INVALID_ERROR_FORMAT = 5
const USERNAME_CHECKING = 6
const USERNAME_VALID = 10

const PASSWORD_EMPTY = 0
const PASSWORD_TOO_SHORT = 1
const PASSWORD_TOO_LONG = 2
const PASSWORD_VALID_WEAK = 3
const PASSWORD_VALID_MIDDLE = 4
const PASSWORD_VALID_STRONG = 5

const CHECK_PASSWORD_EMPTY = 0
const CHECK_PASSWORD_INCONFORMITY = 1
const CHECK_PASSWORD_VALID = 2

const CAPTCHA_EMPTY = 0
const CAPTCHA_INVALID = 1
const CAPTCHA_VALID = 2

const ACCESS_VALID = true
const ACCESS_INVALID = false

const SignUp = React.createClass({
  getInitialState () {
    return {
      usernameState: USERNAME_EMPTY,
      passwordState: PASSWORD_EMPTY,
      checkPasswordState: CHECK_PASSWORD_EMPTY,
      accessState: ACCESS_INVALID
    }
  },
  usernameCheck () {
    const that = this
    const emailPatterns = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!this.refs.username.value) {
      that.setState({ usernameState: USERNAME_EMPTY })
    } else if (this.refs.username.value.length < 4) {
      that.setState({ usernameState: USERNAME_INVALID_TOO_SHORT })
    } else if (this.refs.username.value.length > 20) {
      that.setState({ usernameState: USERNAME_INVALID_TOO_LONG })
    } else if (!emailPatterns.test(this.refs.username.value)) {
      that.setState({ usernameState: USERNAME_INVALID_ERROR_FORMAT })
    } else {
      $.ajax({
        method: 'get',
        // url: '/accountCheak.json?username=' + this.refs.username.value,
        url: '/api/project/user/isNameExit?username=' + this.refs.username.value,
        // url: 'http://192.168.1.62:3000/api/project/user/isNameExit?name=' + this.refs.username.value
        beforeSend: function () {
          that.setState({ usernameState: USERNAME_CHECKING })
        }
      }).done(function (data) {
        if (data.exist) {
          that.setState({ usernameState: USERNAME_INVALID_EXIST })
        } else {
          that.setState({ usernameState: USERNAME_VALID })
        }
      })
    }
  },
  usernameExistSpan (usernameState) {
    switch (usernameState) {
      case USERNAME_INVALID_EXIST:
        return <span> X </span>
      case USERNAME_VALID:
        return <span> √ </span>
      case USERNAME_EMPTY:
        return <span />
      default :
        return <span> X </span>
    }
  },
  usernameExistState () {
    switch (this.state.usernameState) {
      case USERNAME_INVALID_EXIST:
      case USERNAME_INVALID_ERROR_FORMAT:
        return 'has-error'
      case USERNAME_CHECKING:
        return 'has-warning'
      case USERNAME_VALID:
        return 'has-success'
      case USERNAME_EMPTY:
        return ' '
      default :
        return 'has-error'
    }
  },
  usernameVerificationSpan () {
    switch (this.state.usernameState) {
      case USERNAME_INVALID_EXIST:
        return <span className='help-block'> 邮箱已被使用 </span>
      case USERNAME_VALID:
        return <span className='help-block'> 邮箱可用 </span>
      case USERNAME_INVALID_ERROR_FORMAT:
        return <span className='help-block'> 错误的邮箱格式 </span>
      case USERNAME_INVALID_TOO_SHORT:
        return <span className='help-block'> 用户名太短 </span>
      case USERNAME_INVALID_TOO_LONG:
        return <span className='help-block'> 用户名太长 </span>
      default:
        return <span className='help-block'> 请输入您的邮箱 </span>
    }
  },
  passwordCheck () {
    const that = this
    if (!this.refs.password.value) {
      that.setState({ passwordState: PASSWORD_EMPTY })
    } else if (this.refs.password.value.length < 4) {
      that.setState({ passwordState: PASSWORD_TOO_SHORT })
    } else if (this.refs.password.value.length > 20) {
      that.setState({ passwordState: PASSWORD_TOO_LONG })
    } else {
      // 密码强度检测
      that.setState({ passwordState: PASSWORD_VALID_MIDDLE })
    }
  },
  passwordState () {
    switch (this.state.passwordState) {
      case PASSWORD_EMPTY:
        return ' '
      case PASSWORD_VALID_WEAK:
        return 'has-warning'
      case PASSWORD_VALID_MIDDLE:
      case PASSWORD_VALID_STRONG:
        return 'has-success'
      case PASSWORD_TOO_LONG:
      case PASSWORD_TOO_SHORT:
        return 'has-error'
      default:
        return ' '
    }
  },
  passwordCheckSpan (passwordState) {
    // if (this.state.checkPasswordState != CHECK_PASSWORD_EMPTY) {
    //   this.checkPasswordCheck()
    // }
    switch (passwordState) {
      case PASSWORD_EMPTY:
        return <span className='help-block'>请输入密码</span>
      case PASSWORD_TOO_LONG:
        return <span className='help-block'>密码超过二十位</span>
      case PASSWORD_TOO_SHORT:
        return <span className='help-block'>密码长度短于四位</span>
      case PASSWORD_VALID_MIDDLE:
        return <span className='help-block'>密码强度一般</span>
      case PASSWORD_VALID_STRONG:
        return <span className='help-block'>密码强度强</span>
      case PASSWORD_VALID_WEAK:
        return <span className='help-block'>密码强度弱</span>
      default:
        return ''
    }
  },
  checkPasswordCheck () {
    const that = this
    if (!this.refs.checkPassword.value) {
      that.setState({ checkPasswordState: CHECK_PASSWORD_EMPTY })
    } else if (this.refs.checkPassword.value != this.refs.password.value) {
      that.setState({ checkPasswordState: CHECK_PASSWORD_INCONFORMITY })
    } else if (this.refs.checkPassword.value === this.refs.password.value) {
      that.setState({ checkPasswordState: CHECK_PASSWORD_VALID })
    }
  },
  checkPasswordState () {
    switch (this.state.checkPasswordState) {
      case CHECK_PASSWORD_EMPTY:
        return ' '
      case CHECK_PASSWORD_VALID:
        return 'has-success'
      case CHECK_PASSWORD_INCONFORMITY:
        return 'has-error'
    }
  },
  checkPasswordSpan (checkPasswordState) {
    switch (checkPasswordState) {
      case CHECK_PASSWORD_EMPTY:
        return <span className='help-block'>再次输入密码</span>
      case CHECK_PASSWORD_INCONFORMITY:
        return <span className='help-block'>两次密码输入不一致</span>
      case CHECK_PASSWORD_VALID:
        return <span className='help-block'>两次密码输入一致</span>
    }
  },
  getCaptcha () {
    // const that = this.arguments;
    $.ajax({
      method: 'GET',
      url: 'getCaptcha.json'
    }).done(function (data) {
      console.log(data)
    })
  },
  changeAccess () {
    this.setState({ accessState: (this.state.accessState ? ACCESS_INVALID : ACCESS_VALID) })
  },
  signUp () {
    $.ajax({
      method: 'POST',
      // url: 'signUp.json',
      url: 'api/project/user/createUser',
      data: {
        username: this.refs.username.value,
        password: this.refs.password.value
      }
    }).done(function (data) {

    })
  },
  signUpButton () {
    if (
      this.state.usernameState === USERNAME_VALID
      && (this.state.passwordState === PASSWORD_VALID_MIDDLE
        || this.state.passwordState === PASSWORD_VALID_WEAK
        || this.state.passwordState === PASSWORD_VALID_STRONG)
      && this.state.checkPasswordState === CHECK_PASSWORD_VALID
      && this.state.accessState === ACCESS_VALID
    ) {
      return <button onClick={this.signUp} className='btn btn-primary pull-right'> 注册 </button>
    } else {
      return <button disabled='true' className='btn btn-primary pull-right'> 注册</button>
    }
  },
  signUpPopUp () {
    if (
      this.state.usernameState === USERNAME_VALID
      && (this.state.passwordState === PASSWORD_VALID_MIDDLE
      || this.state.passwordState === PASSWORD_VALID_WEAK
      || this.state.passwordState === PASSWORD_VALID_STRONG)
      && this.state.checkPasswordState === CHECK_PASSWORD_VALID
      && this.state.accessState === ACCESS_VALID
    ) {
      return <PopUp disable={false} email={this.refs.username.value} password={this.refs.password.value}> 注册 </PopUp>
    } else {
      return <PopUp disable> 注册</PopUp>
    }
  },
  render () {
    return (
      <div>
        <div className={'form-group ' + this.usernameExistState()}>
          <input type='text' className='form-control' ref='username' placeholder='邮箱' onBlur={this.usernameCheck} />
          {this.usernameVerificationSpan()}
        </div>

        <div className={'form-group ' + this.passwordState()}>
          <input type='password' className='form-control' ref='password' placeholder='密码' onBlur={this.passwordCheck} />
          {this.passwordCheckSpan(this.state.passwordState)}
        </div>

        <div className={'form-group ' + this.checkPasswordState()}>
          <input type='password'
                 className='form-control'
                 ref='checkPassword'
                 placeholder='确认密码'
                 onBlur={this.checkPasswordCheck}
          />
          { this.checkPasswordSpan(this.state.checkPasswordState)}

        </div>

        <input type='checkbox' checked={this.state.accessState} onChange={this.changeAccess} />
        <label>
          <span> 接受 <TermsOfService /> {'  '} </span>
        </label>
        { this.signUpPopUp() }

      </div>
    )
  }
})


export default SignUp
