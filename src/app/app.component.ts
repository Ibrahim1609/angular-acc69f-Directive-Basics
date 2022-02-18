import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  constructor() { }

  ngOnInit(): void {
  }
  notFound = 'https://media.istockphoto.com/vectors/no-data-illustration-vector-concept-vector-id1300261821?k=20&m=1300261821&s=612x612&w=0&h=yQZGdLw_ndlXcpNnOlnNcne86JwmsLifMM1DWdKar7Q='
  cardDat = null;
  hoverIndex = null;
  cardData: any = [
    {
      id:'1',name: "Hollywood", title: "Avengers", color: 'lightsteelblue', content: "Action", note: "3D and VR Show!", rating: '8',img:'https://wallpaperaccess.com/full/13452.jpg'
    },
    {
      id:'2',name: "Hollywood", title: "Babys Day out", color: 'lightcoral', content: "Comedy/Action", note: "3D show classic screen!", rating: '8',img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6539/666539-h'
    },
    {
      id:'3',name: "Hollywood", title: "Conjuring", color: 'lightgreen', content: "Horror/Thriller", note: "3D show 8D sounds!", rating: '6.8',img:'https://c4.wallpaperflare.com/wallpaper/854/973/83/the-conjuring-wallpaper-preview.jpg'
    },
    {
      id:'4',name: "Hollywood", title: "Titanic", color: 'lightblue', content: "Romantic/Drama", note: "VR digital show!", rating: '9',img:'https://images5.alphacoders.com/349/349578.jpg'
    },
    {
      id:'5',name: "Hollywood", title: "Angry Birds", color: 'lightpink', content: "Animation/Comedy", note: "VR CG show 3D!", rating: '8',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8o7z3eijEZCAo_EuDjfWbvn1bySc46y3Esg&usqp=CAU'
    }
  ];

  onMouseOver(index: any) {
    this.hoverIndex = index;
  }
  onMouseOut() {
    this.hoverIndex = null;
  }
  hide(card:any){
    let index = this.cardData.indexOf(card);
    this.cardData.splice(4,1);//Splice add or remove the element
  }

}
