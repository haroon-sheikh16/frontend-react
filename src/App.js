import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import CreateTask from "./components/createTask";
import Task from "./components/task";

let taskdata = localStorage.getItem("task");
let taskdata2 = [];
if (taskdata) {
  taskdata2 = JSON.parse(taskdata);
}

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
              return (
                <div>
                  <h3 className="text-center my-5 ">Tasks List</h3>;
                  {taskdata2.length > 0 ? (
                    taskdata2.forEach((item) => {
                      <Task name={item.name} id={item.id} />;
                    })
                  ) : (
                    <h4 className="text-center my-5 ">no task </h4>
                  )}
                </div>
              );
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
