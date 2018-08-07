import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{

    handleError(error){
        alert('an unexpected error occurred!'); // we can change alter to a toastr
        // In real world application, we would want to log these errors. Just to simulate, lets use console.log
        console.log(error); // In real world, we would have to store this on our server
    }

}