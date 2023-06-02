import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TypePosts } from '../../types/post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  constructor(private postService : PostService,private activatedRoute : ActivatedRoute) { }
  slug!:string
  ngOnInit(): void {
    this.slug = this.activatedRoute.snapshot.params['slug']
    // console.log(this.slug)
    this.activatedRoute.params.subscribe((params: Params) => {
      const slug = params['slug'] 
      this.GetPostBySlug(slug)
      console.log(slug);
    });
    this.GetPostViewCount()
 
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log
  
  }
  listBlogViewCount : Array<TypePosts> = []
  GetPostViewCount(){
    this.postService.getAllpostView(1,4,"viewCount","desc").subscribe(res=>{
      this.listBlogViewCount = res.data;
    })
  }
  postBySlug! : TypePosts;
  GetPostBySlug(slug:string){
 
    this.postService.getPostBySlug(slug).subscribe(res=>{
      this.postBySlug = res
    })
  }
  
}
