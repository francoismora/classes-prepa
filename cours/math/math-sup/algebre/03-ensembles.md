---
layout: chapitre
title: "Ensembles"
numero: 3
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Algèbre"
source: "Math/Math Sup/Algèbre/03 Ensembles"
pages: 26
---

## I. Notions sur les ensembles

### 1) Vocabulaire

- Un **ensemble** est formé d'éléments distincts ; on écrit $a \in A$ (« $A$ ensemble, $a$ élément »).
- **Écriture** :
  - en extension : $E = &#92;&#123;1, 2, 4, 6&#92;&#125;$ ;
  - en compréhension : $E = &#92;&#123;x \mid P(x)&#92;&#125;$, par exemple $&#92;&#123;-1, 1&#92;&#125; = &#92;&#123;x \in \mathbb{Z} \mid &#124;x&#124; = 1&#92;&#125;$.
- **Quantificateurs** :
  - $\exists z \in E,\ P(z)$ : il existe un élément de $E$ qui vérifie la propriété $P$ ;
  - $\forall x \in E,\ P(x)$ : pour tout $x$ de $E$, $x$ vérifie la propriété $P$.

### 2) Partie d'un ensemble

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Une **partie** de $E$ est formée de certains éléments de $E$.

Symbole : $A \subset E$ (« $A$ inclus dans $E$ ») : $A$ est une partie de $E$, c'est-à-dire

$$A \subset B \iff \{x \in A \Rightarrow x \in B\}$$

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Les parties forment un ensemble noté $\mathcal{P}(E)$ :

$$A \subset E \iff A \in \mathcal{P}(E)$$

(exemple : si $E = \varnothing$, alors $\mathcal{P}(E) = &#92;&#123;\varnothing&#92;&#125;$).

</div>

### 3) Parties et opérations particulières

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

- $A \cup B = &#92;&#123;x \mid x \in A \text{ ou } x \in B&#92;&#125;$ : c'est un ensemble ;
- $A \cap B = &#92;&#123;x \mid x \in A \text{ et } x \in B&#92;&#125;$ : c'est un ensemble ; $A \cap B$ est une partie de $A$ et de $B$ ;
- $E \setminus A = &#92;&#123;x \in E \mid x \notin A&#92;&#125;$ (complémentaire de $A$, noté aussi $\overline{A}$ ou $\complement_E A$) ;
- $A \setminus B = &#92;&#123;x \in A \mid x \notin B&#92;&#125;$ : partie de $A$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Ces opérations se visualisent sur un diagramme de Venn (ensembles $A$ et $B$ tracés dans $E$, intersection $A \cap B$ hachurée).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $A \cap (B \cap C) = (A \cap B) \cap C$ : $\cap$ est associative ;
- $A \cup (B \cup C) = (A \cup B) \cup C$ : $\cup$ est associative ;
- $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ : $\cap$ est distributive sur $\cup$ ;
- $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ : $\cup$ est distributive sur $\cap$ ;
- $E \setminus (A \cup B) = (E \setminus A) \cap (E \setminus B)$ : $\setminus$ est distributive sur $\cup$ ;
- $E \setminus (A \cap B) = (E \setminus A) \cup (E \setminus B)$ : $\setminus$ est distributive sur $\cap$ ;
- $E \setminus (E \setminus A) = A$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Pour la distributivité du complémentaire sur l'intersection :
$x \in E \setminus (A \cap B) \iff x \notin A \cap B \iff x$ ne vérifie pas ($x \in A$ et $x \in B$)
$\iff x \notin A$ ou $x \notin B \iff x \in E \setminus A$ ou $x \in E \setminus B
\iff x \in (E \setminus A) \cup (E \setminus B)$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Produit cartésien</span>

Soient $E, F$ deux ensembles non vides. $E \times F$ est l'ensemble

$$E \times F = \{(x, y) \mid x \in E,\ y \in F\}$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $E_1, \dots, E_n$ sont $n$ ensembles non vides, on définit
$E_1 \times E_2 \times \dots \times E_n$, et l'on note $E^n = E \times \dots \times E$ ($n$ fois).

</div>

## II. Applications

Dans toute la suite, $E, F$ désignent deux ensembles non vides.

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Une **application** $f$ de $E$ vers $F$ associe à chaque élément de $E$ un **unique** élément de $F$ :

$$f : E \to F, \qquad x \mapsto f(x)$$

Le **graphe** de $f$ est l'ensemble $&#92;&#123;(x, f(x)) \mid x \in E&#92;&#125; \subset E \times F$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple important — application caractéristique</span>

Soit $A \subset E$. L'application caractéristique de $A$ est

$$\varphi_A : E \to \{0, 1\}, \qquad x \mapsto \begin{cases} 1 & \text{si } x \in A \\ 0 & \text{si } x \notin A \end{cases}$$

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Toute application $f : E \to &#92;&#123;0, 1&#92;&#125;$ est l'application caractéristique d'une seule partie de $E$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Posons $A = &#92;&#123;x \in E \mid f(x) = 1&#92;&#125;$ : $A$ est définie de façon unique. On vérifie que $f = \varphi_A$ :
si $x \in A$, $f(x) = 1 = \varphi_A(x)$ (donc $f$ et $\varphi_A$ coïncident sur $A$) ; si $x \notin A$,
$\varphi_A(x) = 0$ et $f(x) = 0$ (car $f(x) = 1$ entraînerait $x \in A$). Ainsi,
$\forall x \in E$, $\varphi_A(x) = f(x)$ : $\varphi_A$ et $f$ coïncident partout, donc $\varphi_A = f$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés des applications caractéristiques</span>

- $\varphi&#95;{A \cap B} = \varphi_A \times \varphi_B$ ;
- $\varphi&#95;{A \cup B} = \varphi_A + \varphi_B - \varphi_A \times \varphi_B$ ;
- $\varphi&#95;{\overline{A}} = 1 - \varphi_A$ ;
- $\varphi&#95;{A \setminus B} = \varphi_A&#92;&#44;(1 - \varphi_B)$.

Ces formules se lisent sur la table de valeurs :

| $\varphi_A(x)$ | 1 | 1 | 0 | 0 |
|---|---|---|---|---|
| $\varphi_B(x)$ | 1 | 0 | 1 | 0 |
| $\varphi&#95;{A \cap B}(x)$ | 1 | 0 | 0 | 0 |
| $\varphi&#95;{A \cup B}(x)$ | 1 | 1 | 1 | 0 |

</div>

### 2) Applications injectives, surjectives, bijectives

**a) Injectives.**

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définitions</span>

