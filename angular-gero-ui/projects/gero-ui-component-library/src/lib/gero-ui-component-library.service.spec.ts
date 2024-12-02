import { TestBed } from '@angular/core/testing';

import { GeroUiComponentLibraryService } from './gero-ui-component-library.service';

describe('GeroUiComponentLibraryService', () => {
  let service: GeroUiComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeroUiComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
