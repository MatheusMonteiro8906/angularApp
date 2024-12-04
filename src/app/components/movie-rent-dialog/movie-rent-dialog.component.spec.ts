import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRentDialogComponent } from './movie-rent-dialog.component';

describe('MovieRentDialogComponent', () => {
  let component: MovieRentDialogComponent;
  let fixture: ComponentFixture<MovieRentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieRentDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieRentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
