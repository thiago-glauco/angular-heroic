import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-file-upload-test',
  templateUrl: './file-upload-test.component.html',
  styleUrls: ['./file-upload-test.component.css']
})
export class FileUploadTestComponent implements OnInit {
  imgSrc;
  constructor( private storage: AngularFireStorage) { }

  ngOnInit() {
  }
  uploadFile($event) {
    const file = event.target.files[0];
    console.dir(file);
    const ref = this.storage.ref('files/test');
    console.dir(ref);
    const uploadMonitor = ref.put(file);
    ref.getDownloadURL().subscribe((result) => {
      this.imgSrc = result; 
      console.log("downloadURL => " +   JSON.stringify(result));
    })
     
      
  }

}