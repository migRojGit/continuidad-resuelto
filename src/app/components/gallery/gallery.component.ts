import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { responsiveOptionsResources } from '../../../assets/resources/sistem-resources';
import { PhotoResource } from '../../core/interfaces/resources/photo-resource.interface';
import { PhotoService } from '../../core/services/photo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  public images         !: PhotoResource[];
  public visible         : boolean = true;
  public responsiveOptions   = responsiveOptionsResources;

  constructor(
    private galleriaService : PhotoService,
    private router          : Router
  ) {}

  async ngOnInit(): Promise<void> {
   this.images = await this.galleriaService.getImages()
  }

  onCaptureDisplay(v: boolean): void {
    this.router.navigate(['']);
  }
}
