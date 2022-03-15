import React from "react";
import { Link } from "react-router-dom";
import "./ButtonMailto.css";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <div className="mailtoButton">
        <a
            className="mailtoLink"
            href='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </a>
        </div>
    );
};

export default ButtonMailto;