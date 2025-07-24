import { useState } from 'react'
import { euler1 } from './solutions/euler1.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showing, setShowing] = useState(0);
  let mySolutions = [{"id": "1"}, {"id": "2"}];
  const components = {
    euler1
  };

  const DynamicComponent = ({ componentName }) => {
    const Component = components[componentName];
    return Component ? <Component /> : <div>No solution yet</div>;
  };

  const buttonsTable = mySolutions.map(solution =>
    // <li key={"button"+mySolutions.indexOf(solution)}>
      <button onClick={() => setShowing(solution.id)}>{solution.id}</button>
    // </li>
  );

  const solutionsTable = mySolutions.map(solution =>
    <li className={showing == solution.id ? "visible" : "invisible"} key={"solution"+mySolutions.indexOf(solution)}>
      <DynamicComponent componentName={"euler" + solution.id} />
    </li>
  );

  return (
    <>
      <div>{buttonsTable}</div>
      <ul>{solutionsTable}</ul>
    </>
  )
}

export default App
