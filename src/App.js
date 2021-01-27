import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import CreateTask from "./components/createTask";
function App() {
  return (
    <Router>
      <main className="container">
        <Switch>
          <Route path="/create-task" exact>
            <CreateTask />
          </Route>

          <Route
            path="/list-tasks"
            exact
            render={() => {
              return <h1 className="App">List All tasks</h1>;
            }}
          ></Route>

          <Route
            path="/bulk-delete"
            exact
            render={() => {
              return <h1 className="App">Bulk delete</h1>;
            }}
          ></Route>

          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/list-tasks" exact />;
            }}
          ></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
