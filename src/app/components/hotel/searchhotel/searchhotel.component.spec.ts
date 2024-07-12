import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchhotelComponent } from './searchhotel.component';

describe('SearchhotelComponent', () => {
  let component: SearchhotelComponent;
  let fixture: ComponentFixture<SearchhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchhotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
