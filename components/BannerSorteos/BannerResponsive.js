import React from 'react'

const BannerResponsive = () => {
    return (
        <div className="responsive">
            <div className="banner-sorteo">
                <img
                    src="img/clubwerchow/sorteo.jpg"
                    alt="Sorteo Club Werchow"
                    className="image-banner"
                />
            </div>
            <div className="col-11 text-center mr-4">
                <a
                    href="/solicitudsorteo"
                    className="btn btn-secondary btn-block mt-4 mb-4"
                    target=""
                >
                    Inscribite Ahora!
                </a>
            </div>
        </div>
    )
}

export default BannerResponsive