import Link from "next/link";

export default function Login() {
    return (
        <>
            <section className="sign-in-page">
                <div className="container p-0">
                    <div className="row no-gutters height-self-center">
                        <div className="col-sm-12 align-self-center page-content rounded">
                            <div className="row m-0">
                                <div className="col-sm-12 sign-in-page-data">
                                    <div className="sign-in-from bg-primary rounded">
                                        <h3 className="mb-0 text-center text-white">Sign in</h3>
                                        <p className="text-center text-white">Enter your email address and password to access admin panel.</p>
                                        <form className="mt-4 form-text">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <Link href="#" className="float-right text-dark">Forgot password?</Link>
                                                <input type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                            <div className="d-inline-block w-100">
                                                <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" for="customCheck1">Remember Me</label>
                                                </div>
                                            </div>
                                            <div className="sign-info text-center">
                                                <button type="submit" className="btn btn-white d-block w-100 mb-2">Sign in</button>
                                                <span className="text-dark dark-color d-inline-block line-height-2">Don't have an account? <Link href="/admin/auth/register" className="text-white">Sign up</Link></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}