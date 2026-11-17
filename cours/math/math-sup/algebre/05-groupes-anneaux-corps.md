---
layout: chapitre
title: "Groupes, Anneaux, Corps"
numero: 5
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Algèbre"
source: "Math/Math Sup/Algèbre/05 Groupes, Anneaux, Corps"
pages: 48
---

## I. Généralités

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$(G, \*)$ est un **groupe** si :

- $\*$ admet un élément neutre ;
- $\*$ est associative ;
- tout $x \in G$ est symétrisable pour $\*$ (admet un symétrique).

Si de plus $\*$ est commutative, on dit que $G$ est un **groupe commutatif** (ou **abélien**).

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $(\mathbb{Z}, +)$, $(\mathbb{R}, +)$, $(\mathbb{C}, +)$ sont des groupes abéliens ;
- $(\mathbb{N}, +)$ n'est pas un groupe car seul $0$ est symétrisable ;
- le groupe des isométries du plan ou de l'espace, pour la loi $\circ$ : $\circ$ est associative, $\mathrm{Id}$ est neutre, et si $f$ est une isométrie alors $f^{-1}$ est une isométrie, qui est le symétrique de $f$ ;
- $\sigma(E) = \{ f \mid f \text{ bijection de } E \text{ dans } E \}$, muni de $\circ$ (permutations si $E$ est fini) : son élément neutre est $\mathrm{Id}\_E$ ;

$$(f \circ g) \circ h = f \circ (g \circ h), \qquad f^{-1} : E \to E \text{ donc } f^{-1} \in \sigma(E) \text{ et } f \circ f^{-1} = f^{-1} \circ f = \mathrm{Id}_E$$

Pour $\mathrm{card}\, E \geq 3$, $\sigma(E)$ n'est pas abélien : soient $a, b, c$ trois éléments distincts de $E$, et

$$f : a \mapsto b,\ b \mapsto a,\ x \mapsto x \ (x \notin \{a, b\}), \qquad g : a \mapsto c,\ c \mapsto a,\ x \mapsto x \ (x \notin \{a, c\})$$

alors $(f \circ g)(a) = c \neq (g \circ f)(a) = b$ : $\circ$ n'est pas commutative ;

- $(\mathcal{P}(E), \Delta)$ est un groupe abélien : $\Delta$ est associative, $\varnothing$ est neutre, $A \in \mathcal{P}(E)$ admet pour symétrique $A$ lui-même, et $A \Delta B = B \Delta A$.

</div>

### 2) Calculs dans un groupe

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Conventions</span>

- a) $(x \* y)^{-1} = y^{-1} \* x^{-1}$ (un groupe est un magma associatif unitaire) ;
- b) convention $a^0 = 1$ ; pour $n \in \mathbb{N}^\*$ :

$$a^n = \underbrace{a * a * \dots * a}_{n \text{ fois}}$$

et pour $n \in \mathbb{Z} \setminus \mathbb{N}$ : $a^n = (a^{-n})^{-1}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$\forall n \in \mathbb{Z}, \qquad a^n = (a^{-n})^{-1} = (a^{-1})^{-n}$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

**Premier point** : $a^n = (a^{-n})^{-1}$.

- pour $n = 0$ : OK ;
- pour $n \leq 0$ : par définition ;
- pour $n > 0$ : $-n < 0$, donc $a^{-n} = \big(a^{-(-n)}\big)^{-1} = (a^n)^{-1}$ par définition, d'où $(a^{-n})^{-1} = \big[(a^n)^{-1}\big]^{-1} = a^n$.

**Deuxième point** : $a^n = (a^{-1})^{-n}$.

- $n = 0$ : OK ;
- $n > 0$ : $(a^n)^{-1} = \underbrace{a^{-1} \* \dots \* a^{-1}}\_{n \text{ fois}} = (a^{-1})^n$, donc $a^n = \big[(a^{-1})^n\big]^{-1} = (a^{-1})^{-n}$ d'après le 1<sup>er</sup> point ;
- $n \leq 0$ : $a^n = a^{-(-n)} = (a^{-n})^{-1}$ avec $-n \geq 0$, donc $a^{-n} = (a^{-1})^{n}$ d'après le cas précédent, et $a^n = \big[(a^{-1})^n\big]^{-1} = (a^{-1})^{-n}$ d'après le 1<sup>er</sup> point.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

- c) $\forall (n, m) \in \mathbb{Z}^2$, $a^n \* a^m = a^{n+m}$ ;
- d) $\forall (n, m) \in \mathbb{Z}^2$, $(a^n)^m = a^{nm}$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

**Attention** : $(ab)^n \neq a^n b^n$ (on l'écrit seulement si $a$ et $b$ commutent).

Avec des notations additives ($+$) :

- $-(x + y) = -x - y$ ;
- $\forall n \in \mathbb{Z}$, $n a = -n(-a) = -(-n a)$ ;
- $\forall n \in \mathbb{Z}$, $\forall m \in \mathbb{Z}$, $(n + m)a = n a + m a$ ;
- $\forall n, m \in \mathbb{Z}$, $n(ma) = (nm)a$.

</div>

### 3) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

Tout élément d'un groupe est **régulier** (cas inversible).

</div>

**Application : table de composition d'un groupe fini.** Si $G = \{1, a_1, a_2, \dots, a\_{n-1}\}$ :

| $\*$ | $1$ | $a_1$ | $a_2$ | $\dots$ | $a\_{n-1}$ |
|---|---|---|---|---|---|
| $1$ | $1$ | $a_1$ | $a_2$ | $\dots$ | $a\_{n-1}$ |
| $a_1$ | $a_1$ | | | | |
| $a_2$ | $a_2$ | | | | |
| $\vdots$ | $\vdots$ | | | | |
| $a\_{n-1}$ | $a\_{n-1}$ | | | | |

Les éléments $a_i \* x$ d'une même ligne sont deux à deux distincts : dans chaque ligne (resp. chaque colonne) du tableau figure chaque élément du groupe, une et une seule fois.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — $G = \{\mathrm{Id}, S_0, S_d, S_r\}$ muni de $\circ$</span>

| $\circ$ | $\mathrm{Id}$ | $S_d$ | $S_0$ | $S_r$ |
|---|---|---|---|---|
| $\mathrm{Id}$ | $\mathrm{Id}$ | $S_d$ | $S_0$ | $S_r$ |
| $S_d$ | $S_d$ | $\mathrm{Id}$ | $S_r$ | $S_0$ |
| $S_0$ | $S_0$ | $S_r$ | $\mathrm{Id}$ | $S_d$ |
| $S_r$ | $S_r$ | $S_0$ | $S_d$ | $\mathrm{Id}$ |

$\circ$ est une loi interne sur $G$ ; $\mathrm{Id}$ est neutre ; $\circ$ est associative ; pour chaque élément $x$ de $G$, il existe $y \in G$ tel que $x \circ y = \mathrm{Id}$ et $y \circ x = \mathrm{Id}$ (on le lit sur le tableau, qui est symétrique). Donc $G$ est un groupe abélien.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (produit de groupes)</span>

Si $G_1, \dots, G_n$ sont des groupes munis de $\*$, alors $G = G_1 \times G_2 \times \dots \times G_n$ est un groupe pour la loi $\*$ définie par : si $X = (x_1, \dots, x_n)$ et $Y = (y_1, \dots, y_n)$,

$$X * Y = (x_1 * y_1,\ x_2 * y_2,\ \dots,\ x_n * y_n)$$

De plus, $G$ est abélien si tous les $G_i$ sont abéliens.

</div>

## II. Sous-groupes

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $H$ une partie non vide de $G$. $H$ est un **sous-groupe** de $G$ si $H$ est un groupe pour la loi induite (ce qui sous-entend que la loi s'induit sur $H$).

</div>

### 2) Caractérisations

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

$H$ est un sous-groupe de $(G, \*)$ si et seulement si :

1) $H$ est non vide ;
2) $\forall (x, y) \in H^2$, $x \* y \in H$ ;
3) $\forall x \in H$, $x^{-1} \in H$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

