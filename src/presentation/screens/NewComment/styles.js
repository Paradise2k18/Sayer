import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  commentView: {
    paddingHorizontal: 20, 
    flexDirection: 'row', 
    paddingBottom: 20, 
    borderBottomWidth: 0.5, 
    borderColor: 'lightgrey', 
    marginTop: 15
 },
  placeholderView: {
    height: 60, 
    width: 60, 
    backgroundColor: '#1f3d7a', 
    marginRight: 20
 },
 headerView: {
    backgroundColor: '#0f1f3d', 
    minHeight: 140, 
    flexDirection: 'row', 
    paddingTop: 30, 
    alignItems: 'center', 
    marginBottom: 15, 
    paddingBottom: 10
 },
 headerText: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: 'white'
 },
 headerTextView: {
    flex: 1, 
    marginRight: 40
 },
 backButtonView: {
    backgroundColor: '#1f3d7a', 
    height: 44, 
    width: 44, 
    borderRadius: 22, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginHorizontal: 20
 },
 backButtonText: {
    color: 'white', 
    fontSize: 24
 },
 inputFormView: {
    flexDirection: 'row', 
    paddingHorizontal: 10, 
    paddingVertical: 7, 
    backgroundColor: 'lightgrey', 
    marginBottom: 22
 },
 textInput: {
    flex: 1, 
    marginRight: 15, 
    height: 50, 
    fontSize: 20, 
    backgroundColor: 'white',
    borderWidth: 1, 
    borderColor: 'lightgrey',
    paddingLeft: 10 
 },
 addCommentView: {
    backgroundColor: '#0f1f3d', 
    height: 44, 
    width: 44, 
    borderRadius: 22, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 3
 },
 addCommentText: {
    color: 'white', 
    fontSize: 24
 }
});