$f : E \to F$ est **injective** si

$$x_1 \neq x_2 \Rightarrow f(x_1) \neq f(x_2)$$

c'est-à-dire si $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$ : un élément de $F$ ayant un antécédent, il est unique.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $f : E \to F$ et $g : F \to G$ sont injectives, alors $g \circ f$ est injective.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$g \circ f(x_1) = g \circ f(x_2)$ ; $f(x_1) = f(x_2)$ car $g$ est injective ; donc $x_1 = x_2$ car $f$ est injective.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

$g \circ f$ est injective $\Rightarrow$ $f$ est injective.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soient $x_1, x_2$ tels que $f(x_1) = f(x_2)$ ; alors $g(f(x_1)) = g(f(x_2))$, soit
$g \circ f(x_1) = g \circ f(x_2)$ ; donc $x_1 = x_2$ car $g \circ f$ est injective.

</div>

**b) Surjectives.**

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$f : E \to F$ est **surjective** si tout élément de $F$ admet (au moins) un antécédent.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

$f$ est surjective si et seulement si $f(E) = F$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

- Si $f$ est surjective : $f(E) \subset F$ et $\forall y \in F$, $y$ admet un antécédent, c'est-à-dire
  $\exists x \in E$, $y = f(x)$, avec $y \in f(E)$ ; donc $f(E) = F$.
- Si $f(E) = F$ : soit $y \in F$ ; $y \in f(E)$ donc $y = f(x)$ avec $x \in E$ : $f$ est surjective.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorèmes</span>

- La composée de deux surjectives est surjective.
- Si $g \circ f$ est surjective, alors $g$ est surjective.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

- $f : E \to F$, $g : F \to G$ : $g \circ f(E) = g(F)$ car $f$ est surjective, et $g(F) = G$ car $g$ est surjective.
- Soit $y \in G$ ; comme $g \circ f : E \to G$ est surjective, $\exists x \in E$ tel que $g \circ f(x) = y$ ;
  alors $g(f(x)) = y$ et $f(x) \in F$ est un antécédent de $y$ par $g$.

</div>

**c) Bijectives.**

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définitions</span>

- $f$ est **bijective** si $f$ est injective et surjective ;
- $f$ est bijective si tout élément de $F$ admet un seul et unique antécédent dans $E$.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

La composée de deux bijectives est bijective.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (application réciproque)</span>

Si $f$ est bijective, on définit l'**application réciproque** $f^{-1}$ de $f$ par

