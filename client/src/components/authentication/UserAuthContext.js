import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState(getLocalStorage());

    function signup(email, password, fullname, creditcardnumber, cvc, expirydate){
      const user_details = {
        email: email,
        password: password,
        fullname: fullname,
        creditcardnumber: creditcardnumber,
        cvc: cvc,
        expirydate: expirydate,
        id: 0
      };

      axios.post("http://35.183.16.214/server/endpoints/post/register.php", {
          email: email,
          password: password,
          fullname: fullname,
          creditcardnumber: creditcardnumber,
          cvc: cvc,
          expirydate: expirydate
      }).then((response) => {
        setUser(user_details);
        setUser(prev => ({...prev, id: response.data.body.lastinsertId}));
        setLocalStorage(response.data.body);
      });
    };

    function login(email, password){
      axios.post("http://35.183.16.214/server/endpoints/post/login.php", {
        email: email,
        password: password
      }).then((response) => {
        console.log(response);
        setUser(response.data.body);
        setLocalStorage(response.data.body);
      });
    }

    function getLocalStorage(){
      const localstorage = localStorage.getItem("session");
      return localstorage ? JSON.parse(localstorage) : null;
    }

    function setLocalStorage(user) {
      localStorage.setItem("session", JSON.stringify(user));
    }

    function logout(){
      setUser({});
    }

    useEffect(() => {
      console.log("user set:", user);
    }, [user]);

    return (
        <userAuthContext.Provider value={{ user, signup, login, logout }}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}