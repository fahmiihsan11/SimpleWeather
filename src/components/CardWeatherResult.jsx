
import { Card, Grid, Button, Skeleton, Avatar} from "@mui/material"
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import { useState } from "react";

export function CardWeatherResult({data, setResult}) {
  const [loadImage, setLoadImage] = useState(true);
  
  return (
    <>
        <Card 
          style={{
            backgroundColor: "#0fddf0",
            width: window.innerWidth < 422 ? "300px" : "450px",
            height: "320px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: 'translate(-50%, -50%)',
            borderRadius: "10px",
          }}>
            <Grid 
              container 
              rowSpacing={1} 
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                  <div style={{textAlign: "center"}}>
                  {loadImage && (
                    <Skeleton style={{margin: "40px auto 0px"}} variant="circular">
                        <Avatar />
                    </Skeleton>
                  )}
                  <img 
                    width={100}
                    alt={data.weather[0].main} 
                    onLoad={() => setLoadImage(false)}
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                  />
                  <br />
                  <span style={{fontWeight: "bold" , fontSize: "24px"}}>{data.main.temp}°C</span>
                  <br />
                  <span style={{ fontSize: "20px"}}>{data.weather[0].main}</span>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <span style={{marginTop: "5px", marginRight: "2px"}}>
                      <RoomTwoToneIcon fontSize="10px"/>
                    </span>
                    <span>{data.name}</span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{textAlign: "center"}}>
                  <span style={{fontWeight: "bold", fontSize: "14px"}}>{data.main.feels_like}°C</span>
                  <br />
                  <span>Feels like</span>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{textAlign: "center"}}>
                  <span style={{fontWeight: "bold", fontSize: "14px"}}>{data.main.feels_like}°C</span>
                  <br />
                  <span>Humidity</span>
                </div>
              </Grid>
            </Grid>
            <div style={{textAlign: "center", marginTop: "10px" }}>
              <Button onClick={() => setResult(false)}>Go Back</Button>
            </div>
        </Card>
    </>
  )
}
