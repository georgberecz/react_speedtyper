'use strict'

import { connect } from 'react-redux'
import GlobalKeys from '../components/GlobalKeys'
import { handleInputChange } from '../actions'

const mapStateToProps = (state) => {
  return {
    gameStarted: state.game.gameStarted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleKeyPress: (key) => dispatch(handleInputChange(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalKeys)