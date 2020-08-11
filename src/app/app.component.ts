import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    letters = false;
    numbers = false;
    symbols = false;
    length = 0;
    password = "";

    onChangeLetters(){
      this.letters = !this.letters;
    }
    onChangeNumbers(){
      this.numbers = !this.numbers;
    }
    onChangeSymbols(){
      this.symbols = !this.symbols;
    }

    passwordLength = (e)=>{
     let value = parseInt(e);
     if(!isNaN(value))
     this.length = value;
    }

   
    showPassword() {
      const allLetters: string = "zxcvbnmasdfghjklqwertyuiop";
      const allNumbers: string = "1234567890";
      const allSymbols: string = "!@#$%^&*()-_+=";
  
      let passwordPool = "";
      if (this.letters){
        passwordPool += allLetters;
      }
      if (this.numbers){
        passwordPool += allNumbers;
      }
      if (this.symbols){
        passwordPool += allSymbols;
      }
        
      let generatedPassword = "";
      for (let i = 0; i < this.length; i++) {
        const index = Math.floor(Math.random() * passwordPool.length);
        generatedPassword += passwordPool[index];
        
      }
      this.password = generatedPassword;
    }

}
