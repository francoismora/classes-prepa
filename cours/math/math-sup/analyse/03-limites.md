---
layout: chapitre
title: "Limites"
numero: 3
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Analyse"
source: "Math/Math Sup/Analyse/03 Limites"
pages: 50
---

## I. Définition

Contexte : $f : A \subset \bar{\mathbb{R}} \to \bar{\mathbb{R}}$, $f$ définie sur $A$, $x_0 \in \bar{A}$ considéré comme point de $\bar{\mathbb{R}}$.

Cas $x \mapsto \frac{1}{x}$ : $\mathbb{R}&#95;+^&#42; \to \mathbb{R}$ ; on prend $x_0$ dans $\bar{\mathbb{R}} = [0, +\infty]$.

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $f(x)$ tend vers $l \in \bar{\mathbb{R}}$ quand $x$ tend vers $x_0$ dans $A$ ssi

$$\forall V \in \mathcal{V}(l), \exists U \in \mathcal{V}(x_0), \forall x \in A \ (x \in U \Rightarrow f(x) \in V)$$

</div>

Différents cas :

- $x_0 \in \mathbb{R}$, $l \in \mathbb{R}$ :

$$\forall \varepsilon > 0, \exists \alpha > 0, \forall x \in A, \quad &#124;x - x_0&#124; \le \alpha \Rightarrow &#124;f(x) - l&#124; \le \varepsilon$$

- $x_0 \in \mathbb{R}$, $l = +\infty$ :

$$\forall b \in \mathbb{R}, \exists \alpha > 0, \forall x \in A, \quad &#124;x - x_0&#124; < \alpha \Rightarrow f(x) > b$$

- $x_0 = +\infty$, $l \in \mathbb{R}$ :

$$\forall \varepsilon > 0, \exists b \in \mathbb{R}, \forall x \in A, \ (x > b \Rightarrow &#124;f(x) - l&#124; \le \varepsilon)$$

- $x_0 = +\infty$, $l = +\infty$ :

$$\forall b \in \mathbb{R}, \exists \alpha \in \mathbb{R}, \forall x \in A, \ (x > \alpha \Rightarrow f(x) > b)$$

Notation : $\lim\limits&#95;{x \to x_0,\ x \in A} f(x)$.

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1 (unicité de la limite)</span>

Si $f(x)$ admet une limite quand $x$ tend vers $x_0$ (en restant dans $A$), alors la limite est unique.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Lemme</span>

Si $\ell, \ell' \in \bar{\mathbb{R}}$ et $\ell \neq \ell'$, alors il existe deux voisinages disjoints de $\ell$ et $\ell'$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Supposons $\ell < \ell'$. Posons

$$V = \left]-\infty, \ell + \frac{\ell'-\ell}{2}\right[, \quad V' = \left]\ell + \frac{\ell'-\ell}{2}, +\infty\right[$$

$V \in \mathcal{V}(\ell)$, $V' \in \mathcal{V}(\ell')$ et $V \cap V' = \emptyset$.

Supposons que $\lim\limits&#95;{x \to x_0,\ x \in A} f(x) = \ell$ et $\lim\limits&#95;{x \to x_0,\ x \in A} f(x) = \ell'$ avec $\ell \neq \ell'$ :

$$\exists U \in \mathcal{V}(x_0), \forall x \in A \ (x \in U \Rightarrow f(x) \in V)$$

$$\exists U' \in \mathcal{V}(x_0), \forall x \in A \ (x \in U' \Rightarrow f(x) \in V')$$

Posons $U'' = U \cap U'$ ; c'est un voisinage de $x_0$ :

- si $x_0 \in \mathbb{R}$ : $\exists \varepsilon > 0$, $]x_0-\varepsilon, x_0+\varepsilon[ \subset U$ et $\exists \varepsilon' > 0$, $]x_0-\varepsilon', x_0+\varepsilon'[ \subset U'$ ; avec $\varepsilon'' = \min(\varepsilon, \varepsilon')$, $]x_0-\varepsilon'', x_0+\varepsilon''[ \subset U''$ ;
- si $x_0 = +\infty$ : $\exists b \in \mathbb{R}$, $]b, +\infty[ \subset U$ et $\exists b' \in \mathbb{R}$, $]b', +\infty[ \subset U'$ ; avec $b'' = \max(b, b')$, $]b'', +\infty[ \subset U''$.

Ainsi $\forall x \in A,\ x \in U'' \Rightarrow f(x) \in V \cap V' = \emptyset$, ce qui est impossible car $U'' \cap A \neq \emptyset$ (car $x_0 \in \bar{A}$ et tout voisinage de $x_0$ rencontre $A$).

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Complément du cours</span>

$\ell \in \mathbb{R}$, $x_0 \in \mathbb{R}$ :

1) $\forall V \in \mathcal{V}(\ell), \exists U \in \mathcal{V}(x_0), \quad f(A \cap U) \subset V$

2) $\forall \varepsilon > 0, \exists \alpha > 0, \quad &#124;x - x_0&#124; \le \alpha \Rightarrow &#124;f(x) - \ell&#124; \le \varepsilon$

