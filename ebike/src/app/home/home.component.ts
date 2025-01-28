import { Component, OnInit, AfterViewInit } from '@angular/core';
import Lottie from 'lottie-web';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  bikeAnimationPath = 'assets/bike-animation.json';
  animation: any;

  ngOnInit(): void {
    // Code d'initialisation si nécessaire
  }

  ngAfterViewInit(): void {
    const lottieContainer = document.getElementById('lottie');
    if (lottieContainer) {
      this.animation = Lottie.loadAnimation({
        container: lottieContainer,
        path: this.bikeAnimationPath,
        renderer: 'svg',
        loop: true,
        autoplay: true,
      });
    } else {
      console.error('Lottie container not found!');
    }
  }
}
