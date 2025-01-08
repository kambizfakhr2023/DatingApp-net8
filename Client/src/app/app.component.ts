
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  //imports: [ NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  
  http = inject(HttpClient)
  title = 'Client';
  users: any;

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/users").subscribe({
      next: (response) =>{ this.users = response},
      error: (err) => {console.log(err)},
      complete: () =>{console.log("Request has been completed!")}
    })
  }
}
