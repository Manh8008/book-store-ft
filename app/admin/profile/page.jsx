export default function Profile() {
    return (
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iq-card">
                                <div className="iq-card-body p-0">
                                    <div className="iq-edit-list">
                                        <ul className="iq-edit-profile d-flex nav nav-pills">
                                            <li className="col-md-3 p-0">
                                                <a className="nav-link active" data-toggle="pill" href="#personal-information">
                                                    Thông tin cá nhân
                                                </a>
                                            </li>
                                            <li className="col-md-3 p-0">
                                                <a className="nav-link" data-toggle="pill" href="#chang-pwd">
                                                    Đổi mật khẩu
                                                </a>
                                            </li>
                                            <li className="col-md-3 p-0">
                                                <a className="nav-link" data-toggle="pill" href="#emailandsms">
                                                    Email và SMS
                                                </a>
                                            </li>
                                            <li className="col-md-3 p-0">
                                                <a className="nav-link" data-toggle="pill" href="#manage-contact">
                                                    Quản lý liên hệ
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="iq-edit-list-data">
                                <div className="tab-content">
                                    <div className="tab-pane fade active show" id="personal-information" role="tabpanel">
                                        <div className="iq-card">
                                            <div className="iq-card-header d-flex justify-content-between">
                                                <div className="iq-header-title">
                                                    <h4 className="card-title">Thông tin cá nhân</h4>
                                                </div>
                                            </div>
                                            <div className="iq-card-body">
                                                <form>
                                                    <div className="form-group row align-items-center">
                                                        <div className="col-md-12">
                                                            <div className="profile-img-edit">
                                                                <img className="profile-pic" src="/images/user/1.jpg" alt="profile-pic" />
                                                                <div className="p-image">
                                                                    <i className="ri-pencil-line upload-button"></i>
                                                                    <input className="file-upload" type="file" accept="image/*" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=" row align-items-center">
                                                        <div className="form-group col-sm-6">
                                                            <label for="fname">First Name:</label>
                                                            <input type="text" className="form-control" id="fname" value="Ông" />
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label for="lname">Last Name:</label>
                                                            <input type="text" className="form-control" id="lname" value="Trần Thuận" />
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label for="uname">Tên tài khoản:</label>
                                                            <input type="text" className="form-control" id="uname" value="Thuangiaosu" />
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label for="cname">Công ty:</label>
                                                            <input type="text" className="form-control" id="cname" value="TV Team" />
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label className="d-block">Giới tính:</label>
                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" checked="" />
                                                                <label className="custom-control-label" for="customRadio6"> Nam </label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                <input type="radio" id="customRadio7" name="customRadio1" className="custom-control-input" />
                                                                <label className="custom-control-label" for="customRadio7"> Nữ </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label for="dob">Ngày sinh:</label>
                                                            <input className="form-control" id="dob" value="1984-01-24" />
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Tình trạng hôn nhân:</label>
                                                            <select className="form-control" id="exampleFormControlSelect1">
                                                                <option selected="">Độc thân</option>
                                                                <option>Đã kết hôn</option>
                                                                <option>Góa</option>
                                                                <option>Đã ly hôn</option>
                                                                <option>Ly thân </option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Tuổi:</label>
                                                            <select className="form-control" id="exampleFormControlSelect2">
                                                                <option>12-18</option>
                                                                <option>19-32</option>
                                                                <option selected="">33-45</option>
                                                                <option>46-62</option>
                                                                <option>63</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Quốc gia:</label>
                                                            <select className="form-control" id="exampleFormControlSelect3">
                                                                <option>Laos</option>
                                                                <option>China</option>
                                                                <option selected="">Viet Nam</option>
                                                                <option>Indo</option>
                                                                <option>USA</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Tỉnh/Thành phố:</label>
                                                            <select className="form-control" id="exampleFormControlSelect4">
                                                                <option></option>
                                                                <option>Hà Nội</option>
                                                                <option selected="">Đà Nẵng</option>
                                                                <option>HCM</option>
                                                                <option>Buôn Ma Thuột</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-sm-12">
                                                            <label>Địa chỉ:</label>
                                                            <textarea className="form-control" name="address" rows="5" style={{ lineHeight: 22 + "px" }}>
                                                                06 Nam Thành
                                                                Đà Nãng, VA 23803
                                                                Viet Nam
                                                                Zip Code: 40001
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mr-2">Gửi</button>
                                                    <button type="reset" className="btn iq-bg-danger">Hủy bỏ</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="chang-pwd" role="tabpanel">
                                        <div className="iq-card">
                                            <div className="iq-card-header d-flex justify-content-between">
                                                <div className="iq-header-title">
                                                    <h4 className="card-title">Đổi mật khẩu</h4>
                                                </div>
                                            </div>
                                            <div className="iq-card-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label for="cpass">Mật khẩu hiện tại:</label>
                                                        <a href="javascripe:void();" className="float-right">Quên mật khẩu</a>
                                                        <input type="Password" className="form-control" id="cpass" value="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="npass">Mật khẩu mới:</label>
                                                        <input type="Password" className="form-control" id="npass" value="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="vpass">Xác nhận lại mật khẩu:</label>
                                                        <input type="Password" className="form-control" id="vpass" value="" />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mr-2">Gửi</button>
                                                    <button type="reset" className="btn iq-bg-danger">Hủy bỏ</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="emailandsms" role="tabpanel">
                                        <div className="iq-card">
                                            <div className="iq-card-header d-flex justify-content-between">
                                                <div className="iq-header-title">
                                                    <h4 className="card-title">Email và SMS</h4>
                                                </div>
                                            </div>
                                            <div className="iq-card-body">
                                                <form>
                                                    <div className="form-group row align-items-center">
                                                        <label className="col-8 col-md-3" for="emailnotification">Thông báo tới Email :</label>
                                                        <div className="col-4 col-md-9 custom-control custom-switch">
                                                            <input type="checkbox" className="custom-control-input" id="emailnotification" checked="" />
                                                            <label className="custom-control-label" for="emailnotification"></label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row align-items-center">
                                                        <label className="col-8 col-md-3" for="smsnotification">Thông báo tới SMS:</label>
                                                        <div className="col-4 col-md-9 custom-control custom-switch">
                                                            <input type="checkbox" className="custom-control-input" id="smsnotification" checked="" />
                                                            <label className="custom-control-label" for="smsnotification"></label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row align-items-center">
                                                        <label className="col-md-3" for="npass">Khi nào gửi Email</label>
                                                        <div className="col-md-9">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="email01" />
                                                                <label className="custom-control-label" for="email01">Bạn có thông báo mới.</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="email02" />
                                                                <label className="custom-control-label" for="email02">Bạn đã gửi một tin nhắn trực tiếp</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="email03" checked="" />
                                                                <label className="custom-control-label" for="email03">Ai đó thêm bạn làm kết nối</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row align-items-center">
                                                        <label className="col-md-3" for="npass">Khi nào cần báo email</label>
                                                        <div className="col-md-9">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="email04" />
                                                                <label className="custom-control-label" for="email04"> Theo đơn đặt hàng mới.</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="email05" />
                                                                <label className="custom-control-label" for="email05"> Phê duyệt thành viên mới</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="email06" checked="" />
                                                                <label className="custom-control-label" for="email06"> Đăng ký thành viên</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mr-2">Gửi</button>
                                                    <button type="reset" className="btn iq-bg-danger">Hủy bỏ</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="manage-contact" role="tabpanel">
                                        <div className="iq-card">
                                            <div className="iq-card-header d-flex justify-content-between">
                                                <div className="iq-header-title">
                                                    <h4 className="card-title">Quản lý liên hệ</h4>
                                                </div>
                                            </div>
                                            <div className="iq-card-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label for="cno">Số liên lạc:</label>
                                                        <input type="text" className="form-control" id="cno" value="089" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="email">Email:</label>
                                                        <input type="text" className="form-control" id="email" value="tvtean@ttnm.com" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="url">Url:</label>
                                                        <input type="text" className="form-control" id="url" value="https://nhasachtv.com" />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mr-2">Gửi</button>
                                                    <button type="reset" className="btn iq-bg-danger">Hủy bỏ</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}