// App.tsx

import React, {useCallback} from 'react';
import {SafeAreaView, FlatList, Text, ListRenderItemInfo} from 'react-native';
import {NUM_ROWS, ROW_HEIGHT} from './constants/layout';
import Row from './components/Row';
import styles from './styles/gridStyles';

export default function App(): JSX.Element {
  const renderRow = useCallback(
    ({index}: ListRenderItemInfo<unknown>) => <Row rowIndex={index} />,
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Virtualized 2D Data Grid</Text>
      <FlatList
        data={Array(NUM_ROWS).fill(0)}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderRow}
        getItemLayout={(_, index) => ({
          length: ROW_HEIGHT,
          offset: ROW_HEIGHT * index,
          index,
        })}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews
      />
    </SafeAreaView>
  );
}
