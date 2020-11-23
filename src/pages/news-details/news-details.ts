import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {
  news: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = this.navParams.get('news');
  }

  ionViewWillEnter() {
    
    console.log('ionViewDidLoad NewsDetailsPage');
  }

}