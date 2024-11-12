import { Component, Renderer2, RendererFactory2, Injectable  } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})

export class PageNotFoundComponent {

  private renderer: Renderer2;
  
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  
  setOverflowHidden() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  resetOverflow() {
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
}
