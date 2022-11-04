import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "practice";
  firstName = "Adarsh Yeligala"
  lastName = "Roger Federer";
  fullName = "Adarsh Kumar Yeligala";
  isTrue : boolean = true;
  public showElement = true;
  public color = 'red';
  public num : number = 0;
  public colors = ['red', 'blue', 'yellow']
  persons = [
    {name : "Roger"},
    {name : "Federer"}
  ]
  public changeColor : "yellow";
  getColor(country){
    switch(country){
      case "switzerland":
         return 'brown';
      case "West Indies":
          return 'green';
      case "India":
         return 'blue';
      case "spain":
         return 'violet'
    }
  }
  people : any[] = [
    {
      "name" :"Roger Federer",
      "country":"switzerland"
    },
    {
      "name" :"Brian Lara",
      "country":"West Indies"
    },
    {
      "name" :"Virat Kohli",
      "country":"India"
    },
    {
      "name" :"Rafael Nadal",
      "country":"spain"
    },
  ]
}
