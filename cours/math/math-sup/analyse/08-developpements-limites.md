---
layout: chapitre
title: "Développements limités"
numero: 8
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Analyse"
source: "Math/Math Sup/Analyse/08 Développements limités"
pages: 40
interactif: true
---

## I. Définition et premières propriétés

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $f$ une fonction définie sur un voisinage $V$ de $a$. On dit que $f$ admet en $a$
un **développement limité à l'ordre $n$** (DL) s'il existe un polynôme
$P \in \mathbb{R}_n[X]$ (polynômes de degré $\leq n$) tel que

$$
f(x) = P(x-a) + (x-a)^n \varepsilon(x), \qquad \text{avec } \varepsilon(x) \xrightarrow[x \to a]{} 0
$$

sur $V$ (c'est-à-dire sur $I \cap V$ où $a \in I$).

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Cela s'écrit aussi, avec la notation de Landau :

$$
f(x) = P(x-a) + \mathrm{o}\big((x-a)^n\big)
$$

et sous forme développée :

$$
f(x) = a_0 + a_1 (x-a) + a_2 (x-a)^2 + \dots + a_n (x-a)^n + (x-a)^n\,\varepsilon(x)
$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$\sin x = x - \frac{x^3}{6} + \mathrm{o}(x^3)$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

- $f$ admet un DL d'ordre $0$ en $a$ **si et seulement si** $f$ est continue en $a$ ;
- $f$ admet un DL d'ordre $1$ en $a$ **si et seulement si** $f$ est dérivable en $a$.

</div>

<details class="demo" markdown="1">
<summary>Démonstration</summary>

Si $f$ admet un DL d'ordre $0$ en $a$ : $f(x) = P(x-a) + \mathrm{o}(1)$ avec $P$ constante,
égale à $a_0$. Mais $f(a) = P(0) = a_0$, et $\lim_{x\to a} f(x) = a_0$ car
$\varepsilon(x) \to 0$. Donc $\lim_{x\to a} f(x) = f(a)$ : $f$ est continue en $a$.

Réciproquement, si $f$ est continue en $a$ :
$f(x) = f(a) + \big(f(x)-f(a)\big) = f(a) + \varepsilon(x)$ avec
$\varepsilon(x) = f(x) - f(a) \to 0$, donc $f$ admet un DL d'ordre $0$ en $a$.

Si $f$ admet un DL d'ordre $1$ en $a$ : $f(x) = a_0 + a_1(x-a) + (x-a)\,\varepsilon(x)$.
$f$ admet un DL d'ordre $0$, donc $f(a) = a_0$. Pour $x \neq a$ :

$$
\tau(x) = \frac{f(x)-f(a)}{x-a} = a_1 + \varepsilon(x) \xrightarrow[x\to a]{} a_1
$$

donc $f$ est dérivable en $a$ et $f'(a) = a_1$.

Réciproquement, si $f$ est dérivable en $a$, posons, pour $x \neq a$ :
$\varepsilon(x) = \dfrac{f(x)-f(a)}{x-a} - f'(a)$, et $\varepsilon(a) = 0$. Alors

$$
f(x) = f(a) + f'(a)(x-a) + (x-a)\,\varepsilon(x)
$$

et la formule reste valable en $x = a$ : $f$ admet un DL d'ordre $1$ en $a$.

</details>

<div class="bloc contre-exemple" markdown="1">

<span class="bloc-titre">Contre-exemple</span>

Pour $n \geq 2$, il n'y a pas de généralisation :

$$
f(x) = \begin{cases} x^2 \sin \dfrac{1}{x} & \text{si } x \neq 0 \\ 0 & \text{si } x = 0 \end{cases}
$$

Comme $|f(x)| \leq x^2 = \mathrm{o}(x)$, on a $f(x) = 0 + 0\cdot x + \mathrm{o}(x)$ :
$f$ admet un DL d'ordre $1$ en $0$ (et $f$ est dérivable en $0$, avec $f'(0) = 0$).

**Mais** $f$ n'admet pas de DL d'ordre $2$ en $0$ : on aurait sinon
$f(x) = a_0 + a_1 x + a_2 x^2 + \mathrm{o}(x^2)$, et par unicité
$a_0 = a_1 = a_2 = 0$, ce qui imposerait $\dfrac{f(x)}{x^2} = \sin\dfrac{1}{x} \to 0$,
faux puisque $\sin\dfrac{1}{x}$ n'a pas de limite en $0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (unicité)</span>

