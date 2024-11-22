import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisEmprestadosComponent } from './mais-emprestados.component';

describe('MaisEmprestadosComponent', () => {
  let component: MaisEmprestadosComponent;
  let fixture: ComponentFixture<MaisEmprestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisEmprestadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaisEmprestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
