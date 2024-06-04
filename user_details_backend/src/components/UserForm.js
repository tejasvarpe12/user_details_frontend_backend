import React, { useState } from 'react';
import axios from 'axios';
import '../components/UserForm.css'

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users', { name, email, age });
            console.log('User saved:', response.data);
            setName('');
            setEmail('');
            setAge('');
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Age   </label>
                <input className='age' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;
