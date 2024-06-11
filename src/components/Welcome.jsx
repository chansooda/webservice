function Welcome(props){
    const{names, setuserName, setIsLoggedIn} =props;
    //로그아웃 이벤트
    return (
            <div>
                <h2>{names}환영합니다</h2>
                <button >로그아웃</button> {/* 로그아웃 이벤트 연결 */}
            </div>
        );
    }

    export default Welcome;