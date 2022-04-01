import { useReducer } from "react"
import { toast } from "react-toastify";
import BookReducer from "./BookReducer"
import UserContext from "./BookContext"
import Axios from '../../Service';
import { BookFormClass } from "../Types";
import { isValidEmail, hasEnoughLength } from '../../Lib/Helpers';

const Ruta = 'https://fakerestapi.azurewebsites.net/api/v1/Books/';

const BookState = (props) => {

    const InitialState = {
        Books: [],
        InputSearch: '',
        ResultSearch: [],
        SelectedBook: {},
        BookForm: new BookFormClass({}),
        Errors: {},
        FormValidations: {
            title: (str) => !hasEnoughLength(str, 3) ? "Title At Least Has To Three Characters" : '',
            description: (str) => !hasEnoughLength(str, 3) ? "Description At Least Has To Three Characters" : '',
        },
      
    }

    const [state, dispatch] = useReducer(BookReducer, InitialState);



    /*****************************************************
     * ***************************************************
     *                         BOOKS 
     * ***************************************************
     * ***************************************************/

    const GetBooks = async () => {
        const res = await Axios.get(Ruta);
        dispatch({ type: 'GET_BOOKS', payload: res?.data });
    }

    const GetBook = async (id) => {
        const res = await Axios.get(String(`${Ruta}${id}`));
        dispatch({ type: 'GET_BOOK', payload: res?.data });
    }

    const handleSubmit = async () => {
        try {
            if (Number(state.BookForm.id) > 0)
                await UpdateBook(state.BookForm)
            else await CreateBook()

        } catch (error) {
            toast.warning(`${error.message}`)
        }

    }

    const CreateBook = async () => {
        try {
            const res = await Axios.post(String(`${Ruta}`), state.BookForm)
            dispatch({ type: "CREATE_BOOK", payload: new BookFormClass(res?.data) })
        } catch (error) { toast.warning(`${error.message}`) }
    }


    const handleFormError = async () => {
        try {
            await dispatch({ type: 'HANDLE_SUBMIT_FORM' })
        } catch (error) { toast.warning(`${error.message}`) }
    }

    const UpdateBook = async (Books) => {
        try {
            const res = await Axios.put(String(`${Ruta}${Books?.id}`) , new BookFormClass(Books))
            dispatch({ type: 'UPDATE_BOOK', payload: { id: Books.id , value : new BookFormClass(res?.data)} })
        } catch (error) { toast.warning(`${error.message}`) }
     }

    const DeleteBook = async (Books) => {
        try {
            await Axios.delete(String(`${Ruta}${Books?.id}`))
            dispatch({ type: 'DELETE_BOOK', payload: Books?.id })
        } catch (error) { toast.warning(`${error.message}`) }
    }


    const handleSelectBook = (Books) => {
        try {
            dispatch({type:'HANDLE_SELECT_BOOK' , payload: new BookFormClass(Books)})
        } catch (error) { toast.warning(`${error.message}`) }
    }

    /*****************************************************
     * ***************************************************
     *                         BOOKS 
     * ***************************************************
     * ***************************************************/


    /*****************************************************
     * ***************************************************
     *                     INPUT SEARCH 
     * ***************************************************
     * ***************************************************/

    const handleChangeInput = ({ currentTarget: input }) => {
        try {
            dispatch({ type: 'ON_CHANGE_INPUT', payload: input.value })
        } catch (error) {
            toast.warning(`${error.message}`)
        }
    }

    const handleChangeFormInput = ({ currentTarget: input }) => {
        try {
            dispatch({ type: 'ON_CHANGE_INPUT_FORM', payload: { name: input.name, value: getInputValue(input), Validation : input.attributes['validation']?.value } })
        } catch (error) {
            toast.warning(`${error.message}`)
        }
    }

    const getInputValue = (input) => input.type === 'date' ? new Date(input.value).toLocaleDateString('en-CA') : input.value;




    /*****************************************************
     * ***************************************************
     *                       INPUT SEARCH 
     * ***************************************************
     * ***************************************************/






    return (
        <UserContext.Provider value={{
            ...state,
            GetBooks,
            GetBook,
            UpdateBook,
            DeleteBook,
            handleChangeInput,
            handleChangeFormInput,
            handleSubmit,
            handleFormError,
            handleSelectBook,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}



export default BookState;