**Sens direct.** Si $H$ est un sous-groupe de $G$ : 1) par définition d'un sous-groupe ; 2) parce que la loi s'induit sur $H$, donc $H$ est stable pour $\*$. $H$ est un groupe pour $\*$, notons $1_H$ son neutre. Alors

$$\forall a \in H,\ a * 1_H = 1_H * a = a, \qquad \forall a \in G,\ a * 1_G = 1_G * a = a$$

et pour $a \in H$ : $a \* 1_G = 1_G \* a = a = a \* 1_H$, donc par régularité $1_G = 1_H$. Soit $a \in H$, $a'$ son symétrique dans $H$ et $a^{-1}$ son inverse dans $G$ : $a' \* a = a \* a' = 1_H$ et $a^{-1} \* a = a \* a^{-1} = 1_G = 1_H$, donc $a \* a' = a \* a^{-1}$, d'où $a' = a^{-1} \in H$ d'après 2).

**Réciproque.** On suppose 1), 2), 3). $H$ non vide ; la loi s'induit sur $H$, stable pour $\*$ d'après 2) ; $\bar{\*}$ est associative : $\forall (a, b, c) \in H^3$,

$$a \bar{*} (b \bar{*} c) = a * (b * c) = (a * b) * c = (a \bar{*} b) \bar{*} c$$

De plus, $a \in H$ et $a^{-1} \in H$ (3) donnent $1_G = a \* a^{-1} \in H$ (2), et $\forall a \in H$, $a \bar{\*} 1_G = a \* 1_G = 1_G \* a = 1_G \bar{\*} a$ : $1_G$ est neutre pour $\bar{\*}$. Enfin, soit $a \in H$ : $a$ est inversible dans $G$ pour $\*$, d'inverse $a^{-1}$, et $a^{-1} \in H$ d'après 3) ; comme $a \* a^{-1} = 1_G = a^{-1} \* a$, $a$ admet un inverse dans $H$ pour $\bar{\*}$. Donc $H$ est un sous-groupe de $G$, ce qui prouve aussi la caractérisation équivalente : $H$ sous-groupe de $G$ ssi $H$ non vide et $\forall (x, y) \in H^2$, $x \* y^{-1} \in H$ (si $H$ est un sous-groupe, on a 1), 2), 3), donc $y^{-1} \in H$ puis $x \* y^{-1} \in H$ ; réciproquement, si $H$ non vide et $x \* y^{-1} \in H$ pour tous $x, y \in H$, alors avec $x = y = a \in H$ : $1_G = a \* a^{-1} \in H$, puis $1_G \* y^{-1} \in H$ donne 3), puis $x \* (y^{-1})^{-1} = x \* y \in H$ donne 2), et la proposition 1 conclut).

</div>

### 3) Exemple

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $(\mathbb{Q}, \cdot)$ est un sous-groupe de $(\mathbb{C}, \cdot)$ ;
- $\mathbb{U}\_n = \left\{ e^{2 i k \pi / n} \mid 0 \leq k \leq n-1 \right\}$ est un sous-groupe de $(\mathbb{C}, \cdot)$ : $1 \in \mathbb{U}\_n$ (non vide) ; si $\zeta_1 = e^{2ik\pi/n}$ et $\zeta_2 = e^{2ik'\pi/n}$, alors $\zeta_1 \cdot \zeta_2 = e^{2i(k+k')\pi/n}$ et $(\zeta_1 \times \zeta_2)^n = \zeta_1^n \cdot \zeta_2^n = 1$, donc $\zeta_1 \times \zeta_2^{-1}$ est encore une racine $n$-ième de l'unité ;
- $G = \{\mathrm{Id}, S_0, S_d, S_r\}$ est un sous-groupe du groupe des isométries de l'espace.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

Les sous-groupes de $(\mathbb{Z}, +)$ sont exactement les $n\mathbb{Z} = \{ nk \mid k \in \mathbb{Z} \}$, avec $n \in \mathbb{N}$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $n \in \mathbb{N}$ et $H = n\mathbb{Z}$ : $0 \in H$ (H non vide) ; si $x = na$ et $y = nb$ avec $a, b \in \mathbb{Z}$, alors $x - y = n(a - b) \in H$ : $H$ est stable par $-$, d'où $H$ est un sous-groupe de $(\mathbb{Z}, +)$.

Réciproquement, soit $H$ un sous-groupe de $(\mathbb{Z}, +)$. Si $H = \{0\}$, alors $H = 0\mathbb{Z}$. Sinon, $H$ contient $a \neq 0$ et $-a$, donc $H \cap \mathbb{N}^\*$ est non vide et admet un plus petit élément $b$, $b \neq 0$. Pour $x \in H \cap \mathbb{N}$ : $x = bq + r$ avec $0 \leq r < b$ (division euclidienne dans $\mathbb{N}$, $b \neq 0$) ; $b \in H$ et $bq \in H$ (H stable par $+$), donc $r = x - bq \in H$ (H stable par $-$) ; comme $r < b$ et que $b$ est le plus petit élément de $H \cap \mathbb{N}^\*$, on a $r = 0$, soit $x = bq \in b\mathbb{Z}$. Si $x \in H$ avec $x < 0$, alors $-x > 0$ et $-x \in H$, donc $-x \in b\mathbb{Z}$ et $x \in b\mathbb{Z}$. Finalement $H \subset b\mathbb{Z}$ ; or $b \in H$ donc $b\mathbb{Z} \subset H$ (car $H$ est stable par $+$ et par $-$, tout élément $bq$ avec $q \geq 0$ est dans $H$ par stabilité par $+$, et si $q < 0$, $-bq \in H$ donc $bq \in H$). Donc $H = b\mathbb{Z}$.

</div>

### 4) Opérations sur les s-g

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

Toute intersection de sous-groupes est un sous-groupe.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $\mathcal{F}$ un ensemble de sous-groupes de $G$ et $H = \bigcap\_{F \in \mathcal{F}} F$. $H$ est non vide car $\forall F \in \mathcal{F}$, $1_G \in F$, donc $1_G \in H$. Soit $(x, y) \in H^2$ : pour tout $F \in \mathcal{F}$, $x \in F$ et $y \in F$, et comme $F$ est un sous-groupe, $x \* y^{-1} \in F$ ; donc $x \* y^{-1} \in H$ pour tout $F \in \mathcal{F}$, c'est-à-dire $x \* y^{-1} \in H$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

La somme de $n$ sous-groupes d'un groupe commutatif est un sous-groupe (commutatif).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Un sous-groupe d'un groupe commutatif est commutatif. Soient $H_1, \dots, H_n$ des sous-groupes de $(G, +)$ et

$$H = H_1 + \dots + H_n = \{ x \in G \mid x = x_1 + x_2 + \dots + x_n,\ \text{avec } x_i \in H_i \}$$

