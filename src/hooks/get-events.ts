import { useQuery } from '@tanstack/react-query';
import { apiData } from '@/lib/apiData';

const loadEvents = () => {
  return apiData.get('/events');
};

export const EventsGet = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => loadEvents(),
    queryKey: ['events'],
  });
  console.log(data);
  return { data, isLoading };
};
EventsGet();
