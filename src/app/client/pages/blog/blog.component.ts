import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { TypePosts } from '../../types/post';
import { PostCategoryService } from '../../services/post-category.service';
import { TypePostCategory } from '../../types/postCategory';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
export type tySort = {
  name:string,
  value:string,
  typeSort:string
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  constructor(private postService : PostService,private postCategoryService : PostCategoryService) { }

  ngOnInit(): void {

    this.GetPostViewCount()
    this.GetPostCategory()
    this.getpostALL(1,3,"createDate","desc")
    this.GetPostViewCount()
  //  console.log(resutl)
    console.log(this.totalRecord)
    this.postFormSeach.valueChanges.subscribe({
      next:((s : any)=>{
      const s_split  = s.sorts.split("_")
      const   sort = s_split[0]
       const  typeSort = s_split[1]
     
      this.getpostALL(this.currentPageNumber,this.pageSize,"createDate","desc","name",s.search!)

    
        
      })
    })
   this.listSort.map(item=>{
      console.log(item.name)
    })
   //this.hanldeDatapost(true)
  }
  listSort: tySort[] = [
    {
     name : "Lượt xem",
     value: "viewCount",
     typeSort:"desc"
    }
   ];
   dafaultOption :string = "Giá tăng dần"
 
   postFormSeach :FormGroup = new FormGroup({
     search: new FormControl(''),
     sorts : new FormControl(''),
 
   });
   
   
   sort!: string;
   tySort!:string;
  
   posts: Array<TypePosts> = [];
   totalRecord! : number;
   totalPages! : number;
   currentPageNumber!: number;
   hasNextPage!: boolean;
   pageSize!: number;
   getpostALL(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort?:string,where?:string,search:string = '')   {
     this.postService.getAllpost(currentPageNumber, pageSize,sort,typeSort,search,where).subscribe(posts => {
       this.posts = posts.data;
      console.log(posts)
       this.pageSize = posts.pageSize
       this.totalRecord = posts.totalRecords
       this.totalPages = posts.totalPages
       this.currentPageNumber = posts.currentPageNumber
       this.hasNextPage = posts.hasNextPage
       return  posts ;
     })
   
   }
   OnHandlePaging(currentPageNumber:number,pageSize:number){
     this.getpostALL(currentPageNumber,pageSize,"viewCount","asc")
   }
   counter(i: number) {
     return new Array(i);
   }
   OnActionPaging(action:boolean,currentPageNumber:number,pageSize:number){
     if(action){
       const currentPageNumberNext = ++currentPageNumber;
      
       if(currentPageNumberNext > this.totalPages){
         console.log("het")
       }
       else {
         this.OnHandlePaging(currentPageNumberNext,pageSize)
       }
     
     
     }
    else {
     const currentPageNumberPreviuos = --currentPageNumber;
       this.OnHandlePaging(currentPageNumberPreviuos,pageSize)
    }
   }
  listPost : Array<TypePosts> = []
  listPostCategory : Array<TypePostCategory> = []
  listBlogViewCount : Array<TypePosts> = []

  GetPostViewCount(){
    this.postService.getAllpostView(1,4,"viewCount","desc").subscribe(res=>{
      this.listBlogViewCount = res.data;
    })
  }
  
  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.OnHandlePaging(1,this.pageSize)
    
  }



  
  GetPostCategory(){
    this.postCategoryService.getAllPostCategory().subscribe(res=>{
      this.listPostCategory = res
    })
  }
  
  
}
