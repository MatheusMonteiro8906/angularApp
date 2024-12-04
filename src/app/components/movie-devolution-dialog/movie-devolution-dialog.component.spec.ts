import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDevolutionDialogComponent } from './movie-devolution-dialog.component';

describe('MovieDevolutionDialogComponent', () => {
  let component: MovieDevolutionDialogComponent;
  let fixture: ComponentFixture<MovieDevolutionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDevolutionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieDevolutionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
