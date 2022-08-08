import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    const panels= document.querySelectorAll('.panel');
    function removeActiveClass(){
      panels.forEach(panel => {
        panel.classList.remove('active');
      })
    }
    panels.forEach((panel) =>{
      panel.addEventListener('click', ()=>{
        removeActiveClass();
        panel.classList.add('active');
      });
    });
  }
}

