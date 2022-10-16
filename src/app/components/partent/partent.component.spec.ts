import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartentComponent } from './partent.component';

describe('PartentComponent', () => {
  let component: PartentComponent;
  let fixture: ComponentFixture<PartentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
