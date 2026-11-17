---
layout: chapitre
title: "Dénombrement"
numero: 2
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Algèbre"
source: "Math/Math Sup/Algèbre/02 Dénombrement"
pages: 20
---

## I. Axiomatique de $\mathbb{N}$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Axiome</span>

Il existe un ensemble $\mathbb{N}$ non vide qui vérifie :

- $A_1$ : $\mathbb{N}$ est ordonné par une relation d'ordre $\leq$ et, pour $\leq$, toute partie non vide admet un **ppe** (plus petit élément) ;
- $A_2$ : toute partie majorée non vide admet un **pge** (plus grand élément) ;
- $A_3$ : $\mathbb{N}$ n'a pas de pge.

</div>

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $\mathbb{N}$ admet un ppe, noté $0$ ;
- $\mathbb{N}$ est **totalement ordonné** ;
- tout $a \in \mathbb{N}$ admet un **successeur** $a^+ \in \mathbb{N}$, c'est-à-dire tel que $a^+ > a$ et $]a, a^+[ \cap \mathbb{N} = \varnothing$ ;
- tout $a$ non nul admet un **prédécesseur** $a^- \in \mathbb{N}$ tel que $a^- < a$ et $]a^-, a[ \cap \mathbb{N} = \varnothing$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\mathbb{N}$ est non vide et $\mathbb{N} \subset \mathbb{N}$, donc $\mathbb{N}$ admet un ppe d'après $A_1$ ; on le note $0$.

Quels que soient $x, y \in \mathbb{N}$, on a $\\{x, y\\} \subset \mathbb{N}$, donc $\\{x, y\\}$ admet un ppe : si c'est $x$, alors $x \leq y$, sinon c'est $y$ et $y \leq x$. Ainsi $\mathbb{N}$ est totalement ordonné.

Soit $a \in \mathbb{N}$ et posons $E_a^+ = \\{x \in \mathbb{N} \mid x > a\\}$. Si $E_a^+$ était vide, on aurait $x \leq a$ pour tout $x \in \mathbb{N}$ (car $\mathbb{N}$ est totalement ordonné), et $a$ serait un pge de $\mathbb{N}$, ce qui contredit $A_3$. Donc $E_a^+$ est non vide et admet un ppe $a^+$ d'après $A_1$. De plus $]a, a^+[ \cap \mathbb{N} = \varnothing$ : car si $b \in \mathbb{N}$ vérifiait $a < b < a^+$, alors $b \in E_a^+$ donc $b \geq a^+$, absurde.

Posons $E_a^- = \\{x \in \mathbb{N} \mid x < a\\}$. Si $a$ est non nul, alors $a \neq 0$ (car $0$ est le ppe de $\mathbb{N}$), donc $E_a^-$ est non vide ; elle est majorée par $a$, donc elle admet un pge $a^-$ d'après $A_2$. Alors $]a^-, a[ \cap \mathbb{N} = \varnothing$ par caractérisation du pge.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

On note $a^+ = a + 1$ et $a^- = a - 1$. On a de plus $(a^+)^- = a$ et $(a^-)^+ = a$. À partir de là, on construit l'addition.

</div>

## II. Principe de récurrence

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème (principe de récurrence)</span>

Si $A$ est une partie de $\mathbb{N}$ contenant $0$ et qui vérifie
$(n \in A \Rightarrow (n+1) \in A)$, alors $A = \mathbb{N}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Posons $E = \mathbb{N} \setminus A$. Si $E$ est non vide, il admet un ppe $b$, et $b \neq 0$ car $0 \in A$. Alors $b - 1 \notin E$ car $b$ est le ppe de $E$ et $b - 1 < b$ ; donc $b - 1 \in A$. Mais alors $(b-1) + 1 = b \in A$, ce qui contredit $b \in E$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $P(n)$ est un **prédicat** tel que $P(0)$ est vrai et $P(n) \Rightarrow P(n+1)$, alors $P(n)$ est vrai pour tout $n \in \mathbb{N}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $A = \\{n \in \mathbb{N} \mid P(n) \text{ est vrai}\\}$. $A$ contient $0$ ; si $n \in A$, alors $P(n)$ est vrai, donc $P(n+1)$ est vrai, donc $n+1 \in A$ : ainsi $A = \mathbb{N}$ d'après le théorème.

</div>

### Variantes de récurrence

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Variantes de récurrence</span>

- si $P(n_0)$ est vraie et si, pour $n \geq n_0$, $P(n) \Rightarrow P(n+1)$, alors $P(n)$ est vraie pour tout $n \geq n_0$ ;
- si $P(0), \dots, P(n_0)$ sont vraies et si, pour tout $n \geq n_0$, $\big[P(0), \dots, P(n)\big] \Rightarrow P(n+1)$, alors $P(n)$ est vraie dès que $n \geq n_0$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Application de la récurrence à une propriété $H_n$ portant sur « une boîte de $n$ crayons » ($H_1$ vraie ; de $H_n$ on déduit $H&#95;{n+1}$ en considérant les paquets ① ② ③ d'une boîte de $n+1$ crayons). *Passage partiellement illisible sur le scan.*

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Phrases clés</span>

1) la propriété est vraie au rang $n_0$ ;
2) la propriété est récurrente à partir du rang $n_0$ ;