$0 \in H$ (prendre $x_i = 0$ pour tout $i$) : $H$ est non vide. Soient $x, y \in H$, $x = x_1 + \dots + x_n$, $y = y_1 + \dots + y_n$ :

$$x - y = (x_1 - y_1) + (x_2 - y_2) + \dots + (x_n - y_n) \in H$$

car $x_i - y_i \in H_i$ pour tout $i$. Donc $H$ est un sous-groupe de $(G, +)$.

</div>

## III. Morphismes de groupes

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soient $(G, \*)$ et $(G', \star)$ deux groupes et $f : G \to G'$ une application. $f$ est un **morphisme de groupes** si c'est un morphisme de magma $(G, \*)$ dans le magma $(G', \star)$.

</div>

Extension du vocabulaire : **endomorphisme**, **isomorphisme**, **automorphisme** de groupes.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $\varphi : (\mathbb{Z}, +) 	o (G, \*)$, $n \mapsto a^n$ (avec $a \in G$ fixé) : $\varphi(n + m) = a^{n+m} = a^n \* a^m$ ;
- $(\mathbb{C}, +) 	o (\mathcal{T}, \circ)$, $b \mapsto t_b$, où $\mathcal{T}$ est le groupe des translations du plan et $t_b$ la translation d'affixe $b$ : $t_b \circ t\_{b'} = t\_{b + b'}$, $(t_b)^{-1} = t\_{-b}$, $\mathrm{Id} = t_0$ ; $t_b$ correspond à la transformation $z \mapsto z + b$. $\varphi(a + b)$ est la transformation $z \mapsto z + (a + b) = (z + a) + b = (z + b) + a$, qui correspond à $t_b \circ t_a$. Soit $t_b$ une translation du plan, correspondant à $z \mapsto z + b$ : $b$ est un antécédent de $t_b$ par $\varphi$, et c'est le seul ;
- $\psi : (\mathbb{C}^\*, \cdot) \xrightarrow{\ \sim\ } (\mathcal{S}, \circ)$, $a \mapsto s$ similitude directe d'angle $\mathrm{Arg}\, a$ et de rapport $|a|$.

</div>

### 2) Propriétés des images par un morphisme de groupes

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

Si $f : G \to G'$ est un morphisme de groupes, alors :

$$f(1_G) = 1_{G'}, \qquad [f(x)]^{-1} = f(x^{-1}), \qquad \forall n \in \mathbb{Z},\ f(a^n) = (f(a))^n$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

- $f(x) \star f(1_G \* x) = f(x \* 1_G) = f(x) \star f(1_G) = f(1_G \* x) = 1\_{G'} \star f(x)$ ; comme $f(x) \in G'$ et que $G'$ est un groupe, $f(x)$ est régulier, donc $1\_{G'} = f(1_G)$ ;
- $f(x) \star f(x^{-1}) = f(x \* x^{-1}) = f(1_G) = 1\_{G'}$ et $f(x^{-1}) \star f(x) = f(x^{-1} \* x) = f(1_G) = 1\_{G'}$ : donc $f(x^{-1}) = [f(x)]^{-1}$ ;
- pour $n \geq 0$ : $n = 0$ et $n = 1$ sont OK ; pour $n \geq 2$, par récurrence, $f(a^{n+1}) = f(a^n \* a) = f(a^n) \star f(a) = (f(a))^n \star f(a) = (f(a))^{n+1}$ ;
- pour $n < 0$ : $f(a^n) = f\big((a^{-n})^{-1}\big) = \big[f(a^{-n})\big]^{-1} = \big[(f(a))^{-n}\big]^{-1} = (f(a))^n$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

L'image d'un sous-groupe $H$ de $G$ par un morphisme de groupes $f : G \to G'$ est un sous-groupe de $G'$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $H' = f(H)$. $H'$ est non vide car $1_G \in H$ et $f(1_G) = 1\_{G'}$. Soient $x', y' \in H'$ : $x' = f(x)$ avec $x \in H$ et $y' = f(y)$ avec $y \in H$ ; alors

$$x' \star y'^{-1} = f(x) \star f(y)^{-1} = f(x) \star f(y^{-1}) = f(x * y^{-1})$$

et $x \* y^{-1} \in H$ car $H$ est un sous-groupe, donc $x' \star y'^{-1} \in f(H) = H'$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Corollaire</span>

L'image de $G$ tout entier par le morphisme $f$ est un sous-groupe de $G'$, appelé **image** de $f$ et notée $\mathrm{Im}\, f$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 3</span>

Si $G$ est un groupe, $(G', \star)$ un magma et $f$ un isomorphisme du magma $(G, \*)$ dans $(G', \star)$, alors $G'$ est un groupe.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $y \in G'$ : $y = f(x)$ car $f$ est surjective. $f(1_G) \star f(x) = f(1_G \* x) = f(x)$ et $f(x) \star f(1_G) = f(x \* 1_G) = f(x)$ : $f(1_G)$ est neutre pour $G'$. Soient $x', y', z' \in G'$ avec $f(x) = x'$, $f(y) = y'$, $f(z) = z'$ :

$$x' \star (y' \star z') = f(x) \star \big(f(y) \star f(z)\big) = f\big(x * (y * z)\big) = f\big((x * y) * z\big) = \big(f(x) \star f(y)\big) \star f(z) = (x' \star y') \star z'$$

donc $\star$ est associative. Enfin, soit $x' = f(x) \in G'$ : $f(x^{-1}) \star f(x) = f(x^{-1} \* x) = f(1_G)$ et $f(x) \star f(x^{-1}) = f(x \* x^{-1}) = f(1_G)$ : $f(x^{-1})$ est le symétrique de $x'$. Donc $G'$ est un groupe.

</div>

### 3) Propriétés des images réciproques par un morphisme

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

L'image réciproque d'un sous-groupe $H'$ du groupe $G'$ par un morphisme de groupes $f : G \to G'$ est un sous-groupe de $G$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$f(1_G) = 1\_{G'}$ et $1\_{G'} \in H'$, donc $1_G \in f^{-1}(H')$. Soient $x, y \in G$ tels que $f(x) \in H'$ et $f(y) \in H'$ :

$$f(x * y^{-1}) = f(x) \star f(y)^{-1}$$

avec $f(x) \in H'$ et $f(y)^{-1} \in H'$, donc $f(x \* y^{-1}) \in H'$, c'est-à-dire $x \* y^{-1} \in f^{-1}(H')$ : $f^{-1}(H')$ est un sous-groupe de $G$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Corollaire (noyau)</span>

$f^{-1}(\{1\_{G'}\})$ est un sous-groupe de $G$, appelé **noyau** de $f$ et noté $\mathrm{Ker}\, f$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

Un morphisme de groupes $f$ est injectif si et seulement si $\mathrm{Ker}\, f = \{1_G\}$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

On a toujours $1_G \in \mathrm{Ker}\, f$ car $f(1_G) = 1\_{G'}$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

- Si $f$ est injective et $a \in \mathrm{Ker}\, f$ : $f(a) = 1\_{G'} = f(1_G)$, donc $a = 1_G$ car $f$ est injective ;
- si $\mathrm{Ker}\, f = \{1_G\}$ et $f(x) = f(y)$ : $f(x) \star [f(y)]^{-1} = 1\_{G'}$, donc $f(x \* y^{-1}) = 1\_{G'}$, soit $x \* y^{-1} \in \mathrm{Ker}\, f = \{1_G\}$ ; donc $x = y$ et $f$ est injective.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 3</span>

La composée de deux morphismes de groupes est un morphisme de groupes.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 4</span>

Les automorphismes d'un groupe $G$ forment un groupe, noté $\mathrm{Aut}(G)$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

C'est un sous-groupe de $\sigma(G)$ : $\mathrm{Id} \in H$ (où $H$ est l'ensemble des automorphismes de $G$), donc $H$ est non vide ; si $(f, g) \in H^2$, $g^{-1}$ est un isomorphisme car $g$ en est un, et $g^{-1} : G \to G$ est un automorphisme ; $f \circ g^{-1}$ est un automorphisme (composée de morphismes de groupes, de bijections).

</div>

## IV. Groupes engendrés

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $A$ une partie d'un groupe $G$ : il existe un plus petit sous-groupe (au sens de l'inclusion) de $G$ contenant $A$. On l'appelle **groupe engendré par $A$** et on le note $\mathrm{gr}\{A\}$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration (de l'existence)</span>

Soit $\mathcal{F} = \{ F \mid F \text{ sous-groupe de } G \text{ et } A \subset F \}$ ; $G \in \mathcal{F}$ donc $\mathcal{F}$ est non vide. Posons $H = \bigcap\_{F \in \mathcal{F}} F$ : $H$ est un sous-groupe (opérations sur les sous-groupes) ; pour tout $F \in \mathcal{F}$, $A \subset F$, donc $A \subset H$ : $H$ est un sous-groupe contenant $A$ ; enfin, si $F$ est un sous-groupe contenant $A$, alors $F \in \mathcal{F}$ donc $H \subset F$ : $H$ est le plus petit sous-groupe contenant $A$.

</div>

### 2) Caractérisation

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Caractérisation</span>

$$\mathrm{gr}(A) = \left\{ u_1 * u_2 * \dots * u_k \mid k \in \mathbb{N},\ u_i \in A \text{ ou } u_i^{-1} \in A \right\}$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Notons $H = \{ u_1 \* u_2 \* \dots \* u_k \mid k \in \mathbb{N},\ u_i \in A \text{ ou } u_i^{-1} \in A \}$. Si $a \in A$, alors $a \in H$ (prendre $k = 1$, $u_1 = a$) : $A \subset H$, et $H$ est non vide. Soient $x, y \in H$, $x = u_1 \* \dots \* u_k$, $y = v_1 \* \dots \* v_m$ :

$$x * y^{-1} = u_1 * \dots * u_k * \big(v_m^{-1} * v_{m-1}^{-1} * \dots * v_1^{-1}\big) = w_1 * \dots * w_{k+m}$$

avec, pour chaque $w_i$ : si $w_i = u_j$, $w_i \in A$ ou $w_i^{-1} \in A$ ; si $w_i = v_j^{-1}$, $v_j^{-1} \in A$ ou $(v_j^{-1})^{-1} = v_j \in A$ (car $v_j \in A$ ou $v_j^{-1} \in A$). Donc $x \* y^{-1} \in H$ : $H$ est un sous-groupe contenant $A$.

Soit $F$ un sous-groupe contenant $A$ : si $u \in A$, $u \in F$ ; si $u^{-1} \in A$, $u^{-1} \in F$ donc $u \in F$ (car $F$ est un sous-groupe) ; un produit $u_1 \* \dots \* u_k$ où $u_i \in A$ ou $u_i^{-1} \in A$ est donc un produit d'éléments de $F$, et il appartient à $F$ car $F$ est stable pour $\*$. Donc $H \subset F$.

</div>

### 3) Sous-groupes monogènes

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Un (sous-)groupe est **monogène** s'il est engendré par un singleton : $H = \mathrm{gr}\{a\}$. On note aussi $H = \mathrm{gr}(a)$, et

$$\mathrm{gr}(a) = \{ a^n \mid n \in \mathbb{Z} \}$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

Un sous-groupe monogène $H = \mathrm{gr}(a)$ est :

1) soit **infini**, et isomorphe à $\mathbb{Z}$ ;
2) soit **fini** de cardinal $n$, et alors $H = \{1, a, \dots, a^{n-1}\}$ avec $a^n = 1$ ; on dit alors que $H$ est **cyclique**.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $\varphi : (\mathbb{Z}, +) \to (H, \cdot)$, $n \mapsto a^n$, avec $H = \mathrm{gr}(a)$ : $\varphi$ est un morphisme de groupes, et il est surjectif d'après la description de $H$. $\mathrm{Ker}\, \varphi$ est un sous-groupe de $\mathbb{Z}$, donc de la forme $n\mathbb{Z}$ :

$$a^k = 1 \iff n \mid k$$

- si $n \neq 0$ : $\forall m \neq 0$, $a^m \neq 1$ ; si $n = 1$ : $H = \{1_G\}$ ;
- si $n \geq 2$ : montrons que $H = \{1, a, \dots, a^{n-1}\}$. Posons $H' = \{1, a, \dots, a^{n-1}\} \subset H$. Soit $b \in H$, $b = a^k$ avec $k \in \mathbb{Z}$ :
  - si $k = 0$ : $b = 1 \in H'$ ;
  - si $k > 0$ : $k = nq + r$ avec $0 \leq r < n$, donc $a^k = a^{nq + r} = a^r (a^n)^q = a^r \in H'$ (car $a^n = 1$) ;
  - si $k < 0$ : $-k > 0$ donc $a^{-k} \in H'$ ; il existe $r \in \{0, \dots, n-1\}$ tel que $a^{-k} = a^r$, et $a^{-r+n} = a^{-r} a^n = a^{-r}$ avec $-r + n \in \{1, \dots, n\}$ ; si $-r + n = n$, alors $a^k = a^n = 1 = a^0$ ; donc finalement $a^k \in H'$.

  Ainsi $H \subset H'$, donc $H = H'$.
- si $n = 0$ : $\varphi$ est injective, donc bijective : $\varphi$ est un isomorphisme de $(\mathbb{Z}, +)$ sur $H$, et $H$ est infini.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définitions</span>

- Si $G$ est un groupe fini de cardinal $n$, on dit que $G$ est **d'ordre $n$** ;
- on appelle **ordre d'un élément** $a$ (d'un groupe fini) l'ordre du sous-groupe engendré par $a$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

$a$ est d'ordre $n$ si et seulement si $n$ est le plus petit entier $k > 0$ (au sens de la divisibilité) qui vérifie $a^k = 1$, c'est-à-dire :

$$\begin{cases} a^n = 1 \\ a^k = 1 \Rightarrow n \mid k \end{cases}$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $a$ est d'ordre $n$ : $H = \mathrm{gr}(a) = \{1, a, \dots, a^{n-1}\}$ et $a^n = 1$ ; $\mathrm{Ker}\, \varphi = n\mathbb{Z}$ ; donc $a^k = 1 \iff n \mid k$.

Réciproquement, si $a^n = 1$ et $a^k = 1 \Rightarrow n \mid k$ : $\mathrm{Ker}\, \varphi = \{ k \in \mathbb{Z} \mid a^k = 1 \}$ ; si $n \mid k$, $k = nq$ et $a^k = (a^n)^q = 1$ car $a^n = 1$ ; finalement $a^k = 1 \iff n \mid k$, c'est-à-dire $\mathrm{Ker}\, \varphi = n\mathbb{Z}$, et d'après la proposition précédente $\mathrm{gr}(a)$ est d'ordre $n$.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Proposition 3 (théorème de Lagrange)</span>

Si $G$ est un groupe fini d'ordre $n$, l'ordre (le cardinal) d'un sous-groupe $H$ de $G$ divise $n$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $\mathcal{R}$ la relation sur $G$ définie par $x \mathcal{R} y \iff x^{-1} \* y \in H$. C'est une relation d'équivalence :

- $x^{-1} \* x = 1_G \in H$ car $H$ est un sous-groupe (réflexivité) ;
- si $x \mathcal{R} y$, alors $x^{-1} \* y \in H$, donc $(x^{-1} \* y)^{-1} = y^{-1} \* x \in H$ car $H$ est un sous-groupe : $y \mathcal{R} x$ (symétrie) ;
- si $x \mathcal{R} y$ et $y \mathcal{R} z$, alors $x^{-1} \* y \in H$ et $y^{-1} \* z \in H$, donc $(x^{-1} \* y) \* (y^{-1} \* z) = x^{-1} \* z \in H$ car $H$ est stable pour $\*$ (transitivité).

La classe de $x$ est :

$$C_x = \{ y \in G \mid x^{-1} * y \in H \} = \{ y \in G \mid y = x * h,\ h \in H \} = x * H = \{ x * h \mid h \in H \}$$

Soit $x$ fixé ; $\varphi_x : H 	o x \* H$, $h \mapsto x \* h$ est surjective (si $y \in xH$, $y = x \* h$ avec $h \in H$, et $h$ est un antécédent) et injective (si $x \* h_1 = x \* h_2$, alors $h_1 = h_2$ car $x$ est régulier) : $\varphi_x$ est bijective, donc $\mathrm{card}\, H = \mathrm{card}\, C_x$. Les classes $C_x$ forment une partition de $G$ ; en choisissant un représentant et un seul de chaque classe :

$$n = \mathrm{card}\, G = \sum_{C_x \in G/\mathcal{R}} \mathrm{card}(C_x) = \mathrm{card}\, H \times \mathrm{card}(G/\mathcal{R})$$

donc $\mathrm{card}\, H \mid n$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Corollaire</span>

L'ordre d'un élément divise l'ordre du groupe (prendre $H = \mathrm{gr}(a)$ dans Lagrange).

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples de groupes engendrés par une partie</span>

- Groupes monogènes : $\mathbb{Z}$ est engendré par $1$ ; $2\mathbb{Z} \cap 3\mathbb{Z}$ est engendré par $6$ (c'est $6\mathbb{Z}$) ; $\mathbb{U}\_n = \{ e^{2ik\pi/n} \mid k \in [\![0, n-1]\!] \}$ est cyclique, un générateur en est $e^{2i\pi/n}$ ; pour $n = 4$ : $i$ est un générateur de $\mathbb{U}\_4$, mais $-1$ n'en est pas un car $\mathrm{gr}\{-1\} = \{1, -1\}$ ; $-i$ est un générateur de $\mathbb{U}\_4$ ;
- le groupe des isométries (du plan) est engendré par les symétries, car toute isométrie s'écrit comme un produit de symétries ; si $a$ et $b$ sont deux éléments d'ordre $n$, l'application $\varphi : a^k \mapsto b^k$ est un isomorphisme de $\mathrm{gr}\{a\}$ sur $\mathrm{gr}\{b\}$.

</div>

## V. Anneaux et corps

### I. Structure d'anneau

#### 1) Définitions

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Un **anneau** est un triplet $(A, +, \times)$ où $+$, $\times$ sont des lois internes de $A$ vérifiant :

- $(A, +)$ est un groupe commutatif ;
- $(A, \times)$ est un magma associatif unitaire ;
- $\times$ est distributive par rapport à $+$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

$(\mathbb{Z}, +, \times)$, $(\mathbb{R}, +, \times)$, $(\mathbb{C}, +, \times)$, $(\mathcal{P}(E), \Delta, \cap)$.

Si de plus $\times$ est commutative, on dit que $A$ est un **anneau commutatif**.

</div>

#### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Règles de calcul</span>

- $\forall x \in A$, $x \times 0 = 0 \times x = 0$ ;
- $\forall (x, y) \in A^2$, $-(x \times y) = (-x) \times y = x \times (-y)$ et $(-x)(-y) = x \times y$ ;
- la multiplication est distributive (à gauche et à droite) par rapport à $+$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$y + 0 = y$, donc $x(y + 0) = xy$, c'est-à-dire $xy + x \times 0 = xy$ ; comme $xy$ est régulier pour $+$, on en déduit $x \times 0 = 0$. Ensuite, $y + (-y) = 0$ donne $x(y + (-y)) = x \times 0 = 0$, soit $xy + x(-y) = 0$ : donc $x(-y) = -(xy)$ ; de même $(-x)y = -(xy)$, d'où $(-x)(-y) = xy$.

Si $1 = 0$, alors $\forall x \in A$, $x = x \times 1 = x \times 0 = 0$, d'où $A = \{0\}$. **Dans toute la suite, $A \neq \{0\}$** (donc $1 
eq 0$).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2 (formule du binôme)</span>

Si $x$ et $y$ commutent, alors $\forall n \in \mathbb{N}^\*$ :

$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}$$

avec la convention $x^0 = 1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 3</span>

Si $x$ et $y$ commutent, alors $\forall n \geq 2$ :

$$x^n - y^n = (x - y)\left( x^{n-1} + x^{n-2} y + \dots + x y^{n-2} + y^{n-1} \right)$$

</div>

#### 3) Diviseurs de zéro

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Si $u$ et $v$ sont non nuls et tels que $u \times v = 0$, on dit que $u$ et $v$ sont des **diviseurs de zéro**.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Dans $A = (\mathcal{P}(E), \Delta, \cap)$ : si $B$ et $C$ sont deux parties disjointes non vides de $E$ (ce qui suppose $\mathrm{card}\, E \geq 2$), alors $B \cap C = \varnothing$, donc $B$ et $C$ sont des diviseurs de zéro.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

Si $a$ n'est pas un diviseur de zéro et $a \neq 0$, alors $a$ est **régulier** pour $\times$. De plus, $0$ n'est pas inversible.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $ax = ay$, alors $a(x - y) = 0$ ; comme $a \neq 0$ n'est pas diviseur de zéro, $x - y = 0$, soit $x = y$ : $a$ est régulier à gauche (idem pour la droite). Et $0$ n'est pas inversible car $\forall x \in A$, $x \times 0 = 0 \times x = 0$, avec $0 \neq 1$ puisque $A \neq \{0\}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

Un élément inversible est non nul et non diviseur de zéro.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $a$ est inversible et $ax = 0$, alors $(ax) a^{-1} = 0$, soit $x = 0$ : $x$ n'est pas diviseur de zéro.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (anneau intègre)</span>

On dit que $A$ est **intègre** si :

- $A$ est un anneau commutatif ;
- $A$ ne contient pas de diviseurs de zéro.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$(\mathbb{Z}, +, \times)$ est intègre.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Dans un anneau intègre, tout élément non nul est régulier.

</div>

### II. Structure de corps

#### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$(K, +, \times)$ est un **corps** si :

- $(K, +, \times)$ est un anneau commutatif ;
- tout élément non nul est inversible pour $\times$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- les éléments inversibles de $\mathbb{Z}$ sont $\{-1, 1\} = \mathbb{Z}^\*$ ;
- $(\mathbb{Q}, +, \cdot)$, $(\mathbb{R}, +, \cdot)$, $(\mathbb{C}, +, \cdot)$ sont des corps.

</div>

#### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

Un corps est un anneau intègre (car tout élément non nul y est inversible, donc non diviseur de zéro).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

$K^\*$ (l'ensemble des éléments inversibles de $K$) vaut $K \setminus \{0\}$, et $(K^\*, \times)$ est un groupe commutatif.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$(\mathbb{C}^\*, \cdot)$ est un groupe : $1 \in \mathbb{C}^\*$ car $1 \neq 0$ est neutre pour $\cdot$ ; $\cdot$ est associative ; tout élément de $\mathbb{C}^\*$ est inversible car $0 \notin \mathbb{C}^\*$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 3</span>

Tout anneau intègre fini est un corps.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $a \in K$, avec $(K, +, \times)$ anneau intègre fini, et $a \neq 0$. Considérons $\varphi_a : K \to K$, $x \mapsto a x$ : si $ax = ay$, alors $x = y$ car $K$ est intègre, donc $\varphi_a$ est injective ; comme $K$ est fini, $\varphi_a$ est bijective. Donc $1$ admet un antécédent : $\exists x \in K$, $ax = 1$ ; $K$ étant commutatif, $ax = xa = 1$ : $a$ est inversible.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 4</span>

Tout anneau inclus dans un corps est intègre.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $A \subset K$ : $\forall x, y \in A$, si $xy = 0$, alors $x = 0$ ou $y = 0$, car $xy = 0$ dans $K$, et $K$ n'admet pas de diviseurs de zéro.

</div>

### III. Sous-anneaux et sous-corps

#### 1) Définitions

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $(A, +, \times)$ un anneau (resp. $(K, +, \times)$ un corps) et $B \subset A$ (resp. $B \subset K$). $B$ est un **sous-anneau** (resp. un **sous-corps**) de $A$ (resp. de $K$) si :

- $1 \in B$ ;
- $+$, $\times$ s'induisent sur $B$ et $(B, +, \times)$ est un anneau (resp. un corps).

</div>

#### 2) Caractérisation

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Caractérisation</span>

$B$ est un sous-anneau de $A$ si et seulement si :

1) $B \subset A$ ;
2) $1_A \in B$ ;
3) $B$ est stable par $-$ et par $\times$.

