import { Suspense, lazy } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const PokemonDetail = lazy(() => import("./pages/PokemonDetail/index"));

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Outlet />
            </div>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<> Loading...</>}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="pokemon/:name"
            element={
              <Suspense fallback={<> Loading...</>}>
                <PokemonDetail />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <div>
                <h2>Nothing to see here!</h2>
                <p>
                  <Link to="/">Go to the home page</Link>
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
