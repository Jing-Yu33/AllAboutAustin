import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import SurveyModal from '../modals/SurveyModal';
import fetchResult from './fetchResult'

const RecomPage = (props) => {

    const query = queryString.parse(props.location.search);
    const result = fetchResult(query)

    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid mt-5">
                <div className="container">
                    <h1 className="display-4">Reccomendations</h1>
                    <SurveyModal />
                    <div>
                    Top 3 with special Styling? 
                </div>
                    <ul className="list-group lead">
                        <div className="row">
                            <div className="col-lg-4">Food Weight: {query.food || "50"}</div>
                            <div className="col-lg-4">Traffic Weight: {query.traffic || "50"}</div>
                            <div className="col-lg-4">Education Weight: {query.education || "50"}</div>
                        </div>
                    </ul>
                    {result}
                </div>
            </div>
        </React.Fragment>
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
