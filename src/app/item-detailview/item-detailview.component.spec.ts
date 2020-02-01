import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailviewComponent } from './item-detailview.component';

describe('ItemDetailviewComponent', () => {
  let component: ItemDetailviewComponent;
  let fixture: ComponentFixture<ItemDetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
