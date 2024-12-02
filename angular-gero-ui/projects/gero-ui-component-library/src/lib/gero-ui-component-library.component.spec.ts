import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeroUiComponentLibraryComponent } from './gero-ui-component-library.component';

describe('GeroUiComponentLibraryComponent', () => {
  let component: GeroUiComponentLibraryComponent;
  let fixture: ComponentFixture<GeroUiComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeroUiComponentLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeroUiComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
