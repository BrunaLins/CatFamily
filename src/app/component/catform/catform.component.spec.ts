import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatformComponent } from './catform.component';

describe('CatformComponent', () => {
  let component: CatformComponent;
  let fixture: ComponentFixture<CatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
