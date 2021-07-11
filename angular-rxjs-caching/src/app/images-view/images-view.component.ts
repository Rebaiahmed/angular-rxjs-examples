import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-images-view',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.scss'],
})
export class ImagesViewComponent implements OnInit {
  public beers: any[];
  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.getBeers();
  }

  private getBeers() {
    this.httpService.getBeerListNew().subscribe((res) => (this.beers = res));
  }

  refreshData(): void {
    this.getBeers();
  }
}
