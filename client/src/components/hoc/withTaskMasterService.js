import React from "react";
import ServiceContext from '../serviceContext';

const WithTaskMasterService = () => (Wrapper) => {
    return (props) => {
        return (
            <ServiceContext.Consumer>
                {
                    (TaskMasterService) => {
                        return <Wrapper {...props} service={TaskMasterService} />
                    }
                }
            </ServiceContext.Consumer>
        )
    }
}

export default WithTaskMasterService;