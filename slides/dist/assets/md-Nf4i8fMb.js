import{_ as u}from"./slidev/Arrow.vue_vue_type_script_setup_true_lang-CkP53zLj.js";import{f,o as l,aK as i,b as g,w as v,g as x,e as r,ai as a,v as k,x as w,T as m}from"./modules/vue-BTPtaZYJ.js";import{I as p,aj as $}from"./index-rrfv9S9i.js";import{I as b}from"./slidev/default-DK2CKHz1.js";import"./modules/shiki-BdPiwYA1.js";const y={__name:"REPL",props:["code","height"],setup(c){p();const e=c,o=`https://limber.glimdown.com/edit?t=${encodeURIComponent(e.code.replaceAll("//--",""))}&format=gjs&editor=60v&forceEditor=true`,t=`
	<div class="iframe-chrome" style="height: ${e.height};">
	<div class="iframe-chrome-tab">
		REPL | limber.glimdown.com
	</div>
	<iframe src=${o}></iframe>
	</div>`;return(s,n)=>(l(),f("span",{innerHTML:t}))}},B={__name:"2.3-render.md__slidev_36",setup(c){const{$clicksContext:e,$frontmatter:o}=p();return e.setup(),(d,t)=>{const s=y,n=u,h=i("after"),_=i("click");return l(),g(b,k(w(m($)(m(o),35))),{default:v(()=>[t[0]||(t[0]=x("h1",null,"What happens when",-1)),r(s,{height:"40dvh",code:`import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
//--
export default class Demo extends Component {
  @tracked count = 0;
  increment = () => this.count++;
//--
  <template>
	<p>The count is: {{this.count}}</p>
    <button onclick={{this.increment}}>
      increment
    </button>
  </template>
}
`}),a(r(n,{x1:"600",y1:"140",x2:"640",y2:"190",color:"red"},null,512),[[h]]),a(r(n,{x1:"400",y1:"500",x2:"320",y2:"360",color:"red"},null,512),[[_]])]),_:1},16)}}};export{B as default};