Si $f$ admet un DL d'ordre $n$ en $a$, alors le polynôme $P$ est **unique**.

</div>

<details class="demo" markdown="1">
<summary>Démonstration</summary>

Supposons $f(x) = P(x-a) + (x-a)^n\varepsilon(x) = Q(x-a) + (x-a)^n\eta(x)$ avec
$P = \sum_{k=0}^{n} a_k X^k$ et $Q = \sum_{k=0}^{n} b_k X^k$.

- $a_0 = \lim_{x\to a} f(x) = b_0$.
- Hypothèse de récurrence : $a_i = b_i$ pour $0 \leq i < k$, avec $k \leq n$. Alors

$$
a_{k+1}(x-a)^{k+1} + a_{k+2}(x-a)^{k+2} + \dots + a_n (x-a)^n + (x-a)^n\varepsilon(x)
= b_{k+1}(x-a)^{k+1} + \dots + (x-a)^n\eta(x)
$$

Pour $x \neq a$, on divise par $(x-a)^{k+1}$ :

$$
a_{k+1} + (x-a)a_{k+2} + \dots + (x-a)^{n-k-1}a_n + (x-a)^{n-k-1}\varepsilon(x)
= b_{k+1} + (x-a)b_{k+2} + \dots + (x-a)^{n-k-1}\eta(x)
$$

Par passage à la limite quand $x \to a$ : $a_{k+1} = b_{k+1}$.

La propriété est donc récurrente pour $0 \leq k \leq n$ : $P = Q$.

</details>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle **partie régulière** du DL la quantité $P(x-a)$, et **partie
complémentaire** la quantité $(x-a)^n\,\varepsilon(x)$.

On appelle **partie principale** du DL la quantité $a_p (x-a)^p$, où
$p = \operatorname{val}(P)$ pour $P \neq 0$. Si $P \neq 0$ :

$$
f(x) \underset{x \to a}{\sim} a_p (x-a)^p
$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés de changement de variable et de parité</span>

- Si $f$ admet un DL d'ordre $n$ en $a$, alors $g(x) = f(x+a)$ admet un DL d'ordre $n$ en $0$
  (et réciproquement).
