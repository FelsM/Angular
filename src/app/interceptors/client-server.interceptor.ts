import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientServerService } from '../services/client-server.service';

@Injectable()
export class ClientServerInterceptor implements HttpInterceptor {
  constructor(private clientSreverService: ClientServerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.clientSreverService.checkPermission(true)) {
      return next.handle(request);
    } else {
      alert('Check permission');
    }
  }
}