$$f^{-1}(y) = x \iff \begin{cases} y = f(x) \\ x \in E \end{cases} \qquad (y \in F)$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$f^{-1}$ est bijective.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$f^{-1} \circ f = \mathrm{Id}&#95;E$ et $f \circ f^{-1} = \mathrm{Id}&#95;F$ (car $\mathrm{Id}&#95;E$ et $\mathrm{Id}&#95;F$ sont bijectives), donc $f^{-1}$ est surjective et $f^{-1}$ est injective : $f^{-1}$ est bijective.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $f : E \to F$ et $g : F \to E$ vérifient $g \circ f = \mathrm{Id}&#95;E$ et $f \circ g = \mathrm{Id}&#95;F$, alors $f$ et $g$ sont bijectives et $g = f^{-1}$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$g \circ f$ est bijective $\Rightarrow$ $g$ est surjective et $f$ est injective ;
$f \circ g$ est bijective $\Rightarrow$ $g$ est injective et $f$ est surjective ;
donc $f$ et $g$ sont bijectives. De plus
$f^{-1} \circ (f \circ g) = f^{-1} \circ \mathrm{Id}&#95;F = f^{-1}$
et $(f^{-1} \circ f) \circ g = \mathrm{Id}&#95;E \circ g = g$, donc $f^{-1} = g$.

</div>

### 3) Images directes d'une partie de E par une application

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $A \subset E$. On appelle **image (directe)** de $A$ par $f$ l'ensemble

$$f(A) = \{f(x) \mid x \in A\}$$

c'est une partie de $F$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- si $A \subset B$ alors $f(A) \subset f(B)$ ;
- $f(A \cup B) = f(A) \cup f(B)$ ;
- $f(A \cap B) \subset f(A) \cap f(B)$ ;
- $\forall A, B \in \mathcal{P}(E)$ : $f(A \cap B) = f(A) \cap f(B) \iff f$ est injective.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

- Soit $y \in f(A)$ : $y = f(a)$ avec $a \in A$ ; comme $a \in A \subset B$, on a $a \in B$ donc $y \in f(B)$.
- $A \subset A \cup B \Rightarrow f(A) \subset f(A \cup B)$ et $B \subset A \cup B \Rightarrow f(B) \subset f(A \cup B)$,
  d'où $f(A) \cup f(B) \subset f(A \cup B)$. Réciproquement, si $x \in f(A) \cup f(B)$ :
  1er cas, $x = f(a)$ avec $a \in A$, alors $a \in A \cup B$ soit $x \in f(A \cup B)$ ;
  2e cas, $x = f(b)$ avec $b \in B$, alors $b \in A \cup B$ soit $x \in f(A \cup B)$.
  Dans tous les cas $x \in f(A \cup B)$, d'où $f(A \cup B) = f(A) \cup f(B)$.
- Soient $A, B \subset E$ et $x \in f(A) \cap f(B)$ : $x = f(a) = f(b)$ avec $a \in A$, $b \in B$ ;
  si $f$ est injective, $a = b$ donc $a \in A \cap B$, d'où $f(A) \cap f(B) \subset f(A \cap B)$.
- Réciproque : supposons $\forall A, B \in \mathcal{P}(E)$, $f(A \cap B) = f(A) \cap f(B)$.
  Si $A = &#92;&#123;x_1&#92;&#125;$ et $B = &#92;&#123;x_2&#92;&#125;$ avec $x_1 \neq x_2$, alors $A \cap B = \varnothing$, donc
  $f(A) \cap f(B) = &#92;&#123;f(x_1)&#92;&#125; \cap &#92;&#123;f(x_2)&#92;&#125; = \varnothing$ d'après l'hypothèse,
  c'est-à-dire $f(x_1) \neq f(x_2)$ : $f$ est injective.

</div>

### 4) Images réciproques

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $B \subset F$. On appelle **image réciproque** de $B$ par $f$ l'ensemble

$$f^{-1}(B) = \{x \in E \mid f(x) \in B\} \subset E$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

$f^{-1}(B)$ ne vaut pas dire que $f$ est bijective ; la notation est bien définie.

Si $f$ est bijective et $g = f^{-1}$, alors $f^{-1}(B) = g(B)$ (image directe de $B$ par $g$) :
si $x \in f^{-1}(B)$, alors $f(x) = y \in B$ donc $x = g(y) \in g(B)$ ; réciproquement,
si $x \in g(B)$, $x = g(y)$ avec $y \in B$, et $f(x) = f(g(y)) = y \in B$ donc $x \in f^{-1}(B)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $A \subset B \Rightarrow f^{-1}(A) \subset f^{-1}(B)$ ;
- $f^{-1}(A \cup B) = f^{-1}(A) \cup f^{-1}(B)$ ;
- $f^{-1}(A \cap B) = f^{-1}(A) \cap f^{-1}(B)$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

