
import { connect } from 'react-redux'
import { login, signOut } from '../../../components/Header/modules/Header-module'
import popUp from './SignUp-popUp-component'

function mapStateToProps (state) {
  return {
    isLogin: state.user.isLogin,
    user: state.user.user
  }
}

const mapDispatchToProps = {
  login: (user) => login(user),
  signOut: () => signOut()
}

const popUpContainer = connect(mapStateToProps, mapDispatchToProps)(popUp)

export default popUpContainer
