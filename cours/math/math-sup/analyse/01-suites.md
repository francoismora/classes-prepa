---
layout: chapitre
title: "Suites"
numero: 1
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Analyse"
source: "Math/Math Sup/Analyse/01 Suites"
pages: 67
---

## I. Propriété première de $\mathbb{R}$

### 1) L'ordre de $\mathbb{R}$

$\leq$ est une relation d'ordre total dans $\mathbb{R}$, à valeurs absolues.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (valeur absolue)</span>

$$&#124;x&#124; = \max\big(\{x, -x\}\big)$$

($x$ et $-x$ sont comparables : $&#92;&#123;x&#92;&#125; \cup &#92;&#123;-x&#92;&#125;$ admet un plus grand élément.)

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Inégalité triangulaire</span>

$$\big&#124;&#124;x&#124; - &#124;y&#124;\big&#124; \leq &#124;x + y&#124; \leq &#124;x&#124; + &#124;y&#124;$$

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème (borne supérieure)</span>

Toute partie non vide et majorée de $\mathbb{R}$ admet une borne supérieure.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$I = [0, 1[$ : $\sup I = 1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1 (caractérisation de la borne supérieure)</span>

Soit $A$ une partie de $\mathbb{R}$ non vide et majorée, et soit $M$ un majorant de $A$. Alors

$$M = \sup A \iff \Big(\forall \varepsilon > 0,\ \exists a \in A,\quad M - \varepsilon < a \leq M\Big)$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

1) Soit $M = \sup A$. Soit $\varepsilon > 0$ : alors $M - \varepsilon$ n'est pas un majorant de $A$, donc il existe $a \in A$ tel que $a \geq M - \varepsilon$, d'où $M \geq a \\geq M - \varepsilon$.

2) Soit $M'$ un majorant de $A$ tel que $\forall \varepsilon > 0,\ \exists a \in A,\ M' - \varepsilon \leq a \leq M'$. Si $M' < M$, posons $2\varepsilon = M - M' > 0$, c'est-à-dire $M' = M - 2\varepsilon$ ; d'après 1) il existe $a \in A$ avec $M - \varepsilon \leq a \leq M$, soit $a \geq M' + \varepsilon > M'$, ce qui contredit le fait que $M'$ est un majorant de $A$. Donc $M' \geq M$, et finalement $M' = M$ : $M = \sup A$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Borne inférieure</span>

Toute partie de $\mathbb{R}$ non vide et minorée admet une borne inférieure.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $A$ non vide, minorée par $m$. Posons $(-A) = &#92;&#123;-a \mid a \in A&#92;&#125;$. Pour $a \in A$, $m \leq a$ donc $-m \geq -a$ : $-m$ est un majorant de $(-A)$, donc $(-A)$ admet une borne supérieure. Soit $M$ un majorant de $(-A)$ : $M$ est un minorant de $A$. Soit $m'$ un autre minorant de $A$ : $-m'$ est un majorant de $(-A)$, donc $M \leq -m'$ (car $M$ est le plus petit des majorants), donc $m' \geq -M$. Ainsi $-M$ est le plus petit des minorants de $A$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3 (caractérisation de la borne inférieure)</span>

$A$ non vide et minorée, avec $m = \inf A$, si et seulement si

$$\forall \varepsilon > 0,\ \exists a \in A,\quad m \leq a \leq m + \varepsilon$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 4 ($\mathbb{R}$ est archimédien)</span>

$$\forall (a, b) \in \mathbb{R}_+^* \times \mathbb{R},\quad \exists n \in \mathbb{N},\quad n a > b$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Posons $A = &#92;&#123;n a \mid n \in \mathbb{N}&#92;&#125;$. Si $b$ était un majorant de $A$ : $A \neq \varnothing$ et $A$ admet une borne supérieure $\alpha$ ; $\forall n \in \mathbb{N},\ n a \leq \alpha$, donc $(n+1)a \leq \alpha$, d'où $n a \leq \alpha - a$ ; ainsi $\alpha - a$ majore $A$, or $\alpha - a < \alpha$ car $a > 0$ : impossible, car $\alpha$ est le plus petit des majorants.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Conséquence (partie entière)</span>

Pour tout $x \in \mathbb{R}$, il existe un unique entier $m$ tel que $m \leq x < m+1$. On l'appelle **partie entière** de $x$, notée $m = E(x)$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Posons $A = &#92;&#123;n \in \mathbb{N} \mid n \leq x&#92;&#125;$. Comme $\mathbb{R}$ est archimédien, il existe $M \in \mathbb{N}$ tel que $M > x$ : $A$ est non vide et majoré, donc admet une borne sup $E(x)$, et $E(x) \leq x < E(x) + 1$ par définition de la borne sup.

2ᵉ cas : $-x \in \mathbb{R}$, donc il existe un unique entier $E(-x)$ ; de $E(-x) \leq -x < E(-x)+1$ on tire $-(E(-x)+1) < x \leq -E(-x)$, ce qui fournit l'encadrement cherché pour $x < 0$ ; $E(x)$ est le plus grand élément de $A$, donc unique.

</div>

### 2) Rationnels et irrationnels

$$\mathbb{R} \setminus \mathbb{Q} \neq \varnothing \quad \text{car} \quad \sqrt{2} \in \mathbb{R} \setminus \mathbb{Q}$$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Soient $a$ et $b$ deux réels distincts : $\exists x \in \mathbb{Q}$ tel que $a < x < b$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

**Analyse.** Si $a < \dfrac{p}{q} < b$ avec $q > 0$ : $a q < p < b q$ ; or $(b-a)q > 1$.

