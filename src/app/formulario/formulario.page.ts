import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, NgIf, NgFor],
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss']
})
export class FormularioPage {
  formData = {
    nombre: '',
    apellido: '',
    email: '',
    fechaNacimiento: '',
    genero: '',
    intereses: [] as string[],
    comentario: '',
    acepta: false
  };

  interesesOptions = ['Deporte', 'Música', 'Tecnología', 'Arte'];

  constructor(private formService: FormService) {}

  submitForm() {
    if (this.formData.acepta) {
      this.formService.submitForm(this.formData).then(() => {
        alert('Formulario enviado correctamente');
        this.formData = {
          nombre: '',
          apellido: '',
          email: '',
          fechaNacimiento: '',
          genero: '',
          intereses: [],
          comentario: '',
          acepta: false
        };
      });
    } else {
      alert('Debes aceptar los términos.');
    }
  }
}