1) équivaut à 2) : $\forall V \in \mathcal{V}(\ell) \Leftrightarrow \exists \varepsilon > 0, \left]\ell-\varepsilon, \ell+\varepsilon\right[ \subset V$.

Soit $\varepsilon > 0$ : $\left]\ell-\varepsilon, \ell+\varepsilon\right[ \in \mathcal{V}(\ell)$, donc $\exists U \in \mathcal{V}(x_0)$ tel que $f(A \cap U) \subset \left]\ell-\varepsilon, \ell+\varepsilon\right[$, d'où $\exists \alpha > 0$, $]x_0-\alpha, x_0+\alpha[ \subset U$ et $\forall x \in A$, $&#124;x - x_0&#124; < \alpha \Rightarrow x \in U \cap A \Rightarrow &#124;f(x) - \ell&#124; < \varepsilon$.

Réciproquement (2) vers 1) : soit $V \in \mathcal{V}(\ell)$ et $\varepsilon > 0$ tel que $\left]\ell-\varepsilon, \ell+\varepsilon\right[ \subset V$ ; $\exists \alpha > 0$, $&#124;x - x_0&#124; < \alpha \Rightarrow &#124;f(x) - \ell&#124; \le \varepsilon$ ; pour $U = \left]x_0-\alpha, x_0+\alpha\right[$ on a $f(A \cap U) \subset \left]\ell-\varepsilon, \ell+\varepsilon\right[ \subset V$.

De même, pour $\ell = +\infty$ : 1) équivaut à 3) $\forall b \in \mathbb{R}, \exists \alpha > 0, \forall x \in A \cap \left]x_0-\alpha, x_0+\alpha\right[,\ f(x) > b$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $f(x) \to \ell$ ($x \to x_0$, $x \in A$) alors $\ell \in \overline{f(A)}$ (adhérence de $f(A)$ dans $\bar{\mathbb{R}}$).

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Il faut démontrer que $\forall V \in \mathcal{V}(\ell),\ V \cap f(A) \neq \emptyset$.

Or $\forall V \in \mathcal{V}(\ell), \exists U \in \mathcal{V}(x_0), \forall x \in A \ (x \in U \Rightarrow f(x) \in V)$, c'est-à-dire $f(A \cap U) \subset V$.

Comme $x_0 \in \bar{A}$, $A \cap U \neq \emptyset$, donc $f(A \cap U) \neq \emptyset$ et $f(A \cap U) \subset V \cap f(A)$, d'où $V \cap f(A) \neq \emptyset$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3 (caractérisation séquentielle)</span>

$f(x) \to \ell$ ($x \to x_0$, $x \in A$) ssi pour toute suite $(x_n)$ telle que $x_n \in A$ et $x_n \to x_0$ ($n \to +\infty$), alors $f(x_n) \to \ell$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

On suppose $\lim\limits&#95;{x \to x_0,\ x \in A} f(x) = \ell$ ; cas $\ell \in \mathbb{R}$, $x_0 \in \mathbb{R}$ :

$$\forall \varepsilon > 0, \exists \alpha > 0, \forall x \in A, \quad &#124;x - x_0&#124; < \alpha \Rightarrow &#124;f(x) - \ell&#124; \le \varepsilon \quad (1)$$

Soit $(x_n)$ avec $x_n \in A$ et $x_n \to x_0$ :

$$\forall \varepsilon' > 0, \exists N \in \mathbb{N}, \forall n \geq N, \quad &#124;x_n - x_0&#124; < 
\varepsilon' \quad (2)$$

Soit $\varepsilon > 0$ et $\alpha$ associé à $\varepsilon$ dans (1). Appliquons (2) avec $\varepsilon' = \alpha$ : $\exists N \in \mathbb{N}, \forall n \geq N, &#124;x_n - x_0&#124; \le \alpha$, donc $\exists N \in \mathbb{N}, \forall n \geq N, &#124;f(x_n) - \ell&#124; \le \varepsilon$ : $f(x_n) \to \ell$ ($n \to +\infty$).

Réciproquement, supposons que $f(x)$ ne tende pas vers $\ell$ en $x_0$ : $\exists V \in \mathcal{V}(\ell), \forall U \in \mathcal{V}(x_0), \exists x \in A \cap U$ tel que $f(x) \notin V$.

Si $x_0 \in \mathbb{R}$ : pour $U_n = \left]x_0 - \frac{1}{n}, x_0 + \frac{1}{n}\right[$, $\exists x_n \in A \cap U_n$ tel que $f(x_n) \notin V$ ; or $x_n \to x_0$, donc par hypothèse $f(x_n) \to \ell$, en particulier $\forall n \geq N,\ f(x_n) \in V$ pour un certain rang — contradiction.

</div>

Application : ce théorème sert surtout à montrer qu'il n'y a pas de limite. Si $x_n \to x_0$, $y_n \to x_0$ ($n \to +\infty$) et si $f(x_n) \to \ell$, $f(y_n) \to \ell'$ avec $\ell \neq \ell'$, alors $f$ n'admet pas de limite en $x_0$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$\sin \frac{1}{x}$ n'a pas de limite en $0$ :

- $x_n = \left(\frac{\pi}{2} + 2n\pi\right)^{-1}$ : $x_n \to 0$ et $\sin \frac{1}{x_n} = 1 \to 1$ ;
- $y_n = (n\pi)^{-1}$ : $y_n \to 0$ et $\sin \frac{1}{y_n} = 0 \to 0$.

</div>

### 3) Limites à gauche et à droite

Soit $f : A \subset \bar{\mathbb{R}} \to \bar{\mathbb{R}}$ ; soit $x_0 \in A \cap \left]-\infty, +\infty\right[$ ; soit $\ell \in \bar{\mathbb{R}}$.

$f(x)$ tend vers $\ell$ à droite quand $x$ tend vers $x_0$ ssi

$$\lim\limits&#95;{x \to x_0,\ x \geq x_0,\ x \in A \cap \left]x_0, +\infty\right[} f(x) = \ell$$

On note aussi $\lim\limits&#95;{x \to x_0,\ x > x_0,\ x \in A} f(x)$, ou $f(x_0 + 0)$.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$f : A \subset \bar{\mathbb{R}} \to \bar{\mathbb{R}}$, $\ell \in \bar{\mathbb{R}}$, $x_0 \in \left]-\infty, +\infty\right[ \cap \bar{A}$ : $f$ tend vers $\ell$ à gauche quand $x$ tend vers $x_0$ ssi

$$\lim\limits&#95;{x \to x_0,\ x < x_0,\ x \in A \cap \left]-\infty, x_0\right[} f(x) = \ell$$

Notation : $\lim\limits&#95;{x \to x_0,\ x < x_0,\ x \in A} f(x) = \ell$, ou $f(x_0 - 0)$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$E$ (partie entière) :

- $\lim\limits&#95;{x \to n,\ x \in \mathbb{Z}} E(x)$ n'existe pas ;
- $\lim\limits&#95;{x \to n,\ x > n} E(x) = n$ ;
- $\lim\limits&#95;{x \to n,\ x < n} E(x) = n - 1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$f : A \subset \bar{\mathbb{R}} \to \bar{\mathbb{R}}$, $x_0 \in \bar{A}$, $\ell \in \mathbb{R}$ :

$$f(x) \to \ell \ (x \to x_0,\ x \in A) \Leftrightarrow f(x) \text{ admet une limite à droite et à gauche en } x_0 \text{ et } f(x_0+0) = f(x_0-0)$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque importante</span>

Si $x_0 \in A$ et $f(x) \to \ell$ ($x \to x_0$, $x \in A$) alors $\ell = f(x_0)$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

On prend la suite constante $x_n = x_0$ : $x_n \in A$, $x_n \to x_0$ et $f(x_n) = f(x_0) \to \ell$, donc $f(x_0) = \ell$.

Exemple : $A = [a,b]$, $x_0 = a$ : $\lim\limits&#95;{x \to a,\ x \in A} f(x) = f(a)$ (limite non décalée) ; par contre $\lim\limits&#95;{x \to 0,\ x > 0} \frac{1}{x}$ n'existe pas (alors que la limite à droite en un point intérieur existe dès que...).

</div>

### 4) Composition des limites

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème (composition des limites)</span>

Si $f : A \subset \bar{\mathbb{R}} \to \bar{\mathbb{R}}$, $\ell \in \bar{\mathbb{R}}$, $g : B \subset \bar{\mathbb{R}} \to \bar{\mathbb{R}}$, $m \in \bar{\mathbb{R}}$, $x_0 \in \bar{A}$, et si

1) $\lim\limits&#95;{x \to x_0,\ x \in A} f(x) = \ell$ ;

2) $f(A) \subset B$ (et $\ell \in \bar{B}$) ;

3) $\lim\limits&#95;{y \to \ell,\ y \in B} g(y) = m$ ;

