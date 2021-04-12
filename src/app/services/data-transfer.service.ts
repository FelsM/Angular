import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class DataTransferService extends StorageService {
  tranformXml(data: string): string {
    return data;
  }
}
