import React, { useEffect } from 'react';
import './landing.scss';
import logo from '../../images/logo.png';
import { useHistory } from "react-router-dom";

const LandingPage = () => {
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push('/home');
        }, 2000);
    });
    return (
        <div className="ec-landing-page full-height full-width overflow-hidden flex justify-content-center align-items-center">
            <img src={logo} className="ec-logo"></img>
        </div>
    );
}
export default LandingPage;