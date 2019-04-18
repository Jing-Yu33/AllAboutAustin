import React from 'react';

import SurveyForm from '../survey/SurveyForm';

class SurveyModal extends React.Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Change Priorities
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
            
        );
    }
}

export default SurveyModal;
