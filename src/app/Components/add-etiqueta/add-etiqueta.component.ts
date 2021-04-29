import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Tag } from 'src/app/models/Tag/tag.model';
import { EtiquetaService } from 'src/app/Servicios/EtiquetaServicio/etiqueta.service';

@Component({
  selector: 'app-add-etiqueta',
  templateUrl: './add-etiqueta.component.html',
  styleUrls: ['./add-etiqueta.component.scss']
})
export class AddEtiquetaComponent implements OnInit {

  nombreEtiqueta: any="";
  constructor(public dialogRef: MatDialogRef<AddEtiquetaComponent>,private tagService:EtiquetaService) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close();
  }

  addTag() {



      let tag={
        nombre:this.nombreEtiqueta,
        createdAt:new Date(),
        updateAt:new Date()
      }

      this.tagService.createTag(tag).subscribe(
        (response) => {
          this.dialogRef.close();


        },
        (error) => {





        }
      );
  }
}
