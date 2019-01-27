import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeItem } from '../../redux/actions/ItemAction/index';

 class Main extends React.Component {

  static navigationOptions = {
    header:null
  }

  renderItem = () => {
    return(
      this.props.items.text.map(element => (
        
        <View key={element.id} style={{ height: 80, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 1, borderColor: 'lightgrey', alignItems: 'center' }}>
          <Text style={{ flex: 1, fontSize: 22 }}>
            {element.value}
          </Text>
          <View style={{ backgroundColor: '#0f1f3d', height: 44, width: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20 }}>
              22
            </Text>
          </View>
          <TouchableOpacity 
            style={{ backgroundColor: 'red', height: 44, width: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}
            onPress={() => this.props.removeItem(element.id)}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>
              {element.id}
            </Text>
          </TouchableOpacity>
          
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

const mapStateToProps = (state) => {
  const { items } = state
  return { items }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeItem,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Main);

