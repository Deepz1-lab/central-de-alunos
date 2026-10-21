export function validateLocalConfig(url:string,key:string):{url:string;key:string}{
 let parsed:URL;try{parsed=new URL(url);}catch{throw new Error('Configure o ambiente local antes de entrar.');}
 if(parsed.protocol!=='http:'||!['localhost','127.0.0.1','[::1]'].includes(parsed.hostname)||parsed.username||parsed.password)throw new Error('Este protótipo aceita somente o banco local.');
 let isPublic=key.startsWith('sb_publishable_');
 if(!isPublic){try{const payload=JSON.parse(atob(key.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')));isPublic=payload.role==='anon';}catch{/* configuração inválida */}}
 if(!isPublic)throw new Error('Use somente a chave pública local.');
 return {url:parsed.origin,key};
}