donc elle est vraie pour tout $n \geq n_0$.

</div>

## III. Division euclidienne

### 1) Rappel sur la division

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $a$ **divise** $b$, noté $a \mid b$, s'il existe $q \in \mathbb{N}$ tel que $b = aq$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- la relation $\mid$ est une **relation d'ordre partiel** sur $\mathbb{N}$ (et $0$ en est le pge, car $a \mid 0$ pour tout $a \in \mathbb{N}$) ;
- si $a \neq 0$, le quotient est unique et on le note $q = \dfrac{b}{a}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

- $\mid$ est réflexive : $\forall a \in \mathbb{N},\ a \cdot 1 = a$ ;
- elle est transitive : si $a \mid b$ et $b \mid c$, alors $b = ax$ et $c = by$, donc $c = a(xy)$ : ainsi $a \mid c$ ;
- elle est antisymétrique : si $b \mid a$ et $a \mid b$, alors $a = bx$ et $b = ay$, donc $a = axy$ ; si $a = 0$ alors $b = 0$ ; si $a \neq 0$, alors $xy = 1$ donc $x = y = 1$ et $a = b$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Application</span>

Quel que soit $n \in \mathbb{N}$, $4^n + 6n - 1$ est multiple de $9$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Par récurrence sur $n$. Pour $n = 0$ : $4^0 - 1 = 0$ est multiple de $9$. Supposons, pour un certain $n \geq 0$, $4^n + 6n - 1$ multiple de $9$. Alors

$$4^{n+1} + 6(n+1) - 1 = (3+1)\,4^n + 6n + 6 = 3\,(4^n + 2) + (4^n + 6n - 1)$$

Or $4^n + 2$ est multiple de $3$ (récurrence immédiate : $4^{n+1} + 2 = 3 \cdot 4^n + (4^n + 2)$), donc $4^{n+1} + 6(n+1) - 1$ est multiple de $9$ : la propriété est héréditaire.

</div>

### 2) Division euclidienne

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème (division euclidienne)</span>

Soit $(a, b) \in \mathbb{N} \times \mathbb{N}^&#42;$. Il existe un unique couple $(q, r) \in \mathbb{N}^2$ tel que

$$a = bq + r \quad \text{et} \quad 0 \leq r < b$$

$q$ s'appelle le **quotient** et $r$ le **reste** de la division euclidienne de $a$ par $b$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**Unicité.** Supposons qu'il existe un couple $(q, r)$ tel que $a = bq + r$ avec $0 \leq r < b$. Alors $bq \leq a = bq + r < b(q+1)$. Posons $E_a = \\{m \in \mathbb{N} \mid bm \leq a\\}$ : on a $q \in E_a$ et $q + 1 \notin E_a$, donc $q$ est le pge de $E_a$ ; $q$ est donc unique, et alors $r = a - bq$ est unique.

**Existence.** Soit $E_a = \\{n \in \mathbb{N} \mid bn \leq a\\}$. On a $0 \in E_a$, donc $E_a$ est non vide, et elle est majorée par $a$ : elle admet donc un pge $q$ d'après $A_2$. Posons $r = a - bq$. On a bien $a = bq + r$ ; comme $q \in E_a$, $bq \leq a$ donc $r \geq 0$ ; et $q + 1 \notin E_a$ puisque $q$ est le pge de $E_a$, donc $(q+1)b > a$, c'est-à-dire $qb + b > a$, d'où $b > r$ : ainsi $0 \leq r < b$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $(a, b) \in \mathbb{N} \times \mathbb{N}^&#42;$, alors $b \mid a$ si et seulement si le reste de la division euclidienne de $a$ par $b$ est nul.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $b \mid a$ : $a = bq$ avec $q \in \mathbb{N}$, et $a = bq + 0$ avec $0 \leq 0 < b$ ; d'après l'unicité du couple de la division euclidienne, le reste est $r = 0$. Réciproquement, si $r = 0$, alors $a = bq$ et $b \mid a$.

