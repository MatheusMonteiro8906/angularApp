import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilmesComponent } from './card-filmes.component';

describe('CardFilmesComponent', () => {
  let component: CardFilmesComponent;
  let fixture: ComponentFixture<CardFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFilmesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
