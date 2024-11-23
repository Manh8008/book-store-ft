export default function CreateAuthors() {
    return (
        <>
            <div id="content-page" class="content-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                        <h4 class="card-title">Thêm tác giả</h4>
                                    </div>
                                </div>
                                <div class="iq-card-body">
                                    <form action="admin-author.html">
                                        <div class="form-group">
                                            <label>Tên tác giả:</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>Tiểu sử tác giả:</label>
                                            <textarea class="form-control" rows="4"></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-primary" style={{ marginRight: '10px' }}>Thêm</button>
                                        <button type="reset" class="btn btn-danger">Trở lại</button>
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