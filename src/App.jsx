import { lazy, useState } from 'react'
import './App.css'
const euler1 = lazy(() => import('./solutions/euler1.jsx'));
const euler2 = lazy (() => import('./solutions/euler2.jsx'));
const euler3 = lazy (() => import('./solutions/euler3.jsx'));
const euler4 = lazy (() => import('./solutions/euler4.jsx'));
const euler5 = lazy (() => import('./solutions/euler5.jsx'));
const euler6 = lazy (() => import('./solutions/euler6.jsx'));

function App() {
  const [count, setCount] = useState(0)
  const [showing, setShowing] = useState(0);
  let mySolutions = [{"id": "1"}, {"id": "2"}, {"id": "3"}, {"id": "4"}, {"id": "5"}, {"id": "6"}];
  
  const components = {
    euler1, euler2, euler3, euler4, euler5, euler6
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
