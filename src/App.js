import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import { Map, Marker } from 'react-amap';
import Geolocation from 'react-amap-plugin-geolocation';
const pluginProps = {
    enableHighAccuracy: true,
    timeout: 10000,
    showButton: true
  }

export default  class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            x: 0,
            y: 0,
            position: {longitude: 0, latitude: 0}
        }
    }
    componentDidMount(){
        
    }
    render() {
        const events = {
            created: (ins) => {console.log(ins)},
            click: (po) => {
                this.setState({position: {longitude: po.lnglat.lng, latitude: po.lnglat.lat}}); 
                console.warn(po);
            }
        }
        return (
            <div className='mapWrapper'>
                <Map 
                    amapkey={"d954e9c91c1a90bc18d7c4281be773c8"} 
                    version={"1.4.14"}
                    style={{ width: '200px', height: '200px' }}
                    events={events}
                >
                    <Geolocation {...pluginProps} />
                    {   
                        this.state.position.longitude !== 0 &&
                            <Marker position={this.state.position} />
                    }
                    
                </Map>
            </div>
        );
    }
}


