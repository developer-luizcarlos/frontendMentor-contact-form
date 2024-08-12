import { ChangeEventHandler, MouseEventHandler } from 'react';
import Styles from './inputWrapper.module.css';

interface Properties {
    labelString: string;
    inputName: string;
    inputType: string;
    errorOpacity?: boolean;
    errorMessage: string;
    errorState: boolean;
    changeFunction?:  ChangeEventHandler<HTMLInputElement>;
}

export default function inputWrapper(props: Properties) {
    return (
        <div className={Styles.input_wrapper}>
            <label htmlFor={props.inputName}>{props.labelString}</label>
            <input className={props.errorState ? Styles.normal_state : Styles.error_state} type={props.inputType} id={props.inputName} onChange={props.changeFunction}/>
            <small style={{ opacity: props.errorOpacity ? 0 : 1 }}>{props.errorMessage}</small>
        </div>
    )
};