import Login from "/src/pages/Login.jsx";
import ProtectedRoute from "/src/components/ProtectedRoute.jsx"
import { Link, Route, Router, Routes } from 'react-router'
import Dashboard from "/src/pages/Dashboard.jsx";
import Register from "/src/pages/Register.jsx";

function App() {

  return (
      <Routes>
        <Route path={"/"}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/register"} element={<Register/>}></Route>
            <Route path={"/recipes"}
                element={<ProtectedRoute>
                    <Dashboard/>
                </ProtectedRoute>}>
            </Route>
            {/*<Route path={"/users"}*/}
            {/*    element={<ProtectedRoute>*/}
            {/*        <Recipes/>*/}
            {/*    </ProtectedRoute>}>*/}
            {/*</Route>*/}
      </Routes>
  )
}

export default App
