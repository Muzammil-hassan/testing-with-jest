import { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [{ email, password }, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
    setError('');
  };

  const isValid = (email) => email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) !== null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      if (isValid(email)) {
        onSubmit(email, password);
      } else {
        setError('Please enter a valid email address');
      }
    } else {
      setError('Please fill in both fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" value={email} placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        type="password"
        value={password}
        placeholder="Password"
        onChange={handleChange}
      />
      {error && <span>{error}</span>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
