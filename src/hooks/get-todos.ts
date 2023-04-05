import { useQuery } from '@tanstack/react-query';
import { apiData } from '@/lib/apiData';

const loadTodos = () => {
  return apiData.get('/todos');
};

export const TodoGet = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => loadTodos(),
    queryKey: ['todos'],
  });
  return { data, isLoading };
};
