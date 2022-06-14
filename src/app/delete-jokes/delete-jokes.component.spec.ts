import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJokesComponent } from './delete-jokes.component';

describe('DeleteJokesComponent', () => {
  let component: DeleteJokesComponent;
  let fixture: ComponentFixture<DeleteJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
