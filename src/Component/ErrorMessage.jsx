
const ErrorMessage = ({ Errors, Name, type = "alert", TypeInput = 'Normal' }) => {
    let className = type === "feedback" ? "invalid-feedback" : "alert alert-danger";

    if (Errors && typeof Errors === "string") {
        return (
            <div className={`${className}`} style={{ fontSize: "1em" }}>
                {Errors}
            </div>
        );
    }
    if (TypeInput === 'Child' && Object.entries(Errors).length > 0) {
        let nombre = Name.split('.');
        if (Errors && Errors.Formulario[nombre[1]]) {
            return (
                <>
                    <div className={`${className}`} >
                        {Errors.Formulario[nombre[1]]}
                    </div>
                </>
            )
        }
    }
    return (
        <>
            {Errors && Errors[Name] && (
                <div className={`${className}`} >
                    {Errors[Name]}
                </div>
            )}
        </>
    );
};

export default ErrorMessage;