import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';



/*************************************************************
 * GET UNIQUE ID OF KEY
 * **********************************************************/

    export const GetUuId = () => { return String(uuid()) };


/*************************************************************
 * HAS ERROR AND SHOW ERROR
 * **********************************************************/

 export const HasErrorShowError = (errors) => { 
   for(var err in errors) {
     toast.warn(errors[err])
   }
   return Object.entries(errors).length > 0;
  };




/*************************************************************
 * VALIDAR SI EL INPUT TIENE ERRORES DE VALIDACION
 * **********************************************************/

    export const isInvalidInput = (errors, name)   => {  return errors && errors[name] ? true : false };

    export const isInvalidInputChild = (errors, name)   => {  
        let bole = Object.entries(errors).length <= 0 ? false :  errors && errors?.Formulario[name.split('.')[1]] ? true : false ;
        return bole;
    
    };


/*************************************************************
 * IF VALID PHONE
 * **********************************************************/
  
  export function isValidPhone(string = "")   {
    const regEx = new RegExp(/^(\()?\d{3}-?(\))?\d{3}-?\d{4}$/);
    return (string && string.match(regEx)) ? true : false; 
  }

  
 /*************************************************************
 * IS HAS ENOUGTH CHARACTER
 * **********************************************************/

  export const hasEnoughLength = (string, minimunCount)   => {
    //eslint-disable-next-line
    const regEx = new RegExp(/[a-zA-Z\t\h]+|(^$)/);
    return (string?.length >= minimunCount && string.match(regEx) && string?.trim()) ? true : false;
  };



 /*************************************************************
 * IS VALID NUMBER
 * **********************************************************/

  export const isNumberValid = (number)   => {
    return typeof number === 'number' && isFinite(number);
  }



 /*************************************************************
 * IS VALID EMAIL
 * **********************************************************/

  export const isValidEmail = (string)   => {
    //eslint-disable-next-line
    const regEx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);
    return (string && string.match(regEx)) ?true : false;
  }


/*************************************************************
 * IS EMPTY ARRAY
 * **********************************************************/

  export const isEmptyArray = (array)  => {
    return (array && array.length === 0) ? true : false;
  }
  

/*************************************************************
 * IS EMP TY OBJECT
 * **********************************************************/

  export const isEmptyObject = (obj)   => {
    return Object.keys(obj).length === 0;
  }


 /*************************************************************
 * IS VALID DATE
 * **********************************************************/
  export const isValidDate = (date)  =>  {
    return date instanceof Date  && Object.prototype.toString.call(date) === '[object Date]';
  }
  


 /*************************************************************
 * IS VALID PASSWORD
 * **********************************************************/

  export const isValidPassword = (string)  => {
    const regEx = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/);
    return (string && string.match(regEx)) ? true : false;
  }


 /*************************************************************
 * IS BOOLEAN
 * **********************************************************/

  export const isBooleano = (bool)   => {
    return 'boolean' === typeof bool;
  }


 /*************************************************************
 * IS MATCH STRING
 * **********************************************************/

  export const isMatchString = (NewPassword , OldPassword)   => {
    return NewPassword?.toString()?.toLowerCase() === OldPassword?.toString()?.toLowerCase() ? true : false;
}