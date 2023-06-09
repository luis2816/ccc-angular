import { TestBed } from '@angular/core/testing';

import { CardSideImgService } from './card-side-img.service';

describe('CardSideImgService', () => {
  let service: CardSideImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardSideImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