- Si $x \in f^{-1}(A)$ : $f(x) = y$ et $y \in A$ ; donc $y \in B$ car $A \subset B$ ; donc $x \in f^{-1}(B)$.
- $A \subset A \cup B$ donc $f^{-1}(A) \subset f^{-1}(A \cup B)$ et $f^{-1}(B) \subset f^{-1}(A \cup B)$,
  d'où $f^{-1}(A) \cup f^{-1}(B) \subset f^{-1}(A \cup B)$. Réciproquement, si $x \in f^{-1}(A \cup B)$ :
  $y = f(x) \in A \cup B$ ; si $y \in A$, $x \in f^{-1}(A)$ ; si $y \in B$, $x \in f^{-1}(B)$ ;
  dans tous les cas $x \in f^{-1}(A) \cup f^{-1}(B)$.
  D'où $f^{-1}(A \cup B) = f^{-1}(A) \cup f^{-1}(B)$ ; le cas de l'intersection est analogue.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $A = f^{-1}(f(A))$ **si $f$ est injective** ;
- $f(f^{-1}(B)) = B \cap f(E)$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $x \in A$, alors $y = f(x) \in f(A)$ donc $x \in f^{-1}(f(A))$.

Soit $y \in B \cap f(E)$ : $y \in B$ et $y \in f(E)$ ; soit $y = f(x)$ avec $x \in E$ ;
alors $x \in f^{-1}(B)$ donc $y \in f(f^{-1}(B))$.

</div>

<div class="bloc contre-exemple" markdown="1">

<span class="bloc-titre">Contre-exemple</span>

$f : \mathbb{R} \to \mathbb{R}$, $x \mapsto &#124;x&#124;$ ; avec $A = \mathbb{N}$ :
$f(A) = \mathbb{N}$ mais $f^{-1}(f(A)) = \mathbb{Z}$, donc $A \neq f^{-1}(f(A))$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

