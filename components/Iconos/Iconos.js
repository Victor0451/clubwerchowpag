import React from 'react'

const Iconos = () => {
    return (
        <div className="web">
            <div className="row  d-flex justify-content-center mb-4">
                <div className="contenedor-img ejemplo-4-1">
                    <img className="tamaño" src="img/clubwerchow/solicitud2.png" />
                    <div className="mascara">
                        <div className="p-4 mt-2">
                            <a className="mt-4 link" href="/solicitudtarjeta">
                                Solicitar
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contenedor-img ejemplo-4-1">
                    <img className="tamaño" src="img/clubwerchow/empresas2.png" />
                    <div className="mascara" data-toggle="modal" data-target="#empresas">
                        <div className="p-4 mt-2">
                            <a className="mt-4 link" href="/comerciosadheridos">
                                Listado
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contenedor-img ejemplo-4-1">
                    <img className="tamaño" src="img/clubwerchow/ganadores.png" />
                    <div className="mascara">
                        <div className="p-4 mt-2">
                            <a href="/ganadores" className="mt-4 link">
                                Ingresar
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contenedor-img ejemplo-4-1">
                    <img className="tamaño" src="img/clubwerchow/fanpage.png" />
                    <div className="mascara">
                        <div className="p-4 mt-2">
                            <a
                                href="https://www.facebook.com/Club-Werchow-100111638450456/"
                                target="_blank"
                                className="mt-4 link"
                            >
                                Visitar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Iconos