import { Fragment,useState,useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { styled } from "styled-components";

const SingForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    name: ''
  });
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이 부분에서 fetch를 사용하여 회원가입 API를 호출합니다.
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('회원가입에 실패했습니다.');
        }
      })
      .then((data) => {
        // 성공적으로 회원가입된 경우
        console.log('회원가입 성공:', data);
        setErrorMessage('회원가입이 성공적으로 완료되었습니다.');
      })
      .catch((error) => {
        // 회원가입 실패 또는 에러 발생 시
        console.error('회원가입 에러:', error);
        setErrorMessage('회원가입 중 오류가 발생했습니다.');
      });
  };
  return (
    <Fragment>
      <SignFormMother className="sign-form-home">
        <SignFormContents className="sign-form-contents">
          <h2>로고</h2>
          <form onSubmit={handleSubmit}> 
          {/* form 요소로 감싸고 onSubmit 이벤트를 handleSubmit으로 설정합니다. */}
            <CustomFormGroup>
            <Form.Control
                type="text"
                placeholder="이메일"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            <Form.Control
                type="text"
                placeholder="이름"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            <Form.Control
              type="password"
              placeholder="비밀번호"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Form.Control
              type="password"
              placeholder="비밀번호 확인"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
              <Form.Control
              type="text"
              placeholder="닉네임"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
            />
            </CustomFormGroup>
            <div className="content-item-button">
              <LoginButton style={{ width: '350px' }} type="submit">회원가입</LoginButton> {/* 제출 버튼에 type="submit"을 추가하여 폼 제출을 처리합니다. */}
            </div>
          </form>
          {errorMessage && <p>{errorMessage}</p>}
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