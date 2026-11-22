import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

const root=path.dirname(fileURLToPath(import.meta.url));
process.chdir(root);
fs.mkdirSync('build',{recursive:true});
fs.mkdirSync('pdf',{recursive:true});
const source=fs.readFileSync('main.tex','utf8');
const preamble=source.split('\\begin{document}')[0];
const counts=Array.from({length:8},(_,i)=>(fs.readFileSync(`chapters/chapter_${i+1}.tex`,'utf8').match(/\\pdfbookmark\[1\]/g)||[]).length);
const args=process.argv.slice(2);
const selected=args.length?args:['all'];
if(selected.some(x=>!['all','main',...counts.map((_,i)=>String(i+1))].includes(x)))throw Error('Usage: node build.mjs [all|main|1 ... 8]');
function compile(job,entry){
 for(let pass=1;pass<=2;pass++){
  const r=spawnSync('xelatex',['-interaction=nonstopmode','-halt-on-error','-output-directory=build',`-jobname=${job}`,entry],{encoding:'utf8',maxBuffer:16*1024*1024});
  const output=(r.stdout||'')+(r.stderr||'');fs.writeFileSync(`build/${job}-pass${pass}.txt`,output);
  if(r.error||r.status!==0)throw Error(`Compile failed: ${job}, pass ${pass}. See build/${job}-pass${pass}.txt\n${r.error||output.slice(-3000)}`);
 }
 const log=fs.readFileSync(`build/${job}.log`,'utf8');
 if(/^!|Overfull|Missing character|LaTeX Warning:|Package .* Warning:/m.test(log))throw Error(`Review LaTeX diagnostics: build/${job}.log`);
 fs.copyFileSync(`build/${job}.pdf`,`pdf/${job}.pdf`);
 console.log(`Built pdf/${job}.pdf`);
}
if(selected.includes('all')||selected.includes('main'))compile('main','main.tex');
for(let c=1;c<=8;c++)if(selected.includes('all')||selected.includes(String(c))){
 const page=2+counts.slice(0,c-1).reduce((a,b)=>a+b,0);
 const entry=`build/chapter_${c}_entry.tex`;
 fs.writeFileSync(entry,`${preamble}\\begin{document}\n\\setcounter{chapter}{${c-1}}\n\\setcounter{page}{${page}}\n\\input{chapters/chapter_${c}.tex}\n\\end{document}\n`);
 compile(`chapter_${c}`,entry);
}