alors $g \circ f(x) \to m$ ($x \to x_0$, $x \in A$).

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $V \in \mathcal{V}(m)$. $g(y) \to m$ ($y \to \ell$, $y \in B$) signifie : $\forall V' \in \mathcal{V}(m), \exists U' \in \mathcal{V}(\ell),\ g(U' \cap B) \subset V'$.

En posant $V' = V$ : $\exists U \in \mathcal{V}(\ell),\ g(U \cap B) \subset V$.

$f(x) \to \ell$ ($x \to x_0$, $x \in A$) signifie : $\forall V' \in \mathcal{V}(\ell), \exists U' \in \mathcal{V}(x_0)$ tel que $f(U' \cap A) \subset V'$.

Pour $V' = U$ : $\exists W \in \mathcal{V}(x_0),\ f(W \cap A) \subset U$.

Alors $g \circ f(W \cap A) = g(f(W \cap A))$ et $f(W \cap A) \subset f(A) \subset B$, donc $f(W \cap A) \subset U \cap B$ et $g \circ f(W \cap A) \subset g(U \cap B) \subset V$.

</div>

## II. Ordre et limite

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Si $f : A \subset \bar{\mathbb{R}} \to \bar{\mathbb{R}}$ avec $f(x) \to l$ ($x \to x_0$, $x \in A$) et $g : A \subset \bar{\mathbb{R}} \to \bar{\mathbb{R}}$ avec $g(x) \to m$ ($x \to x_0$, $x \in A$), et si $l < m$, alors

$$\exists U \in \mathcal{V}(x_0), \forall x \in U \cap A, \ f(x) < g(x)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Dans le cas $l \in \mathbb{R}$, $m \in \mathbb{R}$ : prenons $V = \left]l - \frac{m-l}{2}, l + \frac{m-l}{2}\right[ \in \mathcal{V}(l)$.

$f(x) \to l$ : $\exists U \in \mathcal{V}(x_0)$ tel que $f(A \cap U) \subset V$.

Prenons $V' = \left]m - \frac{m-l}{2}, m + \frac{m-l}{2}\right[ \in \mathcal{V}(m)$ ; $g(x) \to m$ : $\exists U' \in \mathcal{V}(x_0),\ g(A \cap U') \subset V'$.

$U'' = U \cap U' \in \mathcal{V}(x_0)$ et $\forall x \in A \cap U''$ : $f(x) \in V$ donc $f(x) < \frac{m+l}{2}$, et $g(x) \in V'$ donc $g(x) > \frac{m+l}{2}$. D'où $f(x) < g(x)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $f(x) \to l > 0$ ($x \to x_0$, $x \in A$) alors il existe un voisinage de $x_0$ sur lequel $f(x) > 0$.

</div>

(1ʳᵉ application de la propriété 1 avec $f$ et $g$ la fonction nulle.)

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $f(x) \to l$ ($x \to x_0$, $x \in A$), $g(x) \to m$ ($x \to x_0$, $x \in A$) et si $\exists U \in \mathcal{V}(x_0), \forall x \in U \cap A,\ f(x) \le g(x)$, alors $l \le m$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $l > m$, d'après la propriété 1 (avec $g$ et $f$ échangés) $\exists U' \in \mathcal{V}(x_0), \forall x \in A \cap U',\ g(x) < f(x)$.

Or $U \cap U' \in \mathcal{V}(x_0)$ et $x_0 \in \bar{A}$ donc $A \cap U \cap U' \neq \emptyset$ ; pour $x$ dans cette intersection on a $f(x) \le g(x)$ et $f(x) > g(x)$ — absurde.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Corollaire</span>

Dans le cas de l'hypothèse de la propriété 2, si $l = +\infty$ alors $g(x) \to +\infty$ quand $x \to x_0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3 (théorème des gendarmes)</span>

Soit $f, g, h : A \subset \bar{\mathbb{R}} \to \mathbb{R}$, $x_0 \in \bar{A}$. Si $f(x) \to l$ ($x \to x_0$, $x \in A$) et $g(x) \to l$ ($x \to x_0$, $x \in A$) et si enfin $\forall x \in A,\ f(x) \le h(x) \le g(x)$, alors $h(x) \to l$ ($x \to x_0$, $x \in A$).

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Cas $l \in \mathbb{R}$. Soit $\varepsilon > 0$ et $V = \left]l-\varepsilon, l+\varepsilon\right[ \in \mathcal{V}(l)$.

$f(x) \to l$ : $\exists U \in \mathcal{V}(x_0),\ f(A \cap U) \subset V$ ; $g(x) \to l$ : $\exists U' \in \mathcal{V}(x_0),\ g(A \cap U') \subset V$.

$U'' = U \cap U' \in \mathcal{V}(x_0)$ et $\forall x \in A \cap U''$ : $f(x) \in \left]l-\varepsilon, l+\varepsilon\right[$, $g(x) \in \left]l-\varepsilon, l+\varepsilon\right[$, donc $h(x) \in \left]l-\varepsilon, l+\varepsilon\right[$.

Ainsi $\forall \varepsilon > 0, \exists U'' \in \mathcal{V}(x_0), \forall x \in A \cap U'',\ h(x) \in \left]l-\varepsilon, l+\varepsilon\right[$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 4</span>

Si $f(x) \to l$ ($x \to x_0$, $x \in A$) alors $&#124;f(x)&#124; \to &#124;l&#124;$ ($x \to x_0$, $x \in A$).

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

La réciproque est fausse sauf si $l = 0$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

1ʳᵉ méthode : $\big&#124;&#124;f(x)&#124; - &#124;l&#124;\big&#124; \le &#124;f(x) - l&#124;$.

2ᵉ méthode : soit $x_n \to x_0$ avec $x_n \in A$ ; $f(x_n) \to l$ car $f(x) \to l$ ($x \to x_0$), donc &#124;f(x_n)&#124; \to &#124;l&#124; d'après la caractérisation séquentielle.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Propriété 5 (théorème de la limite monotone)</span>

Soit $f : \left]a,b\right[ \to \mathbb{R}$, $f$ croissante. Alors $f(x)$ admet une limite quand $x$ tend vers $b$ et cette limite vaut

$$l = \sup\&#92;&#123; f(x) \mid x \in \left]a,b\right[ &#92;&#125;$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $f$ n'est pas majorée dans $\mathbb{R}$, $l = +\infty$. Sinon $l \in \mathbb{R}$ (car $\&#92;&#123; f(x) \mid x \in \left]a,b\right[ &#92;&#125;$ est majorée non vide, donc admet une borne sup dans $\mathbb{R}$).

On utilisera la propriété selon :

- $f$ est majorée sur $\left]a,b\right[$ alors $f$ admet une limite finie quand $x$ tend vers $b$ et celle-ci vaut $\sup\limits&#95;{x \in \left]a,b\right[} f(x)$ ;
- $f$ est non majorée sur $\left]a,b\right[$ alors $f(x) \xrightarrow[x \to b]{} +\infty$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**1ᵉʳ cas** : $l \in \mathbb{R}$. On veut démontrer

$$\forall \varepsilon > 0, \exists V \in \mathcal{V}(b), \forall x \in \left]a,b\right[,\ x \in V \Rightarrow &#124;f(x) - l&#124; \le \varepsilon$$

$l = \sup\limits&#95;{x \in \left]a,b\right[} f(x)$ donc $\forall \varepsilon > 0, \exists x_1 \in \left]a,b\right[$ tel que $l - \varepsilon < f(x_1) < l$.

$f$ croissante donc $\forall x \geq x_1$ : $l - \varepsilon < f(x_1) \le f(x) \le l$, d'où $&#124;f(x) - l&#124; \le \varepsilon$.

- si $b \in \mathbb{R}$ : $\left]x_1, b+1\right[$ est un voisinage de $b$ et $\forall x \in \left]x_1, b+1\right[ \cap \left]a,b\right[$, $&#124;f(x) - l&#124; < \varepsilon$ ;
- si $b = +\infty$ : $\forall x \geq x_1$, $&#124;f(x) - l&#124; < \varepsilon$.

Dans les deux cas $f(x) \to l$ ($x \to b$).

**2ᵉ cas** : $l = +\infty$. On veut montrer $\forall C \in \mathbb{R}, \exists \alpha > 0, \forall x \in \left]a,b\right[,\ &#124;x - b&#124; < \alpha \Rightarrow f(x) > C$.

$f$ non majorée sur $\left]a,b\right[$ : $\forall M \in \mathbb{R}, \exists x_1 \in \left]a,b\right[$ tel que $f(x_1) > M$.

$f$ croissante donc $\forall x \geq x_1,\ x \in \left]a,b\right[ \Rightarrow f(x) > M$. On prend $\alpha = b - x_1 > 0$ (si $b = +\infty$ : $\forall C \in \mathbb{R}, \exists A \in \mathbb{R}$ tel que $x > A,\ x \in \left]a,b\right[ \Rightarrow f(x) > C$, avec $A = x_1$).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $f$ est croissante sur $\left]a,b\right[$ alors $f(x)$ admet une limite à gauche et à droite en tout point de $\left]a,b\right[$ et

$$f(x_0 - 0) \le f(x_0) \le f(x_0 + 0)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Théorème analogue pour $x \to x_0^-$ : on applique le théorème sur $\left]a, x_0\right[$ ($x_0 \in \left]a,b\right[$), donc $f(x) \to l$ ($x \to x_0$, $x < x_0$).

Pour la limite à droite en $x_0$ : on applique le théorème à $f(-x)$ sur $\left]-b, -a\right[$, ou à $-f(-x)$ qui est croissante ; donc $f(x)$ admet une limite à droite en $x_0$.

</div>

## III. Opérations sur les limites

Dans tout le paragraphe on considère $f : A \subset \bar{\mathbb{R}} \to \bar{\mathbb{R}}$ et $g : A \subset \bar{\mathbb{R}} \to \bar{\mathbb{R}}$ et $x_0 \in \bar{A}$, avec $\lim\limits&#95;{x \to x_0,\ x \in A}$ existe.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Si $\lim\limits&#95;{x_0} f = l \in \mathbb{R}$ et $\lim\limits&#95;{x_0} g = m \in \mathbb{R}$ alors

$$\lim&#95;{x_0} f + g = l + m \qquad \lim&#95;{x_0} fg = lm \qquad \forall \lambda \in \mathbb{R},\ \lim&#95;{x_0} \lambda f = \lambda l$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $\varepsilon > 0$ (avec $\varepsilon < 1$). Soit $U \in \mathcal{V}(x_0)$ tel que $\forall x \in A \cap U$, $&#124;f(x) - l&#124; < \varepsilon$ ; $U' \in \mathcal{V}(x_0)$ tel que $\forall x \in A \cap U'$, $&#124;g(x) - m&#124; < \varepsilon$.

Alors

$$\forall x \in A \cap U \cap U', \quad &#124;f(x)g(x) - lm&#124; \le &#124;m&#124;&#124;f(x)-l&#124; + &#124;g(x)-m&#124;&#124;l+f(x)&#124; \le (&#124;m&#124;+&#124;l&#124;+1)\varepsilon$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $\lim\limits&#95;{x_0} f = 0$ et $g$ bornée sur $\mathbb{R}$ au voisinage de $x_0$ alors $\lim\limits&#95;{x_0} fg = 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

Si $\lim\limits&#95;{x_0} f = +\infty$ et $g$ minorée au voisinage de $x_0$ alors $\lim\limits&#95;{x_0} f+g = +\infty$.

Si $\lim\limits&#95;{x_0} f = +\infty$ et $\exists m \in \mathbb{R}&#95;+^&#42;$ tel que $g(x) > m$ au voisinage de $x_0$ alors $\lim\limits&#95;{x_0} fg = +\infty$.

(idem pour $-\infty$)

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 4</span>

Si $\lim\limits&#95;{x_0} f = l \neq 0$, $l \in \mathbb{R}$, alors $\frac{1}{f}$ est définie sur un voisinage $U$ de $x_0$ et $\frac{1}{f}\big\vert_U \xrightarrow[x \to x_0]{} \frac{1}{l}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $\lim\limits&#95;{x_0} f = l \in \mathbb{R}$, $\lim\limits&#95;{x_0} g = m \neq 0$, $m \in \mathbb{R}$, et $\frac{f}{g}$ est définie sur un voisinage de $x_0$, alors $\frac{f}{g} \xrightarrow[x \to x_0]{} \frac{l}{m}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 5</span>

Si $f \xrightarrow[x \to x_0]{} +\infty$ (resp. $-\infty$) alors $\frac{1}{f}$ tend vers $0$ quand $x \to x_0$ ($x \in A$).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 6</span>

Si $f(x) > 0$ sur un voisinage de $x_0$ (resp. $f(x) < 0$) et $f \xrightarrow[x \to x_0]{} 0$, alors $\frac{1}{f} \to +\infty$ (resp. $-\infty$).

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Attention</span>

Si on ne connaît pas le signe de $f$ on ne peut rien dire, ex. $\sin x$.

</div>

## IV. Relation de prépondérance

### 1) Définition

On a $f : A \subset \bar{\mathbb{R}} \to \bar{\mathbb{R}}$, $x_0 \in \bar{A}$.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 1</span>

On dit que $f$ est définie au voisinage de $x_0$ s'il existe un voisinage $U \in \mathcal{V}(x_0)$ tel que $f$ est définie sur $U$ sauf éventuellement en $x_0$.

</div>

Exemple : $\frac{1}{\sin x}$ est définie au voisinage de $0$ : $U = \left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ par exemple. On notera $\mathcal{F}&#95;{x_0}$ l'ensemble des fonctions définies au voisinage de $x_0$.

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $f$ et $g$ sont dans $\mathcal{F}&#95;{x_0}$, il existe un voisinage de $x_0$ sur lequel $f$ et $g$ sont définies toutes les deux (sauf éventuellement en $x_0$) : si $f$ est définie sur $U \in \mathcal{V}(x_0)$ et $g$ sur $V \in \mathcal{V}(x_0)$, alors $f$ et $g$ sont définies sur $U \cap V \in \mathcal{V}(x_0)$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 2</span>

Soit $f$ et $g \in \mathcal{F}&#95;{x_0}$. On dit que $f$ est négligeable devant $g$, ou que $g$ est prépondérante devant $f$, ssi

$$\forall \varepsilon > 0, \exists U \in \mathcal{V}(x_0), \forall x 
\in U \cap A, \quad &#124;f(x)&#124; \le \varepsilon &#124;g(x)&#124;$$

</div>

Notation : on écrit $f = o(g)$ (Landau) au voisinage de $x_0$ ; $f \ll g$ (Hardy).

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$x^n$ et $x^m$, $n < m$ : $x^m = o(x^n)$ ($x \to 0$). En effet $x^m = x^n \cdot x^{m-n}$ avec $m - n \geq 1$ ; pour $\varepsilon > 0$, si $&#124;x&#124; \le \varepsilon^{\frac{1}{m-n}}$ alors $&#124;x&#124;^m \le \varepsilon &#124;x&#124;^n$.

</div>

### 2) Caractérisation

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

$o$ est une relation transitive (non réflexive, non symétrique) sur $\mathcal{F}&#95;{x_0}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

$f = o(g)$ ($x \to x_0$) ssi il existe $\varphi \in \mathcal{F}&#95;{x_0}$ et $U \in \mathcal{V}(x_0)$ tels que $\forall x \in U$ : $f(x) = \varphi(x) g(x)$ et $\varphi(x) \to 0$ ($x \to x_0$).

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $f = o(g)$ : $\forall \varepsilon > 0, \exists U \in \mathcal{V}(x_0), \forall x \in U, &#124;f(x)&#124; \le \varepsilon &#124;g(x)&#124;$.

Sur $U$ on définit $\varphi$ par : si $g(x) \neq 0$, $\varphi(x) = \frac{f(x)}{g(x)}$ ; si $g(x) = 0$, $\varphi(x) = 0$. Alors $f(x) = \varphi(x) g(x)$ (si $g(x) = 0$, &#124;f(x)&#124; \le 0$ donc $f(x) = 0$).

Soit $\varepsilon > 0$ : $\exists U' \in \mathcal{V}(x_0), \forall x \in U', &#124;f(x)&#124; \le \varepsilon &#124;g(x)&#124;$, donc $\forall x \in U \cap U'$, $&#124;\varphi(x)&#124; \le \varepsilon$ lorsque $g(x) \neq 0$ (et $\varphi(x) = 0$ sinon) : $\varphi(x) \to 0$ ($x \to x_0$).

Réciproquement, si $f(x) = \varphi(x)g(x)$ avec $\varphi(x) \to 0$ : $\forall \varepsilon > 0, \exists U \in \mathcal{V}(x_0), \forall x \in U, &#124;\varphi(x)&#124; \le \varepsilon$, donc &#124;f(x)&#124; = &#124;g(x)&#124;&#124;\varphi(x)&#124; \le \varepsilon &#124;g(x)&#124;$ : $f = o(g)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $g$ ne s'annule pas au voisinage de $x_0$, alors $f = o(g)$ ssi $\lim\limits&#95;{x \to x_0} \frac{f}{g} = 0$.

</div>

Application : $x^n = o(x^m)$ ($x \to +\infty$) pour $n < m$.

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

- $f = o(1)$ ($x \to x_0$) ssi $f(x) \to 0$ ($x \to x_0$) ;
- $(x^2 \sin \frac{1}{x}) = o(x \sin \frac{1}{x})$ : le corollaire ne s'applique pas (car $x \sin \frac{1}{x}$ s'annule).

</div>

### 3) Opérations sur les $o$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Si $f = o(h)$ et $g = o(h)$ alors $f + g = o(h)$ ; $\lambda f = o(h)$ pour $\lambda \in \mathbb{R}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $U \in \mathcal{V}(x_0)$ tel que $\forall x \in U$, $&#124;f(x)&#124; \le \frac{\varepsilon}{2} &#124;h(x)&#124$ ; $V \in \mathcal{V}(x_0)$ tel que $\forall x \in V$, $&#124;g(x)&#124; \le \frac{\varepsilon}{2} &#124;h(x)&#124$.

Alors $\forall x \in U \cap V$ : &#124;g(x) + f(x)&#124; \le &#124;g(x)&#124; + &#124;f(x)&#124; \le \varepsilon &#124;h(x)&#124;$, et &#124;\lambda f(x)&#124; \le \varepsilon &#124;h(x)&#124;.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Attention</span>

On ne peut pas additionner les $o$ membre à membre : $2\ln(x) = o(x)$ ($x \to +\infty$) et $-\ln(x) = o(-x)$ ($x \to +\infty$), mais si on ajoute membre à membre on obtiendrait $\ln x = o(0)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $f_1 = o(g_1)$ et $f_2 = o(g_2)$ au voisinage de $x_0$ alors $f_1 f_2 = o(g_1 g_2)$ ; si $h$ est une fonction alors $f_1 h = o(g_1 h)$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Sur $U \in \mathcal{V}(x_0)$ : $f_1 = \varphi_1 g_1$ avec $\varphi_1(x) \to 0$ ($x \to x_0$) ; sur $V \in \mathcal{V}(x_0)$ : $f_2 = \varphi_2 g_2$ avec $\varphi_2(x) \to 0$.

Sur $U \cap V$ : $f_1 f_2 = \varphi_1 \varphi_2&#92;&#44; g_1 g_2$ et $\varphi_1 \varphi_2(x) \to 0$ ($x \to x_0$).

</div>

### 4) Relation de dominance

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $g$ domine $f$ ssi il existe $U \in \mathcal{V}(x_0)$ et $k \in \mathbb{R}_+$ tels que $\forall x \in U$, $&#124;f(x)&#124; \le k&#124;g(x)&#124;$.

Notation : $f = O(g)$.

</div>

Exemple : $f(x) = \frac{2x+1}{x+2}$ pour $x > -2$ : $f(x) = O(1)$ au voisinage de $+\infty$ (Landau).

- si $f = o(g)$ alors $f = O(g)$.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Si $f = o(g)$ et $g = O(h)$ alors $f = o(h)$ ; si $f = O(g)$ et $g = o(h)$ alors $f = o(h)$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\exists U \in \mathcal{V}(x_0)$ tel que $&#124;g(x)&#124; \le k&#124;h(x)&#124;$ ($k \in \mathbb{R}_+$ fixé) ; et $\forall \varepsilon > 0, \exists V \in \mathcal{V}(x_0)$ tel que $&#124;f(x)&#124; \le \varepsilon &#124;g(x)&#124;$.

Alors $\forall \varepsilon > 0,\ \forall x \in U \cap V$, $&#124;f(x)&#124; \le \varepsilon k &#124;h(x)&#124;$, donc $f = o(h)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $f_1 = o(g_1)$ et $f_2 = o(g_2)$ alors $f_1 + f_2 = o(g_1 + g_2)$.

</div>

## V. Équivalents

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $f$ est équivalente à $g$ au voisinage de $x_0$ ($f, g \in \mathcal{F}&#95;{x_0}$) ssi

$$f - g = o(g)$$

Notation : $f \sim g$.

</div>

### 2) Caractérisation

- 1) $\exists \varepsilon \in \mathcal{F}&#95;{x_0}$ telle que $f = (1+\varepsilon)g$ au voisinage de $x_0$ et $\varepsilon(x) \underset{x \to x_0}{\longrightarrow} 0$ ;
- 2) $\exists \varphi \in \mathcal{F}&#95;{x_0}$ telle que $f = \varphi g$ au voisinage de $x_0$ avec $\varphi(x) \underset{x \to x_0}{\longrightarrow} 1$ ;
- en particulier : si $g$ ne s'annule pas au voisinage de $x_0$, $f \sim g$ ssi $\frac{f}{g} \underset{x \to x_0}{\longrightarrow} 1$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $\ln(1+x) \underset{x \to 0}{\sim} x$ car $\frac{\ln(1+x)}{x} \longrightarrow 1$ ;
- $e^x - 1 \underset{x \to 0}{\sim} x$ ;
- $P(x) = a_n x^n + \ldots + a_q x^q$ avec $a_n \neq 0$, $a_q \neq 0$ : $P(x) \underset{x \to +\infty}{\sim} a_n x^n$ car $P(x) = a_n x^n \left(1 + \ldots + \frac{a_q}{a_n} \frac{1}{x^{n-q}}\right)$ ; et $P(x) \underset{x \to 0}{\sim} a_q x^q$ ;
- $f \underset{x \to x_0}{\sim} 0$ ssi $f$ est nulle au voisinage de $x_0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$\sim$ est une relation d'équivalence sur $\mathcal{F}&#95;{x_0}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

- $f \sim f$ car $f = 1 \cdot f$ ;
- si $f \sim g$ alors $f = \varphi g$ avec $\varphi(x) \to 1$ ; il existe un voisinage de $x_0$ sur lequel $\frac{1}{\varphi}$ est définie ; $g = \frac{1}{\varphi} f$ avec $\frac{1}{\varphi} \underset{x \to x_0}{\longrightarrow} 1$, donc $g \sim f$ ;
- si $f \sim g$ et $g \sim h$ : $f = \varphi g$, $g = \psi h$ ; donc $f = \varphi\psi&#92;&#44; h$ avec $\varphi\psi(x) \underset{x \to x_0}{\longrightarrow} 1$ : $f \sim h$.

</div>

### 3) Applications

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Si $f \underset{x \to x_0}{\sim} g$ et $g(x) \underset{x \to x_0}{\longrightarrow} l$, $l \in \bar{\mathbb{R}}$, alors $f(x) \underset{x \to x_0}{\longrightarrow} l$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$f = \varphi g$ au voisinage de $x_0$ avec $\varphi(x) \to 1$, et $g(x) \to l$ ; donc $f(x) = \varphi(x) g(x) \to 1 \cdot l = l$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $\sin x \underset{0}{\sim} x$ car $\frac{\sin x}{x} \underset{x \to 0}{\longrightarrow} 1$ ;
- $\frac{\sin x}{\sqrt{x}} \sim \frac{x}{\sqrt{x}}$ donc $\frac{\sin x}{\sqrt{x}} \underset{x \to 0}{\longrightarrow} 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $f(x) \underset{x \to x_0}{\longrightarrow} l$ avec $l \in \mathbb{R}$ et $l \neq 0$ alors $&#124;f&#124; \underset{x \to x_0}{\sim} &#124;l&#124;$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

Si $f \sim g$ alors $f$ et $g$ ont le même signe sur un voisinage de $x_0$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$f = \varphi g$ au voisinage de $x_0$ avec $\varphi(x) \to 1$ ; donc $\exists U \in \mathcal{V}(x_0), \forall x \in U, 0 < \varphi(x) < 2$ ; d'où $f$ et $g$ de même signe sur $U$.

</div>

### 4) Opérations sur les équivalents

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Si $f \underset{x_0}{\sim} g$ et $f' \underset{x_0}{\sim} g'$ alors $f f' \underset{x_0}{\sim} g g'$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $f \underset{x_0}{\sim} g$ et $g$ ne s'annule pas dans un voisinage de $x_0$ alors $f$ ne s'annule pas sur ce voisinage et $\frac{1}{f} \underset{x_0}{\sim} \frac{1}{g}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$f$ ne s'annule pas au voisinage de $x_0$ car $f$ et $g$ ont même signe au voisinage de $x_0$ ; donc $\frac{1}{f}$ et $\frac{1}{g}$ sont définies dans $\mathcal{F}&#95;{x_0}$. Et si $f = \varphi g$ alors $\frac{1}{f} = \frac{1}{\varphi} \times \frac{1}{g}$ au voisinage de $x_0$ ($\varphi$ ne s'annule pas au voisinage de $x_0$ car $\varphi(x) \to 1$).

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Attention</span>

