import React from 'react';
import {View, Text} from 'react-native';

class AboutScreenView extends React.Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

export default AboutScreenView;