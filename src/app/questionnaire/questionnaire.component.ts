import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent {
  questionnaireForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.questionnaireForm = this.fb.group({
      name: ['', Validators.required],
      fuel: ['', Validators.required],
      price: ['', Validators.required],
      transmission: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.questionnaireForm.valid) {
      const preferences = this.questionnaireForm.value;
      this.router.navigate(['/results'], { queryParams: preferences });
    }
  }
}
