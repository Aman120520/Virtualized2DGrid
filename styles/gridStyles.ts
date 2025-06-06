// styles/gridStyles.ts

import {StyleSheet} from 'react-native';
import {COLUMN_WIDTH, ROW_HEIGHT} from '../constants/layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  cell: {
    width: COLUMN_WIDTH,
    height: ROW_HEIGHT,
    borderWidth: 0.5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginVertical: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
