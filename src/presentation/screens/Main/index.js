import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swipeable from 'react-native-swipeable';
import { removeItem } from '../../redux/actions/ItemAction/index';

 class Main extends React.Component {

  static navigationOptions = {
    header:null
  }

  navigateToNewComment = (element) => {
    this.props.navigation.navigate('NewComment', { element });
  }

  renderItem = () => {
    
    const deleteButton = (element) => [
      <TouchableOpacity
        style={{ height: 80, width: 80, alignItems: 'center',justifyContent: 'center', backgroundColor: '#e6005c' }}
        onPress={() => this.props.removeItem(element.id)}
      >
        <Text style={{ color: 'white' }}>Delete</Text>
      </TouchableOpacity>
    ];

    return(
      this.props.items.text.map(element => (
        <Swipeable 
          key={element.id} 
          rightButtons={deleteButton(element)}
        >
          <TouchableOpacity  
            style={{ height: 80, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 1, borderColor: 'lightgrey', alignItems: 'center' }}
            onPress={() => this.navigateToNewComment(element)}
          >
            <Text 
              style={{ flex: 1, fontSize: 22,marginRight: 10 }}
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {element.value}
            </Text>
            <View style={{ backgroundColor: '#0f1f3d', height: 44, width: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{ color: 'white', fontSize: 20 }}>
                {element.comments.length}
              </Text>
            </View>
          </TouchableOpacity>
        </Swipeable>
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

