import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment } from '../../redux/actions/ItemAction/index';


class NewComment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  static navigationOptions = {
    header:null
}

renderComment = (text, index) => {
  return(
    text[index].comments.map(comment => (
      <View key={comment} style={{ paddingHorizontal: 20, flexDirection: 'row', paddingBottom: 20, borderBottomWidth: 0.5, borderColor: 'lightgrey', marginTop: 15 }}>
        <View 
          style={{ height: 60, width: 60, backgroundColor: '#1f3d7a', marginRight: 20 }}
        />
        <View style={{ flex: 1}}>
          <Text>{comment}</Text>
        </View>
      </View>
    ))
  );
}

addComment = (index, value) => {
  if (value.length > 0){
    this.props.addComment(index, value);
  } else {
    alert('Enter a value');
  }
}

  render() {
    const element = this.props.navigation.getParam('element');
    const text = this.props.items.text;
    const index = text.findIndex(el => el.id === element.id);

    return(
      <View style={{ flex: 1 }}>
        <View 
          style={{ backgroundColor: '#0f1f3d', minHeight: 140, flexDirection: 'row', paddingTop: 30, alignItems: 'center', marginBottom: 15, paddingBottom: 10 }} 
        >
          <TouchableOpacity 
            style={{ backgroundColor: '#1f3d7a', height: 44, width: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20 }}
            onPress={() => this.props.navigation.pop()}
          >
            <Text style={{ color: 'white', fontSize: 24 }}>
              ←
            </Text>
          </TouchableOpacity>
          <View style={{ flex: 1, marginRight: 40 }}>
            <Text 
              style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}
            >
              {element.value}
            </Text>
          </View>
        </View>
        <ScrollView>
          {this.renderComment(text, index)}
        </ScrollView>
        <View style={{ flex: 1 }}/>
        <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 7, backgroundColor: 'lightgrey', marginBottom: 22 }}>
          <TextInput 
            placeholder="  add new comment"
            style={{ flex: 1, marginRight: 15, height: 50, fontSize: 20, backgroundColor: 'white',borderWidth: 1, borderColor: 'lightgrey',paddingLeft: 10 }}
            autoCorrect={false}
            numberOfLines={1}
            clearTextOnFocus
            onChangeText={(v) => this.state.value = v}

          />
          <TouchableOpacity 
            style={{ backgroundColor: '#0f1f3d', height: 44, width: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', marginTop: 3 }}
            onPress={() => this.addComment(index, this.state.value)}
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
    addComment,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
