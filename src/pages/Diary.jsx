import React from 'react';
import aDIMG from '../image/aIMG.jpg'
import bDIMG from '../image/bIMG.jpg'
import cDIMG from '../image/cIMG.JPG'

function Diary() {
    return (
        <>
           <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 100 }}>
                <div style={{
                    width: '400px',
                    height: '1100px',
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <div style={{ padding: 40, display: 'flex', alignSelf: 'flex-start', color: 'grey', flexDirection: 'column', alignItems: 'center'}}>
                        <div style={{ marginBottom: 20 }}>딱히 적을 게 없어서 김해 맛집 소개 해주겠음</div>
                        <img src={aDIMG} style={{ marginBottom: 10, width: '80%' }} />
                        <div>신세계백화점 솔솥</div>
                        <div style={{ marginBottom: 20 }}>여기 체인점인데 스테이크 솥밥 맛집</div>
                        <img src={bDIMG} style={{ marginBottom: 10, width: '80%' }} />
                        <div>봉리단길 호우호우샤브</div>
                        <div style={{ marginBottom: 20 }}>샤브샤브/모츠나베 맛집 샤브가 짱임</div>
                        <img src={cDIMG} style={{ marginBottom: 10, width: '80%' }} />
                        <div>인제대 짜글입니다</div>
                        <div>짜글이 좋아하면 무조건 먹어야함</div>
                        <div>배달만 하니까 순두부 짜글이 꼭 시켜먹어보세요</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Diary;
