---
layout: chapitre
title: "Polynômes"
numero: 7
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Algèbre"
source: "Math/Math Sup/Algèbre/07 Polynômes"
pages: 68
---

## I. Structure de $\mathbb{K}[X]$

Dans tout ce cours, $\mathbb{K}$ désigne un corps commutatif (en fait, on considérera $\mathbb{K}$ sous-corps de $\mathbb{C}$ — par exemple $\mathbb{R}$ ou $\mathbb{Q}$).

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 1 (suite presque nulle)</span>

Soit $(a_n)&#95;{n \in \mathbb{N}}$ une suite d'éléments de $\mathbb{K}$. On dit que $(a_n)$ est **presque nulle** si $&#92;&#123;n \in \mathbb{N} \mid a_n \neq 0&#92;&#125;$ est fini (ou vide).

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 2 (polynôme)</span>

On appelle **polynôme à une indéterminée sur $\mathbb{K}$** toute suite presque nulle d'éléments de $\mathbb{K}$. On note $\mathbb{K}[X]$ l'ensemble des polynômes à une indéterminée sur $\mathbb{K}$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$(0, 1, 0, \dots, 0) \in \mathbb{K}[X]$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 3 (degré, valuation, coefficient dominant)</span>

Soit $P = (a_n)&#95;{n \in \mathbb{N}}$ un polynôme.

- si $P = 0$, c'est-à-dire si $\forall n \in \mathbb{N},\ a_n = 0$, on pose $\deg(P) = -\infty$ (noté $\deg(0) = -\infty$) ;
- sinon, $&#92;&#123;n \in \mathbb{N} \mid a_n \neq 0&#92;&#125;$ est une partie de $\mathbb{N}$ non vide (car $P \neq 0$) : elle admet un plus grand élément, appelé **degré de $P$** ; elle admet aussi un plus petit élément, appelé **valuation de $P$**.

Si $p = \deg P$, alors $a_p$ s'appelle le **coefficient dominant** de $P$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque (égalité de deux polynômes)</span>

Soient $P = (a_n)&#95;{n \in \mathbb{N}}$ et $Q = (b_n)&#95;{n \in \mathbb{N}}$ : $P = Q$ si et seulement si $\forall n \in \mathbb{N},\ a_n = b_n$.

</div>

### 2) Structure d'anneau

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 4 (les deux lois de $\mathbb{K}[X]$)</span>

On définit sur $\mathbb{K}[X]$ les deux lois :

$$P + Q = (c_n)_{n \in \mathbb{N}}, \qquad c_n = a_n + b_n$$

$$P \times Q = (d_n)_{n \in \mathbb{N}}, \qquad d_n = \sum_{p+q=n} a_p\, b_q = \sum_{p=0}^{n} a_p\, b_{n-p}$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

C'est le produit usuel :

$$(a_3 X^3 + a_2 X^2 + a_1 X + a_0)(b_1 X + b_0) = a_3 b_1 X^4 + (a_3 b_0 + a_2 b_1) X^3 + (a_2 b_0 + a_1 b_1) X^2 + (a_1 b_0 + a_0 b_1) X + a_0 b_0$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

$+$ et $\times$ sont des lois internes de $\mathbb{K}[X]$, et $(\mathbb{K}[X], +, \times)$ est un **anneau commutatif**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $A = &#92;&#123;n \in \mathbb{N} \mid c_n \neq 0&#92;&#125;$.

- si $P = 0$ : $P + Q = Q \in \mathbb{K}[X]$ ;
- supposons $P$ et $Q$ non nuls, $p = \deg P$, $q = \deg Q \in \mathbb{N}$. Soit $n > \max(p, q)$ : alors $a_n = 0 = b_n = c_n$. $A$ est vide, ou bien majoré par $\max(p, q)$, donc vide ou fini : $P + Q \in \mathbb{K}[X]$.

Pour le produit :

- si $P = 0$ ou $Q = 0$ : $\forall n \in \mathbb{N},\ d_n = 0$, donc $PQ = 0 \in \mathbb{K}[X]$ ;
- si $P$ et $Q$ sont non nuls, soit $n > \deg P + \deg Q$ : $d_n = \sum&#95;{k=0}^{n} a_k b&#95;{n-k}$. Si $k > p$, $a_k = 0$ ; si $k \leq p$, alors $n - k \geq n - p > q$ donc $b&#95;{n-k} = 0$. Dans tous les cas $d_n = 0$, et $D = &#92;&#123;n \in \mathbb{N} \mid d_n \neq 0&#92;&#125;$ est soit vide soit majoré par $p + q$ : donc $PQ \in \mathbb{K}[X]$.

$(\mathbb{K}[X], +)$ est un groupe, c'est un sous-groupe de $(\mathbb{K}^{\mathbb{N}}, +)$.

$(1, 0, \dots)$ est un élément neutre pour $\times$ : notons $E = (e_n)&#95;{n \in \mathbb{N}}$ cet élément ($e_0 = 1$) ; pour $P = (a_n)&#95;{n \in \mathbb{N}}$, $P \times E = (d_n)&#95;{n \in \mathbb{N}}$ avec $d_n = \sum&#95;{k=0}^{n} a_k e&#95;{n-k} = a_n$, donc $P \times E = P$.

$\times$ est commutative car $\sum&#95;{k=0}^{n} a_k b&#95;{n-k} = \sum&#95;{k'=0}^{n} a&#95;{n-k'} b&#95;{k'} = \sum&#95;{k'=0}^{n} b&#95;{k'} a&#95;{n-k'}$.

$\times$ est associative : soient $P = (a_n)$, $Q = (b_n)$, $R = (c_n)$ dans $\mathbb{K}[X]$, et posons $PQ = (d_n)$, $(QR) = (e_n)$, $P(QR) = (f_n)$, $(PQ)R = (g_n)$. Alors

$$e_n = \sum_{k+l=n} b_k c_l$$

$$f_n = \sum_{i+j=n} a_i e_j = \sum_{i+j=n} a_i \Big( \sum_{k+l=j} b_k c_l \Big) = \sum_{\substack{i+j=n \\ k+l=j}} a_i b_k c_l = \sum_{i+k+l=n} a_i b_k c_l$$

et de même $g_n = \sum&#95;{i+k+l=n} c_i a_k b_l$ ; en posant $i = l'$, $k = i'$, $l = k'$ :

$$g_n = \sum_{i'+k'+l'=n} a_{i'} b_{k'} c_{l'} = f_n$$

donc $(PQ)R = P(QR)$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

$\mathbb{K}[X]$ n'est **pas un corps** : $P = (0, 1, 0, \dots)$ n'est pas inversible. En effet, pour tout $Q = (b_n)$, $PQ = (d_n)$ avec $d_n = b&#95;{n-1}$ et $d_0 = 0$ : donc $PQ \neq E = (1, 0, \dots)$.

</div>

### 3) Structure de $\mathbb{K}$-algèbre

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 5 (loi externe)</span>

Pour tout $\lambda \in \mathbb{K}$, on définit $\lambda P$ par $\lambda P = (\lambda a_n)&#95;{n \in \mathbb{N}}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

$$\lambda(P+Q) = \lambda P + \lambda Q, \qquad (\lambda + \mu)P = \lambda P + \mu P, \qquad 1_{\mathbb{K}} \cdot P = P, \qquad (\lambda\mu)P = \lambda(\mu P), \qquad \lambda(PQ) = (\lambda P)Q$$

On dit que $(\mathbb{K}[X], +, \times, \cdot)$ est une **$\mathbb{K}$-algèbre**.

</div>

### 4) Écriture d'un polynôme

On désigne par $X$ le polynôme $(0, 1, \dots) = (a_n)$.

$$X^2 = X \times X = (d_n), \qquad d_n = \sum_{k=0}^{n} a_k a_{n-k} = a_1 a_{n-1} \text{ pour } n \geq 1, \qquad d_0 = 0$$

(car $a_0 = 0$ et $a_k = 0$ si $k \neq 1$) : ainsi $d_n = 0$ sauf si $n = 2$, et $X^2 = (0, 0, 1, \dots)$.

Par récurrence :

$$X^n = (\underbrace{0, \dots, 0}_{n \text{ zéros}}, 1, 0, \dots)$$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

Tout polynôme $P = (a_n)&#95;{n \in \mathbb{N}} \in \mathbb{K}[X]$ s'écrit

$$P = \sum_{k \in \mathbb{N}} a_k X^k$$

et l'écriture est **unique**.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

$\sum&#95;{k \in \mathbb{N}} a_k X^k$ désigne la somme finie $S = 0$ si $P = 0$, et sinon $S = \sum&#95;{k=0}^{\deg P} a_k X^k$ si $P \neq 0$ : c'est bien une somme finie de polynômes.

- si $P = 0$ : $P = \sum&#95;{k \in \mathbb{N}} 0&#92;&#44; X^k$ ;
- si $P \neq 0$, soit $p = \deg P$ :

