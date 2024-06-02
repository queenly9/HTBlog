// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useNavigate} from "react-router-dom";

function Menu() {
    const navigate = useNavigate();
    const goProfile = () => {
        navigate("/profile")
    }
    const goDiary = () => {
        navigate("/diary")
    }
    const goGuest = () => {
        navigate("/guest")
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', color: 'grey', padding: 30}}>
                <div onClick={goProfile} style={{ cursor: 'pointer', marginRight: 10 }}>profile</div>|
                <div onClick={goDiary} style={{ cursor: 'pointer', marginLeft: 10, marginRight: 10 }}>diary</div>|
                <div onClick={goGuest} style={{ cursor: 'pointer', marginLeft: 10 }}>guest</div>
            </div>
        </>
    );
}

export default Menu;
