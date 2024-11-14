import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmprestimosComponent } from './card-emprestimos.component';

describe('CardEmprestimosComponent', () => {
  let component: CardEmprestimosComponent;
  let fixture: ComponentFixture<CardEmprestimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEmprestimosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
