function Main() {
    return (
        <div className="main">
            <div className="develop">
                <div className="content">
                    <div className="title">개발용역</div>
                    <p>저희와 함께 많은 협의를 거처 귀사의 프로젝트 성공을 경험하세요.</p>
                </div>
                <div className="develop_img">
                    <img src="/img/develop.jpg" alt="개발"/>
                </div>
            </div>
            <div className="defense">
                <div className="content">
                    <div className="title">방위산업</div>
                    <p>대한민국 국방 장비 인프라의 국산화를 위해
                    다양한 장비를 개발하고 있습니다.</p>
                </div>
                <div className="defense_img">
                    <img src="/img/defense.jpg" alt="방위"/>
                </div>
            </div>
            <div className="ems">
                <div className="content">
                    <div className="title">EMS 서비스</div>
                    <p>여러분의 비즈니스를 성장시키기 위한
                        최적의 EMS 생산 파트너가 되겠습니다.</p>
                </div>
                <div className="ems_img">
                    <img src="/img/e_menufacture.jpg" alt="EMS"/>
                </div>
            </div>
        </div>
    );
}

export default Main;