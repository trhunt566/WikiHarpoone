import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipediaViewerComponent } from './wikipedia-viewer.component';

describe('WikipediaViewerComponent', () => {
  let component: WikipediaViewerComponent;
  let fixture: ComponentFixture<WikipediaViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikipediaViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WikipediaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
