import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExpertoComponent } from './lista-experto.component';

describe('ListaExpertoComponent', () => {
  let component: ListaExpertoComponent;
  let fixture: ComponentFixture<ListaExpertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaExpertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExpertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
