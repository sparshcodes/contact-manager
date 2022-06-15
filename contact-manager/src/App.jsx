import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Home from "./Components/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddForm from "./Components/AddForm/AddForm";
import Header from "./Components/Header/Header";
import db from "./firebase/firebaseConfig";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { ContactContext } from "./Contexts/contactContext";
import EditForm from "./Components/EditForm/EditForm";
import Footer from "./Components/Footer/Footer";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import { userAuth, AuthContextProvider } from "./Contexts/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

// create a deleteAll Button

function App() {
  const [contacts, setContacts] = useState([]);
  const user = userAuth();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // const colRef = collection(db, `users/${userData.uid}/contact`);
    // onSnapshot(colRef, (snapshot) => {
    //   setContacts(
    //     snapshot.docs.map((doc) => {
    //       return { ...doc.data(), id: doc.id };
    //     })
    //   );
    // });
  };

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      <div className="App">
        <div className="container">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<LoginForm />}></Route>
              <Route path="/register" element={<RegisterForm />}></Route>
              <Route
                path="/home"
                element={
                  <ProtectedRoute user={user}>
                    <Home />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/addForm"
                element={
                  <ProtectedRoute>
                    <AddForm />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/editContact/:id"
                element={
                  <ProtectedRoute>
                    <EditForm />
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </ContactContext.Provider>
  );
}

export default App;
