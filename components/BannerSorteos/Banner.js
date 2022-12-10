import React from 'react'

const Banner = () => {
    return (
        <div className="web">
            <div className="banner-sorteo">
                <img
                    src="img/clubwerchow/sorteo.jpg"
                    alt="Sorteo Club Werchow"
                    className="image-banner"
                />
                <div className="middle-banner">
                    <hr className="mt-4 mb-4" />
                    <a href="/solicitudsorteo" className="btn btn-secondary btn-md text-white">
                        Inscribite Ahora!
                    </a>
                    <hr className="mt-4 mb-4" />
                </div>
            </div>
        </div>
    )
}

export default Banner