$B$ est un sous-corps de $K$ si et seulement si 1), 2), 3) et de plus :

4) $\forall x \in B$, $x^{-1} \in B$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $B$ est un sous-anneau de $A$ : 1) est clair ; 2) par définition ; 3) $(B, +)$ est un groupe, donc un sous-groupe de $(A, +)$ : $\forall x, y \in B$, $x - y \in B$ ; et $B$ est stable par $\times$ puisque $\times$ s'induit sur $B$.

Réciproquement, si 1), 2), 3) : $(B, +)$ est un sous-groupe de $(A, +)$, donc un groupe ; $(B, \times)$ hérite de $A$ l'associativité, l'élément neutre $1_A \in B$ et la distributivité de $\times$ sur $+$ : $(B, +, \times)$ est un anneau.

</div>

#### 3) Opérations

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

- L'intersection de sous-anneaux est un sous-anneau ;
- l'intersection de sous-corps est un sous-corps.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $\mathcal{F}$ une famille de sous-anneaux de $A$ et $B = \bigcap\_{F \in \mathcal{F}} F$ : pour tout $F \in \mathcal{F}$, $1_A \in F$, donc $1_A \in B$.

</div>

### IV. Idéaux d'un anneau commutatif

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $A(+, \cdot)$ un anneau commutatif. Une partie $I$ de $A$ est un **idéal** de $A$ si :

