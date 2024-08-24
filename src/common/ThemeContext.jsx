import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  /*Estoy creando un tema y lo estoy estableciendo en el  localStorage 
Si no tengo , por defecto es light 

*/

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  /*Cuando inpeccione el elemento en html , va a coincidir con la funcion setTheme*/
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  //Si saco el const rompo todo*/
  const toggleTheme = () => {
    console.log("Cambie el tema");
    /*cambio de tema claro a oscuro o visceversa*/
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    /*Encapsula toda la funcion*/
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
