import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-generator';

  passLength: number = 10;
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  generatedPassword: string = '';

  onGeneratePassword() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let validChars = '';

    if (this.useLetters) {
      validChars += letters;
    }

    if (this.useNumbers) {
      validChars += numbers;
    }

    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPasswordResult = '';

    if (validChars.length === 0) {
      alert('Please select at least one character type!');
      return;
    }

    for (let i = 0; i < this.passLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPasswordResult += validChars[randomIndex];
    }
    this.generatedPassword = generatedPasswordResult;
  }


}
