import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReturnDialogComponent } from './movie-return-dialog.component';

describe('MovieReturnDialogComponent', () => {
  let component: MovieReturnDialogComponent;
  let fixture: ComponentFixture<MovieReturnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieReturnDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieReturnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
