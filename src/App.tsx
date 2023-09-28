import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { initialFieldValue, initialFormValue } from './constants';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { validateAddress } from './services';
import { showError, showSuccess } from './components/Notification';

function App() {
    const [formValue, setFormValue] = useState<IFormValue>(initialFormValue);
    const [fieldValid, setFieldValid] =
        useState<IFieldValue>(initialFieldValue);
    const [formIsValid, setFormIsValid] = useState(false);

    const suburbRef = useRef<HTMLInputElement>();
    const stateRef = useRef<HTMLInputElement>();
    const postcodeRef = useRef<HTMLInputElement>();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'postcode') {
            setFieldValid((prev: any) => ({
                ...prev,
                postcode: !!e.target.value,
            }));
        } else {
            setFieldValid((prev) => ({
                ...prev,
                [e.target.id]: !!e.target.value.length,
            }));
        }
        setFormValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const onSubmitHandler = async (e: any) => {
        e.preventDefault();
        if (formIsValid) {
            const response = await validateAddress({
                state: formValue.state,
                suburb: formValue.suburb,
            });
            checkValidity(response);
        } else if (!fieldValid.postcode) {
            postcodeRef?.current?.focus();
        } else if (!fieldValid.state) stateRef?.current?.focus();
        else {
            suburbRef?.current?.focus();
        }
    };

    const checkValidity = (response: any) => {
        const locality = response.data.localities.locality;
        const { postcode, suburb, state } = formValue;
        if (locality) {
            const postcodeFound = locality.find(
                (l: ILocality) => l.postcode === +postcode
            );
            if (postcodeFound) {
                showSuccess(
                    `The postcode ${postcode} match the suburb ${suburb}`
                );
                showSuccess(`The postcode, suburb and state entered are valid`);
            } else
                showError(
                    `The postcode ${postcode} does not match the suburb ${suburb}`
                );
            showSuccess(`The suburb ${suburb} exist in the state ${state}`);
        } else
            showError(
                `The suburb ${suburb} does not exist in the state ${state}`
            );
    };

    const validateFieldHandler = (field: keyof IFormValue) => {
        setFieldValid((prev) => ({
            ...prev,
            [field]: !!formValue[field].length,
        }));
    };

    useEffect(() => {
        setFormIsValid(
            +formValue.postcode !== 0 &&
                !!formValue.state.length &&
                !!formValue.suburb.length
        );
    }, [formValue]);

    return (
        <div className="container">
            <form className="form" onSubmit={onSubmitHandler}>
                <Input
                    id="postcode"
                    label="Postcode"
                    type="number"
                    value={formValue.postcode}
                    ref={postcodeRef}
                    onChange={onChangeHandler}
                    isValid={fieldValid.postcode}
                    onBlur={() => validateFieldHandler('postcode')}
                />

                <Input
                    id="state"
                    label="State"
                    value={formValue.state}
                    onChange={onChangeHandler}
                    ref={stateRef}
                    isValid={fieldValid.state}
                    onBlur={() => validateFieldHandler('state')}
                />

                <Input
                    id="suburb"
                    label="Suburb"
                    value={formValue.suburb}
                    onChange={onChangeHandler}
                    isValid={fieldValid.suburb}
                    ref={suburbRef}
                    onBlur={() => validateFieldHandler('suburb')}
                />
                <Button label="Submit" type="submit" className="mt-1" />
                <ToastContainer />
            </form>
        </div>
    );
}

export default App;
