import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../../redux/actions/ItemAction/index';


class NewItem extends React.Component {

  static navigationOptions = {
    header:null
}

  addItem = () => {
    this.props.addItem('new itm');
    this.props.navigation.navigate('Main');
  }

  render() {
    return(
      <View>
        <View 
          style={{ backgroundColor: '#0f1f3d', height: 140, paddingLeft: 20,flexDirection: 'row', paddingTop: 20, alignItems: 'center'}}  
        >
          <TouchableOpacity 
            style={{ backgroundColor: '#1f3d7a', height: 44, width: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
            onPress={() => this.props.navigation.pop()}
          >
            <Text style={{ color: 'white', fontSize: 24 }}>
              ←
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
            Create new item
          </Text>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 30 }}>
          <TextInput 
            placeholder="add new item"
            style={{ flex: 1, marginRight: 15, borderBottomWidth: 1, borderColor: 'lightgrey', height: 40, fontSize: 20 }}
            autoCorrect={false}
            numberOfLines={1}
          />
          <TouchableOpacity 
            style={{ backgroundColor: '#0f1f3d', height: 44, width: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center'}}
            onPress={this.addItem}
          >
            <Text style={{ color: 'white', fontSize: 24 }}>
              >
            </Text>
          </TouchableOpacity>
        </View>
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
    addItem,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
