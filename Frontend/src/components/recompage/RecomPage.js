import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import SurveyModal from '../modals/SurveyModal';
import fetchResult from './fetchResult'

const RecomPage = (props) => {

    const query = queryString.parse(props.location.search);
    const result = fetchResult(query)

    return (
        <div>
            Recommendation Page
            <SurveyModal />
            <ul>
                <li>Food Weight: {query.food || "50"}</li>
                <li>Traffic Weight: {query.traffic || "50"}</li>
                <li>Education Weight: {query.education || "50"}</li>
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
//         const values = queryString.parse(this.props.location.search)
//         const response = 
//             await DataBase.get('/zipcodes/ranking', {
//                 crossdomain: true,
//                 params: {
//                     food: values.food,
//                     traffic: values.traffic, 
//                     education: values.education
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

export default connect(mapStateToProps)(RecomPage)