import { TestBed } from '@angular/core/testing';

import { BusinessSuggestionService } from '../../features/business/suggestions/business-suggestion.service';
import { HttpClientModule } from '@angular/common/http';

describe('BusinessService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: BusinessSuggestionService = TestBed.get(BusinessSuggestionService);
    expect(service).toBeTruthy();
  });
});
