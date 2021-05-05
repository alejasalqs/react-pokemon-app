import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({});

  useEffect(() => {
    setState({});
    // aqui no se puede usar async/await
    fetch(url).then((resp) => {
      resp.json().then((data) => {
        setState(data);
      });
    });
  }, [url]); // Se ejecuta cuando el URL cambia

  return state;
};
