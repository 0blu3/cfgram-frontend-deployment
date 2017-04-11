'use strict';

module.exports = function() {
  return function(gallery, searchTerm) {
    let fuzzyRegex = generateFuzzyRegex(searchTerm);

    return gallery.filter( gallery => {
      return fuzzyRegex.test(gallery.name.toUpperCase());
    });
  };
};

function generateFuzzyRegex(input) {
  if (!input) return /.*/;
  let fuzzyString = '.*' + input.toUpperCase().split('').join('.*') + '.*';
  return new RegExp(fuzzyString);
};