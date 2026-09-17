import { useState } from "react";

import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Input from "./components/ui/Input";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>My React App</h1>

      <Input placeholder="Enter your name" />

      <Button>Submit</Button>

      <Card title="Welcome">
        <p>This is my first React Card.</p>
      </Card>

      <p>Count: {count}</p>

      <Button onClick={() => setCount(count + 1)}>
        Increase
      </Button>
    </div>
  );
}

export default App;