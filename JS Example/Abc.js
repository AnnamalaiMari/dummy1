class Dog {
  
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  
  const halley = new Dog('Halley');
  const halley1 = new Dog('nanda');
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  halley.incrementBehavior();
  console.log(halley._name); // Print name value to console
  console.log(halley._behavior); // Print behavior value to console
  console.log(halley1.behavior);
  
  