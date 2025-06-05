export const generateData = (rowIndex: number): string[] => {
  return Array.from({length: 500}, (_, colIndex) => `R${rowIndex}C${colIndex}`);
};
