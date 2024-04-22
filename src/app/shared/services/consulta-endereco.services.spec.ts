import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ConsultaEnderecoServices } from './consulta-endereco.service';
describe('ConsultaEnderecoServices', () => {
  let service: ConsultaEnderecoServices;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultaEnderecoServices]
    });
    service = TestBed.inject(ConsultaEnderecoServices);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica se todas as solicitações foram feitas
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data from API via POST', () => {
    const dummyPosition = { lng: 10.0, lat: 20.0 };
    const dummyResponse = { address: 'Dummy Address' };

    service.consultaEndereco(dummyPosition).subscribe(response => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne('http://localhost:8080/geolocation');
    expect(req.request.method).toBe('POST');
    req.flush(dummyResponse);
  });

  it('should retrieve historical data from API via GET', () => {
    const pageNumber = 1;
    const pageSize = 10;
    const dummyResponse = [{}, {}, {}]; // Dummy response data

    service.getHistoricoConsultas(pageNumber, pageSize).subscribe(response => {
      expect(response.length).toBe(3); // Assuming dummy response has 3 items
    });

    const req = httpMock.expectOne(`http://localhost:8080/geolocation?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
