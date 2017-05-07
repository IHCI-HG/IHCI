/**
 * Created by luqianyu on 2016/12/27.
 */
import { connect } from 'react-redux'

// actions
import { increNumber, addStr, async, inite } from '../modules/About'

// components
import About from '../components/About'

const mapDispatchToProps = {
  increNumber : () => increNumber(1),
  addStr : (str) => addStr(str || '1'),
  async : () => async(2),
  inite : (number, str) => inite(number, str)
}

const mapStateToProps = (state) => ({
  number : state.about.number,
  str : state.about.str
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
