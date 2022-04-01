import { memo } from 'react';
import { Modal, Button, Row , Col } from 'react-bootstrap';
import InputComponent from '../Component/InputComponent';





const BookFormModal = ({
    show = false,
    handleToggle = () => { },
    handleClose = () => { },
    handleShow = () => { },
    BackDrop = 'static',
    keyboard = false,
    Centered = false,
    Size = 'xl',
    Scrollable = true,
    Title = '',
    children,
    hasFooter = false,
    handleChangeFormInput = () => {},
    BookForm = {},
    errors = {},
    FooterButtonSubmitLabel = 'Guardar',
    handleSubmit = () => { },
    FooterButtonOptionalFunction = handleClose,
    FooterButtonOptionalLabel = 'Cerrar',
    ...rest
}) => {
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop={BackDrop}
                keyboard={keyboard}
                centered={Centered}
                dialogClassName="modal-100w"
                size={Size}
                scrollable={Scrollable}
                animation={true}
                autoFocus={true}
            >

                <Modal.Header closeButton className={`text-center bg-dark text-white`}>
                    <Modal.Title className="text-center">BOOK FORM</Modal.Title>
                </Modal.Header>

                <Modal.Body  className={`show-grid`}>
                <Row className="p-3">


                <Col md={6}>
                    <InputComponent
                        Name="title"
                        Label='title'
                        LabelMuted='Mirada...'
                        PlaceHolder='Jhon'
                        Value={BookForm?.title}
                        HtmlFor=''
                        Type='text'
                        ControlId=''
                        TextId=''
                        OnClick={() => { }}
                        OnChange={handleChangeFormInput}
                        OnEnter={() => { }}
                        Errors={errors}
                        Validation="letter"
                    />
                </Col>

                <Col md={6}>
                    <InputComponent
                        Name="excerpt"
                        Label='Excerpt'
                        LabelMuted='.....'
                        PlaceHolder='lorem'
                        Value={BookForm?.excerpt}
                        HtmlFor=''
                        Type='text'
                        ControlId=''
                        TextId=''
                        OnClick={() => { }}
                        OnChange={handleChangeFormInput}
                        OnEnter={() => { }}
                        Errors={errors}
                        Validation="letter"
                    />
                </Col>

                <Col md={12}>
                    <InputComponent
                        Name="description"
                        Label='Description'
                        LabelMuted='This Book.....'
                        PlaceHolder='Doe'
                        Value={BookForm?.description}
                        HtmlFor=''
                        Type='textarea'
                        ControlId=''
                        TextId=''
                        OnClick={() => { }}
                        OnChange={handleChangeFormInput}
                        OnEnter={() => { }}
                        Errors={errors}
                        Validation="letter"
                    />
                </Col>

                <Col md={6}>
                    <InputComponent
                        Name="pageCount"
                        Label='pageCount'
                        LabelMuted='1200'
                        PlaceHolder=''
                        Value={BookForm?.pageCount}
                        HtmlFor=''
                        Type='number'
                        ControlId=''
                        TextId=''
                        OnClick={() => { }}
                        OnChange={handleChangeFormInput}
                        OnEnter={() => { }}
                        Errors={errors}
                    />
                </Col>

                <Col md={6}>
                    <InputComponent
                        Name="publishDate"
                        Label='Publish Date'
                        LabelMuted='Publish Date'
                        PlaceHolder='2022/12/23'
                        Value={BookForm?.publishDate}
                        HtmlFor=''
                        Type='date'
                        ControlId=''
                        TextId=''
                        OnClick={() => { }}
                        OnChange={handleChangeFormInput}
                        OnEnter={() => { }}
                        Errors={errors}
                        Validation="letter"
                    />
                </Col>

                </Row>
              
                </Modal.Body>              

                <Modal.Footer className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <Button className='ButtonClose' variant="danger" onClick={FooterButtonOptionalFunction}>
                        {FooterButtonOptionalLabel}
                    </Button>
                    <Button className='ButtonSuccess' variant="primary" onClick={handleSubmit} disabled={Object.entries(errors).length > 0}>
                        {FooterButtonSubmitLabel}
                    </Button>
                </Modal.Footer>

            </Modal>

        </>
    )
}


export default memo(BookFormModal);