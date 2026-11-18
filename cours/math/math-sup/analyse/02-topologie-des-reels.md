---
layout: chapitre
title: "Topologie des réels"
numero: 2
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Analyse"
source: "Math/Math Sup/Analyse/02 Topologie des réels"
pages: 30
---

## I. Ouverts, voisinages, fermés

### 1) Ouvert de $\mathbb{R}$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Une partie $A \subset \mathbb{R}$ est ouverte, ou c'est un ouvert, ssi

$$\forall x \in A, \exists \varepsilon > 0, \quad ]x-\varepsilon, x+\varepsilon[ \subset A$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple : $]a,b[$ ouvert</span>

Pour $x \in ]a,b[$, on prend

$$\varepsilon = \dfrac{\min(&#124;x-a&#124;, &#124;x-b&#124;)}{2}$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $]a,b]$ : problème en $b$, non ouvert : $\forall \varepsilon > 0$, $b+\varepsilon \notin ]a,b]$ ;
- $\emptyset$ et $\mathbb{R}$ sont ouverts ;
- $&#92;&#123;a&#92;&#125;$ n'est pas ouvert ;
- $\mathbb{Q}$ non ouvert car dans n'importe quel $]x-\varepsilon, x+\varepsilon[$ il y a toujours un irrationnel : $\forall x \in \mathbb{Q}$, $\forall \varepsilon > 0$, $]x-\varepsilon, x+\varepsilon[ \not\subset \mathbb{Q}$ ;
- $\mathbb{R} \setminus \mathbb{Q}$ non ouvert.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Les intervalles $]a,b[$, $]a,+\infty[$, $]-\infty,a[$ sont ouverts.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Une réunion quelconque d'ouverts est ouverte.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $(G_i)&#95;{i \in I}$ une famille d'ouverts.

$\mathcal{O} = \bigcup&#95;{i \in I} G_i$.

Soit $x \in \mathcal{O}$ : $\exists i \in I$ tel que $x \in G_i$.

$G_i$ ouvert donc $\exists \varepsilon > 0$, $]x-\varepsilon, x+\varepsilon[ \subset G_i \subset \mathcal{O}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

Toute intersection finie d'ouverts est ouverte.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $G_1, \ldots, G_n$, $n$ ouverts.

$\mathcal{O} = \bigcap&#95;{i=1}^{n} G_i$.

Soit $x \in \mathcal{O}$.

$\forall i \in &#92;&#123;1,\ldots,n&#92;&#125;$, $x \in G_i$ ; $\exists \varepsilon_i > 0$, $]x-\varepsilon_i, x+\varepsilon_i[ \subset G_i$.

Soit $\varepsilon = \min \varepsilon_i$, $i \in \llbracket 1,n \rrbracket$.

$\varepsilon > 0$ et $\forall i \in \llbracket 1,n \rrbracket$, $]x-\varepsilon, x+\varepsilon[ \subset ]x-\varepsilon_i, x+\varepsilon_i[ \subset G_i$.

Donc $]x-\varepsilon, x+\varepsilon[ \subset \bigcap&#95;{i=1}^{n} G_i = \mathcal{O}$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$\bigcap&#95;{n \in \mathbb{N}&#42;} ]-1, 1+\frac{1}{n}[ = ]-1,1[$ non ouvert.

</div>

### 2) Fermés de $\mathbb{R}$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Une partie $A$ de $\mathbb{R}$ est fermée, ou c'est un fermé de $\mathbb{R}$, ssi $\mathbb{R} \setminus A$ est ouvert.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $[a,b]$ fermé ;
- ${}^c[a,b] = ]-\infty,a[ \cup ]b,+\infty[$ réunion d'ouverts ;
- $]a,b[$ ni ouvert ni fermé ;
- $\emptyset$, $\mathbb{R}$ fermés.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

Toute intersection quelconque de fermés est fermée ; une réunion finie de fermés est fermée.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $(F_i)&#95;{i \in I}$ une famille de fermés.

$${}^c\left(\bigcap&#95;{i \in I} F_i\right) = \bigcup&#95;{i \in I} {}^c F_i$$

réunion d'ouverts $\Rightarrow$ ouvert.

$${}^c\left(\bigcup&#95;{i \in I} F_i\right) = \bigcap&#95;{i \in I} {}^c F_i$$

intersection finie d'ouverts $\Rightarrow$ ouvert.

</div>

### 3) Voisinage d'un point

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $a \in \mathbb{R}$. Une partie $V$ de $\mathbb{R}$ est un voisinage de $a$ ssi il existe $\mathcal{O}$ ouvert de $\mathbb{R}$ tel que

$$a \in \mathcal{O} \subset V$$

On note $\mathcal{V}(a)$ l'ensemble des voisinages de $a$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

$$V \in \mathcal{V}(a) \Leftrightarrow \exists \varepsilon > 0, \quad ]a-\varepsilon, a+\varepsilon[ \subset V$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $V \in \mathcal{V}(a)$ : $\exists \mathcal{O}$ ouvert, $a \in \mathcal{O} \subset V$.

$\mathcal{O}$ ouvert et $a \in \mathcal{O}$ donc $\exists \varepsilon > 0$, $]a-\varepsilon, a+\varepsilon[ \subset \mathcal{O} \subset V$.

Réciproquement, si $]a-\varepsilon, a+\varepsilon[ \subset V$, alors $]a-\varepsilon, a+\varepsilon[$ est un ouvert contenant $a$, donc $V$ est un voisinage de $a$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

Si $V$ est un voisinage de $a$ et $V \subset V'$, alors $V'$ est un voisinage de $a$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

$A$ est ouvert ssi $A$ est un voisinage de tous ses points.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $A$ ouvert : $\forall x \in A$, $\exists \varepsilon > 0$, $]x-\varepsilon, x+\varepsilon[ \subset A$ ; donc $A$ est un voisinage de $x$ ($A \in \mathcal{V}(x)$) ; $A$ est voisinage de tous ses points.

Réciproquement : soit $x \in A$ ; $A \in \mathcal{V}(x)$ donc $\exists \varepsilon > 0$, $]x-\varepsilon, x+\varepsilon[ \subset A$.

D'où $\forall x \in A$, $\exists \varepsilon > 0$, $]x-\varepsilon, x+\varepsilon[ \subset A$ : $A$ est ouvert.

</div>

## II. Intérieur et adhérence

### 1) Intérieur d'une partie

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 1</span>

On dit que $a$ est intérieur à une partie $A$ ssi $A \in \mathcal{V}(a)$, c'est-à-dire

$$\exists \varepsilon > 0, \quad ]a-\varepsilon, a+\varepsilon[ \subset A$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$A = ]a,b[$ : $\forall x \in ]a,b[$, $x$ est intérieur à $A$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 2</span>

On appelle intérieur de $A$ l'ensemble des points intérieurs à $A$, et on le note $\overset{\circ}{A}$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

$\overset{\circ}{]a,b[} = ]a,b[$ ; $\overset{\circ}{&#92;&#123;a&#92;&#125;} = \emptyset$ ; $\overset{\circ}{\mathbb{Q}} = \emptyset$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

$\overset{\circ}{A} \subset A$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $a \in \overset{\circ}{A}$ : $\exists \varepsilon > 0$, $]a-\varepsilon, a+\varepsilon[ \subset A$ ; or $a \in ]a-\varepsilon, a+\varepsilon[ \subset A$ donc $a \in A$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

$\overset{\circ}{A}$ est ouvert et c'est la plus grande partie ouverte contenue dans $A$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\mathcal{U} = &#92;&#123; \mathcal{O} \text{ ouvert} \mid \mathcal{O} \subset A &#92;&#125;$

$\emptyset \in \mathcal{U}$ donc $\mathcal{U}$ non vide.

$A_1 = \bigcup&#95;{\mathcal{O} \in \mathcal{U}} \mathcal{O}$

**1ʳᵉ étape** : $A_1 \subset \overset{\circ}{A}$

Soit $x \in A_1$ : $\exists \mathcal{O} \in \mathcal{U}$ tel que $x \in \mathcal{O}$

$x \in \mathcal{O} \subset A$ donc $A$ est un voisinage de $x$

dc $x \in \overset{\circ}{A}$

**2ᵉ étape** : $\overset{\circ}{A} \subset A_1$

Soit $x \in \overset{\circ}{A}$, $x$ intérieur à $A$

$\exists \varepsilon > 0$, $]x-\varepsilon, x+\varepsilon[ \subset A$ ; $]x-\varepsilon, x+\varepsilon[$ étant un ouvert contenu dans $A$,

$x \in ]x-\varepsilon, x+\varepsilon[ \subset A$ et $]x-\varepsilon, x+\varepsilon[ \in \mathcal{U}$

donc $]x-\varepsilon, x+\varepsilon[ \subset A_1$

$x \in A_1$

Ainsi $\overset{\circ}{A}$ est ouvert comme réunion d'ouverts, et c'est la plus grande partie contenue dans $A$ :

- $\overset{\circ}{A} \subset A$ ;
- si $\mathcal{O}$ est un ouvert contenu dans $A$, $\mathcal{O} \in \mathcal{U}$ donc $\mathcal{O} \subset A_1$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $A \subset B$ alors $\overset{\circ}{A} \subset \overset{\circ}{B}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\overset{\circ}{A} \subset A \subset B$ ; $\overset{\circ}{A}$ est un ouvert contenu dans $B$ ; or $\overset{\circ}{B}$ est le plus grand ouvert contenu dans $B$ ; donc $\overset{\circ}{A} \subset \overset{\circ}{B}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

$A$ est ouvert ssi $\overset{\circ}{A} = A$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $A = \overset{\circ}{A}$, $A$ ouvert car $\overset{\circ}{A}$ ouvert.

Si $A$ ouvert, $A \in \mathcal{U}$, donc $A \subset \overset{\circ}{A} \subset A$ donc $A = \overset{\circ}{A}$.

</div>

### 2) Adhérence

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 1</span>

On dit que $a$ est adhérent à $A$ ssi tout voisinage de $a$ rencontre $A$, cad

$$\forall \varepsilon > 0, \quad ]a-\varepsilon, a+\varepsilon[ \cap A \neq \emptyset$$

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition 2</span>

On appelle adhérence de $A$ l'ensemble des points adhérents à $A$, on le note $\bar{A}$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

$\overline{]a,b[} = [a,b]$ ; $\overline{]a,b]} = [a,b]$ ; $\bar{\mathbb{Z}} = \mathbb{Z}$ ;

$\bar{\mathbb{Q}} = \mathbb{R}$ car $\forall x \in \mathbb{R}$, $\forall \varepsilon > 0$, $]x-\varepsilon, x+\varepsilon[$ contient un rationnel.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple important</span>

Si $A$ est une partie majorée, non vide, $\sup A \in \bar{A}$ :

$\forall \varepsilon > 0$, $\exists a \in A$, $\sup A - \varepsilon < a \leq \sup A$

dc $]\sup A - \varepsilon, \sup A + \varepsilon[ \cap A \neq \emptyset$

Même chose pour $\inf A$ si $A$ est non vide, minorée.

Ex : $A = &#92;&#123;1 + \frac{1}{n} \mid n \in \mathbb{N}&#42;&#92;&#125;$

$1 \in \bar{A}$ car $]1-\varepsilon, 1+\varepsilon[$ contient $1 + \frac{1}{n}$ pour $n > \frac{1}{\varepsilon}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

$A \subset \bar{A}$.

En effet, $\forall a \in A$, $\forall \varepsilon > 0$, $]a-\varepsilon, a+\varepsilon[ \cap A$ contient $a$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

$\bar{A}$ est fermé et c'est le plus petit fermé contenant $A$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\mathcal{F} = &#92;&#123; F \text{ fermé} \mid A \subset F &#92;&#125;$

$\mathcal{F} \neq \emptyset$ car $\mathbb{R} \in \mathcal{F}$

$A_1 = \bigcap&#95;{F \in \mathcal{F}} F$

**1ʳᵉ étape** : $A_1 \subset \bar{A}$

Si $x \notin \bar{A}$ : $\exists \varepsilon > 0$, $]x-\varepsilon, x+\varepsilon[ \cap A = \emptyset$

$A \subset \mathbb{R} \setminus ]x-\varepsilon, x+\varepsilon[$ (fermé)

$\mathbb{R} \setminus ]x-\varepsilon, x+\varepsilon[ = F \in \mathcal{F}$

$x \notin F$ donc $x \notin A_1$

**2ᵉ étape** : $\bar{A} \subset A_1$

Soit $x \in \bar{A}$. Si $\exists F \in \mathcal{F}$ tel que $x \notin F$ :

$\mathbb{R} \setminus F$ ouvert donc $\exists \varepsilon > 0$, $]x-\varepsilon, x+\varepsilon[ \subset \mathbb{R} \setminus F$

$]x-\varepsilon, x+\varepsilon[ \cap F = \emptyset$

or $A \subset F$, donc $\exists \varepsilon > 0$, $]x-\varepsilon, x+\varepsilon[ \cap A = \emptyset$, c'est-à-dire $x \notin \bar{A}$ — contradiction.

Donc $\forall F \in \mathcal{F}$, $x \in F$, c'est-à-dire $x \in A_1$.

Ainsi $\bar{A} = A_1$.

$\bar{A}$ est fermé comme intersection de fermés.

$A \subset \bar{A}$ ; $\bar{A}$ fermé contenant $A$.

$\forall F$ fermé contenant $A$, cad $F \in \mathcal{F}$ : $\bar{A} = A_1 \subset F$ car $A_1 = \bigcap&#95;{F \in \mathcal{F}} F$.

$\bar{A}$ est le plus petit fermé contenant $A$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

Si $A \subset B$ alors $\bar{A} \subset \bar{B}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$A \subset B \subset \bar{B}$ ; $\bar{A}$ est le plus petit fermé contenant $A$ et $\bar{B}$ est un fermé contenant $A$ ; donc $\bar{A} \subset \bar{B}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 3</span>

$A$ est fermé ssi $A = \bar{A}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $A = \bar{A}$, $A$ fermé car $\bar{A}$ fermé.

Si $A$ est fermé, $A \in \mathcal{F}$ donc $A \subset \bar{A} \subset A$ dc $A = \bar{A}$.

</div>

### 3) Partie dense

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $A$ est dense dans $B$ ssi $\bar{A} = B$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$\mathbb{Q}$ est dense dans $\mathbb{R}$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Exercice important n° 17 (feuille n° 10).

</div>

## III. Suites et topologie

### 1) Convergence

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$$x_n \to l \text{ si } \forall V \in \mathcal{V}(l), \exists N \in \mathbb{N}, \forall n \geq N, \quad x_n \in V$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Équivalence avec la définition usuelle</span>

Si $x_n \to l$ : $\forall \varepsilon > 0$, $\exists N \in \mathbb{N}$, $\forall n \geq N$, $&#124;x_n - l&#124; < \varepsilon$.

Soit $V \in \mathcal{V}(l)$ : $\exists \varepsilon > 0$, $]l-\varepsilon, l+\varepsilon[ \subset V$.

$\forall n \geq N$, $x_n \in ]l-\varepsilon, l+\varepsilon[ \subset V$.

Donc $\forall V \in \mathcal{V}(l)$, $\exists N \in \mathbb{N}$, $\forall n \geq N$, $x_n \in V$.

Réciproquement, si $\forall V \in \mathcal{V}(l)$, $\exists N \in \mathbb{N}$, $\forall n \geq N$, $x_n \in V$ :

soit $\varepsilon > 0$ ; $]l-\varepsilon, l+\varepsilon[ \in \mathcal{V}(l)$

$\exists N \in \mathbb{N}$, $\forall n \geq N$, $x_n \in ]l-\varepsilon, l+\varepsilon[$

$\forall \varepsilon > 0$, $\exists N \in \mathbb{N}$, $\forall n \geq N$, $&#124;x_n - l&#124; < \varepsilon$

</div>

### 2) Adhérence

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Caractérisation de l'adhérence par les suites</span>

$a \in \bar{A}$ ssi il existe une suite $(x_n)$ avec $x_n \in A$ et $x_n \to a$ ($n \to +\infty$).

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$1 \in \bar{A}$ avec $A = &#92;&#123;1 + \frac{1}{n} \mid n \in \mathbb{N}&#42;&#92;&#125;$ : $x_n = 1 + \frac{1}{n} \to 1$ et $x_n \in A$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $x_n \to a$, $x_n \in A$ :

$\forall \varepsilon > 0$, $\exists N \in \mathbb{N}$, $\forall n \geq N$, $x_n \in ]a-\varepsilon, a+\varepsilon[$

$\forall \varepsilon > 0$, $\exists x_n \in A \cap ]a-\varepsilon, a+\varepsilon[$

$\forall \varepsilon > 0$, $A \cap ]a-\varepsilon, a+\varepsilon[ \neq \emptyset$ donc $a \in \bar{A}$

Réciproquement : $a \in \bar{A}$

$\forall \varepsilon > 0$, $]a-\varepsilon, a+\varepsilon[ \cap A \neq \emptyset$

Pour $\varepsilon = \frac{1}{n}$, prenons $x_n$ un élément de $A \cap ]a-\frac{1}{n}, a+\frac{1}{n}[$ (qui existe car $]a-\frac{1}{n}, a+\frac{1}{n}[ \cap A \neq \emptyset$)

$a - \frac{1}{n} < x_n < a + \frac{1}{n}$ et $x_n \in A$

$x_n \to a$ et $\forall n \in \mathbb{N}&#42;$, $x_n \in A$ ($n \to +\infty$)

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Application</span>

$\bar{\mathbb{Q}} = \mathbb{R}$ : si $x \in \mathbb{R}$, la suite des approximations successives de $x$ est une suite rationnelle qui converge vers $x$, donc $x \in \bar{\mathbb{Q}}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

$A$ est fermé ssi (pour toute suite $(x_n)$ d'éléments de $A$ qui converge vers $l \in \mathbb{R}$, alors $l \in A$).

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $A$ est fermé et $x_n \to a \in \mathbb{R}$ avec $x_n \in A$ : $a \in \bar{A}$ ; $\bar{A} = A$ car $A$ fermé ; donc $a \in A$.

Réciproquement : soit $a \in \bar{A}$ ; donc $a$ est limite d'une suite $(x_n)$ avec $x_n \in A$ ; $x_n \to a$ et $x_n \in A$ ; par hypothèse $a \in A$ ; donc $\bar{A} \subset A$ dc $A = \bar{A}$ ; $A$ fermé.

</div>

### 3) Parties compactes

#### a) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit qu'une partie $A \subset \mathbb{R}$ est compacte ssi de toute suite $(x_n)$ avec $x_n \in A$, on peut extraire une sous-suite qui converge vers $a \in A$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $[a,b]$ : si $x_n \in [a,b]$, $(x_n)$ est bornée, il existe une sous-suite convergente $x&#95;{\varphi(n)} \to l \in \mathbb{R}$ ; $a \leq x_n \leq b$ ; donc $a \leq l \leq b$.
- $]a,+\infty[$ non compacte car $a + \frac{1}{n} \in A$ et $a + \frac{1}{n} \to a \notin A$.

</div>

#### b) Caractérisation

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Les compacts de $\mathbb{R}$ sont les fermés bornés.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $A$ compacte.

**Montrons que $A$ est fermée.** Soit $(a_n)$ une suite qui converge vers $l \in \mathbb{R}$ avec $a_n \in A$. Il existe $x&#95;{\varphi(n)}$ qui converge vers $l' \in A$. $x&#95;{\varphi(n)}$ est extraite de $a_n$ donc $x&#95;{\varphi(n)} \to l$. Donc $l' = l$ et $l \in A$ : $A$ est fermée (caractérisation séquentielle).

**Montrons que $A$ est bornée.** Supposons $A$ non bornée : $\forall M \in \mathbb{R}\ \exists a \in A\ &#124;a&#124; \geq M$. Pour $M = n$ prenons $a_n$ tel que $a_n \in A$ et $&#124;a_n&#124; \geq n$. On peut extraire une sous-suite qui converge vers $a \in A$, soit $a&#95;{\varphi(n)}$, et $&#124;a&#95;{\varphi(n)}&#124; \geq \varphi(n) \geq n$ : ainsi $(a&#95;{\varphi(n)})$ n'est pas bornée, impossible, car $a&#95;{\varphi(n)}$ converge donc est bornée.

**Conclusion** : une partie compacte est fermée, bornée.

**Réciproque.** Soit $A$ fermée, bornée. Soit $(a_n)$ une suite telle que $a_n \in A$ ; $(a_n)$ est bornée car $A$ est bornée. D'après Bolzano-Weierstrass, il existe une sous-suite $x&#95;{\varphi(n)}$ qui converge vers $a \in \mathbb{R}$. On a $a&#95;{\varphi(n)} \in A$ donc $a \in \bar{A} = A$ car $A$ est fermée. Donc $a \in A$ : $A$ est compacte.

</div>

## IV. Droite numérique achevée

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Droite numérique achevée</span>

On note $\bar{\mathbb{R}} = \mathbb{R} \cup &#92;&#123; +\infty, -\infty &#92;&#125;$.

</div>

### 1) Extension de l'ordre

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Ordre sur $\bar{\mathbb{R}}$</span>

$\forall x \in \mathbb{R}$ : $-\infty < x < +\infty$ ; de plus $-\infty < +\infty$, $+\infty \leq +\infty$, $-\infty \geq -\infty$.

$\leq$ définit une relation d'ordre sur $\bar{\mathbb{R}}$.

</div>

### 2) Extension de la topologie

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Rappel</span>

La topologie de $\mathbb{R}$ est l'ensemble des ouverts de $\mathbb{R}$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Ouverts de $\bar{\mathbb{R}}$</span>

Par définition, les intervalles ouverts de $\bar{\mathbb{R}}$ sont : les intervalles ouverts de $\mathbb{R}$ ; $\bar{\mathbb{R}}$, $]a, +\infty]$, $[-\infty, a[$ avec $a \in \mathbb{R}$.

Les ouverts de $\bar{\mathbb{R}}$ sont : les ouverts de $\mathbb{R}$ ; toute réunion d'ouverts de $\mathbb{R}$ et d'intervalles ouverts de $\bar{\mathbb{R}}$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Rappel (voisinages dans $\mathbb{R}$)</span>

$V$ est un voisinage de $a$ ($a \in \mathbb{R}$) si il existe un ouvert $O$ de $\mathbb{R}$ tel que $a \in O \subset V$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Voisinages dans $\bar{\mathbb{R}}$</span>

On dira que $V$ est un voisinage de $a$ dans $\bar{\mathbb{R}}$ ($V \subset \bar{\mathbb{R}}$, $a \in \bar{\mathbb{R}}$) ssi il existe $O$ ouvert de $\bar{\mathbb{R}}$ tel que $a \in O \subset V$.

Autrement dit :

- $a \in \mathbb{R}$ : $V \in \mathcal{V}(a)$ si $\exists \varepsilon > 0$, $]a-\varepsilon, a+\varepsilon[ \subset V$ ;
- $a = +\infty$ : $V \in \mathcal{V}(+\infty)$ si $\exists b \in \mathbb{R}$, $]b, +\infty] \subset V$ ;
- $a = -\infty$ : $V \in \mathcal{V}(-\infty)$ si $\exists b \in \mathbb{R}$, $[-\infty, b[ \subset V$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$]a, +\infty]$ est un voisinage de $+\infty$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Extension de la notion d'adhérence</span>

$A \subset \mathbb{R}$, $a \in \bar{A}$ ssi $\forall V \in \mathcal{V}(a)$, $V \cap A \neq \emptyset$.

Si $a \in \bar{\mathbb{R}}$ : $a$ est adhérent à $A$ dans $\bar{\mathbb{R}}$ (on notera $a \in \bar{A}$) ssi $\forall V \in \mathcal{V}(a)$, $V \cap A \neq \emptyset$.

Si $a \in \mathbb{R}$ et $A \subset \mathbb{R}$, la notion d'adhérence est la même dans $\mathbb{R}$ et $\bar{\mathbb{R}}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Adhérence de $+\infty$ et $-\infty$</span>

Si $a = +\infty$ est adhérent à $A \subset \bar{\mathbb{R}}$, alors $A$ n'est pas majorée.

Réciproquement : si $A$ n'est pas majorée, alors $\forall V \in \mathcal{V}(+\infty)\ \exists b \in \mathbb{R}$ tel que $]b, +\infty[ \subset V$ ; $b$ n'est pas un majorant de $A$ ; $\exists c \in A$ tel que $c > b$, donc $]b, +\infty[ \cap A \neq \emptyset$ ; à fortiori $V \cap A \neq \emptyset$, donc $+\infty$ est adhérent à $A$.

Ainsi : $+\infty$ est adhérent à $A \subset \bar{\mathbb{R}}$ ssi $A$ n'est pas majorée dans $\mathbb{R}$.

$-\infty$ : idem ($A$ non minorée).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Exercice important (n° 6)</span>

Toute partie non vide compacte de $\mathbb{R}$ admet un plus grand élément et un plus petit élément.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $A$ compacte donc bornée ; $A$ non vide bornée donc admet une borne sup et une borne inf.

$M = \sup A$, $M \in \bar{A}$ (cf. § II) ;

or $\bar{A} = A$ car $A$ est fermée (compacte)

donc $M \in A$ donc $M$ est le plus grand élément de $A$.

Même chose avec $m = \inf A$ : $m \in \bar{A}$, $m \in A$ donc c'est le plus petit élément de $A$.

</div>

## V. Fiche résumé — topologie de $\mathbb{R}$

### 1) Ouverts, voisinages, fermés

- Une partie $A$ de $\mathbb{R}$ est ouverte ssi $\forall x \in A$, $]x-\varepsilon, x+\varepsilon[ \subset A$ ;
- $]a,b[$, $]a,+\infty[$, $]-\infty,a[$ sont des ouverts ;
- une réunion d'ouverts est un ouvert ;
- l'intersection finie d'ouverts est un ouvert ;
- une partie $A$ de $\mathbb{R}$ est fermée ssi $\mathbb{R} \setminus A$ ouvert ;
- $[a,b]$, $[a,+\infty[$, $]-\infty,a]$ sont fermés ;
- une réunion finie de fermés est fermée ;
- une intersection de fermés est fermée ;
- soit $a \in \mathbb{R}$ : $V$ est un voisinage de $a$ ssi il existe $O$ ouvert inclu dans $V$ avec $a \in O$ ;
- on note $\mathcal{V}(a)$ l'ensemble des voisinages de $a$ ;
- $V \in \mathcal{V}(a) \Leftrightarrow \exists \varepsilon > 0$, $]a-\varepsilon, a+\varepsilon[ \subset V$ ;
- si $V$ voisinage de $a$ et $V \subset V'$ alors $V'$ voisinage de $a$ ;
- $A$ ouvert $\Leftrightarrow A \in \mathcal{V}(a)$ pour tout $a \in A$.

### 2) Intérieurs et adhérence

- on dit que $a$ est intérieur à une partie $A$ si $A \in \mathcal{V}(a)$ ;
- on appelle intérieur de $A$ l'ensemble des points intérieurs à $A$, noté $\overset{\circ}{A}$ ;
- prop 1 : $\overset{\circ}{A} \subset A$ ;
- prop 2 : $\overset{\circ}{A}$ est ouvert et c'est le plus grand ouvert contenu dans $A$ ;
- corollaire : si $A \subset B$ alors $\overset{\circ}{A} \subset \overset{\circ}{B}$ ;
- prop 3 : $A$ ouvert $\Leftrightarrow \overset{\circ}{A} = A$ ;
- on dit que $a$ est adhérent à $A$ si tout voisinage de $a$ rencontre $A$ ;
- on appelle adhérence de $A$ l'ensemble des points adhérents, notée $\bar{A}$ ;
- $A \subset \bar{A}$ ;
- $\bar{A}$ est fermé et c'est le plus petit fermé contenant $A$ ;
- si $A \subset B$ alors $\bar{A} \subset \bar{B}$ ;
- $A$ est fermé ssi $A = \bar{A}$ ;
- on dit que $A$ est dense dans $B$ ssi $\bar{A} = B$.

### 3) Suites et topologie

- $x_n \to l$ si $\forall V \in \mathcal{V}(l)$, $\exists N \in \mathbb{N}$, $\forall n \geq N$, $x_n \in V$ ;
- $a \in \bar{A}$ ssi il existe une suite $(x_n)$ avec $x_n \in A$ et $x_n \to a$ ($n \to +\infty$) ;
- $A$ est fermée ssi ($\forall (x_n) \in A^{\mathbb{N}}$) $x_n \to l \in \mathbb{R} \Rightarrow l \in A$ ;
- on dit qu'une partie $A \subset \mathbb{R}$ est compacte ssi de toute suite $(x_n)$ avec $x_n \in A$ on peut extraire une sous-suite qui converge vers $a \in A$ ;
- les compacts de $\mathbb{R}$ sont les fermés bornés.

## VI. Exercices — feuille n° 10

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 10 — Topologie (énoncés)</span>

<ol class="enonces">
<li>$A = &#92;&#123; (-1)^n + \frac{1}{n+1} \mid n \in \mathbb{N} &#92;&#125;$ : $A$ est-elle ouverte ? fermée ? Quel est son intérieur ? son adhérence ?</li>
<li>Soit $A$ une partie de $\mathbb{R}$ et pour $n \geq 1$ : $A&#95;{1/n} = \bigcup&#95;{x \in A} ]x - \frac{1}{n}, x + \frac{1}{n}[$ .
<ol>
<li>Montrer que $A&#95;{1/n}$ est un ouvert.</li>
<li>Montrer que $\bar{A} = \bigcap&#95;{n \in \mathbb{N}^&#42;} A&#95;{1/n}$.</li>
</ol>
</li>
<li>Déterminer l'adhérence de $A = &#92;&#123; \frac{n}{nm+1} \mid n, m \in \mathbb{N}^&#42; &#92;&#125;$.</li>
<li>Démontrer que pour $A$ et $B$ parties de $\mathbb{R}$ :
<ol>
<li>$\overset{\circ}{\overset{\circ}{A}} = \overset{\circ}{A}$, $\overline{\bar{A}} = \bar{A}$ ;</li>
<li>$\mathbb{R} \setminus \overset{\circ}{A} = \overline{\mathbb{R} \setminus A}$, $\mathbb{R} \setminus \bar{A} = \overset{\circ}{\mathbb{R} \setminus A}$. En déduire que $\mathbb{R} \setminus \mathbb{Q}$ est dense dans $\mathbb{R}$.</li>
<li>$\overline{A \cup B} = \bar{A} \cup \bar{B}$, $\overline{A \cap B} \subset \bar{A} \cap \bar{B}$. A-t-on égalité ?</li>
</ol>
</li>
<li><ol>
<li>Soit $A = ]0,1[ \cup ]1,2] \cup &#92;&#123; 3 &#92;&#125;$. Déterminer $A$, $\overset{\circ}{A}$, $\bar{A}$, $\overline{\overset{\circ}{A}}$, $\overset{\circ}{\bar{A}}$, $\overline{\overset{\circ}{\bar{A}}}$, $\overset{\circ}{\overline{\overset{\circ}{A}}}$ .</li>
<li>Montrer que $\overline{\overset{\circ}{A}} = \overset{\circ}{A}$, $\overset{\circ}{\bar{A}} = \overset{\circ}{A}$ .</li>
<li>Montrer que les 7 parties introduites au a) sont toutes distinctes pour $B = A \cup (\mathbb{Q} \cap ]4,5[)$.</li>
</ol>
</li>
<li>** Montrer qu'une partie non vide compacte de $\mathbb{R}$ admet un plus grand et un plus petit élément.</li>
<li>Montrer qu'une partie bornée de $\mathbb{Z}$ est compacte.</li>
<li>Montrer que si $A$ est ouverte, $A+B$ est ouverte.</li>
<li>Montrer que la somme de deux parties non vides compactes est encore compacte.</li>
<li>Montrer que si $A$ est compacte et $B$ fermée, $A+B$ est fermée. Étudier la somme de $\mathbb{Z}^&#42;$ et de $B=&#92;&#123; n - \frac{1}{n} \mid n \in \mathbb{N}^&#42; &#92;&#125;$. Conclusion ?</li>
<li>Soit $(x_n)$ une suite de réels tendant vers $x$. Montrer que $A = &#92;&#123; x_n \mid n \in \mathbb{N} &#92;&#125; \cup &#92;&#123; x &#92;&#125;$ est compacte.</li>
<li>Soit $(F_n)$ une suite décroissante de compacts. Montrer que $\bigcap&#95;{n \in \mathbb{N}} F_n$ est non vide. Le résultat subsiste-t-il si on suppose les $F_n$ fermés seulement ?</li>
</ol>

</div>

## VII. Technique

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Technique — topologie</span>

1) Pour montrer que $A$ n'est pas fermé quand $A$ est déterminé par une suite, montrer que la suite ne converge pas dans $A$.

2) Pour déterminer les bornes d'un ensemble défini par une suite, faire tendre les variables une par une vers l'infini.

3) Pour démontrer que $\bar{A} = A \cup$ quelque chose, il suffit de montrer qu'une suite qui converge de $A$ vers $\ell \neq$ quelque chose a sa limite $\ell \in A$.

</div>
