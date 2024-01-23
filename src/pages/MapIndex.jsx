import {useState,useEffect} from 'react'
import {APIProvider ,Map,AdvancedMarker,Pin,InfoWindow } from "@vis.gl/react-google-maps"
import {API_KEY,MAP_ID} from '../../dist/dist'

import { mapService } from "../services/map.service-local.js"
import {Markers} from '../cmps/Markers'

export function MapIndex (){
    const [position , setPosition] = useState({lat:31.771959 , lng:35.217018})
    const [open,setOpen] = useState(false)
    const [positions,setPositions] = useState([])


    useEffect(() => {
      mapService.query()
          .then((data => {
            setPositions(data)
          }))
  }, [])


 async function onMapClicked(ev){
    const position = ev.detail.latLng
  const savedPosition= await mapService.save(position)
    setPositions(prev=>[...prev, savedPosition])
  }
  
  async  function onMarkerClicked(markerId){
    const position= await mapService.getById(markerId)
    setPosition(position)
    setOpen(true)
  }
  
 async function onRemovePosition(){
   await mapService.remove(position._id)
   setOpen(false)
   setPositions(prev=>prev.filter(p=>p._id !== position._id))
   setTimeout(() => {
     setPositions(prev=>[...prev])
   }, 2000);
  }

    return (
      <APIProvider apiKey={API_KEY}>
        <div style={{width: '100vw',height: '100vh'}}> 
          <Map onClick={onMapClicked} zoom={9} center={{lat:31.771959 , lng:35.217018}} mapId={MAP_ID}>
           <AdvancedMarker position={position} onClick={()=>setOpen(true)}>
              <Pin background={"grey"} borderColor={"green"} glyphColor={"purple"}/>
           </AdvancedMarker>

            {open && <InfoWindow position={position} onCloseClock={()=>setOpen(false)}>
              <p>I'm in Israel</p>
              <button onClick={onRemovePosition}>Delete</button>
            </InfoWindow>}
        
            <Markers onMarkerClicked={onMarkerClicked} positions={positions}/>
        
         </Map>
      </div>
     </APIProvider>
    )

}
