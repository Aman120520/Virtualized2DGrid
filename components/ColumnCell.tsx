// components/ColumnCell.tsx

import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {COLUMN_WIDTH, ROW_HEIGHT} from '../constants/layout';
import styles from '../styles/gridStyles';

interface ColumnCellProps {
  columnIndex: number;
  rowIndex: number;
}

const ColumnCell = memo(({columnIndex, rowIndex}: ColumnCellProps) => (
  <View style={styles.cell}>
    <Text style={styles.textStyle}>{`R${rowIndex}C${columnIndex}`}</Text>
  </View>
));

export default ColumnCell;