**Synthèse.** $(b-a) > 0$, donc $\exists q \in \mathbb{N}$ tel que $(bq - aq) > 1$ ($\mathbb{R}$ archimédien). Alors $bq - aq > 1$, donc $]aq, bq[$ contient un entier $p$ : $aq < p < bq$. Comme $q > 0$ : $a < \dfrac{p}{q} < b$, avec $\dfrac{p}{q} \in \mathbb{Q} \cap &#92;&#44;]a, b[$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Entre deux rationnels, il existe un irrationnel.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soient $x < x'$ deux rationnels. Soit $I > 0$ un irrationnel (par exemple $\sqrt{2}$) et posons $y = \dfrac{x' - x}{I} > 0$ : il existe un rationnel $r$ dans $]0, y[$ (propriété 1). Posons $\alpha = x + r I$ : alors $x < \alpha$ et

$$\alpha < x + y I = x + \frac{x'-x}{I}\, I = x'$$

De plus $\alpha$ est irrationnel : sinon $r \neq 0$ et $I = \dfrac{\alpha - x}{r} \in \mathbb{Q}$, contradiction.

</div>

## II. Généralités

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Suite réelle</span>

Une **suite réelle** est une application de $\mathbb{N}$ dans $\mathbb{R}$ :

$$n \longmapsto u_n$$

L'application se note $(u_n)$ ou $(u_n)&#95;{n \in \mathbb{N}}$ (c'est la suite). L'ensemble des suites réelles est noté $\mathbb{R}^{\mathbb{N}}$.

</div>

On définit les lois usuelles :

$$(u_n) + (v_n) = (u_n + v_n), \qquad (u_n)(v_n) = (u_n v_n), \qquad \lambda \in \mathbb{R},\ \lambda (u_n) = (\lambda u_n)$$

### 2) Suites majorées, minorées, bornées

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $X = &#92;&#123;u_n \mid n \in \mathbb{N}&#92;&#125; \subset \mathbb{R}$. On dit que $u_n$ est **majorée** (resp. **minorée**, resp. **bornée**) si $X$ est majorée (resp. minorée, resp. bornée) dans $\mathbb{R}$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

- $(u_n)$ est majorée ssi $\exists M \in \mathbb{R},\ \forall n \in \mathbb{N},\ u_n \leq M$ ;
- $(u_n)$ est minorée ssi $\exists m \in \mathbb{R},\ \forall n \in \mathbb{N},\ u_n \geq m$ ;
- $(u_n)$ est bornée ssi $\exists m, M \in \mathbb{R},\ \forall n \in \mathbb{N},\ m \leq u_n \leq M$.

</div>

## III. Convergence

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Convergence</span>

Soit $l \in \mathbb{R}$. La suite $(u_n)$ **converge vers $l$** (on note $u_n \to l$) si

$$\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall n \geq N,\quad &#124;u_n - l&#124; \leq \varepsilon$$

Si $(u_n)$ ne converge pas, on dit que $(u_n)$ **diverge**.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

La suite $\left(\dfrac{1}{n}\right)$ converge vers $0$. Soit $\varepsilon > 0$ ; on cherche $N$ tel que $\forall n \geq N,\ \dfrac{1}{n} \leq \varepsilon$, c'est-à-dire $n \geq \dfrac{1}{\varepsilon}$. On prend $N = E&#92;&#33;\left(\dfrac{1}{\varepsilon}\right) + 1$.

</div>

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1 (unicité de la limite)</span>

Si $(u_n)$ converge vers $l$, alors $l$ s'appelle **limite** de $(u_n)$ et elle est **unique**.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Supposons que $(u_n) \to l$ et $(u_n) \to l'$. Alors

$$\forall \varepsilon > 0,\ \exists N_1 \in \mathbb{N},\ \forall n \geq N_1,\ &#124;u_n - l&#124; \leq \varepsilon$$
$$\forall \varepsilon > 0,\ \exists N_2 \in \mathbb{N},\ \forall n \geq N_2,\ &#124;u_n - l'&#124; \leq \varepsilon$$

et $&#124;l - l'&#124; \leq &#124;u_n - l&#124; + &#124;u_n - l'&#124;$. Soit $\varepsilon > 0$ : pour $n \geq \max(N_1, N_2)$, $&#124;l - l'&#124; \leq 2\varepsilon$. Donc $\forall \varepsilon > 0,\ &#124;l-l'&#124; \leq 2\varepsilon$, ce qui n'est possible que si $l = l'$ (sinon, pour $\varepsilon = \dfrac{&#124;l-l'&#124;}{4}$, ce serait faux). Donc $l = l'$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $u_n \to l$, alors $&#124;u_n&#124; \to &#124;l&#124;$. La réciproque est fausse si $l = 0$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $u_n \to l$ : $\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall n \geq N,\ &#124;u_n - l&#124; \leq \varepsilon$ ; or $\big&#124;&#124;u_n&#124; - &#124;l&#124;\big&#124; \leq &#124;u_n - l&#124;$.

</div>

<div class="bloc contre-exemple" markdown="1">

<span class="bloc-titre">Contre-exemple</span>

$\big&#124;(-1)^n\big&#124; = 1 \to 1$, et pourtant $((-1)^n)$ diverge.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Toute suite convergente est bornée</span>

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$u_n \to l$, donc $\forall \varepsilon > 0$, pour $\varepsilon = 1$ : $\exists N \in \mathbb{N},\ \forall n \geq N,\ &#124;u_n - l&#124; \leq 1$. Alors $&#124;u_n&#124; - &#124;l&#124; \leq \big&#124;&#124;u_n&#124; - &#124;l&#124;\big&#124; \leq &#124;u_n - l&#124; \leq 1$, donc $&#124;u_n&#124; \leq &#124;l&#124; + 1$. Soit $M_0 = \max\big(&#124;u_0&#124;, &#124;u_1&#124;, \dots, &#124;u&#95;{N-1}&#124;\big)$ : alors $\max\big(&#124;l&#124;, M_0\big)$ est un majorant de $&#92;&#123;&#124;u_n&#124; \mid n \in \mathbb{N}&#92;&#125;$. Donc $-M \leq &#124;u_n&#124; \leq M$ pour tout $n$ : $(u_n)$ est bornée.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés (opérations sur les limites)</span>

Si $u_n \to l$ et $v_n \to l'$, alors

$$u_n + v_n \to l + l', \qquad u_n v_n \to l l', \qquad \lambda u_n \to \lambda l \quad (\lambda \in \mathbb{R})$$

- si $u_n \to 0$ et $(v_n)$ est bornée, alors $u_n v_n \to 0$ ;
- si $u_n \to l$ et $l \neq 0$, le terme général de la suite est non nul à partir d'un certain rang $n_0$, la suite $\left(\dfrac{1}{u_n}\right)$ est définie pour $n \geq n_0$ et tend vers $\dfrac{1}{l}$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

a) $\forall \varepsilon > 0,\ \exists N_1 \in \mathbb{N},\ \forall n \geq N_1,\ &#124;u_n - l&#124; \leq \varepsilon$ et $\forall \varepsilon > 0,\ \exists N_2 \in \mathbb{N},\ \forall n \geq N_2,\ &#124;v_n - l'&#124; \leq \varepsilon$. Alors

$$&#124;u_n + v_n - l - l'&#124; \leq &#124;u_n - l&#124; + &#124;v_n - l'&#124;$$

Donc pour $n \geq \max(N_1, N_2)$ : $&#124;u_n + v_n - (l+l')&#124; \leq \varepsilon$, d'où $(u_n + v_n) \to l + l'$.

b) $&#124;u_n v_n - l l'&#124; = \big&#124;u_n(v_n - l') + l'(u_n - l)\big&#124; \leq &#124;u_n&#124;&#92;&#44;&#124;v_n - l'&#124; + &#124;l'&#124;&#92;&#44;&#124;u_n - l&#124;$. Soit $\varepsilon > 0$ : il existe $N_1$ tel que $\forall n \geq N_1,\ &#124;u_n - l&#124; \leq \dfrac{\varepsilon}{2(&#124;l'&#124;+1)}$ ; $(u_n)$ est convergente donc bornée : soit $M$ un majorant de $&#124;u_n&#124;$ ; il existe $N_2$ tel que $\forall n \geq N_2,\ &#124;v_n - l'&#124; \leq \dfrac{\varepsilon}{2(M+1)}$. Alors $\forall n \geq \max(N_1, N_2)$ : $&#124;u_n v_n - l l'&#124; \leq \varepsilon$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration (produit par une suite bornée, et inverse)</span>

Si $u_n \to 0$ et $(v_n)$ bornée : $\exists M \in \mathbb{R},\ \forall i \in \mathbb{N},\ &#124;v_i&#124; \leq M$. Soit $\varepsilon > 0$ : $\exists N \in \mathbb{N},\ \forall n \geq N,\ &#124;u_n&#124; \leq \dfrac{\varepsilon}{M}$, d'où $\forall n \geq N,\ &#124;u_n v_n&#124; \leq \varepsilon$ : $u_n v_n \to 0$.

Si $l \neq 0$ : $\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall n \geq N,\ &#124;u_n - l&#124; \leq \varepsilon$. Pour $\varepsilon = \dfrac{&#124;l&#124;}{2}$ : $\forall n \geq N_0,\ -\dfrac{&#124;l&#124;}{2} \leq u_n - l \leq \dfrac{&#124;l&#124;}{2}$, donc $0 < \dfrac{&#124;l&#124;}{2} \leq &#124;u_n&#124; \leq \dfrac{3&#124;l&#124;}{2}$ ; ainsi $u_n > 0$ (en valeur absolue non nul) pour $n \geq N_0 = n_0$. Pour $l \neq 0$ :

$$\left&#124;\frac{1}{u_n} - \frac{1}{l}\right&#124; = \frac{&#124;l - u_n&#124;}{&#124;l u_n&#124;}$$

Soit $n$ tel que $\forall n \geq n_1,\ &#124;u_n - l&#124; \leq \dfrac{1}{2}\varepsilon$ ; alors pour $n \geq \max(n_0, n_1)$ : $\left&#124;\dfrac{1}{u_n} - \dfrac{1}{l}\right&#124; \leq \varepsilon$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 5 (passage à la limite dans une inégalité)</span>

Si $u_n \to l$, $v_n \to l'$ et $u_n \leq v_n$, alors $l \leq l'$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Attention</span>

Si $u_n < v_n$, la conclusion reste $l \leq l'$ (et non $l < l'$).

</div>

<div class="bloc contre-exemple" markdown="1">

<span class="bloc-titre">Contre-exemple</span>

