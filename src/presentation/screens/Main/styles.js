import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  deleteButton: {
    height: 80,
    width: 80, 
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#e6005c'
  },
  itemView: {
    height: 80, 
    flexDirection: 'row', 
    paddingHorizontal: 20, 
    borderBottomWidth: 1, 
    borderColor: 'lightgrey', 
    alignItems: 'center'
  },
  itemText: {
    flex: 1, 
    fontSize: 22,
    marginRight: 10
  },
  commentCountView: {
    backgroundColor: '#0f1f3d', 
    height: 44, 
    width: 44, 
    borderRadius: 22, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  commentCountText: {
    color: 'white', 
    fontSize: 20
  },
  headerView: {
    backgroundColor: '#0f1f3d', 
    height: 130, 
    justifyContent: 'center', 
    paddingLeft: 20, 
    paddingTop: 20
  },
  headerMainText: {
    fontSize: 35, 
    fontWeight: 'bold', 
    color: 'white'
  },
  headerSecondaryText: {
    marginTop: 5, 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: 'white' 
  },
  addItemView: {
    marginTop: 25, 
    height: 70, 
    width: 70, 
    borderRadius: 35, 
    alignSelf: 'center', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#e6005c'
  },
  addItemText: {
    fontSize: 50, 
    fontWeight: 'bold', 
    color: 'white'
  },
});
