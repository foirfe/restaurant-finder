import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function PreferenceForm() {
    const [city, setCity] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {  
        if (localStorage.getItem("city") === null) {
        setCity("aarhus")
          } else {
            setCity(localStorage.getItem("city"))    
          }
    
  },[])

    const handleChange = (event) => {
      setCity(event.target.value)
    }

    function submitEvent(event){
event.preventDefault();
localStorage.setItem("city", city)
navigate("/resultater");
    }
    return (
      <form onSubmit={submitEvent} className="preferenceform">
        <div className="radio-btn">
          <label>
          <input
            type="radio"
            value="aalborg"
            checked={city === 'aalborg'}
            onChange={handleChange}
          /> Aalborg
          </label>
        </div>
        <div className="radio-btn">
          <label>
          <input
            type="radio"
            value="aarhus"
            checked={city === 'aarhus'}
            onChange={handleChange}
          /> Aarhus
          </label>
        </div>
        <div className="radio-btn">
          <label>
          <input
            type="radio"
            value="koebenhavn"
            checked={city === 'koebenhavn'}
            onChange={handleChange}
          /> København
          </label>
        </div>
        <div className="radio-btn">
          <label>
          <input
            type="radio"
            value="odense"
            checked={city === 'odense'}
            onChange={handleChange}
          /> Odense
          </label>
        </div>
        <button>Søg</button>
      </form>
    )
    

    
}