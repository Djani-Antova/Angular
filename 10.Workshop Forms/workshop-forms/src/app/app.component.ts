import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'components-workshop';

// from here is the new partshowing how to connect with firebase


constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.http
  .get('https://my-initial-project-32d3f-default-rtdb.firebaseio.com/.json')
  .subscribe((comments) => {
    //console.log(comments);
    
  })

}


}
