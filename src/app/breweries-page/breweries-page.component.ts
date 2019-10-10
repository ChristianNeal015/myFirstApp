import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { HttpService } from '../http.service';

@Component({
  selector: 'app-breweries-page',
  templateUrl: './breweries-page.component.html',
  styleUrls: ['./breweries-page.component.scss']
})
export class BreweriesPageComponent implements OnInit {
  brewery:string ;
  location:string;
  url:string;


  constructor(private route: ActivatedRoute, private _http: HttpService) { }

  ngOnInit() {
    this.getbrews();

  }
  getbrews(): void {
    this.brewery = this.route.snapshot.paramMap.get('brewery');
    switch(this.brewery){
      case 'Avondale Brewing Co':
      this.location = 'United States';
      this.url = 'http://www.avondalebrewing.com';
      break;
      case 'Band of Brothers Brewing Company':
      this.location = 'United States';
      this.url = 'http://www.bandofbrosbrewing.com';
      break;
      case 'Trim Tab Brewing':
      this.location = 'United States';
      this.url = 'http://www.trimtabbrewing.com';
      break;
      case 'Yellowhammer Brewery':
      this.location = 'United States';
      this.url = 'http://www.yellowhammerbrewery.com';
      break;
      case 'Bearpaw River Brewing Co':
      this.location = 'United States';
      this.url = 'http://bearpawriverbrewing.com';
      break;
      case 'King Street Brewing Co':
      this.location = 'United States';
      this.url = 'http://www.kingstreetbrewing.com';
      break;
      case '1912 Brewing':
      this.location = 'United States';
      this.url = 'http://www.1912brewing.com';
      break;
      case 'Bad Water Brewing':
      this.location = 'United States';
      this.url = 'http://www.badwaterbrewing.com';
      break;
      case 'BJs Restaurant & Brewery - Chandler':
      this.location = 'United States';
      this.url = 'http://www.bjsrestaurants.com';
      break;
      case 'BlackRock Brewers':
      this.location = 'United States';
      this.url = 'http://www.brb.beer';
      break;
      case 'Dragoon Brewing Co':
      this.location = 'United States';
      this.url = 'http://www.dragoonbrewing.com';
      break;
      case 'Grand Canyon Brewing Company':
      this.location = 'United States';
      this.url = 'http://www.grandcanyonbrewingco.com';
      break;
      case 'Grand Canyon Brewing Company':
      this.location = 'United States';
      this.url = 'http://www.grandcanyonbrewingco.com';
      break;
      case 'Mudshark Brewing Co':
      this.location = 'United States';
      this.url = 'http://www.mudsharkbrewingco.com';
      break;
      case 'Richter Aleworks':
      this.location = 'United States';
      this.url = 'http://www.richteraleworks.com';
      break;
      case 'SanTan Brewing Co':
      this.location = 'United States';
      this.url = 'http://www.santanbrewing.com';
      break;
      case 'State 48 Brewery':
      this.location = 'United States';
      this.url = 'https://www.state48brewery.com';
      break;
      case 'Wren House Brewing Company':
      this.location = 'United States';
      this.url = 'http://www.wrenhousebrewing.com';
      break;
      case 'Brick Oven Pizza Co / Brick & Forge Brewing':
      this.location = 'United States';
      this.url = 'http://www.brickovenpizzacompany.com';
      break;
      case 'Diamond Bear Brewing Co':
      this.location = 'United States';
      this.url = 'http://www.diamondbear.com';
      break;
      case 'Lost Forty Brewing':
      this.location = 'United States';
      this.url = 'http://www.lost40brewing.com/';
      break;
    }
  }

}
