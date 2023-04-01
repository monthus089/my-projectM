import React from "react";

const Progress =(props)=>{
    return(
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                My Progress
            </div>
        </div>
    )
};

export default Progress;