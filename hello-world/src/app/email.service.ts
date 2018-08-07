import { Injectable } from '@angular/core';

// We need this decorator only if this service has dependencies in its constructor 
// Ex: constructor(logService: LogService) { }
@Injectable()  
export class EmailService {

  constructor() { }

}