</div>

## IV. Ensembles finis — dénombrements

### 1) Ens finis

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Un ensemble $E$ est **fini** s'il existe une bijection avec un ensemble $\mathbb{N}&#95;n = \\{0, 1, \dots, n-1\\}$. On admet que $n$ est unique et on l'appelle le **cardinal** de $E$, noté $\mathrm{Card}\\,E = n$ (par convention, $\mathrm{Card}\\,\varnothing = 0$).

</div>

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- une intersection d'ensembles finis est finie ;
- une réunion de 2 ensembles finis est finie, et

$$\mathrm{Card}(A \cup B) = \mathrm{Card}\,A + \mathrm{Card}\,B - \mathrm{Card}(A \cap B)$$

- une partie d'un ensemble fini est finie ;
- un produit cartésien de 2 ensembles finis est fini, et

$$\mathrm{Card}(A \times B) = \mathrm{Card}\,A \times \mathrm{Card}\,B$$

</div>

### 3) Applications d'un ensemble fini vers un ensemble fini

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

- si $\mathrm{Card}\\,E = n$ et si $f : E \to F$ est **injective**, alors $\mathrm{Card}\\,F \geq n$ ;
- si $\mathrm{Card}\\,F = n$ et si $f : E \to F$ est **injective**, alors $\mathrm{Card}\\,E \leq n$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Écrivons $E = \\{a_0, a_1, \dots, a&#95;{n-1}\\}$ ; si $f$ est injective, $F$ contient $\\{f(a_0), f(a_1), \dots, f(a&#95;{n-1})\\}$, qui a $n$ éléments distincts, donc $F$ contient au moins $n$ éléments : $\mathrm{Card}\\,F \geq n$. Si de plus $\mathrm{Card}\\,F = n$, alors $\mathrm{Card}\\,E \leq \mathrm{Card}\\,F = n$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

- si $\mathrm{Card}\\,E = n$ et si $f : E \to F$ est **surjective**, alors $\mathrm{Card}\\,F \leq n$ ;
- si $\mathrm{Card}\\,F = n$ et si $f : E \to F$ est **surjective**, alors $\mathrm{Card}\\,E \geq n$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $f$ est surjective, $f(E) = F = \\{f(a_i) \mid i \in \mathbb{N}&#95;n\\}$, donc $F$ a au plus $n$ éléments : $\mathrm{Card}\\,F \leq n$. Si de plus $\mathrm{Card}\\,F = n$, alors $\mathrm{Card}\\,E \geq n$ (sinon on aurait $\mathrm{Card}\\,F \leq \mathrm{Card}\\,E < n$, contradiction).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

Si $\mathrm{Card}\\,E = n$ et si $f : E \to F$ est **bijective**, alors $\mathrm{Card}\\,F = n$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

a) c'est la propriété 1 et la propriété 2 ; b) on applique le résultat à $f^{-1}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 4</span>

Si $\mathrm{Card}\\,E = n = \mathrm{Card}\\,F$ et si $f : E \to F$ est **injective** (resp. **surjective**), alors $f$ est **bijective**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

- Si $f$ est injective : écrivons $E = \\{a_0, \dots, a&#95;{n-1}\\}$ ; alors $f(E) = \\{f(a_0), \dots, f(a&#95;{n-1})\\}$ et $\mathrm{Card}\\,f(E) = n$. Or $\mathrm{Card}\\,F = n$ et $f(E) \subset F$, donc $f(E) = F$ : $f$ est surjective, donc bijective.
- Si $f$ est surjective : $f(E) = F = \\{f(a_i) \mid i \in \mathbb{N}&#95;n\\}$ et $\mathrm{Card}\\,F = n$ ; donc on a $n$ éléments de la forme $f(a_i)$, d'où $a_i \neq a_j \Rightarrow f(a_i) \neq f(a_j)$ (sinon $\\{f(a_i) \mid i \in \mathbb{N}&#95;n\\}$ aurait au plus $n-1$ éléments) : $f$ est injective.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 5</span>

Si $\mathrm{Card}\\,E = n$ et $\mathrm{Card}\\,F = m$, alors il y a $m^n$ applications de $E$ vers $F$ :

$$\mathrm{Card}\,\mathcal{F}(E, F) = m^n$$

où $\mathcal{F}(E, F)$ désigne l'ensemble des applications de $E$ dans $F$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Par définition, à chaque élément de $E$ on associe un élément de $F$, et pour chacun il y a $m$ choix.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 6</span>

Si $m \geq n$, il y a $m(m-1)\cdots(m-n+1)$ injections de $E$ vers $F$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Par définition : $f(a_1)$ peut être choisi de $m$ façons, $f(a_2)$ de $m-1$ façons, \dots, $f(a_n)$ de $m-n+1$ façons.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Il y a $n!$ bijections de $E$ vers $F$ (car une bijection de $E$ vers $F$ est une injection, et réciproquement puisque $\mathrm{Card}\\,E = \mathrm{Card}\\,F$).

</div>

### 4) Nombre de parties

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

**a)** Si $\mathrm{Card}\\,E = n$, alors $\mathrm{Card}\\,\mathcal{P}(E) = 2^n$.

**b)** Si $\mathrm{Card}\\,E = n$ et $p \leq n$, il y a $C_n^p$ parties de $E$ de cardinal $p$, avec

$$C_n^p = \frac{n!}{p!\,(n-p)!} = \frac{n(n-1)\cdots(n-p+1)}{p!}$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**a)** Se donner une partie de $E$, c'est se donner son application caractéristique, c'est-à-dire une application de $E$ vers $\\{0, 1\\}$ ; il y en a $2^n$ d'après la propriété 5.

