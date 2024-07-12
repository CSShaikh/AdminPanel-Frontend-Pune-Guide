import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecabComponent } from './createcab.component';

describe('CreatecabComponent', () => {
  let component: CreatecabComponent;
  let fixture: ComponentFixture<CreatecabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatecabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
