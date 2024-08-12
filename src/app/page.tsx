"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Karla } from "next/font/google";
import InputWrapper from "@/components/inputWrapper/inputWrapper";
import RadioWrapper from "@/components/radioWrapper/radioWrapper";

export default function Home() {
  const [nameInputValid, setNameInputValid] = useState<boolean>(false);
  const [lastNameInputValid, setLastNameInputValid] = useState<boolean>(false);
  const [emailInputValid, setEmailInputValid] = useState<boolean>(false);
  const [typeRequisitionInputValid, setTypeRequisitionInputValid] = useState<boolean>(false);
  const [messageTextAreaInputValid, setMessageTextAreaInputValid] = useState<boolean>(false);
  const [concernInputValid, setConcernInputValid] = useState<boolean>(false);

  let formName: string = "";
  let formLastName: string = "";
  let formEmail: string = "";
  let formTypeRequisition: string = "";
  let formMessage: string = "";
  let formConcern: string = "";

  return (
    <main>
      <form className="form" onSubmit={(event) => {
        event.preventDefault();
      }}>
        <h2>Contact Us</h2>
        <div className="form_name_wrapper">
          <InputWrapper
            labelString="First Name"
            inputName="firstName"
            inputType="text"
            errorMessage="This field is required"
            errorState={false}
            changeFunction={(event) => {
              const value: string = event.target.value;
              formName = value;
              setNameInputValid(true);
            }}
          />
          <InputWrapper
            labelString="Last Name"
            inputName="lastname"
            inputType="text"
            errorMessage="This field is required"
            errorState={false}
            changeFunction={(event) => {
              const value: string = event.target.value;
              formLastName = value;
              setLastNameInputValid(true);
            }}
          />
        </div>
        <div className="form_email_wrapper">
          <InputWrapper
            labelString="Email Address"
            inputName="email"
            inputType="email"
            errorMessage="Please enter a valid email address"
            errorState={false}
            changeFunction={(event) => {
              const value: string = event.target.value;
              formEmail = value;
              setEmailInputValid(true);
            }}
          />
        </div>
        <RadioWrapper
          showError={false} />
        <div className="form_textarea_wrapper">
          <label className="form_textarea_wrapper_label" htmlFor="form_message_user">message</label>
          <textarea id="form_message_user" className="form_text_wrapper_textarea_normal " onChange={(event) => {
            const value: string = event.target.value;
            formMessage = value;
            setMessageTextAreaInputValid(true);
          }}></textarea>
          <small className="form_textarea_small" style={{ display: messageTextAreaInputValid ? "block" : "none" }}>This field is required</small>
        </div>
        <div className="form_box_content">
          <div className="form_box_body">
            <input type="checkbox" id="form_consent_checkbox" onChange={(event) => {
              const value = event.target.value;
              formMessage = value;
              setConcernInputValid(true);
            }} />
            <label className="form_consent_label" htmlFor="form_consent_checkbox">I consent to being contacted by the team</label>
          </div>
        </div>
        <button className="form_btn_submit">Submit</button>
      </form>
    </main>
  );
}