**b)** Si je me donne une partie de cardinal $p$, $P = \\{a_1, \dots, a_p\\}$, et l'injection $i : \\{1, \dots, p\\} \to E$ telle que $i(\mathbb{N}&#95;p) = P$, alors toute autre injection $f : \mathbb{N}&#95;p \to E$ d'image $P$ s'écrit $f = i \circ g$, où $g = i^{-1} \circ f$ est une bijection de $\mathbb{N}&#95;p$ (par composition) ; réciproquement, si $g$ est une bijection de $\mathbb{N}&#95;p \to \mathbb{N}&#95;p$, alors $i \circ g$ est une injection de $\mathbb{N}&#95;p \to E$ d'image $P$.

Ainsi, **à une partie $P$ de cardinal $p$ correspondent exactement $p!$ injections de $\mathbb{N}&#95;p$ dans $E$ d'image $P$** (il y a $p!$ bijections de $\mathbb{N}&#95;p$). Or il y a $n(n-1)\cdots(n-p+1)$ injections de $\mathbb{N}&#95;p \to E$ (propriété 6), donc il y a

$$\frac{n(n-1)\cdots(n-p+1)}{p!}$$

parties de cardinal $p$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Vocabulaire</span>

- on appelle **arrangement** de $n$ éléments pris $p$ à $p$ une liste ordonnée de $p$ éléments parmi $n$ : il y en a $A_n^p = n(n-1)\cdots(n-p+1)$ ;
- on appelle **combinaison** de $n$ éléments pris $p$ à $p$ une liste non ordonnée de $p$ éléments parmi $n$ : il y en a $C_n^p = \dfrac{A_n^p}{p!}$.

</div>

### 5) Propriétés des $C_n^p$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $2^n = C_n^0 + C_n^1 + \cdots + C_n^n$ ;
- $C_n^p = C_n^{n-p}$ ;
- $C&#95;{n+1}^{p+1} = C_n^p + C_n^{p+1}$ pour $p \leq n - 1$ (relation de Pascal).

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

- Toute partie de $E$ est de cardinal $0$ (→ $C_n^0$), ou $1$ (→ $C_n^1$), \dots, ou $n$ (→ $C_n^n$) ; d'après la règle de la somme, les parties de $E$ sont au nombre de $2^n$, et c'est aussi $C_n^0 + C_n^1 + \cdots + C_n^n$.
- L'application $\varphi : \mathcal{P}(E) \to \mathcal{P}(E)$, $A \mapsto E \setminus A$, est une bijection ; elle envoie l'ensemble des parties de cardinal $p$ sur l'ensemble des parties de cardinal $n-p$, donc

$$\mathrm{Card}\{P \mid \mathrm{Card}\,P = p\} = \mathrm{Card}\{P \mid \mathrm{Card}\,P = n-p\}$$

