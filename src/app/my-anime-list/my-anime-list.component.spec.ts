import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnimeListComponent } from './my-anime-list.component';

describe('MyAnimeListComponent', () => {
  let component: MyAnimeListComponent;
  let fixture: ComponentFixture<MyAnimeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAnimeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAnimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
