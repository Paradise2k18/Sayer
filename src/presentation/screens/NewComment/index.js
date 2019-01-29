import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment } from '../../redux/actions/ItemAction/index';
import styles from './styles';

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
      <View key={comment} style={styles.commentView}>
        <View 
          style={styles.placeholderView}
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
          style={styles.headerView} 
        >
          <TouchableOpacity 
            style={styles.backButtonView}
            onPress={() => this.props.navigation.pop()}
          >
            <Text style={styles.backButtonText}>
              ←
            </Text>
          </TouchableOpacity>
          <View style={styles.headerTextView}>
            <Text 
              style={styles.headerText}
            >
              {element.value}
            </Text>
          </View>
        </View>
        <ScrollView>
          {this.renderComment(text, index)}
        </ScrollView>
        <View style={{ flex: 1 }}/>
        <View style={styles.inputFormView}>
          <TextInput 
            placeholder="  add new comment"
            style={styles.textInput}
            autoCorrect={false}
            numberOfLines={1}
            clearTextOnFocus
            onChangeText={(v) => this.state.value = v}

          />
          <TouchableOpacity 
            style={styles.addCommentView}
            onPress={() => this.addComment(index, this.state.value)}
          >
            <Text style={styles.addCommentText}>
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
