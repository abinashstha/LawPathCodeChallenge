import React, { useState, ChangeEvent } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { initialFormValue } from './constants';
import { showError } from './components/Notification';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [formValue, setFormValue] = useState(initialFormValue);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        showError('Oh no no');
    };

    return (
        <div className="container">
            <form className="form" onSubmit={onSubmitHandler}>
                <Input
                    id="postcode"
                    label="Postcode"
                    type="number"
                    value={formValue.postcode}
                    onChange={onChangeHandler}
                />
                <Input
                    id="state"
                    label="State"
                    value={formValue.state}
                    onChange={onChangeHandler}
                />
                <Input
                    id="suburb"
                    label="Suburb"
                    value={formValue.suburb}
                    onChange={onChangeHandler}
                />
                <Button label="Submit" type="submit" className="mt-1" />
                <ToastContainer />
            </form>
        </div>
    );
}

export default App;
