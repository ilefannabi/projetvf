import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {

  sessionItems = [
    {
    id: 1,
    name: 'Web',
    track: 'MEAN Stack',
    date: new Date('2020-10-17'),
    duree: 3,
    local: 'ENICARTHAGE',
    participants: 0,
    isCompleted: false
    },
    {
    id: 2,
    name: 'Mobile',
    track: 'Angular et Ionic',
    date: new Date('2020-11-20'),
    duree: 5,
    local: 'ENICARTHAGE',
    participants: 0,
    isCompleted: false
    },
    {
    id: 3,
    name: 'Web',
    track: 'NodeJS',
    date: new Date('2020-10-20'),
    duree: 5,
    local: 'ENICARTHAGE',
    participants: 0,
    isCompleted: false
    },
    
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
