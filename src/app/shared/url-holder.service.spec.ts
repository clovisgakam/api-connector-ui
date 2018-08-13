import { TestBed, inject } from '@angular/core/testing';

import { UrlHolderService } from './url-holder.service';

describe('UrlHolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlHolderService]
    });
  });

  it('should be created', inject([UrlHolderService], (service: UrlHolderService) => {
    expect(service).toBeTruthy();
  }));
});
