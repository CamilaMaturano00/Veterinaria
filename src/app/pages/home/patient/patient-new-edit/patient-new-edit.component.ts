import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable, Observer } from 'rxjs';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-patient-new-edit',
  templateUrl: './patient-new-edit.component.html',
  styleUrls: ['./patient-new-edit.component.css']
})
export class PatientNewEditComponent implements OnInit {

  form: FormGroup;
  sexo = ['Hembra','Macho'];
  species = ['Perro','Gato','Conejo'];
  owners = ['Juan Diaz','Noelia López','Romina Brown'];
  loading = false;
  avatarUrl?: string;
  isLoading: boolean;
  isSaving: boolean;
  constructor(private msg: NzMessageService) { }

  ngOnInit() {
  }

  save(){

  }

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }
}
