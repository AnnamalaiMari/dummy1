class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      return this._remainingVacationDays -= daysOff;
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', 'Trauma');
  console.log(nurseOlynyk._certifications);
  console.log(nurseOlynyk.name);
  console.log(nurseOlynyk.remainingVacationDays);
  console.log(nurseOlynyk.takeVacationDays(5));
  