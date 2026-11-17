---
layout: chapitre
title: "Groupes symétriques"
numero: 10
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Algèbre"
source: "Math/Math Sup/Algèbre/10 Groupes symétriques"
pages: 42
---

Soit $E$ un ensemble. On rappelle que l'ensemble $\mathfrak{S}(E)$ des bijections de $E$ dans $E$, muni de la composition $\circ$, est un **groupe**, non commutatif dès que $\mathrm{Card}\ E \geq 3$. On considère ici $E$ de **cardinal fini** $n$. Si $\mathrm{Card}\ E = n$, une bijection de $E$ dans $E$ s'appelle une **permutation** ; $\mathfrak{S}(E)$ s'appelle alors le **groupe symétrique** et $\mathrm{Card}\ \mathfrak{S}(E) = n!$. Enfin, $\mathfrak{S}(E)$ et $\mathfrak{S}(n)$ sont **isomorphes** : si $E = \\{a_1, \dots, a_n\\}$, on pose $\varphi : \mathfrak{S}(E) \to \mathfrak{S}(n)$, $\sigma \mapsto \varphi(\sigma)$, avec $\varphi(\sigma)(i) = j$ lorsque $\sigma(a_i) = a_j$. **Conclusion** : on s'intéressera uniquement à $\mathfrak{S}(n)$.

## I. Orbites d'une permutation

**Notation.** Pour $\sigma \in \mathfrak{S}(n)$ :

$$\sigma = \begin{pmatrix} 1 & \cdots & n \\ \sigma(1) & \cdots & \sigma(n) \end{pmatrix} \quad \text{ou} \quad \sigma = (\sigma(1), \dots, \sigma(n))$$

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Pour $n = 5$, $\sigma = (2,4,3,1,5)$ : $\sigma(1) = 2$, $\sigma(2) = 4$, $\sigma(3) = 3$, $\sigma(4) = 1$, $\sigma(5) = 5$ (schéma des cycles : $1 \to 2 \to 4 \to 1$, $3$ et $5$ fixes).

</div>

### 1) Orbites

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On définit sur $E$ la relation d'équivalence :

$$x \mathcal{R} y \iff \exists k \in \mathbb{N},\ y = \sigma^k(x)$$

On appelle **orbite** de $x$ la classe de $x$ pour cette relation, notée $\mathcal{O}(x)$ :

$$\mathcal{O}(x) = \{\sigma^k(x) \mid k \in \mathbb{N}\}$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Toute orbite est **finie** : soit $m$ le plus petit élément de $\mathbb{N}^&#42;$ tel que $\sigma^m(x) = x$ (avec $m = 1$ si $\sigma(x) = x$) ; en posant $k = m - 1$ :