- $(I, +)$ est un sous-groupe de $(A, +)$ ;
- $\forall a \in A,\ \forall x \in I,\quad a x \in I$ (et $x a x \in I$).

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Les idéaux de $\mathbb{Z}$ sont les $n\mathbb{Z}$ avec $n \in \mathbb{Z}$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $n \in \mathbb{N}$ fixé et $I = n\mathbb{Z}$ : c'est un sous-groupe de $\mathbb{Z}$. De plus, si $x \in I$ et $y \in \mathbb{Z}$, alors $y(nx) = n(xy)$, donc $y(nx) \in n\mathbb{Z}$. Réciproquement, tout idéal de $\mathbb{Z}$ est un sous-groupe de $\mathbb{Z}$ de la forme $n\mathbb{Z}$.

</div>

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- P1 : $\{0\}$ et $A$ sont deux idéaux de $A$ ;
- P2 : si $1_A \in I$, alors $I = A$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration (P2)</span>

Si $1_A \in I$ : $\forall a \in A,\ a \cdot 1_A = a \in I$, donc $A \subset I$ ; mais $I \subset A$, donc $I = A$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Les idéaux d'un corps $K$ sont $\{0\}$ et $K$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $I$ un idéal de $K$ tel que $I \neq \{0\}$ : il existe $x \in I$ tel que $x \neq 0$. Alors $x^{-1} \in K$ et, $I$ étant un idéal, $x^{-1} x = 1 \in I$ ; d'après P2, $I = K$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- P3 : l'intersection d'idéaux est un idéal ;
- P4 : la somme de $n$ idéaux est un idéal.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\*$ Soit $\mathcal{J}$ une famille d'idéaux de $A$ et $D = \bigcap\_{I \in \mathcal{J}} I$. Alors $D$ est un sous-groupe de $(A, +)$. Soit $a \in A$ et $x \in D$ : pour tout $I \in \mathcal{J}$, on a $x \in I$, et comme $I$ est un idéal, $a x \in I$ ; donc $a x \in \bigcap\_{I \in \mathcal{J}} I$, c'est-à-dire $a x \in D$ : $D$ est un idéal.

