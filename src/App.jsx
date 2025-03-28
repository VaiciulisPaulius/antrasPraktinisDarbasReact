import Login from "/src/pages/Login.jsx";
import ProtectedRoute from "/src/components/ProtectedRoute.jsx"
import { Link, Route, Router, Routes } from 'react-router'
import Dashboard from "/src/pages/Dashboard.jsx";
import Register from "/src/pages/Register.jsx";
import Header from "./components/Header.jsx";
import RecipeList from "./pages/RecipeList.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";

function App() {

    return (
        <>
            <Header></Header>
            <Routes>
            <Route path={"/"}></Route>
            <Route path={"/login"}
                   element={<ProtectedRoute allowAuthenticated={false}>
                       <Login/>
                   </ProtectedRoute>}>
            </Route>
            <Route path={"/register"}
                   element={<ProtectedRoute allowAuthenticated={false}>
                       <Register/>
                   </ProtectedRoute>}>
            </Route>
            <Route path={"/recipes/:page"}
                element={<ProtectedRoute allowAuthenticated={true}>
                    <RecipeList showOnlyFavourites={false}/>
                </ProtectedRoute>}>
            </Route>
            <Route path={"/favourites/:page"}
                   element={<ProtectedRoute allowAuthenticated={true}>
                       <RecipeList showOnlyFavourites={true}/>
                   </ProtectedRoute>}>
            </Route>
            <Route path={"/recipe/:id"}
                   element={<ProtectedRoute allowAuthenticated={true}>
                       <RecipeDetail/>
                   </ProtectedRoute>}>
            </Route>
            {/*<Route path={"/profile"}*/}
            {/*    element={<ProtectedRoute>*/}
            {/*         <Profile/>*/}
            {/*         </ProtectedRoute>}>*/}
            {/*</Route>*/}
            {/*<Route path={"/users"}*/}
            {/*    element={<ProtectedRoute>*/}
            {/*        <Recipes/>*/}
            {/*    </ProtectedRoute>}>*/}
            {/*</Route>*/}
            </Routes>
      </>
  )
}

export default App
