export default function UpdateAuthors() {
    return (
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Sửa tác giả</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <form action="admin-author.html">
                                        <div className="form-group">
                                            <label>Tên tác giả:</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Tiểu sử tác giả:</label>
                                            <textarea className="form-control" rows="4"></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ marginRight: '10px' }}
                                        >
                                            Sửa
                                        </button>
                                        <button type="reset" className="btn btn-danger">
                                            Trở lại
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
