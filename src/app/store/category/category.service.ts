import { Injectable } from '@angular/core';
import { environment} from '../../../environments';
import { CoreService } from '../../core/services';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/core/models';
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
      this.BASE_URL_API + '/' + environment.paths_api.list_category
     );
   }
}
