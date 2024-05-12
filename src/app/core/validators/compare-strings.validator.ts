import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const compareStringsValidator = (firstControl: string, secondControl: string) => {
  return (formGroup: FormGroup) => {
    const field1 = formGroup.controls[firstControl].value
    const field2 = formGroup.controls[secondControl].value
   
    return field1 != field2 ? { compare: true } : null
  }
}