- dire que $x \in f(A)$, c'est dire que $x = f(a)$ avec $a \in A$ ;
- dire que $x \in f^{-1}(B)$, c'est dire que $y = f(x) \in B$ ;
- $f(f^{-1}(B)) = B$ pour toute partie $B \subset F$ si $f$ est surjective (c'est-à-dire si $B \subset f(E)$).

</div>

### 5) Restriction

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Si $A \subset E$, on peut définir l'application appelée **restriction** de $f$ à $A$ :

$$f_{|A} : A \to F, \qquad x \mapsto f(x)$$

</div>

## III. Familles de parties

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $I$ non vide, appelé **ensemble d'indices**. On appelle **famille de parties** une application

$$I \to \mathcal{P}(E), \qquad i \mapsto A_i$$

où $A_i$ est une partie de $E$. On la note $(A_i)&#95;{i \in I}$.

On définit :

$$\bigcup_{i \in I} A_i = \{x \in E \mid \exists i \in I,\ x \in A_i\}, \qquad
\bigcap_{i \in I} A_i = \{x \in E \mid \forall i \in I,\ x \in A_i\}$$

</div>

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $\displaystyle E \setminus \bigcup&#95;{i \in I} A_i = \bigcap&#95;{i \in I} (E \setminus A_i)$ ;
- $\displaystyle\left(\bigcup&#95;{i \in I'} A_i\right) \cup \left(\bigcup&#95;{i \in I''} A_i\right) = \bigcup&#95;{i \in I' \cup I''} A_i$, avec $I', I''$ non vides ;
- $\displaystyle\left(\bigcap&#95;{i \in I'} A_i\right) \cap \left(\bigcap&#95;{i \in I''} A_i\right) = \bigcap&#95;{i \in I' \cup I''} A_i$ ;
- si $I \neq \varnothing$ et $J \neq \varnothing$ :

$$\left(\bigcup_{i \in I} A_i\right) \cap \left(\bigcup_{j \in J} B_j\right) = \bigcup_{\substack{i \in I \\ j \in J}} (A_i \cap B_j)$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

**Négation des quantificateurs.** Règle : on remplace $\exists$ par $\forall$ et $\forall$ par $\exists$, et l'on nie la proposition (prédicat final).

Exemple : $P : [\exists z \in E,\ z > \sqrt{10}]$ ; alors non $P : [\forall z \in E,\ z \leq \sqrt{10}]$.

- $P : \exists x \in \mathbb{N},\ \forall y \in \mathbb{N},\ x \leq y$ : $P$ est vraie ;
- non $P : \forall x \in \mathbb{N},\ \exists y \in \mathbb{N},\ x > y$ : non $P$ est faux ;
- $Q : \exists x \in \mathbb{N},\ \forall y \in \mathbb{N},\ x > y$ : $Q$ est faux ;
- non $Q : \forall x \in \mathbb{N},\ \exists y \in \mathbb{N},\ x \leq y$ : non $Q$ est vrai.

**Attention** : on n'échange pas les quantificateurs : $\exists\text{--}\forall \neq \forall\text{--}\exists$.

D'où :

$$\text{non}\left(x \in \bigcup_{i \in I} A_i\right) = \text{non}(\exists i \in I,\ x \in A_i) = (\forall i \in I,\ x \notin A_i) = \left(\forall i \in I,\ x \in E \setminus A_i\right) = x \in \bigcap_{i \in I} (E \setminus A_i)$$

**Réunions et intersections indexées.** Posons $U' = \bigcup&#95;{i \in I'} A_i$ et $U'' = \bigcup&#95;{i \in I''} A_i$ (avec $I' \cup I'' \neq \varnothing$ car $I'$ et $I''$ sont non vides) :

$$x \in U' \cup U'' \iff (x \in U') \text{ ou } (x \in U'') \iff (\exists i \in I',\ x \in A_i) \text{ ou } (\exists i \in I'',\ x \in A_i) \iff \exists i \in I' \cup I'',\ x \in A_i \iff x \in \bigcup_{i \in I' \cup I''} A_i$$

Pour le produit de réunions, on montre d'abord que, pour $i \in I$ fixé :

$$A_i \cap \bigcup_{j \in J} B_j = \bigcup_{j \in J} (A_i \cap B_j)$$

car $x \in A_i \cap \bigcup&#95;{j \in J} B_j \iff x \in A_i$ et $(\exists j \in J,\ x \in B_j)
\iff \exists j \in J\ (x \in A_i \text{ et } x \in B_j)$,

et de même

$$A_i \cup \bigcap_{j \in J} B_j = \bigcap_{j \in J} (A_i \cup B_j)$$

(car si $x \in A_i \cup \bigcap&#95;{j} B_j$ et $x \notin A_i$, alors $\forall j \in J,\ x \in B_j$, donc $\forall j \in J,\ x \in A_i \cup B_j$ ; réciproquement, si $x \in \bigcap&#95;{j \in J} (A_i \cup B_j)$ et $x \notin \bigcap&#95;{j \in J} B_j$, il existe $j_0 \in J$ avec $x \notin B&#95;{j_0}$, donc $x \in A_i$).

En réunissant sur $i \in I$ :

$$\left(\bigcup_{i \in I} A_i\right) \cap \left(\bigcup_{j \in J} B_j\right) = \bigcup_{j \in J} \left(\bigcup_{i \in I} (A_i \cap B_j)\right) = \bigcup_{\substack{i \in I \\ j \in J}} (A_i \cap B_j)$$

</div>

## IV. Relations

### 1) Vocabulaire

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Se donner une **relation** $\mathcal{R}$ sur $E$, c'est se donner une propriété $(P)$ sur les éléments de $E^2$ : si $(x, y)$ vérifie $(P)$, on dit que $x$ est **en relation** avec $y$ et l'on note $x \mathcal{R} y$ ; sinon $x$ n'est pas en relation avec $y$.

Exemple : sur l'ensemble $E$ d'une classe, $(P)$ : « $x$ plus petit que $y$ » ; si la taille de $x$ est inférieure à la taille de $y$, alors $x \mathcal{R} y$.

</div>

Vocabulaire :

- $\mathcal{R}$ est **réflexive** si $\forall x \in E,\ x \mathcal{R} x$ ;
- $\mathcal{R}$ est **symétrique** si $x \mathcal{R} y \Rightarrow y \mathcal{R} x$ ;
- $\mathcal{R}$ est **transitive** si ($x \mathcal{R} y$ et $y \mathcal{R} z$) $\Rightarrow x \mathcal{R} z$ ;
- $\mathcal{R}$ est **antisymétrique** si ($x \mathcal{R} y$ et $y \mathcal{R} x$) $\Rightarrow x = y$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Sur $\mathcal{P}(E)$, $A \mathcal{R} B$ si $A \subset B$ : $\mathcal{R}$ est réflexive (car $A \subset A$), non symétrique, et antisymétrique (si $A \subset B$ et $B \subset A$, alors $A = B$).

</div>

### 2) Relation d'équivalence

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définitions</span>

$\mathcal{R}$ est une **relation d'équivalence** si elle est réflexive, symétrique et transitive.

Si $\mathcal{R}$ est une relation d'équivalence et $x \in E$, la **classe d'équivalence** de $x$ est l'ensemble

$$C_x = \{y \in E \mid x \mathcal{R} y\}$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $C_x \subset E$ ;
- $C_x \neq \varnothing$ car $x \in C_x$ ;
- si $y \mathcal{R} x$ alors $C_y = C_x$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $z \in C_y$ : $y \mathcal{R} z$ ; or $y \mathcal{R} x$, donc $x \mathcal{R} y$ (symétrie) et $y \mathcal{R} z$, d'où $x \mathcal{R} z$ (transitivité) : $z \in C_x$. Donc $C_y \subset C_x$. De même, comme $x \mathcal{R} y$, on a $C_x \subset C_y$ (si $u \in C_x$ alors $C_u = C_x$, et $u \mathcal{R} x \mathcal{R} y$ donne $u \in C_y$) ; donc $C_x = C_y$.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Les classes d'équivalence forment une **partition** de $E$ (c'est-à-dire : elles sont non vides, deux à deux disjointes, et leur réunion est égale à $E$).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $x \in E$ : $x \in C_x$ donc $C_x \neq \varnothing$. Si $C_a \cap C_b \neq \varnothing$ : soit $x \in C_a \cap C_b$ ; alors $x \in C_a$ et $x \in C_b$, donc d'après ce qui précède $C_a = C_b$ : deux classes distinctes sont disjointes. Enfin $E = \bigcup&#95;{a \in E} C_a$ : on a $C_a \subset E$ donc $\bigcup&#95;{a \in E} C_a \subset E$ ; et si $x \in E$, $x \in C_x$ donc $x \in \bigcup&#95;{a \in E} C_a$, d'où $E \subset \bigcup&#95;{a \in E} C_a$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (ensemble quotient)</span>

On appelle **ensemble quotient**, noté $E/\mathcal{R}$, l'ensemble des classes d'équivalence relativement à $\mathcal{R}$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Sur l'ensemble $E$ des mots, $\mathcal{R}$ : $x \mathcal{R} y$ si $x$ et $y$ ont le même nombre de lettres : c'est une relation d'équivalence. Les classes sont les $C_n$ (mots de $n$ lettres : par exemple $C_3$ contient « eau », « lac », $C_4$ contient « math », « note », $C_5$ contient « bulle », $C_7$ contient « physique »...), et
$E/\mathcal{R} = &#92;&#123;C_3, C_4, C_5, C_7&#92;&#125;$.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

L'application $E \to E/\mathcal{R}$, $x \mapsto C_x$, est surjective ; c'est la **surjection canonique**.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $C$ une classe d'équivalence : $C \neq \varnothing$, soit $x \in C$ ; alors $C = C_x$, et $x$ est un antécédent de $C$.

</div>

### Application associée à une application

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème (décomposition canonique)</span>

Soit $f$ une application $E \to F$, et $\mathcal{R}$ la relation définie sur $E$ par

$$x \mathcal{R} y \iff f(x) = f(y)$$

Alors $\mathcal{R}$ est une relation d'équivalence, et $f$ s'écrit :

$$E \xrightarrow{\pi} E/\mathcal{R} \xrightarrow{\bar{f}} f(E) \xrightarrow{i} F$$
$$x \longmapsto C_x \longmapsto f(x) \longmapsto f(x)$$

où $\pi$ est la surjection canonique, $\bar{f}$ est bijective et $i$ est l'injection canonique (inclusion de $f(E)$ dans $F$).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

1) $\bar{f}$ est bien définie : il faut vérifier que $f(C_x)$ est indépendant du choix du représentant de $C_x$. Soit $y$ un autre représentant ($y \in C_x$) ; alors $f(y) = f(x)$ ; on peut donc définir $\bar{f}(C_x) = f(x)$.

2) $\bar{f}$ est bijective : si $\bar{f}(C_x) = \bar{f}(C_y)$ alors $f(x) = f(y)$, soit $x \mathcal{R} y$ donc $C_x = C_y$ : $\bar{f}$ est injective. Soit $y \in f(E)$ : $y = f(x)$ avec $x \in E$ ; $C_x$ est un antécédent de $y$ par $\bar{f}$ : $\bar{f}$ est surjective.

</div>

### 3) Relation d'ordre

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$\mathcal{R}$ est une **relation d'ordre** sur $E$ si $\mathcal{R}$ est réflexive, antisymétrique et transitive.

Exemple : $(\mathbb{Z}, \leq)$ : $\leq$ est une relation d'ordre.

On dit que l'ordre est **total** si, quels que soient $x$ et $y$, on a $x \mathcal{R} y$ ou $y \mathcal{R} x$ ; sinon l'ordre est **partiel**.

Exemples : $\leq$ définit un ordre total ; $(\mathcal{P}(E), \subset)$ définit une relation d'ordre partiel (si $\operatorname{Card} E \geq 2$, on a 2 éléments distincts et non comparables).

</div>

### 4) Vocabulaire de l'ordre : majorants, minorants, bornes

$E$ est muni d'une relation d'ordre $\leq$ ; soit $A$ une partie de $E$ et $x \in E$ :

- $x$ est un **majorant** de $A$ si $\forall a \in A,\ a \leq x$ ;
- $x$ est un **minorant** de $A$ si $\forall a \in A,\ x \leq a$ ;
- $x$ est un **plus grand élément** de $A$ (ou **élément maximum**, pge) si $x$ est un majorant de $A$ et $x \in A$ ;
- $x$ est un **plus petit élément** de $A$ (ou **élément minimum**, ppe) si $x$ est un minorant de $A$ et $x \in A$.

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Si $A$ admet un plus grand élément, il est unique ; idem pour le plus petit élément.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soient $M_1$ et $M_2$ deux plus grands éléments de $A$. $M_1$ majore $A$ et $M_2 \in A$ donc $M_1 \geq M_2$ ; $M_2$ majore $A$ et $M_1 \in A$ donc $M_2 \geq M_1$ ; d'où $M_1 = M_2$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définitions (bornes supérieure et inférieure)</span>

Soit $\mathcal{M}$ l'ensemble des majorants de $A$. Si $\mathcal{M}$ admet un plus petit élément, on dit que $A$ admet une **borne supérieure**, notée $\sup A = M$.

Soit $\mathcal{m}$ l'ensemble des minorants de $A$. Si $\mathcal{m}$ admet un plus grand élément, on dit que $A$ admet une **borne inférieure**, notée $\inf A = m$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $I_1 = \left]-1, 1\right[$ (dans $\mathbb{R}$) : $\sup I_1 = 1$, $\inf I_1 = -1$ ;
- $I_2 = \left]-1, 1\right]$ : $\sup I_2 = 1$, $\inf I_2 = -1$.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorèmes</span>

- Si elle existe, la borne supérieure (resp. inférieure) est unique.
- 1) Si $A$ admet un pge $M$, alors $A$ admet une borne supérieure et $\sup A = M$.
- 2) Si $A$ admet une borne supérieure $M$ : 1er cas, $M \in A$ et alors $M = \operatorname{pge}(A)$ ; 2e cas, $M \notin A$ et alors $A$ n'a pas de pge.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

