import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'logging',
  imports: [CommonModule],
  templateUrl: './logging.component.html',
  styleUrl: './logging.component.css'
})
export class LoggingComponent {

  constructor(public loggingService : LoggingService){}

  

}
