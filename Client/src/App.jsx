import Header from "./components/Todo/Header";
import { ListTodo } from "./components/Todo/ListTodo";
import { Button } from "@/components/ui/button";

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="mt-4 text-4xl font-semibold text-center">Todos</h1>
      <div className="mt-4 flex justify-center items-center mb-5 w-full">
        <Header />
      </div>

      <hr />
      <h1 className="mt-4 text-4xl font-semibold text-center">Todo List</h1>
      <div className="mt-4 lg:p-12">
        <ListTodo />
      </div>
    </div>
  );
};

export default App;
