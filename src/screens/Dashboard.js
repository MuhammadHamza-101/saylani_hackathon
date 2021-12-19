import React from 'react'
import { useState, useEffect } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import GetLocation from 'react-native-get-location'

const foodBanks = [
  {
    "branch_name": "Aliabad",
    "latitude": 24.9200172,
    "longitude": 67.0612345
  },
  {
    "branch_name": "Numaish chowrangi",
    "latitude": 24.8732834,
    "longitude": 67.0337457
  },
  {
    "branch_name": "Saylani house phase 2",
    "latitude": 24.8278999,
    "longitude": 67.0688257
  },
  {
    "branch_name": "Touheed commercial",
    "latitude": 24.8073692,
    "longitude": 67.0357446
  },
  {
    "branch_name": "Sehar Commercial",
    "latitude": 24.8138924,
    "longitude": 67.0677652
  },
  {
    "branch_name": "Jinnah avenue",
    "latitude": 24.8949528,
    "longitude": 67.1767206
  },
  {
    "branch_name": "Johar chowrangi",
    "latitude": 24.9132328,
    "longitude": 67.1246195
  },
  {
    "branch_name": "Johar chowrangi 2",
    "latitude": 24.9100704,
    "longitude": 67.1208811
  },
  {
    "branch_name": "Hill park",
    "latitude": 24.8673515,
    "longitude": 67.0724497
  }
]

export default function Dashboard({ navigation }) {
  const [userLocation, setuserLocation] = useState({});
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setuserLocation(location)
        console.log(userLocation)
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
    return () => {

    }
  }, [])
 
  return (
    <Background>
      <Header>Let's start</Header>
      {/* <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph> */}
      {/* <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button> */}
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 24.9132328,
            longitude: 67.1246195,

          }}
        >
          {foodBanks.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}

              title={marker.branch_name}
            // description={marker.description}
            />
          ))}
        </MapView>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

