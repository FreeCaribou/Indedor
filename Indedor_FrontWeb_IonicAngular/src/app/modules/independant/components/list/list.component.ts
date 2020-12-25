import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  independants: any[];

  constructor() { }

  ngOnInit() {
    this.independants = [
      {
        id: '1',
        name: 'Jean-Claude',
        profession: 'Plombier',
        description: 'J\'aime les tuyaux'
      },
      {
        id: '2',
        name: 'Jean-François',
        profession: 'Chauffagiste',
        description: 'Moi je m\'en fous je suis payé à l\'heure'
      },
      {
        id: '3',
        name: 'Jean-Luc',
        profession: 'Cuisinier',
        description: 'Une omelette?'
      },
      {
        id: '4',
        name: 'Jean-Neymar',
        profession: 'Copieur',
        description: 'Je vais juste copier plein de fois la même chose pour tester'
      },
      {
        id: '4',
        name: 'Jean-Neymar',
        profession: 'Copieur',
        description: 'Je vais juste copier plein de fois la même chose pour tester'
      },
      {
        id: '4',
        name: 'Jean-Neymar',
        profession: 'Copieur',
        description: 'Je vais juste copier plein de fois la même chose pour tester'
      },
      {
        id: '4',
        name: 'Jean-Neymar',
        profession: 'Copieur',
        description: 'Je vais juste copier plein de fois la même chose pour tester'
      },
      {
        id: '4',
        name: 'Jean-Neymar',
        profession: 'Copieur',
        description: 'Je vais juste copier plein de fois la même chose pour tester'
      },
      {
        id: '4',
        name: 'Jean-Neymar',
        profession: 'Copieur',
        description: 'Je vais juste copier plein de fois la même chose pour tester'
      }
    ]
  }

}
