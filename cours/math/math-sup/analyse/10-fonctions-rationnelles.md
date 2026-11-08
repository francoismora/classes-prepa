---
layout: chapitre
title: "Fonctions rationnelles"
numero: 10
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Analyse"
source: "Math/Math Sup/Analyse/10 Fonctions rationelles"
pages: 24
interactif: true
---

Dans tout ce chapitre, $\mathbb{K}$ désigne le corps $\mathbb{R}$ ou le corps
$\mathbb{C}$.

## I. Le corps $\mathbb{K}(X)$

### 1) Construction

Sur $\mathbb{K}[X] \times \mathbb{K}[X]^*$, on définit la relation $\mathcal{R}$ :

$$(P, Q)\ \mathcal{R}\ (P', Q') \iff P Q' = P' Q$$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$\mathcal{R}$ est une **relation d'équivalence**. On note $\dfrac{P}{Q}$ (ou
$\overline{(P,Q)}$) la classe de $(P, Q)$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Lois sur $\mathbb{K}(X)$</span>

$$\frac{P}{Q} + \frac{S}{T} = \frac{PT + QS}{QT}, \qquad
\frac{P}{Q} \times \frac{S}{T} = \frac{PS}{QT}, \qquad
\lambda \cdot \frac{P}{Q} = \frac{\lambda P}{Q}$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (lois bien définies)</span>

Il faut vérifier que ces lois ne dépendent pas des représentants choisis. Si
$(P, Q) \mathcal{R} (P', Q')$ et $(S, T) \mathcal{R} (S', T')$, c'est-à-dire
$PQ' = P'Q$ et $ST' = S'T$, alors

$$(PT + QS)\, Q'T' = P T Q' T' + Q S Q' T' = P' Q T T' + S' T' Q Q' = (P'T' + Q'S')\, QT$$

