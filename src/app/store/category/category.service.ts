import { Injectable } from '@angular/core';
import { environment} from '../../../environments';
import { CoreService } from '../../core/services';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models';

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
