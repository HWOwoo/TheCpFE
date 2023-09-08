import { Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";

const SingForm = () => {
  const { handleSubmit, register, formState: { errors }, getValues } = useForm();

  const onSubmit = (data) => {
    console.log(data); // 폼 데이터를 처리하는 로직을 작성합니다.
    
  };

  return (
    <Fragment>
      <SignFormMother className="sign-form-home">
        <SignFormContents className="sign-form-contents">
          <h2>로고</h2>
          <form onSubmit={handleSubmit(onSubmit)}> {/* form 요소로 감싸고 onSubmit 이벤트를 handleSubmit으로 설정합니다. */}
            <CustomFormGroup>
            <Form.Control
                type="text"
                placeholder="이메일"
                name="email"
                {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i
                })}
            />
              {errors.email && errors.email.type === "required" && (
                <ErrorMessage>이메일은 필수 입력 항목입니다.</ErrorMessage>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <ErrorMessage>유효한 이메일 주소를 입력해주세요.</ErrorMessage>
              )}
            <Form.Control
              type="password"
              placeholder="비밀번호"
              name="password"
              {...register("password", {
                  required: true,
                  minLength: 6
              })}
            />
              {errors.password && errors.password.type === "required" && (
                <ErrorMessage>비밀번호는 필수 입력 항목입니다.</ErrorMessage>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <ErrorMessage>비밀번호는 최소 6자 이상이어야 합니다.</ErrorMessage>
              )}
            <Form.Control
              type="password"
              placeholder="비밀번호 확인"
              name="confirmPassword"
              {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                  value === getValues("password") || "비밀번호가 일치하지 않습니다."
              })}
            />
              {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                <ErrorMessage>비밀번호 확인은 필수 입력항목입니다.</ErrorMessage>
              )}
              {errors.confirmPassword && errors.confirmPassword.type === "validate" && (
                <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
              )}
            </CustomFormGroup>
            <div className="content-item-button">
              <LoginButton style={{ width: '350px' }} type="submit">회원가입</LoginButton> {/* 제출 버튼에 type="submit"을 추가하여 폼 제출을 처리합니다. */}
            </div>
          </form>
        </SignFormContents>
      </SignFormMother>
    </Fragment>
  );
}

const SignFormContents = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SignFormMother = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
`;

const CustomFormGroup = styled(Form.Group)`
    display: flex;
    height: 200px;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const LoginButton = styled(Button)`
    --bs-btn-color: #000;
    --bs-btn-bg: #ffffff;
    --bs-btn-border-color: #000000;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
`;

export default SingForm;