import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VMachine } from '../models/VM';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }


  public Vm: VMachine


  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }

}
