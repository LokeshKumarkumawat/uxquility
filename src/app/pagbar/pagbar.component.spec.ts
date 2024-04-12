import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagbarComponent } from './pagbar.component';

describe('PagbarComponent', () => {
  let component: PagbarComponent;
  let fixture: ComponentFixture<PagbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
