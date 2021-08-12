import "../App.css"

const Results = ({ results }) => {
    const { cityName, country, temperature, conditionText, icon } = results

    return (
        <>
            {cityName &&
                <div className="result-city">{results.cityName}</div> 
            }
            {country && 
                <div className="results-country">{results.country}</div> 
            }
            {temperature && 
                <div className="results-temp">{results.temperature} <span>℃</span></div> 
            }
            {conditionText && 
                <div className="results-condition">
                    <img src={icon} alt="icon" />
                    <span>{conditionText}</span>
                </div> 
            }
        </>
    )
}

export default Results
