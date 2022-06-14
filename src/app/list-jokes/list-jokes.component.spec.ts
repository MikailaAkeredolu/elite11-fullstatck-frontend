import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJokesComponent } from './list-jokes.component';

describe('ListJokesComponent', () => {
  let component: ListJokesComponent;
  let fixture: ComponentFixture<ListJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