- Si $f$ est définie sur $]-a, a[$ et admet un DL en $0$ d'ordre $n$, alors :
  $f$ paire $\Rightarrow$ $P$ pair ; $f$ impaire $\Rightarrow$ $P$ impair.

</div>

<details class="demo" markdown="1">
<summary>Démonstration</summary>

**Changement de variable.** Si $f$ est définie sur $I$ et
$\forall x \in I,\ f(x) = P(x-a) + \varepsilon(x)(x-a)^n$, alors $g$ est définie sur
$J = I - a = \{x - a \mid x \in I\}$ et, pour $y \in J$ :
$g(y) = P(y) + \varepsilon(y+a)\,y^n = P(y) + \eta(y)\,y^n$ avec
$\eta(y) = \varepsilon(y+a) \xrightarrow[y\to 0]{} 0$ par composition de limites.

**Parité.** Soit $I$ un intervalle centré et $\forall x \in I,\ f(x) = P(x) + x^n\varepsilon(x)$.
Si $f$ est paire : $f(-x) = f(x) = P(-x) + (-x)^n\varepsilon(-x) = P(-x) + x^n\eta(x)$ avec
$\eta(x) = (-1)^n\varepsilon(-x) \xrightarrow[x\to 0]{} 0$. Par unicité du DL,
$\forall x \in I,\ P(x) = P(-x)$ : $P(X)$ et $P(-X)$ ont une infinité de racines
communes, donc $P$ est pair. Le cas impair est analogue.

</details>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque (troncature)</span>

Si $f$ admet en $a$ un DL d'ordre $n$, alors $f$ admet en $a$ un DL d'ordre $p \leq n$,
et la partie régulière s'obtient en **tronquant** $P$ : on ne garde que les monômes
de degré $\leq p$.

</div>

## II. Formule de Taylor-Young et conséquences

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème (Taylor-Young — rappel)</span>

Soit $f$ de classe $\mathcal{C}^n$ sur un voisinage $V$ de $a$. Alors, pour tout $h$
tel que $[a, a+h] \subset V$ :

$$
f(a+h) = f(a) + \sum_{k=1}^{n} \frac{f^{(k)}(a)}{k!}\, h^k + \varepsilon(h)\, h^n,
\qquad \varepsilon(h) \xrightarrow[h\to 0]{} 0
$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Conséquence</span>

Sous ces hypothèses, $f$ admet un DL d'ordre $n$ en $a$ et sa partie régulière est le
polynôme de Taylor :

$$
f(a) + f'(a)(x-a) + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n
$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">DL usuels en 0</span>

$$
\begin{aligned}
e^x &= 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots + \frac{x^n}{n!} + \mathrm{o}(x^n) \\[4pt]
\cos x &= 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots + (-1)^n\frac{x^{2n}}{(2n)!} + \mathrm{o}(x^{2n}) \\[4pt]
\sin x &= x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots + (-1)^n\frac{x^{2n+1}}{(2n+1)!} + \mathrm{o}(x^{2n+1}) \\[4pt]
\ln(1+x) &= x - \frac{x^2}{2} + \frac{x^3}{3} + \dots + (-1)^{n-1}\frac{x^n}{n} + \mathrm{o}(x^n) \\[4pt]
(1+x)^\alpha &= 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \dots + \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n + \mathrm{o}(x^n) \\[4pt]
\frac{1}{1+x} &= 1 - x + x^2 - x^3 + \dots + (-1)^n x^n + \mathrm{o}(x^n)
\end{aligned}
$$

avec $\left(\dfrac{1}{1+x}\right)^{(n)} = \dfrac{(-1)^n\, n!}{(1+x)^{n+1}}$.

</div>

### Visualisation interactive

<div class="composant" data-composant="dl-viewer"></div>

Choisis une fonction usuelle et fais varier l'ordre $n$ du DL en $0$ : la courbe bleue
est $f$, la courbe rouge en tirets est le polynôme de Taylor-Young $P_n$ (affiché en
LaTeX sous le graphique). Le second graphique montre l'erreur $|f(x) - P_n(x)|$ en
échelle logarithmique — on y lit directement le $\mathrm{o}(x^n)$ : plus $n$ est grand,
plus la courbe rouge épouse la bleue longtemps au voisinage de $0$.

## III. Opérations sur les DL

### 1) Addition

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $f$ admet en $0$ un DL d'ordre $n$ de partie régulière $P(x)$, et $g$ un DL
d'ordre $n$ de partie régulière $Q(x)$, alors $f+g$ admet en $0$ un DL d'ordre $n$
de partie régulière $P + Q$.

</div>

<details class="demo" markdown="1">
<summary>Démonstration</summary>

$\forall x \in V(0),\ f(x) = P(x) + x^n\varepsilon(x)$ et
$\forall x \in V'(0),\ g(x) = Q(x) + x^n\eta(x)$. Alors, pour $x \in V \cap V'$ :

$$
(f+g)(x) = (P+Q)(x) + x^n\big(\varepsilon(x) + \eta(x)\big)
$$

avec $\deg(P+Q) \leq n$ et $\theta(x) = \varepsilon(x)+\eta(x) \xrightarrow[x\to 0]{} 0$.

</details>

### 2) Produit

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $f(x) = P(x) + x^n\varepsilon(x)$ et $g(x) = Q(x) + x^n\eta(x)$, alors $f \times g$
admet en $0$ un DL d'ordre $n$, dont la partie régulière s'obtient en **ne gardant que
les termes de degré $\leq n$** dans le produit $P \times Q$.

</div>

<details class="demo" markdown="1">
<summary>Démonstration</summary>

$$
f(x)g(x) = P(x)Q(x) + x^n\Big(\varepsilon(x)Q(x) + \eta(x)P(x) + x^n\varepsilon(x)\eta(x)\Big)
$$

En écrivant $P Q (X) = \sum_{k=0}^{n} a_k X^k + R(X)$ avec
$R(X) = X^n \sum_{k > n} a_k X^{k-n}$, le reste est bien de la forme $x^n\theta(x)$
avec $\theta(x) \to 0$.

</details>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — $e^x \cos x$ à l'ordre 3 en 0</span>

$$
\begin{aligned}
e^x \cos x &= \Big(1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \mathrm{o}(x^3)\Big)\Big(1 - \frac{x^2}{2} + \mathrm{o}(x^3)\Big) \\
&= 1 + x - \frac{x^3}{3} + \mathrm{o}(x^3)
\end{aligned}
$$

</div>

### 3) Quotient

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $f$ et $g$ admettent un DL d'ordre $n$ en $0$, de parties régulières $P$ et $Q$,
et si $Q(0) \neq 0$, alors $\dfrac{f}{g}$ admet un DL d'ordre $n$ en $0$, dont la
partie régulière est le **quotient selon les puissances croissantes** de $P$ par $Q$,
tronqué à l'ordre $n$.

</div>

<details class="demo" markdown="1">
<summary>Démonstration (esquisse)</summary>

$Q(0) = g(0) \neq 0$ et $g$ ne s'annule pas sur un voisinage de $0$ (car $g$ est
continue, puisqu'elle admet un DL d'ordre $0$). On écrit la division de $P$ par $Q$ :
$P = Q\,T + X^{n+1} R$, d'où

