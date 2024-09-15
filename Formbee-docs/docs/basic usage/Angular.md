---
sidebar_position: 4
title: Angular
---

# Angular

The follow is an example of how to use FormBee in an Angular app with comments to annotate the code.


#### First add the provideHttpClient module to your app.config.ts file:

```ts title="app.config.ts"
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]
};
```



#### Then add the the logic for your form submission in your app.component.ts file:
```ts title="app.component.ts"
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contactForm: FormGroup;  // initialize the contactForm form group
  messageElement: HTMLElement | null = null;  // Store a reference to the message HTML element
  emailElement: HTMLElement | null = null;  // Store a reference to the email HTML element

  constructor(
    private fb: FormBuilder,  // Injects FormBuilder for creating forms
    private http: HttpClient,  // Injects HttpClient for making HTTP requests
    private elRef: ElementRef<HTMLElement>,  // Injects ElementRef to access DOM elements
    private renderer: Renderer2  // Injects Renderer2 to safely interact with the DOM
  ) {
    // Initializes the form with 'email' and 'message' fields, setting validation rules
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // 'email' field with required and email format validation
      message: ['', Validators.required]  // 'message' field with required validation
    });
  }

  ngOnInit(): void {
    // Gets references to HTML elements with ids 'message' and 'email'
    this.messageElement = this.elRef.nativeElement.querySelector('#message');
    this.emailElement = this.elRef.nativeElement.querySelector('#email');
  }

  onSubmit(): void {

    // Sends a POST request with the form data to the specified endpoint
    this.http.post('https://api.formbee.dev/[api-key]', this.contactForm.value)
      .subscribe(response => {
        // Logs the server's response to the console
        console.log(response);
      });
  }
}
```

#### Finally, add the HTML template for your form in your app.component.html file:
```html title="app.component.html"
<h1>FormBee Angular Example</h1>
<form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
  <label for="email">Email</label>
  <input type="email" id="email" formControlName="email">
  <label for="message">Message</label>
  <textarea id="message" formControlName="message"></textarea>
  <button type="submit">Submit</button>
</form>
```