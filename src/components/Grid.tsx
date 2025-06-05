import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import GridRow from './GridRow';
import GridHeader from './GridHeader';
import {generateData} from '../services/dataProvider';

const Grid = () => {
  const [data, setData] = useState<any[][]>([]);
  const [scrollX, setScrollX] = useState(0);

  const loadData = useCallback(() => {
    const initial = Array.from({length: 100}, (_, i) => generateData(i));
    setData(initial);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const fetchMore = () => {
    setData(prev => [
      ...prev,
      ...Array.from({length: 100}, (_, i) => generateData(prev.length + i)),
    ]);
  };

  return (
    <View style={{flex: 1}}>
      <GridHeader scrollX={scrollX} setScrollX={setScrollX} />
      <FlashList
        data={data}
        estimatedItemSize={40}
        onEndReached={fetchMore}
        renderItem={({item}) => (
          <GridRow rowData={item} scrollX={scrollX} setScrollX={setScrollX} />
        )}
      />
    </View>
  );
};

export default Grid;
