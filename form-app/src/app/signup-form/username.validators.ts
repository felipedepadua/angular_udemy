import { AbstractControl, ValidationErrors } from "@angular/forms";
//import { reject } from "q";

// If we had many validators for the whole app, we could organize them by putting them all inside 
// a folder called validators

export class UsernameValidators{
    // Create a rule that username cannot contain space
    // It should return either ValidationErrors or null
    // ! we created as static so it can be accessed outside like UsernameValidators.cannotContainSpace
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        // we cast from Any [put mouse over the variable to check] to string
        if( (control.value as string).indexOf(' ') != -1 )
            return { cannotContainSpace: true };
            // The key is the name of the validation error. The value can be anything

        //Otherwise
        return null;
    }

    // Creating a Async Validator: video 94
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
        // Lets make it simpler and simulate a call to a server [In the real world you need to get values from server]
        return new Promise((resolve, reject) => {
            // setTimeout is a Assyncronous operation: cuz we dont want the process to block while waiting for 1 sec
            setTimeout(() => {
                    if(control.value === 'mosh') // instead of using return, we will use resolve() or reject()
                        resolve({ shouldBeUnique: true });
                    else
                        resolve(null);
            }, 1000);
        });

        
    }

}