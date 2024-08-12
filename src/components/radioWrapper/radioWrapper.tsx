import Styles from './radioWrapper.module.css';

interface Properties {
    showError: boolean;
}

export default function RadioWrapper(props: Properties) {
    return (
        <div className={Styles.radio_wrapper}>
            <label htmlFor="">Query Type</label>
            <div className={Styles.radio_body}>
                <div className={Styles.radio_input_wrapper}>
                    <input type="radio" name="radio_input" id="general" />
                    <label className={Styles.radio_wrapper_label} htmlFor="general">General Enquiry</label>
                </div>
                <div className={Styles.radio_input_wrapper}>
                    <input type="radio" name="radio_input" id="support" />
                    <label className={Styles.radio_wrapper_label} htmlFor="support">Support Request</label>
                </div>
            </div>
            <small style={{ display: props.showError ? "block" : "none" }}>Please select a query type</small>
        </div>
    )
};