On ne peut pas additionner des équivalents.

</div>

<div class="bloc contre-exemple" markdown="1">

<span class="bloc-titre">Contre-exemple</span>

$+3x^2 + 3x + 1 \underset{+\infty}{\sim} 3x^2$ et $-3x^2 \underset{+\infty}{\sim} -3x^2$, mais $3x + 1 \underset{+\infty}{\not\sim} 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 4</span>

Si $u(x) \underset{x \to x_0}{\longrightarrow} l$ et $f \sim g$ (au voisinage de $l$) alors $(f \circ u) \underset{x_0}{\sim} (g \circ u)$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$f = \varphi g$ au voisinage de $l$ avec $\varphi \to 1$ ; $u(x) \to l$ donc $f \circ u$ et $g \circ u$ sont définis au voisinage de $x_0$, et $f \circ u = (\varphi \circ u)(g \circ u)$ avec $(\varphi \circ u)(x) \underset{x \to x_0}{\longrightarrow} 1$ (composition des limites).

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$\ln(1+u(x)) \underset{x_0}{\sim} u(x)$ si $u(x) \underset{x \to x_0}{\longrightarrow} 0$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Attention</span>

On ne peut pas composer des équivalents membre à membre.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 5</span>

$e^f \underset{x_0}{\sim} e^g$ si $f - g \underset{x \to x_0}{\longrightarrow} 0$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$e^{g(x)} \neq 0$ donc $(e^f \sim e^g) \Leftrightarrow \frac{e^f}{e^g} \underset{x \to x_0}{\longrightarrow} 1 \Leftrightarrow e^{f-g} \underset{x \to x_0}{\longrightarrow} 1 \Leftrightarrow f - g \underset{x \to x_0}{\longrightarrow} 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 6</span>

