/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var counter = 0;
  for(var i = 0; i < preferences.length; i++) {
    if(preferences[i] - 1 == preferences[preferences[i]-1]-1) continue;
    if(i == preferences[preferences[preferences[i]-1]-1]-1) counter++;
  }
  if(counter < 3) return 0;
  return counter/3;
};
