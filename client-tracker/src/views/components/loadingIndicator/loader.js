import React from "react";
import "./loader.scss";
import { CircularProgress } from "@material-ui/core";

const LoadingIndicator = props => {
    return (
        <div className="loading">
            <CircularProgress
                color="primary"
                classes={{ colorPrimary: "" }}
                style={{ color: "#00adef" }}
            />
        </div>
    );
};

export default LoadingIndicator;
