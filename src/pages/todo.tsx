import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Seo } from '@/components/seo';
import { TodosGet } from '@/hooks/get-todos';
import { Navbar } from '@/components/navbar';

interface Todos {
  deadline: string;
  description: string;
  id: string;
  title: string;
}

interface DataProps {
  isLoading: boolean;
  data?: Todos[];
}

const Todo = () => {
  const todos = TodosGet();
  console.log(todos.data);
  return (
    <>
      <Seo title="Todo" />
      <Navbar />
      <div className="flex h-[calc(100%-4rem)] items-center  justify-center">
        <div>Work under construction.</div>
      </div>
    </>
  );
};

export default Todo;
export const getServerSideProps = withPageAuthRequired();
