import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMaisEmprestadosComponent } from './card-mais-emprestados.component';

describe('CardMaisEmprestadosComponent', () => {
  let component: CardMaisEmprestadosComponent;
  let fixture: ComponentFixture<CardMaisEmprestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMaisEmprestadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMaisEmprestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
