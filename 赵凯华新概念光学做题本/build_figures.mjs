// Editable TikZ sources. Run with Node.js to regenerate the figures.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const R=String.raw;
const figs={
'1_2':R`\coordinate (O) at (0,0);\coordinate (X) at (2,0);\coordinate (Y) at (.8,.8);\coordinate (Z) at (0,2);
\draw[gray] (O)--(X)--(2,2)--(0,2)--cycle (O)--(.8,.8)--(2.8,.8)--(X) (2.8,.8)--(2.8,2.8)--(.8,2.8)--(Z) (.8,2.8)--(.8,.8) (2,2)--(2.8,2.8);
\filldraw[fill=gray!30] (X)--(Y)--(Z)--cycle;\draw[dashed] (O)--(Y);`,
'1_3':R`\coordinate (A) at (0,0);\coordinate (B) at (3,1.45);\coordinate (C) at (4,0);\coordinate (D) at (3,-1.45);
\draw (A)--(B)--(C)--(D)--cycle;\draw[ray] (3.8,2)--(1.5,.72);\draw[ray] (1.5,.72)--(1.9,-.92);\draw[ray] (1.9,-.92)--(2.45,1.18);\draw[ray] (2.45,1.18)--(3.25,-1.1);\draw[ray] (3.25,-1.1)--(4.5,-1.6);
\node[left] at(A){$A$};\node[above] at(B){$B$};\node[right] at(C){$C$};\node[below] at(D){$D$};\node at(.55,0){$\alpha$};\node at(3.55,0){$2\alpha$};\node at(3,.9){$\beta$};\node at(3,-.9){$\beta$};`,
'1_7':R`\begin{scope}\coordinate(O)at(0,0);\coordinate(R)at(1.7,1.1);\coordinate(P)at(2.5,.2);\coordinate(Q)at(1.9,-.6);
\draw (O)--(R)--(P)--(O)--(Q)--(P);\draw[gray] (1.7,1.1) arc (33:-25:2.03);\draw[gray] (2.2,1.7) arc(37:-28:2.75);
\foreach \p in {O,R,P,Q}\node[above]at(\p){$\p$};\node at(1,-1.1){(a)};\node at(1.9,-.9){$n'$};\node at(2.65,-.75){$n$};\end{scope}
\begin{scope}[xshift=4cm]\draw(0,0)--(1.6,2.7)--(3.2,0)--cycle;\draw[ray](-.4,.2)--(.85,1.43);\draw[ray](.85,1.43)--(2.4,1.35);\draw[ray](2.4,1.35)--(3.7,.8);\draw[dashed](.4,1.17)--(1.4,1.75) (1.9,1.06)--(2.9,1.64);
\node[above]at(1.6,2.7){$A$};\node[left]at(0,0){$B$};\node[right]at(3.2,0){$C$};\node[above left]at(.85,1.43){$E$};\node[above right]at(2.4,1.35){$F$};\node[left]at(-.4,.2){$D$};\node[right]at(3.7,.8){$G$};\node at(1.6,-.45){(b)};\node at(.5,1.8){$N_1$};\node at(1.3,1.05){$N_2$};\node at(2.7,1.8){$N_3$};\node at(2,1.0){$N_4$};\node at(1.6,1.9){$n$};\node at(2.5,2.4){$n'$};\end{scope}`,
'1_11':R`\draw(0,0)--(0,2.6) (3,0)--(3,2.6) (0,0)--(3,0);\draw(0,1.8)--(3,1.8);\filldraw[fill=gray!15](2,1.35)rectangle(3,1.8);\node at(2.5,1.58){玻璃};\node at(1.5,2.2){空气};\node at(1.5,.35){水};\draw[ray](.3,.45)--(1.2,1.8);\draw[ray](1.65,.3)--(2.35,1.35);\node at(.4,.8){1};\node at(1.7,.65){2};`,
'1_13':R`\filldraw[fill=gray!12](0,-.65)rectangle(5,.65);\draw(0,-.55)--(5,-.55) (0,.55)--(5,.55);\draw[dashed](-1.2,0)--(5.7,0);\draw[ray](-1.2,-.45)--(0,0);\draw[ray](0,0)--(2.3,.55);\draw[ray](2.3,.55)--(4.5,0);\draw[dashed](2.3,-.3)--(2.3,1);\node at(-.55,.35){$n_0$};\node at(4.5,.35){$n_1$};\node[above]at(4.6,.65){$n_2$};\node at(-.7,-.22){$\theta_1$};\node at(1,.13){$\theta'_1$};\node at(2.6,.2){$\theta_2$};`,
'1_15':R`\draw(0,0)--(3,0)--(3,-2)--cycle;\draw[line width=2pt,gray](0,.1)--(3,.1);\draw[ray](-.5,.7)--(1.1,.05);\foreach \y in {-1,-1.5,-2}\draw[ray](1.1,0)--(3,\y)--(4.1,{\y-.5});\node[left]at(0,0){$B$};\node[right]at(3,0){$A$};\node[right]at(3,-2){$C$};\node at(1.8,-.6){$n_g$};\node at(2.7,.35){$n$};\node at(1.8,.8){毛玻璃};\node at(-.6,.9){光源};\draw[dashed](2,-1)--(4,-1);\node at(3.45,-1.35){$i'$};`,
'1_22':R`\draw[pattern=north east lines](0,-.12)rectangle(4,0);\fill(1,0)circle(1.5pt) node[below=5pt]{$A$};\fill(3.5,0)circle(1.5pt)node[below=5pt]{$B$};\fill(1,2.5)circle(2pt)node[above]{$L$};\draw[dashed](1,0)--(1,2.5);\draw[<->](.55,0)--node[left]{$1.0\,\mathrm m$}(.55,2.5);\draw[<->](1,.3)--node[above]{$1.0\,\mathrm m$}(3.5,.3);`,
'2_7':R`\foreach \x/\y/\name/\sgn in {0/0/a/1,4/0/b/1,0/-2.8/c/-1,4/-2.8/d/-1}{\begin{scope}[shift={(\x,\y)}]\draw(-1.6,0)--(1.8,0);\draw(0,-.85)to[bend right=20](0,.85);\node at(-1.5,.9){(\name)};\node at(-.3,-.45){$n$};\node at(.4,-.45){$n'$};\fill({-\sgn},0)circle(1pt)node[below]{$C$};\draw[ray](-1.6,{.0+mod(\x,3)*.1})--(0,.55);\ifnum\sgn=1\draw[ray](0,.55)--(1.5,0);\draw[dashed](-1,0)--(0,.55);\else\draw[ray](0,.55)--(.8,1.1);\draw[dashed](0,.55)--(1,0);\fi\end{scope}}`,
'2_10':R`\filldraw[fill=gray!10](-2,0)rectangle(2,-.8);\draw[dashed](0,-3)--(0,3);\coordinate(Q)at(-.7,1.9);\draw[ray](Q)--(.45,0)--(1.7,1.9);\draw[ray](.45,0)--(.8,-.8)--(1.15,0)--(2.3,1.9);\draw[dashed](.45,0)--(-.7,-1.9) (1.15,0)--(-.7,-2.8);\fill(Q)circle(1.2pt)node[above]{$Q$};\node[left]at(-.7,-1.9){$Q'_1$};\node[left]at(-.7,-2.8){$Q'_2$};\node at(1.5,-.4){$n$};\node at(-1.5,.4){$n'=1$};\draw[<->](-1.6,0)--node[left]{$h$}(-1.6,-.8);\node at(1.65,2.6){1};\node at(2.4,2.6){2};`,
'2_11':R`\filldraw[fill=gray!10](0,-1)rectangle(.25,1);\draw[dashed](-1,0)--(5,0);\foreach\y in {-.8,-.4,.4,.8}{\draw[ray](-1,\y)--(0,\y)--(.25,{\y*.98})--(4.3,0);\draw[dashed](0,\y)--(4,0);}\draw(4,-.2)--(4,.2) (4.3,-.2)--(4.3,.2);\node[above]at(4,.2){$P$};\node[above]at(4.5,.2){$P'$};\draw[<->](.1,-1.3)--node[below]{$15\,\mathrm{cm}$}(4,-1.3);\draw[<->](4,-.55)--node[below]{$3\,\mathrm{mm}$}(4.3,-.55);`,
'2_17':R`\fill[pattern=dots](-1.2,-1.5)rectangle(1.2,1.5);\filldraw[fill=white](.25,-1.35)to[bend left=40](-.55,0)to[bend left=40](.25,1.35)--cycle;\draw[line width=1pt](.35,-1.35)--(.35,1.35);\node at(.75,0){水};\node at(-.25,0){空气};`,
'2_24':R`\draw(-1,0)--(4.8,0);\draw[->](-.6,0)--(-.6,.6)node[above]{物};\draw[<->](1,-1)--(1,1)node[above]{$L_1$};\draw[>-<](2,-1)--(2,1)node[above]{$L_2$};\draw(4,-.7)--(4,.9)node[above]{$S_2$};\draw(4.5,-.7)--(4.5,.9)node[above]{$S_1$};\draw[<->](2,-.55)--node[below]{$20\,\mathrm{cm}$}(4.5,-.55);\draw[<->](4,-1.1)--node[below]{$5\,\mathrm{cm}$}(4.5,-1.1);`,
'2_27':R`\foreach\x/\y/\name/\swap/\reverse in {0/0/a/0/0,4/0/b/0/1,0/-2.8/c/1/0,4/-2.8/d/1/1}{\begin{scope}[shift={(\x,\y)}]\draw(-2,0)--(1.6,0);\ifnum\reverse=0\def\h{0}\def\hh{.3}\else\def\h{.3}\def\hh{0}\fi\draw(\h,-.8)--(\h,.8)node[above]{$H$};\draw(\hh,-.8)--(\hh,.8)node[above]{$H'$};\node at(-1.9,.75){(\name)};\node[above]at(-1.6,0){$P$};\node[below]at(-1.6,0){$Q$};\fill(-1.6,0)circle(1pt);\ifnum\swap=0\node[below]at(-1,0){$F$};\node[below]at(1,0){$F'$};\else\node[below]at(-1,0){$F'$};\node[below]at(1,0){$F$};\fi\end{scope}}`,
'2_28':R`\draw(-2.5,0)--(4,0);\draw[->](-1.8,0)node[below]{$Q$}--(-1.8,.8)node[above]{$P$};\draw(0,-1)--(0,1)node[above]{$H$};\draw(2,-1)--(2,1)node[above]{$H'$};\fill(.8,0)circle(1pt)node[below]{$F$};\fill(1.2,0)circle(1pt)node[below]{$F'$};`,
'2_29':R`\draw(-1.8,0)--(5.5,0);\foreach\x/\lab in {0/H'_1,.4/H_1,3/H_2,3.4/H'_2}\draw(\x,-.9)--(\x,.9)node[above]{$\lab$};\foreach\x/\lab in {-1/F_1,1/F'_1,1.8/F'_2,4.8/F_2}\fill(\x,0)circle(1pt)node[below]{$\lab$};`,
'2_30':R`\draw(-3,0)--(3,0);\draw(-.1,-1.2)--(-.1,1.2)node[above]{$H$};\draw(.5,-1.2)--(.5,1.2)node[above]{$H'$};\draw(-2,0)node[below]{$A$}--(-1.4,0)node[below]{$B$}--(-1.4,.65)node[above]{$C$}--(-2,.65)node[above]{$D$}--cycle;\fill(-.85,0)circle(1pt)node[below]{$F$};\fill(1.3,0)circle(1pt)node[below]{$F'$};`,
'2_35':R`\draw(-2.5,0)--(2.5,0);\draw(0,-1.2)--(0,1.2)node[above]{$H$};\draw(.4,-1.2)--(.4,1.2)node[above]{$H'$};\fill(-1.5,0)circle(1pt)node[below]{$F$};\fill(1.7,0)circle(1pt)node[below]{$F'$};\draw[ray](-2,-.75)--(0,-.25)node[pos=.3,below]{1};`,
'2_36':R`\draw(-2,0)--(2,0);\draw(0,-1.2)--(0,1.2)node[above]{$H$};\draw(.4,-1.2)--(.4,1.2)node[above]{$H'$};\draw[ray](-1.5,.5)--(0,1);\draw(0,1)--(.4,1);\draw[ray](.4,1)--(1.6,.3)node[pos=.7,above]{$1'$};\node at(-1.1,.9){1};\draw[ray](-1.8,.3)--(-.2,-.4)node[pos=.65,below]{2};\node at(-.15,-.15){$N$};\node at(.65,-.15){$N'$};`,
'2_50':R`\draw(-4,0)--(4.8,0);\draw(-4,-.5)--(-4,1)node[above]{物平面};\node[below]at(-4,0){$Q$};\draw[<->](0,-.8)--(0,.8)node[above]{$L_1$};\draw[<->](4,-.8)--(4,.8)node[above]{$L_2$};\draw[very thick](3,.4)--(3,1) (3,-.4)--(3,-1);\node[right]at(3,.65){$D$};\node[right]at(3,-.65){$D$};\foreach\x/\lab in {-1/F_1,1/F'_1,3.5/F_2,4.5/F'_2}\fill(\x,0)circle(1pt)node[below]{$\lab$};\draw[<->](-4,-1.35)--node[below]{$s=10a$}(0,-1.35);\draw[<->](0,-1.35)--node[below]{$l=4a$}(3,-1.35);\draw[<->](-1,-1.85)--node[below]{$d=5a$}(4,-1.85);\draw[<->](-.3,0)--node[left]{$r_1$}(-.3,.8);\draw[<->](3.7,0)--node[left]{$r_2$}(3.7,.8);\node at(2.8,.3){$r_3$};`,
'2_51':R`\draw(-.5,0)--(5,0);\draw(0,-1.1)to[bend left=15](0,1.1)--(.15,1.1)--(.15,-1.1)--cycle;\draw(3,-.8)to[bend left=20](3,.8)to[bend left=20]cycle;\node[above]at(0,1.1){$L_1$};\node[above]at(3,.8){$L_2$};\draw[line width=2pt](1.5,.4)--(1.5,1.3) (1.5,-.4)--(1.5,-1.3);\node[left]at(1.5,.5){$A$};\node[left]at(1.5,-.5){$A$};\fill(1.5,0)circle(1pt)node[below]{$F_2$};\fill(4.5,0)circle(1pt)node[below]{$F'_2$};\foreach\a/\b in {0/1.5,1.5/3,3/4.5}\draw[<->](\a,-1.5)--node[below]{$a$}(\b,-1.5);`,
'3_4':R`\draw[rounded corners=12pt](-.3,1)--(-2,1)--(-2,-1)--(-.3,-1);\draw[rounded corners=8pt](-.3,.65)--(-1.65,.65)--(-1.65,-.65)--(-.3,-.65);\draw[rounded corners=12pt](.3,1)--(2,1)--(2,-1)--(.3,-1);\draw[rounded corners=8pt](.3,.65)--(1.65,.65)--(1.65,-.65)--(.3,-.65);\draw(-.3,1)--(-.3,1.8) (.3,1)--(.3,1.8) (-.3,-1)--(-.3,-1.8) (.3,-1)--(.3,-1.8);\draw[->](0,1.8)--(0,1.15);\draw[->](0,-1.15)--(0,-1.8);\node[right]at(.3,1.6){$T$};\node[right]at(.3,-1.6){$O$};\node[left]at(-2,0){$B$};\node[right]at(2,0){$A$};\draw[<->](-1.2,0)--node[above]{$d$}(-.5,0);`,
'3_6':R`\draw[dashed](-2,0)--(4,0);\fill(-1.6,0)circle(1.3pt)node[left]{$S$};\draw(0,-1)to[bend left=20](0,1)to[bend left=20]cycle;\draw(.6,-1)--(.6,1)--(.85,0)--cycle;\draw(3.5,-1.4)--(3.5,1.4);\node[below]at(0,-1){薄透镜};\node[above]at(.8,1.05){双棱镜};\node[right]at(3.5,1){屏};`,
'3_8':R`\draw[dashed](-2,0)--(5,0);\fill(-1.7,0)circle(1.2pt)node[left]{$S$};\draw(0,0)--(0,1)to[bend left=20](.1,0);\draw(.8,0)--(.8,-1)to[bend left=20](.9,0);\draw[ray](-1.7,0)--(0,1);\draw[ray](0,1)--(3.2,0)--(4,-.25);\draw[ray](-1.7,0)--(.8,-1);\draw[ray](.8,-1)--(3.8,0)--(4.5,.24);\node[above]at(0,1){$L_1$};\node[below]at(.8,-1){$L_2$};\fill(3.2,0)circle(1pt)node[above]{$S'_1$};\fill(3.8,0)circle(1pt)node[above]{$S'_2$};`,
'3_9':R`\draw(0,-1.3)--(0,1.3) (4,-1.5)--(4,1.5);\fill(-1.5,0)circle(1.2pt)node[left]{$S$};\fill(0,.45)circle(1.5pt)node[left]{$S_1$};\fill(0,-.45)circle(1.5pt)node[left]{$S_2$};\draw[ray](-1.5,0)--(0,.45);\draw[ray](-1.5,0)--(0,-.45);\draw[ray](0,.45)--(4,.9);\draw[ray](0,-.45)--(4,.9);\draw(.3,.32)rectangle(1.3,.72);\draw[<->](.3,.9)--node[above]{$l$}(1.3,.9);\node[right]at(4,.9){$P$};\node[right]at(4,0){$O$};`,
'3_10':R`\draw[dashed](-1.8,0)--(6,0);\fill(-1.6,0)circle(1.2pt);\foreach\x/\lab in {0/L_1,4/L_2}\draw(\x,-1)to[bend left=20](\x,1)to[bend left=20]cycle node[above]{$\lab$};\draw(5.6,-1.3)--(5.6,1.3);\foreach\y/\name in {.55/T_1,-.55/T_2}{\draw(.6,{\y-.18})rectangle(3.4,{\y+.18});\draw[ray](-1.6,0)--(0,\y)--(4,\y)--(5.6,0);\node[above]at(2,{\y+.18}){$\name$};\node[left]at(.5,\y){$S$};}`,
'3_14':R`\filldraw[fill=gray!30](-.7,0)rectangle(0,1.3);\filldraw[fill=gray!30](2.4,0)rectangle(3.1,1.3);\draw[thick](-1,0)--(3.4,0);\filldraw[fill=gray!8,rotate around={2:(0,1.4)}](-1,1.4)rectangle(3.4,1.6);\node at(-.35,.65){$G_1$};\node at(2.75,.65){$G_2$};\node[right]at(3.4,1.6){$T$};\draw[<->](0,-.25)--node[below]{$l$}(2.4,-.25);`,
'3_20':R`\draw[thick](-2,0)arc(180:0:2)--cycle;\draw[thick](-2.1,0)arc(180:0:2.1);\fill(-.22,0)rectangle(.22,.12);\node[below]at(0,0){发光区};\foreach\a in {25,55,85,115,145}\draw[ray](0,0)--(\a:2.5);`,
'3_32':R`\filldraw[fill=gray!5](0,-1)rectangle(4,0);\filldraw[fill=gray!15](0,0)rectangle(4,.45);\draw[line width=1.4pt](0,0)--(4,0) (0,.45)--(4,.45);\foreach\x in {.3,1.1,1.9,2.7,3.5}\draw[ray](\x,1.5)--(\x,.65);\draw[<->](4.3,0)--node[right]{$h$}(4.3,.45);\node at(2,-.5){玻璃};\node at(2,.23){透明膜};\node[right]at(4,.8){银膜};`,
'4_11':R`\draw[dashed](-3,0)--(5,0);\draw(-1,-1.7)to[bend left=12](-1,1.7)to[bend left=12]cycle;\draw(2,-1.7)to[bend left=12](2,1.7)to[bend left=12]cycle;\draw[line width=2pt](.5,.7)--(.5,1.8) (.5,-.7)--(.5,-1.8);\draw[thick](4.5,-2)--(4.5,2);\fill(-2.7,-.5)circle(1.3pt)node[left]{$S$};\foreach\y in {-1.2,-.6,0,.6,1.2}{\draw[ray](-2.7,-.5)--(-1,\y);\draw[ray](-1,\y)--(2,{\y+.6});\draw[ray](2,{\y+.6})--(4.5,.5);}\node[right]at(4.5,.5){$P_0$};\node[right]at(4.5,.85){$P_\theta$};\draw[dashed](.5,0)--(4.5,.85);\node at(-.2,.1){$\theta_0$};\node at(1.2,.15){$\theta$};\draw[<->](.8,-.7)--node[right]{$a$}(.8,.7);`,
'4_23':R`\draw[thick](0,-2)--(0,2)node[above]{衍射屏};\draw(-2,0)--(2,0);\foreach\y in {-1,0,1}\draw[ray](-2,{\y-1})--(0,\y)--(2,{\y+.8});\node at(-.7,-.25){$\theta_0$};\node at(.8,.2){$\theta$};`,
'4_25':R`\fill[black!85](-.6,-1.5)rectangle(4.6,1.5);\foreach\x in {0,1,3}\fill[white](\x,-1.1)rectangle({\x+.18},1.1);\foreach\x in {0,1,3}\draw[<->,white](\x,1.3)--node[above]{$a$}({\x+.18},1.3);\draw[<->,white](.09,-1.3)--node[below]{$d$}(1.09,-1.3);\draw[<->,white](1.09,-1.3)--node[below]{$2d$}(3.09,-1.3);`,
'4_26':R`\fill[black!85](-.5,-1.5)rectangle(3.5,1.5);\fill[white](0,-1.1)rectangle(.2,1.1);\fill[white](1.5,-1.1)rectangle(1.9,1.1);\draw[<->,white](0,1.3)--node[above]{$a$}(.2,1.3);\draw[<->,white](1.5,1.3)--node[above]{$2a$}(1.9,1.3);\draw[<->,white](.1,-1.3)--node[below]{$d$}(1.7,-1.3);`,
'4_27':R`\fill[black!85](-.4,-1)rectangle(6.1,1);\foreach\x in {0,1.2,2.4,3.6,4.8}\foreach\dx in {0,.4}\fill[white]({\x+\dx},-.8)rectangle({\x+\dx+.2},.8);\draw[<->](0,-1.3)--node[below]{$a$}(.2,-1.3);\draw[<->](.2,-1.3)--node[below]{$a$}(.4,-1.3);\draw[<->](.6,-1.3)--node[below]{$3a$}(1.2,-1.3);`,
'5_9':R`\draw[->](0,-2)--(0,2.2)node[above]{$x$};\draw[->](-.5,0)--(1.2,0);\foreach\y in {-1.8,-1.5,-1.2,-.9,-.6,-.3,0,.3,.6,.9,1.2,1.5,1.8}\fill(0,\y)circle(1.6pt);\draw[<->](.35,.3)--node[right]{$a$}(.35,.6);`,
'5_11':R`\begin{scope}\draw[->](0,-1.5)--(0,1.5)node[above]{$y$};\draw[->](-2,0)--(.6,0)node[right]{$z$};\draw[very thick](.05,-.9)--(.05,.9);\foreach\y in {-.4,0,.4}{\draw[ray](-1.8,{1+\y})--(0,\y);\draw[ray](-1.8,{-1+\y})--(0,\y);}\node at(-2,1.3){$R$};\node at(-2,-1.3){$O$};\node at(-.7,.25){$\theta_R$};\node at(-.7,-.25){$\theta_O$};\node[right]at(0,-.8){$\Sigma$};\node at(-.8,-1.7){(a)};\end{scope}
\begin{scope}[xshift=4cm]\draw[dashed](-2,0)--(.6,0);\draw[very thick](0,-1)--(0,1);\foreach\y in {-.4,0,.4}\draw[ray](-1.8,{1+\y})--(0,\y);\node at(-1.9,1.5){$R'$};\node at(-.8,.25){$\theta/2$};\node[right]at(0,-.8){$\Sigma$};\node at(-.7,-1.7){(b)};\end{scope}`,
'5_13':R`\begin{scope}\draw[->](0,-1.4)--(0,1.2)node[above]{$y$};\draw[->](-2.3,0)--(.4,0)node[right]{$z$};\draw[very thick](.05,-1)--(.05,.9);\foreach\y in {-.4,.3,.8}{\draw[ray](-2,\y)--(0,\y);\draw[ray](-2,-1.1)--(0,\y);}\node[left]at(-2,.8){$R$};\node[left]at(-2,-1.1){$O$};\draw[<->](-2,-1.45)--node[below]{$z_0$}(0,-1.45);\node at(-1.8,-.55){$y_0$};\node[right]at(0,-1){$\Sigma$};\node at(-1,-1.9){(a)};\end{scope}
\begin{scope}[xshift=4cm]\draw[->](0,-1.4)--(0,1.2)node[above]{$y$};\draw[->](-2.3,0)--(.4,0)node[right]{$z$};\draw[very thick](.05,-1)--(.05,.9);\foreach\y in {-.7,0,.7}\draw[ray](-2,0)--(0,\y);\node[left]at(-2,0){$R'$};\draw[<->](-2,-1.45)--node[below]{$z_c$}(0,-1.45);\node[right]at(0,-1){$\Sigma$};\node at(-1,-1.9){(b)};\end{scope}`,
'6_8':R`\draw(-1.8,0)--(1.8,0) (-1.8,-.5)--(1.8,-.5);\draw[ray](-1.5,2)--(0,0)node[pos=.2,left]{$I_0$};\draw[ray](0,0)--(1.5,2)node[pos=.7,left]{$0.1I_0$};\draw[ray](0,0)--(.35,-.5);\draw[ray](.35,-.5)--(.7,0);\draw[ray](.7,0)--(1.6,1.3);\draw[ray](.35,-.5)--(1.5,-2);\node at(.3,-.2){2};\node at(.6,-.3){3};\node at(1.05,-.7){4};`,
'6_14':R`\draw[thick](-2,0)arc(180:0:2)--cycle;\draw[line width=2pt](-.45,0)--(.45,0);\node[below]at(-.45,0){$A$};\node[below]at(.45,0){$B$};\foreach\a in {25,55,85,115,145}\draw[ray](0,0)--(\a:1.65);\node at(0,2.4){空气};\node at(0,1.7){砷化镓};`,
'6_15':R`\draw[thick](-2,0)arc(180:0:2)--cycle;\draw[thick](-2.12,0)arc(180:0:2.12)--cycle;\draw[line width=2pt](-.45,0)--(.45,0);\foreach\a in {25,55,85,115,145}\draw[ray](0,0)--(\a:1.65);\draw[->](2,2)--(1.25,1.7);\node[above]at(2,2){氧化硅};`,
'6_21':R`\foreach\x/\name/\ang in {0/A/30,2.4/B/50}{\filldraw[fill=gray!10](\x,-.8)--({\x+.9},-.25)--({\x+.9},1.45)--(\x,.9)--cycle;\draw[->]({\x+.25},.15)--++(\ang:.7);\node at({\x+.55},1.1){$\name$};}\draw[ray](-1,0)--(0,0);\draw[ray](.9,0)--(2.4,0);\draw[ray](3.3,0)--(4.2,0);\draw[->](4,-.5)arc(-90:45:.45);\node[right]at(4.4,-.05){$\alpha$};`
};
figs['3_13']=R`\begin{scope}[yshift=2cm]\clip(0,0)circle(1);\fill[gray!15](-1,-1)rectangle(1,1);\foreach\x in {-.94,-.7,-.46,-.22,.02,.26,.5,.74,.98}\fill[black!85](\x,-1)rectangle({\x+.12},1);\end{scope}\draw(0,2)circle(1);\draw(1.12,1.2)--(1.12,2.8)node[midway,right]{细丝};\foreach\x in {-1,-.5,0,.5,1}\draw[->](\x,.7)--(\x,.2);\draw(-1.25,-.3)--(1.25,-.1)--(1.25,-.55)--(-1.25,-.75)--cycle;\draw(-1.25,-.75)rectangle(1.25,-1.05);\draw(1.2,-.57)circle(.07);\draw[<->](1.5,-.5)--node[right]{$D$}(1.5,-.75);`;
figs['3_16']=R`\foreach\x/\name in {0/a,4/b}{\begin{scope}[xshift=\x cm]\filldraw[fill=gray!10](0,0)--(1.5,-1.2)--(2.5,-.6)--(1, .6)--cycle;\draw(0,0)--(0,-.6)--(1.5,-1.8)--(2.5,-1.2)--(2.5,-.6) (1.5,-1.2)--(1.5,-1.8);\draw(0,-.3)--(1.5,-1.5)--(2.5,-.9);\draw(.2,.2)--(1.7,-1)--(2.5,-.6);\draw(.3,.1)--(1.1,.5);\draw(1.7,-1)--(1.1,.5);\foreach\a in {.2,.6,1,1.4,1.8,2.2}\draw[->](\a,1.6)--(\a,.9);\node at(.25,-.3){P};\node at(.4,-.7){N};\draw[<->](-.2,0)--node[left]{$x_j$}(-.2,-.3);\node at(1.2,-3.7){(\name)};\end{scope}}
\begin{scope}[yshift=-3.3cm]\draw(0,0)rectangle(2.5,1.2);\clip(0,0)rectangle(2.5,1.2);\foreach\a in {.4,.8,1.15,1.45,1.7,1.9,2.08,2.24,2.38,2.5}\draw[line width=2pt](\a,0)--(\a,1.2);\end{scope}
\begin{scope}[xshift=4cm,yshift=-3.3cm]\draw(0,0)rectangle(2.5,1.2);\begin{scope}\clip(.4,0)rectangle(2.5,1.2);\foreach\y in {-3,-2.85,...,3}\draw(0,\y)--(3,{\y-2});\end{scope}\draw[dashed](.4,0)--(.4,1.2);\draw[line width=1.1pt](.4,.95)--(1.05,.95)--(2.3,.12);\draw[line width=1.1pt](.4,.4)--(1.05,.4)--(1.65,0);\node[right]at(1.05,.95){$A$};\node[right]at(1.05,.4){$B$};\end{scope}`;
figs['4_5']=R`\foreach\x/\y/\k in {0/0/1,4/0/2,8/0/3,0/-3.5/4,4/-3.5/5,8/-3.5/6}{\begin{scope}[shift={(\x,\y)}]\draw(-1,-1)rectangle(1,1);\ifnum\k<5\fill[black!80](-1,-1)rectangle(1,1);\fi
\ifcase\k\or\fill[white](0,0)circle(.5);\draw[white,line width=1.8pt](0,0)circle(.78);\draw(.5,0)--(1.4,.25)node[right]{$b+\lambda/2$};\draw(.7,.32)--(1.4,.65)node[right]{$b+3\lambda/4$};\draw(.75,.6)--(1.4,.98)node[right]{$b+\lambda$};
\or\draw[white,line width=1.8pt](0,0)circle(.78);\draw(.78,0)--(1.4,.3)node[right]{$b+\lambda$};\draw(.7,.4)--(1.4,.8)node[right]{$b+5\lambda/4$};
\or\fill[white](0,-1)rectangle(1,1);
\or\fill[white](0,0)circle(.5);\fill[white](0,-.8)arc(-90:90:.8)--(0,.5)arc(90:-90:.5)--cycle;\draw(.5,0)--(1.3,.3)node[right]{$b+\lambda/2$};\draw(.8,.3)--(1.3,.8)node[right]{$b+\lambda$};
\or\fill[black!80](0,0)circle(.78);\fill[white](0,0)circle(.5);\draw(.5,0)--(1.3,.3)node[right]{$b+\lambda/2$};\draw(.75,.2)--(1.3,.7)node[right]{$b+3\lambda/4$};
\or\fill[black!80](-1,-1)rectangle(0,0);\fill[white](0,0)circle(.78);\fill[black!80](0,0)--(-.78,0)arc(180:270:.78)--cycle;\fill[white](0,0)circle(.5);\fill[black!80](0,0)--(-.5,0)arc(180:270:.5)--cycle;\draw(0,0)circle(.78);\draw(0,0)circle(.5);\draw(.5,.1)--(1.3,.3)node[right]{$b+\lambda/2$};\draw(.7,.4)--(1.3,.8)node[right]{$b+\lambda$};\fi\node at(0,-1.3){(\k)};\end{scope}}`;
// Four distinct real/virtual object and image configurations in the source.
figs['1_2']=R`\draw[gray](0,0)--(2,0)--(2,2)--(0,2)--cycle (0,0)--(.65,.65)--(2.65,.65)--(2,0) (2.65,.65)--(2.65,2.65)--(.65,2.65)--(0,2) (.65,2.65)--(.65,.65) (2,2)--(2.65,2.65);\filldraw[fill=gray!25](0,0)--(.65,2.65)--(2.65,.65)--cycle;\draw[dashed,gray](.65,.65)--(0,0) (.65,.65)--(.65,2.65) (.65,.65)--(2.65,.65);`;
figs['1_3']=R`\coordinate(A)at(0,0);\coordinate(B)at(3,1.45);\coordinate(C)at(4,0);\coordinate(D)at(3,-1.45);\filldraw[fill=gray!5](A)--(B)--(C)--(D)--cycle;\draw[ray](3.9,2.1)--(3.14,1.25);\draw[ray](3.14,1.25)--(1.7,-.82);\draw[ray](1.7,-.82)--(2.05,.99);\draw[ray](2.05,.99)--(3.62,-.55);\draw[ray](3.62,-.55)--(4.6,-.9);\draw[line width=1.4pt,gray](A)--(B) (A)--(D);\node[left]at(A){$A$};\node[above]at(B){$B$};\node[right]at(C){$C$};\node[below]at(D){$D$};\node at(.55,0){$\alpha$};\node at(3.55,0){$2\alpha$};\node at(3,1.1){$\beta$};\node at(3,-1.1){$\beta$};`;
figs['1_7']=figs['1_7'].replaceAll('$N_2$',"$N'_1$").replaceAll('$N_3$','$N_2$').replaceAll('$N_4$',"$N'_2$");
figs['2_7']=R`\foreach\x/\y/\name/\curv/\mode in {0/0/a/1/0,4/0/b/1/1,0/-2.7/c/-1/0,4/-2.7/d/-1/1}{\begin{scope}[shift={(\x,\y)}]\draw(-1.8,0)--(1.8,0);\ifnum\curv=1\draw(-.18,-.85)to[bend right=20](-.18,.85);\else\draw(.18,-.85)to[bend left=20](.18,.85);\fi\node at(-1.8,.9){(\name)};\node at(-.35,-.4){$n$};\node at(.45,-.4){$n'$};\fill({-\curv*.85},0)circle(1pt)node[below]{$C$};\draw[dashed]({-\curv*.85},0)--(0,.55)--({\curv*.45},.85);
\ifnum\mode=0\draw[ray](-1.7,0)--(0,.55);\ifnum\curv=1\draw[ray](0,.55)--(1.6,0);\else\draw[ray](0,.55)--(.8,1.1);\fi\else\draw[ray](-1.3,1)--(0,.55);\ifnum\curv=1\draw[ray](0,.55)--(.8,0);\draw[dashed](0,.55)--(1.6,0);\else\draw[ray](0,.55)--(1,.85);\draw[dashed](-1.7,0)--(0,.55);\draw[dashed](0,.55)--(1.6,0);\fi\fi\end{scope}}`;
// Corrections checked against the supplementary exercise PDF, 2026-11-24.
figs['2_27']=figs['2_27'].replace(R`\node[above]at(-1.6,0){$P$};`,'');
figs['2_50']=R`\begin{scope}[x=.65cm]\draw(-10.5,0)--(7.5,0);\draw(-10,-.5)--(-10,1)node[above]{物平面};\node[below]at(-10,0){$Q$};\draw[<->](0,-.9)--(0,.9)node[above]{$L_1$};\draw[<->](6,-.9)--(6,.9)node[above]{$L_2$};\draw[very thick](4,.3)--(4,.95) (4,-.3)--(4,-.95);\node[right]at(4,.65){$D$};\node[right]at(4,-.65){$D$};\foreach\x/\lab in {-2/F_1,2/F'_1,5/F_2,7/F'_2}\fill(\x,0)circle(1pt)node[below]{$\lab$};\draw[<->](-10,-1.3)--node[below]{$s=10a$}(0,-1.3);\draw[<->](0,-1.3)--node[below]{$l=4a$}(4,-1.3);\draw[<->](0,-1.95)--node[below]{$d=6a$}(6,-1.95);\draw[densely dotted](0,-.9)--(0,-2.1) (6,-.9)--(6,-2.1);\draw[<->](-.5,0)--node[left]{$r_1$}(-.5,.9);\draw[<->](5.6,0)--node[left]{$r_2$}(5.6,.9);\draw[<->](3.65,0)--node[left]{$r_3$}(3.65,.3);\end{scope}`;
figs['5_9']=R`\draw[->](0,-2)--(0,2.2)node[above]{$x$};\draw[->](.8,0)--(-.8,0)node[left]{$y$};\foreach\y in {-1.8,-1.5,-1.2,-.9,-.6,-.3,0,.3,.6,.9,1.2,1.5,1.8}\fill(0,\y)circle(1.6pt);\draw[<->](.35,.3)--node[right]{$d$}(.35,.6);`;
figs['3_10']=R`\draw[dashed](-1.8,0)--(6,0);\fill(-1.6,0)circle(1.2pt);\foreach\x/\lab in {0/L_1,4/L_2}{\draw(\x,-1)to[bend left=20](\x,1)to[bend left=20]cycle;\node[above]at(\x,1){$\lab$};}\draw[thick](.45,.8)--(.45,.2) (.45,-.2)--(.45,-.8);\draw(5.6,-1.3)--(5.6,1.3);\foreach\y/\name/\sname in {.55/T_1/S_1,-.55/T_2/S_2}{\draw(.7,{\y-.18})rectangle(3.4,{\y+.18});\draw[ray](-1.6,0)--(0,\y)--(4,\y)--(5.6,0);\node[above]at(2,{\y+.18}){$\name$};\node[left]at(.5,\y){$\sname$};}`;
// Shared textbook figure 1-18 for exercises 1-20 and 1-21.
// Wavefront feet and Huygens circles are computed from the ray directions.
figs['1_18']=R`
\def\ii{25}\def\tt{18}\def\L{6}
\draw[line width=.8pt](-3,0)--(7.8,0);
\node[anchor=south west]at(6.85,.04){介质1};
\node[anchor=north west]at(6.85,-.04){介质2};
\draw[thin](0,-2.5)--(0,2.2);
\draw[densely dashed,gray](6,-1)--(6,1);
% Each secondary wavelet is tangent to its corresponding outgoing wavefront.
\foreach\b in {0,1.5,3,4.5}{
 \pgfmathsetmacro{\rr}{(\L-\b)*sin(\ii)}
 \pgfmathsetmacro{\rt}{(\L-\b)*sin(\tt)}
 \draw[densely dashed,gray!70]({\b+\rr},0)arc[start angle=0,end angle=180,radius=\rr];
 \draw[densely dashed,gray!70]({\b-\rt},0)arc[start angle=180,end angle=360,radius=\rt];
}
\foreach\b/\lab in {0/1,1.5/2,3/3,4.5/{\cdots},6/n}{
 \draw[ray]({\b-3.2*tan(\ii)},3.2)--(\b,0);
 \draw[ray](\b,0)--({\b+3.2*tan(\ii)},3.2);
 \draw[ray](\b,0)--({\b+2.6*tan(\tt)},-2.6);
 \node[above left]at({\b-3.2*tan(\ii)},3.2){$\lab$};
}
% Incident wavefront A_1 A_n, reflected front C_1 B_n, transmitted front D_1 B_n.
\draw[line width=1pt](0,0)--({\L*cos(\ii)^2},{\L*sin(\ii)*cos(\ii)});
\draw[line width=1pt]({\L*sin(\ii)^2},{\L*sin(\ii)*cos(\ii)})--(\L,0);
\draw[line width=1pt]({\L*sin(\tt)^2},{-\L*sin(\tt)*cos(\tt)})--(\L,0);
\foreach\b/\k in {1.5/2,3/3,6/n}{
 \coordinate(A\k)at({\b*cos(\ii)^2},{\b*sin(\ii)*cos(\ii)});
 \fill(A\k)circle(.9pt);\node[above left,xshift=-1pt]at(A\k){$A_{\k}$};
}
\foreach\b/\k in {0/1,1.5/2,3/3}{
 \coordinate(C\k)at({\b+(\L-\b)*sin(\ii)^2},{(\L-\b)*sin(\ii)*cos(\ii)});
 \coordinate(D\k)at({\b+(\L-\b)*sin(\tt)^2},{-(\L-\b)*sin(\tt)*cos(\tt)});
 \fill(C\k)circle(.9pt);\fill(D\k)circle(.9pt);
 \node[above left,xshift=-1pt]at(C\k){$C_{\k}$};
 \node[below right,xshift=1pt]at(D\k){$D_{\k}$};
}
\fill(0,0)circle(1.2pt)node[below left]{$A_1$};
\foreach\b/\k in {1.5/2,3/3,6/n}{\fill(\b,0)circle(1pt)node[below left]{$B_{\k}$};}
\fill(4.5,0)circle(1pt);\node[below]at(4.5,-.02){$\cdots$};
% Angle labels refer to the normal at A_1 and to the interface at B_n.
\draw(90:.7)arc[start angle=90,end angle=115,radius=.7];
\draw(65:.9)arc[start angle=65,end angle=90,radius=.9];
\draw(-90:.85)arc[start angle=-90,end angle=-72,radius=.85];
\node at(-.24,1.02){$i_1$};\node at(.28,1.1){$i'_1$};\node at(.2,-1.15){$i_2$};
\draw[shift={(6,0)}](155:.95)arc[start angle=155,end angle=180,radius=.95];
\draw[shift={(6,0)}](180:1.15)arc[start angle=180,end angle=198,radius=1.15];
\node at(4.7,.22){$i'_1$};\node at(4.65,-.2){$i_2$};
`;
// Supplementary conjugate-point and successive-imaging diagrams for 2-1.
figs['book_2_6']=R`
\coordinate(C)at(0,0);\coordinate(Q)at(-.7,0);
\coordinate(M)at(.6,1.2);\coordinate(H)at(.6,0);
\coordinate(Qp)at(-2.55,0);\coordinate(A)at(1.342,0);
\draw[line width=.8pt](C)circle(1.342);
\draw[densely dashed](-2.8,0)--(1.75,0);
\draw[densely dashed](Qp)--(M);
\draw[ray,line width=.6pt](Q)--(M);
\draw[ray,line width=.6pt](M)--(1.8,1.657);
\draw[thin](C)--(M);\draw[densely dashed](M)--(H);
\foreach\p in {C,Q,M,H,A}\fill(\p)circle(1pt);
\node[below]at(C){$C$};\node[below]at(Q){$Q$};
\node[below]at(Qp){$Q'$};\node[above]at(M){$M$};
\node[below]at(H){$H$};\node[below right]at(A){$A$};
\node at(.45,.7){$r$};\node at(-1.8,-1.1){$n'$};\node at(0,-.9){$n$};
\draw[shift={(-.7,0)}](0:.42)arc[start angle=0,end angle=42.7,radius=.42];
\node at(-.13,.2){$u$};
\draw[shift={(-2.55,0)}](0:.68)arc[start angle=0,end angle=20.85,radius=.68];
\node at(-1.78,.19){$u'$};
`;
figs['book_2_19']=R`
\coordinate(P)at(-2,.5);\coordinate(Pp)at(9,-1.125);
\draw[line width=.7pt](-3,0)--(10,0);
\draw[<->,line width=1pt](0,-1.05)--(0,1.1);
\draw[<->,line width=1.1pt](6,-2.2)--(6,2.2);
\node[above]at(0,1.1){$L_1$};\node[above]at(6,2.2){$L_2$};
\draw[->,line width=.9pt](-2,0)node[below left]{$Q$}--(P)node[above left]{$P$};
\draw[densely dashed](9,-2.1)--(9,1.7)node[above]{$\mathcal P'_2$};
\draw[->,line width=.9pt](9,0)node[above right]{$Q'$}--(Pp)node[below right]{$P'$};
\foreach\h in {.9,.5,0,-.9}{
 \pgfmathsetmacro{\outy}{2*\h/3-1.5}
 \draw[ray](P)--(0,\h);
 \draw[ray](0,\h)--(6,\outy);
 \draw[ray](6,\outy)--(Pp);
}
\draw[densely dashed](6,-2.1)--(7,-2.3);
\node[above right]at(0,0){$O_1$};\node[above right]at(6,0){$O_2$};
\fill(-1.8,0)circle(1pt)node[below right]{$F_1$};
\fill(1.8,0)circle(1pt)node[below]{$F'_1$};
\fill(2,0)circle(1pt)node[above right]{$F_2$};
`;
// Ramsden eyepiece: source panel (a) has f1:f2:d = 1:1:1;
// panel (b) depicts a reduced spacing without prescribing its numerical value.
figs['book_2_63']=R`
\foreach\xx/\pan/\dd/\ff/\qq in {0/a/4/4/.12,11/b/3.2/5/-1.15}{
\begin{scope}[xshift=\xx cm,font=\normalsize]
 \draw[line width=.6pt](-3.1,0)--(7,0);
 \draw[fill=gray!5](0,-1.3)--(0,1.3)to[bend left=18](0,-1.3);
 \draw[fill=gray!5](\dd,-1.3)--(\dd,1.3)to[bend right=18](\dd,-1.3);
 \node[below left]at(0,-1.3){$L_1$};\node[below right]at(\dd,-1.3){$L_2$};
 \node[anchor=west]at(-2.7,-.85){\textbf{(\pan)}};
 \ifdim\dd pt=4pt
  \def\hf{4}\def\hb{0}\def\front{0}\def\back{4}
  \def\ha{.88}\def\hm{.9}\def\hc{.92}
 \else
  \pgfmathsetmacro{\ef}{\ff*\ff/(2*\ff-\dd)}
  \pgfmathsetmacro{\hf}{\dd*\ff/(2*\ff-\dd)}
  \pgfmathsetmacro{\hb}{\dd-\hf}
  \pgfmathsetmacro{\front}{\hf-\ef}
  \pgfmathsetmacro{\back}{\hb+\ef}
  \def\ha{.75}\def\hm{.9}\def\hc{1.05}
 \fi
 \draw[thin](\hf,-1.7)--(\hf,1.8)node[above]{$\mathcal H$};
 \draw[thin](\hb,-1.7)--(\hb,1.8)node[above]{$\mathcal H'$};
 \foreach\h in {\ha,\hm,\hc}{
  \pgfmathsetmacro{\sIn}{(\h-.9)/(-\qq)}
  \pgfmathsetmacro{\sMid}{\sIn-\h/\ff}
  \pgfmathsetmacro{\heightTwo}{\h+\dd*\sMid}
  \pgfmathsetmacro{\sOut}{\sMid-\heightTwo/\ff}
  \draw[ray](-3,{\h-3*\sIn})--(0,\h);
  \draw[ray](0,\h)--(\dd,\heightTwo);
  \draw[ray](\dd,\heightTwo)--(6.7,{\heightTwo+(6.7-\dd)*\sOut});
  \draw[densely dashed,gray](\dd,\heightTwo)--(-3,{\heightTwo+(-3-\dd)*\sOut});
 }
 \draw[->,line width=.8pt](\qq,0)--(\qq,.9);
 \ifdim\dd pt=4pt
  \node[above left]at(0,.9){$P$};\node[above right]at(.12,.9){$P_1$};
  \node[above left]at(0,0){$Q$};\node[above right]at(.12,0){$Q_1$};
  \node[below left]at(0,0){$H'$};\node[below right,yshift=-3pt]at(0,0){$F,F_2$};
  \node[above right]at(4,0){$F'_1$};\node[below left]at(4,0){$F'$};\node[below right]at(4,0){$H$};
 \else
  \fill(\front,0)circle(1.2pt)node[below]{$F$};
  \fill(\back,0)circle(1.2pt)node[below left]{$F'$};
  \fill({\dd-\ff},0)circle(1pt)node[below]{$F_2$};
  \fill(\ff,0)circle(1pt)node[below right]{$F'_1$};
  \node[below right]at(\hf,0){$H$};\node[below right]at(\hb,0){$H'$};
  \node[above left]at(\qq,.9){$P_1$};\node[below right]at(\qq,.9){$P$};
  \node[above left]at(\qq,0){$Q_1$};\node[above right]at(\qq,0){$Q$};
 \fi
 \node[above left]at(-3,1.75){$P'$};
\end{scope}}
`;
// Interferometric dilatometer, textbook figure 3-27 supplied for exercise 3-15.
figs['book_3_27']=R`
\filldraw[fill=gray!70,line width=.7pt](-.18,-.35)rectangle(4.3,0);
\filldraw[fill=gray!22,line width=.7pt](0,0)rectangle(.85,2.8);
\filldraw[fill=gray!22,line width=.7pt](3.25,0)rectangle(4.1,2.8);
\shade[left color=gray!60,middle color=white,right color=gray!60]
 (1.48,.05)--(1.48,2.7)to[bend left=9](2.52,2.58)--(2.52,.05)to[bend left=10]cycle;
\draw[line width=.6pt](1.48,.05)--(1.48,2.7)to[bend left=9](2.52,2.58)--(2.52,.05)to[bend left=10]cycle;
\filldraw[fill=gray!4,line width=.7pt](-.18,2.8)rectangle(4.3,3.15);
\draw[thin](-.12,2.85)rectangle(4.24,3.1);
\foreach\x in {.3,1.15,2,2.85,3.7}\draw[-{Stealth[length=2mm]},line width=.6pt](\x,4.2)--(\x,3.5);
\node at(.425,1.4){$G$};\node at(3.675,1.4){$G$};\node at(2,1.3){$C$};
\node[left]at(-.18,2.975){$\Pi_1$};\node[left]at(-.18,-.175){$\Pi_2$};
`;
// Figure 3-33: finite pupil and two source points observing a thin film.
figs['book_3_33']=R`
\filldraw[fill=gray!8,line width=.7pt](-1.5,-.24)rectangle(1.65,0);
\draw[thin](2.75,4.2)circle(.82);
\draw[rotate around={-31:(2.35,3.55)}](2.35,3.55)ellipse(.32 and .085);
\coordinate(Qone)at(-2.35,4.55);\coordinate(Qtwo)at(-2.8,4.05);
\draw[line width=.6pt](-3.2,3.9)--(-2.1,4.8);
\fill(Qone)circle(1.4pt)node[above right]{$Q_1$};
\fill(Qtwo)circle(1.4pt)node[below left]{$Q_2$};
\node[align=center]at(-3.2,5.15){光源};
\foreach\source/\entry/\exit/\px/\py in {Qone/-.16/.08/2.14/3.68,Qtwo/-.27/-.02/2.53/3.44}{
 \draw[ray](\source)--(\entry,0);
 \draw[thin](\entry,0)--({(\entry+\exit)/2},-.24)--(\exit,0);
 \draw[ray](\exit,0)--(\px,\py);
 \draw[thin](\px,\py)--(3.2,4.85);
}
\draw[ray](Qone)--(0,0)--(2.18,3.66);
\draw[ray](Qtwo)--(0,0)--(2.5,3.46);
\draw[thin](2.18,3.66)--(3.2,4.85) (2.5,3.46)--(3.2,4.85);
\fill(0,0)circle(1.3pt)node[above right]{$P$};
\fill(3.2,4.85)circle(1.2pt)node[above right]{$P'$};
`;
// Figure 5-20b: collimated illumination followed by a distant observation plane.
figs['book_5_20b']=R`
\draw(-4,0)--(7.5,0);\fill(-3.5,0)circle(1.4pt)node[left]{$S$};
\draw[<->,line width=.9pt](-1.8,-1.2)--(-1.8,1.2);
\foreach\h in {-.9,-.45,0,.45,.9}{\draw[ray](-3.5,0)--(-1.8,\h);\draw[ray](-1.8,\h)--(0,\h);}
\draw[line width=1.8pt](0,.35)--(0,1.2) (0,-.3)--(0,-1.2);
\node[above left]at(0,1.2){$x$};\node[above left]at(0,.35){$Q$};\node[below left]at(0,0){$O$};
\draw[thick](7,-1.4)--(7,1.7)node[above]{$x'$};
\draw[ray](0,.35)--(7,1.2)node[right]{$P_\theta$};\draw[ray](0,0)--(7,1.2);
\node at(3.5,.95){$r$};\node at(3.5,.47){$r_0$};
\draw(0:1.5)arc[start angle=0,end angle=9.73,radius=1.5];\node at(1.8,.18){$\theta$};
\draw[<->](0,-.8)--node[fill=white]{$z$}(7,-.8);
\node[right]at(7,-.65){远场};
`;
// Figure 5-20d: aperture behind the imaging lens.
figs['book_5_20d']=R`
\draw(-4,0)--(7,0);\fill(-3.5,0)circle(1.4pt)node[left]{$S$};
\draw[<->,line width=.9pt](-1.2,-1.2)--(-1.2,1.2)node[above]{$L$};
\foreach\h in {-.9,-.45,.45,.9}{\draw[ray](-3.5,0)--(-1.2,\h);\draw[thin](-1.2,\h)--(6.5,0);}
\draw[line width=1.8pt](0,.35)--(0,1.1) (0,-.3)--(0,-1.1);
\node[above left]at(0,1.1){$x$};\node[above left]at(0,.35){$Q$};\node[below left]at(0,0){$O$};
\draw[thick](6.5,-1.4)--(6.5,1.7)node[above]{$x'$};
\draw[ray](0,.35)--(6.5,1.1)node[right]{$P_\theta$};\draw[ray](0,0)--(6.5,1.1);
\fill(6.5,0)circle(1pt)node[right]{$S'$};\node at(3,.9){$r$};\node at(3,.37){$r_0$};
\draw(0:1.3)arc[start angle=0,end angle=9.6,radius=1.3];\node at(1.6,.16){$\theta'$};
\draw[<->](0,-.85)--node[fill=white]{$z$}(6.5,-.85);\node[right]at(6.5,-.7){像面};
`;
// Figure 5-20e: aperture before the imaging lens; Pc' is conjugate to P'.
figs['book_5_20e']=R`
\draw(-4,0)--(7,0);\fill(-3.5,0)circle(1.3pt)node[left]{$S$};
\draw[<->,line width=.9pt](0,-1.2)--(0,1.2)node[above right]{$L$};
\foreach\h in {-.9,-.45,.45,.9}{\draw[thin](-3.5,0)--(0,\h)--(6.5,0);}
\draw[line width=1.8pt](-1,.35)--(-1,1.1) (-1,-.3)--(-1,-1.1);
\node[above left]at(-1,1.1){$x$};\node[above left]at(-1,.35){$Q$};\node[below left]at(-1,0){$O$};
\draw[thick](6.5,-1.6)--(6.5,1.7)node[above]{$x'$};
\draw[ray](-1,.35)--(0,.7485)--(6.5,1.2)node[right]{$P'$};
\draw[ray](-1,0)--(0,.2585)--(6.5,1.2);
\draw[densely dashed](-3.5,-.6462)--(-1,.35) (-3.5,-.6462)--(-1,0);
\draw[densely dashed](-3.5,.4)--(-3.5,-1.7);
\fill(-3.5,-.6462)circle(1pt)node[left]{$P'_c$};
\fill(6.5,0)circle(1pt)node[right]{$S'$};
\draw[shift={(-1,0)}](0:.6)arc[start angle=0,end angle=14.5,radius=.6];\node at(-.5,.19){$\theta$};
\draw(0:.9)arc[start angle=0,end angle=8.25,radius=.9];\node at(1.2,.2){$\theta'$};
\draw[<->](-3.5,-1.05)--node[fill=white]{$z$}(-1,-1.05);
\draw[<->](-3.5,-1.65)--node[fill=white]{$s$}(0,-1.65);
\draw[<->](0,-1.65)--node[fill=white]{$s'$}(6.5,-1.65);\node[right]at(6.5,-.65){像面};
`;
// Figure 5-32: record an axial spherical wave, ring pattern, reconstruct two images.
figs['book_5_32']=R`
\begin{scope}
 \draw[very thick](0,-1.25)--(0,1.25)node[above]{$\Sigma$};
 \foreach\x in {-2,-1.6,-1.2,-.8,-.4}\draw[gray!65](\x,-.9)--(\x,.9);
 \foreach\y in {-.8,.8}\draw[ray](-2.15,\y)--(0,\y);
 \node at(-1.85,1.15){$R$};\fill(-1.5,0)circle(1.4pt)node[left]{$O$};
 \draw[ray](-1.5,0)--(0,.9);\draw[ray](-1.5,0)--(0,-.9);
 \begin{scope}\clip(-1.5,0)--(0,.9)--(0,-.9)--cycle;
 \foreach\r in {.3,.6,.9,1.2,1.5}\draw[thin](-1.5,0)circle(\r);\end{scope}
 \node at(-.9,-1.65){(a)\ 记录};
\end{scope}
\begin{scope}[xshift=2cm]
 \draw(-1.25,-1.25)rectangle(1.25,1.25);
 \foreach\k in {24,23,...,1}{\pgfmathsetmacro{\r}{1.18*sqrt(\k/24)}\ifodd\k\fill[white](0,0)circle(\r);\else\fill[black!75](0,0)circle(\r);\fi}
 \node at(0,-1.65){(b)\ 全息条纹};
\end{scope}
\begin{scope}[xshift=5.8cm]
 \draw[very thick](0,-1.25)--(0,1.25)node[above]{$\Sigma$};
 \foreach\x in {-2,-1.6,-1.2,-.8,-.4}\draw[gray!65](\x,-.9)--(\x,.9);
 \foreach\y in {-.8,.8}\draw[ray](-2.15,\y)--(0,\y);
 \node at(-1.85,1.15){$R'$};\fill(-1.5,0)circle(1.3pt)node[left]{$O$};
 \foreach\y in {-.75,.75}{\draw[ray](0,\y)--(1.6,0);\draw[ray](0,\y)--(2.5,{\y*2.667});\draw[densely dashed](-1.5,0)--(0,\y);}
 \begin{scope}\clip(0,-.75)--(2.5,-2)--(2.5,2)--(0,.75)--cycle;
 \foreach\r in {1.8,2.2,2.6,3,3.4,3.8,4.2}\draw[gray](-1.5,0)circle(\r);\end{scope}
 \begin{scope}\clip(0,-.75)--(1.6,0)--(0,.75)--cycle;
 \foreach\r in {.35,.65,.95,1.25,1.55}\draw[thin](1.6,0)circle(\r);\end{scope}
 \fill(1.6,0)circle(1.4pt)node[right]{$O'$};
 \node at(.4,-2.35){(c)\ 再现};
\end{scope}
`;
// Uniaxial-crystal Huygens construction: distinct spherical and ellipsoidal wavelets.
{
 const bx=2.2,ro=.95,re=1.08,phi=-Math.PI/6;
 const ux=bx*Math.cos(phi)/ro,uy=-bx*Math.sin(phi)/re;
 const norm=ux*ux+uy*uy,root=Math.sqrt(norm-1);
 const options=[-1,1].map(sign=>{const zx=(ux-sign*uy*root)/norm,zy=(uy+sign*ux*root)/norm;return [Math.cos(phi)*ro*zx-Math.sin(phi)*re*zy,Math.sin(phi)*ro*zx+Math.cos(phi)*re*zy];});
 const ep=options.find(p=>p[1]<0),op=[ro*ro/bx,-ro*Math.sqrt(1-ro*ro/(bx*bx))];
 const f=n=>n.toFixed(5);
 figs['book_6_31b']=R`
\filldraw[fill=gray!14,line width=.7pt](-1.1,-1.8)rectangle(2.9,0);
\coordinate(A)at(0,0);\coordinate(B)at(1.1,1.1);\coordinate(Bp)at(2.2,0);
\draw[ray,line width=.6pt](-1.7,1.7)--(A);\draw[ray,line width=.6pt](.5,1.7)--(Bp);
\draw[thin](A)--(B);\draw[densely dashed](0,0)--(0,1.1);
\node[above left]at(A){$A$};\node[above right]at(B){$B$};\node[above right]at(Bp){$B'$};
\node at(2.1,1.1){空气};\node at(2.25,-1.55){晶体};
\begin{scope}\clip(-1.1,-1.8)rectangle(2.9,0);
\draw[thin](0,0)circle(.95);
\draw[thin,rotate=-30](0,0)ellipse(.95 and 1.08);
\end{scope}
\draw[densely dashed,gray](0,0)--(2.65,-1.53)node[pos=.73,above,sloped]{光轴};
\draw[shift={(0,0)}](-30:.6)arc[start angle=-30,end angle=0,radius=.6];\node at(.82,-.17){$30^\circ$};
`+`\\coordinate(Ao)at(${f(op[0])},${f(op[1])});\n\\coordinate(Ae)at(${f(ep[0])},${f(ep[1])});\n`+R`
\draw[thin](Bp)--(Ao);\draw[thin](Bp)--(Ae);
\fill(Ao)circle(.9pt)node[below left]{$A'_o$};\fill(Ae)circle(.9pt)node[below right]{$A'_e$};
`+`\\draw[ray](A)--(${f(op[0]*1.8)},${f(op[1]*1.8)})node[below left]{o光};\n\\draw[ray](A)--(${f(ep[0]*1.8)},${f(ep[1]*1.8)})node[below right]{e光};\n`;
}
figs['book_6_46']=R`
\pgfmathsetmacro{\w}{3.6*tan(15)}
\filldraw[fill=gray!8](0,-1.8)--(0,1.8)--(\w,1.8)--(\w,-1.8)--cycle;
\begin{scope}\clip(0,1.8)--(\w,1.8)--(\w,-1.8)--cycle;\fill[pattern=dots,pattern color=gray!50](0,-1.8)rectangle(\w,1.8);\end{scope}
\draw[line width=.7pt](0,1.8)--(\w,-1.8);
\node at(.22,-.95){$\updownarrow$};\node at(.73,.95){$\odot$};
\draw[ray,line width=.65pt](-1.4,0)--({\w/2},0);
\draw[ray]({\w/2},0)--(\w,.2)--(2.3,.85)node[right]{1};
\draw[ray]({\w/2},0)--(\w,-.2)--(2.3,-.85)node[right]{2};
\draw[shift={(0,1.8)}](-90:.65)arc[start angle=-90,end angle=-75,radius=.65];
\node at(.15,.93){$\alpha$};
`;
// Nicol main section, with the original and newly cut end-face vertices distinguished.
figs['book_6_47b']=R`
\coordinate(C)at(0,2);\coordinate(A)at(0,0);\coordinate(Axx)at(.8,0);
\coordinate(Cxx)at(5.8,2);\coordinate(Cp)at(6.6,2);\coordinate(Ap)at(6.6,0);
\coordinate(M)at(.4,1);\coordinate(J)at(3.25,.98);
\filldraw[fill=gray!14,line width=.7pt](C)--(Cxx)--(Ap)--(Axx)--cycle;
\draw[densely dashed,gray](C)--(A)--(Axx) (Cxx)--(Cp)--(Ap);
\draw[line width=2pt,gray!70](Axx)--(Cxx);
\draw[line width=.55pt](Axx)--(Cxx);
\draw(.7294,.1764)--(.9058,.2470)--(.9764,.0706);
\node[above left]at(C){$C$};\node[below left]at(A){$A$};\node[below]at(Axx){$A''$};
\node[above left]at(Cxx){$C''$};\node[above right]at(Cp){$C'$};\node[below right]at(Ap){$A'$};
\fill(M)circle(1.3pt)node[below left]{$M$};
\draw[ray,line width=.65pt](-1.8,1)node[left]{$S$}--(M);
\draw[densely dashed](-1.8,1.55)node[left]{$S_0$}--(M)--(5.8,2);
\draw[densely dashed](-1.8,.45)node[left]{$S_2$}--(M)--(5.8,.35);
\draw[ray](M)--(J);\draw[ray](J)--(6.2,1)--(7.5,1)node[right]{e光};
\draw[ray](J)--(4.321,2)--(5,2.7)node[above right]{o光};
\draw[shift={(.4,1)}](166:.85)arc[start angle=166,end angle=194,radius=.85];
\node at(-.75,1.23){$14^\circ$};\node at(-.75,.77){$14^\circ$};
\draw[thin](3.1,.6)--(2.85,.82);\node[below]at(3.5,.55){加拿大树胶};
`;
// Correct diagram of the Babinet compensator from review question 6-38.
figs['review_6_38']=R`
\filldraw[fill=gray!5,line width=.7pt](0,0)rectangle(6,1.2);
\begin{scope}\clip(0,1.2)--(6,1.2)--(6,0)--cycle;
\foreach\y in {.15,.35,.55,.75,.95,1.15}\draw[gray!70,line width=.5pt](0,\y)--(6,\y);
\end{scope}
\begin{scope}\clip(0,0)--(0,1.2)--(6,0)--cycle;
\fill[pattern=dots,pattern color=gray!80](0,0)rectangle(6,1.2);
\end{scope}
\draw[line width=.9pt](0,1.2)--(6,0);
\foreach\x in {.8,2.25,3.7,5.15}\draw[-{Stealth[length=2.3mm]},line width=.7pt](\x,3)--(\x,1.65);
\draw[shift={(0,1.2)}](0:1.15)arc[start angle=0,end angle=-11.31,radius=1.15];
\node[above]at(1.25,1.23){$\alpha$};
`;
// Figure 2-29 supplied for section 4.4, Example 4.
figs['book_2_29']=R`
\draw[line width=.6pt](-4.3,0)--(8,0);
\draw[<->,line width=.9pt](0,-1.55)--(0,1.55)node[above]{$L_1$};
\draw[<->,line width=.9pt](4,-1.55)--(4,1.55)node[above]{$L_2$};
\draw[thin](2,-1.6)--(2,1.65)node[above]{$\mathcal H'$};
\draw[thin](6,-1.6)--(6,1.65)node[above]{$\mathcal H$};
\draw[ray](-3,.6)--(0,.6)--(4,.2)--(7.5,-.5);
\draw[ray](-3,-1.2)--(0,-.6)--(4,.6)--(7.5,.6);
\draw[densely dashed](-4,.6)--(6,.6) (2,.6)--(5,0) (3,0)--(6,.6);
\draw[thin](-4,.6)--(6,.05);
\draw[->,line width=.7pt](-4,0)node[below]{$Q''$}--(-4,.6)node[above]{$P''$};
\foreach\x/\lab in {3/F,5/F'}\fill(\x,0)circle(1pt)node[below]{$\lab$};
\node[below left]at(2,0){$H'$};\node[below right]at(6,0){$H$};
\node[above right]at(2,.6){$R'$};\node[above left]at(6,.6){$R$};
\node[above left]at(2,.25){$M'$};\node[above left]at(6,.25){$M$};
\node[above left]at(4,.38){$P$};
\node[above]at(-2,.6){1};\node[below]at(-2,-1){2};
\node[above]at(7.4,.6){$r'$};\node[below]at(7.4,-.48){$r$};
`;
// Figure 7-9: qualitative dispersion and a resonance absorption profile.
figs['book_7_9']=R`
\begin{scope}
\draw[->](0,-1.85)--(0,2.1)node[above]{$n$};\draw[->](0,0)--(3.6,0)node[right]{$\lambda$};
\draw[densely dashed,gray](1.8,-1.65)--(1.8,1.65);
\draw[thick,domain=.2:1.65,samples=70]plot(\x,{.25/(\x-1.8)});
\draw[thick,domain=1.95:3.35,samples=70]plot(\x,{.25/(\x-1.8)});
\node[below right]at(1.8,0){$\lambda_0$};\node at(1.8,-2.3){(a)\ 色散曲线};
\end{scope}
\begin{scope}[xshift=5.1cm,yshift=-1.6cm]
\draw[->](0,0)--(0,3.7)node[above]{$n\kappa$};\draw[->](0,0)--(3.6,0)node[right]{$\lambda$};
\draw[thick,domain=.2:3.4,samples=160]plot(\x,{3.3/(1+((\x-1.8)/.22)^2)});
\draw[densely dashed](1.8,0)--(1.8,3.3) (1.58,0)--(1.58,1.65) (2.02,0)--(2.02,1.65);
\draw[<->](1.58,1.65)--(2.02,1.65);\node[fill=white,inner sep=1pt]at(1.8,1.22){$\Delta\lambda$};
\node[below]at(1.8,0){$\lambda_0$};\node at(1.8,-.7){(b)\ 吸收峰};
\end{scope}
`;
fs.mkdirSync(path.join(root,'tikzfigs'),{recursive:true});
for(const [id,body] of Object.entries(figs))fs.writeFileSync(path.join(root,'tikzfigs',`fig_${id}.tex`),`% TikZ redraw for exercise ${id.replace('_','-')}\n\\begin{tikzpicture}[font=\\small,line cap=round,line join=round]\n${body}\n\\end{tikzpicture}\n`);
console.log(`Generated ${Object.keys(figs).length} TikZ figures.`);
