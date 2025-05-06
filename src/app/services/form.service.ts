import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private firestore: Firestore) {}

  submitForm(data: any) {
    const formRef = collection(this.firestore, 'formularios');
    return addDoc(formRef, data);
  }
}
