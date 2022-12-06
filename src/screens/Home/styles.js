import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerStyle: {
    padding: 15,
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.2)',
    marginBottom: 15,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  colorsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // width: 200,
    // backgroundColor: 'yellow',
  },
  colorItem: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 3,
  },
});
