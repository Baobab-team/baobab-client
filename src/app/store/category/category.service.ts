import { Injectable } from '@angular/core';
import { environment} from 'environments';
import { CoreService } from '@Services/core.service';
import { HttpClient } from '@angular/common/http';
import { Category } from '@Models/business.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CoreService  {

  constructor(
    private httpClient: HttpClient
  ) {
    super();
   }

   public getCategories(): Observable<Category[]>  {
     return this.httpClient.get<Category[]>(
      this.BASE_URL_API + '/' + environment.paths_api.categories
     );
   }

   public saveCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(
      this.BASE_URL_API + '/' + environment.paths_api.categories, category
    );
  }
}
