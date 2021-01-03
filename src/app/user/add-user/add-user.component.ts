import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  title = 'Ajouter un Utilisateur';
  // uploadedFiles: any[] = [];
  // // tslint:disable-next-line:typedef
  // onUpload(event) {
  //   for (const file of event.files) {
  //     this.uploadedFiles.push(file);
  //   }
  //
  //   this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  // }
  // constructor( private messageService: MessageService) { }

  ngOnInit(): void {
  }

}
