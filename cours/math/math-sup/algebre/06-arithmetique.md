---
layout: chapitre
title: "Arithmétique"
numero: 6
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Algèbre"
source: "Math/Math Sup/Algèbre/06 Arithmétique"
pages: 60
---

## I. Structure de $\mathbb{Z}$

### 1) Structure algébrique

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

- $(\mathbb{Z}, +, \times)$ est un **anneau commutatif intègre**, d'élément unité $1$, dont les éléments inversibles sont $-1$ et $1$ ;
- ses idéaux (et les sous-groupes de $(\mathbb{Z}, +)$) sont les $n\mathbb{Z}$ avec $n \in \mathbb{N}$ ;
- $(\mathbb{Z}, +, \times)$ est **principal**.

</div>

### 2) Ordre dans $\mathbb{Z}$ — la relation « divise »

- $<$ est une relation d'ordre total sur $\mathbb{Z}$.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (divise)</span>

Soit $(a, b) \in \mathbb{Z}^2$. On dit que $a$ **divise** $b$, et on note $a \mid b$, s'il existe $z \in \mathbb{Z}$ tel que $az = b$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

La relation $\mid$ est réflexive, transitive, mais **non antisymétrique**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $a \mid b$ et $b \mid a$ : $b = ay$ et $a = bx$, donc $b = xy\\,b$. Si $b = 0$, alors $a = b = 0$ ; si $b \neq 0$, $xy = 1$, donc $x = y = \varepsilon$ avec $\varepsilon \in \\{-1, 1\\}$ : $a$ et $b$ sont égaux au signe près.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $a$ divise $x_1, \dots, x_n$, alors pour tout $(u_1, \dots, u_n) \in \mathbb{Z}^n$ :

$$a \mid \sum_{i=1}^{n} u_i\, x_i$$

</div>

### 3) Division euclidienne

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème (division euclidienne dans $\mathbb{Z}$)</span>

Pour tout couple $(a, b) \in \mathbb{Z} \times \mathbb{N}^&#42;$, il existe un unique couple $(q, r) \in \mathbb{Z}^2$ tel que

$$a = bq + r, \qquad 0 \leq r < b$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**Unicité.** Si $a = bq + r = bq' + r'$ avec $0 \leq r < b$ et $0 \leq r' < b$, supposons $r \geq r'$ : $b(q' - q) = r - r'$ avec $0 \leq r - r' < b$ ; comme $b \mid (r - r')$, on obtient $r - r' = 0$, donc $r = r'$ puis $q = q'$.

**Existence.** Si $a \in \mathbb{N}$, c'est la division euclidienne dans $\mathbb{N}$. Si $a \notin \mathbb{N}$, alors $-a \in \mathbb{N}$ : écrivons $-a = bq + r$ avec $0 \leq r < b$. Si $r = 0$, $a = b(-q)$ convient. Si $r > 0$ :

$$a = b(-q) - r = b(-q - 1) + (b - r), \qquad 0 < b - r < b$$

et le couple $(-q - 1,\\, b - r)$ convient.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarques</span>

- $b$ divise $a$ (avec $b \neq 0$) si et seulement si le reste de la division euclidienne de $a$ par $b$ est nul ;
- si l'on multiplie $a$ et $b$ par $d \in \mathbb{Z}$ : si $a = bq + r$ avec $0 \leq r < b$, alors $ad = (bd)q + rd$ avec $0 \leq rd < |bd|$ ; par unicité de la division euclidienne, le quotient de la division de $ad$ par $bd$ est $q$ et le reste est $rd$ (multiplié par $d$).

</div>

## II. PGCD

### 1) Définition

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème et définition</span>

Soit $(a_1, \dots, a_n) \in \mathbb{Z}^n$. Alors $a_1\mathbb{Z} + a_2\mathbb{Z} + \dots + a_n\mathbb{Z}$ est un sous-groupe de $(\mathbb{Z}, +)$ de la forme $d\mathbb{Z}$ ; un tel $d$ est défini **au signe près**, et on l'appelle le **pgcd** de $(a_1, \dots, a_n)$, noté

$$\operatorname{pgcd}(a_1, \dots, a_n) \quad \text{ou} \quad a_1 \wedge a_2 \wedge \dots \wedge a_n$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $d\mathbb{Z} = d'\mathbb{Z}$, alors $d \in d'\mathbb{Z}$ donc $d' \mid d$, et $d' \in d\mathbb{Z}$ donc $d \mid d'$ ; ainsi $d = \pm d'$.

</div>

### 2) Règle de calcul

- on suppose les $a_i$ non tous nuls (auquel cas $d = 0$) ;
- on peut supprimer les $a_i$ nuls : si $a_1 = 0$, alors $a_1 \wedge a_2 \wedge \dots \wedge a_n = a_2 \wedge \dots \wedge a_n$.

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Le pgcd de $a_1, \dots, a_n$ est le **plus grand diviseur commun au sens de la divisibilité** : si $d = \operatorname{pgcd}(a_1, \dots, a_n)$ et si $d'$ divise les $a_i$ pour tout $i \in \\{1, \dots, n\\}$, alors $d' \mid d$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Posons $\Delta = \operatorname{pgcd}(a_1, \dots, a_n)$ et $\delta = \operatorname{pgcd}(a_2, \dots, a_n)$. On a $\Delta\mathbb{Z} = a_1\mathbb{Z} + \dots + a_n\mathbb{Z}$. Chaque $a_i$ s'écrit $a_i = 0 + \dots + a_i \times 1 + \dots + 0 \in \Delta\mathbb{Z}$, donc $\Delta \mid a_i$ : $\Delta$ est un diviseur commun. D'autre part $\Delta = \sum&#95;{i=1}^{n} u_i a_i$ avec $u_i \in \mathbb{Z}$ ; si $d' \mid a_i$ pour tout $i$, alors $d' \mid \sum u_i a_i = \Delta$. Enfin, si $a_1 = 0$ : $\Delta\mathbb{Z} = \\{0\\} + a_2\mathbb{Z} + \dots + a_n\mathbb{Z} = \delta\mathbb{Z}$, donc $\Delta = \delta$ au signe près ; on se ramène ainsi à des nombres positifs non nuls.

</div>

### 3) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Le pgcd de $(a_1, \dots, a_n)$ ne dépend pas de l'ordre des $a_i$, et

