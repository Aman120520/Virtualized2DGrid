import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const GridHeader = ({scrollX, setScrollX}: any) => {
  const headerData = Array.from({length: 499}, (_, i) => `Col ${i + 1}`);

  return (
    <View style={styles.headerRow}>
      <View style={styles.stickyHeader}>
        <Text>Row</Text>
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        onScroll={e => setScrollX(e.nativeEvent.contentOffset.x)}
        contentOffset={{x: scrollX, y: 0}}>
        <View style={{flexDirection: 'row'}}>
          {headerData.map((title, i) => (
            <View style={styles.headerCell} key={i}>
              <Text>{title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#f7f7f7',
  },
  stickyHeader: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  headerCell: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});

export default GridHeader;
