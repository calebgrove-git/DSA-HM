const HashMap = require('./hashMap');

var main = function () {
  let lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;
  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr._resize(9);
  lotr.set('Ent', 'Treebeard');
  return lotr;
};

console.log(main());
console.log(main().get('Maiar'));
console.log(main().get('Hobbit'));

//2. WhatDoesThisDo
//logs the int 20 and then the int 10
