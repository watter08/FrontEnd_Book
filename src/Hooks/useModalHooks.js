import { useState } from 'react';



const useModalHooks = (FirtsValue = false) => {

    const [show , setShow ] = useState(FirtsValue);
    const handleToggle = () => setShow(!show);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return {
        show,        
        handleToggle,
        handleClose,
        handleShow
    }

}



export default useModalHooks;