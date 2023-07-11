import React from 'react'

const FormSolicitudSorteo = ({
    apellidoRef,
    nombreRef,
    dniRef,
    telefonoRef,
    obraSocRef,
    mailRef,
    rolRef,
    errores,
    enviarSolicitud
}) => {
    return (
        <>

            <br />
            <br />
            <br />

            <div className="container mt-5 border border-dark p-4 alert alert-secondary">

                <div className="col-12">
                    <h3 className="heading text-center">
                        <u>Solicitud Sorteo</u>: Datos Del Solicitante
                    </h3>
                    <div className="heading-underline"></div>
                </div>

                <div className="row mb-4">
                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                <u>
                                    Apellido:
                                </u>
                            </strong>
                        </label>
                        <input
                            type="text"
                            className="form-control border border-dark"
                            placeholder="Apellido"
                            name="apellido"
                            ref={apellidoRef}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                <u>
                                    Nombre:
                                </u>
                            </strong>
                        </label>
                        <input
                            type="text"
                            className="form-control border border-dark"
                            placeholder="Nombre"
                            name="nombre"
                            ref={nombreRef}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                <u>
                                    DNI:
                                </u>
                            </strong>
                        </label>
                        <input
                            type="number"
                            className="form-control border border-dark"
                            placeholder="DNI"
                            name="dni"
                            ref={dniRef}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                <u>
                                    Obra Social:
                                </u>
                            </strong>
                        </label>
                        <input
                            type="text"
                            className="form-control border border-dark"
                            placeholder="Obra Social"
                            name="obrasoc"
                            ref={obraSocRef}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                <u>
                                    Mail:
                                </u>
                            </strong>
                        </label>
                        <input
                            type="text"
                            className="form-control border border-dark"
                            placeholder="Mail"
                            name="mail"
                            ref={mailRef}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                <u>
                                    Telefono:
                                </u>
                            </strong>
                        </label>
                        <input
                            type="number"
                            className="form-control border border-dark"
                            placeholder="Telefono"
                            name="telefono"
                            ref={telefonoRef}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                <u>
                                    Usted es:
                                </u>
                            </strong>
                        </label>
                        <select
                            className="custom-select border border-dark"
                            name="es"
                            ref={rolRef}
                            defaultValue="no"
                        >
                            <option value="no">
                                Seleccione una opcion
                            </option>
                            <option value="1">
                                Afiliado de Werchow
                            </option>
                            <option value="2">
                                No es afiliado a Werchow
                            </option>
                            <option value="3">
                                Es conocido o pariente de un afiliado de werchow (Referido)
                            </option>
                        </select>
                    </div>

                    {errores ? (

                        <div className='alert alert-danger text-center text-uppercase border border-dark col-md-12'>
                            {errores}
                        </div>

                    ) : null}

                    <div className="form-group col-md-12 mt-4">
                        <button
                            className="btn btn-secondary btn-md mt-4 mb-4 btn-block"
                            onClick={enviarSolicitud}
                        >
                            Enviar Solicitud
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FormSolicitudSorteo