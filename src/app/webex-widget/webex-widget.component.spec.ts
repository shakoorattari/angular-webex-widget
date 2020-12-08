import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebexWidgetComponent } from './webex-widget.component';

describe('WebexWidgetComponent', () => {
  let component: WebexWidgetComponent;
  let fixture: ComponentFixture<WebexWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebexWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebexWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
