import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private intervalId: any;
  products: Product[] = [];

  constructor(private service: ProductsService) { }


  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res
    }, error => {
      alert(error)
    })
  }
  // .........................

  ngAfterViewInit() {
    this.startSliderRotation();
  }




  ngOnDestroy() {
    // Cleanup the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startSliderRotation() {
    this.intervalId = setInterval(() => {
      this.rotateSlider();
    }, 4000);
  }

  rotateSlider() {
    const slider = document.querySelector('.slider') as HTMLElement;
    const slides = slider.querySelectorAll('div');

    if (slides.length > 0) {
      const lastChild = slides[slides.length - 1].cloneNode(true) as HTMLElement;
      slider.removeChild(slides[slides.length - 1]);

      // Add last child to the beginning of the slider
      slider.insertBefore(lastChild, slider.firstChild);

      // Remove the 'firstSlide' class from all slides
      slides.forEach((slide) => {
        slide.classList.remove('firstSlide');
      });

      // Add 'firstSlide' class to the new first slide
      lastChild.classList.add('firstSlide');
    }
  }
  // .........................
  submit() {
    console.log('submit clicked');
    alert("Your message has been sent successfully")
  }
}
