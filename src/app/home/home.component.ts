import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VMachine } from '../models/VM';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {


  }

  public vms: Array<VMachine> | undefined

  public isConnected = false




  arreter_vm(ip: string) {

    let response = confirm("voulez-vous vraiment arreter la machine ?")
    if (response) {
      this.vms.find(item => item.ip == ip).etat = false
    }
  }

  demarrer_vm(ip: string) {

    this.vms.find(item => item.ip == ip).etat = true


  }

  handle_connect(flag: Boolean) {

    this.isConnected = !flag

  }

  ngOnInit(): void {
    this.vms = [{
      nom: "vm1",
      ip: "10.010",
      systeme: "linux",
      etat: true
    },

    {
      nom: "vm3",
      ip: "10.0102",
      systeme: "linux",
      etat: false
    }
      ,
    {
      nom: "vm2",
      ip: "10.0103",
      systeme: "Windows",
      etat: true
    }]
  }



}
