import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    Swal.fire({
      title: 'Sofka!',
      text: 'Cuidamos nuestro entorno multiplicando experiencias exitosas',
      imageUrl: '../../assets/sofka.png',
      imageWidth: 450,
      imageHeight: 150,
      imageAlt: 'Sofka',
    })

  }

}
