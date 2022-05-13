import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

// import { jokes } from './jokes-service/jokes';
import { JokesService } from './jokes-service/jokes.service';

export interface jokes {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:any=[];
  // datas: any = [];
  // user:jokes[]={};

  // user:any={};

  localItem:string;

  bestJoke: jokes[];
  notFunny: any = [];


  selectlist: any = [];
  addtolist = [{
    id: 0, name: "Best Jokes"
  }, {
    id: 1, name: "Not Funny Jokes"
  }]

  // data: any = [{ "id": 49, "type": "general", "setup": "Why do chicken coops only have two doors?", "punchline": "Because if they had four, they would be chicken sedans" }]


  constructor(private js: JokesService) {

   
    // this.bestJoke=JSON.parse(this.localItem);
    if(this.localItem==null){
      this.bestJoke=[];
    }else{
      this.bestJoke= JSON.parse(this.localItem);
    }
  }

  ngOnInit() {

    this.showData();
  }

  showData() {
    this.js.getJokes().subscribe((a) => {
      this.data = a;
      console.log("jokes", this.data);


    })
  }

  selected(item: any) {
    console.log(item.target.value);
    this.selectlist = item.target.value;

    if (item.target.value == 'bestJoke') {

      this.bestJoke.push(this.data);
      console.log("Best joke", this.bestJoke);
      const jsondata = JSON.stringify(this.bestJoke)
      localStorage.setItem('BestJokesdata', jsondata)
      // console.log("this is the best joke");
      alert("Joke added in Best Joke PlayList");

      console.log(this.bestJoke);



    } else {
      this.notFunny.push(this.data);
      console.log("Not Funny Joke");
      alert("This Joke added in Not Funny Joke PlayList")
    }

  }


}
