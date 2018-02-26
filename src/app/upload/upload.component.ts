import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile } from 'ngx-file-drop';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public files: UploadFile[] = [];
  images = [];

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const file of event.files) {
      file.fileEntry.file(info => {
        // console.log(info);
        const reader = new FileReader();
        reader.readAsDataURL(info);
        reader.onload = function () {
          console.log(typeof this.images);
          /* this.images ? this.images.concat(reader.result) : */this.images = reader.result;
          console.log(typeof this.images);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      });
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
