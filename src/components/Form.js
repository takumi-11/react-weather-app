function Form({ city, setCity, getWeather }) {
    return (
        <form onSubmit={getWeather}>
            <input 
                type="text" 
                name="city" 
                placeholder="都市名" 
                value={city}
                onChange={e => setCity(e.target.value)} 
            />
            <button 
                type="submit"
            >Get Weather</button>
        </form>
    )
}

export default Form
