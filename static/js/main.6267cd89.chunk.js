(this.webpackJsonpnetflixclone=this.webpackJsonpnetflixclone||[]).push([[0],{13:function(e,t,a){},48:function(e,t,a){e.exports=a(94)},94:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),o=a.n(r),i=a(19),c=a(26),l=a(45),u=a.n(l),d=a(47),p=a(1),h=a.n(p),m=a(9),v=a(2),b=a.n(v),f=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=f765384d41ab212540d989e6d53acde4&language=en-US");case 2:return t=e.sent,e.abrupt("return",{type:"@@sleny/FETCH_NOWMOVIE",data:t.data.results});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g={value:10,nowMovie:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@@sleny/FETCH_NOWMOVIE":return Object(d.a)({},e,{nowMovie:t.data});default:return e}},_=Object(i.c)({Movie:E}),k=a(4),M=a(5),O=a(7),j=a(6),y=a(8),w=(a(13),a(14)),N=a.n(w),S=a(25),C=a.n(S),D=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).handleClick=function(e){C()({key:"AIzaSyD1xFk42XgJMpS6KH54IqurGowvw5l_JCI",term:e},(function(e){a.setState({url:e[0].id.videoId})})),a.setState({url:e,MovieOn:!0})},a.state={MovieOn:!1,url:""},a}return Object(y.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this,t="https://image.tmdb.org/t/p/w500".concat(this.props.data.data.backdrop_path),a={width:"100%",height:"100%",backgroundImage:"url(".concat(t,")")},n=this.props.moviedata.data.results.map((function(t,a){return s.a.createElement("p",{className:"Movie_List",onClick:function(){e.handleClick(t.key)},key:t.key},"\ud83d\udcfa",t.name)})),r=this.state.MovieOn?s.a.createElement("iframe",{className:"Modal_Movie",src:"https://www.youtube.com/embed/".concat(this.state.url)}):s.a.createElement("img",{className:"Modal_Image",src:this.props.url,alt:"asdasd"});return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"back",style:a},s.a.createElement("div",{className:"Modal"},r,s.a.createElement("div",{className:"Modal_Text"},s.a.createElement("h1",null,this.props.data.data.title),s.a.createElement("div",null,this.props.data.data.release_date," \u30fb"," ",this.props.data.data.runtime," \u30fb"," ",this.props.data.data.genres[0].name," \u30fb"," ",this.props.data.data.status," \u30fb"," ","\u2b50\ufe0f"+this.props.data.data.vote_average+"/10"),s.a.createElement("h3",null,s.a.createElement("p",{className:"Modal_Desc"},this.props.data.data.overview)),n))))}}]),t}(s.a.Component),T=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).handleClick=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 2:return n=e.sent,e.next=5,b.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 5:s=e.sent,a.setState({datas:n,movieDatas:s,visible:!0}),console.log(n),a.setState({onData:!0});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.CloseModal=function(){a.setState({visible:!1,onData:!1})},a.state={hover:!1,visible:!1,onData:!1,datas:[],movieDatas:[]},a}return Object(y.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.props.data.poster_path?"https://image.tmdb.org/t/p/w500".concat(this.props.data.poster_path):"https://thumbs.dreamstime.com/z/nothing-impossible-simple-inspire-motivational-quote-hand-drawn-beautiful-lettering-print-inspirational-poster-t-s-127123264.jpg",s.a.createElement("li",{className:"busutu"},s.a.createElement("div",{className:"form",onClick:function(){return t.handleClick(t.props.data.id)}},s.a.createElement("img",{className:"busutu_img",src:e,alt:this.props.data.title,onMouseEnter:function(){return t.setState({hover:!0})},onMouseLeave:function(){return t.setState({hover:!1})}})),s.a.createElement("div",{className:"Vote"},this.state.hover?"\u2b50\ufe0f".concat(this.props.data.vote_average,"/10"):""),s.a.createElement(N.a,{visible:this.state.visible,width:"95%",height:"90%",effect:"fadeInUp"},s.a.createElement("button",{className:"close",onClick:this.CloseModal},"X"),this.state.onData?s.a.createElement(D,{data:this.state.datas,moviedata:this.state.movieDatas,url:e}):s.a.createElement("div",null,"Loading...")),s.a.createElement("div",{className:"TEXT",onMouseEnter:this.hoveron,onMouseLeave:this.hoveroff},this.props.data.title))}}]),t}(s.a.Component),x=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).handleClick=function(e){console.log(e,"asdasdsads"),C()({key:"AIzaSyD1xFk42XgJMpS6KH54IqurGowvw5l_JCI",term:e},(function(e){console.log(e),a.setState({url:e[0].id.videoId})})),a.setState({url:e,MovieOn:!0})},a.state={MovieOn:!1,url:""},a}return Object(y.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this,t="https://image.tmdb.org/t/p/w500".concat(this.props.data.data.backdrop_path),a={width:"100%",height:"100%",backgroundImage:"url(".concat(t,")")},n=this.props.moviedata.data.results.map((function(t,a){return s.a.createElement("p",{className:"Movie_List",onClick:function(){e.handleClick(t.key)},key:t.key},"\ud83d\udcfa",t.name)})),r=this.state.MovieOn?s.a.createElement("iframe",{className:"Modal_Movie",src:"https://www.youtube.com/embed/".concat(this.state.url)}):s.a.createElement("img",{className:"Modal_Image",src:this.props.url,alt:"asdasd"});return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"back",style:a},s.a.createElement("div",{className:"Modal"},r,s.a.createElement("div",{className:"Modal_Text"},s.a.createElement("h1",null,this.props.data.data.name),s.a.createElement("div",null,this.props.data.data.release_date," \u30fb"," ",this.props.data.data.runtime," \u30fb"," ",this.props.data.data.genres[0].name," \u30fb"," ",this.props.data.data.status," \u30fb"," ","\u2b50\ufe0f"+this.props.data.data.vote_average+"/10"),s.a.createElement("h3",null,s.a.createElement("p",{className:"Modal_Desc"},this.props.data.data.overview)),n))))}}]),t}(s.a.Component),V=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).handleClick=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.themoviedb.org/3/tv/".concat(t,"?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 2:return n=e.sent,e.next=5,b.a.get("https://api.themoviedb.org/3/tv/".concat(t,"/videos?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 5:s=e.sent,a.setState({datas:n,movieDatas:s,visible:!0}),console.log(n),a.setState({onData:!0});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.CloseModal=function(){a.setState({visible:!1,onData:!1})},a.state={hover:!1,visible:!1,onData:!1,datas:[],movieDatas:[]},a}return Object(y.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.props.data.poster_path?"https://image.tmdb.org/t/p/w500".concat(this.props.data.poster_path):"https://thumbs.dreamstime.com/z/nothing-impossible-simple-inspire-motivational-quote-hand-drawn-beautiful-lettering-print-inspirational-poster-t-s-127123264.jpg",s.a.createElement("li",{className:"busutu"},s.a.createElement("div",{className:"form",onClick:function(){return t.handleClick(t.props.data.id)}},s.a.createElement("img",{className:"busutu_img",src:e,alt:this.props.data.title,onMouseEnter:function(){return t.setState({hover:!0})},onMouseLeave:function(){return t.setState({hover:!1})}})),s.a.createElement("div",{className:"Vote"},this.state.hover?"\u2b50\ufe0f".concat(this.props.data.vote_average,"/10"):""),s.a.createElement(N.a,{visible:this.state.visible,width:"95%",height:"90%",effect:"fadeInUp"},s.a.createElement("button",{className:"close",onClick:this.CloseModal},"X"),this.state.onData?s.a.createElement(x,{data:this.state.datas,moviedata:this.state.movieDatas,url:e}):s.a.createElement("div",null,"Loading...")),s.a.createElement("div",{className:"TEXT",onMouseEnter:this.hoveron,onMouseLeave:this.hoveroff},this.props.data.name))}}]),t}(s.a.Component),U=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).handleChange=function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({search:t.target.value}),setTimeout(Object(m.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("f765384d41ab212540d989e6d53acde4","&language=en-US&query=").concat(a.state.search,"&page=1&include_adult=false"));case 2:return t=e.sent,e.next=5,b.a.get("https://api.themoviedb.org/3/search/tv?api_key=".concat("f765384d41ab212540d989e6d53acde4","&language=en-US&query=").concat(a.state.search,"&page=1&include_adult=false"));case 5:n=e.sent,a.setState({Moviedatas:t,TVdatas:n,prepare:!0});case 7:case"end":return e.stop()}}),e)}))),1500);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={search:"",Moviedatas:[],TVdatas:[],prepare:!1},a}return Object(y.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("input",{type:"text",name:"search",value:this.state.search,onChange:this.handleChange,placeholder:"Search for a Movie or TV Show"}),s.a.createElement("h2",null,"Searched Movie"),s.a.createElement("div",{className:"NowMovie"},s.a.createElement("ul",null,this.state.prepare?this.state.Moviedatas.data.results.map((function(e,t){return s.a.createElement(T,{key:t,data:e})})):"Loading......")),s.a.createElement("h2",null,"Searched TV TV"),s.a.createElement("div",{className:"NowMovie"},s.a.createElement("ul",null,this.state.prepare?this.state.TVdatas.data.results.map((function(e,t){return s.a.createElement(V,{key:t,data:e})})):"Loading......")))}}]),t}(s.a.Component),L=a(21),I=function(e){function t(){return Object(k.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"navigation"},s.a.createElement(L.b,{to:"/"},"Movie"),s.a.createElement(L.b,{to:"/TV"},"T V"),s.a.createElement(L.b,{to:"/Search"},"Search"))}}]),t}(s.a.Component),X=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).handleClick=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 2:return n=e.sent,e.next=5,b.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 5:s=e.sent,a.setState({datas:n,movieDatas:s,visible:!0}),console.log(n),a.setState({onData:!0});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.CloseModal=function(){a.setState({visible:!1,onData:!1})},a.state={hover:!1,visible:!1,onData:!1,datas:[],movieDatas:[]},a}return Object(y.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.props.data.poster_path?"https://image.tmdb.org/t/p/w500".concat(this.props.data.poster_path):"https://thumbs.dreamstime.com/z/nothing-impossible-simple-inspire-motivational-quote-hand-drawn-beautiful-lettering-print-inspirational-poster-t-s-127123264.jpg",s.a.createElement("li",{className:"busutu"},s.a.createElement("div",{className:"form",onClick:function(){return t.handleClick(t.props.data.id)}},s.a.createElement("img",{className:"busutu_img",src:e,alt:this.props.data.title,onMouseEnter:function(){return t.setState({hover:!0})},onMouseLeave:function(){return t.setState({hover:!1})}})),s.a.createElement("div",{className:"Vote"},this.state.hover?"\u2b50\ufe0f".concat(this.props.data.vote_average,"/10"):""),s.a.createElement(N.a,{visible:this.state.visible,width:"95%",height:"90%",effect:"fadeInUp"},s.a.createElement("button",{className:"close",onClick:this.CloseModal},"X"),this.state.onData?s.a.createElement(D,{data:this.state.datas,moviedata:this.state.movieDatas,url:e}):s.a.createElement("div",null,"Loading...")),s.a.createElement("div",{className:"TEXT",onMouseEnter:this.hoveron,onMouseLeave:this.hoveroff},this.props.data.title))}}]),t}(s.a.Component),q=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).handleClick=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 2:return n=e.sent,e.next=5,b.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 5:s=e.sent,a.setState({datas:n,movieDatas:s,visible:!0}),console.log(n),a.setState({onData:!0});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.CloseModal=function(){a.setState({visible:!1,onData:!1})},a.state={hover:!1,visible:!1,onData:!1,datas:[],movieDatas:[]},a}return Object(y.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.props.data.poster_path?"https://image.tmdb.org/t/p/w500".concat(this.props.data.poster_path):"https://thumbs.dreamstime.com/z/nothing-impossible-simple-inspire-motivational-quote-hand-drawn-beautiful-lettering-print-inspirational-poster-t-s-127123264.jpg",s.a.createElement("li",{className:"busutu"},s.a.createElement("div",{className:"form",onClick:function(){return t.handleClick(t.props.data.id)}},s.a.createElement("img",{className:"busutu_img",src:e,alt:this.props.data.title,onMouseEnter:function(){return t.setState({hover:!0})},onMouseLeave:function(){return t.setState({hover:!1})}})),s.a.createElement("div",{className:"Vote"},this.state.hover?"\u2b50\ufe0f".concat(this.props.data.vote_average,"/10"):""),s.a.createElement(N.a,{visible:this.state.visible,width:"95%",height:"90%",effect:"fadeInUp"},s.a.createElement("button",{className:"close",onClick:this.CloseModal},"X"),this.state.onData?s.a.createElement(D,{data:this.state.datas,moviedata:this.state.movieDatas,url:e}):s.a.createElement("div",null,"Loading...")),s.a.createElement("div",{className:"TEXT",onMouseEnter:this.hoveron,onMouseLeave:this.hoveroff},this.props.data.title))}}]),t}(s.a.Component),P=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).getData=Object(m.a)(h.a.mark((function e(){var t,n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 2:return t=e.sent,e.next=5,b.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 5:return n=e.sent,e.next=8,b.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 8:s=e.sent,a.setState({NowMovie_datas:t,TopRatedMovie_datas:n,PopularMovie_datas:s,prepare:!0});case 10:case"end":return e.stop()}}),e)}))),a.state={prepare:!1,NowMovie_datas:[],TopRatedMovie_datas:[],PopularMovie_datas:[]},a}return Object(y.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.getData(),console.log("asdasd")}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Now Movie"),s.a.createElement("div",{className:"NowMovie"},s.a.createElement("ul",null,this.state.prepare?this.state.NowMovie_datas.data.results.map((function(e,t){return s.a.createElement(T,{key:t,data:e})})):"asdads")),s.a.createElement("h2",null,"TOP Rate Movie"),s.a.createElement("div",{className:"ToRatedMovie"},s.a.createElement("ul",null,this.state.prepare?this.state.TopRatedMovie_datas.data.results.map((function(e,t){return s.a.createElement(q,{key:t,data:e})})):"asdads")),s.a.createElement("h2",null,"Popular Movie"),s.a.createElement("div",{className:"PopularMovie"},s.a.createElement("ul",null,this.state.prepare?this.state.PopularMovie_datas.data.results.map((function(e,t){return s.a.createElement(X,{key:t,data:e})})):"asdads")))}}]),t}(s.a.Component),R=Object(c.b)((function(e){return{value:e.Movie.value}}),(function(e){return{fetchNowMovie:function(){e(f())}}}))(P),z=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).handleClick=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,b.a.get("https://api.themoviedb.org/3/tv/".concat(t,"?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 3:return n=e.sent,e.next=6,b.a.get("https://api.themoviedb.org/3/tv/".concat(t,"/videos?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 6:s=e.sent,console.log(n,"asd"),console.log(s,"qwe"),a.setState({datas:n,movieDatas:s,visible:!0}),a.setState({onData:!0});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.CloseModal=function(){a.setState({visible:!1,onData:!1})},a.state={hover:!1,visible:!1,onData:!1,datas:[],movieDatas:[]},a}return Object(y.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.props.data.poster_path?"https://image.tmdb.org/t/p/w500".concat(this.props.data.poster_path):"https://thumbs.dreamstime.com/z/nothing-impossible-simple-inspire-motivational-quote-hand-drawn-beautiful-lettering-print-inspirational-poster-t-s-127123264.jpg",s.a.createElement("li",{className:"busutu"},s.a.createElement("div",{className:"form",onClick:function(){return t.handleClick(t.props.data.id)}},s.a.createElement("img",{className:"busutu_img",src:e,alt:this.props.data.title,onMouseEnter:function(){return t.setState({hover:!0})},onMouseLeave:function(){return t.setState({hover:!1})}})),s.a.createElement("div",{className:"Vote"},this.state.hover?"\u2b50\ufe0f".concat(this.props.data.vote_average,"/10"):""),s.a.createElement(N.a,{visible:this.state.visible,width:"95%",height:"90%",effect:"fadeInUp"},s.a.createElement("button",{className:"close",onClick:this.CloseModal},"X"),this.state.onData?s.a.createElement(x,{data:this.state.datas,moviedata:this.state.movieDatas,url:e}):s.a.createElement("div",null,"Loading...")),s.a.createElement("div",{className:"TEXT",onMouseEnter:this.hoveron,onMouseLeave:this.hoveroff},this.props.data.name))}}]),t}(s.a.Component),F=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).handleClick=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.themoviedb.org/3/tv/".concat(t,"?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 2:return n=e.sent,e.next=5,b.a.get("https://api.themoviedb.org/3/tv/".concat(t,"/videos?api_key=").concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 5:s=e.sent,console.log(s,"Asdasdasd"),a.setState({datas:n,movieDatas:s,visible:!0}),a.setState({onData:!0});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.CloseModal=function(){a.setState({visible:!1,onData:!1})},a.state={hover:!1,visible:!1,onData:!1,datas:[],movieDatas:[]},a}return Object(y.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.props.data.poster_path?"https://image.tmdb.org/t/p/w500".concat(this.props.data.poster_path):"https://thumbs.dreamstime.com/z/nothing-impossible-simple-inspire-motivational-quote-hand-drawn-beautiful-lettering-print-inspirational-poster-t-s-127123264.jpg",s.a.createElement("li",{className:"busutu"},s.a.createElement("div",{className:"form",onClick:function(){return t.handleClick(t.props.data.id)}},s.a.createElement("img",{className:"busutu_img",src:e,alt:this.props.data.title,onMouseEnter:function(){return t.setState({hover:!0})},onMouseLeave:function(){return t.setState({hover:!1})}})),s.a.createElement("div",{className:"Vote"},this.state.hover?"\u2b50\ufe0f".concat(this.props.data.vote_average,"/10"):""),s.a.createElement(N.a,{visible:this.state.visible,width:"95%",height:"90%",effect:"fadeInUp"},s.a.createElement("button",{className:"close",onClick:this.CloseModal},"X"),this.state.onData?s.a.createElement(x,{data:this.state.datas,moviedata:this.state.movieDatas,url:e}):s.a.createElement("div",null,"Loading...")),s.a.createElement("div",{className:"TEXT",onMouseEnter:this.hoveron,onMouseLeave:this.hoveroff},this.props.data.name))}}]),t}(s.a.Component),J=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).getData=Object(m.a)(h.a.mark((function e(){var t,n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.themoviedb.org/3/tv/airing_today?api_key=".concat("f765384d41ab212540d989e6d53acde4","&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,b.a.get("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat("f765384d41ab212540d989e6d53acde4","&language=en-US"));case 5:return n=e.sent,e.next=8,b.a.get("https://api.themoviedb.org/3/tv/popular?api_key=".concat("f765384d41ab212540d989e6d53acde4","&language=en-US&page=1"));case 8:s=e.sent,a.setState({airing_todayTV_datas:t,top_ratedTV_datas:n,popularTV_datas:s,prepare:!0});case 10:case"end":return e.stop()}}),e)}))),a.state={prepare:!1,airing_todayTV_datas:[],popularTV_datas:[],top_ratedTV_datas:[]},a}return Object(y.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"AiringToday TV"),s.a.createElement("div",{className:"NowMovie"},s.a.createElement("ul",null,this.state.prepare?this.state.airing_todayTV_datas.data.results.map((function(e,t){return s.a.createElement(V,{key:t,data:e})})):"asdads")),s.a.createElement("h2",null,"TOP Rate TV"),s.a.createElement("div",{className:"ToRatedMovie"},s.a.createElement("ul",null,this.state.prepare?this.state.top_ratedTV_datas.data.results.map((function(e,t){return s.a.createElement(F,{key:t,data:e})})):"asdads")),s.a.createElement("h2",null,"Popular TV"),s.a.createElement("div",{className:"PopularMovie"},s.a.createElement("ul",null,this.state.prepare?this.state.popularTV_datas.data.results.map((function(e,t){return s.a.createElement(z,{key:t,data:e})})):"asdads")))}}]),t}(s.a.Component),A=a(18);var H=function(){return s.a.createElement(L.a,null,s.a.createElement(I,null),s.a.createElement(A.c,null,s.a.createElement(A.a,{exact:!0,path:"/",component:R}),s.a.createElement(A.a,{path:"/TV",component:J}),s.a.createElement(A.a,{path:"/Search",component:U})))},G=Object(i.a)(u.a)(i.d);o.a.render(s.a.createElement(c.a,{store:G(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},s.a.createElement(H,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.6267cd89.chunk.js.map