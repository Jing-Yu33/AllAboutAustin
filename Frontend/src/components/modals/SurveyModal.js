import React from 'react';
import ReactDOM from 'react-dom';

import SurveyForm from '../survey/SurveyForm';

class SurveyModal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Change Priority
                </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Change Your Priority</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <SurveyForm />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            ,
            document.querySelector("#modal")
        );
    }
}

export default SurveyModal;
