import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private fire: AngularFirestore,
  ) { }

  public crear( conezion : string, data : any){
    return this.fire.collection(conezion).add(data);
  }

  public obtenerXId( conezion : string, id : string){
    return this.fire.collection(conezion).doc(id).snapshotChanges();
  }

  public obtenerXTodos( conezion : string){
    return this.fire.collection(conezion).snapshotChanges();
  }

  public actualizar( conezion : string, id : string, data : any){
    return this.fire.collection(conezion).doc(id).set(data);
  }

}
