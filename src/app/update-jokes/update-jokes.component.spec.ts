import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJokesComponent } from './update-jokes.component';

describe('UpdateJokesComponent', () => {
  let component: UpdateJokesComponent;
  let fixture: ComponentFixture<UpdateJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
