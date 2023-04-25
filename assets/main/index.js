System.register("chunks:///_virtual/BlockBonusType.ts",["cc"],(function(c){"use strict";var o;return{setters:[function(c){o=c.cclegacy}],execute:function(){var e;c("BlockBonusType",void 0),o._RF.push({},"dc99cx1I4lBG7ZkQWfV8EPH","BlockBonusType",void 0),function(c){c[c.bomb=0]="bomb"}(e||(e=c("BlockBonusType",{}))),o._RF.pop()}}}));

System.register("chunks:///_virtual/BlockColor.ts",["cc"],(function(e){"use strict";var o;return{setters:[function(e){o=e.cclegacy}],execute:function(){var l;e("BlockColor",void 0),o._RF.push({},"3cf42lbtpdCNJ1NspujDm2w","BlockColor",void 0),function(e){e[e.green=0]="green",e[e.red=1]="red",e[e.blue=2]="blue",e[e.yellow=3]="yellow",e[e.purble=4]="purble"}(l||(l=e("BlockColor",{}))),o._RF.pop()}}}));

System.register("chunks:///_virtual/BlocksController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BlockType.ts","./BlockBonusType.ts"],(function(e){"use strict";var t,r,i,n,o,s;return{setters:[function(e){t=e.createClass,r=e.asyncToGenerator,i=e.regeneratorRuntime},function(e){n=e.cclegacy},function(e){o=e.BlockType},function(e){s=e.BlockBonusType}],execute:function(){n._RF.push({},"0e16d8BOtxAcYnHMEyL/ibc","BlocksController",void 0);e("BlocksController",function(){function e(e,t,r,i,n){this.model=void 0,this.view=void 0,this.settings=void 0,this.scoreController=void 0,this.gameStateController=void 0,this.shuffleCount=void 0,this.availableTurns=void 0,this.model=e,this.view=t,this.settings=r,this.scoreController=i,this.gameStateController=n}var n=e.prototype;return n.Init=function(){this.shuffleCount=this.settings.ShuffleCount,this.availableTurns=this.settings.AvailableTurns,this.view.SetTextShuffleCount(this.shuffleCount.toString()),this.view.SetTextAvailableTurn(this.availableTurns.toString()),this.FillView()},n.FillView=function(){var e=r(i().mark((function e(){var t,r,n,o,s,l,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.gameStateController.IsCanMove=!1,this.view.CreateGrid(this.model.Grid.length,this.model.Grid[0].length,this),t=[],r=0;r<this.model.Grid.length;r++)for(n=0;n<this.model.Grid[r].length;n++)o=this.model.Grid[r][n].X,s=this.model.Grid[r][n].Y,l=this.model.Grid[r][n].Type,h=this.model.Grid[r][n].Subtype,t.push(this.view.CreateBlock(o,s,l,h));return e.next=6,Promise.all(t);case 6:return e.next=8,this.CheckShuffle();case 8:this.gameStateController.IsCanMove=!0;case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.OnClickedTile=function(){var e=r(i().mark((function e(t,r){var n,l,h,u,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.IsCanMove){e.next=2;break}return e.abrupt("return");case 2:this.gameStateController.IsCanMove=!1,n=this.GetTypeOfClickedTile(t,r),l=this.GetSubTypeOfClickedTile(t,r),h=[],e.t0=n,e.next=e.t0===o.color?9:e.t0===o.bonus?11:13;break;case 9:return h=this.OnClickedColor(t,r,l,h),e.abrupt("break",15);case 11:return h=this.OnClickedBonus(t,r,l,h),e.abrupt("break",15);case 13:return console.log("unknow type"),e.abrupt("break",15);case 15:if(a=h.length,!(n===o.color&&a<this.settings.MinimumTileToDestroy)){e.next=19;break}return this.gameStateController.IsCanMove=!0,e.abrupt("return");case 19:return n===o.color&&(u=this.CheckToCreateBonus(t,r,h)),e.next=22,this.DeleteElements(h);case 22:e.t1=u,e.next=e.t1===s.bomb?25:28;break;case 25:return e.next=27,this.CreateBonus(t,r,s.bomb);case 27:case 28:return e.abrupt("break",29);case 29:return e.next=31,this.BlockFalls();case 31:this.gameStateController.IsCanMove=!0,this.scoreController.AddScore(a),this.availableTurns--,0===this.availableTurns&&this.gameStateController.LoseGame(),this.view.SetTextAvailableTurn(this.availableTurns.toString());case 36:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),n.GetTypeOfClickedTile=function(e,t){return this.model.Grid[e][t].Type},n.GetSubTypeOfClickedTile=function(e,t){return this.model.Grid[e][t].Subtype},n.OnClickedColor=function(e,t,r,i){return this.FindColorElements(e,t,r)},n.OnClickedBonus=function(e,t,r,i){switch(r){case s.bomb:i=this.OnClickedBomb(e,t,i);break;default:console.log("unknow subtype")}return i},n.OnClickedBomb=function(e,t,r){for(var i=this,n=Math.max(e-this.settings.BombRadius,0),s=Math.max(t-this.settings.BombRadius,0),h=Math.min(e+this.settings.BombRadius,this.model.Grid.length-1),u=Math.min(t+this.settings.BombRadius,this.model.Grid[e].length-1),a=function(e){for(var t=function(t){r.some((function(r){return r.X===e&&r.Y===t}))||(r.push(new l(e,t)),i.model.Grid[e][t].Type===o.bonus&&(r=i.OnClickedBonus(e,t,i.model.Grid[e][t].Subtype,r)))},n=s;n<=u;n++)t(n)},c=n;c<=h;c++)a(c);return r},n.FindColorElements=function(e,t,r){for(var i=new l(e,t),n=[i],o=[i];n.length>0;){var s=n.shift(),h=s.X,u=s.Y;this.CheckElement(h-1,u,r,o,n),this.CheckElement(h+1,u,r,o,n),this.CheckElement(h,u+1,r,o,n),this.CheckElement(h,u-1,r,o,n)}return o},n.CheckElement=function(e,t,r,i,n){if(!(e<0||e>=this.model.Grid.length||t<0||t>=this.model.Grid[e].length)){var s=new l(e,t);i.some((function(e){return e.X===s.X&&e.Y===s.Y}))||n.some((function(e){return e.X===s.X&&e.Y===s.Y}))||this.model.Grid[e][t]&&this.model.Grid[e][t].Type===o.color&&this.model.Grid[e][t].Subtype===r&&(i.push(s),n.push(s))}},n.DeleteElements=function(){var e=r(i().mark((function e(t){var r,n=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.forEach((function(e){n.model.DeleteBlock(e.X,e.Y)})),r=t.map((function(e){var t=e.X,r=e.Y;return n.view.DeleteBlock(t,r)})),e.next=4,Promise.all(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.CheckToCreateBonus=function(e,t,r){if(this.CheckCreateBomb(e,t,r))return s.bomb},n.CheckCreateBomb=function(e,t,r){return r.length>this.settings.MinimumTileToBomb},n.CreateBonus=function(){var e=r(i().mark((function e(t,r,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.model.CreateBonusBlock(t,r,n),e.next=3,this.view.CreateBlock(this.model.Grid[t][r].X,this.model.Grid[t][r].Y,this.model.Grid[t][r].Type,this.model.Grid[t][r].Subtype);case 3:case"end":return e.stop()}}),e,this)})));return function(t,r,i){return e.apply(this,arguments)}}(),n.BlockFalls=function(){var e=r(i().mark((function e(){var t,r,n,o,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],r=0;r<this.model.Grid.length;r++)for(n=0;n<this.model.Grid[r].length;n++)if(!this.model.Grid[r][n])for(o=!1,s=n+1;s<this.model.Grid[r].length;s++)this.model.Grid[r][s]&&(o||(this.model.MoveBlock(r,n,r,s),t.push(this.view.MoveBlock(r,n,r,s)),o=!0));return e.next=4,Promise.all(t);case 4:return e.next=6,this.FillBlocks();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.FillBlocks=function(){var e=r(i().mark((function e(){var t,r,n,o,s,l,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],r=[],n=0;n<this.model.Grid.length;n++)for(o=0;o<this.model.Grid[n].length;o++)this.model.Grid[n][o]||r.push({x:n,y:o});for(s=0,l=r;s<l.length;s++)h=l[s],this.model.CreateColorBlock(h.x,h.y),t.push(this.view.CreateBlock(this.model.Grid[h.x][h.y].X,this.model.Grid[h.x][h.y].Y,this.model.Grid[h.x][h.y].Type,this.model.Grid[h.x][h.y].Subtype));return e.next=6,Promise.all(t);case 6:return e.next=8,this.CheckShuffle();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.CheckShuffle=function(){var e=r(i().mark((function e(){var t,r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.CheckForBonusBlock()&&!this.CheckForAvailableMatches()){e.next=2;break}return e.abrupt("return");case 2:if(0!==this.shuffleCount){e.next=5;break}return this.gameStateController.LoseGame(),e.abrupt("return");case 5:if(!(this.shuffleCount>0)){e.next=14;break}for(this.shuffleCount--,this.view.SetTextShuffleCount(this.shuffleCount.toString()),t=[],r=0;r<this.model.Grid.length;r++)for(n=0;n<this.model.Grid[r].length;n++)t.push(this.view.DeleteBlock(r,n));return e.next=12,Promise.all(t);case 12:return e.next=14,this.ShuffleTiles();case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.CheckForBonusBlock=function(){for(var e=0;e<this.model.Grid.length;e++)for(var t=0;t<this.model.Grid[e].length;t++)if(this.model.Grid[e][t].Type===o.bonus)return!0;return!1},n.CheckForAvailableMatches=function(){for(var e=0;e<this.model.Grid.length;e++)for(var t=0;t<this.model.Grid[e].length;t++){var r=this.model.Grid[e][t].Subtype;if(this.FindColorElements(e,t,r).length>=this.settings.MinimumTileToDestroy)return!0}return!1},n.ShuffleTiles=function(){var e=r(i().mark((function e(){var t,r,n,o,s,l,h,u,a,c,d,f,m,p,v,C,k,b;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=this.model.Grid.length,r=this.model.Grid[0].length,n=[],o=0;o<t;o++)for(s=0;s<r;s++)n.push(this.model.Grid[o][s]);for(l=n.length-1;l>0;l--)h=Math.floor(Math.random()*(l+1)),u=[n[h],n[l]],n[l]=u[0],n[h]=u[1];for(a=0,c=0;c<t;c++)for(d=0;d<r;d++)this.model.SetTile(c,d,n[a++]);for(f=[],m=0;m<this.model.Grid.length;m++)for(p=0;p<this.model.Grid[m].length;p++)v=this.model.Grid[m][p].X,C=this.model.Grid[m][p].Y,k=this.model.Grid[m][p].Type,b=this.model.Grid[m][p].Subtype,f.push(this.view.CreateBlock(v,C,k,b));return e.next=11,Promise.all(f);case 11:return e.next=13,this.CheckShuffle();case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t(e,[{key:"IsCanMove",get:function(){return this.gameStateController.IsCanMove}}]),e}());var l=e("GridPoint",function(){function e(e,t){this.x=void 0,this.y=void 0,this.x=e,this.y=t}return t(e,[{key:"X",get:function(){return this.x}},{key:"Y",get:function(){return this.y}}]),e}());n._RF.pop()}}}));

System.register("chunks:///_virtual/BlocksModel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BlockColor.ts","./BlockType.ts","./BonusBlock.ts","./ColorBlock.ts"],(function(o){"use strict";var t,n,r,i,e,l;return{setters:[function(o){t=o.createClass},function(o){n=o.cclegacy},function(o){r=o.BlockColor},function(o){i=o.BlockType},function(o){e=o.BonusBlock},function(o){l=o.ColorBlock}],execute:function(){n._RF.push({},"732e3XD2eBMI4Hc54V88qeE","BlocksModel",void 0);o("BlocksModel",function(){function o(o,t){this.grid=void 0,this.grid=new Array(o);for(var n=0;n<this.grid.length;n++)this.grid[n]=new Array(t);this.FillModel()}var n=o.prototype;return n.FillModel=function(){for(var o=0;o<this.grid.length;o++)for(var t=0;t<this.grid[o].length;t++){var n=this.RandomIntFromInterval(0,Object.keys(r).length/2-1),e=new l(o,t,i.color,n);this.grid[o][t]=e}},n.RandomIntFromInterval=function(o,t){return Math.floor(Math.random()*(t-o+1)+o)},n.DeleteBlock=function(o,t){this.grid[o][t]=null},n.DestroyAllBlocks=function(){for(var o=0;o<this.grid.length;o++)for(var t=0;t<this.grid.length;t++)this.grid[o][t]=null},n.MoveBlock=function(o,t,n,r){this.grid[o][t]=this.grid[n][r],this.grid[n][r]=null},n.SetTile=function(o,t,n){n.ChangePosition(o,t),this.grid[o][t]=n},n.CreateColorBlock=function(o,t){var n=this.RandomIntFromInterval(0,4),r=new l(o,t,i.color,n);this.grid[o][t]=r},n.CreateBonusBlock=function(o,t,n){var r=new e(o,t,i.bonus,n);this.grid[o][t]=r},t(o,[{key:"Grid",get:function(){return this.grid}}]),o}());n._RF.pop()}}}));

System.register("chunks:///_virtual/BlocksSettings.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var t,e;return{setters:[function(i){t=i.createClass},function(i){e=i.cclegacy}],execute:function(){e._RF.push({},"7c0f34amZJErZV4ioOrNIuV","BlocksSettings",void 0);i("BlocksSettings",function(){function i(i,t,e,n,u){this.minimumTileToDestroy=void 0,this.shuffleCount=void 0,this.availableTurns=void 0,this.minimumTileToBomb=void 0,this.bombRadius=void 0,this.minimumTileToDestroy=i,this.shuffleCount=t,this.availableTurns=e,this.minimumTileToBomb=n,this.bombRadius=u}return t(i,[{key:"MinimumTileToDestroy",get:function(){return this.minimumTileToDestroy}},{key:"ShuffleCount",get:function(){return this.shuffleCount}},{key:"AvailableTurns",get:function(){return this.availableTurns}},{key:"MinimumTileToBomb",get:function(){return this.minimumTileToBomb}},{key:"BombRadius",get:function(){return this.bombRadius}}]),i}());e._RF.pop()}}}));

System.register("chunks:///_virtual/BlocksView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BlockType.ts"],(function(i){"use strict";var t,e,r,n,o,l,c,a,s,u,h,d,b,f,p;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,r=i.initializerDefineProperty,n=i.assertThisInitialized},function(i){o=i.cclegacy,l=i._decorator,c=i.Prefab,a=i.RichText,s=i.UITransform,u=i.Vec3,h=i.instantiate,d=i.Node,b=i.tween,f=i.Component},function(i){p=i.BlockType}],execute:function(){var g,k,v,y,w,T,m,B,C,x,H,W,z,A;o._RF.push({},"d6714TWVEZI4bFpKvCaYdDL","BlocksView",void 0);var P=l.ccclass,S=l.property;i("BlocksView",(g=P("BlocksView"),k=S({type:[c]}),v=S({type:[c]}),y=S({type:[a]}),w=S({type:[a]}),g((B=t((m=function(i){function t(){for(var t,e=arguments.length,o=new Array(e),l=0;l<e;l++)o[l]=arguments[l];return t=i.call.apply(i,[this].concat(o))||this,r(t,"colorBlocks",B,n(t)),r(t,"bonusBlocks",C,n(t)),r(t,"brickHeight",x,n(t)),r(t,"brickWidth",H,n(t)),r(t,"duration",W,n(t)),r(t,"shuffleCount",z,n(t)),r(t,"availableTurnText",A,n(t)),t.grid=void 0,t.controller=void 0,t}e(t,i);var o=t.prototype;return o.CreateGrid=function(i,t,e){this.controller=e,this.node.getComponent(s).height=t*this.brickHeight+this.brickHeight,this.node.getComponent(s).width=i*this.brickWidth+this.brickWidth,this.grid=new Array(i);for(var r=0;r<this.grid.length;r++)this.grid[r]=new Array(t)},o.CreateBlock=function(i,t,e,r){var n=this;return new Promise((function(o,l){var c,a=new u(i*n.brickWidth+n.brickWidth,t*n.brickHeight+n.brickHeight,0);switch(e){case p.color:c=h(n.colorBlocks[r]);break;case p.bonus:c=h(n.bonusBlocks[r]);break;default:console.log("unknow view type")}c.position=a;var s=new u(c.scale.x,c.scale.y,c.scale.z);c.scale=new u(0,0,0),c.name=i+","+t,c.on(d.EventType.TOUCH_START,(function(i){this.OnClickedTile(c)}),n),n.node.addChild(c),n.grid[i][t]=c,b(c).to(n.duration,{scale:s}).call((function(){o()})).start()}))},o.OnClickedTile=function(i){if(this.controller.IsCanMove)for(var t=0;t<this.grid.length;t++)if(i.position.x>=this.grid[t][0].position.x-this.brickWidth/2&&i.position.x<=this.grid[t][0].position.x+this.brickWidth/2)for(var e=0;e<this.grid[t].length;e++)if(i.position.y>=this.grid[t][e].position.y-this.brickHeight/2&&i.position.y<=this.grid[t][e].position.y+this.brickHeight/2)return void this.controller.OnClickedTile(t,e)},o.DeleteBlock=function(i,t){var e=this;return new Promise((function(r,n){var o=e.grid[i][t];o?(e.grid[i][t]=null,b(o).to(e.duration,{scale:new u(0,0,0)}).call((function(){o.destroy(),r()})).start()):r()}))},o.MoveBlock=function(i,t,e,r){var n=this;return new Promise((function(o,l){var c=new u(i*n.brickWidth+n.brickWidth,t*n.brickHeight+n.brickHeight,0);n.grid[i][t]=n.grid[e][r];var a=n.grid[i][t];a.name=i+","+t,n.grid[e][r]=null,b(a).to(n.duration,{position:c}).call((function(){o()})).start()}))},o.SetTextAvailableTurn=function(i){this.availableTurnText.string="Available turn "+i},o.SetTextShuffleCount=function(i){this.shuffleCount.string="Shuffle count "+i},t}(f)).prototype,"colorBlocks",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),C=t(m.prototype,"bonusBlocks",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),x=t(m.prototype,"brickHeight",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 50}}),H=t(m.prototype,"brickWidth",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 50}}),W=t(m.prototype,"duration",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.2}}),z=t(m.prototype,"shuffleCount",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=t(m.prototype,"availableTurnText",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=m))||T));o._RF.pop()}}}));

System.register("chunks:///_virtual/BlockType.ts",["cc"],(function(c){"use strict";var o;return{setters:[function(c){o=c.cclegacy}],execute:function(){var e;c("BlockType",void 0),o._RF.push({},"9cba0u5L5xO6rgE56DNDmFe","BlockType",void 0),function(c){c[c.color=0]="color",c[c.bonus=1]="bonus"}(e||(e=c("BlockType",{}))),o._RF.pop()}}}));

System.register("chunks:///_virtual/BonusBlock.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.createClass},function(t){n=t.cclegacy}],execute:function(){n._RF.push({},"78dc5UHEcBPlrARN9ZRafS5","BonusBlock",void 0);t("BonusBlock",function(){function t(t,e,n,i){this.x=void 0,this.y=void 0,this.type=void 0,this.bonusType=void 0,this.x=t,this.y=e,this.type=n,this.bonusType=i}return t.prototype.ChangePosition=function(t,e){this.x=t,this.y=e},e(t,[{key:"X",get:function(){return this.x}},{key:"Y",get:function(){return this.y}},{key:"Type",get:function(){return this.type}},{key:"Subtype",get:function(){return this.bonusType}}]),t}());n._RF.pop()}}}));

System.register("chunks:///_virtual/ColorBlock.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,e;return{setters:[function(t){o=t.createClass},function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"5e934441nJH6bf3GKxGZnzC","ColorBlock",void 0);t("ColorBlock",function(){function t(t,o,e,i){this.x=void 0,this.y=void 0,this.type=void 0,this.color=void 0,this.x=t,this.y=o,this.type=e,this.color=i}return t.prototype.ChangePosition=function(t,o){this.x=t,this.y=o},o(t,[{key:"X",get:function(){return this.x}},{key:"Y",get:function(){return this.y}},{key:"Type",get:function(){return this.type}},{key:"Subtype",get:function(){return this.color}}]),t}());e._RF.pop()}}}));

System.register("chunks:///_virtual/Core.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BlocksModel.ts","./BlocksView.ts","./BlocksController.ts","./BlocksSettings.ts","./GameStateController.ts","./GameStateView.ts","./ScoreView.ts","./ScoreModel.ts","./ScoreController.ts","./ScoreSettings.ts"],(function(e){"use strict";var t,i,o,r,n,l,s,a,c,u,b,h,f,m,p,S,g,w;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,l=e._decorator,s=e.director,a=e.Component},function(e){c=e.BlocksModel},function(e){u=e.BlocksView},function(e){b=e.BlocksController},function(e){h=e.BlocksSettings},function(e){f=e.GameStateController},function(e){m=e.GameStateView},function(e){p=e.ScoreView},function(e){S=e.ScoreModel},function(e){g=e.ScoreController},function(e){w=e.ScoreSettings}],execute:function(){var d,C,y,k,z,v,T,V,M,B,G,I,D,R,_,L,F,O;n._RF.push({},"04a71GippVOrr1Up+aO4WR7","Core",void 0);var P=l.ccclass,j=l.property;e("Core",(d=P("Core"),C=j({type:u}),y=j({type:m}),k=j({type:p}),d((T=t((v=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return t=e.call.apply(e,[this].concat(n))||this,o(t,"height",T,r(t)),o(t,"width",V,r(t)),o(t,"minimumTileToDestroy",M,r(t)),o(t,"shuffleCount",B,r(t)),o(t,"availableTurns",G,r(t)),o(t,"minimumTileToBomb",I,r(t)),o(t,"bombRadius",D,r(t)),o(t,"startScore",R,r(t)),o(t,"finishScore",_,r(t)),o(t,"blocksView",L,r(t)),o(t,"gameStateView",F,r(t)),o(t,"scoreView",O,r(t)),t.blocksModel=void 0,t.blocksController=void 0,t.blocksSettings=void 0,t.scoreModel=void 0,t.scoreController=void 0,t.scoreSettings=void 0,t.gameStateController=void 0,t.initializables=[],t}i(t,e);var n=t.prototype;return n.start=function(){this.InitGameScene()},n.LoadGameScene=function(){s.preloadScene("GameScene",(function(){this.InitGameScene(),s.loadScene("GameScene")}))},n.InitGameScene=function(){this.CreateSettings(),this.CreateModels(),this.CreateControllers(),this.Init()},n.CreateSettings=function(){this.scoreSettings=new w(this.startScore,this.finishScore),this.blocksSettings=new h(this.minimumTileToDestroy,this.shuffleCount,this.availableTurns,this.minimumTileToBomb,this.bombRadius)},n.CreateModels=function(){this.blocksModel=new c(this.width,this.height),this.scoreModel=new S(this.startScore)},n.CreateControllers=function(){this.gameStateController=new f(this.gameStateView),this.initializables.push(this.gameStateController),this.scoreController=new g(this.scoreModel,this.scoreView,this.scoreSettings,this.gameStateController),this.initializables.push(this.scoreController),this.blocksController=new b(this.blocksModel,this.blocksView,this.blocksSettings,this.scoreController,this.gameStateController),this.initializables.push(this.blocksController)},n.Init=function(){this.initializables.forEach((function(e){e.Init()}))},t}(a)).prototype,"height",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 8}}),V=t(v.prototype,"width",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 8}}),M=t(v.prototype,"minimumTileToDestroy",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),B=t(v.prototype,"shuffleCount",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),G=t(v.prototype,"availableTurns",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),I=t(v.prototype,"minimumTileToBomb",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),D=t(v.prototype,"bombRadius",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),R=t(v.prototype,"startScore",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),_=t(v.prototype,"finishScore",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),L=t(v.prototype,"blocksView",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=t(v.prototype,"gameStateView",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=t(v.prototype,"scoreView",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=v))||z));n._RF.pop()}}}));

System.register("chunks:///_virtual/GameStateController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i;return{setters:[function(t){e=t.createClass},function(t){i=t.cclegacy}],execute:function(){i._RF.push({},"75158ua55lOgo8PIgUv+4i1","GameStateController",void 0);t("GameStateController",function(){function t(t){this.view=void 0,this.isCanMove=void 0,this.view=t}var i=t.prototype;return i.LoseGame=function(){this.view.SetText("GAMELOSE"),this.isCanMove=!1},i.WinGame=function(){this.view.SetText("GAME WIN"),this.isCanMove=!1},i.Init=function(){this.view.SetText(""),this.isCanMove=!0},e(t,[{key:"IsCanMove",get:function(){return this.isCanMove},set:function(t){this.isCanMove=t}}]),t}());i._RF.pop()}}}));

System.register("chunks:///_virtual/GameStateView.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,r,n,a,o,c,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,c=e.RichText,s=e.Component}],execute:function(){var l,u,p,f,h;a._RF.push({},"c00c97F0xBJY5gATv/IhS7V","GameStateView",void 0);var y=o.ccclass,g=o.property;e("GameStateView",(l=y("GameStateView"),u=g({type:[c]}),l((h=t((f=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,r(t,"text",h,n(t)),t}return i(t,e),t.prototype.SetText=function(e){this.text.string=e},t}(s)).prototype,"text",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=f))||p));a._RF.pop()}}}));

System.register("chunks:///_virtual/IBlock.ts",["cc"],(function(){"use strict";var c;return{setters:[function(e){c=e.cclegacy}],execute:function(){c._RF.push({},"b0624fnkwlEV4eDFJeLfPfr","IBlock",void 0),c._RF.pop()}}}));

System.register("chunks:///_virtual/IInitializable.ts",["cc"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"3005bN9hG5HHJxVJTg/6dyE","IInitializable",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./BlockBonusType.ts","./BlockColor.ts","./BlockType.ts","./BlocksController.ts","./BlocksModel.ts","./BlocksSettings.ts","./BlocksView.ts","./BonusBlock.ts","./ColorBlock.ts","./IBlock.ts","./Core.ts","./GameStateController.ts","./GameStateView.ts","./IInitializable.ts","./SceneController.ts","./StartSceneView.ts","./ScoreController.ts","./ScoreModel.ts","./ScoreSettings.ts","./ScoreView.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SceneController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,o,r,c;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,o=e._decorator,r=e.director,c=e.Component}],execute:function(){var i;t._RF.push({},"52ea5qH4klJ7Z2U9o1fWpi2","SceneController",void 0);var l=o.ccclass;o.property,e("SceneController",l("SceneController")(i=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var o=t.prototype;return o.start=function(){},o.update=function(e){r.loadScene("MyScene")},o.LoadNextScene=function(){r.preloadScene("MyScene",(function(){r.loadScene("Myscene")}))},t}(c))||i);t._RF.pop()}}}));

System.register("chunks:///_virtual/ScoreController.ts",["cc"],(function(t){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"bcd7aTvXilPPY0xSMLu7/n1","ScoreController",void 0);t("ScoreController",function(){function t(t,e,o,i){this.model=void 0,this.view=void 0,this.settings=void 0,this.gameStateController=void 0,this.model=t,this.view=e,this.settings=o,this.gameStateController=i}var e=t.prototype;return e.Init=function(){this.view.SetText("Score "+this.model.Score)},e.AddScore=function(t){this.model.Score=this.model.Score+t,this.view.SetText("Score "+this.model.Score),this.model.Score>this.settings.FinishScore&&this.gameStateController.WinGame()},t}());e._RF.pop()}}}));

System.register("chunks:///_virtual/ScoreModel.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var c,t,o;return{setters:[function(e){c=e.createClass},function(e){t=e.cclegacy,o=e._decorator}],execute:function(){t._RF.push({},"e9a14qIYwRJFZug2ek9heky","ScoreModel",void 0);o.ccclass,o.property,e("ScoreModel",function(){function e(e){this.score=void 0,this.score=e}return c(e,[{key:"Score",get:function(){return this.score},set:function(e){this.score=e}}]),e}());t._RF.pop()}}}));

System.register("chunks:///_virtual/ScoreSettings.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i;return{setters:[function(t){e=t.createClass},function(t){i=t.cclegacy}],execute:function(){i._RF.push({},"3dbf4QAmc1NHZZcgsoAUDVK","ScoreSettings",void 0);t("ScoreSettings",function(){function t(t,e){this.startScore=void 0,this.finishScore=void 0,this.startScore=t,this.finishScore=e}return e(t,[{key:"StartScore",get:function(){return this.startScore}},{key:"FinishScore",get:function(){return this.finishScore}}]),t}());i._RF.pop()}}}));

System.register("chunks:///_virtual/ScoreView.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,i,o,n,c,a,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,c=e._decorator,a=e.RichText,s=e.Component}],execute:function(){var l,u,p,f,y;n._RF.push({},"1a22741C7FF+rLX7Ut8kgLo","ScoreView",void 0);var h=c.ccclass,g=c.property;e("ScoreView",(l=h("ScoreView"),u=g({type:[a]}),l((y=t((f=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return t=e.call.apply(e,[this].concat(n))||this,i(t,"text",y,o(t)),t}return r(t,e),t.prototype.SetText=function(e){this.text.string=e},t}(s)).prototype,"text",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=f))||p));n._RF.pop()}}}));

System.register("chunks:///_virtual/StartSceneView.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,r,i,o,c,a,s,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){o=t.cclegacy,c=t._decorator,a=t.Button,s=t.director,u=t.Component}],execute:function(){var l,p,f,S,y;o._RF.push({},"9f3dfmEQp1O1aDFlVvsvVc4","StartSceneView",void 0);var d=c.ccclass,h=c.property;t("StartSceneView",(l=d("StartSceneView"),p=h({type:[a]}),l((y=e((S=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o))||this,r(e,"startButton",y,i(e)),e}n(e,t);var o=e.prototype;return o.start=function(){this.OnStartClick()},o.OnStartClick=function(){this.startButton.node.on(a.EventType.CLICK,(function(t){s.preloadScene("GameScene",(function(){s.loadScene("GameScene")}))}),this)},e}(u)).prototype,"startButton",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=S))||f));o._RF.pop()}}}));
