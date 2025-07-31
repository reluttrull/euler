import { useState } from 'react'
import { euler1 } from './solutions/euler1.jsx';
import { euler2 } from './solutions/euler2.jsx';
import { euler3 } from './solutions/euler3.jsx';
import { euler4 } from './solutions/euler4.jsx';
import { euler5 } from './solutions/euler5.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showing, setShowing] = useState(0);
  let mySolutions = [{"id": "1"}, {"id": "2"}, {"id": "3"}, {"id": "4"}, {"id": "5"}];
  const components = {
    euler1, euler2, euler3, euler4, euler5
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