et de même $(PS)(QT)' $... c'est-à-dire $(PS)(Q'T') = (P'Q')(ST')$... donc
$\dfrac{PT+QS}{QT} \mathcal{R} \dfrac{P'T'+Q'S'}{Q'T'}$, et l'addition est bien
définie ; le produit et la multiplication par un scalaire se traitent de même.

</div>

### 2) Propriétés algébriques

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

$(\mathbb{K}(X), +, \times)$ est une **$\mathbb{K}$-algèbre** : groupe commutatif
pour $+$, anneau commutatif unitaire pour $\times$, et les lois externes
coïncident.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

L'application
$\varphi : \mathbb{K}[X] \to \mathbb{K}(X)$, $P \mapsto \dfrac{P}{1}$ est un
**morphisme injectif** de $\mathbb{K}$-algèbres. On identifie $\mathbb{K}[X]$
à son image dans $\mathbb{K}(X)$ (on écrira $P$ au lieu de $\dfrac{P}{1}$).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 3</span>

$\mathbb{K}(X)$ est un **corps** : si $F = \dfrac{P}{Q} \neq 0$ (c'est-à-dire
$P \neq 0$), alors $F$ admet pour inverse $\dfrac{Q}{P}$.

</div>

### 3) Représentation irréductible d'une fraction

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Toute fraction $F \in \mathbb{K}(X)$ admet un représentant **irréductible**
$\dfrac{P}{Q}$ (avec $P \wedge Q = 1$). De plus, si $\dfrac{P'}{Q'}$ est un
autre représentant irréductible de $F$, alors il existe un unique
$\lambda \in \mathbb{K}^*$ tel que $P = \lambda P'$ et $Q = \lambda Q'$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (esquisse)</span>

Soit $F = \dfrac{A}{B}$. En posant $D = A \wedge B$, $A = D A'$ et $B = D B'$
avec $A' \wedge B' = 1$, on obtient $F = \dfrac{A'}{B'}$. Pour l'unicité :
$\dfrac{A}{B} = \dfrac{C}{D}$ avec $A \wedge B = C \wedge D = 1$ donne $AD = BC$ ;
$A \mid BC$ et $A \wedge B = 1$ (Gauss) donnent $A \mid C$, et symétriquement
$C \mid A$, donc $C = \lambda A$ puis $D = \lambda B$.

</div>

### 4) Degré d'une fraction rationnelle

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Si $F = \dfrac{A}{B} \in \mathbb{K}(X)$, on pose
$\deg F = \deg A - \deg B$. Cette quantité est **indépendante du
représentant** choisi (noter $\deg$ le degré usuel, avec $\deg 0 = -\infty$).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

$$\deg\left(\frac{A}{B} + \frac{C}{D}\right) \leq \max\left(\deg \frac{A}{B},\ \deg \frac{C}{D}\right), \qquad
\deg\left(\frac{A}{B} \times \frac{C}{D}\right) = \deg \frac{A}{B} + \deg \frac{C}{D}$$

avec égalité dans la première inégalité si $\deg \dfrac{A}{B} \neq \deg \dfrac{C}{D}$.

</div>

## II. Fonctions rationnelles

### 1) Zéros et pôles

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $F \in \mathbb{K}(X)$ et $\dfrac{A}{B}$ un représentant **irréductible** de
$F$. On dit que $z \in \mathbb{K}$ est :

- un **zéro d'ordre $p$** de $F$ si $z$ est un zéro d'ordre $p$ de $A$ ;
- un **pôle d'ordre $p$** de $F$ si $z$ est un zéro d'ordre $p$ de $B$.

</div>

### 2) Fonction rationnelle associée à $F$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $F \in \mathbb{K}(X)$ ayant des pôles, et $\dfrac{A}{B}$ sa représentation
irréductible. L'application

$$\varphi : \mathbb{K} \setminus \{\text{pôles de } F\} \to \mathbb{K}, \qquad
x \mapsto \frac{A(x)}{B(x)}$$

est la **fonction rationnelle** associée à $F$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

L'application $\mathbb{K}(X) \to \{\text{fonctions rationnelles}\}$, qui à $F$
associe la fonction rationnelle $\varphi$ ci-dessus, est une **bijection**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $F = G$ dans $\mathbb{K}(X)$, avec $\dfrac{A}{B}$ et $\dfrac{C}{D}$ des
représentants irréductibles, alors $AD = BC$ ; posons $H = CB - AD$... on a
$AD = BC$ donc $C B - A D = 0$... : le polynôme $CB - AD$ admet une infinité
de racines (tout $x$ qui n'est pôle ni de $F$ ni de $G$), donc il est nul, d'où
$\dfrac{A(x)}{B(x)} = \dfrac{C(x)}{D(x)}$ partout où c'est défini : les deux
fonctions rationnelles sont égales.

</div>

## III. Décomposition en éléments simples dans $\mathbb{K}(X)$

### 1) Partie entière

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème et définition (partie entière)</span>

Soit $F \in \mathbb{K}(X)$. Il existe un unique $E \in \mathbb{K}[X]$ tel que
$\deg(F - E) < 0$ (c'est-à-dire $F - E = 0$ ou $\deg(F-E) < 0$). Ce polynôme
$E$ est appelé **partie entière** de $F$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**Unicité** : si $E, E'$ conviennent, $\deg(E - E') = \deg((F-E') - (F-E)) < 0$,
donc $E - E'$ est constant ; mais un polynôme constant de degré $< 0$ est nul,
donc $E = E'$.

**Existence** : écrire $F = \dfrac{A}{B}$ et faire la division euclidienne de $A$
par $B$ : $A = B E + R$ avec $\deg R < \deg B$. Alors
$F - E = \dfrac{R}{B}$ et $\deg(F - E) = \deg R - \deg B < 0$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

$$\frac{X^3 + X^2 - X + 1}{X^2 + 1} = X + 1 + \frac{-2X}{X^2+1}, \qquad
\frac{X^2}{(X+1)^2} = 0 + \frac{X^2}{(X+1)^2} \ \ (\deg F < 0 \Rightarrow E = 0)$$

</div>

### 2) Lemmes préparatoires

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Lemme 1</span>

Soient $A, B_1, B_2 \in \mathbb{K}[X]$ avec $\deg A < \deg B_1 B_2$ et
$B_1 \wedge B_2 = 1$. Alors $\dfrac{A}{B_1 B_2}$ s'écrit de manière **unique**

$$\frac{A}{B_1 B_2} = \frac{A_1}{B_1} + \frac{A_2}{B_2}, \qquad
\deg A_1 < \deg B_1,\ \deg A_2 < \deg B_2$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**Existence** : par Bézout, il existe $U, V \in \mathbb{K}[X]$ avec
$U B_1 + V B_2 = 1$. Alors
$\dfrac{A}{B_1 B_2} = \dfrac{A V}{B_2} + \dfrac{A U}{B_1}$, et en réduisant
$AV$ modulo $B_2$ et $AU$ modulo $B_1$ on obtient $A_2$ et $A_1$.

**Unicité** : si $\dfrac{A_1}{B_1} + \dfrac{A_2}{B_2} = \dfrac{A'_1}{B_1} +
\dfrac{A'_2}{B_2}$, alors $(A_1 - A'_1) B_2 = (A'_2 - A_2) B_1$ ; comme
$B_1 \wedge B_2 = 1$, $B_1$ divise $A_1 - A'_1$, mais
$\deg(A_1 - A'_1) < \deg B_1$, donc $A_1 = A'_1$ (et $A_2 = A'_2$).

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Lemme 2</span>

Soient $A, B_1, \dots, B_n \in \mathbb{K}[X]$ avec $B_i \neq 0$,
$\deg A < \deg(B_1 \cdots B_n)$ et les $B_i$ **premiers entre eux deux à deux**.
Alors $\dfrac{A}{B_1 \cdots B_n}$ s'écrit de manière **unique**

$$\frac{A}{B_1 \cdots B_n} = \sum_{i=1}^{n} \frac{A_i}{B_i}, \qquad \deg A_i < \deg B_i$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Par récurrence sur $n$, en appliquant le lemme 1 à $B_1$ et
$B_2 \cdots B_n$ (qui sont premiers entre eux).

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Lemme 3</span>

Soit $A \in \mathbb{K}[X]$ et $P \in \mathbb{K}[X]$, $P \neq 0$, avec
$\deg A < \deg P^n$. Alors $\dfrac{A}{P^n}$ s'écrit de manière **unique**

$$\frac{A}{P^n} = \sum_{j=1}^{n} \frac{A_j}{P^j}, \qquad \deg A_j < \deg P$$

**Pratiquement** : divisions euclidiennes successives
$A = A_n + P Q_n$, $Q_n = A_{n-1} + P Q_{n-1}$, \dots, $Q_1 = A_1 + P Q_0$
(avec $\deg A_i < \deg P$).

</div>

### 3) Théorème de décomposition

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème de décomposition en éléments simples</span>

Soit $F = \dfrac{A}{B} \in \mathbb{K}(X)$ avec $B$ unitaire, et soit
$B = P_1^{\alpha_1} P_2^{\alpha_2} \cdots P_n^{\alpha_n}$ la décomposition de
$B$ en facteurs irréductibles unitaires deux à deux distincts ($\alpha_i \geq 1$).
Alors $F$ s'écrit de manière **unique**

$$F = E + \sum_{i=1}^{n} \sum_{j=1}^{\alpha_i} \frac{A_{ij}}{P_i^{\,j}}$$

avec $E \in \mathbb{K}[X]$ (partie entière de $F$) et
$\deg A_{ij} < \deg P_i$ pour tout $i, j$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (esquisse)</span>

On écrit $F = E + \dfrac{C}{B}$ avec $\deg C < \deg B$ (partie entière). Le
lemme 2 décompose $\dfrac{C}{B}$ en $\sum_i \dfrac{A_i}{P_i^{\alpha_i}}$, puis le
lemme 3 décompose chaque $\dfrac{A_i}{P_i^{\alpha_i}}$ en
$\sum_j \dfrac{A_{ij}}{P_i^j}$. L'unicité découle de celle des lemmes.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définitions</span>

- On appelle **élément simple** de $\mathbb{K}(X)$ toute fraction de la forme
  $\dfrac{P}{Q^k}$ avec $Q$ irréductible et $\deg P < \deg Q$.
- La décomposition fournie par le théorème s'appelle la **décomposition de $F$
  en éléments simples**.

</div>

## IV. Décomposition dans $\mathbb{C}(X)$

### 1) Partie polaire

Dans $\mathbb{C}[X]$, tout polynôme unitaire se factorise en facteurs de degré
1 : si $F = \dfrac{A}{B}$ avec $B$ unitaire,

$$B = (X - a_1)^{\alpha_1} \cdots (X - a_n)^{\alpha_n}$$

les $a_i$ étant les pôles de $F$. La décomposition de $F$ est alors du type

$$F = E + \sum_{i=1}^{n} \sum_{j=1}^{\alpha_i} \frac{B_{ij}}{(X - a_i)^j}$$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle **partie polaire** de $F$ relative au pôle $a_i$ la quantité

$$\sum_{j=1}^{\alpha_i} \frac{B_{ij}}{(X - a_i)^j}$$

</div>

### 2) Recherche pratique des parties polaires

**a) Pôle simple.** Soit $F = \dfrac{A}{B}$ avec $B = (X-a)\, C$ et $C(a) \neq 0$.
Alors la partie polaire relative à $a$ est $\dfrac{\alpha}{X - a}$ avec

$$\alpha = \frac{A(a)}{C(a)} = \frac{A(a)}{B'(a)}$$

(par unicité de la décomposition : $A - \alpha C$ s'annule en $a$... et
$B'(a) = C(a)$).

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$\frac{X^3}{(X-1)(X-2)(X+1)}
= 1 - \frac{1/2}{X-1} + \frac{8/3}{X-2} - \frac{1/6}{X+1}$$

</div>

**b) Pôle multiple d'ordre $p \geq 2$.** Soit $B = (X-a)^p\, C$ avec
$C(a) \neq 0$. On pose $y = X - a$ et on effectue la **division suivant les
puissances croissantes à l'ordre $p-1$** de $A(Y + a)$ par $C(Y + a)$ :

$$A(Y+a) = Q(Y+a) + y^p R, \qquad \deg Q \leq p-1$$

Alors

$$F = \frac{Q(X-a)}{(X-a)^p} + \frac{R(X)}{C(X)}$$

et la **partie polaire relative à $a$** est
$\dfrac{Q(X-a)}{(X-a)^p} = \displaystyle\sum_{j=0}^{p-1} \frac{q_j}{(X-a)^{p-j}}$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Avec $F = \dfrac{X^3}{(X-1)^3 (X+1)}$ et $y = X-1$ :

$$\frac{X^3}{(X-1)^3(X+1)}
= \frac{1/2}{(X-1)^3} + \frac{5/4}{(X-1)^2} + \frac{7/8}{X-1} + \frac{1/8}{X+1}$$

</div>

## V. Décomposition dans $\mathbb{R}(X)$

Dans $\mathbb{R}[X]$, les facteurs irréductibles unitaires sont les
$(X - a)$ et les $X^2 + pX + q$ avec $p^2 - 4q < 0$. Si

$$B = (X-a_1)^{\alpha_1} \cdots (X-a_n)^{\alpha_n}
\cdot (X^2+p_1X+q_1)^{\beta_1} \cdots (X^2+p_mX+q_m)^{\beta_m}$$

alors la décomposition de $F = \dfrac{A}{B}$ dans $\mathbb{R}(X)$ est du type

$$F = E + \sum_{i=1}^{n}\sum_{j=1}^{\alpha_i} \frac{Y_{ij}}{(X-a_i)^j}
+ \sum_{k=1}^{m}\sum_{j=1}^{\beta_k} \frac{L_{kj} X + M_{kj}}{(X^2+p_k X+q_k)^j}$$

### 1) Pôles réels (simples ou multiples)

Même méthode que dans $\mathbb{C}(X)$ :

- **pôle simple** $a$ : la partie polaire est $\dfrac{\alpha}{X-a}$ avec
  $\alpha = \dfrac{A(a)}{B'(a)}$ ;
- **pôle multiple** $a$ d'ordre $p$ : le coefficient du terme en
  $\dfrac{1}{(X-a)^p}$ vaut $\alpha_p = \dfrac{A(a)}{C(a)}$ où
  $B = (X-a)^p C$ (on fait comme si on avait un pôle simple).

### 2) Facteurs quadratiques $X^2 + pX + q$ avec $p^2 - 4q < 0$

**Technique des parties conjuguées.** Si $F \in \mathbb{R}(X)$, alors dans la
décomposition sur $\mathbb{C}(X)$, les parties polaires de deux pôles
conjugués $\alpha$ et $\bar\alpha$ sont conjuguées.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — $\dfrac{1}{X^4+1}$</span>

$$X^4 + 1 = (X^2+1)^2 - 2X^2 = (X^2 + \sqrt{2}\,X + 1)(X^2 - \sqrt{2}\,X + 1)$$

En écrivant $F(X) = \dfrac{aX+b}{X^2+\sqrt2 X+1} + \dfrac{cX+d}{X^2-\sqrt2 X+1}$
et en utilisant $F(X) = F(-X)$ (par unicité de la décomposition, $a = -c$ et
$b = d$), puis en évaluant en une racine $\alpha$ de $X^2 + \sqrt2 X + 1$
(avec $\alpha + \bar\alpha = -\sqrt2$ et $\alpha\bar\alpha = 1$) :

$$\frac{1}{X^4+1}
= \frac{\dfrac{X}{2\sqrt2} + \dfrac{1}{2}}{X^2+\sqrt2\,X+1}
+ \frac{-\dfrac{X}{2\sqrt2} + \dfrac{1}{2}}{X^2-\sqrt2\,X+1}$$

</div>

**Pôle de la forme $X^2+pX+q$.** Soit $P = X^2+pX+q$ (avec $p^2-4q<0$) et
$\alpha \in \mathbb{C} \setminus \mathbb{R}$ une racine de $P$. Si
$F = \dfrac{A}{P\, C}$ avec $C(\alpha) \neq 0$, on écrit

$$\frac{A}{P C} = \frac{aX + b}{P} + \frac{D}{C}$$

En évaluant en $\alpha$ : $\dfrac{A(\alpha)}{C(\alpha)} = a\alpha + b$,
écriture **unique** avec $a, b \in \mathbb{R}$ puisque $\alpha \notin \mathbb{R}$.
On utilise $\alpha + \bar\alpha = 2\,\mathrm{Re}(\alpha) = -p$ et
$\alpha\bar\alpha = q$.

**Cas d'un facteur $(X^2+pX+q)^n$, $n \geq 2$.** Si
$F = \dfrac{A}{(X^2+pX+q)^n\, C}$ avec $C \wedge P = 1$, alors

$$F = \frac{a_1 X + b_1}{X^2+pX+q} + \dots + \frac{a_n X + b_n}{(X^2+pX+q)^n} + \frac{D}{C}$$

et le coefficient $(a_n, b_n)$ (celui affecté à $P^n$) s'obtient en évaluant en
$\alpha$ : $\dfrac{A(\alpha)}{C(\alpha)} = a_n \alpha + b_n$ — on procède comme
si on avait une puissance 1, et les deux coefficients obtenus sont ceux
affectés à $P^n$. Pour les autres, on itère (lemme 3).

### 3) Coefficients indéterminés et exemple complet

Quand il ne reste au plus deux coefficients à déterminer, on peut prendre des
**valeurs particulières de $X$** (passages à la limite aux pôles, évaluation en
$0$, etc.). On n'oublie pas la partie entière, même si $\deg F \geq 0$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — $\dfrac{X^4}{(X-2)(X^2+X+2)}$</span>

Division euclidienne : $\dfrac{X^4}{(X-2)(X^2+X+2)} = X + 1 + \dfrac{X^2+4X+4}{(X-2)(X^2+X+2)}$.
On cherche $a, b, c$ tels que
$F = X+1 + \dfrac{a}{X-2} + \dfrac{bX+c}{X^2+X+2}$. En évaluant en $0$ et en
utilisant les pôles, on trouve $a = 2$, $b = -1$, $c = 0$ :

$$\frac{X^4}{(X-2)(X^2+X+2)} = X + 1 + \frac{2}{X-2} - \frac{X}{X^2+X+2}$$

</div>

### Visualisation interactive

<div class="composant" data-composant="des"></div>

Choisis une fraction rationnelle parmi les exemples du cours : le composant
**calcule réellement** sa décomposition en éléments simples sur $\mathbb{R}(X)$
(partie entière par division euclidienne, coefficients par inverse modulaire et
divisions successives — comme dans les lemmes 1 à 3) et l'affiche en LaTeX. Le
premier graphique montre la courbe de $f$ avec les asymptotes verticales aux
pôles réels (et l'asymptote oblique, qui est la partie entière) ; le second
montre l'erreur $|f(x) - \text{décomposition}(x)|$, nulle à la précision
machine : la décomposition est une identité exacte.

## VI. Exercices — feuille n° 21

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 21 — Fractions rationnelles (énoncés)</span>

<ol class="enonces">
<li>Décomposer les fractions rationnelles suivantes en éléments simples :
<ol>
<li>$F(X) = \dfrac{1}{X(X+1)\cdots(X+n)}$ sur $\mathbb{R}(X)$ ;</li>
<li>$F(X) = \dfrac{9}{(X-1)^4 (X^2+X+1)}$ sur $\mathbb{R}(X)$ ;</li>
<li>$F(X) = \dfrac{X^2}{X^4 - 2X^2\cos(2\varphi) + 1}$ sur $\mathbb{R}(X)$ et $\mathbb{C}(X)$ ;</li>
<li>$F(X) = \dfrac{X^3-3X+1}{(X-2)^2 (X^2-X+1)^2}$ sur $\mathbb{R}(X)$ ;</li>
<li>$F(X) = \dfrac{X^6+2X^4+2X^2+3}{X^4+X^2+1}$ sur $\mathbb{R}(X)$ ;</li>
<li>$F(X) = \dfrac{X^6}{(X^2+1)^3}$ sur $\mathbb{R}(X)$ ;</li>
<li>$F(X) = \dfrac{X^2+2X+1}{(X-1)^3 (X^2+1)^2}$ sur $\mathbb{R}(X)$ ;</li>
<li>$F(X) = \dfrac{1}{X^8+1}$ sur $\mathbb{R}(X)$ et $\mathbb{C}(X)$.</li>
</ol>
</li>
<li>Décomposer en éléments simples sur $\mathbb{C}(X)$ et $\mathbb{R}(X)$ la fraction rationnelle $F(X) = \dfrac{X^4}{(X^3-1)^3}$ (on pourra calculer $F(jX)$, \dots).</li>
<li>Montrer qu'il existe une fraction rationnelle $F$ de $\mathbb{C}(X)$ telle que $\tan(n\theta) = F(\tan\theta)$.</li>
<li>Soit $a_1, a_2, \dots, a_n$ $n$ complexes distincts et $P(X) = (X-a_1)(X-a_2)\cdots(X-a_n)$.
<ol>
<li>Décomposer $F = \dfrac{P'}{P}$ en éléments simples sur $\mathbb{C}(X)$.</li>
<li>En déduire $S = \displaystyle\sum_{k=0}^{n} \frac{1}{X-\omega^k}$ où $\omega = e^{2i\pi/n}$, et $S = \displaystyle\sum_{k=0}^{n} \frac{1}{(X-\omega^k)^2}$.</li>
</ol>
</li>
<li>Calculer $S = \displaystyle\sum_{k=1}^{n} \frac{1}{k(k+1)(k+2)}$.</li>
<li>Soit $a_1, \dots, a_n$ et $b_1, \dots, b_n$ des complexes deux à deux distincts. On pose $c_{ij} = a_i + b_j$ et on suppose de plus que, pour tous $i, j$, $c_{ij} \neq 0$. Soit $M_n$ la matrice de terme général $\dfrac{1}{c_{ij}}$.
<ol>
<li>En utilisant la fraction rationnelle $F(X) = \dfrac{(X-a_1)\cdots(X-a_{n-1})}{(X+b_1)\cdots(X+b_n)}$ et les opérations élémentaires sur les lignes et les colonnes, montrer que $\operatorname{rg}(M_n) = \operatorname{rg}(M_{n-1}) + 1$ ($n \geq 2$).</li>
<li>En déduire que $M_n$ est inversible.</li>
</ol>
</li>
</ol>

</div>
