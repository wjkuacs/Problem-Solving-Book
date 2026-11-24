![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/602301caab44bf4b5c00ed4cd4d928bee4fcc4380089e868377b33d059b8d03e.jpg)



(1) 顺串联


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/85bc8b2676d386fa7e11fc4622fcec9667a7993cedad6aa92a2b2d27f7719b54.jpg)



(2) 反串联



图8.3.37


所以

$$
\Psi = \Psi_ {1} + \Psi_ {2} = (L _ {1} + L _ {2} + 2 M) I = L I\tag{3}
$$

于是得顺串联的自感为

$$
L = \frac {\Psi}{I} = L _ {1} + L _ {2} + 2 M\tag{4}
$$

(2)反串联： $I_{1}=I_{2}=I$ 

$$
\Psi_ {1} = L _ {1} I _ {1} - M I _ {2} = (L _ {1} - M) I\tag{5}
$$

$$
\Psi_ {2} = L _ {2} I _ {2} - M I _ {1} = (L _ {2} - M) I _ {1}\tag{6}
$$

所以

$$
\Psi = \Psi_ {1} + \Psi_ {2} = (L _ {1} + L _ {2} - 2 M) I = L I\tag{7}
$$

于是得反串联的自感为

$$
L = \frac {\Psi}{I} = L _ {1} + L _ {2} - 2 M\tag{8}
$$

【别解】用感应电动势计算

(1)顺串联： $I_{1}=I_{2}=I$ 

当通过线圈的电流发生变化时,根据电磁感应定律,两线圈中的感应电动势分别为

$$
\varepsilon_ {1} = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} - M \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{9}
$$

$$
\varepsilon_ {2} = - L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} - M \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{10}
$$

这时 1 和 4 之间的感应电动势为

$$
\ell = \ell_ {1} + \ell_ {2}\tag{11}
$$

由以上三式得

$$
\varepsilon = - \left(L _ {1} + L _ {2} + 2 M\right) \frac {\mathrm{d} I}{\mathrm{d} t}\tag{12}
$$

于是得1、4之间的自感为

$$
L = L _ {1} + L _ {2} + 2 M\tag{13}
$$

(2)反串联: $I_{1}=I_{2}=I$ 

当通过线圈的电流发生变化时,根据电磁感应定律,两线圈中的感应电动势分别为

$$
\mathcal {E} _ {1} = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + M \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{14}
$$

$$
\delta_ {2} = - L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + M \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{15}
$$

注意,式(14)中互感项是正号,这是因为,第一个线圈中的互感电动势与自感电动势方向是相反的.式(15)中的正号也是这样来的.

这时1和3之间的感应电动势为

$$
\mathcal {E} = \mathcal {E} _ {1} + \mathcal {E} _ {2}\tag{16}
$$

由以上三式得

$$
\delta = - \left(L _ {1} + L _ {2} - 2 M\right) \frac {\mathrm{d} I}{\mathrm{d} t}\tag{17}
$$

于是得1、3之间的自感为

$$
L = L _ {1} + L _ {2} - 2 M\tag{18}
$$

【别解】 用磁能计算

一个自感为 L 的线圈载有电流 I 时, 它所具有的磁能为

$$
W _ {m} = \frac {1}{2} L I ^ {2}\tag{19}
$$

两个线圈分别载有电流 $I_{1}$ 和 $I_{2}$ , 它们的自感分别为 $L_{1}$ 和 $L_{2}$ , 它们之间的互感为 $M$ , 这时它们所具有的磁能为

$$
W _ {m} = \frac {1}{2} L _ {1} I _ {1} ^ {2} + \frac {1}{2} L _ {2} I _ {2} ^ {2} \pm M I _ {1} I _ {2}\tag{20}
$$

式中 M 前的符号在顺串联时用正号，在反串联时用负号.

(1)顺串联: $I_{1}=I_{2}=I$ 

这时式(20)化为

$$
\begin{array}{r l} W _ {m} & = \frac {1}{2} L _ {1} I ^ {2} + \frac {1}{2} L _ {2} I ^ {2} + M I ^ {2} \\ & = \frac {1}{2} (L _ {1} + L _ {2} + 2 M) I ^ {2} \end{array}\tag{21}
$$

与式(19)比较得

$$
L = L _ {1} + I _ {2} + 2 M\tag{22}
$$

(2)反串联: $I_{1}=I_{2}=I$ 

这时式(20)化为

$$
\begin{array}{r l} W _ {m} & = \frac {1}{2} L _ {1} I ^ {2} + \frac {1}{2} L _ {2} I ^ {2} - M I ^ {2} \\ & = \frac {1}{2} (L _ {1} + L _ {2} - 2 M) I ^ {2} \end{array}\tag{23}
$$

与式(19)比较得

$$
L = L _ {1} + L _ {2} - 2 M\tag{24}
$$

8.3.38 两线圈的自感分别为 $L_{1}$ 和 $L_{2}$ , 它们之间的互感为 $M$ , 试求下列两种情况下它们并联后的总自感: (1) 顺并联, 如图 8.3.38(1), 1 和 2 之间的自感; (2) 反并联, 如图 8.3.38(2), 1 和 2 之间的自感.

【解】用磁链计算

(1) 顺并联: $I = I_{1} + I_{2}$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/332feee5ef339fd79aa9cb571833ee06599d6701255c8e649e040bb3192651f2.jpg)



(1) 顺并联


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/fcf9b647902cd3377902ebc6c3b883a001b287062cafdf902561efa76aa84210.jpg)



(2) 反并联



图8.3.38


这时通过两线圈的磁链分别为

$$
\Psi_ {1} = L _ {1} I _ {1} + M I _ {2}\tag{1}
$$

$$
\Psi_ {2} = L _ {2} I _ {2} + M I _ {1}\tag{2}
$$

1(3)和2(4)之间的磁链为

$$
\Psi = \Psi_ {1} = \Psi_ {2}\tag{3}
$$

由式(1)、(2)和(3)得

$$
(L _ {1} - M) I _ {1} = (L _ {2} - M) I _ {2}\tag{4}
$$

于是

$$
\Psi = L I = L _ {1} I _ {1} + M I _ {2} = L _ {1} I _ {1} + M \frac {L _ {1} - M}{L _ {2} - M} I _ {1} = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {2} - M} I _ {1}\tag{5}
$$

$$
I = I _ {1} + I _ {2} = I _ {1} + \frac {L _ {1} - M}{L _ {2} - M} I _ {1} = \frac {L _ {1} + L _ {2} - 2 M}{L _ {2} - M} I _ {1}\tag{6}
$$

由式(5)、(6)得

$$
L = \frac {\Psi}{I} = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {2} - M} \cdot \frac {L _ {2} - M}{L _ {1} + L _ {2} - 2 M} = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} - 2 M}\tag{7}
$$

(2)反并联: $I=I_{1}+I_{2}$ 

这时通过两线圈的磁链分别为

$$
\Psi_ {1} = L _ {1} I _ {1} - M I _ {2}\tag{S}
$$

$$
\Psi_ {2} = L _ {2} I _ {2} - M I _ {1}\tag{9}
$$

1(4)和2(3)之间的磁链为

$$
\Psi = \Psi_ {1} = \Psi_ {2}\tag{10}
$$

由式(8)、(9)和(10)得

$$
(L _ {1} + M) I _ {1} = (L _ {2} + M) I _ {2}\tag{11}
$$

于是

$$
\Psi = L I = L _ {1} I _ {1} - M I _ {2} = L _ {1} I _ {1} - M \frac {L _ {1} + M}{L _ {2} + M} I _ {1} = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {2} + M} I _ {1}\tag{12}
$$

$$
I = I _ {1} + I _ {2} = I _ {1} + \frac {L _ {1} + M}{L _ {2} + M} I _ {1} = \frac {L _ {1} + L _ {2} + 2 M}{L _ {2} + M} I _ {1}\tag{13}
$$

由式(12)、(13)得

$$
L = \frac {\Psi}{I} = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {2} + M} \frac {L _ {2} + M}{L _ {1} + L _ {2} + 2 M} = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} + 2 M}\tag{14}
$$

【别解】用感应电动势计算

(1)顺并联: $I=I_{1}+I_{2}$ 

这时两线圈中的感应电动势分别为

$$
\varepsilon_ {1} = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} - M \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{15}
$$

$$
\varepsilon_ {2} = - L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} - M \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{16}
$$

由图8.3.38(1)可见，

$$
\mathcal {E} = \mathcal {E} _ {1} = \mathcal {E} _ {2}\tag{17}
$$

由式(15)、(16)、(17)得

$$
(L _ {1} - M) \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = (L _ {2} - M) \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{18}
$$

于是

$$
\frac {\mathrm{d} I}{\mathrm{d} t} = \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} = \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + \frac {L _ {1} - M}{L _ {2} - M} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = \frac {L _ {1} + L _ {2} - 2 M}{L _ {2} - M} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{19}
$$

由式(17)、(15)、(18)、(19)得

$$
\begin{array}{r l} \varepsilon & = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} - M \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} - M \frac {L _ {1} - M}{L _ {2} - M} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} \\ & = - \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {2} - M} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = - \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {2} - M} \frac {L _ {2} - M}{L _ {1} + L _ {2} - 2 M} \frac {\mathrm{d} I}{\mathrm{d} t} \\ & = - \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} - 2 M} \frac {\mathrm{d} I}{\mathrm{d} t} \end{array}\tag{20}
$$

于是得所求的自感为

$$
L = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} - 2 M}\tag{21}
$$

(2) 反并联: $I = I_{1} + I_{2}$ 

这时两线圈中的感应电动势分别为

$$
\ell_ {1} = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + M \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{22}
$$

$$
\varepsilon_ {2} = - L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + M \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{23}
$$

注意,式(22)中互感项是正号,这是因为,在图8.3.38(2)的情况下,当 $I_{1}$ 和 $I_{2}$ 都在增大或都在减小时,第一个线圈中的互感电动势与自感电动势方向相反.式(23)中的正号也是这样来的.

由图 8.3.38(2) 可见，

$$
\mathcal {E} = \mathcal {E} _ {1} = \mathcal {E} _ {2}\tag{24}
$$

由式(22)、(23)和(24)得

$$
(L _ {1} + M) \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = (L _ {2} + M) \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{25}
$$

于是

$$
\frac {\mathrm{d} I}{\mathrm{d} t} = \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} = \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + \frac {L _ {1} + M}{L _ {2} + M} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = \frac {L _ {1} + L _ {2} + 2 M}{L _ {2} + M} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{26}
$$

由式(24)、(22)、(25)和(26)得

$$
\begin{array}{r l} \varepsilon & = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + M \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + M \frac {L _ {1} + M}{L _ {2} + M} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} \\ & = - \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {2} + M} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = - \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {2} + M} \frac {L _ {2} + M}{L _ {1} + L _ {2} + 2 M} \frac {\mathrm{d} I}{\mathrm{d} t} \\ & = - \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} + 2 M} \frac {\mathrm{d} I}{\mathrm{d} t} \end{array}\tag{27}
$$

于是得所求的自感为

$$
L = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} + 2 M}\tag{28}
$$

【别解】 用磁能计算

(1)顺并联: $I=I_{1}+I_{2}$ 

这时两线圈的磁能之和为

$$
W _ {m} = \frac {1}{2} L _ {1} I _ {1} ^ {2} + \frac {1}{2} L _ {2} I _ {2} ^ {2} + M I _ {1} I _ {2}\tag{29}
$$

顺并联后作为一个线圈的磁能为

$$
W _ {m} = \frac {1}{2} L I ^ {2}\tag{30}
$$

两式相等便得

$$
L = \frac {L _ {1} I _ {1} ^ {2} + L _ {2} I _ {2} ^ {2} + 2 M I _ {1} I _ {2}}{\left(I _ {1} + I _ {2}\right) ^ {2}} = \frac {L _ {1} + L _ {2} \left(\frac {I _ {2}}{I _ {1}}\right) ^ {2} + 2 M \frac {I _ {2}}{I _ {1}}}{\left(1 + I _ {2} / I _ {1}\right) ^ {2}}\tag{31}
$$

由式(4)得

$$
\frac {I _ {2}}{I _ {1}} = \frac {L _ {1} - M}{L _ {2} - M}\tag{32}
$$

代入式(31)得

$$
L = \frac {L _ {1} + L _ {2} \left(\frac {L _ {1} - M}{L _ {2} - M}\right) ^ {2} + 2 M \frac {L _ {1} - M}{L _ {2} - M}}{\left(1 + \frac {L _ {1} - M}{L _ {2} - M}\right) ^ {2}} = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} - 2 M}\tag{33}
$$

(2) 反并联: $I = I_{1} + I_{2}$ 

这时两线圈的磁能之和为

$$
W _ {m} = \frac {1}{2} L _ {1} I _ {1} ^ {2} + \frac {1}{2} L _ {2} I _ {2} ^ {2} - M I _ {1} I _ {2}\tag{34}
$$

反并联后作为一个线圈的磁能为

$$
W _ {m} = \frac {1}{2} L I ^ {2}\tag{35}
$$

两式相等便得

$$
L = \frac {L _ {1} I _ {1} ^ {2} + L _ {2} I _ {2} ^ {2} - 2 M I _ {1} I _ {2}}{\left(I _ {1} + I _ {2}\right) ^ {2}} = \frac {L _ {1} + L _ {2} \left(\frac {I _ {2}}{I _ {1}}\right) ^ {2} - 2 M \left(\frac {I _ {2}}{I _ {1}}\right)}{\left(1 + \frac {I _ {2}}{I _ {1}}\right) ^ {2}}\tag{36}
$$

由式(11)得

$$
\frac {I _ {2}}{I _ {1}} = \frac {L _ {1} + M}{L _ {2} + M}\tag{37}
$$

代入式(36)得

$$
L = \frac {L _ {1} + L _ {2} \left(\frac {L _ {1} + M}{L _ {2} + M}\right) ^ {2} - 2 M \left(\frac {L _ {1} + M}{L _ {2} + M}\right)}{\left(1 + \frac {L _ {1} + M}{L _ {2} + M}\right) ^ {2}} = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} + 2 M}\tag{38}
$$

8.3.39 两线圈的自感分别为 $L_{1}$ 和 $L_{2}$ , 它们之间的互感为 $M$ , 试证明: (1) $M \leqslant \frac{1}{2}(L_{1} + L_{2})$ ; (2) $M \leqslant \sqrt{L_{1} L_{2}}$ .

【证】（1）两线圈反串联时，其自感为[参见前面8.3.37题式(8)，或式(18)，或式(24)]

$$
L = L _ {1} + L _ {2} - 2 M\tag{1}
$$

因为

$$
L \geqslant 0\tag{2}
$$

所以

$$
M \leqslant \frac {1}{2} (L _ {1} + L _ {2})\tag{3}
$$

(2)两线圈反并联时,其自感为[参见前面8.3.38题式(14),或式(28),或式(38)]

$$
L = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} + 2 M}\tag{4}
$$

因为

$$
L \geqslant 0, \quad M \geqslant 0\tag{5}
$$

所以

$$
L _ {1} L _ {2} \geqslant M ^ {2}\tag{6}
$$

故得

$$
M \leqslant \sqrt {L _ {1} L _ {2}}\tag{7}
$$

【讨论】 因

$$
L _ {1} + L _ {2} \geqslant 2 \sqrt {L _ {1} L _ {2}}\tag{8}
$$

故由式(7)、(8)可推出式(3).

8.3.40 两线圈的自感分别为 $L_{1} = 5.0\mathrm{mH}$ 和 $L_{2} = 3.0\mathrm{mH}$ ，当它们顺串联时（即磁场互相加强时），总自感为 $11.0\mathrm{mH}$ . (1)试求它们之间的互感 $M$ ; (2)设这两线圈的形状和位置都不改变，只将其中一个反向串联(反串联)，试求它们反串联后的总自感 $L$ .

【解】（1）顺串联时的总自感公式为[参见前面8.3.37题式(4)，式(13)，或式(22)]

$$
L = L _ {1} + L _ {2} + 2 M\tag{1}
$$

故得互感为

$$
M = \frac {1}{2} (L - L _ {1} - L _ {2}) = \frac {1}{2} \times (1 1. 0 - 5. 0 - 3. 0)
$$

$$
= 1. 5 (\mathrm{mH}) = 1. 5 \times 1 0 ^ {- 3} (\mathrm{H})\tag{2}
$$

(2)反串联时的总自感公式为[参见前面8.3.37题式(8)，式(18)，或式(24)]

$$
L = L _ {1} + L _ {2} - 2 M\tag{3}
$$

代入数值便得

$$
L = 5. 0 + 3. 0 - 2 \times 1. 5 = 5. 0 (\mathrm{mH}) = 5. 0 \times 1 0 ^ {- 3} (\mathrm{H})\tag{4}
$$

8.3.41 两线圈顺串联(磁场互相加强)后总自感为1.00H;在它们的形状和位置都不变的情况下,反串联(磁场互相削弱)总自感为0.40H.试求它们之间的互感.

【解】两线圈顺串联的总自感公式为[参见前面8.3.37题式(4)，式(13)，或式(22)]

$$
L = L _ {1} + L _ {2} + 2 M = 1. 0 0\tag{1}
$$

两线圈反串联的总自感公式为[参见前面8.3.37题式(8)，式(18)，或式(24)]

$$
L ^ {\prime} = L _ {1} + L _ {2} - 2 M = 0. 4 0\tag{2}
$$

两式相减得

$$
M = \frac {1}{4} (1. 0 0 - 0. 4 0) = 0. 1 5 (\mathrm{H})\tag{3}
$$

8.3.42 两线圈的自感分别为 0.5H 和 0.1H, 并联后测得总自感为 0.1H. 试求它们之间的互感.

【解】假定是顺并联，则由前面8.3.38题式(7)，或式(21)，或式(33)，总自感为

$$
L = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} - 2 M}\tag{1}
$$

代入数值得

$$
0. 1 = \frac {0 . 5 \times 0 . 1 - M ^ {2}}{0 . 5 + 0 . 1 - 2 M}\tag{2}
$$

所以

$$
M ^ {2} - 0. 2 M + 0. 0 1 = 0\tag{3}
$$

解得

$$
M = \frac {1}{2} \left[ 0. 2 \pm \sqrt {0 . 2 ^ {2} - 4 \times 0 . 0 1} \right] = 0. 1 (\mathrm{H})\tag{4}
$$

假定是反并联，则由前面8.3.38题式(14)，或式(28)，或式(38)，总自感为

$$
L = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} + 2 M}\tag{5}
$$

代入数值得

$$
0. 1 = \frac {0 . 5 \times 0 . 1 - M ^ {2}}{0 . 5 + 0 . 1 + 2 M}\tag{6}
$$

所以

$$
M ^ {2} + 0. 2 M + 0. 0 1 = 0\tag{7}
$$

解得

$$
M = \frac {1}{2} \left[ - 0. 2 \pm \sqrt {0 . 2 ^ {2} - 4 \times 0 . 0 1} \right] = - 0. 1 (\mathrm{H})\tag{8}
$$

因

$$
M \geqslant 0\tag{9}
$$

故式(8)亦即式(5)不合理,即题给的并联不是反并联,而是顺并联.于是所求的互感为式(4),即M=0.1H.

8.3.43 两线圈的自感分别为 $L_{1}$ 和 $L_{2}$ , 它们之间的互感为 $M$ . 在它们的形状和位置都不变的情况下, 试问由它们最多可以得出几种不同自感的线圈? 设 $L_{1} = 20 \mathrm{~mH}, L_{2} = 50 \mathrm{~mH}, M = 10 \mathrm{~mH}$ , 试求这些不同自感的值.

【解答】最多可以得出六种不同自感的线圈，它们分别是：(1)单独 $L_{1}$ ; (2)单独 $L_{2}$ ; (3) $L_{1}$ 和 $L_{2}$ 顺串联 $L_{3} = L_{1} + L_{2} + 2M$ ; (4) $L_{1}$ 和 $L_{2}$ 反串联 $L_{4} = L_{1} + L_{2} - 2M$ ; (5) $L_{1}$ 和 $L_{2}$ 顺并联 $L_{5} = \frac{L_{1}L_{2} - M^{2}}{L_{1} + L_{2} - 2M}$ ; (6) $L_{1}$ 和 $L_{2}$ 反并联 $L_{6} = \frac{L_{1}L_{2} - M^{2}}{L_{1} + L_{2} + 2M}$ .

代入数值得:(1) $L_{1}=20mH$ ;(2) $L_{2}=50mH$ ;(3) $L_{3}=20+50+2\times10=90(mH)$ ;(4) $L_{4}=20+50-2\times10=50(mH)$ ;(5) $L_{5}=\frac{20\times50-10^{2}}{20+50-2\times10}=18(mH)$ ;(6) $L_{6}=\frac{20\times50-10^{2}}{20+50+2\times10}=10(mH)$ .

由于其中 $L_{2} = L_{4} = 50(\mathrm{mH})$ ，故这时只能得出五种不同自感的线圈.

【讨论】关于两线圈顺、反串联的公式,参见前面8.3.37题;关于两线圈顺、反并联的公式,参见前8.3.38题.

8.3.44 两线圈的自感分别为 $L_{1}$ 和 $L_{2}$ , 它们之间的互感为 $M$ . 它们顺串联的自感为 $L_{\text{顺串}}$ , 反串联的自感为 $L_{\text{反串}}$ , 顺并联的自感为 $L_{\text{顺并}}$ , 反并联的自感为 $L_{\text{反并}}$ . 试证明:

$$
L _ {\text { 顺并 }} L _ {\text { 反串 }} = L _ {\text { 反并 }} L _ {\text { 顺串 }}
$$

【证】根据前面8.3.37题，两线圈串联的公式为

$$
L _ {\mathrm{顺串}} = L _ {1} + L _ {2} + 2 M\tag{1}
$$

$$
L _ {\mathrm{反串}} = L _ {1} + L _ {2} - 2 M\tag{2}
$$

根据前面 8.3.38 题,两线圈并联的公式为

$$
L _ {\mathrm{顺并}} = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} - 2 M}\tag{3}
$$

$$
L _ {\mathrm{反并}} = \frac {L _ {1} L _ {2} - M ^ {2}}{L _ {1} + L _ {2} + 2 M}\tag{4}
$$

由以上四式可见，

$$
L _ {\text { 顺并 }} L _ {\text { 反串 }} = L _ {1} L _ {2} - M ^ {2} = L _ {\text { 反并 }} L _ {\text { 顺串 }}\tag{5}
$$

8.3.45 自感分别为 $L_{1}, L_{2}, L_{3}, L_{4}$ 和 $L_{5}$ 的五个线圈，联接如图8.3.45(1)所示，它们之间的互感都可略去不计。试求 $a, b$ 之间的自感 $L_{ab}$ 。

【解】设电流分布如图8.3.45(2)所示，根据基尔霍夫电路定律，由自感电动势得

$$
L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + L _ {5} \frac {\mathrm{d} I _ {5}}{\mathrm{d} t} - L _ {3} \frac {\mathrm{d} I _ {3}}{\mathrm{d} t} = 0\tag{1}
$$

$$
L _ {2} \left(\frac {\mathrm{d} I _ {1}}{\mathrm{d} t} - \frac {\mathrm{d} I _ {5}}{\mathrm{d} t}\right) - L _ {4} \left(\frac {\mathrm{d} I _ {3}}{\mathrm{d} t} + \frac {\mathrm{d} I _ {5}}{\mathrm{d} t}\right) - L _ {5} \frac {\mathrm{d} I _ {5}}{\mathrm{d} t} = 0\tag{2}
$$

$$
L _ {a b} \frac {\mathrm{d} I}{\mathrm{d} t} = L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + L _ {2} \left(\frac {\mathrm{d} I _ {1}}{\mathrm{d} t} - \frac {\mathrm{d} I _ {5}}{\mathrm{d} t}\right)\tag{3}
$$

$$
\frac {\mathrm{d} I}{\mathrm{d} t} = \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + \frac {\mathrm{d} I _ {3}}{\mathrm{d} t}\tag{4}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/07d71f02bbd13ce4075fe8199593d3e65963970788beb0fe0b64fcf3e01b4ca9.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/7a098360ab8bba77404ba3b36c2976b52a4bcbdd6682161f70ea4bb3893f42ad.jpg)



图8.3.45(1)



图8.3.45(2)


由式(1)、(2)解得

$$
\frac {\mathrm{d} I _ {5}}{\mathrm{d} t} = \frac {L _ {1} + L _ {2}}{L _ {2} + L _ {4}} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} - \frac {L _ {3} + L _ {4}}{L _ {2} + L _ {4}} \frac {\mathrm{d} I _ {3}}{\mathrm{d} t}\tag{5}
$$

将式(5)代入式(1)得

$$
\frac {\mathrm{d} I _ {3}}{\mathrm{d} t} = \frac {L _ {1} (L _ {2} + L _ {4}) + L _ {5} (L _ {1} + L _ {2})}{L _ {3} (L _ {2} + L _ {4}) + L _ {5} (L _ {3} + L _ {4})} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{6}
$$

将式(6)代入式(5)得

$$
\begin{array}{r l} \frac {\mathrm{d} I _ {5}}{\mathrm{d} t} & = \frac {L _ {1} + L _ {2}}{L _ {2} + L _ {4}} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} - \frac {L _ {3} + L _ {4}}{L _ {2} + L _ {4}} \frac {L _ {1} (L _ {2} + L _ {4}) + L _ {5} (L _ {1} + L _ {2})}{L _ {3} (L _ {2} + L _ {4}) + L _ {5} (L _ {3} + L _ {4})} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} \\ & = \frac {L _ {2} L _ {3} - L _ {1} L _ {4}}{L _ {3} (L _ {2} + L _ {4}) + L _ {5} (L _ {3} + L _ {4})} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} \end{array}\tag{7}
$$

将式(6)代入式(4)得

$$
\frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = \frac {L _ {3} (L _ {2} + L _ {4}) + L _ {5} (L _ {3} + L _ {4})}{(L _ {1} + L _ {3}) (L _ {2} + L _ {4}) + (L _ {1} + L _ {2} + L _ {3} + L _ {4}) L _ {5}} \frac {\mathrm{d} I}{\mathrm{d} t}\tag{8}
$$

将式(8)代入式(7)得

$$
\frac {\mathrm{d} I _ {5}}{\mathrm{d} t} = \frac {L _ {2} L _ {3} - L _ {1} L _ {4}}{(L _ {1} + L _ {3}) (L _ {2} + L _ {4}) + (L _ {1} + L _ {2} + L _ {3} + L _ {4}) L _ {5}} \frac {\mathrm{d} I}{\mathrm{d} t}\tag{9}
$$

将式(8)、(9)代入式(3)得

$$
\begin{array}{r l} L _ {a b} & = \frac {(L _ {1} + L _ {2}) L _ {3} (L _ {2} + L _ {4}) + (L _ {1} + L _ {2}) L _ {5} (L _ {3} + L _ {4}) - L _ {2} ^ {2} L _ {3} + L _ {1} L _ {2} L _ {4}}{(L _ {1} + L _ {3}) (L _ {2} + L _ {4}) + (L _ {1} + L _ {2} + L _ {3} + L _ {4}) L _ {5}} \\ & = \frac {L _ {1} L _ {2} (L _ {3} + L _ {4}) + L _ {3} L _ {4} (L _ {1} + L _ {2}) + (L _ {1} + L _ {2}) (L _ {3} + L _ {4}) L _ {5}}{(L _ {1} + L _ {3}) (L _ {2} + L _ {4}) + (L _ {1} + L _ {2} + L _ {3} + L _ {4}) L _ {5}} \end{array}\tag{10}
$$

【讨论】参见前面4.1.15题后的讨论三.

8.3.46 试由基本物理规律推导自感 L 在国际单位制中的量纲.

【解】 根据

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{1}
$$

得 $L$ 的量纲为

$$
[ L ] = \left[ \begin{array}{c} \frac {\varepsilon_ {L}}{\mathrm{d} I} \\ \mathrm{d} t \end{array} \right]\tag{2}
$$

其中电动势 $\varepsilon_{L}$ 的量纲为

$$
\begin{array}{r l} \left[ \hat {c} _ {L} \right] & = \left[ \boldsymbol {E} _ {i} \cdot \boldsymbol {l} \right] = \left[ \frac {\boldsymbol {F}}{q} \cdot \boldsymbol {l} \right] = \left[ \frac {m \boldsymbol {a}}{q} \cdot \boldsymbol {l} \right] \\ & = \frac {M L T ^ {- 2}}{T I} \cdot L = L ^ {2} M T ^ {- 3} I ^ {- 1} \end{array}\tag{3}
$$

将式(3)代入式(2)得

$$
[ L ] = \frac {L ^ {2} M T ^ {- 3} I ^ {- 1}}{I / T} = L ^ {2} M T ^ {- 2} I ^ {- 2}\tag{4}
$$

8.3.47 凭记忆写出或由公式推导出电阻 R、电感 L 和电容 C 在国际单位制 (SI) 中的量纲和单位，并由此推导出 L/R、RC 和 LC 的量纲和单位.

【解】(1) $R$ 的量纲 由公式

$$
R = \frac {U}{I}\tag{1}
$$

得 $R$ 的量纲为

$$
[ R ] = \left[ \frac {U}{I} \right] = \left[ \frac {\boldsymbol {E} \cdot \boldsymbol {l}}{I} \right] = \left[ \frac {\boldsymbol {F} \cdot \boldsymbol {l}}{q I} \right] = \left[ \frac {m \boldsymbol {a} . \boldsymbol {l}}{q I} \right] = \frac {M L T ^ {- 2} \cdot L}{I T I} = L ^ {2} M T ^ {- 3} I ^ {- 2}\tag{2}
$$

(2) $L$ 的量纲 由前面8.3.46题的结果为

$$
[ L ] = L ^ {2} M T ^ {- 2} I ^ {- 2}\tag{3}
$$

(3) $C$ 的量纲 由公式

$$
Q = C U\tag{4}
$$

得 $C$ 的量纲为

$$
\begin{array}{r l} [ C ] & = \left[ \frac {Q}{U} \right] = \left[ \frac {Q}{E \cdot I} \right] = \left[ \frac {Q ^ {2}}{F \cdot I} \right] = \left[ \frac {Q ^ {2}}{m a \cdot I} \right] \\ & = \frac {I ^ {2} T ^ {2}}{M L T ^ {- 2} \cdot L} = L ^ {- 2} M ^ {- 1} T ^ {4} I ^ {2} \end{array}\tag{5}
$$

(4) $L / R$ 的量纲为

$$
[ L / R ] = \frac {L ^ {2} M T ^ {- 2} T ^ {- 2}}{L ^ {2} M T ^ {- 3} I ^ {- 2}} = T\tag{6}
$$

(5) $RC$ 的量纲为

$$
[ R C ] = L ^ {2} M T ^ {- 3} I ^ {- 2} \cdot L ^ {- 2} M ^ {- 1} T ^ {4} I ^ {2} = T\tag{7}
$$

(6) $LC$ 的量纲为

$$
[ L C ] = L ^ {2} M T ^ {- 2} I ^ {- 2} \cdot L ^ {- 2} M ^ {- 1} T ^ {4} I ^ {2} = T ^ {2}\tag{8}
$$

(7) $R$ 的单位为欧姆， $L$ 的单位为亨利， $C$ 的单位为法拉.

(8) $L / R$ 的单位 由

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{9}
$$

得 $L / R$ 的单位为

$$
\frac {\mathrm{亨利}}{\mathrm{欧姆}} = \frac {\mathrm{伏特} \cdot \mathrm{秒}}{\mathrm{安培} \cdot \mathrm{欧姆}} = \mathrm{秒}\tag{10}
$$

(9) RC 的单位 由式(1)和式(4)得 RC 的单位为

$$
\text { 欧姆 } \cdot \text { 法拉 } = \text { 欧姆 } \cdot \frac {\text { 库仑 }}{\text { 伏特 }} = \text { 欧姆 } \cdot \frac {\text { 安培 } \cdot \text { 秒 }}{\text { 伏特 }} = \text { 秒 }\tag{11}
$$

(10) LC 的单位 由式(9)和式(4)得 LC 的单位为

$$
\mathrm{亨利} \cdot \mathrm{法拉} = \frac {\mathrm{伏特} \cdot \mathrm{秒}}{\mathrm{安培}} \frac {\mathrm{安培} \cdot \mathrm{秒}}{\mathrm{伏特}} = \mathrm{秒} ^ {2}\tag{12}
$$

$$
\S 8. 4 \text { 超导 }
$$

8.4.1 超导体与理想导体(或称完全导体)有何异同?

【解答】超导体与理想导体的共同之处是电阻均为零；不同之处是，超导体内磁感强度 B 恒为零（超导体的完全抗磁性），而理想导体内却可以有不随时间变化的磁感强度 B.

8.4.2 超导材料载有电流时, 若电流产生的磁场强度 $H < H_{\mathrm{c}}$ (临界磁场), 则超导材料便是超导体; 若 $H > H_{\mathrm{c}}$ , 它就不是超导体. 直径为 $1 \mathrm{~mm}$ 的铅丝, 放在 $T = 4.2 \mathrm{~K}$ 的液氦中, 成为超导体. 这时铅的临界磁场为 $H_{\mathrm{C}} = 4.4 \times 10^{4} \mathrm{~A} / \mathrm{m}$ . 试问它能通过多大的电流而仍为超导体?

【解】当铅丝载有电流 I 时, 铅丝表面上的磁场强度为

$$
H = \frac {I}{2 \pi r} = \frac {I}{\pi d}
$$

式是 $d$ 是铅丝的直径. 当 $H < H_{\mathrm{c}}$ 时, 铅丝仍为超导体. 故得

$$
I <   \pi d H _ {\mathrm{c}} = \pi \times 1. 0 0 \times 1 0 ^ {- 3} \times 4. 4 \times 1 0 ^ {4} = 1. 4 \times 1 0 ^ {2} (\mathrm{A})
$$

即通过铅丝的电流小于 $1.4 \times 10^{2} \mathrm{~A}$ 时，铅丝仍然是超导体。

8.4.3 超导材料只有在温度低于临界温度(超导转变温度) $T_{c}$ 时才是超导体,而在温度高于 $T_{c}$ 时则否.现将一超导材料做成的圆环放在外磁场B中,在 $T_{1}>T_{c}$ 时,通过环的磁通量为 $\Phi$ ,如图8.4.3(1)所示.然后将温度降低到 $T_{2}<T_{c}$ ,再取消外磁场.(1)试画出环内电流I的方向;(2)设环的自感为L,试证明: $\Phi+LI=$ 常量(不随时间变化).

【解】(1)环内电流 I 的方向, 如图 8.4.3(2) 所示.

(2)在取消外磁场时,环内产生感应电动势

$$
\mathcal {E} = - \frac {\mathrm{d} \Phi}{\mathrm{d} t}\tag{1}
$$

根据电路方程

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R I = \mathcal {E}\tag{2}
$$

和超导体的性质

$$
R = 0\tag{3}
$$

得

$$
\frac {\mathrm{d} \Phi}{\mathrm{d} t} + L \frac {\mathrm{d} I}{\mathrm{d} t} = 0\tag{4}
$$

积分便得

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/1045107bf51a42f7be140845c770184c2b45309d2aa57a816de4099080b67d5d.jpg)


$$
\Phi + I J = \text { 常量 }\tag{5}
$$


图8.4.3(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/0bbaab884eede81e946e5f2b013476ad478fa314726ff2aa77df56701509ac39.jpg)



图8.4.3(2)


8.4.4 如图 8.4.4, 电偶极矩为 p 的电偶极子向着导体时 [如图 8.4.4(1)] 和背着导体时 [如图 8.4.4(2)], 试问 p 所受的力的方向各如何? 磁矩为 m 的磁偶极子向着超导体时 [如图 8.4.4(3)] 和背着超导体时 [如图 8.4.4(4)], 试问 m 所受的力的方向各如何?

【解答】因为导体上靠近 p 处产生的感应电荷与 p 的电荷符号相反, 故图 8.4.4(1) 和 (2) 情况, p 受的都是吸引力, 即 p 所受的力的方向都向着导体.

因为超导体是完全抗磁体, 故图 8.4.4(3) 和 (4) 情况, m 所受的都是排斥力, 即 m 所受的力的方向都背着超导体.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/073fc50a9da4d25724de66d43dc3e2d563f0c710db00235a129be5a82376ed43.jpg)



图8.4.4


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/de362968a3ddd829121f23c0fec09f08945697e51da8feda20828a578e170127.jpg)



图8.4.5


8.4.5 超导材料在温度 $T < T_{c}$ (临界温度) 时处在超导态, 这时如有电流通过它, 在它的表面上产生的磁场强度 $H > H_{c}$ , 超导态就会被破坏. $H_{c}$ 称为临界磁场. 实验得出, $H_{c}$ 与温度 T 的关系为

$$
H _ {\mathrm{c}} = H _ {0} \left[ 1 - \left(\frac {T}{T _ {\mathrm{c}}}\right) ^ {2} \right]
$$

式中 $H_{0}$ 是 T=0 时的临界磁场。(1)以 T 为横坐标, $H_{c}$ 为纵坐标, 画出 $H_{c}-T$ 曲线, 并标明超导态的区域; (2)铅的 $T_{c}=7.2K, H_{0}=6.39\times10^{4}A/m$ , 试问用铅做成半径为 1.0mm 的导线, 在 T=3.6K 时能通过多大的电流而不破坏超导态?

【解】(1)超导材料的 $H_{\mathrm{c}} - T$ 曲线如图8.4.5所示.

(2)设铅丝的半径为 r，则当它载有电流 I 时，它表面上的磁场强度为

$$
H = \frac {I}{2 \pi r}\tag{1}
$$

当

$$
H <   H _ {\mathrm{c}} = H _ {0} \left[ 1 - \left(\frac {T}{T _ {\mathrm{c}}}\right) ^ {2} \right]\tag{2}
$$

时，铅丝仍为超导态.由以上两式得

$$
\begin{array}{r l} & I <   2 \pi r H _ {0} \left[ 1 - \left(\frac {T}{T _ {\mathrm{c}}}\right) ^ {2} \right] \\ & = 2 \pi \times 1. 0 \times 1 0 ^ {- 3} \times 6. 3 9 \times 1 0 ^ {4} \times \left[ 1 - \left(\frac {3 . 6}{7 . 2}\right) ^ {2} \right] \\ & = 3. 0 \times 1 0 ^ {2} (\mathrm{A}) \end{array}\tag{3}
$$

8.4.6 半径为 R 的超导圆环, 自感为 L, 放在磁感强度为 B 的均匀磁场中, 环的轴线与 B 垂直, 环内没有电流. 现将这环绕垂直于 B 的直径转 $90^{\circ}$ , 使它的轴线平行于 B. 试求: (1) 环内的电流 I; (2) 外力作的功.

【解】(1)对于超导线圈来说,通过它的磁通量 $\Phi$ 与它的自感 L 和电流 I 的关系为[参见前面 8.4.3 题]

$$
\Phi + L I = C (\text {常量})\tag{1}
$$

开始时， $I_{0}=0,\theta=90^{\circ}$ ，故

$$
\Phi_ {0} = \iint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = \iint_ {S} B \cos 9 0 ^ {\circ} \mathrm{d} S = 0\tag{2}
$$

代入式(1)得

$$
C = 0\tag{3}
$$

转 $90^{\circ}$ 后, 电流为 I, 磁通量为

$$
\begin{array}{r l} \Phi & = \iint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = \iint_ {S} B \cos 0 ^ {\circ} \mathrm{d} S = \iint_ {S} B \mathrm{d} S \\ & = \pi R ^ {2} B \end{array}\tag{4}
$$

于是由式(1)、(3)、(4)得

$$
I = - \frac {\Phi}{L} = - \frac {\pi R ^ {2} B}{L}\tag{5}
$$

式中负号表 $I$ 沿 $\pmb{B}$ 的左手螺旋方向，即 $I$ 在环内所产生的磁感强度与 $\pmb{B}$ 的方向相反，这使通过环的总磁通量恒为零.

(2) 外力所作的功为

$$
W = \frac {1}{2} L I ^ {2} = \frac {1}{2} L \left(- \frac {\pi R ^ {2} B}{L}\right) ^ {2} = \frac {\pi^ {2} R ^ {4} B ^ {2}}{2 L}\tag{6}
$$

8.4.7 用横截面半径为 $a = 1.0\mathrm{mm}$ 的超导线做成圆环，环的半径为 $R = 25.0\mathrm{mm}$ . 在温度高于临界温度 $T_{\mathrm{c}}$ 时，将这圆环放在磁感强度为 $\pmb{B}$ 的均匀磁场中，圆环的轴线与 $\pmb{B}$ 平行，环内电流为零. 然后将温度降低到 $T_{\mathrm{c}}$ 以下，再撤去磁场. 试求圆环中的电流. 已知 $B = |\pmb{B}| = 5.0\mathrm{Gs}$ ，圆环的自感为 $L = \mu_0 R (\ln \frac{8R}{a} - 1.75)$ .

【解】对于超导线圈来说,它所载的电流 I 和它的自感 L 与通过它的磁通量 $\Phi$ 之间的关系为 [参见前面 8.4.3 题]

$$
\Phi + L I = C (\text { 常   量 })\tag{1}
$$

故撤去磁场后，便有

$$
\Phi + L I = L I = \Phi_ {0} + L I _ {0} = \Phi_ {0} = B S = \pi R ^ {2} B\tag{2}
$$

于是得

$$
I = \frac {\pi R ^ {2} B}{L} = \frac {\pi R B}{\mu_ {0} \left(\ln \frac {8 R}{a} - 1 . 7 5\right)}\tag{3}
$$

代入数据得

$$
I = \frac {\pi \times 2 5 . 0 \times 1 0 ^ {- 3} \times 5 . 0 \times 1 0 ^ {- 4}}{4 \pi \times 1 0 ^ {- 7} \left(\ln \frac {8 \times 2 5 . 0}{1 . 0} - 1 . 7 5\right)} = 8. 8 (\mathrm{A})\tag{4}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/11197eab584546d0ad1a03c998efb0f4c82ddc08f9e00f33413b7ba3aa6a44c2.jpg)


## 第九章 磁场能量

9.1 一长螺线管的自感为 $L$ ，当它的导线中通有电流 $I$ 时，试证明它所储藏的能量为 $W_{m} = \frac{1}{2} LI^{2}$ ；设这能量储存在磁场中，磁场是均匀的，试证明：磁场能量密度（即单位体积内的磁场能量）为 $W_{m} = \frac{1}{2} H \cdot B$ .

【证】如图9.1,电流 $I$ 流入螺线管处为电源 $\varepsilon_{L}$ 的负极,流出螺线管处为电源 $\varepsilon_{L}$ 的正极[参见前面8.3.1题].因此,这时电源 $\varepsilon_{L}$ 放电,电源向外提供能量,电源的能量 $W_{m}$ 减少.根据能量守恒,有

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/ff7cdd2f6cdd7fdba715d8ccd3afeebc6b1748014bc3caa4fb664bacf60c4f60.jpg)


$$
- \frac {\mathrm{d} W _ {m}}{\mathrm{d} t} = \mathcal {E} _ {L} I = - L \frac {\mathrm{d} I}{\mathrm{d} t} I = - L I \frac {\mathrm{d} I}{\mathrm{d} t}\tag{1}
$$

所以

$$
\mathrm{d} W _ {m} = L I \mathrm{d} I
$$

图9.1

(2) 

积分便得

$$
W _ {m} = \frac {1}{2} L I ^ {2} + C\tag{3}
$$

当 $I = 0$ 时， $W_{m} = 0$ ，故积分常数 $C = 0$ 。于是得

$$
W _ {m} = \frac {1}{2} L I ^ {2}\tag{4}
$$

因为是长螺线管，管内磁场是均匀的，由安培环路定理得管内磁场强度的大小为

$$
H = n I\tag{5}
$$

式中 $n$ 为单位长度匝数. 磁感强度的大小为

$$
B = \mu H = \mu n I\tag{6}
$$

式中 $\mu$ 是管内介质的磁导率. 螺线管外的磁场为零[参见前面 5.2.17 题的式(8)].

因螺线管的自感为[参见前面8.3.4题的式(4)]

$$
L = \mu n ^ {2} V\tag{7}
$$

式中 V 是螺线管的体积. 将式(7)代入式(4)得

$$
W _ {m} = \frac {1}{2} \mu n ^ {2} I ^ {2} V\tag{8}
$$

用式(5)、(6)的 $H$ 和 $B$ 表示便得

$$
\boldsymbol {W} _ {m} = \frac {1}{2} H B V = \frac {1}{2} \boldsymbol {H} \cdot \boldsymbol {B} V\tag{9}
$$

于是得磁场能量密度为

$$
w _ {m} = \frac {W _ {m}}{V} = \frac {1}{2} \boldsymbol {H} \cdot \boldsymbol {B}\tag{10}
$$

9.2 一螺线管长为 $l = 300\mathrm{mm}$ , 横截面的直径为 $d = 15\mathrm{mm}$ , 由表面绝缘的细导线密绕而成, 共有 N=2500 匝. 当导线中通有电流 I=2.0A 时, 试求管中心的磁场强度 H、磁感强度 B 和磁场能量密度 $w_{m}$ 等的值.

【解】由安培环路定理得管中心磁场强度 H 和磁感强度 B 的大小分别为

$$
H = n I = \frac {N}{l} I\tag{1}
$$

$$
B = \mu_ {0} H = \mu_ {0} \frac {N}{l} I\tag{2}
$$

于是得磁场能量密度为

$$
w _ {m} = \frac {1}{2} H B = \frac {1}{2} \mu_ {0} \left(\frac {N}{l}\right) ^ {2} I ^ {2}\tag{3}
$$

代入数据得

$$
H = \frac {2 5 0 0}{3 0 0 \times 1 0 ^ {- 3}} \times 2. 0 = 1. 7 \times 1 0 ^ {4} (\mathrm{A/m})\tag{4}
$$

$$
B = 4 \pi \times 1 0 ^ {- 7} \times \frac {2 5 0 0}{3 0 0 \times 1 0 ^ {- 3}} \times 2. 0 = 2. 1 \times 1 0 ^ {- 2} (T)\tag{5}
$$

$$
w _ {m} = \frac {1}{2} \times 4 \pi \times 1 0 ^ {- 7} \times \left(\frac {2 5 0 0}{3 0 0 \times 1 0 ^ {- 3}} \times 2. 0\right) ^ {2} = 1. 7 \times 1 0 ^ {2} (\mathrm{J/m} ^ {3})\tag{6}
$$

【讨论】一、题给的直径为 $d = 15\mathrm{mm}$ ，在计算中虽未用到，但它告诉我们，螺线管的半径 $\frac{d}{2} \ll l$ ，故可用近似式(1).

二、若用较好一些的近似式[参见前面5.1.29题的式(6)]

$$
B = \frac {\mu_ {0} n I}{\sqrt {1 + \left(\frac {2 R}{l}\right) ^ {2}}} = \frac {\mu_ {0} N I}{l \sqrt {1 + \left(\frac {d}{l}\right) ^ {2}}}\tag{7}
$$

则直径 d 便用上了. 将数据代入式(7)得

$$
B = \frac {4 \pi \times 1 0 ^ {- 7} \times 2 5 0 0 \times 2 . 0}{3 0 0 \times 1 0 ^ {- 3} \times \sqrt {1 + \left(\frac {1 5}{3 0 0}\right) ^ {2}}} = 2. 1 \times 1 0 ^ {- 2} (\mathrm{T})\tag{8}
$$

结果与式(5)相同,即在两位有效数字上,反映不出式(2)与式(7)的差别.换句话说,在本题所给数据的情况下,可用近似式(1).

9.3 一螺线管长 $30\mathrm{cm}$ , 横截面的直径为 $12\mathrm{cm}$ , 由 600 匝表面绝缘的细导线密绕而成. 管内是空气. 当它的导线中通有 $1.0\mathrm{A}$ 的电流时, 试分别求管中心和管口轴线上的磁场能量密度.

【解】由圆电流在轴线上产生磁场的公式[参见前面5.1.20题的式(2)]，经积分得螺线管中心的磁感强度为[参见前面5.1.29题的式(6)]

$$
B _ {0} = \frac {\mu_ {0} n I}{\sqrt {1 + \left(\frac {2 R}{l}\right) ^ {2}}}\tag{1}
$$

螺线管口轴线上的磁感强度为[参见前面5.1.30题的式(3)]

$$
B _ {e} = \frac {1}{2} \frac {\mu_ {0} n I}{\sqrt {1 + \left(\frac {R}{l}\right) ^ {2}}}\tag{2}
$$

以上两式中 n 为单位长度匝数，I 为电流，l 为螺线管长度，R 为横截面半径.

由式(1)得管中心的磁场能量密度为

$$
\begin{array}{r l} w _ {m} & = \frac {1}{2} H _ {0} B _ {0} = \frac {1}{2 \mu_ {0}} B _ {0} ^ {2} = \frac {1}{2} \frac {\mu_ {0} n ^ {2} I ^ {2}}{1 + \left(\frac {2 R}{l}\right) ^ {2}} \\ & = \frac {1}{2} \frac {4 \pi \times 1 0 ^ {- 7} \times \left(\frac {6 0 0}{3 0 \times 1 0 ^ {- 2}} \times 1 . 0\right) ^ {2}}{1 + \left(\frac {1 2}{3 0}\right) ^ {2}} = 2. 2 (\mathrm{J/m} ^ {3}) \end{array}\tag{3}
$$

由式(2)得管口轴线上的磁场能量密度为

$$
\begin{array}{r l} w _ {m} & = \frac {1}{2} H _ {e} B _ {e} = \frac {1}{2 \mu_ {0}} B _ {e} ^ {2} = \frac {1}{8} \frac {\mu_ {0} n ^ {2} I ^ {2}}{1 + \left(\frac {R}{l}\right) ^ {2}} \\ & = \frac {1}{8} \frac {4 \pi \times 1 0 ^ {- 7} \times \left(\frac {6 0 0}{3 0 \times 1 0 ^ {- 2}} \times 1 . 0\right) ^ {2}}{1 + \left(\frac {1 2}{2 \times 3 0}\right) ^ {2}} = 0. 6 0 (\mathrm{J/m} ^ {3}) \end{array}\tag{4}
$$

9.4 半径为 $a$ 的无限长直圆柱面均匀带电, 单位面积的电荷量为 $\sigma$ . 当这圆柱面以匀角速度 $\omega$ 绕它的几何轴旋转时, 试求圆柱内单位长度的磁场能量.

【解】单位长度的电流为

$$
\frac {I}{l} = \frac {Q}{l T} = \frac {Q \omega}{2 \pi l} = \frac {2 \pi a l \sigma \omega}{2 \pi l} = \sigma \omega a\tag{1}
$$

由对称性和安培环路定理得出,这时圆柱面内的磁场是均匀磁场[参见前面5.2.17题],磁场强度的方向平行于轴线,其大小为

$$
H = \frac {I}{l} = \sigma \omega a\tag{2}
$$

于是得单位长度的磁场能量为

$$
\frac {W _ {m}}{l} = \frac {\mu_ {0} H ^ {2} V}{2 l} = \frac {\mu_ {0} \sigma^ {2} \omega^ {2} a ^ {2} \cdot \pi a ^ {2} l}{2 l} = \frac {1}{2} \pi \mu_ {0} \sigma^ {2} \omega^ {2} a ^ {4}\tag{3}
$$

9.5 电荷量 Q 均匀地分布在半径为 a 的球面上, 当这球面以匀角速度 $\omega$ 绕它的一个固定直径旋转时, 试求球内的磁场能量.

【解】先求球内轴线上任一点 $P$ 的磁感强度 $\pmb{B}$ 如图9.5，带有电荷量 $Q$ 的球面以匀角速度 $\omega$ 绕它的固定直径MN旋转， $P$ 为转轴上任一点，到球心的距离为 $r$ 。考虑 $\theta$ 处宽为 $a\mathrm{d}\theta$ 的环带，它上面的电荷量为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/1bd4f04fd852f0a0ac9e46daeed5dd52000bac9807f4651863e5ca34eb338f37.jpg)



图9.5


$$
\mathrm{d} Q = \sigma \cdot 2 \pi a ^ {2} \sin \theta \mathrm{d} \theta = \frac {1}{2} Q \sin \theta \mathrm{d} \theta\tag{1}
$$

这 dQ 以角速度 $\omega$ 旋转时形成圆电流

$$
\mathrm{d} I = \frac {\mathrm{d} Q}{T} = \frac {\omega \mathrm{d} Q}{2 \pi} = \frac {\omega Q}{4 \pi} \sin \theta \mathrm{d} \theta\tag{2}
$$

圆电流 $I$ 在轴线上离圆心为 $r$ 处产生的磁感强度的方向沿轴线，其大小为[参见前面5.1.20题的式(2)]

$$
B = \frac {\mu_ {0} a ^ {2} I}{2 (r ^ {2} + a ^ {2}) ^ {3 / 2}}\tag{3}
$$

由此得 dI 在 P 点产生的磁感强度的大小为

$$
\mathrm{dB} = \frac {\mu_ {0} (a \sin \theta) ^ {2} \mathrm{dI}}{2 [ (a \sin \theta) ^ {2} + (a \cos \theta + r) ^ {2} ] ^ {3 / 2}} = \frac {\mu_ {0} Q a ^ {2} \omega}{8 \pi} \frac {\sin^ {3} \theta \mathrm{d} \theta}{(r ^ {2} + a ^ {2} + 2 a r \cos \theta) ^ {3 / 2}}\tag{4}
$$

积分得

$$
\begin{array}{r l} B & = \frac {\mu_ {0} Q a ^ {2} \omega}{8 \pi} \int_ {0} ^ {\pi} \frac {\sin^ {3} \theta \mathrm{d} \theta}{(r ^ {2} + a ^ {2} + 2 a r \cos \theta) ^ {3 / 2}} \\ & = \frac {\mu_ {0} Q a ^ {2} \omega}{8 \pi} \frac {1}{4 a ^ {3} r ^ {3}} \left[ \frac {1}{3} (r ^ {2} + a ^ {2} + 2 a r \cos \theta) ^ {3 / 2} - 2 (r ^ {2} + a ^ {2}) \sqrt {r ^ {2} + a ^ {2} + 2 a r \cos \theta} - \frac {(a ^ {2} - r ^ {2}) ^ {2}}{\sqrt {r ^ {2} + a ^ {2} + 2 a r \cos \theta}} \right] _ {\theta = 0} ^ {\theta = \pi} \\ & = \frac {\mu_ {0} Q a ^ {2} \omega}{8 \pi} \frac {1}{4 a ^ {3} r ^ {3}} \frac {1 6}{3} r ^ {3} = \frac {\mu_ {0} Q \omega}{6 \pi a} \end{array}\tag{5}
$$

$B$ 与 $r$ 无关, 故轴线 $MN$ 上任一点的磁感强度都相同, 其大小都由式(5)表示. 由此可以论证[参见前面5.2.21题], 球内磁场是均匀磁场. 于是得球内磁场的能量为

$$
W _ {m} = \frac {4 \pi a ^ {3}}{3} w _ {m} = \frac {4 \pi a ^ {3}}{3} \frac {B ^ {2}}{2 \mu_ {0}} = \frac {4 \pi a ^ {3}}{3} \frac {1}{2 \mu_ {0}} \left(\frac {\mu_ {0} Q \omega}{6 \pi a}\right) ^ {2} = \frac {\mu_ {0} Q ^ {2} \omega^ {2} a}{5 4 \pi}\tag{6}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/b19c8f490b6f9a81a2b81da56d18072e8f763db97e7bed3c7c25d42decbfcadd.jpg)



图9.6


9.6 一螺绕环由外表绝缘的导线在硬纸壳上绕 $N$ 匝而成，横截面积为 $a \times b$ ，内半径为 $R$ ，外半径为 $R + b$ ，它的一半如图9.6所示。当导线内的电流为 $I$ 时，试求这螺绕环体内的磁场能量。

【解】以环心为心，r 为半径，在环体内取安培环路 L，由对称性和安培环路定理得

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H \cdot 2 \pi r = N I\tag{1}
$$

所以

$$
H = \frac {N I}{2 \pi r}\tag{2}
$$

磁场能量密度为

$$
w _ {m} = \frac {1}{2} \boldsymbol {H} \cdot \boldsymbol {B} = \frac {1}{2} H B = \frac {\mu_ {0}}{2} H ^ {2} = \frac {\mu_ {0} N ^ {2} I ^ {2}}{8 \pi^ {2} r ^ {2}}\tag{3}
$$

积分便得环体内的磁场能量为

$$
\begin{array}{r l} W _ {m} = & \iiint_ {\mathbf {v}} w _ {m} \mathrm{d} V = \int_ {R} ^ {R + b} \frac {\mu_ {0} N ^ {2} I ^ {2}}{8 \pi^ {2} r ^ {2}} \cdot a \cdot 2 \pi r \mathrm{d} r \\ = & \frac {\mu_ {0} N ^ {2} I ^ {2} a}{4 \pi} \int_ {R} ^ {R + b} \frac {\mathrm{d} r}{r} = \frac {\mu_ {0} N ^ {2} I ^ {2} a}{4 \pi} \ln \frac {R + b}{R} \end{array}\tag{4}
$$

9.7 一同轴电缆由很长的直导线和套在它外面的同轴导体圆筒构成,导线的半径为 a, 圆筒的半径为 b, 圆筒的厚度可略去不计.电流 I 由圆筒流去,由导线流回, I 在导线和圆筒的横截面上,都是均匀分布的.试求:(1)离轴线为 r 处的磁场能量密度 $w_{m}$ ;(2)这电缆长为 l 的一段所储存的磁场能量 $W_{m}$ ;(3)当 a = 1.0mm, b = 7.0mm, l = 1.00m 和 I = 100A 时 $W_{m}$ 的值.

【解】（1）由对称性和安培环路定理得，离轴线为 $r$ 处的磁场强度 $\pmb{H}$ 的方向为导线中电流 $I$ 的右手螺旋方向，其大小为

$$
H _ {1} = \frac {I r}{2 \pi a ^ {2}}, \quad 0 \leqslant r \leqslant a\tag{1}
$$

$$
H _ {2} = \frac {I}{2 \pi r}, \quad a \leqslant r <   b\tag{2}
$$

$$
H _ {3} = 0, \quad r > b\tag{3}
$$

于是得磁场能量密度为

$$
w _ {m 1} = \frac {1}{2} \mu_ {0} H _ {1} ^ {2} = \frac {\mu_ {0} I ^ {2} r ^ {2}}{8 \pi^ {2} a ^ {4}}, \quad 0 \leqslant r \leqslant a\tag{4}
$$

$$
w _ {m 2} = \frac {1}{2} \mu_ {0} H _ {2} ^ {2} = \frac {\mu_ {0} I ^ {2}}{8 \pi^ {2} r ^ {2}}, \quad a \leqslant r <   b\tag{5}
$$

$$
w _ {m 3} = \frac {1}{2} \mu_ {0} H _ {3} ^ {2} = 0, \quad r > b\tag{6}
$$

(2) 长为 l 一段的磁场能量为

$$
W _ {m 1} = \iiint_ {V _ {1}} w _ {m 1} \mathrm{d} V = \int_ {0} ^ {a} \frac {\mu_ {0} I ^ {2} r ^ {2}}{8 \pi^ {2} a ^ {4}} \cdot l \cdot 2 \pi r \mathrm{d} r = \frac {\mu_ {0} I ^ {2} l}{1 6 \pi}\tag{7}
$$

$$
W _ {m 2} = \iiint_ {\mathbf {v} _ {2}} w _ {m 2} \mathrm{d} V = \int_ {a} ^ {b} \frac {\mu_ {0} I ^ {2}}{8 \pi^ {2} r ^ {2}} \cdot l \cdot 2 \pi r \mathrm{d} r = \frac {\mu_ {0} I ^ {2} l}{4 \pi} \ln \frac {b}{a}\tag{8}
$$

$$
W _ {m 3} = \iiint_ {\mathbf {V} _ {3}} w _ {m 3} \mathrm{d} V = 0\tag{9}
$$

所以

$$
W _ {m} = W _ {m 1} + W _ {m 2} + W _ {m 3} = \frac {\mu_ {0} I ^ {2} l}{4 \pi} \left(\frac {1}{4} + \ln \frac {b}{a}\right)\tag{10}
$$

(3)代入数据,便得 $W_{m}$ 的值为

$$
W _ {m} = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 0 0 ^ {2} \times 1 . 0 0}{4 \pi} \times \left(\frac {1}{4} + \ln \frac {7 . 0}{1 . 0}\right) = 2. 2 \times 1 0 ^ {- 3} (\mathrm{J})\tag{11}
$$

9.8 一同轴传输线由很长的直导线和套在它外面的同轴导体圆管构成,导线的半径为 a, 圆管的内半径为 b, 外半径为 c. 电流 I 由圆管流去,由导线流回; I 在它们的横截面上都是均匀分布的. (1) 试求下列四处一米长的磁场能量: (i) 导线内；(ii)导线和圆管之间；(iii)圆管本身内；(iv)圆管外。(2)当 $a = 1.0\mathrm{mm}, b = 4.0\mathrm{mm}, c = 5.0\mathrm{mm}, I = 10\mathrm{A}$ 时，试计算上述各处磁场能量的值。磁场能量主要分布在什么地方？

【解】（1）由对称性和安培环路定理得出，离轴线为 $r$ 处磁场强度 $\pmb{H}$ 的方向为导线中电流 $I$ 的右手螺旋方向，其大小为

$$
H _ {1} = \frac {I r}{2 \pi a ^ {2}}, \quad 0 \leqslant r \leqslant a\tag{1}
$$

$$
H _ {2} = \frac {I}{2 \pi r}, \quad a \leqslant r \leqslant b\tag{2}
$$

$$
H _ {3} = \frac {1}{2 \pi r} \left[ I - \frac {I \cdot \pi (r ^ {2} - b ^ {2})}{\pi (c ^ {2} - b ^ {2})} \right] = \frac {I}{2 \pi r} \frac {c ^ {2} - r ^ {2}}{c ^ {2} - b ^ {2}}, \quad b \leqslant r \leqslant c\tag{3}
$$

$$
H _ {4} = 0, \quad r > c\tag{4}
$$

各处一米长的磁场能量为

(i)导线内

$$
W _ {m 1} = \int_ {0} ^ {a} \frac {1}{2} \mu_ {0} H _ {1} ^ {2} \cdot 2 \pi r \mathrm{d} r = \frac {\mu_ {0} I ^ {2}}{4 \pi a ^ {4}} \int_ {0} ^ {a} r ^ {3} \mathrm{d} r = \frac {\mu_ {0} I ^ {2}}{1 6 \pi}\tag{5}
$$

(ii)导线与圆管间

$$
W _ {m 2} = \int_ {a} ^ {b} \frac {1}{2} \mu_ {0} H _ {2} ^ {2} \cdot 2 \pi r \mathrm{d} r = \frac {\mu_ {0} I ^ {2}}{4 \pi} \int_ {a} ^ {b} \frac {\mathrm{d} r}{r} = \frac {\mu_ {0} I ^ {2}}{4 \pi} \ln \frac {b}{a}\tag{6}
$$

(iii)圆管本身内

$$
\begin{array}{r l} W _ {m 3} & = \int_ {b} ^ {c} \frac {1}{2} \mu_ {0} H _ {3} ^ {2} \cdot 2 \pi r \mathrm{d} r = \frac {\mu_ {0} I ^ {2}}{4 \pi (c ^ {2} - b ^ {2}) ^ {2}} \int_ {b} ^ {c} (c ^ {2} - r ^ {2}) ^ {2} \frac {\mathrm{d} r}{r} \\ & = \frac {\mu_ {0} I ^ {2}}{4 \pi (c ^ {2} - b ^ {2}) ^ {2}} \left[ c ^ {4} \ln \frac {c}{b} - c ^ {2} (c ^ {2} - b ^ {2}) + \frac {1}{4} (c ^ {4} - b ^ {4}) \right] \\ & = \frac {\mu_ {0} I ^ {2}}{1 6 \pi (c ^ {2} - b ^ {2}) ^ {2}} \left[ 4 c ^ {4} \ln \frac {c}{b} - (c ^ {2} - b ^ {2}) (3 c ^ {2} - b ^ {2}) \right] \end{array}\tag{7}
$$

(iv)圆管外

$$
W _ {m 4} = \int_ {c} ^ {\infty} \frac {1}{2} \mu_ {0} H _ {4} ^ {2} \cdot 2 \pi r \mathrm{d} r = 0\tag{8}
$$

(2)代入数据得各处磁场能量的值如下：

(i)导线内

$$
W _ {m 1} = \frac {\mu_ {0} I ^ {2}}{1 6 \pi} = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 0 ^ {2}}{1 6 \pi} = 2. 5 \times 1 0 ^ {- 6} (\mathrm{J/m})\tag{9}
$$

(ii)导线与圆管间

$$
W _ {m 2} = \frac {\mu_ {0} I ^ {2}}{4 \pi} \ln \frac {b}{a} = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 0 ^ {2}}{4 \pi} \mathrm{k}, \begin{array}{l} 4. 0 \\ 1. 0 \end{array} - 1. 4 \times 1 0 ^ {- 5} (\mathrm{J/m})\tag{10}
$$

(iii)圆管本身内

$$
\begin{array}{r l} W _ {m 3} & = \frac {\mu_ {0} I ^ {2}}{1 6 \pi} \frac {1}{(c ^ {2} - b ^ {2}) ^ {2}} \left[ 4 c ^ {4} \ln \frac {c}{b} - (c ^ {2} - b ^ {2}) (3 c ^ {2} - b ^ {2}) \right] \\ & = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 0 ^ {2}}{1 6 \pi} \frac {1}{(5 . 0 ^ {2} - 4 . 0 ^ {2}) ^ {2}} \times \\ & \left[ 4 \times 5. 0 ^ {4} \ln \frac {5 . 0}{4 . 0} - (5. 0 ^ {2} - 4. 0 ^ {2}) (3 \times 5. 0 ^ {2} - 4. 0 ^ {2}) \right] \\ & = 8. 3 \times 1 0 ^ {- 7} (\mathrm{J/m}) \end{array}\tag{11}
$$

由上面各处磁场能量的值可见，磁场能量主要分布在导线与圆管之间.

9.9 一同轴电缆由半径为 $a$ 的长直导线和与它共轴的导体薄圆筒构成, 圆筒的半径为 $b$ , 如图 9.9 所示. 导线与圆筒间充满电容率为 $\varepsilon$ 、磁导率为 $\mu$ 的均匀介质. 当电缆的一端接上负载电阻 $R$ , 另一端加上电势差时, 试证明: 如果 $R = \frac{1}{2\pi} \sqrt{\frac{\mu}{\varepsilon}} \ln \frac{b}{a}$ , 则导线与圆筒间的电场能量等于磁场能量.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/38086aaeb56a5521538717f5d34a06bdba7604213da9ad00ad6ead1846b7318f.jpg)



图9.9


【证】设导线与圆筒间的电势差为 U，导线上单位长度的电荷量为 $\lambda$ ，则由对称性和高斯定理得离轴线为 r 处，电场强度的大小为

$$
E = \frac {\lambda}{2 \pi \epsilon r}\tag{1}
$$

$$
U = \int_ {a} ^ {b} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = \frac {\lambda}{2 \pi \varepsilon} \int_ {a} ^ {b} \frac {\mathrm{d} r}{r} = \frac {\lambda}{2 \pi \varepsilon} \ln \frac {b}{a}\tag{2}
$$

所以

$$
E = \frac {1}{r} \frac {U}{\ln \frac {b}{a}}\tag{3}
$$

故电场能量密度为

$$
W _ {r} = \frac {1}{2} \varepsilon E ^ {2} = \frac {\varepsilon}{2} \frac {U ^ {2}}{r ^ {2} \left(\ln \frac {b}{a}\right) ^ {2}}\tag{4}
$$

设导线中的电流为 I，则由对称性和安培环路定理得离轴线为 r 处，磁场强度的大小为

$$
H = \frac {I}{2 \pi r} = \frac {U}{2 \pi R r}\tag{5}
$$

故磁场能量密度为

$$
W _ {m} = \frac {1}{2} \mu H ^ {2} = \frac {\mu}{2} \frac {U ^ {2}}{(2 \pi R r) ^ {2}}\tag{6}
$$

当 $W_{m} = W_{e}$ 时，导线与圆筒间的电场能量便等于磁场能量.于是由式(4)、(6)得

$$
\mu \frac {U ^ {2}}{(2 \pi R r) ^ {2}} = \varepsilon \frac {U ^ {2}}{r ^ {2} \left(\ln \frac {b}{a}\right) ^ {2}}\tag{7}
$$

所以

$$
R = \frac {1}{2 \pi} \sqrt {\frac {\mu}{\epsilon}} \ln \frac {b}{a}\tag{8}
$$

9.10 两无限长直薄圆筒共轴, 半径分别为 $R_{1}$ 和 $R_{2}$ , 载有大小相等而方向相反的电流 $I, I$ 平行于轴线流动, 并均匀分布在筒面上. 两筒间充满磁导率为 $\mu$ 的均匀介质. 试求下列各处长为 $l$ 一段的磁场能量: (1) 内筒内; (2) 两筒间; (3) 外筒外.

【解】由对称性和安培环路定理得出，离轴线为 $r$ 处，磁场强度的大小为

$$
H _ {1} = 0, \quad r <   R _ {1}\tag{1}
$$

$$
H _ {2} = \frac {I}{2 \pi r}, \quad R _ {1} <   r <   R _ {2}\tag{2}
$$

$$
H _ {3} = 0, \quad r > R _ {2}\tag{3}
$$

(1)由式(1)得,内筒内磁场能量密度 $w_{m1}=0$ , 故所求磁场能量为零.

(2)由式(2)得,两筒间磁场能量密度为

$$
W _ {m 2} = \frac {1}{2} \mu_ {0} H _ {2} ^ {2} = \frac {\mu_ {0} I ^ {2}}{8 \pi^ {2} r ^ {2}}\tag{4}
$$

故长为 $l$ 一段的磁场能量为

$$
W _ {m} = \int_ {R _ {1}} ^ {R _ {2}} w _ {m 2} l \cdot 2 \pi r \mathrm{d} r = \frac {\mu_ {0} I ^ {2} l}{4 \pi} \int_ {R _ {1}} ^ {R _ {2}} \frac {\mathrm{d} r}{r} = \frac {\mu_ {0} I ^ {2} l}{4 \pi} \ln \frac {R _ {2}}{R _ {1}}\tag{5}
$$

(3)由式(3)得,外筒外磁场能量密度 $w_{m3}=0$ , 故所求磁场能量为零.

9.11 一条很长的直导线, 半径为 $R$ , 载有电流 $I, I$ 均匀分布在它的横截面上. 导线外有一层厚为 $h$ 的绝缘皮. (1) 试求这导线里单长度的磁场能量; (2) 在这导线里取一共轴的小圆柱体, 其半径为 $\frac{R}{2}$ , 试求这小圆柱里单位长度的磁场能量; (3) 试求外皮里单位长度的磁场能量.

【解】由对称性和安培环路定理得，离轴线为 $r$ 处，磁场强度的大小为

$$
H = \frac {I r}{2 \pi R ^ {2}}, \quad 0 \leqslant r \leqslant R\tag{1}
$$

$$
H = \frac {l}{2 \pi r}, \quad R \leqslant r \leqslant R + h\tag{2}
$$

(1)导线里单位长度的磁场能量为

$$
W _ {m} = \int_ {0} ^ {R} \frac {1}{2} \mu_ {0} H ^ {2} \cdot 2 \pi r \mathrm{d} r = \frac {\mu_ {0} I ^ {2}}{4 \pi R ^ {4}} \int_ {0} ^ {R} r ^ {3} \mathrm{d} r = \frac {\mu_ {0} I ^ {2}}{1 6 \pi}\tag{3}
$$

(2) 小圆柱里单位长度的磁场能量为

$$
W _ {m} = \int_ {0} ^ {R / 2} \frac {1}{2} \mu_ {0} H ^ {2} \cdot 2 \pi r \mathrm{d} r = \frac {\mu_ {0} I ^ {2}}{4 \pi R ^ {4}} \int_ {0} ^ {R / 2} r ^ {3} \mathrm{d} r - \frac {\mu_ {0} I ^ {2}}{2 5 6 \pi}\tag{4}
$$

(3)外皮里单位长度的磁场能量为

$$
W _ {m} = \int_ {R} ^ {R + h} \frac {1}{2} \mu_ {0} H ^ {2} \cdot 2 \pi r \mathrm{d} r = \frac {\mu_ {0} I ^ {2}}{4 \pi} \int_ {R} ^ {R + h} \frac {\mathrm{d} r}{r} = \frac {\mu_ {0} I ^ {2}}{4 \pi} \ln \left(1 + \frac {h}{R}\right)\tag{5}
$$

9.12 一铁环上绕有 N = 500 匝外皮绝缘的导线，当导线中的电流为 I = 2.0A 时，穿过铁环横截面的磁通量为 $3.0 \times 10^{-3} ~Wb$ . 试求铁环内的磁场能量.

【解】设环长为 l，横截面积为 S，则由对称性和安培环路定理得环内磁场强度的大小为

$$
H = \frac {N I}{l}\tag{1}
$$

通过环的横截面的磁通量为

$$
\Phi = B S = \mu H S = \frac {\mu N I S}{l}\tag{2}
$$

环内的磁场能量为

$$
W _ {m} = \frac {1}{2} \mu H ^ {2} l S = \frac {1}{2} \frac {\mu N ^ {2} I ^ {2}}{l} S = \frac {1}{2} N I \Phi\tag{3}
$$

代入数据得

$$
W _ {m} = \frac {1}{2} \times 5 0 0 \times 2. 0 \times 3. 0 \times 1 0 ^ {- 3} = 1. 5 (\mathrm{J})\tag{4}
$$

9.13 一起重用的电磁铁由 U 形轭铁和铁块构成, 如图 9.13 所示. 设轭铁每个极的面积都是 $S = 1.5 \times 10^{-2} \mathrm{~m}^2$ , 磁通量都是 $\Phi = 1.5 \times 10^{-2} \mathrm{Wb}$ . 试求这电磁铁的起重力(包括铁块的重量在内).

【解】设轭铁与铁块之间的间隙为 $l$ ，则两极的间隙空间所具有的磁场能量共为

$$
W _ {m} = \frac {1}{2 \mu_ {0}} B ^ {2} \cdot 2 S l = \frac {1}{\mu_ {0}} \left(\frac {\Phi}{S}\right) ^ {2} S l = \frac {1}{\mu_ {0}} \frac {\Phi^ {2}}{S} l
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/76efc32d1af524a205148b4cb9a4b1c798cd8ba3b14591f039d5052d49ae3122.jpg)


(1) 

于是得所求的起重力为

图9.13

$$
F = - \frac {\partial W _ {m}}{\partial l} = - \frac {1}{\mu_ {0}} \frac {\Phi^ {2}}{S}\tag{2}
$$

负号表示力 F 的方向是使 l 减小的方向. 力的大小为

$$
\mid F \mid = \frac {1}{\mu_ {0}} \frac {\Phi^ {2}}{S} = \frac {1}{4 \pi \times 1 0 ^ {- 7}} \frac {(1 . 5 \times 1 0 ^ {- 2}) ^ {2}}{1 . 5 \times 1 0 ^ {- 2}} = 1. 2 \times 1 0 ^ {4} (\mathrm{N}) = 1. 2 \times 1 0 ^ {3} (\mathrm{kgf})\tag{3}
$$

9.14 一导线弯成半径为 $R = 5.0\mathrm{cm}$ 的圆形，当其中载有 $I = 100\mathrm{A}$ 的电流时，试求圆心的磁场能量密度 $\omega_{m}$ .

【解】 圆心的磁场强度的大小为

$$
H = \frac {I \cdot 2 \pi R}{4 \pi R ^ {2}} = \frac {I}{2 R}
$$

故得磁场能量密度为

$$
w _ {m} = \frac {1}{2} \mu_ {0} H ^ {2} = \frac {1}{2} \mu_ {0} \left(\frac {I}{2 R}\right) ^ {2} = \frac {\mu_ {0} I ^ {2}}{8 R ^ {2}} = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 0 0 ^ {2}}{8 \times (5 . 0 \times 1 0 ^ {- 2}) ^ {2}} = 0. 6 3 (\mathrm{J} / \mathrm{m} ^ {3})
$$

9.15 按照玻尔理论, 氢原子处在基态时, 它的电子沿半径为 $a = 5.29 \times 10^{-11} \mathrm{~m}$ 的圆轨道绕氢核(质子)运动. 已知电子的质量为 $m = 9.11 \times 10^{-31} \mathrm{~kg}$ , 电荷量为 $e = -1.60 \times 10^{-19} \mathrm{C}$ . 试求电子的这种运动在轨道中心产生的磁场能量密度.

【解】 电子这种运动在轨道中心产生的磁场强度的大小为

$$
H = \frac {I}{2 a} = \frac {| e |}{2 a T} = \frac {| e | v}{4 \pi a ^ {2}}\tag{1}
$$

因为

$$
m \frac {v ^ {2}}{a} = \frac {e ^ {2}}{4 \pi \varepsilon_ {0} a ^ {2}}\tag{2}
$$

故所求磁场能量密度为

$$
\begin{array}{r l} w _ {m} & = \frac {1}{2} \mu_ {0} H ^ {2} = \frac {\mu_ {0}}{2} \left(\frac {| e | v}{4 \pi a ^ {2}}\right) ^ {2} = \frac {\mu_ {0} e ^ {2} v ^ {2}}{3 2 \pi^ {2} a ^ {4}} = \frac {\mu_ {0} e ^ {4}}{1 2 8 \pi^ {3} \varepsilon_ {0} m a ^ {5}} \\ & = \frac {4 \pi \times 1 0 ^ {- 7} \times (1 . 6 0 \times 1 0 ^ {- 1 9}) ^ {4}}{1 2 8 \times \pi^ {3} \times 8 . 8 5 4 \times 1 0 ^ {- 1 2} \times 9 . 1 1 \times 1 0 ^ {- 3 1} \times (5 . 2 9 \times 1 0 ^ {- 1 1}) ^ {5}} \\ & = 6. 2 1 \times 1 0 ^ {7} (\mathrm{J/m} ^ {3}) \end{array}\tag{3}
$$

9.16 半径都是 R 的两共轴圆线圈, 载有大小和方向都相同的电流 I, 它们间的距离等于半径 R (亥姆霍兹线圈). 试求轴线上离两线圈都相等处的磁场能量密度.

【解】圆电流 I 在轴线上离圆心为 r 处所产生的磁感强度的大小为 [参见前面 5.1.20 题的式(2)]

$$
B = \frac {\mu_ {0} I R ^ {2}}{2 (r ^ {2} + R ^ {2}) ^ {3 / 2}}\tag{1}
$$

由此得亥姆霍兹线圈中心的磁感强度为

$$
2 B = \frac {\mu_ {0} I R ^ {2}}{\left[ \left(\frac {R}{2}\right) ^ {2} + R ^ {2} \right] ^ {3 / 2}} = \frac {8}{5 \sqrt {5}} \frac {\mu_ {0} I}{R}\tag{2}
$$

于是得所求的磁场能量密度为

$$
w _ {m} = \frac {1}{2 \mu_ {0}} \left(\frac {8}{5 \sqrt {5}} \frac {\mu_ {0} I}{R}\right) ^ {2} = \frac {3 2}{1 2 5} \frac {\mu_ {0} I ^ {2}}{R ^ {2}}\tag{3}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/dcdd9fa6c7af13f0fb4f4e44b6dda25bd2131e649f296d5bc129c81ad663cae6.jpg)



图9.17


9.17 对于一个电源来说, 若电流的方向与它的电动势方向(非静电力的方向)相同, 即从它的正极出发, 经外电路回到负极, 如图 9.17(1) 所示, 则这时电源对外供电, 因而它的能量减少; 若电流的方向与电动势方向(非静电力的方向)相反, 则电源的能量便增多. 上述结论对于载有电流 I 的自感线圈 L 来说, 是否正确, 试就图 9.17(3) 中 (i) $\frac{\mathrm{d}I}{\mathrm{d}t} < 0$ , (ii) $\frac{\mathrm{d}I}{\mathrm{d}t} = 0$ 和 (iii) $\frac{\mathrm{d}I}{\mathrm{d}t} > 0$ 三种情况, 分别加以说明.

【解】 线圈 L 的自感电动势为

$$
\xi_ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{1}
$$

(i) $\frac{dI}{dt}<0, I$ 减小, 这时

$$
\varepsilon_ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t} > 0\tag{2}
$$

这时 $L$ 作为电源来说，它的正负极如图9.17(3)的(i)所示[参见前面8.3.1题]，电流 $I$ 从正极

流出,故能量减少.

(ii) $\frac{\mathrm{d}I}{\mathrm{d}t} = 0, I$ 不变. 这时

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/72b16676a5b2a9b56906b1dc4af5b4d451659456ff39b59b49f7ad254fbb20eb.jpg)


$$
\varepsilon_ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t} = 0\tag{3}
$$

这时 L 的能量不变.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/2c2513450775e1f5f688b6461a398c9b2769d34c68d10ebfef6641d6c7883b9a.jpg)


(iii) $\frac{\mathrm{d}I}{\mathrm{d}t} > 0, I$ 增大. 这时

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t} <   0\tag{4}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/adf507d9bc87fa13dabff1cb881f83fd3fb7c0d045f0f597586878f57fa21c81.jpg)


这时 L 作为电源来说, 它的正负极如图 9.17(3) 的 (iii) 所示, 电流 I 从正极流入, 故能量增多.

图9.17(3)

综上所述,可见本题的结论对于载有电流的自感线圈来说,是正确的.

9.18 一线圈的自感为 $L = 5.0\mathrm{H}$ , 电阻为 $R = 20\Omega$ , 将 $U = 100\mathrm{V}$ 的不变电压加到它的两端. (1) 试求电流达到最大值 $I_0 = \frac{U}{R}$ 时, 线圈所储存的磁能 $W_m$ ; (2) 从线圈两端加上电压开始算起, 试问经过多长时间, 线圈所储存的能量达到 $W_m / 2$ ? (3) 线圈所储存的磁能从 $W_m / 2$ 增加到 $0.99W_m$ , 需要多长时间?

$$
\text {   【解】   } (1) W _ {m} = \frac {1}{2} L I _ {0} ^ {2} = \frac {1}{2} L \left(\frac {U}{R}\right) ^ {2} = \frac {1}{2} \times 5. 0 \times \left(\frac {1 0 0}{2 0}\right) ^ {2} = 6 3 (\mathrm{J})
$$

(2)加上电压 U 后,电路方程为

(1) 

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R I = U\tag{2}
$$

利用初始条件 t=0 时, I=0, 解式(2)得

$$
I = \frac {U}{R} (1 - \mathrm{e} ^ {- \frac {R}{L} t})\tag{3}
$$

当 $L$ 储存的能量为

$$
\frac {1}{2} L I ^ {2} = \frac {1}{2} W _ {m} = \frac {1}{4} L I _ {0} ^ {2}\tag{4}
$$

时

$$
I = \frac {I _ {0}}{\sqrt {2}} = \frac {1}{\sqrt {2}} \frac {U}{R}\tag{5}
$$

代入式(3)得

$$
1 - \mathrm{e} ^ {- \frac {R}{L} t} = \frac {1}{\sqrt {2}}\tag{6}
$$

解得

$$
t = \frac {L}{R} \ln \sqrt {2} (\sqrt {2} + 1) = \frac {5 . 0}{2 0} \times \ln (1. 4 1 4 \times 2. 4 1 4) = 0. 3 1 (\mathrm{s})\tag{7}
$$

(3) 当 L 储存的能量为 $0.99W_{m}$ 时，

$$
\frac {1}{2} L I ^ {2} = 0. 9 9 \times \frac {1}{2} L I _ {0} ^ {2}\tag{8}
$$

代入式(3)得

$$
1 - \mathrm{e} ^ {- \frac {R}{L} t} = \sqrt {\frac {9 9}{1 0 0}} = \frac {3 \sqrt {1 1}}{1 0}\tag{9}
$$

解得

$$
t ^ {\prime} = \frac {5 . 0}{2 0} \ln \left(\frac {1 0}{1 0 - 3 \sqrt {1 1}}\right) = 1. 3 (\mathrm{s})\tag{10}
$$

故得所求的时间为

$$
\Delta t = t ^ {\prime} - t = 1. 3 - 0. 3 1 = 1. 0 (\mathrm{s})\tag{11}
$$

9.19 一电路如图 9.19(1), L 和 R 串联, 将 K 接到 a, 使电流流过 L 和 R. 然后将 K 迅速拨向 b, 在 t=0 时刻, K 接到 b, 这时 L 和 R 中的电流为 $I_{0}$ . (1) 试求此后电流与时间 t 的关系; (2) 试证明: L 所储藏的磁能将全部化为 R 上消耗的焦耳热.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/e691aeb6e06883e8edc216e2d4e8e93045da3873af19579e5ede072041376f62.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/73f9138db467d66762f8bb4f7dfd778d538da95d1f0568cd41bb6f8c3b8c2139.jpg)



图9.19(1)



图9.19(2)


【解】(1)如图9.19(2)，K接到 $b$ 后，电流 $I$ 由 $L$ 到 $R$ ，这时 $L$ 是一个电源， $I$ 流入处为负极，流出处为正极[参见前面8.3.1题]，电动势为

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{1}
$$

由欧姆定律得

$$
R I - \varepsilon_ {L} = 0\tag{2}
$$

所以

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R I = 0\tag{3}
$$

利用初始条件 t=0 时, $I=I_{0}$ , 解得

$$
I = I _ {0} \mathrm{e} ^ {- \frac {R}{L} t}\tag{4}
$$

(2) 开始 $(t=0)$ 时, L 所储藏的能量为

$$
W _ {m} = \frac {1}{2} L I _ {0} ^ {2}\tag{5}
$$

R 上消耗的总焦耳热为

$$
\begin{array}{r l} W & = \int_ {0} ^ {\infty} I ^ {2} R \mathrm{d} t = R I _ {0} ^ {2} \int \mathrm{e} ^ {- \frac {2 R}{L}} \mathrm{d} t = R I _ {0} ^ {2} \left(- \frac {L}{2 R}\right) \mathrm{e} ^ {- \frac {2 R}{L} t} \Bigg | _ {t - 0} ^ {t - \infty} \\ & = - \frac {1}{2} L I _ {0} ^ {2} (0 - 1) = \frac {1}{2} L I _ {0} ^ {2} = W _ {m} \end{array}\tag{6}
$$

9.20 如图 9.20(1)，一电容为 C 的电容器蓄有电荷量 $Q_{0}$ ，在 t=0 时刻接通 K，使它经过自感为 L 的线圈放电。试求：(1)L 内的磁场能量第一次等于 C 内电场能量的时刻 $t_{1}$ ; (2)L 内的磁场能量第二次达到极大值的时刻 $t_{2}$ 。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/3dedb87ad960e16b0e38040bcd588097a71b1446083f943d528df66aa5dfbf76.jpg)



图9.20(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/3c8601a011ce25c3f4fc1fa1d0d0e679e7be9a42b63c12a106a0110441f03c72.jpg)



图 9.20(2)


【解】(1)接通K后,电流I如图9.20(2)所示,I流入处为电源 $\varepsilon_{L}$ 的负极,流出处为正极[参见前面8.3.1题].由基尔霍夫定律得

$$
\varepsilon_ {L} + U = 0\tag{1}
$$

所以

$$
- L \frac {\mathrm{d} I}{\mathrm{d} t} + \frac {Q}{C} = 0\tag{2}
$$

由图可见

$$
I = - \frac {\mathrm{d} Q}{\mathrm{d} t}\tag{3}
$$

故得

$$
L \frac {\mathrm{d} ^ {2} I}{\mathrm{d} t ^ {2}} + \frac {I}{C} = 0\tag{4}
$$

利用初始条件 t=0 时, I=0, $Q=Q_{0}$ , 解得

$$
I = \frac {Q _ {0}}{\sqrt {L C}} \sin \left(\frac {t}{\sqrt {L C}}\right)\tag{5}
$$

$$
Q = Q _ {0} \cos \left(\frac {t}{\sqrt {L C}}\right)\tag{6}
$$

L 内的磁场能量等于 C 内的电场能量时，

$$
\frac {1}{2} L I ^ {2} = \frac {1}{2} \frac {Q ^ {2}}{C}\tag{7}
$$

所以

$$
L C I ^ {2} = Q ^ {2}\tag{8}
$$

$$
\sin^ {2} \left(\frac {t}{\sqrt {L C}}\right) = \cos^ {2} \left(\frac {t}{\sqrt {L C}}\right)\tag{9}
$$

由此得第一次相等时， $\frac{t_1}{\sqrt{LC}} = \frac{\pi}{4}$ ，所以

$$
t _ {1} = \frac {\pi}{4 \sqrt {L C}}\tag{10}
$$

(2)由式(5)可见， $L$ 内磁场能量 $\frac{1}{2} LI^2$ 第二次达到极大值的时间为

$$
t _ {2} = \frac {3}{4} T = \frac {3}{4} \frac {2 \pi}{\omega} = \frac {3 \pi}{2 \sqrt {L C}}\tag{11}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/b00c562e009038b62fa87a4615f38767e1e2bfe3f37c47f36a7042584d854741.jpg)


9.21 一电路如图 9.21, 已知电阻 $R = 5.0\Omega$ , 电感 $L = 0.60\mathrm{H}$ , 电源的电动势 $\varepsilon = 12\mathrm{V}$ , 内阻 $r = 1.0\Omega$ . 试求接通电键 S 后 $0.10\mathrm{s}$ 时, (1) 电阻 $R$ 消耗的功率; (2) 电感 $L$ 的磁能增加率; (3) 电源的输出功率.

【解】(1)接通 S 后,电路方程为

图9.21

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + (R + r) I - \varepsilon = 0\tag{1}
$$

利用初始条件 t=0 时 I=0，解得

$$
I = \frac {e}{R + r} (1 - e ^ {- \frac {R + r}{L} t})\tag{2}
$$

当 $t = 0.10\mathrm{s}$ 时，

$$
I = \frac {1 2}{5 . 0 + 1 . 0} (1 - \mathrm{e} ^ {- \frac {5 . 0 + 1 . 0}{0 . 6 0} \times 0. 1 0}) = 1. 2 6 (\mathrm{A})\tag{3}
$$

这时 $R$ 消耗的功率为

$$
I ^ {2} R = 1. 2 6 ^ {2} \times 5. 0 = 7. 9 (\mathrm{W})\tag{4}
$$

(2) $L$ 的磁能增加率为

$$
\begin{array}{r l} \frac {\mathrm{d} W _ {m}}{\mathrm{d} t} & = L I \frac {\mathrm{d} I}{\mathrm{d} t} = L I \frac {\mathcal {E}}{L} \mathrm{e} ^ {- \frac {R + r}{L} t} = \mathcal {E} I \mathrm{e} ^ {- \frac {R + r}{L} t} \\ & = 1 2 \times 1. 2 6 \times \mathrm{e} ^ {- \frac {5 . 0 + 1 . 0}{0 . 6 0} \times 0. 1 0} = 5. 6 (\mathrm{W}) \end{array}\tag{5}
$$

(3)电源的输出功率为

$$
U I = \mathcal {E} I - r I ^ {2} = 1 2 \times 1. 2 6 - 1. 0 \times 1. 2 6 ^ {2} = 1 3. 5 (\mathrm{W})\tag{6}
$$

9.22 一电路如图 9.22, 其中 E、r、R 和 L 均为已知.
(1)试求 K 接通后,电流达到稳定值时,L 所储存的能量;
(2)这能量以什么形式储存在 L 中? (3)电流达到稳定值后断开 K,试求 L 所储存的能量随时间的变化率;(4)试证明: K 断开后,R 放出的焦耳热等于 L 所储存的能量.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/791d4b611ccc0a9fb1cf61336e4352edf854b030949fb082861ae72cc0436de2.jpg)



图9.22


【解】(1)K接通后电流达到的稳定值为

$$
I _ {0} = \frac {\mathcal {E}}{r}\tag{1}
$$

这时 $L$ 所储存的能量为

$$
W _ {m} = \frac {1}{2} L I _ {0} ^ {2} = \frac {1}{2} L \left(\frac {\varepsilon}{r}\right) ^ {2}\tag{2}
$$

(2)这能量以磁场的形式储存在 L 中.

(3)K 断开后,电路方程为

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R I = 0\tag{3}
$$

利用初始条件: t=0 时通过 L 的电流为 $I_{0}$ , 解得

$$
I = I _ {0} \mathrm{e} ^ {- \frac {R}{L} t} = \frac {\mathcal {E}}{r} \mathrm{e} ^ {- \frac {R}{L} t}\tag{4}
$$

于是得 $L$ 所储存的能量随时间的变化率为

$$
\frac {\mathrm{d}}{\mathrm{d} t} \left(\frac {1}{2} L I ^ {2}\right) = L I \frac {\mathrm{d} I}{\mathrm{d} t} = L \left(\frac {\ell}{r}\right) ^ {2} \left(- \frac {R}{L}\right) \mathrm{e} ^ {- \frac {2 R}{L} t} = - R \left(\frac {\ell}{r}\right) ^ {2} \mathrm{e} ^ {- \frac {2 R}{L} t}\tag{5}
$$

(4)K断开后，R上放出的焦耳热为

$$
\int_ {0} ^ {\infty} I ^ {2} R \mathrm{d} t = R \left(\frac {\ell}{r}\right) ^ {2} \int_ {0} ^ {\infty} \mathrm{e} ^ {- \frac {2 R}{L} t} \mathrm{d} t = R \left(\frac {\ell}{r}\right) ^ {2} \frac {L}{2 R} = \frac {1}{2} L \left(\frac {\ell}{r}\right) ^ {2} = W _ {m}\tag{6}
$$

9.23 任何两个线圈1和2,试用磁场能量的方法证明:1对2的互感 $M_{21}$ 等于2对1的互感 $M_{12}$ .

【证】设两线圈的自感分别为 $L_{1}$ 和 $L_{2}$ ，开始前都不接电源。先接通 $L_{1}$ 的电源，使 $L_{1}$ 中的电流由零增大到 $I_{1}$ 不变，这时 $L_{1}$ 的磁场能量为

$$
W _ {m 1} = \frac {1}{2} L _ {1} I _ {1} ^ {2}\tag{1}
$$

在维持 $I_{1}$ 不变的情况下, 接通 $L_{2}$ 的电源, 使 $L_{2}$ 中的电流由零增大到 $I_{2}$ 不变. 这时 $L_{2}$ 的磁场能量为

$$
W _ {m 2} - \frac {1}{2} L _ {2} I _ {2} ^ {2}\tag{2}
$$

在 $L_{2}$ 中的电流由零增大到 $I_{2}$ 时，在线圈 1 中要产生感应电动势

$$
\varepsilon_ {1 2} = - M _ {1 2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{3}
$$

这时要维持 $I_{1}$ 不变，必须在线圈1中附加一个电动势 $\varepsilon_1^{\prime}$ 以抵消 $\varepsilon_{12}$ ，即

$$
\varepsilon_ {1} ^ {\prime} = - \varepsilon_ {1 2} = M _ {1 2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{4}
$$

这个电动势在 $I_{1}$ 流动时所作的功为

$$
\int_ {0} ^ {t} \mathcal {E} _ {1} ^ {\prime} I _ {1} \mathrm{d} t = M _ {1 2} I _ {1} \int_ {0} ^ {I _ {2}} \mathrm{d} I _ {2} = M _ {1 2} I _ {1} I _ {2}\tag{5}
$$

这部分能量便作为互感磁能储存在磁场中. 因此, 在 $I_{1}$ 和 $I_{2}$ 同时存在的情况下, 这个系统所具有的磁场能量便为

$$
W _ {m} = \frac {1}{2} L _ {1} I _ {1} ^ {2} + \frac {1}{2} L _ {2} I _ {2} ^ {2} + M _ {1 2} I _ {1} I _ {2}\tag{6}
$$

同样,如果先接通线圈2的电源,使电流由零增大到 $I_{2}$ ,然后在维持 $I_{2}$ 不变的情况下,接通线圈1的电源,使电流由零增大到 $I_{1}$ ,则这个系统所具有的磁场能量便为

$$
W _ {m} ^ {\prime} = \frac {1}{2} L _ {2} I _ {2} ^ {2} + \frac {1}{2} L _ {1} I _ {1} ^ {2} + M _ {2 1} I _ {2} I _ {1}\tag{7}
$$

因最后的状态相同，故磁场能量应相等，即 $W_{m}^{\prime} = W_{m}$ ，于是由式(6)、(7)得

$$
M _ {2 1} = M _ {1 2}\tag{8}
$$

9.24 根据实验,在北纬 $40^{\circ}$ 某处,地面的电场强度为 300V/m,磁感强度为 $5.49 \times 10^{-5}T$ .试分别求该处的磁场能量密度和电场能量密度以及它们的比值.

【解】 磁场能量密度为

$$
w _ {m} = \frac {1}{2} \frac {B ^ {2}}{\mu_ {0}} = \frac {(5 . 4 9 \times 1 0 ^ {- 5}) ^ {2}}{2 \times 4 \pi \times 1 0 ^ {- 7}} = 1. 2 0 \times 1 0 ^ {- 3} (\mathrm {J/ m^ {3}})
$$

电场能量密度为

$$
w _ {e} = \frac {1}{2} \varepsilon_ {0} E ^ {2} = \frac {1}{2} \times 8. 8 5 4 \times 1 0 ^ {- 1 2} \times 3 0 0 ^ {2} = 3. 9 8 \times 1 0 ^ {- 7} (\mathrm{J/m} ^ {3})
$$

比值为

$$
\frac {w _ {m}}{w _ {e}} = \frac {1 . 2 0 \times 1 0 ^ {- 3}}{3 . 9 8 \times 1 0 ^ {- 7}} = 3. 0 2 \times 1 0 ^ {3}
$$

9.25 目前在实验里,利用先进技术,在空气中产生 B=1.0T 的磁场并不困难.(1)试求这磁场的能量密度;(2)要想产生电场能量密度等于这个值的电场,试问电场强度 E 的值应为多少?这在实验上容易实现吗?

【解】（1）磁场能量密度为

$$
w _ {m} = \frac {1}{2} \frac {B ^ {2}}{\mu_ {0}} = \frac {1 . 0 ^ {2}}{2 \times 4 \pi \times 1 0 ^ {- 7}} = 4. 0 \times 1 0 ^ {5} (\mathrm {J/ m^ {3}})
$$

(2)电场强度 E 的值应为

$$
E = \sqrt {\frac {2 w _ {e}}{\varepsilon_ {0}}} = \sqrt {\frac {2 w _ {m}}{\varepsilon_ {0}}} = \sqrt {\frac {2 \times 4 . 0 \times 1 0 ^ {5}}{8 . 8 5 4 \times 1 0 ^ {- 1 2}}} = 3. 0 \times 1 0 ^ {8} (\mathrm{V/m})
$$

空气的电介质强度(击穿场强)为 $3.0\times10^{6}V/m$ ，远小于这个值。故在空气中不能实现。迄今所知道的电介质强度的最大值约为 $1.0\times10^{9}V/m$ ，最好的耐压云母的电介质强度也只有 $2.0\times10^{8}V/m$ 。所以要在实验上实现上述电场强度，很不容易。

9.26 目前在实验室里产生 $E = 10^{5} V/m$ 的电场或 $B = 10^{4} Gs$ 的磁场是不难做到的. 今在边长为 10cm 的立方体空间内产生上述两种均匀场, 试问所需的能量各为多少? 磁场能量是电场能量的多少倍?

【解】产生 $E=10^{5}V/m$ 的电场, 所需的能量为

$$
W _ {e} = \frac {1}{2} \varepsilon_ {0} E ^ {2} V = \frac {1}{2} \times 8. 8 5 4 \times 1 0 ^ {- 1 2} \times (1 0 ^ {5}) ^ {2} \times (1 0 \times 1 0 ^ {- 2}) ^ {3} = 4 \times 1 0 ^ {- 5} (\mathrm{J})
$$

产生 $B = 10^{4} \times 10^{-4} = 1\mathrm{T}$ 的磁场，所需的能量为

$$
\begin{array}{l} W _ {m} = \frac {B ^ {2}}{2 \mu_ {0}} V = \frac {1 ^ {2}}{2 \times 4 \pi \times 1 0 ^ {- 7}} \times (1 0 \times 1 0 ^ {- 2}) ^ {3} = 4 \times 1 0 ^ {2} (\mathrm{J}) \\ \frac {W _ {m}}{W _ {e}} = \frac {4 \times 1 0 ^ {2}}{4 \times 1 0 ^ {- 5}} = 1 0 ^ {7} \end{array}
$$

9.27 用超导材料制成的螺线管, 可以获得 15 特斯拉的强磁场, 试求这磁场的能量密度.

【解】这磁场的能量密度为

$$
w _ {m} = \frac {B ^ {2}}{2 \mu_ {0}} = \frac {1 5 ^ {2}}{2 \times 4 \pi \times 1 0 ^ {- 7}} = 9. 0 \times 1 0 ^ {7} (\mathrm {J/ m^ {3}})
$$

9.28 设一带电粒子是半径为 $R$ 的圆球, 所带的电荷量 $q$ 均匀地分布在球面上. 当这粒子以匀速 $\pmb{v}(v \ll c)$ 运动时, 在它外面的空间里离球心 $O$ 为 $\pmb{r}$ (图9.28) 处产生的磁场强度为

$$
\boldsymbol {H} = \frac {q \boldsymbol {v} \times \boldsymbol {r}}{4 \pi r ^ {3}}
$$

试求这磁场的总能量.

【解】这磁场的能量密度为

$$
w _ {m} = \frac {1}{2} \mu_ {0} H ^ {2} = \frac {\mu_ {0}}{2} \left(\frac {q \boldsymbol {v} \times \boldsymbol {r}}{4 \pi r ^ {3}}\right) ^ {2} = \frac {\mu_ {0} q ^ {2} v ^ {2} \sin^ {2} \theta}{3 2 \pi^ {2} r ^ {4}}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/9e1606659f86cf793856a0de0d4735f2df35417a8fecce216a4ef8a9ae540798.jpg)


(1) 

式中 $\theta$ 为 v 与 r 之间的夹角.

图9.28

这磁场的总能量为

$$
\begin{array}{r l} w _ {m} = & \iiint_ {V} w _ {m} \mathrm{d} V = \int_ {R} ^ {\infty} \int_ {0} ^ {\pi} \int_ {0} ^ {2 \pi} w _ {m} \mathrm{d} r \cdot r \mathrm{d} \theta \cdot r \sin \theta \mathrm{d} \phi \\ = & \frac {\mu_ {0} q ^ {2} v ^ {2}}{1 6 \pi} \int_ {R} ^ {\infty} \int_ {0} ^ {\pi} \frac {\sin^ {3} \theta}{r ^ {2}} \mathrm{d} r \mathrm{d} \theta = \frac {\mu_ {0} q ^ {2} v ^ {2}}{1 6 \pi R} \int_ {0} ^ {\pi} \sin^ {3} \theta \mathrm{d} \theta \\ = & \frac {\mu_ {0} q ^ {2} v ^ {2}}{1 6 \pi R} \left[ \frac {1}{3} \cos^ {3} \theta - \cos \theta \right] _ {\theta = 0} ^ {\theta = \pi} = \frac {\mu_ {0} q ^ {2} v ^ {2}}{1 2 \pi R} \end{array}\tag{2}
$$

9.29 试由电磁学的基本关系推导出下列一些量的单位： $E, D, \varepsilon_{0}, H, B, \mu_{0}, E \cdot D, H \cdot B$ 和 $E \times H$ .

【解】将某个量加上括号表示它的单位，如电流 $(I) =$ 安培，则上述各量的单位推导如下：

(1)电场强度 E 的单位 由

$$
\mathrm{d} U = - \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l}\tag{1}
$$

得 $E$ 的单位为

$$
(E) = \frac {(U)}{(l)} = \mathrm{V/m}\tag{2}
$$

(2)电位移 $\pmb{D}$ 的单位 由

$$
\iint_ {S} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} = Q\tag{3}
$$

得 $\pmb{D}$ 的单位为

$$
(D) = \frac {(Q)}{(S)} = \text { 库 } / \text { 米 } ^ {2}\tag{4}
$$

(3) $\varepsilon_0$ 的单位 由

$$
\pmb {D} = \varepsilon_ {0} \pmb {E} \text {和} Q = C U\tag{5}
$$

得 $\varepsilon_0$ 的单位为

$$
\begin{array}{r l} (\varepsilon_ {0}) & = \frac {(D)}{(E)} = \frac {\text { 库 }}{\text { 米 } ^ {2}} \cdot \frac {\text { 米 }}{\text { 伏 }} = \frac {\text { 库 }}{\text { 米 } \cdot \text { 伏 }} = \frac {\text { 法 } \cdot \text { 伏 }}{\text { 米 } \cdot \text { 伏 }} \\ & = \text { 法   /   米 } \end{array}\tag{6}
$$

(4)磁场强度 H 的单位 由

$$
\mathrm{d} \boldsymbol {H} = \frac {I \mathrm{d} \boldsymbol {l} \times \boldsymbol {r}}{4 \pi r ^ {3}}\tag{7}
$$

得 $\pmb{H}$ 的单位为

$$
(\pmb {H}) = \frac {(I) (l) (r)}{(r ^ {3})} = \text { 安 } / \text { 米 }\tag{8}
$$

(5)磁感强度 B 的单位 由

$$
\Phi = B S\tag{9}
$$

得 $\pmb{B}$ 的单位为

$$
(B) = \frac {(\Phi)}{(S)} = \text { 韦伯 / 米 } ^ {2}\tag{10}
$$

(6) $\mu_0$ 的单位 由

$$
\pmb {B} = \mu_ {0} \pmb {H} \text {和} \Phi = L I\tag{11}
$$

得 $\mu_0$ 的单位为

$$
(\mu_ {0}) = \frac {(B)}{(H)} = \frac {\text {韦伯}}{\text {米} ^ {2}} \cdot \frac {\text {米}}{\text {安}} = \frac {\text {韦伯}}{\text {米} \cdot \text {安}} = \frac {\text {亨} \cdot \text {安}}{\text {米} \cdot \text {安}} = \text {亨/米}\tag{12}
$$

(7) $E\cdot D$ 的单位 由式(2)、式(4)和

$$
W _ {e} = \frac {1}{2} C U ^ {2} = \frac {1}{2} Q U\tag{13}
$$

得 $\pmb{E}\cdot \pmb{D}$ 的单位为

$$
(\pmb {E} \cdot \pmb {D}) = (\pmb {E}) (\pmb {D}) = \frac {\text {伏}}{\text {米}} \cdot \frac {\text {库}}{\text {米} ^ {2}} = \mathrm{J/m} ^ {3}\tag{14}
$$

(8) $H\cdot B$ 的单位 由式(8)、式(10)和

$$
W _ {m} = \frac {1}{2} L I ^ {2} = \frac {1}{2} \Phi I\tag{15}
$$

得 $\pmb{H}\cdot \pmb{B}$ 的单位为

$$
(\pmb {H} \cdot \pmb {B}) = (\pmb {H}) (\pmb {B}) = \frac {\text {安}}{\text {米}} \cdot \frac {\text {韦伯}}{\text {米} ^ {2}} = \mathrm{J/m} ^ {3}\tag{16}
$$

(9) $E \times H$ 的单位 由式(2)、式(8)和

$$
P = I U\tag{17}
$$

得 $\pmb{E} \times \pmb{H}$ 的单位为

$$
(\pmb {E} \times \pmb {H}) = (\pmb {E}) (\pmb {H}) = \frac {\text {伏}}{\text {米}} \cdot \frac {\text {安}}{\text {米}} = \text {瓦} / \text {米} ^ {2}\tag{18}
$$

## 第十章 暂态过程

10.1 一电路如图 10.1 所示, 其中 L 是电感 (它的电阻可略去不计), $A_{1}$ 、 $A_{2}$ 和 $A_{3}$ 是三个小灯泡; 先接通电键 K, 电源的电压使它们都正常发光. 然后断开 K, 试问三个小灯泡哪个先熄灭? 哪个后熄灭? 为什么?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/f3b127a3d9bb5cb27040f3be7f4c2e451aedfce15e8ca385d5bf2dd0779e61e3.jpg)


【解答】K断开后，通过 $A_{1}$ 的电流为零，故 $A_{1}$ 先熄灭，K断开后， $L$ 中的感应电动势在 $LA_{2}A_{3}$ 回路中产生的感应电流随时间 $t$ 指数下降，故 $A_{2}$ 和 $A_{3}$ 后熄灭，且 $A_{2}$ 和 $A_{3}$ 同时熄灭.

图10.1

10.2 一电路如图 10.2(1)所示,其中 L 是电感(它的电阻可略去不计), $A_{1}$ 和 $A_{2}$ 是两个相同的小灯泡,电源的电压可以使它们正常发光,K 是开关.在下列两种情况下,各列出了四种现象,试问其中哪种现象是对的?(1)接通 K:(a) $A_{1}$ 先亮, $A_{2}$ 后亮;(b) $A_{2}$ 先亮, $A_{1}$ 后亮;(c) $A_{1}$ 和 $A_{2}$ 同时亮,且都一直亮下去;(d) $A_{1}$ 和 $A_{2}$ 同时亮, $A_{1}$ 随即熄灭.(2)K 接通后电流达到稳定,再断开 K:(a) $A_{1}$ 和 $A_{2}$ 同时熄灭;(b) $A_{1}$ 先熄灭, $A_{2}$ 后熄灭;(c) $A_{2}$ 先熄灭, $A_{1}$ 后熄灭;(d) $A_{2}$ 先熄灭, $A_{1}$ 突然闪亮一下然后熄灭.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/ddd3c3353edbc219d7a715cb5c5892d08d9d5637faef346ee55ae6e4536606b6.jpg)



图10.2(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/9481c985057ca0c4e0a51b56525c98d23331e622ebdd89c5a275620877f07623.jpg)



图 10.2(2)


【解答】(1)中(d)是正确的.(2)中(d)是正确的.说明如下：

(1)K接通,电路如图10.2(2)所示,其中R代表 $\Lambda_{1}$ 的电阻,也代表 $\Lambda_{2}$ 的电阻.这时由基尔霍夫电路定律有

$$
I _ {1} + I _ {L} = I\tag{1}
$$

$$
I R + I _ {1} R = \xi\tag{2}
$$

$$
I _ {1} R + \varepsilon_ {L} = 0\tag{3}
$$

$$
\varepsilon_ {L} = - L \frac {\mathrm{d} I _ {L}}{\mathrm{d} t}\tag{4}
$$

由式(1)、(2)得

$$
2 I _ {1} + I _ {L} = \frac {\varepsilon}{R}\tag{5}
$$

所以

$$
\frac {\mathrm{d} I _ {L}}{\mathrm{d} t} = - 2 \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{6}
$$

由式(3)、(4)、(6)得

$$
\frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + \frac {R}{2 L} I _ {1} = 0\tag{7}
$$

利用初始条件 t=0 时， $I_{L}=0, I_{1}=I=\frac{c}{2R}$ ，解式(7)得

$$
I _ {1} = \frac {\varepsilon}{2 R} \mathrm{e} ^ {- \frac {R}{2 L} t}\tag{8}
$$

由式(2)、(8)得

$$
I = \frac {E}{R} \left(1 - \frac {1}{2} \mathrm{e} ^ {- \frac {R}{2 L} t}\right)\tag{9}
$$

根据式(8)、(9)得出:(1)中(d)是正确的.

(2)电流稳定后断开 K, 这时

$$
I _ {1} ^ {\prime} + I _ {L} ^ {\prime} = I ^ {\prime} = 0\tag{10}
$$

$$
I _ {1} ^ {\prime} R + \mathcal {E} _ {L} = 0\tag{11}
$$

$$
\dot {\varepsilon} _ {L} = - L \frac {\mathrm{d} I _ {L} ^ {\prime}}{\mathrm{d} t}\tag{12}
$$

由式(10)、(11)、(12)得

$$
L \frac {\mathrm{d} I _ {L} ^ {\prime}}{\mathrm{d} t} = R I _ {1} ^ {\prime} = - R I _ {L} ^ {\prime}\tag{13}
$$

利用初始条件 t=0 时， $I_{L}^{\prime}=\frac{E}{R}$ ，解式(13)得

$$
I _ {L} ^ {\prime} = \frac {\epsilon}{R} \mathrm{e} ^ {- \frac {R}{L} t}\tag{14}
$$

由式(10)和(14)得

$$
I _ {1} ^ {\prime} = - \frac {\xi}{R} \mathrm{e} ^ {- \frac {R}{L} t}\tag{15}
$$

式中负号表电流 $I_{1}^{\prime}$ 的方向与图 10.2(2) 中所标明的方向相反.

由式(15)和式(8)可见，K断开时的 $|I_{1}|$ 比K接通时的 $|I_{1}|$ 大一倍.故 $A_{1}$ 在断开时，突然闪亮一下，然后熄灭.

10.3 一电路如图 10.3(1)，其中 $S_{1}$ 和 $S_{2}$ 是两个相同的小灯泡，自感为 L 的线圈其电阻也是 R。当开关 K 接通时，两个小灯泡：(1) $S_{1}$ 先比 $S_{2}$ 暗，然后趋于同样亮；(2) $S_{2}$ 先比 $S_{1}$ 暗，然后趋于同样亮；(3) $S_{1}$ 和 $S_{2}$ 同样亮，亮度不变；(4) $S_{1}$ 和 $S_{2}$ 都是先暗后亮，两者始终一样亮。试问上述(1)至(4)四种描述，其中哪个是对的？

【解答】其中(2)是对的.分析如下:设 $S_{1}$ 和 $S_{2}$ 的电阻均为 r, 流过 $S_{1}$ 的电流为 $I_{1}$ , 流过

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/91f7226055d31727c69661af202e02bdbf050a954c36ea04812c23a539974633.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/0fb2dbf95fa2fb06c1cc6f2a66c42d9d876feeed0ab99ff544f7cc2b05cf4e3b.jpg)



图 10.3(1)



图10.3(2)


$S_{2}$ 的电流为 $I_{2}$ ，流过 L 的电流为 $I_{L}$ ，如图 10.3(2) 所示。则由基尔霍夫电路定律有

$$
r I _ {1} + \varepsilon_ {L} - R I _ {L} = 0\tag{1}
$$

$$
r I _ {2} - R (I - I _ {2}) = 0\tag{2}
$$

$$
I _ {1} + I _ {L} = I\tag{3}
$$

$$
r I _ {1} + r I _ {2} = \varepsilon\tag{4}
$$

式中 $\varepsilon$ 为电源的电动势. 自感 L 的自感电动势为

$$
\varepsilon_ {L} = - L \frac {\mathrm{d} I _ {L}}{\mathrm{d} t}\tag{5}
$$

由式(1)、(5)得

$$
L \frac {\mathrm{d} I _ {L}}{\mathrm{d} t} + R I _ {L} - r I _ {1} = 0\tag{6}
$$

由式(2)、(3)、(4)消去 I 和 $I_{2}$ 得

$$
I _ {1} = \frac {(R + r) \xi}{r (2 R + r)} - \frac {R}{2 R + r} I _ {L}\tag{7}
$$

代入式(6)得

$$
\frac {\mathrm{d} I _ {L}}{\mathrm{d} t} = \frac {2 R (R + r)}{(2 R + r) L} \left[ \frac {\mathcal {E}}{2 R} - I _ {L} \right]\tag{8}
$$

利用初始条件，K接通时 $(t = 0), I_L = 0$ ，解式(8)得

$$
I _ {L} = \frac {\xi}{2 R} (1 - \mathrm{e} ^ {- \frac {R ^ {\prime}}{L} t})\tag{9}
$$

式中

$$
R ^ {\prime} = \frac {2 R (R + r)}{2 R + r}\tag{10}
$$

将式(9)代入式(7)得

$$
I _ {1} = \frac {\varepsilon}{2 r} + \frac {\varepsilon}{2 (2 R + r)} \mathrm{e} ^ {- \frac {R}{L} t}\tag{11}
$$

将式(11)代入式(4)得

$$
I _ {2} = \frac {\varepsilon}{2 r} - \frac {\varepsilon}{2 (2 R + r)} \mathrm{e} ^ {- \frac {R}{L} t}\tag{12}
$$

由式(11)和(12)可见， $t=0$ (K刚接通)时， $I_{1}>I_{2}$ ，所以 $S_{2}$ 先比 $S_{1}$ 暗。当 $t\to\infty$ 时， $I_{1}=I_{2}=\frac{t}{2r}$ 

$I_{1}$ 和 $I_{2}$ 与时间 t 的关系如图 10.3(3) 所示，图中 $\Delta=\frac{\epsilon}{2(2R+r)}$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/c4f08606edfe33be0ab5e520ea9714ddc22be8e835e9de9637d094aca4e34d50.jpg)



图10.3(3)


10.4 电阻为 $R_{1}$ 的小灯泡 $S$ 与自感为 $L$ 、电阻为 $R_{2}$ 的线圈并联后，接到电动势为 $\varepsilon$ 、内阻为 $r$ 的电源上，如图10.4(1)所示。接通开关K，使小灯泡稳定地发光。为了使K断开时，小灯泡闪亮一下再熄灭，所需的条件是： $(1)R_{1} > r;(2)R_{2} > r;(3)R_{1} > R_{2};(4)R_{2} > R_{1}$ 。试问其中哪个是对的？

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/660484fc51c3bc958ce769bf49632dceee9ede1859845d292b9cdfcac02408d3.jpg)



图10.4(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/bfd01e3cd3ef2804e134ac2205fecfbd8c700e2b0612af09ac5f32a2a21599eb.jpg)



图10.4(2)


【解答】其中 $(3)R_{1} > R_{2}$ 是对的.说明如下：K接通后小灯泡稳定地发光时，通过小灯泡的电流为

$$
I _ {1} = \frac {R _ {2}}{R _ {1} + R _ {2}} I = \frac {R _ {2} \varepsilon}{R _ {1} r + R _ {2} r + R _ {1} R _ {2}}\tag{1}
$$

通过 $R_{2}$ 的电流为

$$
I _ {2} = \frac {R _ {1}}{R _ {1} + R _ {2}} I = \frac {R _ {1} \varepsilon}{R _ {1} r + R _ {2} r + R _ {1} R _ {2}}\tag{2}
$$

K断开后，如图10.4(2)，由基尔霍夫电路定律有

$$
I _ {1} + I _ {2} = I = 0\tag{3}
$$

$$
I _ {1} R _ {1} - I _ {2} R _ {2} + \varepsilon_ {L} = 0\tag{4}
$$

其中

$$
\varepsilon_ {L} = - L \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{5}
$$

由式(2)、(3)、(4)得

$$
\frac {\mathrm{d} I _ {2}}{\mathrm{d} t} = - \frac {R _ {1} + R _ {2}}{L} I _ {2}\tag{6}
$$

利用初始条件 t=0 时， $I_{2}$ 由式(2)表示，解式(6)得

$$
I _ {2} = \frac {R _ {1} c}{R _ {1} r + R _ {2} r + R _ {1} R _ {2}} \mathrm{e} ^ {- \frac {R _ {1} + R _ {2}}{L} t}\tag{7}
$$

由式(3)、(7)得

$$
I _ {1} = - \frac {R _ {1} ^ {\ell}}{R _ {1} r + R _ {2} r + R _ {1} R _ {2}} \mathrm{e} ^ {\frac {R _ {1} + R _ {2}}{L}},\tag{8}
$$

式中负号表示这时 $I_{1}$ 的方向与图 10.4(2) 所示的方向相反.

要使 K 断开时，小灯泡闪亮一下再熄灭，由式(1)、(8)可见，即 t=0 时，

$$
\mid I _ {1} \mid = \frac {R _ {1} \ell}{R _ {1} r + R _ {2} r + R _ {1} R _ {2}} > \frac {R _ {2} \ell}{R _ {1} r + R _ {2} r + R _ {1} R _ {2}}\tag{9}
$$

所以

$$
R _ {1} > R _ {2}\tag{10}
$$

10.5 一电路如图 10.5, 其中电感 $L = 200 \mathrm{mH}$ , 电阻 $R = 18 \Omega$ , 电源的电动势为 $\varepsilon = 100 \mathrm{~V}$ , 内阻为 $r = 2 \Omega$ . 在 $t = 0$ 时接通电键 K. 试分别求 $t = 0$ 和 $t = 1.0 \times 10^{-2} \mathrm{~s}$ 时的电流 $I$ , 电流的变化率 $\frac{\mathrm{d} I}{\mathrm{d} t}$ 和电势差 $U_{ab}$ .

【解】K接通后,由基尔霍夫电路定律得

$$
I R - \mathcal {E} + I r - \mathcal {E} _ {L} = 0
$$

因为

$$
\varepsilon_ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{1}
$$

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + (R + r) I - \varepsilon = 0\tag{2}
$$

所以

(3) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/c93c89e350c4f84186207e4b10f189af3199ce1f912738f717286feaca5adc87.jpg)


利用初始条件 t=0 时 I=0, 解式(3)得

图10.5

$$
I = \frac {\mathcal {E}}{R + r} [ 1 - \mathrm{e} ^ {- \frac {R + r}{L} t} ]\tag{4}
$$

由式(4)得， $t = 0$ 时，

$$
I = 0\tag{5}
$$

$$
\frac {\mathrm{d} I}{\mathrm{d} t} = \frac {\delta}{L} = \frac {1 0 0}{2 0 0 \times 1 0 ^ {- 3}} = 5. 0 \times 1 0 ^ {2} (\mathrm{A/s})\tag{6}
$$

$$
U _ {a b} = I R = 0\tag{7}
$$

$t=1.0\times10^{-2}s$ 时，

$$
I = \frac {1 0 0}{1 8 + 2} \left[ 1 - \mathrm{e} ^ {- \frac {(1 8 + 2) \times 1 . 0 \times 1 0 ^ {- 2}}{2 0 0 \times 1 0 ^ {- 3}}} \right] = 3. 2 (\mathrm{A})\tag{8}
$$

$$
\frac {\mathrm{d} I}{\mathrm{d} t} = \frac {1 0 0}{2 0 0 \times 1 0 ^ {- 3}} - \frac {1 8 + 2}{2 0 0 \times 1 0 ^ {- 3}} \times 3. 2 = 1. 8 \times 1 0 ^ {2} (\mathrm{A/s})\tag{9}
$$

$$
U _ {a b} = I R = 3. 2 \times 1 8 = 5 8 (\mathrm{V})\tag{10}
$$

10.6 一电报发报机的电路如图 10.6 所示, 仪器 A 由电源 $\varepsilon_{2}$ 供电, 它的开关是继电器 P; 而 P 则由另一电路操纵, 这电路电源的电动势为 $\varepsilon_{1}=20V$ , 总电阻为 $R=80\Omega$ ，自感为 L=0.60H。使继电器 P 的电磁铁工作（即 P 把 $\varepsilon_{2}$ 接通）所需的电流是 $I_{1}\geqslant0.20A$ 。试问 K 接通后，需要多长时间 P 才能接通 $\varepsilon_{2}$ ?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/ba44896444e887ceff5281067cc1aac8bbd5821e1d9367a09acc80987410b104.jpg)



图10.6


【解】K接通后,电路方程为

$$
I _ {1} R - \dot {\epsilon} _ {L} - \dot {\epsilon} _ {1} = 0\tag{1}
$$

因为

$$
\varepsilon_ {L} = - L \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{2}
$$

所以

$$
L \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + R I _ {1} = \varepsilon_ {1}\tag{3}
$$

利用初始条件 $t = 0, I_{1} = 0$ ，解式(3)得

$$
I _ {1} = \frac {\ell_ {1}}{R} (1 - \mathrm{e} ^ {- \frac {R}{L ^ {2}}})\tag{4}
$$

代入数值得

$$
I _ {1} = \frac {2 0}{8 0} (1 - \mathrm{e} ^ {- \frac {8 0}{0 . 6 0} t}) = \frac {1}{4} (1 - \mathrm{e} ^ {- \frac {4 0 0}{3} t}) \geqslant 0. 2 0\tag{5}
$$

所以

$$
\mathrm{e} ^ {\frac {4 0 0}{3} t} \geqslant \frac {1}{0 . 2 0} = 5\tag{6}
$$

解得

$$
t \geqslant \frac {3}{4 0 0} \mathrm{ln} 5 = 1. 2 \times 1 0 ^ {- 2} (\text {秒})\tag{7}
$$

即 K 接通后 $1.2 \times 10^{-2}$ 秒, P 便能接通 $\delta_{2}$ .

10.7 一个线圈的自感为 L = 3.0H, 电阻为 R = 6.0Ω, 接到电动势为 $\varepsilon = 12V$ 的电源上, 电源的内阻可略去不计. 试求下列时刻的 $\frac{dI}{dt}$ : (1) 刚接上电源; (2) 接上电源后 0.20s; (3) I = 1.0A 时.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/9f6de68b0cb8ad328bbb2d969d524a74544adeecbd69adf600dac6dff37d8f76.jpg)


【解】电源接上后,电路如图10.7所示,电流I流入L处为电源 $\varepsilon_{L}$ 的负极[参见前面8.3.1题],故电路方程为

图10.7

$$
I R - \varepsilon - \varepsilon_ {L} = 0\tag{1}
$$

因为

$$
\epsilon_ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

所以

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R I = \mathcal {E}\tag{3}
$$

利用初始条件 t=0 时, I=0, 解式(3)得

$$
I = \frac {\xi}{R} (1 - \mathrm{e} ^ {- \frac {R}{L} t})\tag{4}
$$

(1) 刚接上电源时, I = 0, 故由式(3)得

$$
\frac {\mathrm{d} I}{\mathrm{d} t} = \frac {\mathcal {E}}{L} = \frac {1 2}{3 . 0} = 4. 0 (\mathrm{A/s})\tag{5}
$$

(2) $t = 0.20\mathrm{s}$ 时，由式(4)得

$$
\begin{array}{r l} \frac {\mathrm{d} I}{\mathrm{d} t} & = \frac {L}{L} \mathrm{e} ^ {- \frac {R}{L} t} = \frac {1 2}{3 . 0} \mathrm{e} ^ {- \frac {6 . 0}{3 . 0} > 0. 2 0} \\ & = 2. 7 (\mathrm{A/s}) \end{array}\tag{6}
$$

(3) I = 1.0A 时, 由式(3)得

$$
\begin{array}{r l} \frac {\mathrm{d} I}{\mathrm{d} t} & = \frac {E}{L} - \frac {R}{L} I = \frac {1 2}{3 . 0} - \frac {6 . 0}{3 . 0} \times 1. 0 \\ & = 2. 0 (\mathrm{A/s}) \end{array}\tag{7}
$$

10.8 一螺线管的自感为 L = 5.0H, 电阻为 R = 20Ω, 在 t = 0 时刻, 将它接到电动势为 $\varepsilon = 100V$ 的电源上, 电源的内阻可略去不计. 试求: (1) 电流 I 与时间 t 的关系; (2) 电流达到稳定值 (不随时间变化的值) 的一半所需要的时间.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/75ebbe52ec9173d220597f0bede85c858d5e927d0a98d881b2b568e7373730b2.jpg)


【解】（1）接上电源后，电路如图10.8所示，电流 $I$ 流入 $L$ 处为电源 $\varepsilon_{\mathrm{L}}$ 的负极[参见前面8.3.1题]，故电路方程为

图10.8

$$
- \varepsilon_ {L} ^ {\prime} + I R - \varepsilon = 0\tag{1}
$$

因为

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

所以

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R I = \xi\tag{3}
$$

利用初始条件 t=0 时 I=0, 解式(3)得

$$
I = \frac {\mathcal {E}}{R} (1 - \mathrm{e} ^ {- \frac {R}{L} t})\tag{4}
$$

代入数值得

$$
I = \frac {1 0 0}{2 0} (1 - \mathrm{e} ^ {- \frac {2 0}{5 . 0 t}}) = 5. 0 (1 - \mathrm{e} ^ {- 4. 0 t})\tag{5}
$$

(2)由式(4)可见,电流的稳定值为 I=5.0A. 设 I 达到稳定值一半所需时间为 t, 则由式(5)得

$$
1 - \mathrm{e} ^ {- 4. 0 t} = \frac {1}{2}\tag{6}
$$

解得

$$
t = \frac {1}{4 . 0} \ln 2 = 0. 1 7 3 (\mathrm{s})\tag{7}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/c5269c2ea9fe78734b0d4490a11f0d3caa6f4fef21ebf3b5f23bc3df5f71dd33.jpg)



图10.9


10.9 一电路如图 10.9, 其中的电阻 $R_{1}$ 和 $R_{2}$ , 电感 $L$ 和电动势 $\varepsilon$ 均为已知, 电源的内阻可略去不计. 先接通 $\mathbf{K}_{\mathrm{l}}$ , 使电流 $I$ 达到稳定值. 在 $t = 0$ 时刻接通 $\mathbf{K}_{2}$ . (1) 试求电流 $I$ 与时间 $t$ 的关系; (2) 当 $\varepsilon = 5.0\mathrm{V}, R_{1} = 2.0\Omega, R_{2} = 3.0\Omega, L = 2.0\mathrm{mH}$ 时, 试计算 $t = 1.0 \times 10^{-3}\mathrm{s}$ 时 $I$ 的值.

【解】(1) $K_{2}$ 接通后,电路方程为

$$
I R _ {2} - \varepsilon_ {L} - \varepsilon = 0\tag{1}
$$

因为

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

所以

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R _ {2} I = \varepsilon\tag{3}
$$

利用初始条件：

$$
t = 0 \text {   时,   } I = \frac {\mathcal {E}}{R _ {1} + R _ {2}}\tag{4}
$$

解式(3)得 I 与时间 t 的关系为

$$
I = \frac {\varepsilon}{R _ {2}} \left[ 1 - \frac {R _ {1}}{R _ {1} + R _ {2}} \mathrm{e} ^ {- \frac {R _ {2}}{L ^ {2} t}} \right]\tag{5}
$$

(2)代入数据得, $t=1.0\times10^{-3}$ s时I的值为

$$
\begin{array}{r l} I & = \frac {5 . 0}{3 . 0} \left[ 1 - \frac {2 . 0}{2 . 0 + 3 . 0} \mathrm{e} ^ {- \frac {3 . 0 \times 1 . 0 > 1 0 ^ {- 3}}{2 . 0 \times 1 0 ^ {- 3}}} \right] \\ & = 1. 5 (\mathrm{A}) \end{array}\tag{6}
$$

【讨论】在处理有自感 L 的支路时,应记住以下三点:

(1) 电源 $\mathcal{E}_L$ 的正负极: 标出电流 $I$ 的方向后, $I$ 流入 $L$ 处为电源 $\mathcal{E}_L$ 的负极, $I$ 流出 $L$ 处为电源 $\mathcal{E}_L$ 的正极[参见8.3.1题].

(2)电源 $\varepsilon_{L}$ 的电动势:电源 $\varepsilon_{L}$ 的电动势为

$$
\varepsilon_ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}
$$

式中自感 L > 0.

(3)电流 $I$ 的初始条件: 流过 $L$ 的电流 $I$ 不发生突变 (即 $I$ 在时间上是连续的). 如原来电流为零, 则 $t = 0$ 时刻电流为零; 如原来电流为 $I_0$ , 则 $t = 0$ 时刻电流为 $I_0$ . 例如本题, 原来电流为 $I_0 = \frac{\mathcal{E}}{R_1 + R_2}$ , 则接通 $\mathrm{K}_2$ 的 $t = 0$ 时刻, 电流为 $I = I_0 = \frac{\mathcal{E}}{R_1 + R_2}$ .

10.10 一电路如图 10.10(1)，其中电阻 R 和 r，线圈的自感 L 以及电源的电动势 $\varepsilon$ 都已知，电源 $\varepsilon$ 和线圈 L 的内阻都可略去不计。(1)试求开关 K 接通后，a、b 间的电压与时间的关系；(2)在电流达到稳定值的情况下，试求 K 断开后，a、b 间的电压与时间的关系。

【解】(1)K接通后,电路的电阻就成为 $\frac{Rr}{R+r}$ .本题便是电路的电阻由R突变为 $\frac{Rr}{R-r}$ 而引起的变化.K接通后,电路便如图10.10(1)所示,这时电路方程便为

$$
\frac {R r}{R + r} I - \dot {\varepsilon} _ {L} - \dot {\varepsilon} = 0\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/6878cf86ece939ecefd001787f016cddb8db1b4a40aadf197ea8bf1890923def.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/dd019d80c5da37cbbf46ffda683b7ac49a29477fcea0a0c400094f5b70235bbb.jpg)



图10.10(1)



图 10.10(2)


$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + \frac {R r}{R + r} I = \varepsilon\tag{2}
$$

利用初始条件, t=0 时,

$$
I = \frac {\mathcal {E}}{R}\tag{3}
$$

解式(2)得

$$
I = \frac {(R + r) \varepsilon}{R r} \left[ 1 - \frac {R}{R + r} \mathrm{e} ^ {- \frac {R r t}{(R + r) L}} \right]\tag{4}
$$

于是得 $a, b$ 间的电压与时间的关系为

$$
U _ {a b} = \frac {R r}{R + r} I = \mathcal {E} \left[ 1 - \frac {R}{R + r} \mathrm{e} ^ {- \frac {R r t}{(R + r) L}} \right]\tag{5}
$$

(2) 在电流 I 达到稳定值时断开 K, 这时电路方程为

$$
R I ^ {\prime} - \mathcal {E} _ {L} ^ {\prime} - \mathcal {E} = 0\tag{6}
$$

所以

$$
L \frac {\mathrm{d} I ^ {\prime}}{\mathrm{d} t} + R I ^ {\prime} = \delta\tag{7}
$$

初始条件是 K 未断开时 I 的稳定值, 由式(4)得这个稳定值为 $\frac{(R + r)\varepsilon}{Rr}$ . 故式(7)的初始条件便为

$$
t = 0, \quad I ^ {\prime} = \frac {(R + r) \xi}{R r}\tag{8}
$$

利用式(8)解式(7)得

$$
I ^ {\prime} = \frac {\dot {c}}{R} \left[ 1 + \frac {R}{r} \mathrm{e} ^ {- \frac {R}{L} t} \right]\tag{9}
$$

于是得 K 断开后，a、b 间的电压与时间的关系为

$$
U _ {a b} ^ {\prime} = R I ^ {\prime} = \delta \left[ 1 + \frac {R}{r} \mathrm{e} ^ {- \frac {R}{L} t} \right]\tag{10}
$$

【讨论】参见前面10.9题的讨论.

10.11 一电路如图 10.11, 其中电阻 R 和 r, 线圈的自感 L 以及电源的电动势 $\varepsilon$ 均为已知, 电源的内阻已包括在 r 内, 线圈的电阻可略去不计. 先接通 K, 使电流达到稳定值. 然后在 t=0 时刻断开 K. (1) 试求 R 上的电流 I 与时间 t 的关系；(2)试证明：消耗在 R 上的焦耳热等于开始时储藏在 L 中的磁能.
【解】（1）K 接通后，电流达到稳定值时，通过 L 的电流为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/4128ce1333c873b732b1f3601879ad3674aa302adf846205ea48f6786f020a73.jpg)



图10.11


$$
I _ {0} = \frac {\xi}{r}\tag{1}
$$

断开 K 后, RL 回路中, 电路方程为

$$
R I - \varepsilon_ {L} = 0\tag{2}
$$

所以

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R I = 0\tag{3}
$$

利用初始条件式(1)，解式(3)得

$$
I = \frac {c}{r} \mathrm{e} ^ {- \frac {R}{L} t}\tag{4}
$$

(2) 开始时, 储藏在 L 中的磁能为

$$
W _ {m} = \frac {1}{2} L I _ {0} ^ {2}\tag{5}
$$

K断开后,消耗在R上的焦耳热为

$$
\begin{array}{r l} \int_ {0} ^ {\infty} I ^ {2} R \mathrm{d} t & = I _ {0} ^ {2} R \int_ {0} ^ {\infty} \mathrm{e} ^ {- \frac {2 R}{L} t} \mathrm{d} t = I _ {0} ^ {2} R (- \frac {L}{2 R}) \mathrm{e} ^ {- \frac {2 R}{L} t} \Big | _ {0} ^ {\infty} \\ & = \frac {1}{2} L I _ {0} ^ {2} = W _ {m} \end{array}
$$

10.12 一电路如图 10.12(1)，其中电阻 R、线圈的自感 L 以及电源的电动势 $\varepsilon$ 和内阻 r 均为已知，线圈的电阻可略去不计。接通 K 使电流达到稳定值，然后断开 K。试求 K 刚断开时：(1)a、b 间的电势差 $U_{ab}$ ；(2)通过 R 的电流 $I_{R}$ 。

【解】接通 K, 电流达到稳定值时, 通过 L 的电流为

$$
I _ {L} = \frac {\mathcal {E}}{r}\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/9753a41ed7059ab5d1cc63cd3143fd79eb5070b08fd36ec3f4fc8db661d7550a.jpg)



图 10.12(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/5821ba83b2cba430a7385153f29907d46ca4b625f888ded11e7e56cfbfead344.jpg)



图10.12(2)


K 再断开时,由于 L 中的电流不发生突变,故 L 中的电流为[参见图 10.12(2)]

$$
I = I _ {L} = \frac {\xi}{r}\tag{2}
$$

这时通过 $R$ 的电流为

$$
I _ {R} = I = \frac {\mathcal {E}}{r}\tag{3}
$$

$a, b$ 间的电势差为

$$
U _ {a b} = U _ {a} - U _ {b} = I R = \frac {R}{r} \varepsilon\tag{4}
$$

10.13 一电路如图 10.13(1)，其中电阻 $R_{1}$ 、 $R_{2}$ 和 $R_{3}$ ，线圈的电感 L 以及电源的电动势 $\varepsilon$ 均为已知，电源的内阻包括在 $R_{1}$ 内，线圈的电阻包括在 $R_{3}$ 内。(1) 在 t=0 时刻接通电键 K，试分别求 $R_{1}$ 、 $R_{2}$ 和 $R_{3}$ 中的电流与时间 t 的关系；(2) K 接通后，待电流达到稳定值，再断开 K。以 K 断开时为 $t'=0$ ，试求 $R_{1}$ 、 $R_{2}$ 和 $R_{3}$ 中的电流与时间 $t'$ 的关系。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/097a2470ccf4373d7d35b8a8698dbe10ae41d0a4e3d0dcbe79ad9f2466604d6e.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/b587f5af64cbbe8a03f9f88788f74411835a3b4db034029e517c39426d51149c.jpg)



图10.13(1)



图10.13(2)


【解】（1）K接通后，设通过 $R_{1}, R_{2}$ 和 $R_{3}$ 的电流分别为 $I_{1}, I_{2}$ 和 $I_{3}$ ，如图10.13(2)所示。这时电路方程为

$$
I _ {1} = I _ {2} + I _ {3}\tag{1}
$$

$$
I _ {1} R _ {1} + I _ {2} R _ {2} = \mathcal {E}\tag{2}
$$

$$
I _ {3} R _ {3} - \mathcal {E} _ {L} - I _ {2} R _ {2} = 0\tag{3}
$$

因为

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I _ {3}}{\mathrm{d} t}\tag{4}
$$

故式(3)便为

$$
L \frac {\mathrm{d} I _ {3}}{\mathrm{d} t} + I _ {3} R _ {3} = I _ {2} R _ {2}\tag{5}
$$

初始条件为[参见前面10.9题后的讨论]

$$
t = 0 \text {时}, I _ {3} = 0\tag{6}
$$

由式(1)、(2)消去 $I_{1}$ 得

$$
I _ {2} = \frac {\mathcal {E}}{R _ {1} + R _ {2}} - \frac {R _ {1}}{R _ {1} + R _ {2}} I _ {3}\tag{7}
$$

将式(7)代入式(5)得

$$
L \frac {\mathrm{d} I _ {3}}{\mathrm{d} t} = \frac {R _ {2} \xi}{R _ {1} + R _ {2}} - \frac {\alpha}{R _ {1} + R _ {2}} I _ {3}\tag{8}
$$

式中

$$
\alpha = R _ {1} R _ {2} + R _ {2} R _ {3} + R _ {3} R _ {1}\tag{9}
$$

利用初始条件式(6)，解式(8)得

$$
I _ {3} = \frac {R _ {2} \xi}{\alpha} \left[ 1 - \mathrm{e} ^ {- \frac {\alpha t}{L (R _ {1} + R _ {2})}} \right]\tag{10}
$$

将式(10)代入式(7)得

$$
I _ {2} = \frac {R _ {3} \phi}{\alpha} \left[ 1 + \frac {R _ {1} R _ {2}}{\left(R _ {1} + R _ {2}\right) R _ {3}} \mathrm{e} ^ {- \frac {\alpha t}{L \left(R _ {1} + R _ {2}\right)}} \right]\tag{11}
$$

将式(10)、(11)代入式(1)得

$$
I _ {1} = \frac {\left(R _ {2} + R _ {3}\right) \ell}{\alpha} \left[ 1 - \frac {R _ {2} ^ {2}}{\left(R _ {1} + R _ {2}\right) \left(R _ {2} + R _ {3}\right)} \mathrm{e} ^ {- \frac {\alpha t}{L \left(R _ {1} + R _ {2}\right)}} \right]\tag{12}
$$

(2)K再断开后,电路方程为

$$
I _ {2} ^ {\prime} + I _ {3} ^ {\prime} = I _ {1} ^ {\prime} = 0\tag{13}
$$

$$
I _ {3} ^ {\prime} R _ {3} - \mathcal {E} _ {L} - I _ {2} ^ {\prime} R _ {2} = 0\tag{14}
$$

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I _ {3} ^ {\prime}}{\mathrm{d} t ^ {\prime}}\tag{15}
$$

由式(13)、(14)、(15)得

$$
L \frac {\mathrm{d} I _ {3} ^ {\prime}}{\mathrm{d} t ^ {\prime}} = - (R _ {2} + R _ {3}) I _ {3} ^ {\prime}\tag{16}
$$

由初始条件

$$
t ^ {\prime} = 0 \text {时,} I _ {3} ^ {\prime} = (I _ {3}) _ {t = \infty} = \frac {R _ {2} c}{\alpha}\tag{17}
$$

解式(16)得

$$
I _ {3} ^ {\prime} = \frac {R _ {2} \xi}{\alpha} \mathrm{e} ^ {- \frac {R _ {2} + R _ {3}}{L} t}\tag{18}
$$

由式(13)和(18)得

$$
I _ {2} ^ {\prime} = - \frac {R _ {2} \ell}{\alpha} \mathrm{e} ^ {- \frac {R _ {2} + R _ {3}}{L} t ^ {\prime}}\tag{19}
$$

式中负号表示， $I_{2}^{\prime}$ 的方向与图 10.13(2) 所示的方向相反.

【讨论】参见前面10.9题后的讨论.

10.14 一电路如图 10.14(1)，其中电阻 R 和 r、线圈的自感 L 和电源的电动势 $\varepsilon$ 都已知，线圈的电阻和电源的内阻都可略去不计。在 t=0 时刻接通开关 K。设 R>r，试求 R 两端的电势差 $U_{R}$ 等于 r 两端的电势差 $U_{r}$ 的时刻。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/e9db751fdc2dd8b1cfd3288f617bbc92601a4ac195fcc708462ef3ad04681d56.jpg)



图10.14(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/80be16d7de859075378102288b4de6a92ece74a77e14faf4318344611384a070.jpg)



图10.14(2)


【解】K接通后,设通过R和L的电流分别为 $I_{R}$ 和 $I_{L}$ ,通过r的电流为l,如图10.14(2)所示.这时电路方程为

$$
I = I _ {R} + I _ {L}\tag{1}
$$

$$
I _ {R} R + I r = \xi\tag{2}
$$

$$
I _ {R} R + \mathcal {E} _ {L} = 0\tag{3}
$$

因为

$$
\varepsilon_ {L} = - L \frac {\mathrm{d} I _ {L}}{\mathrm{d} t}\tag{4}
$$

所以

$$
L \frac {\mathrm{d} I _ {L}}{\mathrm{d} t} = I _ {R} R\tag{5}
$$

由式(1)、(2)得

$$
I _ {R} = \frac {\xi}{R + r} - \frac {r}{R + r} I _ {L}\tag{6}
$$

将式(6)代入式(5)得

$$
L \frac {\mathrm{d} I _ {L}}{\mathrm{d} t} = \frac {R \mathcal {E}}{R + r} - \frac {R r}{R + r} I _ {L}\tag{7}
$$

利用初始条件[参见前面10.9题的讨论]

$$
t = 0 \text {时,} I _ {L} = 0\tag{8}
$$

解式(7)得

$$
I _ {L} = \frac {\mathcal {E}}{r} [ 1 - \mathrm{e} ^ {- \frac {R r t}{(R + r) L}} ]\tag{9}
$$

将式(9)代入式(6)得

$$
I _ {R} = \frac {\mathcal {E}}{R + r} e ^ {- \frac {R r t}{(R + r) L}}\tag{10}
$$

将式(9)、(10)代入式(1)得

$$
I = \frac {\varepsilon}{r} \left[ 1 - \frac {R}{R + r} \mathrm{e} ^ {- \frac {R r t}{(R + r) L}} \right]\tag{11}
$$

令

$$
U _ {R} = I _ {R} R = U _ {r} = I r\tag{12}
$$

由式(10)、(11)、(12)得

$$
\frac {R}{R + r} \mathrm{e} ^ {- \frac {R r t}{(R + r) L}} = 1 - \frac {R}{R + r} \mathrm{e} ^ {- \frac {R r t}{(R + r) L}}\tag{13}
$$

所以

$$
\mathrm{e} ^ {\frac {R r}{(R + r) L}} = \frac {2 R}{R + r}\tag{14}
$$

由此得所求的时间为

$$
t = \frac {(R + r) L}{R r} \ln \left(\frac {2 R}{R + r}\right)\tag{15}
$$

【讨论】由式(15)可见,只有在 R > r 的条件下,才有 t > 0. 若 r > R,本题便无解.

10.15 一电路如图 10.15(1)，其中电阻 R、线圈的自感 $L_{1}$ 和 $L_{2}$ 、电源的电动势 $\varepsilon$ 均为已知，线圈的电阻和它们间的互感以及电源的内阻均可略去不计。在$t = 0$ 时刻接通开关K.试求 $t$ 时刻：(1) $a,b$ 间的电势差 $U_{ab}$ ;(2) $L_{1}$ 中的电流 $I_{1}$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/8fdd5a9fccbe382b423fb11ecc44c6475fe25f798b721ec5eea618f7273fd131.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/da79450b0d7237d6787e5610c34c3c353d285a26aa899bd41176790c86b3d081.jpg)



图10.15(1)



图 10.15(2)


【解】（1）K接通后，设电流分布如图10.15(2)所示.这时电路方程为

$$
I = I _ {1} + I _ {2}\tag{1}
$$

$$
I R - \varepsilon_ {L _ {1}} - \varepsilon = 0\tag{2}
$$

$$
I R - \varepsilon_ {L _ {2}} - \varepsilon = 0\tag{3}
$$

因为

$$
\hat {c} _ {L _ {1}} = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{4}
$$

$$
\mathcal {E} _ {L _ {2}} = - L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{5}
$$

故得

$$
L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + R I = \varepsilon\tag{6}
$$

$$
L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + R I = \varepsilon\tag{7}
$$

由式(1)、(6)、(7)得

$$
L _ {1} L _ {2} \frac {\mathrm{d} I}{\mathrm{d} t} = - R (L _ {1} + L _ {2}) I + (L _ {1} + L _ {2}) \varepsilon\tag{8}
$$

利用初始条件

$$
t = 0 \text {   时,   } I = 0\tag{9}
$$

解式(8)得

$$
I = \frac {\mathcal {E}}{R} \left[ 1 - \mathrm{e} ^ {- \frac {R (L _ {1} + L _ {2})}{L _ {1} L _ {2}} t} \right]\tag{10}
$$

于是得所求电势差为

$$
U _ {a b} = I R = \mathcal {E} \left[ 1 - \mathrm{e} ^ {- \frac {R \left(L _ {1} + L _ {2}\right)}{L _ {1} L _ {2}} t} \right]\tag{11}
$$

(2)再求 $I_{1}$ . 将式(10)代入式(6)得

$$
\frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = \frac {\mathcal {E}}{L _ {1}} - \frac {R}{L _ {1}} I = \frac {\mathcal {E}}{L _ {1}} \mathrm{e} ^ {- \frac {R (L _ {1} + L _ {2})}{L _ {1} L _ {2}}} t\tag{12}
$$

利用初始条件

$$
t = 0 \text {时,} I _ {1} = 0\tag{13}
$$

将(12)对时间 t 积分, 便得

$$
I _ {1} = \frac {L _ {2} \mathcal {E}}{R (L _ {1} + L _ {2})} \left[ 1 - \mathrm{e} ^ {- \frac {R (L _ {1} + L _ {2})}{L _ {1} L _ {2}} t} \right]\tag{14}
$$

【讨论】图10.15(2)中的电流 $I$ 亦可求出如下：因 $L_{1}$ 和 $L_{2}$ 是并联，其间互感可略去不计，故等效自感为[参见前面8.3.38题]

$$
L = \frac {L _ {1} L _ {2}}{L _ {1} + L _ {2}}\tag{15}
$$

于是图 10.15(2) 便化为图 10.5(3)，电路方程为

$$
I R _ {\cdot} - \mathcal {E} _ {L} - \mathcal {E} = 0
$$

所以

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R I = \mathcal {E}\tag{16}
$$

(17) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/00015e02583d3c983f78e82a7bcb3e70afb625f7ee126e5e63c1f6712d0e3b62.jpg)


利用初始条件式(9)，解式(17)得

$$
I = \frac {e}{R} \left[ 1 - e ^ {- \frac {R}{L} t} \right]
$$

图10.15(3)

(18) 

将式(15)代入式(18)即得式(10).

10.16 一电路如图 10.16(1)，已知电源的电动势为 $\varepsilon=220V$ ，内阻可略去不计；线圈的自感为 L=10H，电阻可略去不计；两电阻分别为 $R_{1}=10\Omega$ 和 $R_{2}=100\Omega$ 。(1) 接通开关 K 并持续很长时间，试求这段时间内 $R_{2}$ 上放出的焦耳热；(2) 然后断开 K 并持续很长时间，试求这段时间内 $R_{2}$ 上放出的焦耳热。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/fc04c8acd0173df0efa10c6c7ead3340984dc44d689d424d7e502579fdfb18bf.jpg)



图10.16(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/45cb0eae0ced2990ccd7e2fcf0df4c359fd5afa521cc716d1e47edb977e895d3.jpg)



图10.16(2)


【解】(1)K接通后,设电流分布如图10.16(2)所示.电路方程为

$$
I = I _ {1} + I _ {2}\tag{1}
$$

$$
I R _ {1} - \varepsilon_ {L} - \varepsilon = 0\tag{2}
$$

$$
I _ {2} R _ {2} + \varepsilon_ {L} = 0\tag{3}
$$

因为

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{4}
$$

故得

$$
L \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = R _ {2} I _ {2}\tag{5}
$$

由式(1)、(2)、(3)消去 $I$ 得

$$
\left(R _ {1} + R _ {2}\right) I _ {2} + R _ {1} I _ {1} = \mathcal {E}\tag{6}
$$

由式(5)、(6)得

$$
\frac {\mathrm{d} I _ {2}}{\mathrm{d} t} = - \frac {R _ {1} R _ {2}}{(R _ {1} + R _ {2}) L} I _ {2}\tag{7}
$$

利用初始条件

$$
t = 0 \text {   时   }, I _ {2} = \frac {\varepsilon}{R _ {1} + R _ {2}}\tag{8}
$$

解式(7)得

$$
I _ {2} = \frac {\mathcal {E}}{R _ {1} + R _ {2}} \mathrm{e} ^ {- \frac {R _ {1} R _ {2} t}{\left(R _ {1} + R _ {2}\right) L}}\tag{9}
$$

从接通到电流稳定, $R_{2}$ 上放出的焦耳热为

$$
\begin{array}{r l} Q _ {2} & = \int_ {0} ^ {\infty} I _ {2} ^ {2} R _ {2} = \frac {\mathcal {E} ^ {2} R _ {2}}{(R _ {1} + R _ {2}) ^ {2}} \int_ {0} ^ {\infty} \mathrm{e} ^ {- \frac {2 R _ {1} R _ {2} t}{(R _ {1} + R _ {2}) L}} \mathrm{d} t \\ & = \frac {\mathcal {E} ^ {2} L}{2 R _ {1} (R _ {1} + R _ {2})} = \frac {2 2 0 ^ {2} \times 1 0}{2 \times 1 0 \times (1 0 + 1 0 0)} \\ & = 2. 2 \times 1 0 ^ {2} (\mathrm{J}) \end{array}\tag{10}
$$

(2)K断开后,电路方程为

$$
I ^ {\prime} = I _ {1} ^ {\prime} + I _ {2} ^ {\prime} = 0\tag{11}
$$

$$
R _ {2} I _ {2} ^ {\prime} + \varepsilon_ {L} ^ {\prime} = 0\tag{12}
$$

因为

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I _ {1} ^ {\prime}}{\mathrm{d} t ^ {\prime}}\tag{13}
$$

所以

$$
L \frac {\mathrm{d} I _ {1} ^ {\prime}}{\mathrm{d} t ^ {\prime}} = R _ {2} I _ {2} ^ {\prime} = - R _ {2} I _ {1} ^ {\prime}\tag{14}
$$

利用初始条件

$$
t ^ {\prime} = 0 \text {时,} I _ {1} ^ {\prime} = \frac {\xi}{R _ {1}}\tag{15}
$$

解式(14)得

$$
I _ {1} ^ {\prime} = \frac {\varepsilon}{R _ {1}} \mathrm{e} ^ {- \frac {R _ {2}}{L} t}\tag{16}
$$

由式(11)和(16)得

$$
I _ {2} ^ {\prime} = - \frac {\mathcal {E}}{R _ {1}} \mathrm{e} ^ {- \frac {R _ {2}}{L} t ^ {\prime}}\tag{17}
$$

式中负号表示 $I_2^{\prime}$ 的方向与图10.16(2)中 $I_2$ 的方向相反. 最后得 $R_2$ 上放出的焦耳热为

$$
\begin{array}{r l} Q _ {2} ^ {\prime} & = \int_ {0} ^ {\infty} I _ {2} ^ {\prime 2} R _ {2} \mathrm{d} t ^ {\prime} = \frac {\mathcal {E} ^ {2} R _ {2}}{R _ {1} ^ {2}} \int_ {0} ^ {\infty} \mathrm{e} ^ {- \frac {2 R _ {2}}{L} t ^ {\prime}} \mathrm{d} t ^ {\prime} \\ & = \frac {\mathcal {E} ^ {2} L}{2 R _ {1} ^ {2}} = \frac {2 2 0 ^ {2} \times 1 0}{2 \times 1 0 ^ {2}} = 2. 4 \times 1 0 ^ {3} (\mathrm{J}) \end{array}\tag{18}
$$

【讨论】 $Q_{2}^{\prime}$ 也可以由 $t^{\prime}=0$ 时，储存在L中的磁能

$$
W _ {m} = \frac {1}{2} L I _ {1} ^ {\prime 2} = \frac {1}{2} L \left(\frac {\xi}{R _ {1}}\right) ^ {2}\tag{19}
$$

算出.

10.17 一电路如图10.17,其中电阻 $R_{1}$ 和 $R_{2}$ 线圈的自感 $L$ 和电源的电动势 $\varepsilon$ 均为已知,线圈的电阻可略不计,电源的内阻已包括在 $R_{1}$ 内.在开关 $\mathbf{K}_2$ 断开的情况下,于 $t = 0$ 时刻接通开关 $\mathbf{K}_1$ ,然后在 $t_1$ 时刻接通开关 $\mathbf{K}_2$ .试求 $t(>t_1)$ 时刻 $a,b$ 两点的电势差 $U_{ab}$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/ea357f11cafa70b4e503569d0cd371a06f6924c0ea4b72dd4178db3be5f98001.jpg)


【解】在 $K_{2}$ 断开的情况下接通 $K_{1}$ ，设电流为 I，则电路方程为


图10.17


$$
\left(R _ {1} + R _ {2}\right) I - \varepsilon_ {L} - \varepsilon = 0\tag{1}
$$

因为

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

所以

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + (R _ {1} + R _ {2}) I = \mathcal {E}\tag{3}
$$

利用初始条件

$$
t = 0 \text {时}, \qquad I = 0\tag{4}
$$

解式(3)得

$$
I = \frac {\mathcal {E}}{R _ {1} + R _ {2}} \left[ 1 - \mathrm{e} ^ {- \frac {R _ {1} + R _ {2}}{L} t} \right]\tag{5}
$$

$t_1$ 时刻， $I$ 的值为

$$
I _ {1} = \frac {\mathcal {E}}{R _ {1} + R _ {2}} \left[ 1 - e ^ {- \frac {R _ {1} + R _ {2}}{L} t _ {1}} \right]\tag{6}
$$

$t_{1}$ 时刻接通 $K_{2}, t (>t_{1})$ 时刻通过 $R_{2}$ 的电流为

$$
I = I _ {1} \mathrm{e} ^ {- \frac {R _ {2}}{L} (t - t _ {1})}, \quad t \geqslant t _ {1}\tag{7}
$$

于是得所求的电势差为

$$
\begin{array}{r l} U _ {a b} & = U _ {a} - U _ {b} = R _ {2} I = R _ {2} I _ {1} \mathrm{e} ^ {- \frac {R _ {2}}{L} (t - t _ {1})} \\ & = \frac {R _ {2} \mathcal {E}}{R _ {1} + R _ {2}} [ 1 - \mathrm{e} ^ {- \frac {R _ {1} + R _ {2}}{L} t _ {1}} ] \mathrm{e} ^ {- \frac {R _ {2}}{L} (t - t _ {1})}, \end{array}\tag{8}
$$

10.18 一电路如图 10.18, $R_{1}$ 与 $L_{1}$ 串联, $R_{2}$ 与 $L_{2}$ 串联,然后再把它们并联.一电容 C 通过这并联电路放电.试证明:通过这两条支路的电荷量与电阻成反比,即 $Q_{1}/Q_{2}=R_{2}/R_{1}$ .

$$
L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + R _ {1} I _ {1} = L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + R _ {2} I _ {2}
$$

【解】接通 K 后，设通过 $L_{1}R_{1}$ 支路的电流为 $I_{1}$ ，通过 $L_{2}R_{2}$ 支路的电流为 $I_{2}$ ，则有

(1) 

所以

$$
L _ {1} \mathrm{d} I _ {1} + R _ {1} I _ {1} \mathrm{d} t = L _ {2} \mathrm{d} I _ {2} + R _ {2} I _ {2} \mathrm{d} t\tag{2}
$$

对时间 $t$ 积分得

$$
L _ {1} \int_ {0} ^ {\infty} \mathrm{d} I _ {1} + R _ {1} \int_ {0} ^ {\infty} I _ {1} \mathrm{d} t = L _ {2} \int_ {0} ^ {\infty} \mathrm{d} I _ {2} + R _ {2} \int_ {0} ^ {\infty} I _ {2} \mathrm{d} t\tag{3}
$$

所以

$$
L _ {1} (I _ {1 \infty} - I _ {1 0}) + R _ {1} Q _ {1} = L _ {2} (I _ {2 \infty} - I _ {2 0}) + R _ {2} Q _ {2}\tag{4}
$$

式中 $I_{10}$ 和 $I_{20}$ 分别是 $I_{1}$ 和 $I_{2}$ 在 $t = 0$ 时的值， $I_{1\infty}$ 和 $I_{2\infty}$ 分别是 $I_{1}$ 和 $I_{2}$ 在 $t = \infty$ 时的值.

$$
I _ {1 0} = I _ {2 0} = 0\tag{5}
$$

$$
I _ {1 \infty} = I _ {2 \infty} = 0\tag{6}
$$

于是得

$$
R _ {1} Q _ {1} = R _ {2} Q _ {2}\tag{7}
$$

所以

$$
Q _ {1} / Q _ {2} = R _ {2} / R _ {1}\tag{8}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/997911578df82ea5ed8bf73ffd6895f07009f0b01428f2e5f2a0d6c47e9f0aaa.jpg)



图10.18


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/bb2b507b2228c00ed6e834fca66ca68f0d880ff71ec6e90ba1bfc5a5cd3bf0a0.jpg)



图10.19


10.19 一电路如图 10.19, 其中电阻 $R_{1}, R_{2}$ 和 $r$ , 自感 $L_{1}$ 和 $L_{2}$ , 电动势 $\varepsilon$ 均为已知; 电源的内阻已包括在 $r$ 内, $L_{1}$ 和 $L_{2}$ 之间的互感可略去不计. 在 $t = 0$ 时刻接通开关 K, 试求 $t$ 时刻通过电阻 $r$ 的电流 I.

【解】接通 K 后，设通过 $R_{1}L_{1}$ 支路的电流为 $I_{1}$ ，通过 $R_{2}L_{2}$ 支路的电流为 $I_{2}$ ，则有

$$
L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + R _ {1} I _ {1} + r I = \mathcal {E}\tag{1}
$$

$$
L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + R _ {2} I _ {2} + r I = \mathcal {E}\tag{2}
$$

$$
I = I _ {1} + I _ {2}\tag{3}
$$

由式(1)、(2)得

$$
L _ {1} \frac {\mathrm{d} ^ {2} I _ {1}}{\mathrm{d} t ^ {2}} + R _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + r \frac {\mathrm{d} I}{\mathrm{d} t} = 0\tag{4}
$$

$$
L _ {2} \frac {\mathrm{d} ^ {2} I _ {2}}{\mathrm{d} t ^ {2}} + R _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + r \frac {\mathrm{d} I}{\mathrm{d} t} = 0\tag{5}
$$

以 $L_{2}$ 乘式(4)加上 $L_{1}$ 乘式(5)，并利用式(3)，便得

$$
L _ {1} L _ {2} \frac {\mathrm{d} ^ {2} I}{\mathrm{d} t ^ {2}} + R _ {1} L _ {2} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + R _ {2} L _ {1} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + r (L _ {1} + L _ {2}) \frac {\mathrm{d} I}{\mathrm{d} t} = 0
$$

其中

(6) 

$$
\begin{array}{r l} & R _ {1} L _ {2} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + R _ {2} L _ {1} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + r (L _ {1} + L _ {2}) \frac {\mathrm{d} I}{\mathrm{d} t} \\ & = R _ {1} L _ {2} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + R _ {2} L _ {1} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + r (L _ {1} + L _ {2}) \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + r (L _ {1} + L _ {2}) \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} \\ & = [ (R _ {1} + r) L _ {2} + (R _ {2} + r) L _ {1} ] \frac {\mathrm{d} I}{\mathrm{d} t} - R _ {2} L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} - R _ {1} L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} \\ & = [ (R _ {1} + r) L _ {2} + (R _ {2} + r) L _ {1} ] \frac {\mathrm{d} I}{\mathrm{d} t} - R _ {2} [ \hat {\epsilon} - R _ {1} I _ {1} - r I ] \\ & \quad - R _ {1} [ \hat {\epsilon} - R _ {2} I _ {2} - r I ] \\ & = [ (R _ {1} + r) L _ {2} + (R _ {2} + r) L _ {1} ] \frac {\mathrm{d} I}{\mathrm{d} t} \\ & \quad + (R _ {1} R _ {2} + R _ {1} r + R _ {2} r) I - (R _ {1} + R _ {2}) \hat {\epsilon}. \end{array}\tag{7}
$$

将式(7)代入式(6)便得

$$
\begin{array}{l} L _ {1} L _ {2} \frac {\mathrm{d} ^ {2} I}{\mathrm{d} t ^ {2}} + [ (R _ {1} + r) L _ {2} + (R _ {2} + r) L _ {1} ] \frac {\mathrm{d} I}{\mathrm{d} t} \\ + (R _ {1} R _ {2} + R _ {1} r + R _ {2} r) I = (R _ {1} + R _ {2}) \delta \end{array}\tag{8}
$$

初始条件为

$$
t = 0 \text {时}, \qquad I _ {1} = I _ {2} = I = 0\tag{9}
$$

将式(9)代入式(1)、(2)得

$$
t = 0 \text {   时,   } \quad \frac {\mathrm{d} I}{\mathrm{d} t} - \frac {L _ {1} + L _ {2}}{L _ {1} L _ {2}} \varepsilon\tag{10}
$$

利用式(9)、(10)，解式(8)得

$$
\begin{array}{l} I = \frac {(R _ {1} + R _ {2}) \xi}{R _ {1} R _ {2} + R _ {1} r + R _ {2} r} + \frac {\xi}{2 \beta} \left[ \frac {1}{L _ {1}} + \frac {1}{L _ {2}} - \frac {(R _ {1} + R _ {2}) (\alpha + \beta)}{R _ {1} R _ {2} + R _ {1} r + R _ {2} r} \right] e ^ {- (\alpha - \beta) t} \\ + \frac {\xi}{2 \beta} \left[ \frac {(R _ {1} + R _ {2}) (\alpha - \beta)}{R _ {1} R _ {2} + R _ {1} r + R _ {2} r} - \frac {1}{L _ {1}} - \frac {1}{L _ {2}} \right] e ^ {- (\alpha + \beta) t} \end{array}\tag{11}
$$

式中

$$
\alpha = \frac {R _ {1} + r}{2 L _ {1}} + \frac {R _ {2} + r}{2 L _ {2}}\tag{12}
$$

$$
\beta = \sqrt {\left(\frac {R _ {1} + r}{2 L _ {1}} - \frac {R _ {2} + r}{2 L _ {2}}\right) ^ {2} + \frac {r ^ {2}}{L _ {1} L _ {2}}}\tag{13}
$$

10.20 图 10.20 中有两种电路(1)和(2)，它们的电源内阻都可略去不计。试分析下列四种情况下，哪种情况的自感电动势大于电源的电动势 $\varepsilon$ ：(a) $K_{1}$ 接通时；(b) $K_{1}$ 接通很久后断开时；(c) $K_{2}$ 接通时；(d) $K_{2}$ 接通很久后断开时。

【解】在下列四种情况下，设通过 rL 支路的电流为 i, L 的自感电动势为 $\varepsilon_{L}$ 

(a) $K_{1}$ 接通后,电路方程为

$$
i r - \xi_ {L} - \xi = 0\tag{1}
$$

所以

$$
\ell_ {L} = - \mathcal {E} + i r\tag{2}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/1d625bd53565342c4e1ca5f018b5d6d67695534cf5fd2ffb989190d4c896061f.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/7a9860c4fbfa2f53a665db394bba14aa99588c37c052ebb8c708f4f1624fb6f1.jpg)



(2)



图10.20


$$
\mid \mathcal {E} _ {L} \mid = \mathcal {E} - i r \leqslant \mathcal {E}\tag{3}
$$

(b) $K_{1}$ 断开后,电路方程为

$$
i r - \xi_ {L} + i R = 0\tag{4}
$$

所以

$$
\dot {\epsilon} _ {L} = i (R + r)\tag{5}
$$

在 $K_{1}$ 断开时，L 中有电流. $K_{1}$ 刚断开时，电流 i 的值为

$$
i _ {0} = \frac {\varepsilon}{r}\tag{6}
$$

于是这时的自感电动势为

$$
\mathcal {E} _ {L 0} = i _ {0} (R + r) = \frac {R + r}{r} \varepsilon > \varepsilon\tag{7}
$$

(c) $K_{2}$ 接通后,电路方程为

$$
i r - \delta_ {L} = 0\tag{8}
$$

在 $\mathbf{K}_2$ 接通时， $L$ 中有电流. $\mathbf{K}_2$ 刚接通时，电流 $i$ 的值为

$$
i _ {0} = \frac {\varepsilon}{R + r}\tag{9}
$$

于是这时的自感电动势为

$$
\mathcal {E} _ {L 0} = i _ {0} r = \frac {r}{R + r} \delta <   \delta\tag{10}
$$

(d) $K_{2}$ 断开后,电路方程为

$$
i r - \mathcal {E} _ {L} + i R - \mathcal {E} = 0\tag{11}
$$

所以

$$
\varepsilon_ {L} = - \varepsilon + i (R + r)\tag{12}
$$

在 $\mathbf{K}_2$ 断开时， $L$ 中有电流. $\mathbf{K}_2$ 刚断开时，电流 $i$ 的值为

$$
i _ {0} = 0\tag{13}
$$

于是这时的自感电动势为

$$
\mid \mathcal {E} _ {L 0} \mid = \mathcal {E}\tag{14}
$$

综观以上四种情况，只有(b)的 $\varepsilon_{L0} > \varepsilon$ 

【讨论】参见前面10.9题的讨论.

10.21 电容为 C 的电容器储有电荷量 $Q_{0}$ ，在 t=0 时刻，接到自感为 L、电阻为 R 的线圈上放电，R 可看作与 L 串联。(1)试求放电电流 I 与时间 t 的关系；

(2)在什么情况下 I 只往一个方向流动？(3)当 $C=1.0\mu F, L=1.6mH$ 时，R 的值应为多少才满足上述条件？

【解】(1) C 经过 L 和 R 放电时, 电路如图 10.21 所示, 电路方程为

$$
- \varepsilon_ {L} + I R - U _ {C} = 0\tag{1}
$$

因为

$$
\xi_ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

$$
U _ {C} = \frac {Q}{C}\tag{3}
$$

$$
I = - \frac {\mathrm{d} Q}{\mathrm{d} t} \qquad (\text {放电})\tag{4}
$$

故得

$$
L \frac {\mathrm{d} ^ {2} I}{\mathrm{d} t ^ {2}} + R \frac {\mathrm{d} I}{\mathrm{d} t} + \frac {I}{C} = 0\tag{5}
$$

利用初始条件

$$
t = 0 \text {   时,   } Q = Q _ {0}, I - 0\tag{6}
$$

解式(5)得电流 I 与时间 t 的关系为

$$
I = \frac {Q _ {0} (\alpha^ {2} - \beta^ {2})}{2 \beta} \mathrm{e} ^ {- \alpha t} (\mathrm{e} ^ {\beta t} - \mathrm{e} ^ {- \beta t})\tag{7}
$$

式中

$$
\alpha = \frac {R}{2 L}, \quad \beta = \sqrt {\frac {R ^ {2}}{4 L ^ {2}} - \frac {1}{L C}}\tag{8}
$$

(2)由式(7)、(8)可见,当

$$
\frac {R ^ {2}}{4 L ^ {2}} - \frac {1}{L C} \geqslant 0, \text {即} R \geqslant 2 \sqrt {\frac {L}{C}}\tag{9}
$$

时 $\beta$ 为实, 这时电流便不振荡, 即只往一个方向流动.

(3)使 $I$ 只往一个方向流的 $R$ 值为

$$
R \geqslant 2 \times \sqrt {\frac {1 . 6 \times 1 0 ^ {- 3}}{1 . 0 \times 1 0 ^ {- 6}}} = 8 0 (\Omega)\tag{10}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/5d87a29060e928d2eec7a8afe5da6c829f288d519b3390b8348824526d37ce03.jpg)



图10.21


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/34c670cc8eaba382339a66c6be95d336ec48cbdab1cfff3ae32bd2c182d86da1.jpg)



图10.22


10.22 一电路如图 10.22, 其中电阻 R、电容 C 和电源的电动势均为已知, C 原来不带电. 试求刚接通电键 K 时, 线路中的电流 I 和 R 两端的电压 $U_{R}$ .

【解】接通 K 后, 电路方程为

$$
U _ {C} + I R - \ell = 0\tag{1}
$$

因为

$$
U _ {C} = \frac {Q}{C}\tag{2}
$$

故得

$$
R I + \frac {Q}{C} = \varepsilon\tag{3}
$$

初始条件为

$$
t = 0 \text {   时,   } Q = 0\tag{4}
$$

于是得 K 刚接通 $(t=0)$ 时, 线路中的电流为

$$
I _ {0} = \varepsilon / R\tag{5}
$$

$R$ 两端的电压为

$$
U _ {R 0} = I _ {0} R = \mathcal {E}\tag{6}
$$

10.23 一个 $C = 1.0$ 微法的电容器, 储有能量 $W = 0.50$ 焦耳, 现在让它通过 $R = 1.0 \times 10^{6}$ 欧姆的电阻放电. 试求: (1) 放电前电容器上所容的电荷量 $Q_{0}$ ; (2) 开始放电 $(t = 0)$ 时的电流 $I_{0}$ ; (3) $t$ 时刻电容器上的电压 $U_{C}(t)$ 和 $R$ 上的电压 $U_{R}(t)$ ; (4) $t$ 时刻 $R$ 所消耗的功率 $P(t)$ .

【解】（1）由公式

$$
W = \frac {1}{2} \frac {Q ^ {2}}{C}\tag{1}
$$

得所求电荷量为

$$
\begin{array}{r l} Q _ {0} & = \sqrt {2 C W} = \sqrt {2 \times 1 . 0 \times 1 0 ^ {- 6} \times 0 . 5 0} \\ & = 1. 0 \times 1 0 ^ {- 3} (\mathrm{C}) \end{array}\tag{2}
$$

(2) 放电时、电路方程为

$$
I R - U _ {C} = 0\tag{3}
$$

因为

$$
U _ {C} = \frac {Q}{C}\tag{4}
$$

所以

$$
I R - \frac {Q}{C} = 0\tag{5}
$$

于是得 $t = 0$ 时，

$$
\begin{array}{r l} I _ {0} & = \frac {Q _ {0}}{R C} = \frac {1 . 0 \times 1 0 ^ {- 3}}{1 . 0 \times 1 0 ^ {6} \times 1 . 0 \times 1 0 ^ {- 6}} \\ & = 1. 0 \times 1 0 ^ {- 3} (\mathrm{A}) \end{array}\tag{6}
$$

(3)t 时刻的 $U_{C}(t)$ 和 $U_{R}(t)$ 因为是放电, 故

$$
I = - \frac {\mathrm{d} Q}{\mathrm{d} t}\tag{7}
$$

由式(5)、(7)得

$$
R \frac {\mathrm{d} I}{\mathrm{d} t} + \frac {I}{C} = 0\tag{8}
$$

利用初始条件式(6)，解式(8)得

$$
I = I _ {0} \mathrm{e} ^ {- \frac {t}{R C}} = 1. 0 \times 1 0 ^ {- 3} \mathrm{e} ^ {- t} (\mathrm{A})\tag{9}
$$

于是得

$$
\begin{array}{r l} U _ {R} (t) & = R I = 1. 0 \times 1 0 ^ {6} \times 1. 0 \times 1 0 ^ {- 3} \mathrm{e} ^ {- t} \\ & = 1. 0 \times 1 0 ^ {3} \mathrm{e} ^ {- t} (\mathrm{V}) \end{array}\tag{10}
$$

将式(9)代入式(7)，积分，并利用 t=0 时， $Q=Q_{0}$ ，便得

$$
\begin{array}{r l} Q & = - \int I \mathrm{d} t = - 1. 0 \times 1 0 ^ {- 3} \int \mathrm{e} ^ {- t} \mathrm{d} t \\ & = 1. 0 \times 1 0 ^ {- 3} \mathrm{e} ^ {- t} (\mathrm{C}) \end{array}\tag{11}
$$

于是得

$$
\begin{array}{r l} U _ {C} (t) & = \frac {Q}{C} = \frac {1 . 0 \times 1 0 ^ {- 3} \mathrm{e} ^ {- t}}{1 . 0 \times 1 0 ^ {- 6}} \\ & = 1. 0 \times 1 0 ^ {3} \mathrm{e} ^ {- t} (\mathrm{V}) \end{array}\tag{12}
$$

(4)t 时刻 R 所消耗的功率为

$$
\begin{array}{r l} P (t) & = I ^ {2} (t) R = (1. 0 \times 1 0 ^ {- 3} \mathrm{e} ^ {- t}) ^ {2} \times 1. 0 \times 1 0 ^ {6} \\ & = 1. 0 \mathrm{e} ^ {- 2 t} (\mathrm{W}) \end{array}\tag{13}
$$

10.24 一电容器的 C 为 $5.0 \mu F$ ，两极板间的介质不是完全绝缘的，因而有漏电电阻，其值为 $2.0 \times 10^{8} \Omega$ 。这电容器原来不带电，在 t = 0 时刻，将它的两极板分别接到一恒流电源的两极上，恒流为 I = 3.0 mA。（1）试求两极板的电势差 U 与时间 t 的关系；（2）试问经过多长时间，U = 500 V？

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/3978d39843279574e811f90b216746b4bea073232132b2bea2857532bd7a5897.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/46da4e7e82e2613a08566ad41c29cc913d2462f1000987834ae9d9bb5f47cb6b.jpg)



(2)



图10.24


【解】（1）这电容器接上恒流电源时，如图10.24(1)所示.它的漏电电阻 $R$ 可看作是与 $C$ 并联的一个电阻，如图10.24(2)所示.于是电容器两极板的电势差为

$$
U = \frac {Q}{C} = i R\tag{1}
$$

因为

$$
Q = I t - \int_ {0} ^ {t} i \mathrm{d} t\tag{2}
$$

所以

$$
\frac {\mathrm{d} Q}{\mathrm{d} t} = I - i = I - \frac {Q}{R C}\tag{3}
$$

利用初始条件

解式(3)得

$$
t = 0 \text {时}, Q = 0\tag{4}
$$

$$
Q = R C I \left(1 - e ^ {- \frac {t}{R C}}\right)\tag{5}
$$

于是得

$$
U - \frac {Q}{C} = R I (1 - \mathrm{e} ^ {- \frac {t}{R C}})\tag{6}
$$

代入数值得

$$
U = 2. 0 \times 1 0 ^ {8} \times 3. 0 \times 1 0 ^ {- 6} \times (1 - e ^ {- \frac {t}{2 . 0 \times 1 0 ^ {8} \times 5 . 0 \times 1 0 ^ {- 6}}})
$$

$$
= 6. 0 \times 1 0 ^ {2} (1 - \mathrm{e} ^ {- \frac {t}{1 0 0 0}}) (\mathrm{V})\tag{7}
$$

(2) 设 $t$ 时刻 $U = 500\mathrm{V}$ , 则由式(7)得

$$
6 0 0 (1 - \mathrm{e} ^ {- \frac {t}{1 0 0 0}}) = 5 0 0\tag{8}
$$

$$
1 - \mathrm{e} ^ {- \frac {t}{1 0 0 0}} = \frac {5}{6}, \quad \mathrm{e} ^ {\frac {t}{1 0 0 0}} = 6
$$

所以

$$
t = 1 0 ^ {3} \ln 6 = 1. 8 \times 1 0 ^ {3} (\mathrm{s}) = 3 0 (\min)\tag{9}
$$

10.25 一平行板电容器两极板间充满均匀介质,这介质的电容率为 $\varepsilon$ ,电导率为 $\sigma$ .将这电容器充电,试问断开电源后经过多长时间,它的电荷量或电压降到初值的 $e^{-1} = \frac{1}{2.71828}$ 倍? (这段时间称为弛豫时间)

【解】 断开电源后,介质漏电电流为

$$
i = - \frac {\mathrm{d} Q}{\mathrm{d} t}\tag{1}
$$

式中 Q 为电容器上的电荷量, 这时

$$
R i = U = \frac {Q}{C}\tag{2}
$$

式中 R 是介质的漏电电阻, 其值为

$$
R = \rho \frac {l}{S} = \frac {d}{\sigma S} = \frac {\varepsilon d}{\sigma \varepsilon S} = \frac {\varepsilon}{\sigma} \frac {1}{C}\tag{3}
$$

由以上三式得

$$
\frac {\mathrm{d} Q}{\mathrm{d} t} = - \frac {Q}{R C} = - \frac {\sigma}{\varepsilon} Q\tag{4}
$$

由初始条件

$$
t = 0 \text {   时   }, Q = Q _ {0}\tag{5}
$$

解式(4)得

$$
Q = Q _ {0} \mathrm{e} ^ {- \frac {\sigma}{\varepsilon} t}\tag{6}
$$

令 $Q = Q_{0}\mathrm{e}^{-1}$ ，便得所求时间为

$$
t = \frac {\varepsilon}{\sigma}\tag{7}
$$

10.26 一电路如图 10.26, 其中电容 C 和电阻 R 以及电源的电动势 $\delta$ 和内阻 r 均为已知. 接通电链 K, 待电流达到稳定值后, 于 t=0 时刻断开 K. 试求 t 时刻 C 上的电荷量 Q 和通过 R 的电流 I.

【解】由图 10.26 可见, K 接通后, 电流稳定时, 通过 R 的电流为

$$
I _ {0} = \frac {\varepsilon}{R + r}\tag{1}
$$

这时 $C$ 上的电荷量为

$$
Q _ {0} = C U _ {0} = C R I _ {0} = \frac {R C E}{R + r}\tag{2}
$$

K断开后，C通过R放电，电路方程为

$$
I R - U _ {C} = I R - \frac {Q}{C} = 0\tag{3}
$$

这时

$$
I = - \frac {\mathrm{d} Q}{\mathrm{d} t}\tag{4}
$$

由式(3)、(4)得

$$
R \frac {\mathrm{d} Q}{\mathrm{d} t} + \frac {Q}{C} = 0\tag{5}
$$

利用初始条件 t=0 时， $Q=Q_{0}=RC\ell/(R+r)$ ，解式(5)得

$$
Q = Q _ {0} \mathrm{e} ^ {- \frac {t}{R c}} = \frac {R C \ell}{R + r} \mathrm{e} ^ {- \frac {t}{R C}}\tag{6}
$$

将式(6)代入式(4)得

$$
I = \frac {\delta}{R + r} \mathrm{e} ^ {- \frac {t}{R C}}\tag{7}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/28cb96e91a00310b79f4e1fc34e6918ecd96ae2ccb1fa119407a440faf30c04c.jpg)



图10.26


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/d671e0b1fccbb354000f40a4c6cf2517716869f5fbbabca05b55aff5b1de7a02.jpg)



图10.27


10.27 一电路如图 10.27, 电容 C 与电阻 R 并联, 接到电动势为 $\varepsilon$ 、内阻为 r 的电源上. 在 t=0 时刻接通电键 K. 试求 t 时刻的 (1) 通过电源的电流 I; (2) R 两端的电压 $U_{R}$ .

【解】接通 K 后, 设通过电源的电流为 I, 通过 C 的电流为 $I_{C}$ , C 上的电荷量为 Q, 则电路方程为

$$
I = I _ {R} + I _ {C}\tag{1}
$$

$$
I _ {R} R + I r = \xi\tag{2}
$$

$$
I _ {R} R = \frac {Q}{C}\tag{3}
$$

$$
I _ {C} = \frac {\mathrm{d} Q}{\mathrm{d} t}\tag{4}
$$

本题因知道初始条件为

$$
t = 0 \text {   时,   } Q = 0\tag{5}
$$

故先从求 $Q$ 入手. 由式(1)、(2)得

$$
(R + r) I _ {R} + r I _ {C} = \delta\tag{6}
$$

将式(3)、(4)代入式(6)得

$$
r \frac {\mathrm{d} Q}{\mathrm{d} t} = - \frac {R + r}{R C} Q + \mathcal {E}\tag{7}
$$

利用初始条件式(5)，解式(7)得

$$
Q = \frac {R C ^ {E}}{R + r} [ 1 - \mathrm{e} ^ {- \frac {R + r}{R r C ^ {t}}} ]\tag{8}
$$

代入式(3)得，t 时刻通过 R 的电流为

$$
I _ {R} = \frac {\mathcal {E}}{R + r} [ 1 - \mathrm{e} ^ {- \frac {R + r}{R r C} t} ]\tag{9}
$$

因为

$$
I _ {C} = \frac {\mathrm{d} Q}{\mathrm{d} t} = \frac {\mathcal {E}}{r} \mathrm{e} ^ {- \frac {R + r}{R r C} t}\tag{10}
$$

故由式(1)、(9)、(10)得通过电源的电流为

$$
I = I _ {R} + I _ {C} = \frac {\phi}{R + r} \left[ 1 + \frac {R}{r} \mathrm{e} ^ {- \frac {R + r}{R r C} t} \right]\tag{11}
$$

$R$ 两端的电压为

$$
U _ {R} = R I _ {R} = \frac {R \xi}{R + r} [ 1 - \mathrm{e} ^ {- \frac {R + r}{R r C t}} ]\tag{12}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/86c08c19d07d818cdcc25ef793256c5231540dbebb3c7596c5e5d59d022bd83a.jpg)



图10.28


10.28 一电路如图 10.28, 电容 $C_{1}$ 和 $C_{2}$ 及电阻 $R_{1}$ 和 $R_{2}$ 均为已知, G 是电流计. 试证明: 如果 $R_{1}C_{1}=R_{2}C_{2}$ , 则接通电键 K 后, G 不会发生偏转.

【证】接通 K 后, 设通过 $R_{1}$ 的电流为 $I_{1}$ , 通过 $R_{2}$ 的电流为 $I_{2}$ , 则当

$$
R _ {1} I _ {1} = R _ {2} I _ {2}\tag{1}
$$

时，G两端的电势相等，便不会有电流流过G.这时

$$
I _ {1} = \frac {\mathrm{d} Q _ {1}}{\mathrm{d} t}, \quad I _ {2} = \frac {\mathrm{d} Q _ {2}}{\mathrm{d} t}\tag{2}
$$

因为

$$
R _ {1} I _ {1} + \frac {Q _ {1}}{C _ {1}} = \varepsilon = R _ {2} I _ {2} + \frac {Q _ {2}}{C _ {2}}\tag{3}
$$

故由式(1)得

$$
\frac {Q _ {1}}{C _ {1}} = \frac {Q _ {2}}{C _ {2}}\tag{4}
$$

对时间 t 求导并利用式(2)得

$$
\frac {I _ {1}}{C _ {1}} = \frac {I _ {2}}{C _ {2}}\tag{5}
$$

由式(1)、(5)得

$$
R _ {1} C _ {1} = R _ {2} C _ {2}\tag{6}
$$

【别证】 $C_1$ 和 $C_2$ 与 $R_{1}$ 和 $R_{2}$ 构成一个电桥.电桥的平衡(无电流通过G)条件为

$$
\frac {R _ {1}}{C _ {2}} = \frac {R _ {2}}{C _ {1}}\tag{7}
$$

所以

$$
R _ {1} C _ {1} = R _ {2} C _ {2}\tag{8}
$$

10.29 在 LC 振荡回路中, 设开始 $(t=0)$ 时 C 上的电荷量为 $Q_{0}, L$ 中的电流为零. (1) 试求 L 中的磁场能量第一次等于 C 中的电场能量的时间 $t_{1}$ ; (2) 试求这时 C 上的电荷量 $Q_{1}$ ; (3) 当 $L=10mH, C=1.0\mu F$ 时, 试计算 $t_{1}$ 的值.

【解】（1）如图10.29，接通K后，电路方程为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/0db619fe37d8255fb2885d5bdfe4a7f3a6aaf9545fe653aa97bca22d9a63a1c9.jpg)


$$
- \varepsilon_ {L} - U _ {C} = 0\tag{1}
$$

因为

$$
\varepsilon_ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

图10.29

$$
U _ {C} = \frac {Q}{C}\tag{3}
$$

$$
I = - \frac {\mathrm{d} Q}{\mathrm{d} t} \quad (\text {放电})\tag{4}
$$

故得

$$
L \frac {\mathrm{d} ^ {2} Q}{\mathrm{d} t ^ {2}} + \frac {Q}{C} = 0
$$

利用初始条件

(5) 

$$
t = 0 \text {时}, Q = Q _ {0}, I = 0\tag{6}
$$

解式(5)得

$$
Q = Q _ {0} \cos \left(\frac {t}{\sqrt {L C}}\right)\tag{7}
$$

将式(7)代入式(4)得

$$
I = \frac {Q _ {0}}{\sqrt {L C}} \sin \left(\frac {t}{\sqrt {L C}}\right)\tag{8}
$$

能量相等：

$$
\frac {1}{2} L I ^ {2} = \frac {1}{2} \frac {Q ^ {2}}{C}\tag{9}
$$

由式(7)、(8)、(9)得

$$
\sin \left(\frac {t}{\sqrt {L C}}\right) = \cos \left(\frac {t}{\sqrt {L C}}\right)\tag{10}
$$

于是第一次相等时

$$
t _ {1} = \frac {\pi}{4} \sqrt {L C}\tag{11}
$$

(2)这时 $C$ 上的电荷量为

$$
Q _ {1} = Q _ {0} \cos \frac {\pi}{4} = \frac {\sqrt {2}}{2} Q _ {0}\tag{12}
$$

(3) $t_{1}$ 的值由式(11)为

$$
t _ {1} = \frac {\pi}{4} \times \sqrt {1 0 \times 1 0 ^ {- 3} \times 1 . 0 \times 1 0 ^ {- 6}} = 7. 9 = 1 0 ^ {- 5} (\mathrm{s})\tag{13}
$$

10.30 一电路如图 10.30(1), $C_1 = 100\mu \mathrm{F}, C_2 = 900\mu \mathrm{F}, L = 10\mathrm{H}$ . $C_2$ 已充电到 $100\mathrm{V}, C_1$ 未充电. 试问怎样利用电键 $\mathbf{K}_1$ 和 $\mathbf{K}_2$ , 使 $C_1$ 充电到 $300\mathrm{V}$ ?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/faea7eaed6b34ee05b18ae099f6af37bf9b975ad631051a793fb2f4e8926de1e.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/cb6ed8e02862c58ecc6a76911830f4e633d418765e3de1f31a221d0ee7b332b2.jpg)



图10.30(1)



图10.30(2)


【解】先接通 $K_{2}$ ，使 $C_{2}$ 通过 L 放电，如图 10.30(2) 所示。这时电路方程为

$$
- \mathcal {E} _ {L} - U _ {2} = 0\tag{1}
$$

所以

$$
L \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} - \frac {Q _ {2}}{C _ {2}} = 0\tag{2}
$$

因为

$$
I _ {2} = - \frac {\mathrm{d} Q _ {2}}{\mathrm{d} t} (C _ {2} \text {放电})\tag{3}
$$

由式(2)、(3)得

$$
L \frac {\mathrm{d} ^ {2} Q _ {2}}{\mathrm{d} t ^ {2}} + \frac {Q _ {2}}{C _ {2}} = 0\tag{4}
$$

利用初始条件

$t = 0$ 时， $I_{20} = 0$ 

(5) 

$$
\begin{array}{r l} t = 0 \text {时,} Q _ {2 0} & = C _ {2} U _ {2 0} = 9 0 0 \times 1 0 ^ {- 6} \times 1 0 0 \\ & = 9 \times 1 0 ^ {- 2} (\mathrm{C}) \end{array}\tag{6}
$$

解式(4)得

$$
\begin{array}{r l} Q _ {2} & = C _ {2} U _ {2 0} \cos \left(\frac {t}{\sqrt {L C _ {2}}}\right) \\ & = 9 \times 1 0 ^ {- 2} \cos \left(\frac {t}{\sqrt {1 0 \times 9 0 0 \times 1 0 ^ {- 6}}}\right) \\ & = 9 \times 1 0 ^ {- 2} \cos \left(\frac {1 0 \sqrt {1 0}}{3} t\right) \quad (\mathrm{C}) \end{array}\tag{7}
$$

$$
I = 9 \times 1 0 ^ {- 2} \times \frac {1 0 \sqrt {1 0}}{3} \sin \left(\frac {1 0 \sqrt {1 0}}{3} t\right)
$$

$$
= \frac {3 \sqrt {1 0}}{1 0} \sin \left(\frac {1 0 \sqrt {1 0}}{3} t\right) \tag {A}\tag{8}
$$

在 $t_1$ 时刻， $I_2$ 的值为

$$
I _ {2} = \frac {3 \sqrt {1 0}}{1 0} \sin \left(\frac {1 0 \sqrt {1 0}}{3} t _ {1}\right) \tag {A}\tag{9}
$$

如果在这时断开 $\mathbf{K}_2$ ，同时接通 $\mathbf{K}_1$ ，则由于 $L$ 上电流的连续性，这时开始给 $C_1$ 充电的电流的值便是式(9).令

$$
t ^ {\prime} = t - t _ {1}\tag{10}
$$

则 $t^{\prime} \geqslant 0$ 时电路便如图10.30(3)所示. 这时电路方程为

$$
- \mathcal {E} _ {L} + U _ {1} = 0
$$

所以

(11) 

$$
L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t ^ {\prime}} + \frac {Q _ {1}}{C _ {1}} = 0\tag{12}
$$

$$
I _ {1} = \frac {\mathrm{d} Q _ {1}}{\mathrm{d} t ^ {\prime}} (C _ {1} \text {充电})
$$

因为

(13) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/e1aa2bd524506b35879fc8d3066212e8a030d2f4184094c42efc1f115fd8daf7.jpg)


由式(12)、(13)得

$$
L \frac {\mathrm{d} ^ {2} Q _ {1}}{\mathrm{d} t ^ {\prime 2}} + \frac {Q _ {1}}{C _ {1}} = 0
$$

图10.30(3)

(14) 

利用初始条件

$$
t ^ {\prime} = 0 \text {   时   }, Q _ {1} = 0\tag{15}
$$

$$
t ^ {\prime} = 0 \text {时,} I _ {1} = \frac {3 \sqrt {1 0}}{1 0} \sin \left(\frac {1 0 \sqrt {1 0}}{3} t _ {1}\right)\tag{A}
$$

(16) 

解式(14)得

$$
Q _ {1} = \frac {3}{1 0 0} \sin \left(\frac {1 0 \sqrt {1 0}}{3} t _ {1}\right) \sin \left(\frac {t ^ {\prime}}{\sqrt {L C _ {1}}}\right)\tag{17}
$$

因为

$$
\sqrt {L C _ {1}} = \sqrt {1 0 \times 1 0 0 \times 1 0 ^ {- 5}} = \frac {1}{1 0 \sqrt {1 0}}\tag{18}
$$

所以

$$
Q _ {1} = \frac {3}{1 0 0} \sin \left(\frac {1 0 \sqrt {1 0}}{3} t _ {1}\right) \sin (1 0 \sqrt {1 0} t ^ {\prime})\tag{C}
$$

(19) 

$$
I _ {1} = \frac {\mathrm{d} Q _ {1}}{\mathrm{d} t ^ {\prime}} = \frac {3 \sqrt {1 0}}{1 0} \sin \left(\frac {1 0 \sqrt {1 0}}{3} t _ {1}\right) \cos (1 0 \sqrt {1 0} t ^ {\prime}) (\mathrm{A})\tag{20}
$$

于是得 $C_{1}$ 上的电压为

$$
\begin{array}{r l} U _ {1} & = \frac {Q _ {1}}{C _ {1}} = \frac {Q _ {1}}{1 0 0 \times 1 0 ^ {- 6}} \\ & = 3 0 0 \sin \left(\frac {1 0 \sqrt {1 0}}{3} t _ {1}\right) \sin (1 0 \sqrt {1 0} t ^ {\prime}) \end{array}\tag{V}
$$

(21) 

由式(21)可见,若使

$$
\sin \left(\frac {1 0 \sqrt {1 0}}{3} t _ {1}\right) = \pm 1\tag{22}
$$

$$
\sin (1 0 \sqrt {1 0} t ^ {\prime}) = \pm 1\tag{23}
$$

则

$$
U _ {1} = \pm 3 0 0 \mathrm{V}\tag{24}
$$

由式(22)得

$$
\frac {1 0 \sqrt {1 0}}{3} t _ {1} = \frac {\pi}{2} + n \pi , n = 0, 1, 2, \dots\tag{25}
$$

所以

$$
t _ {1} = \frac {3 \sqrt {1 0}}{2 0 0} \pi + \frac {3 \sqrt {1 0}}{1 0 0} n \pi , n = 0, 1, 2, \dots\tag{26}
$$

由式(23)得

$$
1 0 \sqrt {1 0} t ^ {\prime} = \frac {\pi}{2} + m \pi , m = 0, 1, 2, \dots\tag{27}
$$

所以

$$
t ^ {\prime} = t \quad t _ {1} = \frac {\sqrt {1 0}}{2 0 0} \pi + \frac {\sqrt {1 0}}{1 0 0} m \pi , m = 0, 1, 2, \dots\tag{28}
$$

由以上分析,我们得出结论:在 $K_{2}$ 接通后 $t_{1}=\frac{3\sqrt{10}}{200}\pi+\frac{3\sqrt{10}}{100}n\pi s$ , 断开 $K_{2}$ , 同时接通 $K_{1}$ ;
再经过 $t' = t - t_{1} = \frac{\sqrt{10}}{200}\pi + \frac{\sqrt{10}}{100}m\pi s$ ，断开 $K_{1}$ ，则 $C_{1}$ 便充电到 300V 了.

【讨论】一、本题的关键是利用电路元件突然改变时，L 中的电流是连续的这一特点.

二、式(22)、(23)、(24)中出现正负号，是因为题目只规定 $C_1$ 上的电压为 $300\mathrm{V}$ ，而并不要求哪个极板为正.所以结果便有 $\pm 300\mathrm{V}$ 的两种可能性.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/6e537cd008901358f5b1f4cfd89be97c7ac2e68266e6b000a65e71c150cd0cd3.jpg)



图10.31


10.31 在电阻 $R = 5\Omega$ ，电感 $L = 10mH$ ，电容 $C = 10\mu F$ 的串联电路两端，加上频率为 $f = 50Hz$ 的简谐交流电压，试问经过该交流电的几个周期后，暂态过程的电流便小于开始后最大值的百分之一？

【解】设在 t=0 时刻加上交流电压 $\varepsilon=\varepsilon_{0}\cos\omega t$ 后，电流 I 如图 10.31 所示，则电路方程为

$$
I R - \varepsilon_ {L} + U _ {C} = \varepsilon\tag{1}
$$

因为

$$
\ell_ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

$$
U _ {C} = \frac {Q}{C}\tag{3}
$$

$$
I = \frac {\mathrm{d} Q}{\mathrm{d} t}\tag{4}
$$

所以

$$
L \frac {\mathrm{d} ^ {2} I}{\mathrm{d} t ^ {2}} + R \frac {\mathrm{d} I}{\mathrm{d} t} + \frac {I}{C} = - \omega \ell_ {0} \sin w t\tag{5}
$$

这个微分方程的特征方程的两个根为

$$
D _ {1, 2} = \frac {1}{2 L} \left[ - R \pm \sqrt {R ^ {2} - 4 \frac {L}{C}} \right]\tag{6}
$$

故暂态过程的电流便含有因子 $\mathrm{e}^{-\frac{R}{2L} t}$ . 今欲

$$
\mathrm{e} ^ {- \frac {R}{2 L} t} <   1 0 ^ {- 2}\tag{7}
$$

所以

$$
\mathrm{e} ^ {\frac {R}{2 L} t} > 1 0 0\tag{8}
$$

故得

$$
t > \frac {2 L}{R} \ln 1 0 0 = \frac {2 \times 1 0 \times 1 0 ^ {- 3}}{5} \times 4. 6 = 1. 8 \times 1 0 ^ {- 2} (\mathrm{s})\tag{9}
$$

因周期

$$
T = \frac {1}{5 0} = 2. 0 \times 1 0 ^ {- 2} (\mathrm{s})\tag{10}
$$

故

$$
t / T = 1. 8 \times 1 0 ^ {- 2} / 2. 0 \times 1 0 ^ {- 2} = 0. 9\tag{11}
$$

即加上交流电压,暂态过程的电流达到最大值后,不到一个周期,暂态过程的电流便小于该最大值的百分之一.

10.32 $R = 1000\Omega, L = 0.10\mathrm{H}, C = 0.010\mu \mathrm{F}$ , 串联如图 10.32(1) 所示. 先使 $C$ 充电到 400 伏特, 在 $t = 0$ 时接通电键 K. (1) 试求电路中电流 $I$ 与时间 $t$ 的关系; (2) 在第一个振荡周期里有多少能量变为焦耳热? (3) 在全部振荡时间内有多少能量变为焦耳热? (4) 电路中应串入多大电阻, 才能使它不发生振荡?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/4d32722cef490a01b5286417170b100b67f73cc7dd56317203008a06b51725f6.jpg)



图 10.32(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/18ca4ab52eb46156a3dc47520d9826b637ea9f3e19ee472e2eb09b197b1dbcf8.jpg)



图 10.32(2)


【解】(1)K接通后,电路如图10.32(2)所示,电路方程为

$$
R I - \varepsilon_ {L} - U _ {C} = 0\tag{1}
$$

因为

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

$$
U _ {C} = \frac {Q}{C}\tag{3}
$$

$$
I = - \frac {\mathrm{d} Q}{\mathrm{d} t} \quad (\text { 因为 } C \text { 放电 })\tag{4}
$$

故得

$$
L \frac {\mathrm{d} ^ {2} I}{\mathrm{d} t ^ {2}} + R \frac {\mathrm{d} I}{\mathrm{d} t} + \frac {I}{C} = 0\tag{5}
$$

式(5)的特征方程的两个根为

$$
D _ {1, 2} = - \frac {R}{2 L} \pm \sqrt {\frac {R ^ {2}}{4 L ^ {2}} - \frac {1}{L C}}\tag{6}
$$

令

$$
\alpha = \frac {R}{2 L}, \beta = \sqrt {\frac {R ^ {2}}{4 L ^ {2}} - \frac {1}{L C}}\tag{7}
$$

利用初始条件

$$
t = 0 \text {时}, I = 0, Q = C U _ {0}\tag{8}
$$

解式(5)得

$$
I = \frac {U _ {0}}{2 \beta L} \mathrm{e} ^ {- \alpha t} (\mathrm{e} ^ {\beta t} - \mathrm{e} ^ {- \beta t})\tag{9}
$$

代入数值得

$$
\alpha = \frac {1 0 0 0}{2 \times 0 . 1 0} = 5 0 0 0\tag{10}
$$

$$
\begin{array}{r l} \beta & = \sqrt {\left(\frac {1 0 0 0}{2 \times 0 . 1 0}\right) ^ {2} - \frac {1}{0 . 1 0 \times 0 . 0 1 0 \times 1 0 ^ {- 6}}} = 5 \times 1 0 ^ {3} \sqrt {- 3 9} \\ & = 3. 1 2 \times 1 0 ^ {4} i \end{array}\tag{11}
$$

$$
\frac {U _ {0}}{2 \beta L} = \frac {4 0 0}{2 \times 3 . 1 2 \times 1 0 ^ {4} i \times 0 . 1 0} = - 6. 4 1 \times 1 0 ^ {- 2} i\tag{12}
$$

将这些值代入式(9)得

$$
\begin{array}{r l} I & = - 6. 4 1 \times 1 0 ^ {- 2} i \mathrm{e} ^ {- 5 0 0 0 t} (\mathrm{e} ^ {3. 1 2 \times 1 0 ^ {4} i t} - \mathrm{e} ^ {- 3. 1 2 \times 1 0 ^ {4} i t}) \\ & = - 6. 4 1 \times 1 0 ^ {- 2} i \mathrm{e} ^ {- 5 0 0 0 t} (2 i \sin 3. 1 2 \times 1 0 ^ {4} t) \\ & = 0. 1 2 8 \mathrm{e} ^ {- 5 0 0 0 t} \sin 3. 1 2 \times 1 0 ^ {4} t \quad (\mathrm{A}) \end{array}\tag{13}
$$

(2)振荡周期为

$$
T = \frac {2 \pi}{\omega} = \frac {2 \pi}{3 . 1 2 \times 1 0 ^ {4}} = 2. 0 1 4 \times 1 0 ^ {- 4} (\mathrm{s})\tag{14}
$$

在第一个周期里,变成焦耳热的能量为

$$
\begin{array}{r l} W _ {1} & = \int_ {0} ^ {T} I ^ {2} R \mathrm{d} t = (0. 1 2 8) ^ {2} \times 1 0 0 0 \int_ {0} ^ {T} \mathrm{e} ^ {- 1 0 0 0 0 t} \sin^ {2} 3. 1 2 \times 1 0 ^ {4} t \mathrm{d} t \\ & = 1 6. 3 8 \int_ {0} ^ {T} \mathrm{e} ^ {- 1 0 0 0 0 t} \sin^ {2} 3. 1 2 \times 1 0 ^ {4} t \mathrm{d} t \end{array}\tag{15}
$$

其中积分

$$
\begin{array}{r l} & \int_ {0} ^ {T} \mathrm{e} ^ {- 1 0 0 0 0 t} \sin^ {2} 3. 1 2 \times 1 0 ^ {4} t \mathrm{d} t \\ & = - \frac {1}{3 . 1 2 \times 1 0 ^ {4}} \frac {\mathrm{e} ^ {- 1 0 0 0 0 t}}{4 + \left(\frac {1}{3 . 1 2}\right) ^ {2}} \\ & \quad \times \left[ \frac {\sin^ {2} 3 . 1 2 \times 1 0 ^ {4} t}{3 . 1 2} + \sin 6. 2 4 \times 1 0 ^ {4} t + 6. 2 4 \right] _ {t = 0} ^ {t - T} \\ & = - \frac {1 0 ^ {- 4}}{1 2 . 8} \mathrm{e} ^ {- 1 0 0 0 0 t} \times \left[ \frac {\sin^ {2} 3 . 1 2 \times 1 0 ^ {4} t}{3 . 1 2} + \sin 6. 2 4 \times 1 0 ^ {4} t + 6. 2 4 \right] _ {t = 0} ^ {t - 2. 0 1 4 \times 1 0 ^ {- 4}} \\ & = - \frac {1 0 ^ {- 4}}{1 2 . 8} \mathrm{e} ^ {- 2. 0 1 4} \left[ \frac {\sin^ {2} 6 . 2 8}{3 . 1 2} + \sin 1 2. 5 7 + 6. 2 4 \right] + \frac {1 0 ^ {- 4}}{1 2 . 8} \times 6. 2 4 (1 - \mathrm{e} ^ {- 2. 0 1 4}) \end{array}
$$

$$
= 4. 2 2 4 \times 1 0 ^ {- 5}\tag{16}
$$

所以

$$
W _ {1} = 1 6. 3 8 \times 4. 2 2 4 \times 1 0 ^ {- 5} = 6. 9 \times 1 0 ^ {- 4} (\mathrm{J})\tag{17}
$$

(3)在全部振荡时间内,变成焦耳热的能量为[参考式(16),令 $t=\infty$ ]

$$
\begin{array}{r l} W & = \int_ {0} ^ {\infty} I ^ {2} R \mathrm{d} t = 1 6. 3 8 \int_ {0} ^ {\infty} \mathrm{e} ^ {- 1 0 0 0 0 t} \sin^ {2} 3. 1 2 \times 1 0 ^ {- 4} t \mathrm{d} t \\ & = 1 6. 3 8 \times \frac {1 0 ^ {- 4}}{1 2 . 8} \times 6. 2 4 = 8. 0 \times 1 0 ^ {- 4} (\mathrm{J}) \end{array}\tag{18}
$$

开始时，电容器所储蓄的电能为

$$
\begin{array}{r l} W _ {e} & = \frac {1}{2} C U _ {0} ^ {2} = \frac {1}{2} \times 0. 0 1 0 \times 1 0 ^ {- 6} \times 4 0 0 ^ {2} \\ & = 8. 0 \times 1 0 ^ {- 4} (\mathrm{J}) \end{array}\tag{19}
$$

可见这电能最后全变成焦耳热了.

(4)为了使电路不发生振荡,设所需串联的电阻为 $R'$ ,则由式(7)中的 $\beta$ 为实得

$$
(R + R ^ {\prime}) ^ {2} \geqslant 4 \frac {L}{C}\tag{20}
$$

所以

$$
\begin{array}{r l} R ^ {\prime} & = 2 \sqrt {\frac {L}{C}} - R = 2 \times \sqrt {\frac {0 . 1 0}{0 . 0 1 0 \times 1 0 ^ {- 6}}} - 1 0 0 0 \\ & = (2 \sqrt {1 0} - 1) \times 1 0 ^ {3} = 5. 3 \times 1 0 ^ {3} (\Omega) \end{array}\tag{21}
$$

【讨论】题目所给数据只有两位有效数字,故计算结果只能取两位有效数字.由于计算比较复杂,为了保证计算结果的两位有效数字的准确性,在计算过程中就多取了一位甚至两位有效数字.

10.33 两电容 $C_1$ 和 $C_2$ , 各有一极板接地. 开始时, $C_1$ 上有电荷量 $Q_0, C_2$ 不带电, 它们与已知的电阻 $R$ 和自感 $L$ 联接如图 10.33 所示. 在 $t = 0$ 时接通开关 K. 试证明: 若 $R^2 = 4L \left( \frac{1}{C_1} + \frac{1}{C_2} \right)$ , 则在 $t = 2L / R$ 时刻通过 $R$ 的电流为极大, 其值为 $I_m = \frac{2Q_0}{\mathrm{e}RC_1}$ , 式中 e 是自然对数的底.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/ae34db88041f5689e78d46811ecf78c075167c68a1c97f0824425059c54cd6dd.jpg)


【证】K接通后,电路方程为


图10.33


$$
I R - \varepsilon_ {L} + U _ {C _ {2}} - U _ {C _ {1}} = 0\tag{1}
$$

因为

$$
\varepsilon_ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

$$
U _ {C _ {2}} = \frac {Q _ {2}}{C _ {2}}\tag{3}
$$

$$
U _ {C _ {1}} = \frac {Q _ {1}}{C _ {1}}\tag{4}
$$

$$
\frac {\mathrm{d} Q _ {2}}{\mathrm{d} t} = I \quad (\text { 因为 } C _ {2} \text { 充电 })\tag{5}
$$

$$
\frac {\mathrm{d} Q _ {1}}{\mathrm{d} t} = - I \quad (\text { 因为 } C _ {1} \text { 放电 })\tag{6}
$$

所以

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R I + \frac {Q _ {2}}{C _ {2}} - \frac {Q _ {1}}{C _ {1}} = 0\tag{7}
$$

$$
L \frac {\mathrm{d} ^ {2} I}{\mathrm{d} t ^ {2}} + R \frac {\mathrm{d} I}{\mathrm{d} t} + \left(\frac {1}{C _ {1}} + \frac {1}{C _ {2}}\right) I = 0\tag{8}
$$

这个方程的特征方程的两个根为

$$
D _ {1, 2} = - \frac {R}{2 L} \pm \sqrt {\frac {R ^ {2}}{4 L ^ {2}} - \frac {1}{L} \left(\frac {1}{C _ {1}} + \frac {1}{C _ {2}}\right)}\tag{9}
$$

题给出条件：

$$
R ^ {2} = 4 L \left(\frac {1}{C _ {1}} + \frac {1}{C _ {2}}\right)\tag{10}
$$

故特征方程的两根相等,即

$$
D _ {1} = D _ {2} = - \frac {R}{2 L}\tag{11}
$$

于是得式(8)的解为

$$
I = (a t + b) \mathrm{e} ^ {- \frac {R}{2 L} t}\tag{12}
$$

式中 $a$ 和 $b$ 都是积分常数. 因初始条件有

$$
t = 0 \text {时}, I = 0\tag{13}
$$

故 $b = 0$ ，于是得

$$
I = a t \mathrm{e} ^ {- \frac {R}{2 L} t}\tag{14}
$$

由式(14)得

$$
\frac {\mathrm{d} I}{\mathrm{d} t} = a (1 - \frac {R}{2 L} t) \mathrm{e} ^ {- \frac {R}{2 L} t}\tag{15}
$$

故知

$$
t = \frac {2 L}{R}\tag{16}
$$

时 I 有极值. 由式(15)得

$$
\frac {\mathrm{d} ^ {2} I}{\mathrm{d} t ^ {2}} = - \frac {R}{2 L} \mathrm{e} ^ {- \frac {R}{2 L} t} <   0\tag{17}
$$

故知 t=2L/R 时 I 有极大值 $I_{m}$ . 下面就求这个值.

由积分公式

$$
\int x \mathrm{e} ^ {a r} \mathrm{d} x = \frac {1}{a} x \mathrm{e} ^ {a r} - \frac {1}{a ^ {2}} \mathrm{e} ^ {a r} + C (\text { 积分常数 })\tag{18}
$$

和初始条件

$$
t = 0 \text {   时,   } Q _ {1 0} = Q _ {0}, Q _ {2 0} = 0\tag{19}
$$

将式(14)代入式(6)积分得

$$
Q _ {1} = a \left(\frac {2 L}{R} t \mathrm{e} ^ {- \frac {R}{2 L} t} + \frac {4 L ^ {2}}{R ^ {2}} \mathrm{e} ^ {- \frac {R}{2 L} t}\right) + C\tag{20}
$$

$t = 0$ 时，

$$
Q _ {1 0} = a \frac {4 L ^ {2}}{R ^ {2}} + C = Q _ {0}\tag{21}
$$

$t = \infty$ 时，

$$
Q _ {1 \infty} = C\tag{22}
$$

将式(14)代入式(5)积分得

$$
Q _ {2} = - a \left(\frac {2 L}{R} t \mathrm{e} ^ {- \frac {R}{2 L} t} + \frac {4 L ^ {2}}{R ^ {2}} \mathrm{e} ^ {- \frac {R}{2 L} t}\right) + C ^ {\prime} (\text {积分常数})\tag{23}
$$

$t = 0$ 时，

$$
Q _ {2 0} = - a \frac {4 L ^ {2}}{R ^ {2}} + C ^ {\prime} = 0\tag{24}
$$

$t = \infty$ 时，

$$
Q _ {2 \infty} = C ^ {\prime}\tag{25}
$$

因 $t = \infty$ 时，

$$
U _ {1 \infty} = \frac {Q _ {1 \infty}}{C _ {1}} = U _ {2 \infty} = \frac {Q _ {2 \infty}}{C _ {2}}\tag{26}
$$

由式(22)、(25)和(26)得

$$
\frac {C}{C _ {1}} = \frac {C ^ {\prime}}{C _ {2}}\tag{27}
$$

由式(21)、(24)和(27)得

$$
a = \frac {R ^ {2} C _ {2} Q _ {0}}{4 L ^ {2} (C _ {1} + C _ {2})}\tag{28}
$$

将式(10)代入式(28)得

$$
a = \frac {Q _ {0}}{L C _ {1}}\tag{29}
$$

将式(16)、(29)代入式(14)便得所求的 $I_{m}$ 为

$$
I _ {m} = \frac {2 Q _ {0}}{\mathrm{e} R C _ {1}}\tag{30}
$$

10.34 电阻 R、电感 L 和电容 C 串联电路的谐振角频率为 $\omega_{0}$ ，R 和 L 串联电路的时间常数为 $\tau_{RL}$ ，R 和 C 串联电路的时间常数为 $\tau_{RC}$ 。试求 $\omega_{0}$ 、 $\tau_{RL}$ 和 $\tau_{RC}$ 三者间的关系。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/4c82a46ef73fe2bd1acf4bde94d0f37481873c51be098f22a8be496c0c0b34b0.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/b71ccf9f01996de5179c579fad28d9a10abd1f692d1ff755d61defa5c97d7923.jpg)



图10.34(1)



图 10.34(2)


【解】R 和 L 串联电路如图 10.34(1)，电路方程为

$$
I R - \varepsilon_ {L} = 0\tag{1}
$$

因为

$$
\mathcal {E} _ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

所以

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R I = 0\tag{3}
$$

设 t=0 时电流为 $I_{0}$ ，解式(3)得

$$
I = I _ {0} \mathrm{e} ^ {- \frac {R}{L} t}\tag{4}
$$

故得 RL 串联电路的时间常数为

$$
\tau_ {R L} = \frac {L}{R}\tag{5}
$$

R 和 C 串联电路如图 10.34(2)，电路方程为

$$
I R - U _ {C} = 0\tag{6}
$$

因为

$$
U _ {C} = \frac {Q}{C}\tag{7}
$$

$$
I = - \frac {\mathrm{d} Q}{\mathrm{d} t} (C \text {放电})\tag{8}
$$

所以

$$
R \frac {\mathrm{d} Q}{\mathrm{d} t} + \frac {Q}{C} = 0\tag{9}
$$

设 t=0 时 C 上的电荷量为 $Q_{0}$ ，解式(8)得

$$
Q = Q _ {0} \mathrm{e} ^ {- \frac {t}{R C}}\tag{10}
$$

故得 RC 串联电路的时间常数为

$$
\tau_ {R C} = R C\tag{11}
$$

R、L、C 串联电路的谐振角频率为

$$
\omega_ {0} = \frac {1}{\sqrt {L C}}\tag{12}
$$

由式(5)、(11)和(12)得所求的关系为

$$
\omega_ {0} ^ {2} \tau_ {R L} \tau_ {R C} = 1\tag{13}
$$

10.35 一 RLC 串联电路, 开始时电容 C 带有电荷量 $Q_{0}$ , 如图 10.35(1) 所示. 接通开关 K 后, C 便经过 RL 放电. 因 $R < 2\sqrt{L/C}$ , 电流发生振荡. 试求一个周期里损失的能量 $\Delta\overline{W}$ 与该周期开始时电路里所储存的能量 $\overline{W}$ 之比 $\Delta\overline{W}/\overline{W}$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/5e5099a1ab11c0dac8ad77a498ec677dcae8b95511728f55bfc0fd5a18813f54.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/5404e6dad323e40177a74b38a990df8d7c6f6e239a486086511999dc24de491a.jpg)



图10.35(1)



图10.35(2)


【解】K接通后,电路如图10.35(2)所示,电路方程为

$$
I R - \xi_ {L} - \frac {Q}{C} = 0\tag{1}
$$

因为

$$
\epsilon_ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

$$
I = - \frac {\mathrm{d} Q}{\mathrm{d} t} (C \text {放电})\tag{3}
$$

所以

$$
L \frac {\mathrm{d} ^ {2} Q}{\mathrm{d} t ^ {2}} + R \frac {\mathrm{d} Q}{\mathrm{d} t} + \frac {Q}{C} = 0\tag{4}
$$

特征方程的两个根为

$$
D _ {1, 2} = - \frac {R}{2 L} \pm \sqrt {\frac {R ^ {2}}{4 L ^ {2}} - \frac {1}{L C}}\tag{5}
$$

因为

$$
R <   2 \sqrt {L / C}\tag{6}
$$

故电流的振荡角频率为

$$
\omega = \sqrt {\frac {1}{L C} - \frac {R ^ {2}}{4 L ^ {2}}}\tag{7}
$$

振荡周期为

$$
T = \frac {2 \pi}{\omega} = \frac {2 \pi}{\sqrt {\frac {1}{L C} - \frac {R ^ {2}}{4 L ^ {2}}}}\tag{8}
$$

利用初始条件

$$
t = 0 \text {时}, I = 0, Q = Q _ {0}\tag{9}
$$

解式(4)得

$$
Q = Q _ {0} \mathrm{e} ^ {- \frac {R}{2 L} t} \left(\frac {R}{2 \omega L} \sin \omega t + \cos \omega t\right)\tag{10}
$$

由式(3)和(10)得

$$
I = \frac {Q _ {0}}{\omega L C} \mathrm{e} ^ {- \frac {R}{2 L} t} \sin \omega t\tag{11}
$$

取 $\omega t = n\pi, n$ 为整数，这时

$$
I = 0, \quad Q = \pm Q _ {0} \mathrm{e} ^ {- \frac {R}{2 L} t}\tag{12}
$$

电路中所储存的能量为

$$
W = \frac {1}{2} L I ^ {2} + \frac {1}{2} \frac {Q ^ {2}}{C} = \frac {Q ^ {2}}{2 C} = \frac {Q _ {0} ^ {2}}{2 C} \mathrm{e} ^ {- \frac {R}{L t}}\tag{13}
$$

…周期后， $\omega(t+T)=\omega t+2\pi=(n+2)\pi$ ，便有

$$
I ^ {\prime} = 0, \quad Q ^ {\prime} = \pm Q _ {0} \mathrm{e} ^ {- \frac {R}{2 L ^ {\prime}}} \mathrm{e} ^ {- \frac {R}{2 L ^ {\prime}}}\tag{14}
$$

电路中所储存的能量为

$$
W ^ {\prime} = \frac {1}{2} L I ^ {\prime 2} + \frac {1}{2} \frac {Q ^ {\prime 2}}{C} = \frac {Q ^ {\prime 2}}{2 C}
$$

$$
= \frac {Q _ {0} ^ {2}}{2 C} \mathrm{e} ^ {- \frac {R}{L} t} \mathrm{e} ^ {- \frac {R}{L} T}\tag{15}
$$

于是得一个周期里损失的能量为

$$
\begin{array}{r l} \Delta W & = W - W ^ {\prime} - \frac {Q _ {0} ^ {2}}{2 C} \mathrm{e} ^ {- \frac {R}{L} t} (1 - \mathrm{e} ^ {- \frac {R}{L} T}) \\ & = W (1 - \mathrm{e} ^ {- \frac {R}{L} T}) \end{array}\tag{16}
$$

故所求的比值为

$$
\Delta W / W = 1 - \mathrm{e} ^ {- \frac {R}{L} T}\tag{17}
$$

【讨论】一、如果用一周期内电阻 R 上消耗的能量计算 $\Delta W$ ，所得结果与式(16)相同.

二、当 $\frac{R}{L} T = 2\pi \frac{R}{\omega L}\ll 1$ 时，

$$
1 - \mathrm{e} ^ {- \frac {R}{L} T} = 1 - \mathrm{e} ^ {- 2 \pi \frac {R}{\omega L}} \approx 2 \pi \frac {R}{\omega L}\tag{18}
$$

10.36 一电路如图 10.36(1)，接通开关 K 后，电容 C 经两条支路放电。设 Q 为 C 上的电荷量。试证明

$$
\begin{array}{l} R ^ {\prime} L \frac {\mathrm{d} ^ {3} Q}{\mathrm{d} t ^ {3}} + \left(R R ^ {\prime} + \frac {L}{C} + \frac {L}{C ^ {\prime}}\right) \frac {\mathrm{d} ^ {2} Q}{\mathrm{d} t ^ {2}} \\ + \left(\frac {R}{C} + \frac {R}{C ^ {\prime}} + \frac {R ^ {\prime}}{C}\right) \frac {\mathrm{d} Q}{\mathrm{d} t} + \frac {Q}{C C ^ {\prime}} = 0 \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/575f2d221a1a85722a2979e1637fa3c3ef7bf7c29458369c02444d7a4817dd5e.jpg)



图10.36(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/35bdc6fa062c283632fb11cd06afd464937b883401659eda65ebd643a1f37923.jpg)



图 10.36(2)


【证】K接通后,电路如图10.36(2),设通过R和 $R'$ 的电流分别为i和 $i'$ , $C'$ 上的电荷量为 $Q'$ ,则有

$$
L \frac {\mathrm{d} i}{\mathrm{d} t} + R i = \frac {Q}{C}\tag{1}
$$

$$
R ^ {\prime} i ^ {\prime} + \frac {Q ^ {\prime}}{C ^ {\prime}} = \frac {Q}{C}\tag{2}
$$

$$
I = i + i ^ {\prime} = - \frac {\mathrm{d} Q}{\mathrm{d} t} (C \text {放电})\tag{3}
$$

$$
i ^ {\prime} = \frac {\mathrm{d} Q ^ {\prime}}{\mathrm{d} t} (C ^ {\prime} \text {充电})\tag{4}
$$

将式(1)、(2)对时间 t 求导得

$$
L \frac {\mathrm{d} ^ {2} i}{\mathrm{d} t ^ {2}} + R \frac {\mathrm{d} i}{\mathrm{d} t} = \frac {1}{C} \frac {\mathrm{d} Q}{\mathrm{d} t}\tag{5}
$$

$$
R ^ {\prime} \frac {\mathrm{d} i ^ {\prime}}{\mathrm{d} t} + \frac {1}{C ^ {\prime}} i ^ {\prime} = \frac {1}{C} \frac {\mathrm{d} Q}{\mathrm{d} t}\tag{6}
$$

由式(6)得

$$
R ^ {\prime} \frac {\mathrm{d} ^ {2} i ^ {\prime}}{\mathrm{d} t ^ {2}} + \frac {1}{C ^ {\prime}} \frac {\mathrm{d} i ^ {\prime}}{\mathrm{d} t} = \frac {1}{C} \frac {\mathrm{d} ^ {2} Q}{\mathrm{d} t ^ {2}}\tag{7}
$$

由式(3)有

$$
\frac {\mathrm{d} ^ {2} i}{\mathrm{d} t ^ {2}} + \frac {\mathrm{d} ^ {2} i ^ {\prime}}{\mathrm{d} t ^ {2}} = - \frac {\mathrm{d} ^ {3} Q}{\mathrm{d} t ^ {3}}\tag{8}
$$

以 $R^{\prime}$ 乘式(5)加上 $L$ 乘式(7)，并利用式(8)，得

$$
- R ^ {\prime} L \frac {\mathrm{d} ^ {3} Q}{\mathrm{d} t ^ {3}} + R R ^ {\prime} \frac {\mathrm{d} i}{\mathrm{d} t} + \frac {L}{C ^ {\prime}} \frac {\mathrm{d} i ^ {\prime}}{\mathrm{d} t} - \frac {L}{C} \frac {\mathrm{d} ^ {2} Q}{\mathrm{d} t ^ {2}} - \frac {R ^ {\prime}}{C} \frac {\mathrm{d} Q}{\mathrm{d} t} = 0\tag{9}
$$

将式(3)代入式(6)消去 $i'$ 得

$$
R ^ {\prime} \frac {\mathrm{d} i ^ {\prime}}{\mathrm{d} t} - \frac {1}{C ^ {\prime}} i = \left(\frac {1}{C} + \frac {1}{C ^ {\prime}}\right) \frac {\mathrm{d} Q}{\mathrm{d} t}\tag{10}
$$

将式(1)代入式(10)得

$$
R R ^ {\prime} \frac {\mathrm{d} i ^ {\prime}}{\mathrm{d} t} + \frac {L}{C ^ {\prime}} \frac {\mathrm{d} i}{\mathrm{d} t} - \frac {Q}{C C ^ {\prime}} = \left(\frac {R}{C} + \frac {R}{C ^ {\prime}}\right) \frac {\mathrm{d} Q}{\mathrm{d} t}\tag{11}
$$

式(9)加式(11)并利用式(3)消去 $\frac{di}{dt}+\frac{di'}{dt}$ ，便得

$$
\begin{array}{l} R ^ {\prime} L \frac {\mathrm{d} ^ {3} Q}{\mathrm{d} t ^ {3}} + \left(R R ^ {\prime} + \frac {L}{C} + \frac {L}{C ^ {\prime}}\right) \frac {\mathrm{d} ^ {2} Q}{\mathrm{d} t ^ {2}} \\ + \left(\frac {R}{C} + \frac {R}{C ^ {\prime}} + \frac {R ^ {\prime}}{C}\right) \frac {\mathrm{d} Q}{\mathrm{d} t} + \frac {Q}{C C ^ {\prime}} = 0 \end{array}\tag{12}
$$

10.37 两线圈 $L_{1}$ 和 $L_{2}$ 的电阻分别为 $R_{1}$ 和 $R_{2}$ , 它们之间的互感为 $M$ ; 第一个线圈接在电动势为 $\varepsilon$ 的电源上 (电源的内阻可略去不计), 第二个线圈接在电阻为 $R_{g}$ 的电流计 G 上, 如图 10.37 所示. 电键 K 原先是接通的, 第一个线圈内电流已达到稳定. 设在 $t = 0$ 时断开 K, 试求流过电流计的电流 $I_{2}$ 和电荷量 Q.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/3aba782082e51d75ad53961c2b65e1b1babb9546a63c342bdaf0106221991735.jpg)


【解】 电路方程为


图10.37


$$
L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + M \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + R _ {1} I _ {1} = \varepsilon\tag{1}
$$

$$
L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + M \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + (R _ {2} + R _ {g}) I _ {2} = 0\tag{2}
$$

式中 $I_{1}$ 为第一个线圈中的电流.

以 $L_{1}$ 乘式(2)，减去 $M$ 乘式(1)，消去 $\frac{\mathrm{d}I_1}{\mathrm{d}t}$ 得

$$
\left(L _ {1} L _ {2} - M ^ {2}\right) \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} + L _ {1} \left(R _ {2} + R _ {g}\right) I _ {2} = M R _ {1} I _ {1} - M \delta\tag{3}
$$

对 t 求导, 然后利用式(2)消去 $\frac{dI_{1}}{dt}$ 得

$$
\left(L _ {1} L _ {2} - M ^ {2}\right) \frac {\mathrm{d} ^ {2} I _ {2}}{\mathrm{d} t ^ {2}} + \left[ L _ {1} \left(R _ {2} + R _ {g}\right) + L _ {2} R _ {1} \right] \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}
$$

$$
+ R _ {1} (R _ {2} + R _ {g}) I _ {2} = 0\tag{4}
$$

这个微分方程的特征方程为

$$
\left(L _ {1} L _ {2} - M ^ {2}\right) D ^ {2} + \left[ L _ {1} \left(R _ {2} + R _ {g}\right) + L _ {2} R _ {1} \right] D + R _ {1} \left(R _ {2} + R _ {g}\right) = 0\tag{5}
$$

它的两个根为

$$
D _ {1, 2} = - \alpha \pm \beta\tag{6}
$$

其中

$$
\alpha = \frac {L _ {1} \left(R _ {2} + R _ {\mathrm{g}}\right) + L _ {2} R _ {1}}{2 \left(L _ {1} L _ {2} - M ^ {2}\right)}\tag{7}
$$

$$
\beta = \sqrt {\left[ \frac {L _ {1} \left(R _ {2} + R _ {g}\right) + L _ {2} R _ {1}}{2 \left(L _ {1} L _ {2} - M ^ {2}\right)} \right] ^ {2} - \frac {R _ {1} \left(R _ {2} + R _ {g}\right)}{L _ {1} L _ {2} - M ^ {2}}}\tag{S}
$$

于是得式(5)的解为

$$
I _ {2} = C _ {1} \mathrm{e} ^ {(- \alpha + \beta) t} + C _ {2} \mathrm{e} ^ {- (\alpha + \beta) t}\tag{9}
$$

由初始条件

$$
t = 0 \text {   时,   } I _ {2} = 0\tag{10}
$$

得 $C_2 = -C_1$ ，故得

$$
I _ {2} = C _ {1} \left[ e ^ {(- \alpha + \beta) t} - e ^ {- (\alpha + \beta) t} \right]\tag{11}
$$

下面利用 $I_{1}$ 的初始条件定系数.为此,将 $I_{2}$ 对 t 求导得

$$
\frac {\mathrm{d} I _ {2}}{\mathrm{d} t} = C _ {1} \left[ (- \alpha + \beta) \mathrm{e} ^ {(- \alpha + \beta) t} + (\alpha + \beta) \mathrm{e} ^ {- (\alpha + \beta) t} \right]\tag{12}
$$

将式(11)和(12)代入式(2)得

$$
\begin{array}{r l} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} & = - \frac {L _ {2}}{M} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} - \frac {R _ {2} + R _ {g}}{M} I _ {2} \\ & = - \frac {C _ {1} L _ {2}}{M} [ (- \alpha + \beta) \mathrm{e} ^ {(- \alpha + \beta) t} + (\alpha + \beta) \mathrm{e} ^ {- (\alpha + \beta) t} ] \\ & - \frac {C _ {1} (R _ {2} + R _ {g})}{M} [ \mathrm{e} ^ {(- \alpha + \beta) t} - \mathrm{e} ^ {- (\alpha + \beta) t} ] \\ & = \frac {C _ {1}}{M} [ L _ {2} (\alpha - \beta) - R _ {2} - R _ {g} ] \mathrm{e} ^ {- (\alpha - \beta) t} \\ & - \frac {C _ {1}}{M} [ L _ {2} (\alpha + \beta) - R _ {2} - R _ {g} ] \mathrm{e} ^ {- (\alpha + \beta) t} \end{array}\tag{13}
$$

对 $t$ 积分得

$$
\begin{array}{r l} I _ {1} = & \frac {C _ {1}}{M} \left\{\left[ \frac {R _ {2} + R _ {\mathrm{g}} - L _ {2} (\alpha - \beta)}{\alpha - \beta} \right] \mathrm{e} ^ {(- \alpha + \beta) t} \right. \\ & \left. + \left[ \frac {- R _ {2} - R _ {\mathrm{g}} + L _ {2} (\alpha + \beta)}{\alpha + \beta} \right] \mathrm{e} ^ {- (\alpha + \beta) t} \right\} + C \end{array}\tag{14}
$$

因 $t = \infty$ 时， $I_{1} = 0$ ，故积分常数 $C = 0$ 。又

$$
t = 0 \text {时,} I _ {1} = \frac {\varepsilon}{R _ {1}}\tag{15}
$$

将式(15)代入式(14)得

$$
C _ {1} = \frac {\alpha^ {2} - \beta^ {2}}{2 \beta} \frac {M \delta}{R _ {1} (R _ {2} + R _ {g})}\tag{16}
$$

代入式(11)便得所求的电流为

$$
I _ {2} = \frac {\alpha^ {2} - \beta^ {2}}{2 \beta} \frac {M \xi}{R _ {1} (R _ {2} + R _ {g})} [ e ^ {(- \alpha + \beta) t} - e ^ {- (\alpha + \beta) t} ]\tag{17}
$$

所求的电荷量为

$$
\begin{array}{l} Q = \int_ {0} ^ {\infty} I _ {2} \mathrm{d} t = \frac {\alpha^ {2} - \beta^ {2}}{2 \beta} \frac {M \mathcal {E}}{R _ {1} (R _ {2} + R _ {g})} \int_ {0} ^ {\infty} [ \mathrm{e} ^ {(- \alpha + \beta) t} - \mathrm{e} ^ {- (\alpha + \beta) t} ] \mathrm{d} t \\ = \frac {\alpha^ {2} - \beta^ {2}}{2 \beta} \frac {M \mathcal {E}}{R _ {1} (R _ {2} + R _ {g})} \left[ \frac {\mathrm{e} ^ {(- \alpha + \beta) t}}{- \alpha + \beta} + \frac {\mathrm{e} ^ {- (\alpha + \beta)} t}{\alpha + \beta} \right] ^ {- t - \infty} \\ = \frac {\alpha^ {2} - \beta^ {2}}{2 \beta} \frac {M \mathcal {E}}{R _ {1} (R _ {2} + R _ {g})} \left[ \frac {1}{\alpha - \beta} - \frac {1}{\alpha + \beta} \right] \\ = \frac {M \mathcal {E}}{R _ {1} (R _ {2} + R _ {g})} \end{array}\tag{18}
$$

【讨论】Q 也可求出如下: K 断开时, 第二个线圈中的电动势为

$$
\mathcal {E} _ {2} = - L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} - M \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{19}
$$

所以

$$
\frac {\mathrm{d} Q}{\mathrm{d} t} = I _ {2} = \frac {\varepsilon_ {2}}{R _ {2} + R _ {g}} = - \frac {L _ {2}}{R _ {2} + R _ {g}} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} - \frac {M}{R _ {2} + R _ {g}} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{20}
$$

$$
\mathrm{d} Q = - \frac {L _ {2}}{R _ {2} + R _ {\mathrm{g}}} \mathrm{d} I _ {2} - \frac {M}{R _ {2} + R _ {\mathrm{g}}} \mathrm{d} I _ {1}\tag{21}
$$

积分便得

$$
Q = - \frac {L _ {2}}{R _ {2} + R _ {g}} \int_ {0} ^ {\infty} \mathrm{d} I _ {2} - \frac {M}{R _ {2} + R _ {g}} \int_ {\mathcal {E} / R _ {1}} ^ {\infty} \mathrm{d} I _ {1} = \frac {M \mathcal {E}}{R _ {1} (R _ {2} + R _ {g})}\tag{22}
$$

10.38 一质量为 $m$ 的物体，在弹性力 $-kx$ 、阻尼力 $-\alpha \frac{\mathrm{d}x}{\mathrm{d}t}$ 和策动力 $F_0 \cos \omega t$ 的作用下，在 $x$ 轴上振动；由于运动方程(微分方程)相似，可以用 $R, L, C$ 串联后加上交流电压 $\mathcal{E} = \mathcal{E}_0 \sin \omega t$ 来模拟它的运动。试求与质量 $m$ 、倔强系数 $k$ 、阻尼系数 $\alpha$ 、策动力的振幅 $F_0$ 、固有频率 $\omega_0$ 和品质因数等分别相对应的电学量。

【解】 $m$ 的运动方程为

$$
m \frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} = F _ {0} \cos \omega t - k x - \alpha \frac {\mathrm{d} x}{\mathrm{d} t}\tag{1}
$$

所以

$$
m \frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} + \alpha \frac {\mathrm{d} x}{\mathrm{d} t} + k x = F _ {0} \cos \omega t\tag{2}
$$

相应的电路方程为

$$
L \frac {\mathrm{d} ^ {2} I}{\mathrm{d} t ^ {2}} + R \frac {\mathrm{d} I}{\mathrm{d} t} + \frac {1}{C} I = \omega \dot {\varepsilon} _ {0} \cos \omega t\tag{3}
$$

对比式(2)和(3)便得相对应的量如下：

$$
m \sim L, \alpha \sim R, k \sim \frac {1}{C}, F _ {0} \sim \omega \varepsilon_ {0}
$$

固有频率 $\omega_0 = \sqrt{\frac{k}{m}}\sim \frac{1}{\sqrt{LC}}$ 

品质因数 $Q=\frac{\sqrt{km}}{\alpha}\sim\frac{1}{R}\sqrt{\frac{L}{C}}$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/9346d713d5fa0a48cb343b296662cc8ee73dfefcf4308fbef25da2fece3e6751.jpg)



图10.39


10.39 如图 10.39, 一平面线圈的面积为 S, 电阻为 R, 自感为 L, 在一个不变的均匀磁场(磁感强度为 B) 中, 从 t=0 时刻开始, 以匀角速度 $\omega$ 绕一固定轴旋转, 转轴与线圈共面, B 与转轴垂直, 且 t=0 时 B 与线圈的平面垂直. 试求 t 时刻线圈中的电流 I.

【解】通过线圈的磁通量为

$$
\Phi = B S \cos \omega t\tag{1}
$$

电路方程为

$$
L \frac {\mathrm{d} I}{\mathrm{d} t} + R I = \delta = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = B S \omega \sin \omega t\tag{2}
$$

这是一个非齐次的一阶微分方程,它的通解为

$$
I = C \mathrm{e} ^ {- \frac {R}{L ^ {t}}} + \frac {B S \omega}{L} \mathrm{e} ^ {- \frac {R}{L ^ {t}}} \int \mathrm{e} ^ {\frac {R}{L ^ {t}}} \sin \omega t \mathrm{d} t\tag{3}
$$

其中 $C$ 是积分常数. 利用积分公式

$$
\int \mathrm{e} ^ {a x} \sin b x \mathrm{d} x = \frac {\mathrm{e} ^ {a x}}{a ^ {2} + b ^ {2}} (a \sin b x - b \cos b x)\tag{4}
$$

得式(3)中的积分为

$$
\begin{array}{r l} \int \mathrm{e} ^ {R _ {t}} \sin \omega t \mathrm{d} t & = \frac {\mathrm{e} ^ {R _ {t}}}{(\frac {R}{L}) ^ {2} + \omega^ {2}} \left[ \frac {R}{L} \sin \omega t - \omega \cos \omega t \right] \\ & = \frac {L \mathrm{e} ^ {R _ {t}}}{R ^ {2} + \omega^ {2} L ^ {2}} [ R \sin \omega t - \omega L \cos \omega t ] \\ & = \frac {L \mathrm{e} ^ {R _ {t}}}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}} \sin \left(\omega t - \arctan \frac {\omega L}{R}\right) \end{array}\tag{5}
$$

代入式(3)得

$$
I = C \mathrm{e} ^ {- \frac {R}{L} t} + \frac {B S \omega}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}} \sin (\omega t - \arctan \frac {\omega L}{R})\tag{6}
$$

由初始条件

$$
t = 0 \text {时}, I = 0\tag{7}
$$

定积分常数为

$$
\begin{array}{r l} C & = \frac {B S \omega}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}} \sin (\arctan \frac {\omega L}{R}) \\ & = \frac {B S \omega}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}} \frac {\omega L}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}} \end{array}\tag{8}
$$

代入式(6)便得所求电流为

$$
I = \frac {B S \omega}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}} \left\{\left[ \frac {\omega L}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}} \right] e ^ {- \frac {R}{L} t} + \sin (\omega t - \arctan \frac {\omega L}{R}) \right\}\tag{9}
$$

其中 $\mathrm{e}^{-\frac{R}{L} t}$ 项是暂态过程，随着 $t\to \infty$ ，这一项便趋于零.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/d7b730dea693aeaa735e540d10205ca9871d39a99c3fc7af45b473daecb9c4d5.jpg)


## 第十一章 交流电

11.1 试由 $\omega$ 的单位: 秒 $^{-1}$ , $L$ 的单位: 亨利, $C$ 的单位: 法拉, 分别导出 $\omega L$ 、 $\frac{1}{\omega C} \sqrt{\frac{L}{C}}$ 等的单位.

【解】 $\omega L$ 的单位为

$$
\frac {1}{\mathrm{秒}} \cdot \mathrm{亨利} = \frac {1}{\mathrm{秒}} \cdot \frac {\mathrm{伏特} \cdot \mathrm{秒}}{\mathrm{安培}} - \mathrm{欧姆}
$$

$\frac{1}{\omega C}$ 的单位为

$$
\mathrm{秒} \cdot \frac {1}{\mathrm{法拉}} = \mathrm{秒} \cdot \frac {\mathrm{伏特}}{\mathrm{库伦}} = \frac {\mathrm{伏特}}{\mathrm{安培}} = \mathrm{欧姆}
$$

$\sqrt{\frac{L}{C}}$ 的单位为

$$
\sqrt {\frac {\text { 亨利 }}{\text { 法拉 }}} = \sqrt {\frac {\text { 伏特 } \cdot \text { 秒 }}{\text { 安培 }} \cdot \frac {\text { 伏特 }}{\text { 库伦 }}} = \frac {\text { 伏特 }}{\text { 安培 }} = \text { 欧姆 }
$$

11.2 一自感为 $L = 10\mathrm{H}$ , 一电容为 $C = 10\mu \mathrm{F}$ . (1) 试分别求频率为 $\nu = 50\mathrm{Hz}$ 和 $500\mathrm{Hz}$ 时它们的阻抗; (2) 在什么频率时它们的阻抗相等?

【解】（1） $\nu = 50\mathrm{Hz}$ 时，阻抗分别为

$$
\omega L = 2 \pi \times 5 0 \times 1 0 = 3. 1 \times 1 0 ^ {3} (\Omega)
$$

$$
\frac {1}{\omega C} = \frac {1}{2 \pi \times 5 0 \times 1 0 \times 1 0 ^ {- 6}} = 3. 2 \times 1 0 ^ {2} (\Omega)
$$

$\nu=500Hz$ 时, 阻抗分别为

$$
\omega L = 2 \pi \times 5 0 0 \times 1 0 = 3. 1 \times 1 0 ^ {4} (\Omega)
$$

$$
\frac {1}{\omega C} = \frac {1}{2 \pi \times 5 0 0 \times 1 0 \times 1 0 ^ {- 6}} = 3 2 (\Omega)
$$

(2)阻抗相等时,即 $\omega L=\frac{1}{\omega C}$ ,于是得

$$
\nu = \frac {1}{2 \pi \sqrt {L C}} = \frac {1}{2 \pi \times \sqrt {1 0 \times 1 0 \times 1 0 ^ {- 6}}} = 1 6 (\mathrm{Hz})
$$

11.3 自感为 $L = 31.8\mathrm{mH}$ 的线圈，其电阻可略去不计。当加上 $220\mathrm{V}, 50\mathrm{Hz}$ 的交流电压时，试求它的阻抗和通过它的电流。

【解】 阻抗为

$$
Z _ {L} = \omega L = 2 \pi \times 5 0 \times 3 1. 8 \times 1 0 ^ {- 3} = 1 0 (\Omega)
$$

通过它的电流为

$$
I = \frac {U}{Z _ {L}} = \frac {2 2 0}{1 0} = 2 2 (\mathrm{A})
$$

11.4 $C = 79.6\mu \mathrm{F}$ 的电容，接到 $220\mathrm{V},50\mathrm{Hz}$ 的交流电压上，试求它的阻抗和通过它的电流.

【解】 阻抗为

$$
Z _ {C} = \frac {1}{\omega C} = \frac {1}{2 \pi \times 5 0 \times 7 9 . 6 \times 1 0 ^ {- 6}} = 4 0 (\Omega)
$$

通过它的电流为

$$
I = \frac {U}{Z _ {\mathrm{C}}} = \frac {2 2 0}{4 0} = 5. 5 (\mathrm{A})
$$

11.5 在图 11.5 所示的十个电路中, R、L 和 C 都已知. 当用于角频率为 $\omega$ 的交流电路中时, 试分别求它们的阻抗 Z 和相角 $\varphi(\varphi = \varphi_{U} - \varphi_{I}, \quad \varphi_{U}$ 是该阻抗两端的电压的相位, $\varphi_{I}$ 是该阻抗中通过的电流的相位).

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/4f70fb0a10c101e9ba1830a2872483050fde9f85de33b9ecf7077232dd362a9d.jpg)



图11.5


【解】(1)RL 串联 复阻抗为

$$
\widetilde {Z} = R + \mathrm{j} \omega L = \sqrt {R ^ {2} + \omega^ {2} L ^ {2}} \mathrm{e} ^ {\mathrm{j} \arctan \left(\frac {\omega L}{R}\right)}\tag{1.1}
$$

阻抗和相角分别为

$$
Z = \sqrt {R ^ {2} + \omega^ {2} L ^ {2}}\tag{1.2}
$$

$$
\varphi = \arctan \left(\frac {\omega L}{R}\right)\tag{1.3}
$$

(2)RC 串联 复阻抗为

$$
\widetilde {Z} = R + \frac {1}{\mathrm{j} \omega C} = R - \mathrm{j} \frac {1}{\omega C} = \sqrt {R ^ {2} + \frac {1}{\omega^ {2} C ^ {2}}} \mathrm{e} ^ {- \mathrm{j} \arctan \left(\frac {1}{R _ {\mathrm{oC}}}\right)}\tag{2.1}
$$

阻抗和相角分别为

$$
Z = \sqrt {R ^ {2} + \frac {1}{\omega^ {2} C ^ {2}}}\tag{2.2}
$$

$$
\varphi = - \arctan \left(\frac {1}{R \omega C}\right)\tag{2.3}
$$

(3)LC 串联 复阻抗为

$$
\widetilde {Z} = \mathrm{j} \omega L + \frac {1}{\mathrm{j} \omega C} = \mathrm{j} \left(\omega L - \frac {1}{\omega C}\right) - \left(\omega L - \frac {1}{\omega C}\right) \mathrm{e} ^ {\mathrm{j} \frac {\pi}{2}}\tag{3.1}
$$

阻抗和相角分别为

$$
Z = \omega L - \frac {1}{\omega C}\tag{3.2}
$$

$$
\varphi = \frac {\pi}{2}\tag{3.3}
$$

若取

$$
Z = \left| \omega L - \frac {1}{\omega C} \right|\tag{3.4}
$$

则

$$
\varphi = \left\{ \begin{array}{l l} \frac {\pi}{2}, & \text {当} \omega L > \frac {1}{\omega C} \text {时} \\ - \frac {\pi}{2}, & \text {当} \omega L <   \frac {1}{\omega C} \text {时} \end{array} \right.\tag{3.5}
$$

(4)RLC 串联 复阻抗为

$$
\widetilde {Z} = R - \mathrm{j} \omega L + \frac {1}{\mathrm{j} \omega C} = \sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}} \mathrm{e} ^ {\mathrm{j} \arctan \left(\frac {\omega L - \frac {1}{\omega C}}{R}\right)}\tag{4.1}
$$

阻抗和相角分别为

$$
Z = \sqrt {R ^ {2} + (\omega L - \frac {1}{\omega C}) ^ {2}}\tag{4.2}
$$

$$
\varphi = \arctan \left(\frac {\omega L - \frac {1}{\omega C}}{R}\right)\tag{4.3}
$$

(5)RL 并联 复阻抗为

$$
\begin{array}{r l} \widetilde {Z} & = \frac {R \mathrm{j} \omega L}{R + \mathrm{j} \omega L} = \frac {\mathrm{j} R \omega L (R - \mathrm{j} \omega L)}{R ^ {2} + \omega^ {2} L ^ {2}} \\ & = \frac {R \omega L}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}} \mathrm{e} ^ {\mathrm{j} \arctan (\frac {R}{\omega L})} \end{array}\tag{5.1}
$$

阻抗和相角分别为

$$
Z = \frac {R \omega L}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}}\tag{5.2}
$$

$$
\varphi = \arctan \frac {R}{\omega L}\tag{5.3}
$$

(6)RC 并联 复阻抗为

$$
\widetilde {Z} = \frac {R \frac {1}{\mathrm{j} \omega C}}{R + \frac {1}{\mathrm{j} \omega C}} = \frac {R}{1 + \mathrm{j} R \omega C} = \frac {R}{\sqrt {1 + R ^ {2} \omega^ {2} C ^ {2}}} \mathrm{e} ^ {- \text {jarctata(RoC)}}\tag{6.1}
$$

阻抗和相角分别为

$$
Z = \frac {R}{\sqrt {1 + R ^ {2} \omega^ {2} C ^ {2}}}\tag{6.2}
$$

$$
\varphi = - \arctan R \omega C\tag{6.3}
$$

(7) LC 并联 复阻抗为

$$
\widetilde {Z} = \frac {\mathrm{j} \omega L \frac {1}{\mathrm{j} \omega C}}{\mathrm{j} \omega L + \frac {1}{\mathrm{j} \omega C}} = \frac {\mathrm{j} \omega L}{1 - \omega^ {2} L C} = \frac {\omega L}{1 - \omega^ {2} L C} \mathrm{e} ^ {\mathrm{j} \frac {\pi}{2}}\tag{7.1}
$$

阻抗和相角分别为

$$
Z = \frac {\omega L}{1 - \omega^ {2} L C}\tag{7.2}
$$

$$
\varphi = \frac {\pi}{2}\tag{7.3}
$$

若取

$$
Z = \frac {1}{\left| 1 - \omega^ {2} L C \right|}\tag{7.4}
$$

则

$$
\varphi = \left\{ \begin{array}{l l} \frac {\pi}{2}, & \text {当} \omega^ {2} L C <   1 \\ - \frac {\pi}{2}, & \text {当} \omega^ {2} L C > 1 \end{array} \right.\tag{7.5}
$$

(8) RLC 并联 复阻抗 $\tilde{Z}$ 满足

所以

$$
\begin{array}{l} \frac {1}{\widetilde {Z}} = \frac {1}{R} + \frac {1}{j \omega L} + j \omega C \\ \widetilde {Z} = \frac {R}{1 + j R (\omega C - \frac {1}{\omega L})} = \frac {R \omega L}{\omega L + j R (\omega^ {2} L C - 1)} \\ = \frac {R \omega L}{\sqrt {\omega^ {2} L ^ {2} + R ^ {2} (\omega^ {2} L C - 1) ^ {2}}} e ^ {j \arctan \left[ \frac {R (1 - \omega^ {2} L C)}{\omega L} \right]} \end{array}\tag{8.1}
$$

(8.2) 

阻抗和相角分别为

$$
\begin{array}{l} Z = \frac {R \omega L}{\sqrt {\omega^ {2} L ^ {2} + R ^ {2} (\omega^ {2} L C - 1) ^ {2}}} \\ \varphi = \arctan \left[ \frac {R (1 - \omega^ {2} L C)}{\omega L} \right] \end{array}\tag{8.3}
$$

(8.4) 

(9) RL 串联后与 C 并联 复阻抗 $\tilde{Z}$ 满足

$$
\begin{array}{r l} \frac {1}{\widetilde {Z}} & = \frac {1}{R + \mathrm{j} \omega L} + \mathrm{j} \omega C = \frac {R - \mathrm{j} \omega L}{R ^ {2} + \omega^ {2} L ^ {2}} + \mathrm{j} \omega C \\ & = \frac {R + \mathrm{j} [ \omega C (R ^ {2} + \omega^ {2} L ^ {2}) - \omega L ]}{R ^ {2} + \omega^ {2} L ^ {2}} \end{array}\tag{9.1}
$$

$$
\widetilde {Z} = \frac {R ^ {2} + \omega^ {2} L ^ {2}}{R + \mathrm{j} [ \omega C (R ^ {2} + \omega^ {2} L ^ {2}) - \omega L ]}
$$

所以

$$
\begin{array}{l} = \frac {R ^ {2} + \omega^ {2} L ^ {2}}{R ^ {2} + [ \omega C (R ^ {2} + \omega^ {2} L ^ {2}) - \omega L ] ^ {2}} \times \\ \left\{R - j [ \omega C (R ^ {2} + \omega^ {2} L ^ {2}) - \omega L ] \right\} \\ = \frac {R ^ {2} + \omega^ {2} L ^ {2}}{\sqrt {R ^ {2} + [ \omega C (R ^ {2} + \omega^ {2} L ^ {2}) - \omega L ] ^ {2}}} e ^ {\operatorname{jarctan} \left[ \frac {\omega L - \omega C (R ^ {2} + \omega^ {2} L ^ {2})}{R} \right]} \end{array}\tag{9.2}
$$

阻抗和相角分别为

$$
\begin{array}{r l} Z & = \frac {R ^ {2} + \omega^ {2} L ^ {2}}{\sqrt {R ^ {2} + [ \omega C (R ^ {2} + \omega^ {2} L ^ {2}) - \omega L ] ^ {2}}} \\ & = \sqrt {\frac {R ^ {2} + \omega^ {2} L ^ {2}}{R ^ {2} \omega^ {2} C ^ {2} + (1 - \omega^ {2} L C) ^ {2}}} \\ \varphi & = \arctan \left[ \frac {\omega L - \omega C (R ^ {2} + \omega^ {2} L ^ {2})}{R} \right] \end{array}\tag{9.3}
$$

(9.4) 

(10) RC 串联后与 L 并联 复阻抗 $\widetilde{Z}$ 满足

(10.1) 

所以

$$
\begin{array}{r l} \frac {1}{\widetilde {Z}} & = \frac {1}{R + \frac {1}{\mathrm{j} \omega C}} + \frac {1}{\mathrm{j} \omega L} = \frac {\mathrm{j} \omega C}{1 + \mathrm{j} \omega C R} - \frac {\mathrm{j}}{\omega L} \\ & = \frac {\omega C R - \mathrm{j} (1 - \omega^ {2} L C)}{\omega L (1 + \mathrm{j} \omega C R)} \\ \widetilde {Z} & = \frac {\omega L (1 + \mathrm{j} \omega C R)}{\omega C R - \mathrm{j} (1 - \omega^ {2} L C)} \\ & = \frac {\omega L (1 + \mathrm{j} \omega C R) [ \omega C R + \mathrm{j} (1 - \omega^ {2} L C) ]}{(\omega C R) ^ {2} + (1 - \omega^ {2} L C) ^ {2}} \\ & = \frac {\omega L}{(\omega C R) ^ {2} + (1 - \omega^ {2} L C) ^ {2}} \times \\ & [ \omega^ {3} L C ^ {2} R + \mathrm{j} (\omega^ {2} C ^ {2} R ^ {2} + 1 - \omega^ {2} L C) ] \\ & = \frac {\omega L}{(\omega C R) ^ {2} + (1 - \omega^ {2} L C) ^ {2}} \times \\ & \sqrt {(\omega^ {3} L C ^ {2} R) ^ {2} + (\omega^ {2} C ^ {2} R ^ {2} + 1 - \omega^ {2} L C) ^ {2}} \times \\ & e ^ {\text {jarctan} \left[ \frac {\omega^ {2} C ^ {2} R ^ {2} + 1 - \omega^ {2} L C}{\omega^ {3} L C ^ {2} R} \right]} \\ & = \omega L \sqrt {\frac {1 + \omega^ {2} C ^ {2} R ^ {2}}{(\omega C R) ^ {2} + (1 - \omega^ {2} L C) ^ {2}}} e ^ {\text {jarctan} \left[ \frac {\omega^ {2} C ^ {2} R ^ {2} + 1 - \omega^ {2} L C}{\omega^ {3} L C ^ {2} R} \right]} \end{array}
$$

阻抗和相角分别为

(10.) 

$$
Z = \omega L \sqrt {\frac {1 + \omega^ {2} C ^ {2} R ^ {2}}{(\omega C R) ^ {2} + (1 - \omega^ {2} L C) ^ {2}}}\tag{10.3}
$$

$$
\varphi = \arctan \left[ \frac {\omega^ {2} C ^ {2} R ^ {2} + 1 - \omega^ {2} L C}{\omega^ {3} L C ^ {2} R} \right]\tag{10.4}
$$

11.6 一个 $R$ 和 $L$ 串联电路, 接在电压为 $100\mathrm{V}$ 的交流电源上. (1) 一交流伏特计不论接在 $R$ 两端还是接在 $L$ 两端, 其读数都相等, 试问读数是多少? (2) 若改变 R 和 L 的大小, 使交流伏特计接在 L 两端时读数为 50V; 若将它接在 R 两端, 试问读数是多少?

【解】（1）因 R、L 串联，故

$$
U _ {R} = I R = \frac {U R}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}}\tag{1}
$$

$$
U _ {L} = I \omega L = \frac {U \omega L}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}}\tag{2}
$$

因为所以

$$
U _ {L} = U _ {R}\tag{3}
$$

$$
\omega L = R\tag{4}
$$

于是得

$$
U _ {L} = U _ {R} = \frac {U}{\sqrt {2}} = \frac {1 0 0}{\sqrt {2}} = 7 1 (\mathrm{V})\tag{5}
$$

(2)这时伏特计的读数为

$$
U _ {R} = \sqrt {U ^ {2} - U _ {L} ^ {2}} = \sqrt {1 0 0 ^ {2} - 5 0 ^ {2}} = 8 7 (\mathrm{V})\tag{6}
$$

11.7 如图 11.7, 输电干线的电压为 U = 220V, 频率为 $\nu = 50.0Hz$ , 用户的照明电路与抗流线圈串联后接在两干线间. 抗流线圈的自感为 L = 50.0mH, 其电阻为 $r = 1.0\Omega$ . (1) 当用户用电 I = 2.00A 时, 试问电灯两端的电压是多少? (2) 用户电路(包括抗流线圈)能得到的最大功率是多少? (3) 当用户发生短路时, 抗流线圈中消耗的功率是多少?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/4c7b549979953338850b0c888a730b1e1dbbd4ea5d966747fec9ee4cbb54d91c.jpg)


【解】（1）设电灯的电阻为 R，则通过电灯的电流为


图11.7


$$
\begin{array}{r l} I & = \frac {U}{\sqrt {(R + r) ^ {2} + \omega^ {2} L ^ {2}}} \\ & = \frac {2 2 0}{\sqrt {(R + 1 . 0 0) ^ {2} + (2 \pi \times 5 0 . 0 \times 5 0 . 0 \times 1 0 ^ {- 3}) ^ {2}}} \\ & = 2. 0 0 (\mathrm{A}) \end{array}\tag{1}
$$

所以

$$
\begin{array}{r l} R + 1 & = \sqrt {1 1 0 ^ {2} - (5 \pi) ^ {2}} = 1 0 9 \\ R & = 1 0 8 (\Omega) \end{array}
$$

电灯两端的电压为

(2) 

$$
U _ {R} = I R = 2. 0 0 \times 1 0 8 = 2 1 6 (\mathrm{V})\tag{3}
$$

(2)设用户的电阻为 $R_{C}$ ，则用户得到的功率为

$$
P = I U \cos \varphi = \frac {U ^ {2} (R _ {C} + r)}{(R _ {C} + r) ^ {2} + (\omega L) ^ {2}}\tag{4}
$$

令

$$
\frac {d P}{d R _ {\mathrm{C}}} = \frac {U ^ {2}}{(R _ {\mathrm{C}} + r) ^ {2} + (\omega L) ^ {2}} - \frac {2 U ^ {2} (R _ {\mathrm{C}} + r) ^ {2}}{\left[ (R _ {\mathrm{C}} + r) ^ {2} + (\omega L) ^ {2} \right] ^ {2}} = 0\tag{5}
$$

解得

$$
R _ {C} + r = \omega L\tag{6}
$$

于是得所求的最大功率为

$$
\begin{array}{r l} P _ {\max} & = \frac {U ^ {2} \omega L}{(\omega L) ^ {2} + (\omega L) ^ {2}} = \frac {U ^ {2}}{2 \omega L} = \frac {2 2 0 ^ {2}}{2 \times 2 \pi \times 5 0 . 0 \times 5 0 . 0 \times 1 0 ^ {- 3}} \\ & = 1. 5 4 \times 1 0 ^ {3} (\mathrm{W}) \end{array}\tag{7}
$$

这时用户的电阻为

$$
\begin{array}{r l} R _ {C} & = \omega L - r = 2 \pi \times 5 0. 0 \times 5 0. 0 \times 1 0 ^ {- 3} - 1. 0 0 \\ & = 1 4. 7 (\Omega) \end{array}\tag{8}
$$

(3)当用户发生短路时, $R_{C}=0$ ,抗流线圈中消耗的功率为

$$
\begin{array}{r l} P & = \frac {U ^ {2} r}{r ^ {2} + (\omega L) ^ {2}} = \frac {2 2 0 ^ {2} \times 1 . 0 0}{1 . 0 0 ^ {2} + (2 \pi \times 5 0 . 0 \times 5 0 . 0 \times 1 0 ^ {- 3}) ^ {2}} \\ & = 1 9 5 (\mathrm{W}) \end{array}\tag{9}
$$

由此可见，由于有抗流线圈，即使用户发生短路，消耗的功率也不很大。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/924856de1abd1314f07c0ab8d7d3217463d9e57a870f9df335bf7018f5ec695d.jpg)


11.8 — RC 串联电路, 接到 220V 50Hz 的交流电源上, 如图 11.8 所示. 现要求电流为 70mA, R 两端的电压为 8.0V, 试求 C 的值.

图11.8

【解】因

$$
R ^ {2} + \frac {1}{\omega^ {2} C ^ {2}} = \left(\frac {U}{I}\right) ^ {2} = \left(\frac {2 2 0}{7 0 \times 1 0 ^ {- 3}}\right) ^ {2} = \left(\frac {2 2}{7} \times 1 0 ^ {3}\right) ^ {2}\tag{1}
$$

$$
R = \frac {U _ {R}}{I} = \frac {8 . 0}{7 0 \times 1 0 ^ {- 3}} = \frac {8 0 0}{7}\tag{2}
$$

所以

$$
\frac {1}{\omega^ {2} C ^ {2}} = \left(\frac {2 2}{7} \times 1 0 ^ {3}\right) ^ {2} - \left(\frac {8 0 0}{7}\right) ^ {2}\tag{3}
$$

$$
\omega C = \frac {7}{1 0 0} \frac {1}{\sqrt {2 2 0 ^ {2} - 8 ^ {2}}} = 3. 1 8 \times 1 0 ^ {- 4}\tag{4}
$$

故得

$$
C = \frac {3 . 1 8 \times 1 0 ^ {- 4}}{2 \pi \times 5 0} = 1. 0 \times 1 0 ^ {- 6} (\mathrm{F}) = 1. 0 (\mu \mathrm{F})\tag{5}
$$

11.9 在某个频率下,电容 C 和电阻 R 的阻抗之比为 $Z_{C}:Z_{R}=3:4$ . 现将它们串联后加上该频率的交流电压 U=100V. (1) 试分别求它们两端的电压 $U_{R}$ 和 $U_{C}$ ; (2) 试求电流 I 与电压 U 之间的相位差 $\varphi$ .

【解】（1) $R$ 和 $C$ 串联的阻抗为

$$
Z = \sqrt {R ^ {2} + \frac {1}{\omega^ {2} C ^ {2}}} = \sqrt {R ^ {2} + \left(\frac {3}{4} R\right) ^ {2}} = \frac {5}{4} R\tag{1}
$$

故得

$$
U _ {R} = I R = \frac {U}{Z} R = \frac {1 0 0}{5 R / 4} \cdot R = 8 0 (\mathrm{V})\tag{2}
$$

$$
U _ {C} = I Z _ {C} = \frac {3}{4} I R = \frac {3}{4} \times 8 0 = 6 0 (\mathrm{V})\tag{3}
$$

(2) $I$ 与 $U$ 的相位差为[参见前面11.5题的式(2.3)]

$$
\begin{array}{r l} \varphi & = \varphi_ {U} - \varphi_ {I} = - \arctan \left(\frac {1}{\omega C R}\right) = - \arctan \left(\frac {Z _ {C}}{R}\right) \\ & = - \arctan \frac {3}{4} = - 3 7 ^ {\circ} \end{array}\tag{4}
$$

其中负号表示电流超前.

11.10 图 11.10 是一个 LC 滤波器, 已知频率 $\nu = 100Hz, C = 10\mu F$ . 现在要使输出的交流电压 $U_{2}$ 等于输入的交流电压 $U_{1}$ 的十分之一, 试求 L 的值.

【解】由

$$
U _ {2} = \frac {U _ {1}}{\omega L - \frac {1}{\omega C}} \cdot \frac {1}{\omega C} = \frac {U _ {1}}{\omega^ {2} L C - 1}
$$

得

$$
\omega^ {2} L C - 1 = \frac {U _ {1}}{U _ {2}} = 1 0
$$

解得

$$
L = \frac {1 0 + 1}{\omega^ {2} C} = \frac {1 1}{(2 \pi \times 1 0 0) ^ {2} \times 1 0 \times 1 0 ^ {- 6}} = 2. 8 (\mathrm{H})
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/a2a67490c87d2faf8b9a536703c0e4a9a8d7fe036b0e5e8c4879dc179e4793c7.jpg)



图11.10


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/42640c81d319427a549ba274901dd1b145319c1bbbeaed228687d6bc0d2f5767.jpg)



图11.11


11.11 如图 11.11, 已知 C=300pF, 谐振频率 $\nu=1.0MHz$ . (1) 试求 L 的值; (2) 若 L 是一螺线管, 横截面的直径为 d=2.0cm, 相邻两匝间的距离为 0.50mm, 试求匝数 N.

【解】(1) $L$ 的值为

$$
\begin{array}{r l} L & = \frac {1}{\omega^ {2} C} = \frac {1}{(2 \pi \times 1 . 0 \times 1 0 ^ {6}) ^ {2} \times 3 0 0 \times 1 0 ^ {- 1 2}} \\ & = 8. 4 \times 1 0 ^ {- 5} (\text {亨}) \end{array}
$$

(2)由螺线管的自感公式

$$
L = \mu_ {0} n ^ {2} V = \mu_ {0} n N \cdot \pi \left(\frac {d}{2}\right) ^ {2}
$$

得所求匝数为

$$
N = \frac {4 L}{\mu_ {0} n \cdot \pi d ^ {2}}
$$

$$
\begin{array}{r l} & = \frac {4 \times 8 . 4 \times 1 0 ^ {- 5}}{4 \pi \times 1 0 ^ {- 7} \times \left(\frac {1}{0 . 5 0 \times 1 0 ^ {- 3}}\right) \times \pi \times (2 . 0 \times 1 0 ^ {- 2}) ^ {2}} \\ & = 1. 1 \times 1 0 ^ {2} \end{array}
$$

11.12 一交流电路如图 11.12, 已知 $R = 20\Omega$ , 三个伏特计 $\mathbf{V}_1$ 的读数为 $U_1 = 44\mathrm{V}, \mathrm{V}_2$ 的读数为 $U_2 = 91\mathrm{V}, \mathrm{V}$ 的读数为 $U = 120\mathrm{V}$ . 试求元件 $Z$ 消耗的功率.

【解】设元件 $Z$ 的复阻抗为

$$
\widetilde {Z} = r + j X\tag{1}
$$

则有

$$
\frac {U}{\sqrt {(R + r) ^ {2} + X ^ {2}}} = I = \frac {U _ {1}}{R}\tag{2}
$$

所以

$$
(R + r) ^ {2} + X ^ {2} = \left(\frac {R U}{U _ {1}}\right) ^ {2}\tag{3}
$$

因为

$$
\frac {U _ {2}}{\sqrt {r ^ {2} + X ^ {2}}} = I\tag{4}
$$

所以

$$
r ^ {2} + X ^ {2} = \left(\frac {U _ {2}}{I}\right) ^ {2} = \left(\frac {R U _ {2}}{U _ {1}}\right) ^ {2}\tag{5}
$$

式(3)减式(5)得

$$
2 R r = \left(\frac {R U}{U _ {1}}\right) ^ {2} - \left(\frac {R U _ {2}}{U _ {1}}\right) ^ {2} - R ^ {2}\tag{6}
$$

所以

$$
\begin{array}{r l} r & = \frac {R}{2} \left[ \left(\frac {U}{U _ {1}}\right) ^ {2} - \left(\frac {U _ {2}}{U _ {1}}\right) ^ {2} - 1 \right] \\ & = \frac {2 0}{2} \left[ \left(\frac {1 2 0}{4 4}\right) ^ {2} - \left(\frac {9 1}{4 4}\right) ^ {2} - 1 \right] = 2 1. 6 (\Omega) \end{array}\tag{7}
$$

于是得 $Z$ 消耗的功率为

$$
P = I ^ {2} r = \left(\frac {U _ {1}}{R}\right) ^ {2} r = \left(\frac {4 4}{2 0}\right) ^ {2} \times 2 1. 6 = 1. 0 \times 1 0 ^ {2} (\mathrm{W})\tag{8}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/b9ada0a8c830e3343116974f99f37085a35c09fe3bf1d9e7b47ec6952e8ad57d.jpg)



图11.12


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/ff3cf6b907c9e4c716e63fce185ab1041f95936576d5169e77bf80e28708ba66.jpg)



图11.13


11.13 一个 $110\mathrm{V}, 50\mathrm{Hz}$ 的交流电源, 向一负载 $Z$ 供电 $330\mathrm{W}$ , 负载的功率因数为 0.60, 电流的相位落后于电压. (1) 若在电路中串入一个电容 $C$ , 如图 11.13, 将功率因数提高到 1, 试求 $C$ 的值; (2) 这时电源供给的功率是多少?

【解】（1）因电流的相位落后，故 Z 是电感性的阻抗，设

$$
Z = \sqrt {R ^ {2} + X ^ {2}}\tag{1}
$$

则由

$$
\cos \varphi = \frac {R}{\sqrt {R ^ {2} + X ^ {2}}} = 0. 6 0\tag{2}
$$

解得

$$
X = \frac {4}{3} R\tag{3}
$$

因为

$$
P = I U \cos \varphi = I ^ {2} R\tag{4}
$$

所以

$$
R = \frac {(U \cos \varphi) ^ {2}}{P} = \frac {(1 1 0 \times 0 . 6 0) ^ {2}}{3 3 0} = 1 3. 2 (\Omega)\tag{5}
$$

所以

$$
X = \frac {4}{3} \times 1 3. 2 = 1 7. 6 (\Omega)
$$

串入电容 C 后, 使功率因数为 1, 即

$$
\frac {1}{\omega C} = X\tag{6}
$$

所以

$$
\begin{array}{r l} C & = \frac {1}{\omega X} = \frac {1}{2 \pi \times 5 0 \times 1 7 . 6} = 1. 8 \times 1 0 ^ {- 4} (\mathrm{F}) \\ & = 1. 8 \times 1 0 ^ {2} (\mu \mathrm{F}) \end{array}\tag{7}
$$

(2)这时电源供给的功率为

$$
P ^ {\prime} = I ^ {2} R = \frac {U ^ {2}}{R} = \frac {1 1 0 ^ {2}}{1 3 . 2} = 9. 2 \times 1 0 ^ {2} (\mathrm{W})\tag{8}
$$

11.14 有两个阻抗 $\widetilde{Z}_1 = R_1 + \mathrm{j}X_1$ 和 $\widetilde{Z}_2 = R_2 + \mathrm{j}X_2$ ，试证明：(1)当它们串联时，若通过它们的电流的有效值为 $I$ ，则它们消耗的功率便为 $P = I^2(R_1 + R_2)$ ；(2)当它们并联时，若通过它们的电流的有效值分别为 $I_1$ 和 $I_2$ ，则它们消耗的功率便为 $P' = I_1^2R_1 + I_2^2R_2$ .

【证】一个阻抗为

$$
\widetilde {Z} = R + \mathrm{j} X\tag{1}
$$

的电路所消耗的功率(对时间的平均功率)为

$$
P = I U \cos \varphi\tag{2}
$$

式中 $U$ 是加在 $\widetilde{Z}$ 两端的电压的有效值， $I$ 是通过 $\widetilde{Z}$ 的电流的有效值， $\cos \varphi$ 是功率因数。因

$$
I = \frac {U}{\sqrt {R ^ {2} + X ^ {2}}}\tag{3}
$$

$$
\cos \varphi = \frac {R}{\sqrt {R ^ {2} + X ^ {2}}}\tag{4}
$$

故代入式(2)便得

$$
P = I ^ {2} R\tag{5}
$$

(1) $\widetilde{Z}_{1}$ 和 $\widetilde{Z}_{2}$ 串联时，电路的电阻为 $R_{1} + R_{2}$ ，故由式(5)得它们所消耗的功率为

$$
P = I ^ {2} (R _ {1} + R _ {2})\tag{6}
$$

(2) $\widetilde{Z}_{1}$ 和 $\widetilde{Z}_{2}$ 并联时，由式(5)得，每条支路消耗的功率分别为

$$
P _ {1} = I _ {1} ^ {2} R _ {1}, \quad P _ {2} = I _ {2} ^ {2} R _ {2}\tag{7}
$$

故总的功率消耗便为

$$
P ^ {\prime} = P _ {1} + P _ {2} = I _ {1} ^ {2} R _ {1} + I _ {2} ^ {2} R _ {2}\tag{8}
$$

11.15 对于一个给定的交流电源来说,它的电动势和内阻抗都是一定的,设它的内阻抗为 $\widetilde{Z}_{i}=X+jY$ ,试证明:当负载的阻抗 $\widetilde{Z}$ 等于 $\widetilde{Z}_{i}$ 的共轭复数(即 $\widetilde{Z}=X-jY$ ,如图 11.15)时,电源输送到负载上的功率为最大.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/64db51a595c67c4e0721ab7caf62ad4773f7c46959c74dd33d721c960361bd4a.jpg)



图11.15


【证】设电源的电动势为 $\widetilde{\tau}$ ，负载的阻抗为

$$
\tilde {Z} = x + j y\tag{1}
$$

则负载消耗的功率为

$$
P = I U \cos \varphi = I ^ {2} x = \frac {\ell^ {2} x}{(X + x) ^ {2} + (Y + y) ^ {2}}\tag{2}
$$

由式(2)得

$$
\begin{array}{r l} \frac {\partial P}{\partial x} & = \frac {e ^ {2}}{(X + x) ^ {2} + (Y + y) ^ {2}} - \frac {2 e ^ {2} x (X + x)}{[ (X + x) ^ {2} + (Y + y) ^ {2} ] ^ {2}} \\ & = \frac {e ^ {2} [ X ^ {2} - x ^ {2} + (Y + y) ^ {2} ]}{[ (X + x) ^ {2} + (Y + y) ^ {2} ] ^ {2}} \end{array} \tag {3}
$$

$$
\frac {\partial P}{\partial y} = - \frac {2 \varepsilon^ {2} x (Y + y)}{[ (X + x) ^ {2} + (Y + y) ^ {2} ] ^ {2}}\tag{4}
$$

再求导得

$$
\begin{array}{r l} \frac {\partial^ {2} P}{\partial x ^ {2}} & = - \frac {2 \delta^ {2} x}{[ (X + x) ^ {2} + (Y + y) ^ {2} ] ^ {2}} \\ & = - \frac {4 \delta^ {2} (X + x) [ X ^ {2} - x ^ {2} + (Y + y) ^ {2} ]}{[ (X + x) ^ {2} + (Y + y) ^ {2} ] ^ {3}} \\ & = - \frac {2 \delta^ {2} [ (X + x) ^ {2} (2 X - x) + (Y + y) ^ {2} (2 X + 3 x) ]}{[ (X + x) ^ {2} + (Y + y) ^ {2} ] ^ {3}} \end{array}\tag{5}
$$

$$
\begin{array}{r l} \frac {\partial^ {2} P}{\partial y ^ {2}} & = - \frac {2 \varepsilon^ {2} x}{[ (X + x) ^ {2} + (Y + y) ^ {2} ] ^ {2}} \\ & + \frac {8 \varepsilon^ {2} x (Y + y) ^ {2}}{[ (X + x) ^ {2} + (Y + y) ^ {2} ] ^ {3}} \\ & = \frac {2 \varepsilon^ {2} x [ 3 (Y + y) ^ {2} - (X + x) ^ {2} ]}{[ (X + x) ^ {2} + (Y + y) ^ {2} ] ^ {3}} \end{array}\tag{6}
$$

$$
\begin{array}{r l} \frac {\partial^ {2} P}{\partial x \partial y} & = - \frac {2 \varepsilon^ {2} (Y + y)}{\left[ (X + x) ^ {2} + (Y + y) ^ {2} \right] ^ {2}} \\ & + \frac {8 \varepsilon^ {2} x (Y + y) (X + x)}{\left[ (X + x) ^ {2} + (Y + y) ^ {2} \right] ^ {3}} \\ & = \frac {2 \varepsilon^ {2} (Y + y) \left[ (X + x) (3 x - X) - (Y + y) ^ {2} \right]}{\left[ (X + x) ^ {2} + (Y + y) ^ {2} \right] ^ {3}} \end{array}
$$

当

(7) 

$$
\frac {\partial P}{\partial x} = 0, \quad \frac {\partial P}{\partial y} = 0\tag{8}
$$

时，P 有极值. 由式(3)、(4)、(8)得

$$
x = X, \quad y = - Y\tag{9}
$$

将式(9)代入式(5)、(6)、(7)得,这时

$$
\frac {\partial^ {2} P}{\partial x ^ {2}} = - \frac {\varepsilon^ {2}}{8 X ^ {3}} <   0\tag{10}
$$

$$
\frac {\partial^ {2} P}{\partial y ^ {2}} = - \frac {\ell^ {2}}{8 X ^ {3}} <   0\tag{11}
$$

$$
\frac {\partial^ {2} P}{\partial x \partial y} = 0\tag{12}
$$

所以

$$
\frac {\partial^ {2} P}{\partial x ^ {2}} \frac {\partial^ {2} P}{\partial y ^ {2}} - \frac {\partial^ {2} P}{\partial x \partial y} = \frac {\varepsilon^ {4}}{6 4 X ^ {6}} > 0\tag{13}
$$

故知这时 P 的极值是极大值.

因 X 和 x 都大于零, 由式(4)可见,

$$
\begin{array}{r l} & y <   - Y \text {时,} \quad \frac {\partial P}{\partial y} > 0 \\ & y > - Y \text {时,} \quad \frac {\partial P}{\partial y} <   0 \end{array}\tag{14}
$$

故 $P$ 只在 $y = -Y$ 处有极大值. 又由式(3)可见, 在 $y = -Y$ 处,

$$
\begin{array}{r l} & x <   X \text {时,} \quad \frac {\partial P}{\partial x} > 0 \\ & x > X \text {时,} \quad \frac {\partial P}{\partial x} <   0 \end{array}\tag{15}
$$

故 $P$ 只在 $x = X$ 处有极大值. 因此, 在 $x = X$ 和 $y = -Y$ 处, $P$ 有最大值 $P_{\max}$ . 由式(2)得

$$
P _ {\max} = \frac {e ^ {2}}{4 X}\tag{16}
$$

【讨论】负载的阻抗等于电源阻抗的共轭复数时,称为匹配.参见前面4.2.51题的讨论.

11.16 在用复数法解交流电路问题时,电压 $\widetilde{U}$ 、电流 $\widetilde{I}$ 和阻抗 $\widetilde{Z}$ 都用复数表示.对任何一个阻抗 $\widetilde{Z}$ 来说,它两端的电压 $\widetilde{U}$ 可由通过它的电流 $\widetilde{I}$ ,用复数形式的欧姆定律 $\widetilde{U} = \widetilde{I}\widetilde{Z}$ 求出.但它所消耗的功率 P 却不能由 $\widetilde{I}\widetilde{U}$ 求出.试证明:用复数表示时,瞬时功率为

$$
P (t) = \frac {1}{4} (\widetilde {I} \widetilde {U} + \widetilde {I} ^ {*} \widetilde {U} + \widetilde {I} \widetilde {U} ^ {*} + \widetilde {I} ^ {*} \widetilde {U} ^ {*})
$$

平均功率为

$$
P = \frac {1}{4} (\widetilde {I} ^ {*} \widetilde {U} + \widetilde {I} \widetilde {U} ^ {*})
$$

式中 $\widetilde{I}^{*}$ 和 $\widetilde{U}^{*}$ 分别是 $\widetilde{I}$ 和 $\widetilde{U}$ 的共轭复数，它们的模都是相应量的峰值.

【证】设阻抗 $\widetilde{Z}$ 两端的电压为 $\widetilde{U}$ ，通过它的电流为 $\widetilde{I}$ ，则它的瞬时功率依定义为

$$
P (t) = (\operatorname{Re} \widetilde {I}) (\operatorname{Re} \widetilde {U})\tag{1}
$$

因为

$$
\operatorname{Re} \widetilde {I} = \frac {1}{2} (\widetilde {I} + \widetilde {I} ^ {*}), \quad \operatorname{Re} \widetilde {U} = \frac {1}{2} (\widetilde {U} + \widetilde {U} ^ {*})\tag{2}
$$

所以

$$
\begin{array}{r l} P (t) & = \frac {1}{4} (\widetilde {I} + \widetilde {I} ^ {*}) (\widetilde {U} + \widetilde {U} ^ {*}) \\ & = \frac {1}{4} (\widetilde {I} \widetilde {U} + \widetilde {I} ^ {*} \widetilde {U} + \widetilde {I} \widetilde {U} ^ {*} + \widetilde {I} ^ {*} \widetilde {U} ^ {*}) \end{array}\tag{3}
$$

平均功率的定义为

$$
P = \frac {1}{T} \int_ {0} ^ {T} P (t) \mathrm{d} t\tag{4}
$$

将式(3)代入式(4)得

$$
P = \frac {1}{4 T} \int_ {0} ^ {T} (\widetilde {I} \widetilde {U} + \widetilde {I} ^ {*} \widetilde {U} + \widetilde {I} \widetilde {U} ^ {*} + \widetilde {I} ^ {*} \widetilde {U} ^ {*}) \mathrm{d} t\tag{5}
$$

设

$$
\widetilde {I} = I _ {0} \mathrm{e} ^ {\mathrm{j} (\omega t - \varphi)}, \quad \widetilde {U} = U _ {0} \mathrm{e} ^ {\mathrm{j} \omega t}\tag{6}
$$

则

$$
\begin{array}{r l} \int_ {0} ^ {T} \widetilde {I} \widetilde {U} \mathrm{d} t & = I _ {0} U _ {0} \int_ {0} ^ {T} \mathrm{e} ^ {\mathrm{j} (2 \omega t - \varphi)} \mathrm{d} t = \frac {I _ {0} U _ {0} \mathrm{e} ^ {- \mathrm{j} \varphi}}{2 \mathrm{j} \omega} [ \mathrm{e} ^ {2 \mathrm{j} \omega t} ] _ {t = 0} ^ {t - T} \\ & = \frac {I _ {0} U _ {0} \mathrm{e} ^ {- \mathrm{j} \varphi}}{2 \mathrm{j} \omega} [ \mathrm{e} ^ {\mathrm{j} 4 \pi} - 1 ] = 0 \end{array}\tag{7}
$$

$$
\begin{array}{r l} \int_ {0} ^ {T} \widetilde {I} ^ {*} \widetilde {U} ^ {*} \mathrm{d} t & = I _ {0} U _ {0} \int_ {0} ^ {T} \mathrm{e} ^ {- \mathrm{j} (2 \omega t - \varphi)} \mathrm{d} t = \frac {I _ {0} U _ {0} \mathrm{e} ^ {\mathrm{j} \varphi}}{- 2 \mathrm{j} \omega} [ \mathrm{e} ^ {- 2 \mathrm{j} \omega t} ] _ {: = 0} ^ {: = T} \\ & = - \frac {I _ {0} U _ {0} \mathrm{e} ^ {\mathrm{j} \varphi}}{2 \mathrm{j} \omega} [ \mathrm{e} ^ {- \mathrm{j} 4 \pi} - 1 ] = 0 \end{array}\tag{8}
$$

$$
\begin{array}{r l} \frac {1}{T} \int_ {0} ^ {T} \widetilde {I} \widetilde {U} ^ {*} \mathrm{d} t & = \frac {1}{T} \int_ {0} ^ {T} I _ {0} U _ {0} \mathrm{e} ^ {- \mathrm{j} \varphi} \mathrm{d} t = I _ {0} U _ {0} \mathrm{e} ^ {- \mathrm{j} \varphi} \\ & = \widetilde {I} \widetilde {U} ^ {*} \end{array}\tag{9}
$$

$$
\begin{array}{r l} \frac {1}{T} \int_ {0} ^ {T} \widetilde {I} ^ {*} \widetilde {U} \mathrm{d} t & = \frac {1}{T} \int_ {0} ^ {T} I _ {0} U _ {0} \mathrm{e} ^ {\mathrm{j} \varphi} \mathrm{d} t = I _ {0} U _ {0} \mathrm{e} ^ {\mathrm{j} \varphi} \\ & = \widetilde {I} ^ {*} \widetilde {U} \end{array}\tag{10}
$$

将式(7)至(10)代入式(5)即得用复数表示的平均功率为

$$
P = \frac {1}{4} (\widetilde {I} ^ {*} \widetilde {U} + \widetilde {I} \widetilde {U} ^ {*})\tag{11}
$$

【讨论】 因

$$
\widetilde {I} \widetilde {U} ^ {*} = I _ {0} \mathrm{e} ^ {\mathrm{j} (\omega t - \varphi)} U _ {0} \mathrm{e} ^ {- \mathrm{j} \omega t} = I _ {0} U _ {0} \mathrm{e} ^ {- \mathrm{j} \varphi}\tag{12}
$$

$$
\widetilde {I} ^ {*} \widetilde {U} = I _ {0} \mathrm{e} ^ {- \mathrm{j} (\omega t - \varphi)} U _ {0} \mathrm{e} ^ {\mathrm{j} \omega t} = I _ {0} U _ {0} \mathrm{e} ^ {\mathrm{j} \varphi}\tag{13}
$$

所以

$$
\operatorname{Re} \left(\widetilde {I} \widetilde {U} ^ {*}\right) = \operatorname{Re} \left(\widetilde {I} ^ {*} \widetilde {U}\right) = I _ {0} U _ {0} \cos \varphi\tag{14}
$$

$$
\widetilde {I} \widetilde {U} ^ {*} + \widetilde {I} ^ {*} \widetilde {U} = 2 I _ {0} U _ {0} \cos \varphi\tag{15}
$$

故通常将平均功率表示为

$$
P = \frac {1}{2} \mathrm{Re} (\widetilde {I} \widetilde {U} ^ {*}) = \frac {1}{2} \mathrm{Re} (\widetilde {I} ^ {*} \widetilde {U})\tag{16}
$$

用实数表示即

$$
P = \frac {1}{2} I _ {0} U _ {0} \cos \varphi = I U \cos \varphi\tag{17}
$$

式中

$$
I = \frac {I _ {0}}{\sqrt {2}}, \quad U = \frac {U _ {0}}{\sqrt {2}}\tag{18}
$$

分别是电流和电压的有效值.

11.17 一 RLC 串联电路, 已知 $R = 400\Omega, L = 0.100\mathrm{H}, C = 0.500\mu \mathrm{F}$ . 试分别求频率为 $500\mathrm{Hz}$ 和 $1000\mathrm{Hz}$ 时的阻抗 $Z$ 和相角 $\varphi$ ; 试问加上电压后, 电流是落后还是超前?

【解】 $\nu = 500\mathrm{Hz}$ 时，复阻抗为

$$
\begin{array}{r l} \widetilde {Z} & = R + \mathrm{j} \left(\omega L - \frac {1}{\omega C}\right) \\ & = 4 0 0 + \mathrm{j} \left(2 \pi \times 5 0 0 \times 0. 1 0 0 - \frac {1}{2 \pi \times 5 0 0 \times 0 . 5 0 0 \times 1 0 ^ {- 6}}\right) \\ & = 4 0 0 - 3 2 2 \mathrm{j} \end{array}\tag{1}
$$

所以

$$
Z = \sqrt {4 0 0 ^ {2} + 3 2 2 ^ {2}} = 5 1 4 (\Omega)\tag{2}
$$

$$
\varphi = \varphi_ {U} - \varphi_ {I} = \arctan \left(\frac {- 3 2 2}{4 0 0}\right) = - 3 8 ^ {\circ} 5 0 ^ {\prime}\tag{3}
$$

负号表示电流超前.

$\nu=1000Hz$ 时, 复阻抗为

$$
\begin{array}{r l} \widetilde {Z} ^ {\prime} & = R + \mathrm{j} \left(\omega^ {\prime} L - \frac {1}{\omega^ {\prime} C}\right) \\ & = 4 0 0 + \mathrm{j} \left(2 \pi \times 1 0 0 0 \times 0. 1 0 0 - \frac {1}{2 \pi \times 1 0 0 0 \times 0 . 5 0 0 \times 1 0 ^ {- 6}}\right) \\ & = 4 0 0 + 3 1 0 j \end{array}\tag{4}
$$

所以

$$
Z ^ {\prime} = \sqrt {4 0 0 ^ {2} + 3 1 0 ^ {2}} = 5 0 6 (\Omega)\tag{5}
$$

$$
\varphi^ {\prime} = \varphi_ {U} ^ {\prime} - \varphi_ {I} ^ {\prime} = \arctan \left(\frac {3 1 0}{4 0 0}\right) = 3 7 ^ {\circ} 4 7 ^ {\prime}\tag{6}
$$

这时电流落后于电压.

11.18 一电路如图 11.18, 已知 $R_{1} = 6.0\Omega, R_{2} = R_{3} = 3.0\Omega$ ; 在 $\nu = 50\mathrm{Hz}$ 时, $X_{L} = 8.0\Omega, X_{C} = 3.0\Omega, U_{ab} = 130\mathrm{V}$ . 试求: (1) 电流 $I$ ; (2) $a$ 、 $c$ 两点间的电压 $U_{ac}$ ; (3) $c$ 、 $d$ 两点间的电压 $U_{cd}$ .

【解】(1) $a, b$ 间的阻抗为

$$
\begin{array}{r l} Z & = \sqrt {(R _ {1} + R _ {2} + R _ {3}) ^ {2} + (X _ {L} - X _ {t}) ^ {2}} \\ & = \sqrt {(6 . 0 + 3 . 0 + 3 . 0) ^ {2} + (8 . 0 - 3 . 0) ^ {2}} \\ & = 1 3 \Omega \end{array}\tag{1}
$$

所以

$$
I = \frac {U _ {a b}}{Z} = \frac {1 3 0}{1 3} = 1 0 (\mathrm{A})\tag{2}
$$

(2)a、c两点间的电压为

$$
U _ {a c} = I Z _ {a c} = 1 0 \sqrt {6 . 0 ^ {2} + 8 . 0 ^ {2}} = 1 0 0 (\mathrm{V})\tag{3}
$$

(3)c、d 两点间的电压为

$$
U _ {a d} = I Z _ {c d} = 1 0 \sqrt {3 . 0 ^ {2} + 3 . 0 ^ {2}} = 4 2 (\mathrm{V})\tag{4}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/43d74bf497da6ddc8d7fc1858d1fff733065e4e55b92db92a55057d065ab0466.jpg)



图11.18


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/a6517f9641d94df115d015926d080833354daa99ed838d24f20b1447f4d2ab50.jpg)



图11.19


11.19 — RLC 串联电路如图 11.19, 已知 $R = 300\Omega$ , $L = 250\mathrm{mH}$ , $C = 8.00\mu \mathrm{F}$ , A 是交流安培计, $\mathrm{V}_{1}, \mathrm{V}_{2}, \mathrm{V}_{3}, \mathrm{V}_{4}$ 和 V 都是交流伏特计. 现将 $a, b$ 两端分别接到市电 (220V、50Hz) 电源的两极上. (1) 试问 A、 $\mathrm{V}_{1}, \mathrm{V}_{2}, \mathrm{V}_{3}, \mathrm{V}_{4}$ 和 V 的读数各是多少? (2) 试求 $a, b$ 间消耗的功率.

【解】（1）先求阻抗

$$
\omega L = 2 \pi \times 5 0 \times 2 5 0 \times 1 0 ^ {- 3} = 7 8. 5 4 (\Omega)\tag{1}
$$

$$
\frac {1}{\omega C} = \frac {1}{2 \pi \times 5 0 \times 8 . 0 0 \times 1 0 ^ {- 6}} = 3 9 7. 9 (\Omega)\tag{2}
$$

$$
\begin{array}{r l} Z = \sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}} & = \sqrt {3 0 0 ^ {2} + (7 8 . 5 4 - 3 9 7 . 9) ^ {2}} \\ & = 4 3 8. 2 (\Omega) \end{array}\tag{3}
$$

各表读数如下：

$$
\mathrm{A:} \quad I = \frac {U}{Z} = \frac {2 2 0}{4 3 8 . 2} = 0. 5 0 2 (\mathrm{A})\tag{4}
$$

$$
\mathrm{V} _ {1}: U _ {R} = I R = 0. 5 0 2 \times 3 0 0 = 1 5 1 (\mathrm{V})\tag{5}
$$

$$
\mathrm{V} _ {2}: U _ {L} = I \omega L = 7 8. 5 4 \times 0. 5 0 2 = 3 9. 4 (\mathrm{V})\tag{6}
$$

$$
\mathrm{V} _ {3}: U _ {\mathrm{C}} = \frac {I}{\omega C} = 0. 5 0 2 \times 3 9 7. 9 = 2 0 0 (\mathrm{V})\tag{7}
$$

$$
\mathrm{V} _ {4}: U _ {L C} = I \left| \left(\omega L - \frac {1}{\omega C}\right) \right| = 0. 5 0 2 \times (3 9 7. 9 - 7 8. 5 4)
$$

$$
\begin{array}{r l} & = 1 6 0 (\mathrm{V}) \\ \mathrm{V:} & U = 2 2 0 (\mathrm{V}) \end{array}\tag{8}
$$

(9) 

(2) $a, b$ 间消耗的功率为

$$
P = I ^ {2} R = 0. 5 0 2 ^ {2} \times 3 0 0 = 7 5. 6 (\mathrm{W})\tag{10}
$$

11.20 一 RLC 串联如图 11.19(见前面 11.19 题), 已知 $R = 300\Omega, L = 250\mathrm{mH}, C = 8.00\mu \mathrm{F}$ , A 是交流安培计, $\mathrm{V}_{1}, \mathrm{V}_{2}, \mathrm{V}_{3}, \mathrm{V}_{4}$ 和 V 都是交流伏特计. 现将 $a, b$ 两端加上 $220\mathrm{V}$ 、频率 $\nu$ 可变的交流电压. 试问 $\nu$ 为什么值时发生谐振? 这时 A、 $\mathrm{V}_{1}, \mathrm{V}_{2}, \mathrm{V}_{3}, \mathrm{V}_{4}$ 和 V 的读数各是多少?

【解】 发生谐振的频率为

$$
\begin{array}{r l} & {\nu = \frac {1}{2 \pi \sqrt {L C}} = \frac {1}{2 \pi \times \sqrt {2 5 0 \times 1 0 ^ {- 3} \times 8 . 0 0 \times 1 0 ^ {- 6}}} = 1 1 3 (\mathrm{Hz})} \\ & {\text {这时各表的读数为}} \\ & {\mathrm{A:} I = \frac {U}{R} = \frac {2 2 0}{3 0 0} = 0. 7 3 3 (\mathrm{A})} \\ & {\mathrm{V} _ {1}: U _ {R} = I R = \frac {2 2 0}{3 0 0} \times 3 0 0 = 2 2 0 (\mathrm{V})} \\ & {\mathrm{V} _ {2}: U _ {L} = I \omega L = \frac {2 2 0}{3 0 0} \times 2 \pi \times 1 1 3 \times 2 5 0 \times 1 0 ^ {- 3} = 1 3 0 (\mathrm{V})} \\ & {\mathrm{V} _ {3}: U _ {C} = \frac {J}{\omega C} = \frac {2 2 0}{3 0 0} \times \frac {1}{2 \pi \times 1 1 3 \times 8 . 0 0 \times 1 0 ^ {- 6}} = 1 3 0 (\mathrm{V})} \\ & {\mathrm{V} _ {4}: U _ {L C} = I \left(\omega L - \frac {1}{\omega C}\right) = 0} \\ & {\mathrm{V}: U = 2 2 0 (\mathrm{V})} \end{array}
$$

11.21 一 RLC 串联电路, 已知 $R = 5.00\Omega, L = 636\mathrm{mH}, C = 159\mu \mathrm{F}$ . 现在它两端加上 $U = 311\mathrm{V}, 50.0\mathrm{Hz}$ 的交流电压, 试求电路中的电流 $I$ 、电流 $I$ 与电压 $U$ 的相位差 $\varphi$ 以及各元件上的电压.

【解】 $L$ 和 $C$ 的阻抗的值如下：

$$
\begin{array}{l} \omega L = 2 \pi \times 5 0. 0 \times 6 3 6 \times 1 0 ^ {- 3} = 1 9 9. 8 (\Omega) \\ \frac {1}{\omega C} = \frac {1}{2 \pi \times 5 0 . 0 \times 1 5 9 \times 1 0 ^ {- 6}} = 2 0. 0 (\Omega) \end{array}
$$

故 RLC 串联的阻抗为

$$
\begin{array}{r l} Z = & \sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}} = \sqrt {5 . 0 ^ {2} + (1 9 9 . 8 - 2 0 . 0) ^ {2}} \\ = & 1 7 9. 9 (\Omega) \end{array}
$$

于是得电流 $I$ 为

$$
I = \frac {3 1 1}{1 7 9 . 9} = 1. 7 3 (\mathrm{A})
$$

电流 I 与电压 U 的相位差为

$$
\varphi = \varphi_ {U} - \varphi_ {I} = \arctan \left(\frac {\omega L - \frac {1}{\omega C}}{R}\right) = \arctan \frac {1 9 9 . 8 - 2 0 . 0}{5 . 0}
$$

$$
= 8 8 ^ {\circ} 2 4 ^ {\prime}
$$

$\varphi>0$ , 故电流落后.

各元件上的电压为

$$
\begin{array}{r l} & U _ {R} = I R = 1. 7 3 \times 5. 0 = 8. 7 (\mathrm{V}) \\ & U _ {L} = I \omega L = 1. 7 3 \times 1 9 9. 8 = 3 4 6 (\mathrm{V}) \\ & U _ {C} = \frac {I}{\omega C} = 1. 7 3 \times 2 0 = 3 4. 6 (\mathrm{V}) \end{array}
$$

11.22 将已知的电阻 R、自感 L 和电容 C 串联后，接到一个恒压电源上，这电源的频率 $\nu$ 可以改变。(1)试求 L 两端电压最高时的频率 $\nu_{L}$ (用 R、L、C 等表示);(2)试求 C 两端电压最高时的频率 $\nu_{C}$ (用 R、L、C 等表示).

【解】(1) RLC 串联的阻抗为

$$
Z = \sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}}\tag{1}
$$

$L$ 两端的电压为

$$
U _ {L} = I \omega L = \frac {U \omega L}{\sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}}}\tag{2}
$$

由

$$
\begin{array}{r l} \frac {\mathrm{d} U _ {L}}{\mathrm{d} \omega} & = \frac {U L}{\sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}}} - \frac {U \omega L \left(\omega L - \frac {1}{\omega C}\right) \left(L + \frac {1}{\omega^ {2} C}\right)}{\left[ R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2} \right] ^ {3 / 2}} \\ & = \frac {U L \left[ R ^ {2} - \frac {2}{\omega C} \left(\omega L - \frac {1}{\omega C}\right) \right]}{\left[ R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2} \right] ^ {3 / 2}} = 0 \end{array}\tag{3}
$$

得

$$
R ^ {2} = \frac {2}{\omega C} \left(\omega L - \frac {1}{\omega C}\right)\tag{4}
$$

解得

$$
\omega_ {L} = \sqrt {\frac {2}{C (2 L - R ^ {2} C)}}\tag{5}
$$

故得所求的频率为

$$
\nu_ {L} = \frac {\omega_ {L}}{2 \pi} = \frac {1}{2 \pi} \sqrt {\frac {2}{C (2 L - R ^ {2} C)}}\tag{6}
$$

这时

$$
\frac {\mathrm{d} ^ {2} U _ {L}}{\mathrm{d} \omega^ {2}} = - \frac {4 U L}{\omega^ {3} C \left[ R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2} \right] ^ {3 / 2}} <   0\tag{7}
$$

故知这时 $U_{L}$ 有极大值.

(2) $C$ 两端的电压为

$$
U _ {C} = \frac {I}{\omega C} = \frac {U}{\omega C \sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}}}\tag{8}
$$

由

$$
\begin{array}{r l} \frac {\mathrm{d} U _ {C}}{\mathrm{d} \omega} & = - \frac {U}{\omega^ {2} C \sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}}} \\ & - \frac {U}{\omega C} \frac {\left(\omega L - \frac {1}{\omega C}\right) \left(L + \frac {1}{\omega^ {2} C}\right)}{\left[ R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2} \right] ^ {3 / 2}} \\ & = - \frac {U \left[ R ^ {2} + 2 \omega L \left(\omega L - \frac {1}{\omega C}\right) \right]}{\omega^ {2} C \left[ R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2} \right] ^ {3 / 2}} = 0 \end{array}\tag{9}
$$

得

$$
R ^ {2} + 2 \omega L \left(\omega L - \frac {1}{\omega C}\right) = 0\tag{10}
$$

解得

$$
\omega_ {C} = \sqrt {\frac {1}{L C} - \frac {R ^ {2}}{2 L ^ {2}}}\tag{11}
$$

故得所求的频率为

$$
\nu_ {C} = \frac {\omega_ {C}}{2 \pi} = \frac {1}{2 \pi} \sqrt {\frac {1}{L C} - \frac {R ^ {2}}{2 L ^ {2}}}\tag{12}
$$

这时

$$
\frac {\mathrm{d} ^ {2} U _ {C}}{\mathrm{d} \omega^ {2}} = - \frac {4 L ^ {2} U}{\omega^ {3} C \left[ R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2} \right] ^ {3 / 2}} <   0\tag{13}
$$

故知这时 $U_{C}$ 有极大值.

11.23 一 RLC 串联电路, $R = 3.0\Omega$ , $C = 50\mu \mathrm{F}$ , $L$ 可以在 $10\mathrm{mH}$ 到 $80\mathrm{mH}$ 之间变化. 现在这电路两端加上有效值为 $U = 100\mathrm{V}$ 、角频率为 $\omega = 500\mathrm{rad/s}$ 的电压, 但 $C$ 两端电压的最大值不得超过 $1200\mathrm{V}$ . 试问这电路中最大容许电流的有效值是多少? $L$ 可以安全地增到多大?

【解】依题意，C两端电压的有效值应为

$$
U _ {C} = \frac {I}{\omega C} \leqslant \frac {1 2 0 0}{\sqrt {2}}\tag{1}
$$

由此得

$$
I \leqslant \frac {1 2 0 0}{\sqrt {2}} \omega C = \frac {1 2 0 0}{\sqrt {2}} \times 5 0 0 \times 5 0 \times 1 0 ^ {- 6} = 2 1 (\text {安})\tag{2}
$$

即最大容许电流的有效值为21安培.

再考虑 $L$ .因

$$
I = \frac {U}{\sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}}} = \frac {1 0 0}{\sqrt {3 . 0 ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}}} \leqslant 2 1\tag{3}
$$

所以

$$
\left(\omega L - \frac {1}{\omega C}\right) ^ {2} \geqslant \left(\frac {1 0 0}{2 1}\right) ^ {2} - 9 = 1 3. 6 8\tag{4}
$$

根据题给的值,有

$$
\frac {1}{\omega C} = \frac {1}{5 0 0 \times 5 0 \times 1 0 ^ {- 6}} = 4 0 (\Omega)\tag{5}
$$

$$
\omega L _ {\max} = 5 0 0 \times 8 0 \times 1 0 ^ {- 3} = 4 0 (\Omega)\tag{6}
$$

$$
\omega L _ {\mathrm{min}} = 5 0 0 \times 1 0 \times 1 0 ^ {- 3} = 5 (\Omega)\tag{7}
$$

故由式(4)知

$$
\omega L - \frac {1}{\omega C} \leqslant - \sqrt {1 3 . 6 8} = - 3. 7\tag{8}
$$

所以

$$
\begin{array}{r l} L & \leqslant \frac {1}{\omega} \left(\frac {1}{\omega C} - 3. 7\right) = \frac {1}{5 0 0} (4 0 - 3. 7) \\ & = 7. 3 \times 1 0 ^ {- 2} (\mathrm{H}) = 7 3 (\mathrm{mH}) \end{array}\tag{9}
$$

即 L 的值不能超过 73mH.

11.24 一线圈的自感为 $L = 0.10\mathrm{H}$ , 电阻为 $R = 2.0\Omega$ , 与电容 $C$ 串联后接到 $\nu = 50\mathrm{Hz}$ 的交流电源上. (1) 试问 $C$ 为多大时线圈中的电流为最大? (2) 若这电容器的耐压为 $400\mathrm{V}$ , 试问电源的电压最大不能超过多少?

【解】（1）通过线圈的电流为

$$
I = \frac {U}{\sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}}}\tag{1}
$$

由此式可见，当

$$
\omega L = \frac {1}{\omega C}\tag{2}
$$

时,电流 I 为最大.这时

$$
\begin{array}{r l} C & = \frac {1}{\omega^ {2} L} = \frac {1}{(2 \pi \times 5 0) ^ {2} \times 0 . 1 0} \\ & = 1. 0 \times 1 0 ^ {- 4} (\mathrm{F}) = 1. 0 \times 1 0 ^ {2} (\mu \mathrm{F}) \end{array}\tag{3}
$$

(2)电容器两端的电压应满足

$$
U _ {\mathrm{C}} = \frac {I}{\omega C} = \frac {U _ {\max}}{\omega C R} <   4 0 0 \mathrm{V}\tag{4}
$$

所以

$$
\begin{array}{r l} U _ {\max} <   4 0 0 \omega C R & = 4 0 0 \times 2 \pi \times 5 0 \times 1. 0 \times 1 0 ^ {- 4} \times 2. 0 \\ & = 2 5 (\mathrm{V}) \end{array}\tag{5}
$$

11.25 一 RLC 串联电路, 已知 $R = 15\Omega$ , $C = 370pF$ , 谐振频率为 $\nu_{0} = 6.0 \times$ 

$10^{5}\mathrm{Hz}$ , 试求这电路的 $Q$ 值 $(Q = \frac{\omega_0L}{R})$ .

【解】这电路的 $Q$ 值为

$$
\begin{array}{r l} Q & = \frac {\omega_ {0} L}{R} = \frac {1}{\omega_ {0} C R} = \frac {1}{2 \pi \times 6 . 0 \times 1 0 ^ {5} \times 3 7 0 \times 1 0 ^ {- 1 2} \times 1 5} \\ & = 4 8 \end{array}
$$

11.26 一个由元件 R、L、C 等联接而成的电路, 接在低压的交流电源上. 当 (1) 电路在谐振时, (2) 电源突然断开时, (3) 电源断开以后, 电路中都可能出现高压 (在用电时应注意这点). 试说明出现高压的原因.

【解答】（1）如图11.26，在RLC串联电路中，谐振时， $U_{LC}=0$ ，但

$$
U _ {L} = U _ {C} = \frac {\omega_ {0} L ^ {\xi}}{R}
$$

在品质因数 $Q=\frac{\omega_{0}L}{R}\gg1$ 时，便有 $U_{L}=U_{C}\gg\delta$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/fe93536031890222d5fd5aba05e2fababbc65b2f2d9fd3c77c44fc4f05ac35ab.jpg)


(2)电源突然断开时, 若 L 很大, 或 $\frac{dI}{dt}$ 很大, 则 $L \frac{dI}{dt}$ 便很大.


图11.26


(3)电源断开以后,电容上可能储存大量的电荷量,从而出现高压.

11.27 一 RLC 串联电路的谐振频率为 $\nu_{0}$ ，试证明，当这电路中的频率与 $\nu_{0}$ 相差为 $\Delta\nu$ ，而 $\Delta\nu\ll\nu_{0}$ 时，它的阻抗近似为 $Z=R\sqrt{1+\left(2Q\frac{\Delta\nu}{\nu_{0}}\right)^{2}}$ ，式中 $Q=\frac{\omega_{0}L}{R}=\frac{2\pi\nu_{0}L}{R}$ 是这电路的 Q 值（品质因数）.

【证】RLC串联电路的阻抗为

$$
Z = \sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}} = R \sqrt {1 + \left(\frac {\omega L}{R} - \frac {1}{\omega C R}\right) ^ {2}}\tag{1}
$$

其中

$$
\begin{array}{r l} \frac {\omega L}{R} & = \frac {(\omega_ {0} \pm \Delta \omega) L}{R} = Q \pm \frac {L}{R} \Delta \omega = Q \pm Q \frac {\Delta \omega}{\omega_ {0}} \\ & = Q \pm Q \frac {\Delta \nu}{\nu_ {0}} \\ \frac {1}{\omega C R} & = \frac {1}{(\omega_ {0} \pm \Delta \omega) C R} = \frac {1}{\omega_ {0} C R (1 \pm \frac {\Delta \omega}{\omega_ {0}})} = \frac {Q}{(1 \pm \frac {\Delta \nu}{\nu_ {0}})} \\ & \approx Q (1 \mp \frac {\Delta \nu}{\nu_ {0}}) \\ & \frac {\omega L}{R} - \frac {1}{\omega C R} \approx Q (1 \pm \frac {\Delta \nu}{\nu_ {0}}) - Q (1 \mp \frac {\Delta \nu}{\nu_ {0}}) \\ & = \pm 2 Q \frac {\Delta \nu}{\nu_ {0}} \end{array}\tag{2}
$$

(3) 

所以

(4) 

代入式(1)便得

$$
Z \approx R \sqrt {1 + \left(2 Q \frac {\Delta \nu}{\nu_ {0}}\right) ^ {2}}\tag{5}
$$

11.28 RLC 串联电路的谐振频率为 $\nu_0 = \frac{1}{2\pi}\frac{1}{\sqrt{LC}}$ ，试推导这个公式。有一发射天线发出的电磁波的频率为 $1.25\mathrm{MHz}$ ，试求它的振荡电路的 $LC$ 值。

【解】 RLC 串联电路的复阻抗为

$$
\widetilde {Z} = R + \mathrm{j} \left(\omega L - \frac {1}{\omega C}\right) = \sqrt {R ^ {2} + \left(\omega L - \frac {1}{\omega C}\right) ^ {2}} \mathrm{e} ^ {\mathrm{j} \arctan \left(\frac {\omega L - \frac {1}{\omega C}}{R}\right)}
$$

当相角为

$$
\varphi = \varphi_ {U} - \varphi_ {I} = \arctan \left(\frac {\omega L - \frac {1}{\omega C}}{R}\right) = 0
$$

时,电路便处在谐振状态.由上式得

$$
\omega_ {0} L - \frac {1}{\omega_ {0} C} = 0
$$

于是得谐振频率为

$$
\nu_ {0} = \frac {\omega_ {0}}{2 \pi} = \frac {1}{2 \pi} \frac {1}{\sqrt {L C}}
$$

该天线的 $LC$ 值为

$$
\begin{array}{r l} L C & = \frac {1}{(2 \pi \nu_ {0}) ^ {2}} = \frac {1}{(2 \pi \times 1 . 2 5 \times 1 0 ^ {6}) ^ {2}} \\ & = 1. 6 2 \times 1 0 ^ {- 1 4} (\mathrm{s} ^ {2}) \end{array}
$$

11.29 超外差式收音机里的中周谐振频率是 465kHz, 在它的调谐回路里, 电容常用 200pF. 试问这时中周线圈的自感是多少?

【解答】中周线圈的自感为

$$
\begin{array}{r l} L & = \frac {1}{\omega_ {0} ^ {2} C} = \frac {1}{(2 \pi \times 4 6 5 \times 1 0 ^ {3}) ^ {2} \times 2 0 0 \times 1 0 ^ {- 1 2}} \\ & = 5. 8 6 \times 1 0 ^ {- 4} (\mathrm{H}) \end{array}
$$

11.30 一 RLC 串联电路, $R = 5.0\Omega, Z_{L} = 20\Omega, Z_{C} = 20\Omega$ , 加上 $100\mathrm{V}$ 的交流电压, 试求发生谐振时电路中的电流和 $R, L, C$ 上的电压.

【解】谐振时，电路中的电流为

$$
I = \frac {U}{R} = \frac {1 0 0}{5 . 0} = 2 0 (\mathrm{A})
$$

$R, L, C$ 上的电压分别为

$$
\begin{array}{l} {U _ {R} = I R = 2 0 \times 5. 0 = 1 0 0 (\mathrm{V})} \\ {U _ {L} = I \omega_ {0} L = I \sqrt {\frac {L}{C}} = 2 0 \times \sqrt {2 0 \times 2 0} = 4 0 0 (\mathrm{V})} \\ {U _ {C} = \frac {I}{\omega_ {0} C} = I \sqrt {\frac {L}{C}} = 2 0 \times \sqrt {2 0 \times 2 0} = 4 0 0 (\mathrm{V})} \end{array}
$$

【讨论】这个 RLC 串联电路在谐振时， $U_{L}$ 和 $U_{C}$ 都超过了总电压 U.

11.31 $R_{1}L_{1}C_{1}$ 串联电路的谐振频率与 $R_{2}L_{2}C_{2}$ 串联电路的谐振频率相等，如果将这两个电路串联起来，而 $L_{1}$ 与 $L_{2}$ 之间的互感可略去不计，试问整个电路的谐振角频率是多少？

【解】原来两电路的谐振角频率为

$$
\omega_ {1} = \frac {1}{\sqrt {L _ {1} C _ {1}}} = \omega_ {2} = \frac {1}{\sqrt {L _ {2} C _ {2}}}\tag{1}
$$

两电路串联后,电抗为

$$
X = \omega (L _ {1} + L _ {2}) - \frac {C _ {1} + C _ {2}}{\omega C _ {1} C _ {2}}\tag{2}
$$

故发生谐振的角频率为

$$
\omega = \sqrt {\frac {C _ {1} + C _ {2}}{\left(L _ {1} + L _ {2}\right) C _ {1} C _ {2}}} = \sqrt {\frac {C _ {1} + C _ {2}}{\frac {C _ {2}}{\omega_ {1} ^ {2}} + \frac {C _ {1}}{\omega_ {2} ^ {2}}}}
$$

$$
= \omega_ {1} = \omega_ {2} = \frac {1}{\sqrt {L _ {1} C _ {1}}} = \frac {1}{\sqrt {L _ {2} C _ {2}}}\tag{3}
$$

故整个电路的谐振频率等于原来两个电路的谐振频率.

11.32 $R = 10.0\Omega$ 与 $L = 31.8\mathrm{mH}$ 并联后，加上 $u(t) = 156\sin \omega t\mathrm{V},\nu = \omega /2\pi = 100\mathrm{Hz}$ 的电压，如图11.32(1)所示.试求通过 $R$ 的电流 $i_R(t)$ ，通过 $L$ 的电流 $i_L(t)$ 和总电流 $i(t)$ 

【解】通过 $R$ 的电流为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/d0dfa39bde3597c51c8c703ed2312fe6a9ba51ffc2a3406f7a0e03c1cd42afd1.jpg)


$$
i _ {R} (t) = \frac {u (t)}{R} = \frac {1 5 6 \sin \omega t}{1 0 . 0} = 1 5. 6 \sin (2 0 0 \pi t) (\mathrm{A})\tag{1}
$$


图11.32(1)


通过 $L$ 的电流为

$$
\begin{array}{r l} i _ {L} (t) & = \frac {1 5 6 \sin \left(\omega t - \frac {\pi}{2}\right)}{\omega L} = \frac {- 1 5 6 \cos \omega t}{2 \pi \times 1 0 0 \times 3 1 . 8 \times 1 0 ^ {- 3}} \\ & = - 7. 8 \cos (2 0 0 \pi t) (\mathrm{A}) \end{array}\tag{2}
$$

总电流为

$$
\begin{array}{r l} i (t) - i _ {R} (t) + i _ {L} (t) & = 1 5. 6 \sin (2 0 0 \pi t) - 7. 8 \cos (2 0 0 \pi t) \\ & = \sqrt {1 5 . 6 ^ {2} + (- 7 . 8) ^ {2}} \sin (2 0 0 \pi t + \varphi) \\ & = 1 7. 4 \sin (2 0 0 \pi t + \varphi) (\mathrm{A}) \end{array}\tag{3}
$$

式中

$$
\varphi = \arctan \left(\frac {- 7 . 8}{1 5 . 6}\right) = - 2 6 ^ {\circ} 3 4 ^ {\prime}\tag{4}
$$

所以

$$
i (t) = 1 7. 4 \sin (2 0 0 \pi t - 2 6 ^ {\circ} 3 4 ^ {\prime})\tag{5}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/f79b23617316ec19382dab6eab896c77b0329bde505b22af9f83a1f0a0f35a71.jpg)



图11.32(2)


【别解】用矢量图解法求解 $I_{R}$ 与 U 同相位, $I_{L}$ 比 U 落后 $\pi/2$ , 故如图 11.32(2) 所示. $I_{R}$ 和 $I_{L}$ 的大小分别为

$$
I _ {R} = \frac {1 5 6}{1 0 . 0} = 1 5. 6 (\mathrm{A})\tag{6}
$$

$$
I _ {L} = \frac {1 5 6}{2 \pi \times 1 0 0 \times 3 1 . 8 \times 1 0 ^ {- 3}} = 7. 8 (\mathrm{A})\tag{7}
$$

所以

$$
I = \sqrt {I _ {R} ^ {2} + I _ {L} ^ {2}} = \sqrt {1 5 . 6 ^ {2} + 7 . 8 ^ {2}} = 1 7. 4 (\mathrm{A})\tag{8}
$$

$$
\varphi = \arctan \left(\frac {- 7 . 8}{1 5 . 6}\right) = - 2 6 ^ {\circ} 3 4 ^ {\prime}\tag{9}
$$

于是得

$$
i _ {R} (t) = 1 5. 6 \sin (2 0 0 \pi t) (\mathrm{A})\tag{10}
$$

$$
i _ {L} (t) = 7. 8 \sin \left(2 0 0 \pi t - \frac {\pi}{2}\right) = - 7. 8 \cos (2 0 0 \pi t) (\mathrm{A})\tag{11}
$$

$$
i (t) = 1 7. 4 \sin \left(2 0 0 \pi t - 2 6 ^ {\circ} 3 4 ^ {\prime}\right) (\mathrm{A})\tag{12}
$$

【别解】用复数法求解 将 $u(t) = 156\sin \omega t$ 用复数表示为

$$
\widetilde {U} = 1 5 6 \mathrm{e} ^ {\mathrm{j} \omega t}\tag{13}
$$

$u(t)$ 为 $\widetilde{U}$ 的虚部，即

$$
u (t) = \operatorname{Im} \widetilde {U} = 1 5 6 \sin \omega t\tag{14}
$$

于是得

$$
\widetilde {I} _ {R} = \frac {\widetilde {U}}{\widetilde {Z} _ {R}} = \frac {\widetilde {U}}{R} = \frac {1 5 6 \mathrm{e} ^ {\mathrm{j} \omega t}}{1 0} = 1 5. 6 \mathrm{e} ^ {\mathrm{j} \omega t}\tag{15}
$$

$$
\widetilde {I} _ {L} = \frac {\widetilde {U}}{\widetilde {Z} _ {L}} = \frac {\widetilde {U}}{\mathrm{j} \omega L} = \frac {1 5 6 \mathrm{e} ^ {\mathrm{j} \left(\omega t - \frac {\pi}{2}\right)}}{2 \pi \times 1 0 0 \times 3 1 . 8 \times 1 0 ^ {- 3}} = 7. 8 \mathrm{e} ^ {\mathrm{j} \left(\omega t - \frac {\pi}{2}\right)}\tag{16}
$$

RL 并联的复阻抗为

$$
\widetilde {Z} = \frac {\widetilde {Z} _ {R} \widetilde {Z} _ {L}}{\widetilde {Z} _ {R} + \widetilde {Z} _ {L}} = \frac {R j \omega L}{R + j \omega L} = \frac {R \omega L}{\omega L - j R}\tag{17}
$$

所以

$$
\begin{array}{r l} \widetilde {I} & = \frac {\widetilde {U}}{\widetilde {Z}} = \widetilde {U} \frac {\omega L - j R}{R \omega L} = \frac {1 5 6 \mathrm{e} ^ {\mathrm{j} \omega t \sqrt {R ^ {2} + \omega^ {2} L ^ {2}}}}{R \omega L} \mathrm{e} ^ {\arctan \left(\frac {- R}{\omega L}\right)} \\ & = \frac {1 5 6 \sqrt {R ^ {2} + \omega^ {2} L ^ {2}}}{R \omega L} \mathrm{e} ^ {\mathrm{j} \left(\omega t - \arctan \frac {R}{\omega L}\right)} \\ & = \frac {1 5 6 \sqrt {1 0 . 0 ^ {2} + (2 \pi \times 1 0 0 \times 3 1 . 8 \times 1 0 ^ {- 3}) ^ {2}}}{1 0 . 0 \times 2 \pi \times 1 0 0 \times 3 . 1 8 \times 1 0 ^ {- 3}} \\ & \quad \times \mathrm{e} ^ {\mathrm{j} \left(\omega t - \arctan \frac {1 0 . 0}{2 \pi \times 1 0 0 \times 3 1 . 8 \times 1 0 ^ {- 3}}\right)} \\ & = 1 7. 4 \mathrm{e} ^ {\mathrm{j} (\omega t - 2 6 ^ {\circ} 3 4 ^ {\prime})} \end{array}\tag{18}
$$

根据式(14)，所求的电流如下：

$$
i _ {R} (t) = \operatorname{Im} \widetilde {I} _ {R} = 1 5. 6 \sin \omega t\tag{19}
$$

$$
i _ {L} (t) = \operatorname{Im} \widetilde {I} _ {L} = 7. 8 \sin \left(\omega t - \frac {\pi}{2}\right) = - 7. 8 \cos \omega t\tag{20}
$$

$$
i (t) = \operatorname{Im} \widetilde {I} = 1 7. 4 \sin (\omega t - 2 6 ^ {\circ} 3 4 ^ {\prime})\tag{21}
$$

11.33 一抗流圈的自感为 $L = 50\mathrm{mH}$ 、电阻为 $r = 20\Omega$ ，与 $R = 60\Omega$ 的变阻器并联后，接到 $\nu = 50\mathrm{Hz}$ 的交流电源上，如图11.33(1)所示.测得通过 $L$ 的电流为 $I_{L} = 4.0\mathrm{A}$ ，试求通过 $R$ 的电流 $I_{R}$ 和总电流 $I$ 

【解】 电源的电压为

$$
\begin{array}{r l} U & = I _ {L} Z _ {L} = I _ {L} \sqrt {(\omega L) ^ {2} + r ^ {2}} \\ & = 4. 0 \times \sqrt {(2 \pi \times 5 0 \times 5 0 \times 1 0 ^ {- 3}) ^ {2} + 2 0 ^ {2}} \\ & = 1 0 2 (\mathrm{V}) \end{array}\tag{1}
$$

于是得通过 $R$ 的电流为

$$
I _ {R} = \frac {U}{R} = \frac {1 0 2}{6 0} = 1. 7 (\mathrm{A})\tag{2}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/8268cfba157ceaa16115687a2983e077fb84efd8c6a564a9dc72114352df6182.jpg)



图11.33(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/ee066d8d7a73e15b92309b9be26b6ebe1f8587bea6e33eff34dbf88417c46c12.jpg)



图11.33(2)


抗流圈的阻抗其相角 $\varphi$ 满足

$$
\begin{array}{r l} \cos \varphi & = \frac {r}{\sqrt {r ^ {2} + \omega^ {2} L ^ {2}}} \\ & = \frac {2 0}{\sqrt {2 0 ^ {2} + (2 \pi \times 5 0 \times 5 0 \times 1 0 ^ {- 3}) ^ {2}}} \\ & = 0. 7 8 6 4 \end{array}\tag{3}
$$

由图 11.33(2) 得总电流为

$$
\begin{array}{r l} I & = \sqrt {I _ {R} ^ {2} + I _ {L} ^ {2} + 2 I _ {R} I _ {L} \cos \varphi} \\ & = \sqrt {1 . 7 ^ {2} + 4 . 0 ^ {2} + 2 \times 1 . 7 \times 4 . 0 \times 0 . 7 8 6 4} \\ & = 5. 4 (\mathrm{A}) \end{array}\tag{4}
$$

11.34 一电路如图 11.34(1)，已知 $R = 50\Omega, I_{R} = 2.5A, I_{Z} = 2.8A, I = 4.5A$ ，试求元件 Z 所消耗的功率.

【解】设 $I_{Z}$ 与 $I_{R}$ 的相位差为 $\varphi$ ，如图11.34(2)所示，则有

$$
I ^ {2} = I _ {R} ^ {2} + I _ {Z} ^ {2} + 2 I _ {R} I _ {Z} \cos \varphi\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/43222d35805c2f72f02a734283297807bed3f2d1e8068300dc52f6c05143a7a3.jpg)



图11.34(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/55db442e14f94e2093a2f5df4001e8de9aefa56bb0adeb8adfa1726cd1db80f1.jpg)



图11.34(2)


所以

$$
\begin{array}{r l} \cos \varphi & = \frac {I ^ {2} - I _ {R} ^ {2} - I _ {Z} ^ {2}}{2 I _ {R} I _ {Z}} = \frac {4 . 5 ^ {2} - 2 . 5 ^ {2} - 2 . 8 ^ {2}}{2 \times 2 . 5 \times 2 . 8} \\ & = 0. 4 4 \end{array}
$$

设

(2) 

$$
\widetilde {Z} = r + j X\tag{3}
$$

则

$$
\begin{array}{r l} r = Z \cos \varphi & = \frac {U}{I _ {Z}} \cos \varphi = \frac {I _ {R} R}{I _ {Z}} \cos \varphi \\ & = \frac {2 . 5 \times 5 0}{2 . 8} \times 0. 4 4 = 1 9. 6 (\Omega) \end{array}\tag{4}
$$

故得 $Z$ 所消耗的功率为

$$
P = I _ {Z} ^ {2} r = 2. 8 ^ {2} \times 1 9. 6 = 1. 5 \times 1 0 ^ {2} (\mathrm{W})\tag{5}
$$

11.35 一电器的工作频率为 $50\mathrm{Hz}$ , 功率因数为 0.70, 有功电阻为 $100\Omega$ . 试问并联一个多大的电容 $C$ , 可以使整个电路的功率因数提高到 1?

【解】设该电器的复阻抗为

$$
\widetilde {Z} = R + \mathrm{j} X\tag{1}
$$

因为

$$
\cos \varphi = \frac {R}{\sqrt {R ^ {2} + X ^ {2}}} = 0. 7 0\tag{2}
$$

所以

$$
\frac {X}{\sqrt {R ^ {2} + X ^ {2}}} = \sqrt {1 - \cos^ {2} \varphi} = \sqrt {1 - 0 . 7 0 ^ {2}} = 0. 7 1 4\tag{3}
$$

并联电容 C 后, 如图 11.35 所示, 复阻抗为

$$
\begin{array}{r l} \frac {(R + \mathrm{j} X) \frac {1}{\mathrm{j} \omega C}}{R + \mathrm{j} X + \frac {1}{\mathrm{j} \omega C}} & = \frac {R + \mathrm{j} X}{1 - \omega C X + \mathrm{j} \omega C R} \\ & = \frac {R + \mathrm{j} (X - \omega C R ^ {2} - \omega C X ^ {2})}{(1 - \omega C X) ^ {2} + \omega^ {2} C ^ {2} R ^ {2}} \end{array}\tag{4}
$$

要将功率因数提高到1,即式(4)中的虚部应为零.于是得所求的电容为

$$
\begin{array}{r l} C & = \frac {X}{\omega (R ^ {2} + X ^ {2})} = \frac {X}{\omega \sqrt {R ^ {2} + X ^ {2}}} \frac {1}{\sqrt {R ^ {2} + X ^ {2}}} = \frac {0 . 7 1 4}{2 \pi \times 5 0} \times \frac {0 . 7 0}{1 0 0} \\ & = 1. 6 \times 1 0 ^ {- 5} (\mathrm{F}) = 1 6 (\mu \mathrm{F}) \end{array}\tag{5}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/0c603353bf3e6f3d05e388d2f6f590a6a7042a14cc728197afd8e16f0b4078a4.jpg)



图11.35


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/6739558fa9afe586a6ba9790412779116d98e6dc750c11c8fd635c03d73ddd30.jpg)



图11.36


11.36 一 RC 并联电路如图 11.36 所示. 已知 R、C 和电压 $u(t) = U_{0} \cos \omega t$ ，试求电流 $i(t)$ .

【解】用复数解法 复电压为

$$
\widetilde {U} = U _ {0} \mathrm{e} ^ {\mathrm{j} \omega t}\tag{1}
$$

$$
u (t) = \operatorname{Re} \widetilde {U} = U _ {0} \cos \omega t\tag{2}
$$

复阻抗为

$$
\begin{array}{r l} \widetilde {Z} & = \frac {\widetilde {Z} _ {R} \widetilde {Z} _ {C}}{\widetilde {Z} _ {R} + \widetilde {Z} _ {C}} = \frac {R \cdot \frac {1}{\mathrm{j} \omega C}}{R + \frac {1}{\mathrm{j} \omega C}} = \frac {R}{1 + \mathrm{j} \omega C R} = \frac {R (1 - \mathrm{j} \omega C R)}{1 + \omega^ {2} C ^ {2} R ^ {2}} \\ & = \frac {R}{\sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}} \mathrm{e} ^ {- \mathrm{j} \arctan \omega C R} \\ & \widetilde {I} = \frac {\widetilde {U}}{\widetilde {Z}} = \frac {U _ {0} \mathrm{e} ^ {\mathrm{j} \omega t}}{\frac {R}{\sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}} \mathrm{e} ^ {- \mathrm{j} \arctan \omega C R}} \\ & = \frac {U _ {0} \sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}}{R} \mathrm{e} ^ {\mathrm{j} (\omega t + \arctan \omega C R)} \end{array}\tag{3}
$$

所以

(4) 

于是得所求的电流为

$$
i (t) = \operatorname{Re} \widetilde {I} = \frac {U _ {0} \sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}}{R} \cos (\omega t + \arctan \omega C R)\tag{5}
$$

【别解】通过 $R$ 和 $C$ 的复电流分别为

$$
\widetilde {I} _ {R} = \frac {\widetilde {U}}{R}\tag{6}
$$

$$
\widetilde {I} _ {C} = \frac {\widetilde {U}}{\widetilde {Z} _ {C}} = \mathrm{j} \omega C \widetilde {U}\tag{7}
$$

所以

$$
\begin{array}{r l} \widetilde {I} & = \widetilde {I} _ {R} + \widetilde {I} _ {C} = \left(\frac {1}{R} + \mathrm{j} \omega C\right) \widetilde {U} \\ & = \sqrt {\frac {1}{R ^ {2}} + \omega^ {2} C ^ {2}} \mathrm{e} ^ {\mathrm{j} \arctan \omega C R} \cdot U _ {0} \mathrm{e} ^ {\mathrm{j} \omega t} \\ & = \frac {U _ {0} \sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}}{R} \mathrm{e} ^ {\mathrm{j} (\omega t + \arctan \omega C R)} \end{array}\tag{8}
$$

所以

$$
i (t) = \operatorname{Re} \widetilde {I} = \frac {U _ {0} \sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}}{R} \cos (\omega t + \arctan \omega C R)\tag{9}
$$

【讨论】一、 $i(t)$ 比 $u(t)$ 超前 $\varphi = \arctan\omega CR$ .

二、式(4)或式(8)也可直接由 RC 并联的复阻抗公式[参见前面 11.5 题的式 (6.1)]直接得出.

11.37 一交流电路如图 11.37(1)，已知 $R = 5.0k\Omega, C = 0.010\mu F$ . 试分别求 $(1)\nu = 465Hz$ 和 $(2)\nu = 10kHz$ 时的比值 $I_{R}/I$ .

【解】因 $R, C$ 并联，故有

$$
I _ {R} R = \frac {I _ {C}}{\omega C}\tag{1}
$$

因 $I_{C}$ 比 $I_{R}$ 超前90°,如图11.37(2),故

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/dea29700f0f2efd89e7a083da2585bfd718e3493165e7ed797caf15a33ff40b3.jpg)


$$
I = \sqrt {I _ {R} ^ {2} + I _ {C} ^ {2}} = I _ {R} \sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}\tag{2}
$$


图11.37(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/e7ddff55359a6d62850696d36f75366a685787a81ea4d47307aeaa2f46c12e9e.jpg)



图11.37(2)


于是得所求的比值为

$$
\frac {I _ {R}}{I} = \frac {1}{\sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}}\tag{3}
$$

(1) 当 $\nu = 465\mathrm{Hz}$ 时，

$$
\begin{array}{r l} \frac {I _ {R}}{I} & = \frac {1}{\sqrt {1 + (2 \pi \times 4 6 5 \times 0 . 0 1 0 \times 1 0 ^ {- 6} \times 5 . 0 \times 1 0 ^ {3}) ^ {2}}} \\ & = 0. 9 9 \end{array}\tag{4}
$$

(2) 当 $\nu = 10\mathrm{kHz}$ 时，

$$
\begin{array}{r l} \frac {I _ {R}}{I} & = \frac {1}{\sqrt {1 + (2 \pi \times 1 0 \times 1 0 ^ {3} \times 0 . 0 1 0 \times 1 0 ^ {- 6} \times 5 . 0 \times 1 0 ^ {3})}} \\ & = 0. 3 0 \end{array}\tag{5}
$$

11.38 如图 11.38(1), RC 并联电路的阻抗, 在 $\omega CR \gg 1$ 时, 近似等于 $C' = C$ 与 $R' = \frac{1}{\omega^{2} C^{2} R}$ 串联电路 [如图 11.38(2)] 的阻抗. 试证明上述结论.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/ef9060b12cd734477350b6d2aee3798683001b7d1798f06bd58524ed0fe91b24.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/a400645b4d3081ef69ee3706deb5fc06b2bba39ac2dbb43b948f1dce4c49a25a.jpg)



(2)



图11.38


【证】 RC 并联电路的复阻抗为

$$
\widetilde {Z} = \frac {R \cdot \frac {1}{\mathrm{j} \omega C}}{R + \frac {1}{\mathrm{j} \omega C}} = \frac {R}{1 + \mathrm{j} \omega C R} = \frac {R (1 - \mathrm{j} \omega C R)}{1 + \omega^ {2} C ^ {2} R ^ {2}}\tag{1}
$$

当 $\omega CR \gg 1$ 时, 上式分子中的 1 可以略去, 于是得

$$
\widetilde {Z} = \frac {1}{\omega^ {2} C ^ {2} R} - \mathrm{j} \frac {1}{\omega C} = \frac {1}{\omega^ {2} C ^ {2} R} + \frac {1}{\mathrm{j} \omega C}\tag{2}
$$

$R'=\frac{1}{\omega^{2}C^{2}R}$ 与 $C'$ 串联电路的阻抗为

$$
\widetilde {Z} ^ {\prime} = R ^ {\prime} + \frac {1}{\mathrm{j} \omega C ^ {\prime}}\tag{3}
$$

由式(2)、(3)可见，当 $C' = C$ 时， $\widetilde{Z} = \widetilde{Z}'$ .

11.39 交电流通过电阻 R. 与 R 并联一电容 C 后, 设电流的大小不变(即通过并联电路的总电流等于未并联 C 时通过 R 的电流), (1) 试问 R 上的电压降低了多少? (2) 若 $R = 30k\Omega, C = 0.33\mu F$ , 试问在什么频率时, R 上的电压下降 5%?

【解】(1)RC 并联电路的复阻抗为

$$
\begin{array}{r l} \widetilde {Z} & = \frac {R \cdot \frac {1}{\mathrm{j} \omega C}}{R + \frac {1}{\mathrm{j} \omega C}} = \frac {R}{1 + \mathrm{j} \omega C R} \\ & = \frac {R}{\sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}} \mathrm{e} ^ {- \mathrm{j} \arctan (\omega C R)} \end{array}\tag{1}
$$

未并联 C 时, 设通过 R 的电流为 I, 则 R 上的电压为

$$
U _ {R} = I R\tag{2}
$$

并联 C 后, I 不变, 故 R 上的电压为

$$
U _ {R} ^ {\prime} = I Z = \frac {I R}{\sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}}\tag{3}
$$

于是得 $R$ 上电压降低的百分比为

$$
\frac {U _ {R} - U _ {R} ^ {\prime}}{U _ {R}} = 1 - \frac {U _ {R} ^ {\prime}}{U _ {R}} = \left(1 - \frac {1}{\sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}}\right) \%\tag{4}
$$

(2) 要求降低 5% 由式(4)得

$$
\frac {1}{\sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}} = 0. 9 5\tag{5}
$$

所以

$$
1 + \omega^ {2} C ^ {2} R ^ {2} = \frac {1}{0 . 9 5 ^ {2}} = 1. 1 0 8\tag{6}
$$

于是得所求的频率为

$$
\begin{array}{r l} \nu & = \frac {\sqrt {1 . 1 0 8 - 1}}{2 \pi C R} = \frac {\sqrt {0 . 1 0 8}}{2 \pi \times 0 . 3 3 \times 1 0 ^ {- 6} \times 3 0 \times 1 0 ^ {3}} \\ & = 5. 3 (\mathrm{Hz}) \end{array}\tag{7}
$$

11.40 一 LC 并联电路, 在某个频率时, L 和 C 的阻抗之比为 $Z_{L}:Z_{C}=2:1$ , 通过这并联电路的总电流为 I=1.0 毫安. 试分别求通过 L 的电流 $I_{L}$ 和通过 C 的

电流 $I_{C}$ .

【解】 $I_{L}$ 比电压 $U_{L}$ 落后 $90^{\circ}$ ，而 $I_{C}$ 则比 $U_{C}$ 超前 $90^{\circ}$ ；今 LC 并联， $U_{L}=U_{C}$ ，故 $I_{L}$ 比 $I_{C}$ 落后 $180^{\circ}$ ，如图 11.40 所示。于是得

$$
I _ {C} - I _ {L} = I\tag{1}
$$

因

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/c83e0b6eeb67eaa116a0188017e34fed8c1d9bb4ddef41d32f76d7fae3cca5f2.jpg)


$$
I _ {L} Z _ {L} = U _ {L} = U _ {C} = I _ {C} Z _ {C}\tag{2}
$$

所以

$$
I _ {C} = \frac {Z _ {L}}{Z _ {C}} I _ {L} = 2 I _ {L}\tag{3}
$$


图11.40


由式(1)、(3)解得

$$
I _ {L} = I = 1. 0 (\mathrm{mA})\tag{4}
$$

$$
I _ {C} = 2 I = 2. 0 (\mathrm{mA})\tag{5}
$$

11.41 中波收音机的输入调谐回路由一可变电容 C 与环式线圈 L 串联而成，C 的变化范围为 30pF 到 300pF，L 则是将外表绝缘的细导线绕在铁氧体环上构成，已知铁氧体的 $\mu_{r}=200$ ，磁路长为 3.0cm，横截面积为 0.10 平方厘米，导线横截面的直径为 0.50mm，电阻率为 $1.7\times10^{-8}\Omega\cdot m$ 。(1) 如果想收听 500kHz 到 1500kHz 波段的电台，试问 L 应该有多少匝？(2) 当收听 1151kHz 的节目时，1214kHz 的串音是否严重？

【解】（1）调谐时，

$$
\omega^ {2} L C = 1\tag{1}
$$

当 $C=30pF,\nu=1500kHz$ 时，由式(1)得

$$
\begin{array}{r l} L _ {1} & = \frac {1}{\omega_ {1} ^ {2} C _ {1}} = \frac {1}{(2 \pi \times 1 5 0 0 \times 1 0 ^ {3}) ^ {2} \times 3 0 \times 1 0 ^ {- 1 2}} \\ & = 3. 7 5 3 \times 1 0 ^ {- 4} (\mathrm{H}) \end{array}\tag{2}
$$

当 $C = 300 \, pF, \nu = 500 \, kHz$ 时，

$$
\begin{array}{r l} L _ {2} & = \frac {1}{\omega_ {2} ^ {2} C _ {2}} = \frac {1}{(2 \pi \times 5 0 0 \times 1 0 ^ {3}) ^ {2} \times 3 0 0 \times 1 0 ^ {- 1 2}} \\ & = 3. 3 7 7 \times 1 0 ^ {- 4} (\mathrm{H}) \end{array}\tag{3}
$$

根据铁心螺绕环的自感公式[参见前面8.3.18题的式(5)]

$$
\begin{array}{r l} L & = \mu_ {n} \mu_ {0} \frac {N ^ {2} S}{l} = 2 0 0 \times 4 \pi \times 1 0 ^ {- 7} \times \frac {0 . 1 0 \times 1 0 ^ {- 4}}{3 . 0 \times 1 0 ^ {- 2}} N ^ {2} \\ & = \frac {8 \pi}{3} \times 1 0 ^ {- 8} N ^ {2} \end{array}\tag{4}
$$

得所需的匝数为

$$
\begin{array}{r l} N _ {1} & = \sqrt {\frac {3 L _ {1}}{8 \pi}} \times 1 0 ^ {4} = \sqrt {\frac {3 \times 3 . 7 5 3 \times 1 0 ^ {- 4}}{8 \pi}} \times 1 0 ^ {4} \\ & = 6 6. 9 \text { 匝 } \end{array}\tag{5}
$$

$$
\begin{array}{r l} N _ {2} & = \sqrt {\frac {3 L _ {2}}{8 \pi}} \times 1 0 ^ {4} = \sqrt {\frac {3 \times 3 . 3 7 7 \times 1 0 ^ {- 4}}{8 \pi}} \times 1 0 ^ {4} \\ & = 6 3. 5 \text { 匝 } \end{array}\tag{6}
$$

取平均值

$$
N = 6 5 \text { 匝 }\tag{7}
$$

经验算, $N = 65$ 匝的 $L$ 与30皮法结合, $\nu > 1500$ 千赫兹, 与300皮法结合, $\nu < 500$ 千赫. 可见满足要求.

(2)这时线圈的电阻为

$$
\begin{array}{r l} R & = \rho \frac {l}{S} = \rho \frac {2 \pi r N}{S} = 1. 7 \times 1 0 ^ {- 8} \times \frac {2 \pi \times \sqrt {\frac {0 . 1 0 \times 1 0 ^ {- 4}}{\pi}} \times 6 5}{\pi \times \left(\frac {0 . 5 0 \times 1 0 ^ {- 3}}{2}\right) ^ {2}} \\ & = 6. 3 \times 1 0 ^ {- 2} (\Omega) \end{array}\tag{8}
$$

收听 1151 千赫时, Q 值为

$$
\begin{array}{r l} Q & = \frac {\omega L}{R} = \frac {2 \pi \times 1 1 5 1 \times 1 0 ^ {3} \times \frac {8 \pi}{3} \times 1 0 ^ {- 8} \times 6 5 ^ {2}}{6 . 3 \times 1 0 ^ {- 2}} \\ & = 4. 1 \times 1 0 ^ {4} \end{array}\tag{9}
$$

这时带宽为

$$
\Delta \omega = \frac {\omega_ {0}}{Q}\tag{10}
$$

所以

$$
\Delta \nu = \frac {\nu_ {0}}{Q} = \frac {1 1 5 1 \times 1 0 ^ {3}}{4 . 1 \times 1 0 ^ {4}} = 2 8 (\mathrm{Hz})\tag{11}
$$

而

$$
1 2 1 4 - 1 1 5 1 = 6 3 > 2 8 (\mathrm{Hz})\tag{12}
$$

故收听 1151kHz 的节目时, 1214kHz 的串音不严重.

11.42 试证明: 在谐振时, LC 串联的阻抗为 $\infty$ , LC 并联的阻抗为零.

【证】谐振时，L、C与角频率 $\omega$ 的关系为

$$
\omega = \frac {1}{\sqrt {L C}}\tag{1}
$$

$LC$ 串联的复阻抗为

$$
\widetilde {Z} _ {\text {串}} = \mathrm{j} \omega L + \frac {1}{\mathrm{j} \omega C} = \mathrm{j} \left(\frac {\omega^ {2} L C - 1}{\omega C}\right) = \frac {\omega^ {2} L C - 1}{\omega C} \mathrm{e} ^ {\mathrm{j} \frac {\pi}{2}}\tag{2}
$$

由式(1)、(2)得谐振时，

$$
Z _ {\text {串}} = \frac {\omega^ {2} L C - 1}{\omega C} = 0\tag{3}
$$

LC 并联的复阻抗为

$$
\widetilde {Z} _ {\text {并}} = \frac {\mathrm{j} \omega L \cdot \frac {1}{\mathrm{j} \omega C}}{\mathrm{j} \omega L + \frac {1}{\mathrm{j} \omega C}} = \frac {\mathrm{j} \omega L}{1 - \omega^ {2} L C} = \frac {\omega L}{1 - \omega^ {2} L C} \mathrm{e} ^ {\mathrm{j} \frac {\pi}{2}}\tag{4}
$$

由式(1)、(4)得，谐振时

$$
Z _ {\text { 并 }} = \frac {\omega L}{1 - \omega^ {2} L C} = \infty\tag{5}
$$

11.43 一 RLC 并联电路如图 11.43(1)，已知 $R = 300\Omega, L = 250mH, C = 8.00\mu F; A_{1}, A_{2}, A_{3}, A_{4}$ 和 A 都是交流安培计，它们本身的阻抗都很小，可略去不计。现在 a、b 两端加上 220V、50Hz 的交流电压，试求：(1) 五个安培计的读数；(2) $A_{4}$ 中的 $I_{RL}$ 与 $U_{ab}$ 的相位差；(3) a、b 间所消耗的功率。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/8bcc96665c4ec65a4dbe983cae50c22b14671d82df0d3cfa9915e9fc7e8a478e.jpg)



图11.43(1)


【解】(1)各安培计的读数如下：

$$
A _ {1}: I _ {R} = \frac {U}{R} = \frac {2 2 0}{3 0 0} = 0. 7 3 3 (\mathrm{A})
$$

$$
\mathrm{A} _ {2}: I _ {L} = \frac {U}{\omega L} = \frac {2 2 0}{2 \pi \times 5 0 \times 2 5 0 \times 1 0 ^ {- 3}} = 2. 8 0 (\mathrm{A})
$$

$$
\mathrm{A} _ {3}: I _ {C} = U \omega C = 2 2 0 \times 2 \pi \times 5 0 \times 8. 0 0 \times 1 0 ^ {- 6} = 0. 5 5 3 (\mathrm{A})
$$

$$
\mathrm{A} _ {4}: I _ {R L} = \sqrt {I _ {R} ^ {2} + I _ {L} ^ {2}} = \sqrt {0 . 7 3 3 ^ {2} + 2 . 8 0 ^ {2}} = 2. 8 9 (\mathrm{A})
$$

$$
\begin{array}{r l} \mathrm{A:} & I = \sqrt {I _ {R} ^ {2} + (I _ {L} - I _ {C}) ^ {2}} = \sqrt {0 . 7 3 3 ^ {2} + (2 . 8 0 - 0 . 5 3 3) ^ {2}} \\ & = 2. 3 6 (\mathrm{A}) \end{array}
$$

(2) $I_{RL}$ 与 $U_{ab}$ 的相位差如图11.43(2)所示，

$$
\varphi = \varphi_ {U} - \varphi_ {I} = \arctan \left(\frac {I _ {L}}{I _ {R}}\right)
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/1f9038cbd44e21e0b0c499090af7c5f17d3de8a0dacf825b3f516eaa7aa23e64.jpg)



图11.43(2)


$$
= \arctan \frac {2 . 8 0}{0 . 7 3 3} = 7 5 ^ {\circ} 2 0 ^ {\prime}
$$

$I_{RL}$ 落后于 $U_{ob}$ .

(3) $a, b$ 间消耗的功率为

$$
P = I _ {R} ^ {2} R = 0. 7 3 3 ^ {2} \times 3 0 0 = 1 6 1 (\mathrm{W})
$$

11.44 — RLC 并联电路如图 11.44(1)，其中 R、L、C、U 和 U 的角频率 $\omega$ 都已知，试求：(1) 电流 $I_{1}$ 、 $I_{2}$ 、 $I_{3}$ 和 I；(2) I 与 $I_{2}$ 之间以及 I 与 $I_{3}$ 之间的相位差.

【解】（1）各处电流如下：

$$
I _ {1} = \frac {U}{R}\tag{1}
$$

$$
I _ {2} = \frac {U}{\omega L}\tag{2}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/598a26fd631f79ddee31610cbf50bcf5bc319dfb0ac77e0b42858b54a9753015.jpg)


$$
I _ {3} = U \omega C\tag{3}
$$


图11.44(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/42b0fc98cd40a58f5aaf8b23de26d4e8471d4b75c41e3b03ed13bdc23c18b751.jpg)



图11.44(2)


$$
\begin{array}{r l} I & = \sqrt {I _ {1} ^ {2} + (I _ {2} - I _ {3}) ^ {2}} = \sqrt {\left(\frac {U}{R}\right) ^ {2} + U ^ {2} \left(\frac {1}{\omega L} - \omega C\right) ^ {2}} \\ & = \frac {U}{\omega L R} \sqrt {\omega^ {2} L ^ {2} + R ^ {2} (1 - \omega^ {2} L C) ^ {2}} \end{array}\tag{4}
$$

(2)如图11.44(2)， $I$ 与 $I_{2}$ 的相位差为

$$
\begin{array}{r l} \varphi_ {I} - \varphi_ {I _ {2}} & = \arctan \frac {I _ {1}}{I _ {2} - I _ {3}} = \arctan \frac {\frac {U}{R}}{\frac {U}{\omega L} - U \omega C} \\ & = \arctan \frac {\omega L}{R (1 - \omega^ {2} L C)} \end{array}\tag{5}
$$

当 $\omega L < \frac{1}{\omega C}$ 时， $I$ 超前于 $I_2$ .

$I$ 与 $I_{3}$ 的相位差为

$$
\begin{array}{r l} \varphi_ {I} - \varphi_ {I _ {3}} & = \arctan \frac {I _ {1}}{I _ {3} - I _ {2}} = \arctan \frac {\frac {U}{R}}{U \omega C - \frac {U}{\omega L}} \\ & = \arctan \frac {\omega L}{R (\omega^ {2} L C - 1)} \end{array}\tag{6}
$$

当 $\omega L < \frac{1}{\omega C}$ 时，I 落后于 $I_{3}$ .

11.45 — RLC 并联电路如图 11.45, 试证明: 在谐振频率 $\nu_{0}$ 附近, 这电路的导纳(阻抗的倒数)近似等于 $\widetilde{Y} = \frac{1}{R} + 2jC\delta\omega$ , 式中 $\delta\omega = \omega - \omega_{0} = 2\pi(\nu - \nu_{0})$ .

【证】RLC并联电路的导纳依定义为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/8d0e0ac29b8056cb69f97f9934df11a7fc8a10ae262f5773a5ed704545a095e3.jpg)


$$
\begin{array}{r l} \widetilde {Y} & = \frac {1}{\widetilde {Z}} = \frac {1}{R} + \frac {1}{\mathrm{j} \omega L} + \mathrm{j} \omega C \\ & = \frac {1}{R} + \mathrm{j} \left(\omega C - \frac {1}{\omega L}\right) \end{array}
$$

图11.45

(1) 

谐振时

$$
\omega_ {0} = \frac {1}{\sqrt {L C}}\tag{2}
$$

在 $\omega_0$ 附近，设

$$
\omega = \omega_ {0} + \delta \omega\tag{3}
$$

则有

$$
\begin{array}{r l} \omega C - \frac {1}{\omega L} & = (\omega_ {0} + \delta \omega) C - \frac {1}{(\omega_ {0} + \delta \omega) L} \\ & = \omega_ {0} C + C \delta \omega - \frac {1}{\omega_ {0} L} \frac {1}{1 + \delta \omega / \omega_ {0}} \\ & \approx \omega_ {0} C + C \delta \omega - \frac {1}{\omega_ {0} L} \left(1 - \frac {\delta \omega}{\omega_ {0}}\right) \\ & = C \delta \omega + \frac {\delta \omega}{\omega_ {0} ^ {2} L} \\ & = C \delta \omega + C \delta \omega = 2 C \delta \omega \end{array}\tag{4}
$$

代入式(1)便得

$$
\widetilde {Y} = \frac {1}{R} + 2 j C \delta \omega\tag{5}
$$

【讨论】一个电路的谐振状态定义为:它的复阻抗的虚部(电抗)为零.根据前面11.5题的式(8.1),RLC并联电路的谐振角频率为

$$
\omega_ {0} = \frac {1}{\sqrt {L C}}
$$

即式(2).

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/0254b622cb4f88ad85ac750d78bba4c2f94b8cb63021575bb316392f25df776e.jpg)


11.46 一电路如图 11.46, 其中 R、r、L 和 C 均已知, 试求电路的谐振频率.

【解】设这电路的复阻抗为 $\widetilde{Z}$ ，则有

$$
\frac {1}{\widetilde {Z}} = \frac {1}{r} + \mathrm{j} \omega C + \frac {1}{R + \mathrm{j} \omega L}\tag{1}
$$

其中

图11.46

$$
\begin{array}{r l} & \mathrm{j} \omega C + \frac {1}{R + \mathrm{j} \omega L} = \frac {\mathrm{j} \omega C (R + \mathrm{j} \omega L) + 1}{R + \mathrm{j} \omega L} \\ & = \frac {1 - \omega^ {2} L C + \mathrm{j} \omega C R}{R + \mathrm{j} \omega L} = \frac {(1 - \omega^ {2} L C + \mathrm{j} \omega C R) (R - \mathrm{j} \omega L)}{R ^ {2} + \omega^ {2} L ^ {2}} \\ & = \frac {R + \mathrm{j} \omega [ C (R ^ {2} + \omega^ {2} L ^ {2}) - L ]}{R ^ {2} + \omega^ {2} L ^ {2}} \end{array}\tag{2}
$$

这个式子中的虚部为零时， $\widetilde{Z}$ 的虚部便为零。于是得所求的谐振角频率为

$$
\omega_ {0} = \sqrt {\frac {L - C R ^ {2}}{L ^ {2} C}} = \sqrt {\frac {1}{L C} - \frac {R ^ {2}}{L ^ {2}}}\tag{3}
$$

谐振频率为

$$
\nu_ {0} = \frac {\omega_ {0}}{2 \pi} = \frac {1}{2 \pi} \sqrt {\frac {1}{L C} - \frac {R ^ {2}}{L ^ {2}}}\tag{4}
$$

11.47 在频率为 $\nu = 50\mathrm{Hz}$ 的交流电路中，电阻 $R$ 与一个线圈串联，这线圈的自感为 $L = 0.10\mathrm{H}$ ，其电阻可略去不计。通过这电路的电流与加在它两端电压的相位差为 $\varphi = 30^{\circ}$ 。（1）试求 $R$ 的值；(2)若在这电路两端并联一个电容 $C$ ，以消除上述相位差，试求 $C$ 的值；(3)若在这电路中串入一个电容 $C'$ ，以消除上述相位差，试求 $C'$ 的值。

【解】（1）因

$$
\frac {R}{\sqrt {R ^ {2} + \omega^ {2} L ^ {2}}} = \cos \varphi = \cos 3 0 ^ {\circ} = \frac {\sqrt {3}}{2}\tag{1}
$$

解得

$$
R = \sqrt {3} \omega L = \sqrt {3} \times 2 \pi \times 5 0 \times 0. 1 0 = 5 4 (\Omega)\tag{2}
$$

(2) 并联 C 后, 设整个电路的复阻抗为 $\widetilde{Z}$ , 则有

$$
\begin{array}{r l} \frac {1}{\widetilde {Z}} & = \mathrm{j} \omega C + \frac {1}{R + \mathrm{j} \omega L} = \frac {\mathrm{j} \omega C (R + \mathrm{j} \omega L) + 1}{R + \mathrm{j} \omega L} \\ & = \frac {1 - \omega^ {2} L C + \mathrm{j} \omega C R}{R + \mathrm{j} \omega L} = \frac {(1 - \omega^ {2} L C + \mathrm{j} \omega C R) (R - \mathrm{j} \omega L)}{R ^ {2} + \omega^ {2} L ^ {2}} \\ & = \frac {R + \mathrm{j} \omega [ C (R ^ {2} + \omega^ {2} L ^ {2}) - L ]}{R ^ {2} + \omega^ {2} L ^ {2}}. \end{array}\tag{3}
$$

当上式的虚部为零时，便消除了相位差.于是得

$$
C (R ^ {2} + \omega^ {2} L ^ {2}) \cdot L = 0\tag{4}
$$

解得所求的电容为

$$
\begin{array}{r l} C & = \frac {L}{R ^ {2} + \omega^ {2} L ^ {2}} = \frac {0 . 1 0}{5 4 ^ {2} + (2 \pi \times 5 0 \times 0 . 1 0) ^ {2}} \\ & = 2. 6 \times 1 0 ^ {- 5} (\mathrm{F}) = 2 6 (\mu \mathrm{F}) \end{array}\tag{5}
$$

(3) 若串联 $C'$ ，则整个电路的复阻抗为

$$
\widetilde {Z} ^ {\prime} = R + \mathrm{j} \omega L + \frac {1}{\mathrm{j} \omega C ^ {\prime}} = R + \mathrm{j} \left(\omega L - \frac {1}{\omega C ^ {\prime}}\right)\tag{6}
$$

当上式的虚部为零时，便消除了相位差.于是得

$$
\omega L - \frac {1}{\omega C ^ {\prime}} = 0\tag{7}
$$

解得所求的电容为

$$
\begin{array}{r l} C ^ {\prime} & = \frac {1}{\omega^ {2} L} = \frac {1}{(2 \pi \times 5 0) ^ {2} \times 0 . 1 0} = 1. 0 \times 1 0 ^ {- 4} (\mathrm{F}) \\ & = 1. 0 \times 1 0 ^ {2} (\mu \mathrm{F}) \end{array}\tag{8}
$$

11.48 在 $RL$ 串联电路两端加上 $U = 220\mathrm{V}, \nu = 50\mathrm{Hz}$ 的市电, 已知 $R = 6.0\Omega$ , 感抗 $X_{L} = 8.0\Omega$ . 现在想要将功率因数提高到 0.95, 试问: (1) 应在这电路两端并联多大的电容? (2) 应在这电路中串入多大的电容?

【解】（1）并联电容 C 后，整个电路的复阻抗为

$$
\begin{array}{r l} \widetilde {Z} & = \frac {1}{\frac {1}{R + \mathrm{j} \omega L} + \mathrm{j} \omega C} = \frac {R + \mathrm{j} \omega L}{1 - \omega^ {2} L C + \mathrm{j} \omega C R} \\ & = \frac {R + \mathrm{j} [ \omega L (1 - \omega^ {2} L C) - \omega C R ^ {2} ]}{(1 - \omega^ {2} L C) ^ {2} + \omega^ {2} C ^ {2} R ^ {2}}. \end{array}\tag{1}
$$

相位差为

$$
\begin{array}{r l} \varphi & = \varphi_ {U} - \varphi_ {I} = \arctan \left[ \frac {\omega L (1 - \omega^ {2} L C) - \omega C R ^ {2}}{R} \right] \\ & = \arctan \left[ \frac {\omega L - \omega C (R ^ {2} + \omega^ {2} L ^ {2})}{R} \right] \end{array}\tag{2}
$$

代人数值得

$$
\varphi = \arctan \left[ \frac {8 . 0 - \omega C (6 . 0 ^ {2} + 8 . 0 ^ {2})}{6 . 0} \right] = \arctan \left[ \frac {4 - 5 0 \omega C}{3} \right]\tag{3}
$$

今欲使 $\cos \varphi = 0.95$ ，即

$$
\cos \varphi = \frac {1}{\sqrt {1 + \tan^ {2} \varphi}} = 0. 9 5\tag{4}
$$

所以

$$
\tan \varphi = \sqrt {\frac {1}{0 . 9 5 ^ {2}} - 1} = \pm 0. 3 2 8 7\tag{5}
$$

将此值代入式(3)得

$$
4 - 5 0 \omega C = \pm 3 \times 0. 3 2 8 7 = \pm 0. 9 8 6 1\tag{6}
$$

取正号得

$$
\begin{array}{r l} C _ {+} & = \frac {4 - 0 . 9 8 6 1}{5 0 \times 2 \pi \times 5 0} = 1. 9 \times 1 0 ^ {- 4} (\mathrm{F}) \\ & = 1. 9 \times 1 0 ^ {2} (\mu \mathrm{F}) \end{array}\tag{7}
$$

取负号得

$$
\begin{array}{r l} C _ {-} & = \frac {4 + 0 . 9 8 6 1}{5 0 \times 2 \pi \times 5 0} = 3. 2 \times 1 0 ^ {- 4} (\mathrm{F}) \\ & = 3. 2 \times 1 0 ^ {2} (\mu \mathrm{F}) \end{array}\tag{8}
$$

由式(3)可见,并联 $C_{+}$ 时, $\varphi = \varphi_{U} - \varphi_{I} > 0$ ; 并联 $C_{-}$ 时, $\varphi = \varphi_{U} - \varphi_{I} < 0$ .

(2) 串联电容 $C'$ 后, 整个电路的复阻抗为

$$
\widetilde {Z} = R + \mathrm{j} \omega L + \frac {1}{\mathrm{j} \omega C ^ {\prime}} = R + \mathrm{j} \left(\omega L - \frac {1}{\omega C ^ {\prime}}\right)\tag{9}
$$

相位差为

$$
\varphi = \varphi_ {U} - \varphi_ {I} = \arctan \left[ \frac {\omega L - \frac {1}{\omega C ^ {\prime}}}{R} \right] = \arctan \left[ \frac {8 . 0 - \frac {1}{\omega C ^ {\prime}}}{6 . 0} \right]\tag{10}
$$

由式(4)得

$$
8. 0 - \frac {1}{\omega C ^ {\prime}} = \pm 6 \times 0. 3 2 8 7 = \pm 1. 9 7 2 2\tag{11}
$$

取正号得

$$
\begin{array}{r l} C _ {+} ^ {\prime} & = \frac {1}{\omega (8 - 1 . 9 7 2 2)} = \frac {1}{2 \pi \times 5 0 \times 6 . 2 0 7 8} = 5. 3 \times 1 0 ^ {- 4} (\mathrm{F}) \\ & = 5. 3 \times 1 0 ^ {2} (\mu \mathrm{F}) \end{array}\tag{12}
$$

取负号得

$$
\begin{array}{r l} C _ {-} ^ {\prime} & = \frac {1}{\omega (8 + 1 . 9 7 2 2)} = \frac {1}{2 \pi \times 5 0 \times 9 . 9 7 2 2} = 3. 2 \times 1 0 ^ {- 4} (\mathrm{F}) \\ & = 3. 2 \times 1 0 ^ {2} (\mu \mathrm{F}) \end{array}\tag{13}
$$

由式(10)可见，并联 $C_{+}^{\prime}$ 时， $\varphi = \varphi_U - \varphi_I > 0$ ；串联 $C_{-}^{\prime}$ 时， $\varphi = \varphi_{U'} - \varphi_I < 0$ 

11.49 一个 $RL$ 串联后再与 $C$ 并联的电路如图11.49, 其中电阻 $R$ 、电感 $L$ 和电容 $C$ 以及电源的角频率 $\omega$ 都已知. 试求下列两点间电流与电压的相位差: (1) $a, b$ ; (2) $b, c$ ; (3) $a, c$ ; (4) $d, e$ ; (5) $f, g$ .

$$
\text {   【解   】   } \quad (1) \varphi_ {a b} = \varphi_ {U} - \varphi_ {I} = \arctan \left(\frac {X}{R}\right) = \arctan 0 = 0
$$

$$
(2) \varphi_ {b c} = \varphi_ {U} - \varphi_ {I} = \arctan \left(\frac {X}{r}\right) = \arctan \left(\frac {\omega L}{0}\right) = \frac {\pi}{2}
$$

$$
\varphi_ {a c} = \varphi_ {U} - \varphi_ {I} = \arctan \left(\frac {X}{R}\right) = \arctan \left(\frac {\omega L}{R}\right) \tag {3}
$$

$$
\varphi_ {d e} = \varphi_ {U} - \varphi_ {I} = \arctan \left(\frac {X}{r}\right) = \arctan \left(\frac {\frac {1}{\omega C}}{0}\right) = - \frac {\pi}{2} \tag {4}
$$

(5) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/6975de7d47095b5df0781536569b4db41115850c132c505f0b6ef9edf1f71fcf.jpg)



图11.49


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/b2ae9f2243e8062f29e33f837fcd33c571f771f147cbb9f025896d29deb081de.jpg)



图11.50


11.50 一交流电路如图 11.50, 已知 $R = 8.0\Omega, L = 9.55\mathrm{mH}, C = 530\mu \mathrm{F}$ , 交流电源的电压为 $220\mathrm{V}$ , 频率为 $50\mathrm{Hz}$ . (1) 试分别求 $L$ 和 $C$ 的阻抗 $Z_{L}$ 和 $Z_{C}, LC$ 并联的阻抗 $Z_{LC}$ , 以及整个 $RLC$ 电路的阻抗 $Z$ ; (2) 试求电流 $I_{L}, I_{C}$ 和 $I$ ; (3) 试求 $R$ 两端的电压 $U_{R}$ 和 $LC$ 两端的电压 $U_{LC}$ .

【解】（1）求阻抗

$$
\begin{array}{l} Z _ {L} = \omega L = 2 \pi \times 5 0 \times 9. 5 5 \times 1 0 ^ {- 3} = 3. 0 (\Omega) \\ Z _ {C} = \frac {1}{\omega C} = \frac {1}{2 \pi \times 5 0 \times 5 3 0 \times 1 0 ^ {- 6}} = 6. 0 (\Omega) \\ \widetilde {Z} _ {L C} = \frac {\mathrm{j} \omega L \frac {1}{\mathrm{j} \omega C}}{\mathrm{j} \omega L + \frac {1}{\mathrm{j} \omega C}} = \frac {\mathrm{j} \omega L}{1 - \omega^ {2} L C} \\ Z _ {L C} = \frac {\omega L}{1 - \omega^ {2} L C} = \frac {3 . 0}{1 - 3 . 0 / 6 . 0} = 6. 0 (\Omega) \\ Z = \sqrt {R ^ {2} + Z _ {L C} ^ {2}} = \sqrt {8 . 0 ^ {2} + 6 . 0 ^ {2}} = 1 0. 0 (\Omega) \end{array}
$$

所以

(2) 求电流

$$
I = \frac {U}{Z} = \frac {2 2 0}{1 0 . 0} = 2 2. 0 (\mathrm{A})
$$

$$
\frac {I _ {L}}{I _ {C}} = \frac {Z _ {C}}{Z _ {L}} = \frac {6 . 0}{3 . 0} = 2
$$

因 $I_{L}$ 与 $I_{C}$ 的相位差为 $\pi$ ，故

$$
I = I _ {L} - I _ {C} = 2 2. 0 (\mathrm{A})
$$

由以上两式解得

$$
\begin{array}{l} I _ {C} = 2 2. 0 (\mathrm{A}) \\ I _ {L} = 4 4. 0 (\mathrm{A}) \end{array}
$$

(3) 求电压

$$
\begin{array}{l} {U _ {R} = I R = 2 2. 0 \times 8. 0 = 1 7 6 (\mathrm{V})} \\ {U _ {L} = I Z _ {\mathrm{C}} = 2 2. 0 \times 6. 0 = 1 3 2 (\mathrm{V})} \end{array}
$$

11.51 一 $\pi$ 形滤波电路如图11.51, 已知 $C_1 = C_2 = 10\mu \mathrm{F}, \nu = 100\mathrm{Hz}$ . 要求输出电压 $U_2$ 为输入电压 $U_1$ 的 $\frac{1}{10}$ , 试求 $L$ 的值.

【解】通过 L 和 $C_{2}$ 的复电流为

$$
\widetilde {I} _ {L C _ {2}} = \frac {\widetilde {U} _ {1}}{\mathrm{j} \left(\omega L - \frac {1}{\omega C _ {2}}\right)} = \frac {\mathrm{j} \omega C _ {2} \widetilde {U} _ {1}}{1 - \omega^ {2} L C _ {2}}\tag{1}
$$

所以

$$
\widetilde {U} _ {2} = \widetilde {I} _ {L C _ {2}} \widetilde {Z} _ {\mathrm{C} _ {2}} = \frac {\mathrm{j} \omega C _ {2} \widetilde {U} _ {1}}{1 - \omega^ {2} L C _ {2}} \frac {1}{\mathrm{j} \omega C _ {2}}
$$

$$
= \frac {\widetilde {U} _ {1}}{1 - \omega^ {2} L C _ {2}}\tag{2}
$$

$$
U _ {2} = | \widetilde {U} _ {2} | = \left| \frac {\widetilde {U} _ {1}}{1 - \omega^ {2} L C _ {2}} \right| = \frac {U _ {1}}{| 1 - \omega^ {2} L C _ {2} |}\tag{3}
$$

所以

$$
\left| 1 - \omega^ {2} L C _ {2} \right| = \frac {U _ {1}}{U _ {2}} = 1 0\tag{4}
$$

$$
1 - \omega^ {2} L C _ {2} = \pm 1 0\tag{5}
$$

因 $\omega^2 LC_2 > 0$ ，故式(5)右边只能取负号.于是得

$$
\begin{array}{r l} L & = \frac {1 + 1 0}{\omega^ {2} C _ {2}} = \frac {1 1}{(2 \pi \times 1 0 0) ^ {2} \times 1 0 \times 1 0 ^ {- 6}} \\ & = 2. 8 (\mathrm{H}) \end{array}\tag{6}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/30f4d4df352f106bfca33f78d667638c13d75366dcb2de49a33fd7697e530c4c.jpg)



图11.51


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/43c044b536ab1b695ef86119d26915eee556c9de15594fbeae8f65b58272a49a.jpg)



图11.52


11.52 一交流电路如图 11.52, 设电阻 R、电感 L、电容 C 和电压 U 的角频率 $\omega$ 均为已知, 试求: (1) $I_{1}$ 与 $I_{2}$ 的相位差; (2) $U_{C}$ 与 U 的相位差.

【解】（1）用复数表示，

$$
\widetilde {I} _ {1} = \frac {\widetilde {U}}{\mathrm{j} \omega L} = \frac {\widetilde {U}}{\omega L} \mathrm{e} ^ {- \mathrm{j} \frac {\pi}{2}}\tag{1}
$$

$$
\widetilde {I} _ {2} = \frac {\widetilde {U}}{R + \frac {1}{\mathrm{j} \omega C}} = \frac {\mathrm{j} \omega C \widetilde {U}}{1 + \mathrm{j} \omega C R} = \frac {\omega C (\mathrm{j} + \omega C R)}{1 + \omega^ {2} C ^ {2} R ^ {2}} \widetilde {U}
$$

$$
= \frac {\omega C \widetilde {U}}{\sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}} \mathrm{e} ^ {\mathrm{j} \arctan \left(\frac {1}{\omega C R}\right)}\tag{2}
$$

故得 $I_{1}$ 与 $I_{2}$ 的相位差为

$$
\varphi_ {I _ {1}} - \varphi_ {I _ {2}} = - \frac {\pi}{2} - \arctan \left(\frac {1}{\omega C R}\right) = - \left[ \frac {\pi}{2} + \arctan \left(\frac {1}{\omega C R}\right) \right]\tag{3}
$$

(2) 用复数表示 $U_{C}$ 为

$$
\begin{array}{r l} \widetilde {U} _ {C} & = \widetilde {I} _ {2} \frac {1}{\mathrm{j} \omega C} = \frac {\widetilde {U}}{1 + \mathrm{j} \omega C R} = \frac {\widetilde {U} (1 - \mathrm{j} \omega C R)}{1 + \omega^ {2} C ^ {2} R ^ {2}} \\ & = \frac {\widetilde {U}}{\sqrt {1 + \omega^ {2} C ^ {2} R ^ {2}}} \mathrm{e} ^ {- \mathrm{j} \arctan (\omega C R)} \end{array}\tag{4}
$$

故得 $U_{C}$ 与 $U$ 的相位差为

$$
\varphi_ {U _ {C}} - \varphi_ {U} = - \arctan (\omega C R)\tag{5}
$$

【讨论】式(5)也可写成

$$
\varphi_ {U _ {c}} - \varphi_ {U} = \arctan \frac {1}{\omega C R} - \frac {\pi}{2}\tag{6}
$$

11.53 一交流电路如图 11.53, 其中 R、r、L、C、U 和 U 的角频率 $\omega$ 都已知, 试求下列各量间的相位差: (1) $U_{C}$ 与 $I_{R}$ ; (2) $I_{C}$ 与 $I_{R}$ ; (3) $U_{R}$ 与 U.

【解】(1) $U_{C}$ 与 $I_{R}$ 的相位差

因为

$$
\widetilde {U} _ {C} = \widetilde {U} _ {R} = R \widetilde {I} _ {R}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/3f8289465a2b7cdada1bb52151820c9044581fe6a3217d1f5074a6eff4a2e342.jpg)


(1) 

图11.53

所以

$$
\varphi_ {U _ {C}} - \varphi_ {I _ {R}} = 0\tag{2}
$$

(2) $I_{C}$ 与 $I_{R}$ 的相位差

因为

$$
\begin{array}{r l} \widetilde {I} _ {C} & = \frac {\widetilde {U} _ {C}}{\widetilde {Z} _ {C}} = \mathrm{j} \omega C \widetilde {U} _ {C} \\ & = \mathrm{j} \omega C \widetilde {U} _ {R} = \omega C R \widetilde {I} _ {R} \mathrm{e} ^ {\mathrm{j} \frac {\pi}{2}} \end{array}\tag{3}
$$

所以

$$
\varphi_ {I _ {C}} - \varphi_ {I _ {R}} = \frac {\pi}{2}\tag{4}
$$

(3) $U_{R}$ 与 $U$ 的相位差

因为

$$
\begin{array}{r l} \widetilde {U} _ {R} & = \widetilde {I} \widetilde {Z} _ {R C} = \frac {\widetilde {U}}{\widetilde {Z}} \widetilde {Z} _ {R C} = \frac {\widetilde {U} \widetilde {Z} _ {R C}}{r + j \omega L + \widetilde {Z} _ {R C}} \\ & = \frac {\widetilde {U}}{1 + \frac {r + j \omega L}{\widetilde {Z} _ {R C}}} \end{array}\tag{5}
$$

其中

$$
\widetilde {Z} _ {R C} = \frac {R \frac {1}{\mathrm{j} \omega C}}{R + \frac {1}{\mathrm{j} \omega C}} = \frac {R}{1 + \mathrm{j} \omega C R}\tag{6}
$$

所以

$$
\begin{array}{r l} \widetilde {U} _ {R} & = \frac {\widetilde {U}}{1 + \frac {(r + j \omega L) (1 + j \omega C R)}{R}} \\ & = \frac {R \widetilde {U}}{R + r - \omega^ {2} L C R + j (\omega L + \omega C R r)} \\ & = \frac {R \widetilde {U}}{\sqrt {(R + r - \omega^ {2} L C R) ^ {2} + (\omega L + \omega C R r) ^ {2}}} \times e ^ {- j \arctan \left(\frac {\omega L + \omega C R r}{R + r - \omega^ {2} L C R}\right)} \\ & \varphi_ {U _ {R}} - \varphi_ {U} = - \arctan \left(\frac {\omega L + \omega C R r}{R + r - \omega^ {2} L C R}\right) \end{array}\tag{7}
$$

所以

(8) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/c88a307501e07d886afe8846bee094cdc16f70ce37c44353eb53881e9c524f69.jpg)


11.54 图 11.54 是为消除分布电容而设计的一种脉冲分压器, 要使输出电压 $U_{2}$ 与输入电压 $U_{1}$ 之比等于电阻之比 [即 $U_{2}/U_{1}=R_{2}/(R_{1}+R_{2})$ ] 而与频率无关, 试问 $R_{1}, R_{2}, C_{1}, C_{2}$ 等应满足什么关系?


图11.54


【解】 用复数计算

$$
\begin{array}{r l} \widetilde {U} _ {2} & = \widetilde {I} \widetilde {Z} _ {2} = \frac {\widetilde {U} _ {1}}{\widetilde {Z}} \widetilde {Z} _ {2} = \frac {\widetilde {U} _ {1}}{\widetilde {Z} _ {1} + \widetilde {Z} _ {2}} \widetilde {Z} _ {2} \\ & = \frac {\widetilde {U} _ {1}}{1 + \widetilde {Z} _ {1} / \widetilde {Z} _ {2}} \end{array}\tag{1}
$$

其中

$$
\widetilde {Z} _ {1} = \frac {R _ {1} \frac {1}{\mathrm{j} \omega C _ {1}}}{R _ {1} + \frac {1}{\mathrm{j} \omega C _ {1}}} = \frac {R _ {1}}{1 + \mathrm{j} \omega C _ {1} R _ {1}}\tag{2}
$$

$$
\widetilde {Z} _ {2} = \frac {R _ {2} \frac {1}{\mathrm{j} \omega C _ {2}}}{R _ {2} + \frac {1}{\mathrm{j} \omega C _ {2}}} = \frac {R _ {2}}{1 + \mathrm{j} \omega C _ {2} R _ {2}}\tag{3}
$$

所以

$$
\widetilde {Z} _ {1} / \widetilde {Z} _ {2} = \frac {R _ {1}}{R _ {2}} \frac {1 + \mathrm{j} \omega C _ {2} R _ {2}}{1 + \mathrm{j} \omega C _ {1} R _ {1}}\tag{4}
$$

由式(4)可见,若

$$
C _ {2} R _ {2} = C _ {1} R _ {1}\tag{5}
$$

则将式(4)、(5)代入式(1)便得

$$
\frac {\widetilde {U} _ {2}}{\widetilde {U} _ {1}} = \frac {1}{1 + \widetilde {Z} _ {1} / \widetilde {Z} _ {2}} = \frac {1}{1 + R _ {1} / R _ {2}} = \frac {R _ {2}}{R _ {1} + R _ {2}}\tag{6}
$$

故式(5)便为所求的关系.

11.55 RC 振荡器的电路如图 11.55 所示, 当总电压 $u(t)$ 与分电压 $u_{2}(t)$ 的相位相同时, 电路中的频率称为振荡频率, 以 $\nu_{0}$ 表示. 试证明: (1) $\nu_{0} = \frac{1}{2\pi RC}$ ;

(2) 当 $\nu = \nu_0$ 时, $u(t)$ 与 $u_2(t)$ 的峰值的关系为 $U_0 = 3U_{20}$ .

【证】(1)用复数表示 RC 并联的复阻抗为

$$
\widetilde {Z} _ {2} = \frac {R \frac {1}{\mathrm{j} \omega C}}{R + \frac {1}{\mathrm{j} \omega C}} = \frac {R}{1 + \mathrm{j} \omega C R}\tag{1}
$$

整个电路的阻抗为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/f0f431ddc22bb9b7fa0a1bd00e8bce70c8fed239d3fb9440532b3c76218d50a3.jpg)


$$
\widetilde {Z} = R + \frac {1}{\mathrm{j} \omega C} + \widetilde {Z} _ {2}\tag{2}
$$

于是得 $\widetilde{U}_2$ 为

图11.55

$$
\begin{array}{r l} \widetilde {U} _ {2} & = \widetilde {I} \widetilde {Z} _ {2} = \frac {\widetilde {U}}{\widetilde {Z}} \widetilde {Z} _ {2} = \widetilde {U} \frac {\widetilde {Z} _ {2}}{\widetilde {Z}} \\ & = \widetilde {U} \frac {\frac {R}{1 + \mathrm{j} \omega C R}}{R + \frac {1}{\mathrm{j} \omega C} + \frac {R}{1 + \mathrm{j} \omega C R}} = \frac {R \widetilde {U}}{\left(R + \frac {1}{\mathrm{j} \omega C}\right) (1 + \mathrm{j} \omega C R) + R} \\ & = \frac {R \widetilde {U}}{3 R + \mathrm{j} \left(\omega C R ^ {2} - \frac {1}{\omega C}\right)} \end{array}\tag{3}
$$

由上式可见，当 $\widetilde{U}_2$ 与 $\widetilde{U}$ 的相位相同时，分母中的虚部应为零.设这时 $\omega = \omega_0$ ，便得

$$
\omega_ {0} ^ {2} C ^ {2} R ^ {2} = 1\tag{4}
$$

$$
\omega_ {0} C R = 1\tag{5}
$$

所以

$$
\nu_ {0} = \frac {\omega_ {0}}{2 \pi} = \frac {1}{2 \pi R C}\tag{6}
$$

(2) 将式(4)代入式(3)得

$$
\widetilde {U} _ {2} = \frac {1}{3} \widetilde {U}\tag{7}
$$

所以

$$
U _ {0} = 3 U _ {2 0}\tag{8}
$$

【别证】因

$$
u (t) = u _ {1} (t) + u _ {2} (t)\tag{9}
$$

于是当 $u_{2}(t)$ 与 $u(t)$ 的相位相同时， $u_{1}(t)$ 必定与 $u_{2}(t)$ 的相位相同.由

$$
\widetilde {U} _ {1} = \frac {\widetilde {U}}{\widetilde {Z}} \widetilde {Z} _ {1}, \quad \widetilde {U} _ {2} = \frac {\widetilde {U}}{\widetilde {Z}} \widetilde {Z} _ {2}\tag{10}
$$

可见， $\widetilde{Z}_2$ 与 $\widetilde{Z}_1$ 必定相角相等。 $\widetilde{Z}_2$ 的相角为[参见前11.5题的式(6.3)]

$$
\varphi_ {2} = - \arctan (R \omega C)\tag{11}
$$

$\widetilde{Z}_{1}$ 的相角为[参见前面 11.5 题的式(2.3)]

$$
\varphi_ {1} = - \arctan \left(\frac {1}{R \omega C}\right)\tag{12}
$$

令 $\varphi_{2} = \varphi_{1}$ 便得

$$
R \omega C = \frac {1}{R \omega C}\tag{13}
$$

所以

$$
R ^ {2} \omega^ {2} C ^ {2} = 1\tag{14}
$$

此即式(4)，由此即可得出式(6)和式(8).

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/8bb23cb2f63b16548d95284ac05087e3a57f386805d0ee824a653d3c361fb125.jpg)



图11.56


11.56 交流电路中的一部分如图 11.56 所示，当 $R_{1}$ 或 $R_{2}$ 发生变化时，试问 $I_{1}$ 与 $I_{2}$ 之间的相位差是否发生变化？

【解答】因 $I_{2}$ 与 $U_{ab}$ 同相位，故当 $R_{2}$ 改变时， $I_{1}$ 与 $I_{2}$ 的相位差不变.

$I_{1}$ 与 $U_{ab}$ 的相位差为

$$
\varphi_ {I _ {1}} - \varphi_ {U _ {a b}} = \arctan \omega C R _ {1}
$$

当 $R_{1}$ 改变时， $I_{1}$ 与 $U_{ab}$ 之间的相位差会发生变化，而 $I_{2}$ 与 $U_{ab}$ 同相位，故 $I_{1}$ 与 $I_{2}$ 之间的相位差也会发生变化.

11.57 在一环形铁心上绕有 $N$ 匝外表绝缘的导线, 导线两端接到电动势为 $\varepsilon$ 的交流电源上. 一电阻为 $R$ 、自感可略去不计的均匀细圆环套在这环形铁芯上, 细圆环上 $a, b$ 两点间的环长 (劣弧) 为细圆环长度的 $\frac{1}{n}$ . 将电阻为 $r$ 的交流电流计 $G$ 接在 $a, b$ 两点, 有两种接法, 分别与图 11.57(1) 和 (2) 所示. 试分别求这两种接法时通过 $G$ 的电流.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/1a255a3e071923508c1dc2ff69ecc5c715f48e8b5ee77b9301ce4224c1b22651.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/8579a380055b4d6ef153ac3c350ee6abf0172a976a3cf142f536440bf9a20071.jpg)



(2)



图11.57


【解】(1)接法(1) 细圆环中的电动势为

$$
\mathcal {E} _ {R} = \frac {\mathcal {E}}{N}\tag{1}
$$

细圆环上 ab 段的电阻为

劣弧：

$$
R _ {a b} = \frac {R}{n}\tag{2}
$$

优弧：

$$
R _ {a b} ^ {\prime} = \frac {(n - 1) R}{n}\tag{3}
$$

如图 11.57(1) 接上 G 后, G 的电阻 r 与 $R_{ab}$ 并联, 然后再与 $R_{ab}'$ 串联. 这时总电阻便为

$$
R _ {1} = \frac {r R _ {a b}}{r + R _ {a b}} + R _ {a b} ^ {\prime} = \frac {R r}{R + n r} + \frac {(n - 1) R}{n}\tag{4}
$$

于是总电流(即通过优弧 $R_{ab}^{\prime}$ 的电流)为

$$
I _ {1} = \frac {\mathcal {E} _ {R}}{R _ {1}} = \frac {\varepsilon}{N} \frac {1}{\frac {R r}{R + n r} + \frac {(n - 1) R}{n}}\tag{5}
$$

通过 G 的电流为[参见前面 4.1.9 题式(6)或式(7)]

$$
\begin{array}{r l} i _ {1} & = \frac {\frac {R}{n}}{\frac {R}{n} + r} I _ {1} = \frac {R}{R + n r} I _ {1} \\ & = \frac {R}{R + n r} \frac {\mathcal {E}}{N} \frac {1}{\frac {R r}{R + n r} + \frac {(n - 1) R}{n}} \\ & = \frac {n \mathcal {E}}{N [ (n - 1) R + n ^ {2} r ]} \end{array}\tag{6}
$$

(2) 接法(2) 如图 11.57(2) 接上 G 后, G 的电阻 r 与 $R_{ab}^{\prime}$ 并联, 然后再与 $R_{ab}$ 串联. 这时总电阻便为

$$
R _ {2} = \frac {r R _ {a b} ^ {\prime}}{r + R _ {a b} ^ {\prime}} + R _ {a b} = \frac {(n - 1) R r}{(n - 1) R + n r} + \frac {R}{n}\tag{7}
$$

于是总电流(即通过劣弧 $R_{ab}$ 的电流)为

$$
I _ {2} = \frac {\mathcal {E} _ {R}}{R _ {2}} = \frac {\mathcal {E}}{N} \frac {1}{\frac {(n - 1) R r}{(n - 1) R + n r} + \frac {R}{n}}\tag{8}
$$

通过 G 的电流为[参见前面 4.1.9 题的式(6)或式(7)]

$$
\begin{array}{r l} i _ {2} & = \frac {\frac {(n - 1) R}{n}}{\frac {(n - 1) R}{n} + r} I _ {2} = \frac {(n - 1) R}{(n - 1) R + n r} I _ {2} \\ & = \frac {(n - 1) R}{(n - 1) R + n r} \frac {\mathcal {E}}{N} \frac {1}{\frac {(n - 1) R r}{(n - 1) R + n r} + \frac {R}{n}} \\ & = \frac {n (n - 1) \mathcal {E}}{N [ (n - 1) R + n ^ {2} r ]} \end{array}\tag{9}
$$

11.58 一交流电桥的电路如图 11.58(1)，其中 $\widetilde{Z}_{1}$ 、 $\widetilde{Z}_{2}$ 、 $\widetilde{Z}_{3}$ 和 $\widetilde{Z}_{4}$ 分别为四个臂的复阻抗；当交流检电流计 G 中无电流通过时，交流电桥便达到平衡。试证明：交流电桥的平衡条件为 $\widetilde{Z}_{2}\widetilde{Z}_{3}=\widetilde{Z}_{4}\widetilde{Z}_{1}$ 。

【证】设电源的电动势为 $\mathcal{E}$ ，交流检电计的复阻抗为 $\widetilde{Z}_5$ ，通过各支路的复电流如图11.58(2)所示，其中已用基尔霍夫第一定律，将 $\widetilde{Z}_2$ 和 $\widetilde{Z}_4$ 中的电流分别表示为 $\widetilde{I}_2 = \widetilde{I}_1 - \widetilde{I}_5$ 和 $\widetilde{I}_4 = \widetilde{I}_3 + \widetilde{I}_5$ 以减少变量。再由基尔霍夫第二定律列出独立方程如下：

回路 ACDA:

$$
\widetilde {I} _ {1} \widetilde {Z} _ {1} + \widetilde {I} _ {5} \widetilde {Z} _ {5} - \widetilde {I} _ {3} \widetilde {Z} _ {3} = 0\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/02156363eb37048894a489b656dc7bd96d323c6d4cf47516c7235038cfb11dd8.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/4ebc565e580da61caac7c6fef5838a45887fcab6c1a47c11884b95f1a537bacf.jpg)



(2)



图11.58


回路 CBDC: $(\widetilde{I}_{1}-\widetilde{I}_{5})\widetilde{Z}_{2}-(\widetilde{I}_{3}+\widetilde{I}_{5})\widetilde{Z}_{4}-\widetilde{I}_{5}\widetilde{Z}_{5}=0$ 

(2) 

回路 $ACB \mathcal{E}A$ : $\widetilde{I}_1 \widetilde{Z}_1 + (\widetilde{I}_1 - \widetilde{I}_5) \widetilde{Z}_2 - \widetilde{\mathcal{E}} = 0$ 

(3) 

下面求通过 G 的 $\widetilde{I}_{5}$ . 由式(1)、(2)消去 $\widetilde{I}_{3}$ 得

$$
\left(\widetilde {Z} _ {4} \widetilde {Z} _ {1} - \widetilde {Z} _ {2} \widetilde {Z} _ {3}\right) \widetilde {I} _ {1} + \left(\widetilde {Z} _ {4} \widetilde {Z} _ {5} + \widetilde {Z} _ {2} \widetilde {Z} _ {3} + \widetilde {Z} _ {3} \widetilde {Z} _ {4} + \widetilde {Z} _ {3} \widetilde {Z} _ {5}\right) \widetilde {I} _ {5}\tag{4}
$$

由式(3)、(4)消去 $\widetilde{I}_1$ ，便得

$$
\widetilde {I} _ {5} = \frac {\left(\widetilde {Z} _ {2} \widetilde {Z} _ {3} - \widetilde {Z} _ {4} \widetilde {Z} _ {1}\right) \widetilde {\mathcal {E}}}{\widetilde {Z} _ {1} \widetilde {Z} _ {2} \left(\widetilde {Z} _ {3} + \widetilde {Z} _ {4}\right) + \widetilde {Z} _ {3} \widetilde {Z} _ {4} \left(\widetilde {Z} _ {1} + \widetilde {Z} _ {2}\right) + \left(\widetilde {Z} _ {1} + \widetilde {Z} _ {2}\right) \left(\widetilde {Z} _ {3} + \widetilde {Z} _ {4}\right) \widetilde {Z} _ {5}}\tag{5}
$$

由式(5)可见,当

$$
\widetilde {Z} _ {2} \widetilde {Z} _ {3} = \widetilde {Z} _ {4} \widetilde {Z} _ {1}\tag{6}
$$

时， $\widetilde{I}_{5}=0$ ，即无电流通过G，这时电桥达到平衡.

【讨论】有些书上是这样导出交流电桥的平衡条件的:当电桥达到平衡时,通过G的电流

$$
\widetilde {I} _ {5} = 0\tag{7}
$$

于是便有

$$
\widetilde {I} _ {1} = \widetilde {I} _ {2}, \widetilde {I} _ {3} = \widetilde {I} _ {4}\tag{8}
$$

又因 C、D 两点间电压为零，故有

$$
\widetilde {I} _ {1} \widetilde {Z} _ {1} = \widetilde {I} _ {3} \widetilde {Z} _ {3}\tag{9}
$$

$$
\widetilde {I} _ {1} \widetilde {Z} _ {2} = \widetilde {I} _ {3} \widetilde {Z} _ {4}\tag{10}
$$

于是由式(8)、(9)、(10)得

$$
\widetilde {Z} _ {2} \widetilde {Z} _ {3} = \widetilde {Z} _ {4} \widetilde {Z} _ {1}\tag{11}
$$

上述导出过程[即由式(7)至(10)导出式(11)]表明:式(11)是电桥平衡的结果;但它是否是电桥平衡的充分条件,尚须进一步论证.而由解电路方程得出的式(5)导出式(6),则清楚地表明,式(6)是交流电桥平衡的必要和充分条件.

11.59 图 11.59 中的(1)和(2)分别是两种交流电桥,试分别求它们各自的平衡条件.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/b62709364a3bca013265bb37b7316630957e20a52fd1689a73c0d52a23407db3.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/f666b8563cd04d513004bb726f1c777bf8d2bf23ce2df6b71c3464d7027877c0.jpg)



(2)



图11.59


【解】（1）图11.59(1). 根据前面11.58题的交流电桥平衡条件式(6)，得这电桥的平衡条件为

$$
R _ {2} (r _ {x} + \mathrm{j} \omega L _ {x}) = R _ {1} (r + \mathrm{j} \omega L)\tag{1}
$$

此式包括下列两式：

$$
R _ {2} r _ {x} = R _ {1} r\tag{2}
$$

$$
R _ {2} L _ {x} = R _ {1} L\tag{3}
$$

只有式(2)、(3)同时满足,交流电桥才达到平衡.

(2) 图 11.59 (2). 根据前面 11.58 题的交流电桥平衡条件式(6)，得这电桥的平衡条件为

$$
R _ {2} \left(r _ {x} + \frac {1}{\mathrm{j} \omega C _ {x}}\right) = R _ {1} \left(r + \frac {1}{\mathrm{j} \omega C}\right)\tag{4}
$$

此式包括下列两式：

$$
R _ {2} r _ {x} = R _ {1} r\tag{5}
$$

$$
R _ {1} C _ {x} = R _ {2} C\tag{6}
$$

只有式(5)、(6)同时满足,交流电桥才达到平衡.

11.60 麦克斯韦电桥是用来测量自感和电容的装置, 它的电路如图 11.60 所示. 为了使电桥达到平衡, 其中 $R_{4}$ 和 C 都是可变的. 试证明: 它的平衡条件为: $R_{2}R_{3}=R_{4}R_{1}$ 和 $L=R_{2}R_{3}C$ .

【证】根据前面11.58题的交流电桥平衡条件式(6)，得麦克斯韦电桥的平衡条件为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/26b1dae370b80697dacdc00e3b0fc46165ce2dce50252ec6ae2bc498a05a982f.jpg)



图11.60


$$
(R _ {1} + \mathrm{j} \omega L) \frac {R _ {4} \frac {1}{\mathrm{j} \omega C}}{R _ {4} + \frac {1}{\mathrm{j} \omega C}} = \dot {R} _ {2} R _ {3}\tag{1}
$$

所以

$$
(R _ {1} + \mathrm{j} \omega L) R _ {4} = R _ {2} R _ {3} (1 + \mathrm{j} \omega C R _ {4})
$$

令上式两边实部和虚部分别相等,便得

$$
R _ {2} R _ {3} = R _ {4} R _ {1}\tag{2}
$$

$$
L = R _ {2} R _ {3} C\tag{3}
$$

11.61 奥温(Owen)电桥的线路如图 11.61 所示, 其中 $R_{1}$ 和 $R_{3}$ 都是可变的, 用于调节平衡. 试求这电桥的平衡条件.

【解】根据前面11.58题的交流电桥的平衡条件式(6)，得奥温电桥的平衡条件为

$$
(R + R _ {1} + \mathrm{j} \omega L) \frac {1}{\mathrm{j} \omega C _ {4}} = R _ {2} \left(R _ {3} + \frac {1}{\mathrm{j} \omega C _ {3}}\right)\tag{1}
$$

所以

$$
R + R _ {1} + \mathrm{j} \omega L = R _ {2} \left(R _ {3} + \frac {1}{\mathrm{j} \omega C _ {3}}\right) \mathrm{j} \omega C _ {4}
$$

$$
= R _ {2} \frac {C _ {4}}{C _ {3}} + \mathrm{j} R _ {2} R _ {3} \omega C _ {4}\tag{2}
$$

令上式两边实部和虚部分别相等,便得

$$
R = \frac {C _ {4}}{C _ {3}} R _ {2} - R _ {1}\tag{3}
$$

$$
L = R _ {2} R _ {3} C _ {4}\tag{4}
$$

式(3)、(4)便是所求的平衡条件；换句话说，只有式(3)、(4)同时满足，奥温电桥才能达到平衡。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/16a3d23e49203254880a022ce2a94502c725888303bd48f5bcd93ad130e03000.jpg)



图11.61


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/bf3527c062aeecea091748083522c0be011da813dc05fdb863654f3f85e8dbc5.jpg)



图11.62


11.62 图 11.62 是测量交流电频率的电桥, 其中电阻 $R_{3}$ 和 $R_{4}$ 、电感 L 和电容 C 都是可变的, 用以调节电桥的平衡. 试求这电桥的平衡条件, 从而导出所测交流电的频率.

【解】根据前面11.58题的交流电桥的平衡条件式(6)，得这电桥的平衡条件为

$$
\left(R _ {2} + \mathrm{j} \omega L + \frac {1}{\mathrm{j} \omega C}\right) R _ {3} = R _ {4} R _ {1}\tag{1}
$$

令上式两边实部和虚部分别相等,便得

$$
R _ {2} R _ {3} = R _ {4} R _ {1}\tag{2}
$$

$$
\omega L = \frac {1}{\omega C}\tag{3}
$$

式(2)、(3)便是所求的平衡条件；换句话说，只有式(2)、(3)同时满足，频率电桥才能达到平衡。调节电桥使达到平衡，由式(3)得所测的交流电的频率为

$$
\nu = \frac {\omega}{2 \pi} = \frac {1}{2 \pi \sqrt {L C}}\tag{4}
$$

11.63 一变压器的原线圈为 660 匝, 接在 220V 的交流电源上, 测得三个副线圈的电压分别为 (1)5V, (2)6.3V 和 (3)350V. 试分别求它们的匝数. 设这三个副线圈中的电流分别为 (1)3A, (2)3A 和 (3)280mA, 试问通过原线圈的电流是多少?

【解】三个副线圈的匝数分别为

5V 的： $N_{1}=\frac{660}{220}\times5=15$ 匝

6.3V的： $N_{2} = \frac{660}{220}\times 6.3 = 19$ 匝

350V的： $N_{3}=\frac{660}{220}\times350=1050$ 匝

原线圈中的电流为

$$
\begin{array}{r l} I & = \frac {1 5}{6 6 0} \times 3 + \frac {1 9}{6 6 0} \times 3 + \frac {1 0 5 0}{6 6 0} \times 2 8 0 \times 1 0 ^ {- 3} \\ & = 0. 6 0 (\mathrm{A}) \end{array}
$$

11.64 要将一个输入 220V、输出 6.3V 的变压器，改绕成输入 220V、输出 30V 的变压器；现拆出它的次级线圈，数出圈数为 38 匝，试问应改绕成多少匝？

【解】设所求匝数为 $N$ ，则有

$$
\frac {N}{3 0} = \frac {3 8}{6 . 3}
$$

故得

$$
N = \frac {3 8}{6 . 3} \times 3 0 = 1 8 1 \text { 匝 }
$$

11.65 两用变压器是一种既可用 220V 电源,也可用 110V 电源的变压器,其结构如图 11.65 所示,原线圈是由两组完全相同的线圈 1、2 和 3、4 构成的.在用 220V 电源时,将 2 和 3 接在一起,再将 1 和 4 分别接到 220V 电源的两极上;在用 110V 电源时,将 1 和 3 接在一起,2 和 4 接在一起,然后分别接到 110V 电源的两极上.在这两种情况下,副线圈的电压都相同,即都是 280V 和 6.3V.试说明它的道理.

【解答】在两种情况下,通过原线圈的电流相同,因而通过副线圈的磁通量相同,所以产生

的电动势相同.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/4290e646f11d311ffb6119a9b365492746f6e9be75f1cbce6ccfbb09e7d7058f.jpg)



图11.65


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/5afb5f492f3fa93653cabaca547b81936f0b345d2fdd8b50f720be1bcc57112a.jpg)



图11.66


11.66 自耦变压器是绕在铁心上的一个线圈, 按一定的匝数分别接出一些线头而成, 如图 11.66 所示. 已知 $a, b$ 间为 100 匝, $b, c$ 间为 200 匝, $c, d$ 间为 300 匝, $d, e$ 间为 400 匝. 当 $a, e$ 间加上 $U_{ae} = 120\mathrm{V}$ 的交流电压时, 试求 $U_{ab}, U_{ac}, U_{bc}$ 和 $U_{de}$ .

【解】 $a, e$ 间的匝数为

$$
N = 1 0 0 + 2 0 0 + 3 0 0 + 4 0 0 = 1 0 0 0 \text { 匝 }
$$

各处电压如下：

$$
U _ {a b} = \frac {1 2 0}{1 0 0 0} \times 1 0 0 = 1 2 (\mathrm{V})
$$

$$
U _ {a c} = \frac {1 2 0}{1 0 0 0} \times (1 0 0 + 2 0 0) = 3 6 (\mathrm{V})
$$

$$
U _ {b c} = \frac {1 2 0}{1 0 0 0} \times 2 0 0 = 2 4 (\mathrm{V})
$$

$$
U _ {d e} = \frac {1 2 0}{1 0 0 0} \times 4 0 0 = 4 8 (\mathrm{V})
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/4eae54279b7f208cdd096f655eaa193a7e0ebd4b646a437cbd28454252521790.jpg)



图11.67


11.67 一升压变压器将 100V 的交流电压升高到 3300V. 现将一条导线套住变压器的铁心接在交流伏特计 V 上, 如图 11.67 所示, 这伏特计的读数为 0.50V. 试问这变压器两绕组的匝数各是多少?

【解】设原线圈为 $N_{1}$ 匝，副线圈为 $N_{2}$ 匝，则有

$$
N _ {2} / N _ {1} = 3 3 0 0 / 1 0 0 = 3 3\tag{1}
$$

$$
N _ {1} / 1 = 1 0 0 / 0. 5 0 = 2 0 0\tag{2}
$$

所以

$$
N _ {1} = 2 0 0 \text { 匝 }\tag{3}
$$

$$
N _ {2} = 3 3 N _ {1} = 3 3 \times 2 0 0 = 6 6 0 0 \text { 匝 }\tag{4}
$$

11.68 一交流讯号电源的电动势为 $\mathcal{E}=6.0V$ ，内阻为 $r=100\Omega$ ;一扬声器的电阻为 $R=8.0\Omega$ . (1) 将讯号电源直接接到扬声器上, 如图 11.68(1) 所示, 试求讯号电源的输出功率; (2) 讯号电源通过一耦合变压器(原线圈匝数为 $N_{1}=350$ , 副线圈匝数为 $N_{2}=100$ ) 接到扬声器上, 如图 11.68(2) 所示, 试求这时讯号电源的输出功率.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/71dd0d25bf04d380bb3b65ddb1e98e181742a8d323e9f6dda2f2479b58eaf9d1.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/295f258f47eb22fd3e3a8ac0fce0f954ae87a01a4be053eb5e0255cccdbd7ae1.jpg)



图11.68


【解】（1）讯号电源直接接到扬声器上 讯号电源的输出功率为

$$
\begin{array}{r l} P & = I U = I ^ {2} R = \left(\frac {\xi}{r + R}\right) ^ {2} R \\ & = \left(\frac {6 . 0}{1 0 0 + 8 . 0}\right) ^ {2} \times 8. 0 = 2. 5 \times 1 0 ^ {- 2} (\mathrm{W}) \end{array}\tag{1}
$$

(2)讯号电源通过耦合变压器接到扬声器上,这时对于讯号电源来说,变压器和扬声器的等效阻抗(反射阻抗或折合阻抗)为

$$
R ^ {\prime} = \left(\frac {N _ {1}}{N _ {2}}\right) ^ {2} R = \left(\frac {3 5 0}{1 0 0}\right) ^ {2} \times 8. 0 = 9 8 (\Omega)\tag{2}
$$

于是得这时讯号电源的输出功率为

$$
\begin{array}{r l} P ^ {\prime} & = I ^ {\prime} U ^ {\prime} = I ^ {2} R ^ {\prime} = \left(\frac {\varepsilon}{r + R ^ {\prime}}\right) ^ {2} R ^ {\prime} \\ & = \left(\frac {6 . 0}{1 0 0 + 9 8}\right) ^ {2} \times 9 8 = 9. 0 \times 1 0 ^ {- 2} (\mathrm{W}) \end{array}\tag{3}
$$

【讨论】扬声器的电阻为 $R = 8.0 \Omega$ ，讯号电源的内阻为 $r = 100 \Omega$ ，两者相差很大，不匹配。故将讯号电源直接接到扬声器上，电源的输出功率只有 $2.5 \times 10^{-2} W$ 。在它们间加入耦合变压器后，电源的输出功率便增加到 $9.0 \times 10^{-2} W$ ，是不加耦合变压器时输出功率的 3.6 倍。可见电源与负载间耦合匹配的重要性。

前面 11.15 题曾得出结论: 当负载的阻抗等于电源阻抗的共轭复数(即匹配)时, 电源输送到负载上的功率为最大, 其值为

$$
P _ {\max} = \frac {\mathcal {E} ^ {2}}{4 X}\tag{4}
$$

将本题的数值代入上式,便得

$$
P _ {\max} = \frac {6 . 0 ^ {2}}{4 \times 1 0 0} = 9. 0 \times 1 0 ^ {- 2} (\mathrm{W})\tag{5}
$$

可见加入耦合变压器后,已达到匹配.

11.69 一同轴电缆由半径为 $a$ 的长直导线和与它同轴的导体薄圆筒构成，圆筒的半径为 $b$ . 在导线与圆筒间充满介电常数为 $\varepsilon_{\mathrm{r}}$ 、相对磁导率为 $\mu_{\mathrm{r}}$ 的均匀介质. 电缆在使用时，电流均匀分在导线和圆筒的横截面上. 电缆的特性阻抗定义为 $Z_0 = \sqrt{L_1 / C_1}$ ，式中 $L_{1}$ 为单位长度的自感， $C_{1}$ 为单位长度的电容. 略去导线内的磁通量. (1) 试求这电缆的特性阻抗 $Z_0$ ; (2) 很多实用电缆都采用 $Z_0 = 50\Omega$ (有时称为 $50\Omega$ 电缆), 设其中介质为 $\varepsilon_{\mathrm{r}} = 2.3, \mu_{\mathrm{r}} = 1$ 的聚乙烯, 试计算 $b / a$ 的值.

【解】（1）先求 $L_{1}$ 和 $C_1$ 。设导线均匀带电，单位长度的电荷量为 $\lambda$ ，则在导线与圆筒间离轴线为 $r$ 处，由对称性和高斯定理得电场强度为

$$
\boldsymbol {E} = \frac {\lambda r}{2 \pi \varepsilon_ {r} \varepsilon_ {0} r ^ {2}}\tag{1}
$$

导线与圆筒的电势差为

$$
U _ {a b} = \int_ {a} ^ {b} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = \frac {\lambda}{2 \pi \varepsilon_ {\mathrm{r}} \varepsilon_ {0}} \int_ {a} ^ {b} \frac {\boldsymbol {r} \cdot \mathrm{d} \boldsymbol {r}}{r ^ {2}}
$$

$$
= \frac {\lambda}{2 \pi \epsilon_ {r} \epsilon_ {0}} \ln \frac {b}{a}\tag{2}
$$

于是得

$$
C _ {1} = \frac {\lambda}{U _ {a b}} = \frac {2 \pi \varepsilon_ {\mathrm{r}} \varepsilon_ {0}}{\ln \frac {b}{a}}\tag{3}
$$

设导线所载电流为 I，则由对称性和安培环路定理得出，在导线与圆筒间离轴线为 r 处，磁场强度为

$$
\boldsymbol {H} = \frac {I}{2 \pi r} \boldsymbol {e}\tag{4}
$$

式中 e 为电流 I 的右手螺旋方向. 单位长度导线与圆筒间的磁通量为

$$
\begin{array}{r l} \Phi_ {1} & = \iint_ {S _ {1}} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = \iint_ {S _ {1}} \mu_ {\mathrm{r}} \mu_ {0} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {S} = \frac {\mu_ {\mathrm{r}} \mu_ {0} I}{2 \pi} \int_ {a} ^ {b} \frac {\mathrm{d} r}{r} \\ & = \frac {\mu_ {\mathrm{r}} \mu_ {0} I}{2 \pi} \ln \frac {b}{a} \end{array}\tag{5}
$$

于是得

$$
L _ {1} = \frac {\Phi_ {1}}{I} = \frac {\mu_ {\mathrm{r}} \mu_ {0}}{2 \pi} \ln \frac {b}{a}\tag{6}
$$

依定义,由式(3)、(6)得特性阻抗为

$$
Z _ {0} = \sqrt {\frac {L _ {1}}{C _ {1}}} = \frac {1}{2 \pi} \sqrt {\frac {\mu_ {\mathrm{r}} \mu_ {0}}{\varepsilon_ {\mathrm{r}} \varepsilon_ {0}}} \ln \frac {b}{a}\tag{7}
$$

(2) $50\Omega$ 电缆的特性阻抗为

$$
Z _ {0} = \frac {1}{2 \pi} \sqrt {\frac {\mu_ {\mathrm{r}} \mu_ {0}}{\epsilon_ {\mathrm{r}} \epsilon_ {0}}} \ln \frac {b}{a} = 5 0\tag{8}
$$

所以

$$
\ln \frac {b}{a} = 2 \pi \times 5 0 \times \sqrt {\frac {2 . 3 \times 8 . 8 5 4 \times 1 0 ^ {- 1 2}}{1 \times 4 \pi \times 1 0 ^ {- 7}}}
$$

$$
= 1. 2 6\tag{9}
$$

所以

$$
\frac {b}{a} = \mathrm{e} ^ {1. 2 6} = 3. 5\tag{10}
$$

【讨论】若考虑导线内的磁通量,则这电缆单位长度的自感为[参见前面8.3.28题的式(17)]

$$
L _ {1} = \frac {\mu_ {\mathrm{r}} \mu_ {0}}{4 \pi} \left(\frac {1}{2} + 2 \ln \frac {b}{a}\right)\tag{11}
$$

这时电缆的特性阻抗便为

$$
Z _ {0} = \sqrt {\frac {L _ {1}}{C _ {1}}} = \frac {1}{2 \pi} \sqrt {\frac {\mu_ {\mathrm{r}} \mu_ {0}}{\varepsilon_ {\mathrm{r}} \varepsilon_ {0}}} \sqrt {\left(\ln \frac {b}{a}\right) ^ {2} + \frac {1}{4} \ln \frac {b}{a}}\tag{12}
$$

对于 $50\Omega$ 的电缆,便有

$$
\left(\ln \frac {b}{a}\right) ^ {2} + \frac {1}{4} \ln \frac {b}{a} = 1. 2 6 ^ {2} = 1. 5 9\tag{13}
$$

解得

$$
\ln \frac {b}{a} = 1. 1 4\tag{14}
$$

所以

$$
\frac {b}{a} = 3. 1
$$

比较式(10)和式(15),可见相差约13%.

(15) 

11.70 平行导体片传输线的一段如图 11.70 所示, 两导体薄片的宽度都是 $a$ , 相距为 $b$ , 中间充满介电常数为 $\varepsilon_{r}$ 、相对磁导率为 $\mu_{r}$ 的均匀介质. 使用时, 电流沿长度方向流动, 从一片流去, 另一片流回. 设电流在两片上都是均匀分布, 并略去边缘效应. 这传输线的特性阻抗定义为 $Z_{0} = \sqrt{L_{1}/C_{1}}$ , 式中 $L_{1}$ 是单位长度的自感, $C_{1}$ 是单位长度的电容. 试证明: $Z_{0} = \sqrt{\frac{\mu_{r}\mu_{0}}{\varepsilon_{r}\varepsilon_{0}}\frac{b}{a}}$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/e48270daa586f323de3cb6978b3b20dc88d03b9419d99d904095fd770b58409a.jpg)



图11.70


【证】根据平行板电容器的公式

$$
C = \frac {\varepsilon_ {r} \varepsilon_ {0} S}{d}\tag{1}
$$

得单位长度的电容为

$$
C _ {1} = \frac {\varepsilon_ {\mathrm{r}} \varepsilon_ {0} a}{b}\tag{2}
$$

根据前面 5.2.11 题的式(7)，两片间磁感强度 B 的方向与片的表面平行并与长度方向垂直，B 的大小为

$$
B = \mu_ {\mathrm{r}} \mu_ {0} \frac {I}{a}\tag{3}
$$

两片间单位长度的磁通量为

$$
\Phi_ {1} = B b = \mu_ {\mathrm{r}} \mu_ {0} \frac {I b}{a}\tag{4}
$$

故得单位长度的自感为

$$
L _ {1} = \frac {\Phi_ {1}}{I} = \frac {\mu_ {\mathrm{r}} \mu_ {0} b}{a}\tag{5}
$$

由式(2)、(5)得特性阻抗为

(6) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/56999cdc3ebdb37546e106dcef53bd7f2fec2b259c0b9611fb2f10169a77d70a.jpg)


$$
Z _ {0} = \sqrt {L _ {1} / C _ {1}} = \sqrt {\frac {\mu_ {\mathrm{r}} \mu_ {0}}{\varepsilon_ {\mathrm{r}} \varepsilon_ {0}}} \frac {b}{a}
$$


图11.71


11.71 一星形联接的三相对称负载(电动机), 每相的电阻为 $R = 6.0\Omega$ , 电抗为 $X = 8.0\Omega$ ; 电源的线电压为 $380\mathrm{V}$ , 如图 11.71 所示.(1)试求线电流和负载所消耗的功率;(2)如果改接成三角形, 试求线电流和负载所消耗的功率.

【解】（1）星形联接 线电流为

$$
I _ {l} = I _ {\varphi} = \frac {U _ {\phi}}{Z} = \frac {U _ {l}}{\sqrt {3} Z} = \frac {3 8 0}{\sqrt {3} \sqrt {6 . 0 ^ {2} + 8 . 0 ^ {2}}} = 2 2 (\mathrm{A})\tag{1}
$$

负载所消耗的功率为

$$
\begin{array}{r l} P & = \sqrt {3} I _ {l} U _ {l} \cos \varphi = \sqrt {3} \times 2 2 \times 3 8 0 \times \frac {6 . 0}{\sqrt {6 . 0 ^ {2} + 8 . 0 ^ {2}}} \\ & = 8. 7 \times 1 0 ^ {3} (\mathrm{W}) = 8. 7 \mathrm{kW} \end{array}\tag{2}
$$

(2) 三角形联接 线电流为

$$
I _ {l} = \sqrt {3} I _ {\varphi} = \sqrt {3} \frac {U _ {\varphi}}{Z} = \sqrt {3} \times \frac {3 8 0}{\sqrt {6 . 0 ^ {2} + 8 . 0 ^ {2}}} = 6 6 (\mathrm{A})\tag{3}
$$

负载所消耗的功率为

$$
\begin{array}{r l} P & = \sqrt {3} I _ {l} U _ {l} \cos \varphi = \sqrt {3} \times 6 6 \times 3 8 0 \times \frac {6 . 0}{\sqrt {6 . 0 ^ {2} + 8 . 0 ^ {2}}} \\ & = 2. 6 \times 1 0 ^ {4} (\mathrm{W}) = 2 6 \mathrm{kW} \end{array}\tag{4}
$$

11.72 三相交流电的线电压为 $380\mathrm{V}$ , 负载是不对称的纯电阻, $R_{A} = R_{B} = 22\Omega, R_{C} = 27.5\Omega$ , 如图 11.72(1)所示. (1)试求中线电流和负载上各相的相电压; (2)若中线断开, 负载上各相的电压将变为多少?

【解】(1)各线电流为

$$
\widetilde {I} _ {A} = \frac {3 8 0}{\sqrt {3} R _ {A}} \mathrm{e} ^ {\mathrm{j} \omega t} = \frac {3 8 0}{\sqrt {3} \times 2 2} \mathrm{e} ^ {\mathrm{j} \omega t} = 1 0 \mathrm{e} ^ {\mathrm{j} \omega t}\tag{1}
$$

$$
\widetilde {I} _ {B} = \frac {3 8 0}{\sqrt {3} R _ {B}} e ^ {j (\omega t - \frac {2 \pi}{3})} = \frac {3 8 0}{\sqrt {3} \times 2 2} e ^ {j (\omega t - \frac {2 \pi}{3})} = 1 0 e ^ {j (\omega t - \frac {2 \pi}{3})}\tag{2}
$$

$$
\widetilde {I} _ {C} = \frac {3 8 0}{\sqrt {3} R _ {C}} \mathrm{e} ^ {\mathrm{j} \left(\omega t + \frac {2 \pi}{3}\right)} = \frac {3 8 0}{\sqrt {3} \times 2 7 . 5} \mathrm{e} ^ {\mathrm{j} \left(\omega t + \frac {2 \pi}{3}\right)} = 8 \mathrm{e} ^ {\mathrm{j} \left(\omega t + \frac {2 \pi}{3}\right)}\tag{3}
$$

中线电流为

$$
\begin{array}{r l} \widetilde {I} _ {0} & = \widetilde {I} _ {A} + \widetilde {I} _ {B} + \widetilde {I} _ {C} = [ 1 0 + 1 0 e ^ {- j \frac {2 \pi}{3}} + 8 e ^ {j \frac {2 \pi}{3}} ] e ^ {j \omega t} \\ & = [ 1 0 + 1 0 \cos (- 1 2 0 ^ {\circ}) + 1 0 j \sin (- 1 2 0 ^ {\circ}) + 8 \cos 1 2 0 ^ {\circ} \\ & + 8 j \sin 1 2 0 ^ {\circ} ] e ^ {j \omega t} \\ & = [ 1 - \sqrt {3} j ] e ^ {j \omega t} = 2 e ^ {j (\omega t - \arctan \sqrt {3})} = 2 e ^ {j (\omega t - 6 0 ^ {\circ})} \end{array}\tag{4}
$$

其峰值为

$$
I _ {0} = 2. 0 \mathrm{A}\tag{5}
$$

负载上各相的相电压分别为

$$
U _ {A O} = U _ {B O} = I _ {A} R _ {A} = 1 0 \times 2 2 = 2 2 0 (\mathrm{V})\tag{6}
$$

$$
U _ {C O} = I _ {C} R _ {C} = 8 \times 2 7. 5 = 2 2 0 (\mathrm{V})\tag{7}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/f038319b8d5c2f0ba99cc9a95624378e231e330d2716f55a30161e3a10554897.jpg)



图11.72(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/10c41d6b6477802e722015a575cabc59f390f4bf66b9de8dc769882df28ce041.jpg)



图11.72(2)


(2) 中线断开 先求电流, 再由电流求电压. 如图 11.72(2), 由基尔霍夫定律有

$$
\widetilde {I} _ {A} + \widetilde {I} _ {B} + \widetilde {I} _ {C} = 0\tag{8}
$$

$$
R _ {A} \widetilde {I} _ {A} - R _ {B} \widetilde {I} _ {B} = \widetilde {U} _ {A B}\tag{9}
$$

$$
R _ {A} \widetilde {I} _ {A} - R _ {C} \widetilde {I} _ {C} = \widetilde {U} _ {A C} = - \widetilde {U} _ {C A}\tag{10}
$$

由以上三式解得

$$
\widetilde {I} _ {A} = \frac {1}{\Delta} \left[ R _ {C} \widetilde {U} _ {A B} - R _ {B} \widetilde {U} _ {C A} \right]\tag{11}
$$

$$
\widetilde {I} _ {B} = - \frac {1}{\Delta} \left[ \left(R _ {A} + R _ {C}\right) \widetilde {U} _ {A B} + R _ {A} \widetilde {U} _ {C A} \right]\tag{12}
$$

$$
\widetilde {I} _ {C} = \frac {1}{\Delta} \left[ R _ {A} \widetilde {U} _ {A B} + (R _ {A} + R _ {B}) \widetilde {U} _ {C A} \right]\tag{13}
$$

式中

$$
\begin{array}{r l} \Delta & = R _ {A} R _ {B} + R _ {B} R _ {C} + R _ {C} R _ {A} \\ & = 2 2 \times 2 2 + 2 2 \times 2 7. 5 + 2 7. 5 \times 2 2 \\ & = 1 6 9 4 (\Omega^ {2}) \end{array}\tag{14}
$$

因为

$$
\widetilde {U} _ {A B} = U e ^ {j \omega t}\tag{15}
$$

$$
\widetilde {U} _ {\mathrm{CA}} = U \mathrm{e} ^ {\mathrm{j} \left(\omega t + \frac {2 \pi}{3}\right)}\tag{16}
$$

故得各相电压如下：

$$
\begin{array}{r l} \widetilde {U} _ {A O} & = R _ {A} \widetilde {I} _ {A} = \frac {R _ {A}}{\Delta} \left[ R _ {C} \widetilde {U} _ {A B} - R _ {B} \widetilde {U} _ {C A} \right] \\ & = \frac {R _ {A} U e ^ {j \omega t}}{\Delta} \left[ R _ {C} - R _ {B} e ^ {j \frac {2 \pi}{3}} \right] \\ & = \frac {R _ {A} U e ^ {j \omega t}}{2 \Delta} \left[ 2 R _ {C} + R _ {B} - j \sqrt {3} R _ {B} \right] \end{array}\tag{17}
$$

所以

$$
\begin{array}{r l} U _ {A O} & = | \widetilde {U} _ {A O} | = \frac {R _ {A} U}{2 \Delta} \sqrt {(2 R _ {C} + R _ {B}) ^ {2} + 3 R _ {B} ^ {2}} \\ & = \frac {2 2 \times 3 8 0}{2 \times 1 6 9 4} \times \sqrt {(2 \times 2 7 . 5 + 2 2) ^ {2} + 3 \times 2 2 ^ {2}} \\ & = 2 1 2 (\mathrm{V}) \end{array}\tag{18}
$$

$$
\begin{array}{r l} \widetilde {U} _ {B O} & = R _ {B} \widetilde {I} _ {B} = - \frac {R _ {B}}{\Delta} \left[ \left(R _ {A} + R _ {C}\right) \widetilde {U} _ {A B} + R _ {A} \widetilde {U} _ {C A} \right] \\ & = - \frac {R _ {B} U e ^ {j \omega t}}{\Delta} \left[ R _ {A} + R _ {C} + R _ {A} e ^ {j \frac {2 \pi}{3}} \right] \\ & = - \frac {R _ {B} U e ^ {j \omega t}}{2 \Delta} \left[ 2 R _ {C} + R _ {A} + j \sqrt {3} R _ {A} \right] \end{array}\tag{19}
$$

所以

$$
\begin{array}{r l} U _ {B O} & = | \widetilde {U} _ {B O} | = \frac {R _ {B} U}{2 \Delta} \sqrt {(2 R _ {C} + R _ {A}) ^ {2} + 3 R _ {A} ^ {2}} \\ & = \frac {2 2 \times 3 8 0}{2 \times 1 6 9 4} \times \sqrt {(2 \times 2 7 . 5 + 2 2) ^ {2} + 3 \times 2 2 ^ {2}} \\ & = 2 1 2 (\mathrm{V}) \end{array}\tag{20}
$$

$$
\begin{array}{r l} \widetilde {U} _ {C O} & = R _ {C} \widetilde {I} _ {C} = \frac {R _ {C}}{\Delta} \left[ R _ {A} \widetilde {U} _ {A B} + (R _ {A} + R _ {B}) \widetilde {U} _ {C A} \right] \\ & = \frac {R _ {C}}{\Delta} U e ^ {j \omega t} \left[ R _ {A} + (R _ {A} + R _ {B}) e ^ {j \frac {2 \pi}{3}} \right] \end{array}
$$

所以

$$
\begin{array}{r l} & = \frac {R _ {C} U e ^ {\mathrm{j} \omega t}}{2 \Delta} [ R _ {A} - R _ {B} + \mathrm{j} \sqrt {3} (R _ {A} + R _ {B}) ] \\ & U _ {\infty} = | \widetilde {U} _ {\infty} | = \frac {R _ {C} U}{2 \Delta} \sqrt {(R _ {A} - R _ {B}) ^ {2} + 3 (R _ {A} + R _ {B}) ^ {2}} \\ & = \frac {2 7 . 5 \times 3 8 0}{2 \times 1 6 9 4} \times \sqrt {3} \times (2 2 + 2 2) \\ & = 2 3 5 (\mathrm{V}) \end{array}\tag{21}
$$

(22) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/d32a4d319adf3161b02078f9159500d96c5ecd29aa42b114b9361fd45400a236.jpg)


## 第十二章 麦克斯韦方程

## § 12.1 麦克斯韦方程

12.1.1 试论证:平行板电容器必定有边缘效应, 换句话说, 在两极板间电场是均匀的, 而到外边电场突然变为零[像图 12.1.1(1)那样], 是不可能的.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/7976ab428153ed64cddfe9201ea35dc1a39eb04a56e09b2098a203a9d36384d1.jpg)



图12.1.1(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/c226c98003696875a3a574bb981edae4225c4daf14fc0949f5f4dab564fdcf5e.jpg)



图12.1.1(2)


【论证】作一长方形环路 $L$ ，使其长为 $l$ 的两对边平行于电场强度 $\pmb{E}$ ，且一边在电场内，另一边在电场外，如图12.1.1(2)所示，则根据题目所说条件， $\pmb{E}$ 沿 $L$ 的环量为

$$
\oint_ {L} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = E l\tag{1}
$$

对于静电场来说，对任何环路 L 都有

$$
\oint_ {L} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = 0\tag{2}
$$

这是静电场的基本性质。现在式(1)不满足式(2)，说明式(1)不对。但式(1)在计算上并无问题，可见问题出在条件上，即题目所说的条件（在两极板间电场是均匀的，而到外边电场突然变为零）是不对的。也就是说，像图12.1.1(1)那样的静电场是不存在的。

12.1.2 试论证:磁铁必定有边缘效应, 换句话说, 在两极间磁场是均匀的, 而到外边磁场突然变为零[像图 12.1.2(1)那样], 是不可能的.

【论证】作一长方形环路 $L$ ，使其长为 $l$ 的两对边平行于磁场强度 $\pmb{H}$ ，且一边在磁场内，另一边在磁场外，如图12.1.2(2)所示，则根据题目所说条件， $\pmb{H}$ 沿 $L$ 的环量为

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H l\tag{1}
$$

对于静磁场来说，对任何环路 L 都有

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = I\tag{2}
$$

式中 $I$ 是环路 $L$ 所套住的自由电流的代数和. 式(2)就是安培环路定理, 是磁场的基本规律. 将这定理用于图12.1.2(2)中的环路 $L$ , 便得

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/d5f214189b0c2f02d6d569976799277a8af14a4cfa2fdc26d30cb888afe025f8.jpg)



图12.1.2(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/92ff5a648db7b3b04da60d670f92776d5b8f3c3f609d98ccfdcfa7d376fd1be9.jpg)



图12.1.2(2)


$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = 0\tag{3}
$$

式(1)不满足式(3)，说明式(1)不对.但式(1)在计算上并无问题，可见问题出在条件上，即题目所说的条件(在两极间磁场是均匀的，而到外边磁场突然变为零)是不对的.也就是说，像图12.1.2(1)那样的静磁场是不存在的.

12.1.3 试证明: 略去边缘效应时, 平行板电容器中的位移电流为 $I_{D} = \varepsilon S \frac{\mathrm{d} E}{\mathrm{d} t}$ , 式中 $\varepsilon$ 是两极板间介质的电容率, $S$ 是极板的面积, $E$ 是极板间电场强度的大小.

【证】略去边缘效应，平行板电容器中的电场是均匀电场，其电位移为

$$
\boldsymbol {D} = \varepsilon \boldsymbol {E}\tag{1}
$$

两极板间电位移的通量为

$$
\Phi_ {D} = \iint_ {S} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} = \epsilon E S\tag{2}
$$

故依定义，位移电流为

$$
I _ {D} = \frac {\mathrm{d} \Phi_ {D}}{\mathrm{d} t} = \varepsilon S \frac {\mathrm{d} E}{\mathrm{d} t}\tag{3}
$$

12.1.4 一空气平行板电容器的两极板都是半径为 $5.0\mathrm{cm}$ 的圆形导体片，在充电时，其中电场强度的变化率为 $\frac{\mathrm{d}E}{\mathrm{d}t} = 1.0\times 10^{12}\mathrm{V / (m\cdot s)}$ .略去边缘效应，试求：(1）两极板间的位移电流 $I_{D}$ ；(2）两极板边缘处磁感强度 $\pmb{B}$ 的值.

【解】（1）两极板间的位移电流为

$$
\begin{array}{r l} I _ {D} & = \varepsilon_ {0} S \frac {\mathrm{d} E}{\mathrm{d} t} = 8. 8 5 4 \times 1 0 ^ {- 1 2} \times \pi \times (5. 0 \times 1 0 ^ {- 2}) ^ {2} \times 1. 0 \times 1 0 ^ {1 2} \\ & = 7. 0 \times 1 0 ^ {- 2} (\mathrm{A}) \end{array}\tag{1}
$$

(2) 极板边缘处的磁感强度 B 的值 由对称性和安培环路定理得

$$
\begin{array}{r l} B & = \mu_ {0} H = \frac {\mu_ {0} I _ {D}}{2 \pi r} = \frac {4 \pi \times 1 0 ^ {- 7} \times 7 . 0 \times 1 0 ^ {- 2}}{2 \pi \times 5 . 0 \times 1 0 ^ {- 2}} \\ & = 2. 8 \times 1 0 ^ {- 7} (\mathrm{T}) \end{array}\tag{2}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/a4a278acefc6245f8d9128d601ec68903808147352589a28d4306e400c06603a.jpg)



图12.1.5


12.1.5 一平行板电容器两极板间充满弱导电的均匀介质，当它充电后，断开电源，电荷便经过介质渐渐漏掉。略去边缘效应，试求漏电时两极板间的磁场。

【解】设极板上的电荷量为 Q，极板间电场强度为 E，如图 12.1.5 所示，则漏电电流为

$$
I = - \frac {\mathrm{d} Q}{\mathrm{d} t}\tag{1}
$$

I 的方向向下. 令 e 表示向下(即 E 方向)的单位矢量，则漏电的电流密度为

$$
j = \frac {I}{S} e = - \frac {1}{S} \frac {\mathrm{d} Q}{\mathrm{d} t} e\tag{2}
$$

两极板间的电位移为

$$
\boldsymbol {D} = \sigma \boldsymbol {e} = \frac {Q}{S} \boldsymbol {e}\tag{3}
$$

故位移电流密度为

$$
\frac {\mathrm{d} \boldsymbol {D}}{\mathrm{d} t} = \frac {1}{S} \frac {\mathrm{d} Q}{\mathrm{d} t} \boldsymbol {e}\tag{4}
$$

由式(2)、(4)得

$$
j + \frac {\mathrm{d} \boldsymbol {D}}{\mathrm{d} t} = 0\tag{5}
$$

这个结果表明，在电容器两极板间的每一点，全电流(传导电流与位移电流之和)密度为零.因此，电容器漏电时，两极板间的磁场为零.

12.1.6 当导线中载有交流电时，试证明：其中传导电流密度 $j$ 与位移电流密度 $\frac{\partial D}{\partial t}$ 的大小之比为 $\sigma / \omega \varepsilon_0$ ，式中 $\sigma$ 是导线的电导率， $\omega = 2\pi \nu$ ， $\nu$ 是交流电的频率，金属导体的 $\varepsilon_r$ 可当作1。已知铜的电导率为 $\sigma = 5.9 \times 10^7 \mathrm{~S} / \mathrm{m}$ ，试分别计算铜导线中载有频率为(1)50Hz和(2) $3.0 \times 10^{11} \mathrm{~Hz}$ 的交流电时，传导电流密度与位移电流密度的大小之比。

【解】 由欧姆定律的微分形式

$$
\boldsymbol {j} = \sigma \boldsymbol {E}\tag{1}
$$

得电位移为

$$
\boldsymbol {D} = \varepsilon_ {\mathrm{r}} \varepsilon_ {0} \boldsymbol {E} = \varepsilon_ {0} \boldsymbol {E} = \frac {\varepsilon_ {0}}{\sigma} \boldsymbol {j}\tag{2}
$$

故位移电流密度为

$$
\frac {\partial \boldsymbol {D}}{\partial t} = \frac {\varepsilon_ {0}}{\sigma} \frac {\partial \boldsymbol {j}}{\partial t} = \frac {\omega \varepsilon_ {0}}{\sigma} \boldsymbol {j}\tag{3}
$$

于是得传导电流密度与位移电流密度的大小之比为

$$
\frac {j}{\frac {\partial D}{\partial t}} = \frac {| j |}{| \frac {\partial D}{\partial t} |} = \frac {\sigma}{\omega \epsilon_ {0}}\tag{4}
$$

当 $\nu = 50\mathrm{Hz}$ 时

$$
\frac {j}{\frac {\partial D}{\partial t}} = \frac {5 . 9 \times 1 0 ^ {7}}{2 \pi \times 5 0 \times 8 . 8 5 4 \times 1 0 ^ {- 1 2}} = 2. 1 \times 1 0 ^ {1 6}\tag{5}
$$

当 $\nu = 3.0\times 10^{11}\mathrm{Hz}$ 时

$$
\frac {j}{\frac {\partial D}{\partial t}} = \frac {5 . 9 \times 1 0 ^ {7}}{2 \pi \times 3 . 0 \times 1 0 ^ {1 1} \times 8 . 8 5 4 \times 1 0 ^ {- 1 2}} = 3. 5 \times 1 0 ^ {6}\tag{6}
$$

【讨论】上面的结果表明，在铜导线里，从 $50\mathrm{Hz}$ 的市电到 $3.0\times 10^{11}\mathrm{Hz}$ 的微波，与传导电流相比，位移电流都小到可以略去不计.

12.1.7 一无穷长直螺线管，横截面的半径为 $R$ ，由表面绝缘的细导线密绕而成，单位长度的匝数为 $n$ .当导线中载有交流电流 $I = I_0\sin \omega t$ 时，试求管内外的位移电流密度的大小.

【解】管内离轴线为 r 处，感应电场强度的大小为

$$
\begin{array}{r l} E _ {i} & = - \frac {1}{2 \pi r} \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {1}{2 \pi r} \frac {\mathrm{d}}{\mathrm{d} t} (\mu_ {0} n I _ {0} \sin \omega t \cdot \pi r ^ {2}) \\ & = - \frac {1}{2} \mu_ {0} n I _ {0} \omega r \cos \omega t \end{array}\tag{1}
$$

故得位移电流密度的大小为

$$
\frac {\partial D}{\partial t} = \varepsilon_ {0} \frac {\partial E _ {i}}{\partial t} = \frac {1}{2} \varepsilon_ {0} \mu_ {0} n I _ {0} \omega^ {2} r \sin \omega t\tag{2}
$$

在管外离轴线为 r 处，感应电场强度的大小为

$$
\begin{array}{r l} E _ {i} & = - \frac {1}{2 \pi r} \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {1}{2 \pi r} \frac {\mathrm{d}}{\mathrm{d} t} (\mu_ {0} n I _ {0} \sin \omega t \cdot \pi R ^ {2}) \\ & = - \frac {1}{2 r} \mu_ {0} n I _ {0} \omega R ^ {2} \cos \omega t \end{array}\tag{3}
$$

故得电流密度的大小为

$$
\frac {\partial D}{\partial t} = \varepsilon_ {0} \frac {\partial E _ {i}}{\partial t} = \frac {1}{2 r} \varepsilon_ {0} \mu_ {0} n I _ {0} \omega^ {2} R ^ {2} \sin \omega t\tag{4}
$$

12.1.8 一圆柱形无穷长直导线，半径为 $a$ ，载有稳恒直流 $I$ ， $I$ 均匀地分布在横截面上.试求这导线内外磁场强度 $\pmb{H}$ 的旋度 $\nabla \times \pmb{H}$ 

【解】根据对称性，由安培环路定理得出，在导线内：

$$
\boldsymbol {H} = \frac {I r}{2 \pi a ^ {2}} \boldsymbol {e} _ {\phi}, \quad r <   a\tag{1}
$$

式中 $e_{\phi}$ 是电流 I 的右手螺旋方向上的单位矢量。在导线外：

$$
\boldsymbol {H} = \frac {I}{2 \pi r} \boldsymbol {e} _ {\phi}, \quad r > a\tag{2}
$$

以导线的轴线为 z 轴取柱坐标系，并使 z 轴沿电流 I 的方向，则 H 的旋度为

$$
\begin{array}{l} \nabla \times \boldsymbol {H} = \left(\frac {1}{r} \frac {\partial H _ {z}}{\partial \phi} - \frac {\partial H _ {\phi}}{\partial z}\right) \boldsymbol {e} _ {r} + \left(\frac {\partial H _ {r}}{\partial z} - \frac {\partial H _ {z}}{\partial r}\right) \boldsymbol {e} _ {\phi} \\ + \left[ \frac {1}{r} \frac {\partial (r H _ {\phi})}{\partial r} - \frac {1}{r} \frac {\partial H _ {r}}{\partial \phi} \right] \boldsymbol {e} _ {z} \end{array}\tag{3}
$$

由式(1)、(2)可见，

$$
H _ {r} = 0, H _ {z} = 0, \frac {\partial H _ {\phi}}{\partial z} = 0\tag{4}
$$

故得

$$
\nabla \times \boldsymbol {H} = \frac {1}{r} \frac {\partial (r H _ {\phi})}{\partial r} e _ {z}\tag{5}
$$

式中 $e_{z}$ 为沿电流方向的单位矢量.

在导线内：

$$
\nabla \times \boldsymbol {H} = \frac {1}{r} \frac {\partial}{\partial r} \left(\frac {I r ^ {2}}{2 \pi a ^ {2}}\right) \boldsymbol {e} _ {z} = \frac {I}{\pi a ^ {2}} \boldsymbol {e} _ {z}, r <   a\tag{6}
$$

在导线外：

$$
\nabla \times \boldsymbol {H} = \frac {1}{r} \frac {\partial}{\partial r} \left(\frac {I}{2 \pi}\right) \boldsymbol {e} _ {z} = 0, r > a\tag{7}
$$

由式(6)、(7)可见，磁场旋度为

$$
\nabla \times \boldsymbol {H} = j\tag{8}
$$

式中 $j$ 为电流密度. 在导线内, $j = \frac{I}{\pi a^2} e_z$ , 式(8)即化为式(6); 在导线外, $j = 0$ , 式(8)即化为式(7).

12.1.9 在一圆柱形空间内，有均匀的、但是随时间 $t$ 变化的磁场，其磁感强度为 $\pmb{B} = B(t)\pmb{k}$ ， $\pmb{k}$ 是沿圆柱轴线方向上的单位矢量。取笛卡儿坐标系如图12.1.9(1)所示，试证明：在此柱体内离轴线为 $r = \sqrt{x^2 + y^2}$ 处，电场强度为 $\mathbf{E} = \frac{1}{2} (y\mathbf{i} - x\mathbf{j})\frac{\mathrm{d}B}{\mathrm{d}t}$ .

【证】根据对称性，由麦克斯韦方程

$$
\oint_ {L} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = 2 \pi r E = - \iint \frac {\partial \boldsymbol {B}}{\partial t} \cdot \mathrm{d} \boldsymbol {S} = - \frac {\mathrm{d} B}{\mathrm{d} t} \cdot \pi r ^ {2}\tag{1}
$$

得

$$
E = - \frac {r}{2} \frac {\mathrm{d} B}{\mathrm{d} t}\tag{2}
$$

式中的负号意义如下: 在式(1)中, 规定 dS 的方向是 dl 的右旋进方向. 当 $\frac{dB}{dt} > 0$ 时, E < 0, 表示 $\pmb{E}$ 的方向与 $\mathrm{d}l$ 方向相反. 当 $\frac{\mathrm{d}B}{\mathrm{d}t} < 0$ 时, $E > 0$ , 表示 $\pmb{E}$ 的方向与 $\mathrm{d}l$ 方向相同, 如图12.1.9(2)所示. 因

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/d55822e956023e8844940f21b4edc4eb66837dacc4351b1a712451a92055252c.jpg)



图12.1.9(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/961e173e25021c8a131d4f6bda9a95fe5b87092abdd46e7e67e0be9f3314ea52.jpg)



图12.1.9(2)


$$
\boldsymbol {E} = E _ {x} \boldsymbol {i} + E _ {y} \boldsymbol {j}\tag{3}
$$

由图12.1.9(2)可见

$$
E _ {x} = - E \sin \theta\tag{4}
$$

$$
E _ {y} = E \cos \theta\tag{5}
$$

所以

$$
\boldsymbol {E} = - E \sin \theta \boldsymbol {i} + E \cos \theta \boldsymbol {j} = \frac {r \sin \theta}{2} \frac {\mathrm{d} B}{\mathrm{d} t} \boldsymbol {i} - \frac {r \cos \theta}{2} \frac {\mathrm{d} B}{\mathrm{d} t} \boldsymbol {j}
$$

$$
= \frac {1}{2} y \frac {\mathrm{d} B}{\mathrm{d} t} i - \frac {1}{2} x \frac {\mathrm{d} B}{\mathrm{d} t} j = \frac {1}{2} (y i - x j) \frac {\mathrm{d} B}{\mathrm{d} t}\tag{6}
$$

12.1.10 在半径为 R 的圆筒内，有方向与轴线平行的均匀磁场，这磁场的磁感强度 B 以 100Gs/s 的速率减小。筒内有一电子，到轴线的距离为 r = 5.0cm，如图 12.1.10 所示。已知电子的质量为 $m = 9.1 \times 10^{-31}$ 千克，电荷量为 $e = -1.6 \times 10^{-19}C$ 。试求这电子的加速度。若这电子处在圆筒的轴线上，它的加速度是多少？

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/7f896e7a7b44299f1edc49b89e4a393b2e40d3f266eebf8a62ea84f9e3afe3f8.jpg)


【解】如图12.1.10，B向内，当B减小时，所产生的涡旋电场的电场强度E为顺时针方向，由对称性和麦克斯韦方程得

$$
\oint_ {L} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = 2 \pi r E = - \iint_ {S} \frac {\partial \boldsymbol {B}}{\partial t} \cdot \mathrm{d} \boldsymbol {S} = - \pi r ^ {2} \frac {\partial B}{\partial t}\tag{1}
$$

图12.1.10

所以

$$
E = - \frac {r}{2} \frac {\mathrm{dB}}{\mathrm{dt}}\tag{2}
$$

式中负号的意义如下: 在式(1)中, 规定 dS 的方向是 dl 的右旋进方向. 当 $\frac{dB}{dt} > 0$ 时, E < 0, 表示 E 的方向与 dl 的方向相反; 当 $\frac{dB}{dt} < 0$ 时, E > 0, 表示 E 的方向与 dl 的方向相同.

在这电场中，电子的加速度为

$$
a = \frac {F}{m} = \frac {e E}{m} = - \frac {e r}{2 m} \frac {\mathrm{d} B}{\mathrm{d} t}
$$

$$
\begin{array}{r l} & = - \frac {- 1 . 6 \times 1 0 ^ {- 1 9} \times 5 . 0 \times 1 0 ^ {- 2}}{2 \times 9 . 1 \times 1 0 ^ {- 3 1}} \times (- 1 0 0 \times 1 0 ^ {- 4}) \\ & = - 4. 4 \times 1 0 ^ {7} (\mathrm {m/ s^ {2}}) \end{array}\tag{3}
$$

式中负号的意义是加速渡 a 的方向与 E 的方向相反.

若电子处在圆筒的轴线上，即 r = 0，则这时 E = 0，故电子的加速度 a = 0。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/1b0c54b09fd299a621fd42906609ff907012e72efbf89cc17927a42c0c979b14.jpg)


12.1.11 一很长的直圆筒，半径为 $R$ ，表面上带有一层均匀电荷，电荷量的面密度为 $\sigma$ .在外力矩的作用下，从 $t = 0$ 时刻开始，以匀角加速度 $\alpha$ 绕它的几何轴转动，如图12.1.11所示.(1)试求筒内的磁感强度 $\pmb{B}$ ;(2)试求筒内接近内表面处的电场强度 $\pmb{E}$ 和坡印亭矢量 $\pmb{S}$ ;(3)试证明：进入这圆筒长为 $l$ 一段的 $\pmb{S}$ 的通量等于 $\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\pi R^2l}{2\mu_0} B^2\right)$ 

【解】（1）圆筒旋转时，设角速为 $\omega = \alpha t$ ，则单位长度的电流为

$$
i = \frac {I}{l} = \frac {2 \pi R l \sigma}{l T} = \sigma R \omega\tag{1}
$$

图12.1.11

由对称性和安培环路定理得，筒内的磁场强度为

$$
\boldsymbol {H} = i \boldsymbol {e} _ {\omega} = \sigma R \boldsymbol {\omega}\tag{2}
$$

式中 $e_{\omega} = \omega / \omega$ 是角速度 $\omega$ 方向上的单位矢量. 于是得筒内的磁感强度为

$$
\boldsymbol {B} = \mu_ {0} \boldsymbol {H} = \mu_ {0} \sigma R \omega\tag{3}
$$

(2) 在圆筒的横截面内，以轴线为心，r 为半径作一圆，通过这圆面积的磁通量为

$$
\Phi = \iint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = B S = \pi r ^ {2} \mu_ {0} \sigma R \omega\tag{4}
$$

由法拉第电磁感应定律得

$$
E = - \frac {1}{2 \pi r} \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {1}{2} \mu_ {0} \sigma R r \frac {\mathrm{d} \omega}{\mathrm{d} t}\tag{5}
$$

因为

$$
\omega = \alpha t\tag{6}
$$

所以

$$
E = - \frac {1}{2} \mu_ {0} \sigma R r \alpha\tag{7}
$$

考虑到方向，便得

$$
\boldsymbol {E} = \frac {1}{2} \mu_ {0} \sigma R r a \boldsymbol {e} _ {r} \times \boldsymbol {e} _ {\omega}\tag{8}
$$

式中 $e_{r}$ 是垂直于轴线的单位矢量，其方向自轴线指向场点.

在筒内接近内表面处，r = R，电场强度为

$$
E _ {R} = \frac {1}{2} \mu_ {0} \sigma R ^ {2} \alpha e _ {r} \times e _ {\omega}\tag{9}
$$

故该处的坡印亭矢量为

$$
\boldsymbol {S} _ {R} = \boldsymbol {E} _ {R} \times \boldsymbol {H} _ {R} = \frac {1}{2} \mu_ {0} \sigma R ^ {2} \alpha (\boldsymbol {e} _ {r} \times \boldsymbol {e} _ {\omega}) \times (\sigma R \boldsymbol {\omega})
$$

$$
\begin{array}{l} = \frac {1}{2} \mu_ {0} \sigma^ {2} R ^ {3} \alpha^ {2} t (\boldsymbol {e} _ {r} \times \boldsymbol {e} _ {\omega}) \times \boldsymbol {e} _ {\omega} \\ = - \frac {1}{2} \mu_ {0} \sigma^ {2} R ^ {3} \alpha^ {2} t \boldsymbol {e} _ {r} \end{array}\tag{10}
$$

式中负号表明，S 垂直于筒的内表面并指向筒内.

(3) 进入这圆筒长为 l 一段的 S 的通量为

$$
\begin{array}{r l} \Phi_ {S} & = S _ {R} \cdot 2 \pi R l = \frac {1}{2} \mu_ {0} \sigma^ {2} R ^ {3} \alpha^ {2} t \cdot 2 \pi R l \\ & = \pi \mu_ {0} \sigma^ {2} R ^ {4} l \alpha^ {2} t \end{array}\tag{11}
$$

又

$$
\begin{array}{r l} \frac {\mathrm{d}}{\mathrm{d} t} \left(\frac {\pi R ^ {2} l}{2 \mu_ {0}} B ^ {2}\right) & = \frac {\pi R ^ {2} l}{\mu_ {0}} B \frac {\mathrm{d} B}{\mathrm{d} t} \\ & = \frac {\pi R ^ {2} l}{\mu_ {0}} (\mu_ {0} \sigma R \omega) (\mu_ {0} \sigma R \alpha) \\ & = \pi \mu_ {0} \sigma^ {2} R ^ {4} l \omega \alpha = \pi \mu_ {0} \sigma^ {2} R ^ {4} l \alpha^ {2} t \end{array}\tag{12}
$$

比较式(11)和(12)，便得

$$
\Phi_ {S} = \frac {\mathrm{d}}{\mathrm{d} t} \left(\frac {\pi R ^ {2} l}{2 \mu_ {0}} B ^ {2}\right)\tag{13}
$$

【讨论】 筒内磁场是均匀磁场，磁场能量密度为

$$
W _ {m} = \frac {1}{2} \boldsymbol {H} \cdot \boldsymbol {B} = \frac {B ^ {2}}{2 \mu_ {0}}\tag{14}
$$

故 $\frac{\pi R^2l}{2\mu_0} B^2$ 是筒内长为 $l$ 一段的磁场能量. 而 $\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\pi R^2l}{2\mu_0} B^2\right)$ 则是这段筒内磁场能量的增加率. 式(13)表明, 筒内磁场增加的能量等于坡印亭矢量流入的能量. 由于筒未转动时, 筒内磁场为零, 磁场能量亦为零. 所以筒内的磁场能量, 都是经过坡印亭矢量由表面(侧面)输入的.

12.1.12 试证明:麦克斯韦方程组的解满足叠加原理,即若 $E_{i}, D_{i}, H_{i}, B_{j}$ 满足场源为 $\rho_{i}$ 和 $j_{i}$ 的麦克斯韦方程组,则 $\sum_{i=1}^{n} E_{i}, \sum_{i=1}^{n} D_{i}, \sum_{i=1}^{n} H_{i}, \sum_{i=1}^{n} B_{i}$ 便满足场源为 $\sum_{i=1}^{n} \rho_{i}$ 和 $\sum_{i=1}^{n} j_{i}$ 的麦克斯韦方程组.

【证】已知 $E_{i}, D_{i}, H_{i}, B_{i}$ 满足场源为 $\rho_{i}$ 和 $j_{i}$ 的麦克斯韦方程组，即

$$
\nabla \times \boldsymbol {E} _ {i} = - \frac {\partial \boldsymbol {B} _ {i}}{\partial t}\tag{1}
$$

$$
\nabla \cdot \boldsymbol {D} _ {i} = \rho_ {i}\tag{2}
$$

$$
\boldsymbol {\nabla} \times \boldsymbol {H} _ {i} = \boldsymbol {j} _ {i} + \frac {\partial \boldsymbol {D} _ {i}}{\partial t}\tag{3}
$$

$$
\nabla \cdot \boldsymbol {B} _ {i} = 0\tag{4}
$$

则有

$$
\begin{array}{r l} \nabla \times \left(\sum_ {i = 1} ^ {n} \boldsymbol {E} _ {i}\right) & = \sum_ {i = 1} ^ {n} \nabla \times \boldsymbol {E} _ {i} = \sum_ {i = 1} ^ {n} \left(- \frac {\partial \boldsymbol {B} _ {i}}{\partial t}\right) \\ & = - \frac {\partial}{\partial t} \left(\sum_ {i = 1} ^ {n} \boldsymbol {B} _ {i}\right) \end{array}\tag{5}
$$

$$
\nabla \cdot \left(\sum_ {i = 1} ^ {n} \boldsymbol {D} _ {i}\right) = \sum_ {i = 1} ^ {n} \nabla \cdot \boldsymbol {D} _ {i} = \sum_ {i = 1} ^ {n} \rho_ {i}\tag{6}
$$

$$
\nabla \times \left(\sum_ {i = 1} ^ {n} \boldsymbol {H} _ {i}\right) = \sum_ {i = 1} ^ {n} \nabla \times \boldsymbol {H} _ {i} = \sum_ {i = 1} ^ {n} \left(j _ {i} + \frac {\partial \boldsymbol {D} _ {i}}{\partial t}\right)
$$

$$
= \sum_ {i = 1} ^ {n} j _ {i} + \frac {\partial}{\partial t} \sum_ {i = 1} ^ {n} D _ {i}\tag{7}
$$

$$
\nabla \cdot \left(\sum_ {i = 1} ^ {n} \boldsymbol {B} _ {i}\right) = \sum_ {i = 1} ^ {n} \nabla \cdot \boldsymbol {B} _ {i} = 0\tag{8}
$$

式(5)、(6)、(7)、(8)表明： $\sum_{i = 1}^{n}\pmb{E}_i,\sum_{i = 1}^{n}\pmb{D}_i,\sum_{i = 1}^{n}\pmb{H}_i,\sum_{i = 1}^{n}\pmb{B}_i$ 满足场源为 $\sum_{i = 1}^{n}\rho_{i}$ 和 $\sum_{i = 1}^{n}\pmb{j}_{i}$ 的麦克斯韦方程组.

12.1.13 (1) 在空间取一任意封闭曲面 $S$ ，它所包住的体积为 $V$ ，用一任意曲面 $S'$ 把 $V$ 分隔为两部分，因此 $S$ 被分成 $S_1$ 和 $S_2$ 两部分，而 $S_1 + S'$ 和 $S_2 + S'$ 便都是封闭曲面，如图 12.1.13(1) 所示。试证明：若电场的高斯定理

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/5be7b3eed6ce140c8f4d1f4a0f5c7592efc6761d9d524c57338d3e0738021060.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/2ebd2c091db6ca1074975c17ff630334344ff4b519035a5fcdeb2e201a323f20.jpg)



图12.1.13


$$
\oiint_ {S} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} = Q
$$

和磁场的高斯定理

$$
\oiint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = 0
$$

对于 $S_{1} + S'$ 和 $S_{2} + S'$ 都成立，则它们对于 S 也必定成立.

(2) 在空间取一条任意闭合曲线 $L$ ，过其上任意两点作任一曲线 $L'$ ， $L'$ 将 $L$ 分成 $L_1$ 和 $L_2$ 两段，而 $L_1 + L'$ 和 $L_2 + L'$ 便都是闭合曲线，如图12.1.13(2)所示。试证明：若法拉第电磁感应定律

$$
\oint_ {L} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = - \frac {\mathrm{d} \Phi}{\mathrm{d} t}
$$

和安培环路定理

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = I + \frac {\mathrm{d} \Phi_ {D}}{\mathrm{d} t}
$$

对于 $L_{1} + L^{\prime}$ 和 $L_{2} + L^{\prime}$ 都成立，则它们对于 $L$ 也必定成立.

【证】（1）设电场的高斯定理对 $S_{1} + S^{\prime}$ 和 $S_{2} + S^{\prime}$ 都成立，即

$$
\iint_ {S _ {1} + S ^ {\prime}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} = \iint_ {S _ {1}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} _ {1} + \iint_ {S ^ {\prime}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S ^ {\prime}} _ {1} = Q _ {1}\tag{1}
$$

$$
\iint_ {S + S ^ {\prime}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} = \iint_ {S _ {2}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} _ {2} + \iint_ {S ^ {\prime}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S ^ {\prime}} _ {2} = Q _ {2}\tag{2}
$$

式中 $Q_{1}$ 和 $Q_{2}$ 分别为封闭曲面 $S_{1} + S^{\prime}$ 和 $S_{2} + S^{\prime}$ 所包住的自由电荷量的代数和. 以上两式中在 $S^{\prime}$ 面上的积分，由于 $\mathrm{d}\mathbf{S}'_{1}$ 与 $\mathrm{d}\mathbf{S}'_{2}$ 方向相反，故有

$$
\iint_ {S ^ {\prime}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} _ {1} ^ {\prime} + \iint_ {S ^ {\prime}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} _ {2} ^ {\prime} = 0\tag{3}
$$

于是由式(1)、(2)、(3)得

$$
\begin{array}{r l} \oiint_ {S} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} & = \iint_ {S _ {1}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} + \iint_ {S _ {2}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} \\ & = \iint_ {S _ {1}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} + \iint_ {S ^ {\prime}} \boldsymbol {D} \cdot \mathrm{d} S _ {1} ^ {\prime} + \int_ {S _ {2}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} \\ & + \iint_ {S ^ {\prime}} \boldsymbol {D} \cdot \mathrm{d} S _ {2} ^ {\prime} \\ & = \oiint_ {S _ {1} + S ^ {\prime}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} + \oiint_ {S _ {2} + S ^ {\prime}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} \\ & = Q _ {1} + Q _ {2} = Q \end{array}\tag{4}
$$

式中 $Q = Q_{1} + Q_{2}$ 为封闭曲面 $S$ 所包住的自由电荷量的代数和. 式(4)表明，电场的高斯定理对于 $S$ 也成立.

用同样方法，可以证明磁场的高斯定理对于 $S$ 也成立.

(2) 设法拉第电磁感应定律对于 $L_{1} + L'$ 和 $L_{2} + L'$ 都成立，即

$$
\oint_ {L _ {1} + L ^ {\prime}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = \int_ {L _ {1}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} + \int_ {L ^ {\prime}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l ^ {\prime}} _ {1} = - \frac {\mathrm{d} \Phi_ {1}}{\mathrm{d} t}\tag{5}
$$

$$
\oint_ {L _ {2} + L ^ {\prime}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = \int_ {L _ {1}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} + \int_ {L ^ {\prime}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l ^ {\prime}} _ {2} = - \frac {\mathrm{d} \Phi_ {2}}{\mathrm{d} t}\tag{6}
$$

式中 $\Phi_{1}$ 和 $\Phi_{2}$ 分别是通过闭合曲线 $L_{1} + L^{\prime}$ 和 $L_{2} + L^{\prime}$ 的磁通量. 以上两式中沿 $L^{\prime}$ 的线积分, 由于 $\mathrm{d}I_1'$ 和 $\mathrm{d}I_2'$ 方向相反, 故有

$$
\int_ {L ^ {\prime}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} _ {1} ^ {\prime} + \int_ {L ^ {\prime}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} _ {2} ^ {\prime} = 0\tag{7}
$$

于是由式(5)、(6)、(7)得

$$
\oint_ {L} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = \int_ {L _ {1}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} + \int_ {L _ {2}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l}
$$

$$
\begin{array}{l} = \int_ {L _ {1}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} + \int_ {L ^ {\prime}} \boldsymbol {E} \cdot \mathrm{d} l ^ {\prime} _ {1} + \int_ {L _ {2}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} + \int_ {L ^ {\prime}} \boldsymbol {E} \cdot \mathrm{d} l ^ {\prime} _ {2} \\ = \oint_ {L _ {1} + L ^ {\prime}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} + \oint_ {L _ {2} + L ^ {\prime}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = - \frac {\mathrm{d} \Phi_ {1}}{\mathrm{d} t} - \frac {\mathrm{d} \Phi_ {2}}{\mathrm{d} t} \\ = - \frac {\mathrm{d} (\Phi_ {1} + \Phi_ {2})}{\mathrm{d} t} = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} \end{array}\tag{8}
$$

式中 $\Phi = \Phi_{1} + \Phi_{2}$ 为通过闭合曲线 $L$ 的磁通量.(8)式表明，法拉第电磁感应定律对于 $L$ 也成立.

用同样方法，可以证明安培环路定理对于 L 也成立.

12.1.14 试由麦克斯韦方程组证明: 在介电常数 $\varepsilon_r$ 和相对磁导率 $\mu_r$ 都是常数的均匀介质中, 当自由电荷量密度 $\rho$ 和自由电流密度 $j$ 均为零 (即纯粹电磁场)时, $E$ 和 $H$ 都满足波动方程 $\nabla^2 F - \frac{1}{v^2} \frac{\partial^2 F}{\partial t^2} = 0$ , 式中 $v = \frac{1}{\sqrt{\varepsilon_r \mu_r \varepsilon_0 \mu_0}}$ 是电磁波在该介质中的速度.

【证】这时的麦克斯韦方程组为

$$
\nabla \times \boldsymbol {E} = - \frac {\partial \boldsymbol {B}}{\partial t} = - \mu \frac {\partial \boldsymbol {H}}{\partial t}\tag{1}
$$

$$
\nabla \cdot \boldsymbol {D} = \nabla (\varepsilon \boldsymbol {E}) = \varepsilon \nabla \cdot \boldsymbol {E} = 0\tag{2}
$$

$$
\nabla \times \boldsymbol {H} = \frac {\partial \boldsymbol {D}}{\partial t} = \varepsilon \frac {\partial \boldsymbol {E}}{\partial t}\tag{3}
$$

$$
\nabla \cdot \boldsymbol {B} = \mu \nabla \cdot \boldsymbol {H} = 0\tag{4}
$$

由矢量分析公式

$$
\nabla \times (\nabla \times \boldsymbol {F}) = \nabla (\nabla \cdot \boldsymbol {F}) - \nabla^ {2} F\tag{5}
$$

和式(1)、(2)、(3)得

$$
\begin{array}{r l} \nabla \times (\nabla \times \mathbf {E}) & = \nabla (\nabla \cdot \mathbf {E}) - \nabla^ {2} \mathbf {E} = - \nabla^ {2} \mathbf {E} \\ & = - \mu \nabla \times \left(\frac {\partial \mathbf {H}}{\partial t}\right) = - \mu \frac {\partial}{\partial t} \nabla \times \mathbf {H} \\ & = - \varepsilon \mu \frac {\partial^ {2} \mathbf {E}}{\partial t ^ {2}} \end{array}\tag{6}
$$

所以

$$
\nabla^ {2} \boldsymbol {E} - \frac {1}{v ^ {2}} \frac {\partial^ {2} \boldsymbol {E}}{\partial t ^ {2}} = 0\tag{7}
$$

由式(5)、(3)、(4)、(1)得

$$
\begin{array}{r l} \nabla \times (\nabla \times \boldsymbol {H}) & = \nabla (\nabla \cdot \boldsymbol {H}) - \nabla^ {2} \boldsymbol {H} = - \nabla^ {2} \boldsymbol {H} \\ & = \varepsilon \nabla \times \frac {\partial \boldsymbol {E}}{\partial t} = \varepsilon \frac {\partial}{\partial t} \nabla \times \boldsymbol {E} \\ & = - \varepsilon \mu \frac {\partial^ {2} \boldsymbol {H}}{\partial t ^ {2}} \end{array}\tag{8}
$$

所以

$$
\nabla^ {2} \boldsymbol {H} - \frac {1}{v ^ {2}} \frac {\partial^ {2} \boldsymbol {H}}{\partial t ^ {2}} = 0\tag{9}
$$

12.1.15 试由麦克斯韦方程组导出电荷守恒定律：

$$
\nabla \cdot \boldsymbol {j} + \frac {\partial \rho}{\partial t} = 0.
$$

【解】由麦克斯韦方程组的

$$
\nabla \times \boldsymbol {H} = \boldsymbol {j} + \frac {\partial \boldsymbol {D}}{\partial t}\tag{1}
$$

和

$$
\nabla \cdot \boldsymbol {D} = \rho\tag{2}
$$

得

$$
\begin{array}{r l} \nabla \cdot \boldsymbol {j} + \nabla \cdot \frac {\partial \boldsymbol {D}}{\partial t} & = \nabla \cdot \boldsymbol {j} + \frac {\partial}{\partial t} \nabla \cdot \boldsymbol {D} \\ & = \nabla \cdot \boldsymbol {j} + \frac {\partial \rho}{\partial t} = \nabla \cdot (\nabla \times \boldsymbol {H}) \end{array}\tag{3}
$$

根据矢量分析，对矢量 A 有

$$
\nabla \cdot (\nabla \times \mathbf {A}) = 0\tag{4}
$$

故得

$$
\nabla \cdot \boldsymbol {j} + \frac {\partial \rho}{\partial t} = 0\tag{5}
$$

12.1.16 电磁场的边值关系为:在两个介质交界面的两边上,(1)电场强度E的切向分量相等;(2)磁感强度B的法向分量相等;(3)当交界面上无自由面电荷时,电位移D的法向分量相等;(4)当交界面上无自由面电流时,磁场强度H的切向分量相等.试由麦克斯韦方程推出上述关系.

【解】(1) $E$ 的边值关系 在两介质1和2的边界处，取一小长方形回路 $L$ ，使其两长边分别处在介质1和2内，且平行于交界面，如图12.1.16(1)所示.则由麦克斯韦方程的

$$
\oint_ {L} \boldsymbol {E} \cdot \mathrm{d} l = - \iint_ {S} \frac {\partial \boldsymbol {B}}{\partial t} \cdot \mathrm{d} \boldsymbol {S}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/04f94ea92cc31fcbd78006acb1ef743a25c38a428c506becaed69c715e9bf262.jpg)


(1) 

得

图12.1.16(1)

$$
\begin{array}{r l} \oint_ {L} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} & = \boldsymbol {E} _ {1} \cdot \Delta l _ {1} + \boldsymbol {E} _ {2} \cdot \Delta l _ {2} + \int_ {\Delta L _ {3}} \boldsymbol {E} \cdot \mathrm{d} l _ {3} + \int_ {\Delta L _ {3} ^ {\prime}} \boldsymbol {E} \cdot \mathrm{d} l _ {3} \\ & = - \int \frac {\partial \boldsymbol {B}}{\partial t} \cdot \mathrm{d} \boldsymbol {S} \\ & = - \left| \frac {\partial \boldsymbol {B}}{\partial t} \right| \Delta l _ {1} \Delta l _ {3} \cos \theta \end{array}\tag{2}
$$

式中 $\Delta l_{1} = |\Delta l_{1}| = |\Delta l_{2}|$ 为 $L$ 的长边长度， $\Delta l_{3} = |\Delta l'_{3}| = |\Delta l'_{3}|$ 为 $L$ 的短边长度， $\theta$ 为 $\frac{\partial B}{\partial t}$ 与小长方形 $L$ 平面的法线的夹角.

令 $\Delta l_{3} \to 0$ ，则 $\int_{\Delta l_{3}^{\prime}} \mathbf{E} \cdot \mathrm{d}\mathbf{l}_{3} \to 0, \int_{\Delta l_{3}^{\prime}} \mathbf{E} \cdot \mathrm{d}\mathbf{l}_{3} \to 0$ ，式(2)右边也趋于零。于是便得

$$
\boldsymbol {E} _ {1} \cdot \Delta \boldsymbol {l} _ {1} + \boldsymbol {E} _ {2} \cdot \Delta \boldsymbol {l} _ {2} = (\boldsymbol {E} _ {1} - \boldsymbol {E} _ {2}) \cdot \Delta \boldsymbol {l} _ {1} = 0\tag{3}
$$

设 $t$ 为 $\Delta l_{1}$ 方向上的单位矢量，即

$$
\Delta l _ {1} = \Delta l _ {1} t\tag{4}
$$

则由式(3)得

$$
(E _ {1} - E _ {2}) \cdot t = 0\tag{5}
$$

所以

$$
E _ {2 t} = E _ {1 t}\tag{6}
$$

因 t 是交界面的切线方向，故 $E_{1} \cdot t = E_{1t}$ 和 $E_{2} \cdot t = E_{2t}$ 便分别是 $E_{1}$ 和 $E_{2}$ 的切向分量。式(6)表明，在交界面两边上，E 的切向分量相等。

(2) D 的边值关系 在两介质 1 和 2 的交界处, 取一小扁鼓形高斯面 S, 使其两底面分别处在介质 1 和 2 内, 且与交界面平行, 如图 12.1.16(2) 所示. 则由麦克斯韦方程的

$$
\oiint_ {S} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} = \boldsymbol {Q}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/a480bd0456029e0397b0cf5c7623beff944f9d82e2d44603cd2afe69ae795db1.jpg)


(7) 

得

图 12.1.16(2)

$$
\iint_ {S} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} = \boldsymbol {D} _ {1} \cdot \Delta \boldsymbol {S} _ {1} + \boldsymbol {D} _ {2} \cdot \Delta \boldsymbol {S} _ {2} + \iint_ {\Delta S _ {3}} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} _ {3} = \Delta Q\tag{8}
$$

式中 $\Delta S_{3}$ 为小扁鼓形的侧面面积， $\Delta Q$ 是 $S$ 所包住的自由电荷的代数和。令小扁鼓形 $S$ 的厚度趋于零，则 $\iint_{\Delta S_3} D \cdot \mathrm{d}S_3 \to 0$ ；因交界面上无自由电荷，故 $\Delta Q \to 0$ 。于是得

$$
\boldsymbol {D} _ {1} \cdot \Delta \boldsymbol {S} _ {1} + \boldsymbol {D} _ {2} \cdot \Delta \boldsymbol {S} _ {2} = (\boldsymbol {D} _ {2} - \boldsymbol {D} _ {1}) \cdot \Delta \boldsymbol {S} _ {2} = 0\tag{9}
$$

设 $n_{12}$ 为 $\Delta S_2$ 方向上的单位矢量，即

$$
\Delta \boldsymbol {S} _ {2} = \boldsymbol {n} _ {1 2} \Delta S _ {2}\tag{10}
$$

则由式(9)得

$$
\left(\boldsymbol {D} _ {2} - \boldsymbol {D} _ {1}\right) \cdot \boldsymbol {n} _ {1 2} = 0\tag{11}
$$

所以

$$
D _ {2 n} = D _ {1 n}\tag{12}
$$

因 $n_{12}$ 是交界面的法线方向，故 $D_{2n} = D_{2} \cdot n_{12}$ 和 $D_{1n} = D_{1} \cdot n_{12}$ 便分别是 $D_{2}$ 和 $D_{1}$ 的法向分量. 式(12)表明，若交界面上无自由面电荷，则在交界面两边上，D 的法向分量相等.

(3) $\pmb{H}$ 的边值关系 由麦克斯韦方程的

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = I + \iint_ {S} \frac {\partial \boldsymbol {D}}{\partial t} \cdot \mathrm{d} \boldsymbol {S}\tag{13}
$$

根据交界面上无自由面电流的条件，仿前面(1)推导 $\pmb{E}$ 的边值关系的方法，便可得

$$
H _ {2 t} = H _ {1 t}\tag{14}
$$

(4) B 的边值关系 由麦克斯韦方程的

$$
\oiint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = 0\tag{15}
$$

仿前面(2)推导 D 的边值关系的方法，便可得

$$
B _ {2 n} = B _ {1 n}\tag{16}
$$

12.1.17 两介质的电容率和磁导率分别为 $\varepsilon_{1},\mu_{1}$ 和 $\varepsilon_{2},\mu_{2}$ ，在它们的交界面上既无自由电荷，亦无自由电流；在交界面两边，电场强度与交界面法线的夹角分别为 $\theta_{1}$ 和 $\theta_{2}$ ，磁场强度与交界面法线的夹角分别为 $\varphi_{1}$ 和 $\varphi_{2}$ ，如图12.1.17所示。试证明： $\varepsilon_{1} \cot \theta_{1} = \varepsilon_{2} \cot \theta_{2}, \mu_{1} \cot \varphi_{1} = \mu_{2} \cot \varphi_{2}$ 。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/92b830ddedc2389f1c1b41645dadb3d630305ba93c592d2af21e040508dd07bc.jpg)



图12.1.17


【证】由前12.1.16题 $\pmb{E}$ 的边值关系式(6)

$$
E _ {2 t} = E _ {1 t}\tag{1}
$$

和 D 的边值关系式(12)

$$
D _ {2 n} = D _ {1 n}\tag{2}
$$

并参考图12.1.17得

$$
E _ {2} \sin \theta_ {2} = E _ {1} \sin \theta_ {1}\tag{3}
$$

$$
D _ {2} \cos \theta_ {2} = D _ {1} \cos \theta_ {1}\tag{4}
$$

因为

$$
\boldsymbol {D} _ {1} = \epsilon_ {1} \boldsymbol {E} _ {1}\tag{5}
$$

$$
\boldsymbol {D} _ {2} = \varepsilon_ {2} \boldsymbol {E} _ {2}\tag{6}
$$

故将式(4)除以式(3)，并利用式(5)、(6)便得

$$
\varepsilon_ {2} \cot \theta_ {2} = \varepsilon_ {1} \cot \theta_ {1}\tag{7}
$$

由前面 12.1.16 题 H 的边值关系式(14)

$$
H _ {2 t} = H _ {1 t}\tag{8}
$$

和 B 的边值关系式(16)

$$
B _ {2 n} = B _ {1 n}\tag{9}
$$

并参考图 12.1.17 得

$$
H _ {2} \sin \varphi_ {2} = H _ {1} \sin \varphi_ {1}\tag{10}
$$

$$
B _ {2} \cos \varphi_ {2} = B _ {1} \cos \varphi_ {1}\tag{11}
$$

因为

$$
\boldsymbol {B} _ {1} = \mu_ {1} \boldsymbol {H} _ {1}\tag{12}
$$

$$
\boldsymbol {B} _ {2} = \mu_ {2} \boldsymbol {H} _ {2}\tag{13}
$$

故将式(11)除以式(10)，并利用式(12)、(13)便得

$$
\mu_ {2} \cot \varphi_ {2} = \mu_ {1} \cot \varphi_ {1}\tag{14}
$$

12.1.18 试论证: 理想导体(即电阻率 $\rho = 0$ 的导体) 表面外附近的电场强度总是与表面垂直.

【论证】由 $j = \sigma E = \frac{1}{\rho} E$ 知，理想导体内的电场强度为

$$
\boldsymbol {E} = \rho \boldsymbol {j} = 0
$$

根据电场强度的边值关系[参见前面12.1.16题的式(6)]，在交界面两边，电场强度 $\pmb{E}$ 的切向分量相等. 今理想导体内 $E = 0$ ，故 $\pmb{E}$ 的切向分量亦为零，于是理想导体表面外附近电场强度的切向分量亦应为零. 所以理想导体表面外附近的电场强度总是与表面垂直.

【讨论】在静电情况下，导体表面外附近的电场强度 E 与表面垂直[参见前面 2.1.37 题]. 在非静电情况下(如导体内有传导电流)，导体内的电场强度不为零，这时导体表面外附近的电场强度便不一定与表面垂直. 但对理想导体来说，不论是静电情况还是非静电情况，其表面外附近的电场强度都与表面垂直.

12.1.19 金属的电导率为 $\sigma$ ，介电常数为 $1$ （即 $\varepsilon_{\mathrm{r}} = 1$ ）。设在 $t = 0$ 时刻，金属中某点的自由电荷量密度为 $\rho_0$ ，试求 $t$ 时刻该点的自由电荷量密度 $\rho(t)$ 。已知 $\varepsilon_0 = 8.854 \times 10^{-12} \mathrm{~F/m}$ ，铜的电阻率为 $1.7 \times 10^{-8} \Omega \cdot \mathrm{m}$ ，试计算铜内自由电荷量密度从 $\rho_0$ 减小到 $\frac{\rho_0}{\mathrm{e}} = \rho_0 / 2.71828$ 所需的时间 $\tau$ （ $\tau$ 通常叫做弛豫时间）。

【解】由欧姆定律的微分形式

$$
\boldsymbol {j} = \sigma \boldsymbol {E}\tag{1}
$$

和

$$
\boldsymbol {D} = \epsilon \boldsymbol {E}\tag{2}
$$

得

$$
\begin{array}{r l} \nabla \cdot \boldsymbol {j} & = \nabla \cdot (\sigma \boldsymbol {E}) = \sigma \nabla \cdot \boldsymbol {E} = \sigma \nabla \cdot \left(\frac {\boldsymbol {D}}{\varepsilon}\right) \\ & = \frac {\sigma}{\varepsilon} \nabla \cdot \boldsymbol {D} = \frac {\sigma}{\varepsilon} \rho \end{array}\tag{3}
$$

式中用到了麦克斯韦方程组的 $\nabla \cdot D = \rho$ 。再由电荷守恒定律

$$
\nabla \cdot \boldsymbol {j} + \frac {\partial \rho}{\partial t} = 0\tag{4}
$$

得

$$
\frac {\partial \rho}{\partial t} = - \frac {\sigma}{\epsilon} \rho\tag{5}
$$

对时间 t 积分得电荷密度与时间 t 的关系为

$$
\rho (t) = \rho_ {0} \mathrm{e} ^ {- \frac {\sigma}{\varepsilon} t} = \rho_ {0} \mathrm{e} ^ {- \frac {t}{\tau}}\tag{6}
$$

式中

$$
\tau = \frac {\varepsilon}{\sigma}\tag{7}
$$

为弛豫时间.

铜的弛豫时间为

$$
\begin{array}{r l} \tau & = \frac {\varepsilon}{\sigma} = \frac {\varepsilon_ {r} \varepsilon_ {0}}{\sigma} = 1 \times 8. 8 5 4 \times 1 0 ^ {- 1 2} \times 1. 7 \times 1 0 ^ {- 8} \\ & = 1. 5 \times 1 0 ^ {- 1 9} (\mathrm{s}) \end{array}\tag{8}
$$

【讨论】式(6)表明，在静电平衡时，导体内的自由电荷量密度为零，即导体内不存在自由电荷.式(8)表明，铜的弛豫时间非常短.这意味着铜质物体可以非常快地达到静电平衡.

12.1.20 将麦克斯韦方程组写成积分形式，然后用于稳定的直流电路，从而导出基尔霍夫电路方程组：(1) 每个分支点 $\sum_{i} I_{i} = 0$ ; (2) 每个回路 $\sum_{i} U_{i} = \sum_{i} E_{i}$ .

【解】（1）对于稳定的直流电路来说，由麦克斯韦方程得

$$
\nabla \times \boldsymbol {H} = j\tag{1}
$$

根据矢量分析，对矢量 A 有

$$
\nabla \cdot (\nabla \times \mathbf {A}) = 0\tag{2}
$$

由式(1)、(2)得

$$
\nabla \cdot \boldsymbol {j} = 0\tag{3}
$$

如图12.1.20，取包住分支点 $N$ 的封闭曲面 $S$ ，将式(3)对 $S$ 内的体积 $V$ 积分，并利用高斯公式，便得

$$
\begin{array}{r l} \iiint_ {V} \nabla \cdot \boldsymbol {j} \mathrm{d} V & = \iint_ {S} \boldsymbol {j} \cdot \mathrm{d} \boldsymbol {S} = \sum_ {i} \int_ {i} \boldsymbol {j} \cdot \mathrm{d} \boldsymbol {S} \\ & = \sum_ {i} I _ {i} = 0 \end{array}\tag{4}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/69d4ecd07939e0b9378b7c8f6ab60bbb10235d1c26c7d66d1c224a9261df3756.jpg)


式中 $I_{i}$ 流出 S 者为正，流入 S 者为负.

图12.1.20

(2) 由于是稳定的直流电路, 故由麦克斯韦方程得

$$
\boldsymbol {\nabla} \times \boldsymbol {E} = 0\tag{5}
$$

在电路中取回路 $L$ ，将式(5)对以 $L$ 为边界的曲面 $S$ 积分，并利用斯托克斯公式，便得

$$
\iint_ {S} \boldsymbol {\nabla} \times \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {S} = \oint_ {L} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = 0\tag{6}
$$

根据欧姆定律，在没有电源的地方，

$$
\begin{array}{r l} \int_ {i} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} & = \int_ {i} \rho \boldsymbol {j} \cdot \mathrm{d} \boldsymbol {l} = \int_ {i} \rho j \mathrm{d} l = \int_ {i} \rho \frac {\boldsymbol {I} _ {i}}{S} \mathrm{d} l = I _ {t} R _ {i} \\ & = U _ {i} \end{array}\tag{7}
$$

上式中自第二个等号后起，都包含正负号，凡 $j$ 与 $\mathrm{d}l$ 同方向的 $I_{i}$ 和 $U_{i}$ 都为正，而 $j$ 与 $\mathrm{d}l$ 反方向的 $I_{i}$ 和 $U_{i}$ 便都为负.

在有电源的地方，设 K 为电源的非静电力，则

$$
\begin{array}{r l} \int_ {i} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} & = \int_ {i} (\rho \boldsymbol {j} - \boldsymbol {K}) \cdot \mathrm{d} \boldsymbol {l} = \int_ {i} \rho \boldsymbol {j} \cdot \mathrm{d} \boldsymbol {l} - \int_ {i} \boldsymbol {K} \cdot \mathrm{d} \boldsymbol {l} \\ & = I _ {i} r _ {i} - \mathcal {E} _ {i} = U _ {i} - \mathcal {E} _ {i} \end{array}\tag{8}
$$

式中 $U_{i} = I_{i}r_{i}$ 是电源内阻所产生的电势差，凡 $\pmb{j}$ 与 $\mathrm{d}\pmb{l}$ 同方向的 $I_{i}$ 和 $U_{i}$ 都为正，而 $\pmb{j}$ 与 $\mathrm{d}\pmb{l}$ 反方向的 $I_{i}$ 和 $U_{i}$ 都为负．因为电源的电动势定义为

$$
\mathcal {E} = \int_ {-} ^ {+} \boldsymbol {K} \cdot \mathrm{d} \boldsymbol {l} > 0\tag{9}
$$

其中积分是从电源的负极经电源内部到电源的正极，故在式(8)中，凡 $\pmb{K}$ 与 $\mathrm{d}l$ 同方向的 $\varepsilon_{i}$ 为正， $\pmb{K}$ 与 $\mathrm{d}l$ 反方向的 $\varepsilon_{i}$ 为负.

将式(7)、(8)代入式(6)便得，对于每个回路都有

$$
\sum_ {i} U _ {i} = \sum_ {i} \mathcal {E} _ {i}\tag{10}
$$

式中的 $U_{i}$ 和 $\varepsilon_{i}$ 的正负已如上述.

12.1.21 在我们所使用的国际单位制里， $\nabla \cdot D = \rho$ ，库仑定律为 $F = \frac{1}{4\pi\varepsilon_0}$ $\frac{q_1q_2}{r^3} r$ ；在高斯单位制里， $\nabla \cdot D = 4\pi\rho$ ，试问在高斯单位制里，库仑定律的形式如何？

【解答】在高斯单位制里， $\nabla \cdot D = 4\pi \rho$ ，对于一个电荷量为 $q$ 的点电荷，利用高斯公式得

$$
\begin{array}{r l} \iint_ {S} \boldsymbol {D} \cdot \mathrm{d} \boldsymbol {S} & = 4 \pi r ^ {2} D = \iiint_ {V} \nabla \cdot \boldsymbol {D} \mathrm{d} V = 4 \pi \iiint \rho \mathrm{d} V \\ & = 4 \pi q \end{array}
$$

故得

$$
\boldsymbol {D} = \frac {q}{r ^ {3}} \boldsymbol {r}
$$

在高斯单位制里, 在真空中 D = E, 故得

$$
\boldsymbol {E} = \frac {q}{r ^ {3}} \boldsymbol {r}
$$

于是得高斯单位制里库仑定律的形式为

$$
\boldsymbol {F} = \frac {q _ {1} q _ {2}}{r ^ {3}} \boldsymbol {r}
$$

## § 12.2 电磁波

12.2.1 在空气中有一个单色平面电磁波, 它的频率为 $1.0 \times 10^{8}$ Hz, 位移电流密度的方均根值为 $1.0 \times 10^{-5}$ A/m². 试求这电磁波的电场强度和磁场强度的振幅 $E_{0}$ 和 $H_{0}$ .

【解】设这电磁波的电场强度为

$$
\boldsymbol {E} = \boldsymbol {E} _ {0} \sin \omega t\tag{1}
$$

则它的位移电流密度为

$$
\frac {\partial \boldsymbol {D}}{\partial t} = \frac {\partial (\varepsilon_ {0} \boldsymbol {E})}{\partial t} = \varepsilon_ {0} \omega \boldsymbol {E} _ {0} \cos \omega t\tag{2}
$$

依定义,位移电流密度的方均根值为

$$
\begin{array}{r l} \sqrt {\frac {1}{T} \int_ {0} ^ {T} \left(\frac {\partial D}{\partial t}\right) ^ {2} \mathrm{d} t} & = \sqrt {\frac {\varepsilon_ {0} ^ {2} \omega^ {2} E _ {0} ^ {2}}{T} \int_ {0} ^ {T} \cos^ {2} \omega t \mathrm{d} t} \\ & = \sqrt {\frac {\varepsilon_ {0} ^ {2} \omega E _ {0} ^ {2}}{2 T} [ \omega t + \sin \omega t \cos \omega t ] _ {t - 0} ^ {t - T}} \\ & = \frac {1}{\sqrt {2}} \varepsilon_ {0} \omega E _ {0} = 1. 0 \times 1 0 ^ {- 5} (\mathrm{A/m} ^ {2}) \end{array}\tag{3}
$$

所以

$$
\begin{array}{r l} E _ {0} & = \frac {\sqrt {2} \times 1 . 0 \times 1 0 ^ {- 5}}{\epsilon_ {0} \omega} = \frac {\sqrt {2} \times 1 . 0 \times 1 0 ^ {- 5}}{8 . 8 5 4 \times 1 0 ^ {- 1 2} \times 2 \pi \times 1 . 0 \times 1 0 ^ {8}} \\ & = 2. 5 \times 1 0 ^ {- 3} (\mathrm{A/m}) \end{array}\tag{4}
$$

根据单色平面电磁波的电磁场的振幅关系

$$
\sqrt {\mu_ {0}} H _ {0} = \sqrt {\epsilon_ {0}} E _ {0}\tag{5}
$$

得

$$
\begin{array}{r l} H _ {0} & = \sqrt {\frac {\varepsilon_ {0}}{\mu_ {0}}} E _ {0} = \sqrt {\frac {8 . 8 5 4 \times 1 0 ^ {- 1 2}}{4 \pi \times 1 0 ^ {- 7}}} \times 2. 5 \times 1 0 ^ {- 3} \\ & = 6. 6 \times 1 0 ^ {- 6} (\mathrm{A/m}) \end{array}\tag{6}
$$

12.2.2 已知真空中一平面电磁波的电场强度为 $E = E_0\mathrm{e}^{\mathrm{i}(k\cdot r - \omega t)}$ ，式中 $E_0$ 是常矢量， $\omega$ 是圆频率， $\pmb{k}$ 是传播矢量， $\pmb{r}$ 是位置矢量， $i = \sqrt{-1}$ ，e是自然对数的底．试由麦克斯韦方程求这电磁波的磁场强度 $\pmb{H}$ 

【解】 利用麦克斯韦方程

$$
\nabla \times \boldsymbol {E} = - \frac {\partial \boldsymbol {B}}{\partial t} = - \mu_ {0} \frac {\partial \boldsymbol {H}}{\partial t}\tag{1}
$$

求 $\pmb{H}$ .其中

$$
\begin{array}{r l} \nabla \times \boldsymbol {E} & = \nabla \times \left[ \boldsymbol {E} _ {0} \mathrm{e} ^ {\mathrm{i} (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t)} \right] = \left[ \nabla \mathrm{e} ^ {\mathrm{i} (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t)} \right] \times \boldsymbol {E} _ {0} \\ & = \mathrm{e} ^ {\mathrm{i} (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t)} \left[ \nabla_ {\mathrm{i}} (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t) \right] \times \boldsymbol {E} _ {0} \\ & = [ \mathrm{i} \nabla (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t) ] \times \boldsymbol {E} _ {0} \mathrm{e} ^ {\mathrm{i} (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t)} \end{array}\tag{2}
$$

因为

$$
\nabla (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t) = \nabla (\boldsymbol {k} \cdot \boldsymbol {r}) = \boldsymbol {k}\tag{3}
$$

所以

$$
\nabla \times \boldsymbol {E} = \mathrm{i} \boldsymbol {k} \times \boldsymbol {E} _ {0} \mathrm{e} ^ {\mathrm{i} (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t)}\tag{4}
$$

将式(4)代入式(1)，对时间 t 积分便得

$$
\begin{array}{r l} \boldsymbol {H} & = - \frac {\mathrm{i} \boldsymbol {k} \times \boldsymbol {E} _ {0}}{\mu_ {0}} \int \mathrm{e} ^ {\mathrm{i} (\boldsymbol {k} \cdot r - \omega t)} \mathrm{d} t \\ & = \frac {1}{\omega \mu_ {0}} \boldsymbol {k} \times \boldsymbol {E} _ {0} \mathrm{e} ^ {\mathrm{i} (\boldsymbol {k} \cdot r - \omega t)} \end{array}\tag{5}
$$

上式中的积分常矢量与时间 t 无关，因而不属于电磁波，故舍去.

【讨论】 由式(5)得

$$
\boldsymbol {H} = \frac {1}{\omega \mu_ {0}} \boldsymbol {k} \times \boldsymbol {E}\tag{6}
$$

它表明，这电磁波的磁场强度 H 与电场强度 E 垂直，也与传播矢量 k 垂直.

12.2.3 在一平面电磁波里，同一点电场强度和磁场强度的振幅有如下关系： $\sqrt{\varepsilon} E_0 = \sqrt{\mu} H_0$ 。（1）试由此证明：(i)在平面电磁波里，电场能量的密度与磁场能量的密度相等；(ii)在真空中，电磁波磁感强度的振幅为 $B_{0} = E_{0} / c$ ， $c$ 为真空中光速。（2）在离一无线电台几公里处，该电台发出的电磁波在小范围内近似于平面波，它的 $E_0 = 0.10\mathrm{V / m}$ ，试求该处这电磁波的 $B_{0}$ 的值。

【解】（1）(i) 设这电磁波的电场强度为

$$
\boldsymbol {E} = \boldsymbol {E} _ {0} \sin (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t)\tag{1}
$$

则它的电场能量密度为

$$
w _ {e} = \frac {1}{2} \varepsilon E ^ {2} = \frac {1}{2} \varepsilon E _ {0} ^ {2} \sin^ {2} (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t)\tag{2}
$$

由麦克斯韦方程

$$
\frac {\partial \boldsymbol {B}}{\partial t} = - \nabla \times \boldsymbol {E}\tag{3}
$$

得

$$
\begin{array}{r l} \frac {\partial \pmb {B}}{\partial t} & = - \nabla \times [ \pmb {E} _ {0} \sin (\pmb {k} \cdot \pmb {r} - \omega t) ] \\ & = - \nabla [ \sin (\pmb {k} \cdot \pmb {r} - \omega t) ] \times \pmb {E} _ {0} \\ & = - \cos (\pmb {k} \cdot \pmb {r} - \omega t) [ \nabla (\pmb {k} \cdot \pmb {r}) ] \times \pmb {E} _ {0} \\ & = - \cos (\pmb {k} \cdot \pmb {r} - \omega t) \pmb {k} \times \pmb {E} _ {0} \end{array}\tag{4}
$$

所以

$$
\begin{array}{l} \boldsymbol {B} = - \boldsymbol {k} \times \boldsymbol {E} _ {0} \int \cos (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t) d t \\ = \frac {\boldsymbol {k} \times \boldsymbol {E} _ {0}}{\omega} \sin (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t) \end{array}\tag{5}
$$

上式中的积分常矢量与时间 t 无关, 不属于电磁波, 故舍去.

于是得这电磁波的磁场能量密度为

$$
w _ {m} = \frac {1}{2} \frac {B ^ {2}}{\mu} = \frac {1}{2} \frac {\left(\boldsymbol {k} \times \boldsymbol {E} _ {0}\right) ^ {2}}{\omega^ {2} \mu} \sin^ {2} (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t)\tag{6}
$$

由麦克斯韦方程得

$$
\begin{array}{r l} \nabla \cdot \boldsymbol {D} & = \nabla \cdot (\varepsilon \boldsymbol {E}) = \varepsilon \nabla \cdot \boldsymbol {E} = \varepsilon \nabla \cdot [ \boldsymbol {E} _ {0} \sin (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t) ] \\ & = \varepsilon [ \nabla \sin (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t) ] \cdot \boldsymbol {E} _ {0} \\ & = \varepsilon \cos (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t) \boldsymbol {k} \cdot \boldsymbol {E} _ {0} = 0 \end{array}\tag{7}
$$

故知 $\pmb{k}$ 与 $E_0$ 垂直，所以

$$
(\boldsymbol {k} \times \boldsymbol {E} _ {0}) ^ {2} = k ^ {2} E _ {0} ^ {2}\tag{8}
$$

又由式(5)有

$$
\frac {| \boldsymbol {k} \times \boldsymbol {E} _ {0} |}{\omega} = B _ {0} = \mu H _ {0} = \mu \sqrt {\frac {\varepsilon}{\mu}} E _ {0} = \sqrt {\varepsilon \mu} E _ {0}\tag{9}
$$

将式(9)代入式(6)便得

$$
w _ {m} = \frac {1}{2} \varepsilon E _ {0} ^ {2} \sin^ {2} (\boldsymbol {k} \cdot \boldsymbol {r} - \omega t) = w _ {r}\tag{10}
$$

(ii) 在真空中, 由式(9)得

$$
B _ {0} = \sqrt {\varepsilon_ {0} \mu_ {0}} E _ {0} = \frac {E _ {0}}{c}\tag{11}
$$

(2) 这电磁波 $B_{0}$ 的值为

$$
B _ {0} = \frac {E _ {0}}{c} = \frac {0 . 1 0}{3 \times 1 0 ^ {8}} = 3. 3 \times 1 0 ^ {- 1 0} (\mathrm{T})\tag{12}
$$

12.2.4 真空中，一带电粒子在平面电磁波里运动，试证明：电磁波的电场作用在它上面的力大于电磁波的磁场作用在它上面的力.

【证】设平面电磁波的电场强度为 E，磁感强度为 B，粒子所带电荷量为 q，运动速度为 v，则 E 和 B 作用在它上面的力分别为

$$
\boldsymbol {F} _ {e} = q \boldsymbol {E}\tag{1}
$$

$$
\boldsymbol {F} _ {m} = q \boldsymbol {v} \times \boldsymbol {B}\tag{2}
$$

$F_{e}$ 和 $F_{m}$ 的大小分别为

$$
F _ {e} = q E\tag{3}
$$

$$
F _ {m} = q v B \sin \theta\tag{4}
$$

式中 $\theta$ 为 $\pmb{v}$ 与 $\pmb{B}$ 的夹角. 故得

$$
\frac {F _ {e}}{F _ {m}} = \frac {E}{v B \sin \theta}\tag{5}
$$

由前面 12.2.3 题的式(11)，

$$
B = \frac {E}{c}\tag{6}
$$

所以

$$
\frac {F _ {e}}{F _ {m}} = \frac {c}{v \sin \theta}\tag{7}
$$

根据狭义相对论， $v < c$ ，故得

$$
F _ {e} > F _ {m}\tag{8}
$$

12.2.5 一平面线圈的面积为 $0.50 ~m^{2}$ ，共有 5 匝，放在频率为 $2.0 ~MHz$ 的电磁波里，它的方位是使电磁波在它里面产生的感应电动势为最大，设这时感应电动势的有效值为 $10 ~mV$ ，试求该电磁波的磁场强度 H 的振幅。

【解】设这电磁波的磁场强度为

$$
H = H _ {0} \mathrm{cos} \omega t\tag{1}
$$

则通过线圈的磁链为

$$
\Psi = N \Phi = N \mu_ {0} H _ {0} S \cos \omega t\tag{2}
$$

线圈里的感应电动势为

$$
\dot {\varepsilon} = - \frac {\mathrm{d} \Psi}{\mathrm{d} t} = \mu_ {0} N H _ {0} S \omega \sin \omega t\tag{3}
$$

按题意

$$
\frac {\mu_ {0} N H _ {0} S \omega}{\sqrt {2}} = 1 0 \times 1 0 ^ {- 3} \mathrm{V}\tag{4}
$$

故得

$$
\begin{array}{r l} H _ {0} & = \frac {\sqrt {2} \times 1 0 \times 1 0 ^ {- 3}}{\mu_ {0} N S \omega} \\ & = \frac {\sqrt {2} \times 1 0 ^ {- 2}}{4 \pi \times 1 0 ^ {- 7} \times 5 \times 0 . 5 0 \times 2 \pi \times 2 . 0 \times 1 0 ^ {6}} \\ & = 3. 6 \times 1 0 ^ {- 4} (\mathrm{A/m}) \end{array}\tag{5}
$$

12.2.6 当太阳光垂直地射到地面上时，每分钟射到地面每平方厘米上的能量为 1.94cal，已知 $1 \, cal = 4.1868 \, J$ 。试求地面上太阳光的电场强度 E 和磁场强度 H 的振幅 $E_{0}$ 和 $H_{0}$ 。

【解】由单色平面电磁波的电场强度

$$
\boldsymbol {E} = \boldsymbol {E} _ {0} \sin \omega t\tag{1}
$$

得它的能量密度为

$$
\begin{array}{r l} w & = w _ {e} + w _ {m} = \frac {1}{2} \varepsilon_ {0} E ^ {2} + \frac {1}{2} \mu_ {0} H ^ {2} = \varepsilon_ {0} E ^ {2} \\ & = \varepsilon_ {0} E _ {0} ^ {2} \sin^ {2} \omega t \end{array}\tag{2}
$$

其平均值为

$$
\begin{array}{r l} \overline {{{w}}} & = \frac {1}{T} \int_ {0} ^ {T} w \mathrm{d} t = \frac {\varepsilon_ {0} E _ {0} ^ {2}}{T} \int_ {0} ^ {T} \sin^ {2} \omega t \mathrm{d} t \\ & = \frac {\varepsilon_ {0} E _ {0} ^ {2}}{T} \left[ \frac {1}{2} \omega t - \frac {1}{2} \sin \omega t \cos \omega t \right] _ {t = 0} ^ {t - T} \\ & = \frac {1}{2} \varepsilon_ {0} E _ {0} ^ {2} \end{array}\tag{3}
$$

$t$ 时间内射到地面一平方米面积上的太阳光能量为

$$
\bar {W} = \bar {w} c t = \frac {1}{2} \varepsilon_ {0} E _ {0} ^ {2} c t\tag{4}
$$

式中 $c$ 为光速.于是得

$$
\begin{array}{r l} E _ {0} & = \sqrt {\frac {2 \overline {{W}}}{\varepsilon_ {0} c t}} = \sqrt {\frac {2 \times 1 . 9 4 \times 1 0 ^ {4} \times 4 . 1 8 6 8}{8 . 8 5 4 \times 1 0 ^ {- 1 2} \times 3 \times 1 0 ^ {8} \times 6 0}} \\ & = 1. 0 1 \times 1 0 ^ {3} (\mathrm{V/m}) \end{array}\tag{5}
$$

$$
\begin{array}{r l} H _ {0} & = \sqrt {\frac {\varepsilon_ {0}}{\mu_ {0}}} E _ {0} = \sqrt {\frac {8 . 8 5 4 \times 1 0 ^ {- 1 2}}{4 \pi \times 1 0 ^ {- 7}}} \times 1. 0 1 \times 1 0 ^ {3} \\ & = 2. 6 8 (\mathrm{A/m}) \end{array}
$$

12.2.7 太阳光垂直射到地面上时，地面每平方米接收到太阳光的功率为 $1.35\mathrm{kW}$ 。（1）已知日地距离为 $1.5 \times 10^{8}\mathrm{km}$ ，试求太阳发光所输出的功率；（2）已知地球半径为 $6.4 \times 10^{3}\mathrm{km}$ ，试求地球接收到太阳光的功率；（3）已知太阳现在的质量为 $2.0 \times 10^{30}\mathrm{kg}$ ，如果这质量按照爱因斯坦的质能关系式 $E = mc^2$ 转化为太阳光的能量，并以目前的功率向外发出辐射，试问太阳消耗目前质量的百分之一就可以维持多少年？

【解】（1）太阳发光所输出的功率为

$$
\begin{array}{r l} P & = 1. 3 5 \times 1 0 ^ {3} \times 4 \pi \times (1. 5 \times 1 0 ^ {8} \times 1 0 ^ {3}) ^ {2} \\ & = 3. 8 \times 1 0 ^ {2 6} (\mathrm{W}) \end{array}
$$

(2) 地球接收到太阳光的功率为

$$
\begin{array}{r l} P _ {e} & = 1. 3 5 \times 1 0 ^ {3} \times \pi \times (6. 4 \times 1 0 ^ {3} \times 1 0 ^ {3}) ^ {2} \\ & = 1. 7 \times 1 0 ^ {1 7} (\mathrm{W}) \end{array}
$$

(3) 可以维持的时间为

$$
\begin{array}{r l} {t} & {= \frac {2 . 0 \times 1 0 ^ {3 0} \times 0 . 0 1 \times (3 \times 1 0 ^ {8}) ^ {2}}{3 . 8 \times 1 0 ^ {2 6}}} \\ & {= 4. 7 \times 1 0 ^ {1 8} (\mathrm{s}) = 1. 5 \times 1 0 ^ {1 1} (\text {年})} \end{array}
$$

【讨论】 由以上结果得

$$
\frac {P _ {e}}{P} = 4. 5 \times 1 0 ^ {- 1 0}
$$

可见地球接收到的太阳光的功率还不到太阳发光所输出的功率的一百亿分之五.

12.2.8 实验证明，电磁波有动量，动量密度(单位体积的动量)为 $G = \varepsilon_{0}\mu_{0}S$ ，式中 $S = E \times H$ 是坡印亭矢量。已知太阳光正入射时，地面上每平方厘米每分钟接收太阳光的能量为 1.94cal，1cal = 4.1868J，设射到地面上的太阳光全部被吸收。已知地球的半径为 $6.4 \times 10^{3}km$ ，试求太阳光作用在整个地球上的力。

【解】 电磁波的动量密度的大小为

$$
G = \varepsilon_ {0} \mu_ {0} S = \frac {S}{c ^ {2}}\tag{1}
$$

设地球半径为 R，如图 12.2.8 所示，在 t 时间内，射到地球上的太阳光的动量为

$$
p = \pi R ^ {2} c t G = \pi R ^ {2} t \frac {S}{c}\tag{2}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/275eec2a6da425817861fcd9fcd0a5625ea10eeb4ca6a8ba0852a1a760649ae3.jpg)



图12.2.8


这些动量全部被地球吸收,故地球所受太阳光的作用力为

$$
F = \frac {\mathrm{d} p}{\mathrm{d} t} = \frac {\pi R ^ {2}}{c} S\tag{3}
$$

代入数值为

$$
\begin{array}{r l} F & = \frac {\pi \times (6 . 4 \times 1 0 ^ {3} \times 1 0 ^ {3}) ^ {2}}{3 \times 1 0 ^ {8}} \times \frac {1 . 9 4 \times 4 . 1 8 6 8}{1 . 0 \times 1 0 ^ {- 4} \times 6 0} \\ & = 5. 8 \times 1 0 ^ {8} (\mathrm{N}) \end{array}\tag{4}
$$

【讨论】这个力约为 $6 \times 10^{4}$ 吨力. 但比起太阳吸引地球的万有引力

$$
\begin{array}{r l} F _ {G} & = G \frac {m M}{r ^ {2}} = 6. 6 7 \times 1 0 ^ {- 1 1} \times \frac {6 . 0 \times 1 0 ^ {2 4} \times 2 . 0 \times 1 0 ^ {3 0}}{(1 . 5 \times 1 0 ^ {8} \times 1 0 ^ {3}) ^ {2}} \\ & = 3. 6 \times 1 0 ^ {2 2} (\mathrm{N}) \end{array}\tag{5}
$$

来，却又微不足道.

12.2.9 人造地球卫星由于受到太阳光的压力，会逐渐偏离原来的轨道。设一人造地球卫星的质量为 $m = 100\mathrm{kg}$ ，外形是半径为 $r = 1.0\mathrm{m}$ 的球形，射到它上面的太阳光有 $50\%$ 被反射， $50\%$ 被吸收。已知太阳常数的值为 $1.35 \times 10^{3}\mathrm{W / m}^{2}$ （太阳常数是地球轨道处，垂直于太阳光的每平方米面积接受到的太阳光的功率），试求这卫星所受到的太阳光的压力和因此产生的加速度。

【解】设太阳光的能量密度为 $w$ ，则在 $t$ 时间内，射到这人造地球卫星上的太阳光的能量为

$$
W = \pi r ^ {2} c t w\tag{1}
$$

根据狭义相对论,这能量的相应质量为

$$
m = \frac {W}{c ^ {2}} = \frac {\pi r ^ {2} t w}{c}\tag{2}
$$

相应动量为

$$
p = m c = \pi r ^ {2} t w\tag{3}
$$

电磁波的能流密度 S 的大小为

$$
S = | \boldsymbol {E} \times \boldsymbol {H} | = E H = \sqrt {\frac {\varepsilon_ {0}}{\mu_ {0}}} E ^ {2} = \frac {\varepsilon_ {0} E ^ {2}}{\sqrt {\varepsilon_ {0} \mu_ {0}}} = w c\tag{4}
$$

将式(4)代入式(3)便得

$$
p = \frac {\pi r ^ {2} t S}{c}\tag{5}
$$

因 $50\%$ 的太阳光被吸收， $50\%$ 的太阳光被反射，故得 $t$ 时间内，太阳光的动量的变化为

$$
\frac {1}{2} (p - 0) + \frac {1}{2} [ p - (- p) ] = \frac {3}{2} p\tag{6}
$$

于是得太阳光作用在这卫星上的压力为

$$
F = \frac {3}{2} \frac {\mathrm{d} p}{\mathrm{d} t} = \frac {3 \pi r ^ {2}}{2 c} S\tag{7}
$$

代入数值得

$$
\begin{array}{r l} {F} & {= \frac {3 \pi \times 1 . 0 ^ {2}}{2 \times 3 \times 1 0 ^ {8}} \times 1. 3 5 \times 1 0 ^ {3}} \\ & {= 2. 1 \times 1 0 ^ {- 5} (\text { 牛 })} \end{array}\tag{8}
$$

此卫星因受太阳光的压力而产生的加速度为

$$
\begin{array}{r l} a & = \frac {F}{m} = \frac {2 . 1 \times 1 0 ^ {- 5}}{1 0 0} \\ & = 2. 1 \times 1 0 ^ {- 7} (\mathrm{m/s} ^ {2}) \end{array}
$$

【讨论】这个加速度 $a$ 虽然很小，但长期作用的结果，会使卫星偏离原轨道很远.

12.2.10 一晶体管收音机的中波灵敏度约为 $E = 1.0\mathrm{mV / m}$ . 设这收音机能清楚地收听到一千公里远某一电台的广播, 假定该台的发射是各向同性的, 并且电磁波在传播时没有损耗. 试求该电台的发射功率.

【解】该电台的发射功率为

$$
\begin{array}{r l} P & = 4 \pi R ^ {2} S = 4 \pi R ^ {2} E H = 4 \pi R ^ {2} \sqrt {\frac {\epsilon_ {0}}{\mu_ {0}}} E ^ {2} \\ & = 4 \pi \times (1 0 0 0 \times 1 0 ^ {3}) ^ {2} \times \sqrt {\frac {8 . 8 5 4 \times 1 0 ^ {- 1 2}}{4 \pi \times 1 0 ^ {- 7}}} \times (1. 0 \times 1 0 ^ {- 3}) ^ {2} \\ & = 3. 3 \times 1 0 ^ {4} (\mathrm{W}) \end{array}
$$

12.2.11 一飞机在离某电台10公里处飞行，收到该电台的讯号强度为 $S = 10\mu \mathrm{W} / \mathrm{m}^2$ 。试求：(1)该电台发射的讯号在飞机处的电场强度 $E$ 和磁场强度 $H$ 的值；(2)该电台的发射功率（设发射是各向同性的，并且不考虑地球的反射）。

【解】（1）通过电磁波的横截面 A 的功率为

$$
P = S A = E H A = \sqrt {\frac {\varepsilon_ {0}}{\mu_ {0}}} E ^ {2} A\tag{1}
$$

于是得所求的电场强度 E 的值为

$$
\begin{array}{r l} E & = \sqrt {\sqrt {\frac {\mu_ {0}}{\varepsilon_ {0}}} S} = \sqrt {\sqrt {\frac {4 \pi \times 1 0 ^ {- 7}}{8 . 8 5 4 \times 1 0 ^ {- 1 2}} \times 1 0 \times 1 0 ^ {- 6}}} \\ & = 6. 1 \times 1 0 ^ {- 2} (\mathrm{V/m}) \end{array}\tag{2}
$$

磁场强度 H 的值为

$$
\begin{array}{r l} H & = \sqrt {\frac {\varepsilon_ {0}}{\mu_ {0}}} E = \sqrt {\frac {8 . 8 5 4 \times 1 0 ^ {- 1 2}}{4 \pi \times 1 0 ^ {- 7}}} \times 6. 1 \times 1 0 ^ {- 2} \\ & = 1. 6 \times 1 0 ^ {- 4} (\mathrm{A/m}) \end{array}\tag{3}
$$

(2) 该电台的发射功率为

$$
\begin{array}{r l} P _ {e} & = 4 \pi R ^ {2} S = 4 \pi \times (1 0 \times 1 0 ^ {3}) ^ {2} \times 1 0 \times 1 0 ^ {- 6} \\ & = 1. 3 \times 1 0 ^ {4} (\mathrm{W}) \end{array}\tag{4}
$$

12.2.12 试论证:平行板电容器充电时,坡印亭矢量 S 指向电容器内部;放

电时，S 则指向电容器外部. 其物理意义是什么?

【论证】平行板电容器充电时，如图12.2.12(1)所示，电场强度 $\pmb{E}$ 自正极板指向负极板；根据Biot-Savart定律， $\pmb{H}$ 为电流 $I$ 的右手螺旋方向，故 $S = E \times H$ 指向电容器内部。其物理意义为，电容器充电时，电磁场的能量从外面流入电容器内。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/537e7c23dcf4df3318d0c2096dcdb798e8d8e513f6cc9084d94503bc2e38e507.jpg)



(1)充电


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/21a48934d28bc11ef684105de012f389cda0e20a58af26cad26be4f38e8ff40f.jpg)



(2) 放电



图12.2.12


放电时, 如图 12.2.12(2) 所示, 电场强度 E 自正极板指向负极板, 磁场强度 H 仍为电流 I 的右手螺旋方向, 故 $S = E \times H$ 指向电容器外部. 其物理意义为, 电容器放电时, 电磁场的能量从电容器内向外流.

12.2.13 一螺线管长为 $l$ ，横截面的半径为 $a (a \ll l)$ ，由 $N$ 匝表面绝缘的细导线密绕而成。略去边缘效应。（1）当导线中的电流为 $I$ 时，试求管内磁场的能量 $W_{m}$ ；（2）当 $I$ 增大时，试说明能量是怎样进入管内的；（3）当电流从零增大到 $I$ 时，试证明进入管内的能量等于管内的磁场能量。

【解】（1）这螺线管内的磁感强度 B 的大小为[参见前面 5.1.29 题的式(7)]

$$
B = \mu_ {0} n I = \mu_ {0} \frac {N}{l} I\tag{1}
$$

故所求的磁场能量为

$$
W _ {m} = w _ {m} \cdot \pi a ^ {2} l = \frac {1}{2} \frac {B ^ {2}}{\mu_ {0}} \cdot \pi a ^ {2} l = \frac {\pi \mu_ {0} N ^ {2} a ^ {2} I ^ {2}}{2 l}\tag{2}
$$

用螺线管的自感 $L$ 表示 $W_{m}$ , 由前面8.3.4题的式(4), 这螺线管的自感为

$$
L = \mu_ {0} n ^ {2} V = \frac {\pi \mu_ {0} N ^ {2} a ^ {2}}{l}\tag{3}
$$

故得

$$
W _ {m} = \frac {1}{2} L I ^ {2}\tag{4}
$$

(2) 当电流 $I$ 增大时, 螺线管的横截面如图 12.2.13 所示. 这时 $\pmb{H}$ 向内. 感应电场 (涡旋电场) 的 $\pmb{E}$ 与 $I$ 的方向相反, 电磁场的能流密度 $\pmb{S} = \pmb{E} \times \pmb{H}$ 向螺线管内部. 这表明, 当电流增大时, 电磁场的能量是穿过螺线管的侧面进入螺线管内的.

(3) 根据 $S = E \times H$ 的物理意义, 单位时间内进入螺线管内的能量为

$$
\begin{array}{r l} \frac {\mathrm{d} W _ {m}}{\mathrm{d} t} & = S \cdot 2 \pi a l = E H \cdot 2 \pi a l = \frac {1}{2 \pi a} \frac {\mathrm{d} \Phi}{\mathrm{d} t} n I \cdot 2 \pi a l \\ & = n I l \frac {\mathrm{d}}{\mathrm{d} t} (\pi a ^ {2} \cdot \mu_ {0} n I) = \pi \mu_ {0} n ^ {2} a ^ {2} l I \frac {\mathrm{d} I}{\mathrm{d} t} \\ & = \frac {1}{2} \frac {\pi \mu_ {0} N ^ {2} a ^ {2}}{l} \frac {\mathrm{d} I ^ {2}}{\mathrm{d} t} = \frac {\mathrm{d}}{\mathrm{d} t} \left(\frac {1}{2} L I ^ {2}\right) \end{array}
$$

积分便得

$$
W _ {m} = \frac {1}{2} L I ^ {2}\tag{5}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/6017947b9f607140c2bff77738de0156af4c3e8fede30e51931d45ff8dfd7e3f.jpg)


(6) 

这个结果表明,进入管内的能量等于管内的磁场能量.

图12.2.13

12.2.14 半径为 a 的长直导线载有电流 I, I 沿轴线方向并均匀分布在横截面上. 试证明: (1) 在导线表面上, 坡印亭矢量 S 的方向处处垂直于表面并向内; (2) 导线体内消耗的焦耳热等于 S 输送来的能量.

【证】（1）在导线里，由欧姆定律的微分形式得

$$
\boldsymbol {E} = \rho \boldsymbol {j}\tag{1}
$$

式中 $\rho$ 是导线的电阻率, j 是电流密度, E 是电场强度. 根据 E 的切向分量的连续性, 知导线表面上的电场强度为

$$
\boldsymbol {E} = \rho \boldsymbol {j} = \rho \frac {I}{\pi a ^ {2}} \boldsymbol {e}\tag{2}
$$

式中 e 为电流方向上的单位矢量.

由对称性和安培环路定理得出，导线表面上的磁场强度为

$$
\boldsymbol {H} = \frac {I}{2 \pi a} \boldsymbol {e} _ {\phi}\tag{3}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/f493ccece3c940bbfcb11363bb8740b7fbb8342a9cdec53485a9c6af5b17aa72.jpg)


式中 $e_{\phi}$ 为电流 I 的右手螺旋方向上的单位矢量。于是得导线表面上的坡印亭矢量为

$$
\begin{array}{r l} \boldsymbol {S} & = \boldsymbol {E} \times \boldsymbol {H} = \rho \frac {I}{\pi a ^ {2}} \boldsymbol {e} \times \left(\frac {I}{2 \pi a} \boldsymbol {e} _ {\phi}\right) \\ & = - \rho \frac {I ^ {2}}{2 \pi^ {2} a ^ {3}} \boldsymbol {n} \end{array}\tag{4}
$$

式中 $n = e_{\phi} \times e$ 是导线表面法线方向上的单位矢量，方向向外. 式(4)表明， $S$ 的方向处处垂直于导体表面并向内，如图12.2.14所示.


图12.2.14


(2) 单位时间内, S 输入导线的能量为

$$
P = - \boldsymbol {n} \cdot \boldsymbol {S} \cdot 2 \pi a l = \rho \frac {I ^ {2} l}{\pi a ^ {2}}\tag{5}
$$

因为

$$
\rho \frac {l}{\pi a ^ {2}} = R\tag{6}
$$

是长为 l 的一段导线的电阻, 故得

$$
P = I ^ {2} R\tag{7}
$$

式(7)表明,导线体内消耗的焦耳热等于 S 输入的能量.

12.2.15 一同轴电缆由两个共轴的长直导体圆筒构成, 它们的半径分别为 $a$ 和 $b$ , 如图 12.2.15 所示. 当这电缆的一端接上负载 $R$ , 另一端加上电压 $U$ 时, 电流在两筒上都是均匀分布的. (1) 试求电缆内的电场强度 $\pmb{E}$ 和磁场强度 $\pmb{H}$ 以及坡印亭矢量 $\pmb{S}$ ; (2) 试论证, 不论电源的正极是接在内筒上还是接在外筒上, $\pmb{S}$ 的方向总是由电源端指向负载端; (3) 试证明, 穿过两筒间横截面的功率等于 $U^2 / R$ , 并说明所得结果的物理意义.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/5ad5fe6f-75b0-4c99-8b34-ff98e91a0f30/07a6bf69e99e38eaa158c0af5bdcedefb4ef46e7ccfe23da60a7128dde39b1d0.jpg)



图12.2.15


【解】（1）设内简单位长度的电荷量为 $\lambda$ ，则由对称性和高斯定理得

$$
\oint_ {S} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {S} = E \cdot 2 \pi r l = \frac {1}{\varepsilon_ {0}} \lambda l\tag{1}
$$

所以

$$
\boldsymbol {E} = \frac {\lambda}{2 \pi \varepsilon_ {0} r} \boldsymbol {e} _ {r}, a <   r <   b\tag{2}
$$

式中 $e_{r}$ 是由轴线指向场点的单位矢量，与轴线垂直。由 E 得

$$
U = \int_ {a} ^ {b} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {r} = \frac {\lambda}{2 \pi \varepsilon_ {0}} \int_ {a} ^ {b} \frac {\boldsymbol {e} _ {r} \cdot \mathrm{d} \boldsymbol {r}}{r} = \frac {\lambda}{2 \pi \varepsilon_ {0}} \ln \frac {b}{a}\tag{3}
$$

消去 $\lambda$ 便得所求的电场强度为

$$
E = \frac {U}{\ln \frac {b}{a}} \frac {e _ {r}}{r}, a <   r <   b\tag{4}
$$

又由对称性和安培环路定理得

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H \cdot 2 \pi r = I = \frac {U}{R}\tag{5}
$$

所以

$$
\boldsymbol {H} = \frac {U}{2 \pi R} \frac {\boldsymbol {e} \times \boldsymbol {e} _ {r}}{r}, a <   r <   b\tag{6}
$$

式中 e 是平行于导线中电流 I 方向的单位矢量. 于是得坡印亭矢量为

$$
\boldsymbol {S} = \boldsymbol {E} \times \boldsymbol {H} = \frac {U}{\ln \frac {b}{a}} \frac {\boldsymbol {e} _ {r}}{r} \times \left(\frac {U}{2 \pi R} \frac {\boldsymbol {e} \times \boldsymbol {e} _ {r}}{r}\right)
$$

$$
= \frac {U ^ {2}}{2 \pi R \ln \frac {b}{a}} \frac {\pmb {e}}{r ^ {2}}, \quad a <   r <   b\tag{7}
$$

在内筒内， $r < a$ ，这时由对称性和高斯定理以及安培环路定理得

$$
\pmb {E} = 0, \quad \pmb {H} = 0, \quad r <   a\tag{8}
$$

所以

$$
\boldsymbol {S} = \boldsymbol {E} \times \boldsymbol {H} = 0, \quad r <   a\tag{9}
$$

(2) 以上是电源的正极接在内筒上的情况, 由式(7)可见, $S$ 与内筒上的电流同方向, 即自电源端指向负载端. 如果电源的负极接在内筒上, 而正极接在外筒上, 则仿以上推导可得, 这时 $\pmb{E}$ 和 $\pmb{H}$ 的大小仍为式(4)、(6), 但方向则与式(4)、(6)所给出的方向都相反. 因而 $\pmb{S} = \pmb{E} \times \pmb{H}$ 便仍为式(7), 即 $\pmb{S}$ 的方向也是由电源端指向负载端.

(3) 由式(7)得,穿过两筒间横截面的功率为

$$
P = \iint_ {A} \mathbf {S} \cdot \mathrm{d} \mathbf {A} = \frac {U ^ {2}}{2 \pi R \ln \frac {b}{a}} \int_ {a} ^ {b} \frac {2 \pi r \mathrm{d} r}{r ^ {2}} = \frac {U ^ {2}}{R}\tag{10}
$$

这个结果表明,负载上消耗的能量全是由两筒间的电磁场输送去的.

12.2.16 氢原子由一个质子和一个电子组成,质子的电荷量为 $e = 1.60 \times 10^{-19}C$ , 电子的电荷量为 -e. 按照经典模型, 电子环绕质子作圆周运动. (1) 试证明: 当电子轨道的半径为 r 时, 氢原子的能量为 $W = -\frac{1}{8\pi\varepsilon_{0}} \frac{e^{2}}{r}$ ; (2) 根据电动力学, 带电粒子作加速运动时, 会向外发出辐射, 对于经典模型的氢原子来说, 由计算得出的辐射功率为①

$$
P = \frac {e ^ {6}}{9 6 \pi^ {3} \varepsilon_ {0} ^ {3} c ^ {3} m ^ {2} r ^ {4}}
$$

式中 $c = 3.00 \times 10^{8} \mathrm{~m} / \mathrm{s}$ 是真空中光速, $m = 9.11 \times 10^{-31} \mathrm{~kg}$ 是电子质量. 试由以上两式求 $r$ 与 $t$ 的关系; (3) 设开始时, 氢原子处在基态, 即电子在半径为 $r_{0} = 5.29 \times 10^{-11} \mathrm{~m}$ 的圆轨道上环绕质子运动. 试问它经过多长时间, 便会落到质子上去?

【解】（1）氢原子中，电子的势能为

$$
E _ {p} = - \frac {e ^ {2}}{4 \pi \varepsilon_ {0} r}\tag{1}
$$

电子的动能为

$$
E _ {k} = \frac {1}{2} m v ^ {2}\tag{2}
$$

电子的运动方程为

$$
m \frac {v ^ {2}}{r} = \frac {e ^ {2}}{4 \pi \varepsilon_ {0} r ^ {2}}\tag{3}
$$

由式(2)、(3)得

$$
E _ {k} = \frac {e ^ {2}}{8 \pi \varepsilon_ {0} r}\tag{4}
$$

于是得氢原子的能量为

$$
W = E _ {\mathrm{k}} + E _ {\mathrm{p}} = \frac {e ^ {2}}{8 \pi \varepsilon_ {0} r} - \frac {e ^ {2}}{4 \pi \varepsilon_ {0} r} = - \frac {e ^ {2}}{8 \pi \varepsilon_ {0} r}\tag{5}
$$

(2) 由式(5)得氢原子辐射的功率为

$$
P = \frac {e ^ {4}}{9 6 \pi^ {3} \varepsilon_ {0} ^ {3} c ^ {3} m ^ {2} r ^ {4}} = - \frac {\mathrm{d} W}{\mathrm{d} t} = - \frac {e ^ {2}}{8 \pi \varepsilon_ {0}} \frac {1}{r ^ {2}} \frac {\mathrm{d} r}{\mathrm{d} t}\tag{6}
$$

所以

$$
\frac {\mathrm{d} r}{\mathrm{d} t} = - \frac {e ^ {4}}{1 2 \pi^ {2} \varepsilon_ {0} ^ {2} c ^ {3} m ^ {2} r ^ {2}}\tag{7}
$$

积分得

$$
r ^ {3} = r _ {0} ^ {3} - \frac {e ^ {4}}{4 \pi^ {2} \varepsilon_ {0} ^ {2} c ^ {3} m ^ {2}} t\tag{8}
$$

式中 $r_{0}$ 是 t = 0 时电子的轨道半径.

(3) 由式(8)，电子从 $r_{0} = 5.29 \times 10^{-11} ~m$ 的轨道落入到质子(氢核)上所需的时间为

$$
\begin{array}{r l} t & = \frac {4 \pi^ {2} \varepsilon_ {0} ^ {2} c ^ {3} m ^ {2} r _ {0} ^ {3}}{e ^ {4}} \\ & = \frac {4 \pi^ {2} \times (8 . 8 5 4 \times 1 0 ^ {- 1 2}) ^ {2} \times (3 . 0 0 \times 1 0 ^ {8}) ^ {3} \times (9 . 1 1 \times 1 0 ^ {- 3 1}) ^ {2} \times (5 . 2 9 \times 1 0 ^ {- 1 1}) ^ {3}}{(1 . 6 0 \times 1 0 ^ {- 1 9}) ^ {4}} \\ & = 1. 5 6 \times 1 0 ^ {- 1 1} (\mathrm{s}) \end{array}\tag{9}
$$

【讨论】上述结果表明,按经典物理学(经典力学和经典电动力学)的规律计算,基态氢原子的寿命仅有 $1.56 \times 10^{-11}$ s.这显然不符合事实.这就告诉我们,经典物理学的规律不适用于氢原子.今天我们知道,原子中的电子所遵循的规律是量子力学的规律,只有用量子力学的规律处理原子的结构问题,才能得到正确的结果.

12.2.17 已知 $\varepsilon_0 = 8.854\times 10^{-12}\mathrm{F / m},\mu_0 = 4\pi \times 10^{-7}\mathrm{H / m}$ ，试求 $\frac{1}{\sqrt{\varepsilon_0\mu_0}}$ 的单位和数值.

【解】 $\varepsilon_0\mu_0$ 的单位为

$$
\frac {\text { 法拉 }}{\text { 米 }} \cdot \frac {\text { 亨利 }}{\text { 米 }} = \frac {\text { 法拉 } \cdot \text { 亨利 }}{\text { 米 } ^ {2}}\tag{1}
$$

由公式

$$
Q = C U, \quad \dot {\varepsilon} _ {L} = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{2}
$$

得

$$
\text { 法拉 } \cdot \text { 亨利 } = \frac {\text { 库仑 }}{\text { 伏特 }} \cdot \frac {\text { 伏特 } \cdot \text { 秒 }}{\text { 安培 }} = \text { 秒 } ^ {2}\tag{3}
$$

故得 $\frac{1}{\sqrt{\varepsilon_0\mu_0}}$ 的单位为

$$
\sqrt {\frac {\text { 米 }}{\text { 法拉 }} \cdot \frac {\text { 米 }}{\text { 亨利 }}} = \sqrt {\frac {\text { 米 } ^ {2}}{\text { 秒 } ^ {2}}} = \text { 米   /   秒 }\tag{4}
$$

其数值为

$$
\frac {1}{\sqrt {\varepsilon_ {0} \mu_ {0}}} = \frac {1}{\sqrt {8 . 8 5 4 \times 1 0 ^ {- 1 2} \times 4 \pi \times 1 0 ^ {- 7}}} = 2. 9 9 8 \times 1 0 ^ {8}
$$

最后得

(5) 

$$
\frac {1}{\sqrt {\varepsilon_ {0} \mu_ {0}}} = 2. 9 9 8 \times 1 0 ^ {8} \mathrm{m/s}\tag{6}
$$

所以

$$
\frac {1}{\sqrt {\varepsilon_ {0} \mu_ {0}}} = c (\text {真空中光速})\tag{7}
$$

【讨论】1983年第十七届国际计量大会通过米的定义为：“1m是光在真空中在1/299792458s的时间间隔内行程的长度。”并明确指出，真空中光速的数值为

$$
c = 2 9 9 7 9 2 4 5 8 \mathrm{m/s}\tag{8}
$$

因此,真空中光速的数值就是一个定义值,它的不确定度为零.由于

$$
\mu_ {0} = 4 \pi \times 1 0 ^ {- 7} \mathrm{H/m}\tag{9}
$$

是精确值,于是

$$
\varepsilon_ {0} = \frac {1}{\mu_ {0} c ^ {2}} = 8. 8 5 4 1 8 7 8 1 7 \dots \times 1 0 ^ {- 1 2} \mathrm{F/m}\tag{10}
$$

也就成为定义值或精确值了.


附录



基本物理常量表


<table><tr><td>量</td><td>符号</td><td>数值</td><td>单位</td></tr><tr><td>真空中光速</td><td>c</td><td>299792458</td><td>ms-1</td></tr><tr><td>真空磁导率</td><td>μ0</td><td>4π×10-7</td><td>NA-2</td></tr><tr><td>真空电容率</td><td>ε0=1/μ0c2</td><td>8.854187817···</td><td>10-12Fm-1</td></tr><tr><td>万有引力常量</td><td>G</td><td>6.67259(85)</td><td>10-11m3kg-1s-2</td></tr><tr><td>普朗克常量</td><td>h</td><td>6.6260755(40)</td><td>10-34Js</td></tr><tr><td>基本电荷量</td><td>e</td><td>1.60217733(49)</td><td>10-19C</td></tr><tr><td>磁通量子</td><td>Φ0=h/2e</td><td>2.06783461(61)</td><td>10-15Wb</td></tr><tr><td>量子化霍尔电阻</td><td>Rk=h/e2</td><td>25812.8056(12)</td><td>Ω</td></tr><tr><td>玻尔磁子</td><td>μB=eh/4πme</td><td>9.2740154(31)</td><td>10-24JT-1</td></tr><tr><td>电子质量</td><td>me</td><td>9.1093897(54)</td><td>10-31kg</td></tr><tr><td>质子质量</td><td>mp</td><td>1.6726231(10)</td><td>10-27kg</td></tr><tr><td>阿伏伽德罗常量</td><td>NA</td><td>6.0221367(36)</td><td>1023mol-1</td></tr><tr><td>摩尔气体常量</td><td>R</td><td>8.314510(70)</td><td>Jmol-1K-1</td></tr><tr><td>玻尔兹曼常量</td><td>k=R/NA</td><td>1.380658(12)</td><td>10-23JK-1</td></tr></table>

<table><tr><td>[ General Information]</td></tr><tr><td>书名=电磁学千题解</td></tr><tr><td>作者=</td></tr><tr><td>页数=</td></tr><tr><td>出版社=</td></tr><tr><td>出版日期=</td></tr><tr><td>SS号=10944519</td></tr><tr><td>DX号=000001273553</td></tr><tr><td>url=http://www.maliemlun.cn/DrsPath.do?kid=65646D686869656D3134353736323334&amp;username=hzsfxy&amp;spagenum=151&amp;pages=50&amp;fid=12452018&amp;a=1ccc3ad7d4319fe88fd8eee6e439bf20&amp;btime=2012-10-07&amp;etime=2012-10-27&amp;template=bookdsrl&amp;firstdrs=http%3A%2F%2Fbook2.duxiu.com%2FbookDetail.jsp%3FdxNumber%3D000001273553%26d%3D6C4C22FB7D1447FE026BCAC0F260D54</td></tr></table>