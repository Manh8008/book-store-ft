export default function Banner() {
    return (
        <>
            {/* <!-- Banner --> */}
            <div className="wrap-banner">
                <div className="content">
                    <div className="banner">
                        <div className="banner-left">
                            <img src="/img/banner-1.svg" alt="Banner Left" />
                        </div>
                        <div className="banner-right">
                            <div className="right-top">
                                <img src="/img/banner-2.svg" alt="Right Top" />
                            </div>
                            <div className="right-bottom">
                                <img src="/img/banner-3.svg" alt="Right Bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}