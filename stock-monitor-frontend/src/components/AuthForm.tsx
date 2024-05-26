import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

type AuthFormProps = {
  isLogin: boolean;
  onSubmit: (email: string, password: string, username?: string) => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isLogin) {
      onSubmit(email, password);
    } else {
      onSubmit(email, password, username);
    }
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
        )}
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </form>
    </Container>
  );
};

export default AuthForm;
