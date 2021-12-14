import React from 'react'
import Navbar from '../Landing/Navbar'
import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
    return (
        <>
            <Navbar/>
            <div className="container-fluid">
        <div className="row dashbox ">
          <Sidebar />
          <main
            role="main"
            className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 dash"
          >
            {/*========================= content area start=============================== */}
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-password-image">
                    <div className="p-5">
                      {/* <img
                        src={imgforgot}
                        alt="forgot password image"
                        style={{ width: "400px", height: "430px" }}
                      /> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-2">
                          Reset Your Password?
                        </h1>
                        <p className="mb-4">error message</p>
                      </div>
                      <form className="user">
                        <div className="form-group"> 
                        <label className="form-control-label">
                          Current Password <span className="require">*</span>
                        </label>
                          <input
                            type="text"
                            className="form-control form-control-user"
                            placeholder="Enter current Password..."
                            name = "password"
                            // value={password} onChange={(e)=>newPassHandler(e)}
                          />
                          </div>
                          <div className="form-group"> 
                        <label className="form-control-label">
                          New Password <span className="require">*</span>
                        </label>
                          <input
                            type="text"
                            className="form-control form-control-user"              
                            placeholder="Enter new Password..."
                            name="password1"
                            // value={password1} onChange={(e)=>newPassHandler(e)}
                          />
                          </div>
                          <div className="form-group"> 
                        <label className="form-control-label">
                          Confirm New Password <span className="require">*</span>
                        </label>
                          <input
                            type="text"
                            className="form-control form-control-user"                       
                            placeholder="confirm new Password..."
                            name="password2"
                            // value={password2} onChange={(e)=>newPassHandler(e)}
                          />
                        </div>
                        <Link
                          to="/reset/password"
                          className="btn btn-primary btn-user btn-block"
                        //   onClick={onSubmit}
                        >
                          Reset Password
                        </Link>
                      </form>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====================== content area end================= */}
          </main>
        </div>
      </div>
        </>
    )
}

export default ResetPassword
