import profileImage from "../image/profileIMG.jpg"
import githubImage from "../image/github.png"
import blogImage from "../image/blog.png"
import instaImage from "../image/instagram.jpeg"

function Profile() {

    return (
        <>
            {/* main */}
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
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <div style={{ padding: 40, display: 'flex', alignSelf: 'flex-start', color: 'grey'}}>
                            <img src={profileImage} style={{ width: '60%', paddingRight: '20px' }}/>
                            <div style={{ paddingTop: '15px', flexDirection: 'column' }}>
                                <div style={{ marginBottom: 10 }}>훈티</div>
                                <div style={{ marginBottom: 10 }}>만 20세</div>
                                <div style={{ marginBottom: 10 }}>ENFP</div>
                                <div style={{ marginBottom: 10 }}>끝...</div>
                            </div>
                        </div>
                    <div style={{ height: 50, flexDirection: 'column', marginLeft: 50 }}>
                        <img src={githubImage} style={{ width: '8%', marginRight: 5 }}/><a style={{ color: 'grey', marginBottom: 40 }} href={"https://github.com/queenly9"}>github 바로가기</a><br /><br />
                        <img src={blogImage} style={{ width: '8%', marginRight: 5 }}/><a style={{ color: 'grey' }} href={"https://blog.naver.com/queenly9"}>blog 바로가기</a><br /><br />
                        <img src={instaImage} style={{ width: '8%', marginRight: 5 }}/><a style={{ color: 'grey' }} href={"https://instagram.com/lov29irl"}>instagram 바로가기</a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
