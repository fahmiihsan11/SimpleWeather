
import { TextField, Box, Card, Button, Divider } from '@mui/material'
import { useRef } from 'react';

const key = import.meta.env.VITE_WEATHER_KEY;

export function CardEnterCity({ setIsFetching, setResult, setData}) {
  const inputRef = useRef(null);

  function fetchRequest(api){
    try{
      fetch(api)
      .then(response => {
        if(response.status === 200){
          response.json().then(data => {
            setData(data);
            setResult(true)
          });
        }
        
      })
    } catch {
      alert('Network Error');
    } finally {
      setIsFetching(false);
    }
    
  }

  function requestApi(cityName){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
    fetchRequest(api);
  }

  function onSuccess(position){
    const {latitude, longitude} = position.coords;
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`
    fetchRequest(api);
  }

  function onError(error){
    console.error(error);
  }

  function getGeolocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(onSuccess, onError)
    } else{
      alert('Your browser is not support for geting location')
    }
  }

  const handleRequest = (e) => {
    if(e.key == "Enter"){
      setIsFetching(true);
      requestApi(e.target.value)
   }
  }

  const handleSubmit = () => {
    setIsFetching(true);
    requestApi(document.getElementById('filled-search').value);
  }

  return (
    <Box>
        <Card 
          style={{
            backgroundColor: "#0fddf0",
            width: "400px",
            height: "300px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: 'translate(-50%, -50%)',
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Box style={{ display: "flex", flexDirection: "column"}}>
              <div style={{textAlign: "center", marginBottom: "10px"}}>
                <img style={{width: "60px"}}src="/Haze.png"/>
              </div>
              <TextField
                id="filled-search"
                label="City Name"
                type="search"
                variant="filled"
                ref={inputRef}
                fullWidth
                autoComplete="off"
                onKeyDown={handleRequest}
                style={{backgroundColor: "white", marginBottom: "10px"}}
              />
              <Button variant="text" onClick={handleSubmit}>enter</Button>
              <Divider sx={{mt: 1, mb: 3}}/>
              <Button variant="contained" onClick={getGeolocation}>
                Get Current Location
              </Button>
            </Box>
        </Card>
    </Box>
  )
}
