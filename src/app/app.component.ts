import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
  constructor() { }

  ngOnInit(): void {
      console.log("OnInit called")
  }

  ngAfterViewInit(): void {
      console.log("AfterViewInit called")
  }
  
  ownerName = 'Matheus Monteiro';
}