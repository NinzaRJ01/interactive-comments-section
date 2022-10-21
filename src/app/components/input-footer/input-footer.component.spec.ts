import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFooterComponent } from './input-footer.component';

describe('InputFooterComponent', () => {
  let component: InputFooterComponent;
  let fixture: ComponentFixture<InputFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
