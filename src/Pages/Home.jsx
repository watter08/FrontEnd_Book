import { useCallback, useContext, useEffect, useState, memo } from "react";
import useModalHooks from '../Hooks/useModalHooks';
import BookContext from "../Context/Book/BookContext";
import NavbarComponent from "../Component/NavbarComponent";
import UserFormModal from './BookFormModal';
import FooterComponent from '../Component/FooterComponent'
import TableComponent from '../Component/TableComponent';





const HomeComponent = () => {

    const Initial = {
        Books : [],
        Column:[
            { name : 'Id', selector: row => row.id },
            { name : 'Title', selector: row => row.title },
            { name : 'Publish Date', selector: row => row.publishDate },
            {name: 'Action' , selector: row => {
                return <> <button className="btn btn-outline-danger m-1 p-1" onClick={() => {DeleteBook(row)} }>Del</button> 
                          <button className="btn btn-outline-success m-1 p-1" onClick={() => HanldeSelectUser(row)}   >Upd</button>
                       </>
            }},
        ]
    }
    const { handleClose , handleShow , handleToggle , show } = useModalHooks(false);
    const { 
            Books,
            Column,
            GetBooks,
            GetBook,
            UpdateBook,
            DeleteBook,
            handleChangeInput,
            handleChangeFormInput,
            handleSubmit,
            handleFormError,
            handleSelectBook,
            InputSearch,
            BookForm,
            Errors,
     } = useContext(BookContext);
    const [ state , setState ] = useState(Initial)


    useEffect(() => {
        Promise.all([GetBooks(), handleFormError()]);
    }, [])

    useEffect(() => {
        if(!Array(Books).length > 0) return;
        let newState = {...state , Books};
        setState(newState);
    },[Books]);

    const SearchLocalUser = useCallback((event) => {
        handleChangeInput(event);
        const filter = Books.filter((value) => 
        value.title.toLowerCase().includes(event.currentTarget.value.toLowerCase()) ||
        String(value.id).toLowerCase().includes(event.currentTarget.value.toLowerCase())
        )
        let newState = {...state , Books : filter};
        setState(newState)
    },[Books]);


    const HanldeSelectUser = async (Books) => {
        await Promise.all([handleToggle() ,handleSelectBook(Books) ])
        await handleFormError();
    }

    return(
        <div className="">

        <NavbarComponent 
        Barnd="React Context App Book List" 
        Search={SearchLocalUser} 
        OnChange={SearchLocalUser}
        InputSearch={InputSearch}
        OnClick={handleShow}
        />

   
        <TableComponent Title="Book List" Data={state.Books} Column={state.Column} />
       

        <UserFormModal 
        show={show} 
        handleToggle={handleToggle}
        handleClose={handleClose}
        handleChangeFormInput={handleChangeFormInput}
        BookForm={BookForm}
        handleSubmit={(Books) => {handleSubmit(Books); handleClose() }}
        FooterButtonSubmitLabel={BookForm?.id ? 'Actualizar' : 'Guardar'}
        errors={Errors}
        />

        <FooterComponent/>

        </div>
    )
}



export default memo(HomeComponent);