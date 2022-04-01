import { memo } from "react";


const NavbarComponent = ({
    Barnd = '',
    Search = () => {},
    OnChange = () => {},
    OnClick = () => {},
    InputSearch = '',
    ...rest
}) => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand" href="#"> {Barnd}</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       
                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" value={InputSearch} onChange={OnChange} />
                            <button className="btn-hover color-8" onClick={OnClick}>Create</button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}


export default memo(NavbarComponent);