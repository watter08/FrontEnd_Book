import { Form } from 'react-bootstrap';
import ErrorMessage from './ErrorMessage';
import { isInvalidInput, isInvalidInputChild } from '../Lib/Helpers';



const InputComponent = ({
    Label = '',
    InputClass = '',
    Name = '',
    LabelMuted = '',
    Value = '',
    PlaceHolder = '',
    HtmlFor = '',
    Type = 'text',
    TypeInput = 'Normal', //Normal  Child 
    ControlId = '',
    TextId = '',
    OnClick = () => { },
    OnChange = () => { },
    OnEnter = () => { },
    Errors = {},
    IsDisable = false,
    Min,
    Max,
    Validation,
    ...rest
}) => {

    

    return (
        <div className={"form-group text-center p-1"}>
            {String(Label).length > 0 && (<Form.Label className="H-7-P" htmlFor={HtmlFor ? HtmlFor : Name}>{Label}</Form.Label>)}
            <Form.Control
                className={` ${InputClass} form-control ${TypeInput === 'Child' ? isInvalidInputChild(Errors , Name) ? "is-invalid" : ""  : isInvalidInput(Errors, Name) ? "is-invalid" : "" } `}
                type={Type}
                name={Name}
                value={Value}
                defaultValue={Value}
                id={ControlId}
                placeholder={PlaceHolder}
                onClick={OnClick}
                onChange={OnChange}
                onKeyPress={(e) => (e.code === 'Enter' || e.key === 'Enter') ? OnEnter() : () => { }}
                disabled={IsDisable}
                min={Min}
                max={Max}
                color='danger'
                Validation={Validation}
            />                    
                
                <ErrorMessage 
                Errors={Errors}
                Name={Name}
                TypeInput={TypeInput}
                />
                    <Form.Text className="H-7" id={TextId} muted>{LabelMuted}</Form.Text>
        </div>
    )
}



export default InputComponent;