$$
\left(\frac{f}{g}\right)(x) = \frac{Q(x)T(x) + x^{n+1}R(x) + x^n\varepsilon(x)}{Q(x) + x^n\eta(x)}
= T(x) + x^n\theta(x), \qquad \theta(x) \xrightarrow[x\to 0]{} 0
$$

</details>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Application — DL de $\tan x$ en 0</span>

$$
\tan x = x + \frac{x^3}{3} + \frac{2}{15}x^5 + \frac{17}{315}x^7 + \mathrm{o}(x^7)
$$

</div>

### 4) Composée

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

- Si $f$ admet un DL d'ordre $n$ en $0$,
- et si $g$ admet un DL d'ordre $n$ en $a_0 = f(0)$,

alors $g \circ f$ admet un DL d'ordre $n$ en $0$.

</div>

<details class="demo" markdown="1">
<summary>Démonstration (esquisse) et écriture pratique</summary>

$f$ est définie sur un voisinage $V$ de $0$ et continue en $0$, donc $f(V)$ contient
un voisinage de $a_0$. Avec
$f(x) = a_0 + a_1 x + \dots + a_n x^n + x^n\varepsilon(x)$ et
$g(x) = b_0 + b_1(x-a_0) + \dots + b_n (x-a_0)^n + (x-a_0)^n\eta(x)$ :

$$
g\circ f(x) = b_0 + b_1(f(x)-a_0) + \dots + b_n(f(x)-a_0)^n + (f(x)-a_0)^n\eta(f(x))
$$

Chaque $(f(x)-a_0)^k$ admet un DL d'ordre $n$ en $0$ (produit de DL), et l'on ne
conserve que les monômes de degré $\leq n$. **Écriture pratique** en tableau :

| terme | contribution aux degrés $\leq n$ |
|---|---|
| $b_0$ | $b_0$ |
| $b_1(f(x)-a_0)$ | $b_1 a_1 x + b_1 a_2 x^2 + \dots + b_1 a_n x^n$ |
| $b_2(f(x)-a_0)^2$ | $b_2 a_1^2 x^2 + \dots$ |
| $\vdots$ | $\vdots$ |
| $b_n(f(x)-a_0)^n$ | $b_n a_1^n x^n$ |

</details>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — $\ln(\cos x)$ à l'ordre 4 en 0</span>

$$\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} + \mathrm{o}(x^4)$$

On pose $u(x) = \cos x - 1 = -\dfrac{x^2}{2} + \dfrac{x^4}{24} + \mathrm{o}(x^4)$, et
$\ln(1+x) = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \dfrac{x^4}{4} + \mathrm{o}(x^4)$ ; par composition :

$$
\ln(\cos x) = -\frac{x^2}{2} - \frac{x^4}{12} + \mathrm{o}(x^4)
$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — $\dfrac{1}{\sqrt{1+\cos x}}$ à l'ordre 4 en 0</span>

$$
\frac{1}{\sqrt{1+\cos x}} = (1+\cos x)^{-1/2}
= \frac{\sqrt{2}}{2}\left(1 + \frac{\cos x - 1}{2}\right)^{-1/2}
= \frac{\sqrt{2}}{2}\left(1 + u\right)^{-1/2}
$$

