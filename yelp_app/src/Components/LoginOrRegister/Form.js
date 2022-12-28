import { Button } from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { loginPageConfig } from "../allConfigsConst";
import { registerPageConfig } from "../allConfigsConst";
import { useFormik } from "formik";
import { registerUser } from "../../redux/actions";
import { loginUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNav } from "../../hooks/useNav";
import { ModalMessages } from "./ModalMessages";

const linkStyle = {
  display: "block",
  width: "150px",
  margin: "0 auto",
  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "18px",
  color: "#000",
  textAlign: "center",
  paddingTop: "10px",
};

const FormWrapper = styled.div`
  padding: 77px 95px 55px;
  max-width: 388px;
  background-color: #fff;
  border-radius: 35px;
  margin: 17px auto 0;
  position: relative;
  z-index: 5;
`;

const FormForPage = styled.form``;

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const InputForPage = styled.input`
  padding: 15px 10px 15px 13px;
  width: 100%;
  background: #f3f3f3;
  border-radius: 15px;
  outline: none;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 11px;
  line-height: 18px;
  text-decoration-line: ${(props) =>
    props.type !== "password" ? "underline" : ""};
  color: #cc9696;
  box-sizing: border-box;

  &::placeholder {
    color: #cc9696;
  }
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 3px;
`;

const ErrorMessage = styled.p`
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  background: red;
  font-size: 16px;
  font-weight: 700;
`;

const PASS_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const NAME_YUP_SETTING = Yup.string()
  .required("Please, enter name")
  .trim()
  .email();

const LOGIN_YUP_SETTING = Yup.string()
  .required("Please, enter login")
  .trim()
  .email();

const PASS_YUP_SETTING = Yup.string()
  .required("Please, enter password")
  .trim()
  .matches(
    PASS_REGEX,
    "Password must be minimum eight characters, at least one letter and one number"
  );

const CONFIRM_PASS_YUP_SETTING = Yup.string()
  .required("Please, confirm password")
  .trim()
  .matches(
    PASS_REGEX,
    "Password must be minimum eight characters, at least one letter and one number"
  )
  .oneOf([Yup.ref("password")], "Your password do not match 'password' field");

const loginScheme = Yup.object({
  login: LOGIN_YUP_SETTING,
  password: PASS_YUP_SETTING,
});

const registerScheme = Yup.object().shape({
  name: NAME_YUP_SETTING,
  password: PASS_YUP_SETTING,
  confirmPassword: CONFIRM_PASS_YUP_SETTING,
});

// const scheme = Yup.object().shape(
//   {
//     name: Yup.string().when("name", {
//       is: (name) => !!name,
//       then: Yup.string().required("Please, enter name").trim().email(),
//       otherwise: Yup.string(),
//     }),
//     login: Yup.string().when("login", {
//       is: (login) => !!login,
//       then: Yup.string().required("Please, enter login").trim().email(),
//       otherwise: Yup.string(),
//     }),
//     password: Yup.string().when("password", {
//       is: (password) => !!password,
//       then: Yup.string()
//         .required("Please, enter password")
//         .trim()
//         .matches(
//           PASS_REGEX,
//           "Password must be minimum eight characters, at least one letter and one number"
//         ),
//       otherwise: Yup.string(),
//     }),
//     confirmPassword: Yup.string().when("confirmPassword", {
//       is: (confirmPassword) => !!confirmPassword,
//       then: Yup.string()
//         .required("Please, confirm password")
//         .trim()
//         .matches(
//           PASS_REGEX,
//           "Password must be minimum eight characters, at least one letter and one number"
//         ),
//       otherwise: Yup.string(),
//     }),
//   },
//   [
//     ["name", "name"],
//     ["login", "login"],
//     ["password", "password"],
//     ["confirmPassword", "confirmPassword"],
//   ]
// );

export const Form = ({ pageType }) => {
  let currentSchemeValid = pageType === "login" ? loginScheme : registerScheme;
  let currentInputConfig =
    pageType === "login" ? loginPageConfig : registerPageConfig;
  let currentInitialValues =
    pageType === "login"
      ? {
          login: "",
          password: "",
        }
      : {
          name: "",
          password: "",
          confirmPassword: "",
        };
  let getCurrentDispatch = () =>
    pageType === "login" ? loginUser(values) : registerUser(values);

  const dispatch = useDispatch();
  const { goTo } = useNav();
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: currentInitialValues,
      validationSchema: currentSchemeValid,
      onSubmit: (values, { resetForm }) => {
        dispatch(getCurrentDispatch());
        resetForm(values);
        goTo("/login");
      },
    });

  return (
    <FormWrapper>
      <FormForPage onSubmit={handleSubmit}>
        {currentInputConfig.map(({ id, label, placeholder, name, type }) => (
          <InputWrapper key={id}>
            <Label htmlFor={id}>
              {label}
              {touched[name] && errors[name] ? (
                <ErrorMessage>Error: {errors[name]}</ErrorMessage>
              ) : null}
            </Label>
            <InputForPage
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[name]}
              name={name}
              id={id}
              type={type}
              placeholder={placeholder}
              autoComplete="off"
            />
          </InputWrapper>
        ))}
        <Button config={pageType === "login" ? "Login" : "Register"} />
        {pageType === "login" ? (
          <Link style={linkStyle} to="/register">
            I don't have an account
          </Link>
        ) : (
          <Link style={linkStyle} to="/login">
            Back to login page
          </Link>
        )}
      </FormForPage>
      <ModalMessages />
    </FormWrapper>
  );
};
