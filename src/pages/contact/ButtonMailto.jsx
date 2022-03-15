import React from "react";
import { Link } from "react-router-dom";
import "./ButtonMailto.css";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <div className="mailtoButton">
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
        </div>
    );
};

export default ButtonMailto;