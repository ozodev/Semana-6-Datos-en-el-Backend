import { Injectable } from '@angular/core';

export interface Toast {
	id?: number;
	mensaje: string;
	classname?: string;
	delay?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
	toasts: Toast[] = [];

	show(toast: Toast) {
		toast.id = Date.now();
		this.toasts.push(toast);
		setTimeout(() => this.remove(toast), toast.delay ?? 5000);
	}

	remove(toast: Toast) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}