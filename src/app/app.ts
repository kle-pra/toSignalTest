import { Component, inject, Injector, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  #appService = inject(AppService);
  #injector = inject(Injector);

  users = toSignal(this.#appService.getUsers());
  posts: any;

  ngOnInit(): void {
    this.posts = toSignal(this.#appService.getPosts(), {
      injector: this.#injector,
      initialValue: [],
    });
  }
}
