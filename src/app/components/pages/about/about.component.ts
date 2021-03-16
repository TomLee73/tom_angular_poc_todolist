import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'selenium-webdriver';
import { WelcomeDataService } from 'src/app/service/data/welcome-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

message = 'Some Welcome Message '
welcomeMessageFromService:string
name = ''

  constructor(  
    private route:ActivatedRoute,
    private service:WelcomeDataService) {
  
   }

  ngOnInit() {
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccesfulResponse(response),
    error => this.handleErrorResponse(error)
    );


    console.log('last lane of get getWelcomeMessage')
    //console.log("get welcome message");
  }

handleSuccesfulResponse(response){
  this.welcomeMessageFromService = response.message
  //console.log(response);
  //console.log(response.message);
}

handleErrorResponse(error){
  console.log(error);
  console.log(error.error);
  console.log(error.error.message);
  this.welcomeMessageFromService = error.error.message
}

}
