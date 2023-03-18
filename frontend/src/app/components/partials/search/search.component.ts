import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm = '';

  constructor(activateRoute: ActivatedRoute, private router: Router) {
    activateRoute.params.subscribe((params) => {
      if (params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }

  search(term: string) {
    if (term) {
      this.router.navigateByUrl('/search/' + term);
    } else if (term == '') {
      this.router.navigateByUrl(term);
    }
  }
}
