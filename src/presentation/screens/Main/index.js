import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Main extends React.Component {
  render() {
    return(
      <View>
        <View style={{ backgroundColor: 'darkblue', height: 130, justifyContent: 'center', paddingLeft: 20 }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white' }}>
            Sayer
          </Text>
          <Text style={{ marginTop: 5, fontSize: 14, fontWeight: 'bold', color: 'white' }}>
            World's most used time waster
          </Text>
        </View>
        <View style={{ height: 80, flexDirection: 'row', paddingHorizontal: 15, borderBottomWidth: 1, borderColor: 'lightgrey', alignItems: 'center' }}>
          <Text style={{ flex: 1, fontSize: 22 }}>
            Some text to show
          </Text>
          <View style={{ backgroundColor: 'darkblue', height: 44, width: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20 }}>
              22
            </Text>
          </View>
        </View>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('NewItem')}
        >
          <View style={{ marginTop: 25, height: 70, width: 70, borderRadius: 35, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: 'mediumvioletred'}}>
            <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'white'}}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      
    );
  }
}