import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtsplComponent } from './ntspl.component';

describe('NtsplComponent', () => {
  let component: NtsplComponent;
  let fixture: ComponentFixture<NtsplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtsplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NtsplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
