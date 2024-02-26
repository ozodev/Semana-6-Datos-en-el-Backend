import { Component } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './app-toasts.component.html',
  styleUrls: ['./app-toasts.component.css']
})
export class AppToastsComponent {
  constructor(public toastService: ToastService) {}

  trackToast(index:any, toast:any) {
    return toast ? toast.id : undefined;
  }
}
