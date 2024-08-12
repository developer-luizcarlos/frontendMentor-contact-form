"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Karla } from "next/font/google";
import InputWrapper from "@/components/inputWrapper/inputWrapper";
import RadioWrapper from "@/components/radioWrapper/radioWrapper";

export default function Home() {
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
          />
          <InputWrapper
            labelString="Last Name"
            inputName="lastname"
            inputType="text"
            errorMessage="This field is required"
            errorState={false}
          />
        </div>
        <div className="form_email_wrapper">
          <InputWrapper
            labelString="Email Address"
            inputName="email"
            inputType="email"
            errorMessage="Please enter a valid email address"
            errorState={false}
          />
        </div>
        <RadioWrapper
          showError={false} />
        <div className="form_textarea_wrapper">
          <label className="form_textarea_wrapper_label" htmlFor="form_message_user">message</label>
          <textarea id="form_message_user" className="form_text_wrapper_textarea_normal"></textarea>
          <small className="form_textarea_small">This field is required</small>
        </div>
        <div className="form_box_content">
          <div className="form_box_body">
            <input type="checkbox" id="form_consent_checkbox" />
            <label className="form_consent_label" htmlFor="form_consent_checkbox">I consent to being contacted by the team</label>
          </div>
        </div>
        <button className="form_btn_submit">Submit</button>
      </form>
    </main>
  );
}
