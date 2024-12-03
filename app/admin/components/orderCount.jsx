
export default function OrderCount({ count }) {
    return (
        <>
            <div className="col-md-6 col-lg-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-body">
                        <div className="d-flex align-items-center">
                            <div className="rounded-circle iq-card-icon bg-warning">
                                <i className="ri-shopping-cart-2-line"></i>
                            </div>
                            <div className="text-left ml-3">
                                <h2 className="mb-0">
                                    <span className="counter">{count}</span>
                                </h2>
                                <h5 className="">Đơn Hàng</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}