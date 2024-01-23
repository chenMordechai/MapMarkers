import {AdvancedMarker,Pin} from "@vis.gl/react-google-maps"


export function Markers({positions,onMarkerClicked}){
    // console.log('positions:', positions)
   
    return(
    <section>
      {positions.map(position=> <AdvancedMarker key={position.lat} 
      position={position} onClick={()=>onMarkerClicked(position._id)}>
        <Pin background={"grey"} borderColor={"green"} glyphColor={"purple"}/>
      </AdvancedMarker>
  
      )}
    </section>
    )
  }