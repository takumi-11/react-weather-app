import "../App.css"

const Results = ({ results }) => {
    return (
        <div>
            {results.cityName &&
                <div className="result-city">{results.cityName}</div> 
            }
            {results.country && 
                <div className="results-country">{results.country}</div> 
            }
            {results.temperature && 
                <div className="results-temp">{results.temperature} <span>℃</span></div> 
            }
            {results.conditionText && 
                <div className="results-condition">
                    <img src={results.icon} alt="icon" />
                    <span>{results.conditionText}</span>
                </div> 
            }
        </div>
    )
}

export default Results
