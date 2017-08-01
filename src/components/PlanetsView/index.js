import { connect } from 'react-redux'
import PlanetsView from './planets.js'

const mapStateToProps = (state, ownProps) => {
    return {
        planets: state.planets
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlanetsView);