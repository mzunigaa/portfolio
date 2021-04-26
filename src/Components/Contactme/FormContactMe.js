import React, { useState } from 'react'
import { 
    FormContainer,
    RegisterForm,
    FormField,
    FormCommentField,
    BtnWrap,
    TittleForm,
    SubmittButton,
    SuccessMessage,
    NameAlert
} from './ContactMeElements';
import emailjs from 'emailjs-com';


const FormContactMe = () => {

    const[submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false); 

    const [values, setValues] = useState({
        name: "",
        email: "",
        comment: "",
    })

    const handleNameInputChange = (event) => {
        setValues({...values, name: event.target.value})
    }

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handleCommentInputChange = (event) => {
        setValues({...values, comment: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.name && values.email && values.comment){
            setValid(true);
            emailjs.sendForm('service_b033jb7', 'template_uk3sbhs', e.target, 'user_n7kTNJTwHt584EhjZXFJA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
        setSubmitted(true);
    }

    return (
        <FormContainer>
            <BtnWrap>
                <TittleForm darkText={true}>Let's talk!</TittleForm>
            </BtnWrap>
            {submitted && valid ? <SuccessMessage>Success! Thank you.</SuccessMessage>: null}
            <RegisterForm onSubmit={handleSubmit}>
                <FormField
                 onChange={handleNameInputChange}
                 id="name"
                 type="text"
                 placeholder="Nombre completo"
                 name="name">
                </FormField>
                {submitted && !values.name ? <NameAlert>Please enter a name.</NameAlert> : null}
                <FormField
                 onChange={handleEmailInputChange}
                 id="email"
                 type="email"
                 placeholder="Correo electronico"
                 name="email">
                </FormField>
                {submitted && !values.email ? <NameAlert>Please enter an email.</NameAlert> : null}
                <FormCommentField
                 onChange={handleCommentInputChange}
                 id="comment"
                 type="text"
                 placeholder="Comentario"
                 name="comment">
                </FormCommentField>
                {submitted && !values.comment ? <NameAlert>Please enter a comment.</NameAlert> : null}
                <BtnWrap>
                    <SubmittButton>
                      Submitt
                    </SubmittButton>
                </BtnWrap>
            </RegisterForm>
        </FormContainer>
    )
}

export default FormContactMe
