import React from 'react'

function Social({ isEditable, button }) {
    return (
        <div>
            <center>
                <div className="terms-condition">
                    <div className="col-12 d-flex">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="cb1" style={{ pointerEvents: isEditable ? 'auto' : 'none' }} />
                            <label className="text-white"> I agree all terms & conditions</label>
                        </div>
                    </div>
                </div>

                <br></br>
                <div className='crud-button-position'>

                    <button type="submit" className="btn" style={{ pointerEvents: isEditable ? 'auto' : 'none', backgroundColor: isEditable ? '' : 'grey' }}>{button}</button>
                </div>
            </center>
            <center>
                <br></br>
                <div className="text-white">Social Media Links</div>
            </center>
            <br></br>
            <div className="social-icons">
                <a href="https://www.facebook.com/" className="social-button facebook"><i className="fa fa-facebook"></i></a>
                <a href="https://www.google.co.in/" className="social-button google"><i className="fa fa-google"></i></a>
                <a href="https://twitter.com/" className="social-button twitter"><i className="fa fa-twitter"></i></a>
            </div>
            <br></br><br></br>
        </div>
    )
}

export default Social
