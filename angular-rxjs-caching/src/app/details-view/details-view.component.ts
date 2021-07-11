import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
})
export class DetailsViewComponent implements OnInit {
  public beers: any[];
  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.httpService.getBeerListNew().subscribe((res) => (this.beers = res));
  }

  refreshData(): void {
    this.httpService
      .getDataWithShareReply()
      .subscribe((res) => (this.beers = res));
  }
}
