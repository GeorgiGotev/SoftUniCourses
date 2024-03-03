
    function extendProrotype(classObj) {
        classObj.prototype.species = 'Human';
        classObj.prototype.toSpeciesString = function () {
          return 'I am a ' + this.species + '. ' + this.toString();
        };
      }
    