$$P = (a_0, a_1, \dots, a_p, 0, \dots) = (a_0, 0, \dots) + a_1 (0, 1, 0, \dots) + \dots + a_p (\underbrace{0, \dots, 0}_{p \text{ zéros}}, 1, 0, \dots) = a_0 X^0 + a_1 X^1 + \dots + a_p X^p$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (unicité de l'écriture)</span>

Si $P = \sum&#95;{k \in \mathbb{N}} a_k X^k = \sum&#95;{i \in \mathbb{N}} b_i X^i$ (les deux sommes désignant une somme finie), écrivons $P = \sum&#95;{k=0}^{p} a_k X^k = \sum&#95;{i=0}^{q} b_i X^i$. Soit $m = \min(p, q)$ ; supposons par exemple $m = p$. Alors

$$\sum_{k=0}^{m} a_k X^k - \sum_{i=0}^{m} b_i X^i - \sum_{i=m+1}^{q} b_i X^i = 0, \qquad \text{soit} \qquad \sum_{i=0}^{m} (a_i - b_i) X^i - \sum_{i=m+1}^{q} b_i X^i = 0$$

Le polynôme $S = (a_0 - b_0, \dots, a_m - b_m, -b&#95;{m+1}, \dots, -b_q, 0, \dots)$ est nul, donc $\forall i \leq m,\ a_i = b_i$ ; $\forall i \geq m+1,\ b_i = 0$ ; or $\forall i \geq m+1,\ a_i = 0$. Finalement $\forall i \in \mathbb{N},\ a_i = b_i$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$P = 1 + X + \dots + X^n$ : calculer $P^2$.

</div>

On écrira désormais un polynôme $P = \sum&#95;{k=0}^{n} a_k X^k$ :

- les $a_k$ s'appellent les **coefficients** de $P$ ;
- si $P \neq 0$ et $n = \deg P$, alors $a_n$ s'appelle le **coefficient dominant** de $P$ ;
- $a_0$ s'appelle le **coefficient constant** de $P$.

Écrire $P = a_n X^n + a&#95;{n-1} X^{n-1} + \dots + a_0$, c'est ordonner le polynôme selon les puissances **décroissantes** ; écrire $P = a_0 + a_1 X + \dots + a_n X^n$, c'est l'ordonner selon les puissances **croissantes**.

### 5) Calcul du degré

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

$$\deg(P + Q) \leq \max(\deg P, \deg Q)$$

avec **égalité** si $\deg P \neq \deg Q$, et

$$\deg(PQ) = \deg P + \deg Q$$

(avec les conventions usuelles, notamment $\deg 0 = -\infty$).

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**1) deg$(P+Q)$.** Si $P = 0$ ou $Q = 0$, c'est évident. Désormais $P \neq 0$, $Q \neq 0$, et supposons par exemple $\deg Q \geq \deg P$. Soit $n > \deg Q = \max(\deg P, \deg Q)$ : alors $c_n = 0$ (en écrivant $P + Q = \sum&#95;{k \geq 0} c_k X^k$), donc $\deg(P+Q) \leq \max(\deg P, \deg Q)$.

Supposons $\deg P < \deg Q = q$ : alors $c_q = a_q + b_q = b_q$ car $a_q = 0$ (car $q > \deg P$), et $b_q \neq 0$ car $q = \deg Q$. Donc $c_q \neq 0$ et $\deg(P+Q) \geq \deg Q$, d'où l'égalité.

**2) deg$(PQ)$.** Si $P = 0$ ou $Q = 0$, $PQ = 0$. Si $P$ et $Q$ sont non nuls, soient $p = \deg P$ et $q = \deg Q$. Si $n > p + q$, $c_n = 0$. Et

$$c_{p+q} = \sum_{k=0}^{p+q} a_k b_{p+q-k}$$

: si $k > p$, $a_k = 0$ ; si $p + q - k > q$, $b&#95;{p+q-k} = 0$. Il reste $c&#95;{p+q} = a_p b_q$. Or $a_p \neq 0$, $b_q \neq 0$ et $a_p, b_q \in \mathbb{K}$ : $\mathbb{K}$ étant un corps est intègre, donc $a_p b_q \neq 0$. Ainsi $c&#95;{p+q} \neq 0$ et $\deg(PQ) \geq p + q$, d'où l'égalité.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$(X^2 + X + 1) + (-X^2) = X + 1$ : les deux polynômes sont de degré $2$, leur somme est de degré $1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire 1</span>

Soient $P$ et $Q$ non nuls, $a_p$ le coefficient dominant de $P$, $b_q$ celui de $Q$. Alors :

- $PQ$ a pour coefficient dominant $a_p b_q$ ;
- si $\deg P < \deg Q$, $P + Q$ a pour coefficient dominant $b_q$ ;
- si $\deg P = \deg Q$ et $a_p + b_q \neq 0$, $P + Q$ a pour coefficient dominant $a_p + b_q$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire 2</span>

$\mathbb{K}[X]$ est **intègre**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $PQ = 0$, alors $\deg P + \deg Q = -\infty$, donc $P = 0$ ou $Q = 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire 3 (éléments inversibles)</span>

Les éléments inversibles de $\mathbb{K}[X]$ sont les polynômes de degré $0$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Les polynômes de degré $0$ sont inversibles : si $P = a_0 X^0$ avec $a_0 \neq 0$, $a_0 \in \mathbb{K}$, alors $Q = \dfrac{1}{a_0} X^0$ est l'inverse de $P$ ($\mathbb{K}$ est un corps, donc $a_0$ non nul est inversible dans $\mathbb{K}$, et $\lambda Q \in \mathbb{K}[X]$).

Réciproquement, si $P$ est inversible dans $\mathbb{K}[X]$, il existe $Q \in \mathbb{K}[X]$ tel que $PQ = 1$. Alors $\deg P + \deg Q = 0$, d'où $\deg P = \deg Q = 0$ : seuls les polynômes de degré $0$ conviennent.

</div>

## II. Arithmétique dans $\mathbb{K}[X]$

### 1) Division euclidienne dans $\mathbb{K}[X]$

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème (division euclidienne)</span>

Soit $(A, B) \in \mathbb{K}[X]^2$, avec $B \neq 0$ : alors il existe un unique couple $(Q, R)$ tel que

