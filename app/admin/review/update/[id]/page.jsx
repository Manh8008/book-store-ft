export default function UpdateReview() {
    return (
        <>
            <div id="content-page" class="content-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                        <h4 class="card-title">Sửa bài viết</h4>
                                    </div>
                                </div>
                                <div class="iq-card-body">
                                    <form action="admin-author.html">
                                        <div class="form-group">
                                            <label>Ảnh bài viết:</label>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" />
                                                <label class="custom-file-label">Choose file</label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Tiêu đề bài viết:</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>Nội dung bài viết:</label>
                                            <textarea class="form-control" rows="4"></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-primary" style={{ marginRight: '10px' }}>Sửa</button>
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