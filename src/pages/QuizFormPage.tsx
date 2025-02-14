import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '@services/api';
import { useAuth } from '@context/AuthContext';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { Card, CardHeader, CardContent, CardTitle } from '@components/ui/card';
import Layout from '@components/Layout';

function QuizFormPage() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { quizId } = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  // Hard-coded teacher ID
  const teacherId = 1;

  // If we have quizId, fetch existing quiz
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
      return;
    }

    if (quizId) {
      fetchQuiz(Number(quizId));
    }
    // eslint-disable-next-line
  }, [quizId, isLoggedIn]);

  const fetchQuiz = async (id: number) => {
    try {
      const res = await api.get(`/quizzes/${id}`);
      setTitle(res.data.title);
      setDescription(res.data.description);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load quiz.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !description.trim()) {
      setError('Title and description are required.');
      return;
    }

    try {
      if (quizId) {
        // Update existing quiz
        await api.put(`/quizzes/${quizId}`, {
          title,
          description,
        });
      } else {
        // Create new quiz
        await api.post('/quizzes', {
          title,
          description,
          teacher_id: teacherId,
        });
      }
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save quiz.');
    }
  };

  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            {quizId ? 'Edit Quiz' : 'Create Quiz'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Title
              </label>
              <Input
                type="text"
                placeholder="Quiz Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Description
              </label>
              <Textarea
                placeholder="Quiz description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>
            <Button type="submit" variant="default" className="w-full">
              {quizId ? 'Update Quiz' : 'Create Quiz'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
    </Layout>
  );
}

export default QuizFormPage;
