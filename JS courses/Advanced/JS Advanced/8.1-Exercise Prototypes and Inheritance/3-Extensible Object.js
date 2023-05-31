function extensibleObject() {
    const obj = {
        extend: function (template) {
        for (let prop in template) {
          if (template.hasOwnProperty(prop)) {
            if (typeof template[prop] === 'function') {
              Object.getPrototypeOf(obj)[prop] = template[prop];
            } else {
              obj[prop] = template[prop];
            }
          }
        }
      }
    };
  
    return obj;
  }
  