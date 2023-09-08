import React, { useState } from "react";
import styled from 'styled-components';
import {ReactComponent as EyeOpenIcon} from '../../img/eye-open.svg';
import {ReactComponent as EyeHideIcon} from '../../img/eye-hide.svg';
import {ReactComponent as CheckIcon} from '../../img/circle-check.svg';

export default function SignInput(){
    
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const checkEmail = (e) => {
        var emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailRegExp.test(e.target.value)) setIsEmail(true); else setIsEmail(false);
        if (!e.target.value) setIsEmpty(true); else setIsEmpty(false);
    }

    return (
        <LoginWrapper>

            <EmailBox>
                <Label>E-mail</Label>
                <InputText 
                    type='email'
                    id='email' 
                    label='E-mail' 
                    placeholder='E-mail'
                    onChange={checkEmail}
                />
                <CheckToggle isEmail={isEmail}><CheckIcon/></CheckToggle>
                <EmailValidText isEmail={isEmail} isEmpty={isEmpty}>Invalid e-mail address.</EmailValidText>
                
            </EmailBox>
            
            <PasswordBox>
                <Label>Password </Label>
                <InputText 
                    type={isRevealPwd ? 'text' : 'password'} 
                    value={pwd} 
                    onChange={(e) => setPwd(e.currentTarget.value)} 
                    id='password' 
                    label='Password' 
                    placeholder='Password'/>    
                <EyeToggle
                    isRevealPwd = {isRevealPwd}
                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                >{isRevealPwd ? <EyeOpenIcon/> : <EyeHideIcon/>}
                </EyeToggle>
            </PasswordBox> 

        </LoginWrapper>
        

    );
}

const LoginWrapper = styled.div`
    margin: 0 30% 40px 25%;
    padding: 20px;
`
const Label = styled.div`
    margin: 5px;
    font-size: 0.8em;
    color: var(--grey);
`
const InputText = styled.input`
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 5px 15px;
    border: solid 1px var(--shadow);
    border-radius: 5px;
    background: var(--white-second);
    opacity: 0.8;
    box-sizing: border-box
    font-weight: var(--bold-900);

    &:focus{
        border: solid 1px var(--grey);
        opacity: 1;
    }
`
const EmailBox = styled.div`
    position: relative;
`
const EmailValidText = styled.div`
    font-size: 0.7em;
    color: var(--red);
    margin-left: 5px;
    visibility:  ${(props)=>(props.isEmail || props.isEmpty) ? 'hidden' : 'visible'};
`
const CheckToggle = styled.div`
    margin: 5px;
    position: absolute;
    top: 38px;
    left: 100%;
    font-size: 0.8em;
    width: 18px;
    color: var(--grey);
    path{
        fill: ${(props)=>(props.isEmail) ? "var(--green-mint)" : "var(--grey-lighter)"};
    }
`
const PasswordBox = styled.div`
    position: relative;
    margin-top: 20px;
`
const EyeToggle = styled.div`
    cursor: pointer;
    margin: 5px;
    position: absolute;
    top: 38px;
    left: calc(100% - 5px);
    font-size: 0.8em;
    width: ${(props)=>(props.isRevealPwd) ? "23px" : "25px"};
    color: var(--grey);
    path{
        fill: ${(props)=>(props.isRevealPwd) ? "var(--green-mint)" : "var(--grey-lighter)"};
    }
`