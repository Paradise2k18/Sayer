import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
 class Main extends React.Component {

  static navigationOptions = {
    header:null
  }

  renderItem = () => {
    const arr = [
      {
        id: 1,
        text: 'first text'
      },
       {
         id: 2,
         text: 'second text'
       },
       {
        id: 3,
        text: 'first text'
      },
      {
        id: 4,
        text: 'first text'
      },
      {
        id: 5,
        text: 'first text'
      },
      {
        id: 6,
        text: 'first text'
      },
    ];
    
    return(
      arr.map(element => (
        <View key={element.id} style={{ height: 80, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 1, borderColor: 'lightgrey', alignItems: 'center' }}>
          <Text style={{ flex: 1, fontSize: 22 }}>
            {element.text}
          </Text>
          <View style={{ backgroundColor: '#0f1f3d', height: 44, width: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20 }}>
              22
            </Text>
          </View>
        </View>
      ))
    );
  }

  render() {
    return(
      <View>
        <View style={{ backgroundColor: '#0f1f3d', height: 130, justifyContent: 'center', paddingLeft: 20, paddingTop: 20 }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white' }}>
            Sayer
          </Text>
          <Text style={{ marginTop: 5, fontSize: 14, fontWeight: 'bold', color: 'white' }}>
            World's most used time waster
          </Text>
        </View>
        <ScrollView>
          {this.renderItem()}
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('NewItem')}
            style={{ marginBottom: 160}}
          >
            <View style={{ marginTop: 25, height: 70, width: 70, borderRadius: 35, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6005c'}}>
              <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'white'}}>
                +
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default Main;