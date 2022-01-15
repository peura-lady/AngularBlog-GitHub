import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts?: Post[] = []
  pSub?: Subscription

  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    this.pSub = this.postService.getAll().subscribe( posts => {
      this.posts = posts
    })
  }

  remove(id: string) {
  }

// so memory leackage does not happen
  ngOnDestroy(){
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}
