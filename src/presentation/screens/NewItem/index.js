import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../../redux/actions/ItemAction/index';
import styles from './styles';

class NewItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  static navigationOptions = {
    header:null
}

  addItem = (value) => {
    if (value.length > 0){
      this.props.addItem(value)
      this.props.navigation.navigate('Main');
    } else {
      alert('Enter a value');
    }
  }
  
  render() {
    return(
      <View>
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
          <Text style={styles.headerText}>
            Create new item
          </Text>
        </View>
        <View style={styles.inputFormView}>
          <TextInput 
            placeholder="add new item"
            style={styles.textInputView}
            autoCorrect={false}
            numberOfLines={1}
            onChangeText={(v) => this.state.value = v}
          />
          <TouchableOpacity 
            style={styles.addItemView}
            onPress={() => this.addItem(this.state.value)}
          >
            <Text style={styles.addItemText}>
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
