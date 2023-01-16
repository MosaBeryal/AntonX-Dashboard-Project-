import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./Components/LoginPage";
import { Provider } from "react-redux";
import store from "./store/store";
import Slides from "./pages/Slides";
import Following from "./pages/Following";
import Posts from "./pages/Posts";
import SideBar from "./Layouts/SideBar";
import AdminNavbar from "./Layouts/AdminNavbar";
import Users from "./pages/Users";
import LikedPosts from "./pages/LikedPosts";
import ErrorPage from "./pages/ErrorPage";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./Layouts/Footer";
import RegistrationForm from "./Components/RegistrationForm";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const App = () => {
  
  const client = new QueryClient();

  const [login, setLogin] = useState(false);
  
  useEffect(() => {
  }, [login]);

  return (
    <div >
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Router>
            <div className="flex w-[100%]">
              <div className="w-[20%]">
                {window.localStorage.getItem("login")? (
                  <>
                    <AdminNavbar login={login} />
                    <SideBar />
                    <Footer />
                  </>
                ) : (
                  <>
                    <AdminNavbar login={login}/>
                    <Footer />
                  </>
                )}
              </div>
              <div className="w-[80%]">
                <Routes>
                    <Route
                      path="/home"
                      element={<ProtectedRoutes component={Dashboard}/>}
                    ></Route>:
              
                    <Route
                      path="/"
                      element={<LoginPage setLogin={setLogin}  />}
                    ></Route>
                
                  <Route
                    path="/slides"
                    element={<ProtectedRoutes component={Slides} />}
                  ></Route>
                  <Route
                    path="/posts"
                    element={<ProtectedRoutes component={Posts}  />}
                  ></Route>
                  <Route
                    path="/following"
                    element={<ProtectedRoutes component={Following} />}
                  ></Route>
                  <Route
                    path="/users"
                    element={<ProtectedRoutes component={Users}  />}
                  ></Route>
                  <Route
                    path="/likedposts"
                    element={<ProtectedRoutes component={LikedPosts} />}
                  ></Route>
                  <Route path="*" element={<ErrorPage />}></Route>
                  <Route
                    path="/registration"
                    element={<RegistrationForm />}
                  ></Route>
                </Routes>
              </div>
            </div>
          </Router>
        </QueryClientProvider>
      </Provider>
    </div>
  );
};

export default App;