1) $M$ pge de $A$ donc $M$ majore $A$ et $M \in A$. Soit $\mathcal{M}$ l'ensemble des majorants de $A$ : $M \in \mathcal{M}$ car $M$ majore $A$. Montrons que $M$ minore $\mathcal{M}$ : soit $M' \in \mathcal{M}$ ; $M'$ majore $A$ et $M \in A$ donc $M' \geq M$. Donc $M = \operatorname{ppe}(\mathcal{M})$ : $M$ est la borne supérieure de $A$.

2) $A$ admet une borne supérieure $M$. 1er cas : on suppose de plus $M \in A$ ; $M$ majore $A$ (car $M$ est ppe de $\mathcal{M}$) et $M \in A$, donc $M = \operatorname{pge} A$. 2e cas : $M \notin A$ ; supposons que $A$ admette un pge $M'$ ; d'après 1), $M' = \sup A = M$, or $M \notin A$ alors qu'un pge de $A$ appartient à $A$ : absurde. Donc $A$ n'a pas de pge.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (éléments maximaux et minimaux)</span>

Soit $A \subset E$ et $a \in E$. On dit que $a$ est un élément **maximal** de $A$ (resp. **minimal**) s'il n'existe pas d'élément de $A$ strictement supérieur (resp. inférieur) à $a$ :