$\*\*$ Soient $I_1, \dots, I_n$ des idéaux de $A$ et $I = I_1 + I_2 + \dots + I_n$. C'est un sous-groupe de $(A, +)$ (somme de sous-groupes). Soit $a \in A$ et $x = x_1 + x_2 + \dots + x_n \in I$ (avec $x_i \in I_i$) :

$$a x = a x_1 + a x_2 + \dots + a x_n$$

et $a x_i \in I_i$ car $I_i$ est un idéal de $A$ ; donc $a x \in I$.

</div>

### 3) Idéaux principaux

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $x \in A$. La partie $I = xA = \{x a \mid a \in A\}$ est un idéal de $A$, appelé **idéal engendré par** $x$ ; c'est le plus petit idéal (au sens de $\subset$) contenant $x$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$(I, +)$ est un sous-groupe de $A$ ; $I \neq \varnothing$ car $x \in I$ (puisque $x = x \cdot 1$). Il est stable par $-$ : $x a - x b = x(a - b)$. Soit $y = x a \in I$ et $b \in A$ : par commutativité, $b y = b(x a) = x(a b) \in I$. Donc $I$ est un idéal de $A$.

Soit $\mathcal{J}$ un idéal contenant $x$ : $\forall a \in A,\ x a \in \mathcal{J}$, donc $I \subset \mathcal{J}$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définitions</span>

1. Un idéal $I$ est **principal** s'il est engendré par un élément $x \in A$ ($I = xA$) ; $x$ est un **générateur** de $I$.
2. Un anneau est **principal** s'il est intègre et si tout idéal est principal.

</div>

### V. Morphismes d'anneaux et de corps

