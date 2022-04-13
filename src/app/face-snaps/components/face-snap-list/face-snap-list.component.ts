import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { map, filter, tap, takeUntil } from 'rxjs/operators';
import { interval, Observable, pipe, Subject } from 'rxjs';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  title = 'snapFace';
  
  faceSnaps$!: Observable<FaceSnap[]>;
  
 
  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {         
      this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }
    
   
    
    

}
