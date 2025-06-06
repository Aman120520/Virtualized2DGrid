// components/Row.tsx

import React, {memo, useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {NUM_COLUMNS, COLUMN_WIDTH} from '../constants/layout';
import ColumnCell from './ColumnCell';

interface RowProps {
  rowIndex: number;
}

const Row = memo(({rowIndex}: RowProps) => {
  const renderColumn = useCallback(
    ({index}: ListRenderItemInfo<unknown>) => (
      <ColumnCell columnIndex={index} rowIndex={rowIndex} />
    ),
    [rowIndex],
  );

  return (
    <FlatList
      horizontal
      data={Array(NUM_COLUMNS).fill(0)}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderColumn}
      getItemLayout={(_, index) => ({
        length: COLUMN_WIDTH,
        offset: COLUMN_WIDTH * index,
        index,
      })}
      initialNumToRender={10}
      maxToRenderPerBatch={20}
      windowSize={5}
      removeClippedSubviews
    />
  );
});

export default Row;
