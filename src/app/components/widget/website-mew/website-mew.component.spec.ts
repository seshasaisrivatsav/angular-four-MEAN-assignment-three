import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteMewComponent } from './website-mew.component';

describe('WebsiteMewComponent', () => {
  let component: WebsiteMewComponent;
  let fixture: ComponentFixture<WebsiteMewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteMewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteMewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
