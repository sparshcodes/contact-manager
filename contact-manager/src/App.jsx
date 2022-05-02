import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const colRef = collection(db, "contacts");
    onSnapshot(colRef, (snapshot) => {
      setContacts(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="container">
        <ContactContext.Provider value={{ contacts, setContacts }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/addForm" element={<AddForm />}></Route>
            <Route path="/editContact/:id" element={<EditForm />}></Route>
          </Routes>
        </ContactContext.Provider>
      </div>
    </div>
  );
}

export default App;
