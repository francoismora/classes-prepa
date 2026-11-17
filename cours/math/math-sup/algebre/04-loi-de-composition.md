---
layout: chapitre
title: "Loi de composition"
numero: 4
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Algèbre"
source: "Math/Math Sup/Algèbre/04 Loi de composition"
pages: 18
---

## I. Lois de composition internes

### 1) Vocabulaire

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $E$ un ensemble non vide : une **loi de composition interne** sur $E$ est une application de $E \times E \to E$.

</div>

Exemples : $+$, $\times$ dans $\mathbb{R}$, $\mathbb{N}$, $\mathbb{Z}$.

- $(E, &#42;)$ s'appelle un **magma**.
- $&#42;$ est **commutative** si $(\forall (x,y) \in E^2),\ x &#42; y = y &#42; x$.
- $&#42;$ est **associative** si $(\forall (x,y,z) \in E^3),\ x &#42; (y &#42; z) = (x &#42; y) &#42; z$ ; et $(E, &#42;)$ est un **magma associatif**.
- On dit que $&#42;$ admet un **élément neutre** s'il existe un élément $e \in E$ tel que $\forall x \in E,\ e &#42; x = x &#42; e = x$. $(E, &#42;)$ est un **magma unifère**.

Exemples : dans $(\mathbb{R}, \times)$, $e = 1$ ; dans $(\mathbb{Z}, +)$, $e = 0$.

- Si $(E, &#42;)$ est un magma unifère, on dit que $x$ est **symétrisable** s'il existe $x' \in E$ tel que $x &#42; x' = x' &#42; x = e$. $x'$ s'appelle un **symétrique** de $x$.
- On dit que $a \in E$ est **régulier** pour $&#42;$ si

$$
a * x = a * y \Rightarrow x = y \quad \text{(régulier à gauche)}, \qquad
x * a = y * a \Rightarrow x = y \quad \text{(régulier à droite)}
$$

Exemple : le symétrique de $x$ dans $(\mathbb{Z}, +)$ est $-x$ ; dans $(\mathbb{R}, \times)$, $0$ n'a pas de symétrique ; si $x \neq 0$, $x^{-1}$ est le symétrique de $x$.

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Notations</span>

- pour une loi quelconque, on utilisera la notation $&#42;$ ; « l'élément neutre » est noté $1$, un symétrique de $x$ est noté $x^{-1}$ ;
- pour une loi commutative, on utilise $+$ ; « l'élément neutre » est noté $0$.

</div>

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

- S'il y a un élément neutre, il est **unique**.
- Si $(E, &#42;)$ est associatif et unifère, si $x$ admet un symétrique, il est **unique**.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Cela justifie l'emploi de la notation $x^{-1}$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $e$ et $e'$ sont deux éléments neutres : $e &#42; e' = e$ ($e'$ neutre) et $e &#42; e' = e'$ ($e$ neutre), donc $e = e'$.

Si $x'$ et $x''$ sont deux symétriques de $x$ : $x' &#42; x = x &#42; x' = e = x &#42; x'' = x'' &#42; x$, et

$$
x' = x' * e = x' * (x * x'') = (x' * x) * x'' = e * x'' = x''
$$

(associativité et unifère), donc $x' = x''$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $x$ admet un symétrique (inverse), alors $x$ est **régulier**. ($(E, &#42;)$ associatif unifère.)

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $x &#42; y = x &#42; z$ : $x^{-1} &#42; (x &#42; y) = x^{-1} &#42; (x &#42; z)$, donc
$(x^{-1} &#42; x) &#42; y = (x^{-1} &#42; x) &#42; z$, soit $1 &#42; y = 1 &#42; z$, d'où $y = z$.
De même $y &#42; x = z &#42; x \Rightarrow y = z$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

$(E, &#42;)$ associatif unifère :

$$(x * y)^{-1} = y^{-1} * x^{-1}$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$$
(x * y) * (y^{-1} * x^{-1}) = x * (y * y^{-1}) * x^{-1} = x * 1 * x^{-1} = x * x^{-1} = 1
$$

$$
(y^{-1} * x^{-1}) * (x * y) = y^{-1} * (x^{-1} * x) * y = y^{-1} * 1 * y = y^{-1} * y = 1
$$

</div>

### 3) Loi induite

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (partie stable)</span>

Soit $A \subset E$. $A$ est **stable** pour $&#42;$ si

$$\forall (x,y) \in A^2,\quad x * y \in A$$

</div>

Exemple : $(\mathcal{U}, \times)$, où $\mathcal{U}$ est l'ensemble des complexes de module $1$, est stable pour $\times$ : $z \in \mathcal{U} \Rightarrow |z| = 1$, $z' \in \mathcal{U} \Rightarrow |z'| = 1$ $\Rightarrow$ $|z z'| = 1$, donc $z &#42; z' \in \mathcal{U}$.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (loi induite)</span>

Si $A$ est stable pour $&#42;$, l'application $&#42;$ restreinte à $A \times A \to A$ et à valeurs dans $A$,

$$\widetilde{*} : A \times A \to A, \qquad (x,y) \mapsto x * y$$

définit une loi de composition interne dans $A$, appelée **loi induite** (par $&#42;$ sur $A$).
Quand il n'y aura pas d'ambiguïté, $\widetilde{&#42;}$ sera encore notée $&#42;$.

</div>

## II. Loi de composition externe

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 1</span>

Soient $E$, $\Omega$ deux ensembles non vides. On appelle **loi externe sur $E$ à ensemble d'opérateurs $\Omega$** une application de $\Omega \times E \to E$.

</div>

Exemples :

$$\mathbb{R}^* \times \mathbb{R}^{\mathbb{N}} \to \mathbb{R}^{\mathbb{N}}, \quad (\lambda, (u_n)) \mapsto (\lambda u_n)$$

$$\mathbb{N} \times \mathbb{R}^* \to \mathbb{R}^*, \quad (n, x) \mapsto x^n$$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 2 (distributivité d'une loi externe)</span>

Soit $(E, &#42;)$ un magma et $\top$ une loi externe sur $E$ d'ensemble d'opérateurs $\Omega$. On dit que $\top$ est **distributive par rapport à $&#42;$** si

$$\forall \alpha \in \Omega,\ \forall (x,y) \in E^2,\quad \alpha \top (x * y) = (\alpha \top x) * (\alpha \top y)$$

</div>

Exemples :

- $+$ est distributive pour $\times$ sur $(\mathbb{Z}, \times)$ ;
- $\times$ est distributive pour $+$ sur $(\mathbb{Z}, +)$ ;
- $\cap$ est distributive pour $\cup$ sur $(\mathcal{P}(E), \cup)$ ;
- $\cup$ est distributive pour $\cap$ sur $(\mathcal{P}(E), \cap)$.

## III. Morphisme

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soient $(E, \top)$, $(E', \top')$ deux magmas, $f : E \to E'$ une application. On dit que $f$ est un **morphisme** de $(E, \top)$ dans $(E', \top')$ si

$$\forall (x,y) \in E^2,\quad f(x \top y) = f(x) \top' f(y)$$

</div>

Exemple : $\ln$ de $(\mathbb{R}&#95;+^&#42;, \times)$ sur $(\mathbb{R}, +)$.

- si $E = E'$, on parle d'**endomorphisme** ;
- si $f$ est bijective, on dit que $f$ est un **isomorphisme** ;
- si $f$ est bijective et $E = E'$, on parle d'**automorphisme**.

Exemple : $\mathrm{Id}$.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Si $f$ est un isomorphisme de $(E, \top)$ dans $(E', \top')$, alors $f^{-1}$ est un isomorphisme de $(E', \top')$ sur $(E, \top)$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $(x', y') \in E'^2$ ; posons $x' = f(x)$ et $y' = f(y)$ (car $f$ est bijective). Alors

$$
f^{-1}(x' \top' y') = f^{-1}\big(f(x) \top' f(y)\big)
= f^{-1}\big(f(x \top y)\big)
= x \top y
= f^{-1}(x') \top f^{-1}(y')
$$

donc $f^{-1}$ est un morphisme, et c'est une bijection : c'est un isomorphisme.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

La composée de deux morphismes est encore un morphisme.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$f(x \top y) = f(x) \top' f(y)$, donc, avec $x' = f(x)$, $y' = f(y)$, $x'' = g(x')$, $y'' = g(y')$ :

$$
g\big(f(x \top y)\big) = g\big(f(x) \top' f(y)\big) = g(x' \top' y') = g(x') \top'' g(y') = x'' \top'' y''
$$

donc $(g \circ f)(x \top y) = (g \circ f)(x) \top'' (g \circ f)(y)$.

</div>

## IV. Lois internes (suite) : distributivité de deux lois internes

Soit $E$ un ensemble, $&#42;$ et $\top$ deux lois internes sur $E$. On dit que $\top$ est **distributive par rapport à $&#42;$** si

$$\forall (x,y,z) \in E^3,\quad x \top (y * z) = (x \top y) * (x \top z)$$

et

$$\forall (x,y,z) \in E^3,\quad (x * y) \top z = (x \top z) * (y \top z)$$

Exemples :

- $(\mathcal{P}(E), \cap)$ : $E$ est élément neutre ; associatif, commutatif ; pas de symétrique ($A \cap B = E \Rightarrow A = B = E$).
- $(\mathcal{P}(E), \cup)$ : $\varnothing$ est élément neutre ; associatif, commutatif ; seul $\varnothing$ admet un symétrique.

## V. Groupe technique

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Méthodes</span>

- chercher $x''$ symétrique de $x'$, symétrique de $x$ ;
- pour $G = G_1 \times \dots \times G_n$ et $G$ abélien, montrer que les $G_i$ sont abéliens : on pose $x = (x_1, \dots, x_i, \dots, x_n)$ et $y = (y_1, \dots, y_i, \dots, y_n)$ ;
- pour montrer que $G$ est un groupe, montrer que $G$ est un sous-groupe d'un groupe déjà connu. Exemples : $(\mathbb{R}, +)$, $(\mathbb{Z}, \times)$ et $(\mathcal{P}(E), \Delta)$ pour le contre-exemple ; $(\mathcal{G}(E), \circ)$ non commutatif ;
- $a^2 = 1 \Rightarrow a = a^{-1}$ ;
- montrer la commutativité par le symétrique de $ab$ ;
- démontrer que $P$ : soit 1), on sait 2) (on suppose non 1 et on montre 2) ; 1er cas : non 1, donc j'ai 2 ; 2e cas : donc j'ai $P$ ;
- pour montrer que $f$ est injective : partir de $f(a) = f(b)$ et remonter les implications pour aboutir à $x = y$ ;
- les démonstrations avec $\mathbb{Z}$ : celles où intervient $\mathrm{Im}&#92;&#44; f$, qui serait de la forme $n\mathbb{Z}$ ;
- pour montrer que deux ensembles ont leur cardinal égal, utiliser une bijection entre les deux ;
- pour l'associativité ou la commutativité : insérer le rôle des variables.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Résolution d'un système de deux équations à deux inconnues</span>

$$
\begin{cases}
ax + by = c \\
a'x + b'y = c'
\end{cases}
\qquad
\Delta = \begin{vmatrix} a & b \\ a' & b' \end{vmatrix} = ab' - a'b
$$

Le système admet une unique solution si et seulement si $\Delta \neq 0$ :

$$
x = \frac{\begin{vmatrix} c & b \\ c' & b' \end{vmatrix}}{\Delta} = \frac{cb' - bc'}{ab' - a'b},
\qquad
y = \frac{\begin{vmatrix} a & c \\ a' & c' \end{vmatrix}}{\Delta}
$$

</div>

## VI. Exercices — feuille n° 7

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 7 — Lois internes, groupes (énoncés)</span>

<ol class="enonces">
<li>Soit dans $E$ la loi interne $\tau$ qui vérifie : $\tau$ est associative, commutative et : $\forall a \in E,\ a &#92;&#44;\tau&#92;&#44; a = a$. On définit sur $E$ la relation binaire $R$ par $(x R y \iff x &#92;&#44;\tau&#92;&#44; y = y)$. Montrer que $R$ est une relation d'ordre et que $&#92;&#123;x, y&#92;&#125;$ admet une borne supérieure et une borne inférieure pour cet ordre.</li>
<li>Soit $E$ un ensemble fini muni d'une loi interne $&#42;$ associative, d'élément neutre $e$. Soit $a$ fixé dans $E$ et $T_a$ l'application :
$$T_a : E \to E, \quad x \mapsto a * x$$
<ol>
<li>Montrer que $a$ admet un symétrique pour $&#42;$ si et seulement si $T_a$ est bijective.</li>
<li>Montrer que $\varphi : E \to E^E$, $a \mapsto T_a$, est un morphisme de $(E, &#42;)$ dans $(F, \circ)$.</li>
</ol>
</li>
<li>Soit $(G, &#42;)$ un groupe, $E$ un ensemble non vide. Montrer que $G^E$ est un groupe pour la loi $\times$ définie par : pour $f$ et $g$ dans $G^E$, $f \times g$ est l'application $(f \times g)(x) = f(x) &#42; g(x)$. À quelle condition $G^E$ est-il abélien ?</li>
<li>Montrer que la réunion de deux sous-groupes est un sous-groupe de $G$ si et seulement si l'un des deux sous-groupes est inclus dans l'autre.</li>
<li>Soit $(E, &#42;)$ un magma associatif ; on suppose que $e$ est élément neutre à gauche et que tout élément admet un symétrique à gauche. Montrer que $E$ est un groupe.</li>
<li>Soit $(G, .)$ un groupe. Montrer que $C = &#92;&#123;x \in G \mid \forall y \in G,\ xy = yx&#92;&#125;$ est un sous-groupe de $E$ (appelé centre de $G$). Que vaut $C$ lorsque le groupe est abélien ? Quel est le centre de l'ensemble des bijections de $E$, si $E$ est un ensemble à $n$ éléments ?</li>
<li>On considère le diagramme suivant :
$$
\begin{array}{ccccccccc}
A & \xrightarrow{f} & B & \xrightarrow{g} & C & \xrightarrow{h} & D & \xrightarrow{k} & E \\
\downarrow{\scriptstyle p} & & \downarrow{\scriptstyle q} & & \downarrow{\scriptstyle r} & & \downarrow{\scriptstyle s} & & \downarrow{\scriptstyle t} \\
A' & \xrightarrow{f'} & B' & \xrightarrow{g'} & C' & \xrightarrow{h'} & D' & \xrightarrow{k'} & E'
\end{array}
$$
On suppose que tous les ensembles sont des groupes et les applications des morphismes de groupes. On suppose que le diagramme est commutatif, c'est-à-dire que si deux applications vont d'un même ensemble de départ vers un même ensemble d'arrivée, elles sont égales (ex $q \circ f = f' \circ p$). On suppose de plus que les deux suites $(f, g, h, k)$ et $(f', g', h', k')$ sont exactes, c'est-à-dire que l'image d'une application est égale au noyau de l'application suivante (ex $\mathrm{Im}&#92;&#44; g = \ker h$). Montrer que :
<ol>
<li>Si $p$ est surjective et si $q$ et $s$ sont injectives alors $r$ est injective.</li>
<li>Si $t$ est injective et si $q$ et $s$ sont surjectives alors $r$ est surjective.</li>
<li>Si $p$ est surjective, si $t$ est injective et si $q$ et $s$ sont bijectives alors $r$ est bijective.</li>
</ol>
</li>
<li>Soit $G$ un groupe tel que : $\forall a \in G,\ a^2 = 1$. Montrer que $G$ est commutatif.</li>
<li>Montrer que $G = &#92;&#123;p\sqrt{2} + q\sqrt{3} \mid p, q \in \mathbb{Z}&#92;&#125;$ est un groupe.</li>
<li>Quelles sont les tables possibles pour un groupe d'ordre 4 ? d'ordre 6 ?</li>
<li>Soit $(a, b) \subset G$, $G$ groupe. On suppose que $a$ et $b$ vérifient les relations :
$$
\begin{cases}
a^4 = b^4 = 1 \\
a^2 = b^2 \\
aba = b
\end{cases}
$$
Soit $H$ le groupe engendré par $&#92;&#123;a, b&#92;&#125;$. Montrer que $H$ est d'ordre 8. Dresser la table de $H$.</li>
<li>Soit $a$ un élément d'un groupe, $a$ d'ordre $n$. Montrer que $a^{-1}$ est d'ordre $n$, ainsi que $bab^{-1}$.</li>
<li>Soit $H$ et $K$, deux sous-groupes de $(G, .)$. Montrer que les 4 propositions suivantes sont équivalentes :
<ol>
<li>$HK$ est un sous-groupe de $G$.</li>
<li>$KH$ est un sous-groupe de $G$.</li>
<li>$HK \subset KH$.</li>
<li>$KH \subset HK$.</li>
</ol>
</li>
</ol>

</div>
