import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VMachine } from '../models/VM';
import { NgForm } from '@angular/forms';
import { HttpService } from '../services/http.service';




@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private router: Router,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
  ) { }


  public Vm: VMachine

  message: String = ""


  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);

    if (
      !form.value.ip
      ||
      !form.value.nom

      ||
      !form.value.systeme

      ||

      !form.value.etat


    ) {
      this.message = "<h5 class='text-red-600'>SVP  remplir tout les champs<h5> "
      return
    }

    else {

      this.httpService.add_vm(form.value)
        .then(res => {
          console.log(res)

          this.message = "<h5 class='text-green-600'>Enregistree avec success! Redirection...<h5> "


          setTimeout(() => {
            this.router.navigate(["/"]);
          }, 2000)



        })
        .catch(er => console.error(er))

    }


  }


  hanlde_add_vm(vm) {


  }


}
