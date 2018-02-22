import { TestBed, inject } from '@angular/core/testing';
import { ColaboratorService } from './colaborator.service';

describe('ColaboratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColaboratorService]
    });
  });

  it('should be created', inject([ColaboratorService], (service: ColaboratorService) => {
    expect(service).toBeTruthy();
  }));
});
