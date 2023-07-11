import React from 'react'
import Iconos from '../Iconos/Iconos'
import IconosResponsive from '../Iconos/IconosResponsive'

const Servicios = () => {
    return (
        <div id="features">
            <div className="jumbotron ">
                <div className="narrow">
                    <div className="row text-center d-flex justify-content-center">
                        <div className="col-12">
                            <h3 className="heading">Secciones</h3>
                            <div className="heading-underline"></div>
                            <Iconos />
                            <IconosResponsive />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicios