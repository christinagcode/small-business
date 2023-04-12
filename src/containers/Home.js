import {connect} from 'react-redux';
import Home from '../components/Home';
import {removeBusiness, addBusiness} from '../redux/actions';

const mapStateToProps = (state) =>{
    return{
        business: state.business
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addBusiness: (business) => dispatch(addBusiness(business)),
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);