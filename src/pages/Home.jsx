import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the Todo App</h1>
      <p className="text-lg">Manage your tasks efficiently and effectively.</p>
      <Button onClick={() => navigate("/todos")}>Go to Todo List</Button>
    </div>
  );
};

export default Home;