$$\operatorname{pgcd}(a_1, \dots, a_n) = \operatorname{pgcd}\big(\operatorname{pgcd}(a_1, \dots, a_p),\, a_{p+1}, \dots, a_n\big)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$a_1\mathbb{Z} + \dots + a_n\mathbb{Z}$ ne dépend pas de l'ordre des $a_i$. Posons $\Delta = \operatorname{pgcd}(a_1, \dots, a_n)$, $\delta = \operatorname{pgcd}(a_1, \dots, a_p)$ et $\Delta' = \operatorname{pgcd}(\delta, a&#95;{p+1}, \dots, a_n)$. Comme $\Delta \mid a_i$ pour tout $i$, en particulier $\Delta \mid \delta$ (car $\delta = \operatorname{pgcd}(a_1, \dots, a_p)$), donc $\Delta$ divise $\delta, a&#95;{p+1}, \dots, a_n$, d'où $\Delta \mid \Delta'$. Réciproquement, $\Delta' \mid \delta$ et $\Delta' \mid a_i$ pour $i > p$ ; par transitivité $\Delta' \mid a_i$ pour tout $i$, donc $\Delta' \mid \Delta$. Ainsi $\Delta = \Delta'$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Pour $k \in \mathbb{N}$ :

$$\operatorname{pgcd}(ka_1, \dots, ka_n) = k \operatorname{pgcd}(a_1, \dots, a_n)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Posons $d = \operatorname{pgcd}(ka_1, \dots, ka_n)$ et $d' = \operatorname{pgcd}(a_1, \dots, a_n)$. Comme $d' \mid a_i$ pour tout $i$, on a $kd' \mid ka_i$, donc $kd' \mid d$. D'autre part $d' = \sum a_i u_i$ avec $u_i \in \mathbb{Z}$ (car $d' \in d'\mathbb{Z}$), donc $kd' = \sum ka_i u_i \in d\mathbb{Z}$, d'où $d \mid kd'$. Ainsi $d = kd'$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

Si $d$ est un diviseur commun de $a_1, \dots, a_n$, alors

$$\operatorname{pgcd}\left(\frac{a_1}{d}, \frac{a_2}{d}, \dots, \frac{a_n}{d}\right) = \frac{1}{d}\operatorname{pgcd}(a_1, \dots, a_n)$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 4</span>

Soient $a, b \in \mathbb{N} \times \mathbb{N}^&#42;$, $d = a \wedge b$, $a = da'$ et $b = db'$. Alors

$$\operatorname{pgcd}(a, b) = \operatorname{pgcd}(b, r)$$

où $r$ est le reste de la division euclidienne de $a$ par $b$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Posons $d' = b \wedge r$, avec $a = bq + r$, $0 \leq r < b$. Comme $d = a \wedge b$, on a $d \mid b$ et $d \mid a = bq + r$, donc $d \mid r$ : ainsi $d \mid d'$. Réciproquement $d' \mid b$ et $d' \mid r$, donc $d' \mid bq + r = a$ et $d' \mid b$, d'où $d' \mid d$. Finalement $d = d'$.

</div>

### 4) Algorithme d'Euclide

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Algorithme d'Euclide</span>

Soient $a > 0$, $b > 0$. On initialise $r_0 = a$, $r_1 = b$ ; tant que $r_i > 0$, on définit $r&#95;{i+1}$ comme le reste de la division euclidienne de $r&#95;{i-1}$ par $r_i$ (pour $i \geq 1$) :

$$r_{i-1} = r_i q_i + r_{i+1}, \qquad 0 \leq r_{i+1} < r_i$$

L'algorithme s'arrête lorsque $r&#95;{k+1} = 0$ ; alors

$$\operatorname{pgcd}(a, b) = r_k$$

le pgcd est le **dernier reste non nul**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Tant qu'elle ne s'annule pas, la suite $(r_i)$ est strictement décroissante ($r&#95;{i+1} < r_i$) et à valeurs dans $\mathbb{N}$ : elle atteint donc $0$ en un nombre fini d'étapes (au bout d'au plus $b$ étapes, puisque $r_k \leq b - k$). Alors $r&#95;{k+1} = 0$, et d'après la propriété 4 :

$$\operatorname{pgcd}(a, b) = \operatorname{pgcd}(r_0, r_1) = \operatorname{pgcd}(r_1, r_2) = \dots = \operatorname{pgcd}(r_k, r_{k+1}) = \operatorname{pgcd}(r_k, 0) = r_k$$

</div>

## III. Nombres premiers entre eux

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $a_1, \dots, a_n$ sont **premiers entre eux** si $\operatorname{pgcd}(a_1, \dots, a_n) = 1$ ; on dit qu'ils sont **premiers entre eux deux à deux** si

$$\forall i, j, \quad \operatorname{pgcd}(a_i, a_j) = 1$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $a_1, \dots, a_n$ sont premiers entre eux deux à deux, alors ils sont premiers entre eux : en effet $d = \operatorname{pgcd}(a_1, \dots, a_n)$ divise $a_1$ et $a_2$, et $a_1 \wedge a_2 = 1$, donc $d = 1$.

</div>

### 2) Caractérisation — théorème de Bézout

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème de Bézout</span>

$a_1, \dots, a_n$ sont premiers entre eux **si et seulement si** il existe $(u_1, \dots, u_n) \in \mathbb{Z}^n$ tel que

$$a_1 u_1 + a_2 u_2 + \dots + a_n u_n = 1$$

Les $u_i$ s'appellent les **coefficients de Bézout**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $\operatorname{pgcd}(a_1, \dots, a_n) = 1$, alors $1\mathbb{Z} = a_1\mathbb{Z} + \dots + a_n\mathbb{Z}$ ; comme $1 \in \mathbb{Z}$, il existe $u_i \in \mathbb{Z}$ tels que $a_1u_1 + \dots + a_n u_n = 1$.

Réciproquement, si $1 = a_1u_1 + \dots + a_n u_n$, alors $1 \in a_1\mathbb{Z} + \dots + a_n\mathbb{Z}$ (idéal de $\mathbb{Z}$), donc $\mathbb{Z} = a_1\mathbb{Z} + \dots + a_n\mathbb{Z}$ et $\operatorname{pgcd}(a_1, \dots, a_n) = 1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $a$ est premier avec $a_1, \dots, a_n$ (chacun), alors $a$ est premier avec leur produit $a_1 a_2 \cdots a_n$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Récurrence $H_k$ : $a \wedge (a_1 \cdots a_k) = 1$ ($k \geq 1$). $H_1$ est vrai : $a \wedge a_1 = 1$. Supposons $H_k$ pour $1 \leq k \leq n - 1$ ($n \geq 2$) : par Bézout, $au + (a_1 \cdots a_k)v = 1$ avec $u, v \in \mathbb{Z}$ ; de même $a \wedge a&#95;{k+1} = 1$ donne $au' + a&#95;{k+1}v' = 1$. En développant le produit :

$$(au' + a_{k+1}v')(au + (a_1 \cdots a_k)v) = 1$$

on obtient $a \times (\dots) + a&#95;{k+1}(a_1 \cdots a_k)(vv') = 1$, donc $a \wedge (a_1 \cdots a&#95;{k+1}) = 1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $a \wedge b = 1$, alors pour tous $p, q \in \mathbb{N}^&#42;$ : $a^p \wedge b^q = 1$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

D'après la propriété ci-dessus avec $a_1 = \dots = a_p = a$ : $a^p \wedge b = 1$ ; puis avec $a_1 = \dots = a_q = b$ : $a^p \wedge b^q = 1$.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème de Gauss</span>

Si $a \mid bc$ et $a \wedge b = 1$, alors $a \mid c$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

D'après Bézout, il existe $(u, v) \in \mathbb{Z}^2$ tel que $au + bv = 1$. En multipliant par $c$ : $auc + bvc = c$. Or $a \mid auc$ et $a \mid bc$ donc $a \mid bvc$ ; ainsi $a \mid c$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $a_1, \dots, a_n$ divisent $a$ et sont premiers entre eux deux à deux, alors $a_1 a_2 \cdots a_n \mid a$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Récurrence $H_k$ : $a_1 \cdots a_k \mid a$. Si $H_k$ est vrai ($1 \leq k \leq n - 1$) : $a = (a_1 \cdots a_k) q$ avec $q \in \mathbb{Z}$. Comme $a&#95;{k+1} \mid a$, on a $a&#95;{k+1} \mid (a_1 \cdots a_k) q$ ; or $a&#95;{k+1}$ est premier avec $a_1, \dots, a_k$, donc avec leur produit, et par le théorème de Gauss $a&#95;{k+1} \mid q$ : $q = a&#95;{k+1} m$ avec $m \in \mathbb{Z}$, donc $a = (a_1 \cdots a&#95;{k+1}) m$, ce qui prouve $H&#95;{k+1}$.

</div>

### 3) Application : résolution de $ax + by = c$ dans $\mathbb{Z}^2$

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Soit $(a, b, c) \in (\mathbb{Z} \setminus \\{0\\})^3$ et l'équation

$$(1) \qquad ax + by = c$$

Posons $d = a \wedge b$, $a = da'$, $b = db'$.

- **1er cas** : si $d \nmid c$, l'équation (1) n'a **pas de solution** ;
- **2e cas** : si $d \mid c$, en posant $c = dc'$, (1) équivaut à $a'x + b'y = c'$ avec $a' \wedge b' = 1$ ; si $(u_0, v_0) \in \mathbb{Z}^2$ vérifie $u_0 a' + v_0 b' = 1$ (Bézout), alors $(x_0, y_0) = (c'u_0,\\, c'v_0)$ est une solution particulière de (1), et les solutions de (1) sont

$$\big\{(x_0 + kb',\ y_0 - ka') \mid k \in \mathbb{Z}\big\}$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

L'équation (1) s'écrit $d(a'x + b'y) = c$ : si $d \nmid c$, elle n'a pas de solution. Si $d \mid c$, posons $c = dc'$ : (1) équivaut à $a'x + b'y = c'$, avec $a' \wedge b' = 1$. D'après Bézout, il existe $(u_0, v_0) \in \mathbb{Z}^2$ tel que $u_0 a' + v_0 b' = 1$ ; alors $(c'u_0, c'v_0)$ est solution de (1). Si $(x, y)$ est une autre solution : $a'x + b'y = a'x_0 + b'y_0$, donc $a'(x - x_0) = b'(y_0 - y)$ ; comme $a' \wedge b' = 1$, on a $a' \mid (y_0 - y)$ : il existe $k \in \mathbb{Z}$ tel que $y = y_0 - ka'$, et alors $x = x_0 + kb'$. Réciproquement, les couples $(x_0 + kb',\\, y_0 - ka')$ sont bien solutions de (1).

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — $27x + 5y = -178$</span>

$27 = 5 \times 5 + 2$ ; $5 = 2 \times 2 + 1$, donc

$$1 = 5 - 2 \times 2 = 5 - 2(27 - 5 \times 5) = -2 \times 27 + 11 \times 5$$

Une solution particulière est $(2 \times 178,\ -11 \times 178)$, et les solutions sont de la forme

$$(2 \times 178 + 5k,\ -11 \times 178 - 27k), \qquad k \in \mathbb{Z}$$

</div>

## IV. PPCM

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $(a_1, \dots, a_n) \in \mathbb{Z}^n$. Alors $a_1\mathbb{Z} \cap a_2\mathbb{Z} \cap \dots \cap a_n\mathbb{Z}$ est un sous-groupe de $\mathbb{Z}$ de la forme $m\mathbb{Z}$ ; $m$ est défini au signe près et $|m|$ est le plus petit multiple commun positif des $a_i$. On appelle $|m|$ le **ppcm** des $a_i$, noté

$$|m| = a_1 \vee a_2 \vee \dots \vee a_n = \operatorname{ppcm}(a_1, \dots, a_n)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$m\mathbb{Z} \subset a_i\mathbb{Z}$ donc $m \in a_i\mathbb{Z}$, c'est-à-dire $a_i \mid m$ : $m$ est un multiple commun. Si $m'$ est un autre multiple commun (positif) des $a_i$, alors $a_i \mid m'$ pour tout $i \in \\{1, \dots, n\\}$, donc $m' \in a_i\mathbb{Z}$ pour tout $i$, d'où $m' \in m\mathbb{Z}$ et $m \mid m'$.

</div>

### 2) Propriétés

- si l'un des $a_i$ est nul, le ppcm est nul ;
- on peut considérer que des $a_i$ deux à deux distincts, non nuls et positifs ;
- la règle de calcul possède les propriétés d'**associativité** et de **commutativité**, comme pour le pgcd.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

Si $a, b \in \mathbb{N}$, $d = a \wedge b$, $a = da'$ et $b = db'$, alors

$$a \vee b = a'b'd \qquad \text{et} \qquad (a \vee b)(a \wedge b) = ab$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Posons $m = a'b'd = ab' = a'b$ : donc $a \mid m$ et $b \mid m$, $m$ est un multiple commun. Si $M$ est un autre multiple commun, $M = ax = by$ avec $x, y \in \mathbb{Z}$ ; comme $a = da'$ et $b = db'$, $da'x = db'y$ donc $b' \mid a'x$ ; or $b' \wedge a' = 1$, donc $b' \mid x$ : $x = b'x'$ et $M = a'b'd\\,x' = m\\,x'$, d'où $m \mid M$ : $m$ est le plus petit multiple commun positif.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $d$ est un diviseur commun de $a$ et $b$, avec $(a, b) \neq (0, 0)$, alors

$$a \vee b = d\left(\frac{a}{d} \vee \frac{b}{d}\right)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

D'une part $(a \vee b)(a \wedge b) = ab$. D'autre part $a \wedge b = d\left(\frac{a}{d} \wedge \frac{b}{d}\right)$ et

$$\left(\frac{a}{d} \wedge \frac{b}{d}\right)\left(\frac{a}{d} \vee \frac{b}{d}\right) = \frac{ab}{d^2} = \frac{(a \vee b)(a \wedge b)}{d \times d}$$

Comme $\frac{a}{d} \wedge \frac{b}{d} = \frac{a \wedge b}{d} \neq 0$ (car $(a, b) \neq (0, 0)$), on conclut $\frac{a}{d} \vee \frac{b}{d} = \frac{a \vee b}{d}$.

</div>

## V. Nombres premiers

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Un nombre $p$ est **premier** s'il n'admet pas de diviseurs stricts, c'est-à-dire de diviseurs autres que $1$, $-1$, $p$ et $-p$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

$\pm 1$ ne sont pas premiers.

</div>

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Tout entier relatif $n$ avec $|n| \geq 2$ admet un diviseur premier.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Récurrence $H_n$ pour $n \geq 2$ : « $n$ admet un diviseur premier ». $H_2$ est vrai : $2$ est premier. Supposons $H_n$ ($n \geq 2$). Premier cas : $n + 1$ est premier, et $n+1$ est un diviseur de lui-même. Deuxième cas : $n+1$ n'est pas premier ; il admet un diviseur strict $q$ avec $2 \leq q \leq n$ ; d'après $H_n$, $q$ admet un diviseur premier $p$, et $p \mid q \mid (n+1)$, donc $p \mid (n+1)$. Si $n < 0$, on applique le résultat à $-n > 0$ : $p \mid n$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire (crible d'Ératosthène)</span>

$n \geq 2$ est premier si et seulement si il n'admet pas de diviseur premier $p$ tel que $p^2 \leq n$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**Lemme.** Si $n = qa$ avec $q$ diviseur strict de $n$, alors $a$ est aussi un diviseur strict de $n$ : si $a = \pm 1$ (contraposée), alors $q = \pm n$.

Supposons $n$ non premier : $n = qa$ avec $q$ diviseur strict. Si $q^2 \geq n$ et $a^2 > n$, alors $n^2 = (qa)^2 > n^2$, impossible ; donc $q^2 \leq n$ ou $a^2 \leq n$ : l'un des deux facteurs, disons $r$, vérifie $2 \leq r$ et $r^2 \leq n$, et d'après la propriété 1, $r$ admet un diviseur premier $p$ ; alors $p \mid r \mid n$ et $p^2 \leq r^2 \leq n$. Ainsi, tout $n \geq 2$ non premier admet un diviseur premier $p$ tel que $p^2 \leq n$ — ce qui établit la contraposée.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Crible d'Ératosthène</span>

Dans la table des entiers de $1$ à $100$, on barre les multiples stricts de chaque nombre premier $p$ dès que $p^2 \leq 100$ (c'est-à-dire de $2, 3, 5, 7$) ; les nombres restants sont les nombres premiers.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

L'ensemble $\mathcal{P}$ des nombres premiers est **infini**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Supposons $\mathcal{P}$ fini, $\mathcal{P} = \\{p_1, \dots, p_k\\}$, et posons $x = 1 + p_1 p_2 \cdots p_k$. Alors $x \geq 2$, donc $x$ admet un diviseur premier $p \in \mathcal{P}$ ; il existe $i \in \\{1, \dots, k\\}$ tel que $p = p_i$. Mais $p_i \mid x$ et $p_i \mid p_1 p_2 \cdots p_k$, donc $p_i \mid 1$ : impossible.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 4</span>

Un nombre premier $p$ est premier avec tout nombre $x$ qu'il ne divise pas.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Posons $d = x \wedge p$. Comme $d \mid p$ et $p$ est premier, $d = 1$ ou $d = p$. Si $d = p$, alors $p \mid x$ — exclu. Donc $d = 1$ : $p$ ne divise pas $x$, sinon $d = p \neq 1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 5 (lemme d'Euclide)</span>

Si $p$ premier divise $a_1 a_2 \cdots a_n$, alors $p$ divise l'un des $a_i$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $p$ ne divise aucun des $a_i$, alors $p$ est premier séparément avec $a_1, \dots, a_n$ (propriété 4), donc premier avec le produit, et $p$ ne divise pas $a_1 \cdots a_n$ (contraposée) : contradiction.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $p$ premier divise $p_1 p_2 \cdots p_n$ où les $p_i$ sont premiers ($1 \leq i \leq n$), alors il existe $i \in \\{1, \dots, n\\}$ tel que $p = p_i$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$p$ divise l'un des facteurs $p_i$ (propriété 5) ; comme $p_i$ est premier et $p \neq 1$, on a $p = p_i$.

</div>

### 3) Décomposition en facteurs premiers

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème de décomposition en facteurs premiers</span>

Tout $n \in \mathbb{Z} \setminus \\{0, 1, -1\\}$ s'écrit de manière **unique**

$$n = \varepsilon\, p_1^{\alpha_1} p_2^{\alpha_2} \cdots p_k^{\alpha_k}$$

avec $\varepsilon \in \\{+1, -1\\}$, $p_i \in \mathcal{P}$ deux à deux distincts et $\alpha_i \geq 1$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**Unicité.** Supposons $n = \varepsilon p_1^{\alpha_1} \cdots p_k^{\alpha_k} = \varepsilon' q_1^{\beta_1} \cdots q_l^{\beta_l}$ ; alors $\varepsilon = \varepsilon' = \operatorname{sgn}(n)$. Posons $P = \\{p_1, \dots, p_k\\}$ et $Q = \\{q_1, \dots, q_l\\}$. Pour $p_i \in P$ : $p_i \mid p_1^{\alpha_1} \cdots p_k^{\alpha_k}$ (car $\alpha_i \geq 1$), donc $p_i \mid q_1^{\beta_1} \cdots q_l^{\beta_l}$ ; d'après le corollaire ci-dessus, il existe $j$ tel que $p_i = q_j \in Q$ : $P \subset Q$. En échangeant les rôles de $P$ et $Q$, on a de même $Q \subset P$, donc $P = Q$. Imposons $p_1 < p_2 < \dots < p_k$ et $q_1 < q_2 < \dots < q_l$ : alors $p_1 = q_1$, $p_2 = q_2$, \dots, $p_k = q_k$. Supposons $\beta_i > \alpha_i$ pour un $i$ : en divisant l'égalité $p_1^{\alpha_1} \cdots p_k^{\alpha_k} = p_1^{\beta_1} \cdots p_k^{\beta_k}$ par $p_i^{\alpha_i}$, on voit que $p_i$ divise le produit des $p_j^{\alpha_j}$, $j \neq i$, avec $p_i - \alpha_j \geq 1$... impossible d'après le corollaire, car $p_i$ est distinct des $p_j$, $j \neq i$. Donc $\beta_i \leq \alpha_i$ ; en échangeant les rôles de $\alpha$ et $\beta$, on a de même $\alpha_i \leq \beta_i$ ; ainsi $\alpha_i = \beta_i$.

**Existence.** Récurrence pour $n \geq 1$ : $H_2$ est vrai ($2 = 2^1$). Supposons $H_n$. Premier cas : $n+1$ est premier, $n+1 = (n+1)^1$. Deuxième cas : $n+1$ n'est pas premier, $(n+1) = qr$ avec $q, r$ diviseurs stricts, $2 \leq q, r \leq n$ ; d'après $H_n$, $q = p_1^{\alpha_1} \cdots p_k^{\alpha_k}$ et $r = q_1^{\beta_1} \cdots q_l^{\beta_l}$ ; le produit $qr$ est de la forme voulue en regroupant les puissances des nombres premiers apparaissant dans les deux décompositions.

</div>

### 4) Applications

- **Diviseurs.** Si les facteurs premiers de $b$ sont des facteurs premiers de $a$, avec une puissance inférieure ou égale, alors $b \mid a$. Au plus généralement, pour $n = 2^{\alpha_1} 3^{\alpha_2} 5^{\alpha_3} \cdots$, les diviseurs de $n$ sont les $2^{\beta_1} 3^{\beta_2} 5^{\beta_3} \cdots$ avec $0 \leq \beta_i \leq \alpha_i$.
- **Calcul du pgcd.** On décompose $a$ et $b$ en facteurs premiers, on considère les facteurs premiers communs aux deux décompositions et on les affecte de la puissance avec laquelle ils y apparaissent ; le pgcd est le produit des termes ainsi obtenus.
- **Calcul du ppcm.** On considère tous les facteurs premiers intervenant dans l'une ou l'autre des deux décompositions et on affecte à chacun la plus grande puissance avec laquelle il apparaît ; le ppcm est le produit des termes ainsi obtenus.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$\operatorname{ppcm}(42, 24) = 2^3 \times 3 \times 7 = 168$$

</div>

## VI. Congruences

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On définit sur $\mathbb{Z}$ la relation « être congru modulo $n$ » par

$$x \equiv y \pmod{n} \iff n \mid (x - y)$$

On notera $\overline{x}$ la classe de $x$ pour cette relation.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

$x \equiv y \pmod{n}$ si et seulement si $x$ et $y$ ont le même reste dans la division euclidienne par $n$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Écrivons $x = qn + r$ et $y = q'n + r'$ avec $0 \leq r < n$, $0 \leq r' < n$. Alors $x - y = n(q - q') + (r - r')$ ; comme $n \mid n(q - q')$, on a $n \mid (x - y) \iff n \mid (r - r')$. Or $|r - r'| < n$, donc $n \mid (r - r') \iff r = r'$.

</div>

### 2) Premières propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

La congruence modulo $n$ est une **relation d'équivalence**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

- réflexivité : $n \mid 0$, donc $x \equiv x \pmod{n}$ ;
- symétrie : si $x \equiv y \pmod{n}$, alors $n \mid (x - y)$ donc $n \mid (y - x)$, d'où $y \equiv x \pmod{n}$ ;
- transitivité : si $x \equiv y \pmod{n}$ et $y \equiv z \pmod{n}$, alors $n \mid (x - y)$ et $n \mid (y - z)$, donc $n \mid (x - z)$ : $x \equiv z \pmod{n}$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — les trois classes modulo 3</span>

Les classes modulo $3$ sont $\overline{0} = \\{\dots, -6, -3, 0, 3, 6, \dots\\}$, $\overline{1} = \\{\dots, -5, -2, 1, 4, 7, \dots\\}$ et $\overline{2} = \\{\dots, -4, -1, 2, 5, 8, \dots\\}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3 (compatibilité avec les opérations)</span>

Si $a_1 \equiv b_1 \pmod{n}$ et $a_2 \equiv b_2 \pmod{n}$, alors

$$a_1 + a_2 \equiv b_1 + b_2 \pmod{n} \qquad \text{et} \qquad a_1 a_2 \equiv b_1 b_2 \pmod{n}$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$n \mid (a_1 - b_1)$ et $n \mid (a_2 - b_2)$, donc $n \mid (a_1 + a_2) - (b_1 + b_2)$. D'autre part $n \mid a_2(a_1 - b_1)$ et $n \mid b_1(a_2 - b_2)$, donc $n \mid a_1 a_2 - b_1 b_2$.

</div>

### 3) L'anneau $\mathbb{Z}/n\mathbb{Z}$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

On note $\mathbb{Z}/n\mathbb{Z}$ l'ensemble des classes d'équivalence modulo $n$. Il y a exactement $n$ classes modulo $n$, à savoir $\overline{0}, \overline{1}, \dots, \overline{n-1}$ : en effet ces classes sont distinctes car si $0 \leq k < k' \leq n - 1$, $n$ ne divise pas $k - k'$, donc $k \not\equiv k' \pmod{n}$ ; et tout $x \in \mathbb{Z}$ s'écrit $x = qn + r$ avec $0 \leq r \leq n - 1$, donc $x \in \overline{r}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1 (lois internes)</span>

On peut définir sur $\mathbb{Z}/n\mathbb{Z}$ les lois internes suivantes :

$$\overline{a} + \overline{b} = \overline{a + b}, \qquad \overline{a} \times \overline{b} = \overline{ab}$$

Alors $(\mathbb{Z}/n\mathbb{Z}, +, \times)$ est un **anneau commutatif**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Il faut s'assurer que $\overline{a} + \overline{b}$ et $\overline{a} \times \overline{b}$ sont indépendants du choix des représentants de $\overline{a}$ et $\overline{b}$ : si $a' \equiv a \pmod{n}$ et $b' \equiv b \pmod{n}$, alors $a' + b' \equiv a + b$ et $a'b' \equiv ab \pmod{n}$ (propriété 3), donc $\overline{a' + b'} = \overline{a + b}$ et $\overline{a'b'} = \overline{ab}$.

- $(\mathbb{Z}/n\mathbb{Z}, +)$ est un groupe commutatif : élément neutre $\overline{0}$ ($\overline{0} + \overline{x} = \overline{0 + x} = \overline{x}$) ; loi commutative ; loi associative car $\overline{x + (y + z)} = \overline{(x + y) + z}$ ; symétrique de $\overline{x}$ : $\overline{n - x}$ car $\overline{n - x} + \overline{x} = \overline{n - x + x} = \overline{0}$ ;
- $(\mathbb{Z}/n\mathbb{Z}, \times)$ est un monïde commutatif : élément neutre $\overline{1}$, loi commutative et associative ;
- $\times$ est distributive sur $+$ : $\overline{x}\\,(\overline{y} + \overline{z}) = \overline{x(y+z)} = \overline{xy + xz} = \overline{x}\\,\overline{y} + \overline{x}\\,\overline{z}$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples — tables de $\mathbb{Z}/2\mathbb{Z}$ et $\mathbb{Z}/3\mathbb{Z}$</span>

| $+$ | $\overline{0}$ | $\overline{1}$ |
|---|---|---|
| $\overline{0}$ | $\overline{0}$ | $\overline{1}$ |
| $\overline{1}$ | $\overline{1}$ | $\overline{0}$ |

| $\times$ | $\overline{0}$ | $\overline{1}$ |
|---|---|---|
| $\overline{0}$ | $\overline{0}$ | $\overline{0}$ |
| $\overline{1}$ | $\overline{0}$ | $\overline{1}$ |

| $+$ | $\overline{0}$ | $\overline{1}$ | $\overline{2}$ |
|---|---|---|---|
| $\overline{0}$ | $\overline{0}$ | $\overline{1}$ | $\overline{2}$ |
| $\overline{1}$ | $\overline{1}$ | $\overline{2}$ | $\overline{0}$ |
| $\overline{2}$ | $\overline{2}$ | $\overline{0}$ | $\overline{1}$ |

| $\times$ | $\overline{0}$ | $\overline{1}$ | $\overline{2}$ |
|---|---|---|---|
| $\overline{0}$ | $\overline{0}$ | $\overline{0}$ | $\overline{0}$ |
| $\overline{1}$ | $\overline{0}$ | $\overline{1}$ | $\overline{2}$ |
| $\overline{2}$ | $\overline{0}$ | $\overline{2}$ | $\overline{1}$ |

(On dresse de même les tables pour $n = 4$, etc.)

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2 (groupe cyclique)</span>

$(\mathbb{Z}/n\mathbb{Z}, +)$ est un **groupe cyclique d'ordre $n$** ; ses générateurs sont les $\overline{q}$ avec $q \wedge n = 1$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\mathbb{Z}/n\mathbb{Z} = \\{\overline{0}, \overline{1}, \dots, \overline{n-1}\\}$ est engendré par $\overline{1}$ (notation additive). Soit $q \in \mathbb{Z}$ et $\overline{q}$ sa classe ; posons $d = q \wedge n$, $n = n'd$ et $q = dq'$ avec $q' \wedge n' = 1$. Alors

$$k\overline{q} = \overline{0} \iff \overline{kq} = \overline{0} \iff n \mid kq \iff n' \mid q'k \iff n' \mid k$$

(d'après Gauss, car $n' \wedge q' = 1$, la réciproque étant vraie). L'ordre de $\overline{q}$ est donc $n'$ ; $\overline{q}$ est générateur de $\mathbb{Z}/n\mathbb{Z}$ si et seulement si son ordre est $n$, c'est-à-dire $n' = n$, soit $d = 1$. Les générateurs sont donc les $\overline{q}$ tels que $q \wedge n = 1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3 (inversibles)</span>

Les inversibles de $\mathbb{Z}/n\mathbb{Z}$ sont les générateurs de $(\mathbb{Z}/n\mathbb{Z}, +)$, c'est-à-dire les $\overline{q}$ tels que $q \wedge n = 1$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $q \wedge n = 1$, d'après Bézout on peut écrire $qu + nv = 1$ avec $u, v \in \mathbb{Z}$ ; dans $\mathbb{Z}/n\mathbb{Z}$ : $\overline{1} = \overline{q}\\,\overline{u} + \overline{n}\\,\overline{v} = \overline{q}\\,\overline{u}$, donc $\overline{q}$ est inversible d'inverse $\overline{u}$. Réciproquement, si $\overline{q}$ est inversible, il existe $u \in \mathbb{Z}$ tel que $\overline{q}\\,\overline{u} = \overline{1}$, donc $n \mid (1 - qu)$ : $1 - qu = nk$ avec $k \in \mathbb{Z}$, d'où $1 = qu + nk$ et $q \wedge n = 1$.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

$\mathbb{Z}/n\mathbb{Z}$ est un **corps** si et seulement si $n$ est premier.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $n$ est premier : soit $\overline{q} \neq \overline{0}$ ; alors $n \nmid q$, et comme $n$ est premier, $q \wedge n = 1$ ; donc $\overline{q}$ est inversible. Tout élément non nul de $\mathbb{Z}/n\mathbb{Z}$ est inversible : c'est un corps.

Si $n$ n'est pas premier : $n = qr$ avec $2 \leq q \leq n$, $2 \leq r \leq n$ (en fait $q, r < n$) ; alors $\overline{0} = \overline{q}\\,\overline{r}$ dans $\mathbb{Z}/n\mathbb{Z}$, avec $\overline{q} \neq \overline{0}$ et $\overline{r} \neq \overline{0}$ (car $0 < q < n$ et $0 < r < n$) : $\mathbb{Z}/n\mathbb{Z}$ n'est pas intègre, donc pas un corps.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $p$ est premier, $(\mathbb{Z}/p\mathbb{Z})^&#42;$ est un **groupe commutatif**.

</div>

## VII. Applications des congruences

### 1) Groupes cycliques et racines primitives de l'unité

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

Si $G$ est un groupe cyclique d'ordre $n$ ($n \geq 2$), alors $G$ est isomorphe à $(\mathbb{Z}/n\mathbb{Z}, +)$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Écrivons $G = \\{1, a, \dots, a^{n-1}\\}$ et définissons $\varphi : \mathbb{Z}/n\mathbb{Z} \to G$ par $\varphi(\overline{i}) = a^i$. Si $i \equiv q \pmod{n}$, c'est-à-dire $i = q + kn$ avec $k \in \mathbb{Z}$, alors $a^i = a^{q + kn} = a^q (a^n)^k = a^q$ car $a$ est d'ordre $n$ : $\varphi$ est bien définie ($\varphi(\overline{q})$ est strictement indépendant du choix du représentant). C'est un morphisme de groupes :

$$\varphi(\overline{i} + \overline{q}) = \varphi(\overline{i + q}) = a^{i+q} = a^i a^q = \varphi(\overline{i})\,\varphi(\overline{q})$$

Injectivité : soit $\overline{q} \in \ker \varphi$, c'est-à-dire $a^q = 1$ ; or $n \mid q$ car $a$ est d'ordre $n$, donc $\overline{q} = \overline{0}$ et $\ker \varphi = \\{\overline{0}\\}$. Enfin $\varphi$ est bijective car $\operatorname{Card} \mathbb{Z}/n\mathbb{Z} = \operatorname{Card} G = n$ : c'est un isomorphisme de $\mathbb{Z}/n\mathbb{Z}$ sur $G$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Une racine $n$-ième de l'unité est dite **primitive** si elle est génératrice du groupe $\mathcal{U}&#95;n$ des racines $n$-ièmes de l'unité.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple et propriété</span>

$i = e^{2i\pi/4}$ est une racine primitive $4^{\text{e}}$ ; $1$ et $-1$ ne le sont pas. Les racines primitives $n$-ièmes de l'unité sont les

$$e^{2ik\pi/n} \quad \text{avec } k \wedge n = 1$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $\omega = e^{2i\pi/n}$ une racine $n$-ième de l'unité, et écrivons $\omega = \varphi(\overline{q})$ via l'isomorphisme ci-dessus. Alors

$$\omega^k = 1 \iff \varphi(k\overline{q}) = 1 \iff k\overline{q} = \overline{0} \iff n \mid kq$$

Donc $\omega$ est d'ordre $n$ (c'est-à-dire primitive) si et seulement si $\overline{q}$ est générateur de $(\mathbb{Z}/n\mathbb{Z}, +)$, c'est-à-dire $q \wedge n = 1$.

</div>

### 2) Critères de divisibilité

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Critère de divisibilité par 3</span>

Un nombre est divisible par $3$ si et seulement si la somme de ses chiffres est divisible par $3$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Écrivons $n = a_0 + 10 a_1 + 10^2 a_2 + \dots + 10^k a_k$ en base $10$, et $S = a_0 + a_1 + \dots + a_k$. Comme $10 \equiv 1 \pmod{3}$, on a

$$n \equiv a_0 + a_1 + \dots + a_k = S \pmod{3}$$

donc $3 \mid n \iff n \equiv 0 \pmod{3} \iff S \equiv 0 \pmod{3}$, c'est-à-dire $3 \mid S$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Preuve par 9</span>

Un nombre est divisible par $9$ si et seulement si la somme de ses chiffres est divisible par $9$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration et vérification</span>

Même argument avec $10 \equiv 1 \pmod{9}$. **Vérification (preuve par 9)** : si $q = a \times b$, alors dans $\mathbb{Z}/9\mathbb{Z}$, $\overline{q} = \overline{a} \times \overline{b}$, et comme modulo $9$ un nombre est congru à la somme de ses chiffres, $S_q \equiv S_a \times S_b \pmod{9}$ : on peut ainsi détecter une erreur de calcul.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Critère de divisibilité par 11</span>

$n = \overline{a_k \dots a_1 a_0}$ est divisible par $11$ si et seulement si $a_0 - a_1 + a_2 - \dots + (-1)^k a_k$ est divisible par $11$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Avec $n = a_0 + 10 a_1 + \dots + 10^k a_k$ et $10 \equiv -1 \pmod{11}$ :

$$n \equiv a_0 - a_1 + a_2 - \dots + (-1)^k a_k \pmod{11}$$

donc $11 \mid n \iff 11 \mid \sum&#95;{i=0}^{k} (-1)^i a_i$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Critère de divisibilité par 4</span>

Un nombre est divisible par $4$ si et seulement si le nombre formé par ses deux derniers chiffres est divisible par $4$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$n = a_0 + 10 a_1 + 100(a_2 + 10 a_3 + \dots)$ donc $n \equiv a_0 + 10 a_1 = \overline{a_1 a_0} \pmod{4}$ (car $100 \equiv 0 \pmod{4}$) : $4 \mid n \iff n \equiv 0 \pmod{4} \iff 4 \mid \overline{a_1 a_0}$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$173 = 10^2 + 7 \times 10 + 3 \equiv 1 + 7 + 3 = 11 \equiv 2 \pmod{9}$$

donc $173 \equiv 2 \pmod{9}$.

</div>

## VIII. Fiche résumé — arithmétique dans $\mathbb{Z}$

**La relation « divise »**

- si $x \mid a_i$ pour tout $i$, alors $x \mid \sum a_i$ ;
- la relation $\mid$ est réflexive et transitive.

**La division euclidienne**

- $\forall (a, b) \in \mathbb{Z} \times (\mathbb{N} \setminus \\{0\\})$ : $a = bq + r$ avec $q, r \in \mathbb{Z}$ et $0 \leq r < b$ ;
- si $(a, b) \in \mathbb{Z} \times \mathbb{N}$ et $d \in \mathbb{Z}$ : $a = bq + r$ entraîne $ad = (bd)q + rd$ ;
- $a = bq + r$ avec $r = 0 \iff b \mid a$.

**Le pgcd**

- $a_1 \wedge a_2 \wedge \dots \wedge a_n = d \geq 0$ avec $d\mathbb{Z} = a_1\mathbb{Z} + a_2\mathbb{Z} + \dots + a_n\mathbb{Z}$, $a_i \in \mathbb{Z}$ ;
- $\wedge$ est associatif, commutatif, d'élément neutre $0$, d'élément absorbant $1$ ;
- $\times$ est distributif par rapport à $\wedge$ ;
- $a \wedge b = r \wedge b$ avec $a = bq + r$ ;
- si $d \mid a_i$ pour tout $i$, alors $a_1 \wedge \dots \wedge a_n = d\left(\frac{a_1}{d} \wedge \dots \wedge \frac{a_n}{d}\right)$.

**Nombres premiers entre eux**

- si $a_1 \wedge a_2 \wedge \dots \wedge a_n = 1$, il existe $(u_1, \dots, u_n) \in \mathbb{Z}^n$ tel que $u_1 a_1 + u_2 a_2 + \dots + u_n a_n = 1$ ;
- si $d \mid a_i$ pour tout $i$ et $a_1 \wedge \dots \wedge a_n = 1$, alors $d = \pm 1$ ;
- si $a \wedge b = 1$, alors $a^n \wedge b^p = 1$ ;
- si $a \wedge b = 1$ et $a \mid bc$, alors $a \mid c$ (Gauss) ;
- si $a_i \wedge a_j = 1$ pour $i \neq j$ et $a_i \mid a$ pour tout $i$, alors $a_1 a_2 \cdots a_n \mid a$.

**Le ppcm**

- $m\mathbb{Z} = a_1\mathbb{Z} \cap a_2\mathbb{Z} \cap \dots \cap a_n\mathbb{Z}$ ;
- $0$ est élément absorbant ;
- $\vee$ est associatif, commutatif, d'élément neutre $1$ ;
- si $d = a \wedge b$, $a = da'$, $b = db'$, alors $a \vee b = a'b'd$ ;
- $(a \vee b)(a \wedge b) = ab$ ;
- $\times$ est distributif par rapport à $\vee$.

**Nombres premiers**

- $\forall n \in \mathbb{Z}$ avec $|n| \geq 2$, il existe $p \in \mathcal{P}$ tel que $p \mid n$ ;
- $n \geq 2$ est premier si et seulement si il n'admet pas de diviseur premier $p$ avec $p^2 \leq n$ ;
- $\mathcal{P}$ est infini ;
- $x \wedge p = 1$ avec $p \in \mathcal{P}$ $\iff$ $p \nmid x$ ;
- si $p \in \mathcal{P}$ divise $a_1 \times \dots \times a_n$, alors $p$ divise l'un des $a_i$ ;
- $\forall n \in \mathbb{Z} \setminus \\{0, -1, 1\\}$ : $n = \varepsilon\\, p_1^{\alpha_1} p_2^{\alpha_2} \cdots p_k^{\alpha_k}$ avec $\alpha_i > 0$, $p_i \in \mathcal{P}$, $\varepsilon \in \\{-1, +1\\}$.

**Congruences**

- $x \equiv y \pmod{n} \iff n \mid (x - y)$ ;
- $x \equiv y \pmod{n} \iff x$ et $y$ ont même reste dans la division euclidienne par $n$ ;
- la congruence est une relation d'équivalence ;
- $a_1 \equiv b_1 \pmod{n}$ et $a_2 \equiv b_2 \pmod{n}$ entraînent $a_1 + a_2 \equiv b_1 + b_2 \pmod{n}$ et $a_1 a_2 \equiv b_1 b_2 \pmod{n}$ ;
- il y a $n$ classes d'équivalence modulo $n$ ;
- $(\mathbb{Z}/n\mathbb{Z}, +, \times)$ est un anneau commutatif.

## IX. Exercices — feuille n° 9 — arithmétique dans $\mathbb{Z}$

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 9 — Arithmétique dans $\mathbb{Z}$ (énoncés)</span>

<ol class="enonces">
<li>Résoudre dans $\mathbb{Z}$ l'équation $5x^2 - 2xy = 3$.</li>
<li>Montrer que pour tout entier $n$ : $n^2 \mid (n+1)^n - 1$.</li>
<li>Trouver tous les entiers naturels $n < 144$ tels que $n \wedge 144 = 18$.</li>
<li>Résoudre dans $\mathbb{Z}^2$ les systèmes :
<ol>
<li>$\begin{cases} x + y = 224 \\\ x \wedge y = 16 \end{cases}$</li>
<li>$\begin{cases} x - y = 84 \\\ x \wedge y = 12 \end{cases}$</li>
<li>$\begin{cases} xy = 9072 \\\ x \wedge y = 18 \end{cases}$</li>
</ol>
</li>
<li>Calculer $a^n \wedge b^n$.</li>
<li>Montrer que $a_1 \wedge a_2 \wedge \dots \wedge a_n = r_1 \wedge r_2 \wedge \dots \wedge r&#95;{n-1} \wedge a_n$, où les $r_i$ sont les restes respectifs de la division euclidienne de $a_i$ par $a_n$. Application : trouver le pgcd de $(350,\ 375,\ 275,\ 100)$.</li>
<li>Trouver $n$ sachant que les restes de la division euclidienne de $4373$ et $826$ par $n$ sont respectivement $8$ et $7$.</li>
<li>Soit $G$ un groupe fini et $a$ un élément d'ordre $n$. Montrer que $a^d$ est d'ordre $\dfrac{n}{n \wedge d}$. En déduire les sous-groupes d'un groupe d'ordre $p$ premier.</li>
<li>Soit $F$ et $H$ deux sous-groupes d'un groupe $G$, d'ordres respectifs $r$ et $s$. Montrer que si $r \wedge s = 1$ alors $F \cap H = \\{e\\}$. On suppose de plus $G$ abélien : montrer que si $x$ est d'ordre $r$ et $y$ d'ordre $s$, alors $xy$ est d'ordre $rs$. Contre-exemple si $r$ et $s$ ne sont pas premiers entre eux.</li>
<li>Résoudre
$$\begin{cases} x + y = 10 \\ x \vee y = 21 \end{cases} \qquad \text{et} \qquad \begin{cases} x \wedge y = 24 \\ x \vee y = 2160 \end{cases}$$</li>
<li>Montrer que si $p$ est un nombre premier, alors $p \mid \dbinom{p}{k}$ pour $1 \leq k \leq p-1$.</li>
<li>On suppose que $n$ admet une décomposition en facteurs premiers de la forme $n = p^a q^b r^c$. On suppose que $np^3$ a 18 diviseurs de plus que $n$, que $nq$ a 8 diviseurs de plus que $n$, et que $nr$ a 12 diviseurs de plus que $n$. Calculer $a$, $b$, $c$.</li>
<li>On veut décomposer $n!$ en facteurs premiers :
<ol>
<li>Quels sont les nombres premiers intervenant dans cette décomposition ?</li>
<li>Soit $p$ l'un d'eux. On construit la suite suivante : $q_0 := n$ et $q&#95;{i+1}$ est le quotient de la division euclidienne de $q_i$ par $p$. Soit $k$ le premier entier tel que $q&#95;{k+1} = 0$. Montrer que $q_1$ est le nombre d'entiers non nuls divisibles par $p$ et inférieurs à $n$. Puis que $q_1 + q_2 + \dots + q_k$ est la puissance de $p$ dans la décomposition de $n!$.</li>
<li>Décomposer $100!$. Par combien de zéros se termine $100!$ ?</li>
</ol>
</li>
<li>Quel est le reste de la division euclidienne de $(4315)^{173}$ par $9$ ?</li>
<li>Montrer que $7 \mid 3^{2n+1} + 2^{n+2}$.</li>
<li>Montrer que $3804 \mid \big(5^{8n+4} + 3^{4n+2}\big)\big(n^3 - n\big)$.</li>
<li>Résoudre les équations :
<ol>
<li>$5x \equiv 12 \ [7]$ ;</li>
<li>$4x \equiv 9 \ [8]$ ;</li>
<li>$ax \equiv b \ [n]$.</li>
</ol>
</li>
<li>Résoudre dans $\mathbb{Z}$ : $2^x + 3^x \equiv 0 \ [7]$.</li>
<li>Montrer que $\overline{p}$ est générateur de $\mathbb{Z}/n\mathbb{Z}$ si et seulement si $p$ est premier avec $n$.</li>
<li>Soit $p$ premier. Quels sont les éléments de $\mathbb{Z}/p\mathbb{Z}$ qui sont leur propre inverse ? En déduire le théorème de Wilson : « $p$ est premier si et seulement si $(p-1)! + 1 \equiv 0 \ [p]$ ».</li>
<li>Montrer que si $p$ est premier et ne divise pas $a$, alors $a^{p-1} \equiv 1 \ [p]$ (petit théorème de Fermat). Montrer que la réciproque est fausse.</li>
<li>Soit $m$ et $n$ deux entiers positifs non nuls, et $f$ l'application qui à une classe $C$ de $\mathbb{Z}/nm\mathbb{Z}$ associe le couple des classes respectives dans $\mathbb{Z}/n\mathbb{Z}$ et $\mathbb{Z}/m\mathbb{Z}$ d'un représentant $x$ de $C$ :
$$f : \mathbb{Z}/nm\mathbb{Z} \to \mathbb{Z}/n\mathbb{Z} \times \mathbb{Z}/m\mathbb{Z}, \qquad C = \overline{x} \mapsto (\overline{x},\ \overline{x})$$
<ol>
<li>Montrer que $f$ est bien définie ainsi.</li>
<li>Montrer que $f$ est un isomorphisme de groupes si $m$ et $n$ sont premiers entre eux.</li>
<li>Montrer que si $m$ et $n$ sont premiers entre eux et si $a$ et $b$ sont deux entiers relatifs donnés, le système suivant a une unique solution modulo $nm$ (théorème chinois) :
$$\begin{cases} x \equiv a \ [n] \\ x \equiv b \ [m] \end{cases}$$
Trouver une expression de $f^{-1}$.</li>
<li>Résoudre les systèmes :
$$\begin{cases} x \equiv 4 \ [7] \\ x \equiv 9 \ [11] \end{cases} \qquad \text{et} \qquad \begin{cases} x \equiv 1 \ [8] \\ x \equiv 3 \ [6] \end{cases}$$</li>
<li>Résoudre alors le problème horrible suivant : sur un bateau il y a 19 pirates et un cuisinier (chinois !). Un trésor doit être réparti en parts égales entre les pirates, et les pièces restantes doivent revenir au cuisinier, qui recevrait alors 3 pièces. Mais une dispute éclate et 6 pirates sont tués : le cuisinier est alors en droit de recevoir 4 pièces. Hélas une tempête emporte 7 pirates (mais pas le cuisinier ni le trésor !) : le cuisinier doit alors recevoir 5 pièces. Combien touchera-t-il au minimum s'il décide d'empoisonner les 6 survivants ?</li>
</ol>
</li>
</ol>

</div>

## X. Technique arithmétique

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Technique arithmétique</span>

- si $d = a \wedge b$ : on écrit $a = d\\,a'$, $b = d\\,b'$ avec $a' \wedge b' = 1$ ;
- si $a$ est d'ordre $r$ : $a^n = 1 \Leftrightarrow r \mid n$ (et en particulier $a^n = 1 \Rightarrow r \mid n$) ;
- pour une CNS (condition nécessaire et suffisante) : distinguer les deux cas $\Rightarrow$ et $\Leftarrow$ ; au passé $\Leftrightarrow$ ; réécrire à chaque étape que l'on a l'équivalence ;
- pour montrer que $a, b$ sont premiers entre eux : montrer $u\\,a + v\\,b = 1$ (Bézout), ou bien $a, b \mid 1$, ou raisonner par l'absurde (contraposée) ;
- pour montrer que $a \mid b$ : montrer que $b \in a\\,\mathbb{Z}$ ;
- pour simplifier des puissances en congruence : trouver $n$ tel que $a^n \equiv 1$ et faire la division euclidienne de la puissance par $n$ ;
- pour montrer que $a \mid b$ : montrer que $b \equiv 0 \ [a]$, ou que les facteurs de $a$ divisent $b$ ;
- $a\\,x \equiv b \ [n]$ : soit $a$ est inversible, soit méthode généralisée ;
- pour trouver le reste de la division par 3 : ajouter les chiffres du nombre.

</div>

## XI. Travaux dirigés du lundi 8/11/93 — calcul du pgcd

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Travaux dirigés du lundi 8/11/93 — Calcul du pgcd (énoncés)</span>

**Algorithme d'Euclide.** On considère deux entiers $a$ et $b$ tels que $0 \leq b < a$, et l'algorithme suivant :

- 1ère étape : $r_0 := a$, $r_1 := b$ ;
- 2ème étape : pour $i \geq 1$, tant que $r_i$ est non nul, calculer $r&#95;{i+1}$ tel que
$$r_{i-1} = r_i\, q_i + r_{i+1} \qquad \text{et} \qquad 0 \leq r_{i+1} < r_i$$

On note $r_k$ le dernier reste non nul ; on rappelle que $r_k = \operatorname{pgcd}(a, b)$.

<ol class="enonces">
<li>Montrer à l'aide de cet algorithme que deux termes consécutifs de la suite de Fibonacci sont premiers entre eux. (Rappel : la suite de Fibonacci est définie par $F_0 = 0$, $F_1 = 1$, et pour $i \geq 1$ : $F&#95;{i+1} = F&#95;{i-1} + F_i$.)</li>
<li>Montrer que $r_k \geq F_2$ et en déduire, à l'aide d'une récurrence, que $b \geq F&#95;{k+1}$.</li>
<li>On rappelle que
$$F_n = \frac{1}{\sqrt{5}}\big(\alpha^n - \beta^n\big), \qquad \alpha = \frac{1+\sqrt{5}}{2}, \quad \beta = \frac{1-\sqrt{5}}{2}$$
Montrer que $F&#95;{k+1} \geq \alpha^{k-1}$ et en déduire que $k - 1 \leq 5\log&#95;{10} b$ (le nombre d'étapes de l'algorithme d'Euclide est majoré par 5 fois le nombre de chiffres de l'écriture décimale de $b$).</li>
<li>**Coefficients de Bézout.** On introduit, pour $i \leq k$, les quantités $u_i$ et $v_i$ définies par $u_0 = v_1 := 1$, $u_1 = v_0 := 0$ et la formule de récurrence
$$\begin{cases} u_{i+1} = u_{i-1} - q_i\, u_i \\ v_{i+1} = v_{i-1} - q_i\, v_i \end{cases}$$
Montrer que, pour tout $i \geq 0$, $r_i = u_i\\, a + v_i\\, b$, et que $\operatorname{pgcd}(a, b) = u_k\\, a + v_k\\, b$.</li>
</ol>

</div>
