import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './Models/Pagination';
import { IProduct } from './Models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  title = 'Product Store';
  products: IProduct[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void
  {
    this.http.get('https://localhost:5001/api/products').subscribe((response: IPagination) =>
    {
      this.products = response.data;
    },error =>
    {
      console.log(error);

    });
  }
}
