import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallplacesComponent } from './getallplaces.component';

describe('GetallplacesComponent', () => {
  let component: GetallplacesComponent;
  let fixture: ComponentFixture<GetallplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetallplacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
