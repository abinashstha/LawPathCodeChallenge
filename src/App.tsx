import React, { useState, ChangeEvent } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { initialFormValue } from './constants';

function App() {
    const [formValue, setFormValue] = useState(initialFormValue);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <div className="container">
            <form className="form">
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
            </form>
        </div>
    );
}

export default App;
