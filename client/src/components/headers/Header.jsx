import React from 'react'

const Header = () => {
    return (
        <header className="header ">

        <div className="header__logo-box">
            {/* <Link to="/#hautPageHome">
                <i className="fas fa-home fa-3x header__logo"></i>
            </Link> */}
        </div>
        <div className="text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Les Jardins de la joualle</span>
                <span className="heading-primary--secondary">
                    bienvenue
                </span>
            </h1>
            {/* <BtnPrimary linkTo="/projet#hautPageProjet">
                Réalisation
            </BtnPrimary> */}
        </div>
    </header>
    )
}

export default Header
