import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit{
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this returns promise, as if we write this.apiService.getThemes().then(data => data)
    this.apiService.getThemes().subscribe(themes => {
      console.log({themes});      
    });

}
}