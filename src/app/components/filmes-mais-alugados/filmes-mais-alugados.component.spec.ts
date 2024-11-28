import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesMaisAlugadosComponent } from './filmes-mais-alugados.component';

describe('FilmesMaisAlugadosComponent', () => {
  let component: FilmesMaisAlugadosComponent;
  let fixture: ComponentFixture<FilmesMaisAlugadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmesMaisAlugadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmesMaisAlugadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