Si $S = f_1 + f_2 + \ldots + f_n$ et $f_i = o(f_1)$ pour $i \geq 2$ alors $S \underset{x_0}{\sim} f_1$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$f_i = o(f_1)$ pour $i \geq 2$ ; $f_1 + f_2 + \ldots + f_n = o(f_1)$ (nombre fini de $f_i$) ; donc $S - f_1 = o(f_1)$ ; $S \underset{x_0}{\sim} f_1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 7</span>

Si $f_i \sim \lambda_i g$, $i \in [\![1,n]\!]$, $\lambda_i \in \mathbb{R}$, avec $\lambda = \sum\limits&#95;{i=1}^{n} \lambda_i$ :

- 1ᵉʳ cas : $\lambda \neq 0$ alors $S = \sum\limits&#95;{i=1}^n f_i \sim \lambda g$ ;
- 2ᵉ cas : $\lambda = 0$ alors $S = o(g)$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$f_i(x) = \lambda_i \varphi_i(x) g(x)$ au voisinage de $x_0$ avec $\varphi_i(x) \to 1$, donc

$$S = g(x)\left(\lambda_1 \varphi_1(x) + \lambda_2 \varphi_2(x) + \ldots + \lambda_n \varphi_n(x)\right)$$

et $\lambda_1 \varphi_1(x) + \ldots + \lambda_n \varphi_n(x) \underset{x \to x_0}{\longrightarrow} \sum\limits&#95;{i=1}^n \lambda_i = \lambda$.

