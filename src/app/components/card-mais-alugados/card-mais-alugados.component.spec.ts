import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMaisAlugadosComponent } from './card-mais-alugados.component';

describe('CardMaisAlugadosComponent', () => {
  let component: CardMaisAlugadosComponent;
  let fixture: ComponentFixture<CardMaisAlugadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMaisAlugadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMaisAlugadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
