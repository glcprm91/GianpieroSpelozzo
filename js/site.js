(function(){
var D=JSON.parse(document.getElementById('sitedata').textContent);
function $(i){return document.getElementById(i)}
var REDUCED=matchMedia('(prefers-reduced-motion: reduce)').matches;
var path=1,paused=false,tm=null,ri=0,openId=null;
function setOpen(id,on){var a=$(id);if(!a)return;a.classList.toggle('open',on);var b=a.querySelector('.more');if(b){b.setAttribute('aria-expanded',on);b.querySelector('span').textContent=on?D.less:D.more}}
function toggle(id){var prev=openId;if(prev)setOpen(prev,false);openId=(prev===id)?null:id;if(openId)setOpen(openId,true);var a=$(id);if(a)a.scrollIntoView({block:'start'})}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('button.more');if(b)toggle(b.getAttribute('data-id'))});
function fromHash(){if(/^#cs[1-5]$/.test(location.hash)){var id=location.hash.slice(1);if(openId&&openId!==id)setOpen(openId,false);openId=id;setOpen(id,true);var a0=$(id);if(a0)a0.scrollIntoView()}}
fromHash();addEventListener('hashchange',fromHash);
function order(){var cards=$('cases').querySelectorAll('.case');cards.forEach(function(x){x.style.order=''});if(path===2){var f=$('cs5');if(f)f.style.order='-2'}}
function setPath(p){path=p;$('p1').setAttribute('aria-pressed',p===1);$('p2').setAttribute('aria-pressed',p===2);$('lead').textContent=p===1?D.lead1:D.lead2;$('cta').textContent=p===1?D.cta1:D.cta2;order();startLoop()}
$('p1').onclick=function(){setPath(1)};$('p2').onclick=function(){setPath(2)};
function pzUi(){var b=$('pz');b.setAttribute('aria-pressed',paused);var l=paused?D.pz2:D.pz1;b.setAttribute('aria-label',l);b.title=l;b.innerHTML=paused?'<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1l9 5-9 5z" fill="currentColor"/></svg>':'<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1h3v10H2zM7 1h3v10H7z" fill="currentColor"/></svg>'}
function startLoop(){
 clearTimeout(tm);ri=0;var list=D.roles[String(path)];
 $('q').textContent=list[0][0];$('serpt').textContent=list[0][1];
 if(REDUCED)return;
 function hold(){tm=setTimeout(function(){if(paused)return hold();erase()},3000)}
 function erase(){var q=$('q');if(paused){return hold()}if(q.textContent.length>0){q.textContent=q.textContent.slice(0,-1);tm=setTimeout(erase,22)}else{ri=(ri+1)%list.length;type(0)}}
 function type(i){if(paused){tm=setTimeout(function(){type(i)},300);return}var w=list[ri][0];$('q').textContent=w.slice(0,i+1);if(i+1<w.length)tm=setTimeout(function(){type(i+1)},55+Math.random()*45);else{$('serpt').textContent=list[ri][1];hold()}}
 hold();
}
$('pz').onclick=function(){paused=!paused;pzUi()};
if(REDUCED)$('pz').hidden=true;
$('copy').onclick=function(){var t=$('mailtxt').textContent;function ok(){$('copy').textContent=D.copied;setTimeout(function(){$('copy').textContent=D.copy},1800)}
 function sel(){var r=document.createRange();r.selectNodeContents($('mailtxt'));var s=getSelection();s.removeAllRanges();s.addRange(r)}
 try{navigator.clipboard.writeText(t).then(ok,sel)}catch(e){sel()}};
startLoop();
})();
