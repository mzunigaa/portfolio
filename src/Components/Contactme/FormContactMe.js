import React, { useState } from 'react'
import { 
    FormContainer,
    RegisterForm,
    FormField,
    BtnWrap,
    Img
} from './ContactMeElements';
import logo from '../../images/logo.jpg'


const FormContactMe = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    const handleNameInputChange = (event) => {
        setValues({...values, name: event.target.value})
    }

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handleCommentInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    return (
        <FormContainer>
            <Img src={logo} alt="Logo"/>
            <RegisterForm>
                <FormField
                 onChange={handleNameInputChange}
                 id="name"
                 type="text"
                 placeholder="Nombre completo"
                 name="name">
                </FormField>
                <FormField
                 onChange={handleEmailInputChange}
                 id="email"
                 type="email"
                 placeholder="Correo electronico"
                 name="email">
                </FormField>
                <FormField
                 onChange={handleCommentInputChange}
                 id="comment"
                 type="text"
                 placeholder="Comentario"
                 name="comment">
                </FormField>
                <BtnWrap>
                   
                </BtnWrap>
            </RegisterForm>
        </FormContainer>
    )
}

export default FormContactMe
