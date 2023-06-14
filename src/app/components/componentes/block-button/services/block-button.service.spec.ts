import { TestBed } from '@angular/core/testing';

import { BlockButtonService } from './block-button.service';

describe('BlockButtonService', () => {
  let service: BlockButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
