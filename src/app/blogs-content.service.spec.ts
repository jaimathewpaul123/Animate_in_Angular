import { TestBed, inject } from '@angular/core/testing';

import { BlogsContentService } from './blogs-content.service';

describe('BlogsContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogsContentService]
    });
  });

  it('should be created', inject([BlogsContentService], (service: BlogsContentService) => {
    expect(service).toBeTruthy();
  }));
});
