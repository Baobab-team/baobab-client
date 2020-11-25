import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'environments';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],

    });
  }

  onSubmit(){
    // const mailchimp = require("mailchimp-transactional")(
    //   environment.mailApiKey
    // );

    //  // stop here if form is invalid
    // if (this.contactForm.invalid) {
    //   return;
    // }
    
    // const email = this.contactForm.get('email').value;
    // const name = this.contactForm.get('name').value;
    // const subject = this.contactForm.get('subject').value;
    // const message = this.contactForm.get('message').value;

    // const messageObj = {
    //   from_email: email,
    //   subject: subject,
    //   text: message + "FROM:" +  name,
    //   to: [
    //     {
    //       email: "contact@lesfruitsdubaobab.com",
    //       type: "to"
    //     }
    //   ]
    // };
    
    // async function run() {
    //   const response = await mailchimp.messages.send({
    //     messageObj
    //   });
    //   console.log(response);
    // }
    // run();
  }
}
