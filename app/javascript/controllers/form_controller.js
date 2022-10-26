import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  static targets = ['form'];

  connect() {
    console.log('Connected')
  }

  submitForm(event) {
    let isValid = this.validateForm(this.formTarget);

    // If our form is invalid, prevent default on the event
    // so that the form is not submitted
    if (!isValid) {
      event.preventDefault();
    }
  }

  async validate(event) {
    console.log('event forms')

  }

  employmentForm(event){
    let isValid = this.validateForm(this.formTarget);
    console.log('here we are now')

    // If our form is invalid, prevent default on the event
    // so that the form is not submitted
    if (!isValid) {
      event.preventDefault();
    }
  }


  validateForm() {
    let isValid = true;

    // Tell the browser to find any required fields
    let requiredFieldSelectors = 'input:required';
    let requiredFields = this.formTarget.querySelectorAll(requiredFieldSelectors);

    requiredFields.forEach((field) => {
      // For each required field, check to see if the value is empty
      // if so, we focus the field and set our value to false
      if (!field.disabled && !field.value.trim()) {
        field.focus();

        isValid = false;
      }
    });

    return isValid;
  }

}
