import React from 'react';
import mainImage from '../image/mainIMG.JPG'
import useLike from "../store/like.js";

function MainPage() {
    const { like, increaseOneLike} = useLike((state) => state);
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 100 }}>
                <div style={{
                    width: '400px',
                    height: '600px',
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <div style={{
                        padding: 50,
                        display: 'flex',
                        alignSelf: 'flex-start',
                        flexDirection: 'column',
                        alignItems: 'center' }}>
                        <div style={{ color: 'lightpink', fontSize: 25, textShadow: '2px 2px 4px rgba(128, 128, 128, 0.7)' }}>Welcome to HT's BLOG!</div>
                        <img src={mainImage} style={{ width: '100%', marginTop: 10 }}/>
                        <div style={{ color: 'grey', marginTop: 20 }}>하트를 누르면 숫자가 올라가요</div>
                        <text onClick={increaseOneLike}
                              style={{ cursor: 'pointer', color: 'lightpink', fontSize: 25, marginTop: 10 }}>♡ {like} </text>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
