import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallhotelsComponent } from './getallhotels.component';

describe('GetallhotelsComponent', () => {
  let component: GetallhotelsComponent;
  let fixture: ComponentFixture<GetallhotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetallhotelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