- Soit $a \in E$. Je cherche les parties de $E$ de cardinal $p+1$. À une telle partie $A$ : si $A$ contient $a$, il reste à choisir $p$ éléments de $E \setminus \\{a\\}$, ce qui peut se faire de $C_n^p$ façons ; si $A$ ne contient pas $a$, il y a $C_n^{p+1}$ façons de la choisir. Au total, il y a $C&#95;{n+1}^{p+1} = C_n^p + C_n^{p+1}$ parties à $p+1$ éléments de $E$.

</div>

**Application : triangle de Pascal.**

| $n \backslash p$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| 0 | 1 | | | | | |
| 1 | 1 | 1 | | | | |
| 2 | 1 | 2 | 1 | | | |
| 3 | 1 | 3 | 3 | 1 | | |
| 4 | 1 | 4 | 6 | 4 | 1 | |
| 5 | 1 | 5 | 10 | 10 | 5 | 1 |

### 6) Formule du binôme

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Formule du binôme de Newton</span>

Soit $E$ un ensemble muni d'une addition $+$ et d'une multiplication $\times$, avec $+$ commutative et associative, $\times$ associative et distributive sur $+$. Soient $a$ et $b$ deux éléments de $E$ qui **commutent** ($ab = ba$). Alors, pour tout $n \in \mathbb{N}$ :

$$(a+b)^n = C_n^0\, a^n b^0 + C_n^1\, a^{n-1} b^1 + \cdots + C_n^n\, a^0 b^n = \sum_{k=0}^{n} C_n^k\, a^{n-k} b^k$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (lemmes préparatoires)</span>

**Lemme 1.** $\forall p \geq 1,\ a^p b = b a^p$. Par récurrence sur $p$ : pour $p = 1$, c'est l'hypothèse $ab = ba$ ; si $a^p b = ba^p$, alors $a^{p+1} b = a(a^p b) = a b a^p = b a^{p+1}$.