$$A = BQ + R \qquad \text{et} \qquad \deg R < \deg B$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**Unicité.** Si $A = BQ + R = BQ' + R'$, alors $B(Q - Q') = R' - R$. Si $Q = Q'$, alors $R = R'$. Sinon :

$$\deg\big(B(Q - Q')\big) = \deg B + \deg(Q - Q') \geq \deg B$$

(car $\deg B \in \mathbb{N}$ puisque $B \neq 0$, et $\deg(Q - Q') \in \mathbb{N}$), tandis que

$$\deg(R' - R) \leq \max(\deg R', \deg(-R)) \leq \max(\deg R', \deg R) < \deg B$$

d'où $\deg(R' - R) < \deg B \leq \deg\big(B(Q - Q')\big)$, ce qui est absurde.

**Existence.** Écrivons $A = a_n X^n + \dots + a_0$ ($a_n \neq 0$) et $B = b_p X^p + \dots + b_0$ ($b_p \neq 0$).

- si $A = 0$, le couple $(0, 0)$ convient ;
- si $A \neq 0$ et $\deg A < \deg B$, le couple $(0, A)$ convient ;
- si $\deg A \geq \deg B = p$, posons $R_0 = A$ et

$$R_1 = A - \frac{a_n}{b_p}\, B\, X^{n-p}$$

(c'est un polynôme car $b_p \neq 0$ et $n \geq p$), c'est-à-dire

$$R_1 = \Big(a_{n-1} - \frac{a_n}{b_p} b_{p-1}\Big) X^{n-1} + \Big(a_{n-2} - \frac{a_n}{b_p} b_{p-2}\Big) X^{n-2} + \dots + \Big(a_{n-p} - \frac{a_n}{b_p} b_0\Big) X^{n-p} + a_{n-p-1} X^{n-p-1} + \dots + a_0$$

et $\deg R_1 < \deg A$. En réitérant le procédé à $R_1$, on trouve $R_2$ tel que $\deg R_2 < \deg R_1 < \deg A$ : au bout d'un nombre fini d'étapes (au plus $n - p + 1$), on obtient $\deg R_k < \deg B$, avec

$$A = B Q_1 + R_1, \quad R_1 = B Q_2 + R_2, \quad \dots, \quad R_{k-1} = B Q_k + R_k$$

d'où $A = B(Q_1 + Q_2 + \dots + Q_k) + R_k$ et $\deg R_k < \deg B$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Disposition pratique</span>

On pose la division de $A$ par $B$ suivant les puissances décroissantes.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $A = X^3 + X + 1$, $B = X^2$ : $A = X^2 \cdot X + (X + 1)$ (quotient $X$, reste $X + 1$) ;
- $A = X^4 + X + 1$, $B = X^2 + 1$ : la division posée donne $A = (X^2 + 1)(X^2 - 1) + (X + 2)$ ;
- $X^6 - 1 = (X^2 + X + 1)(X^4 - X^3 + X - 1)$ (reste nul).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition (invariance par multiplication)</span>

Si on multiplie $A$ et $B$ par un polynôme $P \neq 0$, le reste de la division de $PA$ par $PB$ est le reste de la division de $A$ par $B$ multiplié par $P$ ; le quotient ne change pas.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$A = BQ + R$, donc $PA = (BP)Q + RP$ et $\deg RP < \deg(BP)$ : par unicité, le reste de la division de $PA$ par $PB$ est $RP$ et le quotient est $Q$.

</div>

### 2) Divisibilité dans $\mathbb{K}[X]$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $B$ **divise** $A$ dans $\mathbb{K}[X]$, et on note $B \mid A$, s'il existe un polynôme $Q \in \mathbb{K}[X]$ tel que $A = BQ$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$X - i$ et $X + i$ divisent $X^2 + 1$ dans $\mathbb{C}[X]$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

Si $B \neq 0$, alors $B \mid A$ si et seulement si le reste de la division euclidienne de $A$ par $B$ est nul.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$A = BQ + R$. Si $R = 0$, alors $B \mid A$. Si $B \mid A$, $A = BQ'$ et, par unicité de la division euclidienne, $R = 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

La relation $\mid$ est réflexive, transitive, mais **non antisymétrique** : si $A \mid B$ et $B \mid A$, alors $B = \lambda A$ avec $\lambda \neq 0$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $A \mid B$ et $B \mid A$ : $A = PQ$ et $B = QR$. Si $A \neq 0$, $\mathbb{K}[X]$ étant intègre, on obtient $QR = 1$ : $Q$ et $R$ sont inversibles dans $\mathbb{K}[X]$, donc $Q = \alpha$ avec $\alpha \in \mathbb{K}^&#42;$, et $B = \alpha A$. Si $A = 0$, alors $B = 0$ et $B = \lambda A$ convient.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (polynôme unitaire)</span>

Un polynôme est dit **unitaire** si son coefficient dominant est $1$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $A \mid B$ et $B \mid A$, et si $A$ et $B$ sont unitaires, alors $A = B$ (car $B = \alpha A$ et, en identifiant les coefficients dominants, $1 = \alpha \times 1$). Plus généralement, il y a égalité si $A$ et $B$ ont même coefficient dominant.

</div>

### 3) Caractère principal de $\mathbb{K}[X]$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

$\mathbb{K}[X]$ est un **anneau principal**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

- $\mathbb{K}[X]$ est un anneau commutatif intègre ;
- soit $I$ un idéal de $\mathbb{K}[X]$ :
  - si $I = &#92;&#123;0&#92;&#125;$, alors $I = 0&#92;&#44;\mathbb{K}[X]$ ;
  - si $I \neq &#92;&#123;0&#92;&#125;$, posons $d = &#92;&#123;\deg P \mid P \in I \setminus &#92;&#123;0&#92;&#125;&#92;&#125; \subset \mathbb{N}$ : $d$ est non vide car $I \neq &#92;&#123;0&#92;&#125;$, donc admet un plus petit élément $d_0$ ; soit $B \in I$ de degré $d_0$. Alors $B&#92;&#44;\mathbb{K}[X] \subset I$ ($I$ est un idéal). Soit $A \in I$ : $A = BQ + R$ avec $\deg R < \deg B$ (cas $B \neq 0$). Comme $A \in I$ et $BQ \in I$, on a $A - BQ \in I$ ($(I, +)$ est un groupe), donc $R \in I$. Si $R \neq 0$, alors $\deg R \in d$ et $\deg R < d_0$, ce qui est impossible : donc $R = 0$ et $A \in B&#92;&#44;\mathbb{K}[X]$.

Ainsi $I = B&#92;&#44;\mathbb{K}[X]$ : tout idéal de $\mathbb{K}[X]$ est principal.

</div>

### 4) PGCD

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $(P_1, \dots, P_n) \in \mathbb{K}[X]^n$. Alors

$$P_1 \mathbb{K}[X] + P_2 \mathbb{K}[X] + \dots + P_n \mathbb{K}[X]$$

est un idéal de $\mathbb{K}[X]$, comme somme d'idéaux de $\mathbb{K}[X]$ ; comme $\mathbb{K}[X]$ est principal, il existe $D \in \mathbb{K}[X]$ tel que

$$P_1 \mathbb{K}[X] + \dots + P_n \mathbb{K}[X] = D\, \mathbb{K}[X]$$

$D$ est un diviseur commun des $P_i$, et c'est un plus grand diviseur. $D$ s'appelle le **PGCD** de $P_1, \dots, P_n$. $D$ est défini à une constante près.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si on impose que $D$ soit unitaire, alors $D$ est unique, et on l'appelle **le PGCD** de $P_1, \dots, P_n$ (avec $D \neq 0$).

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration ($D$ est un plus grand diviseur commun)</span>

$D&#92;&#44;\mathbb{K}[X] = P_1\mathbb{K}[X] + \dots + P_n\mathbb{K}[X]$, donc $P_i \in D&#92;&#44;\mathbb{K}[X]$ : $P_i = D \times Q$ avec $Q \in \mathbb{K}[X]$, donc $D \mid P_i$.

Si $D'$ est un diviseur commun des $P_i$, alors $P_i = Q_i D'$. Mais $D \in D&#92;&#44;\mathbb{K}[X]$, d'où

$$D = P_1 R_1 + P_2 R_2 + \dots + P_n R_n = D'(Q_1 R_1 + Q_2 R_2 + \dots + Q_n R_n), \qquad R_i \in \mathbb{K}[X]$$

donc $D' \mid D$ : $D$ est bien un plus grand diviseur commun.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

Les règles de calcul sont les mêmes que sur $\mathbb{Z}$ :

- les $P_i$ non tous nuls ;
- « commutative » ;
- « associative ».

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

$$\forall \alpha \in \mathbb{K}^*,\ \forall \beta \in \mathbb{K}^*, \qquad (A \wedge B) = (B \wedge \alpha A - \beta B)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Posons $D = A \wedge B$ et $D' = B \wedge \alpha A - \beta B$. $D \mid A$ et $D \mid \beta B$, donc $D \mid \alpha A - \beta B$ : ainsi $D \mid D'$. Réciproquement, $D' \mid \alpha A - \beta B$ et $D' \mid B$, donc $D' \mid \alpha A$ ; or $\alpha \neq 0$, donc $D' \mid A$. Finalement $D' \mid A$ et $D' \mid B$, donc $D' \mid A \wedge B$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $A = BQ + R$, avec $(Q, R)$ quotient et reste de la division euclidienne de $A$ par $B$ ($B \neq 0$), alors

$$(A \wedge B) = (B \wedge R)$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Algorithme d'Euclide</span>

$R_0 = A$, $R_1 = B$. Tant que $R_k \neq 0$, poser $R&#95;{k-1} = Q_k R_k + R&#95;{k+1}$ avec $\deg R&#95;{k+1} < \deg R_k$. Si $R&#95;{n+1}$ est le premier reste nul, alors $D = R_n$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Méthode pratique</span>

On pourra multiplier à chaque étape de division les restes par une constante convenable, pour se débarrasser des dénominateurs encombrants.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Application de l'algorithme d'Euclide : divisions posées successives de $R&#95;{k-1}$ par $R_k$ jusqu'au premier reste nul (les calculs intermédiaires font apparaître des fractions, d'où l'intérêt de la méthode pratique ci-dessus).

</div>

### 5) Polynômes premiers entre eux

#### 1) Définitions

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 1</span>

On dit que $P_1, \dots, P_n$ sont **premiers entre eux** (dans leur ensemble) si leur PGCD est $1$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 2</span>

On dit que $P_1, \dots, P_n$ sont **premiers entre eux deux à deux** si

$$\forall (i, j),\ i \neq j \Rightarrow P_i \wedge P_j = 1$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$(X^2 - 1,\ X + 1,\ X - 1)$ sont premiers entre eux dans leur ensemble, mais pas deux à deux.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Proposition 1 (théorème de Bézout)</span>

$P_1, P_2, \dots, P_n$ sont premiers entre eux (dans leur ensemble) si et seulement si il existe $(Q_1, \dots, Q_n) \in \mathbb{K}[X]^n$ tel que

$$1 = P_1 Q_1 + P_2 Q_2 + \dots + P_n Q_n$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (sens direct)</span>

$(P_1 \wedge P_2 \wedge \dots \wedge P_n) = 1$ si et seulement si $\mathbb{K}[X] = P_1 \mathbb{K}[X] + \dots + P_n \mathbb{K}[X]$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

$P_1 \wedge P_2 \wedge \dots \wedge P_n = D$ si et seulement si $1 = \left(\dfrac{P_1}{D} \wedge \dfrac{P_2}{D} \wedge \dots \wedge \dfrac{P_n}{D}\right)$, lorsque $D$ est un diviseur commun des $P_i$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

Si $P$ est premier séparément avec $P_1, \dots, P_n$, alors il est premier avec leur produit.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Par récurrence sur $n$, et à l'aide du théorème de Bézout.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

La réciproque est vraie : si $P \wedge (P_1 \cdots P_n) = 1$, soit $UP + V(P_1 \cdots P_n) = 1$ ; alors $UP + P_1(V P_2 \cdots P_n) = 1$, donc $P \wedge P_1 = 1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Pour tous $n, p \geq 1$ :

$$A \wedge B = 1 \iff A^n \wedge B^p = 1$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $A \wedge B = 1$, alors $A^n \wedge B = 1$ (proposition 2, avec $B$ et $A, \dots, A$) ; de même $A^n \wedge B^p = 1$ (proposition 2, avec $A^n$ et $B, B, \dots, B$).

Réciproquement, si $U A^n + V B^p = 1$, comme $n \geq 1$ et $p \geq 1$ :

$$A\,(U A^{n-1}) + (V B^{p-1})\, B = 1$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple important</span>

Si $a \neq b$, $a, b \in \mathbb{K}$, alors $(X - a)^p \wedge (X - b)^q = 1$ pour $p \geq 1$, $q \geq 1$, car $(X - a) - (X - b) = b - a \neq 0$.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Proposition 3 (théorème de Gauss)</span>

Si $A \mid BC$ et $B \wedge A = 1$, alors $A \mid C$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Il existe $U$ et $V$ dans $\mathbb{K}[X]$ tels que $UA + VB = 1$ ; donc $UAC + VBC = C$. Comme $A \mid BC$ et $A \mid UAC$, on a $A \mid C$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $P$ est divisible séparément par $P_1, \dots, P_n$ premiers entre eux deux à deux, alors $P$ est divisible par leur produit.

</div>

### 6) PPCM

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $(P_1, \dots, P_n) \in \mathbb{K}[X]^n$. Alors

$$P_1 \mathbb{K}[X] \cap P_2 \mathbb{K}[X] \cap \dots \cap P_n \mathbb{K}[X]$$

est un idéal de $\mathbb{K}[X]$, comme intersection d'idéaux, donc de la forme $M&#92;&#44;\mathbb{K}[X]$ ($\mathbb{K}[X]$ est principal). $M$ est défini à une constante non nulle près. $M$ est un multiple commun des $P_i$, et c'est un plus petit multiple (pour la relation $\mid$) : on dit que c'est un **PPCM** de $(P_1, \dots, P_n)$. Si $M \neq 0$, il existe un unique PPCM unitaire, et on l'appelle **le PPCM** de $(P_1, \dots, P_n)$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$M$ est multiple commun des $P_i$ : $P_i&#92;&#44;\mathbb{K}[X] \subset M&#92;&#44;\mathbb{K}[X]$, donc $M \in P_i&#92;&#44;\mathbb{K}[X]$, donc $P_i \mid M$.

Si $M'$ est un multiple commun des $P_i$, alors $P_i \mid M'$, $M' = Q_i P_i$ pour tout $i$, donc $M' \in \bigcap_i P_i&#92;&#44;\mathbb{K}[X] = M&#92;&#44;\mathbb{K}[X]$ : ainsi $M \mid M'$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Propriété</span>

Les règles de calcul sont les mêmes que sur $\mathbb{Z}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

Soient $A, B \in \mathbb{K}[X]$ ; posons $D = A \wedge B$, $A = D A'$, $B = D B'$ (avec $A' \wedge B' = 1$). Alors le PPCM de $A$ et $B$ est

$$M = A' B' D \qquad \text{et l'on a} \qquad DM = AB$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$D A' B' = A B' = B A'$, donc $D A' B'$ est un multiple commun de $A$ et $B$.

Si $M'$ est un multiple commun de $A$ et $B$ : $A Q_A = M' = B Q_B$, donc $D A' Q_A = D B' Q_B$, d'où $A' Q_A = B' Q_B$. Mais $A' \wedge B' = 1$, donc $A' \mid Q_B$ (théorème de Gauss) : $Q_B = R A'$, d'où

$$M' = B A' R = (D A' B') R$$

donc $D A' B' \mid M'$ : ainsi $A \vee B = D A' B'$.

</div>

### 7) Polynômes irréductibles

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 1 (diviseur strict)</span>

On dit que $D$ est un **diviseur strict** de $P$ si $D \mid P$ et si $D$ n'est pas de la forme $\alpha P$ ou $\alpha$, avec $\alpha \in \mathbb{K}^&#42;$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 2 (polynôme irréductible)</span>

On dit que $P$ est **irréductible** si $P$ est non constant et n'admet aucun diviseur strict.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

- si $P \neq 0$ et $D \mid P$, alors $D$ est strict si et seulement si $0 < \deg D < \deg P$ ;
- $X^2 + 1$ est irréductible dans $\mathbb{R}[X]$, mais ne l'est pas dans $\mathbb{C}[X]$ : $(X - i)$ et $(X + i)$ en sont des diviseurs stricts ;
- les polynômes de degré $1$ sont toujours irréductibles.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

$P$ irréductible est premier avec $Q$ si et seulement si $P$ ne divise pas $Q$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$P \wedge Q = D$ et $D \mid P$ : comme $P$ est irréductible, $D = 1$ ou $D = \alpha P$ avec $\alpha \neq 0$. Si $D = 1$, alors $P \wedge Q = 1$. Si $D = \alpha P$, alors $\alpha \mid P \mid Q$, donc $P \mid Q$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

Si $P$ est irréductible et divise un produit $P_1 \cdots P_n$, alors il divise l'un des $P_i$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $P$ ne divise aucun des $P_i$, il est premier avec chacun d'eux (proposition 1), donc avec leur produit (proposition 2 de la section 5) : contradiction.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $P$ est unitaire irréductible, si les $P_i$ sont irréductibles unitaires, et si $P \mid P_1 \cdots P_n$, alors $P$ est égal à l'un des $P_i$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$P \mid P_i$ pour un certain $i$, mais $P_i$ est irréductible, donc $P = \alpha$ ou $P = \alpha P_i$ avec $\alpha \in \mathbb{K}^&#42;$ ; comme $P$ et $P_i$ sont unitaires, $P = P_i$.

</div>

#### Décomposition en facteurs irréductibles

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Tout polynôme $P$ de degré $\geq 1$ s'écrit

$$P = \alpha\, P_1^{\alpha_1} P_2^{\alpha_2} \cdots P_n^{\alpha_n}$$

avec $\alpha \in \mathbb{K}^&#42;$, $\alpha_i \in \mathbb{N}^&#42;$, les $P_i$ irréductibles unitaires de $\mathbb{K}[X]$ deux à deux distincts, et l'écriture est **unique à l'ordre des termes près**.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Lemme</span>

Tout polynôme $P$ de degré $\geq 1$ admet un diviseur irréductible.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (du lemme, par récurrence sur le degré de $P$)</span>

- si $\deg P = 1$, $P$ est irréductible : OK ;
- supposons la propriété vraie au rang $n$ : tout polynôme de degré $\leq n$ admet un diviseur irréductible. Soit $P$ de degré $n + 1$ (avec $n \geq 1$) :
  - 1er cas : $P$ est irréductible ;
  - 2ème cas : $P$ n'est pas irréductible, donc admet un diviseur strict $D$ : $0 < \deg D < \deg P = n + 1$, c'est-à-dire $\deg D \leq n$ ; $D$ admet un diviseur irréductible $Q$, et $Q \mid D \mid P$ : $Q$ est un diviseur irréductible de $P$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (unicité de la décomposition)</span>

Écrivons $P = \alpha P_1^{\alpha_1} \cdots P_n^{\alpha_n} = \beta Q_1^{\beta_1} \cdots Q_p^{\beta_p}$. Le coefficient dominant de $P$ donne $\alpha = \beta$ (unicité). Posons $\Phi = &#92;&#123;P_i,\ i = 1, \dots, n&#92;&#125;$ et $\Psi = &#92;&#123;Q_j,\ j = 1, \dots, p&#92;&#125;$. Soit $P_i \in \Phi$ : $P_i$ divise le produit des $Q_j^{\beta_j}$, donc (corollaire de la proposition 2) $P_i$ est égal à l'un des $Q_j$ : ainsi $\Phi \subset \Psi$ ; par symétrie, $\Psi \subset \Phi$, donc $\Phi = \Psi$. En posant $p = n$ et en renumérotant les $Q_j$, on peut supposer $Q_i = P_i$ pour $i = 1, \dots, n$, d'où

$$P_1^{\alpha_1} \cdots P_n^{\alpha_n} = P_1^{\beta_1} \cdots P_n^{\beta_n}$$

Comme les $P_i$ sont deux à deux distincts, on en déduit $\alpha_i = \beta_i$ pour tout $i$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (existence, par récurrence sur $\deg P$)</span>

$H_n$ : tout polynôme $P$ de degré $\leq n$ admet une décomposition vérifiant les conditions du théorème. Si $H_n$ est vraie et si $P$ est de degré $n + 1$ :

- si $P$ est irréductible, $P = \alpha \cdot \dfrac{P}{\alpha}$ où $\alpha$ est le coefficient dominant de $P$ ;
- sinon, $P$ admet un diviseur $Q$ avec $0 < \deg Q < \deg P$ : $P = QR$, et $R$ est aussi un diviseur strict de $P$ ; on applique $H_n$ à $Q$ et à $R$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$X^4 - 1 = (X - 1)(X + 1)(X^2 + 1) \quad \text{dans } \mathbb{R}[X]$$

$$X^4 - 1 = (X - 1)(X + 1)(X - i)(X + i) \quad \text{dans } \mathbb{C}[X]$$

</div>

## III. Fonctions polynômes

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle **fonction polynôme** associée à $P$ la fonction
$x \mapsto \widetilde{P}(x) = \displaystyle\sum&#95;{k=0}^{n} a_k x^k$, où
$P = \displaystyle\sum&#95;{k=0}^{n} a_k X^k$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$P = X^2 + X + 1$ : $\widetilde{P}(1) = 0$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On notera $\mathcal{P}&#95;n$ l'ensemble des fonctions polynômes sur $\mathbb{K}$
de degré $\leq n$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$\varphi : \mathbb{K}[X] \to \mathcal{P}$, $P \mapsto \widetilde{P}$ est un
**morphisme** pour les lois $+$, $\times$ et $\cdot$ (multiplication par un
scalaire), **surjectif**.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $K = \mathbb{Z}/p\mathbb{Z}$, avec $P = X^p - X$ :
$\widetilde{P}(x) = x^p - x = 0$ pour tout $x \in K$, donc
$\widetilde{P} = \widetilde{0}$ mais $P$ n'est pas nul.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Le reste de la division euclidienne de $P$ par $X - a$ est $\widetilde{P}(a)$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$P = (X-a)Q + R$ avec $\deg R < 1$ : $R$ est une constante (éventuellement
nulle) ; on confond $R$ et $\widetilde{R}$. Alors, pour tout $x$ :

$$\widetilde{P}(x) = (x-a)\,\widetilde{Q}(x) + \widetilde{R}$$

En particulier, en $x = a$ :
$\widetilde{P}(a) = (a-a)&#92;&#44;\widetilde{Q}(a) + \widetilde{R}(a)
= \widetilde{R}(a) = R$.

</div>

### 2) Racines

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $a \in K$ est **racine** de $P \in K[X]$ si
$\widetilde{P}(a) = 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$a$ est racine de $P$ si et seulement si $X - a \mid P$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\widetilde{P}(a) = 0$ si et seulement si le reste de la division euclidienne
de $P$ par $X-a$ est nul, c'est-à-dire si et seulement si $X - a \mid P$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $P$ admet $n$ racines distinctes $a_1, \dots, a_n$, alors $P$ est divisible
par $(X-a_1)(X-a_2)\cdots(X-a_n)$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Justification</span>

$a_1, \dots, a_n$ étant racines de $(X-a_1)\cdots(X-a_n)$ et deux à deux
distincts, les polynômes $(X-a_i)$ sont premiers entre eux deux à deux, donc
leur produit divise $P$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Un polynôme de degré $n \geq 0$ admet **au plus $n$ racines distinctes**.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $P$ admet $k$ racines distinctes $a_1, \dots, a_k$, il est divisible par
$(X-a_1)\cdots(X-a_k)$ qui est de degré $k$, donc $\deg P \geq k$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si l'on trouve $n+1$ racines distinctes pour $P$ de degré au plus $n$, alors
$P$ est nul.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (polynôme scindé)</span>

On dira que $P$ est **scindé** s'il est produit (avec $\deg P = n$) de
polynômes de degré 1, c'est-à-dire si $n = \deg P$ et si $P$ admet $n$ racines
(exactement).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

Si $K$ est **infini**, alors
$\varphi : K[X] \to \mathcal{P}$, $P \mapsto \widetilde{P}$ est un
**isomorphisme**.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Il faut montrer que $\varphi$ est injective ; $\varphi$ est un morphisme de
groupes de $(K[X], +)$ dans $(\mathcal{P}, +)$. On a
$\operatorname{Ker}\varphi = \varphi^{-1}(&#92;&#123;\widetilde{0}&#92;&#125;)$ ; il faut montrer
que $\operatorname{Ker}\varphi = &#92;&#123;0&#95;{K[X]}&#92;&#125;$. Soit $P \in \operatorname{Ker}\varphi$ :
$\forall x \in K$, $\widetilde{P}(x) = 0$, donc tout $x$ de $K$ est racine de
$P$ : $P$ admet une infinité de racines, or $P = 0$ (car si $\deg P = n \neq 0$,
$P$ admet au plus $n$ racines). Donc $\operatorname{Ker}\varphi = &#92;&#123;0&#95;{K[X]}&#92;&#125;$ :
$\varphi$ est injective.

</div>

### 3) Application à l'étude de $\mathbb{R}[X]$ et $\mathbb{C}[X]$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1 (théorème de d'Alembert — admis)</span>

Tout polynôme de $\mathbb{C}[X]$ de degré $\geq 1$ admet **au moins une racine
dans $\mathbb{C}$**.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Tout polynôme de $\mathbb{C}[X]$ de degré $> 1$ est **scindé sur $\mathbb{C}$**.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration (récurrence)</span>

Si $\deg P = 1$, c'est clair : $P = aX + b$. Hypothèse de récurrence : si
$\deg R = n$, $R$ est scindé sur $\mathbb{C}$. Soit $P \in \mathbb{C}[X]$ avec
$\deg P = n+1$ ($n \geq 1$). D'après le théorème de d'Alembert, $P$ admet une
racine $a$ dans $\mathbb{C}$ : $X - a \mid P$, $P = (X-a)Q$ avec $Q \in
\mathbb{C}[X]$. Alors $\deg P = \deg(X-a) + \deg Q$, donc $\deg Q = n$.
D'après l'hypothèse de récurrence, $Q$ est scindé :
$Q = b(X-a_1)\cdots(X-a_n)$. Donc
$P = b(X-a)(X-a_1)\cdots(X-a_n)$ : $P$ est scindé sur $\mathbb{C}$. CQFD.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

Les polynômes **irréductibles** de $\mathbb{C}[X]$ sont les polynômes de
degré 1 (car tout polynôme de degré $\geq 2$ admet un diviseur strict de la
forme $(X-\alpha)$, et réciproquement les polynômes de degré 1 sont
irréductibles).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 3</span>

Les polynômes **irréductibles** de $\mathbb{R}[X]$ sont :

1) les polynômes de $\mathbb{R}[X]$ de degré 1 ;
2) les polynômes de degré 2 $aX^2 + bX + c$, $a \neq 0$, tels que
   $\Delta = b^2 - 4ac < 0$.

</div>

**1ère étape : ce sont des polynômes irréductibles.**

- si $\deg P = 1$ : OK ;
- si $P = aX^2 + bX + c$ avec $a \neq 0$ et $b^2 - 4ac < 0$ : si $D$ est un
  diviseur strict de $P$ dans $\mathbb{R}[X]$, $D$ est de la forme
  $a(X - x_0)$, $a \in \mathbb{R}^&#42;$, $x_0 \in \mathbb{R}$ (remarque :
  $\deg D = 1$, car $0 < \deg D < \deg P = 2$) ; mais $x_0$ est solution de
  $P(x) = 0$, or $P(x) = 0$ n'a pas de solution réelle car $\Delta < 0$ : donc
  $P$ n'admet pas de diviseur strict, $P$ est irréductible dans $\mathbb{R}[X]$.

**2ème étape : ce sont les seuls.**

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Lemme</span>

Si $P \in \mathbb{R}[X]$ admet, en tant que polynôme de $\mathbb{C}[X]$, une
racine $z \in \mathbb{C}$, alors $\overline{z}$ est aussi racine.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$P = \sum&#95;{k=0}^{n} a_k X^k$ et $\widetilde{P}(z) = \sum&#95;{k=0}^{n} a_k z^k = 0$ ;
en conjuguant et comme $\overline{a_k} = a_k$ (car $P \in \mathbb{R}[X]$) :

$$\sum_{k=0}^{n} a_k \overline{z}^k = 0, \qquad \text{c'est-à-dire } \widetilde{P}(\overline{z}) = 0$$

</div>

Soit $P$ un polynôme de $\mathbb{R}[X]$. $P$ est scindé sur $\mathbb{C}$. Notons
$\alpha_1, \dots, \alpha_k$ ses racines réelles et
$\beta_1, \overline{\beta_1}, \dots, \beta_p, \overline{\beta_p}$ ses racines
complexes non réelles ($\forall i$, $1 \leq i \leq p$, $\beta_i \neq
\overline{\beta_i}$). Alors

$$P = a_n (X-\alpha_1)\cdots(X-\alpha_k)(X-\beta_1)(X-\overline{\beta_1})\cdots(X-\beta_p)(X-\overline{\beta_p})$$

$$P = a_n (X-\alpha_1)\cdots(X-\alpha_k)\big(X^2 - 2\,\mathrm{Re}(\beta_1)X + |\beta_1|^2\big)\cdots\big(X^2 - 2\,\mathrm{Re}(\beta_p)X + |\beta_p|^2\big)$$

Ceci est une décomposition en facteurs irréductibles dans $\mathbb{R}[X]$,
car les $X^2 - 2&#92;&#44;\mathrm{Re}(\beta_i)X + &#124;\beta_i&#124;^2$ ont un $\Delta < 0$
(leur discriminant vaut $4&#92;&#44;\mathrm{Re}(\beta_i)^2 - 4&#124;\beta_i&#124;^2
= -4(\mathrm{Im}&#92;&#44;\beta_i)^2 < 0$). Si $P \neq 0$ est irréductible, la
décomposition ci-dessus admet un seul terme, donc $P$ est de la forme
$X - \alpha_i$, $\alpha_i \in \mathbb{R}$, ou
$X^2 - 2&#92;&#44;\mathrm{Re}(\beta_i)X + &#124;\beta_i&#124;^2$, $\beta_i \in \mathbb{C}\setminus\mathbb{R}$ :
$P$ est bien de la forme annoncée.

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Cela donne une **technique** pour obtenir la décomposition en facteurs
irréductibles dans $\mathbb{R}[X]$ : on décompose d'abord dans $\mathbb{C}[X]$,
c'est-à-dire qu'on cherche les racines, puis on regroupe les termes conjugués.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$X^4 + X^2 + 1$ : $j$ et $j^2 = \overline{j}$ sont racines, et

$$X^4 + X^2 + 1 = (X^2 + X + 1)(X^2 - X + 1) = (X^2+1)^2 - X^2$$

</div>

### 4) Polynômes dérivés

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Si $P$ a pour coefficients $(a_n)&#95;{n \in \mathbb{N}}$, on appelle **polynôme
dérivé** le polynôme $P'$ de coefficients $((n+1)a&#95;{n+1})&#95;{n \in \mathbb{N}}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

- si $P$ est constant (éventuellement nul), $P' = 0$ ;
- si $\deg P \geq 1$, $\deg P' = \deg P - 1 \geq 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

$$(P+Q)' = P' + Q', \qquad (\lambda P)' = \lambda P' \quad (\forall \lambda \in K), \qquad (PQ)' = P'Q + PQ'$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $P$ ou $Q$ est constant, on obtient (2). Sinon, avec
$P = \sum&#95;{k=0}^{n} a_k X^k$ et $Q = \sum&#95;{i=0}^{p} b_i X^i$ :

$$PQ = \sum_{i=0}^{p+q}\Big(\sum_{j=0}^{i} a_j b_{i-j}\Big)X^i, \qquad
(PQ)' = \sum_{i=0}^{p+q-1}(i+1)\Big(\sum_{j=0}^{i+1} a_j b_{i+1-j}\Big)X^i$$

$$P' = \sum_{i=0}^{p-1}(i+1)a_{i+1}X^i, \qquad Q' = \sum_{i=0}^{q-1}(i+1)b_{i+1}X^i$$

$$P'Q = \sum_{i=0}^{p+q-1}\Big(\sum_{j=0}^{i}(j+1)a_{j+1}b_{i-j}\Big)X^i, \qquad
PQ' = \sum_{i=0}^{p+q-1}\Big(\sum_{j=0}^{i} a_j(i-j+1)b_{i-j+1}\Big)X^i$$

En regroupant les deux sommes, on trouve, dans $P'Q + PQ' = (PQ)'$, le
coefficient de $X^i$ :
$(i+1)\big(a_j b&#95;{i+1-j} + a&#95;{j+1}b&#95;{i-j}\big)$ sommé, ce qui redonne bien
$(i+1)\sum&#95;{j=0}^{i+1} a_j b&#95;{i+1-j}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

$$(P^n)' = n\,P'\,P^{n-1}, \qquad n \geq 1 \quad \text{(récurrence)}$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Dans $\mathbb{R}[X]$ (ou $\mathbb{C}[X]$), on a $(\widetilde{P})' = \widetilde{P'}$ :
le premier membre désigne la dérivée de la **fonction**, le second le polynôme
dérivé. En effet, pour $n \geq 1$ :

$$\Big(\sum_{k=0}^{n} a_k x^k\Big)' = \sum_{k=1}^{n} k a_k x^{k-1} = \sum_{k=0}^{n-1} (k+1)a_{k+1}x^k$$

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (dérivées $k$-ièmes)</span>

On définit de même la dérivée $k$-ième de $P$ : pour tout $k \geq 1$,
$P^{(k)}(X)$ a pour coefficients
$\big((n+1)(n+2)\cdots(n+k)&#92;&#44;a&#95;{n+k}\big)&#95;{n \in \mathbb{N}}$ :

$$P^{(k)}(X) = \sum_{n=0}^{\infty} (n+k)(n+k-1)\cdots(n+1)\,a_{n+k}\,X^n$$

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème (formule de Taylor)</span>

Soit $P \in K[X]$ avec $\deg P = n \neq 0$. On suppose que
$\mathrm{car}&#92;&#44;K = 0$. Alors, pour tout $a \in K$ :

$$P(X) = \widetilde{P}(a) + \widetilde{P'}(a)(X-a) + \dots + \frac{\widetilde{P^{(n)}}(a)}{n!}(X-a)^n$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

**1er cas : $a = 0$.** $P^{(k)}$ a pour coefficient constant $k!&#92;&#44;a_k$, donc

$$\sum_{k=0}^{n} \frac{P^{(k)}(0)}{k!}X^k = \sum_{k=0}^{n} a_k X^k = P(X)$$

**2ème cas : $a$ quelconque.** On pose $Q(X) = P(X+a)$. D'après le 1er cas,
$Q(X) = \sum&#95;{k=0}^{n} \frac{Q^{(k)}(0)}{k!}X^k$.

Il faut montrer que, pour tout $k \geq 0$,
$Q^{(k)}(0) = P^{(k)}(a)$, c'est-à-dire
$[P(X+a)]^{(k)} = P^{(k)}(X+a)$.

- $k = 0$ : OK.
- $k = 1$ : $P = \sum&#95;{k=0}^{n} a_k X^k$, donc
  $Q(X) = P(X+a) = \sum&#95;{k=0}^{n} a_k (X+a)^k$. Or
  $[(X+a)^k]' = k(X+a)^{k-1}$ pour $k \geq 1$, d'où

$$Q'(X) = \sum_{k=1}^{n} a_k\,k\,(X+a)^{k-1}
= \sum_{k=0}^{n-1} a_{k+1}(k+1)(X+a)^k \overset{(*)}{=} P'(X+a)$$

- Supposons la propriété démontrée pour un certain $k \geq 1$ :
  $Q_k(X) = [P(X+a)]^{(k)} = P^{(k)}(X+a)$. Alors
  $[P(X+a)]^{(k+1)} = Q_k'(X) = [P^{(k)}(X+a)]'$. En posant
  $R_k = P^{(k)}(X+a)$, d'après $(&#42;)$ :
  $R_k'(X) = (P^{(k)})'(X+a) = P^{(k+1)}(X+a)$.

Finalement, pour tout $k \geq 1$, $Q^{(k)}(X) = P^{(k)}(X+a)$, et
$Q^{(k)}(0) = P^{(k)}(a)$. Or
$P(X+a) = Q(X) = \sum&#95;{k=0}^{n} \frac{P^{(k)}(a)}{k!}X^k$. En posant
$Y = X+a$ :

$$P(Y) = \sum_{k=0}^{n} \frac{P^{(k)}(a)}{k!}(Y-a)^k$$

</div>

### 5) Racines multiples

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $a \in K$ est **racine d'ordre $k$** de $P$ si $(X-a)^k \mid P$ et
$(X-a)^{k+1}$ ne divise pas $P$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$X(X^2 - 2X + 1)$ admet $0$ pour racine d'ordre 1 et $1$ pour racine
d'ordre 2.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Une racine d'ordre 1 sera dite **simple**, d'ordre $> 1$ **multiple**.

Dans la suite de ce §5, on suppose que $\mathrm{car}&#92;&#44;K = 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Conséquences</span>

$a$ est racine d'ordre $k \geq 1$ de $P$ si et seulement si

$$\widetilde{P}(a) = \widetilde{P'}(a) = \dots = \widetilde{P^{(k-1)}}(a) = 0 \quad \text{et} \quad \widetilde{P^{(k)}}(a) \neq 0$$

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Lemme</span>

$a$ est racine d'ordre $k \geq 1$ de $P$ si et seulement si
$P(X) = (X-a)^k Q(X)$ avec $\widetilde{Q}(a) \neq 0$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\Leftarrow$ si $P = (X-a)^k Q(X)$, alors $(X-a)^k \mid P$ et $X-a$ ne divise
pas $Q$, sinon $(X-a)^{k+1} \mid P$.

$\Rightarrow$ si $a$ est racine d'ordre $k$, $(X-a)^k \mid P$, donc
$P = (X-a)^k Q$, mais $\widetilde{Q}(a) \neq 0$ sinon $(X-a) \mid Q$ et
$(X-a)^{k+1} \mid P$, ce qui contredirait que $a$ est racine d'ordre $k$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration (caractérisation, d'après Taylor)</span>

D'après la formule de Taylor :

$$P(X) = \widetilde{P}(a) + \widetilde{P'}(a)(X-a) + \dots + (X-a)^k\frac{\widetilde{P^{(k)}}(a)}{k!} + \dots + (X-a)^n\frac{\widetilde{P^{(n)}}(a)}{n!} = R(X) + (X-a)^k Q(X)$$

avec
$R(X) = \widetilde{P}(a) + \dots + (X-a)^{k-1}\dfrac{\widetilde{P^{(k-1)}}(a)}{(k-1)!}$
($\deg R \leq k-1$) et

$$Q(X) = \frac{\widetilde{P^{(k)}}(a)}{k!} + (X-a)\frac{\widetilde{P^{(k+1)}}(a)}{(k+1)!} + \dots + (X-a)^{n-k}\frac{\widetilde{P^{(n)}}(a)}{n!}$$

Par unicité de $Q$ et $R$ (quotient et reste de la division euclidienne de $P$
par $(X-a)^k$) : $(X-a)^k \mid P$ si et seulement si $R(X) = 0$, si et
seulement si $R(X+a) = 0$, si et seulement si

$$\widetilde{P}(a) + X\,\widetilde{P'}(a) + \dots + \frac{X^{k-1}}{(k-1)!}\,\widetilde{P^{(k-1)}}(a) = 0$$

c'est-à-dire si et seulement si
$\widetilde{P}(a) = \widetilde{P'}(a) = \dots = \widetilde{P^{(k-1)}}(a) = 0$.

Si $(X-a)^k \mid P$, on a $P = Q&#92;&#44;(X-a)^k$ ; $(X-a)^{k+1} \nmid P$ si et
seulement si $\widetilde{Q}(a) \neq 0$, si et seulement si
$\widetilde{P^{(k)}}(a) \neq 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

$a$ est une racine d'ordre $k \geq 1$ de $P$ si et seulement si $a$ est racine
d'ordre $k-1$ de $P'$, avec la convention : si $a$ est racine d'ordre 0, cela
signifie que $a$ n'est pas racine.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire n° 2</span>

Les **racines multiples** de $P$ sont les racines de $P \wedge P'$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$a$ est racine multiple de $P$ si et seulement si $\widetilde{P}(a) = 0$ et
$\widetilde{P'}(a) = 0$, si et seulement si $X-a \mid P$ et $X-a \mid P'$, si et
seulement si $X-a \mid P \wedge P'$, si et seulement si $a$ est racine de
$P \wedge P'$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

$a$ est d'ordre au moins $k \geq 2$ si et seulement si
$(X-a)^{k-1} \mid P \wedge P'$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — CNS pour que $P = X^3 + pX + q$ admette une racine multiple</span>

$P' = 3X^2 + p$. La division euclidienne de $P$ par $P'$ donne
(quotients et restes successifs) :

$$X^3 + pX + q = (3X^2+p)\frac{X}{3} + \frac{2}{3}pX + q$$

$$3X^2 + p = \Big(\frac{2}{3}pX + q\Big)\Big(\frac{9}{2p}X - \frac{27q}{4p^2}\Big) + R, \qquad
R = \frac{4p^3 + 27q^2}{4p^2}$$

- si $p = 0$ et $q \neq 0$ : $\frac{2}{3}pX + q = q \neq 0$, donc
  $P \wedge P' = 1$ : pas de racine multiple ;
- si $p \neq 0$ et $q = 0$ : $P \wedge P' = 1$ : pas de racine multiple ;
- si $R = 0$ (avec $p \neq 0$) : $P \wedge P' = X + \dfrac{3q}{2p}$ et
  $-\dfrac{3q}{2p}$ est racine multiple ; si $R \neq 0$ : $P \wedge P' = 1$.

Il existe une racine multiple si et seulement si
$\Delta = 27q^2 + 4p^3 = 0$.

</div>

### 6) Relations coefficients — racines

Dans ce §, on considère un polynôme **scindé** $P$ de degré $n \geq 1$
($\mathrm{car}&#92;&#44;K = 0$ : pour $P$ de degré $n \geq 1$, $P$ admet exactement $n$
racines, en comptant celles-ci avec leur ordre de multiplicité). Si $P$ est
unitaire :

$$P = (X-x_1)(X-x_2)\cdots(X-x_n) = \sum_{k=0}^{n-1} a_k X^k + X^n$$

$$a_0 = (-1)^n x_1 x_2 \cdots x_n, \qquad
a_1 = (-1)^{n-1}\!\sum_{i=1}^{n}\!\prod_{j \neq i} x_j
= (-1)^{n-1}\!\sum x_1 \cdots x_{n-1} \ \text{(notation)}$$

$$a_{n-1} = -\sum_{i=1}^{n} x_i, \qquad
a_{n-2} = \sum_{1 \leq i < j \leq n} x_i x_j = \sum x_1 x_2 \ \ (x_1 \neq x_2, \dots)$$

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$(X-a)(X-b)(X-c) = X^3 - (a+b+c)X^2 + (bc+ca+ab)X - abc$$

</div>

Pour calculer $a&#95;{n-k}$ : je choisis $(n-k)$ parenthèses où je prends le terme
$X$ du produit, et dans les $k$ parenthèses restantes je prends les constantes :

$$a_{n-k} = (-1)^k \sum_{1 \leq i_1 < i_2 < \dots < i_k \leq n} x_{i_1} x_{i_2} \cdots x_{i_k}
= (-1)^k \sum x_1 x_2 \cdots x_k \ \text{(notation)}$$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (fonctions symétriques des racines)</span>

Si $x_1, \dots, x_n$ désignent les $n$ racines d'un polynôme $P$ de degré $n$
($n \geq 1$), on appelle **fonctions symétriques des racines** les quantités

$$\sigma_k = \sum x_1 \cdots x_k, \qquad k = 1, \dots, n$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

Si $P$ est scindé de degré $n$, de racines $x_1, \dots, x_n$, de coefficient
dominant $a_n$, alors pour $k = 1, \dots, n$ :

$$\sigma_k = (-1)^k \frac{a_{n-k}}{a_n}$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Justification</span>

On applique la relation trouvée ci-dessus à $\dfrac{P}{a_n}$, qui est unitaire.

Si $P = a_n X^n + a&#95;{n-1}X^{n-1} + \dots + a_0$ :
$\sigma_1 = -\dfrac{a&#95;{n-1}}{a_n}$, $\sigma_2 = \dfrac{a&#95;{n-2}}{a_n}$,
$\dots$, $\sigma_n = (-1)^n \dfrac{a_0}{a_n}$.

</div>

**Application.** $x_1, \dots, x_n$ sont les racines de $P$ scindé de degré $n$
si et seulement si on a :

$$\begin{cases}
x_1 + x_2 + \dots + x_n = -\dfrac{a_{n-1}}{a_n} \\[6pt]
\displaystyle\sum x_i x_j = \dfrac{a_{n-2}}{a_n} \\[6pt]
\vdots \\[6pt]
x_1 x_2 \cdots x_n = (-1)^n \dfrac{a_0}{a_n}
\end{cases}$$

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $n = 2$, on retrouve : $x_1, x_2$ solutions de $aX^2 + bX + c$ si et
seulement si
$\begin{cases} x_1 + x_2 = -\dfrac{b}{a} \\ x_1 x_2 = \dfrac{c}{a} \end{cases}$

</div>

## IV. Division selon les puissances croissantes

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Soient $A, B$ deux polynômes de $K[X]$ avec $B(0) \neq 0$. Alors, pour tout
$h \in \mathbb{N}$, il existe un **unique** couple $(Q, R) \in K[X]^2$ tel que

$$A = BQ + X^{h+1}R \quad \text{et} \quad \deg Q \leq h$$

</div>

Trouver $(Q, R)$, c'est effectuer la **division suivant les puissances
croissantes** de $A$ par $B$ à l'ordre $h$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- division de $X^3 - 1$ par $X+1$ à l'ordre 2 : on cherche
  $X^3 - 1 = (X+1)Q + X^3 R$ ;
- division de $X^3 - 1$ par $X^2 + 1$ :

$$X^3 - 1 = (X-1)(X^2+1) + X(X-1)$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

**Unicité.** On suppose
$BQ + X^{h+1}R = A = BQ' + R'X^{h+1}$ avec $\deg Q, \deg Q' \leq h$. Alors
$B(Q-Q') = (R'-R)X^{h+1}$. Supposons $R'-R \neq 0$ :
$R'-R = r_0 + r_1 X + \dots$, donc
$X^{h+1}(R'-R) = r_0 X^{h+1} + r_1 X^{h+2} + \dots$ est de valuation
$\geq h+1$. Or
$\deg\big(B(Q-Q')\big) = \deg B + \deg(Q-Q')$ et
$\mathrm{val}\big(B(Q-Q')\big) = \mathrm{val}&#92;&#44;B + \mathrm{val}(Q-Q')
= \mathrm{val}(Q-Q')$ (car $B(0) \neq 0$, donc $\mathrm{val}&#92;&#44;B = 0$),
donc $\mathrm{val}\big(B(Q-Q')\big) \leq \deg(Q-Q') \leq h$ (car $Q - Q'$
non nul, sinon $R = R'$). Si
$Q-Q' = a_p X^p + \dots + a_q X^q$ avec $a_p \neq 0$, $a_q \neq 0$ et
$q \leq h$, alors $B(Q-Q') = a_p b_0 X^p + \dots$ et
$\mathrm{val}\big(B(Q-Q')\big) = p \leq q \leq h$ : **contradiction**. Donc
$R = R'$ et $Q = Q'$ (car $B \neq 0$ et $K[X]$ est intègre).

**Existence.** Si $A = 0$, $(0,0)$ convient. Admettons $A$ non nul.
Si $\mathrm{val}(A) \geq h+1$ : $A = X^{h+1}R$ car $X^{h+1} \mid A$, et
$(0, R)$ convient. (Remarque : si $P$ a pour valuation $k \geq 0$, $P$ est
divisible par $X^k$ : $P = a_k X^k + \dots + a_n X^n$ avec $a_k \neq 0$, donc
$P = a_k X^k\big(1 + \frac{a&#95;{k+1}}{a_k}X + \dots + \frac{a_n}{a_k}X^{n-k}\big)$.)
Si $A = a_h X^h + a&#95;{h+1}X^{h+1}$ et $B = b_0 + b_1 X + \dots$ :

$$A - B\,\frac{a_h}{b_0}X^h = \Big(a_{h+1} - \frac{b_1 a_h}{b_0}\Big)X^{h+1} + \dots$$

est de valuation $\geq h+1$, et
$A = B\big(Q' + \frac{a_h}{b_0}X^h\big) + R'X^{h+1}$, ce qui est la forme
souhaitée car $\deg\big(Q' + \frac{a_h}{b_0}X^h\big) \leq h$.

**Algorithme.** $A = BQ_1 + R_1$ avec
$Q_1 = -\dfrac{a&#95;{\mathrm{val}(A)}}{b_0}X^{\mathrm{val}(A)}$ et
$\mathrm{val}(R_1) \geq \mathrm{val}(A)+1$ ; puis $R_1 = BQ_2 + R_2$ avec
$Q_2 = -\dfrac{a&#95;{\mathrm{val}(R_1)}}{b_0}X^{\mathrm{val}(R_1)}$ et
$\mathrm{val}(R_2) \geq \mathrm{val}(A)+2$ ; etc. jusqu'à
$R_k = BQ&#95;{k+1} + R&#95;{k+1}$ avec $\mathrm{val}(R&#95;{k+1}) \geq h+1$ :
$R&#95;{k+1}$ est le premier reste dont la valuation dépasse $h+1$. Alors

$$A = B(Q_1 + Q_2 + \dots + Q_{k+1}) + R_{k+1}$$

avec $\deg(Q_1 + \dots + Q&#95;{k+1}) \leq \max_i \deg Q_i \leq h$ (car
$\mathrm{val}(R_i) \leq h$ en posant $R_0 = A$, et $\deg Q_i =
\mathrm{val}(R&#95;{i-1})$). On pose $Q = Q_1 + \dots + Q&#95;{k+1}$ ; comme
$X^{h+1} \mid R&#95;{k+1}$, on écrit $R&#95;{k+1} = X^{h+1}R$ :

$$A = BQ + X^{h+1}R \quad \text{avec} \quad \deg Q \leq h$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Division pratique</span>

Avec $B = 1 - \dfrac{X^2}{2!} + \dfrac{X^4}{4!} - \dfrac{X^6}{6!}$ (« $\cos x$ »)
et $A = X - \dfrac{X^3}{3!} + \dfrac{X^5}{5!} - \dfrac{X^7}{7!}$ (« $\sin x$ »),
la division suivant les puissances croissantes à l'ordre 7 donne le quotient

$$Q = X + \frac{1}{3}X^3 + \frac{2}{15}X^5 + \frac{17}{315}X^7$$

(c'est-à-dire le développement de $\tan x$).

</div>

## V. Polynômes d'interpolation de Lagrange

**Problème.** $a_1, \dots, a_n \in K$ et $b_1, \dots, b_n \in K$ étant donnés
($n \geq 2$, les $a_i$ deux à deux distincts), existe-t-il un unique polynôme
$P \in K[X]$ tel que $\forall i$, $P(a_i) = b_i$ ?

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

$(a_1, \dots, a_n) \in K^n$ deux à deux distincts et
$(b_1, \dots, b_n) \in K^n$ étant donnés, alors il existe un **unique**
$P \in K&#95;{n-1}[X]$ tel que $\forall i$, $P(a_i) = b_i$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

**Unicité (injectivité).** Supposons $P, Q$ tels que
$\forall i$, $P(a_i) = Q(a_i) = b_i$ ; d'où $(P-Q)(a_i) = 0$, avec
$\deg P \leq n-1$, $\deg Q \leq n-1$, donc $\deg(P-Q) \leq n-1$ ; or
$P-Q$ admet $n$ racines et $P \in K[X]$ avec $K$ corps : alors $P = Q$.

**Existence.**

1) On cherche $P = \sum&#95;{k=0}^{n-1} \lambda_k X^k$ :
$\forall i$, $P(a_i) = b_i \iff \forall i$,
$\sum&#95;{k=0}^{n-1} \lambda_k a_i^k = b_i$, soit le système

$$\begin{pmatrix}
1 & a_1 & \cdots & a_1^{n-1} \\
\vdots & \vdots & & \vdots \\
1 & a_n & \cdots & a_n^{n-1}
\end{pmatrix}
\begin{pmatrix} \lambda_0 \\ \vdots \\ \lambda_{n-1} \end{pmatrix}
= \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix}$$

On reconnaît $\det V \neq 0$ (matrice de **Vandermonde**) : c'est un système
de Cramer, donc $\exists!&#92;&#44;P$ tel que $\forall i$, $P(a_i) = b_i$.

2) L'application
$\varphi : K&#95;{n-1}[X] \to K^n$, $P \mapsto \big(P(a_1), \dots, P(a_n)\big)$
est **linéaire**, et **injective** d'après l'unicité : c'est donc un
**isomorphisme** (mêmes dimensions).

</div>

**Expression analytique du polynôme d'interpolation.**

*1ère version.* $\forall i$, $P(a_i) = b_i$. Posons $L_i$ (de Lagrange) :
$\forall j$, $L_i(a_j) = \delta&#95;{ij}$ ; pour $i$ fixé,
$\lambda = \prod&#95;{j \neq i} \frac{X-a_j}{a_i-a_j}$ et $L_i(a_i) = 1$. Donc,
pour tout $i \in &#92;&#123;1, \dots, n&#92;&#125;$ :

$$L_i(X) = \prod_{j \neq i} \frac{X-a_j}{a_i-a_j}$$

et

$$P = \sum_{i=1}^{n} P(a_i)\, L_i$$

*2ème version.* Pour tout $i \in &#92;&#123;1, \dots, n&#92;&#125;$, soit
$\varphi_i : K&#95;{n-1}[X] \to K$, $P \mapsto \varphi_i(P) = P(a_i)$ ;
$\varphi_i \in (K&#95;{n-1}[X])^&#42;$. Le théorème de la **base duale** annonce que
$(\varphi_1, \dots, \varphi_n)$ est une base de $(K&#95;{n-1}[X])^&#42;$ : si
$(\varphi_1, \dots, \varphi_n)$ est une base de $E^&#42;$, alors il existe une
unique $(e_1, \dots, e_n)$ base de $E$ telle que
$\varphi_i(e_j) = \delta&#95;{ij}$. On cherche $(L_1, \dots, L_n)$ telle que
$\varphi_i(L_j) = \delta&#95;{ij}$, c'est-à-dire $L_i(a_j) = \delta&#95;{ij}$, et l'on
retrouve $P = \sum P(a_i) L_i$.

## VI. Exercices — feuille n° 15

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 15 — Polynômes (énoncés)</span>

**Structure de $K[X]$ — Degrés**

<ol class="enonces">
<li>Soit $P = 1 + X + X^2 + \dots + X^n$ ; calculer $P^2$.</li>
<li>Soit $P = 2X^5 + X^4 - 3X^3 + 2X^2 - X + 3$. Ordonner selon les puissances croissantes le polynôme $P(X-2)$.</li>
<li>Soit $a \in \mathbb{C}$. Trouver les polynômes $P$ de $\mathbb{C}[X]$ tels que $P(X+a) = P(X)$.</li>
</ol>

**Arithmétique dans $K[X]$**

<ol class="enonces" start="4">
<li>Calculer le reste et le quotient de la division euclidienne de $X^n \sin t - X \sin t + \sin((n-1)t)$ par $X^2 - 2X\cos t + 1$.</li>
<li>Calculer le PGCD des polynômes suivants :
<ol>
<li>$X^5 + 5X^4 + 7X^3 + 5X^2 + X - 1$ et $X^4 + 4X^3 - 7X + 2$ ;</li>
<li>$X^3 - 3X^2 - 10X + 24$, $X^3 + 5X^2 - 2X - 24$ et $X^3 - X^2 - X - 2$.</li>
</ol>
</li>
<li>Calculer le PGCD de $X^{126} - 1$ et $X^{90} - 1$. Plus généralement, calculer le PGCD de $X^a - 1$ et $X^b - 1$ avec $a \geq b \geq 1$.</li>
<li>Sachant que les restes dans la division euclidienne de $P$ par respectivement $X^2+1$ et $X^2-X$ sont $-X+3$ et $X+1$, calculer le reste dans la division euclidienne de $P$ par $(X^2+1)(X^2-X)$.</li>
<li>Montrer que si $P$ et $Q$ sont premiers entre eux, alors $P+Q$ est premier avec $P-Q$ et $PQ$.</li>
<li>Montrer que $P = X^4+1$ et $Q = X^2-2X+3$ sont premiers entre eux et trouver tous les polynômes $U$ et $V$ tels que $UP + VQ = 1$.</li>
<li>Montrer que pour tout triplet $(p, q, r) \in \mathbb{N}^3$, $X^2+X+1$ divise $X^{3p+2} + X^{3q+1} + X^{3r}$ dans $\mathbb{R}[X]$.</li>
<li>Trouver tous les polynômes $P$ de $\mathbb{R}[X]$ tels que $X^2+1$ divise $P^2 - 1$. On se place maintenant dans $\mathbb{C}[X]$ : montrer qu'il y a d'autres solutions et déterminer-les toutes.</li>
</ol>

**Fonctions polynômes — Polynômes dérivés — Racines**

<ol class="enonces" start="12">
<li>Trouver une CNS sur les coefficients d'un polynôme de $\mathbb{R}[X]$ ou $\mathbb{C}[X]$ pour que sa fonction polynôme soit paire (resp. impaire).</li>
<li>Trouver tous les polynômes $P$ de $\mathbb{C}[X]$ tels que $P' \mid P$.</li>
<li>Décomposer en produit de facteurs irréductibles les polynômes suivants :
<ol>
<li>$P = X^6 + X^4 - 3X^3 - X + 2$ sur $\mathbb{R}[X]$ ;</li>
<li>$P = X^6 + 1$ sur $\mathbb{R}[X]$ et $\mathbb{C}[X]$ ;</li>
<li>$P = X^6 - 1$ sur $\mathbb{R}[X]$ et $\mathbb{C}[X]$.</li>
</ol>
</li>
<li>Soit $P = X^4 + 4X^3 + aX^2 + bX + 2$. Trouver $a$ et $b$ pour que $P$ admette $-1$ comme racine double, puis décomposer $P$ en facteurs irréductibles sur $\mathbb{R}[X]$ et $\mathbb{C}[X]$.</li>
<li>Quelle est l'ordre de multiplicité de $a$, racine de $Q$, avec :
$$Q = P - P(a) - \frac{1}{6}(X-a)\Big(P''(a) + P'(a) + 4P'\Big(\frac{X+a}{2}\Big)\Big), \qquad P \in \mathbb{C}[X]$$
</li>
<li>Résoudre l'équation $2x^4 - 6x^3 + 9x^2 - 6x + 2 = 0$ (on posera $u = x + \dfrac{1}{x}$).</li>
<li>Soit $a, b, c$ les racines dans $\mathbb{C}$ de $x^3 + 2x^2 - 3x + 1 = 0$. Calculer $S = \dfrac{ab}{c} + \dfrac{bc}{a} + \dfrac{ac}{b}$.</li>
</ol>

</div>

## VII. Exercices — feuille n° 15 (suite : énoncés n° 19 à 25)

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices — Polynômes (énoncés, suite : n° 19 à 25)</span>

<ol class="enonces" start="19">
<li>Soit $a, b, c$ les racines dans $\mathbb{C}$ de $x^3 - 5x^2 + 4x - 1 = 0$. Calculer $S = a^2b^2 + b^2c^2 + c^2a^2$.</li>
<li>Résoudre $x^4 + 12x - 5 = 0$ sachant que la somme de deux des racines est $2$.</li>
<li>Soit $z$ une racine complexe de $P = \sum&#95;{k=0}^{n} a_k X^k$ ; montrer que
$$|z| \leq \max\!\left(1,\ \sum_{k=0}^{n-1} \frac{a_k}{a_n}\right)$$
</li>
<li>Soit $f(x) = \arctan(x)$.
<ol>
<li>Montrer que $f^{(n)}$ est de la forme $\dfrac{P_n(x)}{(1+x^2)^n}$. Quel est le degré de $P_n$, son coefficient dominant, et sa parité ?</li>
<li>Trouver une relation de récurrence liant $P&#95;{n+1}$, $P_n$ et $P&#95;{n-1}$.</li>
<li>En déduire une équation différentielle linéaire du second ordre satisfaite par $P_n$.</li>
<li>En déduire les coefficients de $P_n$.</li>
<li>Montrer que $P_n$ a $n$ racines réelles distinctes.</li>
</ol>
</li>
<li>Montrer que pour tout polynôme $P$ de $\mathbb{R}[X]$, $P(X) - X$ divise $P(P(X)) - X$.</li>
<li>Montrer que $P = 1 + X + X^2 + 2X^3$ est irréductible dans $\mathbb{Q}[X]$. (On montrera d'abord qu'il suffit de démontrer pour cela que $P$ n'admet pas de racine dans $\mathbb{Q}$.)</li>
<li>Trouver tous les polynômes $P$ de $\mathbb{C}[X]$ qui vérifient $P(X^2) = P(X)&#92;&#44;P(X+1)$. On pourra montrer que si $a$ est racine de $P$, alors $a - 1$ aussi, ainsi que toutes les puissances de $2$ de $a$. On en déduira alors que les seules racines possibles de $P$ sont $0$, $1$, $-j$ et $-j^2$.</li>
</ol>

</div>

## VIII. Rappels

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Rappels</span>

- Pour les cas d'une égalité de polynômes : identifier un à un les **coefficients** ;
- les sommes doubles se réécrivent :

$$\sum_{0 \leq i,\, j \leq n} \iff \sum_{0 \leq j \leq i \leq n} \iff \sum_{0 \leq i \leq j \leq n} \iff \sum_{\substack{0 \leq i \leq n \\ i \leq j \leq n}} \iff \sum_{j=0}^{n} \sum_{i=j}^{n}$$

- $$\sum_{i=0}^{n} i = \sum_{i=0}^{n} (n-i)$$
- $$\sum_{k=1}^{n} k\,k! = (n+1)! - 1$$
- $$\sum_{0 \leq i,\, j \leq n} i\,j = \left(\sum_{i=0}^{n} i\right)\!\left(\sum_{j=0}^{n} j\right)$$
- $$X^a - 1 \wedge X^b - 1 = X^{a \wedge b} - 1$$
- si $A = QB + R$ et $P = Q'B + R'$ sont deux divisions euclidiennes par le même polynôme $B$, alors $A + P = B&#92;&#44;(Q + Q') + (R + R')$, avec
$$\deg(R + R') \leq \max(\deg R,\ \deg R') \leq \deg B$$
- si $P \mid P'$, alors $P = \lambda (X-a)^n$, avec $\lambda \in \mathbb{K}^&#42;$.

</div>

## IX. TP de polynômes

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">TP de polynômes (énoncés)</span>

<ol class="enonces">
<li>Reste de la division euclidienne de $(X-2)^{2n} + (X-1)^n + 1$ par $(X-1)^2(X-2)$.</li>
<li>Trouver tous les polynômes $P$ tels que
$$\begin{cases} (X-1)^2 \mid P + 1 \\ (X+1)^2 \mid P - 1 \\ P \text{ de degré } 7 \end{cases}$$
</li>
<li>Montrer qu'il existe un unique polynôme $P_n \in \mathbb{R}[X]$ tel que $P_n(\cos x) = \cos(nx)$.</li>
</ol>

</div>
