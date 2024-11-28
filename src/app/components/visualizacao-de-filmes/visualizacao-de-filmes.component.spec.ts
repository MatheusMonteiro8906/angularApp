import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoDeFilmesComponent } from './visualizacao-de-filmes.component';

describe('VisualizacaoDeFilmesComponent', () => {
  let component: VisualizacaoDeFilmesComponent;
  let fixture: ComponentFixture<VisualizacaoDeFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizacaoDeFilmesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizacaoDeFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
