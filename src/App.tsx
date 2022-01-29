import React, {useState, ChangeEvent, useCallback, useEffect} from 'react';
import { debounce } from 'lodash'

const APIs = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=`

function App() {

    const [ search, setSearch] = useState<string>('')
    const [temperature, setTemperature] = useState<number>()

    const handleChangeSearch = useCallback(debounce((text: string):void => {
        setSearch(text)
    },2000), [])

    useEffect(() => {
        if(search === null || search === undefined) return;
        fetch(APIs + `${search}`)
            .then(results => results.json())
            .then(r => setTemperature(r.current?.temperature))
    }, [search]);

    return (
        <div>
            <input type={'text'} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeSearch(e.target.value)} />
            {temperature && <p><b>Temperature:</b> {temperature}</p>}
        </div>
      );
}

export default App;
