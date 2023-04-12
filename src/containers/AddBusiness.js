import {connect} from 'react-redux';
import AddBusiness from '../components/AddBusiness';
import {removeBusiness, addBusiness} from '../redux/actions';

const mapStateToProps = (state)=>{
    return{
       business: state.business
}
}

const mapDispatchToProps = (dispatch) => {
    return{
        addBusiness: (business) => dispatch(addBusiness(business)),
        removeCar: (index) => dispatch(removeBusiness(index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddBusiness);