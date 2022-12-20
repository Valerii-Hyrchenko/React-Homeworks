import styled from "styled-components"
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const Form = styled.form`
    padding: 20px 30px 50px;
    margin: 30px auto 0;
    max-width: 400px;
    border: 5px solid rgb(74, 168, 250);
    border-radius: 14px;
    background: rgb(50,142,223);
    box-shadow:  -8px -8px 15px rgb(26, 109, 181),
    8px 8px 15px rgb(74, 168, 250);
`;

const FormTitle = styled.h1`
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #FFF;
    margin-bottom: 35px;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 25px;
`;

const Label = styled.label`
    position: absolute;
    left: 5px;
    font-weight: 700;
    font-size: 18px;
    font-style: italic;
    color: #FFF;
`;

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 20px 5px 12px 15px;
    border: 1px solid transparent;
    border-radius: 8px;
    outline: none;
    font-size: 20px;
    color: #FFF;
    background: rgb(66,160,246);

        &::placeholder {
            color: rgb(255, 255, 255, 0.7);
        }
`;

const Button = styled.button`
    --color: rgb(66,160,246, 0.9);
    font-family: inherit;
    display: block;
    width: 90%;
    margin: 0 auto;
    position: relative;
    padding: 15px 0;
    overflow: hidden;
    border: 4px solid var(--color);
    transition: 500ms;
    z-index: 1;
    font-size: 20px;
    border-radius: 6px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--color);
    cursor: pointer;

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            background: var(--color);
            height: 300px;
            width: 620px;
            border-radius: 50%;
        }

        &:hover {
            color: #fff;
            letter-spacing: 10px;
            transition: 500ms;
        }

        &:before {
            top: 100%;
            left: 100%;
            transition: all .7s;
        }

        &:hover:before {
            top: -60px;
            left: -70px;
        }

        &:active:before {
            background: rgb(66,160,246, 0.8);
            transition: background 0s;
        }
`;

const ErrorMessage = styled.p`
    color: #FFF;
    padding: 3px 8px 5px;
    border-radius: 3px;
    background: red;
    position: absolute;
    top: -25px;
    font-size: 16px;
    font-weight: 700;
    left: 160px;
`;

const PASS_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const scheme = Yup.object().shape({
    name: Yup.string()
        .required("Please, enter name")
        .trim()
        .uppercase(),
    surname: Yup.string()
        .required("Please, enter surname")
        .trim()
        .uppercase(),
    email: Yup.string()
        .required("Please, enter email")
        .trim()
        .uppercase()
        .email(),
    password: Yup.string()
        .required("Please, enter password")
        .trim()
        .uppercase()
        .matches(PASS_REGEX,
        "Password must be minimum eight characters, at least one letter and one number"),
})

export const ReactHookFormSignUp = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(scheme) });
    
    const submitForm = ({ name, surname, email, password }) => {
        alert(`
            Entered data:
            Name - ${name}
            Surname - ${surname}
            Email - ${email}
            Password - ${password}
        `)
        reset({
            name: "",
            surname: "",
            email: "",
            password: "",
        });
    }
    
    return (
        <Container>
            <Form
            type="submit"
            onSubmit={handleSubmit(submitForm)}
            >
                <span style={{ color: "#FFF"}}>form hook submit</span>
                <FormTitle>Sign up form</FormTitle>

                <InputWrapper>
                    <Label htmlFor="name-input">Name</Label>
                    <Input
                    {...register("name")}
                    name="name"
                    id="name-input"
                    type="text"
                    placeholder="John"
                    />
                    {errors.name && <ErrorMessage>Error: {errors.name?.message}</ErrorMessage>}
                </InputWrapper>
                
                <InputWrapper>
                    <Label htmlFor="surname-input">Surname</Label>
                    <Input
                    {...register("surname")}
                    name="surname"
                    id="surname-input"
                    type="text"
                    placeholder="Snow"
                    />
                    {errors.surname && <ErrorMessage>Error: {errors.surname?.message}</ErrorMessage>}
                </InputWrapper>

                <InputWrapper>
                    <Label htmlFor="email-input">Email</Label>
                    <Input
                    {...register("email")}
                    name="email"
                    id="email-input"
                    type="text"
                    placeholder="john_snow@gmail.com"
                    />
                    {errors.email && <ErrorMessage>Error: {errors.email?.message}</ErrorMessage>}
                </InputWrapper>
                
                <InputWrapper>
                    <Label htmlFor="password-input">Password</Label>
                    <Input
                    {...register("password")}
                    name="password"
                    id="password-input"
                    type="text"
                    placeholder="123456abcd"
                    />
                    {errors.password && <ErrorMessage>Error: {errors.password?.message}</ErrorMessage>}
                </InputWrapper>

                <Button
                    type="submit"
                >Submit</Button>
            </Form>
        </Container>
    )
}