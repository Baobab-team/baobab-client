import { Injectable } from '@angular/core';
import { Const } from 'environments/const';
import { CoreService } from '@Services/core.service';
import { HttpClient } from '@angular/common/http';
import { Category, BusinessSuggestion } from '@Models/business.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessSuggestionService extends CoreService  {

  constructor(
    private httpClient: HttpClient
  ) {
    super();
   }

   public getBusinessSuggestions(): Observable<BusinessSuggestion[]>  {
     return this.httpClient.get<BusinessSuggestion[]>(
      this.BASE_URL_API + '/' + Const.paths_api.business_suggestions
     );
   }

   public saveBusinessSuggestions(businessSuggestion: BusinessSuggestion): Observable<BusinessSuggestion> {
    return this.httpClient.post<BusinessSuggestion>(
      this.BASE_URL_API + '/' + Const.paths_api.business_suggestions,
      businessSuggestion
    );
  }
}
