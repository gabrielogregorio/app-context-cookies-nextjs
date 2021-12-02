import { useEffect, useState } from 'react';
import { postType } from '../types/posts';
import { loadingTypes } from '../types/loading';
import Api from '../services/api';

export default function usePosts() {
  const [posts, setPosts] = useState<postType[]>([]);
  const [loading, setLoading] = useState<loadingTypes>('wait');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    Api.get('/posts')
      .then((res) => {
        setPosts(res.data);
        setLoading('finish');
      })
      .catch((error) => {
        setError(error.message);
        setLoading('finish');
      });
  }, []);

  return { posts, loading, error };
}
