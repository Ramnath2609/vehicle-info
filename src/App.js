import { useEffect, useState } from "react";
import { BarChart } from "./components/BarChart";
import { PieChart } from "./components/PIeChart";
import { createUser } from "./utils";
import './components/style.css';
import { UsersList } from "./components/UsersList";
import { CarsList } from "./components/CarsList";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    const items = []
    for(let i = 0; i < 1000; i++) {
      const user = createUser();
      items.push(user);
    }
    setData(items);
    setIsLoading(false);
  }, []);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Vehicle Info</h3>
        <BarChart data={data} />
        <div className="userList">
          <UsersList data={data} />
          <PieChart data={data} />
        </div>
        <CarsList data={data} />
      </header>
    </div>
  );
}

export default App;
