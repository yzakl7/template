import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts = [
    {
      image: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&h=350',
      title: 'titulo 1',
      subtitle: 'subtitulo 1',
      description: 'lorem ipsum dolor si amet bla bla bla etc.. etc.. etc...'
    },
    {
      image: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350',
      title: 'Chapter 4: Hoisting',
      subtitle: 'Chicken Or The Egg?',
      description: "There's a temptation to think that all of the code you see in a JavaScript program is interpreted line-by-line, top-down in order, as the program executes. While that is substantially true, there's one part of that assumption which can lead to incorrect thinking about your program.Chicken Or The Egg?"
    },
    {
      image: 'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      title: 'The Compiler Strikes Again',
      subtitle: "So, what's going on here?" ,
      description: 'To answer this question, we need to refer back to Chapter 1, and our discussion of compilers. Recall that the Engine actually will compile your JavaScript code before it interprets it. Part of the compilation phase was to find and associate all declarations with their appropriate scopes. Chapter 2 showed us that this is the heart of Lexical Scope.'
    },
    {
      image: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/04/jonathan-martin-brunate-lead-image_0.jpg',
      title: 'titulo 4',
      subtitle: 'subtitulo 4',
      description: 'lorem ipsum dolor si amet bla bla bla etc.. etc.. etc...'
    },

  ];
  user = [{
    image: 'http://assets.blabbermouth.net/media/robhalfordpromo2014solo_638.jpg',
    subtitle: 'Robert John Arthur Halford',
    description: "(born 25 August 1951) is an English singer and songwriter, who is best known as the lead vocalist for the Grammy Award-winning heavy metal band Judas Priest and famed for his powerful wide-ranging voice."
  }];

  list = [
    {
      image: '',
      title: '',
      text: ''
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}








