import { Component, Input, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Output, EventEmitter } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-checkradio',
  templateUrl: './checkradio.component.html',
  styleUrls: ['./checkradio.component.css'],
})
export class CheckradioComponent implements OnInit {

  listvalues: string;
  @Output() listvalue = new EventEmitter();

  list: string;

  @Input() checkValue: string;

  chagecardlist: string[] = ['searchlist', 'searchcard'];

  constructor() {}

  ngOnInit(): void {}

  test(event) {
    // this.checkValue = "a";
    this.listvalues = event.value;
    this.listvalue.emit(this.listvalues);
  }

}
