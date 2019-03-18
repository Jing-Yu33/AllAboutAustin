import React from 'react';
import { connect } from 'react-redux';

import SurveyModal from '../modals/SurveyModal';
import fetchResult from './fetchResult'

const RecomPageTest = (props) => {

    const result = fetchResult(props.weight);

    return (
        <div>
            Recommendation Page
            <SurveyModal />
            <ul>
                <li>Food Weight: {props.weight.Food}</li>
                <li>Traffic Weight: {props.weight.Traffic}</li>
                <li>Education Weight: {props.weight.Education}</li>
            </ul>
            {result}
        </div>
    )

}



// Class Based Implementation
// class RecomPage extends Component {
//     state = {
//         zipcodes: []
//     }

//     async componentDidMount(){
//         const response = 
//             await DataBase.get('/zipcodes/ranking', {
//                 crossdomain: true,
//                 params: {
//                     food: this.props.weight.Food,
//                     traffic: this.props.weight.Traffic, 
//                     education: this.props.weight.Education
//                 }
//             })
//         this.setState({
//             zipcodes: response.data
//         })
//     }

//     async componentDidUpdate(prevProps){
//         if(prevProps.weight != this.props.weight){
//             console.log("here")
//             const response = 
//             await DataBase.get('/zipcodes/ranking', {
//                 crossdomain: true,
//                 params: {
//                     food: this.props.weight.Food,
//                     traffic: this.props.weight.Traffic, 
//                     education: this.props.weight.Education
//                 }
//             })
//             this.setState({
//                 zipcodes: response.data
//             })
//         }

//     }

//     renderZipcodeList = () => {
//         if(this.state.zipcodes){
//             return this.state.zipcodes.map( (zipcode) => {
//                 return (
//                     <div key={zipcode.zipcode}>
//                         <Link to={`/zipcodes/${zipcode.zipcode}`}>{zipcode.zipcode}</Link>
//                     </div>
//                 )
//             });
//         }

//     }

//     render(){
//         if(!this.props.weight){
//             return <div>Loading</div>
//         }
//         return(
//             <div>
//                 Recommendation Page
//                 <SurveyModal />
//                 <ul>
//                     <li>Food Weight: {this.props.weight.Food}</li>
//                     <li>Traffic Weight: {this.props.weight.Traffic}</li>
//                     <li>Education Weight: {this.props.weight.Education}</li>
//                 </ul>
//                 {this.renderZipcodeList()}
//             </div>
//         );
//     }
// }

const mapStateToProps = (state) => {
    return {
        weight: state.weight
    }
}

export default connect(mapStateToProps)(RecomPageTest)