**Lemme 2.** $\forall p, q \in \mathbb{N},\ a^p b^q = b^q a^p$. Par récurrence (pour $p = 0$ ou $q = 0$ c'est évident ; sinon on applique le lemme 1 avec $b \leftarrow a^p$, ce qui donne $\forall p \geq 1,\ a^p b^q = b^q a^p$).

La formule s'en déduit par récurrence sur $n$, en écrivant $(a+b)^{n+1} = (a+b)^n (a+b)$ et en utilisant la relation de Pascal.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaires</span>

- $x^n - y^n = (x-y)\big(x^{n-1} + x^{n-2}y + \cdots + xy^{n-2} + y^{n-1}\big)$ ;
- $x^{2n+1} + y^{2n+1} = x^{2n+1} - (-y)^{2n+1} = (x+y)\big(x^{2n} - x^{2n-1}y + \cdots - xy^{2n-1} + y^{2n}\big)$.

</div>

## V. Exercices — feuille n° 4

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 4 — $\mathbb{N}$, dénombrements (énoncés)</span>

<ol class="enonces">
<li>Démontrer que $4^n + 6n - 1$ est divisible par 9.</li>
<li>Montrer que tout entier naturel non nul peut s'écrire de manière unique sous la forme
$$n = a_1\, 1! + a_2\, 2! + \cdots + a_k\, k!, \qquad \text{avec } 0 \leq a_i \leq i \text{ et } a_k \neq 0$$</li>
<li>Problème des cocus de Bagdad. Le khâlife de Bagdad, irrité par la présence de cocus dans sa ville, fit paraître l'édit suivant : « Tout habitant de Bagdad qui se rendra compte que sa femme le trompe devra l'égorger la nuit suivant le jour où il s'en sera rendu compte ». Il y avait 32 cocus dans la ville. Il admit qu'il ne se passa rien pendant 32 jours et que le 33ème matin après la parution de l'édit, les 32 femmes indignes avaient été égorgées. Expliquer le raisonnement qu'ont suivi les habitants, sachant qu'ils sont d'excellents logiciens et que chacun peut dire avec certitude si un autre que lui est cocu mais n'a aucun moyen matériel de statuer sur son propre sort. (La présence de cocus est connue de tous.)</li>
<li>Avec les 5 caractères d'imprimerie 1, 3, 4, 6, 7, combien de nombres de 5 chiffres peut-on former ? Quelle est leur somme ? Même question avec 0, 1, 3, 4, 5.</li>
<li>Montrer que pour $n \in \mathbb{N}^&#42;$ et $p \in \mathbb{N}^&#42;$, le nombre de façons d'écrire
$$x_1 + x_2 + \cdots + x_p = n$$
avec les $x_i$ entiers naturels est $C&#95;{n+p-1}^{n}$ :
<ol>
<li>par un raisonnement combinatoire direct ;</li>
<li>par récurrence.</li>
</ol>
</li>
<li>Sur les 6 faces d'un cube, on trace un cercle et sur celui-ci $n$ points. On suppose de plus que 4 points qui ne sont pas sur une même face ne sont pas coplanaires.
<ol>
<li>Combien ces points déterminent-ils de droites non contenues dans une face ?</li>
<li>Combien de triangles non contenus dans une face ?</li>
<li>On suppose que chaque face a une couleur différente. Combien a-t-on de tétraèdres ayant pour sommets les points tracés et de plus :
<ol>
<li>3 sommets d'une même couleur ;</li>
<li>2 sommets d'une couleur et 2 autres d'une autre ;</li>
<li>2 sommets d'une couleur et les 2 autres de couleurs différentes ;</li>
<li>4 sommets de couleurs différentes.</li>
</ol>
</li>
<li>Combien a-t-on de tétraèdres ayant pour sommets les points tracés (employer 2 méthodes) ?</li>
</ol>
</li>
<li>Soit $F_n$ la suite de Fibonacci : $F_0 = F_1 = 1$ et pour $n \geq 2$, $F_n = F&#95;{n-1} + F&#95;{n-2}$. On pose
$$\alpha = \frac{1-\sqrt{5}}{2}, \qquad \beta = \frac{1+\sqrt{5}}{2}$$
<ol>
<li>Montrer que $\forall n \in \mathbb{N}$, $F_n = \dfrac{\sqrt{5}}{5}\big(\beta^{n+1} - \alpha^{n+1}\big)$.</li>
<li>Montrer que $\forall n \in \mathbb{N}$, $F_n = C_n^0 + C&#95;{n-1}^1 + \cdots + \dots$</li>
<li>Soit $G_n$ le nombre de parties (y compris le vide) de $\\{1, \dots, n\\}$ ne contenant pas deux entiers consécutifs. Montrer que $\forall n \geq 2$, $G_n = G&#95;{n-1} + G&#95;{n-2}$, puis que $G_n = F&#95;{n+1}$.</li>
</ol>
</li>
<li>Résoudre dans $\mathbb{N}^&#42; \times \mathbb{N}^&#42;$ l'équation $x^y = y^x$.</li>
<li>En utilisant le produit $(a+b)^n (b+a)^n$, démontrer l'égalité
$$S = (C_n^0)^2 + (C_n^1)^2 + \cdots + (C_n^n)^2 = C_{2n}^n$$
Retrouver le résultat par un raisonnement combinatoire.</li>
</ol>

</div>

## VI. Exercices — TD du lundi 27/09/93 (autour de la formule du binôme)

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Travaux dirigés du lundi 27/09/93 — autour de la formule du binôme (énoncés)</span>

On pose $P_n(x) = (1+x)^n$.

**I.**

<ol class="enonces">
<li>Calculer $P_n(1)$ et $P_n(-1)$ et en déduire :
$$A = C_n^0 + C_n^2 + C_n^4 + \cdots, \qquad B = C_n^1 + C_n^3 + C_n^5 + \cdots$$
</li>
<li>Calculer :
$$C = C_n^1 + 2C_n^2 + 3C_n^3 + \cdots + nC_n^n$$</li>
<li>Calculer :
$$D = C_n^1 + 2^2 C_n^2 + 3^2 C_n^3 + \cdots + n^2 C_n^n$$</li>
<li>Calculer :
$$E = C_n^1 + \frac{1}{2}C_n^2 + \frac{1}{3}C_n^3 + \cdots + \frac{1}{n}C_n^n$$</li>
<li>Calculer :
$$X = C_n^0 + C_n^3 + C_n^6 + \cdots, \qquad Y = C_n^1 + C_n^4 + C_n^7 + \cdots, \qquad Z = C_n^2 + C_n^5 + C_n^8 + \cdots$$</li>
<li>Quel est l'exercice suivant (si si !!!).</li>
</ol>

**II.** On pose $S_k(n) = 1^k + 2^k + \cdots + n^k$.

<ol class="enonces">
<li>À partir de $P&#95;{k+1}(x)$ pour $x = 1, 2, \dots, n$, trouver une relation entre les $S_k(n)$.</li>
<li>Calculer $S_1(n)$, $S_2(n)$, $S_3(n)$.</li>
</ol>

</div>
