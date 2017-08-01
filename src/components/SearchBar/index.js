import { connect } from 'react-redux'
import { planetSearch } from '../../actions'
import Search from './search.js'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearch: (search) => {
            dispatch(planetSearch(search))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);