import { TestBed } from '@angular/core/testing';

import { ConsultaEnderecoServices } from './consulta-endereco.service';

describe('ConsultaEnderecoServicesTsService', () => {
  let service: ConsultaEnderecoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaEnderecoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
