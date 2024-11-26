import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeMembrosComponent } from './registro-de-membros.component';

describe('RegistroDeMembrosComponent', () => {
  let component: RegistroDeMembrosComponent;
  let fixture: ComponentFixture<RegistroDeMembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroDeMembrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroDeMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
