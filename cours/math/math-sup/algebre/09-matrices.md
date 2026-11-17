---
layout: chapitre
title: "Matrices"
numero: 9
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Algèbre"
source: "Math/Math Sup/Algèbre/09 Matrices"
pages: 50
---

## I. Définitions

Dans tout ce chapitre, $\mathbb{K}$ désigne un corps.

### 1) Matrices

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle **matrice** de dimension $(n,p)$ ($n, p \in \mathbb{N}^&#42;$) — ou de **type** $(n,p)$ — une application

$$A : \mathbb{N}_n \times \mathbb{N}_p \longrightarrow \mathbb{K}, \qquad (i,j) \longmapsto a_{ij}$$

On représente une matrice par un tableau à $n$ lignes et $p$ colonnes :

$$A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1p} \\ a_{21} & a_{22} & \cdots & a_{2p} \\ \vdots & \vdots & & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{np} \end{pmatrix}$$

On note aussi $A = (a&#95;{ij})&#95;{1 \leq i \leq n,\ 1 \leq j \leq p}$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Vocabulaire</span>

- $i$ s'appelle l'**indice de ligne** ;
- $j$ s'appelle l'**indice de colonne** ;
- $a&#95;{ij}$ s'appelle le **terme général** de la matrice ;
- si $p = n$, on dit que $A$ est une **matrice carrée** ;
- si $A$ est de type $(1,p)$, on parle de **matrice ligne** ;
- si $A$ est de type $(n,1)$, on parle de **matrice colonne** ;
- on appelle **matrice extraite** de $A$ toute matrice obtenue en supprimant des lignes et des colonnes de $A$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}, \qquad (1), \qquad \begin{pmatrix} 1 & 3 \\ 7 & 9 \end{pmatrix}, \qquad \begin{pmatrix} 1 & 2 \\ 4 & 5 \\ 7 & 8 \end{pmatrix}$$

</div>

### 2) Matrice d'une application linéaire

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $u \in \mathcal{L}(E,F)$, soit $\mathcal{e} = (e_1, \dots, e_p)$ une base de $E$ et $\mathcal{f} = (f_1, \dots, f_n)$ une base de $F$. On appelle **matrice de $u$ relativement aux bases $\mathcal{e}$ et $\mathcal{f}$** la matrice de terme général $a&#95;{ij}$ définie par

$$u(e_j) = \sum_{i=1}^{n} a_{ij}\, f_i$$

On note $A = \mathrm{Mat}&#95;{\mathcal{e},\mathcal{f}}(u)$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$\mathbb{R}&#95;n[X] \to \mathbb{R}&#95;n[X]$, $P \mapsto P'$, avec $\mathcal{e} = (1, X, \dots, X^n)$ et $\mathcal{f} = (1, X, \dots, X^n)$ :

$$A = \mathrm{Mat}_{\mathcal{e},\mathcal{f}}(u) = \mathrm{diag}(0, 1, 2, \dots, n)$$

$$A = \begin{pmatrix}
0 & 1 & & & 0 \\
& 0 & 2 & & \\
& & \ddots & \ddots & \\
& & & 0 & n \\
0 & & & & 0
\end{pmatrix}$$

Un second exemple donne une matrice $B = \mathrm{Mat}&#95;{\mathcal{e},\mathcal{f}}(u)$ triangulaire supérieure stricte (diagonale nulle, première sur-diagonale formée des $2, 6, \dots, n(n-1)$).

</div>

## II. Structure de $\mathcal{M}&#95;{n,p}(\mathbb{K})$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On note $\mathcal{M}&#95;{n,p}(\mathbb{K})$ l'ensemble des matrices à coefficients dans $\mathbb{K}$ de type $(n,p)$.

</div>

### a) Addition, produit scalaire

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Pour $A, B \in \mathcal{M}&#95;{n,p}(\mathbb{K})$ et $\lambda \in \mathbb{K}$, on définit :

- $A + B$ est la matrice $C$ de terme général $c&#95;{ij} = a&#95;{ij} + b&#95;{ij}$ ;
- $\lambda A$ est la matrice $C$ de terme général $c&#95;{ij} = \lambda a&#95;{ij}$ ;

ainsi que la loi externe $\mathbb{K} \times \mathcal{M}&#95;{n,p}(\mathbb{K}) \to \mathcal{M}&#95;{n,p}(\mathbb{K})$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 1</span>

