import { Component, OnInit, Input, Output, forwardRef, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

@Component({
  selector: 'RMTextbox',
  templateUrl: './rmtextbox.component.html',
  styleUrls: ['./rmtextbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RmtextboxComponent),
      multi: true
    }
  ]
})
export class RmtextboxComponent implements OnInit {

  @Input() id: string;
  @Input() placeholder:string;

  constructor() { }

  ngOnInit() {
  }
}
