import React from 'react'

const Nosotros = () => {
    return (
        <div id="course">
            <div className="col-12 narrow text-center mb-4">
                <h1 className="mt-4 mb-4">
                    Acerca Del Club
                </h1>
                <div className="heading-underline"></div>
                <p className="lead mt-4 mb-4">
                    <strong>
                        Club Werchow
                    </strong>
                    es un programa de beneficios agrupados
                    en una tarjeta, está pensado en descuentos, promociones y sorteos
                    exclusivos para vos y tu familia. Nuestros comercios adheridos te
                    brindaran la mejor atención y el ahorro vos que necesitas.
                </p>
                <p className="lead mt-4 mb-4">
                    <strong>
                        ¡Suscribite y empezá a ser parte de este club!
                    </strong>
                </p>
                <a
                    href="/solicitudtarjeta"
                    className="btn btn-secondary btn-md mt-4 mb-4"
                    target=""
                >
                    Solicitar Tarjeta
                </a>
            </div>
        </div>
    )
}

export default Nosotros