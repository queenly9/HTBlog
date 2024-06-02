import React from 'react';
import logoImage from "../image/logoIMG.png";
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const goMain = () => {
        navigate("/")
    }
    return (
        <>
            <div>
                <div style={{ paddingTop: 80, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={logoImage} style={{ cursor: 'pointer', width: '60px' }}/>
                    <div onClick={goMain} style={{ cursor: 'pointer', marginLeft: 30, color: 'pink', fontSize: 30, textShadow: '2px 2px 4px rgba(128, 128, 128, 0.7)' }}>きむ・ふんじょん</div>
                </div>
            </div>
        </>
    );
}

export default Header;