avec $u = \dfrac{\cos x - 1}{2} \to 0$, d'où le développement par composition avec
$(1+u)^{-1/2}$.

</div>

### 5) Primitive (intégration)

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $f'$ admet en $0$ un DL d'ordre $n$ de partie régulière
$b_0 + b_1 x + \dots + b_n x^n$, alors $f$ admet en $0$ un DL d'ordre $n+1$ de partie
régulière

$$
f(0) + b_0 x + \frac{b_1}{2}x^2 + \dots + \frac{b_n}{n+1}x^{n+1}
$$

</div>

<details class="demo" markdown="1">
<summary>Démonstration (esquisse)</summary>

Posons $\varphi(x) = f(x) - f(0) - b_0 x - \dots - \dfrac{b_n}{n+1}x^{n+1}$. Alors
$\varphi'(x) = f'(x) - b_0 - b_1 x - \dots - b_n x^n = x^n\varepsilon(x)$ avec
$\varepsilon(x) \to 0$. Pour $|x| < \alpha$ assez petit, $|\varphi'(x)| \leq \varepsilon\,|x|^n$ ;
par l'inégalité des accroissements finis, $|\varphi(x)| \leq \varepsilon \dfrac{|x|^{n+1}}{n+1}$,
d'où $\varphi(x) = \mathrm{o}(x^{n+1})$.

</details>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $(\ln(1+x))' = \dfrac{1}{1+x} = 1 - x + x^2 + \dots + (-1)^n x^n + \mathrm{o}(x^n)$, donc

$$
\ln(1+x) = x - \frac{x^2}{2} + \dots + (-1)^n\frac{x^{n+1}}{n+1} + \mathrm{o}(x^{n+1})
$$

- $(\arcsin x)' = \dfrac{1}{\sqrt{1-x^2}}$. Avec
$\dfrac{1\cdot 3 \cdots (2n-1)}{2\cdot 4 \cdots 2n} = \dfrac{(2n)!}{2^{2n}(n!)^2}$, on obtient

$$
\arcsin x = x + \frac{1}{2}\frac{x^3}{3} + \frac{1\cdot 3}{2\cdot 4}\frac{x^5}{5} + \dots + \frac{1\cdot 3\cdots(2n-1)}{2\cdot 4\cdots 2n}\frac{x^{2n+1}}{2n+1} + \mathrm{o}(x^{2n+1})
$$

- De même, $(\arctan x)' = \dfrac{1}{1+x^2}$ donne

$$
\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} + \dots + (-1)^n\frac{x^{2n+1}}{2n+1} + \mathrm{o}(x^{2n+1})
$$

</div>

### 6) Dérivation

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $f$ admet un DL d'ordre $n \geq 1$ en $0$, de partie régulière $P(x)$, et si $f'$
existe au voisinage de $0$, alors $f'$ admet un DL d'ordre $n-1$ au voisinage de $0$,
de partie régulière $P'$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$\dfrac{1}{(1+x)^2} = \left(-\dfrac{1}{1+x}\right)'$. Comme
$f(x) = -\dfrac{1}{1+x} = -1 + x - x^2 + \dots + (-1)^n x^n + \mathrm{o}(x^n)$, on en déduit

$$
\frac{1}{(1+x)^2} = 1 - 2x + \dots + (-1)^{n+1} n\, x^{n-1} + \mathrm{o}(x^{n-1})
$$

</div>

## IV. Applications

### 1) Calculs de limites et équivalents

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$\lim_{x\to 0} \frac{\ln(1+x) - x + \frac{x^2}{2}}{x^3}$$

On a $\ln(1+x) = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} + \mathrm{o}(x^3)$, donc
$\ln(1+x) - x + \dfrac{x^2}{2} \sim \dfrac{x^3}{3}$ et la limite vaut $\boxed{\dfrac{1}{3}}$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Technique</span>

On utilise, pour $x \to a$, $x \neq a$ :

$$
f(x) = a_0 + a_1 x + a_2 x^2 + \dots + a_{p-1}x^{p-1} + a_p x^p + \mathrm{o}(x^p)
$$