- si $\lambda \neq 0$ : $S = \lambda g(x) \frac{\varphi(x)}{\lambda}$ avec $\frac{\varphi(x)}{\lambda} \to 1$, donc $S \sim \lambda g(x)$ ;
- si $\lambda = 0$ : $S = o(g)$ car $\varphi(x) \to 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 8</span>

Si $f \sim g$ et $g = o(h)$ alors $f = o(h)$ ; si $f \sim g$ et $h = o(g)$ alors $h = o(f)$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Dans une relation de comparaison, on peut remplacer une fonction $f$ par une fonction qui lui est équivalente.

</div>

## VI. Relations de comparaison classiques

### 1) Polynômes et puissances

- pour $m > n$ : $x^n = O(x^m)$ ($x \to +\infty$) et $x^m = o(x^n)$ ($x \to 0$) ;
- $P(x) \underset{x \to +\infty}{\sim} a_n x^n$, avec $P(x) = a_n x^n + \ldots + a_q x^q$ ($(a_n, a_q) \neq (0,0)$) ; $P(x) \underset{x \to 0}{\sim} a_q x^q$ ;
- $\frac{P(x)}{Q(x)} \underset{+\infty}{\sim} \frac{a_n}{b_m} x^{n-m}$, avec $P(x) = a_n x^n + \ldots + a_q x^q$ ($(a_n, a_q) \neq (0,0)$) et $Q(x) = b_m x^m + \ldots + b_r x^r$ ($(b_m, b_r) \neq (0,0)$) ;
- $\frac{P(x)}{Q(x)} \underset{0}{\sim} \frac{a_q}{b_r} x^{q-r}$.

