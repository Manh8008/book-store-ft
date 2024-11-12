export default function Chart() {
    return (
        <>
            <div className="col-md-4">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-header d-flex justify-content-between align-items-center">
                        <div className="iq-header-title">
                            <h4 className="card-title mb-0">Doanh số hàng ngày</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <div id="iq-sale-chart"></div>
                    </div>
                </div>
            </div>
        </>
    );

}