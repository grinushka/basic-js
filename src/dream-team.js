const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  };
 
  let membersFiltered = members.filter(member => typeof member === 'string');
 
  let team = [];
  
  for (let i = 0; i < membersFiltered.length; i++) {
    let member = membersFiltered[i].replace(/\s+/g, '');
    team.push(member[0])
  }
 
  let dreamTeam = team.sort((a, b) => a.localeCompare(b)).join('').toUpperCase();
  return dreamTeam
}


module.exports = {
  createDreamTeam
};
