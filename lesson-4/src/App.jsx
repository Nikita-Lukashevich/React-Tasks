import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "./components/Input/Input";
import { BtnPost } from "./components/BtnPost/BtnPost";
import Table from "./components/Table/Table";
import OnLoadingUserData from "./components/Loading/Loading";
import "./App.css";

function App() {
  const [inputName, setInputName] = useState("");
  const [inputNik, setInputNik] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAdress, setInputAdress] = useState("");
  const [flag, setFlag] = useState(false);
  const [buttonText, setButtonText] = useState({
    btnsortName: "A-z",
    btnnumber: "\u2191",
    btnsortAdress: "A-z",
  });
  const DataLoading = OnLoadingUserData(Table);
  const [appState, setAppState] = useState({
    loading: false,
    persons: [],
  });

  const addPost = () => {
    setAppState((prevState) => ({
      ...prevState,
      persons: [
        {
          id: prevState.persons.length + 1,
          name: inputName,
          username: inputNik,
          email: inputEmail,
          address: {
            city: inputAdress,
          },
        },
        ...prevState.persons,
      ],
    }));
    setInputName("");
    setInputNik("");
    setInputEmail("");
    setInputAdress("");
  };
  

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState({
        loading: false,
        persons: allPersons,
      });
    });
  }, [setAppState]);

  const sort = () => {
    const sortArray = appState.persons.concat();
    let sortName;
    if (flag) {
      sortName = sortArray.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
      });
      setButtonText({
        btnsortName: "A-z",
        btnnumber: "\u2191",
        btnsortAdress: "A-z",
      });
    } else {
      sortName = sortArray.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
      });
      setButtonText({
        btnsortName: "Z-a",
        btnnumber: "\u2191",
        btnsortAdress: "A-z",
      });
    }
    setAppState({ persons: sortName });
    setFlag(!flag);
  };

  const sortNumber = () => {
    const sortArray = appState.persons.concat();
    let sortId;
    if (flag) {
      sortId = sortArray.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
      });
      setButtonText({
        btnsortName: "A-z",
        btnnumber: "\u2193",
        btnsortAdress: "A-z",
      });
    } else {
      sortId = sortArray.sort(function (a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
      });
      setButtonText({
        btnsortName: "A-z",
        btnnumber: "\u2191",
        btnsortAdress: "A-z",
      });
    }
    setAppState({ persons: sortId });
    setFlag(!flag);
  };

  const sortAddress = () => {
    const sortArray = appState.persons.concat();
    let sortName;
    if (flag) {
      sortName = sortArray.sort(function (a, b) {
        if (a.address.city.toLowerCase() > b.address.city.toLowerCase()) {
          return 1;
        }
        if (a.address.city.toLowerCase() < b.address.city.toLowerCase()) {
          return -1;
        }
      });
      setButtonText({
        btnsortName: "A-z",
        btnnumber: "\u2191",
        btnsortAdress: "A-z",
      });
    } else {
      sortName = sortArray.sort(function (a, b) {
        if (a.address.city.toLowerCase() < b.address.city.toLowerCase()) {
          return 1;
        }
        if (a.address.city.toLowerCase() > b.address.city.toLowerCase()) {
          return -1;
        }
      });
      setButtonText({
        btnsortName: "A-z",
        btnnumber: "\u2191",
        btnsortAdress: "Z-a",
      });
    }
    setAppState({ persons: sortName });
    setFlag(!flag);
  };

  return (
    <>
      <div className="post">
        <div className="addPost">
          <div className="inputpost">
            <Input
              value={inputName}
              onChange={(event) => setInputName(event.target.value)}
              placeholder="Name"
            />
            <Input
              value={inputNik}
              onChange={(event) => setInputNik(event.target.value)}
              placeholder="Nik"
            />
            <Input
              value={inputEmail}
              onChange={(event) => setInputEmail(event.target.value)}
              placeholder="Email"
            />
            <Input
              value={inputAdress}
              onChange={(event) => setInputAdress(event.target.value)}
              placeholder="Adress"
            />
          </div>
          <BtnPost onClick={addPost} />
        </div>
        <div className="app">
          <DataLoading
            isLoading={appState.loading}
            persons={appState.persons}
            sortName={sort}
            sortNumber={sortNumber}
            sortAddress={sortAddress}
            btnvalue={buttonText}
          />
        </div>
      </div>
    </>
  );
}

export default App;
