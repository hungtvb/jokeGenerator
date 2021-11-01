import { useEffect, useState } from 'react'

const useRandomJoke = (firstName, lastName) => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const fetchJoke = async () => (
          await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
          .then(res => res.json())
          .then(data => {
            setJoke(data.value.joke);
          })
          .catch (error => {
            setJoke("Something wrong!");
          })
        )
    
        fetchJoke();
      }, [firstName, lastName])

      return joke;
}

export default useRandomJoke