$$\forall x \in A,\ a \leq x \Rightarrow x = a \qquad (\text{resp. } \forall x \in A,\ x \leq a \Rightarrow x = a)$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$E = &#92;&#123;a, b, c, d&#92;&#125;$, et $\mathcal{P}(E)$ muni de l'inclusion :

$$\mathcal{P}(E) = \{\{a\}, \{b\}, \{c\}, \{d\}, \{a,b\}, \{a,c\}, \{a,d\}, \{b,c\}, \dots\}$$

Le seul élément maximal est $&#92;&#123;a, b, c, d&#92;&#125; = E$ ; si $M$ est un minorant de $\mathcal{P}(E)$, alors $M \subset &#92;&#123;a&#92;&#125;$, $M \subset &#92;&#123;b&#92;&#125;$, $M \subset &#92;&#123;c&#92;&#125;$, $M \subset &#92;&#123;d&#92;&#125;$, donc $M = \varnothing$ : le seul élément minimal est $\varnothing$, et $\inf \mathcal{P}(E) = \varnothing$.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Si $M$ est le maximum (pge) de $A$, alors $M$ est maximal et c'est le seul.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\forall a \in A,\ a \leq M$. Soit $y \in A$ tel que $y \geq M$ ; $y \in A$ donc $y \leq M$ donc $y = M$ : $M$ est maximal. D'un tel élément il n'en existe qu'un, car si $M'$ est un autre élément maximal, d'après ce qui précède $M' = M$.

</div>

## V. Exercices — feuille n° 2

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 2 — Ensembles, applications, relations (énoncés)</span>