$$\mathcal{O}(x) = \{x, \sigma(x), \sigma^2(x), \dots, \sigma^k(x)\}$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $d = \\{m \in \mathbb{N}^&#42; \mid \sigma^m(x) = x\\}$.

- **1er cas** : $\sigma(x) = x$. Alors $\mathcal{O}(x) = \\{x\\}$ ($k = 0$, constant).
- **2ème cas** : $\sigma(x) \neq x$. Alors $\sigma \neq \mathrm{Id}&#95;E$, et soit $p$ l'ordre de $x$ : $\sigma^p(x) = x$, donc $p \neq 1$. $d$ est une partie non vide de $\mathbb{N}$, donc admet un plus petit élément $m \in \mathbb{N}^&#42;$. Posons $k = m - 1 \in \mathbb{N}$ : $\\{x, \sigma(x), \dots, \sigma^k(x)\\} \subset \mathcal{O}(x)$.

Soit $y \in \mathcal{O}(x)$ : $y = \sigma^i(x)$ avec $i \in \mathbb{Z}$. Écrivons $i = mq + r$ avec $0 \leq r < m$. Alors

$$\sigma^i(x) = \sigma^{mq+r}(x) = (\sigma^m)^q\big(\sigma^r(x)\big) = \sigma^r(x)$$

car $\sigma^m(x) = x$, d'où par une simple récurrence $\forall q \in \mathbb{N}^&#42;,\ \sigma^{qm}(x) = x$. Comme $0 \leq r \leq k$ : $\sigma^i(x) = \sigma^r(x)$, donc $y \in \\{x, \dots, \sigma^k(x)\\}$.

</div>

### 2) Types particuliers de permutations

**Rappel** : les orbites forment une **partition** de $E$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$\sigma = (4,2,5,3,7,9,1,8,6)$ (pour $n = 9$) : $\sigma = \sigma_1 \sigma_2$, où $\sigma_1$ est le cycle $(4,2,5,3,7,6,1,8,9)$, noté aussi $(1,4,3,5,7)$, et $\sigma_2$ est la transposition $(6,9)$ ($2$ et $8$ sont fixes).

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (cycle)</span>

On appelle **cycle** une permutation dont une seule orbite est non réduite à un singleton ; cette orbite s'appelle le **support** du cycle.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (transposition)</span>

On appelle **transposition** un cycle de longueur $2$ (noté aussi $(i\ j)$).

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (permutation circulaire)</span>

On appelle **permutation circulaire** un cycle de longueur $n$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Toute permutation s'écrit comme le **produit de cycles à support disjoint**.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

- Le **support** d'une permutation $\sigma$ est l'ensemble des points non invariants par $\sigma$.
- Deux permutations à support disjoints (et en particulier deux cycles à supports disjoints) **commutent**.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème 2</span>

Toute permutation $\sigma$ s'écrit comme **produit de transpositions**.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Ceci signifie que les transpositions **engendrent** $\mathfrak{S}&#95;n$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Récurrence sur $n$. Pour $n = 2$ : $E = \\{1,2\\}$, $\mathfrak{S}&#95;2 = \\{\mathrm{Id}, \tau\\}$ avec $	au = (1\ 2)$ la transposition, et $\mathrm{Id} = (1\ 2) \circ (1\ 2)$ : le résultat est vrai.

Supposons la propriété vraie pour $\mathfrak{S}&#95;n$, et soit $\sigma \in \mathfrak{S}&#95;{n+1}$.

- **1er cas** : $\sigma(n+1) = n+1$. Alors $\sigma$ se restreint en une permutation de $\\{1,\dots,n\\}$, produit de transpositions de $\mathfrak{S}&#95;n$ (donc de $\mathfrak{S}&#95;{n+1}$).
- **2ème cas** : $\sigma(n+1) = i \in \\{1,\dots,n\\}$. Soit $\tau = (i\ n+1)$ ; alors $\tau \circ \sigma$ fixe $n+1$, donc $\tau \circ \sigma = \tau_1 \circ \dots \circ \tau_r$ avec les $\tau_j$ transpositions de $\mathfrak{S}&#95;n$. D'où $\sigma = \tau \circ \tau_1 \circ \dots \circ \tau_r$ : $\sigma$ est le produit de $r+1$ transpositions.

</div>

## II. Signature d'une permutation

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $\sigma \in \mathfrak{S}&#95;n$. On appelle **signature** de $\sigma$ le nombre

$$\varepsilon(\sigma) = (-1)^{n-m}$$

où $m$ est le nombre d'orbites de $\sigma$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Identité : $\varepsilon(\mathrm{Id}) = (-1)^{n-n} = 1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

$$\varepsilon : \mathfrak{S}_n \to \{-1, 1\}$$

est un **morphisme de groupe**.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Il suffit de montrer que $\varepsilon(\sigma \circ \tau) = \varepsilon(\sigma)\\,\varepsilon(\tau)$ (la loi du groupe $\\{\pm 1\\}$ étant multiplicative).

**1er cas** : $\tau$ est une transposition $t = (a\ b)$.

- si $a$ et $b$ sont dans la **même orbite** de $\sigma$ : la composition par $(a\ b)$ « casse » cette orbite en deux, le nombre d'orbites augmente de $1$ : $\varepsilon(\sigma \circ t) = -\varepsilon(\sigma)$ ;
- si $a$ et $b$ n'appartiennent **pas à la même orbite** de $\sigma$ : la composition par $(a\ b)$ « joint » les deux orbites en une, le nombre d'orbites diminue de $1$ : $\varepsilon(\sigma \circ t) = -\varepsilon(\sigma)$.

Dans les deux cas, $\varepsilon(\sigma \circ t) = -\varepsilon(\sigma) = \varepsilon(\sigma)\\,\varepsilon(t)$.

Soit maintenant $\sigma \in \mathfrak{S}&#95;n$ quelconque ; d'après le théorème 2, $\sigma = t_1 \circ \dots \circ t_r$, d'où

$$\varepsilon(t_1 \circ \dots \circ t_r) = \varepsilon(t_1) \cdots \varepsilon(t_r) = (-1)^r$$

**Conclusion** : $\varepsilon(\sigma \circ \tau) = \varepsilon(\sigma)\\,\varepsilon(\tau)$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $\sigma = t_1 \circ \dots \circ t_r$, alors $\varepsilon(\sigma) = (-1)^r$ : **la parité de $r$ est imposée** (indépendante de la décomposition choisie).

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (permutations paires et impaires)</span>

Une permutation qui se décompose en un **nombre pair** de transpositions est dite **paire** (« impaire » sinon).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

L'ensemble des permutations paires est un **sous-groupe** de $\mathfrak{S}&#95;n$, noté $\mathfrak{A}&#95;n$ et appelé **groupe alterné** :

$$\mathfrak{A}_n = \{\sigma \in \mathfrak{S}_n \mid \varepsilon(\sigma) = 1\} = \ker \varepsilon, \qquad \mathrm{Card}\ \mathfrak{A}_n = \frac{n!}{2}$$

</div>

## III. Déterminants

Dans tout ce cours, $\mathbb{K}$ désigne un **sous-corps de $\mathbb{C}$ ou de $\mathbb{R}$**, et $E_1, \dots, E_n$ des espaces vectoriels sur $\mathbb{K}$. On pose $E = E_1 \times \dots \times E_n$ ($\mathbb{K}$-ev).

### I. Applications multilinéaires

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $f : E \to F$. On dit que $f$ est **$n$-linéaire** si $f$ est linéaire par rapport à chacune de ses coordonnées : pour tout $i \in \\{1,\dots,n\\}$ et tout $(a_1,\dots,a&#95;{i-1},a&#95;{i+1},\dots,a_n)$ fixé, l'application

$$a_i \longmapsto f(a_1,\dots,a_i,\dots,a_n)$$

est linéaire.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$E_1 = E_2 = F = \mathbb{R}$ : $(f,g) \mapsto \int_0^1 f(t)\\, g(t)\\, \mathrm{d}t$ est $2$-linéaire (on dit aussi **bilinéaire**).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

L'ensemble $\mathcal{L}&#95;n(E;F)$ des applications $n$-linéaires de $E$ dans $F$ est un **sous-espace vectoriel** de $F^E$ (non réduit à $\\{0\\}$, stable par combinaisons linéaires).

Dans la suite, on supposera $E_1 = E_2 = \dots = E_n = E$. On note encore $\mathcal{L}&#95;n(E, F)$ l'ensemble $\mathcal{L}&#95;n(E^n, F)$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (symétrique, alternée)</span>

Soit $f \in \mathcal{L}&#95;n(E, F)$. On dit que $f$ est :

- **symétrique** si, pour tous $i \neq j$ et tous $(a_1,\dots,a_n) \in E^n$ :

$$f(a_1,\dots,a_i,\dots,a_j,\dots,a_n) = f(a_1,\dots,a_j,\dots,a_i,\dots,a_n)$$

- **alternée** si, pour tous $i \neq j$ : $a_i = a_j \Rightarrow f(a_1,\dots,a_i,\dots,a_j,\dots,a_n) = 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

$f$ est symétrique si et seulement si, pour toute permutation $\sigma \in \mathfrak{S}&#95;n$ :

$$f(a_{\sigma(1)}, \dots, a_{\sigma(n)}) = f(a_1, \dots, a_n)$$

En fait, il suffit de le vérifier pour les **transpositions** (elles engendrent $\mathfrak{S}&#95;n$).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2 (antisymétrique)</span>

$f$ est **antisymétrique** si et seulement si, pour toute permutation $\sigma \in \mathfrak{S}&#95;n$ :

$$f(a_1,\dots,a_n) = \varepsilon(\sigma)\, f(a_{\sigma(1)}, \dots, a_{\sigma(n)})$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

Si $\mathbb{K}$ est un corps de **caractéristique $\neq 2$** : $f$ alternée $\iff$ $f$ antisymétrique.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

**Sens direct.** Si $f$ est antisymétrique et $a_i = a_j$ ($i \neq j$), avec $\tau = (i\ j)$ :

$$f(a_1,\dots,a_n) = \varepsilon(\tau)\, f(a_{\tau(1)},\dots,a_{\tau(n)}) = -f(a_1,\dots,a_n)$$

donc $2 f(a_1,\dots,a_n) = 0$, d'où $f(a_1,\dots,a_n) = 0$ puisque $\mathrm{car}\\,\mathbb{K} \neq 2$.

**Réciproque.** Si $f$ est alternée :

$$0 = f(\dots, a_i + a_j, \dots, a_i + a_j, \dots) = f(\dots,a_i,\dots,a_i,\dots) + f(\dots,a_i,\dots,a_j,\dots) + f(\dots,a_j,\dots,a_i,\dots) + f(\dots,a_j,\dots,a_j,\dots)$$

$$= f(\dots,a_i,\dots,a_j,\dots) + f(\dots,a_j,\dots,a_i,\dots)$$

donc $f(\dots,a_j,\dots,a_i,\dots) = -f(\dots,a_i,\dots,a_j,\dots)$ ; en décomposant $\sigma$ en transpositions, on en déduit $f(a&#95;{\sigma(1)},\dots,a&#95;{\sigma(n)}) = \varepsilon(\sigma)\\, f(a_1,\dots,a_n)$.

</div>

### II. Formes n-linéaires alternées sur E

Désormais $F = \mathbb{K}$ : $\mathcal{L}&#95;n(E, F)$ est l'ensemble des **formes $n$-linéaires**.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On note $\mathcal{A}&#95;n(E)$ l'espace des **formes $n$-linéaires alternées** sur $E$.

</div>

**Étude des $n$-formes linéaires alternées.**

#### Cas m = 2

Soit $(e_1, e_2)$ une base de $E$. Supposons que $\mathcal{A}&#95;2(E) \neq \\{0\\}$ et soit $f \in \mathcal{A}&#95;2(E)$, $f \neq 0$. Quels que soient $v_1, v_2 \in E$, avec $v_1 = x&#95;{11} e_1 + x&#95;{12} e_2$ et $v_2 = x&#95;{21} e_1 + x&#95;{22} e_2$ :

$$f(v_1, v_2) = f(x_{11} e_1 + x_{12} e_2,\ x_{21} e_1 + x_{22} e_2) = (x_{11} x_{22} - x_{12} x_{21})\, f(e_1, e_2)$$

(car $f(e_1,e_1) = f(e_2,e_2) = 0$ et $f(e_2,e_1) = -f(e_1,e_2)$). Comme $f \neq 0$, $f(e_1, e_2) \neq 0$.

Soit $\Delta_e$ l'application $(E \times E \to \mathbb{K})$ définie par $\Delta_e(v_1, v_2) = x&#95;{11} x&#95;{22} - x&#95;{12} x&#95;{21}$. $\Delta_e$ est **bilinéaire**, **antisymétrique**, **non nulle** ($\Delta_e(e_1, e_2) = 1$) : $\Delta_e \in \mathcal{A}&#95;2(E)$, $\Delta_e \neq 0$. De plus, $\forall f \in \mathcal{A}&#95;2(E)$ : $f = d\\, \Delta_e$ avec $d = f(e_1, e_2)$.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Conclusion</span>

$\mathcal{A}&#95;2(E)$ est une **droite vectorielle** de base $\Delta_e$.

</div>

#### Cas m = 3

**Analyse.** Soit $f \in \mathcal{A}&#95;3(E)$, $(e_1,e_2,e_3)$ une base de $E$. Avec $v_i = \sum_j x&#95;{ij} e_j$ :

$$f(v_1,v_2,v_3) = \Big( \sum_{\sigma \in \mathfrak{S}_3} \varepsilon(\sigma)\, x_{1\sigma(1)} x_{2\sigma(2)} x_{3\sigma(3)} \Big) f(e_1,e_2,e_3)$$

(tous les autres termes sont nuls car $f$ est alternée ; sous chaque terme figure la permutation $\sigma$ correspondante : id, $(2\ 3)$, $(2\ 1)$, $(1\ 3)$, $(1\ 2\ 3)$, $(1\ 3\ 2)$).

**Synthèse.** On pose $\Delta_e(v_1,v_2,v_3) = \sum&#95;{\sigma \in \mathfrak{S}&#95;3} \varepsilon(\sigma) x&#95;{1\sigma(1)} x&#95;{2\sigma(2)} x&#95;{3\sigma(3)}$. On vérifie que $\Delta_e$ est $3$-linéaire, alternée, non nulle ($\Delta_e(e_1,e_2,e_3) = 1$).

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Conclusion</span>

$\mathcal{A}&#95;3(E)$ est une **droite vectorielle** sur $\mathbb{K}$, de base $\Delta_e$.

</div>

#### Cas général

Soit $(e_1,\dots,e_n)$ une base de $E$, $v_1,\dots,v_n$ des vecteurs de $E$, $v_i = \sum&#95;{j=1}^n x&#95;{ij} e_j$ ($i = 1,\dots,n$).

**Analyse.** Soit $f \in \mathcal{A}&#95;n(E)$ :

$$f(v_1,\dots,v_n) = \sum_{(i_1,\dots,i_n)} x_{1 i_1} \cdots x_{n i_n}\, f(e_{i_1},\dots,e_{i_n})$$

Mais si $i&#95;\ell = i_k$, alors $f(e&#95;{i_1},\dots,e&#95;{i_n}) = 0$ : on ne conserve dans la somme que les $n$-uplets $(i_1,\dots,i_n)$ tels que $i \mapsto i_k$... c'est-à-dire les permutations $\sigma \in \mathfrak{S}&#95;n$ :

$$f(v_1,\dots,v_n) = \sum_{\sigma \in \mathfrak{S}_n} \varepsilon(\sigma)\, x_{1\sigma(1)} \cdots x_{n\sigma(n)}\, f(e_1,\dots,e_n)$$

**Synthèse.** Soit $\Delta_e(v_1,\dots,v_n) = \sum&#95;{\sigma \in \mathfrak{S}&#95;n} \varepsilon(\sigma) x&#95;{1\sigma(1)} \cdots x&#95;{n\sigma(n)}$.

- $\Delta_e$ est $n$-linéaire ;
- $\Delta_e \neq 0$ car $\Delta_e(e_1,\dots,e_n) = 1$ (le seul terme non nul de la somme correspond à $\sigma = \mathrm{Id}$) ;
- montrons que $\Delta_e$ est **alternée** : supposons $v_i = v_j$, c'est-à-dire $\forall k,\ x&#95;{ik} = x&#95;{jk}$ ($i \neq j$).

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Lemme</span>

$\mathcal{S} = \\{\sigma \in \mathfrak{S}&#95;n \mid \sigma(i) < \sigma(j)\\}$ et $\mathcal{S}' = \\{\sigma \in \mathfrak{S}&#95;n \mid \sigma(i) > \sigma(j)\\}$ sont **complémentaires** dans $\mathfrak{S}&#95;n$, et $T : \sigma \mapsto \sigma \circ (i\ j)$ est une **bijection** de $\mathcal{S}$ dans $\mathcal{S}'$ (c'est une involution).

</div>

Alors :

$$\Delta_e(v_1,\dots,v_n) = \sum_{\sigma \in \mathcal{S}} \Big( \prod_{k \notin \{i,j\}} x_{k\sigma(k)} \Big) \varepsilon(\sigma) \big[ x_{i\sigma(i)} x_{j\sigma(j)} - x_{i\sigma(j)} x_{j\sigma(i)} \big] = 0$$

car $x&#95;{i\sigma(i)} = x&#95;{j\sigma(i)}$ et $x&#95;{j\sigma(j)} = x&#95;{i\sigma(j)}$. Donc $\Delta_e$ est alternée.

$\Delta_e$ est une forme $n$-linéaire alternée non nulle, donc $\forall d \in \mathbb{K},\ d\Delta_e \in \mathcal{A}&#95;n(E)$, et d'après l'analyse $\mathcal{A}&#95;n(E) \subset \mathbb{K}\Delta_e$ :

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

$\mathcal{A}&#95;n(E)$ est une **droite vectorielle** de base $\Delta_e$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

$$\forall f \in \mathcal{A}_n(E), \qquad f(v_1,\dots,v_n) = \Delta_e(v_1,\dots,v_n)\, f(e_1,\dots,e_n)$$

</div>

### III. Déterminants

#### 1) Déterminant d'un système de vecteurs

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $(v_1,\dots,v_n)$ $n$ vecteurs de $E$. On appelle **déterminant** de $(v_1,\dots,v_n)$ relativement à la base $\mathcal{e} = (e_1,\dots,e_n)$ de $E$ la quantité $\Delta_e(v_1,\dots,v_n)$ (où $\Delta_e$ est l'unique forme $n$-linéaire alternée non nulle telle que $\Delta_e(e_1,\dots,e_n) = 1$), notée $\det_e(v_1,\dots,v_n)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Avec $v_i = \sum_j x&#95;{ij} e_j$ :

$$\det_e(v_1,\dots,v_n) = \sum_{\sigma \in \mathfrak{S}_n} \varepsilon(\sigma)\, x_{1\sigma(1)} x_{2\sigma(2)} \cdots x_{n\sigma(n)}$$

et

$$\det_e(v_{\sigma(1)},\dots,v_{\sigma(n)}) = \varepsilon(\sigma)\, \det_e(v_1,\dots,v_n)$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

La première formule n'est que la propriété 2 précédente. Pour la seconde : $\det_e(v&#95;{\sigma(1)},\dots,v&#95;{\sigma(n)}) = \sum&#95;{\tau \in \mathfrak{S}&#95;n} \varepsilon(\tau)\\, x&#95;{\sigma\tau(1),1} \cdots x&#95;{\sigma\tau(n),n}$ ; comme $|\sigma(1),\dots,\sigma(n)| = \\{1,\dots,n\\}$, en posant $\rho = \sigma \tau$ et comme $\varepsilon$ est un morphisme, $\varepsilon(\tau) = \varepsilon(\sigma)^{-1}\varepsilon(\rho) = \varepsilon(\sigma)\varepsilon(\rho)$, d'où le résultat.

</div>

**Notation matricielle** (en colonnes) :

$$\det_e(v_1,\dots,v_n) = \begin{vmatrix} x_{11} & \cdots & x_{n1} \\ \vdots & & \vdots \\ x_{1n} & \cdots & x_{nn} \end{vmatrix}$$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2 (changement de base)</span>

Si $\mathcal{e}$ et $\mathcal{e}'$ sont deux bases de $E$ :

$$\det_{\mathcal{e}'}(v_1,\dots,v_n) = \det_e(e'_1,\dots,e'_n)\; \det_e(v_1,\dots,v_n)$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$(v_1,\dots,v_n) \mapsto \det&#95;{\mathcal{e}'}(v_1,\dots,v_n)$ est une forme $n$-linéaire alternée sur $E^n \to \mathbb{K}$, donc proportionnelle à $\det_e$ : il existe $\lambda$ tel que $\det&#95;{\mathcal{e}'} = \lambda \det_e$, avec $\lambda = \det&#95;{\mathcal{e}'}(e_1,\dots,e_n) = \det_e(P)$, $P$ matrice de passage de $\mathcal{e}$ à $\mathcal{e}'$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

$(v_1,\dots,v_n)$ est une **base** de $E$ si et seulement si $\det_e(v_1,\dots,v_n) \neq 0$ ($\mathcal{e}$ base quelconque de $E$).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

- Si $(v_1,\dots,v_n)$ est liée, il existe $(\lambda_1,\dots,\lambda_n) \neq 0$ avec $\sum_i \lambda_i v_i = 0$ ; si par exemple $\lambda_1 \neq 0$ :

$$\det_e(v_1,\dots,v_n) = \frac{1}{\lambda_1}\ \det_e\Big(\sum_i \lambda_i v_i,\, v_2, \dots, v_n\Big) = 0$$

- Réciproquement, si $(v_1,\dots,v_n)$ est une base, en prenant $\mathcal{e}' = (v_1,\dots,v_n)$, la formule de changement de base donne $1 = \det&#95;{\mathcal{e}'}(v_1,\dots,v_n) = \det_e(v_1,\dots,v_n)\\; \det&#95;{\mathcal{e}'}(e_1,\dots,e_n)$, et $\det&#95;{\mathcal{e}'}(e_1,\dots,e_n) \neq 0$ (matrice de passage inversible) : donc $\det_e(v_1,\dots,v_n) \neq 0$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- Dans $\mathbb{R}^2$ : $(\vec v_1, \vec v_2)$ est une base ssi $\begin{vmatrix} x_1 & y_1 \\\ x_2 & y_2 \end{vmatrix} \neq 0$.
- Dans $\mathbb{R}^3$ : $(v_1, v_2, v_3)$ est une base ssi $\begin{vmatrix} x_1 & y_1 & z_1 \\\ x_2 & y_2 & z_2 \\\ x_3 & y_3 & z_3 \end{vmatrix} \neq 0$.

</div>

#### 2) Déterminant d'un endomorphisme

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $u \in \mathcal{L}(E)$ et $\mathcal{e} = (e_1,\dots,e_n)$ une base de $E$. Pour $f \in \mathcal{A}&#95;n(E)$, l'application $(v_1,\dots,v_n) \mapsto f(u(v_1),\dots,u(v_n))$ est une forme $n$-linéaire alternée, donc il existe un scalaire $\lambda$ tel que

$$f(u(v_1),\dots,u(v_n)) = \lambda\, f(v_1,\dots,v_n)$$

$\lambda$ est **indépendant du choix de** $f$ et s'appelle le **déterminant de $u$**, noté $\det u$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $g$ est une autre base de $\mathcal{A}&#95;n(E)$ : $g = \lambda f$, donc $g(u(v_1),\dots,u(v_n)) = \lambda f(u(v_1),\dots,u(v_n)) = \lambda \mu\\, f(v_1,\dots,v_n) = \mu\\, g(v_1,\dots,v_n)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Si $\mathcal{e}$ est une base de $E$ : $\det u = \det_e(u(e_1),\dots,u(e_n))$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

On prend comme base de $\mathcal{A}&#95;n(E)$ : $v \mapsto \det_e(v)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$\det(u \circ v) = \det u\, \det v, \qquad \det(\alpha u) = \alpha^n \det u, \qquad \det \mathrm{Id} = 1$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\det \mathrm{Id} = \det_e(e_1,\dots,e_n) = 1$ ;

$\det(\alpha u) = \det_e(\alpha u(e_1),\dots,\alpha u(e_n)) = \alpha^n \det_e(u(e_1),\dots,u(e_n)) = \alpha^n \det u$ ;

$\det(u \circ v) = \det_e(u(v(e_1)),\dots,u(v(e_n))) = \det u\\; \det_e(v(e_1),\dots,v(e_n)) = \det u\\, \det v$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

$u$ est **inversible** si et seulement si $\det u \neq 0$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

- Si $u$ est inversible et $\mathcal{e}$ est une base de $E$ : $\mathcal{e}' = (u(e_1),\dots,u(e_n))$ est une base de $E$, donc $\det_e(\mathcal{e}') \neq 0$, i.e. $\det u \neq 0$.
- Réciproquement, si $\det u \neq 0$ : $\det_e(u(e_1),\dots,u(e_n)) \neq 0$, donc $(u(e_1),\dots,u(e_n))$ est une base de $E$ : $u$ est inversible.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $u \in \mathrm{GL}(E)$ : $\det u^{-1} = \dfrac{1}{\det u}$ (car $\det(u \circ u^{-1}) = \det \mathrm{Id} = 1 = \det u\\, \det u^{-1}$).

</div>

#### 3) Déterminant d'une matrice carrée

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $A \in \mathcal{M}&#95;n(\mathbb{K})$. $\det A$ est le déterminant, **relativement à la base canonique de $\mathbb{K}^n$**, des vecteurs colonnes $(C_1;\dots;C_n)$ de $A$ ($\det A$ est indépendant du choix de la base).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Soit $u \in \mathcal{L}(E)$ et $\mathcal{e}$ une base de $E$ :

$$\det u = \det\big(\mathrm{Mat}_e(u)\big)$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\det u = \det_e(u(e_1),\dots,u(e_n))$ ; avec $u(e_j) = \sum_i a&#95;{ij} e_i$ et $C_j$ la $j$-ème colonne de $A = \mathrm{Mat}&#95;e(u)$ : $\det u = \det A$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$\det(AB) = \det A\, \det B, \qquad \det(\alpha A) = \alpha^n \det A, \qquad \det I_n = 1$$

$A$ est inversible ssi $\det A \neq 0$, et alors $\det A^{-1} = (\det A)^{-1}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$\det {}^t\!A = \det A$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$A = \begin{pmatrix} a & b \\\ c & d \end{pmatrix}$ : $A$ est inversible ssi $\det A = ad - bc \neq 0$.

</div>

### IV. Calculs de déterminants

#### 1°) Opérations élémentaires

- échanger $2$ lignes (ou $2$ colonnes) change $\det A$ en $-\det A$ ;
- si $2$ lignes (ou $2$ colonnes) sont égales, $\det A = 0$ ;
- faire $L_i \to L_i - \alpha L_j$ (resp. $C_i \to C_i - \alpha C_j$) :

$$\det(v_1,\dots,v_i - \alpha v_j,\dots,v_n) = \det(v_1,\dots,v_n)$$

car $\det$ est alternée ; remplacer $L_i$ par $L_i - \alpha L_j$ ($i \neq j$) (resp. $C_i \to C_i - \alpha C_j$) **ne change pas le déterminant**.

#### 2°) Développement selon 1 ligne ou 1 colonne

Par linéarité sur la colonne $C_j = \sum_i a&#95;{ij} C_i$ :

$$\det(C_1,\dots,C_j,\dots,C_n) = \sum_{i=1}^n a_{ij}\, \det(C_1,\dots,C_i,\dots,C_n)$$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (cofacteur)</span>

$A&#95;{ij}$ s'appelle le **cofacteur** de $a&#95;{ij}$.

</div>

**a) Calcul de $A&#95;{nn}$.** Dans la matrice obtenue en remplaçant la dernière colonne de $A$ par $(0,\dots,0,1)$ :

$$\sum_{\sigma \in \mathfrak{S}_n} \varepsilon(\sigma)\, a_{\sigma(1),1} \cdots a_{\sigma(n-1),n-1}\, b_{\sigma(n),n} = 0 \text{ si } \sigma(n) \neq n, \qquad = 1 \text{ sinon}$$

Donc (bijection $\\{\sigma \in \mathfrak{S}&#95;n \mid \sigma(n) = n\\} \leftrightarrow \mathfrak{S}&#95;{n-1}$) :

$$A_{nn} = \sum_{\sigma \in \mathfrak{S}_{n-1}} \varepsilon(\sigma)\, a_{\sigma(1),1} \cdots a_{\sigma(n-1),n-1} = \det A'$$

où $A'$ est la matrice obtenue à partir de $A$ en supprimant la dernière ligne et la dernière colonne.

**b) Calcul de $A&#95;{ij}$.** En échangeant $C_j$ et $C&#95;{j+1}$ (etc.), cas $i = n$ et $j = n$ :

$$A_{ij} = (-1)^{i+j}\, \Delta_{ij}$$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$A_{ij} = (-1)^{i+j} \Delta_{ij}$$

où $\Delta&#95;{ij}$ est le déterminant de la matrice obtenue à partir de $A$ en supprimant la $i$-ème ligne et la $j$-ème colonne.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (mineur)</span>

$\Delta&#95;{ij}$ s'appelle le **mineur** de $a&#95;{ij}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (développement selon la jème colonne)</span>

$$\det A = \sum_{i=1}^n a_{ij} (-1)^{i+j} \Delta_{ij}$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

$$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

$$\begin{vmatrix} 1 & 2 & 0 \\ 0 & 1 & 2 \\ 5 & 2 & 1 \end{vmatrix} = 1 \times (-3) + 0 \times \Delta_2 + 5 \times 4 = 17 \qquad \text{(développement selon la 1re colonne)}$$

$$\begin{vmatrix} 2 & 4 & 1 \\ 3 & 2 & 2 \\ 1 & 7 & 6 \end{vmatrix} = 1 \times 1 - 2 \times (-2) = 5$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (développement selon la ième ligne)</span>

$$\det A = \sum_{j=1}^n a_{ij} (-1)^{i+j} \Delta_{ij}$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- matrice **diagonale** : $D_n = a_1 a_2 \cdots a_n = \prod&#95;{i=1}^n a_i$ ;
- matrice **triangulaire** : $D_n = a&#95;{11} a&#95;{22} \cdots a&#95;{nn}$.

</div>

#### 3°) Règle de Sarrus

Pour une matrice $3 \times 3$ :

$$\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = a(ei - fh) - d(bi - ch) + g(bf - ce) = aei + bfg + cdh - (ceg + dbi + afh)$$

#### 4°) Exemples d'utilisation des techniques

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

$$\begin{vmatrix} 1 & 6 & 6 & 5 & 7 \\ 8 & 2 & 4 & 1 & 5 \\ 0 & 0 & 3 & 1 & 8 \\ 0 & 1 & 5 & 2 & 6 \\ 16 & 4 & 8 & 2 & 10 \end{vmatrix} = 0 \qquad \text{car } L_5 = 2 L_2$$

$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 2 & 3 & 4 & 5 \\ 3 & 6 & 6 & 15 \\ 4 & 16 & 20 & 35 \end{vmatrix} \overset{C_i \leftarrow C_i - C_1}{=} \begin{vmatrix} 1 & 0 & 0 & 0 \\ 2 & 1 & 2 & 3 \\ 3 & 3 & 3 & 12 \\ 4 & 12 & 16 & 31 \end{vmatrix} = \begin{vmatrix} 1 & 2 & 3 \\ 3 & 3 & 12 \\ 12 & 16 & 31 \end{vmatrix} = \begin{vmatrix} 1 & 1 & 3 \\ 3 & 0 & 12 \\ 12 & 4 & 31 \end{vmatrix} = 51 - 12 = 39$$

- déterminant à $2$ paramètres ($a$ sur la diagonale, $b$ partout ailleurs) :

$$\Delta_n = \begin{vmatrix} a & b & \cdots & b \\ b & a & \ddots & \vdots \\ \vdots & \ddots & \ddots & b \\ b & \cdots & b & a \end{vmatrix} = (a - b)^{n-1}\big(a + (n-1)b\big)$$

(première méthode : $D_n = (a-b) D&#95;{n-1} + (a-b)^{n-1} b$ ; seconde méthode : $C_1 \leftarrow \sum_j C_j$, on factorise $a + (n-1)b$ sur la première colonne, il reste $a - b$ sur la diagonale du bloc restant).

- **Vandermonde** : pour $x_1, \dots, x_n \in \mathbb{C}$,

$$\Delta_n = \begin{vmatrix} 1 & 1 & \cdots & 1 \\ x_1 & x_2 & \cdots & x_n \\ x_1^2 & x_2^2 & \cdots & x_n^2 \\ \vdots & & & \vdots \\ x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1} \end{vmatrix} = \prod_{1 \leq i < j \leq n} (x_j - x_i)$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration (Vandermonde)</span>

Posons $\Delta(X)$ le déterminant de la matrice de Vandermonde où l'on remplace $x_n$ par $X$ dans la dernière colonne. D'après le développement par rapport à la dernière colonne, $\Delta(X) \in \mathbb{C}[X]$. De plus $\Delta(x_i) = 0$ pour $i = 1, \dots, n-1$ (deux colonnes égales), donc

$$\Delta(X) = \prod_{i=1}^{n-1} (X - x_i) \times Q(X), \qquad \Delta(x_n) = \Delta = \prod_{i=1}^{n-1} (x_n - x_i)\, Q(x_n)$$

**Calcul de $\Delta_n$.** Opérations $C_j \leftarrow C_j - x_n C&#95;{j-1}$ pour $j = n, n-1, \dots, 2$ : chaque ligne $x_i^k$ devient $x_i^{k-1}(x_i - x_n)$, d'où

$$\Delta_n = (-1)^{n-1} \prod_{i=1}^{n-1} (x_i - x_n)\; \Delta_{n-1} = \prod_{1 \leq i < j \leq n} (x_j - x_i)$$

**2ème méthode.** Soit $P(X) = (X - x_1)\cdots(X - x&#95;{n-1}) = \sum&#95;{k=0}^{n-1} a_k X^k$ avec $a&#95;{n-1} = 1$. Dans $\Delta_n$, remplaçons la dernière ligne $L_n$ par $L_n \leftarrow \sum&#95;{k=0}^{n-1} a_k L&#95;{k+1}$ : la $i$-ème entrée de la nouvelle dernière ligne vaut $\sum&#95;{k=0}^{n-1} a_k x_i^k = P(x_i) = 0$ pour $i = 1,\dots,n-1$. En développant selon cette dernière ligne, il ne reste que le cofacteur de $P(x_n)$ :

$$\Delta_n = P(x_n)\, \Delta_{n-1} = \prod_{i=1}^{n-1} (x_n - x_i)\; \Delta_{n-1} = \prod_{1 \leq i < j \leq n} (x_j - x_i)$$

</div>

### Calcul matriciel par blocs

#### 1. Définition d'une matrice par blocs

Soit $A$ une matrice de $\mathcal{M}&#95;{n,p}(\mathbb{K})$ de terme général $a&#95;{ij}$. On peut écrire $A$ sous la forme

$$A = \begin{pmatrix} A_1 & A_2 \\ A_3 & A_4 \end{pmatrix}$$

avec $A_1 = (a&#95;{ij})&#95;{1 \leq i \leq m,\ 1 \leq j \leq q} \in \mathcal{M}&#95;{m,q}(\mathbb{K})$, $A_2 \in \mathcal{M}&#95;{m, p-q}(\mathbb{K})$, $A_3 \in \mathcal{M}&#95;{n-m, q}(\mathbb{K})$, $A_4 \in \mathcal{M}&#95;{n-m, p-q}(\mathbb{K})$. On parle alors de **description par blocs**.

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque et généralisation</span>

Les dimensions de $A_1$ imposent celles des quatre autres sous-matrices.

Soient $n_1, \dots, n_k$ et $p_1, \dots, p&#95;\ell$ des entiers strictement positifs tels que $n = n_1 + \dots + n_k$ et $p = p_1 + \dots + p&#95;\ell$. On peut alors découper $A$ en $k\ell$ blocs :

$$A = \begin{pmatrix} A_{11} & \cdots & A_{1\ell} \\ \vdots & & \vdots \\ A_{k1} & \cdots & A_{k\ell} \end{pmatrix}, \qquad A_{ij} \in \mathcal{M}_{n_i, p_j}(\mathbb{K})$$

</div>

#### 2. Multiplication par blocs

Soient à multiplier les deux matrices $A \in \mathcal{M}&#95;{n,p}(\mathbb{K})$ et $B \in \mathcal{M}&#95;{p,q}(\mathbb{K})$ :

$$A = \begin{pmatrix} A_1 & A_2 \\ A_3 & A_4 \end{pmatrix}, \qquad B = \begin{pmatrix} B_1 & B_2 \\ B_3 & B_4 \end{pmatrix}$$

avec $A_1 \in \mathcal{M}&#95;{m,r}(\mathbb{K})$ et $B_1 \in \mathcal{M}&#95;{r,s}(\mathbb{K})$. Alors :

$$AB = \begin{pmatrix} A_1 B_1 + A_2 B_3 & A_1 B_2 + A_2 B_4 \\ A_3 B_1 + A_4 B_3 & A_3 B_2 + A_4 B_4 \end{pmatrix}$$

Tout se passe donc comme si l'on multipliait des matrices de dimensions $(2,2)$ — à condition que les différents produits de blocs soient bien définis : le nombre de colonnes de $A_1$ doit être égal au nombre de lignes de $B_1$ (ici $r$).

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

$$\begin{pmatrix} 0 & -1 & & \\ -1 & 0 & & \\ & & I_3 & \end{pmatrix} \times \begin{pmatrix} I_2 & & \\ & -I_3 & \end{pmatrix} = \begin{pmatrix} 0 & -1 & & \\ -1 & 0 & & \\ & & & -I_3 \end{pmatrix}$$

**Généralisation** : $A$ matrice à $k \times l$ blocs par $B$ à $l \times d$ blocs (le premier indice désigne le nombre de blocs sur les indices de lignes — « en hauteur » — et le second le nombre de blocs construits sur les indices de colonnes — « en largeur »). Il faut que le nombre de colonnes $p_j$ des blocs $A&#95;{ij}$ soit égal au nombre de lignes $n_j$ des blocs $B&#95;{ji}$ (quel que soit $i$). On calcule alors le produit $AB$ comme si on multipliait deux matrices de dimensions $(k, l)$ et $(l, d)$ dont les coefficients sont des... matrices !

</div>

#### 3. Déterminant par blocs

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Soit $M$ une matrice carrée décrite par blocs par $M = \begin{pmatrix} A & B \\\ 0 & C \end{pmatrix}$, où $A$ et $C$ sont des **blocs carrés**. Alors :

$$\det(M) = \det(A)\, \det(C)$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$$\det(M) = \sum_{\sigma \in \mathfrak{S}_n} \varepsilon(\sigma)\, m_{1\sigma(1)} m_{2\sigma(2)} \cdots m_{n\sigma(n)}$$

Soit $p$ la dimension de $A$ ($C$ est alors de dimension $n - p$). Remarquons que pour $k > p$ : si $\sigma(k) \leq p$ alors $m&#95;{k\sigma(k)} = 0$ ; si $\sigma(k) > p$ alors $m&#95;{k\sigma(k)} = c&#95;{k-p,\\, \sigma(k)-p}$.

Soit alors $S = \\{\sigma \in \mathfrak{S}&#95;n \mid \sigma(\mathbb{N}&#95;p) \subset \mathbb{N}&#95;p\\} = \\{\sigma \in \mathfrak{S}&#95;n \mid \sigma(\mathbb{N}&#95;p) = \mathbb{N}&#95;p\\} = \\{\sigma \in \mathfrak{S}&#95;n \mid \sigma(\\{p+1,\dots,n\\}) = \\{p+1,\dots,n\\}\\}$, car les éléments du groupe symétrique sont des bijections.

Donc si $\sigma \notin S$, il existe $k > p$ tel que $\sigma(k) \leq p$, et la participation de $\sigma$ dans l'expression du déterminant est nulle. Finalement :

$$\det(M) = \sum_{\sigma \in S} \varepsilon(\sigma)\, m_{1\sigma(1)} \cdots m_{n\sigma(n)}$$

Étudions $S$ : pour $\sigma \in S$, posons $\sigma_1$ la restriction de $\sigma$ à $\mathbb{N}&#95;p$ et $\sigma_2$ sa restriction à $\\{p+1,\dots,n\\}$. $\sigma_1$ est une permutation de $\\{1,\dots,p\\}$ et $\sigma_2$ une permutation de $\\{p+1,\dots,n\\}$, et $\sigma = \sigma_1 \sigma_2$. Réciproquement, tout produit $\sigma_1 \sigma_2$ de telles permutations est clairement élément de $S$ :

$$S = \{\sigma_1 \sigma_2 \mid \sigma_1 \in \mathfrak{S}(\{1,\dots,p\}),\ \sigma_2 \in \mathfrak{S}(\{p+1,\dots,n\})\}$$

En remarquant que pour $i > p$ et $j > p$, $m&#95;{ij} = c&#95;{i-p, j-p}$, et que la signature est un morphisme, il vient :

$$\det(M) = \Big( \sum_{\sigma_1 \in \mathfrak{S}_p} \varepsilon(\sigma_1)\, a_{1\sigma_1(1)} \cdots a_{p\sigma_1(p)} \Big) \Big( \sum_{\sigma_2 \in \mathfrak{S}_{n-p}} \varepsilon(\sigma_2)\, c_{1\sigma_2(1)} \cdots c_{(n-p)\sigma_2(n-p)} \Big) = \det(A)\, \det(C)$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Le résultat s'étend par récurrence aux **matrices triangulaires par blocs** à $n$ blocs sur la diagonale.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$M$ diagonale par blocs, avec des blocs $\begin{pmatrix} 0 & 1 \\\ -1 & 0 \end{pmatrix}$ sur la diagonale : $\det(M) = 1$.

</div>

### V. Applications des déterminants

#### 1) Diagonalisation

Soit $A \in \mathcal{M}&#95;n(\mathbb{K})$. $\lambda$ est **valeur propre** de $A$ ssi $\ker(A - \lambda I) \neq \\{0\\}$ ssi $A - \lambda I$ est non inversible ssi $\det(A - \lambda I) = 0$ :

$$\begin{vmatrix} a_{11} - \lambda & \cdots & a_{1n} \\ \vdots & & \vdots \\ a_{n1} & \cdots & a_{nn} - \lambda \end{vmatrix} = 0$$

$\chi_A(\lambda)$ est un polynôme en $\lambda$ de degré au plus $n$.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$\chi_A(\lambda)$ est un **polynôme en $\lambda$ de degré $n$**, dont les racines sont les valeurs propres de $A$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\chi_A(\lambda) = \sum&#95;{\sigma \in \mathfrak{S}&#95;n} \varepsilon(\sigma)\\, b&#95;{1\sigma(1)} \cdots b&#95;{n\sigma(n)}$ avec $B = A - \lambda I$. En développant, $\chi_A(\lambda)$ est de degré au plus $n$, et le terme de plus haut degré est obtenu pour $\sigma = \mathrm{Id}$ : $(-\lambda)^n$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$A = \begin{pmatrix} 4 & 2 \\\ -1 & 1 \end{pmatrix}$ : $A - \lambda I = \begin{pmatrix} 4-\lambda & 2 \\\ -1 & 1-\lambda \end{pmatrix}$,

$$\det(A - \lambda I) = (4-\lambda)(1-\lambda) + 2 = \lambda^2 - 5\lambda + 6 = (\lambda - 2)(\lambda - 3)$$

</div>

#### 2°) Calcul de $A^{-1}$

Par développement selon la $j$-ème colonne : $\det A = \sum&#95;{j=1}^n a&#95;{ij} A&#95;{ij}$. De même, $\sum_i a&#95;{ik} A&#95;{ij} = \delta&#95;{jk} \det A$ (le déterminant $\det(C_1,\dots,C_j,\dots,C_n)$ vaut $0$ dès que deux colonnes sont égales), avec ${}^t\widetilde{A}&#95;{ij} = A&#95;{ji}$ (${}^t\widetilde{A}$ est la transposée de la matrice des cofacteurs, appelée **comatrice**) :

$${}^t\widetilde{A}\, A = (\det A)\, I_n$$

Si $A$ est inversible :

$$\boxed{A^{-1} = \frac{1}{\det A}\, {}^t\widetilde{A}}$$

#### 3°) Orientation d'un espace vectoriel de dimension $n$

Soit $E$ un espace vectoriel de dimension $n$.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 1</span>

On appelle **base orientée** de $E$ une liste ordonnée de $n$ vecteurs formant une base de $E$.

</div>

L'ordre des vecteurs a une importance.

Soit $\mathcal{E}$ l'ensemble des bases orientées de $E$. On définit sur $\mathcal{E}$ la relation $\mathcal{R}$ par :

$$\varepsilon \mathrel{\mathcal{R}} \varepsilon' \iff \det\nolimits_{\varepsilon}(\varepsilon') > 0$$

où $\det&#95;{\varepsilon}(\varepsilon')$ désigne le déterminant de la matrice de passage de la base $\varepsilon$ à la base $\varepsilon'$.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$\mathcal{R}$ est une **relation d'équivalence** :

- $\det&#95;{\varepsilon}(\varepsilon) = 1 > 0$ : $\mathcal{R}$ est réflexive ;
- si $\det&#95;{\varepsilon}(\varepsilon') > 0$ et $\det&#95;{\varepsilon}(\varepsilon'') > 0$, alors
  $\det&#95;{\varepsilon}(\varepsilon')\\, \det&#95;{\varepsilon'}(\varepsilon'') = \det&#95;{\varepsilon}(\varepsilon'') > 0$,
  donc $\det&#95;{\varepsilon'}(\varepsilon'') > 0$ : $\mathcal{R}$ est transitive ;
- $\det&#95;{\varepsilon'}(\varepsilon) = \dfrac{1}{\det&#95;{\varepsilon}(\varepsilon')} > 0$ : $\mathcal{R}$ est symétrique.

</div>

Soit $\varepsilon = (e_1, \dots, e_n)$ une base donnée de $E$. La relation $\mathcal{R}$ partage $\mathcal{E}$ en deux classes :

$$\mathcal{E}_+ = \{\varepsilon' \in \mathcal{E} \mid \det_{\varepsilon}(\varepsilon') > 0\}, \qquad
\mathcal{E}_- = \{\varepsilon' \in \mathcal{E} \mid \det_{\varepsilon}(\varepsilon') < 0\} \ \text{(l'autre classe)}$$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 2</span>

**Orienter** $E$, c'est privilégier une des deux classes. On appelle **base directe** les éléments de la classe choisie (ou **bases positives**), et **base indirecte** (négative ou rétrograde) les éléments de l'autre classe.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque (dimension 2)</span>

Sur le dessin du cours : $(e_1', e_2')$ est une base directe, $(e_1, e_2)$ est une base indirecte.

</div>

#### 4°) Systèmes linéaires

##### a) Résolution

Soit $\mathcal{S}$ un système de $n$ équations à $p$ inconnues :

$$\mathcal{S} : \begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1p} x_p = b_1 \\
\qquad \vdots \\
a_{n1} x_1 + a_{n2} x_2 + \dots + a_{np} x_p = b_n
\end{cases}$$

ce qui équivaut à $AX = B$, avec

$$X = \begin{pmatrix} x_1 \\ \vdots \\ x_p \end{pmatrix}, \qquad
B = \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix}, \qquad
A = (a_{ij})_{\substack{1 \leq i \leq n \\ 1 \leq j \leq p}} \in \mathcal{M}_{n,p}(\mathbb{K})$$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle **rang du système** $\mathcal{S}$ le rang de la matrice associée $A$ (on dira « ce rang »).

</div>

##### b) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

Si le système $\mathcal{S}$ admet une solution $X_0$, alors, pour tout $X$ :

$$X \text{ solution de } \mathcal{S} \iff AX = B \iff A(X - X_0) = 0 \iff X \in X_0 + \mathrm{Ker}\, A$$

L'ensemble des solutions est donc $X_0 + \mathrm{Ker}\\, A$ : c'est un **sous-espace affine** de $\mathbb{K}^p$ ; lorsque $B = 0$ (système homogène), c'est le **sous-espace vectoriel** $\mathrm{Ker}\\, A$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

Si $B \in \mathrm{Im}\\, A$, alors $\mathcal{S}$ est **compatible**.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 3</span>

Si $n = p$ et $\mathrm{rg}\\, A = n$, alors $\mathrm{Ker}\\, A = \\{0\\}$ et $\mathcal{S}$ est réduit à un **singleton** (une unique solution).

En effet, $\dim \mathbb{K}^n = n = \dim \mathrm{Im}\\, A + \dim \mathrm{Ker}\\, A$ avec $\mathrm{Im}\\, A \subset \mathbb{K}^n$ ; si $\mathrm{rg}\\, A = n$, alors $\mathrm{Im}\\, A = \mathbb{K}^n$ et $A$ est injective (car $\mathrm{Ker}\\, A = \\{0\\}$).

</div>

##### c) Systèmes de Cramer

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle **système de Cramer** un système $n \times n$ (autant d'équations que d'inconnues).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

Un système de Cramer admet **une et une seule solution** :

$$\mathcal{S} \text{ est de Cramer} \iff \mathrm{rg}\, A = n \iff \det A \neq 0$$

</div>

Alors $A$ est inversible (car $\mathrm{rg}\\, A = n$) et $X = A^{-1} B$, soit, composante par composante :

$$x_i = \frac{1}{\det A} \sum_{k=1}^{n} (A^{-1})_{ik}\, b_k
= \frac{1}{\det A} \big( (A^{-1})_{i\bullet},\, B \big)$$

c'est-à-dire, en développant le déterminant :

$$x_i = \frac{1}{\det A}
\begin{vmatrix}
a_{11} & \cdots & a_{1,i-1} & b_1 & a_{1,i+1} & \cdots & a_{1n} \\
\vdots & & \vdots & \vdots & \vdots & & \vdots \\
a_{n1} & \cdots & a_{n,i-1} & b_n & a_{n,i+1} & \cdots & a_{nn}
\end{vmatrix}$$

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Formule de Cramer</span>

$$x_i = \frac{\det(C_1, \dots, C_{i-1}, B, C_{i+1}, \dots, C_n)}{\det A}, \qquad i = 1, \dots, n$$

où $C_j$ désigne la $j$-ième colonne de $A$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple ($n = 2$)</span>

$$\begin{cases} a_{11} x_1 + a_{12} x_2 = b_1 \\ a_{21} x_1 + a_{22} x_2 = b_2 \end{cases}
\implies
x_1 = \frac{\begin{vmatrix} b_1 & a_{12} \\ b_2 & a_{22} \end{vmatrix}}{\begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}}, \qquad
x_2 = \frac{\begin{vmatrix} a_{11} & b_1 \\ a_{21} & b_2 \end{vmatrix}}{\begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}}$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Échanger deux colonnes $C_i \leftrightarrow C_j$ échange le rôle des inconnues $x_i$ et $x_j$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$\begin{cases}
x + m y + z = 1 \\
m x + y + (m-1) z = m \\
x + y + z = m + 1
\end{cases}$$

</div>

##### d) Algorithme de Gauss

On applique l'algorithme de Gauss à la matrice augmentée $A \mid B$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$\begin{cases}
3x + 2y - z = 1 \\
x - y + z = 0 \\
2x + y - 5z = -1 \\
\lambda x - y + 2z = 0
\end{cases}
\qquad
A = \begin{pmatrix}
3 & 2 & -1 & 1 \\
1 & -1 & 1 & 0 \\
2 & 1 & -5 & -1 \\
\lambda & -1 & 2 & 0
\end{pmatrix}$$

</div>

#### 5°) Application au calcul de l'inverse d'une matrice

Soit $A$ inversible d'inverse $A'$ : $A A' = I_n$. En notant $C_i'$ la $i$-ième colonne de $A'$ :

$$A C_i' = E_i = \begin{pmatrix} 0 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{pmatrix} \ \text{($1$ en position $i$)}$$

Pour trouver $A'$, on résout les $n$ systèmes $AX = E_i$ ($E_i$ colonne, $i = 1, \dots, n$) : **on applique Gauss à la matrice augmentée** $(A \mid I_n)$.

## IV. Exercices — feuille n° 24

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 24 — Groupe symétrique, déterminants (énoncés)</span>

**Groupe symétrique**

<ol class="enonces">
<li>Décomposer en produit de transpositions, et en produit de cycles disjoints, les permutations suivantes :
<ol>
<li>$\rho = (2, 4, 1, 6, 5, 3, 7)$ ; calculer $\varepsilon(\rho)$ et $\rho^{68}$</li>
<li>$q = (5, 1, 7, 6, 4, 2, 3)$ ; calculer $\varepsilon(q)$ et $q^{1964}$</li>
</ol>
</li>
<li>
<ol>
<li>Montrer que la transposition $(i\ j)$ s'écrit comme produit de transpositions du type $(1, k)$.</li>
<li>En déduire que $(\tau_k = (1, k))&#95;{k = 2, \dots, n}$ engendre $\mathfrak{S}&#95;n$.</li>
<li>Démontrer de même que les transpositions $(i, i+1)$ engendrent $\mathfrak{S}&#95;n$.</li>
</ol>
</li>
<li>Montrer que $\mathfrak{S}&#95;n$ est engendré par les cycles de longueur 3 ($n \geq 3$).</li>
</ol>

**Déterminants**

<ol class="enonces">
<li>Calculer le déterminant d'une matrice antisymétrique.</li>
<li>Trouver $d \in \mathbb{R}$ pour que $(P_1, P_2, P_3)$ forment une base de $\mathbb{R}&#95;3[X]$, avec
$$P_1 = d + x + x^2, \qquad P_2 = 1 + dx + x^2, \qquad P_3 = 1 + x + dx^2$$
</li>
<li>Calculer les déterminants suivants :
<ol>
<li>$\begin{vmatrix} d & a & b \\\ a & d & c \\\ b & c & 0 \end{vmatrix}$</li>
<li>$\begin{vmatrix} a-b-c & 2a & 2a \\\ 2b & b-c-a & 2b \\\ 2c & 2c & c-a-b \end{vmatrix}$</li>
<li>$\begin{vmatrix} a+b & ab & a^2+b^2 \\\ b+c & bc & b^2+c^2 \\\ c+a & ca & c^2+a^2 \end{vmatrix}$</li>
<li>$D_n = \begin{vmatrix} 2 & \lambda & & 0 \\\ \lambda & 2 & \ddots & \\\ & \ddots & \ddots & \lambda \\\ 0 & & \lambda & 2 \end{vmatrix}$</li>
<li>$\Delta_n = \begin{vmatrix} 0 & 1 & \cdots & 1 \\\ 1 & 0 & \ddots & x \\\ \vdots & \ddots & \ddots & \vdots \\\ 1 & x & \cdots & 0 \end{vmatrix}$</li>
<li>$\begin{vmatrix} 1 & 2 & \cdots & n \\\ m & 1 & 2 & \cdots & n-1 \\\ \vdots & \ddots & \ddots & & \vdots \\\ m & \cdots & m & 1 \end{vmatrix}$</li>
<li>$D_n = \begin{vmatrix} a_1 & 1 & \cdots & a_n \\\ -1 & x & \ddots & 0 \\\ \vdots & \ddots & \ddots & \vdots \\\ 0 & \cdots & -1 & x \end{vmatrix}$</li>
<li>$\det(A)$ avec $a&#95;{ij} = i - j$</li>
<li>$\det(A)$ avec $a&#95;{ij} = \dbinom{j}{m+i}$, $m \in \mathbb{N}$ fixé</li>
</ol>
</li>
<li>Soit
$$D_n(x) = \begin{vmatrix} 1 & 1 & \cdots & 1 \\ 1 & 1-x & & 1 \\ \vdots & & \ddots & \vdots \\ 1 & 1 & \cdots & 1-x \end{vmatrix}$$
Calculer $D_n(x)$ pour $x = 0$ et $x = n-1$, et en déduire $D_n(x)$.</li>
<li>Soit
$$D_n = \begin{vmatrix} x_1 & a & \cdots & a \\ b & x_2 & \ddots & \vdots \\ \vdots & \ddots & \ddots & a \\ b & \cdots & b & x_n \end{vmatrix}$$
Introduire $D_n(x)$, le déterminant obtenu en ajoutant $x$ à tous les coefficients de $D_n$.
<ol>
<li>Montrer que $D_n(x)$ est un polynôme en $x$ de degré $\leq 1$.</li>
<li>En déduire $D_n$.</li>
</ol>
</li>
</ol>

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 24 (suite) — Déterminants, systèmes linéaires (énoncés)</span>

<ol class="enonces">
<li>Soit $a_1, \dots, a_n, b_1, \dots, b_n$ $2n$ complexes tels que $\forall i, j,\ a_i + b_j \neq 0$. Calculer $\det M$ où $M$ est la matrice de terme général $m&#95;{ij} = a_i + b_j$ (on pourra introduire une fraction rationnelle astucieusement choisie).</li>
<li>Pour quelles valeurs de $a$ la matrice suivante est-elle diagonalisable ? inversible ?
$$A = \begin{pmatrix} 6 & 2 & 0 \\ 2 & 3 & 0 \\ a^2 - 7a & a - 7 & a \end{pmatrix}$$</li>
<li>Résoudre le système selon les valeurs du réel $m$ :
$$\begin{cases}
(1-m) x + (2m+1) y + (2m+2) z = m \\
m x + m y + z = 2m+2 \\
2x + (m+1) y + (m-1) z = m^2 - 2m + 9
\end{cases}$$</li>
<li>Peut-on trouver $a, b, c$ pour que le système admette deux solutions réelles ?
$$\begin{cases}
4x + 12y - 3z = 1 \\
x + 3y + 2z = 1 \\
5x + 15y + 7z = a \\
2x + 6y + z = b \\
x + 3y + 5z = c
\end{cases}$$</li>
<li>Soit $(a_1, \dots, a_n) \in \mathbb{C}^n$ et le système $\mathcal{S}$ :
$$\begin{cases}
x_1 + x_2 = a_1 \\
x_2 + x_3 = a_2 \\
\qquad \vdots \\
x_n + x_1 = a_n
\end{cases}$$
Trouver une CNS sur les $a_i$ pour que $\mathcal{S}$ ait des solutions, et résoudre $\mathcal{S}$.</li>
<li>Résoudre
$$\begin{cases}
4x + 7y + 3z - 2t = 9 \\
2x - y - 4z + 3t = 13 \\
3x + 2y - 7z - 4t = 12 \\
5x - 3y + 3z + 5t = 13
\end{cases}
\qquad \text{et} \qquad
\begin{cases}
7x + 13y - 4z = 16 \\
13x - 7y - 3z = 3 \\
8x + 2y - 5z = 5
\end{cases}$$</li>
<li>Si c'est possible, inverser la matrice
$$A = \begin{pmatrix} 1 & 0 & 2 & 3 \\ 4 & 1 & 5 & 0 \\ -1 & 2 & -3 & 4 \\ 2 & 1 & 3 & 4 \end{pmatrix}$$</li>
<li>On considère une plaque carrée au bord de laquelle est imposée une tension. La répartition des potentiels est régie par la règle : « le potentiel d'un carré intérieur ($0$) est la moyenne des potentiels des carrés adjacents ($x$) ». Montrer que si les potentiels de bord sont imposés, il existe une unique répartition des potentiels intérieurs.</li>
</ol>

</div>
