import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementUiComponent } from './element-ui.component';

describe('ElementUiComponent', () => {
  let component: ElementUiComponent;
  let fixture: ComponentFixture<ElementUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
