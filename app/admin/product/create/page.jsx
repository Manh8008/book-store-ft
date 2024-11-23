export default function CreateProduct() {
    return (
        <>
            <div id="content-page" class="content-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                        <h4 class="card-title">Thêm sách</h4>
                                    </div>
                                </div>
                                <div class="iq-card-body">
                                    <form action="admin-books.html">
                                        <div class="form-group">
                                            <label>Tên sách:</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>Danh mục sách:</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option selected="" disabled="">Danh mục sách</option>
                                                <option>General Books</option>
                                                <option>History Books</option>
                                                <option>Horror Story</option>
                                                <option>Arts Books</option>
                                                <option>Film & Photography</option>
                                                <option>Business & Economics</option>
                                                <option>Comics & Mangas</option>
                                                <option>Computers & Internet</option>
                                                <option> Sports</option>
                                                <option> Travel & Tourism</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Tác gải sách:</label>
                                            <select class="form-control" id="exampleFormControlSelect2">
                                                <option selected="" disabled="">Tác giả sách</option>
                                                <option>Jhone Steben</option>
                                                <option>John Klok</option>
                                                <option>Ichae Semos</option>
                                                <option>Jules Boutin</option>
                                                <option>Kusti Franti</option>
                                                <option>David King</option>
                                                <option>Henry Jurk</option>
                                                <option>Attilio Marzi</option>
                                                <option>Argele Intili</option>
                                                <option>Attilio Marzi</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Hình ảnh:</label>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" accept="image/png, image/jpeg" />
                                                <label class="custom-file-label">Choose file</label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Giá sách:</label>
                                            <input type="number" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>Số lượng:</label>
                                            <input type="number" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>Kích thước sách:</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>Số trang:</label>
                                            <input type="number" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>Nhà xuất bản:</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>Ngôn ngữ:</label>
                                            <select class="form-control" id="exampleFormControlSelect2">
                                                <option selected="" disabled="">Ngôn ngữ</option>
                                                <option>Tiếng Anh</option>
                                                <option>Tiếng Việt</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Loại bìa:</label>
                                            <select class="form-control" id="exampleFormControlSelect2">
                                                <option selected="" disabled="">Loại bìa</option>
                                                <option>Mềm</option>
                                                <option>Cứng</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Mô tả ngắn:</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>Mô tả dài:</label>
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