Pour $n \geq 1$ : $u_n = \dfrac{1}{n}$ et $v_n = -\dfrac{1}{n}$ ; on a $u_n > v_n$ mais $u_n \to 0$ et $v_n \to 0$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\forall \varepsilon > 0,\ \exists N_1 \in \mathbb{N},\ \forall n \geq N_1,\ &#124;u_n - l&#124; \leq \varepsilon$ et $\exists N_2 \in \mathbb{N},\ \forall n \geq N_2,\ &#124;v_n - l'&#124; \leq \varepsilon$. Soit $\varepsilon > 0$, et $N = \max(N_1, N_2)$. Pour $n \geq N$ : $-\varepsilon \leq u_n - l \leq \varepsilon$ et $-\varepsilon \leq v_n - l' \leq \varepsilon$. Comme $u_n \leq v_n$ :

$$l' - l = (l' - v_n) + (v_n - u_n) + (u_n - l) \geq -2\varepsilon$$

Or $l' - l > 0$ pour $\varepsilon = \dfrac{&#124;l'-l&#124;}{4}$ serait absurde. Donc $l' - l \leq 0$, i.e. $l \leq l'$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $u_n \to l$, $v_n \to l'$ et $l < l'$, alors à partir d'un certain rang $u_n < v_n$ (on applique la propriété 5 à $v_n - u_n$).

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Propriété 6 (théorème des gendarmes)</span>

Si $a_n \leq u_n \leq b_n$, et si $a_n \to l$ et $b_n \to l$, alors $u_n \to l$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $\varepsilon > 0$ : $\exists N_1 \in \mathbb{N},\ \forall n \geq N_1,\ -\varepsilon \leq a_n - l \leq \varepsilon$ et $\exists N_2 \in \mathbb{N},\ \forall n \geq N_2,\ -\varepsilon \leq b_n - l \leq \varepsilon$. Alors

$$-\varepsilon \leq a_n - l \leq u_n - l \leq b_n - l \leq \varepsilon$$

donc $\forall \varepsilon > 0,\ \exists N = \max(N_1, N_2),\ \forall n \geq N,\ &#124;u_n - l&#124; \leq \varepsilon$.

</div>

### 3) Suites tendant vers $+\infty$ ou $-\infty$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

- On dit que $(u_n)$ **tend vers $+\infty$** si

$$\forall A \in \mathbb{R},\ \exists N \in \mathbb{N},\ \forall n \geq N,\quad u_n \geq A$$

- On dit que $(u_n)$ **tend vers $-\infty$** si

$$\forall A \in \mathbb{R},\ \exists N \in \mathbb{N},\ \forall n \geq N,\quad u_n \leq A$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$u_n = n$ : pour $A$ donné, on prend $N = E(A) + 1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Règles de calcul</span>

- si $u_n \to +\infty$ et $v_n \to +\infty$, alors $u_n + v_n \to +\infty$ et $u_n v_n \to +\infty$ ;
- $\lambda u_n \to +\infty$ si $\lambda > 0$, et $\lambda u_n \to -\infty$ si $\lambda < 0$ ;
- si $u_n \to +\infty$, alors $u_n > 0$ à partir d'un certain rang, et $\dfrac{1}{u_n} \to 0$ ;
- si $u_n \to l > 0$ et $v_n \to +\infty$, alors $u_n + v_n \to +\infty$ et $u_n v_n \to +\infty$ ;
- si $u_n \to l$ et $v_n \to +\infty$, alors $u_n + v_n \to +\infty$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Attention</span>

Si $\dfrac{1}{u_n} \to 0$, on ne peut pas conclure que $u_n$ est de signe constant.

</div>

<div class="bloc contre-exemple" markdown="1">

<span class="bloc-titre">Contre-exemple</span>

$u_n = \dfrac{(-1)^n}{n}$ : $\dfrac{1}{u_n} = (-1)^n n$ ne tend pas vers $+\infty$ de façon signée, et $u_n$ change de signe.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Formes indéterminées</span>

$$\text{« }+\infty + (-\infty)\text{ »}, \quad \text{« }0 \times +\infty\text{ »}, \quad \text{« }\frac{+\infty}{+\infty}\text{ »}, \quad \text{« }\frac{0}{0}\text{ »}$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 7 (comparaison)</span>

Si $u_n \to +\infty$ (resp. $-\infty$) et $v_n \geq u_n$ (resp. $u_n \leq v_n$), alors $v_n \to +\infty$ (resp. $-\infty$).

</div>

## IV. Suites monotones

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Monotonie</span>

- $u_n$ est **croissante** si $\forall n,\ u&#95;{n+1} \geq u_n$ ;
- **strictement croissante** si $\forall n,\ u&#95;{n+1} > u_n$ ;
- **décroissante** si $\forall n,\ u&#95;{n+1} \leq u_n$ ;
- **strictement décroissante** si $\forall n,\ u&#95;{n+1} < u_n$ ;
- **constante** si $\forall n,\ u_n = u&#95;{n+1}$.

On dit que $(u_n)$ est **monotone** si elle est de l'un des types précédents.

</div>

### 2) Théorème

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème de convergence monotone</span>

Soit $(u_n)$ une suite croissante (resp. décroissante). $(u_n)$ est convergente si et seulement si elle est majorée (resp. minorée).

Dans ce cas, sa limite est $\sup&#92;&#123;u_n \mid n \in \mathbb{N}&#92;&#125;$ (resp. $\inf&#92;&#123;u_n \mid n \in \mathbb{N}&#92;&#125;$).

Sinon, $\lim u_n = +\infty$ (resp. $-\infty$).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Posons $X = &#92;&#123;u_n \mid n \in \mathbb{N}&#92;&#125;$, et supposons $X$ majoré, non vide : il admet une borne sup $l$. Soit $\varepsilon > 0$ : il existe $n_0 \in \mathbb{N}$ tel que $l - \varepsilon \leq u&#95;{n_0} \leq l$, donc $0 \leq l - u&#95;{n_0} \leq \varepsilon$. Or $(u_n)$ est croissante, donc $u_n \geq u&#95;{n_0}$ pour $n \geq n_0$, d'où

$$\forall n \geq n_0,\quad 0 \leq l - u_n \leq \varepsilon$$

Si $X$ n'est pas majoré, on dit que $(u_n)$ tend vers $+\infty$ : $\forall A \in \mathbb{R},\ \exists n_0 \in \mathbb{N},\ u&#95;{n_0} > A$. Or $(u_n)$ est croissante, donc $\forall A \in \mathbb{R},\ \exists n_0 \in \mathbb{N},\ \forall n \geq n_0,\ u_n > A$.

</div>

### 3) Suites adjacentes

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $(a_n)$ et $(b_n)$ sont **adjacentes** si $a_n - b_n \to 0$ et si $(a_n)$ et $(b_n)$ sont monotones de sens contraires.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Deux suites adjacentes convergent et ont la même limite.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $c_n = b_n - a_n$, avec $(a_n)$ croissante et $(b_n)$ décroissante. Alors

$$c_{n+1} - c_n = (b_{n+1} - b_n) - (a_{n+1} - a_n) \leq 0$$

donc $(c_n)$ est décroissante. Or $c_n \to 0$. Soit $N$ tel que $\forall n \geq N,\ c_n \geq c_N$ ; par passage à la limite, $c_n \geq 0$. Finalement $\forall n \in \mathbb{N},\ c_n \geq 0$, c'est-à-dire $\forall n \in \mathbb{N},\ b_n \geq a_n$.

Pour tout $n \in \mathbb{N}$ : $b_n \geq a_n \geq a_0$, donc $a_0$ minore $(b_n)$ ; $(b_n)$ est décroissante et minorée, donc convergente vers $l = \inf&#92;&#123;b_n \mid n \in \mathbb{N}&#92;&#125;$, donc $\forall n,\ b_n \geq l$. De même, $\forall n \in \mathbb{N},\ a_n \leq b_n \leq b_0$ : $(a_n)$ est croissante et majorée, donc convergente vers $l'$. Alors $b_n - a_n \to l' - l$, et par unicité de la limite $l' - l = 0$, donc $l' = l$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

$$\forall n \in \mathbb{N},\quad a_n \leq l \leq b_n \qquad (a_1 < a_2 < \dots < a_n \leq l \leq b_n < \dots < b_2 < b_1)$$

</div>

### 4) Théorème des segments emboîtés

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème des segments emboîtés</span>

Soit une suite de segments de $\mathbb{R}$, $F_n = [a_n, b_n]$, emboîtés, c'est-à-dire $F&#95;{n+1} \subset F_n$, de diamètre tendant vers $0$ (c'est-à-dire $b_n - a_n \to 0$). Alors