(pour une fonction $f$ admettant un DL d'ordre $n \geq p$), ce qui donne directement
l'équivalent $f(x) \sim a_p x^p$ si $a_p \neq 0$.

Autres exemples : $\lim_{x\to 0}\left(\dfrac{1}{\sin x} - \dfrac{1}{x}\right)$ ;
$\dfrac{x - \sin x}{x \sin x} \sim \dfrac{x^3/6}{x^2} = \dfrac{x}{6}$, donc
$\lim_{x\to 0} \dfrac{x-\sin x}{x\sin x} = 0$.

</div>

### 2) Étude locale d'une fonction

**a) Continuité — dérivabilité.** Si $f(x) = a_0 + a_1 x + \mathrm{o}(x)$, alors
$\lim_{x\to 0} f(x) = a_0$ ; si $f$ n'est pas définie en $0$, on peut la prolonger
en $0$ par continuité en posant $f(0) = a_0$. $f$ ainsi prolongée est dérivable en $0$
et $f'(0) = a_1$.

**b) Tangente.** Si $f(x) = a_0 + a_1 x + \mathrm{o}(x)$, $f$ est dérivable en $0$ de
dérivée $a_1$ et admet pour tangente en $0$ : $y = a_0 + a_1 x$.

Plus généralement, si $f$ admet un DL d'ordre $n \geq 2$ en $a$ :

$$
f(x) = a_0 + a_1(x-a) + a_2 (x-a)^2 + \mathrm{o}\big((x-a)^2\big)
$$

et l'on étudie la **position de la courbe** $\Gamma$ au voisinage de $a$ via le signe de

$$
s(x) = f(x) - a_0 - a_1(x-a) = a_2 (x-a)^2 + \mathrm{o}\big((x-a)^2\big)
$$

- si $a_2 > 0$ au voisinage de $a$ : $s(x) > 0$, $\Gamma$ est **au-dessus** de sa tangente ;
- si $a_2 < 0$ : $s(x) \sim a_2 (x-a)^2 < 0$, $\Gamma$ est **au-dessous** de sa tangente ;
- si $a_2 = 0$, on regarde le premier terme non nul $a_k$ du DL, $k \geq 2$ :
  $s(x) \sim a_k (x-a)^k$.
  - $k$ **pair** : $s(x)$ est du signe de $a_k$ des deux côtés de $a$ — $\Gamma$ reste
    d'un même côté de la tangente ;
  - $k$ **impair** : $s(x)$ change de signe en $a$ — $\Gamma$ **traverse** sa tangente en $a$.

**c) Point d'inflexion.** $f$ admet un **point d'inflexion** en $a$ si $\Gamma$ admet
une tangente en $a$ et traverse cette tangente en $a$.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $f$ est $\mathcal{C}^2$ au voisinage de $a$, une **condition nécessaire** pour que
$f$ admette un point d'inflexion en $a$ est $f''(a) = 0$.

