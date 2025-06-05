import React, {memo} from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native';

const GridRow = memo(({rowData, scrollX, setScrollX}: any) => {
  return (
    <View style={styles.row}>
      <View style={styles.stickyCell}>
        <Text>{rowData[0]}</Text>
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        onScroll={e => setScrollX(e.nativeEvent.contentOffset.x)}
        contentOffset={{x: scrollX, y: 0}}>
        <FlatList
          data={rowData.slice(1)}
          horizontal
          renderItem={({item}) => (
            <View style={styles.cell}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          keyExtractor={(_, i) => i.toString()}
        />
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 40,
  },
  stickyCell: {
    width: 60,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    width: 80,
    borderRightWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'white',
  },
});

export default GridRow;
