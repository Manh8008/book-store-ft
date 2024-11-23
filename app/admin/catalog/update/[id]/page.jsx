export default function UpdateCatalog() {
    return (
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Sửa danh mục</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <form action="admin-category.html">
                                        <div class="form-group">
                                            <label>Ảnh danh mục:</label>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" />
                                                <label class="custom-file-label">Choose file</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Tên danh mục:</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="d-flex">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                style={{ marginRight: 10 + 'px' }}
                                            >
                                                Sửa
                                            </button>
                                            <button type="reset" className="btn btn-danger">
                                                Trở lại
                                            </button>
                                        </div>
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
