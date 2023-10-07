import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Imagee from './src/components/Image'

export default function ImageParent() {
  return (
    <ScrollView>
     <Imagee/>
     <Imagee/>
     {/* u can pass props to Imagee as u were passing in reactjs */}
     {/* this are resuble code sinpets  */}
     <Imagee title="Forest" />
     <Imagee title="Beach"/>
     <Imagee title="Mountain"/>


     {/* this is how image is shown */}

       {/* this addressed are based on the app.js if this iamge doesnot come change the address like ../src/ etc */}
     <Imagee title="Forest" imagesrc={require('./assets/forest.jpg')} />
     <Imagee title="Beach" imagesrc={require('./assets/beach.jpg')} />
     <Imagee title="Mountain" imagesrc={require('./assets/mountain.jpg')} />

     {/* adding score property */}
     <Imagee title="Forest" score="10" imagesrc={require('./assets/forest.jpg')} />
     <Imagee title="Beach" score="9" imagesrc={require('./assets/beach.jpg')} />
     <Imagee title="Mountain" score="8" imagesrc={require('./assets/mountain.jpg')} />
    </ScrollView>
  )
}