### 1) Définitions

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (morphisme d'anneau)</span>

Soient $(A, +, \cdot)$ et $(B, +, \cdot)$ deux anneaux et $f : A \to B$. On dit que $f$ est un **morphisme d'anneau** si :

$$\forall x, y \in A^2,\quad f(x + y) = f(x) + f(y) \quad \text{et} \quad f(x \cdot y) = f(x) \cdot f(y)$$

et si de plus $f(1_A) = 1_B$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (morphisme de corps)</span>

Une application $f : K \to K'$ est un **morphisme de corps** si $K$ et $K'$ sont des corps et si $f$ est un morphisme de groupes pour $+$ et pour $\times$.

</div>

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété P1 (image directe)</span>

L'image directe d'un sous-anneau (resp. d'un corps) par un morphisme d'anneaux (resp. de corps) est un sous-anneau (resp. un sous-corps).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $f : A \to B$ un morphisme d'anneaux, $S$ un sous-anneau de $A$ et $T = f(S)$. Comme $1_A \in S$, on a $f(1_A) = 1_B \in T$. Soient $x', y' \in T$, avec $x' = f(x)$ et $y' = f(y)$ ($x, y \in S$) :

$$x' - y' = f(x) - f(y) = f(x - y), \qquad x' y' = f(x)\, f(y) = f(x y)$$

Or $x - y \in S$ et $x y \in S$ car $S$ est un sous-anneau : donc $x' - y' \in T$ et $x' y' \in T$. Ainsi $T$ est un sous-anneau de $B$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $x \in A$ est inversible dans l'anneau $A$, alors $f(x)$ est inversible dans $B$ et

$$f(x)^{-1} = f\big(x^{-1}\big)$$

En effet, $f(x x^{-1}) = f(1_A) = 1_B$, donc $f(x)\, f(x^{-1}) = 1_B$, et de même $f(x^{-1})\, f(x) = 1_B$ ; d'où $f(x)^{-1} = f(x^{-1})$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété P2 (image réciproque)</span>

L'image réciproque d'un sous-anneau (resp. d'un sous-corps) par un morphisme d'anneaux (resp. de corps) est un sous-anneau (resp. un sous-corps).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $f : A \to B$ un morphisme d'anneaux, $S$ un sous-anneau de $B$ et $T = f^{-1}(S)$. On a $f(1_A) = 1_B \in S$, donc $1_A \in T$. Soient $x, y \in T$ : alors $f(x), f(y) \in S$, donc $f(x) - f(y) = f(x - y) \in S$ et $f(x)\, f(y) = f(xy) \in S$, d'où $x - y \in T$ et $x y \in T$ : $T$ est un sous-anneau de $A$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété P3 (image réciproque d'un idéal)</span>

Si $A$ et $B$ sont des anneaux commutatifs, l'image réciproque d'un idéal $\mathcal{J}$ de $B$ par un morphisme d'anneau $f : A \to B$ est un idéal de $A$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Posons $I = f^{-1}(\mathcal{J})$ : $(I, +)$ est un sous-groupe de $A$. Soit $a \in A$ et $x \in I$ :

$$f(a x) = f(a) \cdot f(x)$$

avec $f(a) \in B$ et $f(x) \in \mathcal{J}$ ; comme $\mathcal{J}$ est un idéal, $f(a)\, f(x) \in \mathcal{J}$, donc $a x \in I$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire 1</span>

$\operatorname{Ker} f = \{x \in A \mid f(x) = 0\}$ (où $f$ est considérée comme morphisme de groupes) est un idéal de $A$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\operatorname{Ker} f = f^{-1}(\{0\})$ et $\{0\}$ est un idéal de $B$ : il suffit d'appliquer P3.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire 2</span>

Un morphisme de corps est **injectif**.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $f : K \to K'$ un morphisme de corps : $\operatorname{Ker} f$ est un idéal du corps $K$, c'est donc $\{0\}$ ou $K$. Or $f(1) = 1 \neq 0$, donc $\operatorname{Ker} f \neq K$ ; ainsi $\operatorname{Ker} f = \{0\}$ et $f$ est injectif.

</div>

## VI. Lois de composition (révisions)

### I. Lois de composition interne

#### 1) Définitions

Vocabulaire, pour une loi $\*$ sur un ensemble $E$ :

- **loi de composition interne** sur $E$ ;
- $(E, \*)$ est un **magma** ;
- $\*$ **commutative** ;
- **magma associatif** ;
- **magma unifère** (existence d'un élément neutre) ;
- élément **symétrisable** (puis **symétrique**) ;
- élément **régulier** ;
- **distributivité** (d'une loi par rapport à l'autre).

#### 2) Propriétés

1. unicité de l'élément neutre ;
2. unicité du symétrique si $(E, \*)$ est associatif et unifère ;
3. si $(E, \*)$ est associatif et unifère : $(x \* y)^{-1} = y^{-1} \* x^{-1}$ ;
4. si $(E, \*)$ est associatif et unifère, et si $x$ est symétrisable, alors $x$ est régulier.

#### 3) Loi de composition externe

- si $\*$ est stable sur une partie de $E$, c'est une loi de composition interne sur cette partie ;
- si $\*$ n'est pas stable : $\*$ est une opération de $A \times E \to E$, appelée **loi de composition externe**.

### III. Morphismes

- morphisme, isomorphisme (isomφ), endomorphisme (endomφ), automorphisme (automφ) ;
1. si $f^{-1}$ est un isomorphisme, alors $f$ est un isomorphisme ;
2. si $f$ et $g$ sont des morphismes, alors $f \circ g$ est un morphisme.

## VII. Groupes (révisions)

### I. Généralités

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définitions</span>

- **groupe** ;
- **groupe commutatif** (ou abélien).

</div>

#### 1) Calculs

1. $(x y)^{-1} = y^{-1} x^{-1}$ ;
2. **puissances** : pour tout $n \in \mathbb{Z}$,

$$a^{-n} = \big(a^{-1}\big)^n = \big(a^{n}\big)^{-1}, \qquad (a^{m})^{n} = a^{mn}, \qquad a^{n} * a^{m} = a^{n+m}$$

#### 2) Propriétés

1. $\forall x \in G$, $x$ est régulier ;
2. si $G = G_1 \times G_2 \times \dots \times G_n$ avec $(G_i, \times_i)$ des groupes, alors $(G, \times)$ est un groupe pour

$$\times : \big((x_1, \dots, x_n), (y_1, \dots, y_n)\big) \longmapsto (x_1 y_1, \dots, x_n y_n)$$

### II. Sous-groupes

#### 1) Définition et critères

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$H$ est un **sous-groupe** de $G$ si $H$ est un groupe pour la loi induite et si $H$ est non vide.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Critères</span>

$H$ est un sous-groupe de $G$ si et seulement si :

- $H$ non vide, $\forall (x, y) \in H^2,\ x \* y \in H$ et $\forall x \in H,\ x^{-1} \in H$ ;
- ou encore : $H$ non vide et $\forall (x, y) \in H^2,\ x \* y^{-1} \in H$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Les $n\mathbb{Z}$ sont les sous-groupes de $\mathbb{Z}$.

</div>

#### 2) Opérations sur les sous-groupes

- l'intersection de deux sous-groupes est un sous-groupe ;
- la somme de sous-groupes commutatifs d'un groupe commutatif est un sous-groupe commutatif.

### III. Morphismes de groupe

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définitions</span>

- **morphisme de groupe** ;
- **endomorphisme**, **isomorphisme**, **automorphisme** de groupe.

</div>

#### 2) Propriétés de l'image directe par un morphisme de groupe

Soient $G, G'$ des groupes et $f : G \to G'$ un morphisme de groupe :

1. $f(e) = e'$ ;
2. $\big[f(x)\big]^{-1} = f\big(x^{-1}\big)$ ;
3. $\forall n \in \mathbb{Z},\ f\big(a^{n}\big) = f(a)^{n}$ ;
4. l'image d'un sous-groupe $H$ de $G$ par $f$ est un sous-groupe de $G'$ ;
5. l'image de $G$ par $f$ est un sous-groupe de $G'$, notée $\operatorname{Im} f$ ;
6. si $G$ est un groupe, si $(G', \tau)$ est un magma et si $f$ est un isomorphisme de $(G, \times)$ dans $(G', \tau)$, alors $G'$ est un groupe.

#### 3) Propriétés de l'image réciproque par un morphisme de groupe

1. l'image réciproque d'un sous-groupe $H'$ de $G'$ par un morphisme de groupe $f : G \to G'$ est un sous-groupe de $G$ ; en particulier, $f^{-1}(\{e'\})$ est un sous-groupe de $G$, appelé **noyau** de $f$ et noté $\operatorname{Ker} f$ ;
2. $f$ morphisme de groupe : $f$ est injectif $\iff \operatorname{Ker} f = \{e\}$ ;
3. la composée de deux morphismes de groupe est un morphisme de groupe ;
4. les automorphismes d'un groupe $G$ forment un groupe, noté $\operatorname{Aut}(G)$.

### IV. Groupes engendrés — sous-groupes monogènes — ordre

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (groupe engendré)</span>

$$\operatorname{gr}(A) = \big\{ u_1 u_2 \dots u_k \mid k \in \mathbb{N},\ u_i \in A \text{ ou } u_i^{-1} \in A \big\}$$

et, si les $A_i$ sont des sous-groupes d'un groupe commutatif $G$ :

$$\operatorname{gr}\Big(\bigcup_{i \in I} A_i\Big) = \big\{ x_1 x_2 \dots x_n \mid x_i \in A_i \big\}$$

</div>

#### 3) Sous-groupes monogènes et ordre

- un sous-groupe (ou un groupe) est **monogène** s'il est engendré par un seul élément ;
- un groupe monogène est soit infini, donc isomorphe à $\mathbb{Z}$, soit fini et de cardinal $n$, donc **cyclique** ;
- on appelle **ordre d'un groupe**, **ordre d'un élément** le cardinal (s'il est fini) ;
- si $a$ est d'ordre $n$ : $a^{k} = e \iff n \mid k$ ;
- si $G$ est un groupe fini d'ordre $n$ : l'ordre de tout sous-groupe de $G$ divise $n$, et l'ordre de tout élément divise $n$.

## VIII. Exercices — feuille n° 8

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 8 — Anneaux, Corps (énoncés)</span>

<ol class="enonces">
<li>On munit $\mathbb{R}^2$ des lois
$$(a, b) + (a', b') = (a + a',\, b + b') \qquad (a, b) \cdot (a', b') = (a a',\, a b' + a' b)$$
<ol>
<li>Montrer que l'on obtient un anneau commutatif. Préciser l'élément unité.</li>
<li>Trouver les diviseurs de zéro.</li>
</ol>
</li>
<li>Prouver que $\mathbb{Z}$ et $\mathbb{Z}^2$ ne sont pas isomorphes.</li>
<li>Soit $\mathbb{R}^{\mathbb{N}}$, l'ensemble des suites réelles, muni des lois internes $+$ et $\times$ usuelles :
$(u_n) + (v_n) = (u_n + v_n)$ et $(u_n) \cdot (v_n) = (u_n \cdot v_n)$.
<ol>
<li>Prouver que $A$ est un anneau commutatif et trouver ses diviseurs de zéro.</li>
<li>Soit $B$ la partie de $A$ formée des suites bornées et $C$ celle formée des suites convergentes vers $0$. $B$ et $C$ sont-ils des sous-anneaux de $A$ ? $B$ et $C$ sont-ils des idéaux de $A$ ? Montrer que $C$ est un idéal de $B$. $C$ est-il principal ?</li>
</ol>
</li>
<li>Soit $A = \{x + y\sqrt{10} \mid x, y \in \mathbb{Z}\}$.
<ol>
<li>Montrer que $A$ est un anneau commutatif.</li>
<li>Montrer que $A$ est intègre.</li>
<li>Montrer que $I = \{2x + y\sqrt{10} \mid x, y \in \mathbb{Z}\}$ est un idéal de $A$. Est-il principal ?</li>
</ol>
</li>
<li>Soit $A$ un anneau. On dit que $x \in A$ est **nilpotent** s'il existe $n \in \mathbb{N}$ tel que $x^n = 0$.
<ol>
<li>Montrer que si $(xy)$ est nilpotent, alors $(yx)$ aussi.</li>
<li>On suppose que $x$ et $y$ commutent et que $x, y$ sont nilpotents ; montrer que $x + y$ et $xy$ sont nilpotents.</li>
<li>On suppose que $A$ est intègre. Montrer que $1 - x$ est inversible.</li>
</ol>
</li>
<li>Soit $A$ un anneau intègre et $(I_n)$ une suite croissante (pour l'inclusion) d'idéaux.
<ol>
<li>Soit $I = \bigcup\_{n \in \mathbb{N}} I_n$. Montrer que $I$ est un idéal.</li>
<li>On suppose que $A$ est principal. Montrer que la suite $(I_n)$ est stationnaire.</li>
</ol>
</li>
<li>On munit $\mathbb{R}^2$ des lois
$$(a, b) + (a', b') = (a + a',\, b + b') \qquad (a, b) \cdot (a', b') = (a a' + m\, b b',\, a b' + a' b)$$
Pour quelles valeurs de $m$ ces lois définissent-elles une structure de corps sur $\mathbb{R}^2$ (resp. sur $\mathbb{Q}^2$) ?</li>
<li>Soit $A$ un anneau commutatif. Montrer que $A$ est un corps si et seulement si les seuls idéaux de $A$ sont $\{0\}$ et $A$.</li>
<li>Soit $r$ un rationnel $> 0$ tel que $\sqrt{r} \notin \mathbb{Q}$. On note $\mathbb{Q}(\sqrt{r}) = \{a + b\sqrt{r} \mid (a, b) \in \mathbb{Q}^2\}$.
<ol>
<li>Montrer que $\mathbb{Q}(\sqrt{r})$ est un corps pour les lois usuelles de $\mathbb{Q}$.</li>
<li>$\mathbb{Q}(\sqrt{2})$ et $\mathbb{Q}(\sqrt{3})$ sont-ils isomorphes ?</li>
</ol>
</li>
<li>Un **anneau de Boole** est un anneau $(A, +, \times)$ qui vérifie $\forall x \in A,\ x^2 = x$.
<ol>
<li>Donner un exemple d'anneau de Boole.</li>
<li>Montrer que $x + x = 0$. En déduire que $A$ est commutatif.</li>
<li>On suppose que $A$ a au moins 3 éléments. Montrer que $A$ n'est pas intègre.</li>
<li>Soit $I$ un idéal premier (c'est-à-dire $I \neq A$ et $\forall x, y \in A,\ xy \in I \Rightarrow x \in I \text{ ou } y \in I$). Montrer que si $J$ est un idéal tel que $I \subset J \subset A$, alors $J = I$ ou $J = A$ ($I$ est maximal).</li>
</ol>
</li>
</ol>

</div>
