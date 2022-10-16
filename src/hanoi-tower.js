const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */


function calculateHanoi(disksNumber, turnsSpeed, src = 'A', dst = 'C', aux = 'B') {

  let hanoi = {
    turns: 0, 
    seconds: 0
  }

  let turns = Math.pow(2, disksNumber) - 1;
  let speedPerSeconds = turnsSpeed / 60 / 60;
  let seconds = Math.floor(turns/speedPerSeconds);

  hanoi.turns = turns; 
  hanoi.seconds = seconds;

  return hanoi

};


module.exports = {
  calculateHanoi
};
