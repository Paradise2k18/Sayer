import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swipeable from 'react-native-swipeable';
import { removeItem } from '../../redux/actions/ItemAction/index';
import styles from './styles';

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
        style={styles.deleteButton}
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
            style={styles.itemView}
            onPress={() => this.navigateToNewComment(element)}
          >
            <Text 
              style={styles.itemText}
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {element.value}
            </Text>
            <View style={styles.commentCountView}>
              <Text style={styles.commentCountText}>
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
        <View style={styles.headerView}>
          <Text style={styles.headerMainText}>
            Sayer
          </Text>
          <Text style={styles.headerSecondaryText}>
            World's most used time waster
          </Text>
        </View>
        <ScrollView>
          {this.renderItem()}
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('NewItem')}
            style={{ marginBottom: 160}}
          >
            <View style={styles.addItemView}>
              <Text style={styles.addItemText}>
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

