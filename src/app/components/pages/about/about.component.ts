import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/service/data/welcome-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(  
    private route:ActivatedRoute,
    private service:WelcomeDataService) {
  
   }

  ngOnInit() {
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService();
    //console.log("get welcome message");
  }

}
