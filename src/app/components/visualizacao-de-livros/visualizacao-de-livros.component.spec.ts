import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoDeLivrosComponent } from './visualizacao-de-livros.component';

describe('VisualizacaoDeLivrosComponent', () => {
  let component: VisualizacaoDeLivrosComponent;
  let fixture: ComponentFixture<VisualizacaoDeLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizacaoDeLivrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizacaoDeLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