### 2) Log et exp

- $\ln x = o(x)$ ($x \to +\infty$).

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$$\ln x = \int_1^x \frac{1}{t}&#92;&#44;dt = \int_1^{\sqrt{x}} \frac{1}{t}&#92;&#44;dt + \int&#95;{\sqrt{x}}^x \frac{1}{t}&#92;&#44;dt$$

Pour $x \geq 1$ : $0 \leq \ln x \leq \sqrt{x} + \frac{1}{\sqrt{x}}(x - \sqrt{x})$, donc $0 \leq \frac{\ln x}{x} \leq \frac{2}{\sqrt{x}} - \frac{1}{x}$.

</div>

- $\forall \alpha > 0,\ \forall \beta > 0$ : $\ln^\beta(x) = o(x^\alpha)$ ($x \to +\infty$) ;
- $\forall \alpha > 0,\ \forall \beta > 0$ : $x^\alpha \ln^\beta(x) \underset{x \to 0}{\longrightarrow} 0$, donc $\ln^\beta(x) = O(x^{-\alpha})$ ($x \to 0$) ;
- $\forall \alpha > 0,\ \forall \beta > 0$ : $x^\alpha = o(e^{\beta x})$ ($x \to +\infty$) ;
- corollaire : $\forall \alpha > 0,\ \forall \beta > 0$ : $\ln^\beta x = o(e^{\alpha x})$ ($x \to +\infty$).

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Pour $x > 0$ : $\frac{x^\alpha}{e^{\beta x}} = e^{\alpha \ln x - \beta x} \underset{x \to +\infty}{\longrightarrow} 0$, donc $x^\alpha = o(e^{\beta x})$ pour $\alpha > 0$, $\beta > 0$.

</div>

- pour $\beta < 1$ et $\alpha > 0$ : $\beta^x = o(x^\alpha)$ ($x \to +\infty$) ;
- si $f \underset{x \to x_0}{\sim} g$ et $\lim\limits&#95;{x \to x_0} f(x) = l > 0$ ($l = +\infty$ éventuellement), si $l \neq 1$ alors $\ln f \sim \ln g$.

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\ln f$ et $\ln g$ sont définies au voisinage de $x_0$ ; $\ln g \to \ln l \neq 0$ ; $\ln g$ ne s'annule pas dans un voisinage de $x_0$ ; $\frac{\ln f}{\ln g} \to \frac{\ln l}{\ln l} = 1$ donc $\ln f \sim \ln g$ (si $l \in \mathbb{R}_+^&#42;$).

Si $l = +\infty$ : $f = \varphi g$ avec $\varphi \to 1$ ; $\ln f = \ln \varphi + \ln g$ ; $\ln \varphi = o(\ln g)$ car $\ln g \to +\infty$ ; donc $\ln f - \ln g = o(\ln g)$, c'est-à-dire $\ln f \sim \ln g$.

</div>

### 3) Fonctions trigonométriques

- $\sin x \underset{0}{\sim} x$ ;
- $\tan x \underset{0}{\sim} x$ ;
- $1 - \cos x \underset{0}{\sim} \frac{x^2}{2}$ ;
- $\tan x \underset{0}{\sim} \frac{1}{x}$.

## VII. Comparaison de suites

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 1</span>

On dira que $u_n = o(v_n)$ ($u_n$ négligeable devant $v_n$) si

$$\forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall n \geq N, \quad &#124;u_n&#124; \le \varepsilon &#124;v_n&#124;$$

</div>

