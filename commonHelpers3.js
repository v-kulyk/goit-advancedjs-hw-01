import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as s}from"./assets/vendor-1e54b975.js";const e=document.querySelector(".feedback-form"),t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(e.email.value=t.email,e.message.value=t.message);const m=s(o=>{const a={email:e.email.value,message:e.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(a))},500);e.addEventListener("input",m);e.addEventListener("submit",o=>{o.preventDefault();const a={email:e.email.value,message:e.message.value};console.log(a),e.reset(),localStorage.removeItem("feedback-form-state")});
//# sourceMappingURL=commonHelpers3.js.map