$$\bigcap_{n \in \mathbb{N}} F_n \text{ est un singleton}$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$F&#95;{n+1} \subset F_n$ donne $a_n \leq a&#95;{n+1}$ et $b&#95;{n+1} \leq b_n$ : $(a_n)$ est croissante, $(b_n)$ est décroissante, et $b_n - a_n \to 0$, donc $(a_n)$ et $(b_n)$ sont adjacentes. Elles tendent vers une même limite $l$, et $\forall n \in \mathbb{N},\ a_n \leq l \leq b_n$, donc $l \in \bigcap&#95;{n \in \mathbb{N}} F_n$.

Soit $x \in \bigcap&#95;{n \in \mathbb{N}} F_n$ : $\forall n \in \mathbb{N},\ a_n \leq x \leq b_n$ ; comme $a_n \to l$ et $b_n \to l$, la suite constante $(x)$ est encadrée par deux suites tendant vers $l$, donc $x = l$. Finalement $\bigcap&#95;{n \in \mathbb{N}} F_n = &#92;&#123;l&#92;&#125;$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$S_n = 1 + \frac{1}{2!} + \frac{1}{3!} + \dots + \frac{1}{n!}, \qquad T_n = S_n + \frac{1}{n \cdot n!}$$

Les suites $(S_n)$ et $(T_n)$ sont adjacentes.

</div>

## V. Suites extraites

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Sous-suite (suite extraite)</span>

Soit $(u_n)&#95;{n \in \mathbb{N}}$ une suite de $\mathbb{R}^{\mathbb{N}}$, et soit $\varphi$ une application strictement croissante de $\mathbb{N}$ dans $\mathbb{N}$ (c'est-à-dire $\forall n \in \mathbb{N},\ \varphi(n+1) > \varphi(n)$). On appelle **sous-suite** de $(u_n)$ la suite $v_n = u&#95;{\varphi(n)}$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$(u&#95;{2n})$ est une sous-suite de $(u_n)$, avec $\varphi : n \mapsto 2n$. De même $u&#95;{2n+1}$, $u&#95;{3n}$, ...

</div>

### 2) Propriétés de convergence

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Si $u_n \to l$, alors toute sous-suite de $(u_n)$ tend aussi vers $l$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Attention</span>

Si une suite extraite converge, on ne peut rien dire à priori sur $(u_n)$.

</div>

<div class="bloc contre-exemple" markdown="1">

<span class="bloc-titre">Contre-exemple</span>

$u_n = (-1)^n$ : $u&#95;{2n} \to 1$, mais $(u_n)$ diverge.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration (lemme)</span>

Si $\varphi : \mathbb{N} \to \mathbb{N}$ est strictement croissante, alors $\forall n \in \mathbb{N},\ \varphi(n) \geq n$ : $\varphi(0) \geq 0$, et si $\varphi(n) \geq n$ alors $\varphi(n+1) \geq \varphi(n) + 1 \geq n+1$ car $\varphi$ est strictement croissante.

Application : $\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall n \geq N,\ &#124;u_n - l&#124; \leq \varepsilon$. Si $v_n = u&#95;{\varphi(n)}$, soit $n \geq N$ : $\varphi(n) \geq n \geq N$, donc $&#124;v_n - l&#124; \leq \varepsilon$. Donc $v_n \to l$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $u&#95;{2n} \to l$ et $u&#95;{2n+1} \to l$, alors $u_n \to l$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Posons $v_n = u&#95;{2n}$ et $w_n = u&#95;{2n+1}$. Soit $\varepsilon > 0$ : $\exists N_1 \in \mathbb{N},\ \forall n \geq N_1,\ &#124;v_n - l&#124; \leq \varepsilon$ et $\exists N_2 \in \mathbb{N},\ \forall n \geq N_2,\ &#124;w_n - l&#124; \leq \varepsilon$. Soit $N = \max(N_1, N_2)$ et $N' = 2N + 1$. Si $n = 2n'$ : $&#124;u_n - l&#124; = &#124;v&#95;{n'} - l&#124; \leq \varepsilon$ pour $n' \geq N_1$, c'est-à-dire $n \geq 2N_1$ ; si $n = 2n'+1$ : $&#124;u_n - l&#124; = &#124;w&#95;{n'} - l&#124; \leq \varepsilon$ pour $2n'+1 \geq 2N_2+1$. Donc $\forall \varepsilon > 0,\ \exists N' \in \mathbb{N},\ \forall n \geq N',\ &#124;u_n - l&#124; \leq \varepsilon$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

Une suite extraite obtenue par suppression d'un nombre fini de termes a priori notée que $(u_n)$ (elle a même limite que $(u_n)$).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $(u_n)$ converge, $(u&#95;{\varphi(n)})$ aussi. Si $(u&#95;{\varphi(n)})$ converge, soient $u&#95;{n_0}, u&#95;{n_1}, \dots, u&#95;{n_k}$ les $k+1$ termes supprimés : pour $n > n_k$, $u_n = u&#95;{\varphi(n-k)}$, donc la convergence de $(u_n)$ résulte de la propriété 1.

</div>

### 3) Valeurs d'adhérence

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Valeur d'adhérence</span>

Soit $(u_n)$ une suite de $\mathbb{R}^{\mathbb{N}}$. On dit que $a \in \mathbb{R}$ est **valeur d'adhérence** de $(u_n)$ s'il existe une sous-suite de $(u_n)$ qui converge vers $a$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

$1$ et $-1$ sont deux valeurs d'adhérence de $(-1)^n$ : $u&#95;{2n} \to 1$, $u&#95;{2n+1} \to -1$.

Pour $u_n = \cos\dfrac{2n\pi}{3}$ : $u&#95;{3n} \to 1$ et $u&#95;{3n+1} \to -\dfrac{1}{2}$, donc $1$ et $-\dfrac{1}{2}$ sont des valeurs d'adhérence de $(u_n)$.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème de Bolzano-Weierstrass</span>

Toute suite réelle bornée admet une valeur d'adhérence (et une sous-suite convergente).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Posons $U = &#92;&#123;u_n \mid n \in \mathbb{N}&#92;&#125; \subset \mathbb{R}$, fini ou infini.

**1ᵉʳ cas : $U$ est fini**, soit $U = &#92;&#123;a_0, \dots, a_p&#92;&#125;$ les valeurs que prend $u_n$. Il y en a forcément une qui est atteinte une infinité de fois (car $\mathbb{N}$ est infini). Posons $E_0 = &#92;&#123;n \in \mathbb{N} \mid u_n = a_0&#92;&#125;$ ; $E_0, \dots, E_p$ forment une partition de $\mathbb{N}$, il y a donc au moins un ensemble parmi ceux-là qui est infini. Supposons par exemple $E_0$ infini. Alors $E_0 = &#92;&#123;n \mid u_n = a_0&#92;&#125;$ est non vide, donc admet un plus petit élément : posons $\varphi(0) = n_0$. $E_0 \setminus &#92;&#123;\varphi(0)&#92;&#125;$ est non vide car $E_0$ est infini, il admet un ppe $n_1 = \varphi(1)$, avec $n_1 > \varphi(0)$. Supposons construits $\varphi(0), \dots, \varphi(n)$ tels que $\varphi(0) < \varphi(1) < \dots < \varphi(n)$ et $\varphi(n) = \mathrm{ppe}\big(E_0 \setminus &#92;&#123;\varphi(0), \dots, \varphi(n-1)&#92;&#125;\big)$ ; $E_0 \setminus &#92;&#123;\varphi(0), \dots, \varphi(n)&#92;&#125;$ est non vide car $E_0$ est infini, donc admet un ppe $p$ ; on pose $\varphi(n+1) = p$, et $p > \varphi(n)$. On construit ainsi par récurrence une suite extraite $u&#95;{\varphi(n)}$ : $\varphi$ est strictement croissante et $u&#95;{\varphi(n)} = a_0$ pour tout $n$, suite constante qui converge vers $a_0$.

