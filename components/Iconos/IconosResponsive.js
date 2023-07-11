import React from 'react'

const IconosResponsive = () => {
    return (
        <div className="responsive">
            <div className="row mb-4 col-12 d-flex justify-content-between">
                <a href="/solicitudtarjeta">
                    <img className="tamaño" src="img/clubwerchow/solicitud2.png" />
                </a>
                <a href="/comerciosadheridos">
                    <img className="tamaño" src="img/clubwerchow/empresas2.png" />
                </a>
                <a href="/ganadores">
                    <img className="tamaño" src="img/clubwerchow/ganadores.png" />
                </a>
                <a
                    href="https://www.facebook.com/Club-Werchow-100111638450456/"
                    target="_blank"
                >
                    <img className="tamaño" src="img/clubwerchow/fanpage.png" />
                </a>
            </div>
        </div>
    )
}

export default IconosResponsive