import { TestBed } from '@angular/core/testing';

import { ProductosRESTService } from './productos-rest.service';

describe('ProductosRESTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductosRESTService = TestBed.get(ProductosRESTService);
    expect(service).toBeTruthy();
  });
});
