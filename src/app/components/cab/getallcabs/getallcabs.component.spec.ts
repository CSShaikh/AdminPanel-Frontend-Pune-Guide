import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallcabsComponent } from './getallcabs.component';

describe('GetallcabsComponent', () => {
  let component: GetallcabsComponent;
  let fixture: ComponentFixture<GetallcabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetallcabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallcabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
