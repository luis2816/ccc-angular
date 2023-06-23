import { TestBed } from '@angular/core/testing';

import { RankingEmpresaService } from './ranking-empresa.service';

describe('RankingEmpresaService', () => {
  let service: RankingEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
