import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfileSortieComponent } from './liste-profile-sortie.component';

describe('ListeProfileSortieComponent', () => {
  let component: ListeProfileSortieComponent;
  let fixture: ComponentFixture<ListeProfileSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProfileSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProfileSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