<ol class="enonces">
<li>On définit dans $\mathcal{P}(E)$ la différence symétrique de deux parties par :
$$A \Delta B = A \setminus B \cup B \setminus A$$
Calculer $A \Delta \varnothing$, $A \Delta A$, $A \Delta B$ quand $A \subset B$, et montrer les propriétés suivantes :
$$A \Delta B = (A \cup B) \setminus (A \cap B), \qquad A \Delta B = B \Delta A, \qquad A \Delta (B \Delta C) = (A \Delta B) \Delta C, \qquad A \cap (B \Delta C) = (A \cap B) \Delta (A \cap C)$$</li>
<li>Soit $\mathcal{F}$ une partie de $\mathcal{P}(E)$. Montrer que les propositions suivantes sont équivalentes :
P) $\forall A \in \mathcal{F},\ \forall B \in \mathcal{F},\ A \cup B \in \mathcal{F}$ et $A \setminus B \in \mathcal{F}$ ;
Q) $\forall A \in \mathcal{F},\ \forall B \in \mathcal{F},\ A \Delta B \in \mathcal{F}$ et $A \cap B \in \mathcal{F}$.</li>
<li>Montrer que si $f$ est une application de $E$ vers $F$ et $A, B$ sont des parties de $E$ et $F$ respectivement, alors
$$f(A \cap f^{-1}(B)) = f(A) \cap B$$</li>
<li>Soit $A, B, C$ trois ensembles et $f : A \to B$, $g : B \to C$, $h : C \to A$ trois applications. On considère alors les trois applications $f \circ h \circ g$, $g \circ f \circ h$, $h \circ g \circ f$. Montrer que :
<ol>
<li>si 2 d'entre elles sont surjectives et la troisième injective, alors $f, g, h$ sont bijectives ;</li>
<li>si 2 d'entre elles sont injectives et la troisième surjective, alors $f, g, h$ sont bijectives.</li>
</ol>
</li>
<li>Soit $A$ et $B$ deux parties d'un ensemble $E$ et $f$ l'application :
$$\mathcal{P}(E) \to \mathcal{P}(A) \times \mathcal{P}(B), \qquad X \mapsto (X \cap A,\ X \cap B)$$
Trouver une CNS portant sur $A$ et $B$ pour que $f$ soit injective, puis pour que $f$ soit surjective. Expliciter $f^{-1}$ lorsque $f$ est bijective.</li>
<li>Montrer que dans $\mathbb{R}^2$, la relation $\mathcal{R}$ définie par $(x, y)&#92;&#44;\mathcal{R}&#92;&#44;(x', y')$ ssi $xy = x'y'$ est une relation d'équivalence et interpréter géométriquement l'ensemble quotient.</li>
<li>Soit $E$ le demi-plan complexe constitué des nombres $a + ib$ tels que $b > 0$. On définit la relation $\mathcal{R}$ par :
$$(z\,\mathcal{R}\,z') \iff \left(\exists t \in \mathbb{R},\ z' = \frac{z \cos t - \sin t}{z \sin t + \cos t}\right)$$
<ol>
<li>Montrer que $\mathcal{R}$ est bien définie sur $E$, et que c'est une relation d'équivalence.</li>
<li>Montrer que $(z&#92;&#44;\mathcal{R}&#92;&#44;z') \iff \left&#124;\dfrac{z - i}{z + i}\right&#124; = \left&#124;\dfrac{z' - i}{z' + i}\right&#124;$. Traduire géométriquement cette propriété et trouver les classes d'équivalence modulo $\mathcal{R}$.</li>
</ol>
</li>
<li>Soit $E$ un ensemble ordonné et $A \subset E$ tels que $A$ admette une borne supérieure dans $E$. Soit $x \in E$. Étudier les 4 implications suivantes dans le cas d'un ordre partiel ou total :
$$(\sup A \geq x) \underset{?}{\Leftarrow} (\exists a \in A,\ a \geq x) \qquad (\sup A > x) \underset{?}{\Leftarrow} (\exists a \in A,\ a > x)$$</li>
<li>Soit $A$ et $B$ des parties d'un ensemble ordonné $E$. On suppose que les bornes sup et inf apparaissant ci-dessous existent. Prouver alors que :
$$\sup(A \cup B) = \sup(\sup A, \sup B), \qquad \inf(A \cup B) = \inf(\inf A, \inf B)$$
$$\sup(A \cap B) \leq \inf(\sup A, \sup B), \qquad \inf(A \cap B) \geq \sup(\inf A, \inf B)$$
Prouver qu'il peut y avoir des inégalités strictes dans les deux dernières inégalités, même pour un ordre total.</li>
<li>Soit $A = \left&#92;&#123; \dfrac{1}{p} + \dfrac{1}{q^2},\ p, q \in \mathbb{N}^&#42; \right&#92;&#125;$.
<ol>
<li>Étudier l'existence et calculer éventuellement $\sup A$, $\inf A$, ppe $A$, pge $A$.</li>
<li>A-t-on $1/3 \in A$ ? $1/4 \in A$ ?</li>
<li>Trouver $\sup\left(A \cap \left]0, \dfrac{1}{2}\right[\right)$.</li>
</ol>
</li>
</ol>

</div>
