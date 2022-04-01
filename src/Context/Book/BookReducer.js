import { 
    CREATE_BOOK , 
    DELETE_BOOK , 
    GET_BOOK , 
    GET_BOOKS ,
    UPDATE_BOOK, 
    HANDLE_SELECT_BOOK,
    ON_CHANGE_INPUT, 
    ON_CHANGE_INPUT_FORM,
    HANDLE_SUBMIT_FORM,
  } from '../Types';


const Bookeducer = (state , action ) => {
    try {
        
        const { payload , type } = action

        switch(type) {
            case GET_BOOKS:
                return {
                    ...state,
                    Books: payload
                }
            case GET_BOOK: 
            return{
                ...state,
                SelectedBook : payload
            }
            case ON_CHANGE_INPUT: 
            return{
                ...state,
                InputSearch : payload
            }
            case ON_CHANGE_INPUT_FORM:
               return {
                   ...state,
                   BookForm: {
                       ...state.BookForm,
                       [payload.name] : InputsValidation({...payload, prev : state.BookForm[payload.name]})
                   },
                   Errors: getInputErrorMessage(state , payload)
               }
            case HANDLE_SUBMIT_FORM: 
            return{
                ...state,
                Errors : getFormErrorMessages(state)
            }
            case CREATE_BOOK:
                return{
                    ...state,
                    Books : [...state.Books, payload]
                }
            case DELETE_BOOK:
                return{
                    ...state,
                    Books: [...state.Books].filter((value) => value.id !== payload)
                }
            case HANDLE_SELECT_BOOK:
                return{
                    ...state,
                    BookForm : payload
                }
            case UPDATE_BOOK:
                return{
                    ...state,
                    Books: [...state.Books].filter((value) => value.id !== payload.id).concat(payload.value)
                }
            default : 
            return state;
        }

    } catch (error) {
        console.log(error)
    }
}




const getInputErrorMessage = (prevState , action) => {
    const data = {...prevState}
    const validations = data.FormValidations
    if (!validations[action.name]) return {};
    const ErrorMessage = validations[action.name](action.value);
    if( String(ErrorMessage).length > 0 )
    data.Errors[action.name] = ErrorMessage
    else
    delete data.Errors[action.name]
    return  data.Errors
};

const getFormErrorMessages = (prevState) => {
    const data = {...prevState}
    const validationErrors = {};
    const validations = data.FormValidations
    for (let validationName in validations) {
        let errorMessage = validations[validationName](data.BookForm[validationName]);
        if (errorMessage) {
            validationErrors[validationName] = errorMessage;
        }
    }
    return validationErrors;
};

const InputsValidation = (payload) => {
    var regexString = new RegExp("^[a-zA-Z ]+$");
    var regexNumber = new RegExp("^[0-9]+$");
    // var regexLink = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    return (payload.Validation === 'letter' || payload.Validation === 'number')  ?
           (regexString.test(payload.value) === true || regexNumber.test(payload.value) === true ) ? payload.value : payload.prev :
           payload.value;
}

export default Bookeducer;