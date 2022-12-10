import React from 'react'

const Contacto = () => {
    return (
        <div id="contact">
            <footer>
                <div className="row justify-content-center">
                    <div className="col-md-5 text-center">
                        <div className="">
                            <img src="img/clubwerchow/logo2.png" className="logoclub" alt="club werchow" />
                        </div>
                        <div className="">
                            <strong>Datos De Contacto</strong>
                            <p>
                                (388) - 4300930 <br />
                                clubwerchow@werchow.com
                            </p>
                            <a href="">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <hr className="socket" />
                        &copy; Club Werchow
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Contacto