import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  @Input() style: string;

  constructor() { }

  ngOnInit() {
  }

}
