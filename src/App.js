import './App.css';
import {CharacterList} from "./components/CharacterList";
import {endpoint} from "./components/endpoint";
import useFetch from "./components/hooks/useFetch";

const formatData = (response) => response?.characters || []

function App() {
    const [characters, loading, error] = useFetch(endpoint + '/characters', formatData())


    return (
        <div className="App">
            <header>
                <h1>Star Wars Characters</h1>
            </header>
            <main>
                <section>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <CharacterList characters={characters}/>
                    )}
                </section>
                {error && <p>{error.message}</p>}
            </main>
        </div>
    );
}

export default App;
