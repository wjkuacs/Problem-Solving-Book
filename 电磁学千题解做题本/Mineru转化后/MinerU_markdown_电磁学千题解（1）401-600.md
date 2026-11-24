$$
\mathrm{d} q = \sigma \cdot 2 \pi x \mathrm{d} x = 2 \pi \sigma x \mathrm{d} x\tag{1}
$$

圆片旋转时,跟着旋转的 dq 便形成圆电流.由前面 5.1.46 题的式(4),它在轴线上离圆片中心为 r 处产生的磁感强度为

$$
\begin{array}{r l} \mathrm{d} \boldsymbol {B} & = \frac {\mu_ {0} x ^ {2} \boldsymbol {\omega} \mathrm{d} q}{4 \pi (r ^ {2} + x ^ {2}) ^ {3 / 2}} = \frac {\mu_ {0} x ^ {2} \boldsymbol {\omega} (2 \pi \sigma x \mathrm{d} x)}{4 \pi (r ^ {2} + x ^ {2}) ^ {3 / 2}} \\ & = \frac {1}{2} \mu_ {0} \sigma \boldsymbol {\omega} \frac {x ^ {3} \mathrm{d} x}{(r ^ {2} + x ^ {2}) ^ {3 / 2}} \end{array}\tag{2}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6b69a4a70abe0c0f91ab2525c07f321184a66761886c0deb7210094ec209e322.jpg)


积分便得所求的 $\pmb{B}$ 为

图5.1.47

$$
\begin{array}{r l} \boldsymbol {B} & = \frac {1}{2} \mu_ {0} \sigma \omega \int_ {0} ^ {R} \frac {x ^ {3} \mathrm{d} x}{(r ^ {2} + x ^ {2}) ^ {3 / 2}} \\ & = \frac {1}{2} \mu_ {0} \sigma \omega \left[ \sqrt {r ^ {2} + x ^ {2}} + \frac {r ^ {2}}{\sqrt {r ^ {2} + x ^ {2}}} \right] _ {x = 0} ^ {x = R} \\ & = \frac {1}{2} \mu_ {0} \sigma \omega \left[ \sqrt {r ^ {2} + R ^ {2}} + \frac {r ^ {2}}{\sqrt {r ^ {2} + R ^ {2}}} - 2 r \right] \\ & = \frac {1}{2} \mu_ {0} \sigma \left[ \frac {2 r ^ {2} + R ^ {2}}{\sqrt {r ^ {2} + R ^ {2}}} - 2 r \right] \omega \end{array}\tag{3}
$$

(2)所求的磁矩为

$$
\begin{array}{r l} \boldsymbol {m} & = \int \boldsymbol {S} \mathrm{d} I = \int_ {0} ^ {R} \pi x ^ {2} \frac {\boldsymbol {\omega}}{\omega} \cdot \frac {(2 \pi x \mathrm{d} x) \sigma}{T} \\ & = \pi \sigma \boldsymbol {\omega} \int_ {0} ^ {R} x ^ {3} \mathrm{d} x = \frac {1}{4} \pi \sigma R ^ {4} \boldsymbol {\omega} \end{array}\tag{4}
$$

5.1.48 电荷量 $Q$ 均匀地分布在半径为 $R$ 的球面上, 这球面以匀角速度 $\omega$ 绕它的一个固定的直径旋转. 试求: (1) 轴线上离球心为 $r$ 处的磁感强度 $\pmb{B}$ ; (2) 磁矩 $\pmb{m}$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/db74635a2ad1fb3cf1c700e804631eeb6e29e154f0bcd1d6fc23821182d5b6dd.jpg)


【解】(1)如图5.1.48(1)， $P$ 为球的旋转轴AB上一点，到球心 $O$ 的距离为 $r$ .球面上 $\theta$ 处宽为 $R\mathrm{d}\theta$ 的环带上的电荷量为

$$
\begin{array}{r l} \mathrm{d} Q & = \sigma \cdot 2 \pi R \sin \theta \cdot R \mathrm{d} \theta \\ & = 2 \pi \sigma R ^ {2} \sin \theta \mathrm{d} \theta \end{array}\tag{1}
$$


图 5.1.48(1)


式中 $\sigma$ 是球面上电荷量的面密度, 其值为

$$
\sigma = \frac {Q}{4 \pi R ^ {2}}\tag{2}
$$

dQ 随球面旋转, 形成圆电流

$$
\mathrm{d} I = \frac {\mathrm{d} Q}{T} = \frac {\omega \mathrm{d} Q}{2 \pi} = \omega \sigma R ^ {2} \sin \theta \mathrm{d} \theta\tag{3}
$$

根据Biot-Savart定律,半径为 $R$ 的圆电流 $I$ 在轴线上离圆心为 $r$ 处产生的磁感强度 $\pmb{B}$ 沿 $I$ 的右旋进方向(即 $\omega$ 方向),其大小为

$$
B = \oint \frac {\mu_ {0} I \mathrm{d} l \sin 9 0 ^ {\circ}}{4 \pi (r ^ {2} + R ^ {2})} \sin \theta = \frac {\mu_ {0} I \cdot 2 \pi R}{4 \pi (r ^ {2} + R ^ {2})} \frac {R}{\sqrt {r ^ {2} + R ^ {2}}}
$$

$$
= \frac {\mu_ {0} I R ^ {2}}{2 (r ^ {2} + R ^ {2}) ^ {3 / 2}}\tag{4}
$$

由式(4)得，dI 在 P 点产生的磁感强度的大小为

$$
\begin{array}{r l} \mathrm{d} B & = \frac {\mu_ {0} (R \sin \theta) ^ {2} \mathrm{d} I}{2 [ (r + R \cos \theta) ^ {2} + (R \sin \theta) ^ {2} ] ^ {3 / 2}} = \frac {\mu_ {0} R ^ {2} \sin^ {2} \theta \cdot \omega \sigma R ^ {2} \sin \theta \mathrm{d} \theta}{2 [ r ^ {2} + R ^ {2} + 2 r R \cos \theta ] ^ {3 / 2}} \\ & = \frac {\mu_ {0} \omega \sigma R ^ {4}}{2} \frac {\sin^ {3} \theta \mathrm{d} \theta}{[ r ^ {2} + R ^ {2} + 2 r R \cos \theta ] ^ {3 / 2}} \end{array}
$$

积分便得

(5) 

$$
\begin{array}{l} B = \frac {\mu_ {0} \omega \sigma R ^ {4}}{2} \int_ {0} ^ {\pi} \frac {\sin^ {3} \theta \mathrm{d} \theta}{[ r ^ {2} + R ^ {2} + 2 r R \cos \theta ] ^ {3 / 2}} \\ = \frac {\mu_ {0} \omega \sigma R ^ {4}}{2} \frac {1}{4 r ^ {3} R ^ {3}} \left[ \frac {1}{3} (r ^ {2} + R ^ {2} + 2 r R \cos \theta) ^ {3 / 2} - 2 (r ^ {2} + R ^ {2}) \sqrt {r ^ {2} + R ^ {2} + 2 r R \cos \theta} - \frac {(R ^ {2} - r ^ {2}) ^ {2}}{\sqrt {r ^ {2} + R ^ {2} + 2 r R \cos \theta}} \right] _ {\theta = 0} ^ {\theta = \pi} \\ = \frac {\mu_ {0} \omega \sigma R ^ {4}}{2} \frac {1}{4 r ^ {3} R ^ {3}} \frac {1 6}{3} r ^ {3} = \frac {2}{3} \mu_ {0} \omega \sigma R \end{array}\tag{6}
$$

以上是考虑 $P$ 点在球面内，即 $r < R$ 的情况. 这时在 $\theta = \pi$ 处， $\sqrt{r^2 + R^2 - 2rR}$ 代表距离 $AP$ ，所以取 $\sqrt{r^2 + R^2 - 2rR} = R - r > 0.$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/0e116005b7ea1ab1c053c24d92d41e4d08b2849de17a14e61caeb746a3806d72.jpg)



图 5.1.48(2)


于是最后得所求的磁感强度为

$$
\boldsymbol {B} = \frac {2}{3} \mu_ {0} \sigma R \boldsymbol {\omega} = \frac {\mu_ {0} Q}{6 \pi R} \boldsymbol {\omega}, r <   R\tag{7}
$$

式(7)表明， $P$ 点的 $\pmb{B}$ 与 $r$ 无关.这就是说，球面内轴线上每一点的 $\pmb{B}$ 都相等，都由式(7)表示.

再考虑 $P$ 点在球面外，即 $r > R$ 的情况，如图5.1.48(2)所示.这时前面式(1)至(5)均成立.于是得这时 $P$ 点的磁感强度的大小为

$$
B = \frac {\mu_ {0} \omega \sigma R ^ {4}}{2} \int_ {0} ^ {\pi} \frac {\sin^ {3} \theta \mathrm{d} \theta}{[ r ^ {2} + R ^ {2} + 2 r R \cos \theta ] ^ {3 / 2}}
$$

$$
\begin{array}{l} = \frac {\mu_ {0} \omega \sigma R ^ {4}}{2} \frac {1}{4 r ^ {3} R ^ {3}} \left[ \frac {1}{3} (r ^ {2} + R ^ {2} + 2 r R \cos \theta) ^ {3 / 2} \right. \\ \left. - 2 (r ^ {2} + R ^ {2}) \sqrt {r ^ {2} + R ^ {2} + 2 r R \cos \theta} - \frac {(R ^ {2} - r ^ {2}) ^ {2}}{\sqrt {r ^ {2} + R ^ {2} - 2 r R \cos \theta}} \right] _ {\theta = 0} ^ {\theta = \pi} \\ = \frac {\mu_ {0} \omega \sigma R ^ {4}}{2} \frac {1}{4 r ^ {3} R ^ {3}} \frac {1 6}{3} R ^ {3} = \frac {2}{3} \mu_ {0} \omega \sigma R \left(\frac {R}{r}\right) ^ {3} \end{array}\tag{8}
$$

在上式的计算中，因 $r > R$ ，故在 $\theta = \pi$ 处，考虑到 $\sqrt{r^2 + R^2 - 2rR}$ 代表距离 $AP$ ，所以取 $\sqrt{r^2 + R^2 - 2rR} = r - R > 0.$ 

于是得所求的磁感强度为

$$
\boldsymbol {B} = \frac {2}{3} \mu_ {0} \sigma R \left(\frac {R}{r}\right) ^ {3} \boldsymbol {\omega} = \frac {\mu_ {0} Q}{6 \pi R} \left(\frac {R}{r}\right) ^ {3} \boldsymbol {\omega}, \quad r > R\tag{9}
$$

(2)求磁矩 $m$ 

图 5.1.48(1) 中 $\theta$ 处宽为 $Rd\theta$ 的环带上，电荷量 dQ 在球面旋转时形成圆电流

$$
\mathrm{d} I = \omega \sigma R ^ {2} \sin \theta \mathrm{d} \theta = \frac {Q \omega}{4 \pi} \sin \theta \mathrm{d} \theta\tag{10}
$$

所以这环带的磁矩为

$$
\begin{array}{r l} \mathrm{d} \boldsymbol {m} & = (\mathrm{d} I) \boldsymbol {S} = \frac {Q \omega}{4 \pi} \sin \theta \mathrm{d} \theta \cdot \pi (R \sin \theta) ^ {2} \frac {\omega}{\omega} \\ & = \frac {1}{4} Q R ^ {2} \omega \sin^ {3} \theta \mathrm{d} \theta \end{array}\tag{11}
$$

积分便得

$$
\boldsymbol {m} = \frac {1}{4} Q R ^ {2} \boldsymbol {\omega} \int_ {0} ^ {\pi} \sin^ {3} \theta d \theta = \frac {1}{3} Q R ^ {2} \boldsymbol {\omega}\tag{12}
$$

5.1.49 电荷量 Q 均匀地分布在半径为 R 的球体内, 这球体以匀角速度 $\omega$ 绕它的一个固定的直径旋转. 试求: (1) 球内离转轴为 r 处电流密度 j 的大小; (2) 轴线上离球心为 r 处的磁感强度 B; (3) 磁矩.

【解】（1）离转轴为 r 处的电流密度为

$$
j - \rho \boldsymbol {v} - \frac {3 Q}{4 \pi R ^ {3}} \boldsymbol {\omega} \times \boldsymbol {r}\tag{1}
$$

$j$ 的大小为

$$
j = \frac {3 Q \omega r}{4 \pi R ^ {3}}\tag{2}
$$

(2)先考虑球内.如图5.1.49， $P$ 为转轴上离球心为 $r(r < R)$ 的一点，这点的磁感强度 $\pmb{B}$ 由两部分叠加而成，一部分是半径为 $r$ 的小球在小球外产生的 $\pmb{B}_0$ ，另一部分是内半径为 $r$ 、外半径为 $R$ 的球壳在壳内产生的 $\pmb{B}_i$ .下面依次求 $\pmb{B}_0$ 和 $\pmb{B}_i$ 

先求 $B_{0}$ . 在小球内取一半径为 x、厚为 dx 的球壳，这壳内的电荷量为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/0714f882294884de7c900a177b24ba12a33628412acbd3520be8916deaf58151.jpg)


$$
\mathrm{d} Q = \rho \mathrm{d} V = \frac {3 Q}{4 \pi R ^ {3}} \cdot 4 \pi x ^ {2} \mathrm{d} x = \frac {3 Q}{R ^ {3}} x ^ {2} \mathrm{d} x\tag{3}
$$

根据前面 5.1.48 题的式(9)，它在 P 点产生的磁感强度为

图5.1.49

$$
\mathrm{d} \boldsymbol {B} _ {0} = \frac {\mu_ {0} (\mathrm{d} Q)}{6 \pi x} \left(\frac {x}{r}\right) ^ {3} \boldsymbol {\omega} = \frac {\mu_ {0} Q \boldsymbol {\omega}}{2 \pi R ^ {3} r ^ {3}} x ^ {4} \mathrm{d} x\tag{4}
$$

积分便得

$$
\boldsymbol {B} _ {0} = \frac {\mu_ {0} Q \omega}{2 \pi R ^ {3} r ^ {3}} \int_ {0} ^ {r} x ^ {4} \mathrm{d} x = \frac {\mu_ {0} Q r ^ {2}}{1 0 \pi R ^ {3}} \omega\tag{5}
$$

再求 $B_{i}$ . 在球壳内取一半径为 y、厚为 dy 的球壳，这壳内的电荷量为

$$
\mathrm{d} Q = \rho \mathrm{d} V = \frac {3 Q}{4 \pi R ^ {3}} \cdot 4 \pi y ^ {2} \mathrm{d} y = \frac {3 Q}{R ^ {3}} y ^ {2} \mathrm{d} y\tag{6}
$$

根据前面 5.1.48 题的式(7)，它在 P 点产生的磁感强度为

$$
\mathrm{d} \boldsymbol {B} _ {i} = \frac {\mu_ {0} \mathrm{d} Q}{6 \pi y} \boldsymbol {\omega} = \frac {\mu_ {0}}{6 \pi y} \frac {3 Q}{R ^ {3}} y ^ {2} \mathrm{d} y \boldsymbol {\omega} = \frac {\mu_ {0} Q \boldsymbol {\omega}}{2 \pi R ^ {3}} y \mathrm{d} y\tag{7}
$$

积分便得

$$
\begin{array}{r l} \boldsymbol {B} _ {i} & = \frac {\mu_ {0} Q \omega}{2 \pi R ^ {3}} \int_ {r} ^ {R} y \mathrm{d} y = \frac {\mu_ {0} Q \omega}{4 \pi R ^ {3}} (R ^ {2} - r ^ {2}) \\ & = \frac {\mu_ {0} Q}{4 \pi R} \left(1 - \frac {r ^ {2}}{R ^ {2}}\right) \omega \end{array}\tag{8}
$$

于是得 $P$ 点的磁感强度为

$$
\boldsymbol {B} = \boldsymbol {B} _ {0} + \boldsymbol {B} _ {1} = \frac {\mu_ {0} Q}{4 \pi R} \left(1 - \frac {3}{5} \frac {r ^ {2}}{R ^ {2}}\right) \boldsymbol {\omega}, \quad r <   R\tag{9}
$$

再考虑球外.这时 $r > R$ .由式(4)积分得

$$
\boldsymbol {B} = \frac {\mu_ {0} Q \boldsymbol {\omega}}{2 \pi R ^ {3} r ^ {3}} \int_ {0} ^ {R} x ^ {4} \mathrm{d} x = \frac {\mu_ {0} Q R ^ {2} \boldsymbol {\omega}}{1 0 \pi r ^ {3}}, \quad r > R\tag{10}
$$

(3)求磁矩 m.

在球内取半径为 $x$ 、厚为 $\mathrm{dx}$ 的球壳，根据前面5.1.48题的式(12)，这球壳的磁矩为

$$
\begin{array}{r l} \mathrm{d} \boldsymbol {m} & = \frac {1}{3} (\mathrm{d} Q) x ^ {2} \boldsymbol {\omega} = \frac {1}{3} \left(\frac {3 Q}{R ^ {3}} x ^ {2} \mathrm{d} x\right) x ^ {2} \boldsymbol {\omega} \\ & = \frac {Q \boldsymbol {\omega}}{R ^ {3}} x ^ {4} \mathrm{d} x \end{array}\tag{11}
$$

积分便得

$$
m = \frac {Q \omega}{R ^ {3}} \int_ {0} ^ {R} x ^ {4} \mathrm{d} x = \frac {1}{5} Q R ^ {2} \omega\tag{12}
$$

【讨论】将本题结果与前面5.1.48题的结果比较可见，在 $Q, R$ 和 $\omega$ 都相同的情况下，本题的磁矩 $m$ 和球外轴线上的 $\pmb{B}$ 都要小一些。这是因为，5.1.48题的 $Q$ 都分布在球面上，而本题的 $Q$ 则分布在球体内，越靠近轴线，电荷的速度越小，所以产生的磁效应也就小。

5.1.50 一个球形的铀块 $^{(238}\mathrm{U)}$ 均匀地向四面八方放射出带正电的 $\alpha$ 粒子，每秒钟共放射出N个 $\alpha$ 粒子，每个 $\alpha$ 粒子的电荷量均为2e.试求离球心为r处的电流密度 $j(r)$ 和磁感强度 $B(r)$ .

【解】电流密度 $j(r)$ 为

$$
\boldsymbol {j} (r) - \frac {I}{4 \pi r ^ {2}} \boldsymbol {e} _ {r} - \frac {2 N e}{4 \pi r ^ {2}} \boldsymbol {e} _ {r} = \frac {N e r}{2 \pi r ^ {3}}\tag{1}
$$

磁感强度由Biot-Savart定律为

$$
\boldsymbol {B} (r) = \int \frac {\mu_ {0} I \mathrm{d} l \times r}{4 \pi r ^ {3}}
$$

对于体分布电流 $j(r')$ 来说. 上式为(参见图 5.1.50)

(2) 

$$
\begin{array}{r l} \boldsymbol {B} (\boldsymbol {r}) & = \frac {\mu_ {0}}{4 \pi} \iiint_ {V} \frac {[ \boldsymbol {j} (\boldsymbol {r} ^ {\prime}) \mathrm{d} V ^ {\prime} ] \times (\boldsymbol {r} - \boldsymbol {r} ^ {\prime})}{| \boldsymbol {r} - \boldsymbol {r} ^ {\prime} | ^ {3}} \\ & = \frac {\mu_ {0}}{4 \pi} \iiint_ {V} \frac {\boldsymbol {j} (\boldsymbol {r} ^ {\prime}) \times (\boldsymbol {r} - \boldsymbol {r} ^ {\prime}) \mathrm{d} V ^ {\prime}}{| \boldsymbol {r} - \boldsymbol {r} ^ {\prime} | ^ {3}} \end{array}\tag{3}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e663fafb88c1b36b6bc65b0b886003f82c60846ef68d65fdfdcb92dcf750b332.jpg)


将式(1)代入式(3)得

图5.1.50

$$
\boldsymbol {B} (\boldsymbol {r}) = \frac {\mu_ {0} N e}{8 \pi^ {2}} \iiint_ {V} \frac {\boldsymbol {r} ^ {\prime} \times (\boldsymbol {r} - \boldsymbol {r} ^ {\prime}) d V ^ {\prime}}{r ^ {\prime 3} + \left. \boldsymbol {r} - \boldsymbol {r} ^ {\prime} \right| ^ {3}} = \frac {\mu_ {0} N e}{8 \pi^ {2}} \iiint_ {V} \frac {\boldsymbol {r} ^ {\prime} \times \boldsymbol {r} d V ^ {\prime}}{r ^ {\prime 3} + \left. \boldsymbol {r} - \boldsymbol {r} ^ {\prime} \right| ^ {3}}\tag{4}
$$

由图5.1.50可见，以 $\pmb{r}$ 为轴线，保持 $\theta$ 不变，令 $r^{\prime}$ 绕 $\pmb{r}$ 旋转一周，这时 $r^{\prime 3}|r - r^{\prime}|^{3}$ 的值不变，而一周的 $r^{\prime}\mathrm{d}V^{\prime}$ 之和的方向便与 $\pmb{r}$ 的方向重合，故这一圈的积分便因

$$
\iiint \left(\boldsymbol {r} ^ {\prime} \mathrm{d} V ^ {\prime}\right) \times \boldsymbol {r} = 0\tag{5}
$$

而为零. 对于整个空间都可以这样做, 结果都是零. 于是得所求的磁感强度为

$$
\boldsymbol {B} (\boldsymbol {r}) = \frac {\mu_ {0} \mathrm{Ne}}{8 \pi^ {2}} \left[ \iiint_ {V} \frac {\boldsymbol {r} ^ {\prime} \mathrm{d} V ^ {\prime}}{r ^ {\prime 3} + \left. \boldsymbol {r} - \boldsymbol {r} ^ {\prime} \right| ^ {3}} \right] \times \boldsymbol {r} = 0\tag{6}
$$

## § 5.2 安培环路定理

5.2.1 一般教科书上推导安培环路定理,都是以无限长直载流导线为例,在

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/77506c69fc53493a22975e810397177170f68684805caf6edeade4f6f21f612e.jpg)



图5.2.1


垂直于导线的平面内作环路. 如果环路不限定在上述平面内, 你能否推导出同样结果?

【解】无穷长直线电流 I 在距离为 r 处产生的磁场强度为[参见前面 5.1.1 题的式(3)]

$$
\boldsymbol {H} = \frac {l}{2 \pi r} \boldsymbol {e} _ {\phi}\tag{1}
$$

式中 $e_{\phi}$ 为电流 $I$ 的右手螺旋方向上的单位矢量. 如果环路 $L$ 不限定在垂直于电流 $I$ 的平面内, 如图5.2.1所示, 则

$$
\boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = \frac {I}{2 \pi r} \boldsymbol {e} _ {\phi} \cdot \mathrm{d} \boldsymbol {l} = \frac {I}{2 \pi r} r \mathrm{d} \phi = \frac {I}{2 \pi} \mathrm{d} \phi\tag{2}
$$

沿环路 L 积分一圈, 当 L 套住电流 I 时, 便得

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = \frac {I}{2 \pi} \oint_ {L} \mathrm{d} \phi = \frac {I}{2 \pi} \cdot 2 \pi = I\tag{3}
$$

所以，环路 $L$ 不在垂直于电流 $I$ 的平面内，同样可以推出安培环路定理.

5.2.2 两条无穷长的平行直导线相距为 $2a$ ，分别载有方向相同的电流 $I_{1}$ 和 $I_{2}$ ；空间任一点 $P$ 到 $I_{1}$ 的垂直距离为 $r_{1}$ ，到 $I_{2}$ 的垂直距离为 $I_{2}$ ，如图5.2.2(1)所

示. 试求 P 点的磁感强度 B.

【解】由安培环路定理得出， $I_{1}$ 和 $I_{2}$ 在 P 点所产生的磁感强度 $B_{1}$ 和 $B_{2}$ 分别为 $I_{1}$ 和 $I_{2}$ 的右手螺线方向 [如图 5.2.2(2) 所示]，其大小分别为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c14a0a9dc054d1fd672dcfc701ddeae14775644fe9a0fb624b860aba9823f005.jpg)



图5.2.2(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/ade4bef0440f20b6b1e58c197d0c2fb46e860916c9ddccc1fc675f75144b7430.jpg)



图5.2.2(2)


$$
B _ {1} = \frac {\mu_ {0} I _ {1}}{2 \pi r _ {1}}, \quad B _ {2} = \frac {\mu_ {0} I _ {2}}{2 \pi r _ {2}}\tag{1}
$$

P 点的磁感强度为

$$
\boldsymbol {B} = \boldsymbol {B} _ {1} + \boldsymbol {B} _ {2}\tag{2}
$$

$\pmb{B}$ 的大小为

$$
\begin{array}{l} B = \sqrt {B _ {1} ^ {2} + B _ {2} ^ {2} - 2 B _ {1} B _ {2} \cos (\pi - \theta)} = \sqrt {B _ {1} ^ {2} + B _ {2} ^ {2} + 2 B _ {1} B _ {2} \cos \theta} \\ = \sqrt {\left(\frac {\mu_ {0} I _ {1}}{2 \pi r _ {1}}\right) ^ {2} + \left(\frac {\mu_ {0} I _ {2}}{2 \pi r _ {2}}\right) ^ {2} + 2 \left(\frac {\mu_ {0} I _ {1}}{2 \pi r _ {1}}\right) \left(\frac {\mu_ {0} I _ {2}}{2 \pi r _ {2}}\right) \left(\frac {r _ {1} ^ {2} + r _ {2} ^ {2} - 4 a ^ {2}}{2 r _ {1} r _ {2}}\right)} \\ = \frac {\mu_ {0}}{2 \pi r _ {1} r _ {2}} \sqrt {I _ {1} ^ {2} r _ {2} ^ {2} + I _ {2} ^ {2} r _ {1} ^ {2} + I _ {1} I _ {2} (r _ {1} ^ {2} + r _ {2} ^ {2} - 4 a ^ {2})} \end{array}\tag{3}
$$

B 的方向如图 5.2.2(2) 所示. $B_{1} \perp PI_{1}, B_{2} \perp PI_{2}, B$ 在 $B_{1}$ 与 $PI_{1}$ 之间, B 与 $B_{1}$ 的夹角 $\alpha$ 满足下式:

$$
B _ {2} ^ {2} = B _ {1} ^ {2} + B ^ {2} - 2 B _ {1} B \cos \alpha\tag{4}
$$

代入 $B_{1}, B_{2}$ 和 $B$ 之后，解得

I(向外)

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a56c4f204b997ba16015610e6d510b609a2992dec0d54615176bf003f3d1e34b.jpg)


(5) 


$I(\text{向内})$



图5.2.3(1)


$$
\cos \alpha = \frac {2 I _ {1} r _ {2} ^ {2} + I _ {2} \left(r _ {1} ^ {2} + r _ {2} ^ {2} - 4 a ^ {2}\right)}{2 r _ {2} \sqrt {I _ {1} ^ {2} r _ {2} ^ {2} + I _ {2} ^ {2} r _ {1} ^ {2} + I _ {1} I _ {2} \left(r _ {1} ^ {2} + r _ {2} ^ {2} - 4 a ^ {2}\right)}}
$$

5.2.3 两条无穷长的平行直导线相距为 a，载有大小相等而方向相反的电流 I；空间任一点 P 到两导线的垂直距离分别为 $r_{1}$ 和 $r_{2}$ ，如图 5.2.3(1) 所示。试求 P 点的磁感强度 B。

【解】由安培环路定理得出，两电流在 $P$ 点所产生的磁感强度 $\pmb{B}_{1}$ 和 $\pmb{B}_2$ 的大小分别为

$$
B _ {1} = \frac {\mu_ {0} I _ {1}}{2 \pi r _ {1}}, \quad B _ {2} = \frac {\mu_ {0} I _ {2}}{2 \pi r _ {2}}\tag{1}
$$

它们的方向如图 5.2.3(2) 所示. P 点的磁感强度为

$$
\boldsymbol {B} = \boldsymbol {B} _ {1} + \boldsymbol {B} _ {2}
$$

$\pmb{B}$ 的大小为

$$
\begin{array}{l} B = \sqrt {B _ {1} ^ {2} + B _ {2} ^ {2} - 2 B _ {1} B _ {2} \cos \theta} \\ = \sqrt {B _ {1} ^ {2} + B _ {2} ^ {2} - 2 B _ {1} B _ {2} \left(\frac {r _ {1} ^ {2} + r _ {2} ^ {2} - a ^ {2}}{2 r _ {1} r _ {2}}\right)} \\ = \frac {\mu_ {0} I}{2 \pi \sqrt {\frac {1}{r _ {1} ^ {2}} + \frac {1}{r _ {2} ^ {2}} - \frac {1}{r _ {1} r _ {2}} \left(\frac {r _ {1} ^ {2} + r _ {2} ^ {2} - a ^ {2}}{r _ {1} r _ {2}}\right)}} \\ = \frac {\mu_ {0} I a}{2 \pi r _ {1} r _ {2}} \end{array}\tag{2}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/b01225cea5675db4189eebb724a149bbb430fdfe14d4176b0bb71bd424b7dd15.jpg)



图5.2.3(2)


(3) 

$\pmb{B}$ 的方向如图5.2.3(2)所示， $\pmb{B}$ 与 $B_{1}$ 的夹角 $\alpha$ 满足下式：

$$
B _ {2} ^ {2} = B _ {1} ^ {2} + B ^ {2} - 2 B _ {1} B \cos \alpha\tag{4}
$$

将式(1)、(3)代入式(4)，解得

$$
\cos \alpha - \frac {a ^ {2} + r _ {2} ^ {2} - r _ {1} ^ {2}}{2 a r _ {2}}\tag{5}
$$

5.2.4 两条无穷长的平行直导线相距为 $a$ ，载有大小相等而方向相反的电流 $I$ ；在这两导线构成的平面内有一点 $P, P$ 到其中一导线的距离为 $r$ 。试求 $P$ 点的磁感强度 $\pmb{B}$ 。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/049f07b0530599c94aee9cc91d8fedd9690ce919b9b98773cf7fe74ef5a05760.jpg)


【解】本题有三种情况，即 $P$ 在两线间和两线外.


图5.2.4


设 $P$ 在两线间，如图5.2.4中的 $P_{1}$ ，到左边导线的距离为 $r$ ，则由安培环路定理得所求的磁感强度为

$$
\boldsymbol {B} _ {1} = \frac {\mu_ {0} I}{2 \pi r} \boldsymbol {e} + \frac {\mu_ {0} I}{2 \pi (a - r)} \boldsymbol {e} = \frac {\mu_ {0} I a}{2 \pi r (a - r)} \boldsymbol {e}\tag{1}
$$

式中 e 为垂直于纸面向内的单位矢量.

设 $P$ 在两线外左边，如图5.2.4中的 $P_{2}$ ，到左边导线的距离为 $r$ ，则由安培环路定理得所求的磁感强度为

$$
\boldsymbol {B} _ {2} = \frac {\mu_ {0} I}{2 \pi r} (- \boldsymbol {e}) + \frac {\mu_ {0} I}{2 \pi (r + a)} \boldsymbol {e} = - \frac {\mu_ {0} I a}{2 \pi r (r + a)} \boldsymbol {e}\tag{2}
$$

设 $P$ 在两线外右边，如图5.2.4中的 $P_{3}$ ，到左边导线的距离为 $r$ ，则由安培环路定理得所求的磁感强度为

$$
\boldsymbol {B} _ {3} = \frac {\mu_ {0} I}{2 \pi r} \boldsymbol {e} + \frac {\mu_ {0} I}{2 \pi (r - a)} (- e) = - \frac {\mu_ {0} I a}{2 \pi r (r - a)} e\tag{3}
$$

5.2.5 四条无穷长的平行直导线, 它们的横截面是边长为 a 的正方形, 每条导线中的电流都是 I, 它们的方向如图 5.2.5 所示. 试求正方形中心的磁感强度 B; 并计算 $a = 20 \, cm, I = 20 \, A$ 时 B 的值.

【解】由安培环路定理得出,每条导线的电流在中心 O 产生的磁感强度的大小均为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a32f9dd0cbf908fc156b77d3d9a0eefaa9e55353eda0570672fbde01dcf67176.jpg)



图5.2.5


$$
B _ {1} = \frac {\mu_ {0} I}{2 \pi \left(\frac {\sqrt {2} a}{2}\right)} = \frac {\mu_ {0} I}{\sqrt {2} \pi a}\tag{1}
$$

对角线上两条导线的电流所产生的磁感强度方向相同,都沿另一对角线,如图 5.2.5 所示.于是得所求的磁感强度 B 的大小为

$$
B = 4 B _ {1} \cos 4 5 ^ {\circ} = 4 \cdot \frac {\mu_ {0} I}{\sqrt {2} \pi a} \cdot \frac {\sqrt {2}}{2} = \frac {2 \mu_ {0} I}{\pi a}\tag{2}
$$

B 的方向平行于上下两边并向左.

由式(2)得 $B$ 的值为

$$
B = \frac {2 \times 4 \pi \times 1 0 ^ {- 7} \times 2 0}{\pi \times 2 0 \times 1 0 ^ {- 2}} = 8. 0 \times 1 0 ^ {- 5} (\mathrm{T})\tag{3}
$$

5.2.6 两条无穷长直导线互相垂直而不相交,其间最近距离为 a=2.0cm,电流分别为 $I_{1}=4.0A$ 和 $I_{2}=6.0A$ . P 点到两导线的垂直距离都是 a,如图 5.2.6 所示.试求 P 点的磁感强度 B.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/cb1a10cb57b0251d893ab4ca3f85ea2a30b6c86b3829baeb596038b62d3d9d03.jpg)


【解】根据安培环路定理,由图5.2.6可见, $I_{1}$ 在P点产生的磁感强度 $B_{1}$ 垂直于纸面向外,其大小为

$$
B _ {1} = \frac {\mu_ {0} I _ {1}}{2 \pi a}
$$

图5.2.6

(1) 

$I_{2}$ 在 P 点产生的磁感强度 $B_{2}$ 垂直于 $I_{1}$ 并向上, 其大小为

$$
B _ {2} = \frac {\mu_ {0} I _ {2}}{2 \pi a}\tag{2}
$$

所求的磁感强度为

$$
\boldsymbol {B} = \boldsymbol {B} _ {1} + \boldsymbol {B} _ {2}\tag{3}
$$

因 $\pmb{B}_2\bot \pmb{B}_1$ ，故 $\pmb{B}$ 的大小为

$$
B = \sqrt {B _ {1} ^ {2} + B _ {2} ^ {2}} = \frac {\mu_ {0}}{2 \pi a} \sqrt {I _ {1} ^ {2} + I _ {2} ^ {2}}\tag{4}
$$

代人数值得

$$
B = \frac {4 \pi \times 1 0 ^ {- 7}}{2 \pi \times 2 . 0 \times 1 0 ^ {- 2}} \sqrt {4 . 0 ^ {2} + 6 . 0 ^ {2}} = 7. 2 \times 1 0 ^ {- 5} (\text {特})\tag{5}
$$

B 的方向如下: B 与 $B_{2}$ (向上) 的夹角为

$$
\begin{array}{r l} \theta & = \arccos \left(\frac {B _ {2}}{\sqrt {B _ {1} ^ {2} + B _ {2} ^ {2}}}\right) = \arccos \left(\frac {I _ {2}}{\sqrt {I _ {1} ^ {2} + I _ {2} ^ {2}}}\right) \\ & = \arccos \left(\frac {6 . 0}{7 . 2}\right) = \arccos 0. 8 3 3 3 = 3 3. 6 ^ {\circ} \end{array}\tag{6}
$$

5.2.7 一无穷长直线电流 I 沿 z 轴向下流到坐标原点, 然后在 x - y 平面上均匀地散开, 向各个方向直流向无穷远去, 如图 5.2.7 所示. 试求空间各处的磁感强度.

【解】在 $z$ 轴上取一点为圆心，以 $r$ 为半径作一圆，圆的几何轴为 $z$ 轴；根据对称性，在这圆上各点，磁感强度 $\pmb{B}$ 的大小 $B$ 都应相等.于是由安培环路定理得

$$
B = \frac {\mu_ {0} I}{2 \pi r}\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/d0032864a3637cac50d46545cf5504cdcb49d642421cf70ce881b610faecd479.jpg)


以 $e_{z}$ 代表 z 轴方向的单位矢量, r 表示从 z 轴到场点的位矢, $|r|=r$ , 则 z>0 处的磁感强度可表示为

图5.2.7

$$
\boldsymbol {B} = \frac {\mu_ {0} I}{2 \pi r ^ {2}} \boldsymbol {r} \times \boldsymbol {e} _ {z}, \quad z > 0\tag{2}
$$

在 z<0 处，由安培环路定理得

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/25f3d29f2a7df6d382bade8f8dc18130ad66f7c34607f0d966cde6108e9c382c.jpg)


$$
\boldsymbol {B} = 0, \quad z <   0\tag{3}
$$

5.2.8 一载有电流 I 的无穷长直导线垂直到地面, I 到达地面后, 便分散开来, 均匀地向各个方向流去, 如图 5.2.8(1) 所示. 把地面当作无穷大的平面, 设大地的磁导率为 $\mu_{0}$ , 试求地面以上和地面以下各处的磁感强度.


图5.2.8(1)


【解】在地面以上，在导线上取一点为圆心，以 $r$ 为半径作一圆，圆的几何轴线为导线；根据对称性，在这圆上各点，磁感强度 $\pmb{B}$ 的大小 $B$ 都应相等.于是由安培环路定理得

$$
B = \frac {\mu_ {0} I}{2 \pi r}\tag{1}
$$

以 n 表示垂直于地面向上的单位矢量, r 表示从导线到场点的位矢, $|r| = r$ , 则地面以上的磁感强度可表示为

$$
\boldsymbol {B} = \frac {\mu_ {0} I}{2 \pi r ^ {2}} \boldsymbol {r} \times \boldsymbol {n}\tag{2}
$$

在地面以下, 离地面为 d 处, 在 I 的延长线上取一点为圆心, 以 r 为半径作一圆, 圆的几何轴线与地面上的导线及其延长线重合, 如图 5.2.8(2) 所示. 根据对称性, 这个圆上的各点, 磁感强度 B 的大小 B 都应相等; 这个圆所套住的 (即穿过这个圆的) 电流为

$$
\begin{array}{l} i = \iint_ {S} \boldsymbol {j} \cdot \mathrm{d} \boldsymbol {S} = \int_ {0} ^ {\theta} \int_ {0} ^ {2 \pi} \frac {I}{2 \pi (r ^ {2} + d ^ {2})} (r ^ {2} + d ^ {2}) \sin \theta \mathrm{d} \theta \mathrm{d} \phi \\ = I \int_ {0} ^ {\theta} \sin \theta \mathrm{d} \theta = I (1 - \cos \theta) \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6087bf439bfaf00977ec80fffcd3da7738df64ac5d700723745b25647b666efa.jpg)



图5.2.8(2)


$$
= I \left(1 - \frac {d}{\sqrt {r ^ {2} + d ^ {2}}}\right)\tag{3}
$$

于是由安培环路定理得

$$
B = \frac {\mu_ {0} i}{2 \pi r} = \frac {\mu_ {0} I}{2 \pi r} \left(1 - \frac {d}{\sqrt {r ^ {2} + d ^ {2}}}\right)\tag{4}
$$

考虑 B 的方向, 便得

$$
\boldsymbol {B} = \frac {\mu_ {0} I}{2 \pi r ^ {2}} \left(1 - \frac {d}{\sqrt {r ^ {2} + d ^ {2}}}\right) \boldsymbol {r} \times \boldsymbol {n}\tag{5}
$$

5.2.9 一无穷大平面上有均匀分布的电流, 面电流密度为 k, k 的方向是电流流动的方向, k 的大小等于通过单位长度(该面上垂直于 k 的单位长度)的电流. 试求这面电流在离它为 r 处产生的磁感强度 B.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/26fdbf123a7b850b7b3ea568dd12c9b8bd3ee62729d23182cfed07d51346e065.jpg)



图 5.2.9(1)


【解】以电流所在的平面为 $x = 0$ 平面，取笛卡儿坐标系如图5.2.9(1)所示，使 $\pmb{k}$ 沿 $\pmb{z}$ 轴方向.求离电流面为 $r$ 处的 $P$ 点的磁感强度.在 $y$ 处取宽为dy的无穷长条，这长条上的电流为

$$
\mathrm{d} I = k \mathrm{dy}\tag{1}
$$

这是一条无穷长的线电流,根据安培环路定理,它在 P 点产生的磁感强度 dB 的大小为

$$
\mathrm{d} B = \frac {\mu_ {0} \mathrm{d} I}{2 \pi \sqrt {r ^ {2} + y ^ {2}}} = \frac {\mu_ {0} k \mathrm{d} y}{2 \pi \sqrt {r ^ {2} + y ^ {2}}}\tag{2}
$$

dB 在 x 方向上和 y 方向上的分量分别为

$$
\mathrm{d} B _ {x} = (\mathrm{d} B) \cos \theta = \frac {\mu_ {0} k \mathrm{d} y}{2 \pi \sqrt {r ^ {2} + y ^ {2}}} \cos \theta\tag{3}
$$

$$
\mathrm{d} B _ {y} = (\mathrm{d} B) \sin \theta = \frac {\mu_ {0} k \mathrm{d} y}{2 \pi \sqrt {r ^ {2} + y ^ {2}}} \sin \theta\tag{4}
$$

由图5.2.9(1)可见

$$
\cos \theta = \frac {y}{\sqrt {r ^ {2} + y ^ {2}}}, \quad \sin \theta = \frac {r}{\sqrt {r ^ {2} + y ^ {2}}}\tag{5}
$$

代入式(3)、(4)便得

$$
\mathrm{d} B _ {x} = \frac {\mu_ {0} k}{2 \pi} \frac {y \mathrm{d} y}{r ^ {2} + y ^ {2}}\tag{6}
$$

$$
\mathrm{d} B _ {y} = \frac {\mu_ {0} k r}{2 \pi} \frac {\mathrm{d} y}{r ^ {2} + y ^ {2}}\tag{7}
$$

积分便得整个面电流在 $P$ 点产生的磁感强度 $\pmb{B}$ 的分量为

$$
B _ {x} = \frac {\mu_ {0} k}{2 \pi} \int_ {- \infty} ^ {\infty} \frac {y d y}{r ^ {2} + y ^ {2}} = \frac {\mu_ {0} k}{4 \pi} \ln (r ^ {2} + y ^ {2}) \left| _ {y = - x} ^ {y = - x} = 0 \right.\tag{8}
$$

$$
B _ {y} = \frac {\mu_ {0} k r}{2 \pi} \int_ {- \infty} ^ {\infty} \frac {\mathrm{d} y}{r ^ {2} + y ^ {2}} = \frac {\mu_ {0} k}{2 \pi} \operatorname{arctg} \left(\frac {y}{r}\right) \Bigg | _ {y = - \infty} ^ {y = \infty} = \frac {\mu_ {0} k}{2}\tag{9}
$$

所以

$$
B = \sqrt {B _ {x} ^ {2} + B _ {y} ^ {2}} = B _ {y} = \frac {\mu_ {0} k}{2}\tag{10}
$$

以 n 表示电流面的法线方向上的单位矢量, 则所求的 P 点的磁感强度为

$$
\boldsymbol {B} = \frac {1}{2} \mu_ {0} \boldsymbol {k} \times \boldsymbol {n}\tag{11}
$$

【别解】根据对称性,知这面电流产生的磁感强度 B 应与电流面平行而与电流成右手螺旋方向.据此,取安培环路 L 为长方形,长方形的面与 k 垂直,长为 l 的两对边分别处在 k 的两边,并与电流面平行,且到电流面的距离都是 r,如图 5.2.9(2)所示.于是由安培环路定理得

$$
\oint_ {L} \boldsymbol {B} \cdot \mathrm{d} l = 2 B l = \mu_ {0} k l
$$

所以

$$
B = \frac {1}{2} \mu_ {0} k\tag{12}
$$

(13) 

考虑 B 的方向, 便得

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/87cb2781891adac0c1b3530a597e5ffaee12982fe25c4e8aaf151ac5100c8e5a.jpg)


$$
\boldsymbol {B} = \frac {1}{2} \mu_ {0} \boldsymbol {k} \times \boldsymbol {n}\tag{14}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/95f5fe1c25e7a6bd8c8f29f34436e215957711a47abd1f5ca8ef6d86eebfa277.jpg)


【讨论】由式(11)或式(14)可见,无穷大平面上的均匀电流 k 所产生的磁场是均

图5.2.9(2)

匀磁场,磁场的 B 与 k 垂直,B 的方向为 k 的右手螺旋方向.


图5.2.10


5.2.10 两无穷大的平行平面上都有均匀分布的电流，面电流密度分别为 $k_{1}$ 和 $k_{2}, k_{1}$ 与 $k_{2}$ 平行，它们的一部分如图5.2.10所示。(1)试求两面之间的磁感强度 $\pmb{B}$ ; (2)试求两面之外的磁感强度 $\pmb{B}$ ; (3)当 $k_{1} = k_{2}$ 时结果如何？(4)当 $k_{1} = -k_{2}$ 时结果如何？

【解】（1）设 $n_{12}$ 为电流面法线方向上的单位矢量，由 $\pmb{k}_{1}$ 指向 $\pmb{k}_{2}$ . 根据前面5.2.9题的式(11)和磁感强度的叠加原理，得两面之间的磁感强度为

$$
\begin{array}{r l} \boldsymbol {B} & = \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {1} \times \boldsymbol {n} _ {1 2} + \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {2} \times (- \boldsymbol {n} _ {1 2}) \\ & = \frac {1}{2} \mu_ {0} (\boldsymbol {k} _ {1} - \boldsymbol {k} _ {2}) \times \boldsymbol {n} _ {1 2} \end{array}\tag{1}
$$

(2)两面之外的磁感强度 如图5.2.10, $k_{1}$ 外边的磁感强度为

$$
\begin{array}{r l} \boldsymbol {B} & = \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {1} \times (- \boldsymbol {n} _ {1 2}) + \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {2} \times (- \boldsymbol {n} _ {1 2}) \\ & = - \frac {1}{2} \mu_ {0} (\boldsymbol {k} _ {1} + \boldsymbol {k} _ {2}) \times \boldsymbol {n} _ {1 2} \end{array}\tag{2}
$$

$k_{2}$ 外边的磁感强度为

$$
\boldsymbol {B} = \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {1} \times \boldsymbol {n} _ {1 2} + \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {2} \times \boldsymbol {n} _ {1 2}
$$

$$
= \frac {1}{2} \mu_ {0} \left(\boldsymbol {k} _ {1} + \boldsymbol {k} _ {2}\right) \times \boldsymbol {n} _ {1 2}\tag{3}
$$

(3) 当 $k_{1}=k_{2}=k$ 时，由以上三式得：

两面间： $B = 0$ 

(4) 

两面外： $k_{1}$ 外： $B = -\mu_{0}k \times n_{12}$ 

(5) 

$$
\pmb {k} _ {2} \text {外}: \pmb {B} = \mu_ {0} \pmb {k} \times \pmb {n} _ {1 2}\tag{6}
$$

(4) 当 $k_{1} = -k_{2}$ 时，由式(1)、(2)、(3) 得：

两面间： $B=\mu_{0}k_{1}\times n_{12}$ 

(7) 

两面外： $B = 0$ 

(8) 

5.2.11 两无穷大的平行平面上都有均匀分布的电流, 面电流密度分别为 $k_{1}$ 和 $k_{2}, k_{1}$ 和 $k_{2}$ 的夹角为 $\theta$ . (1) 试求两面之间的磁感强度; (2) 试求两面之外的磁感强度; (3) 当 $\theta = \pi$ , 且 $|k_{1}| = |k_{2}|$ 时, 结果如何?

【解】（1）根据前面5.2.9题，无穷大平面上的均匀电流 $k$ 所产生的磁场是均匀磁场，其磁感强度 $\pmb{B}$ 为

$$
\boldsymbol {B} = \frac {1}{2} \mu_ {0} \boldsymbol {k} \times \boldsymbol {n}\tag{1}
$$

式中 n 是由电流面到场点的法线方向上的单位矢量. 故 $k_{1}$ 和 $k_{2}$ 在两面之间产生的磁感强度为

$$
\begin{array}{r l} \boldsymbol {B} & = \boldsymbol {B} _ {1} + \boldsymbol {B} _ {2} = \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {1} \times \boldsymbol {n} _ {1 2} + \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {2} \times (- \boldsymbol {n} _ {1 2}) \\ & = \frac {1}{2} \mu_ {0} (\boldsymbol {k} _ {1} - \boldsymbol {k} _ {2}) \times \boldsymbol {n} _ {1 2} \end{array}\tag{2}
$$

式中 $n_{12}$ 为电流面法线方向上的单位矢量，由 $k_{1}$ 指向 $k_{2} \cdot B$ 的大小为

$$
\begin{array}{r l} B & = \sqrt {B _ {1} ^ {2} + B _ {2} ^ {2} + 2 B _ {1} B _ {2} \cos (\pi - \theta)} = \sqrt {B _ {1} ^ {2} + B _ {2} ^ {2} - 2 B _ {1} B _ {2} \cos \theta} \\ & = \frac {1}{2} \mu_ {0} \sqrt {k _ {1} ^ {2} + k _ {2} ^ {2} - 2 k _ {1} k _ {2} \cos \theta} \end{array}\tag{3}
$$

(2)两面之外的磁感强度

$k_{1}$ 外边：

$$
\begin{array}{r l} \boldsymbol {B} & = \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {1} \times (- \boldsymbol {n} _ {1 2}) + \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {2} \times (- \boldsymbol {n} _ {1 2}) \\ & = - \frac {1}{2} \mu_ {0} (\boldsymbol {k} _ {1} - \boldsymbol {k} _ {2}) \times \boldsymbol {n} _ {1 2} \end{array}\tag{4}
$$

$k_{2}$ 外边：

$$
\begin{array}{r l} \boldsymbol {B} & = \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {1} \times \boldsymbol {n} _ {1 2} + \frac {1}{2} \mu_ {0} \boldsymbol {k} _ {2} \times \boldsymbol {n} _ {1 2} \\ & = \frac {1}{2} \mu_ {0} (\boldsymbol {k} _ {1} + \boldsymbol {k} _ {2}) \times \boldsymbol {n} _ {1 2} \end{array}\tag{5}
$$

$\pmb{B}$ 的大小都是

$$
\begin{array}{r l} B & = \sqrt {B _ {1} ^ {2} + B _ {2} ^ {2} + 2 B _ {1} B \cos \theta} \\ & = \frac {1}{2} \mu_ {0} \sqrt {k _ {1} ^ {2} + k _ {2} ^ {2} + 2 k _ {1} k _ {2} \cos \theta} \end{array}\tag{6}
$$

(3) 当 $\theta = \pi$ ，且 $|k_{1}| = |k_{2}|$ 时，两面之间的磁感强度为

$$
\boldsymbol {B} = \frac {1}{2} \mu_ {0} (\boldsymbol {k} _ {1} - \boldsymbol {k} _ {2}) \times \boldsymbol {n} _ {1 2} = \mu_ {0} \boldsymbol {k} _ {1} \times \boldsymbol {n} _ {1 2}\tag{7}
$$

两面之外的磁感强度为

$$
\boldsymbol {B} = \pm \frac {1}{2} \mu_ {0} (\boldsymbol {k} _ {1} + \boldsymbol {k} _ {2}) \times \boldsymbol {n} _ {1 2} = 0\tag{8}
$$

5.2.12 电流 I 均匀分布在半径为 R 的无限长直圆筒面上, 平行于圆筒的轴线流动. 试求这电流在离轴线为 r 处产生的磁感强度 B.

【解】根据对称性和安培环路定理得,圆筒内:

所以

$$
\begin{array}{r l} \oint_ {L} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} & = B \cdot 2 \pi r = 0 \\ \boldsymbol {B} & = 0, \quad r <   R \end{array}\tag{1}
$$

圆筒外：

$$
\oint_ {L} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = B \cdot 2 \pi r = \mu_ {0} l,
$$

所以

$$
\boldsymbol {B} = \frac {\mu_ {0} I}{2 \pi r ^ {2}} e \times r, \quad r > R\tag{2}
$$

式中 e 为电流 I 的方向上的单位矢量.

【讨论】圆筒面上(即面电流所在处)的磁感强度不能由安培环路定理求出.根据前面5.1.41题的结果式(7)，圆筒面上面电流所在处的磁感强度为

$$
\boldsymbol {B} = \frac {\mu_ {0} I}{4 \pi R} \boldsymbol {e} \times \boldsymbol {n}\tag{3}
$$

式中 n 为圆筒面外法线方向上的单位矢量.

由式(1)、(2)可见，当 $r\to R$ 时

圆筒内：

$$
\boldsymbol {B} _ {-} = \lim _ {r \rightarrow R} \boldsymbol {B} = 0\tag{4}
$$

圆筒外：

$$
\boldsymbol {B} _ {+} = \lim _ {r \rightarrow R} \frac {\mu_ {0} I}{2 \pi r ^ {2}} \boldsymbol {e} \times \boldsymbol {r} = \frac {\mu_ {0} I}{2 \pi R} \boldsymbol {e} \times \boldsymbol {n}\tag{5}
$$

由式(3)、(4)、(5)可见：面电流 $k=\frac{Ie}{2\pi R}$ 所在处的磁感强度为

$$
\boldsymbol {B} = \frac {1}{2} (\boldsymbol {B} _ {-} + \boldsymbol {B} _ {+})\tag{6}
$$

它表明:面电流所在处的任一点的磁感强度 B, 等于从该面两边趋于该点时磁感强度的极限值 $(B_{-}$ 和 $B_{+})$ 的平均. 这是一个普遍规律, 这个规律与面电荷所在处电场强度的规律相同. [参见张之翔, 《电磁学教学札记》(高等教育出版社, 1987), §8, 35~46页.]

5.2.13 一无穷长的导体直圆管,内半径为 a,外半径为 b,载有电流 I,I 沿轴线方向流动,并且均匀分布在圆管的横截面上,其中一段如图 5.2.13 所示.试求离管的轴线为 r 处的磁感强度 B.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e13fdc906563c64e91aaba008021162a7b462042e4275010d558202ecdb7b6d8.jpg)


【解】根据对称性和安培环路定理得

$$
\oint_ {L} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = B \cdot 2 \pi r
$$

图5.2.13

$$
= \left\{ \begin{array}{l l} 0, & r <   a \\ \mu_ {0} I \frac {r ^ {2} - a ^ {2}}{b ^ {2} - a ^ {2}}, & a <   r <   b \\ \mu_ {0} I, & r > b \end{array} \right.\tag{1}
$$

于是得所求的磁感强度为

管内 $(r < a): B = 0$ 

(2) 

管体内 $(a < r < b): B = \frac{\mu_0 I}{2\pi r^2} \frac{r^2 - a^2}{b^2 - a^2} e \times r$ 

(3) 

管外 $(r > b): B = \frac{\mu_0 I}{2\pi r^2} e \times r$ 

(4) 

式中 e 为电流方向上的单位矢量，r 为从轴线到场点的位矢量， $|r|=r$ .

5.2.14 一很长的导体直圆管, 管厚为 $5.0 \mathrm{~mm}$ , 外直径为 $50.0 \mathrm{~mm}$ , 载有 50A 的电流, 电流沿管的轴线方向流动, 并且均匀分布在管的横截面上. 试求下列几处磁场强度 $\pmb{H}$ 的大小 $H$ : (1) 管外靠近外壁; (2) 管内靠近内壁; (3) 内外壁之间的中点.

【解】（1）将管当作无限长，由对称性和安培环路定理得

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H \cdot 2 \pi r = I\tag{1}
$$

管外靠近管壁处, $r=\frac{1}{2}\times50.0mm$ ,故得

$$
H = \frac {I}{2 \pi r} = \frac {5 0}{2 \pi \times \frac {1}{2} \times 5 0 . 0 \times 1 0 ^ {- 3}} = 3. 2 \times 1 0 ^ {2} (\mathrm{A/m})\tag{2}
$$

(2)管内靠近管壁处

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H \cdot 2 \pi r = 0\tag{3}
$$

所以

$$
H = 0\tag{4}
$$

(3)管的内外壁之间的中点

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H \cdot 2 \pi r = \frac {r ^ {2} - a ^ {2}}{b ^ {2} - a ^ {2}} I\tag{5}
$$

式中 $b = \frac{1}{2} \times 50.0 = 25.0\mathrm{mm}$ 为管的外半径， $a = b - 5.0 = 25.0 - 5.0 = 20.0\mathrm{mm}$ 为管的内半径。内外壁之间的中点，其半径为 $r = \frac{1}{2}(a + b) = \frac{1}{2} \times (20.0 + 25.0) = 22.5\mathrm{mm}$ 。于是得这点的磁场强度的大小为

$$
\begin{array}{r l} H & = \frac {I}{2 \pi r} \frac {r ^ {2} - a ^ {2}}{b ^ {2} - a ^ {2}} = \frac {5 0}{2 \pi \times 2 2 . 5 \times 1 0 ^ {- 3}} \times \frac {2 2 . 5 ^ {2} - 2 0 . 0 ^ {2}}{2 5 . 0 ^ {2} - 2 0 . 0 ^ {2}} \\ & = 1. 7 \times 1 0 ^ {2} (\mathrm{A/m}) \end{array}\tag{6}
$$

5.2.15 一很长的直同轴电缆,里面导线的半径为 a,外面是半径为 b 的导体薄圆管,其厚度可略去不计.电流 I 由导线流去,由圆管流回,并均匀分布在导线和管的横截面上. 试求离轴线为 r 处的磁感强度 B 的大小.

【解】根据对称性和安培环路定理得

$$
\text {导线内:} \oint_ {L} \pmb {B} \cdot \mathrm{d} \pmb {l} = B \cdot 2 \pi r = \mu_ {0} I \frac {\pi r ^ {2}}{\pi a ^ {2}} = \mu_ {0} I \frac {r ^ {2}}{a ^ {2}}\tag{1}
$$

所以

$$
B = \frac {\mu_ {0} I r}{2 \pi a ^ {2}}, \quad r <   a\tag{2}
$$

导线与管间： $\oint_{L}\pmb {B}\cdot \mathrm{d}\pmb {l} = B\cdot 2\pi r = \mu_0I$ 

(3) 

所以

$$
B = \frac {\mu_ {0} I}{2 \pi r}, \quad a <   r <   b\tag{4}
$$

管外： $\oint_{L}\pmb {B}\cdot \mathrm{d}\pmb {l} = B\cdot 2\pi r = \mu_{0}(I - I) = 0$ 

(5) 

所以

$$
B = 0, \quad r > b\tag{6}
$$

5.2.16 电缆由一导体圆柱和一同轴导体圆管构成,使用时,电流 I 从一导体流去,由另一导体流回,电流都是均匀分布在横截面上.已知圆柱的半径为 $r_{1}$ , 圆管的内外半径分别为 $r_{2}$ 和 $r_{3}$ , 其中一段如图 5.2.16 所示.试求离轴线为 r 处的磁场强度 H 的大小.

【解】根据对称性和安培环路定理得

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H \cdot 2 \pi r = I _ {i}\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/036d5196837256c4dd3a279cc483be3de179c087a15156484b8b996ca3bfc0bc.jpg)


式中 $I_{i}$ 是安培环路 L 所套住的电流的代数和. 于是得所求的磁场强度 H 的大小为

$$
H = \frac {I _ {i}}{2 \pi r}\tag{2}
$$

图5.2.16

导线内： $H=\frac{I}{2\pi r}\frac{\pi r^{2}}{\pi r_{1}^{2}}=\frac{Ir}{2\pi r_{1}^{2}},\quad r<r_{1}$ 

(3) 

导线与管间： $H=\frac{I}{2\pi r}$ ， $r_{1}<r<r_{2}$ 

(4) 

$$
\text { 管体内 }: H = \frac {I}{2 \pi r} \left(1 - \frac {r ^ {2} - r _ {2} ^ {2}}{r _ {3} ^ {2} - r _ {2} ^ {2}}\right) = \frac {I}{2 \pi r} \frac {r _ {3} ^ {2} - r ^ {2}}{r _ {3} ^ {2} - r _ {2} ^ {2}}, \quad r _ {2} <   r <   r _ {3}\tag{5}
$$

管外：

$$
H = 0, \quad r > r _ {3}\tag{6}
$$

5.2.17 半径为 R 的无穷长直圆柱面上有一层均匀分布的面电流, 电流都环绕着轴线流动并与轴线垂直(图 5.2.17(1)), 面电流密度为 k, k 的大小等于通过单位长度(该面上垂直于 k 的单位长度)的电流. 试求离轴线为 r 处的磁感强度 B.

【解】先考虑轴线上的磁感强度 B. 如图 5.2.17(2)，P 为轴线上的一点，离 P 为 x 处的圆柱面上长为 dx 的一段，其电流为 $dI = k \, dx$ ，式中 $k = |k|$ . 这是一个圆电流，根据前面 5.1.20 题的式(2)，这 dI 在 P 点产生的磁感强度 dB 沿轴线向右，其大小为

$$
\mathrm{d} B = \frac {\mu_ {0} R ^ {2} k \mathrm{d} x}{2 (x ^ {2} + R ^ {2}) ^ {3 / 2}}\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/ebd9cb1a5a4b1db084d04dbb342ce0b941c5bda51290e0c6ca88132a68572ec7.jpg)



图5.2.17(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/d943beb3e9bb594472a7598934dd25731a570f02cac9344dd706394954cc8137.jpg)



图5.2.17(2)


积分便得整个圆柱面电流在 $P$ 点产生的磁感强度 $\pmb{B}$ 的大小为

$$
\begin{array}{l} B = \frac {\mu_ {0} k R ^ {2}}{2} \int_ {- \infty} ^ {\infty} \frac {\mathrm{d} x}{(x ^ {2} + R ^ {2}) ^ {3 / 2}} = \frac {\mu_ {0} k R ^ {2}}{2} \left[ \frac {x}{R ^ {2} \sqrt {x ^ {2} + R ^ {2}}} \right] _ {r = - \infty} ^ {r = \infty} \\ = \mu_ {0} k \end{array}\tag{2}
$$

所以

$$
\boldsymbol {B} = \mu_ {0} \boldsymbol {k} \times \boldsymbol {n} _ {i}\tag{3}
$$

式中 $n_{i}$ 是圆柱面内法线方向上的单位矢量, 指向轴线. 式(3)表明: 轴线上各点的 B 都相同.

根据对称性可知:(一)圆柱面内外任一点的磁感强度其方向必定都平行于轴线;(2)离轴线距离相等的地方,磁感强度的大小必定相等.利用这两点,作一长方形安培环路L,使其长为l的一边沿轴线,对边在圆柱面内,它上面各点的磁感强度为 $B_{i}$ ,则由安培环路定理和式(3)得

$$
\oint_ {L} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = 0\tag{4}
$$

得

$$
\mu_ {0} \boldsymbol {k} \times \boldsymbol {n} _ {i} \cdot \boldsymbol {l} - \boldsymbol {B} _ {i} \cdot \boldsymbol {l} = 0
$$

所以

$$
\boldsymbol {B} _ {i} = \mu_ {0} \boldsymbol {k} \times \boldsymbol {n} _ {i}, \quad r <   R\tag{5}
$$

即圆柱面内每一点的磁感强度都相等，都是 $\mu_0\pmb{k}\times \pmb{n}_i$ ，所以圆柱面内的磁场是均匀磁场.

再求圆柱面外的磁感强度.这时使安培环路 $L$ 长为 $\pmb{l}$ 的一边沿轴线，对边在圆柱面外，它上面各点的磁感强度为 $\pmb{B}_0$ ，则得

$$
\oint_ {L} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = \mu_ {0} \boldsymbol {k} \times \boldsymbol {n} _ {\mathrm{i}} \cdot \boldsymbol {l} - \boldsymbol {B} _ {0} \cdot \boldsymbol {l} = \mu_ {0} k l\tag{6}
$$

因为

$$
\mu_ {0} \boldsymbol {k} \times \boldsymbol {n} _ {i} \cdot \boldsymbol {l} = \mu_ {0} k l\tag{7}
$$

所以

$$
\boldsymbol {B} _ {0} = 0, \quad r > R\tag{8}
$$

即圆柱面外的磁感强度处处为零.

至于 $r = R$ 处(即面电流所在处)的磁感强度, 就不能用安培环路定理求出了. 它可以用积分直接算出, 也可以用公式

$$
\boldsymbol {B} = \frac {1}{2} \left(\boldsymbol {B} _ {-} + \boldsymbol {B} _ {+}\right)\tag{9}
$$

算出,结果为

$$
\boldsymbol {B} _ {k} = \frac {1}{2} \mu_ {0} \boldsymbol {k} \times \boldsymbol {n} _ {i}\tag{10}
$$

[参见张之翔，《电磁学教学札记》(高等教育出版社,1987),§8,35~46页.]

5.2.18 半径为 R 的无穷长直圆柱面上有一层均匀分布的面电流, 电流都环绕轴线流动并与轴线方向成一角度 $\theta$ , 即电流在圆柱面上沿螺旋线向前流动, 其中一段如图 5.2.18 所示. 已知面电流密度为 k, k 的方向为螺旋线的切线方向, k 的大小等于通过单位长度(该面上垂直于 k 的单位长度)的电流. 试求离轴线为 r 处的磁感强度.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/87977f39c1d96d2cc687fab0040fe340f05607cc12fb46b4b066a6d5c854f1a2.jpg)


【解】将 $k$ 分解为平行于轴线的分量

$$
k _ {\parallel} = k \cos \theta\tag{1}
$$

图5.2.18

和垂直于轴线的分量

$$
k _ {\perp} = k \sin \theta\tag{2}
$$

根据前面 5.2.12 题的结果, $k_{1}$ 产生的磁感强度如下:

圆柱面内：

$$
\boldsymbol {B} _ {1} = 0, \quad r <   R\tag{3}
$$

圆柱面外：

$$
\begin{array}{r l} \boldsymbol {B} _ {1} & = \frac {\mu_ {0} I _ {\perp}}{2 \pi r ^ {2}} \boldsymbol {e} \times \boldsymbol {r} = \frac {\mu_ {0} \cdot 2 \pi R k \cos \theta}{2 \pi r ^ {2}} \boldsymbol {e} \times \boldsymbol {r} \\ & = \frac {\mu_ {0} R k \cos \theta}{r ^ {2}} \boldsymbol {e} \times \boldsymbol {r}, \quad r > R \end{array}\tag{4}
$$

式中 e 为 k 方向上的单位矢量, r 为从轴线到场点的位矢, $|r| = r$ .

圆柱面上：

$$
\begin{array}{r l} \boldsymbol {B} _ {1} & = \frac {\mu_ {0} I _ {\perp}}{4 \pi R} \boldsymbol {e} \times \boldsymbol {n} = \frac {\mu_ {0} \cdot 2 \pi R k \cos \theta}{4 \pi R} \boldsymbol {e} \times \boldsymbol {n} \\ & = \frac {1}{2} \mu_ {0} k \cos \theta \boldsymbol {e} \times \boldsymbol {n}, \quad r = R \end{array}\tag{5}
$$

式中 n 为圆柱面外法线方向上的单位矢量.

又根据前面 5.2.17 题的结果, $k_{\perp}$ 产生的磁感强度如下:

圆柱面内： $B_{2}=\mu_{0}k_{\perp}\times n_{i}=\mu_{0}k\sin\theta e,\quad r<R$ 

圆柱面外：

$$
\boldsymbol {B} _ {2} = 0, \quad r > R\tag{6}
$$

(7) 

圆柱面上：

$$
\boldsymbol {B} _ {2} = \frac {1}{2} \mu_ {0} k \sin \theta e, \quad r = R\tag{8}
$$

根据磁感强度叠加原理，k 所产生的磁感强度为

$$
\boldsymbol {B} = \boldsymbol {B} _ {1} + \boldsymbol {B} _ {2}\tag{9}
$$

于是由式(3)至(8)得

圆柱面内：

$$
\boldsymbol {B} = \mu_ {0} k \sin \theta e, \quad r <   R\tag{10}
$$

圆柱面外：

$$
\boldsymbol {B} = \frac {\mu_ {0} R k \cos \theta}{r ^ {2}} \boldsymbol {e} \times \boldsymbol {r}, \quad r > R\tag{11}
$$

圆柱面上： $B=\frac{1}{2}\mu_{0}k(\cos\theta e\times n+\sin\theta e)$ ，r=R

(12) 

5.2.19 一螺绕环由表面绝缘的细导线密绕而成, 共有 N 匝, 中间的半径为 R, 横截面是半径为 r 的圆形, 如图 5.2.19 所示, 已知 $r \ll R$ . 当导线中载有电流 I 时, 试求环内磁感强度的大小 B.

【解】沿环的中间作安培环路 $L$ ，由对称性和安培环路定理得

$$
\oint_ {L} \boldsymbol {B} \cdot \mathrm{d} l = B \cdot 2 \pi R = \mu_ {0} N I
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/d6807e30bc35f1fc265ab08f0bb033c5665b4a7103525e139f98bd0a6fdbcee8.jpg)



图5.2.19


所以

$$
B = \frac {\mu_ {0} N I}{2 \pi R}
$$

【讨论】由安培环路定理可以推知，环体内越靠近内侧，磁感强度越大，最大值为 $B_{\max} = \frac{\mu_0 NI}{2\pi(R - r)}$ ；越靠近外侧，磁感强度越小，最小值为 $B_{\min} = \frac{\mu_0 NI}{2\pi(R + r)}$ .

5.2.20 试证明：无限长密绕螺线管载

有电流时,管内磁场是均匀磁场.

【证】由圆电流在轴线上产生的磁感强度,经过积分得出:无穷长载流螺线管的轴线上的磁感强度为[参见前面5.1.29题式(7)]

$$
\boldsymbol {B} = \mu_ {0} n l e _ {I}\tag{1}
$$

式中 n 是沿轴线单位长度上的匝数, I 是导线中的电流, $e_{1}$ 是电流的右旋进方向(沿轴线)上的单位矢量.

由对称性可知，这螺线管内任一点的磁感强度必定沿轴线方向，而且离轴线距离相等的地方，磁感强度的大小必定相等。利用这两点，作一长方形安培环路 $L$ ，使其长为 $l$ 的一边在轴线上，对边在螺线管内[如图5.2.20(1)所示]，其上面各点的磁感强度为 $\pmb{B}_i$ ，则由安培环路定理得

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/b4830f9c0b38d370788d13a30920105819e322810ac9a4c450a556186962d4df.jpg)


$$
\oint_ {L} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = \mu_ {0} n I \boldsymbol {e} _ {l} \cdot \boldsymbol {l} - \boldsymbol {B} _ {i} \cdot \boldsymbol {l} = 0\tag{2}
$$

图5.2.20(1)

所以

$$
\boldsymbol {B} _ {i} = \mu_ {0} n I e _ {I}\tag{3}
$$

即螺线管内任一点的磁感强度都与轴线上的磁感强度相等，所以管内磁场是均匀磁场.

【讨论】关于无限长载流螺线管内的磁场,有人提出两点:(一)电流是螺旋形的,而不是圆形的,故按圆形电流算出的式(1)只是近似式;(二)电流是一匝一匝的,而不是连续的,故螺线管内的磁场只是近似均匀的磁场.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/3869a092caf783f73beecd7641f0fd7c2d5ba8303f89b2e1d5d953e9e15e6668.jpg)



图5.2.20(2)


对于这两点, 我们的看法如下: (一) 螺旋形电流可以分解为圆电流 $k_{\perp}$ 和平行于轴线的电流 $k_{\parallel}$ , 而 $k_{\perp}$ 在螺线管内产生的磁感强度为零 (参见前面 5.2.18 题), 故按圆电流算出的式(1)是准确的. 尽管其中的 $I$ 应换成 $I \sin \theta$ , 但由于是密绕, $\theta$ 接近 $90^{\circ}$ , 故取 $\sin \theta = 1$ 也是足够准确的. (二) 由于电流是一匝一匝的, 故管内的磁场是近

似均匀磁场,这是对的,特别是,越靠近导线,磁场的均匀性就越差.但是,用铁屑作的实验所拍的照片[图5.2.20(2)]表明,即使是绕得比较稀疏的螺线管,其内部磁场也还是相当均匀的.因此,作为密绕的螺线管来说,其内部的磁场,尤其是轴线附近的磁场,是足够均匀的.

5.2.21 电荷量 $Q$ 均匀分布在半径为 $R$ 的球面上，这球面以匀角速度绕它的一个固定直径旋转。试论证球内磁场是均匀磁场。

【论证】将球面上的旋转电荷当作是许多圆电流,根据圆电流在轴线上产生磁感强度的公式,可以算出球面内轴线上每一点的磁感强度均为[参见前面5.1.48题的式(7)]

$$
\boldsymbol {B} = \frac {\mu_ {0} Q}{6 \pi R} \boldsymbol {\omega}\tag{1}
$$

式中 R 是球面的半径, $\omega$ 是角速度.

如图5.2.21(1)，设 $c, d, O, e, f$ 为轴线 $ab$ 上的几点，其中 $O$ 为球心，则有

$$
B _ {c} = B _ {d} = B _ {O} = B _ {e} = B _ {f} = \frac {\mu_ {0} Q \omega}{6 \pi R}\tag{2}
$$

根据轴对称性,球面内的 B 线只有三种可能性,分别如图 5.2.21(2)、(3) 和 (4) 所示. 先看图 (2),其中 B 线在球心处最密集,故轴线 ab 上各点的磁感强度的值应有

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/203d5364cbd9dd21f539a00238547e8429ae43cfeb425e9e209453b2357b78ae.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/70fbda46dfe5ba4cca3c406e64da93a0fa5333ba15bb81eab24989d5907f03d2.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f416c185dd7322ca42aae791cadf95c6a591ea91b081719678c353642ed1e010.jpg)



(3)



(2)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/1f2eecf33175007aff21c86bc7d351dd56572169ca4fe55a8db7937ccb9d25d2.jpg)



(4)



图5.2.21


$$
B _ {c} <   B _ {d} <   B _ {O}, \quad B _ {O} > B _ {e} > B _ {f}\tag{3}
$$

式(3)不满足式(1)，所以球面内的 B 线不能是图 5.2.21(2)的形状。再看图 5.2.21(3)，其中 B 线在球心处最松散，故轴线 ab 上各点的磁感强度的值应有

$$
B _ {c} > B _ {d} > B _ {O}, \quad B _ {O} <   B _ {e} <   B _ {f}\tag{4}
$$

式(4)也不满足式(1)，所以球面内的 B 线也不能是图 5.2.21(3) 的形状.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a6cc048f8bd0ffe194f028131e57abefbf7426dce024bbc690157bfc3b776ff2.jpg)


于是我们得出结论:球面内的 B 线只能是图 5.2.21(4) 的形状, 即平行于轴线的直线.

再由安培环路定理证明球内磁场是均匀磁场. 如图 5.2.21(5), 设在球内任一点 P, 磁感强度为 B; 取长方形安培环路 L, 边长为 l 的一边在轴线上, 其对边通过 P 点, 则有

所以

$$
\oint_ {L} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = B _ {0} l - B l = 0\tag{5}
$$

$$
B = B _ {0}
$$


图 5.2.21(5)


(6) 

这表明球内任一点的磁感强度都等于球心的磁感强度.

5.2.22 一载有电流 I 的无穷长直导线, 半径为 a, I 均匀分布在横截面上, 图 5.2.22 是这导线纵剖面的一部分,

其中 ABCD 是一个长方形, AB 边在轴线上, CD 边在表面上, CD = l. 试求通过 ABCD 的磁通量.

【解】由对称性和安培环路定理得，导线内离轴线为 r 处，有

$$
\oint_ {L} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = B \cdot 2 \pi r = \mu_ {0} I \cdot \frac {\pi r ^ {2}}{\pi a ^ {2}} = \frac {\mu_ {0} I r ^ {2}}{a ^ {2}}
$$

所以

$$
B = \frac {\mu_ {0} I r}{2 \pi a ^ {2}}\tag{1}
$$

B 的方向与导线的纵剖面垂直. 于是由式(2)得通过 ABCD 的磁通量为

$$
\begin{array}{r l} \Phi & = \int_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = \int_ {S} B \mathrm{d} S = \frac {\mu_ {0} I l}{2 \pi a ^ {2}} \int_ {0} ^ {a} r \mathrm{d} r \\ & = \frac {\mu_ {0} I l}{4 \pi} \end{array}\tag{2}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6161c1d400ae5c104b2fd2f2f6887407867b198793805c1a9a129c9c197fb008.jpg)


(3) 


图5.2.22


5.2.23 半径为 R 的无穷长直圆柱形导体, 载有沿轴线方向流动的电流, 电流均匀分布在横截面上, 电流密度为 j. 试求离导体轴线为 r 处的磁感强度.

【解】根据对称性可知,空间任一点的磁感强度 B 的方向为 j 的右手螺旋方向,离轴线距离相等处,B 的大小相等.因此,取安培环路 L 为圆形,圆心在轴线上,圆的几何轴线与导体轴线重合,圆的半径为 r.设 r<R,则有

$$
\oint_ {L} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = B \cdot 2 \pi r = \mu_ {0} j \cdot \pi r ^ {2}\tag{1}
$$

所以

$$
B = \frac {\mu_ {0}}{2} j r\tag{2}
$$

考虑方向,便得所求的磁感强度为

$$
\boldsymbol {B} = \frac {1}{2} \mu_ {0} \boldsymbol {j} \times \boldsymbol {r}, \quad r <   R\tag{3}
$$

设 $r > R$ ，则有

$$
\oint_ {L} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = B \cdot 2 \pi r = \mu_ {0} j \cdot \pi R ^ {2}\tag{4}
$$

所以

$$
B = \frac {1}{2} \frac {R ^ {2}}{r} j\tag{5}
$$

考虑方向,便得所求的磁感强度为

$$
\boldsymbol {B} = \frac {1}{2} \mu_ {0} \left(\frac {R}{r}\right) ^ {2} \boldsymbol {j} \times \boldsymbol {r}, \quad r > R\tag{6}
$$

5.2.24 外半径为 R 的无穷长圆柱形导体管, 管内空心部分的半径为 r, 空心部分的轴线与圆柱的轴线平行, 但不重合, 相距为 a, 管的一段如图 5.2.24 所示. 今有电流 I 沿轴线方向流动, I 均匀分布在管的横截面上. (1) 试分别求圆柱轴线上和空心轴线上的磁感强度 B 的大小 B. (2) 当 R = 1.0cm, r = 0.5mm, a = 5.0mm 和 I = 31A 时, 试计算上述两处 B 的值.

【解】（1）空心部分可看作实心圆柱体的均匀电流加上该部分的反向电流构成. 设实心圆柱体的均匀电流在离轴线为 a 处产生的磁感强度 $B_{1}$ 的大小为 $B_{1}$ ，则由安培环路定理得

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/ccefd8a73bf70d0b2bc672e00f4c5161977a8f9718af1393c42e9a6e0d9bfc1d.jpg)


$$
\oint_ {L} \boldsymbol {B} _ {1} \cdot \mathrm{d} \boldsymbol {l} = B _ {1} \cdot 2 \pi a = \mu_ {0} \frac {\boldsymbol {I} \cdot \pi a ^ {2}}{\pi (R ^ {2} - r ^ {2})} = \frac {\mu_ {0} I a ^ {2}}{R ^ {2} - r ^ {2}}\tag{1}
$$

所以

$$
B _ {1} = \frac {\mu_ {0} I a}{2 \pi (R ^ {2} - r ^ {2})}\tag{2}
$$

图5.2.24

反向的小圆柱电流在大圆柱轴线上(在小圆柱外)产生的磁感强度 $B_{2}$ 的大小为 $B_{2}$ ，由安培环路定理得

$$
\oint_ {L} \boldsymbol {B} _ {2} \cdot \mathrm{d} \boldsymbol {l} = B _ {2} \cdot 2 \pi a = \mu_ {0} \frac {I}{\pi (R ^ {2} - r ^ {2})} \cdot \pi r ^ {2} = \frac {\mu_ {0} I r ^ {2}}{R ^ {2} - r ^ {2}},\tag{3}
$$

所以

$$
B _ {2} = \frac {\mu_ {0} I r ^ {2}}{2 \pi a (R ^ {2} - r ^ {2})}\tag{4}
$$

均匀圆柱电流在各自的轴线上产生的磁感强度均为零.于是得圆柱轴线上的磁感强度的大小为

$$
B = B _ {2} = \frac {\mu_ {0} I r ^ {2}}{2 \pi a (R ^ {2} - r ^ {2})}\tag{5}
$$

空心部分轴线上的磁感强度的大小为

$$
B ^ {\prime} = B _ {1} = \frac {\mu_ {0} I a}{2 \pi (R ^ {2} - r ^ {2})}\tag{6}
$$

(2)代入数据得

$$
\begin{array}{r l} B & = \frac {\mu_ {0} I r ^ {2}}{2 \pi a (R ^ {2} - r ^ {2})} \\ & = \frac {4 \pi \times 1 0 ^ {- 7} \times 3 1 \times (0 . 5 \times 1 0 ^ {- 3}) ^ {2}}{2 \pi \times 5 . 0 \times 1 0 ^ {- 3} \times [ (1 . 0 \times 1 0 ^ {- 2}) ^ {2} - (0 . 5 \times 1 0 ^ {- 3}) ^ {2} ]} \\ & = 3. 1 \times 1 0 ^ {- 6} (\mathrm{T}) \\ B ^ {\prime} & = \frac {\mu_ {0} I a}{2 \pi (R ^ {2} - r ^ {2})} = \frac {4 \pi \times 1 0 ^ {- 7} \times 3 1 \times 5 . 0 \times 1 0 ^ {- 3}}{2 \pi \times [ (1 . 0 \times 1 0 ^ {- 2}) ^ {2} - (0 . 5 \times 1 0 ^ {- 3}) ^ {2} ]} \\ & = 3. 1 \times 1 0 ^ {- 4} (\mathrm{T}) \end{array}\tag{7}
$$

(8) 

5.2.25 一无限长直圆柱体,内有一无限长直圆柱形空洞,空洞的轴线与圆柱的轴线平行但不重合,相距为 a. 今有电流沿轴线方向流动并均匀分布在横截面上,电流密度为 j. 试证明:洞内的磁场是均匀磁场,并求出它的磁感强度.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/858ca66f3b6556a1e9381a0be41b3ccb6fb64422b64d42ab2ef31bdc172afa50.jpg)


【解】本题可看作是两个均匀电流叠加而成：一个电流均匀分布在实心圆柱体内，电流密度为 $j$ ；另一个电流则均匀分布在空洞处，电流密度为 $-j$ 。根据对称性和安培环路定理，均匀圆柱电流 $j$ 在柱体内产生的磁感强度为[参见前面5.2.23题的式(3)]

$$
\boldsymbol {B} _ {1} = \frac {1}{2} \mu_ {0} \boldsymbol {j} \times \boldsymbol {R}\tag{1}
$$

式中 R 是从圆柱轴线 O 到场点 P 的位矢, 如图 5.2.25 所示. 同样, 反向电流 -j 在空洞区域内的 P 点所产生的磁感强度为


图5.2.25


$$
\boldsymbol {B} _ {2} = \frac {1}{2} \mu_ {0} (- j) \times \boldsymbol {r} = - \frac {1}{2} \mu_ {0} \boldsymbol {j} \times \boldsymbol {r}\tag{2}
$$

式中 r 是从空洞轴线 $O'$ 到场点 P 的位矢.

根据叠加原理，P 点的磁感强度为

$$
\begin{array}{r l} \boldsymbol {B} & = \boldsymbol {B} _ {1} + \boldsymbol {B} _ {2} = \frac {1}{2} \mu_ {0} \boldsymbol {j} \times (\boldsymbol {R} - \boldsymbol {r}) \\ & = \frac {1}{2} \mu_ {0} \boldsymbol {j} \times \boldsymbol {a} \end{array}\tag{3}
$$

式中 $a = OO'$ , $|a| = a$ . 由式(3)可见, 空洞内任一点的磁感强度都相同, 所以空洞内的磁场是均匀磁场; 该磁场的磁感强度 $\pmb{B}$ 与 $\pmb{a}$ 垂直, 并沿 $\pmb{j}$ 的右手螺旋方向.

5.2.26 电流沿圆柱形长导线流动,导线内离轴线为 r 处,电流密度的大小 j 和磁场强度的大小 H 都是 r 的函数.试证明: $j=\frac{H}{r}+\frac{\partial H}{\partial r}$ .

【证】以圆柱的轴线为极轴，轴上任一点为原点，取柱坐标系.因电流平行于轴线，故电流密度为

$$
\boldsymbol {j} = (j _ {r}, j _ {\phi}, j _ {z}) = (0, 0, j)\tag{1}
$$

由于 $j = j(r)$ 只是 $r$ 的函数，故由对称性和Biot-Savart定律可知，它产生的磁场也只是 $r$ 的函数，且只有 $\phi$ 分量，即

$$
\boldsymbol {H} = (0, H, 0)\tag{2}
$$

由安培环路定理得

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = I = \iint \boldsymbol {j} \cdot \mathrm{d} \boldsymbol {S}\tag{3}
$$

根据斯托克斯公式

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = \iint_ {S} \nabla \times \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {S}\tag{4}
$$

式(3)可化成

$$
\iint_ {S} (\nabla \times \boldsymbol {H} - \boldsymbol {j}) \cdot \mathrm{d} \boldsymbol {S} = 0\tag{5}
$$

式中 S 是以 L 为边界的曲面. 由于 S 是任意曲面, 故得

$$
\nabla \times \boldsymbol {H} = \boldsymbol {j}\tag{6}
$$

此式的 $z$ 分量为

$$
\frac {1}{r} \frac {\partial}{\partial r} (r H _ {\phi}) - \frac {1}{r} \frac {\partial H _ {r}}{\partial \phi} = j _ {z}\tag{7}
$$

由式(1)知 $j_{z}=j$ ; 由式(2)知 $H_{r}=0, H_{\phi}=H$ , 故得

$$
\frac {1}{r} \frac {\partial}{\partial r} (r H) = j\tag{8}
$$

所以

$$
j = \frac {H}{r} + \frac {\partial H}{\partial r}\tag{9}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/878489460cf91a7fbd75f0a2a0bd3d00a420f5f39c5ef135046bbfff62025cc2.jpg)


## 第六章 洛伦兹力

## §6.1 洛伦兹力

6.1.1 一电子以 $v = 3.0 \times 10^{7} \mathrm{~m/s}$ 的速率射入磁感强度为 $B$ 的均匀磁场内，速度 $\pmb{v}$ 与 $B$ 垂直， $B$ 的大小为 $B = 10 \mathrm{T}$ . 已知电子的电荷量为 $e = -1.6 \times 10^{-19} \mathrm{C}$ ，质量为 $m = 9.1 \times 10^{-31} \mathrm{~kg}$ . 试求这电子所受的洛伦兹力，并与它在地面所受的重力比较.

【解】 电子所受的洛伦兹力的大小为

$$
\begin{array}{r l} F & = | e | v B = 1. 6 \times 1 0 ^ {- 1 9} \times 3. 0 \times 1 0 ^ {7} \times 1 0 \\ & = 4. 8 \times 1 0 ^ {- 1 1} (\mathrm{N}) \end{array}
$$

电子在地面所受的重力为

所以

$$
\begin{array}{r l} F _ {G} & = m g = 9. 1 \times 1 0 ^ {- 3 1} \times 9. 8 1 = 8. 9 \times 1 0 ^ {- 3 0} (\mathrm{N}) \\ & \frac {F}{F _ {G}} = \frac {4 . 8 \times 1 0 ^ {- 1 1}}{8 . 9 \times 1 0 ^ {- 3 0}} = 5. 4 \times 1 0 ^ {1 8} \end{array}
$$

6.1.2 一长直导线载有 50A 电流, 在离它 5.0cm 处, 有一电子以速度 v 运动, v 的大小为 $v = 1.0 \times 10^{7}$ m/s, 电子的电荷量为 $e = -1.6 \times 10^{-19}$ C. 试求下列情

况下作用在电子上的洛伦兹力:(1)v平行于导线;(2)v垂直于导线并向着导线;(3)v垂直于导线和电子所构成的平面.

【解】（1）v 平行于导线 由电流产生磁场 B 的规律和洛伦兹力公式，作用在电子上的洛伦兹力为

$$
\boldsymbol {F} = - e \boldsymbol {v} \times \boldsymbol {B}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/10563982aef27bf4bb5ad10603fb1641701c8a28408b1f61cebeaf91e374cfc1.jpg)


(1) 

$\pmb{F}$ 的方向如图6.1.2所示， $\pmb{F}$ 的大小为

图6.1.2

$$
\begin{array}{r l} F & = | e | v B = | e | v \frac {\mu_ {0} I}{2 \pi r} \\ & = 1. 6 \times 1 0 ^ {- 1 9} \times 1. 0 \times 1 0 ^ {7} \times \frac {4 \pi \times 1 0 ^ {- 7} \times 5 0}{2 \pi \times 5 . 0 \times 1 0 ^ {- 2}} \\ & = 3. 2 \times 1 0 ^ {- 1 6} (\mathrm{N}) \end{array}\tag{2}
$$

(2) $\pmb{v}$ 垂直于导线并向着导线 这时作用在电子上的洛伦兹力平行于导线向上, 其大小仍为式(2)所示.

(3) $\pmb{v}$ 垂直于导线和电子所构成的平面 这时因 $\pmb{v} \times \pmb{B} = 0$ ，故作用在电子上的洛伦兹力为零.

6.1.3 试证明:带电粒子在磁场中运动时,磁场作用在它上面的洛伦兹力不

作功.

【证】设粒子所带的电荷量为 q，速度为 v，磁场的磁感强度为 B，则磁场作用在它上面的洛伦兹力为

$$
\boldsymbol {F} = q \boldsymbol {v} \times \boldsymbol {B}\tag{1}
$$

当粒子的位移为 $dr$ 时，这力作的功为

$$
\boldsymbol {F} \cdot \mathrm{d} \boldsymbol {r} = q \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {r} = q \mathrm{d} \boldsymbol {r} \cdot (\boldsymbol {v} \times \boldsymbol {B}) = q (\mathrm{d} \boldsymbol {r} \times \boldsymbol {v}) \cdot \boldsymbol {B}\tag{2}
$$

因

$$
\boldsymbol {v} = \frac {\mathrm{d} \boldsymbol {r}}{\mathrm{d} t}\tag{3}
$$

所以

$$
\mathrm{d} \boldsymbol {r} \times \boldsymbol {v} = \mathrm{d} \boldsymbol {r} \times \frac {\mathrm{d} \boldsymbol {r}}{\mathrm{d} t} = 0\tag{4}
$$

故得

$$
\boldsymbol {F} \cdot \mathrm{d} \boldsymbol {r} = 0\tag{5}
$$

【别证】力 F 作功的功率为

$$
P = \boldsymbol {F} \cdot \boldsymbol {v}\tag{6}
$$

根据式(6)，洛伦兹力作功的功率为

$$
P = \boldsymbol {F} \cdot \boldsymbol {v} = q \boldsymbol {v} \times \boldsymbol {B} \cdot \boldsymbol {v} = 0\tag{7}
$$

所以洛伦兹力不作功.

6.1.4 一电子在 $B = 70\mathrm{Gs}$ 的均匀磁场中作圆周运动，圆的半径为 $r = 3.0\mathrm{cm}$ . 已知电子的质量为 $m = 9.1 \times 10^{-31}\mathrm{kg}$ ，电荷量为 $e = -1.6 \times 10^{-19}\mathrm{C}$ ， $\pmb{B}$ 垂直于纸面向外，电子的轨道在纸面内[图6.1.4(1)]. 设电子某时刻在 $A$ 点，它的速度 $\pmb{v}$ 向上.(1)试画出电子运动的轨道；(2)试求电子的速率 $\pmb{v}$ 和动能 $E_{\mathrm{k}}$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c595cfb66c9e95e7d7310ebe7a05ed97f2680295952ab09a83bbaf102d7fd50b.jpg)



图6.1.4(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/0cd01ff5645ca71df359c342f0d9142c062d8bcda9e1060d76b7415b18336fdb.jpg)


【解】（1）电子的轨道如图6.1.4(2)所示.

(2)电子的速率为

$$
\begin{array}{r l} v & = \frac {| e | r B}{m} = \frac {1 . 6 \times 1 0 ^ {- 1 9} \times 3 . 0 \times 1 0 ^ {- 2} \times 7 0 \times 1 0 ^ {- 4}}{9 . 1 \times 1 0 ^ {- 3 1}} \\ & - 3. 7 \times 1 0 ^ {7} (\mathrm{m/s}) \end{array}
$$

图6.1.4(2)

电子的动能为

$$
\begin{array}{r l} E _ {\mathrm{k}} & = \frac {1}{2} m v ^ {2} = \frac {1}{2} \times 9. 1 \times 1 0 ^ {- 3 1} \times (3. 7 \times 1 0 ^ {7}) ^ {2} \\ & = 6. 2 \times 1 0 ^ {- 1 6} (\mathrm{J}) = 3. 9 \times 1 0 ^ {3} (\mathrm{eV}) \end{array}
$$

6.1.5 带电粒子穿过饱和蒸汽时,在它走过的路径上,过饱和蒸汽便凝结成小液滴,从而使得它的运动轨迹(径迹)显示出来,这就是云室的原理.今在一云室中有 B=1.0T 的均匀磁场,观测到一个带电粒子的径迹是一段圆弧,半径为 r=2.0cm;已知这粒子的电荷量为 $1.6 \times 10^{-19}C$ ,质量为 $1.67 \times 10^{-27}kg$ .试求它

的动能.

【解】带电粒子的运动方程为

$$
m \frac {v ^ {2}}{r} = q v B
$$

它的动能为

$$
\begin{array}{r l} E _ {\mathrm{k}} & = \frac {1}{2} m v ^ {2} = \frac {1}{2} \frac {(r q B) ^ {2}}{m} = \frac {(2 . 0 \times 1 0 ^ {- 2} \times 1 . 6 \times 1 0 ^ {- 1 9} \times 1 . 0) ^ {2}}{2 \times 1 . 6 7 \times 1 0 ^ {- 2 7}} \\ & = 3. 1 \times 1 0 ^ {- 1 5} (\mathrm{J}) = 1. 9 \times 1 0 ^ {4} (\mathrm{eV}) \end{array}
$$

6.1.6 在极高温度下, 轻原子核由于高速热运动而克服库仑力, 彼此发生结合, 同时放出大量能量, 这种现象称为热核反应. 热核反应的磁约束是用磁场把热核拴住, 使它们不致迅速飞散. 据估算, 氘核需要 $T = 1.2 \times 10^{7} \mathrm{~K}$ 的温度才能发生聚变. 这时要把氘核拴在磁力线上, 回旋半径为 $10 \mathrm{~mm}$ , 试估算所需的磁感强度 $\pmb{B}$ 的值. 已知氘核的质量为 $m = 3.3 \times 10^{-27} \mathrm{~kg}$ , 电荷量为 $e = 1.6 \times 10^{-19} \mathrm{C}$ .

【解】所需的磁感强度为

$$
B = \frac {m v}{e r}\tag{1}
$$

为了估算 B 的值,我们用氘核的方均根速率

$$
\sqrt {v ^ {2}} = \sqrt {\frac {3 k T}{m}}\tag{2}
$$

式中 $k=1.38\times10^{-23}J/K$ 是玻尔兹曼常量. 将式(2)代入式(1)得

$$
\begin{array}{r l} B & = \frac {\sqrt {3 m k T}}{e r} = \frac {\sqrt {3 \times 3 . 3 \times 1 0 ^ {- 2 7} \times 1 . 3 8 \times 1 0 ^ {- 2 3} \times 1 . 2 \times 1 0 ^ {7}}}{1 . 6 \times 1 0 ^ {- 1 9} \times 1 0 \times 1 0 ^ {- 3}} \\ & = 8. 0 (\mathrm{T}) \end{array}\tag{3}
$$

【讨论】氘核热运动的平均速率为

$$
\bar {v} = \sqrt {\frac {8 k T}{\pi m}}\tag{4}
$$

最概然速率为

$$
v _ {p} = \sqrt {\frac {2 k T}{m}}\tag{5}
$$

它们与方均根速率是同一数量级，故用 $\bar{v}$ 或 $v_{p}$ 估算 B，得出的 B 值也是同一数量级.

6.1.7 测得一太阳黑子的磁场为 B = 4000Gs，试问电子在其中以 $5.0 \times 10^{8}$ cm/s 的速度垂直于 B 运动时，受到的洛伦兹力有多大？回旋半径有多大？已知电子电荷量的大小为 $1.6 \times 10^{-19}$ C，质量为 $9.1 \times 10^{-31}$ kg。

【解】 电子受到的洛伦兹力的大小为

$$
\begin{array}{r l} F & = | e | v B = 1. 6 \times 1 0 ^ {- 1 9} \times 5. 0 \times 1 0 ^ {8} \times 1 0 ^ {- 2} \times 4 0 0 0 \times 1 0 ^ {- 4} \\ & = 3. 2 \times 1 0 ^ {- 1 3} (\mathrm{N}) \end{array}
$$

回旋半径为

$$
\begin{array}{r l} r & = \frac {m v}{q B} = \frac {9 . 1 \times 1 0 ^ {- 3 1} \times 5 . 0 \times 1 0 ^ {8} \times 1 0 ^ {- 2}}{1 . 6 \times 1 0 ^ {- 1 9} \times 4 0 0 0 \times 1 0 ^ {- 4}} \\ & = 7. 1 \times 1 0 ^ {- 5} (\mathrm{m}) \end{array}
$$

6.1.8 星际空间里某处有 $B = 1.0 \times 10^{-5}\mathrm{Gs}$ 的均匀磁场，一电子在其中作螺旋运动，速度沿 $\pmb{B}$ 的分量为光速 $c$ 的百分之一。试问它沿磁场方向前进一光年（一光年即光走一年的距离）时，它绕磁力线转了多少圈？已知电子的质量为 $9.1 \times 10^{-31}\mathrm{kg}$ ，电荷量的大小为 $1.6 \times 10^{-19}\mathrm{C}$ 。

【解】设电子速度 $\pmb{v}$ 平行于磁场的分量为 $v_{\parallel}$ ，垂直于磁场的分量为 $v_{\perp}$ ，则由电子的运动方程

$$
\frac {m v _ {\perp} ^ {2}}{r} = | e | v _ {\perp} B\tag{1}
$$

得电子绕磁力线转一圈的时间为

$$
T = \frac {2 \pi r}{v _ {\perp}} = \frac {2 \pi m}{| e | B}\tag{2}
$$

电子沿磁场方向前进一光年所需的时间为

$$
t = \frac {3 6 5 \times 2 4 \times 6 0 \times 6 0 \times 3 \times 1 0 ^ {8}}{3 \times 1 0 ^ {8} / 1 0 0} = 3. 1 5 \times 1 0 ^ {9} (\mathrm{s})\tag{3}
$$

在这段时间里,电子绕磁力线转的圈数为

$$
\begin{array}{r l} N & = \frac {t}{T} = \frac {3 . 1 5 \times 1 0 ^ {9} \times | e | B}{2 \pi m} \\ & = \frac {3 . 1 5 \times 1 0 ^ {9} \times 1 . 6 \times 1 0 ^ {- 1 9} \times 1 . 0 \times 1 0 ^ {- 5} \times 1 0 ^ {- 4}}{2 \pi \times 9 . 1 \times 1 0 ^ {- 3 1}} \\ & = 8. 8 \times 1 0 ^ {1 0} \end{array}\tag{4}
$$

6.1.9 一电子的动能为 $10\mathrm{eV}$ , 在垂直于均匀磁场的平面内作圆周运动. 已知磁场的磁感强度 $B = 1.0\mathrm{Gs}$ , 电子的电荷量 $e = -1.6 \times 10^{-19}\mathrm{C}$ , 质量 $m = 9.1 \times 10^{-31}\mathrm{kg}$ . (1)试求电子的轨道半径 $r$ 和回旋周期 $T$ ; (2)顺着 $\pmb{B}$ 的方向看, 电子是顺时针回旋吗?

【解】（1）用电子的动能 $E_{\mathrm{k}} = \frac{1}{2} m v^{2}$ 表示电子的轨道半径 $r$ 为

$$
\begin{array}{r l} r & = \frac {m v}{| e | B} = \frac {\sqrt {2 m E _ {k}}}{| e | B} = \frac {\sqrt {2 \times 9 . 1 \times 1 0 ^ {- 3 1} \times 1 0 \times 1 . 6 \times 1 0 ^ {- 1 9}}}{1 . 6 \times 1 0 ^ {- 1 9} \times 1 . 0 \times 1 0 ^ {- 4}} \\ & = 0. 1 1 (\mathrm{m}) \end{array}
$$

电子的回旋周期为

$$
\begin{array}{r l} T & = \frac {2 \pi r}{v} = \frac {2 \pi m}{e | B} = \frac {2 \pi \times 9 . 1 \times 1 0 ^ {- 3 1}}{1 . 6 \times 1 0 ^ {- 1 9} \times 1 . 0 \times 1 0 ^ {- 4}} \\ & = 3. 6 \times 1 0 ^ {- 7} (\mathrm{s}) \end{array}
$$

(2)是顺时针回旋.

6.1.10 一电子在均匀磁场中作圆周运动,频率为 f = 12.0MHz,半径为

53.5cm. 已知电子质量为 $m = 9.11 \times 10^{-31} ~kg$ ，电荷量为 $e = -1.60 \times 10^{-19} ~C$ 。试求：(1) 磁场的磁感强度 B 的值；(2) 电子的动能。

【解】（1）电子的运动方程为

$$
m \frac {v ^ {2}}{r} = | e | v B\tag{1}
$$

频率为

$$
f = \frac {1}{T} = \frac {v}{2 \pi r}\tag{2}
$$

由以上两式得

$$
\begin{array}{r l} B & = \frac {2 \pi m f}{| e |} = \frac {2 \pi \times 9 . 1 1 \times 1 0 ^ {- 3 1} \times 1 2 . 0 \times 1 0 ^ {6}}{1 . 6 0 \times 1 0 ^ {- 1 9}} \\ & = 4. 2 9 \times 1 0 ^ {- 4} (\mathrm{T}) \end{array}\tag{3}
$$

(2) 电子的动能为

$$
\begin{array}{r l} E _ {k} & = \frac {1}{2} m v ^ {2} = \frac {1}{2} | e | v r B = 2 (\pi r f) ^ {2} m \\ & = 2 \times (\pi \times 5 3. 5 \times 1 0 ^ {- 2} \times 1 2. 0 \times 1 0 ^ {6}) ^ {2} \times 9. 1 1 \times 1 0 ^ {- 3 1} \\ & = 7. 4 1 \times 1 0 ^ {- 1 6} (\mathrm{J}) = 4. 6 3 \times 1 0 ^ {3} (\mathrm{eV}) \\ & = 4. 6 3 (\mathrm{keV}) \end{array}\tag{4}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/d08bce5fedf017a8216671c8a3748624fc2137330a8e27c366fd8ea3087c9235.jpg)


6.1.11 一电子的初速度为零, 经过电压 U 加速后, 进入磁感强度为 B 的均匀磁场, 进入磁场时速度为 v, v 与 B 垂直, 如图 6.1.11(1) 所示. 已知电子质量为 m, 电荷量为 e. (1) 试画出电子的轨道; (2) 试求轨道的半径 r; (3) 当 $m = 9.11 \times 10^{-31} ~kg$ , $e = -1.60 \times 10^{-19} ~C$ , U = 3000 V, B = 100 Gs 时, 算出 r 的值.

图6.1.11(1)

【解】（1）电子的轨道如图6.1.11(2)所示.

(2)由电子的运动方程

$$
m \frac {v ^ {2}}{r} = | e | v B
$$

和能量方程

$$
\frac {1}{2} m v ^ {2} = | e | U\tag{1}
$$

得电子的轨道半径为

$$
r = \frac {m v}{| e | B} = \frac {1}{B} \sqrt {\frac {2 m U}{| e |}}\tag{2}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/7d4a9e640462956e172120fa9f0f120592b34d454279925660ae399a70f8e707.jpg)


(3) 

(3) $r$ 的值为

图6.1.11(2)

$$
\begin{array}{r l} r & = \frac {1}{1 0 0 \times 1 0 ^ {- 4}} \sqrt {\frac {2 \times 9 . 1 1 \times 1 0 ^ {- 3 1} \times 3 0 0 0}{1 . 6 0 \times 1 0 ^ {- 1 9}}} \\ & = 1. 8 5 \times 1 0 ^ {- 2} (m) \end{array}
$$

6.1.12 已知质子的静质量为 $m_{0}=1.67\times10^{-27}$ kg，电荷量为 $e=1.60\times10^{-19}$ C，地球半径为 6370 km，地球赤道上地面的磁场为 B=0.32 Gs。（1）要使质子在地球磁场的作用下，沿赤道地面作圆周运动，试求质子的速率 v（提示：应考虑狭义相对论效应）；（2）若要使质子以速率 $v=1.0\times10^{7}$ m/s，沿赤道地面作圆周运动，试问地磁场的磁感强度应该有多大？

【解】（1）质子的运动方程为

$$
m \frac {v ^ {2}}{R} = e v B\tag{1}
$$

考虑狭义相对论,质子的质量 m 与速度 v 的关系为

$$
m = \frac {m _ {0}}{\sqrt {1 - v ^ {2} / c ^ {2}}}\tag{2}
$$

由以上两式解得

$$
\frac {v}{c} = \frac {1}{\sqrt {1 + \left(\frac {m _ {0} c}{R e B}\right) ^ {2}}}\tag{3}
$$

式中

$$
\begin{array}{r l} \frac {m _ {0} c}{R e B} & = \frac {1 . 6 7 \times 1 0 ^ {- 2 7} \times 3 \times 1 0 ^ {8}}{6 3 7 0 \times 1 0 ^ {3} \times 1 . 6 0 \times 1 0 ^ {- 1 9} \times 0 . 3 2 \times 1 0 ^ {- 4}} \\ & = 1. 5 3 6 \times 1 0 ^ {- 2} \ll 1 \end{array}\tag{4}
$$

故式(3)可取近似(较好的近似)如下：

$$
\begin{array}{r l} \frac {v}{c} & = 1 - \frac {1}{2} \left(\frac {m _ {0} c}{R e B}\right) ^ {2} = 1 - \frac {1}{2} \times (1. 5 3 6 \times 1 0 ^ {- 2}) ^ {2} \\ & = 1 - 1. 2 \times 1 0 ^ {- 4} \end{array}\tag{5}
$$

于是得

$$
1 - \frac {v}{c} = 1. 2 \times 1 0 ^ {- 4}\tag{6}
$$

(2) 地球的磁场应为

$$
B = \frac {m v}{e R} = \frac {1 . 6 7 \times 1 0 ^ {- 2 7} \times 1 . 0 \times 1 0 ^ {7}}{1 . 6 0 \times 1 0 ^ {- 1 9} \times 6 3 7 0 \times 1 0 ^ {3}} = 1. 6 \times 1 0 ^ {- 8} (\mathrm{T})\tag{7}
$$

【讨论】由式(5)或式(6)可见,质子的速度非常接近光速,因此必须考虑狭义相对论效应,即式(2).这时如果不考虑式(2),则由式(1)得

$$
\begin{array}{r l} v & = \frac {R e B}{m _ {0}} = \frac {6 3 7 0 \times 1 0 ^ {3} \times 1 . 6 \times 1 0 ^ {- 1 9} \times 0 . 3 2 \times 1 0 ^ {- 4}}{1 . 6 7 \times 1 0 ^ {- 2 7}} \\ & = 2. 0 \times 1 0 ^ {1 0} (\mathrm{m/s}) \end{array}\tag{8}
$$

这个结果表明： $v > c$ （真空中光速).根据狭义相对论，这是不可能的

6.1.13 在一个电视显像管里,电子沿水平方向从南到北运动,动能是 $1.2 \times$ 

$10^{4}\mathrm{eV}$ . 该处地球磁场在竖直方向上的分量向下, 它的大小是 $B_{\perp} = 0.55\mathrm{Gs}$ . 已知电子的质量为 $m = 9.1 \times 10^{-31}\mathrm{kg}$ , 电荷量为 $e = -1.6 \times 10^{-19}\mathrm{C}$ . 试问: (1) 电子受地磁的作用往哪个方向偏转? (2) 电子的加速度有多大? (3) 电子在电视管内走 20 厘米, 偏转有多大? (4) 地磁对于看电视有没有影响?

【解】（1）根据洛伦兹力公式 $F = q\pmb{v} \times \pmb{B}$ ，知电子受地磁的作用力向东，故电子向东偏转.

(2)电子加速度的大小为

$$
\begin{array}{r l} a & = \frac {| e | v B _ {\perp}}{m} = \frac {| e | B _ {\perp}}{m} \sqrt {\frac {2 E _ {\mathrm{k}}}{m}} \\ & = \frac {1 . 6 \times 1 0 ^ {- 1 9} \times 0 . 5 5 \times 1 0 ^ {- 4}}{9 . 1 \times 1 0 ^ {- 3 1}} \sqrt {\frac {2 \times 1 . 2 \times 1 0 ^ {4} \times 1 . 6 \times 1 0 ^ {- 1 9}}{9 . 1 \times 1 0 ^ {- 3 1}}} \\ & = 6. 3 \times 1 0 ^ {1 4} (\mathrm {m/ s^ {2}}) \end{array}
$$

(3)电子的偏转为

$$
\begin{array}{r l} s & = \frac {1}{2} a t ^ {2} = \frac {1}{2} \frac {| e | B _ {\perp} l ^ {2}}{\sqrt {2 m E _ {\mathrm{k}}}} \\ & = \frac {1}{2} \times \frac {1 . 6 \times 1 0 ^ {- 1 9} \times 0 . 5 5 \times 1 0 ^ {- 4} \times (2 0 \times 1 0 ^ {- 2}) ^ {2}}{\sqrt {2 \times 9 . 1 \times 1 0 ^ {- 3 1} \times 1 . 2 \times 1 0 ^ {4} \times 1 . 6 \times 1 0 ^ {- 1 9}}} \\ & = 3. 0 \times 1 0 ^ {- 3} (\mathrm{m}) = 3. 0 (\mathrm{mm}) \end{array}
$$

(4) 因为是系统偏转, 故没有影响.

【讨论】电子在均匀磁场中运动时,其轨迹是螺旋线;在垂直于 B 的平面内,螺旋线投影的半径为

$$
\begin{array}{r l} R & = \frac {m v}{| e | B _ {\perp}} = \frac {\sqrt {2 m E _ {\mathrm{k}}}}{| e | B _ {\perp}} \\ & = \frac {\sqrt {2 \times 9 . 1 \times 1 0 ^ {- 3 1} \times 1 . 2 \times 1 0 ^ {4} \times 1 . 6 \times 1 0 ^ {- 1 9}}}{1 . 6 \times 1 0 ^ {- 1 9} \times 0 . 5 5 \times 1 0 ^ {- 4}} = 6. 7 (\mathrm{m}) \end{array}
$$

由于电子所走过的距离 $l = 20\mathrm{cm}$ ，比 $R$ 小得多，故在计算电子的偏转 $s$ 时，可以近似地将电子的加速度 $\pmb{a}$ 看作是方向不变的量而用公式 $s = \frac{1}{2} at^2$ 

或者,也可以用圆的方程

$$
x ^ {2} + (y - R) ^ {2} = R ^ {2}
$$

近似地计算 $s$ ，如下：

$$
\begin{array}{r l} s & = R - \sqrt {R ^ {2} - l ^ {2}} = R - R \sqrt {1 - \left(\frac {l}{R}\right) ^ {2}} \approx \frac {R}{2} \left(\frac {l}{R}\right) ^ {2} \\ & = \frac {l ^ {2}}{2 R} = \frac {(2 0 \times 1 0 ^ {- 2}) ^ {2}}{2 \times 6 . 7} = 3. 0 \times 1 0 ^ {- 3} (\mathrm{m}) \end{array}
$$

6.1.14 一质量为 $m$ 的粒子带有电荷量 $q$ , 以速度 $\pmb{v}$ 射入磁感强度为 $\pmb{B}$ 的均匀磁场中, $\pmb{v}$ 与 $\pmb{B}$ 垂直; 粒子穿过磁场后继续前进, 如图 6.1.14(1) 所示. 已知磁场在 $\pmb{v}$ 方向 (即图中 $x$ 方向) 上的宽度为 $l$ , 粒子从磁场出来后在 $x$ 方向上前进的距离为 $L - \frac{l}{2}$ , 试求粒子的偏转 $y$ ; 当 $l \ll \frac{mv}{qB}$ 时, 结果如何?

【解】因粒子进入磁场时,速度v与B垂直,故粒子的轨迹为圆,其半径为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5ea7981c4806e59993a4dd8eb134a9969760826679e9faa273bae3de3129e278.jpg)


$$
R = \frac {m v}{q B}\tag{1}
$$

图6.1.14(1)

以粒子进入磁场处为原点,取笛卡儿坐标系如图6.1.14(1)所示,这圆的方程为

$$
x ^ {2} + (y - R) ^ {2} = R ^ {2}\tag{2}
$$

粒子出磁场时，x=l，故得这时的偏转为

$$
y _ {1} = R - \sqrt {R ^ {2} - l ^ {2}} = \frac {m v}{q B} - \sqrt {\left(\frac {m v}{q B}\right) ^ {2} - l ^ {2}}\tag{3}
$$

粒子在磁场中因受洛伦兹力而偏转,但由于洛伦兹力不作功,故粒子的动能不变,即粒子的速率 v 不变.在射出磁场时,设粒子的速度与 x 轴的夹角为 $\theta$ ,如图 6.1.14(2) 所示,则它的速度分量便为

(4) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/30e43a5f8d095d238e911a53ca9bd4aa64cb1e6f34a0c22566bd8db7d992cf24.jpg)



图6.1.14(2)


$$
v _ {y} = v \sin \theta\tag{5}
$$

粒子出磁场后,不受外力,因而沿直线前进.当它沿 x 方向前进的距离为 $L - \frac{l}{2}$ 时,它的偏转便为

$$
y _ {2} = \left(L - \frac {l}{2}\right) \operatorname{tg} \theta\tag{6}
$$

由图6.1.14(2)可见

$$
\mathrm{tg} \theta = \frac {l}{\sqrt {R ^ {2} - l ^ {2}}}\tag{7}
$$

所以

$$
y _ {2} = \frac {\left(L - \frac {l}{2}\right) l}{\sqrt {R ^ {2} - l ^ {2}}} = \frac {\left(L - \frac {l}{2}\right) l}{\sqrt {\left(\frac {m v}{q B}\right) ^ {2} - l ^ {2}}}\tag{8}
$$

于是得所求的偏转为

$$
y = y _ {1} + y _ {2} = \frac {m v}{q B} - \sqrt {\left(\frac {m v}{q B}\right) ^ {2} - l ^ {2}} + \frac {\left(L - \frac {l}{2}\right) l}{\sqrt {\left(\frac {m v}{q B}\right) ^ {2} - l ^ {2}}}\tag{9}
$$

当 $l \ll \frac{mv}{qB}$ 时，可取近似如下：

$$
\begin{array}{r l} y _ {1} & = \frac {m v}{q B} - \sqrt {\left(\frac {m v}{q B}\right) ^ {2} - l ^ {2}} \approx \frac {m v}{q B} - \frac {m v}{q B} \left[ 1 - \frac {1}{2} \left(\frac {q B l}{m v}\right) ^ {2} \right] \\ & = \frac {1}{2} \frac {q B l ^ {2}}{m v} \\ y _ {2} & = \frac {\left(L - \frac {l}{2}\right) l}{\sqrt {\left(\frac {m v}{q B}\right) ^ {2} - l ^ {2}}} \approx \frac {q B \left(L - \frac {l}{2}\right) l}{m v} \\ y & = y _ {1} + y _ {2} = \frac {1}{2} \frac {q B l ^ {2}}{m v} + \frac {q B \left(L - \frac {l}{2}\right) l}{m v} \\ & = \frac {q B L l}{m v} \end{array}\tag{10}
$$

(11) 

所以

(12) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/005695cb743e769e40c21d0a3007b66ac13093e01f3d13e852fc9870009927cf.jpg)



图6.1.15


6.1.15 一质量为 $m$ 、电荷量为 $q$ 的粒子，在 $t = 0$ 时刻，以速度 $\pmb{v} = v_x\pmb{i} + v_z\pmb{k}$ 自原点 $O$ 出发，在均匀磁场里运动，磁场的磁感强度为 $\pmb{B} = B\pmb{k}$ ，如图6.1.15所示。（1）试求这粒子的运动轨迹；（2）在 $z = a$ 处，有一平面屏，试求这粒子达到屏上的位置。

【解】（1）粒子的运动方程为

$$
\begin{array}{r l} m \frac {\mathrm{d} ^ {2} \boldsymbol {r}}{\mathrm{d} t ^ {2}} & = q \boldsymbol {v} \times \boldsymbol {B} = q \left(\frac {\mathrm{d} x}{\mathrm{d} t} \boldsymbol {i} + \frac {\mathrm{d} y}{\mathrm{d} t} \boldsymbol {j} + \frac {\mathrm{d} z}{\mathrm{d} t} \boldsymbol {k}\right) \times B \boldsymbol {k} \\ & = q B \left(\frac {\mathrm{d} y}{\mathrm{d} t} \boldsymbol {i} - \frac {\mathrm{d} x}{\mathrm{d} t} \boldsymbol {j}\right) \end{array}\tag{1}
$$

其分量式为

$$
\frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} = \frac {q B}{m} \frac {\mathrm{d} y}{\mathrm{d} t}\tag{2}
$$

$$
\frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} = - \frac {q B}{m} \frac {\mathrm{d} x}{\mathrm{d} t}\tag{3}
$$

$$
\frac {\mathrm{d} ^ {2} z}{\mathrm{d} t ^ {2}} = 0\tag{4}
$$

利用初始条件 t=0 时，

$$
x _ {0} = 0, \quad y _ {0} = 0, \quad z _ {0} = 0\tag{5}
$$

$$
\left(\frac {\mathrm{d} x}{\mathrm{d} t}\right) _ {0} = v _ {x}, \quad \left(\frac {\mathrm{d} y}{\mathrm{d} t}\right) _ {0} = 0, \quad \left(\frac {\mathrm{d} z}{\mathrm{d} t}\right) _ {0} = v _ {z}\tag{6}
$$

解式(2)、(3)、(4)得

$$
x = \frac {m v _ {x}}{q B} \sin \left(\frac {q B}{m} t\right)\tag{7}
$$

$$
y = \frac {m v _ {x}}{q B} \cos \left(\frac {q B}{m} t\right) - \frac {m v _ {x}}{q B}\tag{8}
$$

$$
z = v _ {z} t\tag{9}
$$

它是一条螺旋线.由式(7)、(8)消去 $t$ 得

$$
x ^ {2} + \left(y + \frac {m v _ {x}}{q B}\right) ^ {2} = \left(\frac {m v _ {x}}{q B}\right) ^ {2}\tag{10}
$$

上列关系表明,这螺旋线的轴线与 z 轴平行,它在 x-y 平面内的投影是半径为 $\frac{mv_{x}}{qB}$ 的圆.

(2)螺旋线与 $z = a$ 平面的交点为

$$
x _ {a} = \frac {m v _ {x}}{q B} \sin \left(\frac {q B a}{m v _ {z}}\right)\tag{11}
$$

$$
y _ {a} = \frac {m v _ {x}}{q B} \cos \left(\frac {q B a}{m v _ {z}}\right) - \frac {m v _ {x}}{q B}\tag{12}
$$

$$
z _ {a} - a\tag{13}
$$

这便是粒子到达屏上的点.

6.1.16 一质量为 $m$ 、电荷量为 $q$ 的粒子，在磁感强度为 $\pmb{B}$ 的均匀磁场中运动，开始 $(t = 0)$ 时，它的位置和速度分别为 $\pmb{r}_0$ 和 $\pmb{v}_0$ 。试证明：它在 $t$ 时刻的位置为

$$
\begin{array}{r l} \boldsymbol {r} (t) & = \boldsymbol {r} _ {0} + (\boldsymbol {v} _ {0} \cdot \boldsymbol {e} _ {B}) \boldsymbol {e} _ {B} t + \frac {\sin \omega t}{\omega} [ \boldsymbol {e} _ {B} \times (\boldsymbol {v} _ {0} \times \boldsymbol {e} _ {B}) ] \\ & + \frac {1 - \cos \omega t}{\omega} \boldsymbol {v} _ {0} \times \boldsymbol {e} _ {B} \end{array}
$$

式中 $e_{B}$ 是 B 方向上的单位矢量, $\omega = qB/m$ . 它的轨迹是什么曲线?

【证】 粒子的运动方程为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f5c91ec99cba34672adbc5e7438f5f90d5cd10dc9a29acd720efcf083e6b60d3.jpg)


$$
m \frac {\mathrm{d} ^ {2} \boldsymbol {r}}{\mathrm{d} t ^ {2}} = q \boldsymbol {v} \times \boldsymbol {B} = q \frac {\mathrm{d} \boldsymbol {r}}{\mathrm{d} t} \times \boldsymbol {B}\tag{1}
$$

以 $r_0$ 的尾端为原点 0, 取笛卡儿坐标系, 使 $\pmb{B}$ 沿 $z$ 轴, 并使 $\pmb{v}_0$ 在 $z - x$ 平面内, 如图 6.1.16 所示. 这样, 式(1)便化为

图6.1.16

$$
\frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} \boldsymbol {i} + \frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} \boldsymbol {j} + \frac {\mathrm{d} ^ {2} z}{\mathrm{d} t ^ {2}} \boldsymbol {k} = \omega \left(\frac {\mathrm{d} x}{\mathrm{d} t} \boldsymbol {i} + \frac {\mathrm{d} y}{\mathrm{d} t} \boldsymbol {j} + \frac {\mathrm{d} z}{\mathrm{d} t} \boldsymbol {k}\right) \times \boldsymbol {k}
$$

$$
= \omega \left(\frac {\mathrm{d} y}{\mathrm{d} t} \boldsymbol {i} - \frac {\mathrm{d} x}{\mathrm{d} t} \boldsymbol {j}\right)\tag{2}
$$

式中

$$
\omega = \frac {q B}{m}\tag{3}
$$

式(2)的分量式为

$$
\frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} = \omega \frac {\mathrm{dy}}{\mathrm{dt}}\tag{4}
$$

$$
\frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} = - \omega \frac {\mathrm{d} x}{\mathrm{d} t}\tag{5}
$$

$$
\frac {\mathrm{d} ^ {2} z}{\mathrm{d} t ^ {2}} = 0\tag{6}
$$

积分，并利用初始条件： $t = 0$ 时， $x_0 = y_0 = z_0 = 0,\left(\frac{\mathrm{d}x}{\mathrm{d}t}\right)_0 = v_{0,x},\left(\frac{\mathrm{dy}}{\mathrm{dt}}\right)_0 = 0,\left(\frac{\mathrm{dz}}{\mathrm{dt}}\right)_0 = v_{0z}$ ，便得

$$
\frac {\mathrm{d} x}{\mathrm{d} t} = \omega y + v _ {0, x}\tag{7}
$$

$$
\frac {\mathrm{d} y}{\mathrm{d} t} = - \omega x\tag{8}
$$

$$
\frac {\mathrm{d} z}{\mathrm{d} t} = v _ {0 z}\tag{9}
$$

将式(8)代入式(4)得

$$
\frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} + \omega^ {2} x = 0\tag{10}
$$

利用初始条件,解得

$$
x = \frac {v _ {0 , x}}{\omega} \sin \omega t\tag{11}
$$

将式(7)代入式(5)得

$$
\frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} + \omega^ {2} y + \omega v _ {0, x} = 0\tag{12}
$$

利用初始条件,解得

$$
y = - \frac {v _ {0 , x}}{\omega} + \frac {v _ {0 , x}}{\omega} \cos \omega t\tag{13}
$$

利用初始条件,解式(9)得

$$
z = v _ {0 z} t\tag{14}
$$

将式(11)、(13)和(14)写成矢量形成，并考虑 t=0 时， $r=r_{0}$ ，便得

$$
\boldsymbol {r} = \boldsymbol {r} _ {0} + x \boldsymbol {i} + y \boldsymbol {j} + z \boldsymbol {k}
$$

$$
= \boldsymbol {r} _ {0} + \frac {v _ {0 x}}{\omega} \sin \omega t \boldsymbol {i} + \left(- \frac {v _ {0 x}}{\omega} + \frac {v _ {0 x}}{\omega} \cos \omega t\right) \boldsymbol {j} + v _ {0: t} \boldsymbol {k}\tag{15}
$$

式中 $v_{0}, i$ 是 $\pmb{v}_0$ 在 $x$ 方向上的分量，可以化成

$$
v _ {0, x} \boldsymbol {i} = (\boldsymbol {e} _ {B} \times \boldsymbol {v} _ {0}) \times \boldsymbol {e} _ {B}\tag{16}
$$

$v_{0}, j$ 可以化成

$$
v _ {0, x} \boldsymbol {j} = \boldsymbol {e} _ {B} \times \boldsymbol {v} _ {0}\tag{17}
$$

$v_{0}$ 是 $v_{0}$ 在 z 方向上的分量，可以化成

$$
v _ {0} \boldsymbol {k} = (\boldsymbol {v} _ {0} \cdot \boldsymbol {e} _ {B}) \boldsymbol {e} _ {B}\tag{18}
$$

将式(16)、(17)、(18)代入式(15)，便得式(1)的解，即粒子在 t 时刻的位置为

$$
\begin{array}{r l} \boldsymbol {r} & = \boldsymbol {r} _ {0} + \frac {1}{\omega} \sin \omega t (\boldsymbol {e} _ {B} \times \boldsymbol {v} _ {0}) \times \boldsymbol {e} _ {B} - \frac {1}{\omega} (1 - \cos \omega t) \boldsymbol {e} _ {B} \times \boldsymbol {v} _ {0} \\ & + (\boldsymbol {v} _ {0} \cdot \boldsymbol {e} _ {B}) t \boldsymbol {e} _ {B} \\ & = \boldsymbol {r} _ {0} + (\boldsymbol {v} _ {0} \cdot \boldsymbol {e} _ {B}) \boldsymbol {e} _ {B} t + \frac {\sin \omega t}{\omega} [ \boldsymbol {e} _ {B} \times (\boldsymbol {v} _ {0} \times \boldsymbol {e} _ {B}) ] \\ & + \frac {1 - \cos \omega t}{\omega} \boldsymbol {v} _ {0} \times \boldsymbol {e} _ {B} \end{array}\tag{19}
$$

由式(11)、(13)和(14)可见,粒子的轨迹是轴线平行于z轴(B线)的螺旋线.

【别证】将题给的 $r$ 对 $t$ 求导得

$$
\frac {\mathrm{d} \boldsymbol {r}}{\mathrm{d} t} = (\boldsymbol {v} _ {0} \cdot \boldsymbol {e} _ {B}) \boldsymbol {e} _ {B} + \cos \omega t [ \boldsymbol {e} _ {B} \times (\boldsymbol {v} _ {0} \times \boldsymbol {e} _ {B}) ] + \sin \omega t \boldsymbol {v} _ {0} \times \boldsymbol {e} _ {B}\tag{20}
$$

$$
\frac {\mathrm{d} ^ {2} \boldsymbol {r}}{\mathrm{d} t ^ {2}} = - \omega \sin \omega t [ \boldsymbol {e} _ {B} \times (\boldsymbol {v} _ {0} \times \boldsymbol {e} _ {B}) ] + \omega \cos \omega t \boldsymbol {v} _ {0} \times \boldsymbol {e} _ {B}\tag{21}
$$

由式(21)得

$$
m \frac {\mathrm{d} ^ {2} \boldsymbol {r}}{\mathrm{d} t ^ {2}} = - q \sin \omega t \boldsymbol {e} _ {B} \times (\boldsymbol {v} _ {0} \times \boldsymbol {B}) + q \cos \omega t \boldsymbol {v} _ {0} \times \boldsymbol {B}\tag{22}
$$

由式(20)得

$$
q \frac {\mathrm{d} \boldsymbol {r}}{\mathrm{d} t} \times \boldsymbol {B} = - q \sin \omega t \boldsymbol {e} _ {B} \times (\boldsymbol {v} _ {0} \times \boldsymbol {B}) + q \cos \omega t \boldsymbol {v} _ {0} \times \boldsymbol {B}\tag{23}
$$

由式(22)和(23)可见,题给的 r 满足粒子的运动方程(1),即 r 是式(1)的解,故 r 是粒子在 t 时刻的位置.

6.1.17 电荷量为 q 的点电荷在磁感强度为 B 的均匀磁场中固定不动；一电子质量为 m、电荷量为 e，在 q 的库仑力作用下，绕 q 作匀速圆周运动，轨道平面与 B 垂直。已知 q 作用在电子上的力的大小等于 B 作用在电子上的力的大小的 N 倍。（1）试求电子的角速度 $\omega$ ；（2）已知 $m = 9.11 \times 10^{-31} ~kg, e = -1.60 \times 10^{-19} ~C$ ，当 $B = 4.27 \times 10^{3} ~Gs, N = 100$ 时，求 $\omega$ 的值。

【解】(1)电子受的库仑力为

$$
\boldsymbol {F} _ {e} = \frac {1}{4 \pi \varepsilon_ {0}} \frac {e q}{r ^ {2}} \boldsymbol {e} _ {r}\tag{1}
$$

电子受的洛伦兹力为

$$
\boldsymbol {F} _ {m} = e \boldsymbol {v} \times \boldsymbol {B}\tag{2}
$$

当 $F_{e}$ 与 $F_{m}$ 方向相同时，使电子环绕 $q$ 运动的力的大小为

$$
F _ {+} = F _ {e} + F _ {m} = (N + 1) | e | v _ {+} B\tag{3}
$$

由电子的运动方程

$$
m \frac {v ^ {2}}{r} = F\tag{4}
$$

得这时电子环绕 q 运动的角速度为

$$
\omega_ {+} = \frac {v _ {+}}{r _ {+}} = \frac {(N + 1) | e | B}{m}\tag{5}
$$

设 $N > 1$ ，则当 $\pmb{F}_{e}$ 与 $\pmb{F}_{m}$ 方向相反时，使电子环绕 $q$ 运动的力的大小就是

$$
F _ {-} = F _ {e} - F _ {m} = (N - 1) | e | v _ {-} B\tag{6}
$$

故这时电子环绕 $q$ 运动的角速度为

$$
\omega_ {-} = \frac {v _ {-}}{r _ {-}} = \frac {(N - 1) | e | B}{m}\tag{7}
$$

(2)将数值分别代入式(5)和式(7)，便得所求的 $\omega$ 值分别如下：

$$
\begin{array}{r l} \omega_ {+} & = \frac {(1 0 0 + 1) \times 1 . 6 0 \times 1 0 ^ {- 1 9} \times 4 . 2 7 \times 1 0 ^ {3} \times 1 0 ^ {- 4}}{9 . 1 1 \times 1 0 ^ {- 3 1}} \\ & = 7. 5 7 \times 1 0 ^ {1 2} (\mathrm{rad/s}) \\ \omega_ {-} & = \frac {(1 0 0 - 1) \times 1 . 6 0 \times 1 0 ^ {- 1 9} \times 4 . 2 7 \times 1 0 ^ {3} \times 1 0 ^ {- 4}}{9 . 1 1 \times 1 0 ^ {- 3 1}} \\ & = 7. 4 2 \times 1 0 ^ {1 2} (\mathrm{rad/s}) \end{array}\tag{8}
$$

(9) 

6.1.18 已知 $\alpha$ 粒子的质量为 $m = 6.7 \times 10^{-27} \mathrm{~kg}$ , 电荷量为 $e = 3.2 \times 10^{-19} \mathrm{C}$ . 它在 $B = 1.2 \mathrm{T}$ 的均匀磁场中沿半径为 $45 \mathrm{~cm}$ 的圆周运动. (1) 试求它的速率 $v$ 、动能 $E_{\mathrm{k}}$ 和回旋周期 $T$ ; (2) 若它原来是静止的, 试问要经过多高的电压加速, 它才能达到这个速率?

【解】（1）由洛伦兹力公式

$$
\boldsymbol {F} = e \boldsymbol {v} \times \boldsymbol {B}\tag{1}
$$

和运动方程

$$
m \frac {v ^ {2}}{r} = e v B\tag{2}
$$

得 $\alpha$ 粒子的速率为

$$
v = \frac {r e B}{m} = \frac {4 5 \times 1 0 ^ {- 2} \times 3 . 2 \times 1 0 ^ {- 1 9} \times 1 . 2}{6 . 7 \times 1 0 ^ {- 2 7}} = 2. 6 \times 1 0 ^ {7} (\mathrm{m/s})\tag{3}
$$

动能为

$$
\begin{array}{r l} E _ {\mathrm{k}} & = \frac {1}{2} m v ^ {2} = \frac {1}{2} \times 6. 7 \times 1 0 ^ {- 2 7} \times (2. 6 \times 1 0 ^ {7}) ^ {2} \\ & = 2. 3 \times 1 0 ^ {- 1 2} (\mathrm{J}) = 1 4 (\mathrm{MeV}) \end{array}\tag{4}
$$

回旋周期为

$$
T = \frac {2 \pi m}{e B} = \frac {2 \pi \times 6 . 7 \times 1 0 ^ {- 2 7}}{3 . 2 \times 1 0 ^ {- 1 9} \times 1 . 2} = 1. 1 \times 1 0 ^ {- 7} (\text { 秒 })\tag{5}
$$

(2)所需电压为

$$
U = \frac {E _ {\mathrm{k}}}{e} = \frac {m v ^ {2}}{2 e} = \frac {6 . 7 \times 1 0 ^ {- 2 7} \times (2 . 6 \times 1 0 ^ {7}) ^ {2}}{2 \times 3 . 2 \times 1 0 ^ {- 1 9}}
$$

$$
= 7. 1 \times 1 0 ^ {6} (\mathrm{V}) = 7. 1 (\mathrm{MV})\tag{6}
$$

6.1.19 已知氘核的质量比质子大一倍,电荷量与质子相同; $\alpha$ 粒子的质量是质子质量的四倍,电荷量是质子的两倍.(1)试问静止的质子、氘核和 $\alpha$ 粒子经过相同的电压加速后,它们的动能之比是多少?(2)当它们经过这样加速后进入同一均匀磁场,它们都作圆周运动,测得质子圆轨道的半径为 $10\mathrm{cm}$ . 试问氘核和 $\alpha$ 粒子轨道的半径各是多少?

【解】（1）由公式 $E_{k} = qU$ 可知：质子、氘核、 $\alpha$ 粒子的动能之比为

$$
E _ {p}: E _ {d}: E _ {\alpha} = q _ {p}: q _ {d}: q _ {\alpha} = 1: 1: 2\tag{1}
$$

(2)质子的轨道半径为

$$
R _ {p} = \frac {\sqrt {2 m _ {p} E _ {p}}}{q _ {p} B} - 1 0 \mathrm{cm}\tag{2}
$$

氘核和 $\alpha$ 粒子的轨道半径分别为

$$
R _ {d} = \frac {\sqrt {2 (2 m _ {p}) E _ {p}}}{q _ {p} B} = \sqrt {2} R _ {p} = 1 4 (\mathrm{cm})\tag{3}
$$

$$
R _ {\alpha} = \frac {\sqrt {2 (4 m _ {p}) (2 E _ {p})}}{2 q _ {p} B} = \sqrt {2} R _ {p} = 1 4 (\mathrm{cm})\tag{4}
$$

6.1.20 在垂直于均匀磁场的平面内, $\alpha$ 粒子和氘核以相同的初动能沿相同的方向先后从同一点 $P$ 出发, 它们走过半圆形轨道如图 6.1.20 所示, 所用的时间分别是 $t_{c}$ 和 $t_{d}$ . 已知 $\alpha$ 粒子的质量比氘核大一倍, 电荷量也比氘核大一倍. 试判断图中到达 $S$ 点的是哪一个? 并求比值 $t_{o} / t_{d}$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/db6ca281dca413d44ab307308a8e35a191007f8be4c82da7cc85111158339891.jpg)


【解】设粒子的质量、电荷量和速率分别为 m、q 和 v，则运动方程为

$$
m \frac {v ^ {2}}{R} = q v B\tag{1}
$$

图6.1.20

式中 R 为粒子轨道半径, B 为磁场的磁感强度. 于是得

$$
R = \frac {m v}{q B}\tag{2}
$$

以下标 $\alpha$ 和 $d$ 分别表示 $\alpha$ 粒子和氘核的有关量，则有

$$
\frac {R _ {a}}{R _ {d}} = \frac {m _ {a} v _ {a}}{q _ {a} B} \cdot \frac {q _ {d} B}{m _ {d} v _ {d}} = \frac {m _ {a}}{m _ {d}} \frac {v _ {a}}{v _ {d}} \frac {q _ {d}}{q _ {a}}\tag{3}
$$

题给

$$
\frac {1}{2} m _ {a} v _ {a} ^ {2} = \frac {1}{2} m _ {d} v _ {d} ^ {2}\tag{4}
$$

所以

$$
\frac {R _ {\alpha}}{R _ {d}} = \frac {m _ {\alpha}}{m _ {d}} \sqrt {\frac {m _ {d}}{m _ {\alpha}}} \frac {q _ {d}}{q _ {\alpha}} = \sqrt {\frac {m _ {\alpha}}{m _ {d}}} \frac {q _ {d}}{q _ {\alpha}} = \sqrt {2} \times \frac {1}{2} = \frac {\sqrt {2}}{2}\tag{5}
$$

故知到达 S 点的是 $\alpha$ 粒子.

$$
\frac {t _ {a}}{t _ {d}} = \frac {R _ {a}}{R _ {d}} \frac {v _ {d}}{v _ {a}} = \frac {m _ {c}}{m _ {d}} \frac {q _ {d}}{q _ {a}} = 2 \times \frac {1}{2} = 1\tag{6}
$$

6.1.21 一氘核在 $B = 1.5\mathrm{T}$ 的均匀磁场中运动，轨迹是半径为 $40\mathrm{cm}$ 的圆周。已知氘核的质量为 $3.34\times 10^{-27}\mathrm{kg}$ ，电荷量为 $1.60\times 10^{-19}\mathrm{C}$ 。（1）试求氘核的速度和走半圈所需的时间；(2)需要多高的电压才能把氘核从静止加速到这个速度？

【解】（1）氘核的速度为

$$
\begin{array}{r l} v & = \frac {R q B}{m} = \frac {4 0 \times 1 0 ^ {- 2} \times 1 . 6 0 \times 1 0 ^ {- 1 9} \times 1 . 5}{3 . 3 4 \times 1 0 ^ {- 2 7}} \\ & = 2. 9 \times 1 0 ^ {7} (\mathrm{m/s}) \end{array}
$$

走半圈所需的时间为

$$
t = \frac {T}{2} = \frac {\pi m}{q B} = \frac {3 . 3 4 \times 1 0 ^ {- 2 7} \pi}{1 . 6 0 \times 1 0 ^ {- 1 9} \times 1 . 5} = 4. 4 \times 1 0 ^ {- 8} (\mathrm{s})
$$

(2)所需电压为

$$
\begin{array}{r l} U & = \frac {m v ^ {2}}{2 q} = \frac {q (R B) ^ {2}}{2 m} = \frac {1 . 6 \times 1 0 ^ {- 1 9} \times (4 0 \times 1 0 ^ {- 2} \times 1 . 5) ^ {2}}{2 \times 3 . 3 4 \times 1 0 ^ {- 2 7}} \\ & = 8. 6 \times 1 0 ^ {6} (\mathrm{V}) \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5fc6d44af72c0ba40edce89f55e753dc82bf79e7fb988c9829dec58e6c3bcb51.jpg)



图6.1.22


6.1.22 一质谱仪的构造原理如图6.1.22所示，离子源 $S$ 产生质量为 $m$ 、电荷量为 $q$ 的离子，离子产生出来时速度很小，可以看作是静止的；离子产生出来后经过电压 $U$ 加速，进入磁感强度为 $B$ 的均匀磁场，沿着半圆周运动而到达记录它的底片 $P$ 上，测得它在 $P$ 上的位置到入口处的距离为 $x$ . (1)试证明这粒子的质量为 $m = \frac{qB^2}{8U} x^2$ ; (2)用钠离子做实验，得到如下数据： $U = 705\mathrm{V}, B = 3580\mathrm{Gs}, x = 10\mathrm{cm}$ . 试求钠离子的荷质比 $q / m$ .

【解】（1）因离子走的是半圆周，故 $x$ 是直径.由运动方程

$$
m \frac {v ^ {2}}{r} = q v B\tag{1}
$$

和能量关系

$$
\frac {1}{2} m v ^ {2} = q U\tag{2}
$$

得

$$
x = 2 r = \frac {2 m v}{q B} = \frac {2 m}{q B} \sqrt {\frac {2 q U}{m}} = \frac {2}{B} \sqrt {\frac {2 m U}{q}}\tag{3}
$$

所以

$$
m = \frac {q B ^ {2}}{8 U} x ^ {2}\tag{+}
$$

(2)钠离子的荷质比为

$$
\begin{array}{r l} \frac {q}{m} & = \frac {8 U}{B ^ {2} x ^ {2}} = \frac {8 \times 7 0 5}{(3 5 8 0 \times 1 0 ^ {- 4} \times 1 0 \times 1 0 ^ {- 2}) ^ {2}} \\ & = 4. 4 \times 1 0 ^ {6} (\mathrm{C/kg}) \end{array}\tag{5}
$$

6.1.23 已知碘离子所带电荷量为 $q=1.6\times10^{-19}C$ ，它在 $B=4.5\times10^{-2}T$ 的均匀磁场中作圆周运动时，回旋七周的时间为 $1.29\times10^{-3}s$ 。试求碘离子的质量。

【解】 由运动方程

$$
m \frac {v ^ {2}}{R} = q v B\tag{1}
$$

和

$$
T = \frac {2 \pi R}{v}\tag{2}
$$

得碘离子的质量为

$$
\begin{array}{r l} m & = \frac {q B T}{2 \pi} = \frac {1 . 6 \times 1 0 ^ {- 1 9} \times 4 . 5 \times 1 0 ^ {- 2} \times 1 . 2 9 \times 1 0 ^ {- 3}}{2 \pi \times 7} \\ & = 2. 1 \times 1 0 ^ {- 2 5} (\mathrm{kg}) \end{array}\tag{3}
$$

6.1.24 在粒子的速度比光速 c 小得多的情况下, 粒子的质量可当作与速度无关. 试证明: 这时 D 形回旋加速器交变电压的频率与带电粒子作圆周运动的半径无关.

【证】由粒子的运动方程

$$
m \frac {v ^ {2}}{R} = q v B\tag{1}
$$

得粒子的回旋周期为

$$
T = \frac {2 \pi R}{v} = \frac {2 \pi m}{q B}\tag{2}
$$

由此可见，当 $m$ 与 $\pmb{v}$ 无关时， $T$ 便与 $\pmb{v}$ 无关，也与圆周运动的半径 $R$ 无关。因此，使粒子加速的交变电压的频率便与粒子运动轨迹的半径无关。

6.1.25 回旋加速器的构造原理如图 6.1.25 所示, 用它加速电荷量为 q、质量为 m 的粒子, 其加速电压 U 和磁感强度 B 均为已知. 设粒子开始时动能很小, 可略去不计. 试问将粒子加速到动能为 $E_{k}$ , 需要多长时间?

【解】 由运动方程

$$
m \frac {v ^ {2}}{R} = q v B\tag{1}
$$

得粒子回旋的周期为

$$
T = \frac {2 \pi R}{v} = \frac {2 \pi m}{q B}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/31cd04af8aa1311f25a8e0368b713ca35decb3e1777ab4416a5e382ceee33981.jpg)


(2) 


图6.1.25


粒子在加速器里，每走半圈加速一次，每次增加动能 $qU$ ，故单位时间增加的动能为

$$
\frac {q U}{T / 2} = \frac {2 q U}{T} = \frac {q ^ {2} U B}{\pi m}\tag{3}
$$

于是得所求的时间为

$$
t = \frac {E _ {\mathrm{k}}}{q ^ {2} U B / \pi m} = \frac {\pi m E _ {\mathrm{k}}}{q ^ {2} U B}\tag{4}
$$

6.1.26 一回旋加速器 $D$ 形电极圆周的最大半径为 $60\mathrm{cm}$ ，用它来加速质量为 $1.67 \times 10^{-27}\mathrm{kg}$ 、电荷量为 $1.6 \times 10^{-19}\mathrm{C}$ 的质子，要把质子从静止加速到 $4.0\mathrm{MeV}$ 的能量。(1)试求所需的磁感强度 $\pmb{B}$ 的值；(2)设两 D 形电极间的距离为 $1.0\mathrm{cm}$ ，加速电压为 $2.0 \times 10^{4}\mathrm{V}$ ，其间电场是均匀的，试求加速到上述能量所需的时间。

【解】（1）由运动方程

$$
m \frac {v ^ {2}}{R} = q v B\tag{1}
$$

和动能

$$
E _ {\mathrm{k}} = \frac {1}{2} m v ^ {2}\tag{2}
$$

得所需的磁感强度为

$$
\begin{array}{r l} B & = \frac {\sqrt {2 m E _ {\mathrm{k}}}}{R q} = \frac {\sqrt {2 \times 1 . 6 7 \times 1 0 ^ {- 2 7} \times 4 . 0 \times 1 0 ^ {6} \times 1 . 6 \times 1 0 ^ {- 1 9}}}{6 0 \times 1 0 ^ {- 2} \times 1 . 6 \times 1 0 ^ {- 1 9}} \\ & = 0. 4 8 (\mathrm{T}) \end{array}\tag{3}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a82700610eab76603fe33ac31091a4712512bf022a9866fa3ec438936b90b74a.jpg)



图6.1.26


(2) 求时间 $t$ 如图6.1.26, 带电粒子在回旋加速器中的运动可分为两部分: 一部分是经过D形电极间的匀加速直线运动, 设所需的时间为 $t_1$ ; 另一部分是在D形盒内的匀速圆周运动, 设所需时间为 $t_2$ . 则把粒子加速到 $E_k$ 所需的时间便为

$$
t = t _ {1} + t _ {2}\tag{4}
$$

粒子在两极间是匀加速直线运动,进入D形盒内,速度方向改变,但速度大小不变.粒子每走半圈,便经过两极间被加速一次,每次加速,它的动能便增加qU.因开始时速度为零,故在它的动能达到 $E_{k}$ 时,经过两极间加速的次数便为

$$
n = \frac {E _ {\mathrm{k}}}{q U}\tag{5}
$$

在两极间走过的距离为

$$
n d = \frac {1}{2} a t _ {1} ^ {2} = \frac {1}{2} \frac {q E}{m} t _ {1} ^ {2} = \frac {1}{2} \frac {q U}{m d} t _ {1} ^ {2}\tag{6}
$$

所以

$$
t _ {1} = \sqrt {\frac {2 m n}{q U}} d = \frac {\sqrt {2 m E _ {k}}}{q U} d\tag{7}
$$

由于粒子经过两极间 $n$ 次, 故它在 D 形盒内的半圈匀速运动便有 $(n - 1)$ 次. 因为圆周运动的周期为

$$
T = \frac {2 \pi m}{q B}\tag{8}
$$

于是便得

$$
t _ {2} = (n - 1) \frac {T}{2} = \frac {(n - 1) \pi m}{q B}\tag{9}
$$

将题给数据分别代入式(5)、(7)和(9)，便得

$$
n = \frac {E _ {\mathrm{k}}}{q U} = \frac {4 . 0 \times 1 0 ^ {6} \times 1 . 6 \times 1 0 ^ {- 1 9}}{1 . 6 \times 1 0 ^ {- 1 9} \times 2 . 0 \times 1 0 ^ {4}} = 2 0 0\tag{10}
$$

$$
\begin{array}{r l} t _ {1} & = \frac {\sqrt {2 m E _ {\mathrm{k}}}}{q U} d \\ & = \frac {\sqrt {2 \times 1 . 6 7 \times 1 0 ^ {- 2 7} \times 4 . 0 \times 1 0 ^ {6} \times 1 . 6 \times 1 0 ^ {- 1 9}}}{1 . 6 \times 1 0 ^ {- 1 9} \times 2 . 0 \times 1 0 ^ {4}} \times 1. 0 \times 1 0 ^ {- 2} \\ & = 1. 4 \times 1 0 ^ {- 7} (\mathrm{s}) \end{array}\tag{11}
$$

$$
t _ {2} = \frac {(n - 1) \pi m}{q B} = \frac {(2 0 0 - 1) \pi \times 1 . 6 7 \times 1 0 ^ {- 2 7}}{1 . 6 \times 1 0 ^ {- 1 9} \times 0 . 4 8} = 1. 4 \times 1 0 ^ {- 5} (\mathrm{s})\tag{12}
$$

最后得所需时间为

$$
t = t _ {1} + t _ {2} = 1. 4 \times 1 0 ^ {- 7} + 1. 4 \times 1 0 ^ {- 5} = 1. 4 \times 1 0 ^ {- 5} (\mathrm{s})\tag{13}
$$

【别解】（1）如前面的式(3).

(2)因为质子的回旋周期 $T$ 与速度无关,故它的回旋周期都相同;它在每个周期里被加速两次,故每个周期所获得的能量为

$$
E = 2 U = 2 \times 2. 0 \times 1 0 ^ {4} = 4. 0 \times 1 0 ^ {4} (\mathrm{eV})\tag{14}
$$

于是加速到 4.0MeV 所需的周期便为

$$
N = \frac {4 . 0 \times 1 0 ^ {6}}{4 . 0 \times 1 0 ^ {4}} = 1 0 0\tag{15}
$$

因两极间的距离 $d = 1.0\mathrm{cm}$ 比最大回旋半径 $60\mathrm{cm}$ 小很多，故质子经过两极间的时间可略去不计，于是得所求时间为

$$
\begin{array}{r l} t & = N T = N \frac {2 \pi m}{q B} = 1 0 0 \times \frac {2 \pi \times 1 . 6 7 \times 1 0 ^ {- 2 7}}{1 . 6 \times 1 0 ^ {- 1 9} \times 0 . 4 8} \\ & = 1. 4 \times 1 0 ^ {- 5} (s) \end{array}\tag{16}
$$

【讨论】比较式(11)和(12)可以看出,略去 $t_{2}$ 的作法是对的.

6.1.27 一电子在 $B = 20\mathrm{Gs}$ 的磁场里沿半径为 $R = 20\mathrm{cm}$ 的螺旋线运动, 螺距为 $h = 5.0\mathrm{cm}$ , 如图6.1.27所示. 已知电子的荷质比为 $\left|e\right| / m = 1.76 \times 10^{11}\mathrm{C/kg}$ , 试求这电子的速度.

【解】将电子的速度 $\pmb{v}$ 分解为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c890b9393cff0aaa9164af2f9eb18549a37174680169b8d9c263afd879ac81f5.jpg)


$$
\boldsymbol {v} = \boldsymbol {v} _ {\parallel} + \boldsymbol {v} _ {\perp}\tag{1}
$$

式中 $v_{\perp}$ 和 $v_{\perp}$ 分别为平行于和垂直于磁感强度 B 的分量. 电子所受的洛伦兹力的大小为

图6.1.27

$$
F = | \textbf {e v} \times \textbf {B} | = | \textbf {e} | v _ {\perp} B\tag{2}
$$

由运动方程

$$
m \frac {v _ {\perp} ^ {2}}{R} = F = | e | v _ {\perp} B\tag{3}
$$

得

$$
\begin{array}{r l} v _ {\perp} & = R B \frac {| e |}{m} = 2 0 \times 1 0 ^ {- 2} \times 2 0 \times 1 0 ^ {- 4} \times 1. 7 6 \times 1 0 ^ {1 1} \\ & = 7. 0 4 \times 1 0 ^ {7} (\mathrm{m/s}) \end{array}\tag{4}
$$

又由螺距公式

$$
h = v _ {/ /} T = \frac {2 \pi m v}{| e | B}\tag{5}
$$

得

$$
\begin{array}{r l} v _ {\parallel} & = \frac {h B | e |}{2 \pi m} = \frac {5 . 0 \times 1 0 ^ {- 2} \times 2 0 \times 1 0 ^ {- 4}}{2 \pi} \times 1. 7 6 \times 1 0 ^ {1 1} \\ & = 2. 8 0 \times 1 0 ^ {6} (\mathrm{m/s}) \end{array}\tag{6}
$$

于是得电子速度 $\pmb{v}$ 的大小为


图6.1.28


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/1008a2922dd8e0faf56b6769afcf65246f00072a288ff6abe790a7dd86033567.jpg)


$$
\begin{array}{r l} v & = \sqrt {v _ {\parallel} ^ {2} + v _ {\perp} ^ {2}} = \sqrt {7 . 0 4 ^ {2} + 0 . 2 8 ^ {2}} \times 1 0 ^ {7} \\ & = 7. 0 \times 1 0 ^ {7} (\mathrm{m/s}) \end{array}\tag{7}
$$

6.1.28 动能为 2000eV 的正电子在 B=1000Gs 的均匀磁场中运动, 它的速度 v 与 B 成 $89^{\circ}$ 角, 所以它的轨迹是一条螺旋线, 如图 6.1.28 所示. 已知正电子的质量为 $m=9.11\times10^{-31}kg$ , 电荷量为 $e=1.60\times10^{-19}C$ . 试求这螺旋运动的周期 T、半径 r 和螺距 p.

【解】将正电子的速度v分解为平行于磁场的分量 $v_{1}$ 和垂直于磁场的分量 $v_{\perp}$ :

$$
v _ {j} = v \cos 8 9 ^ {\circ}, \quad v _ {j} = v \sin 8 9 ^ {\circ}\tag{1}
$$

使电子做回旋运动的洛伦兹力的大小为

$$
F = e \mid \boldsymbol {v} \times \boldsymbol {B} \mid = e v _ {\perp} B = e v B \sin 8 9 ^ {\circ}\tag{2}
$$

由运动方程

$$
m \frac {v _ {\perp} ^ {2}}{r} = F = e v _ {\perp} B\tag{3}
$$

和动能

$$
E _ {\mathrm{k}} = \frac {1}{2} m v ^ {2}\tag{4}
$$

得周期为

$$
\begin{array}{r l} T & = \frac {2 \pi r}{v _ {\perp}} = \frac {2 \pi m}{e B} = \frac {2 \pi \times 9 . 1 1 \times 1 0 ^ {- 3 1}}{1 . 6 0 \times 1 0 ^ {- 1 9} \times 1 0 0 0 \times 1 0 ^ {- 4}} \\ & = 3. 6 \times 1 0 ^ {- 1 0} (\mathrm{s}) \end{array}\tag{5}
$$

半径为

$$
r = \frac {m v _ {\perp}}{e B} = \frac {\sin 8 9 ^ {\circ}}{e B} \sqrt {2 m E _ {\mathrm{k}}} = \frac {0 . 9 9 9 8}{1 . 6 0 \times 1 0 ^ {- 1 9} \times 1 0 0 0 \times 1 0 ^ {- 4}}
$$

$$
\begin{array}{r l} & \times \sqrt {2 \times 9 . 1 1 \times 1 0 ^ {- 1 9} \times 2 0 0 0 \times 1 . 6 0 \times 1 0 ^ {- 1 9}} \\ & = 1. 5 \times 1 0 ^ {- 3} (\mathrm{m}) \end{array}
$$

螺距为

(6) 

$$
\begin{array}{r l} p & = v _ {\parallel} T = v T \cos 8 9 ^ {\circ} = \sqrt {\frac {2 E _ {k}}{m}} T \cos 8 9 ^ {\circ} \\ & = \sqrt {\frac {2 \times 2 0 0 0 \times 1 . 6 \times 1 0 ^ {- 1 9}}{9 . 1 1 \times 1 0 ^ {- 3 1}}} \times 3. 6 \times 1 0 ^ {- 1 0} \times 0. 0 1 7 4 5 \\ & = 1. 7 \times 1 0 ^ {- 4} (\mathrm{m}) \end{array}\tag{7}
$$

6.1.29 粒子速度选择器(或称滤速器)是由互相正交的均匀电场 E 和均匀磁场 B 构成的, 各种速度的粒子射入时, 速度都与 E 正交, 也都与 B 正交, 如图 6.1.29 所示.(1)试说明: 当入口和出口都很小时, 只有速度的大小 $v_{c}$ 为某一值的粒子才能通过, 而其他的便都不能通过.(2)当 $E = 3.0 V/m, B = 10 G s$ 时, 试计算通过的粒子的速率 $v_{c}$ . (3)带电粒子的电荷量 q 的大小有没有影响? (4)带电粒子的电荷是正还是负有没有影响?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5873ade5313b76f6360b629c8c662d2f56416445b606d3e3cc8bae4a7b9ff678.jpg)



图6.1.29


【解】（1）电荷量为 q 的粒子以速度 v 在速度选择器中运动时，它受到的力为

$$
\begin{array}{r l} \boldsymbol {F} & = \boldsymbol {F} _ {e} + \boldsymbol {F} _ {m} = q \boldsymbol {E} + q \boldsymbol {v} \times \boldsymbol {B} \\ & = q (\boldsymbol {E} + \boldsymbol {v} \times B) \end{array}\tag{1}
$$

当

$$
\boldsymbol {E} + \boldsymbol {v} \times \boldsymbol {B} = 0\tag{2}
$$

时，粒子所受的力 $F = 0$ ，便以匀速 $\pmb{v}_{c}$ 直线通过.由式(2)得 $\pmb{v}_{c}$ 的值为

$$
v _ {c} = \frac {E}{B}\tag{3}
$$

若粒子的速率 $v > v_{c}$ ，则 $F_{m} > F_{e}, F \neq 0$ ，粒子便因有横向加速度而发生向上 $(q > 0)$ 或向下 $(q < 0)$ 的偏转，通不过速度选择器。若粒子的速率 $v < v_{c}$ ，则 $F_{m} < F_{e}, F \neq 0$ ，粒子也因有横向加速度而发生向上 $(q < 0)$ 或向下 $(q > 0)$ 的偏转，也通不过速度选择器。

(2)通过的粒子的速率为

$$
v _ {c} = \frac {E}{B} = \frac {3 . 0}{1 0 \times 1 0 ^ {- 4}} = 3. 0 \times 1 0 ^ {3} (\mathrm{m/s})\tag{4}
$$

(3)由式(1)至(3)可见， $q$ 的大小对粒子是否通过没有影响。但 $q$ 不能为零，因为 $q = 0$ 的粒子所受的力 $\pmb{F} = 0$ ，任何速度都可以通过。当然，实际情况是所有带电粒子的电荷量都是电子电荷量的整数倍，不存在 $q$ 非常小的问题。

(4)由式(2)可见,粒子的电荷是正还是负,对速度的选择没有影响.

6.1.30 空间某一区域里有 $E = 1500\mathrm{V / m}$ 的电场和 $B = 4000\mathrm{Gs}$ 的磁场，这两个场作用在一个运动电子上的合力为零。当电子的速度 $\pmb{v}_{\perp}\pmb{B}$ 时，试求这个电子的速率 v，并画出 E、B 和 v 三者的相互方向.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/0ca195375bb7166533cf8dd6510c02a5f464dd2a658dcb436f0e5e785524e07c.jpg)


【解】由电子所受的力


图6.1.30


$$
\boldsymbol {F} = e (\boldsymbol {E} + \boldsymbol {v} \times \boldsymbol {B}) = 0\tag{1}
$$

可知， $v \times B$ 必定与 E 大小相等而方向相反，其大小为

$$
v B \sin \theta = E\tag{2}
$$

式中 $\theta$ 是 $\pmb{v}$ 与 $\pmb{B}$ 的夹角. 当 $\pmb{v} \perp \pmb{B}$ 时, $\theta = \pi / 2$ , 这时

$$
v = \frac {E}{B} = \frac {1 5 0 0}{4 0 0 0 \times 1 0 ^ {- 4}} = 3. 7 5 \times 1 0 ^ {3} (\mathrm{m/s})\tag{3}
$$

E、B、v 三者的方向如图 6.1.30 所示.

6.1.31 空间某一区域有均匀磁场,磁感强度 B 沿 x 轴方向.一带电粒子(质量为 m、电荷量为 q)在这磁场中运动,开始时,速度为 $v_{0}$ , $v_{0}$ 与 z 轴垂直, $v_{0}$ 与 B 之间的夹角为 $\alpha$ ;位置为 $x_{0}=y_{0}=0$ , $z_{0}=mv_{0}\sin\alpha/qB$ .试求这粒子的运动轨迹.

【解】如图6.1.31，初始条件为： $t = 0$ 时

$$
x _ {0} = 0, \quad y _ {0} = 0, \quad z _ {0} = \frac {m v _ {0} \sin \alpha}{q B}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/385f0ddd130a0f9d6f5860ba9fd7988657c2150dad59db4c579021e30a677522.jpg)


$$
v _ {0 x} = v _ {0} \cos \alpha , \quad v _ {0 y} = v _ {0} \sin \alpha , \quad v _ {0 z} = 0\tag{1}
$$


图6.1.31


粒子的运动方程为

(2) 

$$
\begin{array}{r l} m \frac {\mathrm{d} ^ {2} \boldsymbol {r}}{\mathrm{d} t ^ {2}} & = q \boldsymbol {v} \times \boldsymbol {B} \\ & = q \frac {\mathrm{d} \boldsymbol {r}}{\mathrm{d} t} \times \boldsymbol {B} \end{array}\tag{3}
$$

即

$$
m \left(\frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} \boldsymbol {i} + \frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} \boldsymbol {j} + \frac {\mathrm{d} ^ {2} z}{\mathrm{d} t ^ {2}} \boldsymbol {k}\right) = q \left(\frac {\mathrm{d} x}{\mathrm{d} t} \boldsymbol {i} + \frac {\mathrm{d} y}{\mathrm{d} t} \boldsymbol {j} + \frac {\mathrm{d} z}{\mathrm{d} t} \boldsymbol {k}\right) \times B \boldsymbol {i}\tag{4}
$$

写成分量式为

$$
\frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} = 0\tag{5}
$$

$$
\frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} = \frac {q B}{m} \frac {\mathrm{d} z}{\mathrm{d} t}\tag{6}
$$

$$
\frac {\mathrm{d} ^ {2} z}{\mathrm{d} t ^ {2}} = - \frac {q B}{m} \frac {\mathrm{d} y}{\mathrm{d} t}\tag{7}
$$

结合初始条件,式(5)的解为

$$
x = (v _ {0} \cos \alpha) t\tag{8}
$$

式(6)、(7)的积分为

$$
\frac {\mathrm{d} y}{\mathrm{d} t} = \frac {q B}{m} z\tag{9}
$$

$$
\frac {\mathrm{d} z}{\mathrm{d} t} = - \frac {q B}{m} y\tag{10}
$$

将式(10)代入式(6)得

$$
\frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} = - \frac {q ^ {2} B ^ {2}}{m ^ {2}} y\tag{11}
$$

结合初始条件,其解为

$$
y = \frac {m v _ {0} \sin \alpha}{q B} \sin \left(\frac {q B}{m} t\right)\tag{12}
$$

将式(9)代入式(7)得

$$
\frac {\mathrm{d} ^ {2} z}{\mathrm{d} t ^ {2}} = - \frac {q ^ {2} B ^ {2}}{m ^ {2}} z\tag{13}
$$

结合初始条件,其解为

$$
z = \frac {m v _ {0} \sin \alpha}{q B} \cos \left(\frac {q B}{m} t\right)\tag{14}
$$

将式(8)代入式(13)、(14)，消去时间 t，便得所求的轨迹为

$$
y = \frac {m v _ {0} \sin \alpha}{q B} \sin \left(\frac {q B x}{m v _ {0} \cos \alpha}\right)\tag{15}
$$

$$
z = \frac {m v _ {0} \sin \alpha}{q B} \cos \left(\frac {q B x}{m v _ {0} \cos \alpha}\right)\tag{16}
$$

它是一条以 $x$ 轴为轴线的空间螺旋线.

6.1.32 空间某一区域有均匀电场 E 和均匀磁场 B, E 和 B 的方向相同, 一电子(质量为 m、电荷量为 e)在这场中运动, 试分别求下列情况下电子的加速度和电子的轨迹: 开始时(1) $v_{0}$ 与 E 方向相同; (2) $v_{0}$ 与 E 方向相反; (3) $v_{0}$ 与 E 垂直.

【解】(1) $v_{0}$ 与E方向相同,如图6.1.32(1)所示.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/9677639092c86ad5e19e32c788a4406c782af74d93eb45b90a214cba2a9ac200.jpg)


电子所受的力为

$$
\boldsymbol {F} = e (\boldsymbol {E} + \boldsymbol {v} \times \boldsymbol {B})\tag{1}
$$

图6.1.32(1)

加速度为

$$
\boldsymbol {a} = \frac {\boldsymbol {F}}{m} = \frac {e}{m} (\boldsymbol {E} + \boldsymbol {v} \times \boldsymbol {B})\tag{2}
$$

因开始时 $v_{0}$ 与B同方向，故电子受的洛伦兹力为零，电子受的电场力eE与E方向相反（因为e<0），所以这时电子的加速度为

$$
\boldsymbol {a} = \frac {e}{m} \boldsymbol {E}\tag{3}
$$

因 a 与 $v_{0}$ 方向相反, 故电子作匀减速直线运动. 当 $t = -\frac{mv_{0}}{eE}$ 时速度为零. 然后在 E 的作用下逆电力线加速运动. 其轨迹是一条直线. 电子的这种运动有如竖直向上抛物体的运动.

(2) $v_{0}$ 与E方向相反这时洛伦兹力仍为零.电子的加速度为

$$
\boldsymbol {a} = - \frac {e}{m} \boldsymbol {E}\tag{4}
$$

因为 $e < 0$ ，故 $\pmb{a}$ 与 $\pmb{E}$ 同方向，这时电子逆电力线加速运动，其轨迹是一条直线.电子的这种运动有如竖直向下抛物体的运动.

(3) $v_{0}$ 与E垂直,如图6.1.32(2)所示.这时电子的加速度由式(2)表示,其中电场产生的加速度 $\frac{e}{m}E$ 与E的方向相反,即电子有一个逆电力线的加速度,这个加速度不改变 $v_{0}$ 的大小.磁场B作用在电子上的力是洛伦兹力,由于洛伦兹力不做功,故电子的动能不因磁场的作用而改变;换句话说,磁场不改变 $v_{0}$ 的大小,它只是使电子环绕磁力线作圆周运动.因此,电子一方面逆磁力线加速运动,一方面环绕磁力线作圆周运动,两种运动合起来,电子运动的轨迹便是一条螺距越来越大的螺旋线.

【讨论】第三种情况的定量计算 以开始时电子的位置为原点 O，取笛卡儿坐标系，使 z 轴沿 E、B 方向，初速度 $v_{0}$ 平行于 y 轴，如图 6.1.32(3) 所示。这样，电子的运动方程便为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/42b80be5aa720bb4529f5107401c591a6df911f8039ce0ee682d01d67cec3672.jpg)



图6.1.32(2)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/2bf1ba38bded6982360b96c8821bdae011f7c1f11506c95623e4150df3546073.jpg)



图6.1.32(3)


$$
m \left(\frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} \boldsymbol {i} + \frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} \boldsymbol {j} + \frac {\mathrm{d} ^ {2} z}{\mathrm{d} t ^ {2}} \boldsymbol {k}\right) = e E \boldsymbol {k} + e \left(\frac {\mathrm{d} x}{\mathrm{d} t} \boldsymbol {i} + \frac {\mathrm{d} y}{\mathrm{d} t} \boldsymbol {j} + \frac {\mathrm{d} z}{\mathrm{d} t} \boldsymbol {k}\right) \times B \boldsymbol {k}\tag{5}
$$

其分量式为

$$
\frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} = \frac {e B}{m} \frac {\mathrm{d} y}{\mathrm{d} t}\tag{6}
$$

$$
\frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} = - \frac {e B}{m} \frac {\mathrm{d} x}{\mathrm{d} t}\tag{7}
$$

$$
\frac {\mathrm{d} ^ {2} z}{\mathrm{d} t ^ {2}} = \frac {e E}{m}\tag{8}
$$

初始条件为: t = 0 时,

$$
x _ {0} = y _ {0} = z _ {0} = 0\tag{9}
$$

$$
\left(\frac {\mathrm{d} x}{\mathrm{d} t}\right) _ {0} = 0, \quad \left(\frac {\mathrm{d} y}{\mathrm{d} t}\right) _ {0} = v _ {0}, \quad \left(\frac {\mathrm{d} z}{\mathrm{d} t}\right) _ {0} = 0\tag{10}
$$

利用初始条件,解式(8)得

$$
z = \frac {e E}{2 m} t ^ {2}\tag{11}
$$

将式(6)、(7)对时间 t 积分，并利用初始条件得

$$
\frac {\mathrm{d} x}{\mathrm{d} t} = \frac {e B}{m} y\tag{12}
$$

$$
\frac {\mathrm{d} y}{\mathrm{d} t} = - \frac {e B}{m} x + v _ {0}\tag{13}
$$

将式(13)代入式(6)得

$$
\frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} = - \frac {e ^ {2} B ^ {2}}{m ^ {2}} x + \frac {e B}{m} v _ {0}\tag{14}
$$

利用初始条件解得

$$
x = \frac {m v _ {0}}{e B} \left(1 - \cos \frac {e B}{m} t\right)\tag{15}
$$

将式(12)代入式(7)，利用初始条件解得

$$
y = \frac {m v _ {0}}{e B} \sin \frac {e B}{m} t\tag{16}
$$

式(11)、(15)、(16)是一条空间螺旋线的参数方程,这螺旋线的轴线平行于z轴.所以电子运动的轨迹是一条轴线平行于 $E(B)$ 的空间螺旋线.它的半径和螺距可求出如下:由式(15)和(16)得

$$
\left(x - \frac {m v _ {0}}{e B}\right) ^ {2} + y ^ {2} = \left(\frac {m v _ {0}}{e B}\right) ^ {2}\tag{17}
$$

这是一个圆,它是螺旋线在 z=0 平面(x-y 平面)上的投影.它表明,螺旋线的半径为

$$
R = \frac {m v _ {0}}{| e | B}\tag{18}
$$

螺距为

$$
\begin{array}{r l} h & = | v _ {z} | T = \frac {| e | E}{m} t \left(2 \pi \frac {m}{| e | B}\right) \\ & = 2 \pi E \frac {t}{B} \end{array}\tag{19}
$$

h 与时间 t 成正比, 即螺距越来越大, 如图 6.1.32(4) 所示.

6.1.33 一无限大平行板电容器充电后,两极板间产生一均匀电场 E, 另有一均匀磁场 B 与 E 垂直, 如图 6.1.33(1) 所示. 一电子(质量为 m, 电荷量为 e) 从负极板出来, 初速度很小, 可当作零. 不考虑重力. 试证明: 当两极板间的距离 $d > \frac{2mE}{|e|B^{2}}$ 时, 它不可能到达正极板.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/585214fa327f9ffe01d40231499843ebf1d945d2050074c95c73374bd1145f2a.jpg)



图6.1.32(4)


【证】以负极板的表面为 $x = 0$ 平面，电子的出发点为坐标原点，取笛卡儿坐标系如图6.1.33(2)所示.电场和磁场分别为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/dae28c2f2630991b58d219ff9b81c271b6215c213737b6f0482481a3b232df08.jpg)



图6.1.33(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/9774e30c5ddbbe8f2b26c0506fd3e8c9993549194b3754c9ae7ddde1ff9bd828.jpg)



图6.1.33(2)


$$
\boldsymbol {E} = (- E, 0, 0)\tag{1}
$$

$$
\boldsymbol {B} = (0, 0, B)\tag{2}
$$

初始条件为: t=0 时,

$$
x _ {0} = 0, \quad y _ {0} = 0, \quad z _ {0} = 0\tag{3}
$$

$$
\left(\frac {\mathrm{d} x}{\mathrm{d} t}\right) _ {0} = 0, \left(\frac {\mathrm{d} y}{\mathrm{d} t}\right) _ {0} = 0, \left(\frac {\mathrm{d} z}{\mathrm{d} t}\right) _ {0} = 0\tag{4}
$$

电子的运动方程为

$$
m \frac {\mathrm{d} ^ {2} \boldsymbol {r}}{\mathrm{d} t ^ {2}} = e \boldsymbol {E} + e \frac {\mathrm{d} \boldsymbol {r}}{\mathrm{d} t} \times \boldsymbol {B}\tag{5}
$$

写成分量式为

$$
m \frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} = - e E + e B \frac {\mathrm{d} y}{\mathrm{d} t}\tag{6}
$$

$$
m \frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} = - e B \frac {\mathrm{d} x}{\mathrm{d} t}\tag{7}
$$

$$
m \frac {\mathrm{d} ^ {2} z}{\mathrm{d} t ^ {2}} = 0\tag{8}
$$

将式(7)对时间 t 积分并利用初始条件得

$$
\frac {\mathrm{d} y}{\mathrm{d} t} = - \frac {e B}{m} x\tag{9}
$$

将式(9)代入式(6)得

$$
\frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} = - \frac {e ^ {2} B ^ {2}}{m ^ {2}} \left(x + \frac {m E}{e B ^ {2}}\right)\tag{10}
$$

利用初始条件解得

$$
x = \frac {m E}{e B ^ {2}} \left[ \cos \left(\frac {e B}{m} t\right) - 1 \right]\tag{11}
$$

由此式得 $x$ 的最大值为

$$
x _ {\max} = - \frac {2 m E}{e B ^ {2}} = \frac {2 m E}{| e | B ^ {2}} \quad (\text { 因为 } e <   0)\tag{12}
$$

当 $x_{max}<d$ 时, 电子就不可能到达正极板.

【别证】式(6)、(7)可分别写成

$$
m \frac {\mathrm{d} v _ {x}}{\mathrm{d} t} = - e E + e B v _ {y}\tag{13}
$$

$$
m \frac {\mathrm{d} v _ {y}}{\mathrm{d} t} = - e B v _ {x}\tag{14}
$$

相除得

$$
\frac {\mathrm{d} v _ {x}}{\mathrm{d} v _ {y}} = \frac {E - B v _ {y}}{B v _ {x}}\tag{15}
$$

所以

$$
B v _ {x} \mathrm{d} v _ {x} = (E - B v _ {\mathrm{y}}) \mathrm{d} v _ {\mathrm{y}}\tag{16}
$$

积分并利用初始条件得

$$
\frac {1}{2} B v _ {x} ^ {2} = E v _ {\mathrm{y}} - \frac {1}{2} B v _ {\mathrm{y}} ^ {2}\tag{17}
$$

电子回头时， $v_{x}=0$ ，这时

$$
v _ {y} = \frac {2 E}{B}\tag{18}
$$

这时电子的动能为

$$
\frac {1}{2} m v ^ {2} = \frac {1}{2} m v _ {\mathrm{y}} ^ {2} = - e E x _ {\max}\tag{19}
$$

所以

$$
x _ {\max} = - \frac {m}{2 e E} v _ {y} ^ {2} = - \frac {m}{2 e E} \left(\frac {2 E}{B}\right) ^ {2} = \frac {2 m E}{| e | B ^ {2}}\tag{20}
$$

故 $d > \frac{2mE}{|e|B^2} = x_{\mathrm{max}}$ 时，电子不可能到达正极板.

6.1.34 在空间有互相垂直的均匀电场 E 和均匀磁场 B, B 沿 x 轴方向, E 沿 z 轴方向. 一电子 (质量为 m, 电荷量为 e) 开始从原点出发, 以速度 $v_{0}$ 向 y 轴方向前进, 如图 6.1.34 所示. 试求这电子运动的轨迹.

【解】如图6.1.34，电场和磁场分别为

$$
\boldsymbol {E} = (0, 0, E)
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5890e53ba4382215bbe6b36edccb0762942a6b472ee1e9ea877c654cae73218a.jpg)


(1) 

$$
\boldsymbol {B} - (B, 0, 0)\tag{2}
$$

初始条件为： $t = 0$ 时，

图6.1.34

$$
x _ {0} = 0, \quad y _ {0} = 0, \quad z _ {0} = 0\tag{3}
$$

$$
\left(\frac {\mathrm{d} x}{\mathrm{d} t}\right) _ {0} = 0, \quad \left(\frac {\mathrm{d} y}{\mathrm{d} t}\right) _ {0} = v _ {0}, \quad \left(\frac {\mathrm{d} z}{\mathrm{d} t}\right) _ {0} = 0\tag{4}
$$

电子的运动方程为

$$
m \frac {\mathrm{d} ^ {2} \boldsymbol {r}}{\mathrm{d} t ^ {2}} = e \boldsymbol {E} + e \frac {\mathrm{d} \boldsymbol {r}}{\mathrm{d} t} \times \boldsymbol {B}\tag{5}
$$

写成分量式,并考虑式(1)、(2),便得

$$
m \frac {\mathrm{d} ^ {2} x}{\mathrm{d} t ^ {2}} = 0\tag{6}
$$

$$
m \frac {\mathrm{d} ^ {2} y}{\mathrm{d} t ^ {2}} = e B \frac {\mathrm{d} z}{\mathrm{d} t}\tag{7}
$$

$$
m \frac {\mathrm{d} ^ {2} z}{\mathrm{d} t ^ {2}} = e E - e B \frac {\mathrm{d} y}{\mathrm{d} t}\tag{8}
$$

解式(6)并利用初始条件得

$$
x = 0\tag{9}
$$

这表明,电子在 y-z 平面内运动.

将式(7)对时间 t 积分,并利用初始条件得

$$
m \frac {\mathrm{d} y}{\mathrm{d} t} = e B z + m v _ {0}\tag{10}
$$

将上式代入式(8)得

$$
m \frac {\mathrm{d} ^ {2} z}{\mathrm{d} t ^ {2}} = - \frac {e ^ {2} B ^ {2}}{m} \left(z - \frac {m E}{e B ^ {2}} + \frac {m v _ {0}}{e B}\right)\tag{11}
$$

解得

$$
z - \frac {m E}{e B ^ {2}} + \frac {m v _ {0}}{e B} = A \cos \left(\frac {e B}{m} t + \varphi_ {0}\right)\tag{12}
$$

利用初始条件定出常数 A 和 $\varphi_{0}$ ，便得

$$
z = \frac {m}{e B} \left(v _ {0} - \frac {E}{B}\right) \left[ \cos \left(\frac {e B}{m} t\right) - 1 \right]\tag{13}
$$

将上式的 z 代入式(10)得

$$
m \frac {\mathrm{d} y}{\mathrm{d} t} = \left(m v _ {0} - \frac {m E}{B}\right) \cos \left(\frac {e B}{m} t\right) + \frac {m E}{B}\tag{14}
$$

积分并利用初始条件得

$$
y = \frac {m}{e B} \left(v _ {0} - \frac {E}{B}\right) \sin \left(\frac {e B}{m} t\right) + \frac {E}{B} t\tag{15}
$$

式(9)、(13)和(15)是 $y - z$ 平面里的一条摆线(旋轮线)，它就是电子运动的轨迹.

6.1.35 设氢原子中的电子沿半径为 $r$ 的圆轨道绕原子核运动, 若把氢原子放在磁感强度为 $\pmb{B}$ 的磁场中, 使电子的轨道平面与 $\pmb{B}$ 垂直, 假定 $r$ 不因 $\pmb{B}$ 而改变, 则当观测者顺着 $\pmb{B}$ 的方向看时, (1) 若电子是沿顺时针方向旋转, 试问电子的角频率(角速度)是增大还是减小? (2) 若电子是沿逆时针方向旋转, 试问电子的角频率是增大还是减小?

【解答】 电子受的洛伦兹力为

$$
\boldsymbol {F} = e \boldsymbol {v} \times \boldsymbol {B}
$$

因 $e < 0$ ，故 $\pmb{F}$ 的方向与 $\pmb {v} \times \pmb{B}$ 的方向相反.

(1)当电子沿顺时针方向旋转时,如图6.1.35的(1)所示,F指向原子核,即电子受的向心力增大,故电子的角频率(角速度)增大.

(2)当电子沿逆时针方向旋转时,如图6.1.35的(2)所示,F背向原子核,即电子受的向心力减小,故电子的角频率(角速度)减小.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/8ce4b9cad79d692ba761d2def5fe09150cba6ab725b05ee07c9055096c3e4be4.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a1342f7c5801448f4a727a51c4d6f1b98cc1e3aa02acd68429e22d90e2f9e8cb.jpg)



(2)



图6.1.35


6.1.36 设电子质量为 $m$ ，电荷量为 $e$ ，以角速度 $\omega$ 绕带正电的质子作圆周运动。当加上外磁场 $\pmb{B}, \pmb{B}$ 的方向与电子轨道平面垂直时，设电子轨道半径不变，而角速度则变为 $\omega'$ 。试证明：电子角速度的变化近似等于

$$
\Delta \omega = \omega^ {\prime} - \omega = \pm \frac {1}{2} \frac {e}{m} B
$$

【证】无磁场时,电子的角速度 $\omega$ 满足

$$
m \omega^ {2} r = F _ {e} = \frac {1}{4 \pi \varepsilon_ {0}} \frac {e ^ {2}}{r ^ {2}}\tag{1}
$$

加上磁场后,电子的角速度 $\omega'$ 满足

$$
\begin{array}{r l} m \omega^ {\prime 2} r & = F _ {e} + F _ {m} = m \omega^ {2} r = e v ^ {\prime} B \\ & = m \omega^ {2} r \pm e \omega^ {\prime} r B \end{array}\tag{2}
$$

因电子电荷量 $e < 0$ ，故上式右边在洛伦兹力 $\pmb{F}_{m}$ 与库仑力 $\pmb{F}_{e}$ 同方向时用负号，反方向时用正号.由式(2)得

$$
\omega^ {\prime 2} \pm \frac {e B}{m} \omega^ {\prime} - \omega^ {2} = 0\tag{3}
$$

解得

$$
\omega^ {\prime} = \pm \frac {e B}{2 m} \pm \sqrt {\omega^ {2} + \left(\frac {e B}{2 m}\right) ^ {2}}\tag{4}
$$

其中根号内两项之比由式(1)为

$$
\frac {| e | B}{2 m} / \omega = B \sqrt {\frac {\pi \varepsilon_ {0} r ^ {3}}{m}}\tag{5}
$$

已知电子质量为 $m=9.11\times10^{-31}kg$ ，对于处在基态的氢原子来说，根据经典模型， $r=5.29\times10^{-11}m$ 。将这些数据代入式(5)得

$$
\frac {| e | B}{2 m} / \omega = B \sqrt {\frac {\pi \times 8 . 8 5 4 \times 1 0 ^ {- 1 2} \times (5 . 2 9 \times 1 0 ^ {- 1 1}) ^ {3}}{9 . 1 1 \times 1 0 ^ {- 3 1}}}
$$

$$
= 2. 1 \times 1 0 ^ {- 6} B\tag{6}
$$

在一般实验中， $B$ 很少超过10特斯拉，即使 $B = 100\mathrm{T}$ ，上述比值也只有万分之二.因此，式(4)右边根号内的 $\left(\frac{eB}{2m}\right)^2$ 项与 $\omega^2$ 项相比，完全可以略去.故得

$$
\omega^ {\prime} = \pm \frac {e B}{2 m} \pm \sqrt {\omega^ {2}}\tag{7}
$$

因为 $\omega^{\prime} > 0$ ，所以上式中右边根号项只能取正值，于是便得

$$
\omega^ {\prime} = \omega \pm \frac {e B}{2 m}\tag{8}
$$

所以

$$
\Delta \omega = \omega^ {\prime} - \omega = \pm \frac {e B}{2 m}\tag{9}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/264e04c6a9a28f3d067c55d0aff1f28fa34871292cb6abaf31208df24accd5b6.jpg)



图6.1.37


6.1.37 一铜片厚为 $d = 1.0\mathrm{mm}$ , 放在 $B = 1.5\mathrm{T}$ 的磁场中, 磁场方向与铜片表面垂直, 如图6.1.37所示. 已知铜片里每立方厘米有 $8.4 \times 10^{22}$ 个自由电子, 每个电子的电荷量为 $e = -1.6 \times 10^{-19}\mathrm{C}$ . 当铜片中有 $I = 200\mathrm{A}$ 电流时, 试求铜片两侧的电势差 $U_{ab}$ .

【解】设铜片内构成电流的自由电子其平均定向速度为 u，则每个参加导电的自由电子所受的洛伦兹力为

$$
\boldsymbol {f} _ {m} = \boldsymbol {e u} \times \boldsymbol {B}\tag{1}
$$

因 $e < 0$ ，故 $\pmb{f}_{m}$ 的方向从图6.1.37中的 $b$ 边指向 $a$ 边，这使得电子偏向 $a$ 边，于是 $a$ 边带负电， $b$ 边带正电.结果便在铜片内产生一个从 $b$ 边指向 $a$ 边的电场 $\pmb{E}$ .这电场作用在每个参加导电的电子上的力为

$$
f _ {e} = e E\tag{2}
$$

因 $e < 0$ ，故 $\pmb{f}_{\epsilon}$ 的方向从 $a$ 边指向 $b$ 边，即与 $\pmb{f}_{m}$ 的方向相反.因此，当 $|\pmb{f}_{\epsilon}| = |\pmb{f}_{m}|$ 时， $\pmb{f}_{\epsilon} + \pmb{f}_{m} = 0$ 电子便不再偏转.由式(1)、(2)得

$$
E = u B\tag{3}
$$

铜片 a、b 两侧的电势差为

$$
U _ {a b} = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} \cdot d \boldsymbol {l} = - E l\tag{4}
$$

式中 l 为铜片宽度, 负号表示 a 侧电势低于 b 侧电势. 又因

$$
I = j S = n \mid e \mid u l d\tag{5}
$$

故由以上诸式得

$$
\begin{array}{r l} U _ {a b} & = - \frac {I B}{n | e | d} = - \frac {2 0 0 \times 1 . 5}{8 . 4 \times 1 0 ^ {2 2} \times 1 0 ^ {6} \times 1 . 6 \times 1 0 ^ {- 1 9} \times 1 . 0 \times 1 0 ^ {- 3}} \\ & = - 2. 2 \times 1 0 ^ {- 5} (\mathrm{V}) \end{array}\tag{6}
$$

6.1.38 一块样品如图 6.1.38, 已知它的横截面积为 S, 宽为 l, 载有电流 I. 外磁场的磁感强度为 B, B 与电流 I 垂直. 设样品单位体积内有 n 个载流子, 每个载流子的电荷量为 q, 平均定向速率为 u. (1) 试证明, 这块样品中存在一个大小为

E = uB 的电场; 并指出 E 的方向; (2) 试求样品两侧的电势差 $U_{ab}$ ; 哪侧电势高? (3) 霍尔系数定义为 $R = \frac{ES}{IB}$ , 试证明: $R = \frac{1}{nq}$ ; (4) 试证明: $R = \frac{u_{m}}{\sigma}$ , 式中 $u_{m}$ 是载流子的迁移率(即单位电场强度所产生的平均定向速率), $\sigma$ 是样品的电导率.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/0970dbfe70fc042acb4dd23c1f627e7095301ee100b88ba57a99b57dbe4cffff.jpg)


【解】(1)参加导电的每个载流子所受的洛伦兹力为

$$
\boldsymbol {f} _ {m} = q \boldsymbol {u} \times \boldsymbol {B}
$$

图6.1.38

(1) 

这个力使载流子向 $b$ 侧偏转（当 $q > 0$ 时），或向 $a$ 侧偏转（当 $q < 0$ 时）。因此，当 $q > 0$ 时， $b$ 侧带正电， $a$ 侧带负电；当 $q < 0$ 时， $b$ 侧带负电， $a$ 侧带正电。结果在样品内便产生一个电场 $\pmb{E}$ ，它作用在载流子上的力为

$$
\boldsymbol {f} _ {e} = q \boldsymbol {E}\tag{2}
$$

$f_{e}$ 的方向与 $f_{m}$ 的相反. 因此, 在它们的大小相等, 即

$$
E = u B\tag{3}
$$

时，载流子便不再偏转而达到稳定的定向流动.

由上面的分析可见, 当 q>0 时, E 的方向从 b 向 a; 当 q<0 时, E 的方向从 a 向 b.

(2)a、b两侧的电势差 当q>0时，

$$
U _ {a b} = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = - E l = - u B l <   0\tag{4}
$$

这时 $b$ 侧电势高

当 $q < 0$ 时，

$$
U _ {a b} = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {l} = E l = u B l > 0\tag{5}
$$

这时 a 侧电势高.

(3)霍尔系数为

$$
R = \frac {E S}{I B} = \frac {u B S}{n q u S B} = \frac {1}{n q}\tag{6}
$$

(4)霍尔系数可表示为

$$
R = \frac {E S}{I B} = \frac {E S}{j S B} = \frac {E u}{\sigma E E} = \frac {u / E}{\sigma} = \frac {u _ {m}}{\sigma}\tag{7}
$$

【讨论】由于霍尔系数 R 和电导率都是可以直接测量的量, 因而可以用来确定载流子电荷量 q 的正负号、载流子的数密度 n 和迁移率 $u_{m}$ 等, 这在研究半导体时用到. 当霍尔系数 R 已知时, 还可通过测量电势差而测量磁感强度 B.

6.1.39 一块半导体样品的体积为 $a \times b \times c$ ，如图6.1.39所示，载有电流 $I$ ，处在磁场强度为 $H$ 的外磁场中， $I$ 沿 $x$ 轴方向， $H$ 沿 $z$ 轴方向。由实验测得的数据为 $a = 0.10\mathrm{cm}$ ， $I = 1.0\mathrm{mA}$ ， $H = 300\mathrm{Oe}$ ，片两侧的电势差为 $U_{AB} = 6.55\mathrm{mV}$ 。（1）试问这半导体是正电荷导电(p型)还是负电荷导电(n型)?(2)设每个载流子电荷量的大小为 $q = 1.60 \times 10^{-19}C$ ，试求载流子浓度（即单位体积内参加导电的带电粒子数）.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/4390a4c0c36eb6abe67bc8a164f95f414ff2b937c9ef9b454b0ea63a8f433d28.jpg)



图6.1.39


【解】（1）因 $U_{AB}=U_{A}-U_{B}=6.55mV>0$ ，故知这样品是 n 型（即负电荷导电）.

(2)样品中的电流为

$$
I = j a b = n q u a b\tag{1}
$$

式中 n 为载流子浓度, u 为载流子的平均定向运动速度 u 的大小.

用在载流子上的偏转力便为

磁场 H 使载流子偏转, 从而在样品两侧产生正负电荷, 在样品中生成一个横向电场 E. 这时作

$$
\boldsymbol {f} = \boldsymbol {f} _ {m} + \boldsymbol {f} _ {e} = q \boldsymbol {u} \times \boldsymbol {B} + q \boldsymbol {E} = q (\boldsymbol {u} \times \boldsymbol {B} + \boldsymbol {E})\tag{2}
$$

$\pmb{E}$ 与 $\pmb{u} \times \pmb{B}$ 方向相反，因此，当它们的大小相等，即

$$
E = u B = \mu_ {0} u H\tag{3}
$$

时，载流子便不再偏转而达到稳定的定向流动。这时

$$
E = \frac {U _ {A B}}{b}\tag{4}
$$

由以上四式得

$$
\begin{array}{r l} n & = \frac {I}{q u a b} = \frac {\mu_ {0} I H}{q a U _ {A B}} = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 . 0 \times 1 0 ^ {- 3} \times 3 0 0 \times 1 0 ^ {3} / 4 \pi}{1 . 6 \times 1 0 ^ {- 1 9} \times 0 . 1 0 \times 1 0 ^ {- 2} \times 6 . 5 5 \times 1 0 ^ {- 3}} \\ & = 2. 9 \times 1 0 ^ {1 9} (\text {个} / \mathrm{m} ^ {3}) \end{array}\tag{5}
$$

【讨论】奥斯特是高斯单位制中磁场强度 H 的单位, 它与国际单位制(SI)中 H 的单位 A/m 的换算关系为

$$
1 \mathrm{Oe} = \frac {1 0 ^ {3}}{4 \pi} \mathrm{A/m}\tag{6}
$$

6.1.40 一铜导线载有电流 I, I 均匀分布在它的横截面上; 已知导线横截面的半径为 R, 铜内参加导电的自由电子数密度为 n, 电子的电荷量为 e. 试求这导线的轴线与表面的电势差 U. 当 $R = 5.0 \, mm, I = 50 \, A, n = 8.4 \times 10^{22}$ 个 $/(\text{cm})^{3}, e = -1.6 \times 10^{-19} \, \text{C}$ 时, 试计算 U 的值.

【解】由对称性和安培环路定理得,导线内离轴线为 r 处的磁感强度 B 的大小为

$$
B = \frac {\mu_ {0} I}{2 \pi R ^ {2}} r\tag{1}
$$

B 的方向为电流 I 的右手螺旋方向. 设参加导电的电子的平均定向速度为 u, 则它将受到洛伦兹力

$$
\boldsymbol {f} _ {m} = \boldsymbol {e u} \times \boldsymbol {B}\tag{2}
$$

而向轴线偏转,结果使导线里边出现负电荷而外边出现正电荷,从而产生一个垂直于轴线并指向轴线的电场 E.于是导电电子受到的偏转力便为

$$
\boldsymbol {f} = e (\boldsymbol {E} + \boldsymbol {u} \times \boldsymbol {B})\tag{3}
$$

当

$$
\boldsymbol {E} + \boldsymbol {u} \times \boldsymbol {B} = 0\tag{4}
$$

时，电子便不偏转而达到稳定的定流动。于是所求的电势差便为

$$
U = \int_ {0} ^ {R} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {r} = - \int_ {0} ^ {R} \boldsymbol {u} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {r} = - \int_ {0} ^ {R} u B \mathrm{d} r
$$

$$
= - \frac {\mu_ {0} I u}{2 \pi R ^ {2}} \int_ {0} ^ {R} r \mathrm{d} r = - \frac {\mu_ {0} I u}{4 \pi}\tag{5}
$$

负号表明,导线轴线上的电势低于表面的电势.

电流密度为

$$
\boldsymbol {j} = n e \boldsymbol {u}\tag{6}
$$

以 j 方向上的单位矢量点乘上式, 便得

$$
j = - n e u\tag{7}
$$

又

$$
j = \frac {I}{\pi R ^ {2}}\tag{8}
$$

由式(7)、(8)解出 u，代入式(5)便得所求的电势差为

$$
U = \frac {\mu_ {0} I ^ {2}}{4 \pi^ {2} R ^ {2} n e}\tag{9}
$$

将数值代入上式,便得

$$
\begin{array}{r l} U & = \frac {4 \pi \times 1 0 ^ {- 7} \times 5 0 ^ {2}}{4 \pi^ {2} \times (5 . 0 \times 1 0 ^ {- 3}) ^ {2} \times 8 . 4 \times 1 0 ^ {2 2} \times 1 0 ^ {6} \times (- 1 . 6 \times 1 0 ^ {- 1 9})} \\ & = - 2. 4 \times 1 0 ^ {- 1 0} (\mathrm{V}) \end{array}\tag{10}
$$

6.1.41 把载流铜片放在 $B = 100 ~m T$ 的外磁场中, 测量它的霍尔效应, 测得纵向电场强度是横向电场强度的 $n = 3.1 \times 10^{3}$ 倍. 试求这铜片中载流子的迁移率 (单位电场强度所产生的平均定向速率).

【解】设载流子的电荷量为 e，平均定向速度为 u，横向电场强度为 $E_{t}$ ，则作用在它上面的偏向力为

$$
\boldsymbol {f} = \boldsymbol {f} _ {e} + \boldsymbol {f} _ {m} = e (\boldsymbol {E} _ {t} + \boldsymbol {u} \times \boldsymbol {B})\tag{1}
$$

式中 $f_{e}$ 与 $f_{m}$ 方向相反，当它们的大小相等，即

$$
E _ {t} = u B\tag{2}
$$

时，载流子便不偏转而达到稳定的定向流动.

设纵向电场强度的大小为 $E$ ，则依定义，载流子的迁移率为 $u / E$ 。今 $E = nE_{t}$ ，故得载流子的迁移率为

$$
\begin{array}{r l} \frac {u}{E} & = \frac {E _ {t}}{E B} = \frac {1}{n B} = \frac {1}{3 . 1 \times 1 0 ^ {3} \times 1 0 0 \times 1 0 ^ {- 3}} \\ & = 3. 2 \times 1 0 ^ {- 3} (\mathrm{m} ^ {2} / \mathrm{s} \cdot \mathrm{V}) \end{array}\tag{3}
$$

6.1.42 在宽为 $b$ 、厚为 $d$ 的半导体样品中，有沿长度方向流动的电流 $I$ ；外加一垂直于 $I$ 的横向磁场，磁感强度为 $\pmb{B}$ ，如图6.1.42所示。设样品中单位体积内有n 个载流子参加导电, 每个载流子的电荷量为 $e=1.6022\times10^{-19}C$ . (1) 试求样品两侧的电势差 $U_{H}=U_{A}-U_{A'}$ 和霍尔电阻 $R_{H}=U_{H}/I$ ; (2) 1985 年, 克利青 (K.V.Klitzing) 发现, 霍尔电阻是量子化的, 即

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c0e772064b74325beec8295ebf3574326b3bc23cb4ea2f7e5574f72b6b440a70.jpg)



图6.1.42


$$
R _ {H} = \frac {h}{i e ^ {2}}
$$

式中 $i=1,2,3,\cdots;h=6.6261\times10^{-34}J\cdot s$ 是普

朗克常量. 通常把 $R_{k} = \frac{h}{e^{2}}$ 叫做量子化霍尔电阻(或克利青常量), 它是一个基本物理常量. 试由 $h$ 和 $e$ 的单位和数值求 $R_{k}$ 的单位和数值.

【解】（1）设载流子的平均定向速度为 $\pmb{u}$ ，则它所受的洛伦兹力便为

$$
\boldsymbol {f} _ {m} = \boldsymbol {e u} \times \boldsymbol {B}\tag{1}
$$

这个力使载流子偏向 $A$ 侧，结果便在样品两侧产生一个电势差 $U_{H}$ ，在样品内产生电场强度为 $\pmb{E}_{H}$ 的横向电场，其大小为

$$
E _ {H} = \frac {U _ {H}}{b}\tag{2}
$$

它使载流子受到一个横向力

$$
\boldsymbol {f} _ {e} = e \boldsymbol {E} _ {H}\tag{3}
$$

$f_{e}$ 与 $f_{m}$ 方向相反.当达到

$$
\boldsymbol {f} _ {e} + \boldsymbol {f} _ {m} = e (\boldsymbol {E} _ {H} + \boldsymbol {u} \times \boldsymbol {B}) = 0\tag{4}
$$

时，载流子便不偏转而达到稳定的定向流动.

这时由以上各式得样品两侧的电势差为

$$
U _ {H} = U _ {A} - U _ {A ^ {\prime}} = \int_ {0} ^ {b} \boldsymbol {E} _ {H} \cdot \mathrm{d} \boldsymbol {l} = E _ {H} \quad b = u B b\tag{5}
$$

因为

$$
j = \frac {I}{b d} = n e u\tag{6}
$$

故得

$$
U _ {H} = \frac {1}{n e} \frac {I B}{d}\tag{7}
$$

于是得所求的霍尔电阻为

$$
R _ {H} = \frac {U _ {H}}{I} = \frac {1}{n e} \frac {B}{d}\tag{8}
$$

(2)量子化霍尔电阻 $R_{k}$ 的单位为

$$
\begin{array}{r l} \left[ R _ {k} \right] & = \left[ \frac {h}{e ^ {2}} \right] = \frac {[ h ]}{[ e ^ {2} ]} = \frac {\mathrm{J} \cdot \mathrm{s}}{(\mathrm{C}) ^ {2}} \\ & = \frac {(\mathrm{C} \cdot \mathrm{V}) \cdot \mathrm{s}}{(\mathrm{C}) ^ {2}} = \frac {\mathrm{V} \cdot \mathrm{s}}{\mathrm{C}} \end{array}
$$

$$
= \frac {\mathrm{V}}{\mathrm{A}} = \Omega\tag{9}
$$

$R_{k}$ 的值为

$$
R _ {k} = \frac {6 . 6 2 6 1 \times 1 0 ^ {- 3 4}}{(1 . 6 0 2 2 \times 1 0 ^ {- 1 9}) ^ {2}} = 2. 5 8 1 2 \times 1 0 ^ {4} (\Omega)\tag{10}
$$

## §6.2 安培力

【解】（1）电流向纸面外；(2)电流向纸面内；(3)安培力向上；(4)安培力向下.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/b6e47a19a107982b15bd07b570ff3191c72cade5ff53f083e934d96fbc9ccbb9.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/d7a88b95f24ac2da1f67b28492390d8f8e46099c0da94aecf6cc44be9af8f452.jpg)


## 6.2.2 载有 I = 10A 的

一段直导线，长为 $l = 1.0\mathrm{m}$ 

图6.2.1

处在 B=1.5T 的均匀外磁场中, 电流与 B 的夹角为 $30^{\circ}$ , 如图 6.2.2 所示. 试求这段导线所受的安培力.

图6.2.2

【解】 力的大小为

$$
F = I B l \sin 3 0 ^ {\circ} = 1 0 \times 1. 5 \times 1. 0 \times \frac {1}{2} = 7. 5 (\mathrm{N})
$$

力的方向垂直于纸面向外.

6.2.3 有一段长为 l 的直导线, 质量为 m, 用细丝线平挂在磁感强度为 B 的外磁场中, 导线中载有电流 I, I 的方向与 B 垂直, 如图 6.2.3 所示. (1) 试求丝线中张力为零时的电流 I; 当 $l = 50 \, cm, m = 10 \, g, B = 1.0 \, T$ 时, I = ? (2) 在什么条件下导线会向上运动?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/68d55aaa3f61d9189ed1cd01989eda1c5a66428b578572c86d3005ca273b3c80.jpg)


【解】(1)丝线中张力为零时，

图6.2.3

$$
I l B = m g
$$

所以

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6a367380b44a79212884b0098e7052f88d930210ac97703bf2341276cffb530c.jpg)


$$
I = \frac {m g}{B l}
$$

代入数值得


图6.2.4(1)


$$
I = \frac {1 0 \times 1 0 ^ {- 3} \times 9 . 8 1}{1 . 0 \times 5 0 \times 1 0 ^ {- 2}} = 0. 2 0 (\mathrm{A})
$$

(2) 当 $IlB > mg$ 时, 导线会向上运动.

6.2.4 一铜线弯成 $\square$ 形, 如图 6.2.4(1) 所示, 其中 $OA$ 段和 $DO'$ 段固定在水平方向不动, $ABCD$ 段是边长为 $l$ 的正方形的三边, 可以绕 $OO'$ 转动;整个导线放在均匀外磁场中,磁感强度 B 竖直向上.已知铜线的横截面积为 $S=2.0mm^{2}$ , 铜的密度为 $8.9g/cm^{2}$ . 当这铜线中的电流为 I=10A 时, 在平衡情况下, AB 段和 CD 段与竖直方向的夹角为 $\alpha=15^{\circ}$ . 试求磁感强度 B 和磁场强度 H 的大小.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/541ee3b6b9812057f8d2245c8a41f1932a5c34381b46710ced738c0f08433b0b.jpg)


【解】载流铜线的 $AB$ 和 $CD$ 两段所受的安培力大小相等而方向相反，而且力的方向都与轴线 $OO'$ 平行，所以对偏转不起作用。对偏转起作用的只有 $BC$ 段所受的安培力，其大小为

$$
F = I l B
$$

它对转轴 $OO'$ 的力矩为[参见图6.2.4(2)]

(1) 

$$
M = F l \cos \alpha = I B l ^ {2} \cos \alpha\tag{2}
$$

另一方面，作用在 BC 段上的重力 mg 对转轴 $OO'$ 的力矩为

$$
M _ {1} = m g l \sin \alpha = \rho g S l ^ {2} \sin \alpha\tag{3}
$$

图6.2.4(2)

此外,作用在 AB 和 CD 两段的重力对转轴 $OO'$ 的力矩为

$$
M _ {2} = 2 m g \frac {l}{2} \sin \alpha = \rho g S l ^ {2} \sin \alpha\tag{4}
$$

当

$$
M = M _ {1} + M _ {2}\tag{5}
$$

时,导线便达到平衡.由以上诸式得所求的磁感强度的大小为

$$
\begin{array}{r l} B & = \frac {2 \rho g S}{I} \tan \alpha = \frac {2 \times 8 . 9 \times 1 0 ^ {- 3} \times 1 0 ^ {6} \times 9 . 8 1 \times 2 . 0 \times 1 0 ^ {- 6}}{1 0} \tan 1 5 ^ {\circ} \\ & = 9. 4 \times 1 0 ^ {- 3} (\mathrm{T}) \end{array}
$$

磁场强度的大小为

(6) 

$$
H = \frac {B}{\mu_ {0}} = \frac {9 . 4 \times 1 0 ^ {- 3}}{4 \pi \times 1 0 ^ {- 7}} = 7. 4 \times 1 0 ^ {3} (\mathrm{A/m})\tag{7}
$$

6.2.5 一质量为 $m$ 的导线 $AB$ , 水平地架在倾角为 $\theta$ 的两金属片 $C$ 和 $D$ 上, 两片相距为 $l$ , 并维持一定的电势差, 因而导线中有电流 $I_1$ 流过. 在下边有一条固定的无穷长直水平导线, 载有电流 $I_2$ . 两导线构成的平面与金属片的斜面重合, 如图 6.2.5 所示. 设电源离 $AB$ 很远, 联接电源的导线中的电流对 $AB$ 的作用力可略去不计, $AB$ 与 $C, D$ 间的摩擦力亦可略去不计. 试求 $AB$ 静止时, 两导线间的距离 $d$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/00559772cf4420dde6624f073c044cbfbcefbdf6b80b93bb10bf8f50b280a5c5.jpg)



图6.2.5


【解】 $I_{2}$ 在 $I_{1}$ 处产生的磁感强度的大小为

$$
B = \frac {\mu_ {0} I _ {2}}{2 \pi d}\tag{1}
$$

$I_{1}$ 受 $I_{2}$ 作用的安培力 F 的方向沿斜面向上，其大小为

$$
F = I _ {1} l B = \frac {\mu_ {0} I _ {1} I _ {2} l}{2 \pi d}\tag{2}
$$

当 $\pmb{F}$ 与作用在 $AB$ 上的重力沿斜面的分量 $mg\sin \theta$ 大小相等时， $AB$ 便静止。于是得 $AB$ 静止时两导线间的距离为

$$
d = \frac {\mu_ {0} I _ {1} I _ {2} l}{2 \pi m g \sin \theta}\tag{3}
$$

6.2.6 一均匀圆柱体的质量为 $m$ ，半径为 $R$ ，长为 $l$ ，它上面绕有 $N$ 匝外皮绝缘的细导线，导线与圆柱体的轴线共面。这圆柱体放在倾角为 $\theta$ 的斜面上，轴线是水平的，导线中通有电流 $I$ ，整个圆柱体都处在均匀外磁场中，磁感强度 $B$ 的方向竖直向上。当线圈的平面与斜面夹角为 $\varphi$ 时，圆柱体正好静止不动，如图6.2.6(1)所示。设导线的质量可略去不计，试求导线中电流的大小和方向。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/aad8a3d3a16dbd6e3245d72f36c5eeb60d0b9c7c00ff6bfea54288ad3417742a.jpg)



图6.2.6(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/322b409763b219daa64b7685ea73a44781eb4c183232d272d0eebb49318fc348.jpg)


【解】圆柱体静止时，它所受的力和力矩均为零.

圆柱体所受的重力沿斜面向下的分量为


图6.2.6(2)


$$
F = m g \sin \theta\tag{1}
$$

当它在斜面上静止时,斜面作用在它上面的力沿斜面向上的分量应为

$$
f _ {\mu} = m g \sin \theta\tag{2}
$$

如图 6.2.6(2) 所示. 以圆柱体的轴线为转轴, 这个力对转轴的力矩为

$$
M _ {\mu} = f _ {\mu} R = m g R \sin \theta\tag{3}
$$

$M_{\mu}$ 欲使图 6.2.6(2) 中的圆柱体反时针方向转动.

圆柱体上的载流线圈在磁场 B 中所受的安培力对转轴的力矩为

$$
M = N I S B \sin \alpha\tag{4}
$$

式中 $\alpha$ 是线圈平面法线方向(电流 $I$ 的右旋进方向) $\pmb{n}$ 与 $\pmb{B}$ 之间的夹角.由图6.2.6(2)可见

$$
\alpha = \theta + \varphi\tag{5}
$$

所以

$$
M = N I S B \sin (\theta + \varphi)\tag{6}
$$

要使线圈静止,首先,M必须是使圆柱体往顺时针方向转动,也就是 $a<\pi$ .这就要求电流I的方向如图6.2.6(2)中所示.其次,M与 $M_{\mu}$ 必须大小相等,即

$$
M = M _ {\mu}\tag{7}
$$

于是由式(3)、(6)、(7)得

$$
I = \frac {m g R \sin \theta}{N S B \sin (\theta + \varphi)}\tag{8}
$$

因线圈面积 S=2Rl，故得所求电流的大小为

$$
I = \frac {m g \sin \theta}{2 N l B \sin (\theta + \varphi)}\tag{9}
$$

【讨论】上面的解是以圆柱体的轴线为转轴,两个外力矩 $M_{\mu}$ 和 M 大小相等而转向相反,故达到静止.也可以取圆柱体与斜面接触处为转轴,来计算力矩.这时作用在圆柱上的重力的力矩为

$$
M _ {g} = m g R \sin \theta\tag{10}
$$

作用在载流线圈上的安培力矩是一个力偶矩,因此,它对这个转轴的力矩也是

$$
M = N I S B \sin \alpha = N I S B \sin (\theta + \varphi)\tag{11}
$$

$M_{g}$ 欲使圆柱体反时针方向转动，而 M 则欲使圆柱体顺时针方向转动，故当

$$
M = M _ {g}
$$

时，圆柱体便达到平衡.由式(10)、(11)和(12)仍得出式(9).

(12) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f50f39d80420fef4cf0b1acfd9a6ad2342500c232b89c9482c4f082709e21fdb.jpg)



图6.2.7


6.2.7 质量为 $m$ 的一段导线弯成 $\square$ 形, 上面一段长为 $l$ , 处在磁感强度为 $\pmb{B}$ 的均匀外磁场中, $\pmb{B}$ 与导线垂直; 导线下面两端分别插在两水银杯里, 两杯水银则与一带开关 $\mathbf{K}$ 的电源联接, 如图 6.2.7 所示. 当 $\mathbf{K}$ 一接通, 导线便会从水银杯里跳起来. 设跳起的高度为 $h$ , 试求通过导线的电荷量 $q$ , 并计算 $m = 10g, l = 20cm, h = 3.0m, B = 0.10T$ 时 $q$ 的值.

【解】当导线中通有电流 I 时, 导线上面一段所受的安培力

$\pmb{F}$ 的大小为

$$
F = I l B\tag{1}
$$

$\pmb{F}$ 的方向向上，它使导线跳起.导线两边的竖直部分所受的安培力都沿水平方向，而且大小相等，方向相反，对导线的运动没有影响.由牛顿运动定律得

$$
m \mathrm{d} \boldsymbol {v} = \boldsymbol {F} \mathrm{d} t\tag{2}
$$

因v和F都向上,故可写作

$$
m \mathrm{d} v = F \mathrm{d} t = I l B \mathrm{d} t\tag{3}
$$

对时间 $t$ 积分得

$$
m \int_ {0} ^ {v _ {0}} \mathrm{d} v = m v _ {0} = B l \int_ {0} ^ {t} I \mathrm{d} t = B l \int_ {0} ^ {q} \mathrm{d} q = B l q\tag{4}
$$

式中

$$
v _ {0} = \sqrt {2 g h}\tag{5}
$$

是导线跳出水银时的速度.于是得所求的电荷量为

$$
q = \frac {m}{B l} \sqrt {2 g h}\tag{6}
$$

代入数值得

$$
q = \frac {1 0 \times 1 0 ^ {- 3}}{0 . 1 0 \times 2 0 \times 1 0 ^ {- 2}} \sqrt {2 \times 9 . 8 1 \times 3 . 0} = 3. 8 (\mathrm{C})\tag{7}
$$

【讨论】由式(5)可见,导线跳起的高度 h 从导线下端离开水银面时算起.

6.2.8 一电流秤如图 6.2.8 所示, 它的一臂下面挂有一个矩形线圈, 共有九匝, 这线圈的下部悬在磁感强度为 B 的均匀外磁场内, 下边长为 l 的一段与 B 垂直. 当线圈的导线中通有电流 I 时, 调节砝码使两臂达到平衡; 然后使电流反向, 但大小仍为 I, 这时需要在一臂上加质量为 m 的砝码, 才能使两臂再达到平衡. 试求磁感强度的大小 B, 并计算当 $l = 10.0 \, cm, I = 0.100 \, A, m = 8.78 \, g$ 时 B 的值.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/bdf3947ed975beea7b56f6fd95d4ed7945d8575cbb0a8b004065f05b13cac929.jpg)


【解】如图 6.2.8 所示, 线圈下边的水平部分所受的安培力方向向下, 其大小为

$$
F = 9 I l B\tag{1}
$$

电流 I 反向后, 安培力的大小仍为式(1), 但方向则向上. 矩形线圈两边的竖直部分所受的安培力都在水平方向, 而且大小相等, 方向相反, 对天平没有影响. 于是按题意得

图6.2.8

$$
m g = 2 \times 9 I l B = 1 8 I l B\tag{2}
$$

所以

$$
B = \frac {m g}{1 8 I l}\tag{3}
$$

代入数值得

$$
B = \frac {8 . 7 8 \times 1 0 ^ {- 3} \times 9 . 8 1}{1 8 \times 0 . 1 0 0 \times 1 0 . 0 \times 1 0 ^ {- 2}} = 0. 4 7 9 (\mathrm{T})\tag{4}
$$

6.2.9 空间某处有两个磁场, 它们的磁场强度分别为 $H_{1}$ 和 $H_{2}, H_{1}$ 和 $H_{2}$ 都在水平方向, $H_{1}$ 向北, 大小为 $H_{1}=1.73Oe; H_{2}$ 向东, 大小为 $H_{2}=1.00Oe$ . 现在该处有一段载流直导线, 试问它应如何放置, 才能使两磁场作用在它上面的合力为零?

【解】该处的磁场是这两个磁场叠加而成的磁场,磁场强度 H 的大小为

$$
H = \sqrt {H _ {1} ^ {2} + H _ {2} ^ {2}} = \sqrt {1 . 7 3 ^ {2} + 1 . 0 0 ^ {2}} = 2. 0 0 (\mathrm{Oe})
$$

H 的方向为水平方向, 北偏东的角度为

$$
\theta = \arctan \frac {H _ {2}}{H _ {1}} = \arctan \frac {1 . 0 0}{1 . 7 3} = 3 0 ^ {\circ} 0 2 ^ {\prime}
$$

这段载流导线所受的安培力为

$$
\mathrm{d} \boldsymbol {F} = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B} = \mu_ {0} I \mathrm{d} \boldsymbol {l} \times \boldsymbol {H}
$$

要使 dF=0，必须使 dl 沿着或逆着 H 的方向。即将该导线放置在水平位置，北偏东 $30^{\circ}02'$ 。

6.2.10 一段直导线长为 l = 10cm，载有 I = 10 安培的电流，处在磁感强度为

B 的均匀外磁场中，B 与电流垂直，B 的大小为 B = 30Gs. (1) 试求磁场作用在这段导线上的力 F 的大小；(2) 当这段导线以 25cm/s 的速率逆 F 的方向运动时，试求 F 作功的功率 P.

【解】(1) $\pmb{F}$ 的大小为

$$
\begin{array}{r l} F & = I I B = 1 0 \times 1 0 \times 1 0 ^ {- 2} \times 3 0 \times 1 0 ^ {- 4} \\ & = 3. 0 \times 1 0 ^ {- 3} (\mathrm{N}) \end{array}
$$

(2) $\pmb{F}$ 作功的功率为

$$
\begin{array}{r l} P & = \boldsymbol {F} \cdot \boldsymbol {v} = - F v = - 3. 0 \times 1 0 ^ {- 3} \times 2 5 \times 1 0 ^ {- 2} \\ & = - 7. 5 \times 1 0 ^ {- 4} (\mathrm{W}) \end{array}
$$

6.2.11 一正方形线圈由外皮绝缘的细导线绕成,共绕有200匝,每边长为150mm,放在磁感强度为4.0T的外磁场中.当导线中通有I=8.0A的电流时,试求:(1)作用在线圈上的力矩 $M=m\times B$ 的最大值;(2)线圈的磁矩m的值.

【解】（1）力矩 M 的最大值为

$$
\begin{array}{r l} M _ {\max} & = N I S B = 2 0 0 \times 8. 0 \times (1 5 0 \times 1 0 ^ {- 3}) ^ {2} \times 4. 0 \\ & = 1. 4 \times 1 0 ^ {2} (\mathrm{N} \cdot \mathrm{m}) \end{array}
$$

(2)线圈的磁矩 m 的值为

$$
\begin{array}{r l} m & = N I S = 2 0 0 \times 8. 0 \times (1 5 0 \times 1 0 ^ {- 3}) ^ {2} \\ & = 3 6 (\mathrm{A} \cdot \mathrm{m} ^ {2}) \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6755a74c6a2a3349306837fda399ddb0c20522b709b881fb56c29aa1eaaf0b73.jpg)


6.2.12 一矩形线圈由表面绝缘的细导线密绕而成,共10匝,矩形边长分别为10.0cm和5.0cm,导线中载有0.10A的电流,这线圈可以绕它的一边 $OO'$ 转动,如图6.2.12(1)所示.当加上磁感强度为B的均匀外磁场,B与线圈平面成30°角,B的大小为0.50T时,试求使这线圈转动的力矩.

【解】载有电流 I 的导线上的电流元 Idl 所受的安培力为

$$
\mathrm{d} \boldsymbol {F} = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B}\tag{1}
$$

图6.2.12(1)

这个力对转轴的力矩为

$$
\mathrm{d} \boldsymbol {M} = \boldsymbol {r} \times \mathrm{d} \boldsymbol {F} = I r \times (\mathrm{d} l \times \boldsymbol {B})\tag{2}
$$

式中 r 是从转轴到 dl 的矢径.

使线圈转动的力矩是作用在四条边上的安培力矩之和. 线圈的 $OO'$ 边是转轴, 它的 $r = 0$ , 故安培力矩为零. 与 $OO'$ 垂直的两边所受的安培力分别是向上和向下, 这两个力对转轴 $OO'$ 的力矩均为零. 因此, 只剩下与 $OO'$ 平行的一边了. 这一边所受的安培力为

$$
\boldsymbol {F} = N \boldsymbol {l l} \times \boldsymbol {B} = N \boldsymbol {l l} \boldsymbol {B e} \times \boldsymbol {e} _ {B}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c494135eaf5931d482e16d149f6e2e434d0026084cf7074bac9f5917eee0d942.jpg)


(3) 

式中 e 和 $e_{B}$ 分别是沿 I 和沿 B 方向上的单位矢量. 这个力对

图6.2.12(2)

$OO'$ 轴的力矩为[参见图6.2.12(2)]

$$
\begin{array}{r l} \boldsymbol {M} & = \boldsymbol {r} \times \boldsymbol {F} = N I I B r \boldsymbol {e} _ {r} \times (\boldsymbol {e} \times \boldsymbol {e} _ {B}) \\ & = N I I B r [ (\boldsymbol {e} _ {r} \cdot \boldsymbol {e} _ {B}) \boldsymbol {e} - (\boldsymbol {e} _ {r} \cdot \boldsymbol {e}) \boldsymbol {e} _ {B} ] \\ & = N I I B r (\boldsymbol {e} _ {r} \cdot \boldsymbol {e} _ {B}) \boldsymbol {e} = N I I B r \cos 3 0 ^ {\circ} \boldsymbol {e} \\ & = \frac {\sqrt {3}}{2} N I I B r e \end{array}\tag{4}
$$

$\pmb{M}$ 与 $\pmb{e}$ （电流 $I$ )的方向相同，即 $\pmb{M}$ 欲使图6.2.12(1)中的线圈转向 $x$ 轴. $\pmb{M}$ 的大小为

$$
\begin{array}{r l} M & = \frac {\sqrt {3}}{2} N I l B r \\ & = \frac {\sqrt {3}}{2} \times 2 0 \times 0. 1 0 \times 1 0 \times 1 0 ^ {- 2} \times 0. 5 0 \times 5. 0 \times 1 0 ^ {- 2} \\ & = 4. 3 \times 1 0 ^ {- 3} (\mathrm{N} \cdot \mathrm{m}) \end{array}\tag{5}
$$

【别解】作用在载流线圈上的安培力矩为

$$
\boldsymbol {M} = \boldsymbol {m} \times \boldsymbol {B} = N I S \boldsymbol {n} \times \boldsymbol {B}
$$

式中 N 是匝数, S 是线圈面积, n 是线圈法线方向(电流的右旋进方向)上的单位矢量. 由图6.2.12(3)可见, 这个力矩欲使线圈的法线方向 n 转向 B.

(6) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/fcfee023271396f3cb256095dbaace5b26ffb55db3acce559c3dd85d39419048.jpg)


由于作用在载流线圈上的安培力矩是一个力偶矩，故它对任何一个垂直于 $n \times B$ 平面的转轴，其力矩都相同。于是，式(6)的 $M$ 便是所求的力矩，它可以写成

图6.2.12(3)

$$
\boldsymbol {M} = N I S B \sin 6 0 ^ {\circ} \boldsymbol {e} = \frac {\sqrt {3}}{2} N I l r B \boldsymbol {e}\tag{7}
$$

这便是式(4).

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c0ea772468e64185b5a48acfd17b8ba5cf01d09ed951f7d7d26c0a38f0880b15.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6d0e60934b668cbe7adc5dce7e1f2d0a2a921c6af53085c8fefac2a234db56b3.jpg)



(2)



图6.2.13


6.2.13 一矩形线圈长 20mm, 宽 10mm, 由外皮绝缘的细导线密绕而成, 共有 1000 匝, 放在 B = 1000Gs 的均匀外磁场中, 当导线中通有 100mA 的电流时, 试求图 6.2.13 中两种情况下线圈各边所受的安培力之和 F 以及线圈所受的力矩 M: (1) B 与线圈平面的法线平行; (2) B 与线圈平面的法线垂直.

【解】（1）由安培力公式

$$
\mathrm{d} \boldsymbol {F} = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B}\tag{1}
$$

得图 6.2.13(3) 中线圈的四个边所受的安培力分别如下：

$$
a b \text { 边 }: F _ {1} = N I l _ {1} B e _ {1}\tag{2}
$$

式中 N 是线圈匝数, $e_{1}$ 是向上的单位矢量.

bc 边: $F_{2}=NIl_{2}Be_{2}$ 

(3) 

式中 $e_{2}$ 是向右的单位矢量.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5e307e7d3a86f565904b40c37fe2d33b209fe00a5a9edef24ed86069ac656d76.jpg)


cd 边: $F_{3} = -NIl_{1}Be_{1}$ 

da 边: $F_{4} = -NIl_{2}Be_{2}$ 

(4) 

于是得线圈各边所受的安培力之和为

$$
\boldsymbol {F} = \boldsymbol {F} _ {1} + \boldsymbol {F} _ {2} + \boldsymbol {F} _ {3} + \boldsymbol {F} _ {4} = 0\tag{5}
$$

线圈所受的力矩为

(6) 

$$
\boldsymbol {M} = \boldsymbol {m} \times \boldsymbol {B} = N I S \boldsymbol {n} \times \boldsymbol {B}\tag{7}
$$

图6.2.13(3)

因 $\pmb{n}$ 与 $\pmb{B}$ 同方向，故 $n\times B = 0$ ，于是得

$$
\boldsymbol {M} = 0\tag{8}
$$

(2)由式(1)得图6.2.13(4)中线圈各边所受的安培力分别如下：

ab 边: $F_{1}^{\prime}=0$ 

(9) 

bc 边： $F_{2}^{\prime}=NIl_{2}Be_{3}$ 

式中 $e_{3}$ 是垂直于纸面向内的单位矢量.

(10) 

cd 边: $F_{3}^{\prime}=0$ 

(11) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/7785c390d5df77b8668e31eac6d13e8fde5b81bee9a5ba9b3fd3aba0eff270fc.jpg)


da 边： $F_{4}^{\prime} = -NIl_{2}Be_{3}$ 

(12) 

于是得线圈各边所受的安培之和为

$$
\boldsymbol {F} ^ {\prime} = \boldsymbol {F} _ {1} ^ {\prime} + \boldsymbol {F} _ {2} ^ {\prime} + \boldsymbol {F} _ {3} ^ {\prime} + \boldsymbol {F} _ {4} ^ {\prime} = 0\tag{13}
$$

图6.2.13(4)

线圈所受的力矩为

$$
\boldsymbol {M} ^ {\prime} = \boldsymbol {m} \times \boldsymbol {B} = N I l _ {1} l _ {2} B e _ {1}\tag{14}
$$

式中 $e_{1}$ 是向上的单位矢量. $M'$ 的大小为

$$
\begin{array}{r l} M ^ {\prime} & = N I l _ {1} l _ {2} B \\ & = 1 0 0 0 \times 1 0 0 \times 1 0 ^ {- 3} \times 1 0 \times 1 0 ^ {- 3} \times 2 0 \times 1 0 ^ {- 3} \times 1 0 0 0 \times 1 0 ^ {- 4} \\ & = 2. 0 \times 1 0 ^ {- 3} (\mathrm{N} \cdot \mathrm{m}) \end{array}\tag{15}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/d04b42a00e89f232c8f086425433a410fdf057d5627f3cd72ce96178b6aa8079.jpg)


6.2.14 一边长为 $a$ 的正方形线圈载有电流 $I$ , 处在磁感强度为 $\pmb{B}$ 的均匀外磁场中, $\pmb{B}$ 沿水平方向, 线圈可以绕通过中心的竖直轴 $OO'$ (图6.2.14) 转动, 转动惯量为 $J$ . 略去轴承上的摩擦, 试求这线圈围绕平衡位置作微小振动的周期 $T$ .

【解】 线圈受磁场作用的力矩为

$$
\boldsymbol {M} = \boldsymbol {m} \times \boldsymbol {B} = I a ^ {2} \boldsymbol {n} \times \boldsymbol {B}\tag{1}
$$

式中 n 是线圈法线方向(电流 I 的右旋进方向)上的单位矢量, M 的大小为


图6.2.14


$$
M = I a ^ {2} B \sin \theta\tag{2}
$$

式中 $\theta$ 是 $n$ 与 $B$ 之间的夹角. 当 $\theta = 0$ 达到平衡. 当 $\theta$ 很小时, 线圈便作微小振动. 这时 $\sin \theta \approx \theta$ , 线圈的运动方程为

$$
J \frac {\mathrm{d} ^ {2} \theta}{\mathrm{d} t ^ {2}} = - M = - I a ^ {2} B \theta\tag{3}
$$

所以

$$
\frac {\mathrm{d} ^ {2} \theta}{\mathrm{d} t ^ {2}} + \frac {I a ^ {2} B}{J} \theta = 0\tag{4}
$$

这个方程表明,线圈作简谐振动,其振动周期为

$$
T = \frac {2 \pi}{\omega} = 2 \pi \sqrt {\frac {J}{I a ^ {2} B}}\tag{5}
$$

6.2.15 一导线每厘米长的质量为 $0.10\mathrm{g}$ , 作成一个矩形线圈 abcd, 边长分别为 $8.0\mathrm{cm}$ 和 $6.0\mathrm{cm}$ , 如图 6.2.15(1) 所示, 它可以绕 ab 边自由转动, 图中 $z - x$ 平面为水平面, 整个线圈处在磁感强度为 $\pmb{B}$ 的均匀外磁场中, $\pmb{B}$ 沿 $y$ 轴方向. 当线圈中载有 $I = 10\mathrm{A}$ 电流时, 线圈离开垂直位置, 偏转 $30^{\circ}$ 角. (1) 试求磁感强度 $\pmb{B}$ 的值; (2) 如果 $\pmb{B}$ 的方向不是沿 $y$ 轴, 而是沿 $x$ 轴, 线圈将如何?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/941025fa1073d1ea1e315b4a7b2b982b956e0f7564b6fd287d41d9367fd4f881.jpg)



图6.2.15(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/fe9fecc1c6962b3f1e22058c7c10a2b1900b3c8af51c8bc640fac6b4b37b25d1.jpg)


【解】（1）平衡时，对转轴 $(z$ 轴）来说，线圈所受的重力矩和安培力矩大小相等而方向相反。这时对转轴来说，设线圈的边长为 $ab = l_{1}, bc = l_{2}$ ，则线圈各边所受的重力矩分别为[参见图6.2.15(2)]

$$
M _ {a b} = 0\tag{1}
$$

$$
M _ {b c} = M _ {d a} = \frac {1}{2} \rho g l _ {2} ^ {2} \sin \theta
$$

$$
M _ {c d} = \rho g l _ {1} l _ {2} \sin \theta\tag{2}
$$

于是得重力矩的大小为

(3) 

$$
\begin{array}{r l} M _ {g} & = M _ {a b} + M _ {b c} + M _ {c d} + M _ {d a} \\ & = \rho g l _ {2} (l _ {1} + l _ {2}) \sin \theta \end{array}\tag{4}
$$

图6.2.15(2)

$M_{g}$ 的方向是使角度 $\theta$ 减小. 这时安培力矩

$$
\boldsymbol {M} = \boldsymbol {m} \times \boldsymbol {B}\tag{5}
$$

的方向是使角度 $\theta$ 增大, M 的大小为

$$
M = m B \sin \left(\frac {\pi}{2} - \theta\right) = I l _ {1} l _ {2} B \cos \theta\tag{6}
$$

平衡时有

$$
M = M _ {g}\tag{7}
$$

于是得所求的磁感强度的值为

$$
\begin{array}{r l} B & = \frac {\rho g (l _ {1} + l _ {2})}{I l _ {1}} \tan \theta \\ & = \frac {0 . 1 0 \times 1 0 ^ {- 3} \times 9 . 8 1 \times (6 . 0 + 8 . 0)}{1 0 \times 6 . 0 \times 1 0 ^ {- 2}} \tan 3 0 ^ {\circ} \\ & = 1. 3 \times 1 0 ^ {- 2} (\mathrm{T}) \end{array}\tag{8}
$$

(2) 如果 B 沿 x 轴方向, 则安培力矩 $M = m \times B$ 的方向将与重力矩 $M_{g}$ 的方向相同, 这时线圈只有在 $\theta = 0$ 时才能达到平衡.

6.2.16 永磁式电流计的主要部分是在永磁场中装一个可以转动的矩形线圈, 线圈的转轴上装有螺旋形弹簧; 轴的上端安有一根随轴转动的指针, 当电流通过线圈时, 指针便随着线圈转动到一定位置; 为了使线圈转动的范围内各处的磁场大小都一样, 让线圈套在一个圆柱形的软铁心上, 如图 6.2.16 所示. 设线圈长为 $a$ , 宽为 $b$ , 共有 $N$ 匝, 当它的导线中通有电流 $I$ 时, 指针偏转的角度为 $\theta$ , 永磁场的磁感强度大小为 $B$ . (1) 试求磁场作用在线圈上的力矩 $M$ 和弹簧的扭转系数 $K$ ; (2) 当 $B = 2000\mathrm{Gs}$ , $a = 2.0\mathrm{cm}$ , $b = 1.0\mathrm{cm}$ , $N = 250$ 匝, $I = 0.10\mathrm{mA}$ 时, $\theta = 30^{\circ}$ , 试计算 $K$ 的值.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/55c90a16395403a15cbbda28786d3d8a909a6c6c029fb38011d2c653de0cd5d0.jpg)



(1) 主视图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/0cdfa89dee1cdccef284725017b2adf9c303b31b3642d4efddbe1fa9cd928071.jpg)



(2)俯视图



图6.2.16


【解】（1）由图6.2.16可见，线圈与转轴平行的两边都处在辐射形磁场中，即磁力线都指向或背向转轴，因此，不论线圈转到什么位置，线圈的法线方向（电流的右旋进方向） $n$ 总是与 $\pmb{B}$ 垂直，故磁场作用在线圈上的力矩其大小为

$$
M = | \boldsymbol {m} \times \boldsymbol {B} | = N I a b B\tag{1}
$$

弹簧的扭转系数为

$$
K = \frac {M}{\theta} = \frac {N l a b B}{\theta}\tag{2}
$$

(2)代入数值得

$$
\begin{array}{r l} {K} & {= \frac {N I a b B}{\theta}} \\ & {= \frac {2 5 0 \times 0 . 1 0 \times 1 0 ^ {- 3} \times 2 . 0 \times 1 0 ^ {- 2} \times 1 . 0 \times 1 0 ^ {- 2} \times 2 0 0 0 \times 1 0 ^ {- 4}}{3 0}} \\ & {= 3. 3 \times 1 0 ^ {- 8} (\mathrm{N} \cdot \mathrm{m/度})} \end{array}\tag{3}
$$

6.2.17 一永磁式电流计中线圈面积为 $6.0\mathrm{cm}^2$ ，由50匝表面绝缘的细导线密绕而成；线圈平面的法线在水平方向，线圈可以绕固定的竖直轴 $OO^{\prime}$ 转动，永磁体的磁感强度 $\pmb{B}$ 与转轴 $OO^{\prime}$ 垂直并成辐射状，如图6.2.17所示.线圈的 $ab$ 边和cd边所在处的 $B = 100\mathrm{Gs}$ ，导线中通有 $1.0\mathrm{mA}$ 的电流.设线圈轴上游丝的扭转系数为 $K = 0.10\mathrm{dyn}\cdot \mathrm{cm}/$ 度，试求线圈偏转的角度.

【解】因线圈所在处磁感强度 B 成辐射状, 故磁场作用在线圈上的安培力矩 M 的大小为

$$
M = N I S B\tag{1}
$$

式中 $N$ 和 $S$ 分别是线圈的匝数和面积， $I$ 是电流。设游丝的扭转系数为 $K$ ，则当线圈偏转角度为 $\theta$ 时，便有

$$
M = K \theta\tag{2}
$$

于是得

$$
\begin{array}{r l} \theta & = \frac {N I S B}{K} = \frac {5 0 \times 1 . 0 \times 1 0 ^ {- 3} \times 6 . 0 \times 1 0 ^ {- 4} \times 1 0 0 \times 1 0 ^ {- 4}}{0 . 1 0 \times 1 0 ^ {- 5} \times 1 0 ^ {- 2}} \\ & = 3 0 ^ {\circ} \end{array} \tag {3}
$$

【说明】达因是力的非法定单位, $1dyn=10^{-5}N$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/71172aff341eb032841d1567012800d9d2a5c7958391172e7bd2a36189e42881.jpg)


6.2.18 台式或墙式电流计是一种很灵敏的电流计,它的矩形线圈由金属丝悬挂在圆柱形铁心和永磁铁之间的狭缝里,这狭缝里的磁力线是辐射状的;金属丝上固定了一个小反

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a94941ca61004413c74e6e411d0b2f11eb7ee629a40a40b47ae1b543d65b11e8.jpg)



(1) 立体图



(2) 俯视图



图6.2.17


光镜, 镜前有照明光源和圆弧形标尺(圆弧的中心在线圈的转轴上), 如图 6.2.18 所示. 当线圈内有电流 $I$ 通过时, 线圈便受力而转动. 已知线圈是由表面绝缘的细导线密绕而成, 长为 $a = 3.0\mathrm{cm}$ , 宽为 $b = 1.0\mathrm{cm}$ , 共有 100 匝. 金属丝的扭转系数为 $1.0 \times 10^{-5}$ 克力·厘米/度, 磁场强度为 $H = 1000\mathrm{Oe}$ , 弧尺的半径为 $R = 1.00\mathrm{m}$ . (1) 试求电流 $I = 1.0\mu \mathrm{A}$ 时, 磁场作用在线圈上的力矩 $M$ 和线圈的偏转角度 $\theta$ ; (2) 当弧尺上的光点偏转为 $1.0\mathrm{mm}$ 时, 通过电流计的电流是多少?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/196932dd3da8030edd7c3ac9330f421502207e963f6218441a3d80db0270d26e.jpg)



(1) 立体图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/b25ffcdf55d90355b06c613e9fbba555f85f3530a29d68ff5015e6d3af4814b2.jpg)



(2) 俯视图



图6.2.18


【解】（1）由于线圈所在处的磁场是辐射状，故磁场作用在线圈上的安培力矩的大小为

$$
M = N I a b B = \mu_ {0} N I a b H\tag{1}
$$

式中 $N$ 是线圈的匝数.

设金属丝的扭转系数为 K，则当线圈偏转的角度为 $\theta$ 时，便有

$$
K \theta = M\tag{2}
$$

所以

$$
\theta = \frac {\mu_ {0} N I a b H}{K}\tag{3}
$$

代入数值得

$$
\begin{array}{r l} M & = \mu_ {0} N I a b H \\ & = 4 \pi \times 1 0 ^ {- 7} \times 1 0 0 \times 1. 0 \times 1 0 ^ {- 6} \times 3. 0 \times 1 0 ^ {- 2} \times 1. 0 \times 1 0 ^ {- 2} \times 1 0 0 0 \times \frac {1 0 ^ {3}}{4 \pi} \\ & = 3. 0 \times 1 0 ^ {- 9} (\mathrm{N} \cdot \mathrm{m}) \\ \theta & = \frac {M}{K} = \frac {3 . 0 \times 1 0 ^ {- 9}}{1 . 0 \times 1 0 ^ {- 5} \times 9 . 8 1 \times 1 0 ^ {- 3} \times 1 0 ^ {- 2}} \\ & = 3 ^ {\circ} 0 3 ^ {\prime} \end{array}\tag{4}
$$

(5) 

(2)由图6.2.18(2)可见，弧尺上的光点偏转 $1.0\mathrm{mm}$ 时，线圈的偏转角为

$$
\theta = \frac {1 . 0 \times 1 0 ^ {- 3}}{2 \times 1 . 0} = 5. 0 \times 1 0 ^ {- 4} (\mathrm{rad})\tag{6}
$$

将式(6)的 $\theta$ 值代入式(3)得

$$
\begin{array}{r l} I & = \frac {K \theta}{\mu_ {0} N a b H} \\ & = \frac {1 . 0 \times 1 0 ^ {- 5} \times 9 . 8 1 \times 1 0 ^ {- 3} \times 1 0 ^ {- 2} \times 5 . 0 \times 1 0 ^ {- 4} \times 1 8 0 / \pi}{4 \pi \times 1 0 ^ {- 7} \times 1 0 0 \times 3 . 0 \times 1 0 ^ {- 2} \times 1 . 0 \times 1 0 ^ {- 2} \times 1 0 0 0 \times 1 0 ^ {3} / 4 \pi} \\ & = 9. 4 \times 1 0 ^ {- 9} (\mathrm{A}) \end{array}\tag{7}
$$

【说明】奥斯特是磁场强度的非法定单位， $1\mathrm{Oe}=\frac{10^{3}}{4\pi}\mathrm{A/m}$ . 克力是力的非法定单位，1克力 $=9.81\times10^{-3}\mathrm{N}$ .

6.2.19 一万用电表的表头是一只磁电式电表,它的矩形线圈长 $11\mathrm{mm}$ , 宽 $10\mathrm{mm}$ , 由 1500 匝表面绝缘的导线绕成; 线圈游丝的扭转系数为 $2.2 \times 10^{-8}\mathrm{N} \cdot \mathrm{m}/$ 度. 若表头的最大偏转角为 $90^{\circ}$ , 表头的灵敏度 (即最大偏转时的电流) 为 $40\mu \mathrm{A}$ , 试求线圈所在处 (即磁铁的空隙中) 的磁感强度.

【解】 线圈的平衡条件为

$$
N I a b B = K \theta
$$

式中 $N, a$ 和 $b$ 分别是线圈的匝数、长度和宽度， $I$ 是线圈导线中的电流， $B$ 是磁感强度， $K$ 是游丝的扭转系数， $\theta$ 是线圈转过的角度。由上式得

$$
\begin{array}{r l} B & = \frac {K \theta}{N I a b} = \frac {2 . 2 \times 1 0 ^ {- 8} \times 9 0}{1 5 0 0 \times 4 0 \times 1 0 ^ {- 6} \times 1 1 \times 1 0 ^ {- 3} \times 1 0 \times 1 0 ^ {- 3}} \\ & = 0. 3 0 (\mathrm{T}) \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/d1c1d5e8bef8b06ce6e8dfa0bd52e426ecfd6edab5ac7d2e974bfcebd0566590.jpg)



图6.2.20(1)


6.2.20 一半径为 R=0.10 米的半圆形线圈, 载有电流 I=10 安培, 放在均匀外磁场中, 磁场强度 H 的大小为 $H=5.0 \times 10^{3}Oe$ , 方向与线圈平面平行, 如图 6.2.20(1) 所示. (1) 试求线圈所受力矩的大小和方向; (2) 在这力矩的作用下, 线圈转 $90^{\circ}$ (即转到线圈平面与 H 垂直), 设在转动过程中, 线圈中的电流不变, 试求力矩作的功.

【解】（1）线圈所受的力矩为

$$
\boldsymbol {M} = \boldsymbol {m} \times \boldsymbol {B} = I S \boldsymbol {n} \times \boldsymbol {B} = \mu_ {0} I S \boldsymbol {n} \times \boldsymbol {H}\tag{1}
$$

式中 $S$ 是线圈面积, $\pmb{n}$ 是线圈法线方向(即电流的右旋进方向)上的单位矢量, 在图6.2.20(1)中垂直于纸面向外. 故 $\pmb{M}$ 的方向向上, $\pmb{M}$ 的大小为

$$
\begin{array}{r l} M & = \mu_ {0} I S H = 4 \pi \times 1 0 ^ {- 7} \times 1 0 \times \frac {1}{2} \times \pi \times (0. 1 0) ^ {2} \times 5. 0 \times 1 0 ^ {3} \times \frac {1 0 ^ {3}}{4 \pi} \\ & = 7. 9 \times 1 0 ^ {- 2} (\mathrm{N} \cdot \mathrm{m}) \end{array}\tag{2}
$$

(2) 当 $\pmb{n}$ 与 $\pmb{H}$ 的夹角为 $\theta$ 时, 力矩的大小为

$$
M = \mu_ {0} I S H \sin \theta\tag{3}
$$

设 n 转向 H，即 $\theta$ 从 $\pi/2$ 到零，则力矩作的功为

$$
\begin{array}{r l} W & = - \int_ {\pi / 2} ^ {0} M \mathrm{d} \theta = \mu_ {0} I S H \int_ {0} ^ {\pi / 2} \sin \theta \mathrm{d} \theta = \mu_ {0} I S H \\ & = 7. 9 \times 1 0 ^ {- 2} (\mathrm{J}) \end{array}\tag{4}
$$

【讨论】一、(4)式中 $-\int_{\pi/2}^{0}M\mathrm{d}\theta$ 有负号, 是因为 M 的方向与 $\theta$ 的右旋进方向相反. 如果用 $a=\frac{\pi}{2}-\theta$ 作变量, 如图 6.2.20(2)所示, 则 M 作的功便为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/efe6e6a8b5eaef4bbb66e60dfbb1a0423894a457473862f6caa6dbb23c17b84e.jpg)



图6.2.20(2)


$$
M = \int_ {0} ^ {\pi / 2} M \mathrm{d} \alpha = \mu_ {0} I S H \int_ {0} ^ {\pi / 2} \cos \alpha \mathrm{d} \alpha = \mu_ {0} I S H\tag{5}
$$

结果与式(4)相同.

二、如果 n 是转到与 H 逆平行(即 n 与 H 方向相反)，则 M 作的功便为

$$
W = - \int_ {\pi / 2} ^ {\pi} M \mathrm{d} \theta = - \mu_ {0} I S H \int_ {\pi / 2} ^ {\pi} \sin \theta \mathrm{d} \theta = - \mu_ {0} I S H\tag{6}
$$

6.2.21 一导线做成的圆环, 半径为 R, 载有电流 I, 放在磁感强度为 B 的均匀外磁场中, B 与圆环的轴线平行并沿电流 I 的右旋进方向. 试求 B 在导线内产生的张力.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a785378667953c8a1ebcc5454dd261c20745996a6e581bc0629b6e56fd46e28e.jpg)


【解】考虑 B 作用在圆环的一半上的安培力. 如图 6.2.21(1), 这半圆环上 $\theta$ 处的电流元 Idl 所受的安培力为


图6.2.21(1)


$$
\mathrm{d} \boldsymbol {F} = \boldsymbol {I} \mathrm{d} \boldsymbol {l} \times \boldsymbol {B}\tag{1}
$$

其方向沿半径向外,其大小为

$$
\mathrm{d} F = I B \mathrm{d} l\tag{2}
$$

由对称性可见, 半圆环所受的安培力 F 的方向必定向上, 即在 $\theta = \pi/2$ 的方向上. F 的大小为

$$
\begin{array}{r l} F & = \int (\mathrm{d} F) \sin \theta = I B \int \sin \theta \mathrm{d} l = I B R \int_ {0} ^ {\pi} \sin \theta \mathrm{d} \theta \\ & = 2 I B R \end{array}\tag{3}
$$

于是得所求的张力为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/81af45418bc18bbd1bc2f6dcf125c77a138b826f1652f76152a432eabe831c17.jpg)



图6.2.21(2)


$$
T = \frac {F}{2} = I B R\tag{4}
$$

【别解】由安培力公式(1)知圆环上一小段 $l\Delta l = IR\Delta\theta$ 所受的力 $\Delta F$ 沿半径向外, 其大小为

$$
\Delta F = I B R \Delta \theta\tag{5}
$$

如图6.2.21(2)所示.这一小段在 $\Delta F$ 和两端所受张力 $T$ 的作用下达到平衡.于是有

$$
\Delta F = 2 T \sin \left(\frac {\Delta \theta}{2}\right) = 2 T \left(\frac {\Delta \theta}{2}\right) = T \Delta \theta\tag{6}
$$

由式(5)、(6)得

$$
T = I B R\tag{7}
$$

$d = 10\mathrm{cm}$ , 铅丝的横截面积为 $S = 0.70\mathrm{mm}^2$ , 当环中载有 $I = 7.0\mathrm{A}$ 的电流时, 环的温度因此升高到接近熔化的温度, 这时铅的断裂强度为 $p_0 = 0.20\mathrm{kgf} \cdot / \mathrm{mm}^2$ . 如果加上均匀的外磁场, 磁场强度 $\pmb{H}$ 的方向平行于圆环的轴线并沿电流 $I$ 的右旋进方向, $\pmb{H}$ 的大小为 $H = 10000\mathrm{Oe}$ , 试问这环会不会断裂?

【解】由前面6.2.21题的结果,环内的张力为

$$
T = I B R = \mu_ {0} H I R\tag{1}
$$

环的横截面上单位面积所受的张力为

$$
\begin{array}{r l} p & = \frac {T}{S} = \frac {\mu_ {0} I H R}{S} = \frac {4 \pi \times 1 0 ^ {- 7} \times 7 . 0 \times 1 0 0 0 0 \times \frac {1 0 ^ {3}}{4 \pi} \times \frac {1 0}{2} \times 1 0 ^ {- 2}}{0 . 7 0 \times 1 0 ^ {- 6}} \\ & = 5. 0 \times 1 0 ^ {5} (\mathrm {N/ m ^ {2}}) = \frac {5 . 0 \times 1 0 ^ {5}}{9 . 8 1} \times 1 0 ^ {- 6} (\mathrm {kgf / mm^ {2}}) \\ & = 5. 1 \times 1 0 ^ {- 2} (\mathrm {kgf / mm^ {2}}) <   p _ {0} \end{array}\tag{2}
$$

故铅丝环不会断裂.

【说明】奥斯特是磁场强度的非法定单位, $1Oe=\frac{10^{3}}{4\pi}A/m$ .千克力是力的非法定单位,1kgf=9.81N.

6.2.23 一条很长的绝缘体圆柱,外面包有一层很薄的金属膜,金属膜载有沿轴线方向流动的电流 I,已知电流均匀分布在金属膜里.试求由于电流引起的、金属膜对绝缘柱的压强.

【解】由于金属膜很薄,其中的电流可看成是一层面电流,其面电流密度为

$$
k = \frac {I}{2 \pi R} e\tag{1}
$$

其中 e 是电流 I 方向上的单位矢量. 根据前面 5.1.41 题的结果式(7), 面电流 k 所在处的磁感强度为

$$
\boldsymbol {B} = \frac {1}{2} \mu_ {0} \boldsymbol {k} \times \boldsymbol {n}\tag{2}
$$

式中 n 是圆柱面外法线方向上的单位矢量.

如图 6.2.23, 在金属膜上取长为 dl, 宽为 $Rd\theta$ 的面积元 $dS = Rd\theta dl$ . 根据安培力公式, 这面积元上的电流所受的力为

$$
\begin{array}{r l} \mathrm{d} \boldsymbol {F} & = (I \mathrm{d} l) \times \boldsymbol {B} = (\boldsymbol {k} \mathrm{d} S) \times \boldsymbol {B} = (\boldsymbol {k} \mathrm{d} S) \times (\frac {1}{2} \mu_ {0} \boldsymbol {k} \times \boldsymbol {n}) \\ & = - \frac {\mu_ {0}}{2} k ^ {2} \mathrm{d} S \boldsymbol {n} = - \frac {\mu_ {0}}{2} \left(\frac {I}{2 \pi R}\right) ^ {2} \mathrm{d} S \boldsymbol {n} \\ & = - \frac {\mu_ {0} I ^ {2}}{8 \pi^ {2} R ^ {2}} \mathrm{d} S \boldsymbol {n} \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/42cd6295bbef64dd13c001e68868677691b997d2fb718a28d7f168fde21cc3ef.jpg)


(3) 


图6.2.23


负号表力 $\mathrm{d}F$ 的方向与 $n$ 相反，即指向轴线.这力作用在金属膜上，而膜包在绝缘柱上静止不动，故膜必有同样大小的力作用在绝缘柱上.于是得膜对绝缘柱的压强为

$$
p = \frac {| \mathrm{d} \boldsymbol {F} |}{\mathrm{d} S} = \frac {\mu_ {0} I ^ {2}}{8 \pi^ {2} R ^ {2}}\tag{4}
$$

6.2.24 一很长的直螺线管由外表绝缘的细导线在塑料管上密绕而成, 单位长度的匝数为 $n$ . 当导线中通有电流 $I$ 时, 略去边缘效应 (即将螺线管当成无限长), 试求导线因电流而对塑料管施加的压强.

【解】将螺线管当成无限长，由对称性和安培环路定理得磁感强度为

$$
\pmb {B} _ {i} = \mu_ {0} n \pmb {I e} _ {I} \quad (\text {管内})\tag{1}
$$

式中 $e_{1}$ 是电流 I 的右旋进方向上的单位矢量；

$$
\pmb {B} _ {0} = 0 \quad (\text { 管   外 })\tag{2}
$$

因为是细导线,可以将电流当作一层面电流,则在电流所在处的磁感强度便为[参见前面5.2.12题的式(6)]

$$
\boldsymbol {B} = \frac {1}{2} (\boldsymbol {B} _ {i} + \boldsymbol {B} _ {0}) = \frac {1}{2} \mu_ {0} n I e _ {I}\tag{3}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/761a1ece642a1745ccf322b139b5d1116ead78e60574522b9df25ad9da06b35a.jpg)


如图6.2.24, 螺线管上长为 $l$ 一段的电流元为 $nllR\mathrm{d}\theta e$ , 这里 $R$ 是螺线管的半径, $\mathrm{d}\theta$ 为对轴线的张角, $e$ 为电流方向上的单位矢量. 根据安培力公式, 这电流元所受的力为


图6.2.24


$$
\begin{array}{r l} \mathrm{d} \boldsymbol {F} & = n I l R \mathrm{d} \theta \boldsymbol {e} \times \boldsymbol {B} = n I l R \mathrm{d} \theta \boldsymbol {e} \times \frac {1}{2} \mu_ {0} n I \boldsymbol {e} _ {I} \\ & = - \frac {1}{2} \mu_ {0} n ^ {2} I ^ {2} l R \mathrm{d} \theta \boldsymbol {n} \end{array}\tag{4}
$$

式中 n 是管面外法线方向上的单位矢量, 负号表明, dF 的方向向内, 指向轴线.

因导线静止,故塑料管必有力-dF作用在这电流元的导线上;又根据牛顿第三定律,这电流元的导线必定以力dF作用在塑料管上.于是得导线因电流而对塑料管施加的压强为

$$
p = \frac {| d F |}{d S} = \frac {| d F |}{l R d \theta} = \frac {1}{2} \mu_ {0} n ^ {2} I ^ {2}\tag{5}
$$

6.2.25 半径为 $R = 10\mathrm{cm}$ 的圆线圈由表面绝缘的细导线密绕而成，共绕有2000匝.当导线中通有2.0A的电流时，加上磁感强度为 $\pmb{B}$ 的外磁场， $\pmb{B}$ 的方向与线圈平面平行, B 的大小为 $5.0 \times 10^{-2} ~T$ , 试求磁场作用在线圈上的力矩 M.

【解】磁场作用在线圈上的力矩为

$$
\boldsymbol {M} = \boldsymbol {m} \times \boldsymbol {B} = N I S B e _ {I} \times e _ {B}\tag{1}
$$

式中 $N$ 和 $S$ 分别是线圈的匝数和面积， $\pmb{e}_I$ 是线圈中电流的右旋进方向上的单位矢量， $\pmb{e}_B$ 是 $\pmb{B}$ 方向上的单位矢量.

因 B 的方向与线圈平面平行, 故 M 的大小为

$$
\begin{array}{r l} M & = N I S B = 2 0 0 0 \times 2. 0 \times \pi \times (1 0 \times 1 0 ^ {- 2}) ^ {2} \times 5. 0 \times 1 0 ^ {- 2} \\ & = 6. 3 (\mathrm{N} \cdot \mathrm{m}) \end{array}\tag{2}
$$

6.2.26 一螺线管横截面的直径为 $15\mathrm{mm}$ , 由表面绝缘的细导线密绕而成, 共绕有 2500 匝. (1) 当导线中通有 $2.0\mathrm{A}$ 的电流时, 试求这螺线管的磁矩; (2) 将这载流螺线管放到 $B = 4.0\mathrm{T}$ 的均匀外磁场中, 试求它所受力矩的最大值.

【解】(1)磁矩为

$$
\boldsymbol {m} = N I S e _ {I}\tag{1}
$$

$e_{1}$ 为电流 I 的右旋进方向上的单位矢量. m 的值为

$$
\begin{array}{r l} m & = N I S = 2 5 0 0 \times 2. 0 \times \pi \times \left(\frac {1 5 \times 1 0 ^ {- 3}}{2}\right) ^ {2} \\ & = 0. 8 8 (\mathrm{A} \cdot \mathrm{m} ^ {2}) \end{array}\tag{2}
$$

(2)力矩的最大值为

$$
M _ {\max} = m B = 0. 8 8 \times 4 = 3. 5 (\mathrm{N} \cdot \mathrm{m})\tag{3}
$$

6.2.27 试证明: 在均匀外磁场中, 任何一个闭合电流环路所受到的安培力的主矢(即电流环路各部分所受的安培力之和)为零.

【证】电流环路中,电流元 Idl 所受到的安培力为

$$
\mathrm{d} \boldsymbol {F} = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B}\tag{1}
$$

整个电流环路所受到的安培力的主矢为

$$
\boldsymbol {F} = \oint_ {L} I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B} = I \oint_ {L} \mathrm{d} \boldsymbol {l} \times \boldsymbol {B}\tag{2}
$$

因磁场是均匀磁场,故 B 是常矢量,所以

$$
\oint_ {L} \mathrm{d} \boldsymbol {l} \times \boldsymbol {B} = (\oint_ {L} \mathrm{d} \boldsymbol {l}) \times \boldsymbol {B}\tag{3}
$$

因为是闭合电流环路，故

$$
\oint_ {L} \mathrm{d} l = 0\tag{4}
$$

由式(2)、(3)、(4)得

$$
\boldsymbol {F} = \oint_ {L} I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B} = 0\tag{5}
$$

6.2.28 1820年9月,安培听到奥斯特发现电流可以使磁针偏转的消息后,便想到电流之间也可能有相互作用力.在一个星期里,他就用实验证明了他的想法是对的.可是当时有人说:既然两个电流都与磁针有相互作用力,则两个电流之间必定有相互作用力;因此,安培的实验是多余的.你认为这人的说法怎么样?

【解答】这人的说法不对、据说当时阿喇果(F. Arago)听到这种说法后，就从口袋里掏出两把铁质的钥匙说：“这两把钥匙各自都吸引磁铁，难道你们相信它们也互相吸引吗？”

6.2.29 一无穷长直导线载有电流 $I$ , 离这导线为 $r$ 处有一小磁针, 这小磁针可以绕它的固定中心自由转动. 试证明: 它在电流 $I$ 的作用下, 在平衡位置做微小振动的周期为 $T = \sqrt{\frac{8\pi^3 rJ}{\mu_0 Im}}$ , 式中 $J$ 和 $m$ 分别是它的转动惯量和磁矩.

【证】无穷长直线电流在距离为 r 处产生的磁感强度 B 的大小为

$$
B = \frac {\mu_ {0} I}{2 \pi r}\tag{1}
$$

B 的方向是电流 I 的右手螺旋方向. 磁场作用在小磁针上的力矩为

$$
\boldsymbol {M} = \boldsymbol {m} \times \boldsymbol {B}\tag{2}
$$

其大小为

$$
M = m B \sin \theta\tag{3}
$$

式中 $\theta$ 是 $m$ 与 $B$ 的夹角. 当 $\theta = 0$ 时, 小磁针达到平衡. 在小磁针稍微偏离平衡位置时, $\theta$ 很小, 它所受的力矩可写作

$$
M = m B \sin \theta \approx m B \theta\tag{4}
$$

这时小磁针的运动方程为

$$
J \frac {\mathrm{d} ^ {2} \theta}{\mathrm{d} t ^ {2}} = - M = - m B \theta = - \frac {\mu_ {0} I m}{2 \pi r} \theta\tag{5}
$$

所以

$$
\frac {\mathrm{d} ^ {2} \theta}{\mathrm{d} t ^ {2}} + \frac {\mu_ {0} I m}{2 \pi r J} \theta = 0\tag{6}
$$

这个方程表明,小磁针作简谐振动,其振动周期为

$$
T = \frac {2 \pi}{\omega} = 2 \pi \sqrt {\frac {2 \pi r J}{\mu_ {0} I m}} = \sqrt {\frac {8 \pi^ {3} r J}{\mu_ {0} I m}}\tag{7}
$$

6.2.30 一细导线回路由半径为 $R$ 的半圆形和直径构成. 当导线中载有电流 $I$ 时, 试求圆心处单位长度的导线所受的力.

【解】如图6.2.30, 半圆形电流 $I$ 在圆心产生的磁感强度 $\pmb{B}$ 为

$$
\boldsymbol {B} = \frac {\mu_ {0} I}{4 R} \boldsymbol {e} _ {I}\tag{1}
$$

式中 $e_{l}$ 是垂直于纸面向外的单位矢量. 由安培力公式得圆心处电流元 Idl 所受的力为

$$
\begin{array}{r l} \mathrm{d} \boldsymbol {F} & = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B} = I \mathrm{d} \boldsymbol {l} \times \left(\frac {\mu_ {0} I}{4 R} \boldsymbol {e} _ {I}\right) = \frac {\mu_ {0} I ^ {2}}{4 R} \mathrm{d} \boldsymbol {l} \times \boldsymbol {e} _ {I} \\ & = \frac {\mu_ {0} I ^ {2}}{4 R} \mathrm{d} l \boldsymbol {e} \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/cc60237d663a9ebae8dc865b37ec7cf22609bc182057f5043249f1fcc7a7eccc.jpg)


(2) 

式中 $e$ 是垂直于直径向右的单位矢量. 于是得圆心处单位长度的导线所受的力为

图6.2.30

$$
\frac {\mathrm{d} F}{\mathrm{d} l} = \frac {\mu_ {0} I ^ {2}}{4 R} e\tag{3}
$$

6.2.31 两条平行的无穷长直导线相距为 $d$ ，分别载有电流 $I_{1}$ 和 $I_{2}$ . (1)试求每条导线的单位长度受另一导线的作用力；(2)当 $d = 1\mathrm{m}, I_{1} = I_{2} = 1\mathrm{A}$ 时，试计算这力的值；(3)试说明力的方向的规律是：电流同向相吸，异向相斥.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c4e0b13d05ee3a39f9c28c214a8fe4cfa29d2bc842e122d2088bb53472250208.jpg)



图6.2.31


【解】（1）由Biot-Savart定律得出， $I_{1}$ 在 $I_{2}$ 处产生的磁感强度 $\pmb{B}_{1}$ 为

$$
\boldsymbol {B} _ {1} = \frac {\mu_ {0} I _ {1}}{2 \pi \mathrm{d}} \boldsymbol {e} _ {I _ {1}}\tag{1}
$$

式中 $e_{I_{1}}$ 是电流 $I_{1}$ 的右手螺旋方向上的单位矢量，它垂直于 $I_{1}$ 和 $I_{2}$ 所构成的平面并向内，如图 6.2.31 所示.

$I_{2}$ 上的电流元 $I_{2}dl$ 受 $B_{1}$ 的作用力为

$$
\begin{array}{r l} \mathrm{d} \boldsymbol {F} _ {2 1} & = I _ {2} \mathrm{d} \boldsymbol {l} \times \boldsymbol {B} _ {1} = I _ {2} \mathrm{d} \boldsymbol {l} \times \left(\frac {\mu_ {0} I _ {1}}{2 \pi \mathrm{d}} \boldsymbol {e} _ {I _ {1}}\right) \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi \mathrm{d}} \mathrm{d} \boldsymbol {l} \times \boldsymbol {e} _ {I _ {1}} = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi \mathrm{d}} \mathrm{d} \boldsymbol {l e} \end{array}\tag{2}
$$

线受 $I_{1}$ 的作用力为

式中 e 为垂直于 $I_{2}$ 并指向 $I_{1}$ 的单位矢量. 于是得单位长度的 $I_{2}$ 导

$$
\frac {\mathrm{d} \boldsymbol {F} _ {2 1}}{\mathrm{d} l} = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi \mathrm{d}} \boldsymbol {e}\tag{3}
$$

(2)这力的大小为

$$
\left| \frac {\mathrm{d} F _ {2 1}}{\mathrm{d} l} \right| = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi \mathrm{d}} = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 \times 1}{2 \pi \times 1} = 2 \times 1 0 ^ {- 7} (\mathrm{N})\tag{4}
$$

(3)当 $I_{1}$ 和 $I_{2}$ 方向相同时，由图6.2.31和式(2)可见， $\mathrm{dF}_{21}$ 指向 $I_{1}$ .这表明， $I_{1}$ 和 $I_{2}$ 同方向时，它们之间的相互作用力是吸引力.当 $I_{1}$ 和 $I_{2}$ 方向相反时，如图6.2.31中的 $I_{2}$ 反过来向下，则 $I_{2}\mathrm{d}l$ 便向下，于是 $I_{2}\mathrm{d}l\times B_{1}$ 便垂直于 $I_{2}$ 并背向 $I_{1}$ .这表明， $I_{1}$ 和 $I_{2}$ 反方向时，它们之间的相互作用是排斥力.

6.2.32 发电厂的汇流条是两条三米长的平行铜棒,相距 50cm;当向外输电时,每条棒中的电流都是 10000A.作为近似,把两棒都当作无穷长的细导线,试估算它们之间相互作用力的大小.

【解】无穷长直线电流 I 在距离为 r 处产生的磁感 B 的大小为

$$
B = \frac {\mu_ {0} I}{2 \pi r}\tag{1}
$$

由于两棒平行,故得两棒之间相互作用力的大小为

$$
\begin{array}{r l} F & = \frac {\mu_ {0} I _ {\mathrm{i}} I _ {2} l}{2 \pi r} = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 0 0 0 0 \times 1 0 0 0 0 \times 3}{2 \pi \times 5 0 \times 1 0 ^ {- 2}} \\ & = 1. 2 \times 1 0 ^ {2} (\mathrm{N}) \end{array}\tag{2}
$$

6.2.33 两平行导线中电流方向相反时,它们便互相排斥.有一种磁悬浮列车便是利用这种排斥力使列车悬浮在车轨上运行的.设想两个相同的共轴圆线圈,半径都是R,匝数都是N,相距为r,载有相反的电流I,如图6.2.33所示.假定一个线圈中的电流在另一线圈中产生的磁感强度的大小可近似当作

$$
B = \frac {\mu_ {0} N I}{2 \pi r}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/59d845f3d20db42eb00584c710960eb4558cbffbc4502541d694891d1b32a9ad.jpg)


试估算在 $r=10cm, R=1.0m$ 时，要使排斥力为 F=10 吨力，所需的安匝数 NI.

图6.2.33

【解】排斥力为

$$
F = N I l B = N I \cdot 2 \pi R \cdot \frac {\mu_ {0} N I}{2 \pi r} = \frac {\mu_ {0} (N I) ^ {2} R}{r}
$$

故所求的安匝数为

$$
\begin{array}{r l} N I & = \sqrt {\frac {F r}{\mu_ {0} R}} = \sqrt {\frac {1 0 \times 9 . 8 1 \times 1 0 ^ {3} \times 1 0 \times 1 0 ^ {- 2}}{4 \pi \times 1 0 ^ {- 7} \times 1 . 0}} \\ & = 8. 8 \times 1 0 ^ {4} (\mathrm{A} \cdot \text { 匝 }) \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e29a85975af43fbd5813a4989350c74ca80442fea20ae1ef620d069b61da9de1.jpg)


【讨论】安匝数这样大,要将功率 $I^{2}R$ 限制在实际可能的范围内,只有采用超导材料制成的线圈才行.

6.2.34 两个平行的无穷长导体薄片, 宽度都是 $b$ , 相距为 $a$ , 分别载有方向相反的电流 $I_{1}$ 和 $I_{2}$ , 其横截面如图 6.2.34(1) 所示. 设 $I_{1}$ 和 $I_{2}$ 都均匀分布在各自的片上, 片的厚度均可略去不计. 试证明: 每片上单位长度受另一片的作用力的大小为

图6.2.34(1)

$$
F = \frac {2 \times 1 0 ^ {- 7} I _ {1} I _ {2}}{b ^ {2}} \left[ 2 b \arctan \left(\frac {b}{a}\right) - a \ln \left(\frac {a ^ {2} + b ^ {2}}{a ^ {2}}\right) \right]
$$

力的方向是互相排斥.

【证】先计算一片中的电流在另一片中产生的磁感强度，然后再由安培力公式计算力.

如图 6.2.34(2)，将电流 $I_{1}$ 分成许多无穷长条，其

中 $l$ 处的一个长条宽为 $\mathrm{d}l$ ，所载电流为 $\mathrm{d}I_1 = \frac{I_1}{b}\mathrm{d}l.$ 根据无穷长直线电流产生磁感强度的公式[参见前面5.1.2题的式(3)]，这电流在 $I_{2}$ 片上距一边为 $x$ 处的 $P$ 点产生的磁感强度 $\mathrm{dB}_{21}$ 的大小为

$$
\mathrm{d} B _ {2 1} = \frac {\mu_ {0} \mathrm{d} I _ {1}}{2 \pi \sqrt {l ^ {2} + a ^ {2}}} = \frac {\mu_ {0} I _ {1} \mathrm{d} l}{2 \pi b \sqrt {l ^ {2} + a ^ {2}}}\tag{1}
$$

$dB_{21}$ 平行于片的表面的分量为

$$
\mathrm{d} B _ {\parallel} = (\mathrm{d} B _ {2 1}) \cos \theta = \frac {\mu_ {0} I _ {1} \mathrm{d} l}{2 \pi b \sqrt {l ^ {2} + a ^ {2}}} \frac {a}{\sqrt {l ^ {2} + a ^ {2}}}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/8922debe7648ef3255b332ab32460399181b438e86adb78cd58d3f0e73287a29.jpg)



图6.2.34(2)


$$
= \frac {\mu_ {0} I _ {1} a}{2 \pi b} \frac {\mathrm{d} l}{l ^ {2} + a ^ {2}}\tag{2}
$$

所以

$$
\begin{array}{r l} B _ {\parallel} & = \frac {\mu_ {0} I _ {1} a}{2 \pi b} \int_ {- x} ^ {b - x} \frac {\mathrm{d} l}{l ^ {2} + a ^ {2}} = \frac {\mu_ {0} I _ {1}}{2 \pi b} \left[ \arctan \left(\frac {l}{a}\right) \right] _ {l = - x} ^ {l = b - x} \\ & = \frac {\mu_ {0} I _ {1}}{2 \pi b} \left[ \arctan \left(\frac {b - x}{a}\right) + \arctan \left(\frac {x}{a}\right) \right] \end{array}\tag{3}
$$

$dB_{21}$ 垂直于片的表面的分量为

所以

$$
\begin{array}{r l} \mathrm{d} B _ {\perp} & = (\mathrm{d} B _ {2 1}) \sin \theta = \frac {\mu_ {0} I _ {1} \mathrm{d} l}{2 \pi b \sqrt {l ^ {2} + a ^ {2}}} \frac {l}{\sqrt {l ^ {2} + a ^ {2}}} \\ & = \frac {\mu_ {0} I _ {1}}{2 \pi b} \frac {l \mathrm{d} l}{l ^ {2} + a ^ {2}} \\ B _ {\perp} & = \frac {\mu_ {0} I _ {1}}{2 \pi b} \int_ {- x} ^ {b - x} \frac {l \mathrm{d} l}{l ^ {2} + a ^ {2}} = \frac {\mu_ {0} I _ {1}}{4 \pi b} \ln (l ^ {2} + a ^ {2}) \Bigg | _ {l = - x} ^ {l = b - x} \\ & = \frac {\mu_ {0} I _ {1}}{4 \pi b} \ln \left[ \frac {a ^ {2} + (b - x) ^ {2}}{a ^ {2} + x ^ {2}} \right] \end{array}\tag{4}
$$

(5) 

于是得整个 $I_{1}$ 片上的电流在 $I_{2}$ 片上 x 处的 P 点产生的磁感强度便为

$$
\begin{array}{r l} \boldsymbol {B} _ {2 1} = & \frac {\mu_ {0} I _ {1}}{4 \pi b} \left\{2 \left[ \arctan \left(\frac {b - x}{a}\right) + \arctan \left(\frac {x}{a}\right) \right] \boldsymbol {e} _ {\parallel} \right. \\ & \left. + \left[ \ln \frac {a ^ {2} + (b - x) ^ {2}}{a ^ {2} + x ^ {2}} \right] \boldsymbol {e} _ {\perp} \right\} \end{array}\tag{6}
$$

式中 $e_{\parallel}$ 是与片的表面平行并向下的单位矢量， $e_{\perp}$ 是与片的表面垂直并向左的单位矢量.

有了磁感强度,便可以求力.在 $I_{2}$ 片上 x 处,取宽为 dx 的一条无穷长带,这带上的电流为 $dI_{2}=\frac{I_{2}}{b}dx$ ,电流的方向向外,即沿 $e_{\perp}\times e_{\parallel}$ 方向.根据安培力公式

$$
\mathrm{d} \boldsymbol {F} = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B}\tag{7}
$$

这无穷长带上的电流元 $(\mathrm{d}I_2)\mathrm{d}\pmb {l} = \frac{I_2}{b}\mathrm{d}x\mathrm{d}\pmb {e}_{\perp}\times \pmb {e}_{\parallel}$ 所受的力为

$$
\mathrm{d} \pmb {F} _ {2 1} = \frac {I _ {2}}{b} \mathrm{d} x \mathrm{d} l (\pmb {e} _ {\perp} \times \pmb {e} _ {\parallel}) \times \pmb {B} _ {2 1}\tag{8}
$$

单位长度所受的力便为

$$
\mathrm{d} \pmb {F} = \frac {\mathrm{d} \pmb {F} _ {2 1}}{\mathrm{d} l} = \frac {I _ {2}}{b} (\pmb {e} _ {\perp} \times \pmb {e} _ {\parallel}) \times \pmb {B} _ {2 1} \mathrm{d} x\tag{9}
$$

将式(6)代入式(9)便得

$$
\begin{array}{r l} \mathrm{d} \boldsymbol {F} & = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi b ^ {2}} \left\{\left[ \ln \frac {a ^ {2} + (b - x) ^ {2}}{a ^ {2} + x ^ {2}} \right] \boldsymbol {e} _ {\parallel} \right. \\ & \left. - 2 \left[ \arctan \left(\frac {b - x}{a}\right) + \arctan \left(\frac {x}{a}\right) \right] \boldsymbol {e} _ {\perp} \right\} \mathrm{d} x \end{array}\tag{10}
$$

积分便得 $I_{2}$ 片上单位长度所受的力为

$$
\boldsymbol {F} = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi b ^ {2}} \left\{\left[ \int_ {o} ^ {b} \ln \frac {a ^ {2} + (b - x) ^ {2}}{a ^ {2} + x ^ {2}} d x \right] \boldsymbol {e} _ {\|} \right.
$$

$$
- 2 \left[ \int_ {0} ^ {b} \arctan \left(\frac {b - x}{a}\right) d x + \int_ {0} ^ {b} \arctan \left(\frac {x}{a}\right) d x \right] e _ {\perp} \Bigg \}\tag{11}
$$

其中第一项积分为

$$
\begin{array}{r l} & \int_ {0} ^ {b} \ln \frac {a ^ {2} + (b - x) ^ {2}}{a ^ {2} + x ^ {2}} \mathrm{d} x \\ & = \int_ {0} ^ {b} \ln [ a ^ {2} + (b - x) ^ {2} ] \mathrm{d} x - \int_ {0} ^ {b} \ln (a ^ {2} + x ^ {2}) \mathrm{d} x \\ & = - \left\{(b - x) \ln [ a ^ {2} + (b - x) ^ {2} ] - 2 (b - x) \right. \\ & \quad \left. + 2 a \arctan \left(\frac {b - x}{a}\right) \right| _ {x = 0} ^ {x = b} - \left\{x \ln (a ^ {2} + x ^ {2}) - 2 x \right. \\ & \quad \left. + 2 a \arctan \left(\frac {x}{a}\right) \right| _ {x = 0} ^ {x = b} \\ & = \left\{b \ln (a ^ {2} + b ^ {2}) - 2 b + 2 a \arctan \left(\frac {b}{a}\right) \right\} \\ & \quad - \left\{b \ln (a ^ {2} + b ^ {2}) - 2 b + 2 a \arctan \left(\frac {b}{a}\right) \right\} = 0 \end{array}\tag{12}
$$

第二项的两个积分如下：

$$
\begin{array}{r l} & {\int_ {0} ^ {b} \arctan \left(\frac {b - x}{a}\right) \mathrm{d} x} \\ & {= - a \left\{\frac {b - x}{a} \arctan \left(\frac {b - x}{a}\right) - \frac {1}{2} \ln \left[ 1 + \frac {(b - x) ^ {2}}{a ^ {2}} \right] \right\} _ {x = 0} ^ {x = b}} \\ & {= b \arctan \left(\frac {b}{a}\right) - \frac {a}{2} \ln \left[ 1 + \frac {b ^ {2}}{a ^ {2}} \right]} \\ & {\quad \int_ {0} ^ {b} \arctan \left(\frac {x}{a}\right) \mathrm{d} x = a \left\{\frac {x}{a} \arctan \left(\frac {x}{a}\right) - \frac {1}{2} \ln \left[ 1 + \frac {x ^ {2}}{a ^ {2}} \right] \right\} _ {x = 0} ^ {x = b}} \\ & {\quad = b \arctan \left(\frac {b}{a}\right) - \frac {a}{2} \ln \left[ 1 + \frac {b ^ {2}}{a ^ {2}} \right]} \end{array}\tag{13}
$$

(14) 

将式(12)、(13)、(14)代入式(11)便得

$$
\begin{array}{l} \boldsymbol {F} = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi b ^ {2}} \left\{- 4 \left[ b \arctan \left(\frac {b}{a}\right) - \frac {a}{2} \ln \left(1 + \frac {b ^ {2}}{a ^ {2}}\right) \right] \right\} \boldsymbol {e} _ {\perp} \\ = - \frac {2 \mu_ {0} I _ {1} I _ {2}}{4 \pi b ^ {2}} \left\{2 b \arctan \left(\frac {b}{a}\right) - a \ln \left(\frac {a ^ {2} + b ^ {2}}{a ^ {2}}\right) \right\} \boldsymbol {e} _ {\perp} \\ = - \frac {2 \times 1 0 ^ {- 7} I _ {1} I _ {2}}{b ^ {2}} \left\{2 b \arctan \left(\frac {b}{a}\right) - a \ln \left(\frac {a ^ {2} + b ^ {2}}{a ^ {2}}\right) \right\} \boldsymbol {e} _ {\perp} \end{array}\tag{15}
$$

上式表明，力 $\pmb{F}$ 的方向与 $e_{\perp}$ 相反，即 $\pmb{F}$ 是排斥力. $\pmb{F}$ 的大小为

$$
F = \frac {2 \times 1 0 ^ {- 7} I _ {1} I _ {2}}{b ^ {2}} \left\{2 b \arctan \left(\frac {b}{a}\right) - a \ln \left(\frac {a ^ {2} + b ^ {2}}{a ^ {2}}\right) \right\}\tag{16}
$$

6.2.35 同轴电缆由长直圆柱导体和套在它外面的同轴导体薄圆筒构成, 已知圆筒的半径为 R, 其厚度可略去不计. 电流 I 沿轴线方向流动, 从圆柱流去, 沿圆筒流回, I 都均匀分布在横截面上. 试求圆筒单位面积上所受的力.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/b4db9499f99f8cd33d0dc0700c8e98f9041e8b95c5b3fd5f37487d2ae66165cb.jpg)



图6.2.35


【解】圆柱导体中的电流 I 在圆筒上产生的磁感强度为

$$
\boldsymbol {B} _ {1} = \frac {\mu_ {0} I}{2 \pi R} \boldsymbol {e} _ {\phi}\tag{1}
$$

式中 $e_{\phi}$ 为 I 的右手螺旋方向, 如图 6.2.35 所示.

同时，圆筒上的电流 I 在圆筒上产生的磁感强度为 [参见前面 5.2.12 题的式(6)]

$$
\boldsymbol {B} _ {2} = - \frac {\mu_ {0} I}{4 \pi R} \boldsymbol {e} _ {\phi}\tag{2}
$$

因此，圆筒上电流所在处的磁感强度便为

$$
\boldsymbol {B} = \boldsymbol {B} _ {1} + \boldsymbol {B} _ {2} = \frac {\mu_ {0} I}{2 \pi R} \boldsymbol {e} _ {\phi} - \frac {\mu_ {0} I}{4 \pi R} \boldsymbol {e} _ {\phi} = \frac {\mu_ {0} I}{4 \pi R} \boldsymbol {e} _ {\phi}\tag{3}
$$

在圆筒上,取宽为 $Rd\phi$ , 长为 dl 的面积元

$$
\mathrm{d} S = R \mathrm{d} \phi \mathrm{d} l,\tag{4}
$$

这面积元上的电流为

$$
\mathrm{d} I = \frac {I}{2 \pi R} R \mathrm{d} \phi = \frac {I}{2 \pi} \mathrm{d} \phi\tag{5}
$$

由安培力公式

$$
\mathrm{d} \boldsymbol {F} = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B}\tag{6}
$$

得这面电流元 dIdl 所受的力为

$$
\mathrm{d} \boldsymbol {F} = (\mathrm{d} I \mathrm{d} l) \times \boldsymbol {B} = \left(\frac {I}{2 \pi} \mathrm{d} \phi \mathrm{d} l\right) \times \left(\frac {\mu_ {0} I}{4 \pi R} e _ {\phi}\right)
$$

$$
= \frac {\mu_ {0} I ^ {2}}{8 \pi^ {2} R} \mathrm{d} \phi \mathrm{d} l \times e _ {\phi} = \frac {\mu_ {0} I ^ {2}}{8 \pi^ {2} R ^ {2}} \mathrm{d} S n\tag{7}
$$

式中 n 为圆筒面外法线方向上的单位矢量. 于是得圆筒单位面积上所受的力为

$$
f = \frac {\mathrm{d} F}{\mathrm{d} S} = \frac {\mu_ {0} I ^ {2}}{8 \pi^ {2} R ^ {2}} n\tag{8}
$$

【讨论】没有考虑 $B_{2}$ ，是解本题时容易出的错误.

6.2.36 如图 6.2.36, 一无限长直导线 $L_{1}$ 载有电流 $I_{1} = 2.0\mathrm{A}$ , 旁边有一段与它垂直且共面的一段导线 $L_{2}, L_{2}$ 长为 $l = 40\mathrm{cm}$ , 载有电流 $I_{2} = 3.0\mathrm{A}$ , 靠近 $L_{1}$ 的一端到 $L_{1}$ 的距离也是 $l = 40\mathrm{cm}$ . 试求 $L_{1}$ 上的电流作用在 $L_{2}$ 上的力.

【解】 $L_{1}$ 上的电流 $I_{1}$ 在距离为 r 处产生的磁感强度为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6c2fbd87385919a87388e3ed4b3079ecf713562d1419279ebb74cf100bed74cc.jpg)


$$
\boldsymbol {B} = \frac {\mu_ {0} I _ {1}}{2 \pi r} \boldsymbol {e} _ {\phi}\tag{1}
$$

图6.2.36

式中 $e_{\phi}$ 为电流 $I_{1}$ 的右手螺旋方向. 设 $e_{1}$ 和 $e_{2}$ 分别为电流 $I_{1}$ 和 $I_{2}$ 方向上的单位矢量, 则由安培力公式

$$
\mathrm{d} \boldsymbol {F} = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B}\tag{2}
$$

得 $L_{2}$ 上的电流元 $I_{2}\mathrm{d}l$ 受 $I_{1}$ 的作用力为

$$
\begin{array}{r l} \mathrm{d} \boldsymbol {F} & = I _ {2} \mathrm{d} l \boldsymbol {e} _ {2} \times \boldsymbol {B} = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi r} \mathrm{d} l \boldsymbol {e} _ {2} \times \boldsymbol {e} _ {\phi} \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi r} \mathrm{d} r \boldsymbol {e} _ {1} \end{array}\tag{3}
$$

积分便得所求的力为

$$
\boldsymbol {F} = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi} \int_ {l} ^ {2 l} \frac {\mathrm{d} r}{r} \boldsymbol {e} _ {1} = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi} \ln 2 \boldsymbol {e} _ {1}\tag{4}
$$

F 的方向平行于 $I_{1}$ ，F 的大小为

$$
\begin{array}{r l} F & = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi} \ln 2 = \frac {4 \pi \times 1 0 ^ {- 7} \times 2 . 0 \times 3 . 0}{2 \pi} \times 0. 6 9 3 1 \\ & = 8. 3 \times 1 0 ^ {- 7} (\mathrm{N}) \end{array}\tag{5}
$$

6.2.37 设 $I_{1} \mathrm{d} l_{1}$ 和 $I_{2} \mathrm{d} l_{2}$ 分别为载流导线 $I_{1}$ 和 $I_{2}$ 上的任意两个电流元，从 $I_{1} \mathrm{d} l_{1}$ 到 $I_{2} \mathrm{d} l_{2}$ 的位矢为 $r_{12}$ ，如图6.2.37所示。试分别求 $I_{1} \mathrm{d} l_{1}$ 作用在 $I_{2} \mathrm{d} l_{2}$ 上的力和 $I_{2} \mathrm{d} l_{2}$ 作用在 $I_{1} \mathrm{d} l_{1}$ 上的力，并从而得出：它们之间的相互作用力一般不遵守牛顿第三定律。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e2df51bd6feb70dcf0dccdf546b03ae93a9e0b3d17ea3c3160de91fc0816bf1e.jpg)


【解】根据电流元产生磁感强度的Biot-Savart定律和电流元受力的安培力公式得： $I_{1}dl_{1}$ 作用在 $I_{2}dl_{2}$ 上的力为

图6.2.37

$$
\begin{array}{r l} \mathrm{d} \boldsymbol {f} _ {2 1} & = I _ {2} \mathrm{d} \boldsymbol {l} _ {2} \times \left(\frac {\mu_ {0} I _ {1} \mathrm{d} \boldsymbol {l} _ {1} \times \boldsymbol {r} _ {1 2}}{r _ {1 2} ^ {3}}\right) = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi r _ {1 2} ^ {3}} \mathrm{d} \boldsymbol {l} _ {2} \times (\mathrm{d} \boldsymbol {l} _ {1} \times \boldsymbol {r} _ {1 2}) \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi r _ {1 2} ^ {3}} \left[ (\boldsymbol {r} _ {1 2} \cdot \mathrm{d} \boldsymbol {l} _ {2}) \mathrm{d} \boldsymbol {l} _ {1} - (\mathrm{d} \boldsymbol {l} _ {2} \cdot \mathrm{d} \boldsymbol {l} _ {1}) \boldsymbol {r} _ {1 2} \right] \end{array}\tag{1}
$$

$I_{2}\mathrm{d}l_{2}$ 作用在 $I_{1}\mathrm{d}l_{1}$ 上的力为

$$
\begin{array}{r l} \mathrm{d} f _ {1 2} & = I _ {1} \mathrm{d} l _ {1} \times \left(\frac {\mu_ {0} I _ {2} \mathrm{d} l _ {2} \times r _ {2 1}}{4 \pi r _ {2 1} ^ {3}}\right) = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi r _ {2 1} ^ {3}} \mathrm{d} l _ {1} \times (\mathrm{d} l _ {2} \times r _ {2 1}) \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi r _ {2 1} ^ {3}} \left[ (r _ {2 1} \cdot \mathrm{d} l _ {1}) \mathrm{d} l _ {2} - (\mathrm{d} l _ {1} \cdot \mathrm{d} l _ {2}) r _ {2 1} \right] \end{array}\tag{2}
$$

式中 $r_{21} = -r_{12}, r_{21} = r_{12}$ .

由式(1)、(2)可见，由于 $\mathrm{d}\pmb{l}_1$ 和 $\mathrm{d}\pmb{l}_2$ 的方向一般不同，故一般地

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/1f05765a6184327251b49f0d454b5509af14188ff1b31c6ea4754b905c906dc8.jpg)



图6.2.38


$$
\mathrm{d} f _ {1 2} \neq - \mathrm{d} f _ {2 1}\tag{3}
$$

【讨论】虽然两个电流元之间的相互作用力不遵守牛顿第三定律,但可以证明,对于任意两个闭合的载流回路整体来说,彼此间的相互作用力是遵守牛顿第三定律的.参见下面6.2.38题.

6.2.38 任意两个闭合回路 $L_{1}$ 和 $L_{2}$ .

电流分别为 $I_{1}$ 和 $I_{2}$ , 如图6.2.38所示. 试证明: $L_{1}$ 作用在 $L_{2}$ 上的力 $\mathbf{F}_{21}$ 与 $L_{2}$ 作用在 $L_{1}$ 上的力 $\mathbf{F}_{12}$ 遵守牛顿第三定律, 即 $\mathbf{F}_{12} = -\mathbf{F}_{21}$ .

【证】电流元 $I_{1}dl_{1}$ 作用在电流元 $I_{2}dl_{2}$ 上的力为

$$
\begin{array}{r l} \mathrm{d} f _ {2 1} & = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \frac {\mathrm{d} l _ {2} \times (\mathrm{d} l _ {1} \times r _ {1 2})}{r _ {1 2} ^ {3}} = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \frac {(r _ {1 2} \cdot \mathrm{d} l _ {2}) \mathrm{d} l _ {1} - (\mathrm{d} l _ {1} \cdot \mathrm{d} l _ {2}) r _ {1 2}}{r _ {1 2} ^ {3}} \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \left\{\left[ (- \nabla \frac {1}{r _ {1 2}}) \cdot \mathrm{d} l _ {2} \right] \mathrm{d} l _ {1} - \frac {(\mathrm{d} l _ {1} \cdot \mathrm{d} l _ {2}) r _ {1 2}}{r _ {1 2} ^ {3}} \right\} \end{array}\tag{1}
$$

对 $dI_{2}$ 积分, 便得电流元 $I_{1}dl_{1}$ 作用在 $L_{2}$ 上的力为

$$
\mathrm{d} \boldsymbol {F} _ {2 1} = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \left\{- \left[ \oint_ {L _ {2}} \left(\nabla \frac {1}{r _ {1 2}}\right) \cdot \mathrm{d} l _ {2} \right] \mathrm{d} l _ {1} - \oint_ {L _ {2}} \frac {\left(\mathrm{d} l _ {1} \cdot \mathrm{d} l _ {2}\right) r _ {1 2}}{r _ {1 2} ^ {3}} \right\}\tag{2}
$$

其中积分

$$
\oint_ {L _ {2}} \left(\nabla \frac {1}{r _ {1 2}}\right) \cdot d l _ {2} = \oint_ {L _ {2}} \left(\nabla \frac {1}{r _ {1 2}}\right) \cdot d r _ {1 2} = \oint_ {L _ {2}} d \left(\frac {1}{r _ {1 2}}\right) = 0\tag{3}
$$

故得

$$
\mathrm{d} \boldsymbol {F} _ {2 1} = - \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \oint_ {L _ {2}} \frac {(\mathrm{d} l _ {1} \cdot \mathrm{d} l _ {2}) r _ {1 2}}{r _ {1 2} ^ {3}}\tag{4}
$$

将上式对 $\mathrm{d}\pmb{l}_1$ 积分，便得 $L_{1}$ 作用在 $L_{2}$ 上的力为

$$
\boldsymbol {F} _ {2 1} = - \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \oint_ {L _ {1}} \oint_ {L _ {2}} \frac {\left(\mathrm{d} \boldsymbol {l} _ {1} \cdot \mathrm{d} \boldsymbol {l} _ {2}\right) \boldsymbol {r} _ {1 2}}{r _ {1 2} ^ {3}}\tag{5}
$$

再考虑 $L_{2}$ 作用在 $L_{1}$ 上的力. 电流元 $I_{2}dl_{2}$ 作用在电流元 $I_{1}dl_{1}$ 上的力为

$$
\begin{array}{r l} \mathrm{d} f _ {1 2} & = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \frac {\mathrm{d} l _ {1} \times (\mathrm{d} l _ {2} \times r _ {2 1})}{r _ {2 1} ^ {3}} = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \frac {(r _ {2 1} \cdot \mathrm{d} l _ {1}) \mathrm{d} l _ {2} - (\mathrm{d} l _ {1} \cdot \mathrm{d} l _ {2}) r _ {2 1}}{r _ {2 1} ^ {3}} \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \left\{\left[ (- \nabla \frac {1}{r _ {2 1}}) \cdot \mathrm{d} l _ {1} \right] \mathrm{d} l _ {2} - \frac {(\mathrm{d} l _ {1} \cdot \mathrm{d} l _ {2}) r _ {2 1}}{r _ {2 1} ^ {3}} \right\}. \end{array}\tag{6}
$$

对 $dl_{1}$ 积分, 便得电流元 $I_{2}dl_{2}$ 作用在 $L_{1}$ 上的力为

$$
\mathrm{d} \boldsymbol {F} _ {1 2} = \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \left\{- \left[ \oint_ {L _ {1}} \left(\nabla \frac {1}{r _ {2 1}}\right) \cdot \mathrm{d} l _ {1} \right] \mathrm{d} l _ {2} - \oint_ {L _ {1}} \frac {\left(\mathrm{d} l _ {1} \cdot \mathrm{d} l _ {2}\right) r _ {2 1}}{r _ {2 1} ^ {3}} \right\}\tag{7}
$$

其中积分

$$
\begin{array}{r l} \oint_ {L _ {1}} \left(\nabla \frac {1}{r _ {2 1}}\right) \cdot \mathrm{d} \boldsymbol {l} _ {1} & = \oint_ {L _ {1}} \left(\nabla \frac {1}{r _ {2 1}}\right) \cdot \mathrm{d} \boldsymbol {r} _ {2 1} \\ & = \oint_ {L _ {1}} \mathrm{d} \left(\frac {1}{r _ {2 1}}\right) = 0 \end{array}\tag{8}
$$

故得

$$
\mathrm{d} \boldsymbol {F} _ {1 2} = - \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \oint_ {L _ {1}} \frac {(\mathrm{d} \boldsymbol {l} _ {1} \cdot \mathrm{d} \boldsymbol {l} _ {2}) \boldsymbol {r} _ {2 1}}{r _ {2 1} ^ {3}}\tag{9}
$$

将上式对 $dl_{2}$ 积分, 便得 $L_{2}$ 作用在 $L_{1}$ 上的力为

$$
\boldsymbol {F} _ {1 2} = - \frac {\mu_ {0} I _ {1} I _ {2}}{4 \pi} \oint_ {L _ {1}} \oint_ {L _ {2}} \frac {\left(\mathrm{d} \boldsymbol {l} _ {1} \cdot \mathrm{d} \boldsymbol {l} _ {2}\right) \boldsymbol {r} _ {2 1}}{r _ {2 1} ^ {3}}\tag{10}
$$

因 $r_{12} = -r_{21}$ ，故得

$$
\boldsymbol {F} _ {1 2} = - \boldsymbol {F} _ {2 1}\tag{11}
$$

6.2.39 长直导线与一正方形线圈在同一平面内, 它们分别载有电流 $I_{1}$ 和 $I_{2}$ ; 正方形的边长为 $a$ , 有两边与导线平行, 它的中心 $O$ 到直导线的垂直距离为 $d$ , 如图 6.2.39 所示. (1) 试求这正方形载流线圈各边受 $I_{1}$ 的作用力以及这些力的主矢 (即这些力的矢量和); (2) 当 $I_{1} = 3.0 \mathrm{~A}, I_{2} = 2.0 \mathrm{~A}, a = d = 4.0 \mathrm{~cm}$ 时, 试计算主矢的大小.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/1232fc8e13cf9892a8e92c629d15081d33fbca5e096483c6cc82606fb00e43a1.jpg)


【解】(1)如图6.2.39, $I_{1}$ 在DA边产生的磁感强度为

图6.2.39

$$
\boldsymbol {B} _ {1} = \frac {\mu_ {0} I _ {1}}{2 \pi (d - a / 2)} \boldsymbol {e} _ {1}\tag{1}
$$

式中 $e_{1}$ 为垂直于纸面向内的单位矢量. 于是由安培力公式得 DA 边受的力为

$$
\boldsymbol {F} _ {1} = \boldsymbol {I} _ {2} a \boldsymbol {e} _ {2} \times \boldsymbol {B} _ {1} = - \frac {\mu_ {0} I _ {1} I _ {2} a}{2 \pi (d - a / 2)} \boldsymbol {e} _ {3}\tag{2}
$$

式中 $e_{2}$ 和 $e_{3}$ 分别为向上和向右的单位矢量. 式(2)表明, $F_{1}$ 向左.

BC 边所受的力为

$$
\begin{array}{r l} \boldsymbol {F} _ {3} & = (- I _ {2} a \boldsymbol {e} _ {2}) \times \boldsymbol {B} _ {3} = - I _ {2} a \boldsymbol {e} _ {2} \times \left[ \frac {\mu_ {0} I _ {1}}{2 \pi (d + a / 2)} \boldsymbol {e} _ {1} \right] \\ & = \frac {\mu_ {0} I _ {1} I _ {2} a}{2 \pi (d + a / 2)} \boldsymbol {e} _ {3} \end{array}\tag{3}
$$

式(3)表明, $F_{3}$ 向右.

由对称性可知, $AB$ 边所受的力 $\mathbf{F}_2$ 和 $CD$ 边所受的力 $\mathbf{F}_4$ 大小相等而方向相反, $\mathbf{F}_2$ 向上而 $\mathbf{F}_4$ 向下. 它们的大小为

$$
F _ {2} = F _ {4} = \int_ {d - a / 2} ^ {d + a / 2} \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi x} \mathrm{d} x = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi} \ln \left(\frac {2 d + a}{2 d - a}\right)\tag{4}
$$

这些力的主矢为

$$
\begin{array}{r l} \boldsymbol {F} & = \boldsymbol {F} _ {1} + \boldsymbol {F} _ {2} + \boldsymbol {F} _ {3} + \boldsymbol {F} _ {4} = \boldsymbol {F} _ {1} + \boldsymbol {F} _ {3} = \frac {\mu_ {0} I _ {1} I _ {2} a}{2 \pi} \left[ - \frac {1}{d - a / 2} + \frac {1}{d + a / 2} \right] \boldsymbol {e} _ {3} \\ & = - \frac {2 \mu_ {0} I _ {1} I _ {2} a ^ {2}}{\pi (4 d ^ {2} - a ^ {2})} \boldsymbol {e} _ {3} \end{array}\tag{5}
$$

式(5)表明，F 的方向向左，即向 $I_{1}$ 

(2)主矢的大小为

$$
\begin{array}{r l} F & = \frac {2 \mu_ {0} I _ {1} I _ {2} a ^ {2}}{\pi (4 d ^ {2} - a ^ {2})} = \frac {2 \times 4 \pi \times 1 0 ^ {- 7} \times 3 . 0 \times 2 . 0 \times (4 . 0 \times 1 0 ^ {- 2}) ^ {2}}{\pi [ 4 \times (4 . 0 \times 1 0 ^ {- 2}) ^ {2} - (4 . 0 \times 1 0 ^ {- 2}) ^ {2} ]} \\ & = 1. 6 \times 1 0 ^ {- 6} (\mathrm{N}) \end{array}\tag{6}
$$

6.2.40 一无穷长直导线载有电流 $I_{1}$ , 旁边有一正方形线圈ABCD载有电流 $I_{2}$ , 正方形边长为 $2a$ , 中心到直导线的垂直距离为 $b$ , 电流的方向如图6.2.40(1)所示. 线圈可以绕平行于直导线的轴 $P_{1}P_{2}$ 转动, $P_{1}P_{2}$ 通过线圈上下两边的中点.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/233dcb862198ca14338e48d3a8bd4b42f441beeb96fc82aef42f55a15b873fc4.jpg)


试求:(1)线圈在 $\alpha$ 角度位置时[如图 6.2.40(1)所示], $I_{1}$ 作用在线圈各边上的安培力之和;(2)这些力对转轴 $P_{1}P_{2}$ 的力矩之和;(3)线圈平衡时 $\alpha$ 的值;(4)线圈从平衡位置转到 $\alpha=\frac{\pi}{2}$ 时, $I_{1}$ 作用在线圈上的力做了多少功?

【解】（1）先计算 $I_{1}$ 作用在线圈各边上的力.根据安培力公式

$$
\mathrm{d} \boldsymbol {F} = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B}\tag{1}
$$

图6.2.40(1)

AB 边所受的力 $F_{AB}$ 方向向着 $I_{1}$ ，其大小为

$$
F _ {A B} = 2 a I _ {2} B _ {1} = 2 a I _ {2} \left(\frac {\mu_ {0} I _ {1}}{2 \pi r _ {A i j}}\right) = \frac {\mu_ {0} I _ {1} I _ {2} a}{\pi r _ {A l i}}\tag{2}
$$

式中 $r_{AB}$ 是 $AB$ 边到 $I_{1}$ 的距离，由图6.2.40(2)可见，

$$
r _ {A B} = \sqrt {a ^ {2} + b ^ {2} - 2 a b \cos \alpha}
$$

CD 边所受的力 $F_{(D)}$ 方向背着 $I_{1}$ ，其大小为

(3) 

$$
F _ {C D} = 2 a I _ {2} \left(\frac {\mu_ {0} I _ {1}}{2 \pi r _ {C D}}\right) = \frac {\mu_ {0} I _ {1} I _ {2} a}{\pi r _ {C D}}\tag{4}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/972c82ec8c14c3c800983d0d0993a7b8ffab1c99a6ee02314e0ef405ccc1359b.jpg)


式中 $r_{CD}$ 是 CD 边到 $I_{1}$ 的距离，


图6.2.40(2)


$$
r _ {(D)} = \sqrt {a ^ {2} + b ^ {2} + 2 a b \cos \alpha}\tag{5}
$$

由于位置相同而电流方向相反，BC边所受的力 $F_{BC}$ 与DA边所受的力 $F_{DA}$ 大小相等而方向相反， $F_{BC}$ 方向向上，即与 $I_{1}$ 同方向； $F_{DA}$ 方向向下，即与 $I_{1}$ 反方向。故得

$$
\boldsymbol {F} _ {B C} + \boldsymbol {F} _ {D A} = 0\tag{6}
$$

于是得 $I_{1}$ 作用在线圈上各边的安培力之和为

$$
\boldsymbol {F} = \boldsymbol {F} _ {A B} + \boldsymbol {F} _ {B C} + \boldsymbol {F} _ {C D} + \boldsymbol {F} _ {D A} = \boldsymbol {F} _ {A B} + \boldsymbol {F} _ {C D}\tag{7}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/7f080ffc62dc06e94efcac87f3409a8d0203f1ed84fdfe4d515ef85f27ad2adc.jpg)


由式(7)和图6.2.40(3)可见， $F$ 的大小为

$$
\begin{array}{r l} F & = \sqrt {F _ {A B} ^ {2} + F _ {C D} ^ {2} - 2 F _ {A B} F _ {C D} \cos \theta} \\ & = \frac {\mu_ {0} I _ {1} I _ {2} a}{\pi} \sqrt {\frac {1}{r _ {A B} ^ {2}} + \frac {1}{r _ {C D} ^ {2}} - \frac {2}{r _ {A B} r _ {C D}} \cos \theta} \end{array}
$$


图 6.2.40(3)


式中

(8) 

$$
\cos \theta = \frac {r _ {A B} ^ {2} + r _ {(7)} ^ {2} - (2 a) ^ {2}}{2 r _ {A B} r _ {(7)}}\tag{9}
$$

将式(9)代入式(8)，并利用式(3)、(5)便得

$$
F = \frac {2 \mu_ {0} I _ {1} I _ {2} a ^ {2}}{\pi r _ {A B} r _ {C D}} = \frac {2 \mu_ {0} I _ {1} I _ {2} a ^ {2}}{\pi} \frac {1}{\sqrt {(a ^ {2} + b ^ {2}) ^ {2} - 4 a ^ {2} b ^ {2} \cos^ {2} \alpha}}\tag{10}
$$

$$
F _ {x} = F _ {O D} \cos \gamma - F _ {A B} \cos \beta
$$

再看 $\pmb{F}$ 的方向. 以 $I_{1}$ 和 $P_{1}P_{2}$ 轴构成的平面为 $z - x$ 平面, $I_{1}$ 和 $P_{1}P_{2}$ 间的垂线为 $x$ 轴, 取笛卡儿坐标系如图6.2.40(4)所示. 由图可见, $\pmb{F}$ 在 $x$ 方向和 $y$ 方向的分量分别为

(11) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/682d3069fe08183c280391f53f23c09d114c1c24cdd62feaa1d3720db2db9b9a.jpg)



图6.2.40(4)


$$
F _ {y} = F _ {C D} \sin \gamma + F _ {A B} \sin \beta\tag{12}
$$

F 与 x 轴的夹角 $\varphi$ 为

$$
\varphi = \arctan \frac {F _ {y}}{F _ {x}}\tag{13}
$$

由图可见，

$$
\sin \beta = \frac {a}{r _ {A B}} \sin \alpha , \quad \cos \beta = \frac {b - a \cos \alpha}{r _ {A B}}\tag{14}
$$

$$
\sin \gamma = \frac {a}{r _ {(D)}} \sin \alpha , \quad \cos \gamma = \frac {b + a \cos \alpha}{r _ {(D)}}\tag{15}
$$

将式(14)和(15)代入式(11)和(12)，再代入式(13)，经过化简，便得

$$
\varphi = \arctan \left(\frac {a ^ {2} + b ^ {2}}{a ^ {2} - b ^ {2}} \tan \alpha\right)\tag{16}
$$

(2)再求线圈的四边所受的力对转轴的力矩 由于 $BC$ 和 $DA$ 两边所受的力 $\pmb{F}_{BC}$ 和 $\pmb{F}_{DA}$ 都与转轴 $P_{1}P_{2}$ 平行，故它们对转轴的力矩均为零.于是四边所受的力对转轴的力矩之和便等于 $AB$ 和 $CD$ 两边所受的力对转轴的力矩之和.由图6.2.40(4)可见，这个力矩的值为

$$
\begin{array}{r l} M & = F _ {A B} b \sin \beta + F _ {C D} b \sin \gamma = \frac {\mu_ {0} I _ {1} I _ {2} a b}{\pi} \left[ \frac {\sin \beta}{r _ {A B}} + \frac {\sin \gamma}{r _ {C D}} \right] \\ & = \frac {\mu_ {0} I _ {1} I _ {2} a ^ {2} b \sin \alpha}{\pi} \left[ \frac {1}{r _ {A B} ^ {2}} + \frac {1}{r _ {C D} ^ {2}} \right] \\ & = \frac {2 \mu_ {0} I _ {1} I _ {2} a ^ {2} b (a ^ {2} + b ^ {2}) \sin \alpha}{\pi [ (a ^ {2} + b ^ {2}) ^ {2} - 4 a ^ {2} b ^ {2} \cos^ {2} \alpha ]} \end{array}\tag{17}
$$

M 的方向是使 $\alpha$ 减小的方向.

(3) 当 $M = 0$ 时, 线圈达到平衡. 由式(17)得

$$
\begin{array}{r l} \alpha = 0 & (\text {   稳定平衡   }) \\ \alpha = \pi & (\text {   不稳定平衡   }) \end{array}\tag{18}
$$

$$
W = \int_ {0} ^ {\pi / 2} M \mathrm{d} \alpha\tag{19}
$$

(4)线圈从 $\alpha=0$ 转到 $\alpha=\frac{\pi}{2}$ ， $I_{1}$ 作用在线圈上的力所作的功为

$$
\begin{array}{l} = \frac {2 \mu_ {0} I _ {1} I _ {2} a ^ {2} b (a ^ {2} + b ^ {2})}{\pi} \int_ {0} ^ {\pi / 2} \frac {\sin \alpha \mathrm{d} \alpha}{(a ^ {2} + b ^ {2}) ^ {2} - 4 a ^ {2} b ^ {2} \cos^ {2} \alpha} \\ = - \frac {\mu_ {0} I _ {1} I _ {2} (a ^ {2} + b ^ {2})}{2 \pi b} \int_ {1} ^ {0} \frac {\mathrm{d} \cos \alpha}{\left(\frac {a ^ {2} + b ^ {2}}{2 a b}\right) ^ {2} - \cos^ {2} \alpha} \\ = - \frac {\mu_ {0} I _ {1} I _ {2} a}{2 \pi} \ln \frac {a ^ {2} + b ^ {2} + 2 a b \cos \alpha}{a ^ {2} + b ^ {2} - 2 a b \cos \alpha} \Bigg | _ {\alpha = 0} ^ {\alpha = \pi / 2} \\ = \frac {\mu_ {0} I _ {1} I _ {2} a}{2 \pi} \ln \left(\frac {a + b}{a - b}\right) ^ {2} \end{array}\tag{20}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/74ecaddd37a4a5ccfc3cc4048bd5b6944c0e2065ff486849215022f54d8f3977.jpg)


6.2.41 一无穷长直导线载有电流 $I_{1} = 30\mathrm{A}$ ，一长方形回路ABCD和它在同一平面内，且DA边与导线平行，线圈长为 $a = 30\mathrm{cm}$ ，宽为 $b = 8.0\mathrm{cm}$ ，一边到直导线的距离为 $c = 1.0\mathrm{cm}$ ，载有电流 $I_{2} = 20\mathrm{A}$ ，如图6.2.41所示。试求直导线上的电流作用在回路各边上的安培力之和。

【解】根据无穷长直线电流产生磁感强度的公式和电流受磁场作用的安培力公式,DA 边所受的力 $F_{DA}$ 为

$$
\boldsymbol {F} _ {D A} = I _ {2} a \boldsymbol {e} _ {2} \times \left(\frac {\mu_ {0} I _ {1}}{2 \pi c} \boldsymbol {e} _ {1}\right) = - \frac {\mu_ {0} I _ {1} I _ {2} a}{2 \pi c} \boldsymbol {e} _ {3}\tag{1}
$$

式中 $e_{1}$ 、 $e_{2}$ 和 $e_{3}$ 分别为向内、向上和向右的单位矢量，关系为 $e_{1} \times e_{2} = e_{3}$ 。

图6.2.41

BC 边所受的力 $F_{BC}$ 为

$$
\boldsymbol {F} _ {B C} = - I _ {2} a \boldsymbol {e} _ {2} \times \left[ \frac {\mu_ {0} I _ {1}}{2 \pi (b + c)} \boldsymbol {e} _ {1} \right] = \frac {\mu_ {0} I _ {1} I _ {2} a}{2 \pi (b + c)} \boldsymbol {e} _ {3}\tag{2}
$$

由对称性可知，AB 边所受的力 $F_{AB}$ 和 CD 边所受的力 $F_{CD}$ 大小相等而方向相反， $F_{AB}$ 向上而 $F_{CD}$ 向下。故

$$
\boldsymbol {F} _ {A B} + \boldsymbol {F} _ {(D)} = 0\tag{3}
$$

于是得回路各边受 $I_{1}$ 作用的安培力之和为

$$
\begin{array}{r l} \boldsymbol {F} & = \boldsymbol {F} _ {D A} + \boldsymbol {F} _ {A B} + \boldsymbol {F} _ {B C} + \boldsymbol {F} _ {C D} = \boldsymbol {F} _ {D A} + \boldsymbol {F} _ {B C} \\ & = - \frac {\mu_ {0} I _ {1} I _ {2} a}{2 \pi c} \boldsymbol {e} _ {3} + \frac {\mu_ {0} I _ {1} I _ {2} a}{2 \pi (b + c)} \boldsymbol {e} _ {3} \\ & = - \frac {\mu_ {0} I _ {1} I _ {2} a b}{2 \pi c (b + c)} \boldsymbol {e} _ {3} \end{array}\tag{4}
$$

$\pmb{F}$ 的大小为

$$
\begin{array}{r l} F & = \frac {\mu_ {0} I _ {1} I _ {2} a b}{2 \pi c (b + c)} = \frac {4 \pi \times 1 0 ^ {- 7} \times 3 0 \times 2 0 \times 3 0 \times 1 0 ^ {- 2} \times 8 . 0 \times 1 0 ^ {- 2}}{2 \pi \times 1 . 0 \times 1 0 ^ {- 2} \times (8 . 0 \times 1 0 ^ {- 2} + 1 . 0 \times 1 0 ^ {- 2})} \\ & = 3. 2 \times 1 0 ^ {- 3} (\mathrm{N}) \end{array}\tag{5}
$$

F 的方向向左, 即向 $I_{1}$ 

6.2.42 载有电流 $I_{1}$ 的无穷长直导线旁，有一与它共面的正三角形线圈，边长为 $a$ ，载有电流 $I_{2}$ ，一边与它平行，中心 $O$ 到它的距离为 $b$ ，如图6.2.42(1)所示.试求直导线上的电流 $I_{1}$ 作用在三角形线圈上各边的安培力之和.

【解】根据无穷长直线电流产生磁感强度的公式和电流受磁场作用的安培力公式,AB边所受的力为

$$
\begin{array}{r l} \mathbf {F} _ {A B} & = I _ {2} a \mathbf {e} _ {2} \times \left[ \frac {\mu_ {0} I _ {1}}{2 \pi (b - \sqrt {3} a / 6)} e _ {1} \right] \\ & = - \frac {3 \mu_ {0} I _ {1} I _ {2} a}{\pi (6 b - \sqrt {3} a)} \mathbf {e} _ {3} \end{array}\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6f07ae96f4f4ae4df1d5c2728b298ff86c46e09b3ef6a85366e616676fa39430.jpg)


式中 $e_{1}$ 、 $e_{2}$ 和 $e_{3}$ 分别为向内、向上和向右的单位矢量，关系为 $e_{1} \times e_{2} = e_{3}$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/732ad2f132a03df7c32f2ea6159b22584fd6c8286581aa79f399787dbb241be9.jpg)



图6.2.42(1)



图6.2.42(2)


BC 和 CA 两边由于位置相当, 它们所受的力 $F_{BC}$ 和 $F_{CA}$ 

大小相等,方向都在三角形的平面内,并分别与两边垂直,如图6.2.42(2)所示.它们的大小为

$$
\begin{array}{r l} F _ {B C} & = F _ {C A} = \int_ {0} ^ {a} I _ {2} \mathrm{d} l \left(\frac {\mu_ {0} I _ {1}}{2 \pi r}\right) \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi} \int_ {0} ^ {a} \frac {\mathrm{d} l}{r} \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{2 \pi} \int_ {0} ^ {a} \frac {\mathrm{d} l}{b - \frac {\sqrt {3}}{6} a + \frac {\sqrt {3}}{2} l} \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{\sqrt {3} \pi} \ln \left(b - \frac {\sqrt {3}}{6} a + \frac {\sqrt {3}}{2} l\right) \Bigg | _ {l = 0} ^ {l - a} \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{\sqrt {3} \pi} \ln \left(\frac {6 b + 2 \sqrt {3} a}{6 b - \sqrt {3} a}\right) \end{array}\tag{2}
$$

由于 $\pmb{F}_{\mathrm{BC}}$ 和 $\pmb{F}_{\mathrm{CA}}$ 对于三角形的顶角 $C$ 是对称的，故它们平行于 $I_{1}$ 的分量大小相等而方向相反，于是它们之和为

$$
\begin{array}{r l} \boldsymbol {F} _ {B C} + \boldsymbol {F} _ {C A} & = 2 F _ {B C} \cos 6 0 ^ {\circ} \boldsymbol {e} _ {3} = F _ {B C} \cdot \boldsymbol {e} _ {3} \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{\sqrt {3} \pi} \ln \left(\frac {6 b + 2 \sqrt {3} a}{6 b - \sqrt {3} a}\right) \boldsymbol {e} _ {3} \end{array}\tag{3}
$$

最后得三角形线圈三边所受的安培力之和为

$$
\begin{array}{r l} \boldsymbol {F} & = \boldsymbol {F} _ {\mathrm{AB}} + \boldsymbol {F} _ {\mathrm{BC}} + \boldsymbol {F} _ {\mathrm{CA}} \\ & = - \frac {3 \mu_ {0} I _ {1} I _ {2} a}{\pi (6 b - \sqrt {3} a)} \boldsymbol {e} _ {3} + \frac {\mu_ {0} I _ {1} I _ {2}}{\sqrt {3} \pi} \ln \left(\frac {6 b + 2 \sqrt {3} a}{6 b - \sqrt {3} a}\right) \boldsymbol {e} _ {3} \\ & = \frac {\mu_ {0} I _ {1} I _ {2}}{\pi} \left[ \frac {1}{\sqrt {3}} \ln \left(\frac {6 b + 2 \sqrt {3} a}{6 b - \sqrt {3} a}\right) - \frac {3 a}{6 b - \sqrt {3} a} \right] \boldsymbol {e} _ {3} \end{array}\tag{4}
$$

6.2.43 一无穷长直导线载有电流 $I_{1}$ , 旁边有一个与它共面的圆线圈, 圆线圈的半径为 R，载有电流 $I_{2}$ ，圆心 O 到直导线的距离为 l，电流的方向如图 6.2.43(1) 所示。试求直线电流 $I_{1}$ 作用在圆线圈上的力。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/fa428e640ba5f927e111252117d21480f73ef29a1a545259b0b05241220e3968.jpg)



图6.2.43(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/307ea304912ee3329de34728af14a079bfd64a8fcfbdefd941ed14820f100560.jpg)



图6.2.43(2)


【解】如图6.2.43(2)，令 $e_{1}$ 、 $e_{2}$ 和 $e_{3}$ 分别为向内、向上和向右的单位矢量，它们的关系为 $e_{1}\times e_{2}=e_{3}$ .根据无限长直线电流产生磁感强度的公式和电流受磁场作用的安培力公式，圆线圈上电流元 $I_{2}dl$ 受 $I_{1}$ 的作用力为

$$
\begin{array}{r l} \mathrm{d} \boldsymbol {F} & = I _ {2} \mathrm{d} \boldsymbol {l} \times \boldsymbol {B} = I _ {2} R \mathrm{d} \theta (\cos \theta \boldsymbol {e} _ {2} + \sin \theta \boldsymbol {e} _ {3}) \times \left(\frac {\mu_ {0} I _ {1}}{2 \pi r} \boldsymbol {e} _ {1}\right) \\ & = \frac {\mu_ {0} I _ {1} I _ {2} R}{2 \pi} \frac {\sin \theta \boldsymbol {e} _ {2} - \cos \theta \boldsymbol {e} _ {3}}{r} \mathrm{d} \theta \\ & = \frac {\mu_ {0} I _ {1} I _ {2} R}{2 \pi} \frac {\sin \theta \boldsymbol {e} _ {2} - \cos \theta \boldsymbol {e} _ {3}}{l - R \cos \theta} \mathrm{d} \theta \end{array}\tag{1}
$$

积分便得 $I_{1}$ 作用在圆线圈上的力为

$$
\boldsymbol {F} = \frac {\mu_ {0} I _ {1} I _ {2} R}{2 \pi} \int_ {0} ^ {2 \pi} \frac {\sin \theta \boldsymbol {e} _ {2} - \cos \theta \boldsymbol {e} _ {3}}{l - R \cos \theta} d \theta\tag{2}
$$

其中积分

$$
\int_ {0} ^ {2 \pi} \frac {\sin \theta \mathrm{d} \theta}{l - R \cos \theta} = \left. \frac {1}{R} \ln (l - R \cos \theta) \right| _ {\theta = 0} ^ {\theta - 2 \pi} = 0\tag{3}
$$

$$
\begin{array}{r l} \int_ {0} ^ {2 \pi} \frac {\cos \theta \mathrm{d} \theta}{l - R \cos \theta} & = \left[ - \frac {\theta}{R} + \frac {l}{R} \frac {2}{\sqrt {l ^ {2} - R ^ {2}}} \arctan \left(\sqrt {\frac {l - R}{l + R}} \tan \frac {\theta}{2}\right) \right] _ {\theta = 0} ^ {\theta = 2 \pi} \\ & = - \frac {2 \pi}{R} + \frac {2 l}{R \sqrt {l ^ {2} - R ^ {2}}} \pi \\ & = \frac {2 \pi}{R} \left(\frac {l}{\sqrt {l ^ {2} - R ^ {2}}} - 1\right) \end{array}\tag{4}
$$

将式(3)、(4)代入式(2)便得

$$
\boldsymbol {F} = \mu_ {0} I _ {1} I _ {2} \left(1 - \frac {l}{\sqrt {l ^ {2} - R ^ {2}}}\right) \boldsymbol {e} _ {3}\tag{5}
$$

因 $l / \sqrt{l^2 - R^2} > 1$ ，故 $\pmb{F}$ 与 $\pmb{e}_3$ 反方向，即 $\pmb{F}$ 指向 $I_{1}$ 

【别解】根据对称性,由图6.2.43(3)可见,圆的上下两半相应位置的电流元 $l_{2}dl$ 所受的力dF平行于直线的分量大小相等而方向相反,故相加的结果为零;垂直于直线的分量大小相等而方向相同,故整个圆线圈所受的力F的大小就等于

$$
\begin{array}{l} F = 2 \int_ {0} ^ {\pi} (\mathrm{d} F) \cos \theta = 2 \int_ {0} ^ {\pi} (I _ {2} R \mathrm{d} \theta) \left[ \frac {\mu_ {0} I _ {1}}{2 \pi (l - R \cos \theta)} \right] \cos \theta \\ = \frac {\mu_ {0} I _ {1} I _ {2} R}{\pi} \int_ {0} ^ {\pi} \frac {\cos \theta \mathrm{d} \theta}{l - R \cos \theta} \\ = \frac {\mu_ {0} I _ {1} I _ {2} R}{\pi} \left[ - \frac {\theta}{R} + \frac {l}{R} \frac {2}{\sqrt {l ^ {2} - R ^ {2}}} \arctan \left(\sqrt {\frac {l - R}{l + R}} \tan \frac {\theta}{2}\right) \right] _ {\delta - 0} ^ {\delta - \pi} \\ = \mu_ {0} I _ {1} I _ {2} \left(\frac {l}{\sqrt {l ^ {2} - R ^ {2}}} - 1\right) \end{array} \tag {6}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/69ea2304fdd81a7952160fdec26481916838b84c2fe64bb7502fc80fe4d99c1f.jpg)



图6.2.43(3)


(6) 

F 的方向向 $I_{1}$ .

6.2.44 两个圆线圈的半径分别为 $R_{1}$ 和 $R_{2}$ , 所载电流分别 $I_{1}$ 和 $I_{2}$ , 圆心相距为 $l$ , 线圈 2 的直径在线圈 1 的轴线上, 如图 6.2.44 所示. 当 $l$ 比 $R_{1}$ 和 $R_{2}$ 都大很多时, 试求 $I_{1}$ 作用在线圈 2 上的力矩.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/ff6eb5ff3633731ac52d3eb6b7e1f27a3234f4696efeaef2f501a07c5d8b0491.jpg)



图6.2.44


【解】圆电流 $I_{1}$ 在轴线上离圆心为 l 处产生的磁感强度为 [参见前面 5.1.20 题的式(2)]

$$
\boldsymbol {B} _ {1} = \frac {\mu_ {0} I _ {1} R _ {1} ^ {2}}{2 (l ^ {2} + R _ {1} ^ {2}) ^ {3 / 2}} e _ {1}\tag{1}
$$

式中 $e_{1}$ 是电流 $I_{1}$ 右旋进方向上的单位矢量. 今 $l \gg R_{1}$ ，故 $B_{1}$ 可近似为

$$
\pmb {B} _ {1} = \frac {\mu_ {0} I _ {1} R _ {1} ^ {2}}{2 l ^ {3}} \pmb {e} _ {1}\tag{2}
$$

由于 $l \gg R_2$ ，故在线圈2所在处， $\pmb{B}_1$ 可当作均匀磁场，于是 $I_1$ 作用在线圈2上的力矩为

$$
\begin{array}{r l} \boldsymbol {M} & = \boldsymbol {m} \times \boldsymbol {B} _ {1} = I _ {2} (\pi R _ {2} ^ {2}) \boldsymbol {e} _ {2} \times \left(\frac {\mu_ {0} I _ {1} R _ {1} ^ {2}}{2 l ^ {3}} \boldsymbol {e} _ {1}\right) \\ & = \frac {\pi \mu_ {0} I _ {1} I _ {2} R _ {1} ^ {2} R _ {2} ^ {2}}{2 l ^ {3}} \boldsymbol {e} _ {2} \times \boldsymbol {e} _ {1} \end{array}\tag{3}
$$

式中 $e_{2}$ 是电流 $I_{2}$ 的右旋进方向上的单位矢量.

## 第七章 磁介质

7.1 一均匀磁化棒直径为 $10\mathrm{mm}$ , 长为 $30\mathrm{mm}$ , 磁化强度为 $1200\mathrm{A / m}$ . 试求它的磁矩.

【解】 磁矩的大小为

$$
\begin{array}{r l} m & = M V = \pi R ^ {2} l M = \pi \times \left(\frac {1 0}{2} \times 1 0 ^ {- 3}\right) ^ {2} \times 3 0 \times 1 0 ^ {- 3} \times 1 2 0 0 \\ & = 2. 8 \times 1 0 ^ {- 3} (\mathrm{A} \cdot \mathrm{m} ^ {2}) \end{array}
$$

7.2 一细长的均匀磁化棒, 磁化强度为 M, M 沿棒长方向, 如图 7.2(1) 所示. 试分别求图中 1 至 7 各点的磁场强度 H 和磁感强度 B.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e6c2bcb378fcde5569f037e7123b0b707848dc063105a062e1cf4cba251fb5fc.jpg)



图7.2(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5c75b9d34dbdde497403b2297398c002212c236df129891d267be2cb34fcf362.jpg)



图7.2(2)


## 【解】用分子电流的观点求解

因为是均匀磁化,故磁棒内各处的分子电流互相抵消,只在磁棒的表面,有一层未被抵消的分子电流,成为磁化面电流 $I_{m}$ , 如图 7.2(2) 所示.设想一长方形闭合环路 L, 长为 b 的一边在磁棒内沿轴线, 对边在磁棒外, 则由公式

$$
\oint_ {L} \pmb {M} \cdot \mathrm{d} \pmb {l} = I _ {\mathrm{m}} (\text {   被   } L \text {   套住的磁化电流   })\tag{1}
$$

得

$$
M b = I _ {\mathrm{m}}\tag{2}
$$

于是得沿棒长方向上单位长度的磁化电流便为

$$
\frac {I _ {\mathrm{m}}}{b} = M\tag{3}
$$

这相当于一个长螺线管,单位长度的匝数为 n,其单位长度的电流为

$$
n I = M\tag{4}
$$

设螺线管长为 $l$ ，横截面的半径为 $R$ ，则由前面5.1.29题的式(6)，管中心的磁感强度的大小为

$$
B _ {0} = \frac {\mu_ {0} n I}{\sqrt {1 + (2 R / l) ^ {2}}} = \frac {\mu_ {0} M}{\sqrt {1 + (2 R / l) ^ {2}}}\tag{5}
$$

考虑到方向,便得所求的磁感强度为

$$
\boldsymbol {B} _ {1} = \frac {\mu_ {0} \boldsymbol {M}}{\sqrt {1 + (2 R / l) ^ {2}}} \approx \mu_ {0} \boldsymbol {M} - 2 \mu_ {0} \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} \approx \mu_ {0} \boldsymbol {M}\tag{6}
$$

图 7.2(1) 中 2、3 两点都在长螺线管中部外边，故得

$$
\boldsymbol {B} _ {2} = \boldsymbol {B} _ {3} \approx 0\tag{7}
$$

图 7.2(1) 中 4、5、6、7 等点都在长螺线管的管口处, 根据前面 5.1.30 题的式(3), 磁感强度为

$$
\boldsymbol {B} _ {e} = \frac {1}{2} \frac {\mu_ {0} \boldsymbol {M}}{\sqrt {1 + (R / l) ^ {2}}} \approx \frac {1}{2} \mu_ {0} \boldsymbol {M} - \frac {1}{4} \mu_ {0} \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} \approx \frac {1}{2} \mu_ {0} \boldsymbol {M}\tag{8}
$$

因此，这四点的磁感强度为

$$
\boldsymbol {B} _ {4} = \boldsymbol {B} _ {5} = \boldsymbol {B} _ {6} = \boldsymbol {B} _ {7} = \frac {1}{2} \mu_ {0} \boldsymbol {M} - \frac {1}{4} \mu_ {0} \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} \approx \frac {1}{2} \mu_ {0} \boldsymbol {M}\tag{9}
$$

再求磁场强度 H. 根据定义式

$$
\boldsymbol {H} = \frac {\boldsymbol {B}}{\mu_ {0}} - \boldsymbol {M}\tag{10}
$$

得各处的 $\pmb{H}$ 如下：

$$
\boldsymbol {H} _ {1} = \boldsymbol {M} - 2 \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} - \boldsymbol {M} = - 2 \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} \approx 0\tag{11}
$$

$$
\boldsymbol {H} _ {2} = 0 - 0 = 0\tag{12}
$$

$$
\boldsymbol {H} _ {3} = 0 - 0 = 0\tag{13}
$$

$$
\boldsymbol {H} _ {4} = \frac {1}{2} \boldsymbol {M} - \frac {1}{4} \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} - 0 \approx \frac {1}{2} \boldsymbol {M}\tag{14}
$$

$$
\boldsymbol {H} _ {5} = \frac {1}{2} \boldsymbol {M} - \frac {1}{4} \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} - \boldsymbol {M} \approx - \frac {1}{2} \boldsymbol {M}\tag{15}
$$

$$
\boldsymbol {H} _ {6} = \frac {1}{2} \boldsymbol {M} - \frac {1}{4} \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} - \boldsymbol {M} \approx - \frac {1}{2} \boldsymbol {M}\tag{16}
$$

$$
\boldsymbol {H} _ {7} = \frac {1}{2} \boldsymbol {M} - \frac {1}{4} \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} - 0 = \frac {1}{2} \boldsymbol {M}\tag{17}
$$

【讨论】一、磁棒上磁化电流的分布,可以根据磁化电流与磁化强度的一般关系式得出,关系式是

$$
\text { 磁化电流密度: } \quad j _ {m} = \nabla \times M\tag{18}
$$

$$
\text { 磁化面电流密度 }: \pmb {k} _ {\mathrm{m}} = - \pmb {n} \times \pmb {M}\tag{19}
$$

现在 M 是常矢量, 故得磁棒内磁化电流密度为

$$
\boldsymbol {j} _ {\mathrm{m}} = \boldsymbol {\nabla} \times \boldsymbol {M} = 0\tag{20}
$$

磁棒表面磁化电流的面密度为

$$
\boldsymbol {k} _ {\mathrm{m}} = - \boldsymbol {n} \times \boldsymbol {M}\tag{21}
$$

其大小为

$$
\boldsymbol {k} _ {\mathrm{m}} = M\tag{22}
$$

其方向如图 7.2(2) 所示.

二、本题和后面一些题(如7.3题,7.5题)都是概念性的题,即用物理概念和一些规律推得所要求的量.显然,由于题目所给的尺寸和位置等都不够准确,故所得出的量只能是近似的,而不是准确的.

## 【别解】 用磁荷的观点求解

根据磁库仑定律,磁荷量为 $q_{m}$ 的静止点磁荷在 r 处产生的磁场强度为

$$
\boldsymbol {H} = \frac {1}{4 \pi \mu_ {0}} \frac {q _ {\mathrm{m}}}{r ^ {3}} \boldsymbol {r}\tag{23}
$$

磁极化强度(单位体积内的磁偶极矩) $P_{m}$ 与磁化强度M的关系为

$$
\boldsymbol {P} _ {\mathrm{m}} = \mu_ {0} \boldsymbol {M}\tag{24}
$$

磁荷量密度与磁极化强度的关系为

$$
\text {   磁荷量密度:   } \rho_ {\mathrm{m}} = - \nabla \cdot P _ {\mathrm{m}} = - \mu_ {0} \nabla \cdot M\tag{25}
$$

$$
\text { 磁荷量的面密度 }: \sigma_ {\mathrm{m}} = \pmb {n} \cdot \pmb {P} _ {\mathrm{m}} = \mu_ {0} \pmb {n} \cdot \pmb {M}\tag{26}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/9f3bb974e017af53fbf2df39ab17d81d93e9590692f1d09ad5dbb40ecf7ff058.jpg)



图7.2(3)


由于磁荷产生磁场强度的规律与电荷产生电场强度的规律相同，故各种分布的磁荷所产生的磁场强度便可仿效求同样分布的电荷所产生的电场强度的方法，求出相应的磁场强度来。例如，半径为 $R$ 的圆面均匀带电，电荷量的面密度为 $\sigma$ ，在轴线上离圆心为 $r$ 处产生的

电场强度为[参见前面1.2.21题的式(4)]

$$
\boldsymbol {E} = \frac {\sigma}{2 \varepsilon_ {0}} \left(1 - \frac {r}{\sqrt {r ^ {2} + R ^ {2}}}\right) \boldsymbol {e} _ {r}, \quad r > 0\tag{27}
$$

式中 $e_r$ 为从圆心指向场点的单位矢量. 仿此得: 半径为 $R$ 的圆面上均匀分布着磁荷, 磁荷量的面密度为 $\sigma_m$ , 在轴线上离圆心为 $r$ 处产生的磁场强度便为

$$
\boldsymbol {H} = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left(1 - \frac {r}{\sqrt {r ^ {2} + R ^ {2}}}\right) \boldsymbol {e} _ {r}, \quad r > 0\tag{28}
$$

现在回到本题. 根据式(25)和(26)，磁棒内磁荷量密度为

$$
\rho_ {\mathrm{m}} = - \mu_ {0} \nabla \cdot \boldsymbol {M} = 0\tag{29}
$$

磁棒表面磁荷量的面密度为

$$
\sigma_ {\mathrm{m+}} = \mu_ {0} \pmb {n} _ {+} \cdot \pmb {M} = \mu_ {0} M \quad (\mathrm{N} \text {端面})\tag{30}
$$

$$
\sigma_ {\mathrm{m-}} = \mu_ {0} \pmb {n} \cdot \pmb {M} = - \mu_ {0} M \quad (\mathrm{S} \text {端面})\tag{31}
$$

$$
\sigma_ {\mathrm{m}} = \mu_ {0} \boldsymbol {n} \cdot \boldsymbol {M} = 0\tag{32}
$$

因此，从磁荷的观点看，均匀磁化棒除两端面有磁荷分布外，其他地方没有磁荷。于是磁棒所产生的磁场便是它的两端面上的磁荷所产生的磁场。设棒长为 $l$ ，棒的半径为 $R$ ，则两端面上的磁荷在磁棒中心产生的磁场强度，由式(28)和(30)、(31)为

$$
\boldsymbol {H} _ {1} = \frac {M}{2} \left[ 1 - \frac {l / 2}{\sqrt {(l / 2) ^ {2} + R ^ {2}}} \right] (- \boldsymbol {e} _ {r})
$$

$$
\begin{array}{l} + \frac {- M}{2} \left[ 1 - \frac {l / 2}{\sqrt {(l / 2) ^ {2} + R ^ {2}}} \right] e _ {r} \\ = M \left[ \frac {l / 2}{\sqrt {(l / 2) ^ {2} + R ^ {2}}} - 1 \right] e _ {r} \end{array}\tag{33}
$$

式中 $e_{r}$ 代表从 S 端指向 N 端的单位矢量，即 M 方向上的单位矢量。因为是细长棒，故 $l \gg R$ ，于是由式(33)得

$$
\begin{array}{r l} \boldsymbol {H} _ {1} & = M \left[ \left\{1 + \left(\frac {2 R}{l}\right) ^ {2} \right\} ^ {- 1 / 2} - 1 \right] \boldsymbol {e} _ {r} \approx M \left[ - \frac {4}{2} \left(\frac {R}{l}\right) ^ {2} \right] \boldsymbol {e} _ {r} \\ & = - 2 \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} \approx 0 \end{array}\tag{34}
$$

靠近 S 端的 5 处, 设该点到端面的距离为 $\delta$ , 则磁场强度为

$$
\boldsymbol {H} _ {5} = \frac {M}{2} \left[ 1 - \frac {l}{\sqrt {l ^ {2} + R ^ {2}}} \right] (- \boldsymbol {e} _ {r}) + \frac {- M}{2} \left[ 1 - \frac {\delta}{\sqrt {\delta^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {r}\tag{35}
$$

因 $l \gg R \gg \delta$ ，故上式可化为

$$
\boldsymbol {H} _ {5} \approx - \frac {1}{4} \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} - \frac {1}{2} \boldsymbol {M} \approx - \frac {1}{2} \boldsymbol {M}\tag{36}
$$

靠近 N 端的 6 处, 同样得磁场强度为

$$
\begin{array}{r l} \boldsymbol {H} _ {6} & = \frac {M}{2} \left[ 1 - \frac {\delta}{\sqrt {\delta^ {2} + R ^ {2}}} \right] (- e _ {r}) + \frac {- M}{2} \left[ 1 - \frac {l}{\sqrt {l ^ {2} + R ^ {2}}} \right] e _ {r} \\ & \approx - \frac {1}{2} \boldsymbol {M} - \frac {1}{4} \left(\frac {R}{l}\right) ^ {2} \boldsymbol {M} \approx - \frac {1}{2} \boldsymbol {M} \end{array}\tag{37}
$$

S端外的4处,磁场强度为

$$
\begin{array}{r l} \mathbf {H} _ {4} & = \frac {M}{2} \left[ 1 - \frac {l + \delta}{\sqrt {(l + \delta) ^ {2} + R ^ {2}}} \right] (- \mathbf {e} _ {r}) \\ & + \frac {- M}{2} \left[ 1 - \frac {\delta}{\sqrt {\delta^ {2} + R ^ {2}}} \right] (- \mathbf {e} _ {r}) \\ & \approx - \frac {1}{4} \left(\frac {R}{l + \delta}\right) ^ {2} \mathbf {M} + \frac {1}{2} \mathbf {M} \approx \frac {1}{2} \mathbf {M} \end{array}\tag{38}
$$

N端外的7处,磁场强度为

$$
\begin{array}{r l} \boldsymbol {H} _ {7} & = \frac {M}{2} \left[ 1 - \frac {\delta}{\sqrt {\delta^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {r} + \frac {- M}{2} \left[ 1 - \frac {l + \delta}{\sqrt {(l + \delta) ^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {r} \\ & \approx \frac {1}{2} \boldsymbol {M} - \frac {1}{4} \left(\frac {R}{l + \delta}\right) ^ {2} \boldsymbol {M} \approx \frac {1}{2} \boldsymbol {M} \end{array}\tag{39}
$$

磁棒中部外边的2、3两处，根据对称性，其磁场强度应相同，即 $H_{2}=H_{3}$ ；由于是细长棒， $H_{2}$ 和 $H_{3}$ 均应平行于磁棒。取一个长方形小回路L，使长为l的一边沿轴线并通过棒中心的1处，对边通过棒外的2处，则由安培环路定理

$$
\oint_ {L} \pmb {H} \cdot \mathrm{d} l = I (L \text {所套住的自由电流})\tag{40}
$$

得 $H_{1}l - H_{2}l = 0$ ，于是得

$$
\boldsymbol {H} _ {2} = \boldsymbol {H} _ {3} = \boldsymbol {H} _ {1} \approx 0\tag{41}
$$

再由式(10)得各点的磁感强度如下：

$$
\boldsymbol {B} _ {1} = \mu_ {0} (\boldsymbol {H} _ {1} + \boldsymbol {M} _ {1}) = \mu_ {0} (0 + \boldsymbol {M}) = \mu_ {0} \boldsymbol {M}\tag{42}
$$

$$
\boldsymbol {B} _ {2} = \mu_ {0} (\boldsymbol {H} _ {2} + \boldsymbol {M} _ {2}) = \mu_ {0} (0 + 0) = 0\tag{43}
$$

$$
\boldsymbol {B} _ {3} = \mu_ {0} (\boldsymbol {H} _ {3} + \boldsymbol {M} _ {3}) = \mu_ {0} (0 + 0) = 0\tag{44}
$$

$$
\boldsymbol {B} _ {4} = \mu_ {0} (\boldsymbol {H} _ {4} + \boldsymbol {M} _ {4}) - \mu_ {0} \left(\frac {1}{2} \boldsymbol {M} + 0\right) = \frac {1}{2} \mu_ {0} \boldsymbol {M}\tag{45}
$$

$$
\boldsymbol {B} _ {5} = \mu_ {0} (\boldsymbol {H} _ {5} + \boldsymbol {M} _ {5}) = \mu_ {0} \left(- \frac {1}{2} \boldsymbol {M} + \boldsymbol {M}\right) = \frac {1}{2} \mu_ {0} \boldsymbol {M}\tag{46}
$$

$$
\boldsymbol {B} _ {6} = \mu_ {0} (\boldsymbol {H} _ {6} + \boldsymbol {M} _ {6}) = \mu_ {0} \left(- \frac {1}{2} \boldsymbol {M} + \boldsymbol {M}\right) = \frac {1}{2} \mu_ {0} \boldsymbol {M}\tag{47}
$$

$$
\pmb {B} _ {7} = \mu_ {0} (\pmb {H} _ {7} + \pmb {M} _ {7}) = \mu_ {0} \left(\frac {1}{2} \pmb {M} + 0\right) = \frac {1}{2} \mu_ {0} \pmb {M}\tag{48}
$$

【讨论】式(23)定义的磁荷量 $q_{\mathrm{m}}$ 的单位为 $\mathrm{Wb}, 1\mathrm{Wb} = 1\mathrm{V}\cdot \mathrm{s}$ . 参见: 张之翔等, 《磁单极强度的单位与电磁对称性》, 《大学物理》1988年第11期5页; 《北京大学普通物理教学研究论文集》第二集(北京大学出版社, 1992), 109页.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/3539b440d94ada768576b403e9b74799e89507c12e007af8e5d470ee0375d877.jpg)


7.3 一铁环均匀磁化, 磁化强度为 M, M 沿环的方向; 环上有一很窄的空气隙, 如图 7.3 所示. 已知环的横截面的半径比环长小很多, 试分别求图中 1、2 和 3 等点的磁场强度 H 和磁感强度 B.


图7.3


## 【解】用分子电流的观点求解

因为铁环是均匀磁化的,故其内部各处的分子电流互相抵消,因而磁化电流密度为零,只在环的表面有一层未被抵消的分子电流,成为磁化面电流,这磁化面电流密度为

$$
k _ {\mathrm{m}} = - \boldsymbol {n} \times \boldsymbol {M}\tag{1}
$$

式中 n 是环的表面外法线方向上的单位矢量. $k_{m}$ 的方向是 M 的右手螺旋方向, $k_{m}$ 的大小为 $k_{m} = M$ . 因此, 铁环内的磁感强度 B 便和一个载流螺绕环的磁感强度相同; B 的方向为 M 的方向, B 的大小等于 $\mu_{0} M$ . 于是得

$$
\boldsymbol {B} _ {2} = \boldsymbol {B} _ {3} = \mu_ {0} \boldsymbol {M}\tag{2}
$$

由于 B 的法向分量连续, 故得

$$
\boldsymbol {B} _ {1} = \boldsymbol {B} _ {2} = \boldsymbol {B} _ {3} = \mu_ {0} \boldsymbol {M}\tag{3}
$$

式中 M 的方向是 2 或 3 处 M 的方向.

各点的磁场强度分别为

$$
\pmb {H} _ {1} = \frac {\pmb {B} _ {1}}{\mu_ {0}} - \pmb {M} _ {1} = \pmb {M} - 0 = \pmb {M}\tag{4}
$$

$$
\boldsymbol {H} _ {2} = \frac {\boldsymbol {B} _ {2}}{\mu_ {0}} - \boldsymbol {M} _ {2} = \boldsymbol {M} - \boldsymbol {M} = 0\tag{5}
$$

$$
\boldsymbol {H} _ {3} = \frac {\boldsymbol {B} _ {3}}{\mu_ {0}} - \boldsymbol {M} _ {3} = \boldsymbol {M} - \boldsymbol {M} = 0\tag{6}
$$

【讨论】参见前面7.2题解后的讨论二.

【别解】用磁荷的观点求解

因均匀磁化,故环内磁荷量密度为

$$
\rho_ {\mathrm{m}} = - \boldsymbol {\nabla} \cdot \boldsymbol {P} _ {\mathrm{m}} = - \mu_ {0} \boldsymbol {\nabla} \cdot \boldsymbol {M} = 0\tag{7}
$$

环的表面磁荷量的面密度为

$$
\sigma_ {\mathrm{m} +} = \pmb {n} _ {+} \cdot \pmb {P} _ {\mathrm{m}} = \mu_ {0} \pmb {n} _ {+} \cdot \pmb {M} = \mu_ {0} M \quad (\mathrm{N} \text {端面})\tag{8}
$$

$$
\sigma_ {\mathrm{m-}} = \pmb {n} _ {-} \cdot \pmb {P} _ {\mathrm{m}} = \mu_ {0} \pmb {n} _ {-} \cdot \pmb {M} = - \mu_ {0} M (\mathrm{S端面})\tag{9}
$$

$$
\sigma_ {\mathrm{m}} = \pmb {n} \cdot \pmb {P} _ {\mathrm{m}} = \mu_ {0} \pmb {n} \cdot \pmb {M} = 0 \quad (\text {侧面})\tag{10}
$$

可见有空气间隙的均匀磁化铁环只在两个端面上有磁荷,其他地方没有磁荷.由于空气隙很窄,故其间的磁场强度等于两个很大的均匀面磁荷所产生的磁场强度.以 $e_{m}$ 表示M方向上的单位矢量,便有

$$
\boldsymbol {H} _ {1} = \frac {\sigma_ {\mathrm{m} ^ {+}}}{2 \mu_ {0}} \boldsymbol {e} _ {\mathrm{m}} + \frac {\sigma_ {\mathrm{m} ^ {-}}}{2 \mu_ {0}} (- \boldsymbol {e} _ {\mathrm{m}}) = M \boldsymbol {e} _ {\mathrm{m}} = \boldsymbol {M}\tag{11}
$$

$$
\boldsymbol {H} _ {2} = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} (- \boldsymbol {e} _ {\mathrm{m}}) + \frac {\sigma_ {\mathrm{m} -}}{2 \mu_ {0}} (- \boldsymbol {e} _ {\mathrm{m}}) = 0\tag{12}
$$

$$
\boldsymbol {H} _ {3} = \frac {\sigma_ {\mathrm{m} ^ {+}}}{2 \mu_ {0}} \boldsymbol {e} _ {\mathrm{m}} + \frac {\sigma_ {\mathrm{m} ^ {-}}}{2 \mu_ {0}} \boldsymbol {e} _ {\mathrm{m}} = 0\tag{13}
$$

由定义式

$$
\boldsymbol {H} = \frac {\boldsymbol {B}}{\mu_ {0}} - \boldsymbol {M}\tag{14}
$$

得各点的磁感强度分别为

$$
\boldsymbol {B} _ {1} = \mu_ {0} (\boldsymbol {H} _ {1} + \boldsymbol {M} _ {1}) = \mu_ {0} (\boldsymbol {M} + 0) = \mu_ {0} \boldsymbol {M}\tag{15}
$$

$$
\boldsymbol {B} _ {2} = \mu_ {0} (\boldsymbol {H} _ {2} + \boldsymbol {M} _ {2}) = \mu_ {0} (0 + \boldsymbol {M}) = \mu_ {0} \boldsymbol {M}\tag{16}
$$

$$
\boldsymbol {B} _ {3} = \mu_ {0} (\boldsymbol {H} _ {3} + \boldsymbol {M} _ {3}) = \mu_ {0} (0 + \boldsymbol {M}) = \mu_ {0} \boldsymbol {M}\tag{17}
$$

7.4 一磁棒均匀磁化, 磁化强度沿棒长方向. 试证明: 在棒的中垂面上, 棒表面附近内外的 1 和 2 两点(图 7.4) 的磁场强度相等. 这两点的磁感强度相等吗?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f994f2c17c7aacc5d3aa7019a9f05410dc04ea8557e2ee36ded654dd601a6fdc.jpg)


【证】由于对称性，1、2两点的磁场强度都应平行于

图7.4

磁棒. 据此, 作一小长方形的安培环路 $L$ , 使其长为 $l$ 的相对两边平行于棒长并分别通过 1 和 2 两点, 则由安培环路定理有

$$
\oint_ {L} \boldsymbol {H} \cdot d l = \boldsymbol {H} _ {1} \cdot l - \boldsymbol {H} _ {2} \cdot l = 0\tag{1}
$$

所以

$$
\left(\boldsymbol {H} _ {1} - \boldsymbol {H} _ {2}\right) \cdot \boldsymbol {l} = 0\tag{2}
$$

因 $l \neq 0$ ，故得

$$
\boldsymbol {H} _ {1} = \boldsymbol {H} _ {2}\tag{3}
$$

根据定义式

$$
\boldsymbol {H} = \frac {\boldsymbol {B}}{\mu_ {0}} - \boldsymbol {M}\tag{4}
$$

得这两点的磁感强度如下：

$$
\boldsymbol {B} _ {1} = \mu_ {0} (\boldsymbol {H} _ {1} + \boldsymbol {M} _ {1}) = \mu_ {0} (\boldsymbol {H} _ {1} + \boldsymbol {M})\tag{5}
$$

$$
\boldsymbol {B} _ {2} = \mu_ {0} (\boldsymbol {H} _ {2} + \boldsymbol {M} _ {2}) = \mu_ {0} (\boldsymbol {H} _ {2} + 0) = \mu_ {0} \boldsymbol {H} _ {2} = \mu_ {0} \boldsymbol {H} _ {1}\tag{6}
$$

可见 $B_{1} \neq B_{2}$ .

【别证】根据对称性,知1和2两点的磁场强度 $H_{1}$ 和 $H_{2}$ 都平行于该处棒的表面,由磁场强度的边值关系(在两介质交界面上两边,磁场强度的切向分量相等),便得

$$
\boldsymbol {H} _ {1} - \boldsymbol {H} _ {2}\tag{7}
$$

由于1、2两点的磁导率不相等，故

$$
\boldsymbol {B} _ {1} = \mu_ {1} \boldsymbol {H} _ {1} \neq \mu_ {2} \boldsymbol {H} = \boldsymbol {B} _ {2}\tag{8}
$$

7.5 一半径为 $R$ 、厚为 $\delta$ 的圆形薄磁片(磁壳)均匀磁化, 磁化强度为 $M, M$ 与两面垂直, 如图 7.5 所示, 图中 1、2、3 等点分别在磁片中心和磁片两面外靠近中心处. 试分别用(1)分子电流观点和(2)磁荷观点求这三点的磁感强度 $B$ 和磁场强度 $H$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c78889fd48fe88889462151e89e56b3dba2f7878cbb354aa28c62283baf706bf.jpg)



(1) 立体图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/cebb122f2fa870aec9a16b92336cab08abe83e385177a059ed745882efee6082.jpg)



(2) 侧视图



图7.5


【解】（1）用分子电流观点求解

根据磁化电流与磁化强度的关系,磁片内的磁化电流密度为

$$
\boldsymbol {j} _ {\mathrm{m}} = \boldsymbol {\nabla} \times \boldsymbol {M} = 0\tag{1}
$$

表面的磁化面电流密度为

$$
\text { 两平面 }: k _ {\mathrm{m}} = -   n \times M = 0\tag{2}
$$

$$
\text { 侧面: } \quad k _ {\mathrm{m}} = -   n \times M\tag{3}
$$

所以整个磁片上只有侧面上有磁化面电流, 其大小为 $k_{m}=M$ , 其方向为 M 的右手螺旋方向. 因此, 它产生的磁场便等于一个载流圆线圈产生的磁场. 设相当的圆线圈有 N 匝, 每匝的电流为 I, 便有

$$
N I = k _ {\mathrm{m}} \delta = M \delta\tag{4}
$$

载流圆线圈在中心产生的磁感强度为

$$
\boldsymbol {B} = \frac {\mu_ {0} N I}{2 R} \boldsymbol {e} _ {1}\tag{5}
$$

式中 $e_{1}$ 为电流 I 的右旋进方向上的单位矢量. 于是得圆磁片在中心产生的磁感强度为

$$
\boldsymbol {B} _ {1} = \frac {\mu_ {0} M \delta}{2 R} \boldsymbol {e} _ {1} = \frac {\mu_ {0} \delta}{2 R} \boldsymbol {M}\tag{6}
$$

因为是薄片，故 $\delta / R \ll 1$ 。因此，磁片中心的磁感强度 $B_{1}$ 很小。

由 B 的法向分量连续, 得

$$
\boldsymbol {B} _ {2} = \boldsymbol {B} _ {3} = \boldsymbol {B} _ {1} = \frac {\mu_ {0} \delta}{2 R} \boldsymbol {M}\tag{7}
$$

各点的磁场强度分别为

$$
\boldsymbol {H} _ {1} = \frac {\boldsymbol {B} _ {1}}{\mu_ {0}} - \boldsymbol {M} _ {1} = \frac {\delta}{2 R} \boldsymbol {M} - \boldsymbol {M} \approx - \boldsymbol {M}\tag{8}
$$

$$
\boldsymbol {H} _ {2} = \frac {\boldsymbol {B} _ {2}}{\mu_ {0}} - \boldsymbol {M} _ {2} - \frac {\delta}{2 R} \boldsymbol {M} - 0 = \frac {\delta}{2 R} \boldsymbol {M}\tag{9}
$$

$$
\boldsymbol {H} _ {3} - \frac {\boldsymbol {B} _ {3}}{\mu_ {0}} - \boldsymbol {H} _ {3} = \frac {\delta}{2 R} \boldsymbol {M} - 0 = \frac {\hat {\sigma}}{2 R} \boldsymbol {M}\tag{10}
$$

(2)用磁荷观点求解

根据磁荷观点,这磁片内的磁荷量密度为

$$
\rho_ {\mathrm{m}} = - \nabla \cdot \boldsymbol {P} _ {\mathrm{m}} = - \mu_ {0} \nabla \cdot \boldsymbol {M} = 0\tag{11}
$$

表面上磁荷量的面密度为

$$
\sigma_ {\mathrm{m} 1} = \pmb {n} _ {1} \cdot \pmb {P} _ {\mathrm{m}} = \mu_ {0} \pmb {n} _ {+} \cdot \pmb {M} = \mu_ {0} M \quad (\mathrm{N} \text {面})\tag{12}
$$

$$
\sigma_ {\mathrm{m} \cdot \cdot} = \pmb {n} _ {\cdot} \cdot \pmb {P} _ {\mathrm{m}} = \mu_ {0} \pmb {n} _ {\cdot} \cdot \pmb {M} = - \mu_ {0} M (\mathrm{S} \text {面})
$$

$$
\sigma_ {\mathrm{m}} = \boldsymbol {n} \cdot \boldsymbol {P} _ {\mathrm{m}} = \mu_ {0} \boldsymbol {n} \cdot \boldsymbol {M} = 0\tag{13}
$$

(14) 

于是磁片所产生的磁场强度便等于磁荷量面密度分别为 $\sigma_{\mathrm{m+}} = \mu_0M$ 和 $\sigma_{\mathrm{m-}} = -\mu_0M$ 的两个平行的共轴均匀圆面磁荷所产生的磁场强度.以两圆面间的中点 $O$ 为原点，沿轴线取 $x$ 轴如图7.5(3)所示，则由前面1.2.22题两个共轴圆面电荷在轴线上产生电场强度的公式(7)和式(8)得

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/035f78350dfa4e6d69af3f00147b199580ab553173f4c02a08f8b345a4fe66d3.jpg)



图7.5(3)


$$
\begin{array}{l} \boldsymbol {H} = \frac {\sigma_ {\mathrm{m}} R ^ {2} \delta}{2 \mu_ {0} (x ^ {2} + R ^ {2}) ^ {3 / 2}} \boldsymbol {e} _ {x}, | x | > \delta / 2 \\ \boldsymbol {H} = - \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ 2 + \frac {x - \delta / 2}{\sqrt {(x - \delta / 2) ^ {2} + R ^ {2}}} - \frac {x + \delta / 2}{\sqrt {(x + \delta / 2) ^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {x}, \\ | x | <   \delta / 2 \end{array}\tag{15}
$$

(16) 

式中 $\sigma_{\mathrm{m}} = \mu_0M$ .因 $\pmb{e}_x$ 与 $M$ 同方向，故 $\frac{\sigma_{\mathrm{m}}}{\mu_0}\pmb {e}_x = M.$ 于是由式(16)得 $x = 0$ 处的磁场强度为

$$
\boldsymbol {H} _ {1} = - \frac {\boldsymbol {M}}{2} \left[ 2 - \frac {\delta}{\sqrt {R ^ {2} + (\delta / 2) ^ {2}}} \right] \approx - \boldsymbol {M} + \frac {\delta}{2 R} \boldsymbol {M} \approx - \boldsymbol {M}\tag{17}
$$

由式(15)得

$$
\boldsymbol {H} _ {2} = \boldsymbol {H} _ {3} \approx \frac {\delta}{2 R} \boldsymbol {M}\tag{18}
$$

各点的磁感强度分别为

$$
\boldsymbol {B} _ {1} = \mu_ {0} (\boldsymbol {H} _ {1} + \boldsymbol {M} _ {1}) = \mu_ {0} \left(- \boldsymbol {M} + \frac {\delta}{2 R} \boldsymbol {M} + \boldsymbol {M}\right) = \frac {\mu_ {0} \delta}{2 R} \boldsymbol {M}\tag{19}
$$

$$
\boldsymbol {B} _ {2} = \boldsymbol {B} _ {3} = \mu_ {0} (\boldsymbol {H} _ {2} + \boldsymbol {M} _ {2}) = \mu_ {0} \boldsymbol {H} _ {2} = \frac {\mu_ {0} \delta}{2 R} \boldsymbol {M}\tag{20}
$$

7.6 用5号吕臬古做的圆柱形磁铁，直径为 $10\mathrm{mm}$ ，长为 $100\mathrm{mm}$ ，均匀磁化后磁极化强度为 $1.2\mathrm{Wb / m^2}$ 。试求：(1)它两端的磁极强度 $q_{\mathrm{m}}$ ；(2)它的磁矩 $m$ 和磁偶极矩 $p_{\mathrm{m}}$ ；(3)当它放在磁感强度为 $\pmb{B}$ 的外磁场中， $\pmb{B}$ 与它垂直， $B = 10\mathrm{Gs}$ 时，它所受的力矩；(4)已知该磁铁的矫顽力为 $H_{\mathrm{C}} = 4.4\times 10^{4}\mathrm{A / m}$ ，上述外磁场的 $\pmb{H}$ 的大小与 $H_{\mathrm{C}}$ 之比。

【解】（1）磁极强度(磁荷)为

$$
\begin{array}{r l} q _ {\mathrm{m}} & = S \sigma_ {\mathrm{m}} = S \boldsymbol {n} \cdot \boldsymbol {P} _ {\mathrm{m}} = S P _ {\mathrm{m}} = \pi \left(\frac {1 0 \times 1 0 ^ {- 3}}{2}\right) ^ {2} \times 1. 2 \\ & = 9. 4 \times 1 0 ^ {- 5} (\mathrm{Wb}) \end{array}
$$

(2)磁偶极矩的大小为

$$
\begin{array}{r l} p _ {\mathrm{m}} & = P _ {\mathrm{m}} V = P _ {\mathrm{m}} l S = 1. 2 \times 1 0 0 \times 1 0 ^ {- 3} \times \pi \times \left(\frac {1 0 \times 1 0 ^ {- 3}}{2}\right) ^ {2} \\ & = 9. 4 \times 1 0 ^ {- 6} (\mathrm{Wb} \cdot \mathrm{m}) \end{array}
$$

磁矩为

$$
m = \frac {p _ {\mathrm{m}}}{\mu_ {0}} = \frac {9 . 4 \times 1 0 ^ {- 6}}{4 \pi \times 1 0 ^ {- 7}} = 7. 5 (\Lambda \cdot \mathrm{m} ^ {2})
$$

(3)在外磁场中受的力矩的大小为

$$
\begin{array}{r l} M = | \boldsymbol {m} \times \boldsymbol {B} | & = m B = 7. 5 \times 1 0 \times 1 0 ^ {- 4} \\ & = 7. 5 \times 1 0 ^ {- 3} (\mathrm{N} \cdot \mathrm{m}) \end{array}
$$

(4)磁场强度之比为

$$
\frac {H}{H _ {C}} = \frac {B}{\mu_ {0} H _ {C}} = \frac {1 0 \times 1 0 ^ {- 4}}{4 \pi \times 1 0 ^ {- 7} \times 4 . 4 \times 1 0 ^ {4}} = 1.8
$$

7.7 一磁铁棒长 $5.0\mathrm{cm}$ , 横截面积为 $1.0\mathrm{cm}^2$ , 密度为 $7.9\mathrm{g/cm}^3$ . 设棒内所有铁原子的磁矩都沿棒长方向整齐排列, 每个铁原子的磁矩为 $1.8 \times 10^{-23}\mathrm{A} \cdot \mathrm{m}^2$ . 已知铁的原子量为 55.85, 阿伏伽德罗常量为 $6.022 \times 10^{23}(\mathrm{mol})^{-1}$ . (1) 试求这铁磁棒的磁矩和磁偶极矩; (2) 当这铁磁棒处在 $B = 1.5\mathrm{T}$ 的外磁场中并与 $\pmb{B}$ 垂直时, $\pmb{B}$ 使它转动的力矩有多大?

【解】（1）设磁棒共有 $N$ 个铁原子，每个铁原子的磁矩为 $m_{i}$ ，则磁棒的磁矩为

$$
\begin{array}{r l} m & = N m _ {i} = \frac {\rho V}{5 5 . 8 5} N _ {\mathrm{A}} m _ {i} \\ & = \frac {7 . 9 \times 5 . 0 \times 1 . 0}{5 5 . 8 5} \times 6. 0 2 2 \times 1 0 ^ {2 3} \times 1. 8 \times 1 0 ^ {- 2 3} = 7. 7 (\mathrm{A} \cdot \mathrm{m} ^ {2}) \end{array}
$$

磁棒的磁偶极矩为

$$
p _ {\mathrm{m}} = \mu_ {0} m = 4 \pi \times 1 0 ^ {- 7} \times 7. 7 = 9. 7 \times 1 0 ^ {- 6} (\mathrm{Wb} \cdot \mathrm{m})
$$

(2) $\pmb{B}$ 使磁棒转动的力矩为

$$
M = \mid \boldsymbol {m} \times \boldsymbol {B} \mid = m B = 7. 7 \times 1. 5 = 1 2 (\mathrm{N} \cdot \mathrm{m})
$$

7.8 一均匀磁化的圆柱形磁棒, 直径为 25mm, 长为 75mm, 磁矩为 $12A \cdot m^{2}$ . 试求它表面上磁化面电流密度的大小.

【解】磁化面电流密度的大小为

$$
\begin{array}{r l} k _ {\mathrm{m}} & = \mid - n \times M \mid = M = \frac {m}{V} \\ & = \frac {1 2}{\pi \times \left(\frac {2 5 \times 1 0 ^ {- 3}}{2}\right) ^ {2} \times 7 5 \times 1 0 ^ {- 3}} = 3. 3 \times 1 0 ^ {5} (\mathrm{A/m}) \end{array}
$$

7.9 真空中有一磁棒长为 $l$ ，磁极强度为 $q_{\mathrm{m}}$ ，试证明：它在很远处产生的磁感强度 $\pmb{B}$ 的分量为

$$
B _ {r} = \frac {q _ {\mathrm{m}} l \cos \theta}{2 \pi r ^ {3}}, \quad B _ {\theta} = \frac {q _ {\mathrm{m}} l \sin \theta}{4 \pi r ^ {3}}
$$

式中 $r(\gg l)$ 是棒中心到场点 $P$ 的距离， $\theta$ 是 $r$ 与棒长之间的夹角[图7.9(1)]， $B_r$ 和 $B_\theta$ 分别是 $\pmb{B}$ 在 $\pmb{r}$ 方向上和 $\theta$ 方向上的分量.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/57a40a4060386a46ed01bc5461d23e5db9ecb4e96640603411cac9b14465a37d.jpg)



图7.9(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e517454a688f66f9dd9d6e9a6dca06dd9f1b3e7a5fb8819b460b23c3bdb3a4f2.jpg)



图7.9(2)


【证】根据磁库仑定律，磁极强度 $q_{m}$ 在 r 处产生的磁场强度 H 和磁感强度 B 分别为

$$
\boldsymbol {H} = \frac {q _ {\mathrm{m}}}{4 \pi \mu_ {0}} \frac {\boldsymbol {r}}{r ^ {3}}\tag{1}
$$

$$
\boldsymbol {B} = \mu_ {0} \boldsymbol {H} = \frac {q _ {\mathrm{m}}}{4 \pi} \frac {\boldsymbol {r}}{r ^ {3}}\tag{2}
$$

如图7.9(2)，磁棒在 $P$ 点产生的磁感强度为

$$
\boldsymbol {B} = \frac {q _ {\mathrm{m}}}{4 \pi} \frac {\boldsymbol {r} _ {+}}{r _ {+} ^ {3}} + \frac {- q _ {\mathrm{m}}}{4 \pi} \frac {\boldsymbol {r} _ {-}}{r _ {-} ^ {3}} = \frac {q _ {\mathrm{m}}}{4 \pi} \left(\frac {\boldsymbol {e} _ {+}}{r _ {+} ^ {2}} - \frac {\boldsymbol {e} _ {-}}{r _ {-} ^ {2}}\right)\tag{3}
$$

式中

$$
r _ {+} = \sqrt {r ^ {2} + (l / 2) ^ {2} - r l \cos \theta}\tag{4}
$$

$$
r _ {-} = \sqrt {r ^ {2} + (l / 2) ^ {2} + r l \cos \theta}\tag{5}
$$

$$
e _ {+} = \frac {r _ {+}}{r _ {+}}, \quad e _ {-} = \frac {r _ {-}}{r _ {-}}\tag{6}
$$

因 $r \gg l$ ，故

$$
\frac {1}{r _ {+} ^ {2}} \approx \frac {1}{r ^ {2} - r l \cos \theta} = \frac {1}{r ^ {2}} \frac {1}{1 - l \cos \theta / r} \approx \frac {1}{r ^ {2}} \left(1 + \frac {l}{r} \cos \theta\right)\tag{7}
$$

$$
\frac {1}{r _ {-} ^ {2}} \approx \frac {1}{r ^ {2} + r l \cos \theta} = \frac {1}{r ^ {2}} \frac {1}{1 + l \cos \theta / r} \approx \frac {1}{r ^ {2}} \left(1 - \frac {l}{r} \cos \theta\right)\tag{8}
$$

代入式(3)得

$$
\boldsymbol {B} = \frac {q _ {\mathrm{m}}}{4 \pi r ^ {2}} \left[ \boldsymbol {e} _ {+} - \boldsymbol {e} _ {-} + \frac {l}{r} \cos \theta (\boldsymbol {e} _ {+} + \boldsymbol {e} _ {-}) \right]\tag{9}
$$

由图7.9(2)可见，

$$
\boldsymbol {e} _ {+} = \cos \alpha_ {+} \boldsymbol {e} _ {r} + \sin \alpha_ {+} \boldsymbol {e} _ {\theta}\tag{10}
$$

$$
\boldsymbol {e} _ {\cdot} = \cos \alpha_ {-} \boldsymbol {e} _ {r} - \sin \alpha_ {-} \boldsymbol {e} _ {\theta}\tag{11}
$$

因 $r \gg l$ ，故 $\alpha_{+}$ 和 $\alpha_{-}$ 都很小，于是得

$$
\begin{array}{r l} \boldsymbol {e} _ {+} + \boldsymbol {e} _ {-} & = (\cos \alpha_ {+} + \cos \alpha_ {-}) \boldsymbol {e} _ {r} + (\sin \alpha_ {+} - \sin \alpha_ {-}) \boldsymbol {e} _ {\theta} \\ & \approx 2 \boldsymbol {e} _ {r} \end{array}\tag{12}
$$

$$
\boldsymbol {e} _ {+} - \boldsymbol {e} _ {-} = (\cos \alpha_ {+} - \cos \alpha_ {-}) \boldsymbol {e} _ {r} + (\sin \alpha_ {+} + \sin \alpha_ {-}) \boldsymbol {e} _ {\theta}
$$

$$
\approx 2 \sin \alpha_ {+} e _ {\theta} \approx \frac {l}{r} \sin \theta e _ {\theta}\tag{13}
$$

其中用到了

$$
\frac {l}{2} \sin \theta = r _ {+} \sin \alpha_ {+} = r _ {-} \sin \alpha_ {-}\tag{14}
$$

将式(12)和(13)代入式(9)，便得

$$
\boldsymbol {B} = \frac {q _ {\mathrm{m}} l}{4 \pi r ^ {3}} \left[ 2 \cos \theta \boldsymbol {e} _ {r} + \sin \theta \boldsymbol {e} _ {\theta} \right]\tag{15}
$$

于是得

$$
B _ {r} = \frac {q _ {\mathrm{m}} l \cos \theta}{2 \pi r ^ {3}}, \quad B _ {\theta} = \frac {q _ {\mathrm{m}} l \sin \theta}{4 \pi r ^ {3}}\tag{16}
$$

【讨论】本题也可用前面1.2.6题的方法计算.

7.10 一平面线圈的面积为 S, 载有电流 I, 试证明: 它在很远处产生的磁感强度 B 的分量为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/ec9084903c09a9bfba1f3c30037e64619636ccd107e9e5a258349dbb78768845.jpg)



图7.10


$$
B _ {r} = \frac {\mu_ {0} I S \cos \theta}{2 \pi r ^ {3}}, \quad B _ {\theta} = \frac {\mu_ {0} I S \sin \theta}{4 \pi r ^ {3}}
$$

式中 $r(r \gg \sqrt{S})$ 是线圈中心到场点 $P$ 的距离, $\theta$ 是 $r$ 与线圈平面的法线之间的夹角(图7.10), $B_r$ 和 $B_\theta$ 分别是 $\pmb{B}$ 在 $\pmb{r}$ 方向上和 $\theta$ 方向上的分量.[提示:与前面7.9题对比]

【证】载流线圈的磁偶极矩为

$$
\boldsymbol {p} _ {\mathrm{m}} = \mu_ {0} \boldsymbol {m} = \mu_ {0} I S \boldsymbol {n}\tag{1}
$$

式中 n 是电流 I 的右旋进方向(线圈平面法线方向上)的单位矢量. 因此, 这载流线圈在远处产生的磁场相当于磁极强度为

$$
q _ {\mathrm{m}} = \frac {p _ {\mathrm{n}}}{l} = \frac {\mu_ {0} I S}{l}\tag{2}
$$

的磁棒在远处产生的磁场. 故将式(2)代入前面7.9题的结果式(16), 便得本题的磁感强度为

$$
B _ {r} = \frac {\mu_ {0} I S \cos \theta}{2 \pi r ^ {3}}, \quad B _ {\theta} = \frac {\mu_ {0} I S \sin \theta}{4 \pi r ^ {3}}\tag{3}
$$

【别解】设线圈为圆线圈，用Biot-Savart定律求它产生的磁感强度 $\pmb{B},\pmb{B}$ 的准确表达式是一个椭圆积分，再求 $r\gg a$ （圆的半径）处的近似表达式，即得式(3).具体计算见前面5.1.22题.

7.11 一圆磁片(磁壳)的半径为 R，厚为 l，片的两面均匀分布着磁荷，磁荷量的面密度分别为 $\sigma_{m}$ 和 $-\sigma_{m}$ ，如图 7.11 所示。试求轴线上离圆片中心为 r 处 P 点的磁势 $U_{m}$ 和磁场强度 H。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/fe68dfc93dbc18e7bf796d155a6c8be49a00911b5e94c20706c61073bd1ecde0.jpg)



(1) 立体图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/1c7252f0b4b1d399798d03e57e40a960748d91d887a517441b4fc3c7e0bf3589.jpg)



(2) 侧面图



图7.11


【解】一个均匀圆面磁荷(磁荷量的面密度为 $\sigma_{m}$ ) 在轴线上离圆心为 r 处产生的磁势为

$$
\begin{array}{r l} U _ {\mathrm{m}} & = \int_ {0} ^ {R} \frac {\sigma_ {\mathrm{m}} (2 \pi x d x)}{4 \pi \mu_ {0} \sqrt {r ^ {2} + x ^ {2}}} = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \int_ {0} ^ {R} \frac {x d x}{\sqrt {r ^ {2} + x ^ {2}}} \\ & = \left. \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \sqrt {r ^ {2} + x ^ {2}} \right| _ {x = 0} ^ {x - R} \\ & = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} [ \sqrt {r ^ {2} + R ^ {2}} - r ], \quad r > 0 \end{array}\tag{1}
$$

由式(1)得出,圆磁片两面上的磁荷在 P 点产生的磁势为

$$
\begin{array}{r l} U _ {\mathrm{m}} = & U _ {\mathrm{m} +} + U _ {\mathrm{m} -} = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} [ \sqrt {(r - l / 2) ^ {2} + R ^ {2}} - (r - l / 2) ] \\ & + \frac {- \sigma_ {\mathrm{m}}}{2 \mu_ {0}} [ \sqrt {(r + l / 2) ^ {2} + R ^ {2}} - (r + l / 2) ] \\ & = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} [ \sqrt {(r - l / 2) ^ {2} + R ^ {2}} - \sqrt {(r + l / 2) ^ {2} + R ^ {2}} + l ], \\ & r > l / 2 \end{array}\tag{2}
$$

所求的磁场强度为

$$
\begin{array}{l} \boldsymbol {H} = - \nabla U _ {\mathrm{m}} = - \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \frac {\partial}{\partial r} \left[ \sqrt {(r - l / 2) ^ {2} + R ^ {2}} \right. \\ \left. - \sqrt {(r + l / 2) ^ {2} + R ^ {2}} + l \right] \boldsymbol {e} _ {r} \\ = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ \frac {r + l / 2}{\sqrt {(r + l / 2) ^ {2} + R ^ {2}}} - \frac {r - l / 2}{\sqrt {(r - l / 2) ^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {r}, \\ r > l / 2 \end{array}\tag{3}
$$

式中 $e_{r}$ 代表轴线上从圆片中心指向 P 点的单位矢量.

7.12 一永磁薄圆片, 半径为 $R = 1.0 \mathrm{~cm}$ , 其磁化方向与它的轴线平行. 测得轴线上离片中心为 $r = 10 \mathrm{~cm}$ 处的磁感强度为 $B = 30 \mu \mathrm{T}$ . 试计算这圆磁片边缘的磁化电流 $I_{\mathrm{m}}$ .

【解】将这永磁片看作是半径为 R 的圆电流 $I_{m}$ ，由前面 5.1.20 题的式(2)，它在离圆心为 r 处产生的磁感强度的大小为

$$
B = \frac {\mu_ {0} I _ {\mathrm{m}} R ^ {2}}{2 (r ^ {2} + R ^ {2}) ^ {3 / 2}}
$$

由此得

$$
\begin{array}{r l} I _ {\mathrm{m}} & = \frac {2 B (r ^ {2} + R ^ {2}) ^ {3 / 2}}{\mu_ {0} R ^ {2}} \\ & = \frac {2 \times 3 0 \times 1 0 ^ {- 6} \times [ (1 0 ^ {2} + 1 . 0 ^ {2}) \times 1 0 ^ {- 4 - 3 / 2}}{4 \pi \times 1 0 ^ {- 7} \times (1 . 0 \times 1 0 ^ {- 2}) ^ {2}} = 4. 8 \times 1 0 ^ {2} (\mathrm{A}) \end{array}
$$

7.13 (1) 半径为 $R$ 的圆线圈载有电流 $I$ , 试求它在磁感强度为 $\pmb{B}$ 的均匀外磁场中所受的力矩 $\pmb{M}$ ; (2) 半径为 $R$ 的圆磁片(磁壳), 厚为 $l$ , 两面均匀分布着磁荷, 磁荷量的面密度分别为 $\sigma_{\mathrm{m}}$ 和 $-\sigma_{\mathrm{m}}$ , 试求它在磁感强度为 $\pmb{B}$ 的均匀外磁场中所受的力矩 $\pmb{M}'$ ; (3) 若 $\pmb{M}' = \pmb{M}$ , 则圆磁片就叫做圆电流的等效磁壳. 试求圆电流与它的等效磁壳的关系.

【解】(1)载流圆线圈所受的力矩为

$$
\boldsymbol {M} = \boldsymbol {m} \times \boldsymbol {B} = I S \boldsymbol {n} \times \boldsymbol {B} = \pi R ^ {2} I n \times \boldsymbol {B}\tag{1}
$$

式中 n 为线圈平面法线方向(电流 I 的右旋进方向)上的单位矢量.

(2)圆磁片所受的力矩为

$$
\begin{array}{r l} \boldsymbol {M} ^ {\prime} & = \boldsymbol {p} _ {\mathrm{m}} \times \boldsymbol {H} = \boldsymbol {p} _ {\mathrm{m}} \times \frac {\boldsymbol {B}}{\mu_ {0}} = \pi R ^ {2} \sigma_ {\mathrm{m}} l \boldsymbol {e} _ {\mathrm{m}} \times \frac {\boldsymbol {B}}{\mu_ {0}} \\ & = \frac {\pi R ^ {2} \sigma_ {\mathrm{m}} l}{\mu_ {0}} \boldsymbol {e} _ {\mathrm{m}} \times \boldsymbol {B} \end{array}\tag{2}
$$

式中 $e_{m}$ 是圆磁片轴线上从 $-\sigma_{m}$ 指向 $\sigma_{m}$ 的单位矢量.

(3) 当 $M' = M$ 时，由式(1)、(2) 得圆电流与它的等效磁壳的关系为

$$
\boldsymbol {l n} = \frac {\sigma_ {\mathrm{m}} l}{\mu_ {0}} \boldsymbol {e} _ {\mathrm{m}}\tag{3}
$$

7.14 用磁荷观点处理一些问题,有时有方便之处.根据这种观点,磁荷之间的相互作用力遵守库仑定律,即磁荷量 $dq_{m}$ 在距离 r 处产生的磁场强度和磁势分别为

$$
\mathrm{d} \boldsymbol {H} = \frac {1}{4 \pi \mu_ {0}} \frac {\mathrm{d} q _ {\mathrm{m}}}{r ^ {3}} \boldsymbol {r}, \quad \mathrm{d} U _ {\mathrm{m}} = \frac {1}{4 \pi \mu_ {0}} \frac {\mathrm{d} q _ {\mathrm{m}}}{r}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5ec6be9b0282e7ac757542b0679c2a5c837de143971ca3189534b7cea26b3db6.jpg)



圆电流


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/46771756be22768126c83c8ca3844aa3d8b532c9a1bb7dbf6cd0863a96120265.jpg)



阅磁片



图7.14


一个半径为 $R$ 的圆电流 $I$ , 可以看成是半径相同的一个薄磁片, 片的两面分别均匀地分布着面密度为 $\sigma_{\mathrm{m}}(\mathrm{N}$ 极) 和 $-\sigma_{\mathrm{m}}(\mathrm{S}$ 极) 的磁荷量, 如图 7.14 所示. 当片的厚度 $\delta \to 0$ , 面密度 $\sigma_{\mathrm{m}} \to \infty$ , 而 $\sigma_{\mathrm{m}} \delta =$ 常量时, 这种磁片就叫做该电流的等效磁壳. (1) 试求薄圆磁片轴线上离中心为 $r$ 处的磁场强度 $H$ ; (2) 把所得结果与圆电流在轴线上产生的 $H$ 比较, 两者关系如何? (3) 以圆心为极点、轴线为极轴取极坐标系, 空间任一点 $P$ 的坐标为 $r$ , $\theta$ ( $\theta$ 是圆心到 $P$ 的联线与极轴的夹角), 试求薄圆磁片在 $r \gg R$ 处 $P$ 点产生的磁势 $U_{\mathrm{m}}$ , 然后由磁场强度 $H$ 与 $U_{\mathrm{m}}$ 的关系 $H = -\nabla U_{\mathrm{m}}$ 求 $H$ . 这样求得的 $H$ 也就是相应圆电流产生的磁场强度.

【解】（1）先求一个均匀圆面磁荷产生的磁场.设磁荷均匀分布在半径为 $R$ 的圆面上，磁荷量的面密度为 $\sigma_{\mathrm{m}}$ ，则在轴线上离圆心为 $r$ 处产生的磁场强度为

$$
\begin{array}{r l} \boldsymbol {H} & = \frac {1}{4 \pi \mu_ {0}} \int_ {0} ^ {R} \frac {2 \pi r \sigma_ {\mathrm{m}} \mathrm{d} x}{r ^ {2} + x ^ {2}} \frac {r}{\sqrt {r ^ {2} + x ^ {2}}} \boldsymbol {e} _ {\mathrm{m}} = \frac {\sigma_ {\mathrm{m}} r}{2 \mu_ {0}} \int_ {0} ^ {R} \frac {x (\mathrm{d} x)}{(r ^ {2} + x ^ {2}) ^ {3 / 2}} \boldsymbol {e} _ {\mathrm{m}} \\ & = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ 1 - \frac {r}{\sqrt {r ^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {\mathrm{m}} \end{array}\tag{1}
$$

式中 $e_{m}$ 为轴线上从圆心指向场点的单位矢量.

再考虑薄圆磁片产生的磁场.以薄圆磁片的中心为原点,轴线为极轴,则由式(1).它在轴线上离原点为 r 处产生的磁场强度为

$$
\begin{array}{r l} \boldsymbol {H} & = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ 1 - \frac {r - \delta / 2}{\sqrt {(r - \delta / 2) ^ {2} + R ^ {2}}} \right] e _ {\mathrm{m}} \\ & + \frac {- \sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ 1 - \frac {r + \delta / 2}{\sqrt {(r + \delta / 2) ^ {2} + R ^ {2}}} \right] e _ {\mathrm{m}} \\ & = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ \frac {r + \delta / 2}{\sqrt {(r + \delta / 2) ^ {2} + R ^ {2}}} - \frac {r - \delta / 2}{\sqrt {(r - \delta / 2) ^ {2} + R ^ {2}}} \right] e _ {\mathrm{m}}, r > \delta / 2 \end{array}\tag{2}
$$

(2) 半径为 $R$ 、载有电流 $I$ 的圆线圈在轴线上离中心为 $r$ 处产生的磁场强度为 [参见前面 5.1.20 题的式(2)]

$$
\boldsymbol {H} = \frac {\boldsymbol {B}}{\mu_ {0}} = \frac {I R ^ {2}}{2 (r ^ {2} + R ^ {2}) ^ {3 / 2}} \boldsymbol {e} _ {l}\tag{3}
$$

式中 $e_{1}$ 为电流 I 的右旋进方向.

当 $\delta$ 很小，即 $\delta \ll R$ 时，式(2)方括号内可以简化如下：

$$
\begin{array}{r l} & \frac {r + \delta / 2}{\sqrt {(r + \delta / 2) ^ {2} + R ^ {2}}} - \frac {r - \delta / 2}{\sqrt {(r - \delta / 2) ^ {2} + R ^ {2}}} \approx \frac {1}{\sqrt {r ^ {2} + R ^ {2}}} \times \\ & \left[ (r + \delta / 2) \left(1 - \frac {r \delta / 2}{r ^ {2} + R ^ {2}}\right) - (r - \delta / 2) \left(1 + \frac {r \delta / 2}{r ^ {2} - R ^ {2}}\right) \right] = \frac {R ^ {2} \delta}{(r ^ {2} + R ^ {2}) ^ {3 / 2}} \end{array}\tag{4}
$$

故式(2)化为

$$
\boldsymbol {H} = \frac {\sigma_ {\mathrm{m}} R ^ {2} \delta}{2 \mu_ {0} (r ^ {2} + R ^ {2}) ^ {3 / 2}} \boldsymbol {e} _ {\mathrm{m}}\tag{5}
$$

比较式(3)、(5)得两者关系为

$$
I = \frac {\sigma_ {\mathrm{m}} \delta}{\mu_ {0}}\tag{6}
$$

(3)薄圆磁片的磁偶极矩为

$$
\boldsymbol {p} _ {\mathrm{m}} = \sigma_ {\mathrm{m}} (\pi R ^ {2} \delta) \boldsymbol {e} _ {\mathrm{m}} = \pi \sigma_ {\mathrm{m}} R ^ {2} \delta \boldsymbol {e} _ {\mathrm{m}}\tag{7}
$$

式中 $e_{\mathrm{m}}$ 为圆磁片轴线方向上的单位矢量，方向从 $-\sigma_{\mathrm{m}}$ 指向 $\sigma_{\mathrm{m}}$ . 在 $r \gg R$ 处，它可当作一个磁偶极子，故它产生的磁势为

$$
U _ {\mathrm{m}} = \frac {\boldsymbol {p} _ {\mathrm{m}} \cdot \boldsymbol {r}}{4 \pi \mu_ {0} r ^ {3}} = \frac {p _ {\mathrm{m}}}{4 \pi \mu_ {0}} \frac {\cos \theta}{r ^ {2}} = \frac {\sigma_ {\mathrm{m}} R ^ {2} \delta}{4 \mu_ {0}} \frac {\cos \theta}{r ^ {2}}, \quad r \gg R\tag{8}
$$

由此得它产生的磁场强度为

$$
\begin{array}{l} \boldsymbol {H} = - \nabla U _ {\mathrm{m}} = - \frac {\sigma_ {\mathrm{m}} R ^ {2} \delta}{4 \mu_ {0}} \left[ \frac {\partial}{\partial r} \left(\frac {\cos \theta}{r ^ {2}}\right) \boldsymbol {e} _ {r} + \frac {1}{r} \frac {\partial}{\partial \theta} \left(\frac {\cos \theta}{r ^ {2}}\right) \boldsymbol {e} _ {\theta} \right] \\ = \frac {\sigma_ {\mathrm{m}} R ^ {2} \delta}{4 \mu_ {0} r ^ {3}} [ 2 \cos \theta \boldsymbol {e} _ {r} + \sin \theta \boldsymbol {e} _ {\theta} ], \quad r \gg R \end{array}\tag{9}
$$

将关系式(6)代入上式,便得载流圆线圈产生的磁场强度为

$$
\boldsymbol {H} = \frac {I R ^ {2}}{4 r ^ {3}} [ 2 \cos \theta \boldsymbol {e} _ {r} + \sin \theta \boldsymbol {e} _ {\theta} ], \quad r \gg R\tag{10}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c305060e40f69a4c553af98cdaf58c1ab5199c226f42bb4d536dce59dbd23ddc.jpg)



图7.15(1)


7.15 (1)一个圆柱形磁棒长为 $l$ ，横截面的半径为 $R$ ，它可以看作是两端面上均匀分布着磁荷的圆柱体，N、S两端面上面磁荷密度分别为 $\sigma_{\mathrm{m}}$ 和 $-\sigma_{\mathrm{m}}$ ，如图7.15(1)所示。试分别求轴线上离中心为 $x_{1}$ （棒内）和 $x_{2}$ （棒外）处的磁场强度 $H$ ；(2)一密绕螺线管长为 $l$ ，横截面的半径为 $R$ ，共有 $N$ 匝，每匝电流为 $I$ 。试分别求管内外轴线上的磁场强度 H; (3) 将以上两者的 H 作一比较.

【解】（1）一个均匀圆面电荷 $\sigma_{\mathrm{m}}$ 产生的磁场强度为[参见前面7.14题的式(1)]

$$
\boldsymbol {H} = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ 1 - \frac {r}{\sqrt {r ^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {\mathrm{m}}\tag{1}
$$

式中 r 是圆心到场点的距离, $e_{m}$ 为轴线上从圆心指向场点的单位矢量.

由式(1)得,磁棒在轴线上产生的磁场强度如下:棒内 $(-l/2<x<l/2)$ 

$$
\begin{array}{r l} \boldsymbol {H} & = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ 1 - \frac {l / 2 - x}{\sqrt {(l / 2 - x) ^ {2} + R ^ {2}}} \right] (- \boldsymbol {e} _ {\mathrm{m}}) \\ & + \frac {- \sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ 1 - \frac {x + l / 2}{\sqrt {(x + l / 2) ^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {\mathrm{m}} \\ & = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ \frac {x + l / 2}{\sqrt {(x + l / 2) ^ {2} + R ^ {2}}} - \frac {x - l / 2}{\sqrt {(x - l / 2) ^ {2} + R ^ {2}}} - 2 \right] \boldsymbol {e} _ {\mathrm{m}}. \end{array}\tag{2}
$$

棒外 $(x > l / 2)$ 

$$
\begin{array}{r l} \boldsymbol {H} & = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ 1 - \frac {x - l / 2}{\sqrt {(x - l / 2) ^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {\mathrm{m}} \\ & + \frac {- \sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ 1 - \frac {x + l / 2}{\sqrt {(x + l / 2) ^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {\mathrm{m}} \\ & = \frac {\sigma_ {\mathrm{m}}}{2 \mu_ {0}} \left[ \frac {x + l / 2}{\sqrt {(x + l / 2) ^ {2} + R ^ {2}}} - \frac {x - l / 2}{\sqrt {(x - l / 2) ^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {\mathrm{m}} \end{array}\tag{3}
$$

(2) 半径为 $R$ 的圆电流 $I$ 在轴线上离圆心为 $r$ 处产生的磁场强度为 [参见前面 5.1.20 的式 (2)]

$$
\boldsymbol {H} = \frac {\boldsymbol {B}}{\mu_ {0}} = \frac {I R ^ {2}}{2 (r ^ {2} + R ^ {2}) ^ {3 / 2}} \boldsymbol {e} _ {I}\tag{4}
$$

式中 $e_{1}$ 为电流右旋进方向上的单位矢量.

以螺线管中心 O 为原点, 轴线为 x 轴, 如图 7.15(2) 所示, 则由式(4) 得: 轴线上 x 处的磁场强度为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/4037b5b108320cafb27d2060991c5e3cba727903cb412943781c333ce3559be1.jpg)



图7.15(2)


$$
\begin{array}{r l} \boldsymbol {H} & = \frac {N I R ^ {2} \boldsymbol {e} _ {l}}{2 l} \int_ {- l / 2} ^ {l / 2} \frac {d x ^ {\prime}}{\left[ (x - x ^ {\prime}) ^ {2} + R ^ {2} \right] ^ {3 / 2}} \\ & = \frac {N I R ^ {2} \boldsymbol {e} _ {l}}{2 l} \left[ \frac {x ^ {\prime} - x}{\sqrt {(x - x ^ {\prime}) ^ {2} + R ^ {2}}} \right] _ {x ^ {\prime} - l / 2} ^ {x - l / 2} \\ & = \frac {N I}{2 l} \left[ \frac {x + l / 2}{\sqrt {(x + l / 2) ^ {2} + R ^ {2}}} - \frac {x - l / 2}{\sqrt {(x - l / 2) ^ {2} + R ^ {2}}} \right] \boldsymbol {e} _ {l} \end{array}\tag{5}
$$

(3) 比较式(3)和式(5)可见, 在

$$
\sigma_ {\mathrm{m}} = \frac {\mu_ {0} N I}{l}\tag{6}
$$

的条件下,磁棒和载流螺线管在外部 $(x>l/2)$ 轴线上产生的磁场强度相同.比较式(2)和式(5)

可见，即使在式(6)的条件下，它们在内部 $(-l / 2 < x < l / 2)$ 轴线上产生的磁场强度也是不相同的，相差一个常矢量，即

$$
\pmb {H} _ {\text {管}} - \pmb {H} _ {\text {棒}} - \frac {\sigma_ {\mathrm{m}}}{\mu_ {0}} \pmb {e} _ {\mathrm{m}}\tag{7}
$$

【讨论】磁棒与载流螺线管在外部轴线上产生的磁场强度 H 相同, 故它们在外部轴线上产生的磁感强度 $B = \mu_{0}H$ 也相同.

在内部，对载流螺线管来说，磁化强度

$$
\boldsymbol {M} = 0\tag{8}
$$

故磁感强度为

$$
\pmb {B} _ {\text {管}} = \mu_ {0} (\pmb {H} _ {\text {管}} + \pmb {M}) = \mu_ {0} \pmb {H} _ {\text {管}}\tag{9}
$$

对磁棒来说,磁化强度为

$$
\boldsymbol {M} = \frac {\boldsymbol {P} _ {\mathrm{m}}}{\mu_ {0}} = \frac {\pi R ^ {2} l \sigma_ {\mathrm{m}} \boldsymbol {l} _ {\mathrm{m}}}{\mu_ {0} \pi R ^ {2} l} = \frac {\sigma_ {\mathrm{m}}}{\mu_ {0}} e _ {\mathrm{m}}\tag{10}
$$

故磁感强度为

$$
\pmb {B} _ {\mathrm{棒}} = \mu_ {0} (\pmb {H} _ {\mathrm{棒}} + \pmb {M}) = \mu_ {0} H _ {\mathrm{棒}} + \sigma_ {\mathrm{m}} \pmb {e} _ {\mathrm{m}}\tag{11}
$$

由式(7)、(9)和(11)可见

$$
\pmb {B} _ {\text {棒}} = \pmb {B} _ {\text {管}}\tag{12}
$$

这表明,不论是在内部还是在外部,磁棒与载流螺线管在轴线上产生的磁感强度都相同.

【结论】在真空中,磁棒与载流螺线管在外部轴线上产生的 H 相同,B 也相同;在内部轴线上产生的 B 相同,而 H 则不同,其关系为式(7).

7.16 一螺线管由表面绝缘的细导线在纸筒上密绕而成,导线中通有电流;另有一均匀磁化的磁棒.试定性地画出它们的 H 线和 B 线.

【解】两者的 H 线和 B 线分别如图 7.16(1) 的 (a)、(b) 和图 7.16(2) 的 (a)、(b) 所示.

由图7.16(1)和7.16(2)可见，载流螺线管的 $\pmb{H}$ 线和 $\pmb{B}$ 线相同；磁棒的 $\pmb{H}$ 线和 $\pmb{B}$ 在棒外相

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e3a0b59db1cbbe82c657221a9ff624c62873f4621ddc5afceb23c91596122560.jpg)



(a) H 线


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5c18e2a4d2ded9f1ed0aedc588135c09aa68c019f213cff7d66ecfa26d18663c.jpg)



图 7.16(1) 载流螺线管的(a)H 线和(b)B 线



(b) $\pmb{B}$ 线


同，在棒内则不同.磁棒内 $\pmb{H}$ 线自N极至S极，而 $\pmb{B}$ 线则自S极至N极

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/b4711508fa860264b2988967ab05df54a6f33444f2fd5673776840d9f44e432f.jpg)



(a) H 线


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/380b912a73fea1f4389205c8a4f0ddbb63a8dd547006370e810613e10bfb2491.jpg)



(b) B线



图7.16(2) 磁棒的(a) $\pmb{H}$ 线和(b) $\pmb{B}$ 线


7.17 一半径为 $R$ 的无限长螺线管，由表面绝缘的细导线密绕而成，单位长度的匝数为 $n$ ，管内充满磁导率为 $\mu$ 的均匀磁介质。当导线中载有电流 $I$ 时，设 $I$ 的右旋进方向上的单位矢量为 $e_I$ 。试求：(1)管内介质中的磁场强度 $H$ 、磁感强度 $B$ 和磁化强度 $M$ ；(2)介质表面的磁化面电流密度 $k_m, I$ 和 $k_m$ 产生的磁感强度。

【解】（1）由圆电流在轴线上产生的磁场经过积分得出[参见前面5.1.29题的式(7)，或前面7.15题的式(5)中令 $l\to\infty$ ].或由对称性和安培环路定理得出，轴线上的磁场强度为H=nIe $_{l}$ .可以证明[参见前面5.2.20题],螺线管内的磁场是均匀磁场.于是便得所求的磁场强度和磁感强度分别为

$$
\begin{array}{l} \boldsymbol {H} = n l e _ {1} \\ \boldsymbol {B} = \mu \boldsymbol {H} = \mu n l e _ {1} \end{array}\tag{1}
$$

(2) 

介质的磁化强度为

$$
\begin{array}{r l} \boldsymbol {M} & = \frac {\boldsymbol {B}}{\mu_ {0}} - \boldsymbol {H} = \frac {\mu n I}{\mu_ {0}} e _ {l} - n I e _ {l} \\ & = \frac {\mu - \mu_ {0}}{\mu_ {0}} n I e _ {l} \end{array}\tag{3}
$$

(2)介质表面的磁化面电流密度为

$$
\boldsymbol {k} _ {\mathrm{m}} = - \boldsymbol {n} \times \boldsymbol {M} = \frac {\mu - \mu_ {0}}{\mu_ {0}} n I e _ {l} \times \boldsymbol {n}\tag{4}
$$

式中 n 为介质表面外法线方向上的单位矢量. 可见当磁介质为顺磁质 $(\mu > \mu_{0})$ 时, $k_{m}$ 与导线中的电流 I 同方向.

取长方形安培环路 L，使其长为 l 的一边沿轴线，其对边在管外，设 I 和 $k_{m}$ 产生的磁感强度之和为 $B'$ ，则由对称性和安培环路定理得

$$
\begin{array}{r l} \oint_ {L} \boldsymbol {B} ^ {\prime} \cdot \mathrm{d} \boldsymbol {l} - B ^ {\prime} l & = \mu_ {0} \left[ n l + \frac {\mu_ {1} - \mu_ {0}}{\mu_ {0}} n l \right] l \\ & = \mu n l \end{array}\tag{5}
$$

所以

$$
\boldsymbol {B} ^ {\prime} = \mu n l e _ {1}\tag{6}
$$

可见 $B' = B$ . 这表明, B 就是 l 和 $k_{m}$ 产生的磁感强度之和.

7.18 一无限长圆柱形直铜线, 横截面的半径为 $R$ , 线外包有一层相对磁导率为 $\mu_r$ 的均匀磁介质, 层厚为 $d$ , 导线中通有电流 $I, I$ 均匀分布在横截面上. 试求: (1) 离轴线为 $r$ 处的磁场强度 $\pmb{H}$ 和磁感强度 $\pmb{B}$ 的大小; (2) 磁介质内、外表面上的磁化电流.

【解】（1）以轴线上一点为圆心， $r$ 为半径，在垂直于轴线的平面内作圆形环路 $L$ ，则由对称性和安培环路定理得

$$
\oint_ {L} \pmb {H} \cdot \mathrm{d} \pmb {l} = 2 \pi r H = I _ {0} (L \text {所套住的自由电流})\tag{1}
$$

在铜线内， $r < R$ ，这时

$$
I _ {0} = \pi r ^ {2} \frac {I}{\pi R ^ {2}} = \frac {r ^ {2} I}{R ^ {2}}\tag{2}
$$

于是得

$$
H = \frac {I}{2 \pi R ^ {2}} r\tag{3}
$$

$$
B = \mu_ {0} H - \frac {\mu_ {0} I}{2 \pi R ^ {2}} r\tag{4}
$$

在介质层内， $R < r < R + d$ ，这时

$$
I _ {0} = I\tag{5}
$$

于是得

$$
H = \frac {I}{2 \pi r}\tag{6}
$$

$$
B = \mu_ {\tau} \mu_ {0} H = \frac {\mu_ {\tau} \mu_ {0} I}{2 \pi r}\tag{7}
$$

在介质层外， $r > R + d$ ，这时式(5)仍成立，于是得

$$
H = \frac {I}{2 \pi r}\tag{8}
$$

$$
B = \mu_ {0} H = \frac {\mu_ {0} I}{2 \pi r}\tag{9}
$$

(2)由式(3)、(4)得介质的磁化强度为

$$
\boldsymbol {M} = \frac {\boldsymbol {B}}{\mu_ {0}} - \boldsymbol {H} = (\mu_ {\mathrm{r}} - 1) \frac {I}{2 \pi r} e _ {I}\tag{10}
$$

式中 $e_{l}$ 为电流 I 的右手螺旋方向(即 H 和 B 的方向)上的单位矢量.于是得介质表面的磁化面电流密度如下(e 为电流 I 方向上的单位矢量):

内表面： $k_{mi}=-n_{i}\times M_{i}=-(\mu_{r}-1)\frac{I}{2\pi R}n_{i}\times e_{I}$ 

$$
\begin{array}{r l} & = \frac {(\mu_ {\mathrm{t}} - 1) I}{2 \pi R} e \\ & \text {外表面:} k _ {\mathrm{m0}} = - n _ {0} \times M _ {0} = - (\mu_ {\mathrm{r}} - 1) \frac {I}{2 \pi (R + d)} n _ {0} \times e _ {l} \\ & = - \frac {(\mu_ {\mathrm{r}} - 1) I}{2 \pi (R + d)} e \end{array}\tag{11}
$$

(12) 

若磁介质为顺磁质或铁磁质， $\mu_{\mathrm{r}} - 1 = \chi_{\mathrm{m}} > 0$ ，这时 $M$ 与 $B$ 同方向， $k_{\mathrm{m0}}$ 与电流 $I$ 同方向，而 $k_{\mathrm{m0}}$ 则与电流 $I$ 反方向。若磁介质为抗磁质， $\mu_{\mathrm{r}} - 1 = \chi_{\mathrm{m}} < 0$ ，这时 $M$ 与 $B$ 反方向， $k_{\mathrm{m0}}$ 与电流 $I$ 反方向，而 $k_{\mathrm{m0}}$ 则与电流 $I$ 同方向。

【说明】铜是抗磁质，其磁化率(20℃时) $\chi_{m}=-9.8\times10^{-6},\mu_{r}=1+\chi_{m}\approx1$ ，故式(4)中用 $B=\mu_{0}H$ .

7.19 在空气 $(\mu_{\mathrm{r}} = 1)$ 和软铁 $(\mu_{\mathrm{r}} = 7000)$ 的交界面上，软铁上的磁感强度与交界面法线的夹角为 $85^{\circ}$ ，试求空气中磁感强度与交界面法线的夹角。

【解】 $\pmb{B}$ 的边值关系为

$$
B _ {2 n} = B _ {1 n}\tag{1}
$$

$\pmb{H}$ 的边值关系为

$$
H _ {2 t} - H _ {1 t}\tag{2}
$$

以软铁为介质1,空气为介质2,则由式(2)得

$$
\frac {B _ {2 t}}{\mu_ {0}} = \frac {B _ {1 t}}{\mu}\tag{3}
$$

由式(1)、(3)得

$$
\tan \theta_ {2} = \frac {B _ {2 t}}{B _ {2 n}} = \frac {\mu_ {0}}{\mu} \frac {B _ {1 t}}{B _ {1 n}} - \frac {1}{\mu_ {\mathrm{r}}} \tan \theta_ {1}\tag{4}
$$

故所求的角度为

$$
\begin{array}{r l} \theta_ {2} & = \arctan \left(\frac {1}{\mu_ {\mathrm{r}}} \tan \theta_ {1}\right) = \arctan \left(\frac {1}{7 0 0 0} \tan 8 5 ^ {\circ}\right) \\ & = \arctan \left(\frac {1 1 . 4 3}{7 0 0 0}\right) = 5. 6 ^ {\prime} \end{array}\tag{5}
$$

7.20 磁导率分别为 $\mu_{1}$ 和 $\mu_{2}$ 的两种均匀磁介质各充满一半空间, 它们的交界面是一无限大平面, 一条外皮绝缘的无穷长直导线载有电流 I, 正处在交界面上. 试求 I 所产生的磁感强度.

【解】设 $\mu_{1}$ 和 $\mu_{2}$ 中的磁感强度分别为 $B_{1}$ 和 $B_{2}$ ，磁场强度分别为 $H_{1}$ 和 $H_{2}$ ，则根据对称性可知， $B_{1}$ 和 $B_{2}$ 都与交界面垂直；由于它们的法向分量是连续的，故交界面上两边有

$$
\boldsymbol {B} _ {1} = \boldsymbol {B} _ {2}\tag{1}
$$

设 r 为到导线的垂直距离, 则由安培环路定理得

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = \pi r H _ {1} + \pi r H _ {2} = 1\tag{2}
$$

所以

$$
\pi r \left(\frac {B _ {1}}{\mu_ {1}} + \frac {B _ {2}}{\mu_ {2}}\right) = I\tag{3}
$$

于是由式(1)、(3)得所求的磁感强度为

$$
B = \frac {\mu_ {1} \mu_ {2}}{\mu_ {1} + \mu_ {2}} \frac {I}{\pi r}\tag{4}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/9e1721023b3f57be7c5f0722ef859b9cc6def6997bbb7bc360ef1bfb5181d445.jpg)


7.21 一半径为 R 的磁介质球均匀磁化, 磁化强度为 M, 如图 7.21 所示. (1) 根据分子电流的观点, 试求它的磁化电流和磁矩; (2) 根据磁荷观点, 试求它的磁荷和磁偶极矩.

【解】（1）根据磁化电流与磁化强度的关系，球内的磁化电流密度为


图7.21


$$
\boldsymbol {j} _ {\mathrm{m}} = \nabla \times \boldsymbol {M} = 0\tag{1}
$$

球面上 $\theta$ 处的磁化面电流密度为

$$
\boldsymbol {k} _ {\mathrm{m}} = - \boldsymbol {n} \times \boldsymbol {M} = M \sin \theta \boldsymbol {e} _ {M}\tag{2}
$$

式中 $e_{M}$ 为 M 的右手螺旋方向上的单位矢量.

球的磁矩为

$$
\boldsymbol {m} = V \boldsymbol {M} = \frac {4 \pi}{3} R ^ {3} \boldsymbol {M}\tag{3}
$$

(2)球的磁极化强度为

$$
\boldsymbol {P} _ {\mathrm{m}} = \mu_ {0} \boldsymbol {M}\tag{4}
$$

球内的磁荷密度为

$$
\rho_ {\mathrm{m}} = - \nabla \cdot \boldsymbol {P} _ {\mathrm{m}} = - u _ {0} \nabla \cdot \boldsymbol {M} = 0\tag{5}
$$

球面上 $\theta$ 处磁荷量的面密度为

$$
\sigma_ {\mathrm{m}} = \boldsymbol {n} \cdot \boldsymbol {P} _ {\mathrm{m}} = \mu_ {0} \boldsymbol {n} \cdot \boldsymbol {M} = \mu_ {0} M \cos \theta\tag{6}
$$

球的磁偶极矩为

$$
\boldsymbol {p} _ {\mathrm{m}} = V \boldsymbol {P} _ {\mathrm{m}} = \frac {4 \pi}{3} R ^ {3} \boldsymbol {P} _ {\mathrm{m}} = \frac {4 \pi \mu_ {0}}{3} R ^ {3} \boldsymbol {M}\tag{7}
$$

7.22 一介质球均匀磁化, 磁化强度为 M. 试求沿 M 的直径上离球心为 r 处的磁感强度.

【解】用分子电流观点求解.

根据前面7.21题,球内磁化电流密度为零,球面上有一层磁化面电流

$$
k _ {\mathrm{m}} = M \sin \theta e _ {M}\tag{1}
$$

式中 $e_{M}$ 为 M 的右手螺旋方向上的单位矢量. 球内的磁场便是这层面电流产生的.

过球心 O 取沿 M 方向的直径 AB, P 为这直径上的一点, 到 O 的距离为 r. 如图 7.22, 球面上 $\theta$ 处的环带 $Rd\theta$ 上的磁化电流为

$$
\mathrm{d} I _ {\mathrm{m}} = k _ {\mathrm{m}} R \mathrm{d} \theta = R M \sin \theta \mathrm{d} \theta\tag{2}
$$

式中 R 为球的半径. 根据前面 5.1.20 题的式(2)，这 $dI_{m}$ 在 P 点产生的磁感强度为

$$
\mathrm{d} \boldsymbol {B} _ {P} = \frac {\mu_ {0} (R \sin \theta) ^ {2} \mathrm{d} I _ {\mathrm{m}}}{2 [ (r + R \cos \theta) ^ {2} + (R \sin \theta) ^ {2} ] ^ {3 / 2}} \boldsymbol {e} _ {M}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/99a0dfe901e6300b972944cb814d8ea089f2a661c4ad6efe92b0c1f8bc4c222c.jpg)


(3) 

图7.22

式中 e 为 M 方向上的单位矢量. 将式(2)代入式(3)得

$$
\mathrm{d} \boldsymbol {B} _ {P} = \frac {\mu_ {0} R ^ {3} \boldsymbol {M}}{2} \frac {\sin^ {3} \theta \mathrm{d} \theta}{(r ^ {2} + R ^ {2} + 2 r R \cos) ^ {3 / 2}}\tag{4}
$$

积分便得

$$
\boldsymbol {B} _ {P} = \frac {\mu_ {0} R ^ {3} \boldsymbol {M}}{2} \int_ {0} ^ {\pi} \frac {\sin^ {3} \theta \mathrm{d} \theta}{(r ^ {2} + R ^ {2} + 2 r R \cos \theta) ^ {3 / 2}}\tag{5}
$$

其中积分在 r<R 时为

$$
\begin{array}{l} \int_ {0} ^ {\pi} \frac {\sin^ {3} \theta \mathrm{d} \theta}{(r ^ {2} + R ^ {2} + 2 r R \cos \theta) ^ {3 / 2}} \\ = \frac {1}{4 r ^ {3} R ^ {3}} \left[ - 2 (r ^ {2} + R ^ {2}) \sqrt {r ^ {2} + R ^ {2} + 2 r R \cos \theta} \right. \\ \left. + \frac {1}{3} (r ^ {2} + R ^ {2} + 2 r R \cos \theta) ^ {3 / 2} - \frac {(R ^ {2} - r ^ {2}) ^ {2}}{\sqrt {r ^ {2} + R ^ {2}} - 2 r R \cos \theta} \right] _ {\theta = 0} ^ {\theta - \pi} \\ = \frac {4}{3 R ^ {3}} \end{array}\tag{6}
$$

代入式(5)便得所求的磁感强度为

$$
\boldsymbol {B} _ {P} = \frac {2}{3} \mu_ {0} \boldsymbol {M}\tag{7}
$$

这个结果表明, $B_{p}$ 与r无关.这就告诉我们,AB直径上每一点的磁感强度都相同,都由式(7)表示.

【讨论】一、本题也可用磁荷观点，仿前面1.2.29题的方法求解.

二、根据前面 5.2.21 题的方法, 可以论证球内磁场是均匀磁场.

7.23 中子星是超新星爆发所产生的一种天体, 具有很强的磁场. 假设中子星是由中子密集构成的球体, 它的磁场来自中子的磁矩 $\mu_{n}, \mu_{n}$ 都沿同一方向排列. 已知中子的半径为 $a = 8 \times 10^{-16} ~m$ , 中子磁矩的大小为 $\mu_{n} = 9.66 \times 10^{-27} ~A \cdot m^{2}$ . 试求中子星表面磁场最强处磁感强度的值.

【解】将中子星看作是一个磁化球，由于中子星内的中子是密集的，故磁化是均匀的，其磁化强度为

$$
\boldsymbol {M} = n \boldsymbol {\mu} _ {\mathrm{n}}\tag{1}
$$

式中 n 是单位体积(一立方米)内的中子数, 其值为

$$
n = \frac {1}{\frac {4 \pi}{3} a ^ {3}}\tag{2}
$$

由以上两式得中子星的磁化强度 M 的大小为

$$
M = n \mu_ {\mathrm{n}} = \frac {3 \mu_ {\mathrm{n}}}{4 \pi a ^ {3}} = \frac {3 \times 9 . 6 6 \times 1 0 ^ {- 2 7}}{4 \pi \times (8 \times 1 0 ^ {- 1 6}) ^ {3}} = 5 \times 1 0 ^ {1 8} (\mathrm{A/m})\tag{3}
$$

由于是均匀磁化,故中子星内的磁化电流密度为

$$
\boldsymbol {j} _ {\mathrm{m}} = \nabla \times \boldsymbol {M} = 0\tag{4}
$$

中子星表面的磁化面电流密度为

$$
\boldsymbol {k} _ {\mathrm{m}} = - \boldsymbol {n} \times \boldsymbol {M}\tag{5}
$$

如图 7.23(1) 所示. 中子星表面磁场最强处在 N、S 两极. 下面我们就由 $k_{m}$ 求 N 极的磁感强度 $B_{max}$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/0674bb29135dcd93bdc29eb919a8ae1beb768ca328675fc8fa6e7e842481e3c3.jpg)



图7.23(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/94755c08b8baca9a958048f3627343655427c2260873110d84a63e9bc8613142.jpg)



图7.23(2)


根据前面 5.1.20 题的式(2)，半径为 R 的圆电流 I 在轴线上离圆心为 r 处产生的磁感强度的大小为

$$
B = \frac {\mu_ {0} I R ^ {2}}{2 (r ^ {2} + R ^ {2}) ^ {3 / 2}}\tag{6}
$$

如图 7.23(2)，中子星表面 $\theta$ 处的环带 $Rd\theta$ 上，磁化电流为

$$
\mathrm{d} I _ {\mathrm{m}} = k _ {\mathrm{m}} R \mathrm{d} \theta = M R \sin \theta \mathrm{d} \theta\tag{7}
$$

由式(6)，这电流在图7.23(2)中的 $N$ 点产生的磁感强度的大小为

$$
\mathrm{d} B _ {\max} = \frac {\mu_ {0} (R \sin \theta) ^ {2} M R \sin \theta \mathrm{d} \theta}{2 [ (R - R \cos \theta) ^ {2} + (R \sin \theta) ^ {2} ] ^ {3 / 2}} = \frac {\sqrt {2} \mu_ {0} M}{8} \frac {\sin^ {3} \theta \mathrm{d} \theta}{(1 - \cos \theta) ^ {3 / 2}}\tag{8}
$$

积分便得 N 点的磁感强度为

$$
B _ {\max} = \frac {\sqrt {2} \mu_ {0} M}{8} \int_ {0} ^ {\pi} \frac {\sin^ {3} \theta \mathrm{d} \theta}{(1 - \cos \theta) ^ {3 / 2}}\tag{9}
$$

令 $x = \cos \theta$ ，则上式的积分可积出如下：

$$
\begin{array}{l} \int_ {0} ^ {\pi} \frac {\sin^ {3} \theta \mathrm{d} \theta}{(1 - \cos \theta) ^ {3 / 2}} = - \int_ {1} ^ {- 1} \frac {(1 - x ^ {2}) \mathrm{d} x}{(1 - x) ^ {3 / 2}} = \int_ {- 1} ^ {1} \frac {(1 + x) \mathrm{d} x}{\sqrt {1 - x}} \\ = \left[ - 2 \sqrt {1 - x} - \frac {2}{3} (2 + x) \sqrt {1 - x} \right] _ {x = - 1} ^ {x = 1} + \frac {8 \sqrt {2}}{3} \end{array}\tag{10}
$$

将此值代入式(9)便得

$$
\begin{array}{r l} B _ {\max} & = \frac {2}{3} \mu_ {0} M = \frac {2}{3} \times 4 \pi \times 1 0 ^ {- 7} \times 5 \times 1 0 ^ {1 8} \\ & = 4 \times 1 0 ^ {1 2} (\mathrm{T}) \end{array}\tag{11}
$$

【讨论】根据天文观测,金牛座蟹状星云中心的中子星表面磁感强度为 $10^{8}T$ ,有些中子星的磁感强度达 $10^{9}T$ 甚至更高,但没有发现磁感强度超过 $B_{max}$ 的中子

星.

7.24 一块很大的铁磁介质,相对磁导率为 $\mu_{\mathrm{r}} = 200$ , 内部有磁感强度为 $B = 2.0\mathrm{T}$ 的磁场. 在它里面有两个小空穴, 一个是两面垂直于 $B$ 的薄圆盘形, 另一个是平行于 $B$ 的细长针形. 试分别求这两空穴中心的磁场强度 $H$ .

【解】薄圆盘形空穴：因 $\pmb{B}$ 的法向分量连续，故空穴中心的 $\pmb{B}$ 等于铁磁介质里的 $\pmb{B}$ ，于是空穴中心的磁场强度为

$$
\boldsymbol {H} = \frac {\boldsymbol {B}}{\mu_ {0}}\tag{1}
$$

$\pmb{H}$ 的大小为

$$
H = \frac {B}{\mu_ {0}} = \frac {2 . 0}{4 \pi \times 1 0 ^ {- 7}} = 1. 6 \times 1 0 ^ {6} (\mathrm{A/m})\tag{2}
$$

细长针形空穴:因 H 的切向分量连续,故空穴中心的 H 等于铁磁介质里的 H,于是空穴中心的磁场强度为

$$
\boldsymbol {H} = \frac {\boldsymbol {B}}{\mu} = \frac {\boldsymbol {B}}{\mu_ {\mathrm{T}} / \mu_ {0}}\tag{3}
$$

$\pmb{H}$ 的大小为

$$
H = \frac {B}{\mu_ {\mathrm{r}} \mu_ {0}} = \frac {2 . 0}{2 0 0 \times 4 \pi \times 1 0 ^ {- 7}} = 8. 0 \times 1 0 ^ {3} (\mathrm{A/m})\tag{4}
$$

7.25 有些铁氧体(如锰镁铁氧体和锂锰铁氧体)的磁滞回线接近矩形,称为矩磁材料,它们在电流的磁场中磁化后,当电流变到零时,便处在 H=0 处的 $B_{r}$ 或 $-B_{r}$ 这两个剩磁状态之一,如图 7.25(1) 所示.这个特点符合电子计算机的二进位制,可以让其中一个状态代表 0,另一个状态代表 1,因此,在电子计算机里用作存储元件.一矩形材料做的磁芯存储器为环形,其外直径为 0.8mm,它的矫顽力为 $H_{c}=2Oe$ ;在它的轴线上有一条长直导线,通过导线中的电流 I 以改变它所处的状态.设它处在剩磁状态之一 $(B_{r})$ ,其方向如图 7.25(2) 所示.现在要用导线中的脉冲电流 I 使环内磁场全部翻转到另一剩磁状态 $(-B_{r})$ ,试问 I 的峰值至少要多大?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6af744259a3f1cbbe1a2007e2d01803410b176b41b3c395d616c224cf2dcdfca.jpg)



图7.25(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5b53672696262d1d21b74512f7f2bc73bb856c2aada2c3bc427d19c09d0ef27d.jpg)



图7.25(2)


【解】电流 I 在环形磁芯最外边产生的磁场强度为

$$
H = \frac {I}{2 \pi r} = \frac {I}{2 \pi \times \left(\frac {0 . 8}{2}\right) \times 1 0 ^ {- 3}}\tag{1}
$$

要使环内磁场全部翻转,必须是

$$
H > H _ {\mathrm{c}}\tag{2}
$$

由以上两式得：

$$
I > 2 \pi \times \left(\frac {0 . 8}{2}\right) \times 1 0 ^ {- 3} \times 2 \times \frac {1 0 ^ {3}}{4 \pi} = 0. 4 (\mathrm{A})\tag{3}
$$

即 I 的峰值至少要大于 0.4A.

【说明】奥斯特是高斯单位制里磁场强度的单位. $10e^{-\frac{10^{3}}{4\pi}A/m}$ 

7.26 据测量得出,地球的磁矩为 $m = 8.0 \times 10^{22} \, \text{A} \cdot \text{m}^2$ . (1) 如果在地磁赤道上套一个铜环,在这环里通以电流 I,使它的磁矩等于地球的磁矩,已知地球的半径为 6400 km. 试求 I 的值; (2) 如果这电流的磁矩与地球的磁矩正好方向相反,试问这样能不能完全抵消地球表面的磁场?

【解】（1）电流 $I$ 的值为

$$
I = \frac {m}{S} = \frac {m}{\pi R ^ {2}} = \frac {8 . 0 \times 1 0 ^ {2 2}}{\pi \times (6 4 0 0 \times 1 0 ^ {3}) ^ {2}} = 6. 2 \times 1 0 ^ {8} (\mathrm{A})
$$

(2)不能.

【讨论】在一般电磁学书中,载流平面线圈的磁矩定义为 $m = ISe_{1}$ . 式中 $e_{1}$ 为电流 I 的右旋进方向(线圈平面的法线方向)上的单位矢量. 本题里地球磁矩 m 的值就是根据这个定义来的. 但在有些手册里, 将 $\frac{m}{4\pi}$ 定义为地球的磁矩, 所以它们所给出的地球磁矩的值是 $\frac{m}{4\pi}$ 的值.

7.27 地磁场可以近似地看做是位于地心的一个磁偶极子产生的，在地磁纬度 $45^{\circ}$ 处，地磁的水平分量平均为0.23Oe.已知地球的平均半径为 $6370\mathrm{km}$ ，试求上述磁偶极子的磁矩.

【解】磁矩为 $m = IS$ 的磁偶极子产生的磁场强度为[参见前面5.1.22题的式(20)和(21)，或7.10题的式(3)]

$$
H _ {r} = \frac {m \cos \theta}{2 \pi r ^ {3}}, H _ {\theta} = \frac {m \sin \theta}{4 \pi r ^ {3}}\tag{1}
$$

今已知

$$
\theta = 9 0 ^ {\circ} - \phi = 9 0 ^ {\circ} - 4 5 ^ {\circ} = 4 5 ^ {\circ}\tag{2}
$$

$$
H _ {\theta} = 0. 2 3 \mathrm{Oe} = 0. 2 3 \times \frac {1 0 ^ {3}}{4 \pi} \mathrm{A/m}\tag{3}
$$

故得地球的磁矩为

$$
\begin{array}{r l} m & = \frac {4 \pi r ^ {3} H _ {\theta}}{\sin \theta} = \frac {4 \pi \times (6 3 7 0 \times 1 0 ^ {3}) ^ {3} \times 0 . 2 3 \times 1 0 ^ {3} / 4 \pi}{\sin 4 5 ^ {\circ}} \\ & = 8. 4 \times 1 0 ^ {2 2} (\mathrm{A} \cdot \mathrm{m} ^ {2}) \end{array}\tag{4}
$$

7.28 地球的磁场可以近似地看做是位于地心的一个磁偶极子产生的, 如图 7.28 所示. 试证明: (1) 磁倾角(地磁场的方向与当地水平面之间的夹角) i 与地磁纬度 $\varphi$ 的关系为 $\tan i = 2\tan\varphi$ ; (2) 地磁北极处的地磁竖直分量等于地磁赤道上地磁水平分量的两倍.

【证】（1）磁矩为 $m$ 的磁偶极子在 $P(r,\theta)$ 点产生的磁场强度的分量为[参见前面5.1.22题的式(20)和(21)，或7.10题的式(3)]

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/22d6b550ff145ccac7163c7e4f2e5401e9b12c043e4ccb219172027fc87b30de.jpg)


$$
H _ {r} = \frac {m \cos \theta}{2 \pi r ^ {3}}, H _ {\theta} = \frac {m \sin \theta}{4 \pi r ^ {3}}\tag{1}
$$

图7.28

由图 7.28 可见, $\theta$ 与地磁纬度 $\varphi$ 的关系为

$$
\theta = \frac {\pi}{2} + \varphi\tag{2}
$$

用磁倾角 i 表示, 磁场强度的分量为

$$
H _ {r} = - H \sin i\tag{3}
$$

$$
H _ {\theta} = H \cos i\tag{4}
$$

所以

$$
\tan i = - \frac {H _ {r}}{H _ {\theta}}\tag{5}
$$

将式(1)代入式(5)，并利用式(2)，便得

$$
\tan i = - 2 \frac {\cos \theta}{\sin \theta} = - 2 \frac {\cos \left(\frac {\pi}{2} + \varphi\right)}{\sin \left(\frac {\pi}{2} + \varphi\right)} = 2 \frac {\sin \varphi}{\cos \varphi} = 2 \tan \varphi\tag{6}
$$

(2)在地磁北极处,由式(1)得地磁的竖直分量为

$$
H _ {\pi} = \left| H _ {r} \right| = \left| \frac {m \cos \pi}{2 \pi r ^ {3}} \right| = \frac {m}{2 \pi r ^ {3}}\tag{7}
$$

在地磁赤道上，地磁的水平分量为

$$
H _ {\pi / 2} = \frac {m}{4 \pi r ^ {3}}\tag{8}
$$

由式(7)、(8)得

$$
H _ {\pi} = 2 H _ {\pi / 2}\tag{9}
$$

【讨论】在导出式(9)时,略去地磁北极和地磁赤道两地到地心距离的差别.

7.29 根据经典模型, 氢原子处在基态时, 电子环绕氢核(质子)作匀速圆周运动, 轨道半径为 $5.29 \times 10^{-11} \mathrm{~m}$ , 频率为 $6.58 \times 10^{15} \mathrm{~Hz}$ . 已知电子电荷量的大小为 $1.60 \times 10^{-19} \mathrm{C}$ . 试求电子沿轨道运动的磁矩 $\mu_{\mathrm{B}}$ (这种轨道运动磁矩通常叫做玻尔

磁子)和磁偶极矩 $p_{B}$ .

【解】电子环绕氢核运动所形成的电流为

$$
I = \frac {e}{T} = \nu e\tag{1}
$$

故电子的轨道运动磁矩为

$$
\begin{array}{r l} \mu_ {\mathrm{B}} & = \pi a ^ {2} I = \pi a ^ {2} \nu \\ & = \pi \times (5. 2 9 \times 1 0 ^ {- 1 1}) ^ {2} \times 6. 5 8 \times 1 0 ^ {1 5} \times 1. 6 0 \times 1 0 ^ {- 1 9} \\ & = 9. 2 6 \times 1 0 ^ {- 2 4} (\mathrm{A} \cdot \mathrm{m} ^ {2}) \end{array}\tag{2}
$$

磁偶极矩为

$$
p _ {B} = \mu_ {0} \mu_ {B} = 4 \pi \times 1 0 ^ {- 7} \times 9. 2 6 \times 1 0 ^ {- 2 4} = 1. 1 6 \times 1 0 ^ {- 2 9} (\mathrm{Wb} \cdot \mathrm{m})\tag{3}
$$

7.30 已知质子的电荷量为 $1.60 \times 10^{-19} \mathrm{C}$ , 磁矩为 $1.41 \times 10^{-26} \mathrm{~A} \cdot \mathrm{m}^{2}$ , 质子的体积非常小。(1) 在质子磁矩的中垂面上离质子为 $0.529 \mathring{\mathrm{A}} (1 \mathring{\mathrm{A}} = 10^{-10} \mathrm{~m})$ 处, 质子所产生的电场强度和磁感强度各有多大? (2) 按照经典模型, 氢原子处在基态时, 电子在上述距离处环绕氢核(质子)作匀速圆周运动, 速率为 $2.19 \times 10^{6} \mathrm{~m/s}$ . 试求电子受到的洛伦兹力与库仑力之比.

【解】（1）质子电荷所产生的电场强度为

$$
\begin{array}{r l} E & = \frac {e}{4 \pi \varepsilon_ {0} r ^ {2}} = \frac {1 . 6 0 \times 1 0 ^ {- 1 9}}{4 \pi \times 8 . 8 5 4 \times 1 0 ^ {- 1 2} \times (5 . 2 9 \times 1 0 ^ {- 1 1}) ^ {2}} \\ & = 5. 1 4 \times 1 0 ^ {1 1} (\mathrm{V/m}) \end{array}
$$

质子磁矩产生的磁感强度为

$$
B = \frac {\mu_ {0} m}{4 \pi r ^ {3}} = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 . 4 1 \times 1 0 ^ {- 2 6}}{4 \pi \times (5 . 2 9 \times 1 0 ^ {- 1 1}) ^ {3}} = 9. 5 2 \times 1 0 ^ {- 3} (\mathrm{T})
$$

(2)电子受到的洛伦兹力 $f_{m}$ 与库仑力 $f_{e}$ 之比为

$$
\frac {f _ {\mathrm{m}}}{f _ {e}} = \frac {e v B}{e E} = \frac {2 . 1 9 \times 1 0 ^ {6} \times 9 . 5 2 \times 1 0 ^ {- 3}}{5 . 1 4 \times 1 0 ^ {1 1}} = 4. 0 6 \times 1 0 ^ {- 8}
$$

【讨论】一、空气的电介质强度(击穿场强)为 $E_{m}=3\times10^{6}V/m$ . 由上述结果可见, 基态氢原子中, 质子在电子处产生的电场强度是 $E_{m}$ 的 17 万倍.

二、基态氢原子中，电子所受的洛伦兹力远远小于它所受的库仑力.

7.31 一螺绕环由表面绝缘的导线在铁环上密绕而成,每厘米绕有10匝;当导线中载有2.0A的电流时,测得铁环内部的磁感强度为1.0T.试求:(1)铁环内部的磁场强度H;(2)铁环的磁化强度M和相对磁导率 $\mu_{r}$ .

【解】（1）铁环内部的磁场强度为

$$
H = n I = 1 0 \times 1 0 0 \times 2. 0 = 2. 0 \times 1 0 ^ {3} (\mathrm{A/m})
$$

(2)铁环的磁化强度为

$$
M = \frac {B}{\mu_ {0}} - H = \frac {1 . 0}{4 \pi \times 1 0 ^ {- 7}} - 2. 0 \times 1 0 ^ {3} = 7. 9 \times 1 0 ^ {5} (\mathrm{A/m})
$$

相对磁导率为

$$
\mu_ {\mathrm{r}} = \frac {B}{\mu_ {0} H} = \frac {1 . 0}{4 \pi \times 1 0 ^ {- 7} \times 2 . 0 \times 1 0 ^ {3}} = 4. 0 \times 1 0 ^ {2}
$$

7.32 一铁环中心线的周长为 $30\mathrm{cm}$ , 横截面积为 $1.0\mathrm{cm}^2$ , 在环上紧密地绕有 300 匝表面绝缘的导线; 当导线中通有 $32\mathrm{mA}$ 的电流时, 测得通过环的横截面的磁通量为 $2.0 \times 10^{-6}\mathrm{Wb}$ . 试求: (1) 铁环内部磁感强度的大小 $B$ 和磁场强度的大小 $H$ ; (2) 铁环的磁化强度的大小 $M$ ; (3) 铁环的磁化率 $\chi_{\mathrm{m}}$ 、相对磁导率 $\mu_{\mathrm{r}}$ 和磁导率 $\mu$ .

【解】（1）磁感强度的大小为

$$
B = \Phi / S = 2. 0 \times 1 0 ^ {- 6} / 1. 0 \times 1 0 ^ {- 4} = 2. 0 \times 1 0 ^ {- 2} (\mathrm{T})
$$

磁场强度的大小为

$$
H = \frac {N I}{l} = \frac {3 0 0 \times 3 2 \times 1 0 ^ {- 3}}{3 0 \times 1 0 ^ {- 2}} = 3 2 (\mathrm{A/m})
$$

(2)磁化强度的大小为

$$
M = \frac {B}{\mu_ {0}} - H = \frac {2 . 0 \times 1 0 ^ {- 2}}{4 \pi \times 1 0 ^ {- 7}} - 3 2 = 1. 6 \times 1 0 ^ {4} (\mathrm{A/m})
$$

(3)磁化率、相对磁导率和磁导率分别为

$$
\begin{array}{r l} & \chi_ {\mathrm{m}} = \frac {M}{H} = \frac {1 . 6 \times 1 0 ^ {4}}{3 2} = 5. 0 \times 1 0 ^ {2} \\ & \mu_ {\mathrm{r}} = 1 + \chi_ {\mathrm{m}} = 1 + 5. 0 \times 1 0 ^ {2} = 5. 0 \times 1 0 ^ {2} \\ & \mu = \mu_ {\mathrm{r}} \mu_ {0} = 5. 0 \times 1 0 ^ {2} \times 4 \pi \times 1 0 ^ {- 7} = 6. 3 \times 1 0 ^ {- 4} (\mathrm{H/m}) \end{array}
$$

7.33 一铁心螺绕环由表面绝缘的导线在铁环上密绕而成, 环的中心长度为 $600\mathrm{mm}$ , 横截面积为 $1000\mathrm{mm}^2$ . 现在要在环内部产生 $B = 1.0\mathrm{T}$ 的磁感强度, 由铁的 $B - H$ 曲线得这时铁的 $\mu_{\mathrm{r}} = 795$ , 试求所需的安匝数. 如果在铁环上有一个 $2.0\mathrm{mm}$ 宽的空气隙, 试求所需的安匝数.

【解】因 $B = \mu H = \mu_{\mathrm{r}}\mu_0\frac{NI}{l}$ ，故所需的安匝数为

$$
N I = \frac {l B}{\mu_ {\mathrm{r}} \mu_ {0}} = \frac {6 0 0 \times 1 0 ^ {- 3} \times 1 . 0}{7 9 5 \times 4 \pi \times 1 0 ^ {- 7}} = 6. 0 \times 1 0 ^ {2} (\text {安匝})\tag{1}
$$

设环的中心长度为 l，空气隙的宽度为 $\delta$ ，隙中的磁场强度为 $H_{g}$ ，则由安培环路定理得

$$
\begin{array}{r l} N I & = H (l - \delta) + H _ {g} \delta = \frac {B (l ^ {\prime} - \delta)}{\mu_ {\mathrm{r}} \mu_ {0}} + \frac {B \delta}{\mu_ {0}} \\ & = \frac {B}{\mu_ {0}} \left[ \frac {l - \delta}{\mu_ {\mathrm{r}}} + \delta \right] = \frac {1 . 0}{4 \pi \times 1 0 ^ {- 7}} \times \left[ \frac {(6 0 0 - 2) \times 1 0 ^ {- 3}}{7 9 5} + 2. 0 \times 1 0 ^ {- 3} \right] \\ & = 2. 2 \times 1 0 ^ {3} (\text {安匝}) \end{array}\tag{2}
$$

【讨论】一、本题给出的“横截面积为 $1000mm^{2}$ ”，在计算中并未用到。但它并不是多余的，它表明，铁环横截面的线度为 $\sqrt{1000} \approx 32mm$ ，比中心周长 600mm 小很多，故上面的计算可用；另一方面也表明，这些计算都是近似的。

二、在处理螺绕环内的磁铁有间隙的问题时，关键是用安培环路定理

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = I\tag{3}
$$

这个式子左边的 H 包括导线中的电流产生的磁场强度和磁铁产生的磁场强度, 右边的 I 只是安培环路 L 所套住的自由电流的代数和, 而不包括磁铁上的磁化电流. 在电工学里, 通常将安培环路定理化为与基尔霍夫电路定律

$$
\mathcal {E} = I \sum_ {i} R _ {i}\tag{4}
$$

相似的形式：

$$
\epsilon_ {\mathrm{m}} = \Phi \sum_ {i} R _ {\mathrm{mi}}\tag{5}
$$

称为磁路定理,式中

$$
\mathcal {E} _ {m} = N I\tag{6}
$$

与电动势 $\varepsilon$ 相当, 称为磁动势或磁化力; $\Phi(\text{磁通量})$ 与电流 I 相当; 而

$$
R _ {\mathrm{mi}} = \int \frac {\mathrm{d} l _ {i}}{\mu_ {i} S _ {i}}\tag{7}
$$

则与电阻 $R_{i}$ 相当，称为磁阻，式中 $l_{i}$ 是长度， $S_{i}$ 是横截面积， $\mu_{i}$ 是磁导率（相当于电导率）。于是磁路定理为

$$
N I = \Phi \sum_ {i} \frac {l _ {i}}{\mu_ {i} S _ {i}}\tag{8}
$$

前面的式(2)便是磁路定理的一个具体例子.

7.34 一铁环中心线的半径为 $200\mathrm{mm}$ , 横截面积为 $150\mathrm{mm}^2$ , 在它上面绕有表面绝缘的导线 $N$ 匝, 导线中通有电流 $I$ . 在铁环上有一个空气隙, 宽为 $1.0\mathrm{mm}$ . 现在要在空气隙内产生 $B = 0.50\mathrm{T}$ 的磁感强度, 由铁的 $B - H$ 曲线得出这时铁的 $\mu_{\mathrm{r}} = 250$ , 试求所需的安匝数 $NI$ .

【解】设铁环中心长为 $l$ ，空气隙的宽度为 $\delta$ ，隙中的磁场强度为 $H_{\mathrm{g}}$ ，则由安培环路定理得所需的安匝数为

$$
N I = H (l - \delta) + H _ {g} \delta = \frac {B}{\mu_ {\mathrm{r}} \mu_ {0}} (l - \delta) + \frac {B}{\mu_ {0}} \delta = \frac {B}{\mu_ {0}} \left[ \frac {l - \delta}{\mu_ {\mathrm{r}}} + \delta \right]\tag{1}
$$

其中用到了 B 的法向分量的连续性, 即铁环内和空气隙内磁感强度相等. 代入数值便得

$$
\begin{array}{r l} N I & = \frac {0 . 5 0}{4 \pi \times 1 0 ^ {- 7}} \left[ \frac {(2 \pi \times 2 0 0 - 1 . 0) \times 1 0 ^ {- 3}}{2 5 0} + 1. 0 \times 1 0 ^ {- 3} \right] \\ & = 2. 4 \times 1 0 ^ {3} (\text {安匝}) \end{array}\tag{2}
$$

【别解】用磁路定理求解 由前面7.33题的式(8)得

$$
N I = \Phi \left(\frac {l - \delta}{\mu S} + \frac {\delta}{\mu_ {0} S}\right) = \frac {\Phi}{S} \left(\frac {l - \delta}{\mu_ {\mathrm{r}} \mu_ {0}} + \frac {\delta}{\mu_ {0}}\right) = \frac {B}{\mu_ {0}} \left(\frac {l - \delta}{\mu_ {\mathrm{r}}} + \delta\right)\tag{3}
$$

这就是式(1).

7.35 一铁环中心线的半径为 $R = 20\mathrm{cm}$ , 横截面是边长为 $4.0\mathrm{cm}$ 的正方形.

环上绕有 500 匝表面绝缘的导线, 导线中载有 1.0A 的电流, 这时铁的相对磁导率为 $\mu_{r}=400$ . (1) 试求通过铁环的横截面的磁通量 $\Phi$ ; (2) 如果在这铁环上锯开一个宽为 1.0mm 的空气隙, 试问通过铁环的横截面的磁通量减少了多少?

【解】（1）所求的磁通量为

$$
\begin{array}{r l} \Phi = B S & = \mu_ {\mathrm{r}} \mu_ {0} H S = \mu_ {\mathrm{r}} \mu_ {0} N I S / l \\ & = 4 0 0 \times 4 \pi \times 1 0 ^ {- 7} \times 5 0 0 \times 1. 0 \times (4. 0 \times 1 0 ^ {- 2}) ^ {2} / (2 \pi \times 2 0 \times 1 0 ^ {- 2}) \\ & = 3. 2 \times 1 0 ^ {- 4} (\mathrm{Wb}) \end{array}\tag{1}
$$

(2)由磁路定理[参见前面7.33题的式(8)]

$$
N I = \Phi \left(\frac {l - \delta}{\mu S} + \frac {\delta}{\mu_ {0} S}\right)\tag{2}
$$

得这时的磁通量为

$$
\begin{array}{r l} \Phi^ {\prime} & = \frac {\mu_ {\mathrm{r}} \mu_ {0} N I S}{l + (\mu_ {\mathrm{r}} - 1) \delta} = \frac {4 0 0 \times 4 \pi \times 1 0 ^ {- 7} \times 5 0 0 \times 1 . 0 \times (4 . 0 \times 1 0 ^ {- 2}) ^ {2}}{2 \pi \times 2 0 \times 1 0 ^ {- 2} + (4 0 0 - 1) \times 1 . 0 \times 1 0 ^ {- 3}} \\ & = 2. 4 \times 1 0 ^ {- 4} (\mathrm{Wb}) \end{array}\tag{3}
$$

故磁通量减少的值为

$$
\Phi - \Phi^ {\prime} = 3. 2 \times 1 0 ^ {- 4} - 2. 4 \times 1 0 ^ {- 4} = 8 \times 1 0 ^ {- 5} (\mathrm{Wb})\tag{4}
$$

【讨论】式(2)也可以由安培环路定理直接得出,参见前面7.34题的式(1).

7.36 一铁环中心线的直径为 $D = 40\mathrm{cm}$ ，环上均匀地绕有一层表面绝缘的导线，导线中通有不变的电流。若在这铁环上锯一个宽为 $1.0\mathrm{mm}$ 的空气隙，则通过环的横截面的磁通量为 $3.0 \times 10^{-4}\mathrm{Wb}$ ；若空气隙的宽度为 $2.0\mathrm{mm}$ ，则通过环的横截面的磁通量为 $2.5 \times 10^{-4}\mathrm{Wb}$ 。略去漏磁，试求这铁环的磁导率。

【解】根据磁路定理[参见前面7.33题的式(8)]

$$
N I = \Phi \left[ \frac {l - \delta}{\mu_ {\mathrm{r}} \mu_ {0} S} + \frac {\delta}{\mu_ {0} S} \right]\tag{1}
$$

设空气隙宽为 $\delta_{1}$ 时，磁通量为 $\Phi_{1}$ ；空气隙宽为 $\delta_{2}$ 时，磁通量为 $\Phi_{2}$ ，则有

$$
N I = \Phi_ {1} \left[ \frac {\pi D - \delta_ {1}}{\mu_ {r} \mu_ {0} \delta} + \frac {\delta_ {1}}{\mu_ {0} S} \right] = \Phi_ {2} \left[ \frac {\pi D - \delta_ {2}}{\mu_ {r} \mu_ {0} S} + \frac {\delta_ {2}}{\mu_ {0} S} \right]\tag{2}
$$

式中 S 为铁环的横截面积. 由上式得

$$
\Phi_ {1} [ \pi D + (\mu_ {\mathrm{r}} - 1) \delta_ {1} ] = \Phi_ {2} [ \pi D + (\mu_ {\mathrm{r}} - 1) \delta_ {2} ]\tag{3}
$$

解得

$$
\begin{array}{r l} \mu_ {\mathrm{r}} & = 1 + \frac {\pi D (\Phi_ {1} - \Phi_ {2})}{\Phi_ {2} \delta_ {2} - \Phi_ {1} \delta_ {1}} \\ & = 1 + \frac {\pi \times 4 0 \times 1 0 ^ {- 2} \times (3 . 0 - 2 . 5) \times 1 0 ^ {- 4}}{2 . 5 \times 1 0 ^ {- 4} \times 2 . 0 \times 1 0 ^ {- 3} - 3 . 0 \times 1 0 ^ {- 4} \times 1 . 0 \times 1 0 ^ {- 3}} \\ & = 3. 2 \times 1 0 ^ {2} \end{array}\tag{4}
$$

【讨论】式(2)也可以直接由安培环路定理得出如下：

$$
\begin{array}{r l} \oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} & = (\pi D - \delta) H + H _ {\mathrm{g}} \delta = (\pi D - \delta) \frac {B}{\mu_ {\mathrm{r}} \mu_ {0}} + \frac {B}{\mu_ {0}} \delta \\ & = \Phi \left[ \frac {\pi D - \delta}{\mu_ {\mathrm{r}} \mu_ {0} S} + \frac {\delta}{\mu_ {0} S} \right] = N I \end{array}\tag{5}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/42cbb9619ab372884c992bb8ca41855fb93723bbfb110e74f6b23fad479f7f0c.jpg)



图7.37


7.37 一个利用空气间隙获得较强磁场的装置如图7.37所示，铁心是相对磁导率为 $\mu_{2} = 5000$ 的硅钢，它的中心线的长度为 $l_{1} = 500\mathrm{mm}$ ，空气隙的宽度为 $l_{2} = 20\mathrm{mm}$ 。要在空气隙中得到 $B = 3000\mathrm{Gs}$ 的磁场，试求绕在铁心上的线圈的安匝数 $NI$ 。

【解】由安培环路定理得

$$
N I = H _ {1} l _ {1} + H _ {2} l _ {2} = \frac {B l _ {1}}{\mu_ {\mathrm{r}} \mu_ {0}} + \frac {B l _ {2}}{\mu_ {0}} = \frac {B}{\mu_ {0}} \left(\frac {l _ {1}}{\mu_ {\mathrm{r}}} + l _ {2}\right)\tag{1}
$$

其中用到了 B 的法向分量是连续的，即 $B_{1}=B_{2}=B$ 。代入数据得所求的安匝数为

$$
N I = \frac {3 0 0 0 \times 1 0 ^ {- 4}}{4 \pi \times 1 0 ^ {- 7}} \times \left(\frac {5 0 0 \times 1 0 ^ {- 3}}{5 0 0 0} + 2 0 \times 1 0 ^ {- 3}\right) = 4. 8 \times 1 0 ^ {3} (\text {安匝})\tag{2}
$$

【讨论】式(1)也可由磁路定理[参见前面7.33题的式(8)]直接得出.

7.38 某电钟里有一铁心线圈, 已知铁心的磁路长为 $14.4 \mathrm{~cm}$ , 空气隙宽为 $2.0 \mathrm{~mm}$ , 铁心的横截面积为 $0.60 \mathrm{~cm}^{2}$ , 铁心的相对磁导率为 $\mu_{\mathrm{r}} = 1600$ . (1) 现在要使通过空气隙的磁通量为 $4.8 \times 10^{-6} \mathrm{~Wb}$ , 试求绕在铁心上的线圈的安匝数 $N I$ ; (2) 若线圈两端电压为 $220 \mathrm{~V}$ , 线圈消耗的功率为 $2.0 \mathrm{~W}$ , 试求线圈的匝数.

【解】（1）由磁路定理[参见前面7.33题的式(8)]得所求的安匝数为

$$
\begin{array}{r l} N J & = \frac {\Phi}{\mu_ {0} S} \left(\frac {l _ {1}}{\mu_ {\mathrm{r}}} + l _ {2}\right) \\ & = \frac {4 . 8 \times 1 0 ^ {- 6}}{4 \pi \times 1 0 ^ {- 7} \times 0 . 6 0 \times 1 0 ^ {- 4}} \left(\frac {1 4 . 4 \times 1 0 ^ {- 2}}{1 6 0 0} + 2. 0 \times 1 0 ^ {- 3}\right) \\ & = 1. 3 \times 1 0 ^ {2} (\text {安匝}) \end{array}\tag{1}
$$

(2)线圈的匝数为

$$
N = \frac {N I U}{I U} = \frac {N I U}{P} = \frac {1 . 3 \times 1 0 ^ {2} \times 2 2 0}{2 . 0} = 1. 4 \times 1 0 ^ {4} \text { 匝 }\tag{2}
$$

【讨论】式(1)也可由安培环路定理导出：

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H _ {1} l _ {1} + H _ {2} l _ {2} = \frac {B l _ {1}}{\mu_ {\mathrm{r}} \mu_ {0}} + \frac {B l _ {2}}{\mu_ {0}} = \frac {\Phi}{\mu_ {0} S} \left(\frac {l _ {1}}{\mu_ {\mathrm{r}}} + l _ {2}\right)
$$

其中用到 B 的法向分量连续, 即 $B_{1}=B_{2}=B$ .

7.39 一永磁铁环的平均直径为 $20\mathrm{cm}$ , 环上有一宽为 $2.0\mathrm{mm}$ 的空气间隙, 间隙内的磁感强度为 $40\mathrm{mT}$ . 略去间隙边缘的漏磁, 试估算间隙内和磁铁内磁场强度

的值.

【解】间隙内磁场强度的值为

$$
H _ {0} = \frac {B _ {0}}{\mu_ {0}} = \frac {4 0 \times 1 0 ^ {- 3}}{4 \pi \times 1 0 ^ {- 7}} = 3. 2 \times 1 0 ^ {4} (\mathrm{A/m})
$$

再求磁铁内的磁场强度 $H_{i}$ 沿磁铁环的平均直径取环路 $L$ ，由安培环路定理得

所以

$$
\begin{array}{r l} \oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} & = H _ {i} \cdot \pi d - H _ {0} \delta = 0 \\ H _ {i} & = \frac {H _ {0} \delta}{\pi d} = \frac {3 . 2 \times 1 0 ^ {4} \times 2 . 0 \times 1 0 ^ {- 3}}{\pi \times 2 0 \times 1 0 ^ {- 2}} = 1. 0 \times 1 0 ^ {2} (\mathrm{A/m}) \end{array}
$$

7.40 一磁偶极子的磁偶极矩为 $p_{\mathrm{m}}$ ，处在磁场强度为 $\pmb{H}$ 的非均匀外磁场中， $p_{\mathrm{m}}$ 与 $\pmb{H}$ 平行或逆平行。（1）试证明，它受磁场 $\pmb{H}$ 的作用力 $f$ 的大小为 $f = p_{\mathrm{m}}\left|\frac{\partial H}{\partial l}\right|$ ，式中 $\frac{\partial H}{\partial l}$ 是 $\pmb{H}$ 的大小沿 $p_{\mathrm{m}}$ 方向的微商；(2) $f$ 的方向如何？

【解】（1）设磁偶极子的磁极强度为 $q_{\mathrm{m}}$ ，长为 $\delta$ ，则它受磁场 $\pmb{H}$ 的作用力为

$$
\begin{array}{r l} \boldsymbol {f} & = q _ {\mathrm{m}} \boldsymbol {H} + (- q _ {\mathrm{m}}) \boldsymbol {H} = q _ {\mathrm{m}} (\boldsymbol {H}, - \boldsymbol {H}) \\ & = q _ {\mathrm{m}} \Delta \boldsymbol {H} = q _ {\mathrm{m}} \frac {\partial \boldsymbol {H}}{\partial l} \delta = \pm q _ {\mathrm{m}} \boldsymbol {\delta} \frac {\partial H}{\partial l} \\ & = \pm p _ {\mathrm{m}} \frac {\partial H}{\partial l} \end{array}\tag{1}
$$

式中 $p_{m}=q_{m}\delta$ ，当 $p_{m}$ 与 H 平行时，用正号；当 $p_{m}$ 与 H 逆平行时，用负号。于是得

$$
f = | f | = p _ {\mathrm{m}} \left| \frac {\partial H}{\partial l} \right|\tag{2}
$$

(2) $f$ 的方向由式(1)可见, 若 $\frac{\partial H}{\partial l} > 0$ , 则 $p_{m}$ 与 $H$ 同方向时, $f$ 与 $H$ 同方向; $p_{m}$ 与 $H$ 反方向时, $f$ 与 $H$ 反方向. 若 $\frac{\partial H}{\partial l} < 0$ , 则 $p_{m}$ 与 $H$ 同方向时, $f$ 与 $H$ 反方向; $p_{m}$ 与 $H$ 反方向时, $f$ 与 $H$ 同方向.

7.41 一永磁体的磁偶极子, 其磁矩为 m, 处在磁感强度为 B 的外磁场(静磁场)中. 试证明, 它的磁势能为 $W_{m} = -m \cdot B$ .

【证】设磁偶极子的磁极强度(磁荷量)为 $q_{m}$ ，长为 $\delta$ ，则它的磁矩为

$$
\boldsymbol {m} - \frac {1}{\mu_ {0}} q _ {\mathrm{m}} \delta\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/7a02fbb139c61f60676dc6b016d1adcd22ccbcf1e9c0f46b2060f985a810a5e0.jpg)


式中 $\delta$ 是从 $-q_{m}$ 到 $q_{m}$ 的矢量， $|\delta|=\delta$ ，如图 7.41 所示。

设 m 所在的区域没有自由电流, 则这个区域里的外磁场便是势场, 即存在磁势(磁标势) $U_{m}$ , 使得磁场强度为

图7.41

$$
\boldsymbol {H} = - \nabla U _ {\mathrm{m}}\tag{2}
$$

于是 $m$ 在这个磁场中的势能便为

$$
W _ {\mathrm{m}} = q _ {\mathrm{m}} U _ {\mathrm{m} ^ {+}} + (- q _ {\mathrm{m}}) U _ {\mathrm{m} ^ {-}} = q _ {\mathrm{m}} \left(U _ {\mathrm{m} ^ {+}} - U _ {\mathrm{m} ^ {-}}\right)
$$

$$
\begin{array}{l} = q _ {\mathrm{m}} \Delta U _ {\mathrm{m}} = q _ {\mathrm{m}} \nabla U _ {\mathrm{m}} \cdot \boldsymbol {\delta} = q _ {\mathrm{m}} \boldsymbol {\delta} \cdot \nabla U _ {\mathrm{m}} \\ = \mu_ {0} \boldsymbol {m} \cdot (- \boldsymbol {H}) = - \boldsymbol {m} \cdot (\mu_ {0} \boldsymbol {H}) = - \boldsymbol {m} \cdot \boldsymbol {B} \end{array}\tag{3}
$$

【讨论】一、磁矩 m 在外磁场中的势能 $W_{m} = -m \cdot B$ 并不是磁矩 m 在外磁场中的总能量。如果磁矩 m 是载有电流的小线圈的磁矩，则当 m 的位形发生变化时，要使 m 的大小保持不变，就必须保持它的电流不变，这样外界就必作功。关于这一点，参见：1、J. D. 杰克逊著，朱培豫译，《经典电动力学》，上册，人民教育出版社（1979），204～205 页；2、蔡圣善等编著，《经典电动力学》，复旦大学出版社（1985），194～195 页。

二、磁矩 m 在外磁场中的势能表达式 $W_{m} = -m \cdot B$ ，在原子物理学中研究原子能级的精细结构和超精细结构时，都要用到.

7.42 原子和分子的磁矩一般是玻尔磁子 $\mu_{B}=\frac{e\hbar}{2m}=9.274\times10^{-24}A\cdot m^{2}$ 的数量级. 试问: (1) 一个玻尔磁子在磁感强度为 B=10T 的外磁场中, 当 $\mu_{B}$ 与 B 逆平行时, 它的势能是多少? (2) 这势能与室温下分子热运动的能量 (数量级为 kT) 比较, 哪个大? 大多少倍?

【解答】(1) $\mu_{B}$ 与B逆平行时,它的势能为

$$
\begin{array}{r l} W _ {\mathrm{m}} & = - \boldsymbol {\mu} _ {\mathrm{B}} \cdot \boldsymbol {B} = \mu_ {\mathrm{B}} B = 9. 2 7 4 \times 1 0 ^ {- 2 4} \times 1 0 = 9. 2 7 4 \times 1 0 ^ {- 2 3} (\mathrm{J}) \\ & = 5. 8 \times 1 0 ^ {- 4} (\mathrm{eV}) \end{array}
$$

(2)室温下分子热运动能量的数量级为

$$
\begin{array}{r l} E & = k T = 1. 3 8 \times 1 0 ^ {- 2 3} \times 3 0 0 = 4. 1 4 \times 1 0 ^ {- 2 1} (\mathrm{J}) \\ & = 2. 6 \times 1 0 ^ {- 2} (\mathrm{eV}) \end{array}
$$

可见 $E > W_{\mathrm{m}}$ ，比值为

$$
\frac {E}{W _ {\mathrm{m}}} = \frac {2 . 6 \times 1 0 ^ {- 2}}{5 . 8 \times 1 0 ^ {- 4}} = 4 5
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/78ecce940df7babb65e3842aa1d90d578efb8c95bd36a9eb46efda27824fe62e.jpg)



图7.43


7.43 载有电流 I 的导线是一条平面曲线，在同一平面内有一小磁棒，它两极的磁极强度（磁荷量）分别为 $q_{m}$ 和 $-q_{m}$ ，这导线上任何一段 AB（图 7.43）都将受到磁棒的作用力。试证明：这力对于转轴 NS 的力矩的大小为 $M = \frac{q_{m}I}{4\pi} (\cos \angle ANS + \cos \angle ASN - \cos \angle BNS - \cos \angle BSN)$ 。

【证】以纸面为载流导线和小磁棒所在的平面，如

图7.43(1)所示,小磁棒的 N 极 $(q_{\mathrm{m}})$ 在 $r_{+}$ 处产生的磁感强度为

$$
\boldsymbol {B} _ {+} = \mu_ {0} \boldsymbol {H} _ {+} = \mu_ {0} \frac {q _ {\mathrm{m}}}{4 \pi \mu_ {0}} \frac {\boldsymbol {r} _ {+}}{r _ {+} ^ {3}} = \frac {q _ {\mathrm{m}}}{4 \pi} \frac {\boldsymbol {r} _ {+}}{r _ {+} ^ {3}}\tag{1}
$$

电流元 Idl 受小磁棒 N 极的作用力为

$$
\mathrm{d} \boldsymbol {F} _ {+} = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B} _ {+} = \frac {q _ {\mathrm{m}} l}{4 \pi} \frac {\mathrm{d} \boldsymbol {l} \times \boldsymbol {r} _ {+}}{r ^ {3}}\tag{2}
$$

$\mathrm{d}F_{+}$ 的大小为

$$
\mathrm{d} F _ {+} = \frac {q _ {\mathrm{m}} I}{4 \pi} \frac {\mathrm{d} l}{r _ {+} ^ {2}} \sin \theta_ {+}\tag{3}
$$

$dF_{+}$ 的方向垂直于纸面向外, 如图 7.43(1) 所示.

$dF_{+}$ 对 NS 轴线的力矩为

$$
\mathrm{d} M _ {+} = r _ {+} \sin \alpha_ {+} \mathrm{d} F _ {+} = \frac {q _ {\mathrm{m}} I \sin \alpha_ {+}}{4 \pi} \frac {(\mathrm{d} l) \sin \theta_ {+}}{r _ {+}} (4)
$$

由图7.43(1)可见，

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/74c14c85ec07bb3bc67d8b239c524724fc6dae1e54bfeec0388c233092aa7c07.jpg)


$$
\frac {(\mathrm{d} l) \sin \theta_ {+}}{r _ {+}} = \mathrm{d} a _ {+}
$$


图7.43(1)


(5) 

将式(5)代入式(4)得

$$
\mathrm{d} M _ {+} = \frac {q _ {\mathrm{m}} I}{4 \pi} \sin \alpha_ {+} \mathrm{d} \alpha_ {+}\tag{6}
$$

于是图7.43中从 $A$ 到 $B$ 的一段载流导线受 $q_{\mathrm{m}}$ 作用的力矩为

$$
\begin{array}{r l} M _ {+} & = \frac {q _ {\mathrm{m}} I}{4 \pi} \int_ {A} ^ {B} \sin \alpha_ {+} \mathrm{d} \alpha_ {+} = \frac {q _ {\mathrm{m}} I}{4 \pi} [ - \cos \alpha_ {+} ] _ {A} ^ {B} = \frac {q _ {\mathrm{m}} I}{4 \pi} [ - \cos \alpha_ {+ B} + \cos \alpha_ {+ A} ] \\ & = \frac {q _ {\mathrm{m}} I}{4 \pi} [ \cos \angle A N S - \cos \angle B N S ] \end{array}\tag{7}
$$

电流元 Idl 受小磁棒 S 极的作用力为

$$
\mathrm{d} \boldsymbol {F} _ {-} = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B} _ {-} = I \mathrm{d} \boldsymbol {l} \times \left(\frac {- q _ {\mathrm{m}}}{4 \pi} \frac {\boldsymbol {r} _ {-}}{r _ {-} ^ {3}}\right) = - \frac {q _ {\mathrm{m}} I}{4 \pi} \frac {\mathrm{d} l \times r _ {-}}{r _ {-} ^ {3}}\tag{8}
$$

$\mathrm{d}F_{-}$ 的大小为

$$
\mathrm{d} F _ {-} = \frac {q _ {\mathrm{m}} I}{4 \pi} \frac {(\mathrm{d} l) \sin \theta}{r ^ {2}}.\tag{9}
$$

$dF_{-}$ 的方向垂直于纸面向内. $dF_{-}$ 对NS轴的力矩为

$$
\begin{array}{r l} \mathrm{d} M _ {-} & = - r _ {-} \sin \alpha_ {-} \mathrm{d} F _ {-} = - \frac {q _ {\mathrm{m}} I \sin \alpha_ {-}}{4 \pi} \frac {(\mathrm{d} l) \sin \theta_ {-}}{r _ {-}} \\ & = - \frac {q _ {\mathrm{m}} I}{4 \pi} \sin \alpha_ {-} \mathrm{d} \alpha_ {-} \end{array}\tag{10}
$$

式中负号表示 $dM_{-}$ 与 $dM_{+}$ 的转动方向相反. 积分得

$$
\begin{array}{r l} M _ {-} & = - \frac {q _ {\mathrm{m}} I}{4 \pi} \int_ {A} ^ {B} \sin \alpha_ {-} \mathrm{d} \alpha_ {-} = \frac {q _ {\mathrm{m}} I}{4 \pi} [ \cos \alpha_ {-} ] _ {A} ^ {B} = \frac {q _ {\mathrm{m}} I}{4 \pi} [ \cos \alpha_ {- B} - \cos \alpha_ {- A} ] \\ & = \frac {q _ {\mathrm{m}} I}{4 \pi} [ \cos (\pi - \angle B S N) - \cos (\pi - \angle A S N) ] \\ & = \frac {q _ {\mathrm{m}} I}{4 \pi} [ \cos \angle A S N - \cos \angle B S N ] \end{array}\tag{11}
$$

由式(7)和(11)得出，AB段所受的力矩为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/1f122dfa6c77eb2a3fbbbfc1067d72e3a7f373f38cbc52102dfbfc270e441699.jpg)



图7.44


$$
\begin{array}{r l} M & = M _ {1} + M \\ & = \frac {q _ {\mathrm{m}} I}{4 \pi} [ \cos \angle A N S + \cos \angle A S N \\ & - \cos / B N S - \cos \angle B S N ] \end{array}\tag{12}
$$

7.44 在原点有一磁矩为 $m$ 的磁偶极子， $m = mk, m > 0, m$ 在 $r$ 处产生的磁感强度为

$$
\boldsymbol {B} = \frac {\mu_ {0}}{4 \pi r ^ {3}} \left[ \frac {3 (\boldsymbol {m} \cdot \boldsymbol {r}) \boldsymbol {r}}{r ^ {2}} - \boldsymbol {m} \right]
$$

另一圆电流 I, 半径为 a, 中心在 $(0,0,b)$ 处, 其轴线与 z 轴重合, 如图 7.44 所示. 试求它们之间的相互作用力.

【解】磁偶极子作用在电流元 Idl 上的力为

$$
\begin{array}{r l} \mathrm{d} \boldsymbol {F} & = I \mathrm{d} \boldsymbol {l} \times \boldsymbol {B} = I \mathrm{d} \boldsymbol {l} \times \frac {\mu_ {0}}{4 \pi r ^ {3}} \left[ \frac {3 (\boldsymbol {m} \cdot \boldsymbol {r}) \boldsymbol {r}}{r ^ {2}} - \boldsymbol {m} \right] \\ & = \frac {\mu_ {0} I}{4 \pi} \left[ \frac {3 (\boldsymbol {m} \cdot \boldsymbol {r}) \mathrm{d} \boldsymbol {l} \times \boldsymbol {r}}{r ^ {5}} - \frac {\mathrm{d} \boldsymbol {l} \times \boldsymbol {m}}{r ^ {2}} \right] \end{array}\tag{1}
$$

积分便得

$$
\boldsymbol {F} = \frac {\mu_ {0} I}{4 \pi} \oint \frac {3 (\boldsymbol {m} \cdot \boldsymbol {r}) \mathrm{d} \boldsymbol {l} \times \boldsymbol {r}}{r ^ {5}} - \frac {\mu_ {0} I}{4 \pi} \oint \frac {\mathrm{d} \boldsymbol {l} \times \boldsymbol {m}}{r ^ {2}}\tag{2}
$$

其中

$$
\oint \frac {\mathrm{d} l \times m}{r ^ {2}} = (\oint \mathrm{d} l) \times \frac {m}{a ^ {2} + b ^ {2}} = 0\tag{3}
$$

$$
\boldsymbol {m} \cdot \boldsymbol {r} = m r \cos \theta\tag{4}
$$

$$
r = \sqrt {a ^ {2} + b ^ {2}}\tag{5}
$$

$dl \times r$ 的大小为 $(dl)r\sin 90^{\circ} = rdl$ ，其方向垂直于 $r$ ，如图7.44(1)所示。在沿圆线圈积分一圈时，$dl \times r$ 垂直于轴线的分量由于对称性, 积分结果为零. 故积分后便只剩下逆平行于轴线的分量, 于是得

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/2c62833ae3169204b94347c152bd38d29d5a7913a9649370dad2f8f7c56e1d10.jpg)



(a)



图7.44(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/43e76ffa51c1ad8df6fbdf8e195ccfc002430db4e01cb8c7bcab14cca49ba28f.jpg)



(b)


$$
\begin{array}{l} \boldsymbol {F} = \frac {3 \mu_ {0} I}{4 \pi} \oint \frac {m r \cos \theta}{r ^ {5}} r (\mathrm{d} l) \sin \theta (- \boldsymbol {k}) = \frac {3 \mu_ {0} I m \sin \theta \cos \theta}{4 \pi r ^ {3}} (\oint \mathrm{d} l) (- \boldsymbol {k}) \\ = - \frac {3 \mu_ {0} I m a}{2 r ^ {3}} \sin \theta \cos \theta \boldsymbol {k} = - \frac {3 \mu_ {0} I m a ^ {2} b}{2 (a ^ {2} + b ^ {2}) ^ {5 / 2}} \boldsymbol {k} \end{array}\tag{6}
$$

式中 k 是 z 轴方向的单位矢量；负号表示，磁偶极子作用在载流线圈上的力是吸引力。

7.45 两磁偶极子在同一条直线 r. 试证明, 它们之间相互作用力的大小为 $f = 3p_{1}p_{2}/2\pi\mu_{0}r^{4}$ ; 在什么情况下它们互相吸引?

$$
p _ {1}
$$

$$
p _ {2}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a2c8c568d3d02795f75c59d92a8c3062619f378e223eb3d74f2e6305978502e6.jpg)


【解】如图7.45, $p_1$ 在 $p_2$ 处产生的磁场强度 $\pmb{H}_1$ 由前面7.44题为

图7.45

$$
\boldsymbol {H} _ {1} = \frac {\boldsymbol {B} _ {1}}{\mu_ {0}} = \frac {1}{4 \pi \mu_ {0} r ^ {3}} \left[ \frac {3 (\boldsymbol {p} _ {1} \cdot \boldsymbol {r}) \boldsymbol {r}}{r ^ {2}} - \boldsymbol {p} _ {1} \right] = \frac {2 \boldsymbol {p} _ {1}}{4 \pi \mu_ {0} r ^ {3}}\tag{1}
$$

根据前面7.40题的式(1)， $p_{2}$ 处在非均匀的外磁场 $H_{1}$ 中，它所受的力为

$$
f = \pm p _ {2} \frac {\partial H _ {1}}{\partial r}\tag{2}
$$

当 $p_2$ 与 $p_1$ 方向相同时(如图7.45)用正号；当 $p_2$ 与 $p_1$ 方向相反时用负号.由式(1)得

$$
\frac {\partial H _ {1}}{\partial r} = - \frac {3 p _ {1}}{2 \pi \mu_ {0} r ^ {4}}\tag{3}
$$

代入式(2)得

$$
f = + \frac {3 p _ {1} p _ {2}}{2 \pi \mu_ {0} r ^ {4}}\tag{4}
$$

当 $p_{2}$ 与 $p_{1}$ 方向相同时，用负号，这时它们互相吸引；当 $p_{2}$ 与 $p_{1}$ 方向相反时，用正号，这时它们互相排斥.

【别解】参见前面1.2.39题的解法.

7.46 两磁偶极子的磁矩分别为 $m_{1}$ 和 $m_{2}, r$ 是从 $m_{1}$ 到 $m_{2}$ 的矢径. 试证明: $m_{1}$ 作用在 $m_{2}$ 上的力为

$$
f = \frac {3 \mu_ {0}}{4 \pi r ^ {5}} \left[ (m _ {1} \cdot r) m _ {2} + (m _ {2} \cdot r) m _ {1} + (m _ {1} + m _ {2}) r - \frac {5 (m _ {1} \cdot r) (m _ {2} \cdot r)}{r ^ {2}} r \right]
$$

【证】设 $m_{2} = \frac{q_{\mathrm{m}}}{\mu_0} l$ ， $q_{\mathrm{m}}$ 是它的磁极强度(磁荷量). $m_{1}$ 在 $m_{2}$ 中心产生的磁场强度为 $\pmb{H}_{1}$ 则 $m_{1}$ 在 $m_{2}$ 的正负磁荷处产生的磁场强度分别为

$$
\boldsymbol {H} _ {1} = \boldsymbol {H} _ {1} + \left(\frac {1}{2} \boldsymbol {l} \cdot \nabla\right) \boldsymbol {H} _ {1}\tag{1}
$$

$$
\boldsymbol {H} = \boldsymbol {H} _ {1} + \left(- \frac {1}{2} \boldsymbol {l} \cdot \nabla\right) \boldsymbol {H} _ {1}\tag{2}
$$

故 $m_{2}$ 所受的力为

$$
\begin{array}{r l} \boldsymbol {f} & = q _ {\mathrm{m}} \boldsymbol {H} _ {+} + (- q _ {\mathrm{m}}) \boldsymbol {H} _ {-} = q _ {\mathrm{m}} (\boldsymbol {l} \cdot \nabla) \boldsymbol {H} _ {1} = (\boldsymbol {p} _ {2} \cdot \nabla) \boldsymbol {H} _ {1} \\ & = \mu_ {0} (m _ {2} \cdot \nabla) \boldsymbol {H} _ {1} \end{array}\tag{3}
$$

根据前面 7.44 题, 或前面 1.2.8 题, $m_{1}$ 产生的磁场强度为

$$
\boldsymbol {H} _ {1} = \frac {\boldsymbol {B}}{\mu_ {0}} = \frac {1}{4 \pi} \left[ \frac {3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) \boldsymbol {r}}{r ^ {5}} - \frac {\boldsymbol {m} _ {1}}{r ^ {3}} \right]\tag{4}
$$

将 $\pmb{H}_{1}$ 代入式(3)得

$$
\begin{array}{r l} \boldsymbol {f} & = \frac {\mu_ {0}}{4 \pi} (\boldsymbol {m} _ {2} \cdot \nabla) \left[ \frac {3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) \boldsymbol {r}}{r ^ {5}} - \frac {\boldsymbol {m} _ {1}}{r ^ {3}} \right] \\ & = \frac {\mu_ {0}}{4 \pi} \left(m _ {2 x} \frac {\partial}{\partial x} + m _ {2 y} \frac {\partial}{\partial y} + m _ {2 z} \frac {\partial}{\partial z}\right) \left[ \frac {3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) \boldsymbol {r}}{r ^ {5}} - \frac {\boldsymbol {m} _ {1}}{r ^ {3}} \right] \end{array}\tag{5}
$$

其中

$$
\begin{array}{r l} & m _ {2, r} \frac {\partial}{\partial x} \left[ \frac {3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) \boldsymbol {r}}{r ^ {5}} - \frac {\boldsymbol {m} _ {1}}{r ^ {3}} \right] \\ & = \frac {3 m _ {1 , x} m _ {2 , x} \boldsymbol {r} + 3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) m _ {2 , x} \boldsymbol {i}}{r ^ {5}} - \frac {1 5 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) \boldsymbol {r}}{r ^ {6}} \frac {m _ {2 , x} x}{r} + \frac {3 m _ {1} m _ {2 , x} x}{r ^ {5}} \\ & = \frac {3 m _ {1 , x} m _ {2 , x} \boldsymbol {r} + 3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) m _ {2 , x} \boldsymbol {i} + 3 m _ {2 , x} x \boldsymbol {m} _ {1}}{r ^ {5}} - \frac {1 5 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) m _ {2 , x} x \boldsymbol {r}}{r ^ {7}} \end{array}\tag{6}
$$

$$
\begin{array}{r l} & m _ {2 y} \frac {\partial}{\partial y} \left[ \frac {3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) \boldsymbol {r}}{r ^ {5}} - \frac {\boldsymbol {m} _ {1}}{r ^ {3}} \right] \\ & = \frac {3 m _ {1 y} m _ {2 y} \boldsymbol {r} + 3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) m _ {2 y} \boldsymbol {j} + 3 m _ {2 y} y \boldsymbol {m} _ {1}}{r ^ {5}} - \frac {1 5 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) m _ {2 y} y \boldsymbol {r}}{r ^ {7}} \end{array}\tag{7}
$$

$$
\begin{array}{r l} & m _ {2 z} \frac {\partial}{\partial z} \left[ \frac {3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) \boldsymbol {r}}{r ^ {5}} - \frac {\boldsymbol {m} _ {1}}{r ^ {3}} \right] \\ & = \frac {3 m _ {1 z} m _ {2 z} \boldsymbol {r} + 3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) m _ {2 z} \boldsymbol {k} + 3 m _ {2 z} z \boldsymbol {m} _ {1}}{r ^ {5}} - \frac {1 5 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) m _ {2 z} z \boldsymbol {r}}{r ^ {7}} \end{array}\tag{8}
$$

将式(6)、(7)、(8)代入式(5)便得

$$
\begin{array}{r l} f & = \frac {3 \mu_ {0}}{4 \pi} \left[ \frac {(m _ {1} \cdot r) m _ {2} + (m _ {2} \cdot r) m _ {1} + (m _ {1} \cdot m _ {2}) r}{r ^ {5}} - \frac {5 (m _ {1} \cdot r) (m _ {2} \cdot r) r}{r ^ {7}} \right] \\ & = \frac {3 \mu_ {0}}{4 \pi r ^ {5}} \left[ (m _ {1} \cdot r) m _ {2} + (m _ {2} \cdot r) m _ {1} + (m _ {1} \cdot m _ {2}) r - \frac {5 (m _ {1} \cdot r) (m _ {2} \cdot r) r}{r ^ {2}} \right] \end{array}\tag{9}
$$

【别证】因矢量 $m_{1}$ 和 $m_{2}$ 都是常矢量, 故利用矢量分析公式

$$
\boldsymbol {\nabla} (\boldsymbol {f} \cdot \boldsymbol {g}) = \boldsymbol {f} \times (\boldsymbol {\nabla} \times \boldsymbol {g}) + \boldsymbol {g} \times (\boldsymbol {\nabla} \times \boldsymbol {f}) + (\boldsymbol {f} \cdot \boldsymbol {\nabla}) \boldsymbol {g} + (\boldsymbol {g} \cdot \boldsymbol {\nabla}) \boldsymbol {f}\tag{10}
$$

便有

$$
\begin{array}{r l} \nabla (\boldsymbol {m} _ {2} \cdot \boldsymbol {H} _ {1}) & = \boldsymbol {m} _ {2} \times (\nabla \times \boldsymbol {H} _ {1}) + \boldsymbol {H} _ {1} \times (\nabla \times \boldsymbol {m} _ {2}) \\ & + (\boldsymbol {m} _ {2} \cdot \nabla) \boldsymbol {H} _ {1} + (\boldsymbol {H} _ {1} \cdot \nabla) \boldsymbol {m} _ {2} \\ & = (\boldsymbol {m} _ {2} \cdot \nabla) \boldsymbol {H} _ {1} \end{array}\tag{11}
$$

其中利用了

$$
\boldsymbol {\nabla} \times \boldsymbol {H} _ {1} = \frac {1}{4 \pi} \boldsymbol {\nabla} \times \left[ \frac {3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) \boldsymbol {r}}{r ^ {5}} - \frac {\boldsymbol {m} _ {1}}{r ^ {3}} \right] = 0\tag{12}
$$

将式(4)代入式(3)并利用式(11)，便得

$$
\begin{array}{l} f = \frac {\mu_ {0}}{4 \pi} \nabla \left[ \frac {3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) (\boldsymbol {m} _ {2} \cdot \boldsymbol {r})}{r ^ {5}} - \frac {\boldsymbol {m} _ {1} \cdot \boldsymbol {m} _ {2}}{r ^ {3}} \right] \\ = \frac {\mu_ {0}}{4 \pi} \left[ \frac {3 (\boldsymbol {m} _ {2} \cdot \boldsymbol {r}) \nabla (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) + 3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) \nabla (\boldsymbol {m} _ {2} \cdot \boldsymbol {r})}{r ^ {5}} - \frac {1 5 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) (\boldsymbol {m} _ {2} \cdot \boldsymbol {r}) r}{r ^ {7}} + \frac {3 (\boldsymbol {m} _ {1} \cdot \boldsymbol {m} _ {2}) r}{r ^ {5}} \right] \\ = \frac {3 \mu_ {0}}{4 \pi r ^ {5}} \left[ (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) \boldsymbol {m} _ {2} + (\boldsymbol {m} _ {2} \cdot \boldsymbol {r}) \boldsymbol {m} _ {1} + (\boldsymbol {m} _ {1} \cdot \boldsymbol {m} _ {2}) r - \frac {5 (\boldsymbol {m} _ {1} \cdot \boldsymbol {r}) (\boldsymbol {m} _ {2} \cdot \boldsymbol {r}) r}{r ^ {2}} \right] \end{array}\tag{13}
$$

其中利用了关系式

$$
\nabla \left(\boldsymbol {m} _ {1} \cdot \boldsymbol {r}\right) = \boldsymbol {m} _ {1}, \quad \nabla \left(\boldsymbol {m} _ {2} \cdot \boldsymbol {r}\right) = m _ {2}\tag{14}
$$

$$
\nabla r = \frac {r}{r}\tag{15}
$$

7.47 磁偶极矩分别为 $p_1$ 和 $p_2$ 的两个小磁针固定在一起，中心重合， $p_1$ 与 $p_2$ 的夹角为 $\theta = \theta_1 + \theta_2$ ，用细线拴住它们的重心，悬挂着使它们处在水平面内并可以自由转动。加上一个水平的均匀外磁场 $\pmb{B}$ ，当它们达到静止时， $p_1$ 和 $p_2$ 与 $\pmb{B}$ 的夹角分别为 $\theta_1$ 和 $\theta_2$ ，如图7.47(1)所示（图面是水平面）。试证明： $\frac{\sin\theta_1}{p_2} = \frac{\sin\theta_2}{p_1} = \frac{\sin\theta}{\sqrt{p_1^2 + p_2^2 + 2p_1p_2\cos\theta}}$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/503fa18739cb045bb1a6fc5877bd2a91175ae65101c0c9c128ca1f4e2215e11e.jpg)



图7.47(1)


【证】平衡时,作用在这个系统上的外力矩为零,即

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e1016445f0adff40c69a7a1bd7dac039f98aacb281e7892fcc080e9594543eb3.jpg)


$$
\boldsymbol {p} _ {1} \times \boldsymbol {B} - \boldsymbol {p} _ {2} \times \boldsymbol {B} = 0\tag{1}
$$

因为

$$
\boldsymbol {p} _ {1} \times \boldsymbol {B} \mid = p _ {1} B \sin \theta_ {1}
$$

由以上三式得

(2) 

$$
\mid \boldsymbol {p} _ {2} \times \boldsymbol {B} \mid = p _ {2} B \sin \theta_ {2}\tag{3}
$$

$$
\frac {\sin \theta_ {1}}{p _ {2}} = \frac {\sin \theta_ {2}}{p _ {1}}\tag{4}
$$

图 7.47(2)

由图 7.47(2) 可见，

$$
p _ {1} \cos \theta_ {1} + p _ {2} \cos \theta_ {2} = \sqrt {p _ {1} ^ {2} + p _ {2} ^ {2} - 2 p _ {1} p _ {2} \cos (\pi - \theta_ {1} - \theta_ {2})}
$$

$$
= \sqrt {p _ {1} ^ {2} + p _ {2} ^ {2} + 2 p _ {1} p _ {2} \cos \theta}\tag{5}
$$

$$
\frac {\sin \theta_ {1}}{p _ {2}} = \frac {\sin (\pi - \theta_ {1} - \theta_ {2})}{p _ {1} \cos \theta_ {1} + p _ {2} \cos \theta_ {2}} = \frac {\sin \theta}{\sqrt {p _ {1} ^ {2} + p _ {2} ^ {2} + 2 p _ {1} p _ {2} \cos \theta}}\tag{6}
$$

由式(4)、(6)得

$$
\frac {\sin \theta_ {1}}{p _ {2}} = \frac {\sin \theta_ {2}}{p _ {1}} = \frac {\sin \theta}{\sqrt {p _ {1} ^ {2} + p _ {2} ^ {2} + 2 p _ {1} p _ {2} \cos \theta}}\tag{7}
$$

7.48 试论证: 在非铁磁质里的任一点, 磁感强度 B 的值(以高斯为单位)等于磁场强度 H 的值(以 Oe 为单位).

【论证】在国际单位制(SI)里,磁感强度 B 与磁场强度 H 的关系为

$$
B = \mu_ {\mathrm{r}} \mu_ {0} H\tag{1}
$$

其中 B 的单位为特斯拉(T), H 的单位为安/米(A/m), $\mu_{0}=4\pi\times10^{-7}H/m,\mu_{r}=1+\chi_{m}$ 是无量纲的纯数.

高斯(Gs)和奥斯特(Oe)分别是高斯单位制里磁感强度的单位和磁场强度的单位,它们与国际单位制的换算关系为

$$
\mathrm{IT} = 1 0 ^ {4} \mathrm{Gs}\tag{2}
$$

$$
1 \mathrm{A} / \mathrm{m} = \frac {4 \pi}{1 0 ^ {3}} \mathrm{Oe}\tag{3}
$$

当某点的磁感强度为 a 高斯时, 即

$$
B = a (\mathrm{Gs}) = a \times 1 0 ^ {- 4} (\mathrm{T})\tag{4}
$$

按式(1)，该点的磁场强度即为

$$
\begin{array}{r l} H = \frac {B}{\mu_ {\mathrm{r}} \mu_ {0}} & = \frac {a \times 1 0 ^ {- 4}}{4 \pi \times 1 0 ^ {- 7} \mu_ {\mathrm{r}}} = \frac {1 0 ^ {3}}{4 \pi} \frac {a}{\mu_ {\mathrm{r}}} (\mathrm{A/m}) \\ & = \frac {a}{\mu_ {\mathrm{r}}} \frac {1 0 ^ {3}}{4 \pi} \cdot \frac {4 \pi}{1 0 ^ {3}} (\mathrm{Oe}) = \frac {a}{\mu_ {\mathrm{r}}} (\mathrm{Oe}) \end{array}\tag{5}
$$

对于非铁磁介质来说， $\chi_{\mathrm{m}}$ 最大不过万分之三 $(3\times 10^{-4})$ 。因此，在万分之几的精确度范围内，有

$$
\mu_ {\mathrm{r}} = 1 + \chi_ {\mathrm{m}} \approx 1\tag{6}
$$

这时，式(5)便化为

$$
H = a (\mathrm{Oe})\tag{7}
$$

(4)、(7)两式表明:在该点,磁感强度 B 的值(以 Gs 为单位)等于磁场强度 H 的值(以 Oe 为单位).

【别解】在高斯单位制里，B 与 H 的关系为

$$
B - \mu_ {\mathrm{r}} H\tag{8}
$$

因为在高斯单位制里，磁感强度 B 以 Gs 为单位，磁场强度 H 以 Oe 为单位，故由式(8)即可得出上述结论.

## 第八章 电磁感应

## § 8.1 电磁感应定律

8.1.1 法拉第电磁感应定律为 $\varepsilon = -\frac{d\Phi}{dt}$ . 有人说: (1) 这个式子不是法拉第提出来的; (2) 式中的负号是人为规定的结果. 你认为这个人说的两点是对的还是错的?

## 【解答】这个人说的两点都是对的.

(1)法拉第因出生在贫寒的铁匠家庭,没有受过正规教育,数学知识很少,所以他未能用数学公式表示电磁感应定律.他是根据实验,用导体切割磁力线的数目表述电磁感应定律的.他在1851年的《论磁力线》一文中写道:“导线的运动不论是垂直地还是倾斜地、也不论是从一个方向还是从其他方向跨过力线,它总是把由它所跨过的线所代表的总力加在一起.”因此,“普遍地,被推入电流的电量是直接地与切割的线的总数成正比的.”虽然 $t=-\frac{d\Phi}{dt}$ 这个式子不是法拉第提出来的,但它所表示的规律都是法拉第在实验中发现的,所以后人就一直称它为法拉第电磁感应定律.

(2)再讲 $\varepsilon = -\frac{\mathrm{d}\Phi}{\mathrm{d}t}$ 中的负号，为具体起见，以导线构成的平面线圈为例. $\Phi$ 是通过线圈的磁通量， $\varepsilon$ 是线圈里产生的感应电动势，它们的定义如下：

$$
\Phi = \iint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = \iint_ {S} \boldsymbol {B} \cdot \boldsymbol {n} \mathrm{d} S\tag{1}
$$

$$
\ell = \oint_ {L} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l}\tag{2}
$$

式中 n 是线圈平面法线方向上的单位矢量； $E_{i}$ 是在导线内由于 $\Phi$ 的变化而产生的涡旋电场的电场强度（导线里的感应电流便是在 $E_{i}$ 的作用下产生的），dl 则是沿导线 L 的线元。电磁感应的自然规律如下

大小: $\ell=\left|\frac{d\Phi}{dt}\right|$ 

方向： $E_{i}$ 的方向如图 8.1.1(1) 所示

为了表示出以上两点,通常规定(约定):n为dl的右旋进方向上的单位矢量,如图8.1.1(2)的(a)所示,这样就出现了负号,即

$$
\dot {\ell} = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} \quad (\pmb {n} \text {为} \mathrm{d} l \text {的右旋进方向})\tag{3}
$$

如果规定 n 为 dl 的左旋进方向上的单位矢量, 如图8.1.1(2)的(b)所示, 就不会出现负号, 这时电磁感应定律便为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/9f00fedd5ead1754e4d9484d018e71d5b77ce4720ce62a7687544af8b09f0bb1.jpg)



(a)


$\varepsilon=\frac{d\Phi}{dt}$ (n 为 dl 的左旋进方向)

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6a6ba77b1a2530a9e3de1213f5d6c46eccd295ddb14c86c2f833b640a27acf43.jpg)



(b)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/11991a9e5c1fb7fe3d98bdf62ca28dc540848a5a4037d3d4cbdf8325642e5ed3.jpg)



(a)


(4) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c7e2c270afb9f3e979c2bf358da5e59d76cf55aa25b08125213ef564f944ee68.jpg)



(b)



图8.1.1(1)



图8.1.1(2)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a9334857d3d3acbfd23096f86cd5905ccde0e96a6fbfa64a4fded1fa3dcba9f2.jpg)


由此可见， $\varepsilon=-\frac{d\Phi}{dt}$ 中的负号，是为了表示出电磁感应的自然规律，人为地规定的结果.


图8.1.2


8.1.2 感应电动势 $\mathcal{E}$ 是标量, 不是矢量, 通常说: “感应电动势的方向” 是什么意思? 对于一个导线回路, 如何由 $\varepsilon = -\frac{\mathrm{d}\Phi}{\mathrm{d}t}$ 确定 $\mathcal{E}$ 的方向?

【解答】感应电动势的方向是指它的非静电力 $(E_{i})$ 的方向.

确定 $\mathcal{E}$ 的方向的方法如下: 沿回路 $L$ 任意规定一个绕行方向, 即线元 $\mathrm{d}l$ 的方向, 以此绕行方向的右旋进方向为回路 $L$ 的法线方向 $\pmb{n}$ , 如图8.1.2所示, 则有

$$
\ell = \oint_ {L} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = - \frac {\mathrm{d}}{\mathrm{d} t} \iint_ {S} \boldsymbol {B} \cdot \boldsymbol {n} \mathrm{d} S
$$

若 $-\frac{\mathrm{d}}{\mathrm{d}t}\iint_{S}\pmb {B}\cdot \pmb {n}\mathrm{d}S > 0$ ，则 $\varepsilon >0$ ，即 $\varepsilon$ 与 $\mathrm{d}\pmb{l}$ 方向相同；若 $-\frac{\mathrm{d}}{\mathrm{d}t}\iint_{S}\pmb {B}\cdot \pmb {n}\mathrm{d}S < 0$ ，则 $\varepsilon < 0$ ，即 $\varepsilon$ 与 $\mathrm{d}\pmb{l}$ 方向相反.

8.1.3 法拉第电磁感应定律为 $\varepsilon = -\frac{d\Phi}{dt}$ ，试说明式中的负号表示楞次定律.

【解答】在磁通量 $\Phi = \iint_{S} \mathbf{B} \cdot \mathrm{d}\mathbf{S}$ 和感应电动势 $\mathcal{E} = \oint_{L} \mathbf{E}_i \cdot \mathrm{d}\mathbf{l}$ 这两个定义式中，面积元 $\mathrm{d}\mathbf{S} = n\mathrm{d}S$ 的方向规定为 $\mathrm{d}l$ 的右旋进方向，如图8.1.3(1)所示。在这种规定下， $\mathcal{E} = -\frac{\mathrm{d}\Phi}{\mathrm{d}t}$ 中的负号便表示楞次定律，说明如下：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/41ff74524a784e82424d61d9252ac2cb096f262085053689cd68e304599c28c1.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/45f2d95618ef14bf88f07486ef8b537e370f359fcdfd66290d9e55d08a1352d0.jpg)



(2)



图8.1.3


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/0c99a851b0bdd79a848a9e88daa7d873ee455c5a24958b910945b077ab3cf786.jpg)



(3)


如图8.1.3(2)，取 $\pmb{n}$ 与 $\pmb{B}$ 的夹角小于 $90^{\circ}$ ，则 $\mathrm{d}l$ 便按规定为 $\pmb{n}$ 的右手螺旋方向。这时 $\Phi = \iint_{S} \pmb{B} \cdot \mathrm{d}\pmb{S} > 0$ 。若 $\pmb{B}$ 增大， $\Phi$ 也增大，故 $\frac{\mathrm{d}\Phi}{\mathrm{d}t} > 0$ ， $\varepsilon = \oint_{L} \pmb{E}_i \cdot \mathrm{d}l = -\frac{\mathrm{d}\Phi}{\mathrm{d}t} < 0$ ，所以 $\pmb{E}_i$ 与 $\mathrm{d}l$ 方向相反。若 $\pmb{B}$ 减小， $\Phi$ 也减小，故 $\frac{\mathrm{d}\Phi}{\mathrm{d}t} < 0$ ， $\varepsilon = \oint_{L} \pmb{E}_i \cdot \mathrm{d}l = -\frac{\mathrm{d}\Phi}{\mathrm{d}t} > 0$ ，所以 $\pmb{E}_i$ 与 $\mathrm{d}l$ 方向相同。可见负号表示了楞次定律所规定的 $\pmb{E}_i$ 的方向，即感应电流的方向。

如果取 n 与 B 的夹角大于 $90^{\circ}$ ，如图 8.1.3(3) 所示，dl 按规定仍为 n 的右手螺旋方向。这时 $\Phi = \iint_{S} B \cdot dS < 0$ 。若 B 增大， $\Phi$ 便减小，故 $\frac{d\Phi}{dt} < 0$ ， $\varepsilon = \oint_{L} E_{i} \cdot dl = -\frac{d\Phi}{dt} > 0$ ，所以 $E_{i}$ 与 dl 方向相同。若 B 减小， $\Phi$ 便增大，故 $\frac{d\Phi}{dt} > 0$ ， $\varepsilon = \oint_{L} E_{i} \cdot dl = -\frac{d\Phi}{dt} < 0$ ，所以 $E_{i}$ 与 dl 方向相反。

由以上分析可见,不论是哪种情况,只要规定了 n 为 dl 的右旋进方向,则 $\varepsilon = -\frac{d\Phi}{dt}$ 中的负号就表示了 $E_{j}$ 的方向,即楞次定律所规定的方向.

8.1.4 试用简单的例子说明,楞次定律是能量守恒所必须的.换句话说,如果电磁感应的规律正好与楞次定律相反,则能量守恒定律便不成立.

【解答】如图8.1.4,外力 $\pmb{F}$ 作用在磁棒上，使它的N极向线圈运动；根据楞次定律，线圈里产生感应电流 $I_{i}, I_{i}$ 的磁场反抗磁棒N极向线圈的运动。因此，要使磁棒向线圈运动，外力必须反抗 $I_{i}$ 的磁场作功。这功的能量就转化成线圈电流所产生的焦耳热。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/cfacd7c90d5f1cb6947a386dd30c327cec12fbc1ced2a0f121aa3722f50bf9a8.jpg)



图8.1.4


如果电磁感应的规律正好与楞次定律相反，即 $I_{i}$ 的方向与图8.1.4中的相反，则 $I_{i}$ 的磁场作用在磁棒上的力便是吸引力，使之向线圈加速运动。这样， $I_{i}$ 便对磁棒作功，同时还产生焦耳热。于是能量守恒定律便不成立了。

8.1.5 试证明 $\frac{\mathrm{d}\Phi}{\mathrm{d}t}$ 的单位为伏特.

【证】由 $\Phi = \iint B\cdot dS$ 得

$$
\text { 韦伯 } = \text { 特斯拉 } \cdot \text { 米 } ^ {2}\tag{1}
$$

由 $\pmb {F} = q\pmb {v}\times \pmb{B}$ 得

$$
\text { 韦伯 } = \frac {\text { 牛顿 } \cdot \text { 米 } ^ {2}}{\text { 库仑 } \cdot \text { 米   /   秒 }} = \frac {\text { 牛顿 } \cdot \text { 米 } \cdot \text { 秒 }}{\text { 库仑 }}\tag{2}
$$

再由 $\pmb {F} = q\pmb{E}$ 得

$$
\text { 韦伯 } = \frac {\text { 伏特 } \cdot \text { 米 } \cdot \text { 秒 }}{\text { 米 }} = \text { 伏特 } \cdot \text { 秒 }\tag{3}
$$

于是得 $\frac{d\Phi}{dt}$ 的单位为伏特.

【别证】因 $\varepsilon = -\frac{\mathrm{d}\Phi}{\mathrm{d}t}$ ， $\varepsilon$ 的单位为伏特，故 $\frac{\mathrm{d}\Phi}{\mathrm{d}t}$ 的单位为伏特.

8.1.6 试评论下列几种说法:(1)感应电动势的方向是指感应电场的电场强度(非静电力)的方向；(2)在一个线圈里，感应电动势的方向是指其中电流的方向；(3)在磁场变化所产生的感应电场中，两点的电势差是没有意义的；(4)导体处在磁场变化所产生的电场中，它上面两点的电势差是没有意义的.

【解答】（1）和(3)都是对的.

(2)不对.由于还可能有其他原因(如电池)产生电流,线圈里电流的方向不一定与感应电动势的方向相同;还有,线圈若不构成闭合回路,其中便没有电流,但仍可有感应电动势存在.

(4)不对.感应电场 $E_{i}$ 使导体内的自由电荷运动，结果在导体表面上产生电荷，这电荷产生静电场 $\pmb{E}_{s}$ ，使得导体内 $E_{i} + E_{s} = 0$ ，达到平衡。由于静电场的存在，导体上面两点的电势差便是这静电场的电势差，是有意义的。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/b3341c30b4f42a0ff3c7c5b6955002a01c1aed10cc09cfdb6003a02132235bdd.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/488e2c2220bf2af9adc34b1f785b9e02ceb29adfb1d8d9f9a3af02e724953ebb.jpg)



图8.1.7


8.1.7 在一圆柱形空间里有均匀磁场，磁感强度 B 平行于轴线，其横截面如图 8.1.7(1) 所示。当 B 的大小发生变化时，空间两点 a、b 间有电势差吗？如果在这磁场中放一根导线，使其经过 a、b 两点，如图 8.1.7(2) 所示。这时导线上的 a、b 两点有电势差吗？

【解答】在图8.1.7(1)中， $\pmb{B}$ 的大小变化所产

生的感应电场 $E_{i}$ 是涡旋电场，对这种电场是不能定义电势的。因此，图8.1.7(1)中，“a、b两点的电势差”是没有意义的。

如果在其中放一根通过 $a, b$ 两点的导线，则这导线上 $a, b$ 两点的电势差便有意义。这时导线上 $a, b$ 两点的电势差就是涡旋电场 $\pmb{E}_i$ 使导线两端或其他地方出现电荷所产生的静电场（或稳恒电场）的电势差。

8.1.8 磁场变化产生的感应电场是涡旋电场,对于这种电场,是不能定义电势的.为什么处在这电场中的导体上不同地方可以有电势差呢?

【解答】处在感应电场中的导体就成为一个电源，导体内的感应电场的电场强度 $E_{i}$ 就是这电源的非静电力，它驱使导体内的自由电子往 $E_{i}$ 的反方向运动。从而使导体上有的地方出现正电荷，有的地方出现负电荷，这些电荷产生的电场是静电场或稳恒电场，导体上不同地方的电势差就是这种电场的电势差，而不是感应电场的电势差。感应电场是不能定义电势的。

8.1.9 导体在磁场中运动时,它里面的自由电子因受到洛伦兹力的作用,从而产生感应电流,可以对外作功.但洛伦兹力是不作功的.那么,感应电流对外作功的能量是从哪里来的呢?试说明原因.

【解答】如图8.1.9(1)，导体在外力 $\pmb{F}$ 的作用下，以速度 $v$ 在磁感强度为 $\pmb{B}$ 的磁场中运动， $\pmb{B}$ 垂直于纸面向外。在 $\pmb{B}$ 的作用下，导体里的自由电子以平均定向速度 $\pmb{u}$ 相对于导体运动。这样，自由电子的速度便为 $u + v$ ，它所受的洛伦兹力为

$$
\boldsymbol {f} = - e (\boldsymbol {u} + \boldsymbol {v}) \times \boldsymbol {B}\tag{1}
$$

$f$ 与 $\pmb{u} + \pmb{v}$ 垂直，故 $f$ 作功的功率为零.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/06ed57070e42d9cc2661c06a76405760e99f5beba26e92c178c16d40963d3919.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/42a4f193fb94bb31258b465fcc05cf806cf0db2cca8fe195aeb973252feb45a1.jpg)



(2)



图8.1.9


由图8.1.9(2)可见， $f$ 可分解为平行于 $\pmb{u}$ 的分量 $f$ 和垂直于 $\pmb{u}$ 的分量 $f_{\pm}$ ，即

$$
f = f _ {1} + f _ {2}\tag{2}
$$

其中 $f_{1}$ 作功的功率为

$$
f _ {\parallel} \cdot (u + v) = f _ {\parallel} \cdot u > 0\tag{3}
$$

$f_{\perp}$ 作功的功率为

$$
f _ {\perp} \cdot (u + v) = f _ {\perp} \cdot v <   0\tag{4}
$$

即 $f_{\parallel}$ 对形成感应电流的自由电子作了正功，而 $f_{\perp}$ 则作了负功，正负功之和为零.

对于运动的导体来说， $f_{\perp}$ 是阻力。因此，使导体运动的外力便要克服阻力 $f_{\perp}$ 而作正功。当导体以匀速 v 运动时， $f_{\perp} = -F$ 。这时外力 F 对导体作的正功便正好等于 $f_{\parallel}$ 对自由电子作的正功。这就表明，外力 F 作功所支出的能量通过洛伦兹力转化为感应电流的能量。所以感应电流对外作功的能量是从使导体运动的外力 F 来的。洛伦兹力 f 起了中介的作用，它的 $f_{\perp}$ 接受了 F

作正功所给予的能量,同时它的 $f_{\parallel}$ 对自由电子作正功,将这部分能量转给了感应电流.

8.1.10 法拉第发现电磁感应现象的实验如图 8.1.10 所示: 在一铁环上绕有两组线圈 A 和 B, A 与电池接成回路, B 则自成回路, 它的导线经过一个小磁针的上方. 试问当接通电键 K 时, 小磁针如何运动?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/efda67d19c1a9f073b7acc40e5e1efa40c218df987e15bb0928064d72a57c507.jpg)



图8.1.10


【解答】K接通时,小磁针上方回路中的感应电流是逆时针方向流动,因此,小磁针的N极向纸面内转动,同时它的S极则向纸面外转动.

8.1.11 一螺线管与电流计 G 联接成闭合回路, 一磁棒与这螺线管平行, 并以速度 v 离开螺线管. 试问电流计 G 中有无电流? 若有电流, 试指出其方向.

【解答】有电流.电流的方向是从 $a$ 经G到 $b$ .

8.1.12 如图 8.1.12, 试判定下列情况下电阻 R 里感应电流的方向: (1) 电流从 a 到 $a'$ 并增大; (2) 电流从 $a'$ 到 a 并减小; (3) 电流从 $a'$ 到 a 并增大.

【解答】(1)从 d 经 R 到 c；(2)从 d 经 R 到 c；(3)从 c 经 R 到 d.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/bf3594fd6d64ad1ac5420f8d0c985def081afb2beb9e3320e8d020b4721d6483.jpg)



图8.1.11


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f55a0154ab16bac9f2e979b08d0058b3dd3c59d4f9b4a52309dc10bdb6737013.jpg)



图8.1.12


8.1.13 两个变压器联接如图 8.1.13, 当线圈 A 中的电流 I 增大时, 试指出线圈 B 中感应电动势的方向(即非静电力的方向).

【解答】从 $c$ 到 $d$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f94d7173c1fc14a69e34bb065f137972524a68ac0fcd2407355c34b67cec1e2f.jpg)



图8.1.13


8.1.14 圆环 $A$ 均匀地带有负电荷, 在它外面有一和它共面的金属圆环 $B$ . 现在让 $A$ 环绕它的几何轴旋转, 要在 $B$ 环中产生逆时针方向的电流 $I$ , 如图 8.1.14 所示. 试问 $A$ 环应如何旋转?

【解答】逆时针方向旋转且转速越来越快.或者,顺时针方向旋转且转速越来越慢.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/1a247500b959823b3ac055627584a99e3506b7fdf1768fcb40b80db4c013fed1.jpg)



图8.1.14


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/87c5e3ca40f84c5d1893bd41444e5e006d8b264233628ee5f25b2ce2fc15b71f.jpg)



图8.1.15


8.1.15 两个导体圆环 A 和 B 在同一平面内, A 带有电荷, 并绕它的几何轴顺时针旋转, B 则静止不动; 现观测到 B 中有逆时针方向的电流, 如图 8.1.15 所示. 试问 A 带的是正电荷还是负电荷? 它的转动状态如何?

【解答】A 带正电荷, 转速越来越慢. 或者, A 带负电荷, 转速越来越快.

8.1.16 一金属圆环 $A$ 带负电荷, 绕它的几何轴顺时针方向转动; 另外两个金属圆环 $B$ 和 $C$ , 与它在同一平面内, 如图 8.1.16 所示. 当 $A$ 的转速越来越快时, 试问 $B, C$ 两环内感应电流的方向各如何?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/635b90f8e0c7c098c7d6478f5dda16f414f8b1c3187bfaf67aa3b4fa61667ce3.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/3cf60bc2accd5c0684a1eb486a41fb2055fa31a828eea15e0b42e1d1c8dca34b.jpg)



图8.1.16


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/667443adb879f54242a743bf507a5203c5554b8d88561abcbfe37abcd1bab7bb.jpg)


【解答】B、C两环内的感应电流都是逆时针方向.

8.1.17 为了减少涡流损耗,变压器一般都是用表面绝缘的硅钢片作铁芯的.一变压器的外形如图8.1.17所示,试问它的铁芯的硅钢片平行于哪个面?

【解答】硅钢片平行于 DCGE 平面.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/d1b76f8c5428062f6d6e8af2885f92222836026415590aef7c3f25b4fd9cc308.jpg)



图8.1.17


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/69da6ff85c8aa62caa878577b999bb80850d7dbcc458aad0f005cc7f11e67b59.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/2db9328a0beba94d71eef93398c45515a399b2d1cc448d1a9a403df79fc9f334.jpg)



(2)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/55b7e3ffa1947a6f5c882cb7fbd064a857c7f1eeaba200107fd6c73d0cd3dc2b.jpg)



(3)



图8.1.18


8.1.18 矩形线圈在磁感强度为 B 的均匀外磁中转动, 转轴通过线圈中心, 如图 8.1.18 所示. 转轴: (1) 与 B 垂直并与长边平行; (2) 与 B 垂直并与短边平行; (3) 与 B 平行并与线圈平面垂直. 试指出上述三种情况下线圈中感应电流的方向.

【解答】在图8.1.18所示的时刻，(1)和(2)中的线圈平面正好与 $\pmb{B}$ 垂直， $\frac{\mathrm{d}\Phi}{\mathrm{d}t} = 0$ ，所以这时都没有感应电流；从这个位置转过 $90^{\circ}$ 的过程中，(1)和(2)中的感应电流都是顺时针方向。图中的(3)因为通过线圈的磁通量不变，故无感应电流。

8.1.19 图 8.1.19 中磁场的磁感强度 B 垂直于纸面并向内, 磁场中有一段运动的导体细杆, 试问在下列运动状态下, 杆内感应电动势的方向各如何? (1) 以 B 为轴线绕杆的中心转动; (2) 绕杆的中心转动, 轴线与杆垂直并与 B 垂直; (3) 沿长度方向平动, 速度 v 与 B 垂直; (4) 以速度 v 平动, v 与杆垂直并与 B 垂直.

【解答】（1）从中心向两端；(2)无感应电动势；(3)无感应电动势；(4)向上.

8.1.20 两根导体杆 ABCD 和 EFGH, AB 和 EF 部分平行, 相距为 L; CD 和 GH 部分平行, 相距为 l. 两杆处在磁感强度为 B 的均匀磁场中, B 与两杆构成的平面垂直并向内,如图8.1.20所示.另有两导体杆ab和cd,分别横跨在两平行部分,以速度V和v平行于导体杆运动.试求闭合回路abdc中的感应电动势,并指出感应电流沿abdc方向流动的条件.


(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/10adbb5f81b44c13188987d980de3cd79c16525b96dcadf0bf3b76ae3d6adbb7.jpg)



(2)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/847803038c711a8aba6deed522ef7f4e9959b695fc20a903b05825c6e95df5ef.jpg)



(3)



图8.1.19



(4)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/ac0587d2facc55ed8e7f3455b6a42238004f9b10e1745969a8699fcb8fb2906a.jpg)



图8.1.20


【解】 感应电动势为

$$
\varepsilon = B (l v - L V)
$$

感应电流沿 abdc 方向流动的条件为

$$
v > \frac {L}{l} V
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/742b08ae3c593f7d0a1e4db5b0aed0e6ace64bc418ff4c1a58d065e5b2cf45cf.jpg)


8.1.21 一矩形导体回路 ABCD 放在均匀外磁场中，磁场的磁感强度 B 的大小为 $B = 6.0 \times 10^{3} G s$ ，B 与矩形平面的法线 n 夹角为 $\alpha = 60^{\circ}$ ; 回路的 CD 段长为 l = 1.0 m, 以速度 v = 5.0 m/s 平行于两边向外滑动, 如图 8.1.21 所示. 试求回路中的感应电动势, 并指出感应电流的方向.

图8.1.21

【解】回路中的感应电动势为

$$
\begin{array}{r l} \xi & = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {\mathrm{d}}{\mathrm{d} t} (B S \cos \alpha) = - B \frac {\mathrm{d} S}{\mathrm{d} t} \cos \alpha \\ & = - B l v \cos \alpha = - 6. 0 \times 1 0 ^ {3} \times 1 0 ^ {- 4} \times 1. 0 \times 5. 0 \times \cos 6 0 ^ {\circ} \\ & = - 1. 5 (\mathrm{V}) \end{array}
$$

负号表示 $\varepsilon$ 的方向(非静电力的方向)为 $D\to C\to B\to A\to D$ ，这个方向，就是感应电流的方向.

8.1.22 三条平行导线 AB、CD 和 EF 在同一平面内，AB 和 CD 相距为 $l_{1}$ ，

CD 和 EF 相距为 $l_{2}$ , A、E 之间以电阻 R 联接, B、D 之间以电阻 r 联接; 一条导体杆 ab 横跨在这三条导线上, 以匀速 v 在磁感强度为 B 的均匀磁场中滑动, v 平行于三条导线, B 垂直于三条导线所构成的平面并向外, 如图 8.1.22 所示. 试分别求通过 R 和 r 的电流.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/22c99d771a6bef60376b31943aee2c15ae5bffd02a9ba1291b088bb822ad3cd2.jpg)



图8.1.22


【解】通过 $R$ 的电流为

$$
I = \frac {C}{R} = - \frac {1}{R} \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {1}{R} \frac {\mathrm{d}}{\mathrm{d} t} (B S) = - \frac {B (l _ {1} + l _ {2}) v}{R}
$$

负号表示 I 的方向是自 E 经 R 到 A.

通过 $r$ 的电流为

$$
i = \frac {t ^ {\prime}}{r} = - \frac {1}{r} \frac {\mathrm{d} \Phi^ {\prime}}{\mathrm{d} t} = - \frac {1}{r} \frac {\mathrm{d} (B S ^ {\prime})}{\mathrm{d} t} = \frac {B l _ {1} v}{r}
$$

i 的方向是自 D 经 r 到 B.

8.1.23 两根平行的导线 ab 和 cd，长度都是 l，各有一端与弯成乙形的金属细杆接触，它们都在同一平面内，并处在磁感强度为 B 的均匀磁场中，B 与这平面垂直并向内，如图 8.1.23 所示。试求下列两种情况下 a、d 两端的电势差：(1) 细杆和两导线都以速度 v (v

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/4f3713b05af02c39986d7030cb4f6dfc1a22b69f756239aa08a486e044f9b5db.jpg)



图8.1.23


与导线垂直)运动；(2)细杆不动，两导线都以速度v运动.

【解】(1) $a, d$ 两端的电势差为

$$
\begin{array}{r l} U _ {a d} & = U _ {a} - U _ {d} = \int_ {a} ^ {d} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {a} ^ {d} (- \boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} \\ & = - \int_ {a} ^ {b} (\boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} = - \int_ {0} ^ {l} v B \mathrm{d} l = - B l v \end{array}
$$

负号表明 a 端电势比 d 端低.

(2)这时 $a, d$ 两端的电势差为

$$
U _ {a d} ^ {\prime} = - B l v - B l v = - 2 B l v
$$

负号表明 a 端电势比 d 端低.

8.1.24 铁路的两条铁轨相距为 1435mm, 火车以每小时 100km 的速度前进, 火车所在处地磁场的磁感强度 B 在竖直方向上的分量为 0.15Gs. 两条铁轨除与车轮接通外, 彼此是绝缘的. 试求两条铁轨间的电势差 U.

$$
U = B _ {\perp} l v = 0. 1 5 \times 1 0 ^ {- 4} \times 1 4 3 5 \times 1 0 ^ {- 3} \times \frac {1 0 0 \times 1 0 ^ {3}}{6 0 \times 6 0} = 6. 0 \times 1 0 ^ {- 4} (\mathrm{V})
$$

8.1.25 飞机以 $v=200m/s$ 的速度水平飞行, 机翼两端相距 30m, 两端之间可当作连续导体. 已知飞机所在处地磁场的磁感强度 B 在竖直方向上的分量为 0.20Gs. 试求机翼两端的电势差 U.

$$
\text {   【解】   } U = B _ {\perp} l v = 0. 2 0 \times 1 0 ^ {- 4} \times 3 0 \times 2 0 0 = 0. 1 2 (\mathrm{V})
$$

8.1.26 一导体杆弯折成 N 形, 其中平行的两段长为 l. 当这导体杆以匀速 v 在磁感强度为 B 的均匀磁场中运动时, 设 B 与导体杆构成的平面垂直并向外, v 与 B 垂直, v 也与导体杆平行的两段垂直, 如图 8.1.26 所示. 试求导体杆两端 a、d 间的电势差 $U_{ad}$ .

【解】

其中

$$
\begin{array}{r l} U _ {a d} & = U _ {a} - U _ {d} = \int_ {a} ^ {d} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {a} ^ {d} (- \boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} \\ & = - \int_ {a} ^ {b} (\boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} - \int_ {b} ^ {c} (\boldsymbol {v} \cdot \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} - \int_ {c} ^ {d} (\boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} \\ & \quad \int_ {a} ^ {b} (\boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} + \int_ {b} ^ {c} (\boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} = v B l - v B l = 0 \end{array}
$$

故得

$$
U _ {a b} = - \int_ {c} ^ {d} (\boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} = v B l.
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/4ba4011a0ae44499e2fce8f39742cab93a2911dba2522339972d9014fe19b030.jpg)



图8.1.26


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e96b6a288fab061ca735a0ac73bec37a1d37d23b82cbe5ab56871fa0280b1812.jpg)



图8.1.27


8.1.27 一段直导线长为 $l = 20\mathrm{cm}$ , 在中点 $b$ 折成 $\alpha = 30^{\circ}$ 角, 如图 8.1.27 所示. 磁场的磁感强度 $\pmb{B}$ 与这导线的两段都垂直. 这导线以速度 $\pmb{v}$ 运动, $\pmb{v}$ 的方向与 $ab$ 段一致, $v = 2.0\mathrm{m/s}$ , $B = 2.5 \times 10^{2}\mathrm{Gs}$ . 试求 $a, c$ 两端的电势差 $U_{ac}$ , 哪端电势高?

【解】

$$
\begin{array}{r l} U _ {a c} & = U _ {a} - U _ {c} = \int_ {a} ^ {c} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {a} ^ {c} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} \boldsymbol {l} \\ & = \int_ {c} ^ {a} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = \int_ {c} ^ {a} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} \\ & = \int_ {c} ^ {b} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} + \int_ {b} ^ {a} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} \\ & = \int_ {c} ^ {b} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = - v B \frac {l}{2} \sin \alpha \\ & = - 2. 0 \times 2. 5 \times 1 0 ^ {2} \times 1 0 ^ {- 4} \times \frac {2 0 \times 1 0 ^ {- 2}}{2} \sin 3 0 ^ {\circ} \\ & = - 2. 5 \times 1 0 ^ {- 3} (\mathrm{V}) \end{array}
$$

负号表示 c 端电势高.

8.1.28 一根直导线 ab，在磁感强度为 B 的均匀磁场中以速度 v 平行移动，如图 8.1.28 所示。设 $r = ab$ ，试证明 a、b 两端的电势差为 $U_{ab} = B \times v \cdot r$ 。

【证】

$$
\begin{array}{r l} U _ {a b} & = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {a} ^ {b} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} \boldsymbol {l} \\ & = \int_ {b} ^ {a} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = \int_ {b} ^ {a} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = \boldsymbol {v} \times \boldsymbol {B} \cdot \int_ {b} ^ {a} \mathrm{d} \boldsymbol {l} \\ & = \boldsymbol {v} \times \boldsymbol {B} \cdot (- \boldsymbol {r}) = \boldsymbol {B} \times \boldsymbol {v} \cdot \boldsymbol {r} \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6e4080883a991c2a5cb197516b3c2eb3b8fabf2bfa5f1ee2903674eebecbb0b6.jpg)



a 图8.1.28


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/890bcfdb394e679a4021e27a11de256e7633f8d47f2e6fff309f2e20672ffe02.jpg)



图8.1.29


8.1.29 长为 l 的一段直导线在磁感强度为 B 的均匀磁场中以速度 v 运动，v 和 B 都与导线垂直，v 与 B 的夹角为 $\theta$ ，如图 8.1.29 所示。(1) 试求导线两端 a、b 的电势差 $U_{ab}$ ; (2) 当 $l = 60 ~cm, v = 5.0 ~m/s, B = 2.4 \times 10^{-2} ~T, \theta = 30^{\circ} ~时$ ，试计算 $U_{ab}$ 的值.

【解】 (1)

$$
\begin{array}{r l} U _ {a b} & = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {a} ^ {b} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} \boldsymbol {l} \\ & = \int_ {b} ^ {a} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = \int_ {b} ^ {a} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = \boldsymbol {v} \times \boldsymbol {B} \cdot \int_ {b} ^ {a} \mathrm{d} \boldsymbol {l} \\ & = \boldsymbol {v} \times \boldsymbol {B} \cdot (\vec {b a}) = v B l \sin \theta \end{array}
$$

(2)代入数值得

$$
U _ {a b} = 5. 0 \times 2. 4 \times 1 0 ^ {- 2} \times 6 0 \times 1 0 ^ {- 2} \times \sin 3 0 ^ {\circ} = 3. 6 \times 1 0 ^ {- 2} (\mathrm{V})
$$

8.1.30 一条导线弯成半径为 $R$ 的半圆弧 $ab$ , 放在磁感强度为 $\pmb{B}$ 的均匀磁场中, $\pmb{B}$ 与半圆面垂直并向内, 如图 8.1.30(1)所示. 当它以速度 $\pmb{v}$ ( $\pmb{v}$ 与 $\pmb{B}$ 垂直, 并与 $ab$ 方向成 $45^{\circ}$ 角)运动时, 试求: (1) 这段导线中的感应电动势 $\mathcal{E}$ ; (2) 导线两端 $a, b$ 的电势差 $U_{ab}$ ; (3) 导线中点 $c$ 与 $b$ 端的电势差 $U_{cb}$ .

【解】

$$
\mathcal {E} = \int_ {b} ^ {a} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = \int_ {b} ^ {a} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} \tag {1}\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/9e5841e02888de259caddcf78dd2afd2e7d8c27b2d3ee94da64a46791888cb5b.jpg)



图 8.1.30(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/9062a2b9575c92684cd51999e97b84ef525210037cc8b8810daeb287778c1922.jpg)



图8.1.30(2)


由图8.1.30(2)可见，

$$
\boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = v B (R \mathrm{d} \alpha) \cos \theta = v B R \cos (\alpha - 4 5 ^ {\circ}) \mathrm{d} \alpha\tag{2}
$$

(2) 

所以

(3) 

$$
\begin{array}{r l} \varepsilon & = v B R \int_ {0} ^ {\pi} \cos (\alpha - 4 5 ^ {\circ}) \mathrm{d} \alpha = v B R [ \sin (\alpha - 4 5 ^ {\circ}) ] _ {\alpha} ^ {\alpha} \cdot \frac {\pi}{0} \\ & = v B R \left[ \frac {\sqrt {2}}{2} - \left(- \frac {\sqrt {2}}{2}\right) \right] = \sqrt {2} v B R \\ U _ {a b} & = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} \cdot \mathrm{d} l = \int_ {a} ^ {b} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} l \\ & = \int_ {b} ^ {a} \boldsymbol {E} _ {i} \cdot \mathrm{d} l = \varepsilon = \sqrt {2} v B R. \\ U _ {c b} & = U _ {c} - U _ {b} = \int_ {c} ^ {b} \boldsymbol {E} _ {s} \cdot \mathrm{d} l = \int_ {c} ^ {b} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} l = \int_ {b} ^ {c} \boldsymbol {E} _ {i} \cdot \mathrm{d} l \\ & = v B R \int_ {0} ^ {\pi / 2} \cos (\alpha - 4 5 ^ {\circ}) \mathrm{d} \alpha = v B R [ \sin (\alpha - 4 5 ^ {\circ}) ] _ {\alpha} ^ {\alpha} = \frac {\pi}{0}. \\ & = v B R \left[ \frac {\sqrt {2}}{2} - \left(- \frac {\sqrt {2}}{2}\right) \right] = \sqrt {2} v B R \end{array}\tag{4}
$$

(5) 

8.1.31 载有电流 $I$ 的无穷长直导线旁边，有一段半径为 $R$ 的半圆形导线，圆心 $O$ 到 $I$ 的距离为 $l (> R)$ ，半圆形导线和电流 $I$ 在同一平面内，它的两端 $a, b$ 的联线与 $I$ 垂直，如图8.1.31所示。当它以匀速 $\pmb{v}$ 平行于电流 $I$ 运动时，试求它两端 $a, b$ 的电势差 $U_{ab}$ 

【解】

$$
\begin{array}{r l} U _ {a b} & = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {a} ^ {b} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} \boldsymbol {l} \\ & = \int_ {b} ^ {a} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = \int_ {b} ^ {a} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = - \int_ {b} ^ {c} v B \mathrm{d} l \\ & = \int_ {a} ^ {b} v B \mathrm{d} l = \frac {\mu_ {0} I v}{2 \pi} \int_ {l - R} ^ {l + R} \frac {\mathrm{d} l}{l} \\ & = \frac {\mu_ {0} I v}{2 \pi} \ln \left(\frac {l + R}{l - R}\right) \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/24ca18cdd04cca0fa171bbc3454710b2bc7534037a85a94c73c480072a6bc442.jpg)



图8.1.31


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e9f9540210873d5128cb3f66b676189b1a518bd722c3bc5000e77b813c2e9daa.jpg)



图8.1.32


8.1.32 一无穷长直导线载有电流 I，在它旁边有一段直导线 AB, AB 与 I 垂直，并且在同一平面内，以速度 v 平行于 I 运动，如图 8.1.32 所示。已知 I = 10A, v = 5.0m/s, a = 1.0cm, b = 20.0cm。(1) 试求这段导线中的感应电动势 $\varepsilon$ ; (2) 导线 A、B 两端哪端电势高？(3) 如果用另一根导线把 A、B 两端联接起来，试问是否有电流流动？

【解】

$$
\begin{array}{r l} \mathcal {E} & = \int_ {B} ^ {A} \boldsymbol {E} _ {i} \cdot \mathrm{d} l = \int_ {B} ^ {A} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} l = \int_ {B} ^ {A} v B \mathrm{d} l \\ & = \frac {\mu_ {0} I v}{2 \pi} \int_ {B} ^ {A} \frac {\mathrm{d} l}{l} = \frac {\mu_ {0} I v}{2 \pi} \ln \frac {b}{a} \\ & = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 0 \times 5 . 0}{2 \pi} \ln \frac {2 0 . 0}{1 . 0} \\ & = 3. 0 \times 1 0 ^ {- 5} (\mathrm{V}) \\ U _ {A B} & = U _ {A} \cdot U _ {B} = \int_ {A} ^ {B} \boldsymbol {E} _ {s} \cdot \mathrm{d} l - \int_ {A} ^ {B} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} l = \int_ {B} ^ {A} \boldsymbol {E} _ {i} \cdot \mathrm{d} l = t \\ & = 3. 0 \times 1 0 ^ {- 5} (\mathrm{V}) > 0 \end{array}
$$

所以 A 端电势高.

(3) 若所用导线的每一部分都以速度 v 运动, 则无电流; 若有的部分速度不是 v, 则有电流.

8.1.33 无穷长直线载有 $I = 5.0\mathrm{A}$ 的电流，旁边有一个与它共面的矩形线圈，长边与 $I$ 平行，长为 $l = 20\mathrm{cm}$ ，两边到 $I$ 的距离分别为 $a = 10\mathrm{cm}, b = 20\mathrm{cm}$ ，如图8.1.33所示。线圈共有 $N = 1000$ 币，以 $v = 3.0\mathrm{m / s}$ 的速度离开直导线。试求线圈里的感应电动势 $\mathcal{E}$ 。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/42b3217a347af75eced4b7663ddf2545d1a1f7a7cd8c76342b9577456736a87d.jpg)



图8.1.33


【解】通过线圈的磁链为

$$
\begin{array}{r l} \Psi = N \Phi & = N \int_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = N \int_ {S} B \mathrm{d} S = N \int_ {a} ^ {b} \frac {\mu_ {0} I}{2 \pi r} l \mathrm{d} r \\ & = \frac {\mu_ {0} N I l}{2 \pi} \int_ {a} ^ {b} \frac {\mathrm{d} r}{r} = \frac {\mu_ {0} N I l}{2 \pi} \ln \frac {b}{a} \end{array}\tag{1}
$$

感应电动势为

$$
\begin{array}{r l} \varepsilon & = - \frac {\mathrm{d} \Psi}{\mathrm{d} t} = - \frac {\mu_ {0} N I l}{2 \pi} \frac {\mathrm{d}}{\mathrm{d} t} \left(\ln \frac {b}{a}\right) = - \frac {\mu_ {0} N I l}{2 \pi} \frac {a}{b} \frac {\mathrm{d}}{\mathrm{d} t} \left(\frac {b}{a}\right) \\ & = - \frac {\mu_ {0} N I l}{2 \pi} \frac {a}{b} \frac {1}{a ^ {2}} \left(a \frac {\mathrm{d} b}{\mathrm{d} t} - b \frac {\mathrm{d} a}{\mathrm{d} t}\right) = - \frac {\mu_ {0} N I l}{2 \pi} \frac {a - b}{a b} v \\ & = - \frac {4 \pi \times 1 0 ^ {- 7} \times 1 0 0 0 \times 5 . 0 \times 2 0 \times 1 0 ^ {- 2}}{2 \pi} \times \frac {1 0 - 2 0}{1 0 \times 2 0 \times 1 0 ^ {- 2}} \times 3. 0 \\ & = 3. 0 \times 1 0 ^ {- 3} (\mathrm{V}) \end{array}\tag{2}
$$

因 $\varepsilon=\oint E_{i}\cdot dl>0$ , 故 $E_{i}$ 为顺时针方向.

【别解】

$$
\begin{array}{r l} \mathcal {E} = & B _ {a} N l v - B _ {b} N l v = \frac {\mu_ {0} I}{2 \pi a} N l v - \frac {\mu_ {0} I}{2 \pi b} N l v \\ = & \frac {\mu_ {0} N l l}{2 \pi} \frac {b - a}{a b} v \end{array}\tag{3}
$$

8.1.34 一条直导线横扫过磁感强度为 B 的磁场, B 在一圆柱空间内是均匀的, 在外面为零, 圆柱面的半径为 R, 如图 8.1.34(1) 所示. 当导线离圆柱轴线为 r 时, 导线的速度为 v, v 与导线垂直. 试求这时导线中产生的感应电动势 $\varepsilon$ .

【解】

$$
\begin{array}{r l} \mathcal {E} & = \int \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = v B l = v B \cdot 2 \sqrt {R ^ {2} - r ^ {2}} \\ & = 2 B v \sqrt {R ^ {2} - r ^ {2}} \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/ad682a63284751db7c7bed264d0ad5f934b30b3d909c995be20bd5df99e6614a.jpg)


(1) 


图8.1.34(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e06069568d8eb4b94cca91d4584b00e94ad7a436b5bc2f687463e676ad0832df.jpg)



图8.1.34(2)


【别解】设想在圆柱外的导线两端,接上一根导线,以构成一个闭合回路,如图8.1.34(2)所示.通过此回路的磁通量为

$$
\begin{array}{r l} \Phi & = B S = B \left[ \frac {1}{2} R ^ {2} \theta - 2 \cdot \frac {1}{2} r \sqrt {R ^ {2} - r ^ {2}} \right] \\ & = \frac {1}{2} B R ^ {2} \theta - B r \sqrt {R ^ {2} - r ^ {2}} \end{array}\tag{2}
$$

$$
\varepsilon = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {1}{2} B R ^ {2} \frac {\mathrm{d} \theta}{\mathrm{d} t} + B \sqrt {R ^ {2} - r ^ {2}} \frac {\mathrm{d} r}{\mathrm{d} t} - B r \frac {r \frac {\mathrm{d} r}{\mathrm{d} t}}{\sqrt {R ^ {2} - r ^ {2}}}\tag{3}
$$

因为

$$
\frac {\mathrm{d} r}{\mathrm{d} t} = - v\tag{4}
$$

$$
r = R \cos \frac {\theta}{2}\tag{5}
$$

$$
\frac {\mathrm{d} r}{\mathrm{d} t} = - \frac {1}{2} R \sin \frac {\theta}{2} \frac {\mathrm{d} \theta}{\mathrm{d} t}\tag{6}
$$

所以

$$
\frac {\mathrm{d} \theta}{\mathrm{d} t} = \frac {2 v}{R \sin \frac {\theta}{2}} = \frac {2 v}{\sqrt {R ^ {2} - r ^ {2}}}\tag{7}
$$

将式(4)、(7)代入式(3)得

$$
\begin{array}{l} \mathcal {E} = - \frac {1}{2} B R ^ {2} \frac {2 v}{\sqrt {R ^ {2} - r ^ {2}}} - B v \sqrt {R ^ {2} - r ^ {2}} + \frac {B r ^ {2} v}{\sqrt {R ^ {2} - r ^ {2}}} \\ = - \frac {B v}{\sqrt {R ^ {2} - r ^ {2}}} [ R ^ {2} + (R ^ {2} - r ^ {2}) - r ^ {2} ] = - 2 B v \sqrt {R ^ {2} - r ^ {2}} \end{array}\tag{8}
$$

其中负号表示 $\varepsilon = \oint E_i \cdot dl$ 中的 $E_i$ 的方向如图8.1.34(1)所示.

8.1.35 一矩形导线回路 abcd 处在磁感强度为 B 的均匀磁场中, B 与回路平面垂直并向外, 如图 8.1.35 所示. ab 边长为 l, 当它以速度 v 向右滑动时, 试求 a、b 两点的电势差 $U_{ab} = U_{a} - U_{b}$ . 哪点电势高?

【解】

$$
\begin{array}{r l} U _ {a b} & = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {a} ^ {b} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} \boldsymbol {l} \\ & = \int_ {a} ^ {b} (- \boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} = - \int_ {a} ^ {b} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = - v B l \end{array}
$$

负号表示，a 点的电势比 b 点低。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e7b9a01f84a9ece3b1b2fb3d3625dd14261339c546d6fd38a80b3db6315b415e.jpg)



图8.1.35


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/82cdf3e9a8a74e05ca4f7a954531dd948bff1a398eb7a222a15281a8c90072de.jpg)



图8.1.36


8.1.36 两平行导线相距为 $l = 50\mathrm{cm}$ , 通过电阻 $R = 0.20\Omega$ 联接在一起, 放在磁感强度为 $\pmb{B}$ 的均匀磁场中, $\pmb{B}$ 与导线平面垂直并向内, 如图8.1.36所示, $B = 0.50\mathrm{T}$ ; 另一条导线 $ab$ 横跨在两平行导线上, 以匀速 $\pmb{v}$ 向右滑动, $\pmb{v}$ 与两导线平行, $v = 4.0\mathrm{m/s}$ . 试求: (1) 导线 $ab$ 的运动在闭合回路中所产生的感应电动势; (2) 电阻 $R$ 所消耗的功率 $P$ ; (3) 磁场 $\pmb{B}$ 作用在导线 $ab$ 上的力 $\pmb{F}$ .

【解】 $(1)\mathcal{E}=vBl=4.0\times0.50\times50\times10^{-2}=1.0(\mathrm{~V})$ 

(2) $P = \mathcal{E}I - \frac{\mathcal{E}^{2}}{R} = \frac{1.0^{2}}{0.20} = 5.0(\mathrm{W})$ 

$$
F = B l I = B l \frac {c}{R} = 0. 5 0 \times 5 0 \times 1 0 ^ {- 2} \times \frac {1 . 0}{0 . 2 0} = 1. 3 (\mathrm{N})
$$

F 的方向与速度 v 相反.

8.1.37 一横日字形导线框,如图 8.1.37(1)所示,已知 $ab = bc = cd = de = ef = fa = 0.10\mathrm{m}, ab, fc$ 和 $ed$ 各段电阻均为 $3.0\Omega, cd$ 和 $fe$ 两段电阻均为 $1.5\Omega$ , 而 $bc$ 和 $af$ 两段电阻均为零. 这导线框处在磁感强度为 $\pmb{B}$ 的均匀磁场中, $\pmb{B}$ 的方向与框面垂直并向内, $\pmb{B}$ 的大小为 $1.0\mathrm{T}$ ; 磁场的边界与 $de$ 边平行, 如图中虚线所示. 今以匀速 $\pmb{v}$ 将导线框从磁场中拉出, $\pmb{v}$ 与 $de$ 边垂直, $v = 2.4\mathrm{m/s}$ . 试求拉出导线框的力所作的功.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f83cb5a8047feda779fc4675c5efc61fc6f637ca01066bfdf69b60be438d91d1.jpg)



图8.1.37(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/b6b9b90f68fa4fc846fc70ec598f79958ac0227e6b22d5b66d8668e8336d6ad3.jpg)



图8.1.37(2)


【解】ed边未出磁场时，ab、fc和ed三边切割磁力线，所产生的感应电动势都是 $\delta = Blv$ 但感应电流为零.故不需作功.

ed 边出磁场后, ab 边和 fc 边切割磁力线, 产生感应电动势 $\varepsilon = Blv$ . 故在第一阶段, 即从 ed 边出磁场后到 fc 边出磁场前, 这导线框便形成如图 8.1.37(2) 所示的电路, 其中 $R = 3.0\Omega, r = 1.5\Omega$ . 于是便有

$$
I R + 2 I (R + 2 r) = B l v\tag{1}
$$

所以

$$
I = \frac {B l v}{3 R + 4 r} = \frac {1 . 0 \times 0 . 1 0 \times 2 . 4}{3 \times 3 . 0 + 4 \times 1 . 5} = 1. 6 \times 1 0 ^ {- 2} (\mathrm{A})\tag{2}
$$

这时 ab 边和 fc 边所受的安培力 F 的方向与 v 相反, 其大小均为

$$
F = B l I\tag{3}
$$

其他四边所受的安培力之和为零. 因匀速拉出, 故拉力所作的功便为

$$
\begin{array}{r l} W _ {1} & = 2 F l = 2 B l ^ {2} I = 2 \times 1. 0 \times (0. 1 0) ^ {2} \times 1. 6 \times 1 0 ^ {- 2} \\ & = 3. 2 \times 1 0 ^ {- 4} (\mathrm{J}) \end{array}\tag{4}
$$

第二阶段, 即从 $fc$ 边出磁场到 $ab$ 边出磁场期间, 只有 $ab$ 边切割磁力线, 所产生的感应电动势为 $\varepsilon = Blv$ , 这时导线框便形成如图8.1.37(3)所示的电路. 于是便有

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/19f472e23694f6fc7a380029da2089fca8877effe3ea8fddc1e3a12f6f1369b0.jpg)



图 8.1.37(3)


$$
\begin{array}{r l} & I ^ {\prime} \left[ R + \frac {R (2 r + R)}{R + 2 r + R} \right] = B l v \\ \text {所以} & I ^ {\prime} = \frac {2 B l v (R + r)}{R (3 R + 4 r)} \\ & = \frac {2 \times 1 . 0 \times 0 . 1 0 \times 2 . 4 \times (3 . 0 + 1 . 5)}{3 \times (3 \times 3 . 0 + 4 \times 1 . 5)} \\ & = 4. 8 \times 1 0 ^ {- 2} (\mathrm{A}) \end{array}\tag{5}
$$

(6) 

这时磁场作用在 ab 边上的安培力仍为式(3)，其他两边所

受的安培力之和为零. 所以这期间拉力所作的功便为

$$
W _ {2} = F l = B l ^ {2} I ^ {\prime} = 1. 0 \times (0. 1 0) ^ {2} \times 4. 8 \times 1 0 ^ {- 2} = 4. 8 \times 1 0 ^ {- 4} (\mathrm{J})\tag{7}
$$

最后得拉出导线框的外力所作的功为

$$
W = W _ {1} + W _ {2} = 3. 2 \times 1 0 ^ {- 4} + 4. 8 \times 1 0 ^ {- 4} = 8. 0 \times 1 0 ^ {- 4} (\mathrm{J})\tag{8}
$$

【讨论】也可以用回路中磁通量的变化率求感应电动势,然后再求电流、安培力和外力作的功.

【别解】因导线框是匀速运动,故根据能量守恒定律,电阻上消耗的能量(焦耳热)便等于外力作的功.第一阶段,由图8.1.37(2)可见,电阻上消耗的能量为

$$
\begin{array}{r l} W _ {1} ^ {\prime} & = \left[ 2 I ^ {2} R + (2 I) ^ {2} (R + 2 r) \right] \frac {l}{v} = 2 I ^ {2} (3 R + 4 r) \frac {l}{v} \\ & = 2 \times (1. 6 \times 1 0 ^ {- 2}) ^ {2} \times (3 \times 3. 0 + 4 \times 1. 5) \times 0. 1 / 2. 4 \\ & = 3. 2 \times 1 0 ^ {- 4} (\mathrm{J}). \end{array}\tag{9}
$$

第二阶段,由图8.1.37(3)可见,电阻上消耗的功率为

$$
W _ {2} ^ {\prime} = I ^ {2} \left[ R + \frac {R (2 r + R)}{R + 2 r + R} \right] \frac {l}{v} = I ^ {2} \frac {R (3 R + 4 r)}{2 (R + r)} \frac {l}{v}
$$

$$
\begin{array}{l} = (4. 8 \times 1 0 ^ {- 2}) ^ {2} \times \frac {3 . 0 \times (3 \times 3 . 0 + 4 \times 1 . 5)}{2 \times (3 . 0 \times 1 . 5)} \times \frac {0 . 1}{2 . 4} \\ = 4. 8 \times 1 0 ^ {- 4} (\mathrm{J}) \end{array}\tag{10}
$$

于是得外力作的功为

$$
W ^ {\prime} = W _ {1} ^ {\prime} + W _ {2} ^ {\prime} = 3. 2 \times 1 0 ^ {- 4} + 4. 8 \times 1 0 ^ {- 4} = 8. 0 \times 1 0 ^ {- 4} (\mathrm{J})\tag{11}
$$

8.1.38 一矩形导线回路两边相距为 $l$ ，另一边 $ab$ 以匀速 $\pmb{v}$ 向右滑动， $\pmb{v}$ 与两边平行；整个回路都在磁感强度为 $\pmb{B}$ 的均匀磁场中， $\pmb{B}$ 与回路平面垂直并向外，如图8.1.38所示。 $\pmb{B}$ 随时间作如下变化： $B = B_0\cos \omega t$ 。试求 $ab$ 到左边的距离为 $x$ 时，回路中的感应电动势 $\varepsilon$ 。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/1c40b898b912b6cceab45706861f4907315578cfd98ea5970ed8cd91fa8f5f48.jpg)


【解】通过回路的磁通量为


图8.1.38


$$
\Phi = B _ {0} \cos \omega t l x = B _ {0} l x \cos \omega t\tag{1}
$$

所求的感应电动势为

$$
\begin{array}{r l} \mathcal {E} & = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - B _ {0} l \frac {\mathrm{d} x}{\mathrm{d} t} \cos \omega t + B _ {0} l x \omega \sin \omega t \\ & = B _ {0} l (\omega x \sin \omega t - v \cos \omega t) \\ & = B _ {0} l \sqrt {\omega^ {2} x ^ {2} + v ^ {2}} \sin \left(\omega t - \arctan \frac {v}{\omega x}\right) \end{array}\tag{2}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/012a9bf9f6253466492640aa6deef52f60ea7d576f9cc476f1fe2eea8739df4a.jpg)


8.1.39 两根竖直的金属杆相距为 $l$ ，上端通过电动势为 $\varepsilon$ 、内阻为 $r$ 的电池联接在一起，如图8.1.39所示。一质量为 $m$ 、电阻为 $R$ 的均质导体棒，两端分别套在两杆上，用手扶住让它静止。在空间有均匀磁场，磁感强度 $\pmb{B}$ 与杆棒构成的平面垂直。现放手让导体棒下落。设棒与杆间的摩擦力和杆本身的电阻都可略去不计，且杆足够长。试求棒下落的最大速度。


图8.1.39


【解】设棒向下的加速度为 $a$ ，则棒的运动方程为

$$
m a = m g + B l I\tag{1}
$$

式中 I 是通过棒的电流, 其值为

$$
I = \frac {\mathcal {E} - B l v}{R + r}\tag{2}
$$

式中 $v$ 是棒下落的速度，减号是因为感应电动势 $Blv$ 与电池的电动势相反.将 $I$ 代入式(1)得

$$
a = g + \frac {B l \mathcal {E}}{m (R + r)} - \frac {B ^ {2} l ^ {2} v}{m (R + r)}\tag{3}
$$

随着 $v$ 的增大， $a$ 减小；当 $a = 0$ 时， $v$ 达到极大值 $v_{\max}$ . 这时由式(3)得

$$
v _ {\max} = \frac {m g (R + r)}{B ^ {2} l ^ {2}} + \frac {\xi}{B l}\tag{4}
$$

【讨论】一、若 B 的方向与图 8.1.39 中的方向相反, 则安培力的方向向上, 这时棒的运动方程便为

$$
m a = m g - B l I\tag{5}
$$

通过棒的电流为

$$
I = \frac {\mathcal {E} + B l v}{R + r}\tag{6}
$$

将式(6)代入式(5)得

$$
a = g - \frac {B l}{m} \frac {\varepsilon + B l v}{R + r}\tag{7}
$$

随着 v 的增大, a 减小; 当 a = 0 时, v 达到极大值 $v'_{max}$ . 这时由式(7)得

$$
v _ {\max} ^ {\prime} = \frac {m g (R + r)}{B ^ {2} l ^ {2}} - \frac {C}{B l}\tag{8}
$$

比较式(4)、(8)可见

$$
v _ {\mathrm{max}} ^ {'} <   v _ {\mathrm{max}}\tag{9}
$$

二、考虑摩擦力 设摩擦力 $f_{\mu}$ 与速度成正比，比例系数为 k，即

$$
f _ {\mu} = k v\tag{10}
$$

$\pmb{B}$ 的方向仍如图8.1.39所示，则棒的运动方程为

$$
m a = m g + B l I - k v\tag{11}
$$

$$
I = \frac {\mathcal {E} - B l v}{R + r}\tag{12}
$$

令 $a = 0$ ，由式(11)和(12)解得

$$
v _ {\max} ^ {\prime \prime} = \frac {m g (R + r) + B l \ell}{B ^ {2} l ^ {2} + k (R + r)}\tag{13}
$$

这时, 若 B 的方向与图 8.1.39 中的方向相反, 则棒的运动方程为

$$
m a = m g - B l I - k v\tag{14}
$$

$$
I = \frac {\mathcal {E} + B l v}{R + r}\tag{15}
$$

令 $a = 0$ ，由式(14)和(15)得

$$
v _ {\max} ^ {\prime \prime \prime} = \frac {m g (R + r) - B l \varepsilon}{B ^ {2} l ^ {2} + k (R + r)}\tag{16}
$$

比较式(13)、(16)可见

$$
v _ {\mathrm{max}} ^ {\prime \prime \prime} <   v _ {\mathrm{max}} ^ {\prime \prime}\tag{17}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c8fa1a50427f4424f361d7ffc23a34a0a13d94319dc649803ef181acb7d6d2c5.jpg)



图8.1.40


8.1.40 半径分别为 R 和 r 的两个大小圆线圈共轴, 中心相距为 x, 大线圈载有电流 I, 如图 8.1.40 所示. 设 $x \gg R$ , 大线圈中的电流 I 在小线圈处所产生的磁场可当作均匀磁场. 当小线圈以速度 v 沿轴线平行移动时, 试求小线圈内的感应电动势.

【解】大线圈中的电流 I 在轴线上离中心为 x 处产生的磁感强度 B 的方向沿轴线，其大小为[参见前面 5.1.20 题的式(2)]

$$
B = \frac {\mu_ {0} I R ^ {2}}{2 (x ^ {2} + R ^ {2}) ^ {3 / 2}}\tag{1}
$$

因 $x \gg R > r$ ，故上式可近似为

$$
B = \frac {\mu_ {0} I R ^ {2}}{2 x ^ {3}}\tag{2}
$$

通过小线圈的磁通量为

$$
\Phi = B S - \pi r ^ {2} B = \frac {\pi \mu_ {0} I r ^ {2} R ^ {2}}{2 x ^ {3}}\tag{3}
$$

于是得小线圈内的感应电动势为

$$
\mathcal {E} = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {\pi \mu_ {0} I r ^ {2} R ^ {2}}{2} \frac {\mathrm{d}}{\mathrm{d} t} \frac {1}{x ^ {3}} = \frac {3 \pi \mu_ {0} I r ^ {2} R ^ {2} v}{2 x ^ {4}}\tag{4}
$$

8.1.41 一根金属杆, 上端 $a$ 有一小孔, 套在固定的水平轴上, 杆可以在磁场中来回摆动, 磁场的磁感强度 $\pmb{B}$ 与摆动平面垂直并向内, 如图 8.1.41 所示. 试问什么时候杆下端 $b$ 的电势高于上端 $a$ 的电势?

【解答】 $b, a$ 两端的电势差为

$$
\begin{array}{r l} U _ {b} - U _ {a} & = \int_ {b} ^ {a} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {b} ^ {a} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} \boldsymbol {l} \\ & = \int_ {a} ^ {b} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = \int_ {a} ^ {b} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} \end{array}
$$

由上式可见，当 $v \times B$ 与 $ab$ 的方向相同时， $U_b - U_a > 0$ ，这时由图8.1.41可见，杆应向左摆动。即杆向左摆时，它下端的电势比上端的高。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/3ba8279d84e024a4f0776b8a2edf45dfd9a6f2074b8a77bccb7c9f123bac1f63.jpg)



图8.1.41


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/96e1b2043300474d01231c9d153cadf8d72be496fd031861a7f455ce5590c9f4.jpg)



图8.1.42


8.1.42 长为 l 的一根铜棒，在均匀磁场中以匀角速度 $\omega$ 转动，磁场的磁感强度 B 与棒垂直，转轴通过棒的一端并与 B 平行，如图 8.1.42 所示。(1)试求铜棒两端的电势差 $U_{OA}$ ，哪端电势高？(2)当 $l = 50 ~cm, B = 100 ~Gs$ ，转速为每秒 50 圈时，试计算 $U_{OA}$ 的值.

【解】

$$
U _ {O A} = U _ {O} - U _ {A} = \int_ {O} ^ {A} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {O} ^ {A} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} \boldsymbol {l}
$$

$$
\begin{array}{l} = \int_ {O} ^ {A} (- \boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} l = \int_ {O} ^ {A} v B \mathrm{d} l = \int_ {O} ^ {A} \omega B l \mathrm{d} l \\ = \frac {1}{2} B l ^ {2} \omega \end{array}
$$

因 $U_{O}-U_{A}>0$ , 故 O 端电势高.

$$
U _ {O A} = \frac {1}{2} \times 1 0 0 \times 1 0 ^ {- 4} \times (5 0 \times 1 0 ^ {- 2}) ^ {2} \times 2 \pi \times 5 0 = 0. 3 9 (\mathrm{V})
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/2be776ce3ba729bd527cb25ebabb127bad0ba6bbf4f32952c1e8e44f58472e28.jpg)


8.1.43 只有一根辐条的轮子在均匀磁场中转动, 转动轴与磁感强度 B 平行, 如图 8.1.43 所示. 轮子和辐条都是导体, 辐条长为 R, 轮子每秒转 N 圈. 两条导线 a 和 b 通过各自的刷子分别与轮轴和轮缘接触. (1) 试求 a、b 间的感应电动势 $\varepsilon$ ; (2) 若在 a、b 间接一个电阻, 使辐条中的电流为 I, 试问 I 的方向如何? (3) 试求这时磁场作用在辐条上的力矩 M; (4) 当轮子反转时, I 是否也会反向?

图8.1.43

$$
\begin{array}{r l} \mathcal {E} & = \int_ {0} ^ {R} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = \int_ {0} ^ {R} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = \int_ {0} ^ {R} v B \mathrm{d} l \\ & = \int_ {0} ^ {R} \omega l B \mathrm{d} l = \frac {1}{2} B \omega R ^ {2} = \frac {1}{2} B \cdot 2 \pi N \cdot R ^ {2} = N \pi B R ^ {2} \end{array} \tag {1}
$$

(2)电流 I 沿辐条向外.

(3)以 $e_{\omega}$ 为转动角速度 $\omega$ 方向上的单位矢量,如图8.1.43,其方向与B相同,则有

所以

$$
\begin{array}{l} \mathrm{d} \boldsymbol {M} = \boldsymbol {r} \times \mathrm{d} \boldsymbol {F} = \boldsymbol {r} \times (I \mathrm{d} l \times \boldsymbol {B}) = \boldsymbol {r} \times (I \mathrm{d} r \times \boldsymbol {B}) = - I B r \mathrm{d} r e _ {\omega} \\ \boldsymbol {M} = - I B \int_ {0} ^ {R} r \mathrm{d} r e _ {\omega} = - \frac {1}{2} I B R ^ {2} e _ {\omega} \end{array}
$$

负号表明,力矩 M 阻止轮子转动.

(4)电流 I 会反向.

8.1.44 半径为 R 的金属圆盘, 放在磁感强度为 B 的均匀磁场中, B 与盘面法线 n 的夹角为 $\theta$ , 如图 8.1.44 所示. 当这圆盘以每秒 N 圈的转速绕它的几何轴旋转时, 试求盘中心与边缘的电势差.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a3a83c5d2f9f68b5c8aa083aa1ca90c1467b2d1d980f7e82a61c02ffb8862688.jpg)


【解】盘中心 O 与边缘 A 的电势差为

图8.1.44

$$
\begin{array}{r l} U _ {O A} & = U _ {O} - U _ {A} = \int_ {0} ^ {R} \boldsymbol {E} _ {s} \cdot \mathrm{d} l = \int_ {0} ^ {R} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} l \\ & = - \int_ {0} ^ {R} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} l = - \int_ {0} ^ {R} \boldsymbol {v} \times (\boldsymbol {B} _ {\parallel} + \boldsymbol {B} _ {\perp}) \cdot \mathrm{d} l \end{array}\tag{1}
$$

式中 $B_{\parallel}$ 和 $B_{\perp}$ 分别为 $\pmb{B}$ 的平行于和垂直于 $\pmb{n}$ 的分量. 因 $B_{\perp}$ 与 $\pmb{v}$ 在同一平面(垂直于 $\pmb{n}$ 的平面)内, 故 $\pmb{v} \times B_{\perp}$ 便平行于 $\pmb{n}$ , 所以

于是得

$$
\boldsymbol {v} \times \boldsymbol {B} _ {\perp} \cdot \mathrm{d} l = 0\tag{2}
$$

$$
\begin{array}{r l} U _ {O A} & = - \int_ {0} ^ {R} \boldsymbol {v} \times \boldsymbol {B} _ {\text {主}} \cdot \mathrm{d} \boldsymbol {l} = - \int_ {0} ^ {R} \boldsymbol {v} \times (B \cos \theta \boldsymbol {n}) \cdot \mathrm{d} \boldsymbol {l} \\ & = - B \cos \theta \int_ {0} ^ {R} \boldsymbol {v} \times \boldsymbol {n} \cdot \mathrm{d} \boldsymbol {l} \end{array}\tag{3}
$$

由图8.1.44可见，

$$
\boldsymbol {v} \times \boldsymbol {n} \cdot \mathrm{d} \boldsymbol {l} = v \mathrm{d} l = 2 \pi N l \mathrm{d} l\tag{4}
$$

代入式(3)便得

$$
U _ {O A} = - 2 \pi N B \cos \theta \int_ {0} ^ {R} l \mathrm{d} l = - \pi N B R ^ {2} \cos \theta\tag{5}
$$

负号表示 $U_{A} > U_{O}$ ，即盘边缘的电势比盘中心的电势高。

8.1.45 由金属制成的直角三角形框架, 勾 BC 长为 a, 放在磁感强度为 B 的均匀磁场中, 股 AB 与 B 平行, 如图 8.1.45(1) 所示. 当这框架以股 AB 为轴, 每秒旋转 n 圈时, 试求勾 BC 里产生的感应电动势 $\delta_{BC}$ 和整个框里产生的感应电动势 $\delta$ .

【解】

$$
\begin{array}{r l} \mathcal {E} _ {B C} & = \int_ {0} ^ {a} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = \int_ {0} ^ {a} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = \int_ {0} ^ {a} v B \mathrm{d} l \\ & = \int_ {0} ^ {a} 2 \pi n l B \mathrm{d} l = n \pi a ^ {2} B \end{array}\tag{1}
$$

$$
\mathcal {E} = \mathcal {E} _ {B C} + \mathcal {E} _ {C A} + \mathcal {E} _ {A B}\tag{2}
$$

因为股 AB 是轴线, 其上 v = 0, 故

$$
\delta_ {A B} ^ {\epsilon} = \int_ {A} ^ {B} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = 0\tag{3}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/01624b1a69a40a8a9bd34afdd2ed2abe88a97763381d22e20c39e3793697364b.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c6e5cb2ec4fcec6fdf122246951b5396fac95d2511e7ccb145bcaab956ae140f.jpg)



图8.1.45(1)



图8.1.45(2)


弦 CA 中的感应电动势为[图 8.1.45(2)]

$$
\begin{array}{r l} \varepsilon_ {C A} & = \int_ {C} ^ {A} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = \int_ {C} ^ {A} v B \cos \beta \mathrm{d} l = - \int_ {C} ^ {A} v B \cos \alpha \mathrm{d} l \\ & = - \int_ {C} ^ {B} v B \mathrm{d} x = - \int_ {0} ^ {a} 2 \pi n (a - x) B \mathrm{d} x \\ & = n \pi B (a - x) ^ {2} \Bigg | _ {x = 0} ^ {x = a} = - n \pi a ^ {2} B \end{array}\tag{4}
$$

所以

$$
\xi = \mathcal {E} _ {B C} + \xi_ {C A} = n \pi a ^ {2} B + (- n \pi a ^ {2} B) = 0\tag{5}
$$

8.1.46 一根 $50\mathrm{cm}$ 长的金属棒 $ab$ 水平放置，以长度的 $\frac{1}{5}$ 处为轴心，在水平面内旋转，每秒转两圈；已知该处地磁场的磁感强度 $\pmb{B}$ 在竖直方向上的分量 $B_{\perp} = 0.50$ 高斯，如图8.1.46(1)所示.试求棒两端的电势差 $U_{ab}$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/69c09b29047320ee098a8a9ac0346f213f2f9039128dc9502dafd4b68ef5afba.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/3cd675543136971c4c6350247082314755678d548a9db207f4e0a62e809c8765.jpg)



图 8.1.46(1)



图8.1.46(2)


【解】由图8.1.46(2)可见，

$$
\begin{array}{l} U _ {a b} = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {a} ^ {b} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} \boldsymbol {l} = - \int_ {a} ^ {b} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} \\ = - \int_ {a} ^ {b} \boldsymbol {v} \times \boldsymbol {B} _ {\perp} \cdot \mathrm{d} \boldsymbol {l} = - \int_ {a} ^ {b} (\boldsymbol {\omega} \times \boldsymbol {r}) \times \boldsymbol {B} _ {\perp} \cdot \mathrm{d} \boldsymbol {r} \\ = - \int_ {a} ^ {O} (\boldsymbol {\omega} \times \boldsymbol {r}) \times \boldsymbol {B} _ {\perp} \cdot \mathrm{d} \boldsymbol {r} - \int_ {O} ^ {b} (\boldsymbol {\omega} \times \boldsymbol {r}) \times \boldsymbol {B} _ {\perp} \cdot \mathrm{d} \boldsymbol {r} \\ = \int_ {a} ^ {O} \omega B _ {\perp} r \mathrm{d} r - \int_ {0} ^ {b} \omega B _ {\perp} r \mathrm{d} r = \frac {\omega}{2} B _ {\perp} r ^ {2} \left| _ {r = 0} ^ {r = l / 5} - \frac {\omega}{2} B _ {\perp} r ^ {2} \right| _ {r = 0} ^ {r = 4 l / 5} \\ = \frac {\omega}{2} B _ {\perp} \left(\frac {l}{5}\right) ^ {2} - \frac {\omega}{2} B _ {\perp} \left(\frac {4 l}{5}\right) ^ {2} = - \frac {3}{1 0} \omega B _ {\perp} l ^ {2} \end{array}
$$

式中 l 为棒长. 代入数据得

$$
\begin{array}{r l} U _ {a b} & = U _ {a} - U _ {b} = - \frac {3}{1 0} \times 2 \pi \times 2 \times 0. 5 0 \times 1 0 ^ {- 4} \times (5 0 \times 1 0 ^ {- 2}) ^ {2} \\ & = - 4. 7 \times 1 0 ^ {- 5} (\mathrm{V}) \end{array}
$$

负号表示 a 端电势比 b 端低.

8.1.47 横截面很小的金属丝弯成一圆环, 半径为 $a$ , 以角速度 $\omega$ 绕它的一个固定直径 $AB$ 旋转; 在它的中心, 有一个磁矩为 $m$ 的小磁棒, 其长度比 $a$ 小很多, $m$ 与 $\omega$ 同方向, 如图 8.1.47(1)所示, $C$ 为 $A, B$ 间的中点. (1)试求 $A, C$ 之间的感应电动势 $\varepsilon$ ; (2)怎样测量这个电动势?

【解】（1）圆环旋转时切割磁力线，在 $A, C$ 之间产生的感应电动势为[图8.1.47(2)]

$$
\begin{array}{r l} \mathcal {E} & = \int_ {A} ^ {C} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = \int_ {A} ^ {C} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = \int_ {A} ^ {C} [ (\boldsymbol {\omega} \times \boldsymbol {a}) \times \boldsymbol {B} ] \cdot \mathrm{d} \boldsymbol {l} \\ & = \int_ {A} ^ {C} [ (\boldsymbol {\omega} \cdot \boldsymbol {B}) \boldsymbol {a} - (\boldsymbol {a} \cdot \boldsymbol {B}) \boldsymbol {\omega} ] \cdot \mathrm{d} \boldsymbol {l} \end{array}\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/bc4436795927b2fa7e5ab47ac62eb5e2ff25d9190f28c66e416cfeb462743c2d.jpg)



图8.1.47(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/4a5340bb43a4517684624edb4797cac783f06509880035b4ba36c2fd9f3cf9b5.jpg)



图8.1.47(2)


因为

所以

$$
\begin{array}{r l} & \boldsymbol {a} \cdot \mathrm{d} l = 0 \\ \ell = - \int_ {A} ^ {C} (\boldsymbol {a} \cdot \boldsymbol {B}) \boldsymbol {\omega} \cdot \mathrm{d} l = - \int_ {A} ^ {C} (\boldsymbol {a} \cdot \boldsymbol {B}) \cos \left(\frac {\pi}{2} + \theta\right) \omega \mathrm{d} l \\ = & \omega a \int_ {A} ^ {C} (\boldsymbol {a} \cdot \boldsymbol {B}) \sin \theta \mathrm{d} \theta \end{array}\tag{2}
$$

磁矩为 m 的磁偶极子在环上 a 处产生的磁感强度为 [参见前面 7.44 题]

$$
\boldsymbol {B} = \frac {\mu_ {0}}{4 \pi a ^ {3}} \left[ \frac {3 (\boldsymbol {m} \cdot \boldsymbol {a})}{a ^ {2}} \boldsymbol {a} - \boldsymbol {m} \right]\tag{3}
$$

$$
\boldsymbol {a} \cdot \boldsymbol {B} = \frac {\mu_ {0}}{4 \pi a ^ {3}} [ 3 (\boldsymbol {m} \cdot \boldsymbol {a}) - \boldsymbol {a} \cdot \boldsymbol {m} ] = \frac {\mu_ {0}}{2 \pi a ^ {3}} \boldsymbol {m} \cdot \boldsymbol {a} = \frac {\mu_ {0} m}{2 \pi a ^ {2}} \cos \theta\tag{4}
$$

代入式(2)得

$$
\begin{array}{r l} \varepsilon = & \omega a \int_ {A} ^ {C} \frac {\mu_ {0} m}{2 \pi a ^ {2}} \cos \theta \sin \theta d \theta = \frac {\mu_ {0} m \omega}{2 \pi a} \int_ {0} ^ {\pi / 2} \sin \theta \cos \theta d \theta \\ & = \frac {\mu_ {0} m \omega}{2 \pi a} \left[ \frac {1}{2} \sin^ {2} \theta \right] _ {\theta = 0} ^ {\theta - \pi / 2} = \frac {\mu_ {0} m \omega}{4 \pi a} \end{array}\tag{5}
$$

(2)从 $A$ 接出一条导线，在 $C$ 外装一个金属圆圈，圆圈的几何轴与转轴 $AB$ 重合；圆圈与导线都不动，并使 $C$ 转动时保持与圆圈接触。测出导线与圆圈之间的电势差，便等于 $A, C$ 之间的电动势 $\delta$ 。

8.1.48 一正方形线圈每边长 $100\mathrm{mm}$ , 在地磁场中转动, 每秒转 30 圈, 转轴通过中心并与一边平行. (1) 试问转轴与地磁场的磁感强度 $\pmb{B}$ 的夹角为什么值时, 线圈中产生的感应电动最大? (2) 设线圈所在处地磁的 $B = 0.55\mathrm{Gs}$ , 这时要在线圈中产生有效值为 $10\mathrm{mV}$ 的感应电动势, 试求线圈的匝数 $N$ .

【解】（1)转轴与地磁场的 B 的夹角为 $90^{\circ}$ 时， $\frac{d\Phi}{dt}$ 的值最大，故产生的 $\lambda$ 也最大.

(2)在转轴与 B 垂直时,感应电动势为

$$
\epsilon = - \frac {\mathrm{d} \Psi}{\mathrm{d} t} = - N \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - N \frac {\mathrm{d}}{\mathrm{d} t} B S \cos \omega t = N B S \omega \sin \omega t
$$

所以 $N = \frac{\sqrt{2}\mathcal{E}}{BS\omega} = \frac{1.414\times 10\times 10^{-3}}{0.55\times 10^{-4}\times(100\times 10^{-3})^{2}\times 2\pi\times 30} = 1.4\times 10^{2}$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/46bffa5c07bf0e128b594da248955225e944e7e9b2e2e9de9d0b9381a9bad0d6.jpg)



图8.1.49


8.1.49 横截面积为 $1.0 ~mm^{2}$ 的铜线，弯成直径为 $a = 20 ~cm$ 的圆环，环面与地面垂直，该处地磁 B 的水平分量 $B_{\parallel} = 0.18 ~G s$ ，如图 8.1.49 所示。已知铜的电阻率为 $\rho = 1.75 \times 10^{-8} \Omega \cdot m$ 。当这圆环以每分钟 300 圈的匀角速度绕它的竖直直径转动时，试求：(1) 每秒产生的焦耳热；(2) 外加转矩的最大值。

【解】（1）因圆环中的感应电流是交流电流，设电流的有效值为 $i_{e}$ 则

$$
i _ {e} = \frac {c _ {e}}{R}\tag{1}
$$

式中 $\varepsilon_{e}$ 是感应电动势的有效值. 感应电动势为

$$
\varepsilon = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {\mathrm{d}}{\mathrm{d} t} (B _ {\parallel} S \cos \omega t) = B _ {\parallel} S \omega \sin \omega t\tag{2}
$$

所以

$$
\epsilon_ {e} = \frac {B _ {\parallel} S \omega}{\sqrt {2}}\tag{3}
$$

每秒产生的焦耳热为

$$
\begin{array}{l} P = i _ {e} ^ {2} R = \frac {\mathcal {E} _ {e} ^ {2}}{R} = \frac {(B _ {\parallel} S \omega / \sqrt {2}) ^ {2}}{2 \pi a \rho / A} = \frac {(B _ {\parallel} S \omega) ^ {2} A}{4 \pi a \rho} \\ = \frac {\left[ 0 . 1 8 \times 1 0 ^ {- 4} \times \pi \times \left(\frac {2 0 \times 1 0 ^ {- 2}}{2}\right) ^ {2} \times 2 \pi \times \frac {3 0 0}{6 0} \right] ^ {2} \times 1 . 0 \times 1 0 ^ {- 6}}{4 \pi \times \left(\frac {2 0 \times 1 0 ^ {- 2}}{2}\right) \times 1 . 7 5 \times 1 0 ^ {- 8}} \\ = 1. 4 \times 1 0 ^ {- 8} (\mathrm{J/s}) \end{array}\tag{4}
$$

(2)最大的转矩为

$$
\begin{array}{r l} M _ {\max} & = I S B _ {\parallel} = \frac {B _ {\parallel} S \omega}{R} S B _ {\parallel} = \frac {B _ {\parallel} ^ {2} S ^ {2} \omega A}{2 \pi a \rho} \\ & = \frac {\left[ 0 . 1 8 \times 1 0 ^ {- 4} \times \pi \times \left(\frac {2 0 \times 1 0 ^ {- 2}}{2}\right) ^ {2} \right] ^ {2} \times 2 \pi \times \frac {3 0 0}{6 0} \times 1 . 0 \times 1 0 ^ {- 6}}{2 \pi \times \left(\frac {2 0 \times 1 0 ^ {- 2}}{2}\right) \times 1 . 7 5 \times 1 0 ^ {- 8}} \\ & = 9. 1 \times 1 0 ^ {- 1 0} (\mathrm{N} \cdot \mathrm{m}) \end{array}\tag{5}
$$

【讨论】焦耳热若用卡表示,则为

$$
P = 1. 4 4 \times 1 0 ^ {- 8} / 4. 1 8 5 5 = 3. 4 \times 1 0 ^ {- 9} (\mathrm{cal/s})\tag{6}
$$

8.1.50 最简单的交流发电机是在均匀磁场中转动的线圈, 转轴 $OO'$ 与磁场的磁感强度 B 垂直, 如图 8.1.50 所示. 已知 B = 8400Gs, 线圈面积 $S = 25cm^{2}$ , 线圈匝数 N = 20, 每秒转 50 圈. 设开始时线圈平面的法线与 B 垂直. 试求线圈中的电动势 $\varepsilon$ .

【解】

$$
\begin{array}{r l} \mathcal {E} & = - \frac {\mathrm{d} \Psi}{\mathrm{d} t} = - N \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - N \frac {\mathrm{d}}{\mathrm{d} t} B S \cos \omega t \\ & = N B S \omega \sin \omega t \end{array}
$$

$$
\begin{array}{l} = 2 0 \times 8 4 0 0 \times 1 0 ^ {- 4} \times 2 5 \times 1 0 ^ {- 4} \times 2 \pi \times 5 0 \sin 2 \pi \times 5 0 t \\ = 1 3 \sin 1 0 0 \pi t (\mathrm{V}) \end{array}
$$

式中 $i$ 以秒为单位.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/bb1c3a082adc3dcdf8cc8114e72b794707a7f7aa3c827739e1aab1e3e224d0d4.jpg)



图8.1.50


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/74aced57ef82c8842ea2004535c6770dd9ac1cf64627e8a442525a549040737a.jpg)



图8.1.51


8.1.51 法拉第圆盘发电机是一个在磁场中转动的导体圆盘. 设圆盘的半径为 $R$ , 转动轴线与它的几何轴重合, 磁感强度 $\pmb{B}$ 平行于轴线, 转动的角速度为 $\omega$ , 如图 8.1.51 所示. (1) 试求盘的边缘与中心的电势差 $U_{RO}$ , 并计算 $R = 15\mathrm{cm}, B = 0.60\mathrm{T}$ , 转速为每秒 30 圈时 $U_{RO}$ 的值; (2) 当盘反转时, 边缘与中心电势的高低是否也会倒过来?

【解】

$$
\begin{array}{l} U _ {R O} = U _ {R} - U _ {O} = \int_ {R} ^ {0} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {R} ^ {0} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} \boldsymbol {l} \\ = \int_ {0} ^ {R} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = \int_ {0} ^ {R} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = \int_ {0} ^ {R} [ (\boldsymbol {\omega} \times \boldsymbol {r}) \times \boldsymbol {B} ] \cdot \mathrm{d} \boldsymbol {r} \\ = \int_ {0} ^ {R} [ (\boldsymbol {\omega} \cdot \boldsymbol {B}) \boldsymbol {r} - (\boldsymbol {r} \cdot \boldsymbol {B}) \boldsymbol {\omega} ] \cdot \mathrm{d} \boldsymbol {r} = \int_ {0} ^ {R} \omega B r d r \\ = \frac {1}{2} \omega B R ^ {2} \end{array}\tag{1}
$$

$U_{R}-U_{O}>0$ 表明，盘边缘的电势比中心的电势高. $U_{RO}$ 的值为

$$
U _ {R O} = \frac {1}{2} \times 2 \pi \times 3 0 \times 0. 6 0 \times (1 5 \times 1 0 ^ {- 2}) ^ {2} = 1. 3 (\mathrm{V})\tag{2}
$$

(2) 当盘反转时, 盘边缘的电势比盘中心的电势低.

8.1.52 一外表绝缘的导线,扭成如图 8.1.52 所示的三个圆形的平面闭合回路,它们的半径分别为 a、b、c, a > b > c. 这回路中都有磁感强度为 B 的均匀磁

场, 且 B 与回路的平面垂直并向内, 而回路外则无磁场. 当 B 的大小以速率 $\dot{B}$ 增大时, 试求回路中的感应电动势 $\varepsilon$ , 并指出中间圆 b 里感应电流的方向.

【解】

$$
\begin{array}{r l} \dot {\varepsilon} & = \dot {\varepsilon} _ {a} + \dot {\varepsilon} _ {b} + \dot {\varepsilon} _ {c} = - \frac {\mathrm{d}}{\mathrm{d} t} (\Phi_ {a} + \Phi_ {b} + \Phi_ {c}) \\ & = - \frac {\mathrm{d}}{\mathrm{d} t} (\pi a ^ {2} B - \pi b ^ {2} B + \pi c ^ {2} B) \\ & = - \pi (a ^ {2} - b ^ {2} + c ^ {2}) \dot {B} \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/106bb28e34b95f6eb47292aedaecc55be940269237a56dd88d49eada6f3431b8.jpg)



图8.1.52


负号表示 $\varepsilon$ (即涡旋电场) 在大圆 a 里是逆时针方向.

中间圆 b 里的感应电流是顺时针方向.

8.1.53 用细导线做成一个半径为 $a$ 的圆环, 其电阻为 $R$ ; 另一根长为 $2a$ 的导线, 两端分别接在环上 $P, Q$ 两点, $\widehat{PQ}$ 为四分之一圆周, 导线折成直角, 中点 $O$ 在圆心, 如图 8.1.53(1) 所示. 这环内有磁感强度为 $B$ 的均匀磁场, 且 $B$ 与圆面垂直并向内, 而环外则无磁场. 当 $B$ 的大小以速率 $\dot{B}$ 增大时, 试求导线 $PO$ 中的电流.

【解】设导线 $POQ$ 的电阻为 $r, PO$ 中的电流为 $i$ , 四分之三圆弧中的电流为 $I$ , 如图8.1.53(2)所示, 则由基尔霍夫电路定律得

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/0b6a848919ada9bdefd8ce76a0eaac2cd5eeec998aa45e06e0d070bdc22dce9f.jpg)



图8.1.53(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/6424b4217cf0c91b0793ab9a7a44a0be162830d7387824e5232ee6ab0a5eb2bd.jpg)



图8.1.53(2)


$$
\frac {3}{4} R I + r i = \frac {3}{4} \pi a ^ {2} \dot {B}\tag{1}
$$

$$
\frac {1}{4} R (I - i) - r i = \frac {1}{4} \pi a ^ {2} \dot {B}\tag{2}
$$

两式相加得

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/938ae578b86779db5bfddb5ea250becf1461e819e6e2e5adae621a006e7c43ab.jpg)


$$
R I - \frac {1}{4} R i = \pi a ^ {2} B\tag{3}
$$

由式(1)、(3)解得

$$
i = 0\tag{4}
$$


图8.1.54


8.1.54 一很长的直导线载有交流电流 $I = I_0 \sin \omega t$ ，它旁边有一长方形线圈ABCD，长为 $l$ ，宽为 $b - a$ ，线圈和导线在同一平面内，其长边与导线平行，如图8.1.54所示。试求：(1)穿过回路ABCD的磁通量 $\Phi$ ；(2)回路ABCD中的感应电动势 $\varepsilon$ 。

$$
\begin{array}{r l} & {\text {【解】}} \\ & {(1) \Phi = \int_ {a} ^ {b} B l \mathrm{d} r = \int_ {a} ^ {b} \frac {\mu_ {0} I _ {l}}{2 \pi r} l \mathrm{d} r = \frac {\mu_ {0} I _ {0} l \sin \omega t}{2 \pi} \int_ {a} ^ {b} \frac {\mathrm{d} r}{r} = \frac {\mu_ {0} I _ {0} l}{2 \pi} \left(\ln \frac {b}{a}\right) \sin \omega t} \\ & {(2) \varepsilon = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {\mu_ {0} I _ {0} \omega l}{2 \pi} \left(\ln \frac {b}{a}\right) \cos \omega t} \end{array}
$$

8.1.55 两条很长的平行输电线, 相距为 $l$ , 载有大小相等而方向相反的电流 $I = I_0 \cos \omega t$ ; 旁边有一长为 $a$ 、宽为 $b$ 的矩形线圈, 它们在同一平面内, 长边与输电线平行, 到最近一条的距离为 $d$ , 如图 8.1.55 所示. 试求线圈中的感应电动势 $\varepsilon$ .

【解】先求通过线圈的磁通量

$$
\begin{array}{r l} \mathrm{d} \Phi & = B \cdot \mathrm{d} S = B \mathrm{d} S = \frac {\mu_ {0} I _ {0} \cos \omega t}{2 \pi} \left(\frac {1}{r _ {1}} - \frac {1}{r _ {2}}\right) a \mathrm{d} r \\ \Phi & = \frac {\mu_ {0} a I _ {0} \cos \omega t}{2 \pi} \left[ \int_ {d} ^ {d + b} \frac {\mathrm{d} r _ {1}}{r _ {1}} - \int_ {l + d} ^ {l - d + b} \frac {\mathrm{d} r _ {2}}{r _ {2}} \right] \\ & = \frac {\mu_ {0} a I _ {0} \cos \omega t}{2 \pi} \ln \frac {(d + b) (l + d)}{(l + d + b) d} \end{array}\tag{1}
$$

(2) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/2c904738233d8b1fe0c8120564e2a68e4cad12aafa37ad0237c1eac58ad9dab5.jpg)


再求感应电动势

图8.1.55

$$
\xi = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = \frac {\mu_ {0} I _ {0} \omega a}{2 \pi} \ln \frac {(d + b) (l + d)}{(l + b + d) d} \sin \omega t\tag{3}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/b5acfbf28897d67278f66127f952c40e79914bc96679812ee5aa4d2871320f8a.jpg)


8.1.56 一横截面积为 $S = 20\mathrm{cm}^2$ 的空心螺绕环，每厘米上绕有50匝线圈；环外绕有 $N = 5$ 匝的副线圈，副线圈与电流计G串联，构成一个电阻为 $r = 2.0\Omega$ 的闭合回路，如图8.1.56所示.今改变 $R$ 使螺绕环中的电流 $i$ 每秒减少20A.试求副线圈中的感应电动势 $\varepsilon$ 和感应电流 $I$ 


图8.1.56


【解】通过副线圈的磁链为

$$
\Psi = N \Phi = N B S = N \mu_ {0} n i S = \mu_ {0} N n S i\tag{1}
$$

所以

$$
\begin{array}{r l} & {\mathcal {E} = - \frac {\mathrm{d} \Psi}{\mathrm{d} t} = \mu_ {0} N n S \left(- \frac {\mathrm{d} i}{\mathrm{d} t}\right)} \\ & {\quad = 4 \pi \times 1 0 ^ {- 7} \times 5 \times 5 0 \times 1 0 ^ {2} \times 2 0 \times 1 0 ^ {- 4} \times 2 0} \\ & {\quad = 4 \pi \times 1 0 ^ {- 4} = 1. 3 \times 1 0 ^ {- 3} (\mathrm{V})} \\ & {I = \frac {\mathcal {E}}{r} = \frac {4 \pi \times 1 0 ^ {- 4}}{2 . 0} = 6. 3 \times 1 0 ^ {- 4} (\mathrm{A})} \end{array}\tag{2}
$$

(3) 

8.1.57 一电子计算机里的存储元件是用矩磁材料(磁滞回线接近矩形的铁氧体)作成的小圆环,横截面积为 $0.15 \times 0.30 \mathrm{~mm}^2$ , 如图8.1.57(1)所示. 回路1中的电流 $I$ 使圆环由原来的剩磁状态 $B_r$ 翻转到另一剩磁状态 $-B_r[$ 图8.1.57(2)]. 已知 $B_r = 0.17 \mathrm{T}$ , 翻时间为 $\Delta t = 0.45 \mu \mathrm{s}$ . 试求回路2中感生电动势的大小.

【解】因回路2有两匝，故其中感生电动势的大小为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/d676af5c3454293555ff6087b2f1a162837f44cdbb703a77c19fb5227650c768.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/13be4c8328d5ebdfac29d884f76a445cca0ddff872f2c94e91ac0e8c976a62d0.jpg)



图8.1.57



(2)


$$
\begin{array}{r l} \delta = & \left| \frac {\Delta \Psi}{\Delta t} \right| = 2 \left| \frac {\Delta \Phi}{\Delta t} \right| = 2 S \left| \frac {\Delta B}{\Delta t} \right| = 2 S \frac {[ B _ {r} - (- B _ {r}) ]}{\Delta t} \\ = & \frac {4 S B _ {r}}{\Delta t} = \frac {4 \times 0 . 1 5 \times 0 . 3 0 \times 1 0 ^ {- 6} \times 0 . 1 7}{0 . 4 5 \times 1 0 ^ {- 6}} \\ = & 6. 8 \times 1 0 ^ {- 2} (\mathrm{V}) \end{array}
$$

8.1.58 一闭合线圈共有 N 匝,电阻为 R.试证明:当通过这线圈的磁通量改变 $\Delta\Phi$ 时,线圈内流过的电荷量为 $\Delta q=\frac{N\Delta\Phi}{R}$ .

【证】磁通量发生变化时,线圈中的感应电动势为

$$
\xi = - \frac {\mathrm{d} \Psi}{\mathrm{d} t} = - N \frac {\mathrm{d} \Phi}{\mathrm{d} t}\tag{1}
$$

这时线圈中的电流为

$$
i = \frac {\mathrm{d} q}{\mathrm{d} t} = \frac {\mathcal {E}}{R} = - \frac {N}{R} \frac {\mathrm{d} \Phi}{\mathrm{d} t}\tag{2}
$$

所以

$$
\mathrm{d} q = - \frac {N}{R} \mathrm{d} \Phi\tag{3}
$$

只考虑大小,故得

$$
\Delta q = \frac {N \Delta \Phi}{R}\tag{4}
$$

8.1.59 图 8.1.59 是测量螺线管内磁场的一种装置. 将一个很小的线圈放在

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/85472ef61cff24f42628a11df0e8c185f12f2f616eaa1dbc38f57d1e0c4cd67d.jpg)



图8.1.59


待测处, 这线圈与测量电荷量的冲击电流计 G 串联. 当用反向开关 K 使螺线管的电流反向时, 测量线圈中就产生感应电动势, 从而产生电荷量 $\Delta q$ 的迁移; 由 G 测出 $\Delta q$ , 就可以算出测量线圈所在处磁感强度的大小 B 来. 已知测量线圈有 2000 匝, 它的直径为 2.5cm, 它和 G 串联回路的电阻为 1000Ω, 在 K 反向时测得 $\Delta q = 2.5 \times 10^{-7}$ 库仑. 试求被测处 B 的值.

【解】设测量线圈的横截面积为 S，匝数为 N，它与 G 的回路电阻为 R，电流为 i，则有

$$
i = \frac {\mathrm{d} q}{\mathrm{d} t} = \frac {\mathcal {E}}{R} = - \frac {N}{R} \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {N S}{R} \frac {\mathrm{d} B}{\mathrm{d} t}\tag{1}
$$

所以

$$
\mathrm{d} q = - \frac {N S}{R} \mathrm{d} B\tag{2}
$$

因螺线管的电流反向，B跟着反向，故由式(2)得

$$
\int_ {0} ^ {\Delta q} \mathrm{d} q = \Delta q = - \frac {N S}{R} (- B - B) = \frac {2 N S B}{R}\tag{3}
$$

解出 $B$ 并代入数据便得

$$
B = \frac {R \Delta q}{2 N S} = \frac {1 0 0 0 \times 2 . 5 \times 1 0 ^ {- 7}}{2 \times 2 0 0 0 \times \pi \times \left(\frac {2 . 5 \times 1 0 ^ {- 2}}{2}\right) ^ {2}} = 1. 3 \times 1 0 ^ {- 4} (\mathrm{T})\tag{4}
$$

8.1.60 横截面直径为 $d$ 的无限长直螺线管，单位长度的匝数为 $n$ ，当它的导线中的电流按 $I = kt$ （ $k$ 为常数）的规律增大时，试求下列三处感应电场强度的大小：(1)管内轴线上；(2)管内离轴线为 $r$ 处；(3)管外离轴线为 $R$ 处.

【解】（1）无限长直载流螺线管内的磁场是均匀磁场，磁感强度为[参见前面5.2.20题]

$$
\boldsymbol {B} = \mu_ {0} n I e _ {I}\tag{1}
$$

式中 $e_{I}$ 为电流 I 的右旋进方向上的单位矢量.

(2) 在管内离轴线为 r 处，设感应电场强度为 $E_{i}$ ，则由对称性有

$$
\oint \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = E _ {i} \cdot 2 \pi r = \left| - \frac {\mathrm{d} \Phi}{\mathrm{d} t} \right| = \frac {\mathrm{d}}{\mathrm{d} t} (\pi r ^ {2} \mu_ {0} n k t) = \pi r ^ {2} \mu_ {0} n k\tag{2}
$$

故得 $E_{i}$ 的大小为

$$
E _ {i} = \frac {1}{2} \mu_ {0} n k r\tag{3}
$$

由式(3)得轴线上的 $E_{i}$ 为

$$
E _ {i} = 0 (\text { 轴   线   上 })\tag{4}
$$

(3)在管外,由于电流在轴线方向上的分量很小[参见前面5.2.18题],故略去,于是得管外的磁感强度为零[参见前面5.2.17题的式(8)].在管外离轴线为R处,设感应电场强度为 $E_{i}$ ,则根据对称性有

$$
\oint \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = E _ {i} \cdot 2 \pi R = \left| - \frac {\mathrm{d} \Phi}{\mathrm{d} t} \right| = \frac {\mathrm{d}}{\mathrm{d} t} \left[ \pi \left(\frac {d}{2}\right) ^ {2} \mu_ {0} n k t \right] = \frac {1}{4} \pi \mu_ {0} n k d ^ {2}\tag{5}
$$

故得 $\pmb{E}_i$ 的大小为

$$
E _ {i} = \frac {\mu_ {0} n k d ^ {2}}{8 R}\tag{6}
$$

8.1.61 在圆柱形空间里有磁感强度为 B 的均匀磁场, B 平行于圆柱轴线, B 的大小 B 随时间 t 的变化关系为 $B = B_{0} - kt$ , 式中 $B_{0}$ 和 k 都是常量. 在这磁场里, 有一条长为 l 的直导线 ab, 位于圆柱的横截面内, 到圆柱轴线的距离为 h, 如图 8.1.61(1) 所示. 试求这段导线里的感生电动势.

【解】设感应电场强度为 $E_{i}$ ，则离轴线为 r 处有

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/d0d077c7628bdba13f0ec50d400c83b616cfe95d6a7742f79b5cc360b29f67e9.jpg)



图8.1.61(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/bf2bae6a643b4c12bc8be756c63b1c95f3b3797d76dd4e9706f0013f6e4c8d50.jpg)



图8.1.61(2)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/36c9c0f14d35ca87e546720d9e1af5693aa398d152c1c50388cb51e8b8280bf4.jpg)



图 8.1.61(3)


$$
\oint \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = E _ {i} \cdot 2 \pi r = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {\mathrm{d} B}{\mathrm{d} t} \cdot \pi r ^ {2} = \pi r ^ {2} k\tag{1}
$$

所以

$$
E _ {i} = \frac {1}{2} k r\tag{2}
$$

由图 8.1.61(2) 可见, 导线 ab 上 dl 段的感应电动势为

$$
\mathrm{d} \xi = E _ {i} \cdot \mathrm{d} l = E _ {i} \cos \theta \mathrm{d} l = \frac {1}{2} k r \cos \theta \mathrm{d} (h \tan \theta) = \frac {1}{2} h ^ {2} k \mathrm{d} (\tan \theta)\tag{3}
$$

积分便得 ab 导线上的感应电动势为

$$
\begin{array}{r l} \varepsilon & = \frac {1}{2} h ^ {2} k \int_ {a} ^ {b} \mathrm{d} (\tan \theta) = \frac {1}{2} h ^ {2} k (\tan \theta_ {b} - \tan \theta_ {a}) \\ & = \frac {1}{2} h k (h \tan \theta_ {b} - h \tan \theta_ {a}) = \frac {1}{2} h k l \end{array}\tag{4}
$$

【别解】以导线联接 $a, b$ 两端和轴线，构成一个三角形回路 $\mathcal{O}ab$ ，如图8.1.61(3)所示。 $B$ 变化时，这个三角形回路中产生的感应电动势为

$$
\mathcal {E} = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {\mathrm{d} B}{\mathrm{d} t} S = k S = k \cdot \frac {1}{2} h l = \frac {1}{2} h k l\tag{5}
$$

根据对称性可知,感应电场强度与圆柱横截面的半径垂直,即 $E_{i}$ 与 $Oa$ 与 $Ob$ 两边都垂直,故这两边里的感生电动势分别为

$$
\mathcal {E} _ {O a} = \int_ {O} ^ {a} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = 0\tag{6}
$$

$$
\mathcal {E} _ {O b} = \int_ {O} ^ {b} \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = 0\tag{7}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/75164c48fb5c0774fae6330bf3c0f22804a87044157303b5911deb3aecfd37e5.jpg)


于是得 $ab$ 导线里的电动势为

$$
\xi_ {a b} = \xi = \frac {1}{2} h k l\tag{8}
$$


图8.1.62(1)


8.1.62 一圆柱形空间内有磁感强度为 B 的均匀磁场，其横截面的半径为 R, B 平行于轴线向外，如图 8.1.62(1) 所示。在这横截面内有一条长为 l 的直导线，其两端 a、b 在圆柱面上。当 B 的大小以速率 $\dot{B}$ 增大时，试求导线两端的电势差 $U_{ab}$ 。

【解】如图8.1.61(2)所示，当 $\pmb{B}$ 向外并增大时，它所产生的涡旋电场(感生电场) $E_{i}$ 为顺时针方向，其大小根据法拉第电磁感应定律为

$$
E _ {i} = \frac {1}{2 \pi r} \left| \frac {\mathrm{d} \Phi}{\mathrm{d} t} \right| = \frac {1}{2 \pi r} \cdot \pi r ^ {2} \dot {B} = \frac {1}{2} \dot {B} r\tag{1}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/cd4befb9d7abb3bc49fd16c598f0b0096af4e9867efaa518ae14308a9448814d.jpg)



图8.1.62(2)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/039ba8e45dc9789ad2b3fbadeccc8b3a0e699b0e353b42e375c8ac577e52b1a7.jpg)



图8.1.62(3)


导线 ab 上一段 dl 的电势差为

$$
\mathrm{d} U _ {a b} = \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = - \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = E _ {i} \cos \theta \mathrm{d} l = \frac {1}{2} \dot {B r} \cos \theta \mathrm{d} l = \frac {1}{2} \dot {B h} \mathrm{d} l\tag{2}
$$

式中

$$
h = \sqrt {R ^ {2} - l ^ {2} / 4}\tag{3}
$$

积分便得 a、b 两端的电势差为

$$
\begin{array}{r l} U _ {a b} = & U _ {a} - U _ {b} = \int_ {a} ^ {b} \frac {1}{2} \dot {B h} \mathrm{d} l = \frac {1}{2} \dot {B h} \int_ {0} ^ {l} \mathrm{d} l \\ = & \frac {1}{2} \dot {B h} l = \frac {1}{2} \dot {B l} \sqrt {R ^ {2} - l ^ {2} / 4} \end{array}\tag{4}
$$

$U_{a} > U_{b}$ 表示 $a$ 端电势高.

【别解】设想用导线将 $a, b$ 两端都沿半径联接到圆心 $O$ , 构成一个三角形闭合回路. $\pmb{B}$ 变大时, 这回路内产生的感生电动的方向如图8.1.62(3)中的 $\pmb{E}_i$ 所示, 其大小为

$$
\mathcal {E} = \left| - \frac {\mathrm{d} \Phi}{\mathrm{d} t} \right| = \dot {B} S = \frac {1}{2} \dot {B} l \sqrt {R ^ {2} - l ^ {2} / 4}\tag{5}
$$

由于对称性，aO 和 bO 两条导线中的感生电动势为零，故导线 ab 中的感生电动势便为 $\delta$ .

因此，放在这磁场中的导线 $ab$ 相当于一个电动势为 $\varepsilon$ 的电源， $a$ 端为正极， $b$ 端为负极。故得

$$
U _ {a b} = U _ {a} - U _ {b} = \mathcal {E} = \frac {1}{2} \dot {B} l \sqrt {R ^ {2} - l ^ {2} / 4}\tag{6}
$$

8.1.63 在半径为 $R$ 的圆柱形空间里有磁感强度为 $\pmb{B}$ 的均匀磁场， $\pmb{B}$ 与圆柱的轴线平行， $\pmb{B}$ 的大小随时间 $t$ 变化的规律为 $B = B_0 + kt$ ，式中 $B_0$ 和 $k$ 都是常量；圆柱外的空间里磁感强度为零。有一条长为 $2R$ 的直导线 $ab$ 在圆柱的横截面内，它的一端 $a$ 和中点 $c$ 都在圆柱面上，如图8.1.63(1)所示。试求这导线两端的电势差 $U_{ab}$ 。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/201c2b9e56cdb9b79696f0f6835e3c307bbd3c198119e32e039f06f83c7f1b1e.jpg)



图8.1.63(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/46cdedc7db5a9649967d6dc11d57410c5a1d2200078f64f1782acd0fe30e3720.jpg)



图8.1.63(2)


【解】设圆柱内外的感应电场强度分别为 $E_{i}$ 和 $E_{i}^{\prime}$ ，则由法拉第电磁感应定律有

$$
\oint \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = E _ {i} \cdot 2 \pi r = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \pi r ^ {2} \frac {\mathrm{d} B}{\mathrm{d} t} = - \pi r ^ {2} k\tag{1}
$$

所以

$$
E _ {i} = - \frac {1}{2} k r, \quad r <   R\tag{2}
$$

负号表示 $E_{i}$ 的方向在图 8.1.63(1) 中为逆时针方向.

$$
\oint \boldsymbol {E} _ {i} ^ {\prime} \cdot \mathrm{d} \boldsymbol {l} = E _ {i} ^ {\prime} \cdot 2 \pi r ^ {\prime} = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \pi R ^ {2} \frac {\mathrm{d} B}{\mathrm{d} t} = - \pi R ^ {2} k\tag{3}
$$

所以

$$
E _ {i} ^ {\prime} = - \frac {1}{2} \frac {k R ^ {2}}{r ^ {\prime}}, \quad r ^ {\prime} > R\tag{4}
$$

负号表示 $E_{i}^{\prime}$ 的方向在图 8.1.63(1) 中为逆时针方向.

$a, b$ 两端的电势差为

$$
U _ {a b} = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {a} ^ {c} (- \boldsymbol {E} _ {i} ^ {\prime}) \cdot \mathrm{d} \boldsymbol {l} + \int_ {c} ^ {b} (- \boldsymbol {E} _ {i} ^ {\prime}) \cdot \mathrm{d} \boldsymbol {l}\tag{5}
$$

由图 8.1.63(2) 可见, 其中

$$
\begin{array}{r l} \int_ {a} ^ {c} (- E _ {i}) \cdot \mathrm{d} l & = \int_ {a} ^ {c} \frac {1}{2} k r \cos \theta \mathrm{d} l = \int_ {a} ^ {c} \frac {1}{2} k \sqrt {R ^ {2} - \left(\frac {R}{2}\right) ^ {2}} \mathrm{d} l \\ & = \frac {\sqrt {3}}{4} k R \int_ {a} ^ {c} \mathrm{d} l = \frac {\sqrt {3}}{4} k R ^ {2} \end{array}\tag{6}
$$

$$
\begin{array}{r l} \int_ {c} ^ {b} (- E _ {i} ^ {\prime}) \cdot \mathrm{d} l & = \int_ {c} ^ {b} \frac {1}{2} \frac {k R ^ {2}}{r ^ {\prime}} \cos \theta^ {\prime} \mathrm{d} l = \frac {1}{2} k R ^ {2} \int_ {c} ^ {b} \frac {\cos \theta^ {\prime} \mathrm{d} l}{r ^ {\prime}} \\ & = \frac {1}{2} k R ^ {2} \int_ {c} ^ {b} \mathrm{d} \theta^ {\prime} = \frac {1}{2} k R ^ {2} (\theta_ {b} ^ {\prime} - \theta_ {c} ^ {\prime}) \\ & = \frac {1}{2} k R ^ {2} \left(\frac {\pi}{3} - \frac {\pi}{6}\right) = \frac {\pi}{1 2} k R ^ {2} \end{array}\tag{7}
$$

于是得

$$
U _ {a b} = U _ {a} - U _ {b} = U _ {a c} + U _ {c b} = \frac {\sqrt {3}}{4} k R ^ {2} + \frac {\pi}{1 2} k R ^ {2} - \frac {3 \sqrt {3} + \pi}{1 2} k R ^ {2}\tag{8}
$$

8.1.64 一半径为 $a$ 的无限长直圆筒均匀带电，电荷量的面密度为 $\sigma$ ，从 $t = 0$ 时刻由静止开始，以匀角加速度 $\alpha$ 绕它的几何轴旋转.试求 $t$ 时刻下列三处的感应电场强度：(1)轴线上的 $\pmb{E}_0$ ;(2)筒内离轴线为 $r$ 处的 $\pmb{E}_r$ ;(3)筒外离轴线为 $R$ 处的 $\pmb{E}_R$ 

【解】筒上电荷在随筒旋转时形成电流，沿轴线单位长度的电流为

$$
\frac {2 \pi a \sigma}{T} - \omega a \sigma = a \sigma a t\tag{1}
$$

这电流在筒内产生的磁感强度 B 的方向沿轴线, B 的大小为[参见前面 5.2.17 题]

$$
B = \mu_ {0} a \sigma a t\tag{2}
$$

由法拉第电磁感应定律有

$$
\oint \boldsymbol {E} _ {r} \cdot \mathrm{d} \boldsymbol {l} = E _ {r} \cdot 2 \pi r = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {\mathrm{d}}{\mathrm{d} t} (\pi r ^ {2} \cdot \mu_ {0} a \sigma \alpha t) = - \pi \mu_ {0} a \sigma \alpha r ^ {2}\tag{3}
$$

所以

$$
E _ {r} = - \frac {1}{2} \mu_ {0} a \sigma a r, \quad r <   a\tag{4}
$$

式中负号表示 $E_{r}$ 的方向与旋转方向相反.

对于筒外则有

$$
\oint \boldsymbol {E} _ {R} \cdot \mathrm{d} \boldsymbol {l} = E _ {R} \cdot 2 \pi R = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {\mathrm{d}}{\mathrm{d} t} (\pi a ^ {2} \cdot \mu_ {0} a \sigma a t) = - \pi \mu_ {0} a ^ {2} \sigma \alpha\tag{5}
$$

所以

$$
E _ {R} = - \frac {\mu_ {0} a ^ {3} \sigma \alpha}{2 R}, \quad R > a\tag{6}
$$

式中负号表示 $E_{R}$ 与旋转方向相反.

根据式(4)、(6)，并考虑方向，便得所求的感应电场强度如下：

(1) 轴线上, r = 0:

$$
E _ {0} = 0\tag{7}
$$

(2)筒内离轴线为 r 处：

$$
\boldsymbol {E} _ {r} = \frac {1}{2} \mu_ {0} a \sigma \boldsymbol {r} \times \boldsymbol {\alpha}\tag{8}
$$

式中 r 是从轴线到场点的位矢， $|r|=r$ .

(3)筒外离轴线为 R 处：

$$
\boldsymbol {E} _ {R} = \frac {\mu_ {0} a ^ {3} \sigma \boldsymbol {R} \times \boldsymbol {\alpha}}{2 R ^ {2}}\tag{9}
$$

式中 R 是从轴线到场点的位矢， $|R|=R$ .

8.1.65 半径为 r 的金属圆环, 由两个半圆弧联接而成, 一半 $aR_{1}b$ 的电阻为 $R_{1}$ , 另一半 $aR_{2}b$ 的电阻为 $R_{2}$ ; 这圆环放在有均匀磁场的圆柱形空间里, 它们的几何轴重合, 磁感强度 B 与几何轴平行并向内, 如图 8.1.65(1) 所示. (1) 设 B 的大小 B 以 $\frac{dB}{dt} = k (>0)$ 增大时, 试求 a、b 两点的电势差 $U_{ab} = U_{a} - U_{b}$ ; (2) 导体内的感应电动势的方向 (即涡旋电场 $E_{i}$ 的方向) 是否总是由低电势指向高电势?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/805491bb2e6a25ff1b0915fce50e5d6327da43a2f0e63edf48476cdbf2abdd27.jpg)



图8.1.65(1)


【解】（1）根据法拉第电磁感应定律，由 $\pmb{B}$ 的增大而产生的感应电场(涡旋电场） $\pmb{E}_i$ 在图8.1.65(1)中为逆时针方向，这 $\pmb{E}_i$ 在金属环里产生的感应电动势为

$$
\begin{array}{l} \ell = \oint \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = - \frac {\mathrm{d} \Phi}{\mathrm{d} t} = - \frac {\mathrm{d}}{\mathrm{d} t} \int \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = - \frac {\mathrm{d}}{\mathrm{d} t} (- \pi r ^ {2} \cdot B) \\ = \pi r ^ {2} \frac {\mathrm{d} B}{\mathrm{d} t} = \pi r ^ {2} k \end{array}\tag{1}
$$

它在金属环里产生的感应电流 I 与 $E_{i}$ 同方向, 其大小为

$$
I = \frac {\mathcal {E}}{R _ {1} + R _ {2}}\tag{2}
$$

对于环的 $aR_{2}b$ 半边来说，是一个内阻为 $R_{2}$ 的电源，其电动势为 $\frac{1}{2}\delta$ ；因 $\pmb{E}_i$ 是逆时针方向，即从 $b$ 经 $R_{2}$ 到 $a$ ，故 $a$ 是这电源的正极。于是 $a, b$ 两点的电势差为

$$
U _ {a b} = U _ {a} - U _ {b} = \frac {\mathcal {C}}{2} - I R _ {2}\tag{3}
$$

将式(1)、(2)代入式(3)，便得所求的电势差为

$$
U _ {a b} = U _ {a} - U _ {b} = \frac {\pi r ^ {2} k (R _ {1} - R _ {2})}{2 (R _ {1} + R _ {2})}\tag{4}
$$

(2)式(4)表明, $R_{1}<R_{2}$ 时, $U_{a}-U_{b}<0$ ,即a点的电势比b点的低.这时导体 $bR_{2}a$ 中的感应电动势的方向(即 $E_{i}$ 的方向)便由高电势指向低电势.这表明,导体内的感应电动势的方向(即 $E_{i}$ 的方向)并不总是由低电势指向高电势.

【讨论】一、也可以用 $aR_{1}b$ 半边来计算 $U_{ab}$ . 这时 $\pmb{E}_{i}$ 是从 $a$ 经 $R_{1}$ 到 $b$ , 故 $a$ 是这半边的负极. 于是 $a, b$ 两点的电势差为

$$
U _ {a b} = U _ {a} - U _ {b} = I R _ {1} - \frac {\varepsilon}{2} = \frac {\varepsilon R _ {1}}{R _ {1} + R _ {2}} - \frac {\varepsilon}{2} = \frac {\pi r ^ {2} k (R _ {1} - R _ {2})}{2 (R _ {1} + R _ {2})}\tag{5}
$$

二、圆环 $aR_{1}bR_{2}a$ 可看成是两个电源 $aR_{1}b$ 和 $bR_{2}a$ 串联而成的电路，它们的电动势相等，即 $\varepsilon_1 = \varepsilon_2 = \frac{\varepsilon}{2}$ ，它们的内阻分别为 $R_{1}$ 和 $R_{2}$ ，如图8.1.65(2)所示。

$U_{ab}=U_{a}-U_{b}$ 是电源 $\varepsilon_{2}$ (即 $bR_{2}a$ )的端电压,同时也是电源 $\varepsilon_{1}$ (即 $aR_{1}b$ )的端电压的负值. $U_{a}-U_{b}>0$ 表示电源 $bR_{2}a$ 的端电压为正,而电源 $aR_{1}b$ 的端电压为负.它表明,这时电源 $bR_{2}a$ 的电动势大于内阻 $R_{2}$ 产生的电势降,它的电动势的方向( $E_{i}$ 的方向)由低电势指向高电势;而电源 $aR_{1}b$ 则正好相反,它的电动势则小于内阻 $R_{1}$ 产生的电势降,它的电动势的方向( $E_{i}$ 的方向)由高电势指向低电势.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a3b61c0c1e2d809a3d6cd2efa415d0d21a2e19e7a045d349860e9e70a83aea91.jpg)



图 8.1.65(2)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/af9bbd1f6c84191970277d41310d7d5d62ca6fed207afae62e49e00375d406e1.jpg)



图8.1.66


8.1.66 如图 8.1.66, 一铜片可以绕 $OO'$ 轴摆动, 摆动时扫过磁场, 磁场的磁感强度 $\pmb{B}$ 与铜片表面垂直。(1) 如果铜片扫过磁场的部分是像图上那样的长齿, 则铜片的摆动同没有磁场时差不多, 要来回摆动很多次才逐渐停止; (2) 如果铜片上扫过磁场的部分不是长齿, 而是整片, 则铜片的摆动很快就会停止下来. 这种现象在仪表中常用来使运动的部件(如指针)很快停止下来. 为什么铜片的形状对摆动有影响? 试说明其道理.

【解答】整块铜片在磁场中摆动时，因切割磁力线而产生感应电流(涡流)，磁场作用在这电流上的力阻止铜片运动，所以铜片很快就会停止下来。如果铜片扫过磁场的部分是像图8.1.66那样的长齿，则齿槽阻止了涡流的形成，所以磁场阻止铜片运动的力就很小，因而铜片要摆动很多次才能停止下来。

8.1.67 汽车上有一种转速表,如图 8.1.67 所示,其中永磁铁与汽车发动机的转轴相连,当汽车行驶时,永磁铁被带动旋转;磁铁的旋转使它上面的铝盘 A 受到力矩的作用而发生偏转,铝盘的轴上装有弹簧 S 和指针 P. 当铝盘所受的力矩与弹簧的反力矩平衡时,铝盘便偏转在某个位置,这时指针 P 就指出车速的值.试说明铝盘转动的道理.

【解答】铝盘与永磁铁有相对运动时，铝盘切割磁力线产生感应电流，感应电流受永磁铁的磁场作用力(安培力)使铝盘跟随永磁铁转动.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/3172e352c03c5b20f2a6dc20be59ec5fa27be45edd2c2cdc7e8188035f477f38.jpg)


8.1.68 鼠笼式感应电动机是小功率(如几千瓦)交流电动机中最常用的一种.它的转子是在两个铜(或铝)环上,安装

图8.1.67

一些铜(或铝)条而成,形如鼠笼,可以绕它的几何轴 $OO'$ 转动,如图8.1.68(1)(a)所示.在使用时,电源来的电并不通过转子,而是通过转子外面的定子(线圈),定子中的电流在转子所在处产生一个旋转磁场,这磁场的方向与转子的轴线 $OO'$ 垂直,并且绕着 $OO'$ 旋转,如图8.1.68(1)(b)所示.在这种磁场的作用下,转子便会跟随磁场转动.试说明:(1)转子转动的道理;(2)转子的转速恒小于磁场的转速.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f73fdcc99a20fc70e4ee48ec797614fd2ad3fdc9b704dafb4e6280284af5bf76.jpg)



(a)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c89d1d6e03d7624ccf39efd07f48888524858120000e79f5d93c8f6873a900db.jpg)



(b)



图8.1.68(1)


【解答】(1)如图8.1.68(2)(a)，设 $\pmb{B}$ 正向纸面内旋转，这等于 $\pmb{B}$ 不动，铜(或铝)条向外运动所产生的效果.这时感应电动势的非静电力 $E_{i} = \pmb{v}\times \pmb{B}$ 使铜条内的感应电流 $I$ 沿 $\pmb{E}_i$ 的方向流动.磁场 $\pmb{B}$ 作用在这电流上的安培力 $\mathrm{dF} = I\mathrm{d}\boldsymbol {l}\times \boldsymbol{B}$ 其方向如图8.1.68(2)(b)所示，垂直于纸面向内，即 $\mathrm{dF}$ 的方向是向着 $\pmb{B}$ 旋转的方向.因此，转子受这安培力的作用，便跟着磁场转动.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a7691ff23a73310891b5a6bdbd2334e9e92d26df5758c32a734aad6e74342880.jpg)



(a)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/ca9559f1a0f4bd1d7c514c1a24c545e0654f1519b62d0c17c2f043db0e85e7fe.jpg)



(b)



图8.1.68(2)


(2) 只有转子的转速小于磁场的转速时, 铜条才能切割磁力线, 这时才有使转子转动的安培力. 若转子的转速达到磁场的转速, 便没有使转子转动的安培力, 这时轴上的摩擦力便会使转子减速. 因此, 转子的转速恒小于磁场的转速.

8.1.69 在竖立的铁心上绕有线圈,在它上面放一个铝环,如图 8.1.69 所示.当把线圈的两头 a 和 b 接到适当的交流电源上时,铝环便立刻跳将起来.(1)试说明铝环为什么会跳起来;(2)如果让线圈持续接通交流电源,铝环将会怎样?并说明原因.

【解答】（1）铝环电阻非常小，它里面的感应电流很大，感应电流与线圈中的电流的相位差接近 $\pi$ ，在一个周期，这两个电流的方向几乎总是相反的，因而铝环所受的安培力对一个周期的平均值是相当大的排斥力(向上的力).当这力超过铝环的重量时，铝环便跳起.

(2)这时铝环便悬浮在线圈上的一定高度处.因为铝环离线圈越远,它所受的安培力就越小.当铝环在某一高度处,安培力与重力达到平衡,铝环便悬浮在那里.这是一个很容易演示的实验.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c2fa71f9fb1423805a837805c7560be4613d60137f454e6862d080c0544b94ff.jpg)



图8.1.69


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c4c47b50ea7df3e6b2dfb13a359e180598d86dbbffc6a707cb30eb5480d28e59.jpg)



图8.1.70


8.1.70 灵敏电流计由悬挂在永磁场(磁感强度为 B)中的线圈构成,如图8.1.70所示.线圈的面积为 S,匝数为 N,电阻为 $R_{g}$ . 将电流通入线圈时,线圈便以悬丝为轴转动,转动惯量为 J,悬丝的扭转常数为 D,线圈以外的电阻为 R.(1)试列出线圈运动的微分方程;(2)试求线圈停止时偏转的角度(以通过线圈的电流 I=0 时,线圈停止的位置为零点);(3)线圈到达偏转角最快而不振荡称为中肯状态,试求使电流计处于中肯状态的条件.

【解】（1）线圈载有电流 $I$ 时，它的磁矩为 $\pmb{m} = N\mathrm{IS}\pmb{n}$ ，式中 $\pmb{n}$ 为线圈电流 $I$ 的右旋进方向（线圈法线方向）上的单位矢量。在磁场 $\pmb{B}$ 中，线圈受到的力矩为

$$
\boldsymbol {M} _ {1} = \boldsymbol {m} \times \boldsymbol {B} = N I S \boldsymbol {n} \times \boldsymbol {B}\tag{1}
$$

由于线圈是套在圆柱形铁芯上，故 $n \perp B$ ，于是得

$$
M _ {1} = N B S I\tag{2}
$$

这是使线圈转动的力矩.

当线圈偏转的角度为 $\theta$ 时，悬丝作用在线圈上的力矩为

$$
M _ {2} = - D \theta\tag{3}
$$

负号表示 $M_{2}$ 是阻止线圈偏转的力矩.

线圈在磁场中运动,它的两边要切割磁力线,会产生感应电流 i, i 在磁场 B 中所受的力矩

$M_{3}$ 阻止线圈运动, 根据式(2), 这力矩为

$$
M _ {3} = - N B S i = - N B S \frac {\delta}{R + R _ {g}}\tag{4}
$$

式中 $\varepsilon$ 是线圈两边切割磁力线产生的感应电动势：

$$
\begin{array}{r l} \dot {\varepsilon} & = 2 N \int \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} l = 2 N \int v B \mathrm{d} l = 2 N v B l = 2 N \omega r B l \\ & = N B S \omega = N B S \frac {\mathrm{d} \theta}{\mathrm{d} t} \end{array}\tag{5}
$$

代入式(4)得

$$
M _ {3} = - \frac {N ^ {2} B ^ {2} S ^ {2}}{R + R _ {g}} \frac {\mathrm{d} \theta}{\mathrm{d} t}\tag{6}
$$

于是得线圈的运动方程为

$$
J \frac {\mathrm{d} ^ {2} \theta}{\mathrm{d} t ^ {2}} = M _ {1} + M _ {2} + M _ {3} = N B S I - D \theta - \frac {N ^ {2} B ^ {2} S ^ {2}}{R + R _ {g}} \frac {\mathrm{d} \theta}{\mathrm{d} t}\tag{7}
$$

所以

$$
J \frac {\mathrm{d} ^ {2} \theta}{\mathrm{d} t ^ {2}} + \frac {N ^ {2} B ^ {2} S ^ {2}}{R + R _ {g}} \frac {\mathrm{d} \theta}{\mathrm{d} t} + D \theta = N B S I\tag{8}
$$

(2)线圈停止时, $\frac{d^{2}\theta}{dt^{2}}=0,\frac{d\theta}{dt}=0$ ,由式(4)得它的偏转角为

$$
\theta = \frac {N B S}{D} I\tag{9}
$$

(3)求中肯状态的条件 令 $\theta' = \theta - \frac{NBSI}{D}$ , 则式(8)化为

$$
\frac {\mathrm{d} ^ {2} \theta^ {\prime}}{\mathrm{d} t ^ {2}} + \frac {N ^ {2} B ^ {2} S ^ {2}}{J (R + R _ {\mathrm{g}})} \frac {\mathrm{d} \theta^ {\prime}}{\mathrm{d} t} + \frac {D}{J} \theta^ {\prime} = 0\tag{10}
$$

其特征方程为

$$
\alpha^ {2} + \frac {N ^ {2} B ^ {2} S ^ {2}}{J (R + R _ {g})} \alpha + \frac {D}{J} = 0\tag{11}
$$

当特征方程的两个根都是实根且相等时,线圈便处于中肯状态(即最快地到达偏转角而不发生振荡).于是由式(11)得

$$
\left[ \frac {N ^ {2} B ^ {2} S ^ {2}}{J (R + R _ {g})} \right] ^ {2} - 4 \frac {D}{J} = 0\tag{12}
$$

解得

$$
R + R _ {g} = \frac {N ^ {2} B ^ {2} S ^ {2}}{2 \sqrt {J D}}\tag{13}
$$

【讨论】在使用灵敏电流计时,最好让它处在中肯状态.由式(13)可见,对于一个给定的灵敏电流计来说,它的N、B、S、J、D和 $R_{g}$ 都已定,不能改变;因此,只能改变外面的电阻R,使其满足式(13),以达到中肯状态.

8.1.71 灵敏电流计在回到零点时,一般都要振荡很久才能停下来.为了防止这种现象发生,可在电流计的两个接头上接上一个阻尼电键,当灵敏电流计回到零点时,接通这个电键,它便立刻停下来.试说明其道理.

【解答】阻尼电链接通,灵敏电流计的线圈被短路,电阻立刻由无穷大变到最小,感应电流就立刻由零增加到很大,它受到磁场作用的安培力(阻力)就很大,因而电流计就立刻停下来.

8.1.72 灵敏电流计在回到零点时,一般都要振荡很久才能停下来.为了防止这种现象发生,可在电流计的线圈上套一个由较粗导线构成的闭合线圈(阻尼线圈),这样,它就不再振荡了.试说明其道理.

【解答】阻尼线圈由于电阻很小,当它随电流计的线圈在磁场中转动时,因切割磁力线而产生很大的感应电流,这电流受磁场的作用力(安培力)就很大,它阻止线圈运动,所以电流计就不振荡了.

8.1.73 利用变化的磁场所产生的感应电场来加速电子的装置叫做电子感应加速器, 它的结构如图 8.1.73 所示. 由交变电流 I 激励的电磁铁产生强磁场 B, B 的变化所产生的感应电场(涡旋电场)用来加速电子, 同时 B 本身又维持电子在环形真空室内运动. 试分析在简谐交流电 I 的一个周期里, 哪一个时间可用来加速电子.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/27fcaf5c531134c74886e667d7f5bec245f0d9cbd97257ea2a25428ca9128c07.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/027c6f0070a245be87fd85047ad656c8ed59528fbe997a3bdfa55589e64c591c.jpg)



(2) 环形真空室俯视图



图8.1.73


【解】因为激励电流 I 是简谐交流电, 故所产生的磁场也是简谐形交变磁场, 设它的磁感

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/1b7c92bfab44989cc1a0656e700d714cca06f71ecda732643f15bd82c247e94d.jpg)



图 8.1.73(3)


$$
\boldsymbol {B} = \boldsymbol {B} _ {0} \cos \omega t
$$

它所产生的感应电场 $E_{i}$ 的方向如图 8.1.73(3) 所示. 在第一个 $\frac{T}{4}$ (T 为周期) 里和第三个 $\frac{T}{4}$ 里, B 是 $E_{i}$ 的左旋进方向, 电子逆 $E_{i}$ 方向加速运动, 同时 B 作用在电子上的洛伦兹力向内, 故这两段时间均可用来加速电子.

在第二个 $\frac{T}{4}$ 里和第三个 $\frac{T}{4}$ 里， $\pmb{B}$ 是 $\pmb{E}_i$ 的右旋进方向，电

子逆 $E_{i}$ 方向加速运动时, B 作用在电子上的洛伦兹力向外, 故这两段时间均不能用来加速电子.

由于真空室内发射电子的装置只能向一个固定的方向发射电子, 故只能用第一个 $\frac{T}{4}$ 或第三个 $\frac{T}{4}$ , 而不能两者都用.

8.1.74 在一电子感应加速器中,电子加速的时间是 4.2ms. 电子轨道内磁通量的最大值为 1.8Wb.(1)试求电子沿轨道加速时,平均每绕行一圈所获得的能量;(2)设电子开始时速度为零,最后的动能为 100MeV,试问它共绕行了多少圈?(3)若轨道半径为 84cm,试问它在加速过程中共走了多少路程?

【解】（1）电子加速过程中，感应电场强度的平均值为

$$
\overline {{{{E _ {i}}}}} = \frac {1}{2 \pi R} \frac {\overline {{{{\mathrm{d} \Phi}}}}}{\mathrm{d} t} = \frac {1}{2 \pi R} \frac {\Phi_ {\max}}{t}\tag{1}
$$

式中 R 是电子轨道半径, $\Phi_{max}$ 是电子轨道内磁通量的最大值, t 是电子加速的时间.

电子加速时,平均每圈获得的能量为

$$
\begin{array}{r l} \varepsilon & = e \cdot 2 \pi R \overline {{{E _ {i}}}} = \frac {e \Phi_ {\max}}{t} = \frac {1 . 6 \times 1 0 ^ {- 1 9} \times 1 . 8}{4 . 2 \times 1 0 ^ {- 3}} \\ & = 6. 9 \times 1 0 ^ {- 1 7} (\mathrm{J}) = 4. 3 \times 1 0 ^ {2} \mathrm{eV} \end{array}\tag{2}
$$

(2)电子绕行的圈数为

$$
N = \frac {1 0 0 \times 1 0 ^ {6}}{4 . 3 \times 1 0 ^ {2}} = 2. 3 \times 1 0 ^ {5}\tag{3}
$$

(3)电子所走过的路程为

$$
\begin{array}{r l} s & = 2 \pi R N = 2 \pi \times 8 4 \times 1 0 ^ {- 2} \times 2. 3 \times 1 0 ^ {5} \\ & = 1. 2 \times 1 0 ^ {6} (\mathrm{m}) = 1. 2 \times 1 0 ^ {3} (\mathrm{km}) \end{array}\tag{4}
$$

8.1.75 电子感应加速器是利用变化的磁场 B 所产生的感应电场(涡旋电场) $E_{i}$ 来加速电子, 同时 B 本身又维持电子在固定的圆轨道上运动, 如图 8.1.75 所

示. 设开始时, $B = 0$ , 电子的初速为零; 加速后, 电子轨道处磁感强度 $\pmb{B}$ 的大小为 $B$ , 电子轨道内的平均磁感强度的大小为 $\overline{B} = \int \pmb{B} \cdot d\pmb{S} / \pi R^2$ (式中 $R$ 为电子轨道半径), 则当 $B = \frac{1}{2} \overline{B}$ 时, 电子便可在半径为 $R$ 的固定圆轨道上加速运动. 试证明上述结论.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/3d84d63665a51f9fe2d9e7972ef15634fa90b8375a87d07d00eb215d253c886e.jpg)



图8.1.75


【证】电子沿半径为 R 的圆轨道运动时, 它的动量大小为

$$
m v = e B R\tag{1}
$$

式中 m、v 和 e 分别为电子的质量、速率和电荷量的大小。磁场变化产生的感应电场为

$$
E _ {i} = \frac {1}{2 \pi R} \left(- \frac {\mathrm{d} \Phi}{\mathrm{d} t}\right)\tag{2}
$$

电子的运动方程为

$$
\frac {\mathrm{d} (m v)}{\mathrm{d} t} = - e E _ {i} = \frac {e}{2 \pi R} \frac {\mathrm{d} \Phi}{\mathrm{d} t}\tag{3}
$$

所以

$$
d (m v) = \frac {e}{2 \pi R} d \Phi\tag{4}
$$

积分并利用初始条件得

$$
m v = \frac {e}{2 \pi R} \Phi = \frac {e}{2 \pi R} \iint \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S}\tag{5}
$$

其中

$$
\frac {\iint \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S}}{\pi R ^ {2}} = \overline {{{B}}}\tag{6}
$$

所以

$$
m v = \frac {1}{2} e \overline {{{B}}} R\tag{7}
$$

比较式(1)、(8)便得

$$
B = \frac {1}{2} \overline {{{B}}}\tag{8}
$$

## §8.2 狭义相对论

8.2.1 将磁棒插入闭合线圈时, 线圈里便会产生感应电流. 以线圈为参考系 $S$ , 磁棒为参考系 $S'$ . 相对于 $S$ 系静止的观测者看来, 线圈不动而磁棒动, 磁场发生了变化, 产生了感应电场 $\pmb{E}_i$ , 从而引起感应电流. 相对于 $S'$ 系静止的观测者看来, 磁棒不动而线圈在磁棒的磁场里运动, 它里面的自由电子因受到洛伦兹力 $f = -ev \times B$ 而产生定向运动, 从而形成感应电流. 可见对于线圈里产生感应电流这同一现象, 相对于 $S$ 系静止的观测者和相对于 $S'$ 静止的观测者的看法是不同的. (1) 你认为上述两种看法哪个对? (2) 对同一现象有两种不同的看法, 这意味着什么?

【解答】（1）相对于 S 系静止的观测者来说，磁场变化产生感应电流的看法是对的；相对于 $S'$ 系静止的观测者来说，在磁场中运动的线圈内自由电子因受洛伦兹力而产生感应电流的看法是对的.

(2)这意味着, $E_{i}$ 和 $v\times B$ 之间有某种关系. 这种关系就是狭义相对论得出的电磁场的变换关系.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/0be365c4c156095279ad2028b5430f083f079b92484e021a8ffc243997b61cec.jpg)


8.2.2 设 $S'(x', y', z')$ 系以匀速 $\pmb{v} = (v, 0, 0)$ 相对于 $S(x, y, z)$ 系运动，如图8.2.2所示。一电磁场的电场强度和磁感强度在 $S(x, y, z)$ 系里测量分别为 $\overrightarrow{x}, x'\mathbf{E} = (E_x, E_y, E_z), \mathbf{B}(B_x, B_y, B_z)$ ；在 $S'(x', y', z')$ 系里测量分别为 $\mathbf{E}' = (E_x', E_y', E_z'), \mathbf{B}' = (B_x', B_y', B_z')$ 。根据狭义相对论，它们之间的变换关系为

图8.2.2

$$
\begin{array}{r l} E _ {x} ^ {\prime} = E _ {x}, & E _ {y} ^ {\prime} = \gamma (E _ {y} - v B _ {z}), \\ E _ {z} ^ {\prime} = \gamma (E _ {z} + v B _ {y}) \\ B _ {x} ^ {\prime} = B _ {x}, & B _ {y} ^ {\prime} = \gamma (B _ {y} + \frac {v}{c ^ {2}} E _ {z}), \\ B _ {z} ^ {\prime} = \gamma (B _ {z} - \frac {v}{c ^ {2}} E _ {y}) \end{array}
$$

式中 $\gamma = \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}}, c$ 为真空中的光速. 试求这个变换的逆变换.

【解】 $x$ 分量的逆变换已有，只须求 $y$ 分量和 $z$ 分量的逆变换，由题给的变换得

$$
E _ {y} ^ {\prime} + v B _ {z} ^ {\prime} = \gamma (E _ {y} - v B _ {z}) + v \gamma (B _ {z} - \frac {v}{c _ {2}} E _ {y})
$$

$$
= \gamma (1 - \frac {v ^ {2}}{c ^ {2}}) E _ {y} = \frac {1}{\gamma} E _ {y}\tag{1}
$$

所以

$$
E _ {y} - \gamma (E _ {y} ^ {\prime} + v B _ {z} ^ {\prime})\tag{2}
$$

$$
E _ {z} ^ {\prime} - v B _ {y} ^ {\prime} = \gamma (E _ {z} + v B _ {y}) - v \gamma (B _ {y} + \frac {v}{c ^ {2}} E _ {z})
$$

$$
= \gamma (1 - \frac {v ^ {2}}{c ^ {2}}) E _ {z} = \frac {1}{\gamma} E _ {z}\tag{3}
$$

所以

$$
E _ {z} = \gamma (E _ {z} ^ {\prime} - v B _ {y} ^ {\prime})\tag{4}
$$

$$
B _ {y} ^ {\prime} - \frac {v}{c ^ {2}} E _ {z} ^ {\prime} = \gamma (B _ {y} + \frac {v}{c ^ {2}} E _ {z}) - \frac {v}{c ^ {2}} \gamma (E _ {z} + v B _ {y})
$$

$$
= \gamma (1 - \frac {v ^ {2}}{c ^ {2}}) B _ {y} = \frac {1}{\gamma} B _ {y}\tag{5}
$$

所以

$$
B _ {y} = \gamma (B _ {y} ^ {\prime} - \frac {v}{c ^ {2}} E _ {z} ^ {\prime})\tag{6}
$$

$$
B _ {z} ^ {\prime} + \frac {v}{c ^ {2}} E _ {y} ^ {\prime} = \gamma (B _ {z} - \frac {v}{c ^ {2}} E _ {y}) + \frac {v}{c ^ {2}} \gamma (E _ {y} - v B _ {z})
$$

$$
= \gamma (1 - \frac {v ^ {2}}{c ^ {2}}) B _ {z} = \frac {1}{\gamma} B _ {z}\tag{7}
$$

所以

$$
B _ {z} = \gamma (B _ {z} ^ {\prime} + \frac {v}{c ^ {2}} E _ {y} ^ {\prime})\tag{8}
$$

于是得所求的逆变换为

$$
E _ {x} = E _ {x} ^ {\prime}, E _ {y} = \gamma \left(E _ {y} ^ {\prime} + v B _ {z} ^ {\prime}\right), E _ {z} = \gamma \left(E _ {z} ^ {\prime} - v B _ {y} ^ {\prime}\right)\tag{9}
$$

$$
B _ {x} = B _ {x} ^ {\prime}, B _ {y} = \gamma (B _ {y} ^ {\prime} - \frac {v}{c ^ {2}} E _ {z} ^ {\prime}), B _ {z} = \gamma (B _ {z} ^ {\prime} + \frac {v}{c ^ {2}} E _ {y} ^ {\prime})\tag{10}
$$

【别解】如果 $S^{\prime}(x^{\prime},y^{\prime},z^{\prime})$ 系以匀速 $-\pmb{v} = (-v,0,0)$ 相对于 $S(x,y,z)$ 系运动，则在 $S^{\prime}(x^{\prime},y^{\prime},z^{\prime})$ 系看， $S(x,y,z)$ 系便以匀速 $\pmb {v} = (v,0,0)$ 相对于 $S^{\prime}(x^{\prime},y^{\prime},z^{\prime})$ 系运动.因此，这时的正变换便应是题说的逆变换.所以在题给的变换式中，将 $\pmb{v}$ 换成 $-\pmb{v}$ ，同时将 $\pmb{E}$ 和 $\pmb{B}$ 与 $\pmb{E}'$ 和 $\pmb{B}'$ 互换，便得出逆变换为式(9)、(10).

8.2.3 在惯性系 $S(x, y, z)$ 内有均匀磁场，其磁感强度为 $\pmb{B} = (0, 0, B)$ ；另一参考系 $S'(x', y', z')$ 以匀速 $\pmb{v} = (v, 0, 0)$ 相对于 $S(x, y, z)$ 系运动，如图8.2.3所示。试求在 $S'(x', y', z')$ 系观测到的电磁场 $E'$ 和 $B'$ 。

【解】根据狭义相对论，从 $S(x,y,z)$ 到 $S'(x',y',z')$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/fa11e8714c327c2da9420ee63561d0cc7effdb4a1ad2ac5ddf841543074d6b5f.jpg)



图8.2.3


系,电磁场的变换关系为[参见前面8.2.2题]

$$
E _ {x} ^ {\prime} = E _ {x}, \quad E _ {y} ^ {\prime} = \gamma (E _ {y} - v B _ {z}), \quad E _ {z} ^ {\prime} = \gamma (E _ {z} + v B _ {y})\tag{1}
$$

$$
B _ {x} ^ {\prime} = B _ {x}, \quad B _ {y} ^ {\prime} = \gamma (B _ {y} + \frac {v}{c ^ {2}} E _ {z}), \quad B _ {z} ^ {\prime} = \gamma (B _ {z} - \frac {v}{c ^ {2}} E _ {y})\tag{2}
$$

现在题给

$$
\boldsymbol {E} = (0, 0, 0), \quad \boldsymbol {B} = (0, 0, B)\tag{3}
$$

故得

$$
\begin{array}{r l} & E _ {x} ^ {\prime} = E _ {x} = 0, E _ {y} ^ {\prime} = \gamma (0 - v B) = - \gamma v B, E _ {z} ^ {\prime} = \gamma (0 - 0) = 0 \\ & B _ {x} ^ {\prime} = B _ {x} = 0, B _ {y} ^ {\prime} = \gamma (0 - 0) = 0, B _ {z} ^ {\prime} = \gamma (B - 0) = \gamma B \end{array}
$$

即所求的电磁场为

$$
\boldsymbol {E} ^ {\prime} = (0, - \gamma v B, 0)
$$

$$
\boldsymbol {B} ^ {\prime} = (0, 0, \gamma B)\tag{4}
$$

(5) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5ec08810f8149c9bc83c30671d959ebd4bfdcaf4710c0d218e52aeeefacd196f.jpg)


8.2.4 在惯性坐标系 $S(x, y, z)$ 中，有一不随时间变化的均匀磁场 $\pmb{B} = (0, 0, B)$ . 在这磁场中，有一静长为 $l_0$ 的金属杆 $ab$ 平行于 $y$ 轴，并以匀速 $\pmb{v} = (v, 0, 0)$ 相对于 $S(x, y, z)$ 系运动，如图8.2.4所示。（1）试求杆两端的电势差 $U_{ab}$ ;（2）在跟随杆运动的坐标系 $S'(x', y', z')$ 中，试求杆两端的电势差 $U_{ab}'$ ;（3） $U_{ab}'$ 与 $U_{ab}$ 相等吗？

图8.2.4 【解】（1）在感应电场 $\pmb{E}_i = \pmb{v} \times \pmb{B}$ 的作用下，金属杆上出现电荷，这电荷产生静电场 $\pmb{E}_s$ 。平衡时， $\pmb{E}_s = -\pmb{E}_i$ 。故得杆两端的电势差为

$$
\begin{array}{r l} U _ {a t} & = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} \\ & = \int_ {a} ^ {b} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} \boldsymbol {l} \\ & = - \int_ {a} ^ {b} \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} \\ & = - v B l _ {0} \end{array}\tag{1}
$$

式中负号表示 a 端电势比 b 端低.

(2) 根据狭义相对论的电磁场变换关系[参见前面8.2.2题], $S'(x', y', z')$ 系的电场强度 $\pmb{E}'$ 的分量为

$$
E _ {x} ^ {\prime} = E _ {x} = 0\tag{2}
$$

$$
E _ {y} ^ {\prime} = \gamma (E _ {y} - v B _ {z}) = - \gamma v B\tag{3}
$$

$$
E _ {z} ^ {\prime} = \gamma (E _ {z} + v B _ {y}) = \gamma (0 + 0) = 0\tag{4}
$$

式中

$$
\gamma = \frac {1}{\sqrt {1 - \frac {v ^ {2}}{c ^ {2}}}}\tag{5}
$$

于是得 $a, b$ 两端的电势差为

$$
U _ {a b} ^ {\prime} = U _ {a} ^ {\prime} - U _ {b} ^ {\prime} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} ^ {\prime} \cdot \mathrm{d} l ^ {\prime} = \int_ {a} ^ {b} (- \gamma v B) \mathrm{d} l _ {y} ^ {\prime} = - \gamma v B l _ {0}\tag{6}
$$

(3)严格说来， $U_{ab}^{\prime}\neq U_{ab}$ .但实际上，由于 $v\ll c$ ，故在测量误差范围内， $U_{ab}^{\prime}=U_{ab}$ 

【讨论】由式(1)和式(6)可见， $U_{ab}^{\prime}$ 与 $U_{ab}$ 相差一个相对论因子式(5). 在一般情况下，物体(如金属杆)运动的速度 $v \ll c$ （真空中光速）， $\gamma$ 可当作 1. 只有在 v 接近 c 时， $\gamma$ 才明显大于 1.

8.2.5 在惯性坐标系 $S(x, y, z)$ 中，有一不随时间变化的磁场 $\pmb{B} = (0, 0, B)$ . 在这磁场中，有一静长为 $l_0$ 的金属杆 $ab$ 位于 $x - y$ 平面内，与 $x$ 轴的夹角为 $30^\circ$ ，以匀速 $\pmb{v} = (v, 0, 0)$ 相对于 $S(x, y, z)$ 系运动，如图8.2.5所示.(1)试求杆两端的电势差 $U_{ab}$ ;(2)根据狭义相对论的电磁场变换关系，试求跟随杆运动的坐标系 $S'$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/7808c4abd7396711ee888a6c804f97c9d9aa9c6b3e2edd769e3b22f0a59d1576.jpg)



图8.2.5


$(x^{\prime},y^{\prime},z^{\prime})$ 中的电场强度 $\pmb{E}^{\prime}$ ，并由 $\pmb{E}^{\prime}$ 求杆两端的电势差 $U_{ab}^{\prime}$ 

【解】

$$
\begin{array}{r l} U _ {a b} & = U _ {a} - U _ {b} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} \cdot \mathrm{d} l = \int (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} l \\ & = \int_ {a} ^ {b} (- \boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} l = - v B \cos 6 0 ^ {\circ} l _ {0} \\ & = - \frac {1}{2} v B l _ {0} \end{array}\tag{1}
$$

负号表示 a 端电势比 b 端低.

(2)根据狭义相对论的电磁场变换关系[参见前面8.2.2题], $S'(x', y', z')$ 系中的电场强度的分量分别为

$$
E _ {x} ^ {\prime} = E _ {x} = 0\tag{2}
$$

$$
E _ {y} ^ {\prime} = \gamma (E _ {y} - v B _ {z}) = - \gamma v B\tag{3}
$$

$$
E _ {z} ^ {\prime} = \gamma (E _ {z} + v B _ {y}) = \gamma (0 + 0) = 0\tag{4}
$$

式中

$$
\gamma = \frac {1}{\sqrt {1 - \frac {v ^ {2}}{c ^ {2}}}}\tag{5}
$$

所以

$$
\boldsymbol {E} ^ {\prime} = (0, - \gamma v B, 0)\tag{6}
$$

于是得杆两端的电势差为

$$
\begin{array}{r l} U _ {a b} ^ {\prime} & = U _ {a} ^ {\prime} - U _ {b} ^ {\prime} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} ^ {\prime} \cdot \mathrm{d} \boldsymbol {l} ^ {\prime} = \int_ {a} ^ {b} (- \boldsymbol {E} ^ {\prime}) \cdot \mathrm{d} \boldsymbol {l} ^ {\prime} \\ & = \int_ {0} ^ {l _ {0} \cos 6 0 ^ {\circ}} (\gamma v B \boldsymbol {e} _ {y}) \cdot \mathrm{d} \boldsymbol {l} ^ {\prime} (- \boldsymbol {e} _ {y}) = - \gamma v B l _ {0} \cos 6 0 ^ {\circ} \\ & = - \frac {1}{2} \gamma v B l _ {0} \end{array}\tag{7}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/71ca1777213dd93c2c6e27ca03c89eaeabe112119a12860fed3af9f4241cbf8a.jpg)



(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/922fbaf0240a5edb6f8d61adeede909d3d5f7ddca483282ee5f517f0cf5d11fa.jpg)



(2)



图8.2.6


8.2.6 一无穷长直导线载有稳定电流 $I$ ，一飞机正以匀速 $v$ 飞离这导线，机翼两端 $a, b$ 相距为 $l, ab$ 与导线平行，到导线的距离为 $r$ ，如图8.2.6(1)所示。(1)试求在飞机上观测，电流 $I$ 所产生的电场强度 $E'$ 以及机翼两端的电势差 $U_{ab}'$ ；(2)若飞机的飞行方向反过来，如图8.2.6(2)所示，这时在飞机上观测到的电场强度和机翼两端的

电势差各如何？

【解】（1）电流 I 在 r 处产生的磁感强度 B 的方向向图面内，其大小为

$$
B = \frac {\mu_ {0} I}{2 \pi r}\tag{1}
$$

以v的方向为x轴,电流I为y轴,则

$$
\boldsymbol {B} = (0, 0, - \frac {\mu_ {0} I}{2 \pi r})\tag{2}
$$

以导线为 $S(x,y,z)$ 系，以飞机为 $S'(x',y',z')$ 系，根据狭义相对论的电磁场变换关系[参见前面6.2.2题]，得在飞机上观测到的电场强度 $\pmb{E}'$ 的分量为

$$
E _ {x} ^ {\prime} = E _ {x} = 0\tag{3}
$$

$$
E _ {y} ^ {\prime} = \gamma (E _ {y} - v B _ {z}) = \gamma v \frac {\mu_ {0} I}{2 \pi r}\tag{4}
$$

$$
E _ {z} ^ {\prime} = \gamma (E _ {z} + v B _ {y}) = \gamma (0 + 0) = 0\tag{5}
$$

所以

$$
E ^ {\prime} = (0, \gamma v \frac {\mu_ {0} I}{2 \pi r}, 0)\tag{6}
$$

机翼两端的电势差为

$$
\begin{array}{r l} U _ {a b} ^ {\prime} & = U _ {a} ^ {\prime} - U _ {b} ^ {\prime} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} ^ {\prime} \cdot \mathrm{d} \boldsymbol {l} ^ {\prime} = \int_ {a} ^ {b} (- \boldsymbol {E} ^ {\prime}) \cdot \mathrm{d} \boldsymbol {l} ^ {\prime} \\ & = \int_ {0} ^ {l} (- \gamma v \frac {\mu_ {0} I}{2 \pi r} \boldsymbol {e} _ {y}) \cdot \mathrm{d} l ^ {\prime} (- \boldsymbol {e} _ {y}) = \int_ {0} ^ {l} \gamma v \frac {\mu_ {0} I}{2 \pi r} \mathrm{d} l ^ {\prime} \\ & = \gamma v \frac {\mu_ {0} I l}{2 \pi r} = \frac {\mu_ {0} I v l}{2 \pi r \sqrt {1 - \frac {v ^ {2}}{c ^ {2}}}} \end{array}\tag{7}
$$

(2)这时只须将式(6)中的 $v$ 换成 $-v$ ，便得在飞机上观测到的电场强度为

$$
\boldsymbol {E} ^ {\prime \prime} = (0, - \gamma v \frac {\mu_ {0} I}{2 \pi r}, 0)\tag{8}
$$

机翼两端的电势差为

$$
\begin{array}{r l} U _ {a b} ^ {\prime \prime} = & U _ {a} ^ {\prime \prime} - U _ {b} ^ {\prime \prime} = \int_ {a} ^ {b} \boldsymbol {E} _ {s} ^ {\prime \prime} \cdot \mathrm{d} \boldsymbol {l} ^ {\prime \prime} = \int_ {a} ^ {b} (- \boldsymbol {E} ^ {\prime \prime}) \cdot \mathrm{d} \boldsymbol {l} ^ {\prime \prime} \\ = & \int_ {0} ^ {l} (\gamma v \frac {\mu_ {0} I}{2 \pi r} \boldsymbol {e} _ {y}) \cdot (\mathrm{d} l ^ {\prime \prime} \boldsymbol {e} _ {y}) = \int_ {0} ^ {l} \gamma v \frac {\mu_ {0} I}{2 \pi r} \mathrm{d} l ^ {\prime \prime} \end{array}
$$

$$
= \gamma v \frac {\mu_ {0} I l}{2 \pi r} = \frac {\mu_ {0} I v l}{2 \pi r \sqrt {1 - \frac {v ^ {2}}{c ^ {2}}}}\tag{9}
$$

8.2.7 一无穷长直导线载有电流 $I$ ，另一段直导线 $AB$ 与电流 $I$ 共面，并与 $I$ 垂直， $A, B$ 两端到 $I$ 的距离分别为 $a$ 和 $b$ ，这段导线以匀速 $\pmb{v}$ 平行于电流 $I$ 运动，如图8.2.7所示。（1）试求导线两端的电势差 $U_{AB}$ ；（2）在跟随导线 $AB$ 运动的坐标系里，试求电流 $I$ 所产生的电场强度和导线两端的电势差 $U_{AB}'$ ；（3）当 $I = 5.0\mathrm{A}, a = 1.0\mathrm{m}, b = 2.0\mathrm{m}, v = 1.0\mathrm{m/s}$ 时，试求上述两种电势差的值。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/45beb65f87de68133e688d079e0f4240990c3b3afb34df7356b6a9afae630fc3.jpg)


【解】


图8.2.7


$$
\begin{array}{r l} U _ {A B} & = U _ {A} - U _ {B} = \int_ {A} ^ {B} \boldsymbol {E} _ {s} \cdot \mathrm{d} \boldsymbol {l} = \int_ {A} ^ {B} (- \boldsymbol {E} _ {i}) \cdot \mathrm{d} \boldsymbol {l} \\ & = \int_ {A} ^ {B} (- \boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} = \int_ {a} ^ {b} v B \mathrm{d} l = \int_ {a} ^ {b} v \frac {\mu_ {0} I}{2 \pi r} \mathrm{d} r \\ & = \frac {\mu_ {0} I v}{2 \pi} \ln \frac {b}{a} \end{array}\tag{1}
$$

(2)以相对于载流导线静止的参考系为 $S$ 系, 相对于导线 $AB$ 静止的参考系为 $S'$ 系, 在 $S$ 系测得的电场强度和磁感强度分别为 $\pmb{E}$ 和 $\pmb{B}$ , 在 $S'$ 系测得同一电磁场的电场强度和磁感强度分别为 $\pmb{E}'$ 和 $\pmb{B}'$ , 则根据狭义相对论, $\pmb{E}$ 和 $\pmb{B}$ 与 $\pmb{E}'$ 和 $\pmb{B}'$ 之间的变换关系为[参见本题后的讨论]

$$
\pmb {E} _ {\parallel} ^ {\prime} = \pmb {E} _ {\parallel}, \quad \pmb {E} _ {\perp} ^ {\prime} = \gamma (\pmb {E} _ {\perp} + \pmb {v} \times \pmb {B})\tag{2}
$$

$$
\pmb {B} _ {\parallel} ^ {\prime} = \pmb {B} _ {\parallel}, \quad \pmb {B} _ {\perp} ^ {\prime} = \gamma (\pmb {B} _ {\perp} - \frac {1}{c ^ {2}} \pmb {v} \times \pmb {E})\tag{3}
$$

式中

$$
\gamma = \frac {1}{\sqrt {1 - \frac {v ^ {2}}{c ^ {2}}}}\tag{4}
$$

下标Ⅱ和⊥分别表示平行于和垂直于速度v的分量.

在 S 系,电流 I 产生的电磁场为

$$
\boldsymbol {E} = 0, \quad \boldsymbol {B} = \frac {\mu_ {0} I}{2 \pi r} \boldsymbol {e}\tag{5}
$$

式中 e 为电流 I 的右手螺旋方向上的单位矢量. 由式(2)、(5)得, 在 $S'$ 系的电场强度为

$$
\boldsymbol {E} _ {\parallel} ^ {\prime} = \boldsymbol {E} _ {\parallel} = 0, \quad \boldsymbol {E} _ {\perp} ^ {\prime} = \gamma (\boldsymbol {E} _ {\perp} + \boldsymbol {v} \times \boldsymbol {B}) = \gamma \boldsymbol {v} \times \boldsymbol {B}\tag{6}
$$

导线两端的电势差为

$$
\begin{array}{r l} U _ {A B} ^ {\prime} = & U _ {A} ^ {\prime} - U _ {B} ^ {\prime} = \int_ {A} ^ {B} \boldsymbol {E} _ {s} ^ {\prime} \cdot \mathrm{d} \boldsymbol {l} ^ {\prime} = \int_ {A} ^ {B} (- \boldsymbol {E} ^ {\prime}) \cdot \mathrm{d} \boldsymbol {l} ^ {\prime} \\ = & - \int_ {A} ^ {B} \gamma \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} ^ {\prime} = \gamma v \int_ {A} ^ {B} B \mathrm{d} l ^ {\prime} = \gamma v \int_ {a} ^ {b} \frac {\mu_ {0} I}{2 \pi r} \mathrm{d} r \\ = & \gamma \frac {\mu_ {0} I v}{2 \pi} \ln \frac {b}{a} \end{array}\tag{7}
$$

(3) 将数据分别代入式(1)和式(7)得

$$
\begin{array}{r l} U _ {A B} & = \frac {4 \pi \times 1 0 ^ {- 7} \times 5 . 0 \times 1 . 0}{2 \pi} \ln \frac {2 . 0}{1 . 0} = 6. 9 \times 1 0 ^ {- 7} (\mathrm{V}) \\ U _ {A B} ^ {\prime} & = \frac {1}{\sqrt {1 - \left(\frac {1 . 0}{3 \times 1 0 ^ {8}}\right) ^ {2}}} \times \frac {4 \pi \times 1 0 ^ {- 7} \times 5 . 0 \times 1 . 0}{2 \pi} \ln \frac {2 . 0}{1 . 0} \\ & = 6. 9 \times 1 0 ^ {- 7} (\mathrm{V}) \end{array}\tag{8}
$$

(9) 

【讨论】设坐标系 $S'(x', y', z')$ 以匀速

$$
\boldsymbol {v} = (v, 0, 0) = v \boldsymbol {e} _ {x}\tag{10}
$$

相对于惯性系 $S(x,y,z)$ 运动, 则两系间电磁场的分量的变换关系为

$$
E _ {x} ^ {\prime} = E _ {x}, \quad E _ {y} ^ {\prime} = \gamma (E _ {y} - v B _ {z}), \quad E _ {z} ^ {\prime} = \gamma (E _ {z} + v B _ {y})\tag{11}
$$

$$
B _ {x} ^ {\prime} = B _ {x}, \quad B _ {y} ^ {\prime} = \gamma (B _ {y} + \frac {v}{c ^ {2}} E _ {z}), \quad B _ {z} ^ {\prime} = \gamma (B _ {z} - \frac {v}{c ^ {2}} E _ {y})\tag{12}
$$

这是爱因斯坦在1905年发表的、建立狭义相对论的论文《论运动物体的电动力学》中得出的基本关系式.由式(11)可导出式(2)，由式(12)可导出式(3)，如下：由式(10)和式(11)有

$$
\begin{array}{r l} & {\pmb {E} _ {\parallel} ^ {\prime} = E _ {x} ^ {\prime} \pmb {e} _ {x} = E _ {r} \pmb {e} _ {r} = \pmb {E} _ {\parallel}} \\ & {\pmb {E} _ {\perp} ^ {\prime} = E _ {y} ^ {\prime} \pmb {e} _ {y} + E _ {z} ^ {\prime} \pmb {e} _ {z} = \gamma [ (E _ {y} - v B _ {z}) \pmb {e} _ {y} + (E _ {z} + v B _ {y}) \pmb {e} _ {z} ]} \\ & {\quad = \gamma [ E _ {y} \pmb {e} _ {y} + E _ {z} \pmb {e} _ {z} + v (B _ {y} \pmb {e} _ {z} - B _ {z} \pmb {e} _ {y}) ]} \end{array}\tag{13}
$$

(14) 

因为

$$
\boldsymbol {v} \times \boldsymbol {B} = v \boldsymbol {e} _ {x} \times (B _ {x} \boldsymbol {e} _ {x} + B _ {y} \boldsymbol {e} _ {y} + B _ {z} \boldsymbol {e} _ {z})
$$

$$
= v (B _ {y} \boldsymbol {e} _ {z} - B _ {z} \boldsymbol {e} _ {y})\tag{15}
$$

所以

$$
\pmb {E} _ {\perp} ^ {\prime} = \gamma (\pmb {E} _ {\perp} + \pmb {v} \times \pmb {B})\tag{16}
$$

读者可仿此自己由式(12)导出式(3).

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/73c66da6f77918945aef9265a586bb1abeb5be98985000e61f7c3d3a4c4ad51e.jpg)



图8.2.8 【解】（1）


8.2.8 一无穷长直导线载有电流 $I = 5.0\mathrm{A}$ , 旁边有一个与它共面的矩形线圈, 长边与导线平行, 如图8.2.8所示. 线圈共有 $N = 1000$ 匝, 以匀速 $v = 3.0\mathrm{m / s}$ 离开导线. 已知 $a = 10\mathrm{cm}, l = b = 20\mathrm{cm}$ . (1)试求线圈里的感应电动势 $\mathcal{E}$ ; (2)以线圈为参照系 $S'$ , 试求导线中的电流 $I$ 在 $S'$ 系里产生的电场 $E'$ , 从而由 $E'$ 求线圈中的电动势 $\mathcal{E}'$ .

$$
\begin{array}{r l} \mathcal {E} & = N \oint \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} = N \oint \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} \\ & = N v B _ {a} l - N v B _ {b} l = N v l \frac {\mu_ {0} I}{2 \pi} (\frac {1}{a} - \frac {1}{b}) \\ & = 1 0 0 0 \times 3. 0 \times 2 0 \times 1 0 ^ {- 2} \end{array}
$$

$$
\begin{array}{r l} & \times \frac {4 \pi \times 1 0 ^ {- 7} \times 5 . 0}{2 \pi} \times (\frac {1 0 0}{1 0} - \frac {1 0 0}{2 0}) \\ & = 3. 0 \times 1 0 ^ {- 3} (\mathrm{V}) \end{array}\tag{1}
$$

(2)在相对于导线静止的参考系(S)中,电磁场为

$$
\boldsymbol {E} = 0, \quad \boldsymbol {B} = \frac {\mu_ {0} I}{2 \pi r} \boldsymbol {e}\tag{2}
$$

式中 e 为电流 I 的右手螺旋方向上的单位矢量. 在相对于线圈静止的参考系 $(S')$ 中, 根据狭义相对论的电磁场变换关系[参见前 8.2.7 题的式(2)], 电场强度为

$$
\boldsymbol {E} _ {\parallel} ^ {\prime} = \boldsymbol {E} _ {\parallel} = 0, \quad \boldsymbol {E} _ {\perp} ^ {\prime} = \gamma (\boldsymbol {E} _ {\perp} + \boldsymbol {v} \times \boldsymbol {B}) = \gamma \boldsymbol {v} \times \boldsymbol {B}\tag{3}
$$

于是得所求的电动势为

$$
\begin{array}{r l} \mathcal {E} ^ {\prime} & = \oint \gamma \boldsymbol {v} \times \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {l} = \oint \gamma v \frac {\mu_ {0} N I}{2 \pi r} \mathrm{d} r \\ & = \gamma N v l \frac {\mu_ {0} I}{2 \pi} (\frac {1}{a} - \frac {1}{b}) = \gamma \mathcal {E} \\ & = \frac {1}{\sqrt {1 - \left(\frac {3 . 0}{3 \times 1 0 ^ {8}}\right) ^ {2}}} \times 3. 0 \times 1 0 ^ {- 3} = 3. 0 \times 1 0 ^ {- 3} (\mathrm{V}) \end{array}\tag{4}
$$

8.2.9 一磁偶极矩为 $p_{m}$ 的小磁棒产生的磁场为

$$
\begin{array}{c} B _ {r} = \frac {p _ {\mathrm{m}} \cos \theta}{2 \pi r ^ {3}} \\ B _ {\theta} = \frac {p _ {\mathrm{m}} \sin \theta}{4 \pi r ^ {3}} \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/7216734a406aa7d7d4b3be6f6324dcd34aea0a5a01c1f2dc11c8c2ea50373f31.jpg)



图8.2.9(1)


离小磁棒为 $b$ 处有一半径为 $a$ 的导线圈，其轴线与小磁棒重合，以匀速 $\pmb{v}$ 沿轴线运动，如图8.2.9(1)所示.(1)试求导线圈中的感应电动势 $\mathcal{E}$ ；(2)在相对于导线圈静止的坐标系 $S'$ 中，试求小磁棒所产生的电场强度 $\pmb{E}'$ ，并由 $\pmb{E}'$ 求导线圈中的感应电动势 $\mathcal{E}'$ .

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e8573784011955ba39c17c719fa1ebdccad2da81c287eb6dd7030f4a31dbce92.jpg)


【解】(1)导线圈中的感应电动势为


图 8.2.9(2)


$$
\begin{array}{r l} \mathcal {E} & = \oint \boldsymbol {E} _ {i} \cdot \mathrm{d} \boldsymbol {l} \\ & = \oint (\boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} \\ & = \oint \boldsymbol {v} \times (\boldsymbol {B} _ {r} + \boldsymbol {B} _ {\theta}) \cdot \mathrm{d} \boldsymbol {l} \end{array}\tag{1}
$$

由图8.2.9(2)可见，

(2) 

$$
\begin{array}{r l} (\boldsymbol {v} \times \boldsymbol {B} _ {r}) \cdot \mathrm{d} \boldsymbol {l} & = v \sin \theta \mathrm{d} l \\ (\boldsymbol {v} \times \boldsymbol {B} _ {\theta}) \cdot \mathrm{d} \boldsymbol {l} & = v \sin (\theta + 9 0 ^ {\circ}) \mathrm{d} l = v \cos \theta \mathrm{d} l \\ \mathcal {E} & = \oint v (B _ {r} \sin \theta + B _ {\theta} \cos \theta) \mathrm{d} l \end{array}\tag{3}
$$

所以

$$
\begin{array}{l} = \oint v \left(\frac {p _ {m} \sin \theta \cos \theta}{2 \pi r ^ {3}} + \frac {p _ {m} \sin \theta \cos \theta}{4 \pi r ^ {3}}\right) d l \\ = \oint \frac {3 p _ {m} \sin \theta \cos \theta v}{4 \pi (a ^ {2} + b ^ {2}) ^ {3 / 2}} d l \\ = \frac {3 p _ {m} \sin \theta \cos \theta v}{4 \pi (a ^ {2} + b ^ {2}) ^ {3 / 2}} \cdot 2 \pi a \\ = \frac {3 p _ {m} a ^ {2} b v}{2 (a ^ {2} + b ^ {2}) ^ {5 / 2}} \end{array}\tag{4}
$$

(2)在相对于磁棒静止的参考系 S 中,电磁场为

$$
\boldsymbol {E} = 0, \quad \boldsymbol {B} = \boldsymbol {B} _ {r} + \boldsymbol {B} _ {\theta}\tag{5}
$$

根据狭义相对论的电磁场变换关系[参见前面8.2.7题的式(2)]得,相对于线圈静止的参考系 $S'$ 中,电场强度 $E'$ 的分量为

$$
\boldsymbol {E} _ {\mid} ^ {\prime} = \boldsymbol {E} _ {\mid} = 0\tag{6}
$$

$$
\boldsymbol {E} _ {\perp} ^ {\prime} = \gamma (\boldsymbol {E} _ {\perp} + \boldsymbol {v} \times \boldsymbol {B}) = \gamma \boldsymbol {v} \times \boldsymbol {B}\tag{7}
$$

式中下标 $\parallel$ 和上分别表示电场强度的平行于和垂直于 $v$ 的分量，

$$
\gamma = \frac {1}{\sqrt {1 - v ^ {2} / c ^ {2}}}\tag{8}
$$

由 $E'$ 得所求的电动势 $\varepsilon'$ 为

$$
\begin{array}{r l} \mathcal {E} ^ {\prime} & = \oint \boldsymbol {E} ^ {\prime} \cdot \mathrm{d} \boldsymbol {l} ^ {\prime} = \gamma \oint (\boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} ^ {\prime} = \gamma \oint (\boldsymbol {v} \times \boldsymbol {B}) \cdot \mathrm{d} \boldsymbol {l} \\ & = \gamma \mathcal {E} = \gamma \frac {3 p _ {m} a ^ {2} b v}{2 (a ^ {2} + b ^ {2}) ^ {5 / 2}} \end{array}\tag{9}
$$

## § 8.3 自感和互感

8.3.1 一个自感为 $L$ 的线圈接在电路中, 电流 $I$ 自 $a$ 端流入, 从 $b$ 端流出, 如图 8.3.1(1) 所示. 由于有自感电动势 $\varepsilon_{L} = -L \frac{\mathrm{d} I}{\mathrm{d} t}$ , 故 $L$ 便是一个电动势为 $\varepsilon_{L}$ 的电源. 试问这个电源的正极是 $a$ 还是 $b$ ?

【解答】电流 I 流入处 a 为电源 $\varepsilon_{L}$ 的负极，流出处 b 为正极。说明如下。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/2f0476b85da407e6f20550fcda903df5db5949e338e72bc144936e56bef5151d.jpg)



图8.3.1(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a9fb876b1835ccf118fbd91fa3786c5b06ecac1e22ebed9345659a48517c3243.jpg)



图8.3.1(2)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/0d0da6c714327d17ccf1f9f514dea9c40d3be4117608ad35c0c29b991977e596.jpg)



图8.3.1(3)


如图8.3.1(2)，当 $I$ 减小时，感应电场 $\pmb{E}_i$ 与 $I$ 同方向，故 $a$ 为电源 $\varepsilon_{L}$ 的负极， $b$ 为正极。这

时 $\varepsilon_{L} = -L\frac{\mathrm{d}I}{\mathrm{d}t} >0$ ，与实际情况符合.

如图8.3.1(3)，当 $I$ 增大时，感应电场 $\pmb{E}_i$ 与 $I$ 反方向。这时 $a$ 为电源 $\varepsilon_{L}$ 的正极， $b$ 为负极，好像与上面所说的“电流 $I$ 流入处 $a$ 为电源 $\varepsilon_{L}$ 的负极”刚好相反。可是，这时 $\varepsilon_{L} = -L\frac{\mathrm{d}l}{\mathrm{d}t} < 0$ 。一个电动势为负的电源，其正极就是电动势为正的电源的负极。所以，这时 $b$ 实际上就是负极。

8.3.2 在长 $60\mathrm{cm}$ 、直径为 $5.0\mathrm{cm}$ 的空心纸筒上绕多少匝线圈，才能得到自感为 $6.0\times 10^{-3}\mathrm{H}$ 的线圈？

【解】根据长螺线管的自感公式

所以

$$
\begin{array}{r l} & {L = \mu_ {0} n ^ {2} V = \mu_ {0} (\frac {N}{l}) ^ {2} V = \mu_ {0} \frac {N ^ {2} S}{l}} \\ & N = \sqrt {\frac {l L}{\mu_ {0} S}} = \sqrt {\frac {6 0 \times 1 0 ^ {- 2} \times 6 . 0 \times 1 0 ^ {- 3}}{4 \pi \times 1 0 ^ {- 7} \times \pi \times (\frac {5 . 0 \times 1 0 ^ {- 2}}{2}) ^ {2}}} \\ & {\qquad = 1. 2 \times 1 0 ^ {3} (\text {匝})} \end{array}
$$

8.3.3 一纸筒长 $30\mathrm{cm}$ , 直径为 $3.0\mathrm{cm}$ , 上面绕有 500 匝线圈. (1) 试求这个线圈的自感 $L_{0}$ ; (2) 如果在这线圈内放入 $\mu_{\mathrm{r}} = 5000$ 的铁心, 试求这时的自感 $L$ .

$$
\begin{array}{r l} {\mathrm{【解】}} & {(1) L _ {0} = \mu_ {0} n ^ {2} V = \mu_ {0} (\frac {N}{l}) ^ {2} V = \mu_ {0} \frac {N ^ {2}}{l} S} \\ & {\qquad = 4 \pi \times 1 0 ^ {- 7} \times \frac {5 0 0 ^ {2}}{3 0 \times 1 0 ^ {- 2}} \times \pi \times \left(\frac {3 . 0 \times 1 0 ^ {- 2}}{2}\right) ^ {2}} \\ & {\qquad = 7. 4 \times 1 0 ^ {- 4} (\mathrm{H})} \\ {(2) L = \mu_ {r} \mu_ {0} n ^ {2} V = \mu_ {r} L _ {0} = 5 0 0 0 \times 7. 4 \times 1 0 ^ {- 4}} \\ & {\qquad = 3. 7 (\mathrm{H})} \end{array}
$$

8.3.4 一螺线管由表面绝缘的细导线密绕而成，长为 $l$ ，横截面的半径为 $R$ ，单位长度的匝数为 $n$ ，管内充满磁导率为 $\mu$ 的均匀介质.已知 $R\ll l$ .试求这螺线管的自感 $L$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5f391d951e4103b723464bc84f0f757da2eebdc097da5a9c6fef2bd674c6cc49.jpg)


【解】粗糙的近似. 因 $R \ll l$ , 故可略去边缘效应, 把管内


图8.3.4


磁场近似当作均匀磁场.这时由安培环路定理得管内的磁场强度为(设导线中电流为 I)

$$
H = n I\tag{1}
$$

磁感强度为

$$
B = \mu H = \mu n I\tag{2}
$$

磁链为

$$
\Psi = N B S - \pi \mu n ^ {2} R ^ {2} l I\tag{3}
$$

故得螺线管的自感为

$$
L = \frac {\Psi}{I} = \pi \mu n ^ {2} R ^ {2} l = \mu n ^ {2} V\tag{4}
$$

式中 $V=\pi R^{2}l$ 是螺线管的体积.

【别解】较好一些的近似

根据圆电流在轴线上产生的磁感强度的公式[参见前面5.1.20题的式(2)]，和磁感强度的叠加原理，求得载流螺线管轴线上离中心为 $x$ 处(图8.3.4)的磁感强度的大小为[参见前面5.1.29题的式(8)]

$$
B = \frac {\mu n I}{2} \left[ \frac {x + l / 2}{\sqrt {(x + l / 2) ^ {2} + R ^ {2}}} - \frac {x - l / 2}{\sqrt {(x - l / 2) ^ {2} + R ^ {2}}} \right]\tag{5}
$$

由此得 $x$ 处 $\mathrm{d}N = n\mathrm{d}x$ 匝的磁链为

$$
\begin{array}{r l} \mathrm{d} \Psi & = (\mathrm{d} N) \Phi = (\mathrm{d} N) \pi R ^ {2} B \\ & = \frac {\pi \mu n ^ {2} R ^ {2} I}{2} \left[ \frac {x + l / 2}{\sqrt {(x + l / 2) ^ {2} + R ^ {2}}} - \frac {x - l / 2}{\sqrt {(x - l / 2) ^ {2} + R ^ {2}}} \right] \mathrm{d} x \end{array}\tag{6}
$$

积分得整个载流螺线管的磁链为

$$
\begin{array}{r l} \Psi & = \frac {\pi \mu n ^ {2} R ^ {2} I}{2} \int_ {- l / 2} ^ {l / 2} \left[ \frac {x + l / 2}{\sqrt {(x + l / 2) ^ {2} + R ^ {2}}} - \frac {x - l / 2}{\sqrt {(x - l / 2) ^ {2} + R ^ {2}}} \right] d x \\ & = \frac {\pi \mu n ^ {2} R ^ {2} I}{2} \left[ \sqrt {(x + l / 2) ^ {2} + R ^ {2}} - \sqrt {(x - l / 2) ^ {2} + R ^ {2}} \right] _ {x = - l / 2} ^ {x - l / 2} \\ & = \pi \mu n ^ {2} R ^ {2} I \left[ \sqrt {l ^ {2} + R ^ {2}} - R \right] \\ & = \mu n ^ {2} V I \left[ \sqrt {1 + (\frac {R}{l}) ^ {2}} - \frac {R}{l} \right] \end{array}\tag{7}
$$

于是得螺线管的自感为

$$
L = \frac {\Psi}{I} = \mu n ^ {2} V \left[ \sqrt {1 + (\frac {R}{l}) ^ {2}} - \frac {R}{l} \right]\tag{8}
$$

【讨论】式(4)是按无限长螺线管内的磁场计算的结果. 实际螺线管长度有限, 总有边缘效应, 越靠近两端, 管内的磁场越小于式(2)给出的值. 用式(2)计算实际螺线管的磁链, 即式(3), 显然是算大了. 所以式(4)是螺线管实际自感的较粗略的近似, 它比螺线管的实际自感要大些, 螺线管越短, 大得越多. 在螺线管很短或匝数很少时, 式(4)就不能用.

式(8)则是较好一些的近似,较好一些,是因为它考虑了沿轴线各处的 B 值不同.但是,式(8)也只是螺线管的近似值,而不是准确值.因为它没有考虑:螺线管的电流(i)不是圆电流而是螺旋形电流;(ii)不是连续电流而是一匝匝的分立电流;(iii)在管内横截面上产生的磁感强度 B 与到轴线的距离有关.要计算一个螺线管自感的准确值,必须考虑上述这些因素,而这并不是一件容易的事.所幸的是,载流螺线管的磁场与按连续分布的圆电流算出的磁场差别并不大[参见前面 5.2.20 题的讨论],因而按它推导出式(4)或式(8),虽然都是近似式,但都是可用的式子.

由前面的计算可以看出,螺线管较长,横截面积较小,绕的导线细而密,式(4)或式(8)就较接近螺线管自感的值.反之,如果螺线管较短,或横截面积较大,或绕的导线粗而疏,则式(4)或式(8)就与螺线管自感的值相差较大.

在实际问题里,可以用式(4)或式(8)估算螺线管自感的近似值,以作参考.如果需要比较准确的值,可以用实验测出.

8.3.5 在磁导率为 $\mu$ 的圆柱形磁介质上, 用表面绝缘的细导线绕两个线圈: 原线圈 $N_{1}$ 匝, 副线圈 $N_{2}$ 匝, 它们的长度都是 $l$ , 横截面积都是 $S$ , 如图 8.3.5 所示. 设 $\sqrt{S} \ll l$ , 略去边缘效应. 试求: (1) 两线圈各自的自感 $L_{1}$ 和 $L_{2}$ ; (2) 两线圈之间的互感 $M$ ; (3) $M$ 与 $L_{1}$ 和 $L_{2}$ 的关系.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/793b4216ee1fcc7265e448350378ea734a73b50b225c187699d037fead51a724.jpg)



图8.3.5


【解】（1）因略去边缘效应，故当原线圈载有电流 $I_{1}$ 时，管中的磁感强度便为

$$
B _ {1} = \mu H _ {1} = \mu \frac {N _ {1}}{l} I _ {1}\tag{1}
$$

原线圈的磁链为

$$
\Psi_ {1} = N _ {1} \Phi_ {1} = N _ {1} B _ {1} S = \mu \frac {N _ {1} ^ {2}}{l} S I _ {1}\tag{2}
$$

所以

$$
L _ {1} = \frac {\Psi_ {1}}{I _ {1}} = \mu \frac {N _ {1} ^ {2}}{l} S\tag{3}
$$

同样可得

$$
L _ {2} = \mu \frac {N _ {2} ^ {2}}{l} S\tag{4}
$$

(2)原线圈载有电流 $I_{1}$ 时,通过副线圈的磁链为

$$
\Psi_ {2 1} = N _ {2} \Phi_ {2} = N _ {2} B _ {1} S = \mu \frac {N _ {1} N _ {2}}{l} S I _ {1}\tag{5}
$$

所以

$$
M = \frac {\Psi_ {2 1}}{I _ {1}} = \mu \frac {N _ {1} N _ {2}}{l} S\tag{6}
$$

(3) $M$ 与 $L_{1}$ 和 $L_{2}$ 的关系，由式(3)、(4)、(6)得

$$
M = \sqrt {L _ {1} L _ {2}}\tag{7}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/52bd5c135b25601b5845feed258957637c0044826deaa27d3f538edb6839bc77.jpg)



图8.3.6


8.3.6 一螺线管长为 l，横截面积为 S，由 $N_{1}$ 匝表面绝缘的细导线密绕而成；在它的中部，绕有 $N_{2}$ 匝表面绝缘的导线，如图 8.3.6 所示。(1)试求这两线圈的互感 M；(2)当 $l = 1.00 \, m, S = 10 \, cm^{2}, N_{1} = 1000$ 匝， $N_{2} = 20$ 匝时，试计算 M 的值.

【解】（1）当 $N_{1}$ 匝线圈载有电流 $I_{1}$ 时，通过 $N_{2}$ 匝线圈的磁链为

$$
\Psi_ {2 1} = N _ {2} \Phi_ {2 1} = N _ {2} B _ {1} S = \mu_ {0} \frac {N _ {1} N _ {2}}{l} S I _ {1}\tag{1}
$$

所以

$$
M = \frac {\Psi_ {2 1}}{I _ {1}} = \mu_ {0} \frac {N _ {1} N _ {2}}{l} S\tag{2}
$$

(2) $M$ 的值为

$$
\begin{array}{r l} M = & \mu_ {0} \frac {N _ {1} N _ {2}}{l} S = 4 \pi \times 1 0 ^ {- 7} \times \frac {1 0 0 0 \times 2 0}{1 . 0 0} \times 1 0 \times 1 0 ^ {- 4} \\ & = 2. 5 \times 1 0 ^ {- 5} (\mathrm{H}) \end{array}\tag{3}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f965ac69e6c38aa39ad12d5cd24e44322b7f4ce9a35a72f69eb662235e751a77.jpg)



图8.3.7


8.3.7 两螺线管共轴, 长度都是 $l$ , 里面螺线管的半径为 $a_1$ , 匝数为 $N_1$ ; 外面螺线管的半径为 $a_2 (>a_1)$ , 匝数为 $N_2$ , 如图 8.3.7 所示. 略去边缘效应, 试求这两螺线管的自感与它们的互感之间的关系.

【解】因为略去边缘效应,故当里面螺线管载有电流 $I_{1}$ 时,管内的磁感强度为

$$
B _ {1} = \mu_ {0} n _ {1} I _ {1} = \mu_ {0} \frac {N _ {1}}{l} I _ {1}\tag{1}
$$

磁链为

$$
\Psi_ {1} = N _ {1} \Phi_ {1} = N _ {1} B _ {1} S _ {1} = \frac {\pi \mu_ {0} N _ {1} ^ {2} a _ {1} ^ {2}}{l _ {1}} I _ {1}\tag{2}
$$

所以

$$
L _ {1} = \frac {\Psi_ {1}}{I _ {1}} = \frac {\pi \mu_ {0} N _ {1} ^ {2} a _ {1} ^ {2}}{l}\tag{3}
$$

同样可得外面螺线管的自感为

$$
L _ {2} = \frac {\pi \mu_ {0} N _ {2} ^ {2} a _ {2} ^ {2}}{l}\tag{4}
$$

里面螺线管载有电流 $I_{1}$ 时，通过外面螺线管的磁链为

$$
\begin{array}{r l} \Psi_ {2 1} = & N _ {2} \Phi_ {2 1} = N _ {2} B _ {1} S _ {1} = N _ {2} \mu_ {0} \frac {N _ {1}}{l} I _ {1} \cdot \pi a _ {1} ^ {2} \\ = & \frac {\pi \mu_ {0} N _ {1} N _ {2} a _ {1} ^ {2}}{l} I _ {1} \end{array}\tag{5}
$$

故得两螺线管间的互感为

$$
M = \frac {\Psi_ {2 1}}{I _ {1}} = \frac {\pi \mu_ {0} N _ {1} N _ {2} a _ {1} ^ {2}}{l}\tag{6}
$$

由式(3)、(4)、(6)得 $L_{1}, L_{2}$ 与 $M$ 之间的关系为

$$
M = \frac {a _ {1}}{a _ {2}} \sqrt {L _ {1} L _ {2}}\tag{7}
$$

【讨论】当 $a_{1}=a_{2}$ 时, 式(7)便化为前面 8.3.5 题的式(7)

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c7cae99d952fe90e66de9a994da49c90d969ade83da221c1a0f37eeb98a3f1dd.jpg)



图8.3.8


8.3.8 一螺线管长为 $l$ , 横截面积为 $S$ , 单位长度的匝数为 $n$ , 可以看成是两个长为 $\frac{l}{2}$ 的螺线管在中间串联而成, 如图 8.3.8 所示. 如按公式 $L = \mu_0 n^2 S l$ 计算, 则有

$$
L = \mu_ {0} n ^ {2} S (\frac {l}{2} + \frac {l}{2})
$$

$$
= L _ {1} + L _ {2}
$$

如按顺串联的公式计算,则为

$$
L = L _ {1} + L _ {2} + 2 M
$$

式中 M 是两个 $\frac{l}{2}$ 的螺线管之间的互感. 比较以上两式, 便会得出 M = 0 的结论.
(1)你认为这个结论是否正确？为什么？(2)问题出在哪里？

【解答】（1） $M = 0$ 的结论显然不正确，因长度都是 $\frac{l}{2}$ 的两个线圈彼此都有磁力线进入对方，故 $M \neq 0$ .

(2)问题出在, $L=\mu_{0}n^{2}Sl$ 不是准确公式,而是在 $\sqrt{S}\ll l$ 的条件下,略去边缘效应而得出的粗糙近似公式,比实际自感大一些[参见前面8.3.4题].因此,公式 $L=\mu_{0}n^{2}Sl$ 不适用于讨论上面的问题.如果用较好一些的近似公式[参见前面8.3.4题的式(8)] $L=\mu_{0}n^{2}Sl\left[\sqrt{1+(\frac{R}{l})^{2}-\frac{R}{l}}\right]$ (式中R为螺线管的半径),就不会得出M=0的结论了.

8.3.9 有一种汽车点火线圈由绕在同一轴管上的两个彼此绝缘的线圈构成, 长为 $l = 10\mathrm{cm}$ , 半径为 $r = 3.0\mathrm{cm}$ , 其中一个有 $N_{1} = 16000$ 匝, 另一个有 $N_{2} = 400$ 匝, 如图 8.3.9 所示. 当原线圈中的电流在万分之一秒里改变 3.0A 时, 试求副线圈里的感应电动势. (这电动势在电花隙中产生火花, 以点燃汽油与空气的混合物.)

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5b19a2f3695d045fbe44b320590ba29bf5c358aac5dc163a803927ce9d45ad0d.jpg)



图8.3.9


【解】两线圈间的互感为[参见前面8.3.5题的式(6)]

$$
M = \mu_ {0} \frac {N _ {1} N _ {2}}{l} S
$$

故副线圈里感应电动势的大小为

$$
\begin{array}{r l} \mid E \mid & = M \frac {\mathrm{d} I}{\mathrm{d} t} = \mu_ {0} \frac {N _ {1} N _ {2}}{l} S \frac {\mathrm{d} I}{\mathrm{d} t} \\ & = 4 \pi \times 1 0 ^ {- 7} \times \frac {1 6 0 0 0 \times 4 0 0}{1 0 \times 1 0 ^ {- 2}} \times \pi \times (3. 0 \times 1 0 ^ {- 2}) ^ {2} \times \frac {3 . 0}{1 0 ^ {- 4}} \\ & = 6. 8 \times 1 0 ^ {3} (\mathrm{V}) \end{array}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/115f52ef830fd0896a93e40640dc341786a7c9de1cc02edd7f602c5a60945aea.jpg)


8.3.10 有的电阻是用电阻丝绕成的,为了减少自感,常用双绕法,如图 8.3.10 所示.试说明为什么这样绕自感就很小.

【解答】因为这样绕,反方向的电流其磁场互相削弱,故磁通量很小,所以自感 L 就很小. [参见后面 8.3.35 题(1)]

图8.3.10 8.3.11 一螺绕环中心线的长度为 $l$ ，横截面积为 $S$ ，由 $N$ 匝表面绝缘的导线密绕而成。设 $\sqrt{S} \ll l$ ，试求它的自感 $L$ ，并计算 $l = 1.0\mathrm{m}$ ， $S = 10\mathrm{cm}^2$ ， $N = 1000$ 匝时 $L$ 的值。

【解】因 $\sqrt{S} \ll l$ ，故环的同一横截面上，磁场可近似看作是均匀的。由安培环路定理得

$$
\oint \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H l = N I\tag{1}
$$

所以

$$
B = \mu_ {0} H = \mu_ {0} \frac {N I}{l}\tag{2}
$$

磁链为

$$
\Psi - N \Phi = N B S = \frac {\mu_ {0} N ^ {2} S I}{l}\tag{3}
$$

所以

$$
L = \frac {\Psi}{I} = \frac {\mu_ {0} N ^ {2} S}{l}\tag{4}
$$

代入数据得

$$
L = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 0 0 0 ^ {2} \times 1 0 \times 1 0 ^ {- 4}}{1 . 0} = 1. 3 \times 1 0 ^ {- 3} (\mathrm{H})\tag{5}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c41a16046977842d4b813c121cfe9a3cae99c01e532f41dc3ff28fc28f6fe5c9.jpg)



图8.3.12


8.3.12 一螺绕环由 N 匝表面绝缘的细导线在纸环上密绕而成, 横截面是长为 b-a、宽为 h 的矩形, 环的内外半径分别为 a 和 b, 它的一半如图 8.3.12 所示. 试求它的自感 L, 并计算当 N=1000 匝, a=5.0cm, b=10cm, h=1.0cm 时 L 的值.

【解】以环的中心为圆心， $r$ 为半径，在环内作一圆形安培环路 $L$ ，由对称性和安培环路定理得

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = 2 \pi r H = N I\tag{1}
$$

所以

$$
B = \mu_ {0} H = \frac {\mu_ {0} N I}{2 \pi r}\tag{2}
$$

磁通量为

$$
\Phi = \iint B \mathrm{d} S = \int_ {a} ^ {b} \frac {\mu_ {0} N I}{2 \pi r} h \mathrm{d} r = \frac {\mu_ {0} N h I}{2 \pi} \ln \frac {b}{a}\tag{3}
$$

于是得所求的自感为

$$
L = \frac {\Psi}{I} = \frac {N \Phi}{I} = \frac {\mu_ {0} N ^ {2} h}{2 \pi} \ln \frac {b}{a}\tag{4}
$$

代入数值得 $L$ 的值为

$$
\begin{array}{r l} L & = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 0 0 0 ^ {2} \times 1 . 0 \times 1 0 ^ {- 2}}{2 \pi} \ln \frac {1 0}{5 . 0} \\ & = 1. 4 \times 1 0 ^ {- 3} (\mathrm{H}) \end{array}\tag{5}
$$

8.3.13 一螺绕环横截面的半径为 $a$ ，中心线的半径为 $R, R \gg a$ ，它是由表面绝缘的导线密绕而成，共有两个线圈，一个 $N_1$ 匝，另一个 $N_2$ 匝。试求：(1)两线圈的自感 $L_1$ 和 $L_2$ ；(2)两线圈间的互感 $M$ ；(3) $M$ 与 $L_1$ 和 $L_2$ 的关系。

【解】（1）设 $N_{1}$ 线圈载有电流 $I_{1}$ ，则由对称性和安培环路定理得中心线上的磁场强度为

$$
H _ {1} = \frac {N _ {1} I _ {1}}{2 \pi R}\tag{1}
$$

因为 $R \gg a$ ，故环的横截面上各处的磁场强度都可近似当作 $H_{1}$ ，于是通过环的横截面的磁通量便为

$$
\Phi_ {1} = \mu_ {0} H _ {1} S = \mu_ {0} H _ {1} \cdot \pi a ^ {2} = \frac {\mu_ {0} N _ {1} a ^ {2}}{2 R} I _ {1}\tag{2}
$$

由此得 $N_{1}$ 匝线圈的自感为

$$
L _ {1} = \frac {\Psi_ {1}}{I _ {1}} = \frac {N _ {1} \Phi_ {1}}{I _ {1}} = \frac {\mu_ {0} N _ {1} ^ {2} a ^ {2}}{2 R}\tag{3}
$$

用同样推导,可得 $N_{2}$ 匝线圈的自感为

$$
L _ {2} = \frac {\mu_ {0} N _ {2} ^ {2} a ^ {2}}{2 R}\tag{4}
$$

(2) $N_{1}$ 匝线圈中的电流 $I_{1}$ 在 $N_{2}$ 匝线圈中产生的磁链为

$$
\Psi_ {2 1} = N _ {2} B _ {1} S = N _ {2} \mu_ {0} H _ {1} S = \frac {\mu_ {0} \cdot N _ {1} \cdot N _ {2} a ^ {2}}{2 R} I _ {1}\tag{5}
$$

由此得两线圈间的互感为

$$
M = \frac {\Psi_ {2 1}}{I _ {1}} = \frac {\mu_ {0} N _ {1} N _ {2} a ^ {2}}{2 R}\tag{6}
$$

(3)由式(3)、(4)、(6)得 $L_{1}, L_{2}, M$ 的关系为

$$
M = \sqrt {L _ {1} L _ {2}}\tag{7}
$$

8.3.14 一正方形铁环, 边长为 $l$ , 横截面积为 $S$ , 磁导率为 $\mu = \mu_{\mathrm{r}} \mu_{0}$ . 已知 $\sqrt{S} \ll l, \mu_{\mathrm{r}} \gg 1$ . 在它的一边用表面绝缘的导线绕有 $N$ 匝线圈, 如图 8.3.14 所示. 试求这线圈的自感 $L_{ab}$ .

【解】设导线中的电流为 I 时，环内的磁场强度为 H，则因 $\sqrt{S} \leqslant l$ ， $\mu_{r} \gg 1$ ，故可略去边缘效应，由安培环路定理得

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/2701c0cf91400c15674a885e283e0fd8572c6727b3d6fffe2464dfbc0e56b881.jpg)


$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} l = 4 l H = N I\tag{1}
$$

图8.3.14

所以

$$
H = \frac {N I}{4 l}\tag{2}
$$

磁感强度为

$$
B = \mu H = \frac {\mu N I}{4 l}\tag{3}
$$

磁链为

$$
\Psi = N \Phi = N B S = \frac {\mu N ^ {2} S I}{4 l}\tag{4}
$$

于是得所求的自感为

$$
L _ {a b} = \frac {\Psi}{I} = \frac {\mu N ^ {2} S}{4 l}\tag{5}
$$

8.3.15 一铁心长为 $l$ ，弯成方形，在一边留有宽为 $\delta$ 的空气间隙，铁心的横截面积为 $S$ ，磁导率为 $\mu = \mu_{\mathrm{r}} \mu_0$ ；在它的一边用表面绝缘的导线绕有 $N$ 匝线圈，如图8.3.15所示。已知 $\sqrt{S} \ll l, \mu_{\mathrm{r}} \gg 1$ 。试求线圈的自感 $L_{ab}$ ，并计算 $l = 56.5 \mathrm{~cm}, S =$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/4f1490db09d0071e65d762f6fbbf638614a89bef9257970832e297ddbc3cc57a.jpg)


$3.1\mathrm{cm}^2, \delta = 1.0\mathrm{mm}, \mu_{\tau} = 500, N = 1000$ 匝时 $L_{ab}$ 的值.

【解】沿铁心中心取安培环路 L 得

$$
\oint_ {L} \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H _ {1} l + H _ {2} \delta = N I\tag{1}
$$


图8.3.15


式中 $H_{1}$ 和 $H_{2}$ 分别为铁心内和间隙内的磁场强度. 相应的磁感强度分别为

$$
B _ {1} = \mu H _ {1}, \quad B _ {2} = \mu_ {0} H _ {2}\tag{2}
$$

由于 B 的法向分量连续, 故有

$$
B _ {1} = B _ {2} = B\tag{3}
$$

由以上三式得

$$
B \left(\frac {l}{\mu} + \frac {\delta}{\mu_ {0}}\right) = N I\tag{4}
$$

因 $\sqrt{S} \ll l$ ，故铁心内的 $B$ 可看作处处相等，于是得通过线圈的磁链为

$$
\Psi = N \Phi = N B S = \frac {\mu N ^ {2} S I}{l + \mu_ {\mathrm{r}} \delta}\tag{5}
$$

于是得所求的自感为

$$
L _ {a b} = \frac {\Psi}{I} = \frac {\mu N ^ {2} S}{l + \mu_ {\tau} \delta}\tag{6}
$$

代入数据得 $L_{ab}$ 的值为

$$
\begin{array}{r l} L _ {a b} & = \frac {5 0 0 \times 4 \pi \times 1 0 ^ {- 7} \times 1 0 0 0 ^ {2} \times 3 . 1 \times 1 0 ^ {- 4}}{5 6 . 5 \times 1 0 ^ {- 2} + 5 0 0 \times 1 . 0 \times 1 0 ^ {- 3}} \\ & = 0. 1 8 (\mathrm{H}) \end{array}\tag{7}
$$

【讨论】一、式(4)也可直接用磁路定理[参见前面7.33题的式(8)]

$$
N I = \Phi \sum_ {i} \frac {l _ {i}}{\mu_ {i} S _ {i}}\tag{8}
$$

得出.

二、当 $\delta=0$ ，即铁心无空气隙时，式(6)即化为前面8.3.14题的式(5).

当磁导率很大,以致 $\mu_{r}\delta\gg l$ 时,式(6)即化为

$$
L _ {a b} = \frac {\mu_ {0} N ^ {2} S}{\delta}\tag{9}
$$

8.3.16 一空心螺绕环的自感为 $L_{0}$ , 加入铁心后自感为 $L_{1}$ , 在铁心上锯开一个很窄的断口后自感为 $L_{2}$ . 试比较 $L_{0}, L_{1}, L_{2}$ 三者的大小.

【解】由前面8.3.13题式(3)或式(4)，得空心螺绕环的自感为

$$
L _ {0} = \frac {\mu_ {0} N ^ {2} S}{l}\tag{1}
$$

式中 N、S 和 l 分别为线圈的匝数、横截面积和中心长度.

加入铁心(相对磁导率为 $\mu_{r}$ )后,自感便为

$$
L _ {1} = \frac {\mu_ {r} \mu_ {0} N ^ {2} S}{l}\tag{2}
$$

因 $\mu_r > 1$ ，故

$$
L _ {1} > L _ {0}\tag{3}
$$

在铁心上锯一个很窄(宽为 $\delta$ ) 的断口后, 根据前面 8.3.15 题的式(6), 自感为

$$
L _ {2} = \frac {\mu_ {r} \mu_ {0} N ^ {2} S}{l + \mu_ {r} \delta}\tag{4}
$$

比较式(2)、(4)可见 $L_{2} < L_{1}$ ; 比较式(1)、(4), 由 $\mu_{\mathrm{r}} \gg 1$ 和 $l \gg \delta$ 得

$$
\frac {L _ {2}}{L _ {0}} = \frac {\mu_ {\mathrm{r}} l}{l + \mu_ {\mathrm{r}} \delta} = \frac {\mu_ {\mathrm{r}}}{1 + \mu_ {\mathrm{r}} \frac {\delta}{l}} > 1\tag{5}
$$

最后得 $L_{0}, L_{1}, L_{2}$ 三者大小的关系为

$$
L _ {1} > L _ {2} > L _ {0}\tag{6}
$$

8.3.17 一螺绕环由表面绝缘的细导线在磁导率为 $\mu$ 的铁环上密绕 $N$ 匝而成, 环的平均半径为 $R$ , 横面积为 $S, \sqrt{S} \ll R$ , 如图 8.3.17 所示. 这螺绕环可以看成是两个 $\frac{N}{2}$ 匝的半环形线圈 $ac$ 和 $cb$ 串联而成. 试求这两个半环形线圈 $ac$ 和 $cb$ 之间的互感.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/3ada2e72ce882784e2df36e202d259a7e3531394f6f5f45042555c4963583bef.jpg)


【解】当 $\frac{N}{2}$ 匝线圈 $ac$ 通有电流 $I$ 时，由安培环路定理得，环内的磁场强度为

$$
H = \frac {\frac {N}{2} I}{2 \pi R} = \frac {N I}{4 \pi R}
$$

图8.3.17

(1) 

故环内的磁通量为

$$
\Phi = B S = \mu H S = \frac {\mu N S I}{4 \pi R}\tag{2}
$$

这时通过线圈 $cb$ 的磁链为

$$
\Psi = \frac {N}{2} \Phi = \frac {\mu N ^ {2} S}{8 \pi R} I\tag{3}
$$

于是得线圈 $ac$ 和 $cb$ 之间的互感为

$$
M = \frac {\Psi}{I} = \frac {\mu N ^ {2} S}{8 \pi R}\tag{4}
$$

【别解】根据前面8.3.14题的式(5)，线圈ac和cb的自感为

$$
L _ {a c} = L _ {c b} = \frac {\mu (\frac {N}{2}) ^ {2} S}{2 \pi R} = \frac {\mu N ^ {2} S}{8 \pi R}\tag{5}
$$

线圈 $ab$ 的自感为

$$
L _ {a b} = \frac {\mu N ^ {2} S}{2 \pi R}\tag{6}
$$

因线圈 $ac$ 和 $cb$ 是顺串联，故由两自感的顺串联公式[参见后面8.3.37题的式(4)]

$$
L _ {a b} = L _ {a c} + L _ {c b} + 2 M\tag{7}
$$

于是得所求的互感为

$$
\begin{array}{r l} M & = \frac {1}{2} (L _ {a b} - L _ {a c} - L _ {c b}) - \frac {1}{2} L _ {a b} - L _ {a c} \\ & = \frac {\mu N ^ {2} S}{4 \pi R} - \frac {\mu N ^ {2} S}{8 \pi R} = \frac {\mu N ^ {2} S}{8 \pi R} \end{array}\tag{8}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/bb0c142a1e211a7682e870d783ce5d8c2bb524f4a46f40a784df1e90112544dc.jpg)


8.3.18 一铁环的长度为 $l$ ，横截面积为 $S$ ，磁导率为 $\mu = \mu_{\mathrm{r}} \mu_0$ ，已知 $l \gg \sqrt{S}, \mu_{\mathrm{r}} \gg 1$ 。用表面绝缘的细导线在这铁环上绕两个线圈，一个为 $N_1$ 匝，另一个为 $N_2$ 匝，两线圈的长度相等，都是 $\frac{l}{4}$ ，如图8.3.18所示。试求这两个线圈的自感 $L_{ab}$ 和 $L_{cd}$ 以及它们之间的互感 $M$ 。

图8.3.18

【解】设线圈 $N_{1}$ 中载有电流 $I_{1}$ 时，线圈内的磁场强度为 $H_{1}$ ，则因 $l \gg \sqrt{S}, \mu_{\mathrm{r}} \gg 1$ ，故可略去边缘效应，由安培环路定理得

$$
\oint \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H _ {1} l = N _ {1} I _ {1}\tag{1}
$$

所以

$$
H _ {1} = \frac {N _ {1} I _ {1}}{l}\tag{2}
$$

$$
B _ {1} = \mu H _ {1} = \frac {\mu N _ {1} I _ {1}}{l}\tag{3}
$$

$$
\Psi_ {1} = N _ {1} B _ {1} S = \frac {\mu N _ {1} ^ {2} S}{l} I _ {1}\tag{4}
$$

故得线圈 $N_{1}$ 的自感为

$$
I _ {a b} = \frac {\Psi_ {1}}{I _ {1}} = \frac {\mu N _ {1} ^ {2} S}{l}\tag{5}
$$

同样可得线圈 $N_{2}$ 的自感为

$$
L _ {c d} = \frac {\mu N _ {2} ^ {2} S}{l}\tag{6}
$$

又 $I_{1}$ 在线圈 $N_{2}$ 中产生的磁链为

$$
\Psi_ {2 1} = N _ {2} B _ {1} S = \frac {\mu N _ {1} N _ {2} I _ {1} S}{l}\tag{7}
$$

于是得两线圈之间的互感为

$$
M = \frac {\Psi_ {2 1}}{I _ {1}} = \frac {\mu N _ {1} N _ {2} S}{l}\tag{8}
$$

8.3.19 一线圈的自感为 $L_{1}$ , 在它旁边有一个自感为 $L_{2}$ 、电阻可略去不计的线圈, 两线圈之间的互感为 $M$ , 如图 8.3.19 所示. 试证明: 如果把互感的作用也考虑在自感里, 则 $L_{1}$ 的有效自感为 $L_{1} - M^{2} / L_{2}$ .

【证】因

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c7fbdcb23065a5e87a0fceba2f6c4eb94604fd9adafa300d1f674dec60640dbe.jpg)



图8.3.19


$$
\varepsilon_ {1} = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} - M \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{1}
$$

$$
\varepsilon_ {2} = - L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} - M \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = R _ {2} I _ {2} = 0\tag{2}
$$

所以

$$
- L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} - M \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = 0
$$

$$
\frac {\mathrm{d} I _ {2}}{\mathrm{d} t} = - \frac {M}{L _ {2}} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{3}
$$

将式(3)代入式(1)得

$$
\mathcal {E} _ {1} = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + M \frac {M}{L _ {2}} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} = - (L _ {1} - \frac {M ^ {2}}{L _ {2}}) \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{4}
$$

可见线圈 $L_{1}$ 的有效自感为

$$
L _ {1 \text { eff }} = L _ {1} \quad \frac {M ^ {2}}{L _ {2}}\tag{5}
$$

【讨论】互感 M 越大, 有效自感越小; $L_{2}$ 越大, 有效自感越大. 因 $M^{2} \leqslant L_{1}L_{2}$ , 故

$$
L _ {1 \mathrm{eff}} = L _ {1} - \frac {M ^ {2}}{L _ {2}} \geqslant L _ {1} - \frac {L _ {1} L _ {2}}{L _ {2}} = 0\tag{6}
$$

8.3.20 两个平面线圈的面积分别为 $S_{1}$ 和 $S_{2}$ , 所载电流分别为 $I_{1}$ 和 $I_{2}$ , 如图8.3.20所示. 设 $I_{1}$ 所产生的磁场通过 $S_{2}$ 的磁通量为 $\Phi_{21}, I_{2}$ 产生的磁场通过 $S_{1}$ 的磁通量为 $\Phi_{12}$ . 试问当 $S_{2} = 2S_{1}$ 和 $I_{2} = I_{1}$ 时, $\Phi_{21}$ 与 $\Phi_{12}$ 哪个大些?

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/2f915f13d3e4a3febb394ef646d557145ea67b670d3cae5a61adefc26f4298ec.jpg)


【解答】一样大，即 $\Phi_{21}=\Phi_{12}$ 


图8.3.20


因 $\Phi_{21} = M_{21}I_1,\Phi_{12} = M_{12}I_2$ ，而 $M_{21} = M_{12}$ .今 $I_{2} = I_{1}$ ，故得 $\Phi_{21} = \Phi_{12}$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/10d04fe1e7654f1ad95c8eeb5c3e9238a6cefd0e4418576d661d813d2100a5e0.jpg)


8.3.21 两个相同的圆线圈共轴, 它们的半径都是 a, 匝数都是 N, 中心相距为 l, 如图 8.3.21 所示. 已知 $a \ll l$ , 试求它们之间的互感.

图8.3.21 【解】设一个线圈的电流为 $I_{1}$ ，它在另一个线圈中心产生的磁感强度 $\pmb{B}_{21}$ 的大小为[参见前面5.1.20题的式(2)]

$$
B _ {2 1} = \frac {\mu_ {0} N I _ {1} a ^ {2}}{2 (l ^ {2} + a ^ {2}) ^ {3 / 2}}\tag{1}
$$

$B_{21}$ 的方向沿轴线. 因 $a \ll l$ , 故线圈内的 $B_{21}$ 可看作近似均匀磁场, 于是得通过线圈的磁链为

$$
\Psi_ {2 1} = N \Phi_ {2 1} = N B _ {2 1} \cdot \pi a ^ {2} = \frac {\pi \mu_ {0} N ^ {2} a ^ {4} I _ {1}}{2 (l ^ {2} + a ^ {2}) ^ {3 / 2}}\tag{2}
$$

由此得两线圈之间的互感为

$$
M = \frac {\Psi_ {2 1}}{I _ {1}} = \frac {\pi \mu_ {0} N ^ {2} a ^ {4}}{2 (l ^ {2} + a ^ {2}) ^ {3 / 2}}\tag{3}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/1bdcbf8d433ca1cfa459f7cd7cd14030f2bf78257187c18dae2af8aa4bcd203f.jpg)


8.3.22 共轴的两个圆线圈, 半径分别为 $a_1$ 和 $a_2$ , 匝数分别为 $N_1$ 和 $N_2$ , 圆心相距为 $l$ , 如图 8.3.22 所示. 设 $a_2 \ll a_1$ 和 $l$ , 试求它们之间的互感 $M$ .

【解】大线圈载有电流 $I_{1}$ 时，在小线圈中心产生的磁感强度 $\pmb{B}$ 的方向沿轴线， $\pmb{B}$ 的大小为[参见前面5.1.20的式(2)]

$$
B _ {2 1} = \frac {\mu_ {0} N _ {1} I _ {1} a _ {1} ^ {2}}{2 (l ^ {2} + a _ {1} ^ {2}) ^ {3 / 2}}\tag{1}
$$

图8.3.22 因 $a_2 \ll a_1$ 和 $l$ , 故在小线圈内, 可看作是近似均匀磁场, 其磁感强度的大小为 $B_{21}$ . 于是通过小线圈的磁链为

$$
\begin{array}{r l} \Psi_ {2 1} = & N _ {2} \Phi_ {2 1} = N _ {2} B _ {2 1} \cdot \pi a _ {2} ^ {2} \\ = & \frac {\pi \mu_ {0} N _ {1} N _ {2} a _ {1} ^ {2} a _ {2} ^ {2} I _ {1}}{2 (l ^ {2} + a _ {1}) ^ {3 / 2}} \end{array}\tag{2}
$$

两线圈之间的互感为

$$
M = \frac {\Psi_ {2 1}}{I _ {1}} = \frac {\pi \mu_ {0} N _ {1} ^ {2} N _ {2} ^ {2} a _ {1} ^ {2} a _ {2} ^ {2}}{2 (l ^ {2} + a _ {1} ^ {2}) ^ {3 / 2}}\tag{3}
$$

8.3.23 一圆线圈由 n=50 匝表面绝缘的细导线绕成，圆面积为 $S=4.0cm^{2}$ ，放在另一个半径为 R=20cm 的大圆形线圈中心，两者共轴，如图 8.2.23 所示。已知大线圈由 N=100 匝表面绝缘的导线绕成。（1）试求这两线圈之间的互感 M；（2）当大线圈中的电流每秒减少 50A 时，试求小线圈中的感应电动势 $\varepsilon$ 。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f7c0b028377dfb9dd01cd0168bfabf5b796ded71dac1adfc2088c2472cf92553.jpg)


【解】（1）设大线圈的电流为 $I$ ，则由Biot-Savart定律，在中心产生的磁感强度 $\pmb{B}$ 的方向沿轴线，其大小为


图8.3.23


$$
B = \frac {\mu_ {0} N I}{4 \pi} \oint \frac {\mathrm{d} l}{R ^ {2}} = \frac {\mu_ {0} N I}{4 \pi} \frac {2 \pi R}{R ^ {2}} = \frac {\mu_ {0} N I}{2 R}\tag{1}
$$

因小线圈的半径比大线圈的小得多,故在小线圈的平面内,磁场可看作是近似均匀的.于是得通过小线圈的磁链为

$$
\Psi_ {2 1} = n B S = n \frac {\mu_ {0} N S}{2 R} I = \frac {\mu_ {0} n N S I}{2 R}\tag{2}
$$

所求互感为

$$
\begin{array}{r l} M & = \frac {\Psi_ {2 1}}{I} = \frac {\mu_ {0} n N S}{2 R} = \frac {4 \pi \times 1 0 ^ {- 7} \times 5 0 \times 1 0 0 \times 4 . 0 \times 1 0 ^ {- 4}}{2 \times 2 0 \times 1 0 ^ {- 2}} \\ & = 2 \pi \times 1 0 ^ {- 6} = 6. 3 \times 1 0 ^ {- 6} (\mathrm{H}) \end{array}\tag{3}
$$

(2) 小线圈中的感应电动势为

$$
\begin{array}{r l} \mathcal {E} & = - M \frac {\mathrm{d} I}{\mathrm{d} t} = - 2 \pi \times 1 0 ^ {- 6} \times (- 5 0) \\ & = 3. 1 \times 1 0 ^ {- 4} (\mathrm{V}) \end{array}\tag{4}
$$

8.3.24 半径为 $r$ ，匝数为 $n$ 的圆线圈，放在半径为 $R$ 、匝数为 $N$ 的大圆线圈中心，两线圈在同一平面内且轴线重合。（1）试证明：当 $R \gg r$ 时，这两线圈的互感近似为 $M = \pi \mu_0 n N r^2 / 2R$ ；（2）试用上面的结果证明：当磁矩为 $m$ 的小磁棒放在上述大线圈中心，两者轴线重合时，通过大线圈的磁链近似为 $\Psi = \mu_0 N m / 2R$ 。

【证】（1）设大线圈中的电流为 $I$ ，则根据Biot-Savart定律，中心的磁感强度 $\pmb{B}$ 的方向沿轴线，其大小为

$$
B = \frac {\mu_ {0} N I}{2 R}\tag{1}
$$

当 $r \ll R$ 时，通过小线圈的磁场可看作是近似均匀的，故通过它的磁链为

$$
\Psi = n B S = n \cdot \frac {\mu_ {0} N I}{2 R} \cdot \pi r ^ {2} = \frac {\pi \mu_ {0} n N r ^ {2}}{2 R} I\tag{2}
$$

所以

$$
M = \frac {\Psi}{I} = \frac {\pi \mu_ {0} n N r ^ {2}}{2 R}\tag{3}
$$

(2) 当小线圈中的电流为 i 时, 通过大线圈的磁链为

$$
\Psi = M i = \frac {\pi \mu_ {0} n N r ^ {2} i}{2 R} = \frac {\mu_ {0} N}{2 R} \cdot n i \pi r ^ {2} = \frac {\mu_ {0} N}{2 R} m\tag{4}
$$

式中

$$
m = n i \pi r ^ {2} = n i s\tag{5}
$$

为小线圈的磁矩. 因此, 当小线圈用磁矩为 $m$ 的小磁棒代替时, 通过大线圈的磁链为

$$
\Psi = \frac {\mu_ {0} N m}{2 R}\tag{6}
$$

8.3.25 一大圆线圈半径为 $a$ ，共有 $N$ 匝。一磁偶极矩为 $p_m$ 的小磁棒沿它的轴线抽出，在离中心为 $x$ 处时，抽出速度为 $\pmb{v}$ ，如图8.3.25所示。(1)试证明：这时在大线圈中产

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/eb1f86a385c41c9ea3bd0071c11939b5c020b203de86bf9ccba797cf66726eb2.jpg)



图8.3.25


生的感应电动势的大小近似为 $\varepsilon=\frac{3Na^{2}p_{m}xv}{2(x^{2}+a^{2})^{3/2}}$ ; (2) 设大线圈是电阻为 R 的闭合线圈, 试证明: 当小磁棒从大线圈中心移到无穷远时, 大线圈中流过的电荷量近似为 $Q=\frac{Np_{m}}{2aR}$ .

【证】(1)设大圆线圈中的电流为 $I$ ，则它在轴线上离中心为 $\pmb{x}$ 处产生的磁感强度 $\pmb{B}$ 的方向沿轴线，其大小为[参见前面5.1.20题的式(2)]

$$
B = \frac {\mu_ {0} N a ^ {2} I}{2 (x ^ {2} + a ^ {2}) ^ {3 / 2}}\tag{1}
$$

设在轴线上离中心为 $x$ 处有一同轴的、面积为 $S$ 的小线圈，则通过这小线圈的磁通量近似为

$$
\Phi = B S = \frac {\mu_ {0} N a ^ {2} S I}{2 (x ^ {2} + a ^ {2}) ^ {3 / 2}}\tag{2}
$$

于是得两线圈的互感为

$$
M = \frac {\Phi}{I} = \frac {\mu_ {0} N a ^ {2} S}{2 (x ^ {2} + a ^ {2}) ^ {3 / 2}}\tag{3}
$$

当小线圈载有电流 i 时, 它的磁偶极矩为

$$
p _ {\mathrm{m}} = \mu_ {0} i S\tag{4}
$$

这时通过大线圈的磁链便为

$$
\Psi = M i = \frac {\mu_ {0} N a ^ {2} S i}{2 (x ^ {2} + a ^ {2}) ^ {3 / 2}} = \frac {N a ^ {2} p _ {\mathrm{m}}}{2 (x ^ {2} + a ^ {2}) ^ {3 / 2}}\tag{5}
$$

因此，若用一磁偶极矩为 $p_{\mathrm{m}}$ 的小磁棒代替小线圈时，则通过大线圈的磁链仍为式(5).故当小磁棒以速度 $\upsilon$ 沿轴线向外运动时，大线圈中的感应电动势便为

$$
\begin{array}{r l} \varepsilon & = - \frac {\mathrm{d} \Psi}{\mathrm{d} t} = - \frac {\mathrm{d}}{\mathrm{d} t} \frac {N a ^ {2} p _ {\mathrm{m}}}{2 (x ^ {2} + a ^ {2}) ^ {3 / 2}} = - \frac {N a ^ {2} p _ {\mathrm{m}}}{2} \frac {\mathrm{d}}{\mathrm{d} t} \frac {1}{(x ^ {2} + a ^ {2}) ^ {3 / 2}} \\ & = \frac {3 N a ^ {2} p _ {\mathrm{m}} x}{2 (x ^ {2} + a ^ {2}) ^ {3 / 2}} \frac {\mathrm{d} x}{\mathrm{d} t} = \frac {3 N a ^ {2} p _ {\mathrm{m}} x v}{2 (x ^ {2} + a ^ {2}) ^ {3 / 2}} \end{array}\tag{6}
$$

(2) 大线圈中的电流为

$$
I = \frac {\mathrm{d} q}{\mathrm{d} t} = \frac {\ell}{R} = - \frac {1}{R} \frac {\mathrm{d} \Psi}{\mathrm{d} t} = - \frac {N a ^ {2} p _ {\mathrm{m}}}{2 R} \frac {\mathrm{d}}{\mathrm{d} t} \frac {1}{(x ^ {2} + a ^ {2}) ^ {3 / 2}}\tag{7}
$$

所以

$$
\mathrm{d} q = \frac {N a ^ {2} p _ {\mathrm{m}}}{2 R} \mathrm{d} \frac {1}{(x ^ {2} + a ^ {2}) ^ {3 / 2}}\tag{8}
$$

积分便得

$$
q = - \frac {N a ^ {2} p _ {\mathrm{m}}}{2 R} \frac {1}{(x ^ {2} + a ^ {2}) ^ {3 / 2}} \Bigg | _ {x = 0} ^ {x = \infty} = - \frac {N a ^ {2} p _ {\mathrm{m}}}{2 R} \left[ 0 - \frac {1}{a ^ {3}} \right] = \frac {N p _ {\mathrm{m}}}{2 a R}\tag{9}
$$

8.3.26 一同轴电缆可看作是无限长的两个同轴导体圆筒, 内外筒的半径分别为 $R_{1}$ 和 $R_{2}$ , 电流沿内筒流去, 沿外筒流回, 电流都均匀分布在筒的横截面上. 两筒间充满磁导率为 $\mu$ 的介质. 试求这同轴电缆单位长度的自感.

【解】根据对称性,由安培环路定理得两筒间的磁场强度为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/3f28e1b43379061273217bb76019194058007e42cb77369269c66234c6b638a3.jpg)


$$
H = \frac {I}{2 \pi r}, \quad R _ {1} <   r <   R _ {2}\tag{1}
$$


图8.3.26


如图8.3.26，沿轴线长为 $l$ 的一段，磁通量为

$$
\Phi = \int_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = \int_ {S} B \mathrm{d} S = \int_ {R _ {1}} ^ {R _ {2}} \frac {\mu I}{2 \pi r} \cdot l \mathrm{d} r = \frac {\mu I l}{2 \pi} \ln \frac {R _ {2}}{R _ {1}}\tag{2}
$$

这一段的自感为

$$
L = \frac {\Phi}{I} = \frac {u l}{2 \pi} \ln \frac {R _ {2}}{R _ {1}}\tag{3}
$$

于是得单位长度的自感为

$$
\frac {L}{l} = \frac {\mu}{2 \pi} \ln \frac {R _ {2}}{R _ {1}}\tag{4}
$$

8.3.27 一同轴传输线由很长的两个同轴导体薄圆筒构成,内筒半径为 $R_{1}=$ 

40mm, 外筒半径为 $R_{2}=120mm$ , 两筒间是空气. 在两筒间加上 U=10V 电压时, 电流由一筒流去, 由另一筒流回, 大小为 I=10mA, 电流在两筒上都是均匀分布的. a 是两筒间很靠近内筒的一点, b 是两筒间很靠近外筒的一点. 试求: (1)a、b 两点电场强度和电位移的值; (2)a、b 两点磁场强度和磁感强度的值; (3) 单位长度的电容; (4) 单位长度的自感.

【解】（1）设内筒上单位长度的电荷量为 $\lambda$ ，两筒间的电场强度为 $E$ ，则由对称性和高斯定理得 $E$ 的方向沿径向外， $E$ 的大小为

$$
E = \frac {\lambda}{2 \pi \varepsilon_ {0} r}, \quad R _ {1} <   r <   R _ {2}\tag{1}
$$

两筒的电势差为

$$
U = U _ {1} - U _ {2} = \int_ {R _ {1}} ^ {R _ {2}} \boldsymbol {E} \cdot \mathrm{d} \boldsymbol {r} = \int_ {R _ {1}} ^ {R _ {2}} E \mathrm{d} r = \frac {\lambda}{2 \pi \varepsilon_ {0}} \ln \frac {R _ {2}}{R _ {1}}\tag{2}
$$

所以

$$
\lambda = \frac {2 \pi \epsilon_ {0} U}{\ln (R _ {2} / R _ {1})}\tag{3}
$$

由式(1)、(3)得所求的电场强度为

$$
\begin{array}{r l} E _ {a} & = \frac {\lambda}{2 \pi \epsilon_ {0} R _ {1}} = \frac {U}{R _ {1} \ln (R _ {2} / R _ {1})} = \frac {1 0}{4 0 \times 1 0 ^ {- 3} \ln (1 2 0 / 4 0)} \\ & = 2. 3 \times 1 0 ^ {2} (\mathrm{V/m}) \end{array}\tag{4}
$$

$$
\begin{array}{r l} E _ {b} & = \frac {U}{R _ {2} \ln (R _ {2} / R _ {1})} = \frac {1 0}{1 2 0 \times 1 0 ^ {- 3} \ln (1 2 0 / 4 0)} \\ & = 7 6 (\mathrm{V/m}) \end{array}\tag{5}
$$

电位移为

$$
D _ {a} = \varepsilon_ {0} E _ {a} = 8. 8 5 4 \times 1 0 ^ {- 1 2} \times 2. 3 \times 1 0 ^ {2}
$$

$$
= 2. 0 \times 1 0 ^ {- 9} (\mathrm{C/m} ^ {2})\tag{6}
$$

$$
D _ {b} = \epsilon_ {0} E _ {b} = 8. 8 5 4 \times 1 0 ^ {- 1 2} \times 7 6
$$

$$
= 6. 7 \times 1 0 ^ {- 1 0} (\mathrm{C/m} ^ {2})\tag{7}
$$

(2)根据对称性和安培环路定理得，a、b两点的磁场强度分别为

$$
H _ {a} = \frac {I}{2 \pi R _ {1}} = \frac {1 0 \times 1 0 ^ {- 3}}{2 \pi \times 4 0 \times 1 0 ^ {- 3}} = 4. 0 \times 1 0 ^ {- 2} (\mathrm{A/m})\tag{8}
$$

$$
H _ {b} = \frac {I}{2 \pi R _ {2}} = \frac {1 0 \times 1 0 ^ {- 3}}{2 \pi \times 1 2 0 \times 1 0 ^ {- 3}} = 1. 3 \times 1 0 ^ {- 2} (\mathrm{A/m})\tag{9}
$$

磁感强度分别为

$$
B _ {a} = \mu_ {0} H _ {a} = 4 \pi \times 1 0 ^ {- 7} \times 4. 0 \times 1 0 ^ {- 2} = 5. 0 \times 1 0 ^ {- 8} (\mathrm{T})\tag{10}
$$

$$
B _ {b} = \mu_ {0} H _ {b} = 4 \pi \times 1 0 ^ {- 7} \times 1. 3 \times 1 0 ^ {- 2} = 1. 6 \times 1 0 ^ {- 8} (\mathrm{T})\tag{11}
$$

(3) 由式(1)、(3)得, 长为 l 一段的电容为

$$
C = \frac {Q}{U} = \frac {2 \pi \varepsilon_ {0} l}{\ln (R _ {2} / R _ {1})}\tag{12}
$$

故单位长度的电容为

$$
\begin{array}{r l} \frac {C}{l} & = \frac {2 \pi \varepsilon_ {0}}{\ln (R _ {2} / R _ {1})} = \frac {2 \pi \times 8 . 8 5 4 \times 1 0 ^ {- 1 2}}{\ln (1 2 0 / 4 0)} \\ & = 5. 1 \times 1 0 ^ {- 1 1} (\mathrm{F/m}) = 5 1 (\mathrm{pF/m}) \end{array}\tag{13}
$$

(4) 长为 l 一段的磁通量为 [参见前面图 8.3.26]

$$
\begin{array}{r l} \Phi = \iint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} & = \iint_ {S} B \mathrm{d} S = \int_ {R _ {1}} ^ {R _ {2}} \frac {\mu_ {0} I}{2 \pi r} l \mathrm{d} r \\ & = \frac {\mu_ {0} I l}{2 \pi} \ln \left(\frac {R _ {2}}{R _ {1}}\right) \end{array}\tag{14}
$$

这一段的自感为

$$
L = \frac {\Phi}{I} = \frac {\mu_ {0} l}{2 \pi} \ln (R _ {2} / R _ {1})\tag{15}
$$

故单位长度的自感为

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/db6c2285e438c678a1e870d2c4580fa450f4ec7d2515f41b2262522e02027fe4.jpg)


$$
\begin{array}{r l} \frac {L}{l} & = \frac {\mu_ {0}}{2 \pi} \ln \left(\frac {R _ {2}}{R _ {1}}\right) = \frac {4 \pi \times 1 0 ^ {- 7}}{2 \pi} \ln \left(\frac {1 2 0}{4 0}\right) \\ & = 2. 2 \times 1 0 ^ {- 7} (\mathrm{H}) \end{array}\tag{16}
$$

8.3.28 一同轴电缆由很长的直导线和套在它外面的同轴导体圆筒构成,导线的半径为 a, 圆筒的半径为 b, 它们之间介质的 $\mu_{r}=1$ . 使用时,电流沿导线流去,沿圆筒流回. 设电流在圆筒上和在导线的横截面上都是均匀分布的. 试求这电缆单位长度的自感.

## 【解】用磁链求自感


图 8.3.28(1)


根据对称性和安培环路定理可知，在圆筒外没有磁场，磁场局限在导线与圆筒间以及导线内。考虑这电缆长为 $l$ 的一段，如图8.3.28(1)所示，

设导线与圆筒间的磁场的磁链为 $\Psi_{e}$ ，导线内的磁场的磁链为 $\Psi_{i}$ ，与 $\Psi_{e}$ 有关的自感叫做外自感，以 $L_{e}$ 表示，与 $\Psi_{i}$ 有关的自感叫做内自感，以 $L_{i}$ 表示，则依定义有

$$
L _ {e} = \frac {\Psi_ {e}}{I}\tag{1}
$$

$$
L _ {i} = \frac {\Psi_ {i}}{I}\tag{2}
$$

总的自感为

$$
L = L _ {e} + L _ {i}\tag{3}
$$

先求 $L_{e}$ . 导线与圆筒间的磁通量为

$$
\Phi_ {e} = \iint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = \iint_ {S} B \mathrm{d} S = \int_ {a} ^ {b} B l \mathrm{d} r = \frac {\mu_ {0} I l}{2 \pi} \int_ {a} ^ {b} \frac {\mathrm{d} r}{r} = \frac {\mu_ {0} I l}{2 \pi} \ln \frac {b}{a}\tag{4}
$$

由于这个磁通量的磁力线套住了导线中的全部电流 $I$ ，故与之相应的磁链便为

$$
\Psi_ {e} = \Phi_ {e} = \frac {\mu_ {0} I l}{2 \pi} \ln \frac {b}{a}
$$

于是得

(5) 

$$
L _ {e} = \frac {\Psi_ {e}}{I} = \frac {\mu_ {0} l}{2 \pi} \ln \frac {b}{a}\tag{6}
$$

再求 $L_{i}$ ，在导线内，由对称性和安培环路定理得

$$
\oint \boldsymbol {H} \cdot \mathrm{d} \boldsymbol {l} = H \cdot 2 \pi r = \frac {1}{\pi a ^ {2}} \cdot \pi r ^ {2}\tag{7}
$$

所以

$$
H = \frac {I r}{2 \pi a ^ {2}}\tag{8}
$$

$$
B = \frac {\mu_ {0} I r}{2 \pi a ^ {2}}\tag{9}
$$

如图 8.3.28(2) 所示, 在长为 l 的一段导线里, 取面积元 $dS = l dr$ , 通过它的磁通量为

$$
\mathrm{d} \Phi_ {i} = \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = B l \mathrm{d} r = \frac {\mu_ {0} I l}{2 \pi a ^ {2}} r \mathrm{d} r\tag{10}
$$

由于这个磁通量的磁力线并没有套住导线里的全部电流 I，而只套住半径 r 内的电流 $I_{i}$ ，这 $I_{i}$ 为

$$
I _ {i} = \frac {I}{\pi a ^ {2}} \cdot \pi r ^ {2} = \frac {r ^ {2}}{a ^ {2}} I\tag{11}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f3adfd18d73486f8024412961cebe8644fd256884c805c46929645f4199cef29.jpg)


故与 $\mathrm{d}\Phi_{i}$ 相应的磁链便为

$$
\mathrm{d} \Psi_ {i} = \frac {I _ {i}}{I} \mathrm{d} \Phi_ {i} - \frac {r ^ {2}}{a ^ {2}} \mathrm{d} \Phi_ {i} = \frac {\mu_ {0} I l}{2 \pi a ^ {4}} r ^ {3} \mathrm{d} r
$$

图8.3.28(2)

(12) 

因为

$$
\frac {I _ {i}}{I} = \frac {r ^ {2}}{a ^ {2}} <   1\tag{13}
$$

所以有些人便把 $I_{i}/I$ 称为“分数匝数”.

将式(12)积分得

$$
\Psi_ {i} = \frac {\mu_ {0} I l}{2 \pi a ^ {4}} \int_ {0} ^ {a} r ^ {3} \mathrm{d} r = \frac {\mu_ {0} I l}{8 \pi}\tag{14}
$$

由式(2)和式(14)得

$$
L _ {i} = \frac {\mu_ {0} l}{8 \pi}\tag{15}
$$

将式(6)和(15)代入式(3)，便得这电缆长为 l 一段的自感为

$$
L = \frac {\mu_ {0} l}{4 \pi} \left(\frac {1}{2} + 2 \ln \frac {b}{a}\right)\tag{16}
$$

于是得单位长度的自感为

$$
\frac {L}{l} = \frac {\mu_ {0}}{4 \pi} \left(\frac {1}{2} + 2 \ln \frac {b}{a}\right)\tag{17}
$$

【别解】用磁场能量求自感

$$
H _ {i} = \frac {I}{2 \pi a ^ {2}} r, \quad r <   a
$$

设导线中电流为 I，则由对称性和安培环路定理得磁场强度的大小为

(18) 

$$
H _ {r} = \frac {1}{2 \pi r}, \quad a <   r <   b\tag{19}
$$

$$
H _ {0} = 0, \quad r > b\tag{20}
$$

故长为 l 的一段电缆所具有的磁场能量为

$$
\begin{array}{r l} W _ {m} & = \iiint_ {V} \frac {1}{2} \mu_ {0} H ^ {2} \mathrm{d} V = \frac {1}{2} \mu_ {0} l \iint_ {S} H ^ {2} \mathrm{d} S = \frac {\mu_ {0} l}{2} \int_ {0} ^ {b} H ^ {2} \cdot 2 \pi r \mathrm{d} r \\ & = \pi \mu_ {0} l \int_ {0} ^ {a} H _ {r} ^ {2} r \mathrm{d} r + \pi \mu_ {0} l \int_ {a} ^ {b} H _ {r} ^ {2} r \mathrm{d} r \\ & = \frac {\mu_ {0} I ^ {2} l}{4 \pi a ^ {4}} \int_ {0} ^ {a} r ^ {3} \mathrm{d} r + \frac {\mu_ {0} I ^ {2} l}{4 \pi} \int_ {a} ^ {b} \frac {\mathrm{d} r}{r} \\ & = \frac {\mu_ {0} I ^ {2} l}{1 6 \pi} + \frac {\mu_ {0} I ^ {2} l}{4 \pi} \ln \frac {b}{a} \end{array}\tag{21}
$$

由公式

$$
W _ {m} = \frac {1}{2} L I ^ {2}\tag{22}
$$

得这一段的自感为

$$
L = \frac {2 W _ {m}}{I ^ {2}} = \frac {\mu_ {0} l}{4 \pi} (\frac {1}{2} + 2 \ln \frac {b}{a})\tag{23}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/8e11b6c765727651ee2220092083c3f104b547650d503898ac377eb45c0c7bfd.jpg)


于是得单位长度的自感为

$$
\frac {L}{l} = \frac {\mu_ {0}}{4 \pi} \left(\frac {1}{2} + 2 \ln \frac {b}{a}\right)\tag{24}
$$


图8.3.29(1)


8.3.29 两条平行长直导线, 横截面的半径都是 a, 中心相距为 d, 属于同一回路. 设两导线内部的磁通量都可略去不计, 试求这两导线单位长度的自感.

【解】如图8.3.29(1)，两导线长为 $l$ 的一段之间的磁通量为

$$
\begin{array}{r l} \Phi & = \iint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = \iint_ {S} B \mathrm{d} S = \int_ {a} ^ {d - a} B l \mathrm{d} r \\ & = \int_ {a} ^ {d - a} \left[ \frac {\mu_ {0} I}{2 \pi r} + \frac {\mu_ {0} I}{2 \pi (d - r)} \right] l \mathrm{d} r \\ & = \frac {\mu_ {0} I l}{2 \pi} \int_ {a} ^ {d - a} \left[ \frac {1}{r} + \frac {1}{d - r} \right] \mathrm{d} r \\ & = \frac {\mu_ {0} I l}{2 \pi} [ \ln r - \ln (d - r) ] _ {r - d} ^ {r - d - a} \\ & = \frac {\mu_ {0} I l}{2 \pi} \left[ \ln \frac {d - a}{a} - \ln \frac {a}{d - a} \right] \\ & = \frac {\mu_ {0} I l}{\pi} \ln \frac {d - a}{a} \end{array}\tag{1}
$$

这段的自感为

$$
L = \frac {\Phi}{I} = \frac {\mu_ {0} l}{\pi} \ln \frac {d - a}{a}\tag{2}
$$

于是得单位长度的自感为

$$
\frac {L}{l} = \frac {\mu_ {0}}{\pi} \ln \frac {d - a}{a}\tag{3}
$$

【讨论】上面的式(2)和式(3)都是由两导线外面的磁通量式(1)算出的,这部分自感通量常称为外自感,以 $L_{e}$ 表示即

$$
L _ {e} = \frac {\mu_ {0} l}{\pi} \ln \frac {d - a}{a}\tag{4}
$$

由两导线里面的磁通量所算出的另一部分自感称为内自感, 以 $L_{i}$ 表示. 我们现在就来求 $L_{i}$ .

在一导线内部离该导线中心为 r 处, 这导线本身的电流 I 产生的磁感强度为

$$
\boldsymbol {B} _ {i} = \frac {\mu_ {0} I r}{2 \pi a ^ {2}} \boldsymbol {e}\tag{5}
$$

式中 e 为电流 I 的右手螺旋方向上的单位矢量. 在这导线长为 l 的一段里, 取面积元 dS = l dr, 如图 8.3.29(2) 通过这 dS 的磁通量为

$$
\mathrm{d} \Phi_ {i i} = B _ {i} \mathrm{d} S = B _ {i} l \mathrm{d} r = \frac {\mu_ {0} I l}{2 \pi a ^ {2}} r \mathrm{d} r\tag{6}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/5c01580289de590c8db165c844c2d6e536eb87abfe8a927d7f4ddcacf50d5687.jpg)


由于这磁通量的磁力线并没有套住导线里的全部电流 I，而只套住半径 r 以内的电流 $I_{i}$ ：


图8.3.29(2)


$$
I _ {i} = \frac {I}{\pi a ^ {2}} \cdot \pi r ^ {2} = \frac {r ^ {2}}{a ^ {2}} I\tag{7}
$$

故与 $d\Phi_{ii}$ 相应的磁链便为

$$
\mathrm{d} \Psi_ {i i} = \frac {I _ {i}}{I} \mathrm{d} \Phi_ {i i} = \frac {\mu_ {0} I l}{2 \pi a ^ {4}} r ^ {3} \mathrm{d} r\tag{8}
$$

于是,这条导线内由于本身的电流 I 而产生的磁链为

$$
\Psi_ {i i} = \frac {\mu_ {0} I l}{2 \pi a ^ {4}} \int_ {0} ^ {a} r ^ {3} \mathrm{d} r = \frac {\mu_ {0} I l}{8 \pi}\tag{9}
$$

这条导线内由于另一条导线的电流 I 而产生磁链为

$$
\begin{array}{r l} \boldsymbol {\Psi} _ {i e} & = \boldsymbol {\Phi} _ {i e} = \iint_ {S} \boldsymbol {B} _ {e} \cdot \mathrm{d} \boldsymbol {S} = \iint_ {S} B _ {e} \mathrm{d} S = \int_ {d - a} ^ {d} B _ {e} l \mathrm{d} r \\ & = \int_ {d - a} ^ {d} \frac {\mu_ {0} I}{2 \pi r} l \mathrm{d} r = \frac {\mu_ {0} I l}{2 \pi} \ln \frac {d}{d - a} \end{array}\tag{10}
$$

所以一条导线内的总磁链便为

$$
\Psi_ {i} = \Psi_ {i i} + \Psi_ {i e} = \frac {\mu_ {0} I l}{8 \pi} + \frac {\mu_ {0} I l}{2 \pi} \ln \frac {d}{d - a}\tag{11}
$$

两条导线内的总磁链之和为

$$
2 \Psi_ {i} = \frac {\mu_ {0} I l}{4 \pi} + \frac {\mu_ {0} I l}{\pi} \ln \frac {d}{d - a}\tag{12}
$$

于是得内自感为

$$
L _ {i} = \frac {2 \Psi_ {i}}{I} = \frac {\mu_ {0} l}{4 \pi} + \frac {\mu_ {0} l}{\pi} \ln \frac {d}{d - a}\tag{13}
$$

加上前面求出的外自感 $L_{e}$ ，便得这两导线长为 $l$ 一段的自感为

$$
\begin{array}{r l} L = & L _ {e} + L _ {i} = \frac {\mu_ {0} l}{\pi} \ln \frac {d - a}{a} + \frac {\mu_ {0} l}{4 \pi} + \frac {\mu_ {0} l}{\pi} \ln \frac {d}{d - a} \\ & = \frac {\mu_ {0} l}{4 \pi} + \frac {\mu_ {0} l}{\pi} \ln \frac {d}{a} = \frac {\mu_ {0} l}{\pi} (\frac {1}{4} + \ln \frac {d}{a}) \end{array}\tag{14}
$$

单位长度的自感为

$$
\frac {L}{l} = \frac {\mu_ {0}}{\pi} (\frac {1}{4} + \ln \frac {d}{a})\tag{15}
$$

两导线距离最近时,导线表面接触(设导线表面有很薄的绝缘层,接触时不致短路),这时d=2a.这时外自感为零,只有内自感.由式(15)或式(13)得这时单位长度的自感为

$$
\begin{array}{r l} \frac {L}{l} & = \frac {\mu_ {0}}{\pi} (\frac {1}{4} + \ln 2) = \frac {4 \pi \times 1 0 ^ {- 7}}{\pi} \times (0. 2 5 + 0. 6 9 3 1 4 7) \\ & = 3. 7 7 2 6 \times 1 0 ^ {- 7} (\mathrm{H}) \end{array}\tag{16}
$$

当 $d$ 从 $2a$ 增大时，外自感 $L_{e}$ 出现.由式(4)可见， $L_{e}$ 随 $d$ 的增大而增大.由式(13)可见，内自感 $L_{i}$ 则随 $d$ 的增大而减小.由式(4)和式(13)可见，当

$$
\ln \frac {d - a}{a} = \frac {1}{4} + \ln \frac {d}{d - a}\tag{17}
$$

时， $L_{e}=L_{i}$ . 解式(17)得

$$
d = 2. 9 4 4 a\tag{18}
$$

这个结果表明,当两导线最近表面间的距离为 0.944a 时,外自感等于内自感.这时由式(15)得,单位长度的自感为

$$
\begin{array}{r l} \frac {L}{l} & = \frac {\mu_ {0}}{\pi} (\frac {1}{4} + \ln 2. 9 4 4) = 4 \times 1 0 ^ {- 7} \times (0. 2 5 + 1. 0 7 9 8) \\ & = 5. 3 1 9 \times 1 0 ^ {- 7} (\mathrm{H}) \end{array}\tag{19}
$$

当 $d \gg a$ 时，由式(15)得单位长度的自感为

$$
\frac {L}{l} = \frac {\mu_ {0}}{\pi} \ln \frac {d}{a}\tag{20}
$$

这时 $L_{e} \gg L_{i}$ , 故内自感可以略去, 所以由式(3)也可得出式(20).

8.3.30 两条平行的长直输电线,属于同一回路,电流方向相反,它们的半径分别为 a 和 b，轴线相距为 d，电流都均匀分布在它们各自的横截面上。试求它们单位长度的自感，并计算 $a = b = 10 \, mm, d = 20 \, cm$ 时单位长度自感的值。

【解】先考虑两导线外的磁链.在垂直于两导线的横截面内,如图8.3.30(1)所示,在两轴线的联线上,离a的轴线为r处,两导线的电流所产生的磁感强度方向相同,都垂直于轴线并向上,其大小为

$$
B _ {e} = \frac {\mu_ {0} l}{2 \pi} \left(\frac {1}{r} + \frac {1}{d - r}\right)
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/ed409a2bc991a3a1e08af400ff663caff5b53fa80d744ca13c8b421148fcf774.jpg)


(1) 

两导线外，长为 $l$ 一段的磁链为

图8.3.30(1)

$$
\begin{array}{r l} \Psi_ {e} & = \Phi_ {e} = \iint_ {S} \boldsymbol {B} _ {e} \cdot \mathrm{d} \boldsymbol {S} = \frac {\mu_ {0} I l}{2 \pi} \int_ {a} ^ {d - b} \left(\frac {1}{r} + \frac {1}{d - r}\right) \mathrm{d} r \\ & = \frac {\mu_ {0} I l}{2 \pi} [ \ln r - \ln (d - r) ] _ {z r = a} ^ {- r - d - b} \\ & = \frac {\mu_ {0} I l}{2 \pi} \ln \frac {(d - a) (d - b)}{a b} \end{array}\tag{2}
$$

故得两导线单位长度的外自感为

$$
\frac {L _ {e}}{l} = \frac {\Psi_ {e}}{I l} = \frac {\mu_ {0}}{2 \pi} \ln \frac {(d - a) (d - b)}{a b}\tag{3}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/51ce4154f8529d3d7be45e5da4cfc89afb96a8e8999ae26f21b489dd4b3088a9.jpg)


再考虑两导线内的磁链. 这有两部分, 一部分是自身的电流产生的 $\Psi_{ii}$ , 另一部分是另一导线的电流产生的 $\Psi_{ie}$ . 先看 $a$ 线. 如图8.3.30(2), 在离轴线为 $r$ 处, 由于 $a$ 线本身的电流 $I$ 所产生的磁感强度 $\pmb{B}_i$ 的大小为

$$
B _ {i} = \frac {\mu_ {0} I r}{2 \pi a ^ {2}}\tag{4}
$$

$B_{i}$ 的方向为电流 I 的右手螺旋方向. 这磁场穿过长为 l、宽为 dr 的面积元的磁通量为

$$
\mathrm{d} \Phi_ {i i} = B _ {i} l \mathrm{d} r = \frac {\mu_ {0} l l}{2 \pi a ^ {2}} r \mathrm{d} r\tag{5}
$$

图 8.3.30(2)

因为这个磁通量的磁力线并没有套住导线中的全部电流 I，而只套住半径 r 内的电流 $I_{i}$ ，故与 $d\Phi_{ij}$ 相应的磁链为

$$
\mathrm{d} \Psi_ {i i} = \frac {I _ {i}}{I} \mathrm{d} \Phi_ {i i} = \frac {\pi r ^ {2}}{\pi a ^ {2}} \mathrm{d} \Phi_ {i i} = \frac {\mu_ {0} I l}{2 \pi a ^ {4}} r ^ {3} \mathrm{d} r\tag{6}
$$

积分便得

$$
\Psi_ {i i} = \frac {\mu_ {0} I l}{2 \pi a ^ {4}} \int_ {0} ^ {a} r ^ {3} \mathrm{d} r = \frac {\mu_ {0} I l}{8 \pi}\tag{7}
$$

b 线中的电流 I 在 a 线内产生的磁链为

$$
\begin{array}{r l} \Psi_ {i e} & = \Phi_ {i e} = \int_ {d - a} ^ {d} B _ {e} l \mathrm{d} r = \int_ {d - a} ^ {d} \frac {\mu_ {0} I l}{2 \pi r} \mathrm{d} r \\ & = \frac {\mu_ {0} I l}{2 \pi} \ln \frac {d}{d - a} \end{array}\tag{8}
$$

于是得 $a$ 线内总磁链为

$$
\Psi_ {i i} + \Psi_ {i e} = \frac {\mu_ {0} I l}{8 \pi} + \frac {\mu_ {0} I l}{2 \pi} \ln \frac {d}{d - a}\tag{9}
$$

至于 $b$ 线，只需将式(4)至式(9)中的 $a$ 换成 $b$ 即得.这样，便得出 $a, b$ 两线内部的总磁链为

$$
\begin{array}{r l} \Psi_ {i} & = \frac {\mu_ {0} I l}{8 \pi} + \frac {\mu_ {0} I l}{2 \pi} \ln \frac {d}{d - a} + \frac {\mu_ {0} I l}{8 \pi} + \frac {\mu_ {0} I l}{2 \pi} \ln \frac {d}{d - b} \\ & = \frac {\mu_ {0} I l}{4 \pi} + \frac {\mu_ {0} I l}{2 \pi} \ln \frac {d ^ {2}}{(d - a) (d - b)} \end{array}\tag{10}
$$

故得两导线单位长度的内自感为

$$
\frac {L _ {i}}{l} = \frac {\Psi_ {i}}{I l} = \frac {\mu_ {0}}{4 \pi} + \frac {\mu_ {0}}{2 \pi} \ln \frac {d ^ {2}}{(d - a) (d - b)}\tag{11}
$$

由式(3)和式(11)得两导线单位长度的自感为

$$
\begin{array}{r l} \frac {L}{l} & = \frac {L _ {e}}{l} + \frac {L _ {i}}{l} = \frac {\mu_ {0}}{2 \pi} \ln \frac {(d - a) (d - b)}{a b} \\ & + \frac {\mu_ {0}}{4 \pi} + \frac {\mu_ {0}}{2 \pi} \ln \frac {d ^ {2}}{(d - a) (d - b)} \\ & = \frac {\mu_ {0}}{4 \pi} + \frac {\mu_ {0}}{2 \pi} \ln \left(\frac {d ^ {2}}{a b}\right) = \frac {\mu_ {0}}{4 \pi} \left[ 1 + 2 \ln \left(\frac {d ^ {2}}{a b}\right) \right] \end{array}\tag{12}
$$

将题给数据代入式(12)得单位长度自感的值为

$$
\begin{array}{r l} \frac {L}{l} & = \frac {4 \pi \times 1 0 ^ {- 7}}{4 \pi} \left[ 1 + 2 \ln \frac {(2 0 \times 1 0) ^ {2}}{1 0 \times 1 0} \right] = 1. 3 \times 1 0 ^ {- 6} (\mathrm{H/m}) \\ & = 1. 3 (\mu \mathrm{H/m}) \end{array}\tag{13}
$$

【讨论】 内自感在自感中的百分比

由式(11)和(12)得

$$
\frac {L _ {i}}{L} = \frac {1 + 2 \ln \frac {d ^ {2}}{(d - a) (d - b)}}{1 + 2 \ln \frac {d ^ {2}}{a b}}\tag{14}
$$

当 $a = b = d / 10$ 时，由式(14)得

$$
\frac {L _ {i}}{L} = \frac {1 + 4 \ln \frac {1 0}{9}}{1 + 4 \ln 1 0} = 14 \%\tag{15}
$$

当 $a = b = d / 100$ 时，由式(14)得

$$
\frac {L _ {i}}{L} = \frac {1 + 4 \ln \frac {1 0 0}{9 9}}{1 + 4 \ln 1 0 0} = 5 \%\tag{16}
$$

由以上结果可见,在两导线半径相同的情况下,当它们轴线间的距离为半径的10倍时,内自感在自感中所占的比例约为14%,一般不能略去.当它们轴线间的距离大于半径的一百倍时,内自感在自感中所占的比例小于5%,如要求不高,便可以略去. 轴线的距离越大, 则内自感所占比例越小, 便完全可以略去.

8.3.31 一磁导率为 $\mu$ 的铁环, 内半径为 $a$ , 外半径为 $b$ , 横截面是高为 $h$ 的矩形, 在它上面用表面绝缘的导线绕有 $N$ 匝线圈, 如图 8.3.31 所示. 在这导线的几何轴上, 有一条无穷长直导线, 试求导线与线圈间的互感.

【解】设直导线载有电流 $I_{1}$ ，它在距离导线为 $r$ 处产生的磁场强度的大小为

$$
H = \frac {I _ {1}}{2 \pi r}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/b05da875d6117372f164b5cb6af739ca7be038617e8273781a86e5019229322e.jpg)


(1) 

这磁场在线圈内产生的磁链为

图8.3.31

$$
\Psi_ {2 1} = N \Phi_ {2 1} = N \iint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = N \int_ {a} ^ {b} \frac {\mu I _ {1}}{2 \pi r} h \mathrm{d} r = \frac {\mu N / h I _ {1}}{2 \pi} \ln \frac {b}{a}\tag{2}
$$

于是得所求的互感为

(3) 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/c8a1d590a0e2db6f8d2517fca013e1b7b90dbb4f8d99d9d8befebb3913ab16ee.jpg)


$$
M = \frac {\Psi_ {2 1}}{I _ {1}} = \frac {\mu N h}{2 \pi} \ln \frac {b}{a}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/87dea16042d56fb01db93a5a5801f9268d3ac4f711865b8b322ec92d1773f99e.jpg)



(1)



(2)


8.3.32 一矩形线圈长为 $a = 20\mathrm{cm}$ , 宽为 $b = 10\mathrm{cm}$ , 由100匝表面绝缘的导线绕成, 放在一很长的直导线旁边, 且与该导线在同一平面内. 该导线是另一闭合回路的一部分, 其他部分离线圈都很远, 影响可略去不计. 试求图8.3.32中(1)和(2)两种情况下, 线圈与导线之间的互感.


图8.3.32


【解】（1）图8.3.32(1)中，设导线载有电流 $I$ ，则用对称性和安培环路定理得，离它为 $r$ 处的磁场强度为

$$
H = \frac {I}{2 \pi r}\tag{1}
$$

于是通过矩形线圈的磁链为

$$
\Psi = N \Phi = N \iint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = N \iint_ {S} \mu_ {0} H \mathrm{d} S = \frac {\mu_ {0} N I a}{2 \pi} \int_ {b} ^ {2 b} \frac {\mathrm{d} r}{r} = \frac {\mu_ {0} N I a}{2 \pi} \ln 2\tag{2}
$$

故所求的互感为

$$
\begin{array}{r l} M & = \frac {\Psi}{I} = \frac {\mu_ {0} N I a}{2 \pi} \ln 2 \\ & = \frac {4 \pi \times 1 0 ^ {- 7} \times 1 0 0 \times 2 0 \times 1 0 ^ {- 2}}{2 \pi} \times 0. 6 9 3 1 \\ & = 2. 8 \times 1 0 ^ {- 6} (\mathrm{H}) \end{array}\tag{3}
$$

(2)因矩形线圈的两半对于载有电流 I 的导线是对称的,故经过两半相应处的磁感强度 B 大小相等而方向相反,所以通线圈的磁通量为零,磁链亦为零,于是 M=0.

8.3.33 一无穷长直导线旁边有一与它共面的圆形线圈, 半径为 $a$ , 圆心到导线的距离为 $l, l > a$ , 如图 8.3.33(1) 所示. 试证明: 它们之间的互感为 $M = \mu_0(l -$ 

$$
\sqrt {l ^ {2} - a ^ {2}})
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/a05fe7d2c6c87422ddecf39020e6585b32060eafcc9fe21d9511f3e9654c9a74.jpg)



图8.3.33(1)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/d4e4f83d63e4382d40a430a65aafc29bd7076f16eedf48f33b64ee3495e9f73c.jpg)



图8.3.33(2)


【证】如图8.3.33(1)，设导线载有电流 $I$ ，则离导线为 $r$ 处的磁感强度为

$$
B = \frac {\mu_ {0} I}{2 \pi r}\tag{1}
$$

于是通过圆线圈的磁通量为

$$
\begin{array}{l} \Phi = \iint_ {S} \boldsymbol {B} \cdot \mathrm{d} \boldsymbol {S} = \iint_ {S} B \mathrm{d} S = \frac {\mu_ {0} I}{2 \pi} \iint_ {S} \frac {\mathrm{d} S}{r} = \frac {\mu_ {0} I}{2 \pi} \int_ {l - a} ^ {l + a} \frac {2 \sqrt {a ^ {2} - (l - r) ^ {2}}}{r} \mathrm{d} r \\ = \frac {\mu_ {0} I}{\pi} \int_ {l - a} ^ {l + a} \frac {\sqrt {a ^ {2} - (l - r) ^ {2}}}{r} \mathrm{d} r \end{array}\tag{2}
$$

利用积分公式

$$
\begin{array}{r l} \int \frac {\sqrt {a x ^ {2} + b x + c}}{x} \mathrm{d} x & = \sqrt {a x ^ {2} + b x + c} + \frac {b}{2} \int \frac {\mathrm{d} x}{\sqrt {a x ^ {2} + b x + c}} \\ & + c \int \frac {\mathrm{d} x}{x \sqrt {a x ^ {2} + b x + c}} \end{array}\tag{3}
$$

现在[见图8.3.33(2)]

$$
\sqrt {a ^ {2} - (l - r) ^ {2}} = \sqrt {- r ^ {2} + 2 l r + a ^ {2} - l ^ {2}}\tag{4}
$$

所以

$$
a = - 1, \quad b = 2 l, \quad c = a ^ {2} - l ^ {2} <   0\tag{5}
$$

$$
\Delta = b ^ {2} - 4 a c = 4 a ^ {2} > 0\tag{6}
$$

故式(3)为

$$
\begin{array}{l} \int \frac {\sqrt {a x ^ {2} + b x + c}}{x} \mathrm{d} x = \sqrt {a x ^ {2} + b x + c} \\ - \frac {b}{2} \arcsin \left(\frac {2 a x + b}{\sqrt {b ^ {2} - 4 a c}}\right) + \frac {c}{\sqrt {- c}} \arcsin \left(\frac {b x + 2 c}{x \sqrt {b ^ {2} - 4 a c}}\right) \end{array}\tag{7}
$$

于是式(2)的积分为

$$
\begin{array}{l} \int_ {l - a} ^ {l + a} \frac {\sqrt {a ^ {2} - (l - r) ^ {2}}}{r} \mathrm{d} r = \int_ {l - a} ^ {l + a} \frac {\sqrt {- r ^ {2} + 2 l r + a ^ {2} - l ^ {2}}}{r} \mathrm{d} r \\ = \sqrt {a ^ {2} - (l - r) ^ {2}} \left| _ {r = l - a} ^ {r = l + a} - l \arcsin \left(\frac {- r + l}{a}\right) \right| _ {r = l - a} ^ {r = l + a} \end{array}
$$

$$
- \sqrt {l ^ {2} - a ^ {2}} \arcsin \left(\frac {l r + a ^ {2} - l ^ {2}}{a r}\right) \Bigg | _ {r = l - a} ^ {r = l + a} = \pi (l - \sqrt {l ^ {2} - a ^ {2}})\tag{8}
$$

代入式(2)便得

$$
\Phi = \frac {\mu_ {0} I}{\pi} \cdot \pi (l - \sqrt {l ^ {2} - a ^ {2}}) = \mu_ {0} I (l - \sqrt {l ^ {2} - a ^ {2}})\tag{9}
$$

于是所求的互感为

$$
M = \frac {\Phi}{I} = \mu_ {0} (l - \sqrt {l ^ {2} - a ^ {2}})\tag{10}
$$

8.3.34 一对相同的导体薄片,互相平行放置,长为 l,宽为 b,相距为 a,a≪b≪l,如图8.3.34所示.当这对导体片用作传输线时,电流沿片长方向流动,自一片流去,由另一片流回.设

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/e47f3678fcc8efd86bd87268bc68e200a51ce4e07bf117b8faae56a042e146d4.jpg)



图8.3.34


电流均匀分布在片的宽度上,略去边缘效应,试求它的自感 L.

【解】因 $b \gg a$ ，又略去边缘效应，故两片中的电流所产生的磁场可看作是一对平行的、无穷大的均匀平面电流 $k$ 和 $-k$ 所产生的磁场[参见前面5.2.10题的式(7)和式(8)]

两片外： $B = 0$ 

(1) 

两片间： $B=\mu_{0}k\times n$ 

(2) 

式中 n 为片的表面法线方向上的单位矢量.

可见两片间的磁场是均匀磁场,磁感强度 B 与两片表面平行,并与长度方向垂直,B 的大小为

$$
B = \mu_ {0} k = \mu_ {0} \frac {I}{b}\tag{3}
$$

两片间的磁通量为

$$
\Phi = B S = \mu_ {0} \frac {I}{b} \cdot l a = \frac {\mu_ {0} l a I}{b}\tag{4}
$$

于是所求的自感为

$$
L = \frac {\Phi}{I} = \frac {\mu_ {0} l a}{b}\tag{5}
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-11-24/04d386c3-e651-4dc2-963c-7faeb647b78d/f3296a8a4e387f62bb67db61256590468c592bdcb47df6e0115595b173d4eb24.jpg)


8.3.35 在一纸筒上绕有两个相同的线圈 $(a,b)$ 和 $(a',b')$ ，如图8.3.35所示，每个线圈的自感都是0.050H.试求：(1)a和 $a'$ 相接时，b和 $b'$ 间的自感；(2) $a'$ 和b相接时，a和 $b'$ 间的自感.

图8.3.35 【解】设两线圈都可当作是密绕的长螺线管，边缘效应可略去不计，则对其中一个线圈(长为 $l$ ，横截面积为 $S$ ，匝数为 $N$ )，当载有电流 $I$ 时，里面的磁感强度为

$$
B = \mu_ {0} \frac {N}{l} I\tag{1}
$$

磁链为

$$
\Psi = N \Phi = N B S = \mu_ {0} \frac {N ^ {2}}{l} S I\tag{2}
$$

其自感为

$$
L = \frac {\Psi}{I} = \mu_ {0} \frac {N ^ {2}}{l} S = 0. 0 5 0 H\tag{3}
$$

(1)这时两线圈中的电流大小相等而方向相反,故线圈内的 B=0, 因而磁链 $\Psi=0$ , 故所求的自感为

$$
L _ {b b ^ {\prime}} = \frac {\Psi}{I} = 0\tag{4}
$$

(2)这时两线圈中的电流大小相等而方向相同,因而自感等于匝数为 2N 的线圈的自感,即所求的自感为

$$
L _ {a b ^ {\prime}} = \mu_ {0} \frac {(2 N) ^ {2}}{l} S = 4 \mu_ {0} \frac {N ^ {2}}{l} S = 4 \times 0. 0 5 0 = 0. 2 0 (\mathrm{H})\tag{5}
$$

【别解】（1）因两线圈相同且绕在一起，故

$$
L _ {1} = L _ {2} = M = 0. 0 5 0 \mathrm{H}\tag{6}
$$

这时两线圈是反串联,故所求的自感为

$$
L _ {b b ^ {\prime}} = L _ {1} + L _ {2} - 2 M = 0\tag{7}
$$

(2)这时两线圈是顺串联,故所求的自感为

$$
L _ {a b ^ {\prime}} = L _ {1} + L _ {2} + 2 M = 4 L _ {1} = 4 \times 0. 0 5 0 = 0. 2 0 (\mathrm{H})\tag{8}
$$

8.3.36 两线圈的自感分别为 $L_{1}$ 和 $L_{2}$ , 它们之间的互感可略去不计, 试求它们串联后的总自感 $L$ .

【解】两线圈中的感应电动势分别为

$$
\varepsilon_ {1} = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} \pm M \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}\tag{1}
$$

$$
\varepsilon_ {2} = - L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} \pm M \frac {\mathrm{d} I _ {1}}{\mathrm{d} t}\tag{2}
$$

设 $M > 0$ ，则顺串联时用正号，反串联时用负号.串联后，作为一个线圈的电动势为

$$
\mathcal {E} = \mathcal {E} _ {1} + \mathcal {E} _ {2} = - L _ {1} \frac {\mathrm{d} I _ {1}}{\mathrm{d} t} - L _ {2} \frac {\mathrm{d} I _ {2}}{\mathrm{d} t} \pm M (\frac {\mathrm{d} I _ {1}}{\mathrm{d} t} + \frac {\mathrm{d} I _ {2}}{\mathrm{d} t}) = - L \frac {\mathrm{d} I}{\mathrm{d} t}\tag{3}
$$

因为

$$
I _ {1} = I _ {2} = I\tag{4}
$$

$$
M = 0\tag{5}
$$

故得所求的自感为

$$
L = L _ {1} + L _ {2}\tag{6}
$$

8.3.37 两线圈的自感分别为 $L_{1}$ 和 $L_{2}$ , 它们之间的互感为 $M$ , 试求下列两种情况下它们串联后的总自感: (1) 顺串联, 如图8.3.37(1), 1和4之间的自感; (2) 反串联, 如图8.3.37(2), 1和3之间的自感.

【解】用磁链计算

(1) 顺串联: $I_{1}=I_{2}=I$ 

$$
\Psi_ {1} = L _ {1} I _ {1} + M I _ {2} = (L _ {1} + M) I\tag{1}
$$

$$
\Psi_ {2} = L _ {2} I _ {2} + M I _ {1} = (L _ {2} + M) I\tag{2}
$$