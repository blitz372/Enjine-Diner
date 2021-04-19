import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-special-requests',
  templateUrl: './special-requests.component.html',
  styleUrls: ['./special-requests.component.scss']
})
export class SpecialRequestsComponent implements OnInit {
  @Output() onChanged: EventEmitter<string> = new EventEmitter();

  requests: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  updateRequests(e: any) {
    this.onChanged.emit(this.requests);
  }

}
