import fs from 'fs'

/**
 * Returns array of string read from text file
 * @function
 * @param {String} fileName - name of the file being read
 * @returns {Array} filteredData - Array of strings containing info from text file
 */
export const readFile = fileName => {
  // read text file using fs, return an array and remove \r\n
  const data = fs.readFileSync(`../../${fileName}`).toString().split('\r\n')
  // remove any empty strings
  const filteredData = data.filter(e => e)
  return filteredData
}
