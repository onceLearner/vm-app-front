import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { VMachine } from '../models/VM';
import { VM_API } from '../Globals';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }




  get_all_VMS() {
    return this.http.get<Array<VMachine>>(VM_API + "/vms").toPromise()
      .then((res: any) => res).catch(err => console.log(err))

  }

  modify_vm(ip: string, etat: boolean) {
    console.log({ ip, etat })
    return this.http.put<any>(VM_API + "/vms/" + ip, { etat: !etat }).toPromise()
      .then((res: any) => res).catch(err => console.log(err))

  }


  add_vm(vm: VMachine) {
    return this.http.post<any>(VM_API + "/vms", vm).toPromise()
      .then((res: any) => res).catch(err => console.log(err))

  }


}
