import React, { useState } from 'react';

function RegistrationForm() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const {name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};
        // Add logic too check if username is taken.
        
        // RegEx for E-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email';
        }

        // RegEx for Password (min 8, 1 Uppercase letter, 1lowercase letter and 1 special symbol)
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Password must be least 8 characters long with at least one uppercase letter, one lowercase letter, and one special symbol,';
        }

        if (formData.repassword !== formData.password) {
            newErrors.repassword = 'Password must match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const valid = validate();
        if (valid) {
            alert('Registration Success!')
            // Send data to API or other logic.
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={FormData.username}
                    onChange={handleChange}/>
            </div>
            <div>
                <label>E-mail</label>
                <input
                    type="email"
                    name="email"
                    value={FormData.email}
                    onChange={handleChange}/>
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Passord</label>
                <input
                    type="password"
                    name="password"
                    value={FormData.password}
                    onChange={handleChange} />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <div>
                <label htmlFor="">Re-Passord</label>
                <input
                    type="password"
                    name="repassword"
                    value={FormData.repassword}
                    onChange={handleChange} />
                {errors.repassword && <span>{errors.repassword}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default RegistrationForm;