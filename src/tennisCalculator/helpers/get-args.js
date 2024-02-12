/**
 * @module getArgs
*/

/**
 * Extract launch argument from console input
 * @function utilities:getArgs
 * @param {string} arg Argument name to be extracted eg: "Score Match" 
 * @returns {string} 
 */
export const getArgs = (arg) => {

    let returnArg = process.argv[process.argv.indexOf('--' + arg) + 1];
    if (returnArg !== '' && returnArg !== null && returnArg !== undefined) {
        return returnArg
    } else {
        throw new Error('Error with arguments');
    }
}