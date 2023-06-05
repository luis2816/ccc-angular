import { TestBed } from '@angular/core/testing';

import { CompetitividadRegionalService } from './competitividad-regional.service';

describe('CompetitividadRegionalService', () => {
  let service: CompetitividadRegionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitividadRegionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
