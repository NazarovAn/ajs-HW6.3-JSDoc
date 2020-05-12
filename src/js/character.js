/**
 * Creates new character with defined name and type
 *
 * @param { string } name - Character's name
 * @param { string } type - Character's type
 *
 * @throws  Will throw an error if the argument is null/undefined.
 */
function Character(name, type) { // eslint-disable-line no-unused-vars
  this.name = name;
  this.type = type;
}