**2ᵉ cas : $U$ est infini.** $(u_n)$ est bornée : soient $a$ et $b$ tels que $a \leq u_n \leq b$. Alors $U \cap [a, b] = U$ est infini. Posons $c = \dfrac{a+b}{2}$ : $[a, c] \cap U$ ou $[c, b] \cap U$ est infini, sinon $[a, c] \cap U$ et $[c, b] \cap U$ seraient finis, donc $[a, b] \cap U = ([a,c] \cap U) \cup ([c,b] \cap U)$ serait fini. Si $[a, c] \cap U$ est infini, on peut recommencer avec $[a, c]$ à la place de $[a, b]$ ; si $[c, b] \cap U$ est infini, on recommence avec $[c, b]$.

Par récurrence, on construit une suite de segments $F_k = [a_k, b_k]$ emboîtés, $F_0 \supset F_1 \supset \dots \supset F_n \supset \dots$, tels que $b_k - a_k = \dfrac{1}{2^k}(b_0 - a_0)$ et $F_k \cap U$ est infini.

Construction de la suite extraite : $U = [a_0, b_0] \cap U$ est infini, il contient un certain $u&#95;{n_0}$ ; on pose $n_0 = \varphi(0)$. Supposons construits $\varphi(0), \dots, \varphi(n)$ tels que pour $0 \leq k \leq n$, $u&#95;{\varphi(k)} \in F_k$ et $\varphi(0) < \dots < \varphi(n)$. Soit $C_n = (F&#95;{n+1} \cap U) \setminus &#92;&#123;u_0, u_1, \dots, u&#95;{\varphi(n)}&#92;&#125;$ : $C_n$ est infini, donc il existe $p \in \mathbb{N}$ tel que $u_p \in C_n$ ; $p > \varphi(n)$ car $u_0, u_1, \dots, u&#95;{\varphi(n)}$ ne sont pas dans $C_n$. On pose $\varphi(n+1) = p$. On construit ainsi par récurrence une suite extraite $u&#95;{\varphi(n)}$, avec $\varphi$ strictement croissante et $u&#95;{\varphi(n)} \in F_n$ pour tout $n$.

Or $(F_n)$ est une suite de segments emboîtés de diamètres $b_n - a_n = \dfrac{1}{2^n}(b_0 - a_0) \to 0$ : donc $a_n$ et $b_n$ sont adjacentes et convergent vers une limite commune $l$. Comme $\forall n,\ a_n \leq u&#95;{\varphi(n)} \leq b_n$, le théorème des gendarmes donne $u&#95;{\varphi(n)} \to l$.

</div>

**Application.** Si $u_n \to l$, alors $u&#95;{n+1} \to l$ (sous-suite extraite).

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — la suite géométrique</span>

Montrer que $u_n = a^n$, $a \in \mathbb{R}$, converge si et seulement si $&#124;a&#124; < 1$ ou $a = 1$.

Si $(u_n)$ admet une limite $l$, alors $u&#95;{n+1} = u_n \times a$ donne à la limite $l = a l$, donc $l = 0$ si $a \neq 1$.

- si $0 < a < 1$ : $(u_n)$ est décroissante et minorée par $0$, donc converge vers $0$ ;
- si $a = 0$ : $u_n = 0$ pour $n \geq 1$ ;
- si $-1 < a < 0$ : $&#124;u_n&#124; = &#124;a&#124;^n \to 0$ car $0 < &#124;a&#124; < 1$ ;
- si $a > 1$ : $(u_n)$ est croissante ; elle tend vers $+\infty$, car sinon elle convergerait vers $l$ avec $l = al$ et $l \geq u_0 = a > 1$, impossible (on aurait $l = 0$) ;
- si $a < -1$ : $&#124;u_n&#124; \to +\infty$, $(u_n)$ diverge.

</div>

## VI. Suites récurrentes

### 1) Suites du type $u&#95;{n+1} = a u_n + b$

**Limites éventuelles.** Si $(u_n)$ converge vers $l$, alors $l = a l + b$, soit $l(1-a) = b$.

- si $a \neq 1$ : unique limite possible $\displaystyle l = \frac{b}{1-a}$ ;
- si $a = 1$ : si $b \neq 0$, il n'y a pas de limite ($(u_n)$ diverge : $u_n \to +\infty$ si $b > 0$, $u_n \to -\infty$ si $b < 0$) ; si $b = 0$, $(u_n)$ est constante.

Si $a \neq 1$, posons $v_n = u_n - l$. Alors

$$v_{n+1} = u_{n+1} - l = a u_n + b - (a l + b) = a v_n$$

- si $&#124;a&#124; < 1$ : $v_n \to 0$, donc $u_n \to l$ ;
- si $&#124;a&#124; > 1$ : $v_n$ diverge, donc $(u_n)$ aussi.

### 2) Suites du type $u&#95;{n+1} = f(u_n)$

**Remarques générales.**

- Si $u_n \to l$ et si $f$ est continue sur $I$ avec $l \in I$, alors $l = f(l)$.
- Si $u_0 \in I$ et $f$ est croissante sur $I$, alors $(u_n)$ est monotone.

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$u&#95;{n+2} - u&#95;{n+1} = f(u&#95;{n+1}) - f(u_n)$ : comme $f$ est croissante, $f(u&#95;{n+1}) - f(u_n)$ est du signe de $u&#95;{n+1} - u_n$. Or $u&#95;{n+1} - u_n$ est du signe de $u_1 - u_0 = f(u_0) - u_0$ : $(u_n)$ est monotone.

Pour savoir le sens de la monotonie, on étudie le signe de $f(x) - x$ : si $f(u_0) - u_0 \geq 0$, alors $u_1 \geq u_0$ et $(u_n)$ est croissante ; si $f(u_0) - u_0 \leq 0$, $(u_n)$ est décroissante.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque (stabilité)</span>

Si $I$ est un intervalle tel que $f(I) \subset I$, alors si $u_0 \in I$ : $\forall n \in \mathbb{N},\ u_n \in I$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Cas d'une fonction décroissante</span>

