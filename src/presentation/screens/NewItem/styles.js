import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerView: {
    backgroundColor: '#0f1f3d', 
    height: 140, 
    paddingLeft: 20,
    flexDirection: 'row', 
    paddingTop: 20, 
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: 'white'
  },
  backButtonView: {
    backgroundColor: '#1f3d7a', 
    height: 44, 
    width: 44, 
    borderRadius: 22, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 20
  },
  backButtonText: {
    color: 'white', 
    fontSize: 24
  },
  inputFormView: {
    flexDirection: 'row', 
    paddingHorizontal: 20, 
    paddingTop: 30
  },
  textInputView: {
    flex: 1, 
    marginRight: 15, 
    borderBottomWidth: 1,
    borderColor: 'lightgrey', 
    height: 40, 
    fontSize: 20, 
    paddingLeft: 10
  },
  addItemView: {
    backgroundColor: '#0f1f3d', 
    height: 44, 
    width: 44, 
    borderRadius: 22, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  addItemText: {
    color: 'white', 
    fontSize: 24
  }
});
