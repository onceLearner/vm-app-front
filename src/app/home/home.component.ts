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

  public isConnected = Boolean(JSON.parse(window.localStorage.getItem("isConnected"))) || false




  handle_connect(flag: Boolean) {



    this.isConnected = !flag
    window.localStorage.setItem("isConnected", `${!flag}`)

  }


  hanlde_modify_state(ip: string, etat: boolean) {

    if (etat) {
      if (confirm("voulez-vous vraiment arreter la machine ?")) {

        this.httpService.modify_vm(ip, etat)
          .then(res => {
            console.log(res)


            // update the list
            this.httpService.get_all_VMS()
              .then(res => {
                console.log({ res })
                this.vms = res.data

              })
              .catch(err => console.error(err))
          })
          .catch(er => console.error(er))

      }

    }
    else {
      this.httpService.modify_vm(ip, etat)
        .then(res => {
          console.log(res)


          this.httpService.get_all_VMS()
            .then(res => {
              console.log({ res })
              this.vms = res.data

            })
            .catch(err => console.error(err))

        })
        .catch(er => console.error(er))

    }


  }





  ngOnInit(): void {


    this.httpService.get_all_VMS()
      .then(res => {
        console.log({ res })
        this.vms = res.data

      })
      .catch(err => console.error(err))





  }



}
