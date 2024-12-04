export default function TotalRevenue({ count }) {

    // Hàm định dạng số tiền
    // function formatCurrency(value) {
    //     if (value >= 1_000_000_000) {
    //         return (value / 1_000_000_000).toFixed(1) + 'B';
    //     } else if (value >= 1_000_000) {
    //         return (value / 1_000_000).toFixed(1) + 'M';
    //     } else {
    //         return value.toLocaleString('vi-VN') + 'đ';
    //     }
    // }


    return (
        <div className="col-md-6 col-lg-4">
            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                    <div className="d-flex align-items-center">
                        <div className="rounded-circle iq-card-icon bg-primary">
                            <i className="ri-bank-line"></i>
                        </div>
                        <div className="text-left ml-3">
                            <h2 className="mb-0">
                                <span className="counter">{parseFloat(count).toLocaleString('vi-VN')}đ</span>                            </h2>
                            <h5 className="">Tổng Doanh Thu</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}