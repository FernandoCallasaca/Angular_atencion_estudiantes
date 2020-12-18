import { Component, ViewChild, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drag-grop-files',
  templateUrl: './drag-grop-files.component.html',
  styleUrls: ['./drag-grop-files.component.css']
})
export class DragGropFilesComponent implements OnInit {

  @ViewChild('fileDropRef', { static: false }) fileDropEl: ElementRef;

  // Agregamos un input para que este componente reciva un arreglo vació
  @Input() files: any[] = [];

  // Agregamos un output para que cada vez que se agregue un archivo lo envie a nuestros componente trámite
  @Output() eventoArchivos: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
    // Si eliminamos un archivo tenemos que hacerle saber a nuestro componente padre
    // Para ello emitimos el evento mandándole la nueva lista de archivos
    this.eventoArchivos.emit(this.files);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);

      // Aquí emitimos al output cada cambio que sucede al agregar un nuevo archivo a files
      this.eventoArchivos.emit(this.files);
    }
    this.fileDropEl.nativeElement.value = '';
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  // verFiles() {
  //   console.log('Files');
  //   console.log(this.files);
  // }
}
