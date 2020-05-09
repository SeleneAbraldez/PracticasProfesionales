import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-elegir',
  templateUrl: './elegir.page.html',
  styleUrls: ['./elegir.page.scss'],
})
export class ElegirPage implements OnInit {

  constructor(
    private router: Router, 
  ) { }

  ngOnInit() {
  }

  redirectear(donde){
    this.router.navigateByUrl(donde);
  }
  
}