Si de plus $f$ est $\mathcal{C}^3$, une **condition suffisante** est
$f''(a) = 0$ et $f'''(a) \neq 0$.

</div>

<details class="demo" markdown="1">
<summary>Démonstration</summary>

$f$ de classe $\mathcal{C}^2$ admet un DL d'ordre 2 en $a$ :
$f(x) = f(a) + f'(a)(x-a) + \dfrac{f''(a)}{2}(x-a)^2 + \mathrm{o}\big((x-a)^2\big)$.
Si $f''(a) \neq 0$, d'après l'étude de position ci-dessus, $\Gamma$ reste du même côté
de sa tangente au voisinage de $a$ : pas de point d'inflexion.

</details>

**d) Convexité — concavité** (si $f$ est de classe $\mathcal{C}^2$). Le signe de
$a_2 = \dfrac{f''(a)}{2}$ donne le sens de concavité de $f$ au voisinage de $a$ :
$f''$ étant continue,

- $a_2 > 0 \Rightarrow f'' > 0$ au voisinage de $a$ : $f$ est **convexe** ;
- $a_2 < 0 \Rightarrow f'' < 0$ au voisinage de $a$ : $f$ est **concave**.

## V. Développements limités à l'infini et asymptotiques

### 1) DL à l'infini

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $f$, définie au voisinage de $+\infty$, admet un **DL à l'infini d'ordre $n$**
si $g(x) = f\!\left(\dfrac{1}{x}\right)$ admet un DL d'ordre $n$ au voisinage de $0$.
Sa partie régulière est alors $P\!\left(\dfrac{1}{x}\right)$, où $P$ est la partie
régulière du DL de $g$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — $\ln\!\left(1 + \frac{1}{x}\right)$ en $+\infty$</span>

Avec $y = \dfrac{1}{x}$ et $\ln(1+y) = y - \dfrac{y^2}{2} + \dfrac{y^3}{3} + \mathrm{o}(y^3)$ :

$$
\ln\!\left(1 + \frac{1}{x}\right) = \frac{1}{x} - \frac{1}{2x^2} + \frac{1}{3x^3} + \mathrm{o}\!\left(\frac{1}{x^3}\right)
$$

</div>

### 2) Application à l'étude des branches infinies

**Rappels.** Quand $x \to +\infty$ :

- $\dfrac{f(x)}{x} \to +\infty$ : branche parabolique de direction $Oy$ ;
- $\dfrac{f(x)}{x} \to 0$ : branche parabolique de direction $Ox$ ;
- $\dfrac{f(x)}{x} \to a \neq 0$ : direction asymptotique $y = ax$ ;
- si de plus $f(x) - ax \to b$ : **asymptote** d'équation $y = ax + b$.

Si $\dfrac{f(x)}{x}$ admet un DL en $+\infty$ de la forme

$$
\frac{f(x)}{x} = a_0 + \frac{a_1}{x} + \frac{a_2}{x^2} + \dots + \frac{a_n}{x^n} + \mathrm{o}\!\left(\frac{1}{x^n}\right), \quad n \geq 1
$$

alors :

- si $a_0 = 0$ : branche parabolique de direction asymptotique ;
- si $a_0 \neq 0$ : $f$ admet la droite d'équation $y = a_0 x + a_1$ comme **asymptote**.
  La **position** de $\Gamma$ par rapport à l'asymptote est donnée par le signe du
  premier coefficient $a_k$ non nul, $k \geq 2$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — $f(x) = \dfrac{3x^2+1}{x-1}$ en $\pm\infty$</span>

Avec $y = \dfrac{1}{x}$ :

$$
f(x) = g(y) = \frac{\frac{3}{y^2}+1}{\frac{1}{y}-1} = \frac{3+y^2}{y(1-y)} = \frac{1}{y}\big(3 + 3y + 4y^2 + \mathrm{o}(y^2)\big)
$$

donc $f(x) = x\left(3 + \dfrac{3}{x} + \dfrac{4}{x^2} + \mathrm{o}\!\left(\dfrac{1}{x^2}\right)\right)
= 3x + 3 + \dfrac{4}{x} + \mathrm{o}\!\left(\dfrac{1}{x}\right)$.

$f$ admet donc pour asymptote la droite $(D) : y = 3x + 3$ ; en $+\infty$, $\Gamma$ est
au-dessus de $(D)$ (signe de $a_2 = 4 > 0$), et en $-\infty$ au-dessous.

</div>

## VI. Exercices — feuille n° 16

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 16 (énoncés)</span>

**1)** Calculer les DL des fonctions suivantes au voisinage du point et à l'ordre indiqués :

<ol class="enonces">
<li>
<ol>
<li>$f(x) = \ln(1+x)\,\dfrac{x^2}{1-x}$, ordre 6 au voisinage de 0</li>
<li>$f(x) = \ln(x)\,\dfrac{(1-x)^2}{2-x}$, ordre 6 au voisinage de 1</li>
<li>$f(x) = \dfrac{\sin x + 1 + x}{\cos x + e^x}$, ordre 3 au voisinage de 0</li>
<li>$f(x) = \dfrac{\sin x + x}{x(\cos x + e^x)}$, ordre 3 au voisinage de 0</li>
<li>$f(x) = \sin(\tan x)$, ordre 5 au voisinage de 0</li>
<li>$f(x) = \ln(\cos x)$, ordre 4 au voisinage de 0</li>
<li>$f(x) = \sqrt{1+\sqrt{1+x}}$, ordre 2 au voisinage de 0</li>
<li>$f(x) = \sin^2 x$, ordre 5 au voisinage de $\dfrac{\pi}{4}$</li>
<li>$f(x) = \dfrac{x}{1+x}$, ordre 4 au voisinage de $-\dfrac{1}{2}$</li>
<li>$f(x) = (\tan x)^{\cos 2x}$, ordre 4 au voisinage de $\dfrac{\pi}{4}$</li>
<li>$f(x) = (\cos x)^{\frac{1}{\sin^2 x}}$, ordre 4 au voisinage de 0</li>
<li>$f(x) = \arcsin\!\left(\dfrac{e^x}{2}\right)$, ordre 5 au voisinage de 0</li>
<li>$f(x) = \arctan\sqrt{\dfrac{1+x}{3+x}}$, ordre 3 au voisinage de $+\infty$</li>
</ol>
</li>
<li>Calculer les limites des fonctions suivantes quand $x$ tend vers $a$ :
<ol>
<li>$f(x) = \dfrac{\sin x \sqrt{1+x+\ln(1+x)}}{\sin x - x}$, $a = 0$</li>
<li>$f(x) = \sqrt{x^2+x+1} + \sqrt{4x^2+3x+2} - \sqrt{9x^2-2x+6}$, $a = +\infty$</li>
<li>$f(x) = x^2\left(1+\dfrac{1}{x}\right)^{x} - e\,x^3 \ln\!\left(1+\dfrac{1}{x}\right)$, $a = +\infty$</li>
<li>$f(x) = \left(\dfrac{\sin x}{x}\right)^{\frac{1}{\sin x}}$, $a = 0$</li>
<li>$f(x) = \left(\dfrac{\ln(1+x)}{\ln x}\right)^{x\ln x}$, $a = +\infty$</li>
<li>$f(x) = \dfrac{\sin(\ln x) - \sqrt{\ln(\sin(\pi x/2))}}{x-1}$, $a = 1$</li>
</ol>
</li>
<li>Étudier les branches infinies de :
<ol>
<li>$f(x) = x\sqrt{1+\dfrac{1}{x}}$</li>
<li>$f(x) = x^2 \ln\left|\dfrac{1+x}{x}\right|$</li>
<li>$f(x) = (x-1)\,e^{\frac{1}{x^2-3x+2}}$</li>
<li>$f(x) = x^3\left(e^{1/x} - \cos\frac{1}{x}\right)$</li>
</ol>
</li>
<li>Étudier l'allure des courbes représentatives de :
<ol>
<li>$f(x) = \dfrac{1}{x}\left(e^{\sin x} - 1\right)$ au voisinage de 0</li>
<li>$f(x) = x^{3/2}\ln x$ au voisinage de 1 (position par rapport à la tangente et à la parabole $y = x^2 - x$)</li>
<li>$f(x) = \sqrt{x(x+2)}\,e^{1/x}$ (branches infinies soigneusement étudiées)</li>
<li>$f(x) = \dfrac{x^2}{\sqrt{2(x^4 - 2x^2 + 2)}}$</li>
<li>$f(x) = \dfrac{1}{\ln(1+x)} - \dfrac{1}{x}$</li>
</ol>
</li>
<li>
<ol>
<li>Soit $f(x) = x + x^3$. Montrer que $f$ est bijective et trouver un DL à l'ordre 5 de $f^{-1}$ en 0, après avoir justifié son existence.</li>
<li>Généralisation : si $f$ est bijective sur $[-b, b]$ et admet au voisinage de 0 un DL d'ordre $n$ dont la partie principale est $a x$ avec $a \neq 0$, alors $f^{-1}$ admet en 0 un DL d'ordre $n$ de partie principale $\dfrac{x}{a}$.</li>
</ol>
</li>
<li>Prouver que $\tan x - x$ admet une unique racine $x_n$ dans l'intervalle
$\left]\dfrac{\pi}{2} + k\pi,\ \dfrac{\pi}{2} + (k+1)\pi\right[$. Trouver un développement
asymptotique de $x_n$ quand $n \to +\infty$ (on donnera une précision en $1/n^4$).
</li>
</ol>

</div>

---

*Note de transcription : le cours (pages 1–16) et les énoncés de la feuille n° 16
(pages 17–18) sont retranscrits ci-dessus. Les corrigés manuscrits des exercices
(pages 19–40, brouillons) ne sont pas repris dans cette version.*
