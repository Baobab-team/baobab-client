import { Injectable } from '@angular/core';
import { Const } from 'environments/const';
import { CoreService } from '@Services/core.service';
import { HttpClient } from '@angular/common/http';
import { Category } from '@Models/business.model';
import { Observable } from 'rxjs';
import { CategoryFilters } from '@Models/search.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CoreService  {

  constructor(
    private httpClient: HttpClient
  ) {
    super();
   }

   public getCategories(filters: CategoryFilters): Observable<Category[]>  {
     return this.httpClient.get<Category[]>(
      this.BASE_URL_API + '/' + Const.paths_api.categories,
      {
        params: this.toHttpParams(filters)
      }
     );
   }

   public saveCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(
      this.BASE_URL_API + '/' + Const.paths_api.categories, category
    );
  }
}
