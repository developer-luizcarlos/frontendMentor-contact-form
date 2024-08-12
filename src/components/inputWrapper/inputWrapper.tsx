import { ChangeEventHandler, MouseEventHandler } from 'react';
import Styles from './inputWrapper.module.css';

interface Properties {
    labelString: string;
    inputName: string;
    inputType: string
    errorMessage: string;
    errorState: boolean;
    changeFunction?:  ChangeEventHandler<HTMLInputElement>;
}

export default function inputWrapper(props: Properties) {
    return (
        <div className={Styles.input_wrapper}>
            <label htmlFor={props.inputName}>{props.labelString}</label>
            <input className={props.errorState ? Styles.error_state : Styles.normal_state} type={props.inputType} id={props.inputName} onChange={props.changeFunction}/>
            <small style={{ display: props.errorState ? "block" : "none" }}>{props.errorMessage}</small>
        </div>
    )
};