$(\mathcal{M}&#95;{n,p}(\mathbb{K}), +, \cdot)$ est un **espace vectoriel** sur $\mathbb{K}$ (on a $\mathcal{M}&#95;{n,p}(\mathbb{K}) = \mathbb{K}^{\mathbb{N}&#95;n \times \mathbb{N}&#95;p}$).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété 2</span>

$\dim \mathcal{M}&#95;{n,p}(\mathbb{K}) = np$.

Soit $E&#95;{ij}$ la matrice dont tous les coefficients sont nuls, sauf celui d'indice $(i,j)$ qui vaut $1$ : $(E&#95;{ij})&#95;{kl} = \delta&#95;{ik}&#92;&#44;\delta&#95;{jl}$. On note $\delta_i^j$ (symbole de Kronecker), ou $\delta&#95;{ij}$ :

$$\delta_i^j = \begin{cases} 0 & \text{si } i \neq j \\ 1 & \text{si } i = j \end{cases}$$

(ex : $\delta_1^1 = 1$, $\delta_2^1 = 0$). Soit $A = (a&#95;{ij}) \in \mathcal{M}&#95;{n,p}(\mathbb{K})$ :

$$A = \sum_{1 \leq i \leq n,\ 1 \leq j \leq p} a_{ij}\, E_{ij}$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Les $E&#95;{ij}$ appartiennent à $\mathcal{M}&#95;{n,p}(\mathbb{K})$ et $\mathrm{Vect}\big((E&#95;{ij})&#95;{1 \leq i \leq n,\ 1 \leq j \leq p}\big) \subset \mathcal{M}&#95;{n,p}(\mathbb{K})$ : la famille $(E&#95;{ij})$ est **génératrice**. Elle est **libre** : supposons $\sum a&#95;{ij} E&#95;{ij} = 0$, ce qui signifie que la matrice de terme général $a&#95;{ij}$ est nulle, c'est-à-dire $\forall i, j,\ a&#95;{ij} = 0$.

$(E&#95;{ij})$ est donc une base de $\mathcal{M}&#95;{n,p}(\mathbb{K})$ : il y a $np$ matrices $E&#95;{ij}$, d'où $\dim \mathcal{M}&#95;{n,p}(\mathbb{K}) = np$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (isomorphisme avec les applications linéaires)</span>

Soit $E$ de dimension $p$, de base $\mathcal{e}$ ; $F$ de dimension $n$, de base $\mathcal{f}$ ; $u \in \mathcal{L}(E,F)$. On pose

$$\varphi(u) = \mathrm{Mat}_{\mathcal{e},\mathcal{f}}(u) \in \mathcal{M}_{n,p}(\mathbb{K})$$

$$\varphi : \mathcal{L}(E,F) \longrightarrow \mathcal{M}_{n,p}(\mathbb{K}), \quad u \longmapsto \varphi(u)$$

est un **isomorphisme d'espaces vectoriels**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soient $u, v \in \mathcal{L}(E,F)$ : $\mathrm{Mat}&#95;{\mathcal{e},\mathcal{f}}(u) = (a&#95;{ij})$ avec $u(e_j) = \sum_i a&#95;{ij} f_i$ ; $\mathrm{Mat}&#95;{\mathcal{e},\mathcal{f}}(v) = (b&#95;{ij})$ ; $\mathrm{Mat}&#95;{\mathcal{e},\mathcal{f}}(\lambda u + v) = (c&#95;{ij}) = C$. Alors

$$\lambda u(e_j) + v(e_j) = \sum_{i=1}^{n} (\lambda a_{ij} + b_{ij})\, f_i$$

donc $c&#95;{ij} = \lambda a&#95;{ij} + b&#95;{ij}$, c'est-à-dire $C = \lambda A + B$ : $\varphi(\lambda u + v) = \lambda\varphi(u) + \varphi(v)$.

Si $\varphi(u) = 0$ : $\forall j,\ u(e_j) = \sum_i 0&#92;&#44; f_i = 0$, et comme $\mathcal{e}$ est une base, $u = 0$ : $\varphi$ est injective. Enfin, en posant $u(e_j) = \sum_i a&#95;{ij} f_i$ (ce qui définit une unique application linéaire), on a $\mathrm{Mat}&#95;{\mathcal{e},\mathcal{f}}(u) = A$ : $\varphi$ est surjective.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$\dim \mathcal{L}(E,F) = np$ (avec $\dim E = p$, $\dim F = n$).

</div>

## III. Produit de matrices

### 1) Définition du produit

Soient $A = (a&#95;{ij})$, $B = (b&#95;{ij})$ : on veut définir $AB$ pour que $AB$ soit la matrice de la composée $u \circ v$. Soient $v : E \to F$, $u : F \to G$ ; $\dim E = p$, $\dim F = n$, $\dim G = q$ ; $\mathcal{e}$ base de $E$, $\mathcal{f}$ base de $F$, $\mathcal{g}$ base de $G$ ; $B = \mathrm{Mat}&#95;{\mathcal{f},\mathcal{e}}(v)$ de type $(n,p)$ et $A = \mathrm{Mat}&#95;{\mathcal{g},\mathcal{f}}(u)$ de type $(q,n)$.

Montrons que $\mathrm{Mat}&#95;{\mathcal{g},\mathcal{e}}(u \circ v) = (c&#95;{ij})$ avec

$$c_{ij} = \sum_{k=1}^{n} a_{ik}\, b_{kj}$$

En effet $u(v(e_j)) = u\big(\sum_k b&#95;{kj} f_k\big) = \sum_k b&#95;{kj}&#92;&#44; u(f_k) = \sum_k \sum_i b&#95;{kj} a&#95;{ik}&#92;&#44; g_i = \sum_i \big(\sum_k a&#95;{ik} b&#95;{kj}\big) g_i$.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Si $A \in \mathcal{M}&#95;{q,n}(\mathbb{K})$ et $B \in \mathcal{M}&#95;{n,p}(\mathbb{K})$, alors on définit $AB \in \mathcal{M}&#95;{q,p}(\mathbb{K})$ : $C = (AB)$ est la matrice de terme général

$$c_{ij} = \sum_{k=1}^{n} a_{ik}\, b_{kj}$$

</div>

**Disposition pratique** : le coefficient $c&#95;{ij}$ s'obtient en multipliant la $i$-ème ligne de $A$ par la $j$-ème colonne de $B$.

$BA$ n'est pas défini si $p \neq q$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$A = \begin{pmatrix} -1 & 2 & -1 \\ -1 & 0 & 2 \end{pmatrix}, \qquad B = \begin{pmatrix} 2 & 1 & -1 \\ 0 & 1 & 2 \\ 1 & 1 & 1 \end{pmatrix}, \qquad AB = \begin{pmatrix} -3 & 0 & 4 \\ 0 & 1 & 3 \end{pmatrix}$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

- $\times$ est **associative** ;
- $\times$ est **distributive** sur $+$ (à droite et à gauche) ;
- $\lambda (AB) = (\lambda A)B = A(\lambda B)$.

On retrouve ces propriétés sur les matrices grâce à l'isomorphisme $\varphi$ : ce sont les mêmes propriétés que sur les applications linéaires.

</div>

### 2) Matrice d'une composée — formule $Y = AX$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Soit $u \in \mathcal{L}(E,F)$ de matrice $A$ relativement aux bases $\mathcal{e}$ et $\mathcal{f}$. Soit $x \in E$, $X = \begin{pmatrix} x_1 \\ \vdots \\ x_p \end{pmatrix}$ et $Y = \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix}$ ; alors

$$Y = AX$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$A \in \mathcal{M}&#95;{n,p}(\mathbb{K})$, $X \in \mathcal{M}&#95;{p,1}(\mathbb{K})$ : le produit $AX$ est bien défini et $y_i = \sum&#95;{j=1}^{p} a&#95;{ij} x_j$. Alors

$$u(x) = u\Big(\sum_{j=1}^{p} x_j e_j\Big) = \sum_{j=1}^{p} x_j\, u(e_j) = \sum_{j=1}^{p} x_j \Big(\sum_{i=1}^{n} a_{ij} f_i\Big) = \sum_{i=1}^{n} \Big(\sum_{j=1}^{p} a_{ij} x_j\Big) f_i = \sum_{i=1}^{n} y_i f_i$$

d'où l'unicité de l'écriture $Y = AX$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $u : (x,y,z) \mapsto (x+y,\ z,\ x+z)$, de matrice $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 1 \end{pmatrix}$ : pour $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$, on a $AX = \begin{pmatrix} x+y \\ z \\ x+z \end{pmatrix}$ ;
- $u : (x,y,z) \mapsto (2x+y,\ x+y+z,\ 3z)$, de matrice $A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 0 & 3 \end{pmatrix}$ : $AX = \begin{pmatrix} 2x+y \\ x+y+z \\ 3z \end{pmatrix}$.

</div>

### 3) Transposée

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $A \in \mathcal{M}&#95;{n,p}(\mathbb{K})$ ; on appelle **matrice transposée** de $A$ la matrice de terme général $(a&#95;{ji})&#95;{1 \leq j \leq p,\ 1 \leq i \leq n}$, notée ${}^t A$, qui appartient à $\mathcal{M}&#95;{p,n}(\mathbb{K})$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$A = \begin{pmatrix} 1 & 2 \\ 4 & 5 \\ 7 & 8 \end{pmatrix}, \qquad {}^t A = \begin{pmatrix} 1 & 4 & 7 \\ 2 & 5 & 8 \end{pmatrix}$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$\varphi : \mathcal{M}_{n,p}(\mathbb{K}) \longrightarrow \mathcal{M}_{p,n}(\mathbb{K}), \quad A \longmapsto {}^t A$$

est un **isomorphisme**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

${}^t(A+B) = {}^t C$ où $C$ a pour terme général $a&#95;{ij} + b&#95;{ij}$, donc ${}^t C$ a pour terme général $a&#95;{ji} + b&#95;{ji}$ : ${}^t C = {}^t A + {}^t B$. Si ${}^t A = 0$, alors $A = 0$ (injectivité). Enfin $\dim \mathcal{M}&#95;{n,p}(\mathbb{K}) = np = \dim \mathcal{M}&#95;{p,n}(\mathbb{K})$ : $\varphi$ est un isomorphisme.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$${}^t({}^t A) = A, \qquad {}^t(AB) = {}^t B\, {}^t A$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$AB$ a pour terme général $c&#95;{ij} = \sum&#95;{k=1}^{n} a&#95;{ik} b&#95;{kj}$ ; ${}^t(AB)$ a pour terme général $(c&#95;{ji})&#95;{1 \leq i \leq q,\ 1 \leq j \leq n}$ et $c&#95;{ji} = \sum_k a&#95;{jk} b&#95;{ki}$. Si $D = {}^t(AB)$, on a $d&#95;{ji} = c&#95;{ji}$. Par ailleurs ${}^t B$ a pour terme général $(b&#95;{kj})$ et ${}^t A$ a pour terme général $(a&#95;{ij})$, donc le terme général $e&#95;{ij}$ de ${}^t B&#92;&#44; {}^t A$ vaut

$$e_{ij} = \sum_{k=1}^{n} ({}^t B)_{ik} ({}^t A)_{kj} = \sum_{k=1}^{n} b_{ki} a_{jk} = d_{ij}$$

d'où ${}^t(AB) = {}^t B&#92;&#44; {}^t A$.

</div>

## IV. Structure de $\mathcal{M}&#95;n(\mathbb{K})$

### 1) Matrice d'un endomorphisme

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $u : E \to E$, $E$ étant privé d'une base $\mathcal{e}$ ; on appelle **matrice de $u$ relativement à la base $\mathcal{e}$** la matrice de $u$ relativement au couple de bases $(\mathcal{e}, \mathcal{e})$, notée $A = \mathrm{Mat}&#95;{\mathcal{e}}(u)$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

$$\mathrm{Mat}_{\mathcal{e}} : \mathcal{L}(E) \longrightarrow \mathcal{M}_n(\mathbb{K}), \quad u \longmapsto \mathrm{Mat}_{\mathcal{e}}(u)$$

est un isomorphisme.

</div>

### 2) Algèbre $\mathcal{M}&#95;n(\mathbb{K})$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$(\mathcal{M}&#95;n(\mathbb{K}), +, \times, \cdot)$ est une $\mathbb{K}$-**algèbre non commutative**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\times$ est une loi interne sur $\mathcal{M}&#95;n(\mathbb{K})$ (associative, distributive sur $+$). La matrice identité

$$I = I_n = \begin{pmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \ddots & \vdots \\ \vdots & \ddots & \ddots & 0 \\ 0 & \cdots & 0 & 1 \end{pmatrix}$$

est élément neutre. On a $\lambda(AB) = (\lambda A)B = A(\lambda B)$ : c'est une algèbre.

**Attention** : $\mathcal{M}&#95;n(\mathbb{K})$ n'est **pas intègre** : pour $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, on a $A^2 = 0$ avec $A \neq 0$ ; l'algèbre est non commutative.

</div>

### 3) Éléments inversibles

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Rappel</span>

Dans un anneau, l'ensemble des éléments inversibles est un groupe pour $\times$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Le **groupe** des matrices carrées inversibles d'ordre $n$ à coefficients dans $\mathbb{K}$ est appelé **groupe linéaire d'ordre $n$** et est noté $\mathrm{GL}&#95;n(\mathbb{K})$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$\mathrm{GL}&#95;n(\mathbb{K})$ est isomorphe à $\mathrm{GL}(E)$ si $E$ est un espace vectoriel de dimension $n$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Posons $\varphi = \varphi&#124;&#95;{\mathrm{GL}(E)} : \mathrm{GL}(E) \to \mathcal{M}&#95;n(\mathbb{K})$, $u \mapsto \mathrm{Mat}&#95;{\mathcal{e}}(u)$ ; $\varphi$ reste injective. Si $A \in \varphi(\mathrm{GL}(E))$, $A$ est la matrice de $u$ automorphisme ; $u \circ u^{-1} = \mathrm{Id}$, soit $B$ la matrice de $u^{-1}$ ; $AB$ est la matrice de $u \circ u^{-1}$ : $AB = I_n$ ; de même $BA = I_n$ (matrice de $u^{-1} \circ u$) ; donc $A$ est inversible d'inverse $B$ : $\varphi(\mathrm{GL}(E)) \subset \mathrm{GL}&#95;n(\mathbb{K})$. Réciproquement, si $A \in \mathrm{GL}&#95;n(\mathbb{K})$, soit $u = \varphi^{-1}(A)$ ; $u$ est bijective $\Leftrightarrow A \in \varphi(\mathrm{GL}(E))$ ; donc $\varphi(\mathrm{GL}(E)) = \mathrm{GL}&#95;n(\mathbb{K})$ : $\varphi$ est bijective de $\mathrm{GL}(E)$ sur $\mathrm{GL}&#95;n(\mathbb{K})$, et $\mathrm{GL}(E) \simeq \mathrm{GL}&#95;n(\mathbb{K})$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Soit $E$ de dimension $n$ et $\mathcal{e}$ une base de $E$, $A = \mathrm{Mat}&#95;{\mathcal{e}}(u)$ avec $u \in \mathcal{L}(E)$. Alors $A$ est inversible **si et seulement si** $u$ est un automorphisme. On note l'inverse de $A$ : $A^{-1}$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $A$ est inversible à droite ($\exists B$ tel que $AB = I_n$) : considérons $A$ comme la matrice d'un endomorphisme $u$ d'un espace $E$ de dimension $n$ (par exemple $\mathbb{K}^n$), relativement à une base $\mathcal{e}$ (par exemple la base canonique) ; idem $B = \mathrm{Mat}&#95;{\mathcal{e}}(v)$ ; $u \circ v = \mathrm{Id}$ ; $u$ est injective, donc surjective (car $\dim E = \dim E$) ; $u$ et $v$ sont bijectifs ; $u^{-1} \circ (u \circ v) = u^{-1} \circ \mathrm{Id}$ donne $v = u^{-1}$ ; d'où $u \circ u^{-1} = \mathrm{Id}$ et $BA = I_n$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $AB = I_n$, alors $A$ et $B$ sont inversibles et $B = A^{-1}$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

CNS pour que $\begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \mathcal{M}&#95;2(\mathbb{K})$ soit inversible : $A$ inversible $\Leftrightarrow$ $(x,y) \mapsto (ax + by,\ cx + dy)$ est bijective.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$A$ est inversible si et seulement si ${}^t A$ est inversible, et dans ce cas

$${}^t(A^{-1}) = ({}^t A)^{-1}$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

${}^t A&#92;&#44; {}^t(A^{-1}) = {}^t(A^{-1}A) = {}^t I_n = I_n$ ; donc ${}^t A$ est inversible et ${}^t(A^{-1}) = ({}^t A)^{-1}$. Ou bien : ${}^t A$ est inversible, donc ${}^t({}^t A) = A$ est inversible d'après la première étape, car $A$ est inversible.

</div>

### 4) Éléments particuliers de $\mathcal{M}&#95;n(\mathbb{K})$

#### a) Matrices triangulaires

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$A$ est **triangulaire à droite** si $a&#95;{ij} = 0$ dès que $i > j$ ; **triangulaire à gauche** si $a&#95;{ij} = 0$ dès que $i < j$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

L'ensemble des matrices triangulaires à droite est une **sous-algèbre** de $\mathcal{M}&#95;n(\mathbb{K})$ (resp. à gauche).

</div>

#### b) Matrices diagonales

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$A$ est **diagonale** si les coefficients non diagonaux sont nuls.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$A = \begin{pmatrix}
1 & & & \\
& 2 & & \\
& & \ddots & \\
& & & n
\end{pmatrix}$$

</div>

#### c) Matrices symétriques et antisymétriques

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $A$ est **symétrique** si ${}^t A = A$ ; **antisymétrique** si ${}^t A = -A$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$A = \begin{pmatrix} 1 & 4 & 5 \\ 4 & 2 & 6 \\ 5 & 6 & 3 \end{pmatrix}$$

</div>

Si $A$ est antisymétrique : $\forall i, j,\ a&#95;{ij} = -a&#95;{ji}$ ; en particulier $\forall i,\ a&#95;{ii} = 0$.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Avec $\mathcal{S}&#95;n(\mathbb{K})$ l'ensemble des matrices symétriques et $\mathcal{A}&#95;n(\mathbb{K})$ celui des matrices antisymétriques :

$$\mathcal{M}_n(\mathbb{K}) = \mathcal{S}_n(\mathbb{K}) \oplus \mathcal{A}_n(\mathbb{K})$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$t : \mathcal{M}&#95;n(\mathbb{K}) \to \mathcal{M}&#95;n(\mathbb{K})$, $A \mapsto {}^t A$ est une involution ($t^2 = \mathrm{Id}&#95;{\mathcal{M}&#95;n}$) ; c'est une symétrie de $\mathcal{M}&#95;n(\mathbb{K})$ :

$$\mathcal{M}_n(\mathbb{K}) = \mathrm{Ker}(t - \mathrm{Id}) \oplus \mathrm{Ker}(t + \mathrm{Id})$$

Or $A \in \mathrm{Ker}(t - \mathrm{Id}) \Leftrightarrow {}^t A - A = 0 \Leftrightarrow {}^t A = A \Leftrightarrow A \in \mathcal{S}&#95;n(\mathbb{K})$, et $\mathcal{A}&#95;n(\mathbb{K}) = \mathrm{Ker}(t + \mathrm{Id})$ : ce sont deux sous-espaces supplémentaires de $\mathcal{M}&#95;n(\mathbb{K})$.

$$\dim \mathcal{A}_n(\mathbb{K}) = \frac{n(n-1)}{2}, \qquad \text{base de } \mathcal{A}_n(\mathbb{K}) : (E_{ij} - E_{ji})_{i > j}$$

$$\dim \mathcal{S}_n(\mathbb{K}) = n^2 - \frac{n(n-1)}{2} = \frac{n(n+1)}{2}, \qquad \text{base de } \mathcal{S}_n(\mathbb{K}) : (E_{ii})_i,\ (E_{ij} + E_{ji})_{i < j}$$

</div>

### 5) Trace d'une matrice carrée

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle **trace** de $A$ (notée $\mathrm{Tr}(A)$) le scalaire $\sum&#95;{i=1}^{n} a&#95;{ii}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$\mathrm{Tr} : \mathcal{M}_n(\mathbb{K}) \to \mathbb{K}, \quad A \mapsto \mathrm{Tr}(A)$$

est une **forme linéaire** :

$$\mathrm{Tr}(\lambda A + B) = \sum_{i=1}^{n} (\lambda a_{ii} + b_{ii}) = \lambda\, \mathrm{Tr}(A) + \mathrm{Tr}(B)$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$\mathrm{Tr}(AB) = \mathrm{Tr}(BA)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $C = AB$ ; $c&#95;{ii} = \sum&#95;{j=1}^{n} a&#95;{ij} b&#95;{ji}$ ; alors

$$\mathrm{Tr}(AB) = \sum_{i=1}^{n} c_{ii} = \sum_{i=1}^{n} \sum_{j=1}^{n} a_{ij} b_{ji} = \sum_{j=1}^{n} \sum_{i=1}^{n} b_{ji} a_{ij} = \mathrm{Tr}(BA)$$

</div>

## V. Changement de base

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $E$ un espace vectoriel de dimension $n$ et $\mathcal{F} = (v_1, \dots, v_p)$ un système de vecteurs de $E$ ; la **matrice de $\mathcal{F}$ relativement à une base $\mathcal{e}$ de $E$** est la matrice de terme général $a&#95;{ij}$, où les $a&#95;{ij}$ sont caractérisés par

$$v_j = \sum_{i=1}^{n} a_{ij}\, e_i$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$E = \mathbb{C}$, base $\mathcal{e} = (1, i)$, et la matrice

$$A = \begin{pmatrix} 1 & \dfrac{1-i}{2} \\[4pt] 0 & \dfrac{i}{2} \end{pmatrix}$$

</div>

### 2) Changement de bases

Soit $\mathcal{e}$, $\mathcal{e}'$ deux bases de $E$. Pour $x \in E$ : $x = \sum&#95;{i=1}^{n} x_i e_i = \sum&#95;{i=1}^{n} x'&#95;i e'&#95;i$.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle **matrice de passage** de $\mathcal{e}$ à $\mathcal{e}'$ la matrice de $\mathcal{e}' = (e'&#95;1, \dots, e'&#95;n)$ relativement à $\mathcal{e}$ : c'est la matrice $P = (E_1 \ \cdots \ E_n)$ dont la $j$-ième colonne est formée des coordonnées de $e'&#95;j$ dans la base $\mathcal{e}$ ; c'est une matrice carrée d'ordre $n$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$P = \begin{pmatrix} 1 & \dfrac{1-i}{2} \\[4pt] 0 & \dfrac{i}{2} \end{pmatrix}, \qquad
P^{-1} = \begin{pmatrix} 1 & 1+i \\[4pt] 0 & -2i \end{pmatrix}
= \frac{2}{i} \begin{pmatrix} \dfrac{i}{2} & -\dfrac{1-i}{2} \\[4pt] 0 & 1 \end{pmatrix}$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Soient $X = (x_i)$ et $X' = (x'&#95;i)$ les matrices colonnes de $x$ relativement à $\mathcal{e}$ et $\mathcal{e}'$. On a

$$X = PX'$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Posons $Y = PX'$ ; $y_i = \sum&#95;{j=1}^{n} p&#95;{ij} x'&#95;j$. Or $x = \sum_i x_i e_i = \sum_j x'&#95;j e'&#95;j$ et $e'&#95;j = \sum_i p&#95;{ij} e_i$ ($j$-ième colonne de $P$), donc

$$x = \sum_{j=1}^{n} x'_j \sum_{i=1}^{n} p_{ij} e_i = \sum_{i=1}^{n} \Big(\sum_{j=1}^{n} p_{ij} x'_j\Big) e_i = \sum_{i=1}^{n} y_i e_i$$

d'où $\forall i,\ x_i = y_i = \sum_j p&#95;{ij} x'&#95;j$ : $X = PX'$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Une matrice de passage est toujours **inversible**, et si $P$ est la matrice de passage de $\mathcal{e}$ à $\mathcal{e}'$, alors $P^{-1}$ est la matrice de passage de $\mathcal{e}'$ à $\mathcal{e}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $Q$ la matrice de passage de $\mathcal{e}'$ à $\mathcal{e}$ (pour montrer que $P$ est inversible, il suffit de trouver $Q$ telle que $PQ = I$). Pour tout $j$ : $e_j = \sum_i q&#95;{ij} e'&#95;i$ et $e'&#95;j = \sum_i p&#95;{ij} e_i$, donc

$$e_j = \sum_i q_{ij} \sum_k p_{ki} e_k = \sum_k \Big(\sum_i p_{ki} q_{ij}\Big) e_k$$

d'où, pour $k = j$ : $\sum_i p&#95;{ji} q&#95;{ij} = 1$, et pour $k \neq j$ : $\sum_i p&#95;{ki} q&#95;{ij} = 0$ ; ainsi $\sum_k p&#95;{ik} q&#95;{kj} = \delta&#95;{ij}$, c'est-à-dire $PQ = I_n$ : $Q = P^{-1}$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Application</span>

Si $A$ est inversible, soit $u$ de matrice $A$ ($u \in \mathcal{L}(\mathbb{K}^n)$) relativement à la base canonique $\mathcal{e}$ ; $u$ est un automorphisme, $\mathcal{e}' = u(\mathcal{e})$ est une base et $A$ est la matrice de passage de $\mathcal{e}$ à $\mathcal{e}'$. $A^{-1}$ est la matrice de passage de $\mathcal{e}'$ à $\mathcal{e}$ (pour trouver $A^{-1}$, on cherche à exprimer les $e_i$ en fonction des $e'&#95;j$).

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple (application)</span>

Soit $A$ une matrice carrée dont on vérifie que les colonnes $c_1, \dots, c_n$ forment une base de $\mathbb{K}^n$ : $A$ est inversible. En exprimant les vecteurs $e_i$ de la base canonique en fonction des $c_j$ par combinaisons linéaires successives ($e_n = c_n - c&#95;{n-1}$, $e&#95;{n-1} = c&#95;{n-1} - c&#95;{n-2}$, \dots, $e_1 = c_1 - e_2 - \dots - e_n$), on obtient la matrice $A^{-1}$, matrice de passage de $\mathcal{e}'$ à $\mathcal{e}$.

</div>

### 3) Application aux applications linéaires

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Soit $u \in \mathcal{L}(E,F)$, $\mathcal{e}$ base de $E$, $\mathcal{f}$ base de $F$, $A = \mathrm{Mat}&#95;{\mathcal{e},\mathcal{f}}(u)$. Si $\mathcal{e}'$ (resp. $\mathcal{f}'$) est une autre base de $E$ (resp. $F$), alors

$$A' = \mathrm{Mat}_{\mathcal{e}',\mathcal{f}'}(u) = Q^{-1} A P$$

où $P$ est la matrice de passage de $\mathcal{e}$ à $\mathcal{e}'$ et $Q$ celle de $\mathcal{f}$ à $\mathcal{f}'$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $x \in E$ de matrice colonne $X$ relativement à $\mathcal{e}$, et $y = u(x)$ de matrice colonne $Y$ relativement à $\mathcal{f}$ ; $Y = AX$ ; $X = PX'$ ; $Y' = A'X'$ ; $Y = QY'$. Donc

$$AX = APX' = QY' = QA'X'$$

d'où $Q^{-1}APX' = A'X'$ pour tout $X' \in \mathcal{M}&#95;{p,1}(\mathbb{K})$. Comme (si $A, B \in \mathcal{M}&#95;{n,p}(\mathbb{K})$ et $\forall X \in \mathcal{M}&#95;{p,1}(\mathbb{K}),\ AX = BX$, alors $A = B$), on conclut $Q^{-1}AP = A'$.

</div>

### 4) Trace d'un endomorphisme

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $u \in \mathcal{L}(E)$ a pour matrices $A$ et $A'$ relativement à deux bases $\mathcal{e}$ et $\mathcal{e}'$, alors $\mathrm{Tr}(A) = \mathrm{Tr}(A')$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $P$ la matrice de passage de $\mathcal{e}$ à $\mathcal{e}'$ ; $A' = P^{-1}AP$ ; alors

$$\mathrm{Tr}(A') = \mathrm{Tr}(P^{-1}AP) = \mathrm{Tr}(APP^{-1}) = \mathrm{Tr}(A\, I_n) = \mathrm{Tr}(A)$$

(car $\mathrm{Tr}(AB) = \mathrm{Tr}(BA)$).

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle $\mathrm{Tr}(u)$ (avec $u \in \mathcal{L}(E)$) la trace de n'importe quelle matrice de $u$ ; la trace d'une matrice de $u$ est indépendante du choix de la base.

</div>

### 5) Rang d'une matrice

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $\mathcal{F}$ et $\mathcal{F}'$ sont deux familles de vecteurs de $E$ ayant même matrice (relativement à une base $\mathcal{e}$ et $\mathcal{e}'$ respectivement), alors elles ont même rang.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $A = \mathrm{Mat}&#95;{\mathcal{e}}(\mathcal{F}) = \mathrm{Mat}&#95;{\mathcal{e}'}(\mathcal{F}')$ ; $\mathcal{F} = (v_1, \dots, v_p)$, $\mathcal{F}' = (w_1, \dots, w_p)$ avec $v_j = \sum_i a&#95;{ij} e_i$ et $w_j = \sum_i a&#95;{ij} e'&#95;i$. Soit $u \in \mathcal{L}(E)$ un isomorphisme tel que $u(e_i) = e'&#95;i$ ; alors

$$u(v_j) = \sum_i a_{ij}\, u(e_i) = \sum_i a_{ij} e'_i = w_j$$

donc $u(\mathrm{Vect}&#92;&#44;\mathcal{F}) = \mathrm{Vect}&#92;&#44; u(\mathcal{F}) = \mathrm{Vect}&#92;&#44;\mathcal{F}'$ : $\mathrm{Vect}&#92;&#44;\mathcal{F}$ et $\mathrm{Vect}&#92;&#44;\mathcal{F}'$ sont isomorphes, d'où $\mathrm{rg}&#92;&#44;\mathcal{F} = \mathrm{rg}&#92;&#44;\mathcal{F}'$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $A \in \mathcal{M}&#95;{n,p}(\mathbb{K})$ ; on appelle **rang de $A$** (noté $\mathrm{rg}(A)$) le rang de n'importe quelle famille de vecteurs de $A$ (par exemple la famille des vecteurs colonnes de $A$, vus comme vecteurs de $\mathbb{K}^n$ muni de la base canonique).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Le rang d'une application linéaire $u \in \mathcal{L}(E,F)$ est égal au rang de n'importe quelle matrice de $u$, quelle que soit la base choisie.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $A$ une matrice de $u$ relativement à une base $(\mathcal{e}, \mathcal{f})$ ; $\mathrm{rg}(A) = \mathrm{rg}(v_1, \dots, v_p)$ où $(v_1, \dots, v_p)$ engendre $\mathrm{Im}&#92;&#44; u$ ; donc $\mathrm{rg}(A) = \dim \mathrm{Vect}&#92;&#44; \mathrm{Im}&#92;&#44; u = \mathrm{rg}(u)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$A \in \mathcal{M}&#95;n(\mathbb{K})$ est inversible **si et seulement si** $\mathrm{rg}(A) = n$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

On considère $A$ comme la matrice d'un endomorphisme $u$ de $E$ (par exemple $\mathbb{K}^n$) relativement à une base $\mathcal{e}$ (par exemple la base canonique). Alors $A$ inversible $\Leftrightarrow$ $u$ est un isomorphisme $\Leftrightarrow$ $\mathrm{rg}(u) = n \Leftrightarrow \mathrm{rg}(A) = n$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$A = \begin{pmatrix} 1 & 1 & 1 \\ 2 & 2 & 4 \\ 3 & 4 & 6 \end{pmatrix}$$

deux des vecteurs colonnes sont colinéaires, donc $\dim \mathrm{Vect}(v_1, v_2, v_3) \leq 2$ et $A$ n'est pas inversible.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Une matrice triangulaire est inversible si et seulement si tous ses coefficients diagonaux sont non nuls.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $T = (t&#95;{ij})$ triangulaire (à droite). Considérons $T$ comme la matrice de $(v_1, \dots, v_n)$ relativement à $\mathcal{e}$ : $v_1 = t&#95;{11} e_1$ ; $v_2 = t&#95;{12} e_1 + t&#95;{22} e_2$ ; \dots ; $v_k = t&#95;{1k} e_1 + \dots + t&#95;{kk} e_k$. Ainsi $\mathrm{Vect}(v_1, \dots, v_k) = \mathrm{Vect}(e_1, \dots, e_k)$ dès que $t&#95;{11}, \dots, t&#95;{kk}$ sont non nuls. Si tous les $t&#95;{ii} \neq 0$ : $\mathrm{rg}(T) = n$, $T$ est inversible.

Réciproquement, écrivons $\sum&#95;{i=1}^{n} \lambda_i v_i = 0$ :

$$\begin{cases}
\lambda_1 t_{11} = 0 \\
\lambda_1 t_{12} + \lambda_2 t_{22} = 0 \\
\vdots \\
\lambda_1 t_{1n} + \lambda_2 t_{2n} + \dots + \lambda_n t_{nn} = 0
\end{cases}$$

De proche en proche (comme $t&#95;{ii} \neq 0$ pour tout $i$), on obtient $\lambda_n = 0$, puis $\lambda&#95;{n-1} = 0$, \dots, $\lambda_1 = 0$ : $(v_1, \dots, v_n)$ est libre, c'est une base de $E$, donc $\mathrm{rg} = n$.

</div>

## VI. Opérations sur les lignes et les colonnes d'une matrice

### 1) Définitions

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle **opération élémentaire** sur les lignes d'une matrice $A$ (resp. sur les colonnes) les opérations suivantes :

- échanger deux lignes (resp. deux colonnes) ;
- ajouter à une ligne $L_i$ la ligne $L_j$ multipliée par un scalaire $\alpha \in \mathbb{K}$ : $L_i \leftarrow L_i + \alpha L_j$ (resp. $C_i \leftarrow C_i + \alpha C_j$) ;
- multiplier une ligne $L_i$ par un scalaire **non nul** (resp. une colonne).

</div>

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Les opérations élémentaires **conservent le rang**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $A \in \mathcal{M}&#95;{n,p}(\mathbb{K})$, considérée comme la matrice de $(v_1, \dots, v_p)$ relativement à une base $\mathcal{e} = (e_1, \dots, e_n)$ de $E$.

- **Échange de $L_i$ et $L_j$** : soit $\mathcal{e}'$ la base obtenue en échangeant $e_i$ et $e_j$ ; en écrivant les coordonnées dans la base $\mathcal{e}'$, on obtient la matrice $A'$ obtenue à partir de $A$ en échangeant $L_i$ et $L_j$ ; comme $\mathrm{Vect}(\mathcal{e}') = E$, on a $\mathrm{rg}(A') = \mathrm{rg}(A)$.
- **$L_i \leftarrow L_i + \alpha L_j$** : $\mathcal{e}'' = (e_1, \dots, e&#95;{i-1}, e_i + \alpha e_j, e&#95;{i+1}, \dots, e_n)$ est encore une base de $E$ ; les coordonnées des $v_k$ dans $\mathcal{e}''$ donnent la matrice $A''$ obtenue à partir de $A$ en remplaçant $L_i$ par $L_i + \alpha L_j$ ; donc $\mathrm{rg}(A'') = \mathrm{rg}(A)$.
- **$L_i \leftarrow \alpha L_i$** ($\alpha \neq 0$) : $\mathcal{e}''' = (e_1, \dots, \alpha e_i, \dots, e_n)$ est une base ; la matrice $A'''$ obtenue en remplaçant $L_i$ par $\alpha L_i$ vérifie $\mathrm{rg}(A''') = \mathrm{rg}(A)$.

Pour les **colonnes** : soit $B'$ la matrice obtenue à partir de $A$ en échangeant $C_i$ et $C_j$ ; c'est la matrice des vecteurs $(v_1, \dots, v_j, \dots, v_i, \dots, v_p)$, qui engendrent le même sous-espace, donc $\mathrm{rg}(B') = \mathrm{rg}(A)$ ; de même $B''$ obtenue par $C_i \leftarrow C_i + \alpha C_j$ est la matrice de $(v_1, \dots, v_i + \alpha v_j, \dots, v_p)$ et $B'''$ obtenue par $C_i \leftarrow \alpha C_j$ ($\alpha \neq 0$) est celle de $(v_1, \dots, \alpha v_i, \dots, v_p)$ : même $\mathrm{Vect}$, donc même rang.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $A \in \mathcal{M}&#95;{n,p}(\mathbb{K})$, alors $\mathrm{rg}(A) \leq \min(n, p)$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples de calculs de rang</span>

$$A = \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

(en notant $v_1, v_2, v_3, v_4$ les colonnes) : $v_4 = v_1 + v_2 + v_3$, donc $\mathrm{rg}(A) \leq 3$ ; $(v_1, v_2, v_3)$ est libre, donc $\mathrm{rg}(A) = 3$.

$$A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix} : \quad \mathrm{rg}(A) = 1$$

Autre exemple : $c_1 = e_1$, $c_2 = e_1 + 2e_2$, $c_3 = e_1 + 3e_2 + 4e_3$ ont pour matrice

$$\begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 3 \\ 0 & 0 & 4 \end{pmatrix}$$

triangulaire et inversible, donc $\mathrm{rg}(c_1, c_2, c_3) = 3 = n$ : $(c_1, c_2, c_3)$ est une base.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Soit $\mathcal{F}$ une famille de $p$ vecteurs de $E$ ($\dim E = n$), $A = \mathrm{Mat}&#95;{\mathcal{e}}(\mathcal{F})$. Alors

$$\mathcal{F} \text{ est libre} \iff \mathrm{rg}(A) = p \iff \text{il existe une sous-matrice carrée inversible d'ordre } p \text{ de } A$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**Sens direct.** Soit $A'$ une sous-matrice carrée d'ordre $p$ de $A$ ; en échangeant des lignes, on se ramène à une matrice $B$ dont les $p$ premières lignes forment $A'$ (les opérations élémentaires conservent le rang) : $\mathrm{rg}(B) = \mathrm{rg}(A)$ et $\mathrm{rg}(B) = \mathrm{rg}(A')$. Si $A'$ est inversible, $\mathrm{rg}(A) = p$. Soit $(v_1, \dots, v_p)$ la famille ; si $x = \sum&#95;{j=1}^{p} \lambda_j v_j = 0$, alors $x = \sum_j \lambda_j \big(\sum_i b&#95;{ij} e_i\big) = \sum_i \big(\sum_j \lambda_j b&#95;{ij}\big) e_i$, donc $\forall i \leq p,\ \sum_j \lambda_j b&#95;{ij} = 0$ ; comme $A'$ est inversible (famille libre), $\forall j \leq p,\ \lambda_j = 0$ : $(v_1, \dots, v_p)$ est libre et $\mathrm{rg}(A) = p$.

**Réciproque.** On suppose $\mathcal{F}$ libre ; donc $p \leq n$. Complétons $\mathcal{F}$ en une base de $E$ en ajoutant $n - p$ vecteurs : $\mathcal{b} = (v_1, \dots, v_p, e'&#95;{p+1}, \dots, e'&#95;n)$ est une base de $E$. Soit $B = \mathrm{Mat}&#95;{\mathcal{e}'}(\mathcal{b})$ ; $B$ s'obtient à partir de $A$ par échanges de lignes et s'écrit par blocs $\begin{pmatrix} A'' & 0 \\ &#42; & I&#95;{n-p} \end{pmatrix}$, puis, par opérations sur les lignes, $\begin{pmatrix} A'' & 0 \\ 0 & I&#95;{n-p} \end{pmatrix}$. Comme $\mathcal{b}$ est une base, $\mathrm{rg}(B) = n$, donc $\mathrm{rg}(A'') = p$ : les vecteurs colonnes de $A''$ forment une famille libre de $\mathrm{Vect}(e'&#95;1, \dots, e'&#95;p)$, qui est de dimension $p$ ; $A''$ est inversible (matrice d'une base) et c'est une sous-matrice carrée inversible d'ordre $p$ de $A$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Le rang d'une matrice $A$ est égal à l'**ordre maximum de ses sous-matrices carrées inversibles**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $J = &#92;&#123; k \mid \exists$ une sous-matrice carrée d'ordre $k$ de $A$ inversible $&#92;&#125;$. Si $A = 0$ : $\mathrm{rg}(A) = 0$ et il n'existe pas de sous-matrice inversible. Si $A \neq 0$ : $J$ est non vide (si $a&#95;{ij} \neq 0$, alors $[a&#95;{ij}]$ est inversible d'ordre $1$) et $J$ est majoré par $\min(n, p)$. Soit $r = \max J$, et soit $A'$ une sous-matrice carrée d'ordre $r$ inversible, fondée sur les vecteurs colonnes $(v_1, \dots, v_r)$ ; $(v_1, \dots, v_r)$ est libre (proposition précédente). Soit $\mathcal{F}$ la famille de tous les vecteurs colonnes de $A$. Si l'on pouvait adjoindre un $(r+1)$-ième vecteur $v$ de $\mathcal{F}$, la famille $(v_1, \dots, v_r, v)$ ne serait pas libre, sinon $A$ admettrait une sous-matrice carrée inversible d'ordre $r+1$ (impossible) ; d'après la proposition précédente, $v \in \mathrm{Vect}(v_1, \dots, v_r)$ ; donc $(v_1, \dots, v_r)$ est génératrice de $\mathrm{Vect}&#92;&#44;\mathcal{F}$ ; ainsi $\mathrm{rg}&#92;&#44;\mathcal{F} = r$.

</div>

### 3) Pivot de Gauss

Soit $A = (a&#95;{ij}) \in \mathcal{M}&#95;{n,p}(\mathbb{K})$, $A \neq 0$. Par échange de lignes et de colonnes, on se ramène à $a&#95;{11} \neq 0$ (les opérations ne changent pas le rang). On fait $L_i \leftarrow L_i - \dfrac{a&#95;{i1}}{a&#95;{11}} L_1$ pour $i \geq 2$ :

$$B = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1p} \\ 0 & b_{22} & \cdots & b_{2p} \\ \vdots & \vdots & & \vdots \\ 0 & b_{n2} & \cdots & b_{np} \end{pmatrix}$$

Si $b&#95;{ij} = 0$ pour $i \geq 2$ et $j \geq 2$ : $\mathrm{rg}(B) = \mathrm{rg}(A) = 1$. Sinon, on se ramène à $b&#95;{22} \neq 0$ ; on fait $L_i \leftarrow L_i - \dfrac{b&#95;{i2}}{b&#95;{22}} L_2$ pour $i \geq 3$ ; etc. Au bout de $r$ étapes, on arrive à une matrice $U$ de la forme

$$U = \begin{pmatrix}
a_{11} & \cdots & a_{1p} \\
0 & b_{22} & \cdots \\
\vdots & & \ddots & \ddots \\
0 & \cdots & 0 & u_{rr} & \cdots & u_{rp} \\
0 & \cdots & 0 & 0 & \cdots & 0
\end{pmatrix}, \qquad (a_{11}, b_{22}, \dots, u_{rr}) \in (\mathbb{K}^*)^r$$

Dans les deux derniers cas, c'est une matrice triangulaire d'ordre $r$ avec des coefficients diagonaux non nuls, donc inversible ; donc $r$ est l'ordre maximum des sous-matrices inversibles de $A$ ; donc $\mathrm{rg}(A) = r$. Dans le premier cas, $(v_1, \dots, v_r)$ est libre (proposition 2) et les $v_i$ sont des vecteurs de $\mathrm{Vect}(e_1, \dots, e_n)$, donc $\mathrm{rg}(v_1, \dots, v_p) \leq r$ ; d'où $\mathrm{rg}(A) = \mathrm{rg}(v_1, \dots, v_p) = r$.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$A = \begin{pmatrix} 3 & -2 & 1 \\ 3 & 2 & -1 \\ 4 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}, \qquad
A' = \begin{pmatrix} 1 & -2 & 1 \\ 0 & 8 & -2 \\ 0 & 9 & -3 \\ 0 & 2 & 0 \end{pmatrix}, \qquad
A'' = \begin{pmatrix} 1 & -2 & 1 \\ 0 & 8 & -2 \\ 0 & 0 & -3/4 \\ 0 & 0 & 1/2 \end{pmatrix}$$

$$\mathrm{rg}(A) = \mathrm{rg}(A') = 3$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$\mathrm{rg}(A) = \mathrm{rg}({}^t A)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

On applique Gauss à $A$ : à chaque fois qu'on effectue une opération sur les lignes de $A$ (resp. sur les colonnes), on effectue la même opération sur les colonnes (resp. sur les lignes) de ${}^t A$. À l'étape $r$, on obtient $U$ et ${}^t U_r$, avec $\mathrm{rg}({}^t U_r) = r = \mathrm{rg}(U_r)$. Comme $\mathrm{rg}(U_r) = \mathrm{rg}(A)$ (Gauss) et $\mathrm{rg}({}^t U_r) = \mathrm{rg}({}^t A)$, on conclut $\mathrm{rg}({}^t A) = \mathrm{rg}(A)$.

</div>

## VII. Matrices équivalentes et semblables

### 1) Matrices équivalentes

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $A \in \mathcal{M}&#95;{n,p}(\mathbb{K})$ est **équivalente** à $B$ s'il existe $Q \in \mathrm{GL}&#95;n(\mathbb{K})$ et $P \in \mathrm{GL}&#95;p(\mathbb{K})$ telles que

$$A = QBP$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

C'est une **relation d'équivalence** sur $\mathcal{M}&#95;{n,p}(\mathbb{K})$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$A \sim A$ : $A = I_n A I_p$ ; si $A = QBP$ alors $B = Q^{-1} A P^{-1}$ ($B \sim A$) ; si $A = QBP$ et $B = Q' C P'$ alors $A = (QQ')&#92;&#44; C&#92;&#44; (P'P)$ (transitivité).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$A$ et $B$ sont équivalentes **si et seulement si** elles représentent la même application linéaire relativement à 2 bases différentes.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $E$ de dimension $p$, $F$ de dimension $n$, $u \in \mathcal{L}(E,F)$ de matrice $A$ relativement à un couple de bases $(\mathcal{e}, \mathcal{f})$ ; si $\mathcal{e}'$, $\mathcal{f}'$ sont d'autres bases, $A' = \mathrm{Mat}&#95;{\mathcal{e}',\mathcal{f}'}(u) = Q^{-1} A P$ où $P$ est la matrice de passage de $\mathcal{e}$ à $\mathcal{e}'$ et $Q$ celle de $\mathcal{f}$ à $\mathcal{f}'$ : $A \sim A'$.

Réciproquement, si $A$ et $A'$ sont équivalentes : $A' = QAP$ ; soit $u \in \mathcal{L}(E,F)$ de matrice $A$ relativement à $(\mathcal{e}, \mathcal{f})$ ; soient $\mathcal{e}'$ la base de $E$ formée des vecteurs colonnes de $P$ ($P$ inversible : matrice de passage de $\mathcal{e}$ à $\mathcal{e}'$) et $\mathcal{f}'$ la base de $F$ formée des vecteurs colonnes de $Q^{-1}$ ; alors $\mathrm{Mat}&#95;{\mathcal{e}',\mathcal{f}'}(u) = A'$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Toute matrice de rang $r$ est équivalente à

$$J_r = \begin{pmatrix} I_r & 0 \\ 0 & 0 \end{pmatrix}$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $u$ l'application linéaire de matrice $A$ relativement à un couple de bases $(\mathcal{e}, \mathcal{f})$ (par exemple $E = \mathbb{K}^p$ et la base canonique). Soit $(\mathcal{e}'&#95;1, \dots, \mathcal{e}'&#95;p)$ une base de $E$ telle que $u(\mathcal{e}'&#95;i) = 0$ pour $i > r$ ; alors $u(\mathcal{e}'&#95;1), \dots, u(\mathcal{e}'&#95;p)$ engendre $\mathrm{Im}&#92;&#44; u$, et comme $\dim \mathrm{Im}&#92;&#44; u = r$, $(u(\mathcal{e}'&#95;1), \dots, u(\mathcal{e}'&#95;r))$ est une base de $\mathrm{Im}&#92;&#44; u$. Complétons en une base de $F$ : $\mathcal{f}' = (u(\mathcal{e}'&#95;1), \dots, u(\mathcal{e}'&#95;r), f'&#95;{r+1}, \dots, f'&#95;n)$. Dans les bases $\mathcal{e}'$ et $\mathcal{f}'$, la matrice de $u$ est

$$\mathrm{Mat}_{\mathcal{e}',\mathcal{f}'}(u) = \begin{pmatrix} I_r & 0 \\ 0 & 0 \end{pmatrix} = J_r$$

(car $u(\mathcal{e}'&#95;i) = f'&#95;i$ pour $i \leq r$ et $u(\mathcal{e}'&#95;i) = 0$ pour $i > r$). Ainsi $A$ et $J_r$ représentent la même application linéaire, donc $A \sim J_r$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Deux matrices sont équivalentes **si et seulement si** elles ont même rang.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\Rightarrow$ Si $A \sim B$ : $A = QBP$ avec $Q \in \mathrm{GL}&#95;n(\mathbb{K})$, $P \in \mathrm{GL}&#95;p(\mathbb{K})$ inversibles. Soient $u$, $v$ de matrices $A$, $B$ ; alors $\mathrm{Im}&#92;&#44; u = Q(\mathrm{Im}&#92;&#44; v)$ et $Q$ est un isomorphisme, donc $\dim \mathrm{Im}&#92;&#44; u = \dim \mathrm{Im}&#92;&#44; v = r$, d'où $\mathrm{rg}(A) = \mathrm{rg}(u) = \mathrm{rg}(v) = \mathrm{rg}(B)$.

$\Leftarrow$ Si $\mathrm{rg}(A) = \mathrm{rg}(B) = r$, on a $A \sim J_r$ et $B \sim J_r$, donc $A \sim B$.

</div>

### 2) Matrices semblables

#### a) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soient $A, B \in \mathcal{M}&#95;n(\mathbb{K})$ ; on dit que $A$ est **semblable** à $B$ s'il existe $P \in \mathrm{GL}&#95;n(\mathbb{K})$ telle que

$$A = P^{-1} B P$$

</div>

#### b) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

C'est une **relation d'équivalence**.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$A$ et $B$ sont semblables **si et seulement si** elles représentent le même endomorphisme relativement à 2 bases différentes ($A = \mathrm{Mat}&#95;{\mathcal{e}}(u)$, $B = \mathrm{Mat}&#95;{\mathcal{e}'}(u)$).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Deux matrices semblables ont **même rang**.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Attention</span>

La réciproque est fausse.

</div>

### 3) Matrices diagonalisables

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $A \in \mathcal{M}&#95;n(\mathbb{K})$ est **diagonalisable** si elle est semblable à une matrice diagonale — c'est le cas où, si $A = \mathrm{Mat}&#95;{\mathcal{e}}(u)$, il existe une base $\mathcal{e}'$ telle que $\mathrm{Mat}&#95;{\mathcal{e}'}(u) = D$, avec $D$ matrice diagonale.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $u \in \mathcal{L}(E)$ est **diagonalisable** s'il existe une base de vecteurs propres de $u$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$u$ est diagonalisable si et seulement si sa matrice relativement à une base $\mathcal{e}$ donnée est diagonalisable.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $A \in \mathcal{M}&#95;n(\mathbb{K})$. On dit que $\lambda$ est **valeur propre** de $A$ s'il existe $X \in \mathcal{M}&#95;{n,1}(\mathbb{K})$, $X \neq 0$, tel que

$$AX = \lambda X$$

$X$ est appelé **vecteur propre** de $A$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $A$ est considérée comme $\mathrm{Mat}&#95;{\mathcal{e}}(u)$ avec $u \in \mathcal{L}(E)$ : si $\lambda$ est valeur propre de $A$ et $X = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}$, alors $X$ est vecteur propre de $A$ si et seulement si $x = \sum&#95;{i=1}^{n} x_i e_i$ est vecteur propre de $u$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Diagonaliser (c'est-à-dire trouver une base de vecteurs propres) de

$$A = \begin{pmatrix} -2 & 0 & 0 \\ 5 & 4 & 3 \\ 0 & 0 & -2 \end{pmatrix}$$

Pour $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ :

$$AX = \begin{pmatrix} -2 & 0 & 0 \\ 5 & 4 & 3 \\ 0 & 0 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} -2x \\ 5x + 4y + 3z \\ -2z \end{pmatrix}$$

</div>

### 4) Diagonalisation d'un endomorphisme

Soit $E$ un $\mathbb{K}$-espace vectoriel de dimension finie et $u \in \mathcal{L}(E)$. Pour une valeur propre $\lambda$ de $u$, on note $E&#95;\lambda = \ker(u - \lambda&#92;&#44;\mathrm{Id})$ le **sous-espace propre** associé.

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — matrice diagonalisable</span>

Soit $u$ un endomorphisme de $\mathbb{R}^3$, de matrice $A$ dans la base canonique. La recherche des vecteurs propres donne deux valeurs propres : $\lambda = -2$, avec $\dim E&#95;{-2} = 2$, et $\lambda = 4$, avec $\dim E_4 = 1$ (et $A u_3 = 4&#92;&#44;u_3$ pour $u_3 \in E_4$).

Des vecteurs propres $u_1, u_2 \in E&#95;{-2}$ et $u_3 \in E_4$ forment une base $(u_1, u_2, u_3)$ de $\mathbb{R}^3$. La matrice de $u$ dans cette base est

$$\mathrm{Mat}_{(u_1, u_2, u_3)}(u) = \begin{pmatrix} -2 & 0 & 0 \\ 0 & -2 & 0 \\ 0 & 0 & 4 \end{pmatrix} = D = P^{-1} A P$$

où $P$ est la **matrice de passage** de la base canonique à la base $(u_1, u_2, u_3)$ (les colonnes de $P$ sont les coordonnées des $u_i$ dans la base canonique). On a donc $A = P D P^{-1}$, d'où

$$A^2 = (P D P^{-1})(P D P^{-1}) = P D^2 P^{-1}$$

et, par récurrence, pour tout $n \in \mathbb{N}$ :

$$A^n = P D^n P^{-1}$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1 — les sous-espaces propres sont en somme directe</span>

Soit $u \in \mathcal{L}(E)$ et $\lambda_1, \dots, \lambda_p$ des valeurs propres deux à deux distinctes de $u$. Alors la somme des sous-espaces propres est **directe** :

$$E_{\lambda_1} \oplus E_{\lambda_2} \oplus \dots \oplus E_{\lambda_p} \subset E$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Montrons par récurrence sur $k$ que $E&#95;{\lambda_1} + \dots + E&#95;{\lambda_k}$ est une somme directe.

- Si $x \in E&#95;{\lambda_i} \cap E&#95;{\lambda_j}$ avec $i \neq j$ : $u(x) = \lambda_i x = \lambda_j x$, donc $(\lambda_i - \lambda_j)&#92;&#44;x = 0$ ; comme $\lambda_i \neq \lambda_j$, on a $x = 0$. Ainsi $E&#95;{\lambda_i} \cap E&#95;{\lambda_j} = &#92;&#123;0&#92;&#125;$.
- **Hérédité** : supposons $E&#95;{\lambda_1} \oplus \dots \oplus E&#95;{\lambda_k}$ somme directe, et soit
$$x \in E_{\lambda_{k+1}} \cap \big(E_{\lambda_1} \oplus \dots \oplus E_{\lambda_k}\big)$$
Écrivons $x = x_1 + \dots + x_k$ avec $x_i \in E&#95;{\lambda_i}$. Alors
$$u(x) = \lambda_{k+1}\, x = \lambda_{k+1} x_1 + \dots + \lambda_{k+1} x_k$$
mais aussi $u(x) = \lambda_1 x_1 + \dots + \lambda_k x_k$. Par différence :
$$(\lambda_1 - \lambda_{k+1})\,x_1 + \dots + (\lambda_k - \lambda_{k+1})\,x_k = 0$$
Par hypothèse de récurrence (somme directe), chaque terme de cette somme est nul : $(\lambda_i - \lambda&#95;{k+1})&#92;&#44;x_i = 0$, et comme $\lambda_i \neq \lambda&#95;{k+1}$, on obtient $x_i = 0$ pour tout $i$, donc $x = 0$.

Conclusion : $E&#95;{\lambda_1}, \dots, E&#95;{\lambda_p}$ sont en somme directe.

</div>

## VIII. Exercices — feuille n° 19

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 19 — Matrices (énoncés)</span>

**Écriture matricielle**

<ol class="enonces">
<li>Déterminer si les applications suivantes sont des applications linéaires et, si oui, écrire leur matrice dans les bases canoniques :
<ol>
<li>$\mathbb{R}^3 \to \mathbb{R}^3$, $(x, y, z) \mapsto (x+y,\ y,\ x+1)$ ;</li>
<li>$\mathbb{R}^3 \to \mathbb{R}^3$, $(x, y, z) \mapsto (x+y,\ y,\ x+z)$ ;</li>
<li>$\mathbb{R}^3 \to \mathbb{R}$, $(x, y, z) \mapsto x - 2y + z$ ;</li>
<li>$\mathbb{R}&#95;n[X] \to \mathbb{R}&#95;n[X]$, $P \mapsto P'$.</li>
</ol>
</li>
<li>
<ol>
<li>Montrer que $B = (1,\ X-1,\ (X+1)^2)$ est une base de $E = \mathbb{R}&#95;2[X]$.</li>
<li>Montrer que l'application $f$ ci-dessous est un endomorphisme de $E$ et déterminer la matrice de $f$ relativement à $B$ :
$$f : E \to E, \qquad P \mapsto 2(X+1)P - (X^2 - 2X + 1)P'$$</li>
</ol>
</li>
<li>
<ol>
<li>Montrer que l'application $f$ suivante est une application linéaire :
$$f : \mathbb{R}_3[X] \to \mathbb{R}_1[X], \qquad P \mapsto P'(X+1) - P'(X-1)$$</li>
<li>Montrer que $B = (X^3,\ X^2(X-1),\ X(X-1)^2,\ (X-1)^3)$ est une base de $\mathbb{R}&#95;3[X]$ et $C = (X,\ X-1)$ une base de $\mathbb{R}&#95;1[X]$, et déterminer la matrice de $f$ relativement à $B$ et $C$.</li>
<li>Déterminer $f(P)$ pour $P = X^3 + 2X^2(X-1) - X(X-1)^2 + (X-1)^3$.</li>
</ol>
</li>
</ol>

**Calcul matriciel**

<ol class="enonces" start="4">
<li>Déterminer l'ensemble des matrices $A$ de $\mathcal{M}&#95;2(\mathbb{R})$ vérifiant $A^2 = A$.</li>
<li>Soit une matrice $A$ de $\mathcal{M}&#95;2(\mathbb{R})$. Soit $F = &#92;&#123;M \in \mathcal{M}&#95;2(\mathbb{R}) \mid AM = MA&#92;&#125;$.
<ol>
<li>Montrer que $F$ est un sous-espace vectoriel de $\mathcal{M}&#95;2(\mathbb{R})$.</li>
<li>Montrer que si $A \neq \lambda I$ ($I$ matrice identité), $(I, A)$ est une base de $F$.</li>
</ol>
</li>
</ol>

<ol class="enonces" start="7">
<li>Calculer, pour $x$ réel donné, les puissances $A^n$ de la matrice
$$A = \begin{pmatrix} \operatorname{ch} x & \operatorname{sh} x \\ \operatorname{sh} x & \operatorname{ch} x \end{pmatrix}$$</li>
<li>Calculer les puissances des matrices suivantes :
<ol>
<li>$A = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ ;</li>
<li>$B = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ ;</li>
<li>$(aI + bB)^n$ pour $a, b \in \mathbb{C}$.</li>
</ol>
</li>
</ol>

**Matrices inversibles**

<ol class="enonces" start="9">
<li>Soit $n \geq 2$ et $\omega = e^{2i\pi/n}$. Soit $A$ la matrice de terme général $a&#95;{ij} = \omega^{&#124;i-j&#124;}$ et $\overline{A}$ la matrice de terme général $\overline{a&#95;{ij}}$. Calculer $A^2$, $\overline{A}^2$, $A\overline{A}$, $\overline{A}A$, et $A^{-1}$ si $A$ est inversible.</li>
<li>Montrer que pour $(a, b, c) \in \mathbb{C}^3$, la matrice
$$M = \begin{pmatrix} 1 & 1 & 1 \\ a & b & c \\ a^2 & b^2 & c^2 \end{pmatrix}$$
est inversible si et seulement si $a, b, c$ sont deux à deux distincts, et calculer alors $M^{-1}$.</li>
</ol>

<ol class="enonces" start="11">
<li>Soit $M \in \mathcal{M}&#95;n(\mathbb{K})$ telle qu'il existe $p \in \mathbb{N}$ tel que $M^p = 0$. Montrer que $I - M$ est inversible.</li>
<li>Soit $n \geq 2$ et $E$ l'ensemble des matrices de $\mathcal{M}&#95;n(\mathbb{R})$ de la forme
$$M(a, b) = \begin{pmatrix} a & b & \cdots & b \\ b & a & \ddots & b \\ \vdots & \ddots & \ddots & \vdots \\ b & \cdots & b & a \end{pmatrix}, \qquad (a, b) \in \mathbb{R}^2$$
<ol>
<li>Montrer que $E$ est un sous-espace vectoriel de $\mathcal{M}&#95;n(\mathbb{R})$ et trouver sa dimension.</li>
<li>Montrer que $E$ est un anneau. Est-il commutatif ? Est-ce un corps ?</li>
<li>Déterminer les éléments inversibles de $E$.</li>
</ol>
</li>
<li>Soit $A \in \mathcal{M}&#95;n(\mathbb{R})$ telle que $A^2 = A$.
<ol>
<li>Que dire de $A$ si $A$ est inversible ?</li>
<li>Montrer que $B = 2A - I$ est inversible.</li>
<li>Déterminer les scalaires $\lambda$ tels que $\lambda A - I$ soit inversible, et calculer $(\lambda A - I)^{-1}$.</li>
<li>En déduire les valeurs propres de $A$.</li>
</ol>
</li>
</ol>

**Changement de bases**

<ol class="enonces" start="14">
<li>Soit $E$ un $\mathbb{C}$-espace vectoriel de dimension 2 et $u$ un endomorphisme de $E$ de matrice dans une base $(e_1, e_2)$
$$M = \begin{pmatrix} it & 0 \\ 0 & -it \end{pmatrix} \qquad (t \in \mathbb{R})$$
Trouver la matrice de $u$ dans la base $\left(\dfrac{e_1 + e_2}{2},\ \dfrac{e_1 - e_2}{2i}\right)$.</li>
<li>Soit $(a, b, c) \in \mathbb{C}^3$ et $u \in \mathcal{L}(\mathbb{C}^3)$ de matrice dans la base canonique
$$M = \begin{pmatrix} a & b & c \\ b & c & a \\ c & a & b \end{pmatrix}$$
Déterminer la matrice de $u$ relativement à la base $(e_1 + e_2 + e_3,\ e_2,\ e_3)$.</li>
</ol>

**Opérations sur les lignes et les colonnes**

<ol class="enonces" start="16">
<li>Déterminer le rang des matrices suivantes :
$$A = \begin{pmatrix} 2 & -3 & -4 \\ 3 & 1 & 5 \\ -1 & 0 & -1 \\ 0 & 2 & 4 \end{pmatrix}, \qquad
B = \begin{pmatrix} 1 & 7 & 5 & 2 & -2 \\ 0 & 4 & 2 & 2 & 0 \\ 2 & -2 & 4 & 0 & 1 \\ 3 & -1 & 7 & 1 & 3 \end{pmatrix}, \qquad
C = \begin{pmatrix} 0 & -1 & 2 & -2 \\ -7 & -7 & 2 & -8 \\ 0 & 4 & -6 & 6 \\ 2 & 2 & 0 & -2 \end{pmatrix}$$</li>
</ol>

**Diagonalisation**

<ol class="enonces" start="17">
<li>Montrer que les matrices suivantes sont diagonalisables :
<ol>
<li>$A = \begin{pmatrix} -1 & 0 & 2 \\ 0 & 0 & 1 \\ 0 & -1 & 1 \end{pmatrix}$ dans $\mathcal{M}&#95;3(\mathbb{C})$ ;</li>
<li>$B = \begin{pmatrix} a & 0 & b \\ 0 & a+b & 0 \\ b & 0 & a \end{pmatrix}$ ;</li>
<li>en déduire l'expression des suites définies par la donnée de $u_0, v_0, w_0$ et les relations de récurrence :
$$\begin{cases} u_{n+1} = 2u_n + w_n \\ v_{n+1} = 3v_n \\ w_{n+1} = u_n + 2w_n \end{cases}$$</li>
</ol>
</li>
</ol>

**Matrices semblables — trace d'un endomorphisme**

<ol class="enonces" start="18">
<li>Trouver toutes les matrices $A, B \in \mathcal{M}&#95;n(\mathbb{R})$ qui vérifient $AB - BA = I$.</li>
<li>Soit $A$ et $B \in \mathcal{M}&#95;n(\mathbb{R})$ et $c \in \mathbb{R}$. Résoudre $cX + \operatorname{Tr}(X)&#92;&#44;A = B$.</li>
<li>Soit $p$ un projecteur d'un espace vectoriel de dimension $n$. Montrer que toute matrice de $p$ est semblable à une matrice de la forme
$$\begin{pmatrix} 1 & & & 0 \\ & \ddots & & \\ & & 1 & \\ 0 & & & 0 \end{pmatrix}$$
($r$ coefficients égaux à $1$ sur la diagonale, les autres nuls). En déduire $\operatorname{tr}(p) = \operatorname{rg}(p)$.</li>
<li>On cherche les matrices $A$ de $\mathcal{M}&#95;n(\mathbb{R})$ ($n \geq 1$) telles que $A^2 = -I$.
<ol>
<li>Montrer que si cette équation admet une solution, $n$ est pair.</li>
<li>On suppose $n = 2p$. Montrer que si $A$ est solution, $A$ est semblable à
$$B = \begin{pmatrix} 0 & -I_p \\ I_p & 0 \end{pmatrix}$$</li>
<li>Conclure.</li>
</ol>
</li>
</ol>

**Exercices supplémentaires**

<ol class="enonces" start="22">
<li>Dans $\mathcal{M}&#95;n(\mathbb{K})$, calculer $E&#95;{ij}E&#95;{kl}$ et en déduire que les seules matrices $A$ telles que
$$\forall M \in \mathcal{M}_n(\mathbb{K}), \quad AM = MA$$
sont de la forme $aI$ ($a \in \mathbb{K}$).</li>
<li>Soit $M = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$.
<ol>
<li>Trouver $P \in \mathbb{R}&#95;2[X]$ tel que $P(M) = 0$.</li>
<li>En déduire $M^n$ en fonction de $M$ et $I$ (utiliser la division euclidienne de $X^n$ par $P$).</li>
</ol>
</li>
<li>Soit $M = \begin{pmatrix} 3 & -4 & -2 \\ 4 & -7 & -4 \\ -5 & 10 & 6 \end{pmatrix}$. Montrer que $M$ est la matrice d'un projecteur dont on précisera l'image et la direction.</li>
<li>Soit $M = \dfrac{1}{2}\begin{pmatrix} -1 & 2 & 1 \\ -1 & 0 & 1 \\ 1 & 2 & -1 \end{pmatrix}$. Montrer que $M$ est la matrice d'une symétrie dont on précisera les sous-espaces associés.</li>
<li>Soit $A \in \mathcal{M}&#95;n(\mathbb{C})$ de terme général $a&#95;{ij}$. On suppose que, pour tout $i$ tel que $1 \leq i \leq n$,
$$|a_{ii}| > \sum_{\substack{1 \leq j \leq n \\ j \neq i}} |a_{ij}|$$
Montrer que $A$ est inversible.</li>
</ol>

</div>
