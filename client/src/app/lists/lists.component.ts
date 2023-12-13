import { Component } from '@angular/core';
import { MembersService } from '../_services/members.service';
import { Member } from '../_models/member';
import { Pagination } from '../_modules/pagination';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  members: Member[]|undefined;
  predicate = 'liked';
  pageNumber = 1;
  PageSize =5;
  pagination: Pagination |undefined

  constructor(private memberService: MembersService) {}
  ngOnInit():void {
    this.loadLikes();
  }

  loadLikes() {
    this.memberService.getLikes(this.predicate, this.pageNumber, this.PageSize).subscribe({
      next: response =>{
      this.members = response
      }
    })
  }

  pageChanged(event:any){
    if(this.pageNumber!==event.page){
      this.pageNumber = event.page;
      this.loadLikes();
    }
  }
}
