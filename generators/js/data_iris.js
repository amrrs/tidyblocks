//
// Generate code to pull iris.csv from GitHub.
//
Blockly.JavaScript['data_iris'] = (block) => {
  const URL = 'https://raw.githubusercontent.com/tidyblocks/tidyblocks/master/data/iris.csv'
  const prefix = registerPrefix('')
  return `${prefix} readCSV('${URL}')
  .toNumber(['Sepal_Length', 'Sepal_Width', 'Petal_Length', 'Petal_Width'])`
}
