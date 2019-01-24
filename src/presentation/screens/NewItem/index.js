import React from 'react';
import { View, Text } from 'react-native';

export default class NewItem extends React.Component {

  static navigationOptions = {
    header:null
}

  render() {
    return(
      <View>
        <View style={{ backgroundColor: 'darkblue', height: 140, justifyContent: 'center', paddingLeft: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
            Create new item
          </Text>
        </View>
      </View>
    );
  }
}
