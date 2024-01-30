import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public loading = false;
  constructor(private router: Router) {}

  public categories = [
    {
      name: 'All',
      images: [
        {
          id: 1,
          path: 'portfolio/portfolio-1.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/port2.png' },
          ],
        },
        {
          id: 2,
          path: 'portfolio/portfolio-2.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
          ],
        },
        {
          id: 3,
          path: 'portfolio/portfolio-3.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
          ],
        },
        {
          id: 4,
          path: 'portfolio/portfolio-3.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
          ],
        },
        {
          id: 5,
          path: 'portfolio/portfolio-1.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
          ],
        },
        {
          id: 6,
          path: 'portfolio/portfolio-2.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
          ],
        },
        {
          id: 7,
          path: 'portfolio/portfolio-3.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
          ],
        },
        {
          id: 8,
          path: 'portfolio/portfolio-3.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
          ],
        },
        {
          id: 9,
          path: 'portfolio/portfolio-1.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
          ],
        },
        {
          id: 10,
          path: 'portfolio/portfolio-2.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
          ],
        },
        {
          id: 11,
          path: 'portfolio/portfolio-3.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
          ],
        },
        {
          id: 12,
          path: 'portfolio/portfolio-3.png',
          detailImages: [
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
            { detailPathImages: 'portfolio/portfolio-2.png' },
          ],
        },
      ],
      categoryHeading: 'All',
    },
    {
      name: 'Web Design',
      images: [
        { id: 13, path: 'portfolio/port1.jpg' },
        { id: 14, path: 'portfolio/portfolio-2.png' },
        { id: 15, path: 'portfolio/port3.png' },
      ],
      categoryHeading: 'Web design',
    },
    {
      name: 'Photography',
      images: [
        {
          id: 16,
          path: 'portfolio/port4.png',
          detailImages: [
            { detailPathImages: 'portfolio/port3.png' },
            { detailPathImages: 'portfolio/port3.png' },
            { detailPathImages: 'portfolio/port3.png' },
            { detailPathImages: 'portfolio/port3.png' },
          ],
        },
        { id: 17, path: '' },
        { id: 18, path: '' },
      ],
      categoryHeading: 'Photography',
    },
    {
      name: 'Graphic Designing',
      images: [
        { id: 19, path: '' },
        { id: 20, path: '' },
        { id: 21, path: '' },
      ],
      categoryHeading: 'Graphic Designing',
    },
  ];

  currentCategory: any = this.categories[0];

  ngOnInit(): void {}
  showCategory(category: any) {
    this.loading = true;
    setTimeout(() => {
      this.currentCategory = category;
      this.loading = false;
    }, 500);
  }
  gotoDetails(image: any) {
    const id = image.id;
    const detailImages = image.detailImages;
    const bgImage = image.path;
    this.router.navigate(['portfolioDetails', id], {
      state: {
        images: detailImages,
        bgImage,
      },
    });
  }
}
