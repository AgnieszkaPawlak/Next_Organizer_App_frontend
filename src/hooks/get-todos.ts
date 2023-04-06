import { useQuery } from '@tanstack/react-query';
import { apiData } from '@/lib/apiData';

const loadTodos = () => {
  return apiData.get('/todos');
};

export const TodosGet = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => loadTodos(),
    queryKey: ['todos'],
  });
  return { data, isLoading };
};
