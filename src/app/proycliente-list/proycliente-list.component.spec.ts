import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyclienteListComponent } from './proycliente-list.component';

describe('ProyclienteListComponent', () => {
  let component: ProyclienteListComponent;
  let fixture: ComponentFixture<ProyclienteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyclienteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyclienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
