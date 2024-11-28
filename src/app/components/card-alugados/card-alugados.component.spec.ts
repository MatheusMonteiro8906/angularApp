import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlugadosComponent } from './card-alugados.component';

describe('CardAlugadosComponent', () => {
  let component: CardAlugadosComponent;
  let fixture: ComponentFixture<CardAlugadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAlugadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAlugadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
