import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NewpassValidators{

    static confirmPassShouldBeSame(control: AbstractControl): ValidationErrors | null {
        // Now we passed as the parameter the whole form group, not only onw form control
        let newPass = control.get('newPass');
        let confirmPass = control.get('confirmPass');
        
        if( newPass.value !== confirmPass.value )
            return { passShouldMatch: true };

        return null;
    }

    // Creating a Async Validator: video 94
    // We can add Promise<ValidationErrors | null> as the required return type, but it's not mandatory
    static checkOldPass(control: AbstractControl){
        return new Promise((resolve) => { // since we are not using 'reject' parameter, we can remove it
            if(control.value !== 'felipe') // instead of using return, we will use resolve() or reject()
                resolve({ wrongPass: true });
            else
                resolve(null);
        });    
    }

}