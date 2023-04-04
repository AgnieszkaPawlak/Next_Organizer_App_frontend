import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Seo } from '@/components/seo';
// import { TodoGet } from '@/hooks/get-todos';
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
  // const todos = TodoGet();
  // console.log(todos);

  return (
    <>
      <Seo title="Todo" />
      <Navbar />
      <div>
        To do
        {/* //TODO */}
        {/* {
    todos.map(el => <div key={el.id}>{el.id}</div>)} */}
      </div>
    </>
  );
};

export default Todo;
export const getServerSideProps = withPageAuthRequired();
