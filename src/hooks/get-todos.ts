import { useQuery } from '@tanstack/react-query';
import { apiTodo } from '@/lib/apiTodo';

const loadTodos = () => {
  return apiTodo.get('/todos');
};

export const TodoGet = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => loadTodos(),
    queryKey: ['todos'],
  });
  return { data, isLoading };
};
