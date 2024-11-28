import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesAlugadosComponent } from './filmes-alugados.component';

describe('FilmesAlugadosComponent', () => {
  let component: FilmesAlugadosComponent;
  let fixture: ComponentFixture<FilmesAlugadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmesAlugadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmesAlugadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
