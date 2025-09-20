import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  model: ContactForm = { name: '', email: '', message: '' };
  submitting = false;
  submitted = false;
  error = '';

  constructor(private http: HttpClient) {}

  submit() {
    this.error = '';
    this.submitting = true;
    this.http.post('/api/contact', this.model).subscribe({
      next: () => { this.submitted = true; this.submitting = false; },
      error: (err) => { this.error = 'Failed to send message'; this.submitting = false; console.error(err); }
    });
  }
}
