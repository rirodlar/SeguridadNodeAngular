import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProductosEdicionComponent } from './formulario-productos-edicion.component';

describe('FormularioProductosEdicionComponent', () => {
  let component: FormularioProductosEdicionComponent;
  let fixture: ComponentFixture<FormularioProductosEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioProductosEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProductosEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