- équivaut à : il existe une suite $\varphi_n$ telle que $\varphi_n \underset{n \to +\infty}{\longrightarrow} 0$ et $u_n = \varphi_n v_n$ (à partir d'un certain rang) ;
- si $v_n$ ne s'annule pas à partir d'un certain rang, $u_n = o(v_n)$ ssi $\frac{u_n}{v_n} \underset{n \to +\infty}{\longrightarrow} 0$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$\forall \alpha > 0$ et $\beta > 0$ : $\ln^\beta n = o(n^\alpha)$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 2</span>

On dira que $u_n$ est équivalente à $v_n$ si $u_n - v_n = o(v_n)$ (noté $u_n \sim v_n$).

</div>

- équivaut à : il existe une suite $\varphi_n$ telle que $\varphi_n \underset{n \to +\infty}{\longrightarrow} 1$ et $u_n = \varphi_n v_n$ (à partir d'un certain rang) ;
- si $v_n$ ne s'annule pas à partir d'un certain rang, $u_n \sim v_n$ ssi $\frac{u_n}{v_n} \underset{n \to +\infty}{\longrightarrow} 1$.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 3</span>

On dira que $u_n$ est dominée par $v_n$ ($u_n = O(v_n)$) si $\exists k \in \mathbb{R}_+$ tel que $\exists N \in \mathbb{N}, \forall n \geq N, &#124;u_n&#124; \le k&#124;v_n&#124;$.

</div>

Toutes les propriétés sur $o$, $O$, $\sim$ s'étendent aux suites.

Relations classiques :

- $\forall \alpha > 0,\ \forall \beta > 0$ : $n^\alpha = o(e^{\beta n})$ ;
- si $\alpha > 0$ et $\beta > 1$ : $n^\alpha = o(\beta^n)$ ;
- si $\alpha > 0$ et $\beta < 1$ : $\beta^n = o(n^\alpha)$ ;
- pour $k > 0$ : $k^n = o(n!)$.

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $n_0 = E(k) + 1$ ; $\frac{k}{n_0} < 1$.

$$\frac{k^n}{n!} = \frac{k \cdots k}{1 \cdots n} \le \frac{k^{n_0-1}}{(n_0-1)!} \cdot \left(\frac{k}{n_0}\right)^{n+1-n_0}$$

Donc $0 \le \frac{k^n}{n!} \underset{n \to +\infty}{\longrightarrow} 0$.

</div>

- $n! = o(n^n)$.

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$$0 \le \frac{n!}{n^n} \le \frac{1}{n}$$

</div>

## VIII. Exercices — feuille n° 11

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 11 — Limites (énoncés)</span>

<ol class="enonces">
<li>Déterminer les points $x_0$ en lesquels $f$ admet une limite avec $f$ définie par :

$$f : \mathbb{R} 	o \mathbb{R}, \quad x \mapsto \begin{cases} x & \text{si } x \in \mathbb{Q} \\ 1-x & \text{sinon} \end{cases}$$

</li>
<li>Soit $g$ et $h$ définies sur $\mathbb{R}$ par :

$$h(x) = \begin{cases} 0 & \text{si } \exists n \in \mathbb{N}^&#42;,\ x = \frac{1}{n} \\ x & \text{sinon} \end{cases} \qquad g(x) = 1 - E(x) \cdot E(1-x)$$

<ol>
<li>Calculer $g(x)$. Montrer que $\lim\limits&#95;{\substack{x \to 0 \\ x \neq 0}} g(x)$ existe.</li>
<li>Montrer que $h(x)$ tend vers $0$ quand $x$ tend vers $0$.</li>
<li>Montrer que $g \circ h$ n'a pas de limite en $0$. Expliquer la situation.</li>
</ol>
</li>
<li>Calculer les limites des fonctions suivantes en $a$ :
<ol>
<li>$\sin\left(\frac{\pi}{4} - x\right) \tan(2x)$, $a = \frac{\pi}{4}$</li>
<li>$\dfrac{2 - \cos x - \cos 2x}{\tan^2 x}$, $a = 0$</li>
<li>$\sin\left(\frac{1}{x}\right) \tan\left(\frac{2x\pi}{4x+3}\right)$, $a = +\infty$</li>
<li>$\dfrac{\ln(\sin^2 x)}{\frac{\pi}{2} - x}$, $a = \frac{\pi}{2}$</li>
<li>$\dfrac{\sin x - \sin a}{x^2 - 4ax + 3a^2}$, $a$</li>
<li>$\sqrt{4x+1}\ \ln\left(1 - \frac{\sqrt{1+x}}{x+2}\right)$, $a = +\infty$</li>
<li>$\dfrac{2 - \tan x + 2\tan 3x - 2\cos 2x}{5\cos x + 3\tan x - 6 + \cos 2x - \tan 3x}$, $a = 0$</li>
<li>$\sqrt[3]{x^3+1} - \sqrt{x^2-1}$, $a = +\infty$</li>
<li>$x^3\left(\sqrt{x^2+\sqrt{x+1}} - x\sqrt{2}\right)$, $a = +\infty$</li>
<li>$\dfrac{1}{x^2} \exp\left(\dfrac{1}{\sin x}\right)$, $a = 0^-$</li>
</ol>
</li>
<li>Trouver un équivalent pour chacune des fonctions suivantes au voisinage de $a$ :
<ol>
<li>$\tan\left(x + \frac{\pi}{4}\right)$, $a = \frac{\pi}{4}$</li>
<li>$\tan\left(\frac{\pi x}{2x+1}\right)$, $a = +\infty$</li>
<li>$\cos x - \cos 3x$, $a = 0$</li>
<li>$\ln^2(x+1) - \ln^2 x$, $a = +\infty$</li>
<li>$\tan^2 x$, $a = \frac{5\pi}{2}$</li>
<li>$\sqrt[3]{x+2} - \sqrt[3]{x}$, $a = +\infty$</li>
</ol>
</li>
<li>Discuter suivant les valeurs de $a$, $b$, $c$, $m$ le comportement en $+\infty$ de la fonction :

$$\sqrt{x^3 + ax^2 + bx + c} - mx\sqrt{x+2}$$

</li>
<li>Calculer les limites suivantes :
<ol>
<li>$x^2\left(\exp\left(\frac{1}{x}\right) - \exp\left(\frac{1}{x+1}\right)\right)$, $a = +\infty$</li>
<li>$\ln(x)^{\ln(e-x)}$, $a = e^-$</li>
<li>$(e^x + 1)^{e^x-1} - (e^x - 1)^{e^x+1}$, $a = 0^+$</li>
<li>$\dfrac{1}{x(x-\ln x)^x}$, $a = 0^+$</li>
<li>$\dfrac{(\sin x)^x - 1}{x^x - 1}$, $a = 0^+$</li>
</ol>
</li>
<li>Soit $f : \mathbb{R}&#95;+^&#42; \to \mathbb{R}$. On suppose que $f$ est bornée sur tout intervalle borné.
<ol>
<li>On suppose $f(x+1) - f(x) \to 0$ en $+\infty$. Montrer que $\dfrac{f(x)}{x} \xrightarrow[x \to +\infty]{} 0$.</li>
<li>On suppose $f(x+1) - f(x) \to L$ en $+\infty$. Montrer que $\dfrac{f(x)}{x} \xrightarrow[x \to +\infty]{} L$.</li>
</ol>
</li>
<li>Déterminer les applications $f : \left]0, +\infty\right[ \to \left]0, +\infty\right[$ telles que $f(x f(y)) = y f(x)$.
<ol>
<li>Déterminer les applications $f : \left]0, +\infty\right[ \to \left]0, +\infty\right[$ telles que $f(x f(y)) = y f(x)$.</li>
<li>Déterminer les applications $f : \left]0, +\infty\right[ \to \left]0, +\infty\right[$ telles que $f(x f(y)) = y f(x)$ et de plus $f(x) \xrightarrow[x \to +\infty]{} 0$.</li>
</ol>
(Indication : on posera $a = x f(x)$ pour $x > 0$ et on calculera $f(a^n)$ pour $n \in \mathbb{Z}$.)
</li>
<li>Calculer les limites éventuelles des suites suivantes :
<ol>
<li>$u_n = n\left(\sqrt[n]{5} - 1\right)$</li>
<li>$u_n = 3\sqrt[n]{2} - 2\sqrt[n]{3}$</li>
<li>$u_n = n^{\frac{n+1}{n}} - (n-1)^{\frac{n}{n-1}}$</li>
<li>$u_n = \left(\dfrac{\cos\left(a + \frac{b}{n}\right)}{\cos a}\right)^n$</li>
</ol>
</li>
<li>Montrer que

$$\sum&#95;{k=1}^{n} k! \sim n!$$

</li>
<li>Soit $S_n = \sum\limits&#95;{k=1}^{n} \frac{1}{k}$ et $u_n = S_n - \ln(n)$.
<ol>
<li>En utilisant l'encadrement pour $x \in [0, 1]$ : $x - \frac{x^2}{2} \leq \ln(1+x) \leq x$, donner un encadrement de $u&#95;{n+1} - u_n$.</li>
<li>En déduire que $(u_n)$ converge et donner un équivalent de $S_n$.</li>
</ol>
</li>
<li>Soit $u_n = \frac{1}{n!} n^n \sqrt{n}&#92;&#44; e^{-n}$ et $w_n = \ln(u&#95;{n+1}) - \ln(u_n)$. Donner un encadrement de $w_n$. En déduire que $u_n$ converge et donner un équivalent de $n!$ (en fonction de la limite de $u_n$), puis un équivalent de $\sqrt[n]{n!}$.</li>
</ol>

</div>

## IX. Technique

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Technique — limites</span>

1) Définir l'ensemble de définition.

2) Se ramener à des limites en $x = 0$.

3) Changement de fonction circulaire pour se ramener à $f(\mathrm{cir}(\varphi(x)))$ avec $\varphi(x) \to 0$.

4) Attention : si $f(x) \sim \frac{A}{x^\alpha}$ avec $\alpha$ impair alors $\lim f(x)$ n'existe pas.

5) Indétermination à la somme d'équivalents : avec $\tan$ : développement d'après la formule de $\tan$ ; des puissances différentes : taux d'accroissement.

6) $\forall \alpha > 0,\ \forall \beta > 0$ :

$$\begin{cases} x^\alpha \ln^\beta(x) \underset{x \to 0}{\longrightarrow} 0 \\ x^\alpha e^{-x} \underset{x \to +\infty}{\longrightarrow} 0 \\ \dfrac{x}{e^x} \underset{x \to +\infty}{\longrightarrow} 0 \end{cases}$$

</div>
