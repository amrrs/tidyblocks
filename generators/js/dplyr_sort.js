//
// Sort data by columns.
//
Blockly.JavaScript['dplyr_sort'] = (block) => {
  const columns = block.getFieldValue('MULTIPLE_COLUMNS')
        .split(',')
        .map(c => `"${c.trim()}"`)
        .join(',')
  return `.sort([${columns}])`
}
