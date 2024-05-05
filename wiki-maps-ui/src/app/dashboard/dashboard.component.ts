import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WikipediaViewerComponent } from '../wikipedia-viewer/wikipedia-viewer.component';
import { WikipediaService } from '../service/wikipedia.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, WikipediaViewerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  implements OnInit {
  randomTopic: any;

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit() {
    this.getRandomArticle();
  }

  getRandomArticle() {
    this.wikipediaService.getRandomTopic().subscribe((data: any) => {
      this.randomTopic = data.query.random[0].title;
    });
  }
}