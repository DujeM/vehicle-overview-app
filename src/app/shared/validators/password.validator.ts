import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  const MIN_LENGTH = 8;

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasMinLength = value.length >= MIN_LENGTH;
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const hasSpecialChars = /[^a-zA-Z0-9\s]/.test(value);

    const passwordValid =
      hasMinLength && hasUpperCase && hasNumeric && hasSpecialChars;

    return !passwordValid ? { passwordStrength: true } : null;
  };
}
