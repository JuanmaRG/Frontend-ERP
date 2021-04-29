import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtiquetaComponent } from './add-etiqueta.component';

describe('AddEtiquetaComponent', () => {
  let component: AddEtiquetaComponent;
  let fixture: ComponentFixture<AddEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEtiquetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