Si $u_0 \in I$, $u_n \in I$ pour tout $n$, et $f$ est décroissante sur $I$, alors $(u&#95;{2n})$ et $(u&#95;{2n+1})$ sont monotones de sens contraires.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$u&#95;{2n+2} = (f \circ f)(u&#95;{2n})$ et $f \circ f$ est croissante sur $I$ ; de même $u&#95;{2n+3} = (f \circ f)(u&#95;{2n+1})$. D'après la propriété précédente, $(u&#95;{2n})$ et $(u&#95;{2n+1})$ sont monotones. Le signe de $u&#95;{2n+2} - u&#95;{2n}$ est celui de $u_2 - u_0$, et celui de $u&#95;{2n+3} - u&#95;{2n+1}$ est celui de $u_3 - u_1$. Si $u_2 \geq u_0$, alors $f(u_2) \leq f(u_0)$ car $f$ est décroissante, donc $u_3 \leq u_1$ ; si $u_2 \leq u_0$, alors $u_3 \geq u_1$. Ainsi, si $(u&#95;{2n})$ est croissante, $(u&#95;{2n+1})$ est décroissante, et réciproquement.

</div>

## VII. Suites complexes

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Suite complexe</span>

Une **suite complexe** est une application de $\mathbb{N}$ dans $\mathbb{C}$. La suite $(z_n)$ **converge vers $l$** si

$$\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall n \geq N,\quad &#124;z_n - l&#124; \leq \varepsilon$$

</div>

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1 (partie réelle, partie imaginaire)</span>

Si $z_n = x_n + i y_n$ et $l = l_1 + i l_2$, alors $(z_n) \to l$ si et seulement si $x_n \to l_1$ et $y_n \to l_2$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $z_n \to l$ : $\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall n \geq N,\ &#124;z_n - l&#124; \leq \varepsilon$. Or

$$&#124;x_n - l_1&#124; = \big&#124;\mathrm{Re}(z_n - l)\big&#124; \leq &#124;z_n - l&#124;, \qquad &#124;y_n - l_2&#124; = \big&#124;\mathrm{Im}(z_n - l)\big&#124; \leq &#124;z_n - l&#124;$$

donc $\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall n \geq N,\ &#124;x_n - l_1&#124; \leq \varepsilon$ et $&#124;y_n - l_2&#124; \leq \varepsilon$.

Réciproquement, si $x_n \to l_1$ et $y_n \to l_2$ : soit $\varepsilon > 0$ ; $\exists N_1 \in \mathbb{N},\ \forall n \geq N_1,\ &#124;x_n - l_1&#124; \leq \dfrac{\varepsilon}{\sqrt{2}}$ et $\exists N_2 \in \mathbb{N},\ \forall n \geq N_2,\ &#124;y_n - l_2&#124; \leq \dfrac{\varepsilon}{\sqrt{2}}$. Pour $N = \max(N_1, N_2)$ et $n \geq N$ :

$$&#124;z_n - l&#124;^2 \leq \frac{\varepsilon^2}{2} + \frac{\varepsilon^2}{2} = \varepsilon^2$$

donc $\forall n \geq N,\ &#124;z_n - l&#124; \leq \varepsilon$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $(z_n)$ converge, alors $(z_n)$ est bornée (cela signifie qu'il existe $M \in \mathbb{R}$ tel que $&#124;z_n&#124; \leq M$).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3 (Bolzano-Weierstrass complexe)</span>

De toute suite complexe bornée, on peut extraire une sous-suite convergente.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $z_n = x_n + i y_n$. Alors $&#124;x_n&#124; \leq &#124;z_n&#124; \leq M$ et $&#124;y_n&#124; \leq &#124;z_n&#124; \leq M$ : il existe une sous-suite $x&#95;{\varphi(n)}$ convergente vers $a \in \mathbb{R}$, donc $x&#95;{\varphi(n)} \to a$. La suite $y&#95;{\varphi(n)}$ est bornée : d'après Bolzano-Weierstrass (réel), il existe une application $\psi : \mathbb{N} \to \mathbb{N}$ strictement croissante telle que $y&#95;{\varphi \circ \psi(n)} \to b$. Comme $x&#95;{\varphi \circ \psi(n)}$ est une sous-suite de $x&#95;{\varphi(n)}$, on a $x&#95;{\varphi \circ \psi(n)} \to a$. Finalement

$$z_{(\varphi \circ \psi)(n)} \to a + i b$$

</div>

## VIII. Notions sur les séries

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Série</span>

Soit $(u_n)$ une suite réelle ou complexe. On appelle **série de terme général** $u_n$ la suite $(U_n)$ définie par

$$U_n = u_0 + u_1 + \dots + u_n = \sum_{k=0}^{n} u_k$$

On dira que la **série converge** si la suite $(U_n)$ converge, et on appellera **somme de la série** sa limite, notée

$$\sum_{k=0}^{+\infty} u_k = l$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — série géométrique</span>

Soit $a \in \mathbb{R}$, la série de terme général $a^n$. Alors

$$S_n = \sum_{k=0}^{n} a^k = \frac{1 - a^{n+1}}{1-a} \quad \text{si } a \neq 1, \qquad S_n = n+1 \quad \text{si } a = 1$$

- si $&#124;a&#124; < 1$ : la suite converge et sa somme est $\displaystyle\sum&#95;{k=0}^{+\infty} a^k = \frac{1}{1-a}$ ;
- si $&#124;a&#124; \geq 1$ : la série diverge.

</div>

### 2) Propriété

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Condition nécessaire de convergence</span>

Si la série de terme général $(u_n)$ converge, alors $u_n \to 0$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Attention</span>

La réciproque est fausse.

</div>

<div class="bloc contre-exemple" markdown="1">

<span class="bloc-titre">Contre-exemple — série harmonique</span>

$u_n = \dfrac{1}{n}$ : $u_n \to 0$, et pourtant $\displaystyle\sum&#95;{k=1}^{+\infty} \frac{1}{k} \to +\infty$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$U_n - U&#95;{n-1} = u_n$ ; or si $U_n \to l$, alors $U&#95;{n+1} \to l$ et $U&#95;{n-1} \to l$, donc $u_n = U_n - U&#95;{n-1} \to 0$.

Exemple ($U_n = \sum&#95;{k=0}^{n} \frac{1}{k}$) :

$$U_{2n} - U_n = \sum_{k=n+1}^{2n} \frac{1}{k} \geq \sum_{k=n+1}^{2n} \frac{1}{2n} = \frac{1}{2}$$

$(U_n)$ est croissante ; si elle était majorée, elle convergerait vers $L$, et $U&#95;{2n} \to L$ et $U_n \to L$ entraîneraient $U&#95;{2n} - U_n \to 0$, absurde. Donc $U_n \to +\infty$.

Plus généralement, pour $a \leq 1$ et $k \geq 1$ : $k^a \leq k$ donc $\dfrac{1}{k^a} \geq \dfrac{1}{k}$, d'où

$$\sum_{k=1}^{n} \frac{1}{k^a} \geq \sum_{k=1}^{n} \frac{1}{k} \to +\infty$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — $\sum \frac{1}{n^2}$ converge</span>

La série $\displaystyle\sum&#95;{n \geq 1} \frac{1}{n^2}$ converge (vers $\dfrac{\pi^2}{6}$). En effet, pour $k \geq 2$ :

$$\frac{1}{k^2} \leq \frac{1}{k(k-1)} = \frac{1}{k-1} - \frac{1}{k}$$

(d'où $\frac{1}{(k-1)^2} \leq \frac{1}{k-2} - \frac{1}{k-1}$, ..., $\frac{1}{2^2} \leq 1 - \frac{1}{2}$), donc par télescopage

$$\sum_{k=2}^{n} \frac{1}{k^2} \leq 1 - \frac{1}{n} \leq 1$$

$S_n = \sum&#95;{k=1}^{n} \frac{1}{k^2}$ est majorée par $2$ et croissante, donc convergente.

</div>

## IX. Approximation décimale des réels

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Soit $x \in \mathbb{R}$ et

$$x_n = \frac{E(10^n x)}{10^n}, \qquad y_n = x_n + \frac{1}{10^n}$$

Alors $x_n$ et $y_n$ sont adjacentes et convergent vers $x$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$$E(10^n x) \leq 10^n x < E(10^n x) + 1$$
$$10\, E(10^n x) \leq 10^{n+1} x < 10\, E(10^n x) + 10$$
$$E(10^{n+1} x) \leq 10^{n+1} x < E(10^{n+1} x) + 1$$

d'où

$$10\, E(10^n x) \leq E(10^{n+1} x) \leq 10^{n+1} x < E(10^{n+1} x) + 1 \leq 10\, E(10^n x) + 10$$

et donc

$$\frac{E(10^n x)}{10^n} \leq \frac{E(10^{n+1} x)}{10^{n+1}} \leq x < \frac{E(10^{n+1} x)}{10^{n+1}} + \frac{1}{10^{n+1}} < \frac{E(10^n x)}{10^n} + \frac{1}{10^n}$$

c'est-à-dire $x_n \leq x&#95;{n+1} \leq x < y&#95;{n+1} < y_n$. Donc $(x_n)$ est croissante, $(y_n)$ est décroissante, et $y_n - x_n = \dfrac{1}{10^n} \to 0$ quand $n \to +\infty$ : $x_n$ et $y_n$ sont adjacentes. Comme $x_n \leq x \leq y_n$, on a $x_n \to x$ et $y_n \to x$.

</div>

## X. Écriture décimale d'un réel

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition (écriture décimale d'un réel)</span>

Soit $x \in \mathbb{R}$. On pose $a_0 = E(x)$ et, pour $n \geq 0$,
$a&#95;{n+1} = E(10^{n+1} x) - 10&#92;&#44; E(10^n x)$. Alors :

- $a_n$ est un entier de $\llbracket 0, 9 \rrbracket$ ;
- $x = \displaystyle\sum&#95;{n \geq 0} \dfrac{a_n}{10^n}$ ;
- les $a_n$ ne sont pas tous égaux à $9$ à partir d'un certain rang.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

- Si $a_0 = 0$ et $a_n = 9$ pour $n \geq 1$ :

$$0{,}999\ldots 99 = \sum_{n \geq 1} \frac{9}{10^n} = 9\left(\frac{1}{1 - \frac{1}{10}} - 1\right) = 9\left(\frac{10}{9} - \frac{9}{9}\right) = 1$$

- D'après 1), $0 \leq a_n < 10$, donc $0 \leq a_n \leq 9$.
- En posant $x_n = \dfrac{E(10^n x)}{10^n}$, on a, pour $n \geq 0$ :

$$x_{n+1} - x_n = \frac{E(10^{n+1} x)}{10^{n+1}} - \frac{E(10^n x)}{10^n} = \frac{a_{n+1}}{10^{n+1}}$$

- $x_0 = E(x) = a_0$, et par télescopage :

$$\sum_{k=0}^{n+1} (x_{k+1} - x_k) = x_{n+1} - x_0 = \sum_{k=0}^{n} \frac{a_{k+1}}{10^{k+1}} = \sum_{k=1}^{n+1} \frac{a_k}{10^k}$$

donc

$$x_{n+1} = \sum_{k=0}^{n+1} \frac{a_k}{10^k}$$

- Comme $x&#95;{n+1} \to x$, la série $\sum&#95;{k \geq 0} \frac{a_k}{10^k}$ converge et sa somme est $x$ :

$$x = \sum_{k \geq 0} \frac{a_k}{10^k}$$

- Supposons que $a_n = 9$ pour tout $n \geq n_0$. Alors

$$\sum_{k=n_0+1}^{n} \frac{1}{10^k} = \frac{1}{10^{n_0+1}}\left(1 + \cdots + \frac{1}{10^{n-n_0-1}}\right) = \frac{1}{10^{n_0+1}} \cdot \frac{1 - \left(\frac{1}{10}\right)^{n-n_0}}{1 - \frac{1}{10}} = \frac{1}{9 \cdot 10^{n_0}}\left(1 - \left(\frac{1}{10}\right)^{n-n_0}\right)$$

d'où $x = \sum&#95;{k=0}^{n_0} \frac{a_k}{10^k} + \frac{1}{10^{n_0}}$. En posant
$y_n = \sum&#95;{k=0}^{n} \frac{a_k}{10^k} + \frac{1}{10^n}$, on a $y_n \to x$ et
$y_n = x$ pour $n \geq n_0$ : d'après 1), impossible.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 3 (bijection)</span>

Soit $\Sigma$ l'ensemble des suites $(a_n)$ de chiffres vérifiant que les $a_n$
ne sont pas tous égaux à $9$ à partir d'un certain rang. L'application

$$\varphi : \mathbb{R} \to \Sigma, \qquad x \mapsto (a_n) \text{ définie par } a_0 = E(x),\ a_{n+1} = E(10^{n+1} x) - 10\, E(10^n x)$$

est une **bijection**.

</div>

## XI. Exercices — feuille n° 5

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 5 — Propriétés de ℝ (énoncés)</span>

<ol class="enonces">
<li>Montrer que si $A$ et $B$ sont des parties non vides, majorées de $\mathbb{R}$, alors :
<ol>
<li>$\sup(A+B) = \sup(A) + \sup(B)$ avec $A+B = &#92;&#123;a+b \mid a \in A,\ b \in B&#92;&#125;$ ;</li>
<li>si $t > 0$, $\sup(tA) = t\sup(A)$, et si $t < 0$, $\sup(tA) = t\inf(A)$, avec $tA = &#92;&#123;ta \mid a \in A&#92;&#125;$ ;</li>
<li>on suppose $A \subset \mathbb{R}&#95;+^&#42;$, $B \subset \mathbb{R}&#95;+^&#42;$ ; montrer que $\sup(AB) = \sup(A)\sup(B)$ avec $AB = &#92;&#123;ab \mid a \in A,\ b \in B&#92;&#125;$.</li>
</ol>
</li>
<li>Montrer que :
$$\left&#124; \sum_{i=1}^{n} a_i b_i \right&#124; \leq \left( \sum_{i=1}^{n} &#124;a_i&#124; \right)\!\left( \sum_{i=1}^{n} &#124;b_i&#124; \right) \leq n \left( \sup_{1 \leq i \leq n} &#124;a_i&#124; \right)\!\left( \sup_{1 \leq i \leq n} &#124;b_i&#124; \right)$$
et que $&#124;\sup_I f - \sup_I g&#124; \leq \sup_I &#124;f - g&#124;$ si $f$ et $g$ sont bornées sur $I$.</li>
<li>Déterminer $\inf(A)$ et $\sup(A)$ pour les parties $A$ suivantes :
<ol>
<li>$A = &#92;&#123;x^2 + y^2 \mid x, y \in \mathbb{R} \text{ et } xy = 1&#92;&#125;$ ;</li>
<li>$A = &#92;&#123;xy \mid x, y \in \mathbb{R} \text{ et } &#124;x&#124; + &#124;y&#124; \leq 2&#92;&#125;$.</li>
</ol>
</li>
<li>Soit $x, y$ réels. Exprimer $E(x+y)$, $E(x-y)$, $E&#92;&#33;\left(\dfrac{E(nx)}{n}\right)$ en fonction de $E(x)$ et $E(y)$.</li>
<li>Soit $x$ réel. Montrer l'égalité :
$$E(x) + E\!\left(x + \frac{1}{n}\right) + E\!\left(x + \frac{2}{n}\right) + \dots + E\!\left(x + \frac{n-1}{n}\right) = E(nx)$$</li>
<li>Soit $a, b, c, d$ rationnels et tels que $b \geq 0$, $d \geq 0$ et $b$ n'admette pas de racine dans $\mathbb{Q}$. Prouver que :
<ol>
<li>$a + \sqrt{b} = c + \sqrt{d} \Rightarrow (a = c \text{ et } b = d)$ ;</li>
<li>$a - \sqrt{b} = c - \sqrt{d} \Rightarrow (a = c \text{ et } b = d)$.</li>
</ol>
</li>
<li>Démontrer que $\sqrt[3]{20 + 14\sqrt{2}} + \sqrt[3]{20 - 14\sqrt{2}}$ est rationnel.</li>
<li>Calculer $S = \sqrt{2}&#92;&#44;\sqrt[4]{7 + 4\sqrt{3}} + \sqrt{2}&#92;&#44;\sqrt[4]{7 - 4\sqrt{3}}$.</li>
<li>Soit $n \in \mathbb{N}^&#42;$ et $x_i \in [-1, 1]$ ($1 \leq i \leq n$) tels que $x_1 + x_2 + \dots + x_n = 0$. Montrer que
$$\left&#124; x_1 + 2x_2 + \dots + n x_n \right&#124; \leq E\!\left(\frac{n^2}{4}\right)$$</li>
</ol>

</div>

## XII. Exercices — feuille n° 6

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 6 — Suites réelles et complexes (énoncés)</span>

<ol class="enonces">
<li>Déterminer les limites des suites suivantes :
<ol>
<li>$u_n = \dfrac{3^n - 2^n}{3^n + 2^n}$ ;</li>
<li>$u_n = \dfrac{n + (-1)^n}{n - (-1)^n}$ ;</li>
<li>$u_n = \sqrt[n]{n^2}$ ;</li>
<li>$u_n = \dfrac{1 + 2! + \cdots + n!}{n!}$ ;</li>
<li>$u_n = \left(a^{1/n} + b^{1/n}\right)^n$ ;</li>
<li>$u_n = \displaystyle\sum&#95;{k=0}^{n} \dfrac{1}{\mathrm{C}&#95;n^k}$ ;</li>
<li>$u_n = \displaystyle\sum&#95;{k=1}^{n} (-1)^k \dfrac{\mathrm{C}&#95;n^k}{k}$.</li>
</ol>
</li>
<li>Soit $0 \leq a \leq b$, et $(a_n)$ et $(b_n)$ définies par :
$$a_0 = a, \quad b_0 = b, \quad a_{n+1} = \sqrt{a_n b_n}, \quad b_{n+1} = \frac{1}{2}(a_n + b_n)$$
Montrer que les deux suites convergent. Donner une majoration de $b&#95;{n+1} - a&#95;{n+1}$ en fonction de $b_n - a_n$. Pour $a = 2$, $b = 3$, trouver $n$ pour que $a_n$ soit une approximation de la limite de cette suite à $10^{-50}$ près.</li>
<li>Soit $(u_n)$ une suite réelle ou complexe. On suppose que $(u&#95;{2n+1})$, $(u&#95;{2n})$, $(u&#95;{3n})$ sont convergentes. Démontrer que $(u_n)$ l'est aussi.</li>
<li>Soit $f : \mathbb{N} \to \mathbb{N}$. On suppose que $f$ est injective ; montrer que $f(n) \xrightarrow[n \to +\infty]{} +\infty$.</li>
<li>Soit $(u_n)$ une suite réelle ou complexe convergente vers $l$. On pose, pour $n \geq 1$ :
$$v_n = \frac{u_1 + u_2 + \cdots + u_n}{n}$$
<ol>
<li>Prouver que $(v_n)$ converge vers $l$ (théorème de Cesàro) ;</li>
<li>prouver que la réciproque est fausse ;</li>
<li>montrer que si $u&#95;{n+1} - u_n \to a$ alors $\dfrac{u_n}{n} \to a$ (lemme de l'escalier) ;</li>
<li>on suppose que la suite est réelle et que $u_n \to +\infty$. Prouver que $v_n \to +\infty$.</li>
</ol>
</li>
<li>Soit $(u_n)$ la suite récurrente définie par la donnée de $u_0$ et $u&#95;{n+1} = \dfrac{u_n}{3 - 2u_n}$.
<ol>
<li>Quel est le domaine de définition de la suite ?</li>
<li>On pose $v_n = \dfrac{u_n - 1}{u_n}$. Étudier $(v_n)$ puis $(u_n)$.</li>
<li>Étudier par la même méthode $u&#95;{n+1} = \dfrac{4}{5 + u_n}$.</li>
</ol>
</li>
<li>Soit $(z_n)$ la suite complexe définie par $z_0 \in \mathbb{C}$ et, pour tout $n \geq 0$, $z&#95;{n+1} = \dfrac{1}{2}(z_n + &#124;z_n&#124;)$.
<ol>
<li>Étudier la suite quand $z_0$ est réel ;</li>
<li>on suppose $z_0 \notin \mathbb{R}$. Montrer que l'on peut écrire pour tout $n$ : $z_n = r_n e^{i\alpha_n}$ avec $r_n > 0$ et $\alpha_n \in \left]-\pi, \pi\right[$ ;</li>
<li>exprimer $r&#95;{n+1}$ en fonction de $r_n$, puis $r_n$ en fonction de $r_0$, et $\alpha_n$ en fonction de $n$ ;</li>
<li>en déduire le comportement de la suite.</li>
</ol>
</li>
<li>
<ol>
<li>Montrer que $(\cos(nx))$ et $(\sin(nx))$ sont divergentes quand elles ne sont pas constantes ;</li>
<li>en déduire le comportement de la suite géométrique $(a^n)$, $a$ complexe, puis celui de la série géométrique de terme général $a^n$.</li>
</ol>
</li>
<li>Montrer que $(u_n)$ admet une valeur d'adhérence $a$ si et seulement si
$$\forall \varepsilon > 0,\ \forall N \in \mathbb{N},\ \exists n \geq N,\quad &#124;u_n - a&#124; \leq \varepsilon$$</li>
<li>Suites de Cauchy : on dit que $(u_n)$ est une suite de Cauchy si elle vérifie :
$$\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall p \geq N,\ \forall q \geq N,\quad &#124;u_p - u_q&#124; \leq \varepsilon$$
<ol>
<li>montrer que si $(u_n)$ est convergente, c'est une suite de Cauchy ;</li>
<li>montrer qu'une suite de Cauchy est bornée ;</li>
<li>montrer qu'une suite de Cauchy qui admet une valeur d'adhérence est convergente ;</li>
<li>prouver qu'une suite réelle ou complexe de Cauchy est convergente.</li>
</ol>
</li>
<li>Soit $(U_n)$ une suite complexe telle que, pour tous $k, n \in \mathbb{N}^&#42;$, $&#124;U_n&#124; \leq \dfrac{k}{n} + \dfrac{1}{k}$. Montrer que $(U_n)$ tend vers $0$.</li>
<li>Soit $(u_n)$ la suite de Fibonacci définie par $u_0 = u_1 = 1$ et $u&#95;{n+1} = u_n + u&#95;{n-1}$. Montrer que :
<ol>
<li>pour tout $n \in \mathbb{N}$, $u&#95;{n+1}^2 - u&#95;{n+2}&#92;&#44; u_n = (-1)^{n+1}$ ;</li>
<li>la suite $\left(\dfrac{u&#95;{n+1}}{u_n}\right)$ converge, et trouver sa limite.</li>
</ol>
</li>
<li>On pose, pour $n > 0$, $u_n = \displaystyle\sum&#95;{k=1}^{n} \dfrac{1}{k}$.
<ol>
<li>Montrer que pour tout $n > 0$, $u&#95;{2n} - u_n \geq \dfrac{1}{2}$ ;</li>
<li>en déduire que $(u_n)$ tend vers $+\infty$ ;</li>
<li>en déduire que la série de terme général $n^a$ avec $a \leq 1$ est divergente ;</li>
<li>quelle est la nature de la série de terme général $\ln&#92;&#33;\left(1 + \dfrac{1}{n}\right)$ ?</li>
</ol>
</li>
</ol>

</div>

## XIII. Technique (étude des suites)

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Techniques</span>

- Si $(u_n)$ a deux limites possibles $l$ et $l'$ : définir
  $v_n = \dfrac{u_n - l}{u_n - l'}$, puis déterminer $v&#95;{n+1}$.
  - Si $v_n \to +\infty$ : $u_n \to l'$ ;
  - si $v_n \to 0$ : $u_n \to l$.
- Si $u&#95;{n+1} = f(u_n)$ : déterminer $f(x) - x$ pour savoir la monotonie de $(u_n)$.
- Calcul de limite : déterminer la monotonie, les majorations ou les minorations,
  puis calculer les limites possibles et conclure (calculer les racines de
  $f(x) - x = 0$).
- Détermination de la somme de $(u_n)$ par majoration et minoration.

</div>

## XIV. Exercices — TD du lundi 17/10/93 (sommations et séries)

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Travaux dirigés du lundi 17/10/93 — sommations et séries (énoncés)</span>

**Changements d'indices :**

<ol class="enonces">
<li>Calculer $\sum&#95;{k=0}^{n} (n-k)^2$.</li>
<li>Calculer, pour $p$ et $n$ entiers, $\sum&#95;{k=p}^{n+p} (-1)^k p^k \mathrm{C}&#95;n^{k-p}$.</li>
</ol>

**Sommes du type $\sum f(k+1) - f(k)$ :**

<ol class="enonces">
<li>Calculer $\sum&#95;{k=0}^{n} \big((k+1)^3 - k^3\big)$. Retrouver la formule du TD précédent
$\sum&#95;{k=0}^{n} k^2$, puis $\sum&#95;{k=0}^{n} k^3$.</li>
<li>Calculer $\sum&#95;{k=1}^{n} k \cdot k!$.</li>
</ol>

**Sommes à deux indices :** calculer

<ol class="enonces">
<li>$\sum&#95;{1 \leq i,&#92;&#44; j \leq n} ij$ ;</li>
<li>$\sum&#95;{1 \leq i,&#92;&#44; j \leq n} \min(i, j)$ ;</li>
<li>$\sum&#95;{\substack{i+j=n \\ i \geq 0,\ j \geq 0}} i^2 j$.</li>
</ol>

**Calculs de sommes de séries :**

<ol class="enonces">
<li>Calculer les sommes partielles de la série de terme général $\dfrac{\cos(nx)}{2^n}$.
En déduire la convergence de la série et la valeur de sa somme.</li>
<li>Calculer la somme de la série de terme général
$u_n = 3^n \sin^3&#92;&#33;\left(\dfrac{\theta}{3^{n+1}}\right)$.</li>
</ol>

**Étude de la nature d'une série :**

<ol class="enonces">
<li>En utilisant l'inégalité, pour $0 \leq x \leq 1$,
$x - \dfrac{x^2}{2} \leq \ln(1+x) \leq x$, étudier la convergence des séries de terme
général :
<ol>
<li>$u_n = \ln&#92;&#33;\left(1 + \dfrac{1}{n}\right)$ ;</li>
<li>$v_n = \dfrac{1}{n} - \ln&#92;&#33;\left(1 + \dfrac{1}{n}\right)$.</li>
</ol>
</li>
<li>Soit $a > 0$. Étudier la convergence de la série de terme général
$u_n = \dfrac{n^{2a}}{a^n + \ln n}$.</li>
</ol>

</div>
