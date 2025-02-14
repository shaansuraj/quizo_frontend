import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '@context/AuthContext';

// ShadCN UI example imports 
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@components/ui/card';
import Layout from '@components/Layout';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic client-side validation
    if (!username || !password) {
      setErrorMsg('Username and password are required.');
      return;
    }

    try {
      // Send login request
      const res = await api.post('/auth/login', { username, password });
      if (res.status === 200) {
        // Mark user as logged in in our context
        login();
        // Redirect to dashboard
        navigate('/dashboard');
      }
    } catch (error: any) {
      setErrorMsg(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          {errorMsg && (
            <div className="mb-2 text-red-500 text-sm">
              {errorMsg}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Username
              </label>
              <Input
                type="text"
                placeholder="teacher"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" variant="default" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
    </Layout>
  );
}

export default LoginPage;
