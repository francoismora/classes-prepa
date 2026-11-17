---
layout: chapitre
title: "Espaces vectoriels"
numero: 8
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Algèbre"
source: "Math/Math Sup/Algèbre/08 Espaces vectoriels"
pages: 84
---

## I. Généralités — structure d'espace vectoriel

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $(\mathbb{K}, +, \times)$ un corps. Soit $E$ un ensemble ; le triplet $(E, +, \cdot)$
est un **espace vectoriel sur $\mathbb{K}$** (ou **$\mathbb{K}$-espace vectoriel**) si :

- $(E, +)$ est un groupe commutatif ;
- $\cdot$ est une **loi de composition externe**
  $\mathbb{K} \times E \to E$, $(\lambda, x) \mapsto \lambda \cdot x$, vérifiant :
  - $1 \cdot x = x$ ($\forall x \in E$) ;
  - $\forall \lambda, \mu \in \mathbb{K}$, $(\lambda + \mu) \cdot x = \lambda \cdot x + \mu \cdot x$ ;
  - $\forall x, y \in E$, $\lambda \cdot (x + y) = \lambda \cdot x + \lambda \cdot y$ ;
  - $\forall \lambda, \mu \in \mathbb{K}$, $(\lambda \mu) \cdot x = \lambda \cdot (\mu \cdot x)$.

</div>

### 2) Vocabulaire

Les éléments de $E$ s'appellent des **vecteurs** ; les éléments de $\mathbb{K}$
s'appellent des **scalaires** (on les note avec des lettres grecques minuscules).

### 3) Définition d'une $\mathbb{K}$-algèbre

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $E$ un ensemble. On dit que $(E, +, \times, \cdot)$ est une **$\mathbb{K}$-algèbre** si :

- $(E, +)$ est un e.v. (commutatif) ;
- $(E, +, \times)$ est un anneau (commutatif) ;
- $\forall \lambda \in \mathbb{K}$, $\forall x, y \in E$ :
  $\lambda \cdot (x \times y) = (\lambda \cdot x) \times y = x \times (\lambda y)$.

</div>

### 4) Exemples

- $\mathbb{K}$ est toujours un $\mathbb{K}$-e.v. en prenant pour $\cdot$ la loi $\times$ du corps ;
- $\mathbb{C}$ est un $\mathbb{R}$-e.v., une $\mathbb{R}$-algèbre commutative :
  $\lambda(a + ib) = \lambda a + i\,\lambda b$ ;
- $\mathbb{K}[X]$ est une algèbre commutative :
  $(\mathbb{K}[X], +, \times)$ est un anneau commutatif, et en définissant
  $\lambda \cdot P = (\lambda a_n)_{n \in \mathbb{N}}$ si $P = (a_n)_{n \in \mathbb{N}}$, on a
  $(\lambda + \mu) \cdot P = \big((\lambda + \mu) a_n\big)_{n \in \mathbb{N}}
  = (\lambda a_n)_{n \in \mathbb{N}} + (\mu a_n)_{n \in \mathbb{N}} = \lambda \cdot P + \mu \cdot P$.
  De même, pour le produit, avec $d_n = \sum_{i=0}^{n} a_i\, b_{n-i}$ :

$$\lambda \cdot (PQ) = \Big( \sum_{i=0}^{n} (\lambda a_i)\, b_{n-i} \Big)_{n \in \mathbb{N}}
= (\lambda P)\, Q = \Big( \sum_{i=0}^{n} a_i\, (\lambda b_{n-i}) \Big)_{n \in \mathbb{N}}$$

  $\mathbb{K}[X]$ reste une $\mathbb{K}$-algèbre.

**Premier exemple générique.** Si $E_1, \dots, E_n$ sont des $\mathbb{K}$-espaces
vectoriels, alors $E_1 \times E_2 \times \dots \times E_n$ est un e.v. pour les lois :

$$(x_1, \dots, x_n), (y_1, \dots, y_n) \longmapsto (x_1 + y_1, \dots, x_n + y_n), \qquad
\lambda \cdot (x_1, \dots, x_n) = (\lambda x_1, \dots, \lambda x_n)$$

$(E, +)$ est un groupe ; $\cdot$ est une loi de composition externe de
$\mathbb{K} \times E \to E$ (où $E = E_1 \times \dots \times E_n$) car les $E_i$ sont
des $\mathbb{K}$-e.v. ; $1_{\mathbb{K}} \cdot x = x$ ; et si $\lambda, \mu \in \mathbb{K}$
et $x, y \in E$ : $\lambda \cdot (x + y) = \lambda \cdot x + \lambda \cdot y$,
$(\lambda \mu) \cdot x = \lambda \cdot (\mu \cdot x)$, $\lambda \cdot (x+y) = \lambda \cdot (x + y)$.

En particulier, si $E$ est un $\mathbb{K}$-corps, alors $E^n$ est aussi un $\mathbb{K}$-e.v. :
$\mathbb{R}^2$, $\mathbb{C}^n$ sont des $\mathbb{R}$-e.v.

**Deuxième exemple générique.** Soit $E$ un ensemble non vide et $(F, +, \times)$ un
$\mathbb{K}$-corps : alors $F^E$ peut être muni d'une structure de $\mathbb{K}$-e.v. sur
$F^E$. On définit, pour $f, g : E \to F$ :

$$f + g : E \to F, \quad x \mapsto f(x) + g(x), \qquad
\lambda f : E \to F, \quad x \mapsto \lambda f(x)$$

**Application.** $\mathbb{R}^{\mathbb{N}}$ et $\mathbb{C}^{\mathbb{N}}$ sont des
$\mathbb{R}$-e.v. ; $\mathbb{C}^{\mathbb{N}}$ est un $\mathbb{C}$-e.v.

### 5) Règles de calcul dans un e.v.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

- $\forall x \in E$, $0_{\mathbb{K}} \cdot x = 0_E$ ;
- $\forall \lambda \in \mathbb{K}$, $\lambda \cdot 0_E = 0_E$ ;
- $\lambda x = 0 \Rightarrow \lambda = 0_{\mathbb{K}}$ ou $x = 0_E$ ;
- $\forall \lambda \in \mathbb{K}$, $\forall x, y \in E$, $\lambda \cdot (x - y) = \lambda x - \lambda y$ ;
- $\forall x \in E$, $-(\lambda \cdot x) = (-\lambda) \cdot x = \lambda \cdot (-x)$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$(0_{\mathbb{K}} + \mu) \cdot x = 0_{\mathbb{K}} \cdot x + \mu \cdot x = \mu \cdot x$,
donc $0_{\mathbb{K}} \cdot x = 0_E$.

$\lambda \cdot (x + 0_E) = \lambda \cdot x + \lambda \cdot 0_E = \lambda \cdot x$,
donc $\lambda \cdot 0_E = 0_E$.

Supposons $\lambda \neq 0$, donc $\lambda$ inversible :
$(\lambda^{-1} \lambda) \cdot x = 1_{\mathbb{K}} \cdot x = x = \lambda^{-1} \cdot (\lambda \cdot x)$ ;
si $\lambda x = 0$, alors $x = \lambda^{-1} \cdot 0_E = 0_E$. Donc $\lambda x = 0$
implique $\lambda = 0_{\mathbb{K}}$ ou $x = 0_E$.

$\lambda \cdot (x - y) = \lambda x + \lambda(-y) = 0$ entraîne
$\lambda \cdot (-y) = -\lambda y$, donc $\lambda \cdot (x - y) = \lambda x - \lambda y$.

$(\lambda - \lambda) \cdot x = 0_{\mathbb{K}} \cdot x = 0 = \lambda x + (-\lambda) \cdot x$,
donc $-(\lambda x) = (-\lambda) \cdot x$.

</div>

### 6) Combinaisons linéaires

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $(x_i)_{i \in I}$ une famille de vecteurs de $E$, $I$ quelconque. On appelle
**combinaison linéaire** des $x_i$ une somme finie

$$\sum_{i \in I} \lambda_i\, x_i$$

avec $(\lambda_i)_{i \in I}$ **famille presque nulle** de scalaires,
c'est-à-dire $(\lambda_i)_{i \in I} \in \mathbb{K}^{(I)}$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Une C.L. de vecteurs de $E$ est encore un vecteur de $E$.

Exemple : $\mathbb{C}$ est un $\mathbb{R}$-e.v. et $a + ib = a \cdot 1 + b \cdot i$
est une combinaison linéaire de $1$ et $i$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

La somme de deux C.L. $\sum_{i \in I} \lambda_i x_i$ et $\sum_{i \in I} \mu_i x_i$
est encore une C.L., et elle vaut $\sum_{i \in I} (\lambda_i + \mu_i) \cdot x_i$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Posons $D_i = \lambda_i + \mu_i$. Alors $I_\lambda = \{i \mid \lambda_i \neq 0\}$ est
vide ou fini, $I_\mu = \{i \mid \mu_i \neq 0\}$ de même, donc
$J = \{i \mid D_i \neq 0\}$ est vide ou fini et $J \subset I_\lambda \cup I_\mu$ ;
ainsi $\sum_{i \in I} (\lambda_i + \mu_i) x_i$ est une C.L. des $x_i$. De plus
$(\lambda_i + \mu_i) \cdot x_i = \lambda_i x_i + \mu_i x_i$ et, comme la somme est finie :

$$\sum_{i \in I} (\lambda_i + \mu_i) x_i = \sum_{i \in I} \lambda_i x_i + \sum_{i \in I} \mu_i x_i$$

</div>

**Applications et exemples.**

- Tout polynôme est C.L. de $(X^n)_{n \in \mathbb{N}}$ ; sommer deux polynômes,
  c'est sommer deux C.L. ;
- Dans $\mathbb{R}^2$, avec $u = (1, 1)$ et $v = (1, -1)$ : tout vecteur du plan
  est C.L. de $u$ et $v$, car

$$\binom{x}{y} = \frac{x+y}{2} \binom{1}{1} + \frac{x-y}{2} \binom{1}{-1}$$

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (colinéarité)</span>

On dira que $x$ et $y$ sont **colinéaires** si $\exists \lambda \in \mathbb{K}$
tel que $x = \lambda y$ ou $y = \lambda x$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

$0_E$ est colinéaire à tout vecteur de $E$. Si $x \neq 0_E$, $y$ est colinéaire à $x$
si et seulement si $\exists \lambda \in \mathbb{K}$, $y = \lambda x$.

</div>

## II. Sous-espaces vectoriels

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$A$ une partie **non vide** de $E$ est un **sous-espace vectoriel** de $E$ si
$+$ et $\cdot$ s'induisent sur $A$ et si $A$ est un e.v. pour les lois induites.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$A$ est un s.e.v. si et seulement si $A$ est **stable par $+$ et $\cdot$**.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\Rightarrow$ clair. $\Leftarrow$ $+$ et $\cdot$ s'induisent ; $A$ est stable par $+$
et $\cdot$, par la multiplication par $-1$ de $A$ et stable par $-$ : $(A, +)$ est un
sous-groupe de $(E, +)$ ; les 4 autres propriétés sont claires (elles valent sur $E$,
donc sur $A$).

**Pratiquement**, on vérifie que pour tout $x, y \in A$ et $\forall \lambda \in \mathbb{K}$,
alors $\lambda \cdot x + y \in A$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $A = \{(x, y, z) \in \mathbb{R}^3 \mid x + 2y + 3z = 0\}$ : oui ;
- $B = \{(x, y, z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 = 1\}$ : non, car $0_E \notin B$ ;
- $C = \{(x, y, z) \in \mathbb{R}^3 \mid z \neq 0\}$ : non, car $(C, +)$ n'est pas un groupe ;
- $D = \{aX^3 + bX^2 + cX + d\}$ : oui.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Pour montrer que $A$ est une **sous-algèbre** de $E$ (pour $(E, +, \times, \cdot)$),
il faut que $1_E \in A$ et que $A$ soit stable par $+$, $\cdot$ et $\times$.

</div>

### 2) Opérations

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Toute **intersection** de s.e.v. est un s.e.v.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $F = \bigcap_{i \in I} F_i$, où les $F_i$ sont des s.e.v. de $E$. Alors $0 \in F$.
Soit $x \in F$, $y \in F$, $\lambda \in \mathbb{K}$ : $x \in F_i$ et $y \in F_i$ pour tout
$i$, donc $\lambda x + y \in F_i$ pour tout $i$, d'où $\lambda x + y \in F$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

La **somme** de $n$ s.e.v. est un s.e.v.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $F = F_1 + F_2 + \dots + F_n$. Si $x \in F$, $x = x_1 + x_2 + \dots + x_n$ avec
$x_i \in F_i$ ; si $y \in F$, $y = y_1 + \dots + y_n$ avec $y_i \in F_i$. Pour
$\lambda \in \mathbb{K}$ :

$$\lambda x + y = (\lambda x_1 + y_1) + \dots + (\lambda x_n + y_n)
= \lambda (x_1 + \dots + x_n) + y_1 + \dots + y_n$$

donc $\lambda x + y \in F$. De plus $0_E = 0 + \dots + 0 \in F$.

</div>

### 3) Somme directe de sous-espaces

**Problème.** Si $x \in F_1 + \dots + F_n$, $x = x_1 + \dots + x_n$ : unicité de $x$ ?

Exemple : dans $\mathbb{C}$ (ou $\mathbb{H}$) considéré comme $\mathbb{R}$-e.v., avec
$F_1 = \mathbb{R}$, $F_2 = i\mathbb{R}$, $F_3 = j\mathbb{R}$ :
$F_1 + F_2 + F_3 = \{a + ib + jc \mid (a, b, c) \in \mathbb{R}^3\}$ ; on n'a pas
unicité de l'écriture :
$j = 0 \times 1 + 0 \times i + 1 \times j = -\frac{1}{2} \times 1 + \frac{\sqrt{3}}{2} \times i + 0 \times j$.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $F_1, \dots, F_n$ ($n$ s.e.v. de $E$) sont **en somme directe** si l'écriture
de tout élément $x$ quelconque de $F = F_1 + \dots + F_n$ sous la forme
$x = x_1 + \dots + x_n$ avec $x_i \in F_i$ est **unique**.

**Notation** : on écrira dans ce cas $F = F_1 \oplus F_2 \oplus \dots \oplus F_n$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$\mathbb{C} = \mathbb{R} \oplus i\mathbb{R}$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

La somme des $F_i$ est directe **si et seulement si** l'écriture de $0$ est unique.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $F = F_1 + \dots + F_n$ avec $F_1 \oplus \dots \oplus F_n$
$\iff \Big( \sum_{i=1}^{n} x_i = 0$ et $x_i \in F_i \Rightarrow \forall i \in [1, n]$, $x_i = 0 \Big)$.

$\Rightarrow$ clair.

$\Leftarrow$ Supposons $x \in F$ s'écrit $\sum_{i \in I} x_i = \sum_{i \in I} y_i$. Alors
$0 = \sum_{i \in I} (x_i - y_i)$ et $x_i - y_i \in F_i$ ; comme l'écriture de $0$ est
unique, $\forall i \in \{1, \dots, n\}$, $x_i = y_i$.cqfd

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$F_1$ et $F_2$ sont en somme directe si et seulement si
$F_1 \cap F_2 = \{0\}$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Supposons $0 = x_1 + x_2$ avec $x_1 \in F_1$ et $x_2 \in F_2$. Alors
$x_1 = -x_2 \in F_2$, donc $x_1 \in F_1 \cap F_2 = \{0\}$, d'où $x_1 = 0_E$
et $x_2 = 0_E$ : l'écriture de $0$ est unique.

$\Rightarrow$ soit $x \in F_1 \cap F_2$ : $x - x = 0$ ; comme l'écriture de $0$ est
unique, $x = -x = 0$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$I = \{f : \mathbb{R} \to \mathbb{R} \mid f \text{ impaire}\}$ et
$P = \{f : \mathbb{R} \to \mathbb{R} \mid f \text{ paire}\}$ sont deux s.e.v. de
$\mathbb{R}^{\mathbb{R}}$ et $I \cap P = \{0\}$ (la fonction nulle) : on a

$$I \oplus P = \mathbb{R}^{\mathbb{R}}$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $F = I \oplus P$ ; $F$ est un s.e.v. de $\mathbb{R}^{\mathbb{R}}$,
$F \subset \mathbb{R}^{\mathbb{R}}$. On veut montrer que tout élément de
$\mathbb{R}^{\mathbb{R}}$ s'écrit $f = f_i + f_p$ avec $f_i$ impaire et $f_p$ paire.

**Analyse.** Si $f = f_i + f_p$, alors $\forall x \in \mathbb{R}$ :
$f(x) = f_i(x) + f_p(x)$ et $f(-x) = f_i(-x) + f_p(-x) = -f_i(x) + f_p(x)$ ;
d'où, cas par cas :

$$f_i(x) = \frac{f(x) - f(-x)}{2} \quad (\text{impaire}), \qquad
f_p(x) = \frac{f(x) + f(-x)}{2} \quad (\text{paire})$$

**Synthèse.** Soit $f \in \mathbb{R}^{\mathbb{R}}$ ; on peut écrire

$$f(x) = \underbrace{\frac{f(x) - f(-x)}{2}}_{f_i(x)} + \underbrace{\frac{f(x) + f(-x)}{2}}_{f_p(x)}$$

$f_i$ est impaire, $f_p$ est paire, donc $\mathbb{R}^{\mathbb{R}} = I + P$.
De plus $f$ s'écrit, et ceci de manière unique, comme somme d'une fonction paire
et d'une fonction impaire.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$e^x = \operatorname{ch} x + \operatorname{sh} x$$

($\operatorname{ch}$ paire, $\operatorname{sh}$ impaire).

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (supplémentaires)</span>

On dit que 2 s.e.v. $F_1$ et $F_2$ de $E$ sont **supplémentaires** dans $E$ si
$E = F_1 \oplus F_2$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque (schéma)</span>

Dans l'espace $E = \mathbb{R}^3$, trois plans vectoriels $E_1$, $E_2$, $E_3$
peuvent être deux à deux supplémentaires sans que la somme des trois soit directe :
$E = E_1 \oplus E_2 = E_1 \oplus E_3 = E_2 \oplus E_3$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$E_1, \dots, E_n$ sont en somme directe si et seulement si

$$E_k \cap (E_{k+1} + \dots + E_n) = \{0\} \qquad \text{pour } 1 \leq k \leq n-1$$

(en particulier $E_{n-1} \cap E_n = \{0\}$).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $F = E_1 \oplus E_2 \oplus \dots \oplus E_n$, alors l'écriture de $0$ est unique.
Soit $x \in E_k \cap (E_{k+1} + \dots + E_n)$ : $x = x_k = x_{k+1} + \dots + x_n$ avec
$x_i \in E_i$. Alors
$0 + 0 + \dots + 0 - x_k + x_{k+1} + \dots + x_n = 0$,
d'où $\forall i$, $x_i = 0$, donc $x = x_k = 0$. Ainsi
$\forall n-1 \geq k \geq 1$, $E_k \cap (E_{k+1} + \dots + E_n) = \{0\}$.

$\Leftarrow$ Supposons $0 = x_1 + x_2 + \dots + x_n$. Alors
$-x_1 = x_2 + \dots + x_n$, donc
$-x_1 \in E_1 \cap (E_2 + \dots + E_n) = \{0\}$, d'où $x_1 = 0$. On suppose démontré
que $x_1 = \dots = x_k = 0$ pour $1 \leq k \leq n - 2$ :
$x_{k+1} + x_{k+2} + \dots + x_n = 0$, donc
$-x_{k+1} \in E_{k+1} \cap (E_{k+2} + \dots + E_n)$, d'où $x_{k+1} = 0$.
L'hypothèse est récurrente pour $1 \leq k \leq n-1$ : $x_1 = x_2 = \dots = x_n = 0$
et l'écriture est unique.

</div>

### 4) Sous-espace engendré par une partie

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $A$ une partie de $E$. Il existe un **plus petit sous-espace vectoriel** de $E$
(au sens de $\subset$) qui contient $A$, et c'est
$\bigcap_{\substack{H \text{ s.e.v. de } E \\ A \subset H}} H$. On le note $\mathrm{Vect}(A)$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $A = \varnothing$, $\mathrm{Vect}(A) = \{0_E\}$ ; si $A$ est un s.e.v. de $E$,
$\mathrm{Vect}(A) = A$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$E$ est un e.v. sur $\mathbb{K}$ ;
$\mathcal{R} = \{H \mid H \text{ s.e.v. de } E \text{ et } A \subset H\}$ est non vide.
On pose $F = \bigcap_{H \in \mathcal{R}} H$ ; pour tout $H$ s.e.v. contenant $A$,
$H \in \mathcal{R}$ donc $F \subset H$ : $F$ est le plus petit s.e.v. contenant $A$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $A \neq \varnothing$, $\mathrm{Vect}(A)$ est l'ensemble des **combinaisons linéaires**
des vecteurs de $A$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $F = \Big\{ \sum_{i \in I} \lambda_i x_i \;\Big/\; (x_i)_{i \in I} \in A^I,\ (\lambda_i)_{i \in I} \in \mathbb{K}^{(I)} \Big\}$.
$F$ contient $A$ (pour $x \in A$, $x = 1 \cdot x$) ; $F$ est un s.e.v. de $E$ : soit
$x \in F$, $x = \sum_{i \in I} \lambda_i x_i$ avec $x_i \in A$ ; soit $y \in F$,
$y = \sum_{i \in I} \mu_i x_i$ ; pour tout $\lambda \in \mathbb{K}$ :

$$\lambda x + y = \sum_{i \in I} (\lambda \lambda_i + \mu_i) x_i \in F$$

$F$ est le plus petit s.e.v. contenant $A$, car si $A \subset H$ avec $H$ s.e.v.,
$H$ contient toutes les C.L. de vecteurs de $A$ par stabilité de $+$ et $\cdot$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

La réunion de s.e.v. engendre leur somme :
$\mathrm{Vect}(F_1 \cup F_2 \cup \dots \cup F_n) = F_1 + F_2 + \dots + F_n$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $U = F_1 \cup F_2 \cup \dots \cup F_n$ ; ce n'est pas un s.e.v. $U \subset S$
(où $S = F_1 + \dots + F_n$) ; $(S, +)$ est un groupe et c'est le plus petit contenant
$U$, donc si $F$ est un s.e.v. contenant $U$, c'est à fortiori un s.e.v., donc
$S \subset F$. D'où $S = \mathrm{Vect}(U)$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle **sous-espace engendré par une famille** $\mathcal{F}$ de vecteurs de $E$
le sous-espace $\mathrm{Vect}(A)$ avec $A = \{x_i \mid x_i \in \mathcal{F}\}$, et on le
note $\mathrm{Vect}(\mathcal{F})$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $\mathbb{Q}(\sqrt{2}) = \{a + b\sqrt{2} \mid (a, b) \in \mathbb{Q}^2\}$ est un s.e.v.
  de $\mathbb{R}$ considéré comme $\mathbb{Q}$-e.v. ;
  $\mathrm{Vect}(\mathbb{Q}[\sqrt{2}]) = \mathrm{Vect}(\{1, \sqrt{2}\})$, et
  $\mathbb{Q}(\sqrt{2}) = \mathrm{Vect}(\{1, \sqrt{2}\})$.
- Dans $\mathbb{R}^2$ : $\mathrm{Vect}(\{u\}) = \{\lambda u \mid \lambda \in \mathbb{R}\}$
  (une droite vectorielle) ; $\mathrm{Vect}(\{u, v\}) = \mathrm{Vect}(\{u\})$ si $u$
  et $v$ sont colinéaires ($u \neq 0$), et $\mathbb{R}^2$ sinon.

</div>

## III. Familles de vecteurs

### 1) Famille libre ou liée

Soit $\mathcal{F}$ une famille de vecteurs de $E$, $\mathcal{F} = (x_i)_{i \in I}$.

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $\mathcal{F}$ est finie, on parle plutôt de **système de vecteurs**.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $x \in \mathrm{Vect}(\mathcal{F})$ : les 2 propositions suivantes sont équivalentes :

- ① l'écriture de $x$ sous la forme $\sum_{i \in I} \lambda_i x_i$ est unique ;
- ② l'écriture de $0$ sous la même forme est unique.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Il existe une décomposition de $x$ et de $0$ sous la forme $\sum_{i \in I} \lambda_i x_i$,
car $x$ et $0_E$ sont des vecteurs de $\mathrm{Vect}(\mathcal{F})$.

Si on a ①, écrivons $x = \sum_{i \in I} \mu_i x_i$ et $\sum_{i \in I} \lambda_i x_i = 0$.
$0 + x = x = \sum \mu_i x_i = \sum (\mu_i + \lambda_i) x_i$. Pour l'unicité de
l'écriture de $x$ : $\forall i \in I$, $\mu_i = \mu_i + \lambda_i$, donc
$\forall i \in I$, $\lambda_i = 0$. Si on a ② et $x = \sum \lambda_i x_i = \sum \mu_i x_i$,
alors $0 = \sum (\lambda_i - \mu_i) x_i = \sum 0 \, x_i$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $\mathcal{F}$ est une famille de $E$ vérifiant ②, alors on dit que $\mathcal{F}$
est **libre**. Si $\mathcal{F}$ n'est pas libre, on dit qu'elle est **liée**.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Énoncé pratique</span>

Pour démontrer qu'une famille est libre, on démontre que si
$\sum_{i \in I} \lambda_i x_i = 0$ alors $\forall i \in I$, $\lambda_i = 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

- $\mathcal{F}$ est libre si et seulement si l'écriture de $x \in \mathrm{Vect}(\mathcal{F})$
  est unique, et ceci pour $x$ quelconque ;
- $\mathcal{F}$ est liée si et seulement si il existe $(\lambda_i)_{i \in I}$ famille
  presque nulle de scalaires **non tous nuls** telle que
  $\sum_{i \in I} \lambda_i x_i = 0_E$.

</div>

**Caractérisation de « libre ».** Soit $a, b \in \mathbb{Q}$ tels que
$a + b\sqrt{2} = 0$. Si $b = 0$, alors $a = 0$. Si $b \neq 0$, alors
$\sqrt{2} = -\dfrac{a}{b} \in \mathbb{Q}$, or $\sqrt{2} \notin \mathbb{Q}$, impossible ;
donc $a = b = 0$. La famille $(1, \sqrt{2}, \sqrt{3})$ est libre (dans $\mathbb{R}$
considéré comme $\mathbb{Q}$-e.v.).

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Soit $(P_n)_n$ une famille de polynômes de degrés tous distincts ; quitte à la
renuméroter, on suppose $\deg P_0 < \deg P_1 < \dots < \deg P_n$. Cette famille
est libre.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Supposons $\sum_{k=0}^{n} \lambda_k P_k = 0$. Le coefficient dominant de
$\sum_{k=0}^{n} \lambda_k P_k$ est $\lambda_n$, car
$\deg P_0 < \dots < \deg P_n$. Supposons démontré que
$\lambda_n = \dots = \lambda_{k+1} = 0$ ; alors pour un certain $k$, $0 \leq k \leq n-1$ :
$\lambda_k P_k + \lambda_{k-1} P_{k-1} + \dots + \lambda_0 P_0 = 0$, dont le coefficient
dominant est $\lambda_k$, donc $\lambda_k = 0$. La propriété est vraie pour
$k = n-1$, récurrente (en diminuant) pour $1 \leq k \leq n-1$, donc vraie pour
$k = -1$ : on obtient $\lambda_n = \dots = \lambda_0 = 0$.

(Si $P_k = (X - a)^k$) l'écriture de $P$ sous la forme $\sum \lambda_k (X-a)^k$
est unique et $\lambda_k$ vaut $\dfrac{P^{(k)}(a)}{k!}$ d'après Taylor.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Toute sous-famille $(x_i)_{i \in J}$, $J \subset I$, d'une famille libre $\mathcal{F}$
est libre.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Car si $\sum_{i \in J} \lambda_i x_i = 0$, en posant $\lambda_i = 0$ pour
$i \in I \setminus J$, on a $\sum_{i \in I} \lambda_i x_i = 0$, donc
$\forall i \in I$, $\lambda_i = 0$ car $\mathcal{F}$ est libre.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Toute sous-famille d'une famille **liée** est encore liée.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $\mathcal{F}'$ une sous-famille de $\mathcal{F}$, contenant au moins un vecteur
de $\mathcal{F}$. Si $\mathcal{F}$ est liée, il existe
$(\lambda_i)_{i \in I} \in \mathbb{K}^{(I)}$, non nulle, telle que
$\sum_{i \in I} \lambda_i x_i = 0_E$. Alors $\sum_{i \in I'} \lambda_i x_i$ est aussi
une C.L. d'éléments de $\mathcal{F}'$, et $\mathcal{F}'$ est liée.

</div>

<div class="bloc contre-exemple" markdown="1">

<span class="bloc-titre">Contre-exemple</span>

Toute famille qui contient $0$ est liée.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Une famille $\mathcal{F}$ est libre si et seulement si **toutes** ses sous-familles
sont libres.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\Rightarrow$ déjà vu. $\Leftarrow$ si toutes les sous-familles sont libres :
$\forall\, 0_E = \sum_{i \in I} \lambda_i x_i$ avec $\mathcal{F} = (x_i)_{i \in I}$ et
$(\lambda_i)_{i \in I} \in \mathbb{K}^{(I)}$. Soit
$\mathcal{F}' = \{x_i \mid \lambda_i \neq 0\}$ ; $\mathcal{F}'$ est finie ou vide.
Si $\mathcal{F}'$ est non vide, c'est une sous-famille de $\mathcal{F}$,
$\mathcal{F}' = (x_i)_{i \in J}$ avec $J \subset I$, et
$\sum_{j \in J} \lambda_j x_j = 0$ ; or $\mathcal{F}'$ est libre par hypothèse
($\mathcal{F}'$ est finie), donc $\forall j \in J$, $\lambda_j = 0$, absurde.
$\mathcal{F}'$ est vide, c'est-à-dire $\forall i \in I$, $\lambda_i = 0$. Donc
$\mathcal{F}$ est libre.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Une famille $\mathcal{F} = (x_i)_{i \in I}$ est **liée** si et seulement si l'un de
ses vecteurs est combinaison linéaire des autres.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Il existe $(\lambda_i)_{i \in I} \in \mathbb{K}^{(I)}$ non nulle telle que
$\sum_{i \in I} \lambda_i x_i = 0$. Il existe $i_0 \in I$ avec $\lambda_{i_0} \neq 0$ ;
alors $\lambda_{i_0}$ est inversible ($\mathbb{K}$ est un corps) et

$$x_{i_0} = -\sum_{\substack{i \in I \\ i \neq i_0}} \left( \lambda_i \lambda_{i_0}^{-1} \right) x_i$$

: $x_{i_0}$ est C.L. des autres vecteurs.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $\mathcal{F} = (x_i)_{i \in I}$ est libre, alors $\mathcal{F}' = (\mathcal{F}, x)$
est liée si et seulement si $x \in \mathrm{Vect}(\mathcal{F})$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $(x)$ est libre si et seulement si $x \neq 0_E$ ;
- $(x, y)$ est libre si et seulement si $y$ n'est pas colinéaire à $x$ ;
- pour montrer que $(x, y, z)$ est libre, on vérifie que $x \neq 0_E$, que $y$ n'est
  pas colinéaire à $x$ (c'est-à-dire $y \neq \lambda x$), et que $z$ n'est pas C.L.
  de $x$ et $y$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\Leftarrow$ si $x \in \mathrm{Vect}(\mathcal{F})$, alors $x$ est C.L. des vecteurs de
$\mathcal{F}$, donc $(\mathcal{F}, x)$ est liée d'après la propriété précédente.

$\Rightarrow$ $(\mathcal{F}, x)$ est liée : il existe $\lambda \in \mathbb{K}$ et
$(\lambda_i)_{i \in I} \in \mathbb{K}^{(I)}$ non tous nuls tels que
$\lambda x + \sum_{i \in I} \lambda_i x_i = 0$. Si $\lambda = 0$, alors
$\sum_{i \in I} \lambda_i x_i = 0$ et, comme $\mathcal{F}$ est libre,
$\forall i \in I$, $\lambda_i = 0$ : impossible, car sinon $\lambda$ et les
$\lambda_i$ seraient tous nuls. Donc $\lambda \neq 0$ et

$$x = -\sum_{i \in I} \left( \lambda^{-1} \lambda_i \right) x_i \in \mathrm{Vect}(\mathcal{F})$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $(n+1)$ vecteurs sont C.L. de $n$ vecteurs, alors ils forment une famille **liée**.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

On dira que les vecteurs sont **linéairement dépendants**.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration (récurrence sur $n$)</span>

$H_n$ : si $(n+1)$ vecteurs $(x_1, x_2, \dots, x_{n+1})$ sont C.L. de
$y_1, \dots, y_n$, alors $(x_1, \dots, x_{n+1})$ est liée.

$H_1$ : ok. Si $n = 1$ : $x_1, x_2$ sont C.L. de $y$ ;
$x_1 = \lambda_1 y$, $x_2 = \lambda_2 y$. Si $\lambda_2 = 0$, $x_2 = 0_E$ et
$(x_1, x_2)$ est liée ; si $\lambda_2 \neq 0$, $y = \lambda_2^{-1} x_2$ et
$x_1 = (\lambda_1 \lambda_2^{-1}) x_2$ : $(x_1, x_2)$ est liée.

Supposons $H_n$ ($n \geq 1$). Soient $x_1, \dots, x_{n+2}$ $n+2$ vecteurs C.L. de
$y_1, \dots, y_{n+1}$ :

$$x_i = \lambda_{i,1} y_1 + \lambda_{i,2} y_2 + \dots + \lambda_{i,n+1} y_{n+1}, \quad 1 \leq i \leq n+2$$

**1er cas** : $\forall 1 \leq i \leq n+2$, $\lambda_{i, n+1} = 0$. Alors
$x_1, \dots, x_{n+1}$ sont C.L. de $y_1, \dots, y_n$ ; d'après $H_n$,
$(x_1, \dots, x_{n+1})$ est liée, et $(x_1, \dots, x_{n+1}, x_{n+2})$ est liée comme
sous-famille de la précédente.

**2ème cas** : les $\lambda_{i, n+1}$ sont non tous nuls ; quitte à renuméroter les
lignes, on suppose $\lambda_{n+2, n+1} \neq 0$. Posons

$$z_i = x_i - \frac{\lambda_{i, n+1}}{\lambda_{n+2, n+1}}\, x_{n+2}, \qquad i = 1, \dots, n+1$$

Alors $z_i$ est C.L. de $y_1, \dots, y_n$ (le coefficient de $y_{n+1}$ est nul), donc,
d'après $H_n$, $z_1, \dots, z_{n+1}$ sont liés : il existe $\mu_1, \dots, \mu_{n+1}$
non tous nuls tels que $\sum_{i=1}^{n+1} \mu_i z_i = 0$. D'où

$$\sum_{i=1}^{n+1} \mu_i x_i - \left( \sum_{i=1}^{n+1} \mu_i \frac{\lambda_{i, n+1}}{\lambda_{n+2, n+1}} \right) x_{n+2} = 0_E$$

Les $\mu_i$ étant non tous nuls, on obtient $0$ comme C.L. à coefficients non tous
nuls de $x_1, \dots, x_{n+2}$ : donc $(x_1, \dots, x_{n+2})$ est liée.

</div>

### 2) Familles génératrices

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$(n+2)$ polynômes de degré $\leq n$ sont liés, car C.L. de $1, X, \dots, X^n$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $\mathcal{F}$ est **génératrice** si $\mathcal{F}$ engendre l'espace tout
entier. Cela signifie :

$$\forall x \in E,\ \exists (\lambda_i)_{i \in I} \in \mathbb{K}^{(I)} \mid
x = \sum_{i \in I} \lambda_i x_i \qquad \text{pour } \mathcal{F} = (x_i)_{i \in I}$$

On a existence mais pas forcément unicité.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$(1, i, j)$ est génératrice de $\mathbb{H}$ mais il n'y a pas unicité de l'écriture :
$j = 0 \times 1 + 0 \times i + 1 \times j = -\frac{1}{2} \times 1 + \frac{\sqrt{3}}{2} \times i + 0 \times j$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Toute **sur-famille** d'une famille génératrice est encore une génératrice.

</div>

### 3) Bases d'un e.v.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit qu'une famille $\mathcal{F}$ est une **base** de $E$ si c'est une famille
**libre et génératrice**.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $1$ est une base de $\mathbb{R}$ ;
- $(1, i)$, $(1, j)$ sont des bases de $\mathbb{C}$ en tant que $\mathbb{R}$-e.v. ;
- $(X^n)_{n \in \mathbb{N}}$ est une base de $\mathbb{K}[X]$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $\mathcal{F} = (x_i)_{i \in I}$ est une base de $E$, tout $x$ de $E$ s'écrit
(existence et) manière **unique**

$$x = \sum_{i \in I} \lambda_i x_i, \qquad (\lambda_i)_{i \in I} \in \mathbb{K}^{(I)}$$

Les $\lambda_i$ étant uniques, on les appelle **coordonnées** de $x$ suivant la
base $\mathcal{F}$ ; $\lambda_i$ s'appelle la $i$-ème composante, ou composante
selon $x_i$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- Dans $\mathbb{R}^2$, $B = \{(1, 0), (0, 1)\}$ est une base. Tout vecteur s'écrit
  $v = \binom{x}{y} = x \binom{1}{0} + y \binom{0}{1}$ ; $x$ et $y$ sont les
  coordonnées.
- Base de $\mathbb{R}^n$ : $e_i = (0, \dots, 1, \dots, 0)$ (avec $1$ en $i$-ème
  position) ; $(e_1, \dots, e_n)$ est une base de $\mathbb{R}^n$, appelée
  **base canonique**.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Une famille **libre** est une base si et seulement si c'est une famille **libre
maximale** (i.e. toute sous-famille stricte est liée).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $\mathcal{F}$ une famille libre.

$\Rightarrow$ si $\mathcal{F}$ est libre maximale : soit $x \notin \mathcal{F}$ ;
$(\mathcal{F}, x)$ est une sur-famille stricte de $\mathcal{F}$ ($x \in E \setminus \mathcal{F}$),
donc liée ; donc $x \in \mathrm{Vect}(\mathcal{F})$. Ainsi
$E \subset \mathrm{Vect}(\mathcal{F}) \subset E$, d'où $E = \mathrm{Vect}(\mathcal{F})$ :
$\mathcal{F}$ est génératrice.

$\Leftarrow$ si $\mathcal{F}$ est une base : soit $x \notin \mathcal{F}$.
$(\mathcal{F}, x)$ est-elle liée ? $E = \mathrm{Vect}(\mathcal{F})$ car $\mathcal{F}$
est génératrice, donc $x \in \mathrm{Vect}(\mathcal{F})$, donc $(\mathcal{F}, x)$ est liée.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $\mathcal{F}$ est une base, alors c'est une famille **génératrice minimale**
(i.e. toute sous-famille stricte de $\mathcal{F}$ n'est plus génératrice).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $\mathcal{F}$ est une base, $\mathcal{F}$ est génératrice. Soit $\mathcal{F}'$
une sous-famille stricte de $\mathcal{F}$ : $\mathcal{F}' = (x_i)_{i \in J}$ et
$\mathcal{F} = (x_i)_{i \in I}$ avec $J \subsetneq I$. Soit $i \in I \setminus J$ non vide :
$x_i \in E$ donc il est C.L. de $(x_j)_{j \in J}$ ; $(\mathcal{F}', x_i)$ est liée ;
$\mathcal{F}$ est liée comme sous-famille de $(\mathcal{F}', x_i)$ : impossible car
$\mathcal{F}$ est une base. Donc $\mathcal{F}'$ n'est pas génératrice et $\mathcal{F}$
est génératrice minimale.

$\Leftarrow$ si $\mathcal{F}$ est génératrice minimale : supposons $\mathcal{F}$ liée ;
il existe $x_{i_0} \in \mathcal{F}$ C.L. des autres :
$x_{i_0} = \sum_{\substack{i \in I \\ i \neq i_0}} \lambda_i x_i$. Alors
$\mathcal{F}' = (x_i)_{i \in I \setminus \{i_0\}}$ est une sous-famille stricte de
$\mathcal{F}$, et elle est génératrice : car tout $x$ de $E$ s'écrit
$x = \sum_{i \in I} \mu_i x_i$ ($\mathcal{F}$ génératrice)
$= \sum_{i \in I \setminus \{i_0\}} \mu_i x_i + \mu_{i_0} \sum_{i \neq i_0} \lambda_i x_i$,
donc $x \in \mathrm{Vect}(\mathcal{F}')$ et $E = \mathrm{Vect}(\mathcal{F}')$.

Conclusion : si ($\mathcal{F}$ est liée), $\mathcal{F}$ n'est pas génératrice minimale ;
donc par contraposée, si $\mathcal{F}$ est génératrice minimale, $\mathcal{F}$ est
libre, c'est donc une base.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Méthodes (à retenir)</span>

- Pour montrer qu'une famille est **libre** : montrer que
  $\big( \sum_{i \in I} \lambda_i x_i = 0 \Rightarrow \forall i \in I,\ \lambda_i = 0 \big)$ ;
  l'écriture de $x$ est unique, $x$ quelconque ; toutes ses sous-familles sont libres ;
  c'est une sous-famille d'une famille libre.
- Pour montrer qu'une famille est **liée** : montrer qu'il existe
  $(\lambda_i)_{i \in I} \in \mathbb{K}^{(I)}$ non nulle telle que
  $\sum_{i \in I} \lambda_i x_i = 0$ ($x_i \in \mathcal{F}$, $\lambda_i \neq 0$) ;
  il existe $u \in \mathcal{F}$ tel que $u = \sum_{i \in I} \lambda_i x_i$ ;
  c'est une sous-famille d'une famille liée.
- Pour montrer qu'une famille est une **base** : famille libre maximale ;
  famille génératrice minimale.

</div>

## IV. Applications linéaires

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $E$ et $F$ deux $\mathbb{K}$-e.v., $u : E \to F$. $u$ est **linéaire** si

$$\forall \lambda \in \mathbb{K},\ \forall x, y \in E,\quad
\begin{cases} u(\lambda x) = \lambda u(x) \\ u(x + y) = u(x) + u(y) \end{cases}$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarques</span>

- $u : E \to F$ ($\mathbb{K}$-e.v.) est linéaire si et seulement si
  $\forall \lambda \in \mathbb{K}$, $\forall x, y \in E$ :
  $u(\lambda x + y) = \lambda u(x) + u(y)$ ;
- c'est un morphisme de groupe $(E, +)$ vers le groupe $(F, +)$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Vocabulaire</span>

- endomorphisme, isomorphisme, automorphisme ;
- une application linéaire est un **morphisme d'e.v.** ;
- $u$ est un **morphisme d'algèbre** si $u$ est une application linéaire de
  l'algèbre $E$ vers l'algèbre $F$ — $u$ est morphisme d'anneau de l'anneau
  $(E, +, \times)$ vers l'anneau $(F, +, \times)$.

</div>

### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $u$ est linéaire de $E$ vers $F$ et si $x$ est C.L. des $x_i$ :
$x = \sum_{i \in I} \lambda_i x_i$, alors

$$u(x) = \sum_{i \in I} \lambda_i\, u(x_i)$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$\mathcal{L}_{\mathbb{K}}(E, F)$, l'ensemble des applications linéaires du
$\mathbb{K}$-e.v. $E$ vers le $\mathbb{K}$-e.v. $F$, est un $\mathbb{K}$-e.v.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

$(\mathcal{L}_{\mathbb{K}}(E, F), +, \cdot)$ est un s.e.v. de $(F^E, +, \cdot)$ :
si $u, v$ sont deux applications linéaires de $E$ vers $F$ et $\lambda \in \mathbb{K}$,
 alors $\lambda u + v$ est encore linéaire ; l'application nulle $0 : x \mapsto 0$
est linéaire.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (composition)</span>

Si $u \in \mathcal{L}_{\mathbb{K}}(E, F)$ et $v \in \mathcal{L}_{\mathbb{K}}(F, G)$,
alors $v \circ u \in \mathcal{L}_{\mathbb{K}}(E, G)$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Pour $x, y \in E$ et $\lambda \in \mathbb{K}$ :

$$(v \circ u)(\lambda x + y) = v\big( \lambda u(x) + u(y) \big)
= \lambda\, (v \circ u)(x) + (v \circ u)(y)$$

car $v$ est linéaire.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (distributivité)</span>

Si $u \in \mathcal{L}_{\mathbb{K}}(E, F)$ et $v, w \in \mathcal{L}_{\mathbb{K}}(F, G)$ :

$$(v + w) \circ u = v \circ u + w \circ u$$

Si de plus $u_1 \in \mathcal{L}_{\mathbb{K}}(E, F)$ :
$v \circ (u + u_1) = v \circ u + v \circ u_1$ ; et pour tout $\lambda \in \mathbb{K}$ :

$$\lambda (v \circ u) = (\lambda v) \circ u = v \circ (\lambda u)$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\big( (v + w) \circ u \big)(x) = (v \circ u)(x) + (w \circ u)(x)$ ;
$\big( v \circ (u + u_1) \big)(x) = v\big( u(x) + u_1(x) \big) = (v \circ u)(x) + (v \circ u_1)(x)$,
car $v$ est linéaire.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$\mathcal{L}_{\mathbb{K}}(E)$, l'ensemble des **endomorphismes** du $\mathbb{K}$-e.v. $E$,
est une $\mathbb{K}$-**algèbre** (non commutative).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$(\mathcal{L}_{\mathbb{K}}(E), +, \cdot)$ est un $\mathbb{K}$-e.v. ;
$(\mathcal{L}_{\mathbb{K}}(E), +, \circ)$ est un sous-anneau de $E^E$ car
$\mathrm{Id}_E$ est linéaire ; de plus la composée de deux applications linéaires
est linéaire ; enfin
$\forall \lambda \in \mathbb{K}$, $\forall u, v \in \mathcal{L}_{\mathbb{K}}(E)$ :
$\lambda (v \circ u) = (\lambda v) \circ u = v \circ (\lambda u)$.

</div>

### 3) Effets des applications linéaires sur les s.e.v.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $u \in \mathcal{L}_{\mathbb{K}}(E, F)$ et $H$ est un s.e.v. de $E$, alors $u(H)$
est un s.e.v. de $F$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $x' \in u(H)$ et $y' \in u(H)$, $\lambda \in \mathbb{K}$ :
$x' = u(x)$ avec $x \in H$ ; $y' = u(y)$ avec $y \in H$. Alors

$$\lambda x' + y' = \lambda u(x) + u(y) = u(\lambda x + y)$$

car $u$ est linéaire, et $\lambda x + y \in u(H)$ car $H$ est un s.e.v.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $u \in \mathcal{L}_{\mathbb{K}}(E, F)$ et $H'$ est un s.e.v. de $F$, alors
$u^{-1}(H')$ est un s.e.v. de $E$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $x, y \in u^{-1}(H')$ : $u(x) \in H'$ et $u(y) \in H'$ ; pour $\lambda \in \mathbb{K}$ :
$u(\lambda x + y) = \lambda u(x) + u(y) \in H'$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définitions (image, noyau)</span>

- $u(E)$ est un s.e.v. de $F$, appelé **image** de $u$, et noté $\mathrm{Im}\, u$ ;
- $u^{-1}(\{0_F\})$ est un s.e.v. de $E$, appelé **noyau** de $u$, et noté
  $\mathrm{Ker}\, u$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

- $u$ est **injective** si et seulement si $\mathrm{Ker}\, u = \{0_E\}$ ;
- $u$ est **surjective** si et seulement si $\mathrm{Im}\, u = F$.

</div>

### 4) Effet sur les familles de vecteurs

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $\mathcal{F}$ engendre $V$ (avec $V = \mathrm{Vect}(\mathcal{F})$ s.e.v. de $E$)
et $u \in \mathcal{L}_{\mathbb{K}}(E, F)$, alors $u(\mathcal{F})$ engendre $u(V)$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$\mathcal{F} \subset V$, donc $u(\mathcal{F}) \subset u(V)$ ; $u(V)$ est un s.e.v. de
$F$, donc $\mathrm{Vect}(u(\mathcal{F})) \subset u(V)$.

Soit $y \in u(V)$ : $y = u(x)$ avec $x \in V$ ; or $V = \mathrm{Vect}(\mathcal{F})$,
donc $x = \sum_{i \in I} \lambda_i x_i$ avec $\mathcal{F} = (x_i)_{i \in I}$. Alors

$$y = u(x) = \sum_{i \in I} \lambda_i\, u(x_i) \in \mathrm{Vect}\big( u(\mathcal{F}) \big)$$

donc $u(V) \subset \mathrm{Vect}(u(\mathcal{F}))$. Finalement
$u(V) = \mathrm{Vect}(u(\mathcal{F}))$.

</div>


### 5) Images de familles de vecteurs (suite)

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

L'image d'une famille génératrice engendre $\operatorname{Im} u$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

L'image d'une famille liée est liée : car si $\sum_{i \in I} \lambda_i x_i = 0$ avec les $\lambda_i$ non tous nuls, alors $\sum_{i \in I} \lambda_i u(x_i) = u(0) = 0$, donc les $(u(x_i))_{i \in I}$ forment une famille liée.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

L'image d'une famille libre par une application linéaire **injective** est libre : si $\sum_{i \in I} \lambda_i u(x_i) = 0$, alors $u\big(\sum_{i \in I} \lambda_i x_i\big) = 0$, donc $\sum_{i \in I} \lambda_i x_i = 0$ car $u$ est injective ; si la famille $(x_i)_{i \in I}$ est libre, on a $\forall i \in I,\ \lambda_i = 0$ ; donc la famille $(u(x_i))_{i \in I}$ est libre.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

L'image par une application linéaire **surjective** d'une famille génératrice est génératrice (voir que l'image d'une famille génératrice engendre $\operatorname{Im} u$ ; si $u$ est surjective, $\operatorname{Im} u = F$).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

L'image d'une **base** par une application linéaire **bijective** est une base.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Soit $u \in \mathcal{L}(E, F)$ ; si $\exists \mathcal{B}$ base de $E$ telle que $u(\mathcal{B})$ soit une base de $F$, alors $u$ est bijective.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$u(\mathcal{B})$ est une base de $F$. $\operatorname{Vect}(u(\mathcal{B})) = \operatorname{Im} u$ car $\mathcal{B}$ est une base de $E$ ; $\operatorname{Vect}(u(\mathcal{B})) = F$ car $u(\mathcal{B})$ est une base de $F$. Donc $\operatorname{Im} u = F$ : $u$ est surjective.

Soit $x \in \operatorname{Ker} u$ ; écrivons $\mathcal{B} = (x_i)_{i \in I}$, $x = \sum_{i \in I} \lambda_i x_i$. Alors $u(x) = 0 = \sum_{i \in I} \lambda_i u(x_i)$ ; or $(u(x_i))_{i \in I}$ est une base de $F$, donc libre, donc $\forall i,\ \lambda_i = 0$, d'où $x = 0$. Ainsi $\operatorname{Ker} u = \{0_E\}$ : $u$ est injective.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $\mathcal{B} = (e_i)_{i \in I}$ est une base de $E$, se donner une application linéaire $u : E \to F$, c'est se donner $(u(e_i))_{i \in I}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$x$ s'écrit de manière unique $x = \sum_{i \in I} \lambda_i e_i$ ; si on connaît $(u(e_i))_{i \in I}$, alors $u(x)$ est parfaitement déterminé et vaut $u(x) = \sum_{i \in I} \lambda_i u(e_i)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $u$ est linéaire, $u$ est parfaitement connue par la donnée des $(u(e_i))_{i \in I}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $(e_i)_{i \in I}$ est une famille de vecteurs de $E$, montrons qu'il existe une application linéaire telle que $u(e_i) = f_i$ pour tout $i$. Posons, pour $x = \sum_{i \in I} \lambda_i x_i$ : $u(x) = \sum_{i \in I} \lambda_i f_i$. Alors $u$ est une application $E \to F$, et elle est bien linéaire : pour $x = \sum \lambda_i x_i$, $y = \sum \mu_i x_i$,

$$u(\lambda x + y) = u\Big(\sum_{i \in I} (\lambda \lambda_i + \mu_i) x_i\Big) = \sum_{i \in I} (\lambda \lambda_i + \mu_i) f_i = \lambda \sum_{i \in I} \lambda_i f_i + \sum_{i \in I} \mu_i f_i = \lambda u(x) + u(y)$$

Il existe une unique application linéaire telle que $\forall i \in I,\ u(e_i) = f_i$.

</div>

### 6) Valeurs et vecteurs propres

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $\lambda \in \mathbb{K}$ est **valeur propre** d'une application linéaire $u \in \mathcal{L}_{\mathbb{K}}(E)$ s'il existe $x \in E$, **non nul**, tel que $u(x) = \lambda x$. $x$ est alors un **vecteur propre** de $u$ associé à la valeur propre $\lambda$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Si $\lambda$ est une valeur propre de $u$, on appelle **sous-espace propre** associé à $\lambda$ le sous-espace vectoriel

$$E_\lambda = \{x \in E \mid u(x) = \lambda x\} = \operatorname{Ker}(u - \lambda \operatorname{Id})$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Si $f \circ f = f$ avec $f \neq 0$ et $f \neq \operatorname{Id}$ : $f \circ (f - \operatorname{Id}) = 0$, donc $\forall x,\ f\big(f(x) - x\big) = 0 = 0 \times \big(f(x) - x\big)$. Et comme $f \neq \operatorname{Id}$, $\exists x_0 \in E$ tel que $f(x_0) \neq x_0$ ; alors $y_0 = f(x_0) - x_0 \neq 0$ est un vecteur propre de valeur propre $0$.

</div>

## V. Espaces vectoriels de dimension finie

### I. Dimension

#### 1) Définitions

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit qu'un espace vectoriel $E$ est de **dimension finie** s'il existe une famille génératrice finie de $E$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $\mathbb{R}^n$ est engendré par sa base canonique ;
- $\mathbb{C}$ (vu comme $\mathbb{R}$-espace vectoriel) est engendré par $(1, i)$ ;
- $\mathbb{R}_n[X]$ est engendré par $(1, X, \dots, X^n)$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Si $E$ est de dimension finie, $E$ admet une base de cardinal fini ; de plus toute base de $E$ est de cardinal fini et ce cardinal est indépendant de la base choisie.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Ce cardinal est appelé **dimension** de $E$ et noté $\dim E$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $\dim \mathbb{R}^n = n$ ;
- $\dim \mathbb{R}_n[X] = n + 1$ car $(1, X, \dots, X^n)$ est une base.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (existence d'une base)</span>

Soit $\mathcal{G} = (x_i)_{i \in I}$ une famille génératrice finie de $E$. Soit $A = \{k \in \mathbb{N} \mid \text{une famille de } k \text{ vecteurs de } \mathcal{G} \text{ est génératrice}\}$. $A$ est une partie de $\mathbb{N}$, non vide ; soit $p$ son plus petit élément. Soit $\mathcal{B}$ une sous-famille de $\mathcal{G}$ de $p$ vecteurs génératrice : $\mathcal{B}$ est une famille génératrice minimale par définition de $p$, d'où $\mathcal{B}$ est une base et son cardinal est fini.

**Lemme.** Si $\mathcal{B}$ est une base de $n$ vecteurs et $\mathcal{F}$ une famille libre, alors $\mathcal{F}$ est de cardinal fini et $\operatorname{card} \mathcal{F} \leq n$. En effet, si $\mathcal{F}$ admettait au moins $n+1$ vecteurs, une sous-famille de $n+1$ vecteurs serait combinaison linéaire des $n$ vecteurs de la base, donc liée, donc $\mathcal{F}$ serait liée — absurde.

Si $\mathcal{B}'$ est une autre base de $E$, $\mathcal{B}'$ est une famille libre, donc $\mathcal{B}'$ est de cardinal fini et $\operatorname{card} \mathcal{B}' \leq \operatorname{card} \mathcal{B}$ ; de même $\operatorname{card} \mathcal{B} \leq \operatorname{card} \mathcal{B}'$. Donc $\operatorname{card} \mathcal{B} = \operatorname{card} \mathcal{B}'$.

</div>

#### 2) Propriétés des familles de vecteurs

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Une famille libre d'un espace vectoriel de dimension $n$ a au plus $n$ vecteurs (cf. lemme).

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Une famille libre de $n$ vecteurs est une base.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

On considère $(\mathcal{F}, x)$ avec $x \notin \mathcal{F}$ : on a $n+1$ vecteurs qui sont combinaisons linéaires des $n$ vecteurs d'une base $\mathcal{B}$ de $E$ (on sait qu'une telle base existe), donc $(\mathcal{F}, x)$ est liée ; donc $\mathcal{F}$ est libre maximale, c'est une base.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Si $(P_0, \dots, P_n)$ sont $n+1$ polynômes tels que $\deg P_i \leq i$, alors $(P_0, \dots, P_n)$ est une base de $\mathbb{R}_n[X]$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Une famille génératrice d'un espace vectoriel $E$ de dimension $n$ a au moins $n$ vecteurs.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Une famille génératrice de $n$ vecteurs (d'un espace vectoriel $E$ de dimension $n$) est une base.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $\mathcal{F}$ génératrice ; si $\mathcal{F}$ admet au plus $n-1$ vecteurs ($n \geq 1$), alors soit $\mathcal{B}$ une base de $E$ ($n$ vecteurs) : les $n$ vecteurs de cette base sont combinaisons linéaires des $n-1$ vecteurs de $\mathcal{F}$ (qui est génératrice), donc $\mathcal{B}$ est liée — impossible car $\mathcal{B}$ est une base. Donc $\mathcal{F}$ admet au moins $n$ vecteurs (si $n = 0$, $E = \{0\}$ et le théorème s'applique). Du corollaire : une famille génératrice de $n$ vecteurs est minimale (car une famille strictement à moins de $n$ vecteurs n'est pas génératrice), donc c'est une base.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème de la base incomplète</span>

Soit $E$ de dimension $n$, $\mathcal{B} = (e_1, \dots, e_n)$ une base de $E$, et $\mathcal{F}$ une famille libre de $E$ : alors on peut compléter $\mathcal{F}$ en une base de $E$ en puisant des vecteurs dans $\mathcal{B}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\mathcal{F} = (x_1, \dots, x_p)$ ; $\mathcal{F}$ libre donc $p \leq n$. Si $p = n$, $\mathcal{F}$ est une base. Supposons $p < n$. Il existe $i \in \{1, \dots, n\}$ tel que $e_i \notin \operatorname{Vect}(\mathcal{F})$ (sinon les vecteurs $e_i$ seraient combinaisons linéaires des $p$ vecteurs de $\mathcal{F}$, et formeraient une famille liée car $p < n$, ce qui est impossible car $\mathcal{B}$ est libre). Alors $(x_1, \dots, x_p, e_{p+1})$ est libre. Premier cas : $p+1 = n$, alors $\mathcal{F}'$ est une base. Deuxième cas : $p+1 < n$, il existe $j \in \mathcal{B}$ tel que $e_j \notin \operatorname{Vect}(\mathcal{F}')$ ; supposons que $e_j = e_{p+2}$ ; alors $(x_1, \dots, x_p, e_{p+1}, e_{p+2})$ est libre. Au bout de $n - p$ étapes, on a une famille $(x_1, \dots, x_p, e_{p+1}, e_{p+2}, \dots, e_{p+(n-p)})$ libre de $n$ vecteurs, donc c'est une base.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Dans $\mathbb{R}^4$, $\mathcal{B}$ base canonique. $\mathcal{F} = \big((1,0,1,0), (1,1,1,0)\big)$ est libre. $e_4 = (0,0,0,1) \notin \operatorname{Vect} \mathcal{F}$, donc $(\mathcal{F}, e_4)$ est libre.

$$\operatorname{Vect} \mathcal{F} = \{(a+b, b, a+b, 0) \mid a, b \in \mathbb{R}\} = \{(c, b, c, 0) \mid b, c \in \mathbb{R}\}$$

$V = \operatorname{Vect}(\mathcal{F}, e_4) = \{(c, b, c, d) \mid b, c, d \in \mathbb{R}\}$ ; $e_3 \notin V$ ; $(\mathcal{F}, e_3, e_4)$ est une base de $\mathbb{R}^4$.

</div>

### II. Sous-espaces en dimension finie

#### 1) Dimension

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $E$ est de dimension $n$ et $F$ un sous-espace vectoriel de $E$, alors $F$ est de dimension finie et $\dim F \leq n$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $\mathcal{G}$ une famille génératrice finie de $E$ ; les vecteurs de $\mathcal{G}$ qui appartiennent à $F$... plus précisément, $F$ admet une famille génératrice finie, d'où l'on extrait une famille génératrice minimale $\mathcal{B}$ de $F$ : $\mathcal{B}$ est une base de $F$, de cardinal fini $p$. Or $\mathcal{B}$ est une famille libre de $F$, donc de $E$ (car $F \subset E$), donc $p \leq n = \dim E$ par le lemme. Donc $F$ est de dimension finie $p$ avec $p \leq n$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

- un sous-espace vectoriel de dimension $1$ s'appelle une **droite vectorielle** (de la forme $\mathbb{K} x$, $x \neq 0$) ;
- de dimension $2$ : un **plan vectoriel** ;
- de dimension $n-1$ (si $\dim E = n$) : un **hyperplan vectoriel**.

</div>

#### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $F$ et $G$ sont deux sous-espaces vectoriels de $E$, $F \subset G$ et $\dim F = \dim G$, alors $F = G$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $\mathcal{B}$ une base de $F$, $F = \operatorname{Vect}(\mathcal{B})$ ; $\mathcal{B}$ est une famille de $p$ vecteurs ($\dim F = p$) libre de $F$, donc de $G$ ; or $\dim G = p$, donc $\mathcal{B}$ est une base de $G$, c'est-à-dire $\operatorname{Vect}(\mathcal{B}) = G$, d'où $F = G$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (formule de Grassmann)</span>

Si $E$ est de dimension finie et $F, G$ deux sous-espaces vectoriels de $E$ :

$$\dim(F + G) = \dim F + \dim G - \dim(F \cap G)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $\mathcal{B} = (e_1, \dots, e_n)$ une base de $F \cap G$. On complète $\mathcal{B}$ en une base de $F$ en puisant dans une base de $F$ ($p = \dim F$) : $\mathcal{F} = (e_1, \dots, e_n, f_{n+1}, \dots, f_p)$ ; de même on complète en une base de $G$ ($q = \dim G$) : $\mathcal{G} = (e_1, \dots, e_n, g_{n+1}, \dots, g_q)$. Posons $\Sigma = (e_1, \dots, e_n, f_{n+1}, \dots, f_p, g_{n+1}, \dots, g_q)$.

$\Sigma$ est génératrice de $F + G$ : si $x \in F + G$, $x$ s'écrit $x_F + x_G$ avec $x_F \in F$, $x_G \in G$, et $x_F$, $x_G$ sont combinaisons linéaires de vecteurs de $\mathcal{F}$ et $\mathcal{G}$ respectivement.

$\Sigma$ est libre : si $\sum_{i=1}^{n} \lambda_i e_i + \sum_{i=n+1}^{p} \lambda_i f_i + \sum_{i=n+1}^{q} \mu_i g_i = 0$, posons $x = -\sum_{i=1}^{n} \lambda_i e_i - \sum_{i=n+1}^{p} \lambda_i f_i \in F$ ; on a aussi $x = \sum_{i=n+1}^{q} \mu_i g_i \in G$, donc $x \in F \cap G$, donc $x = \sum_{i=1}^{n} \nu_i e_i = \sum_{i=n+1}^{q} \mu_i g_i$ ; la famille $(e_1, \dots, e_n, g_{n+1}, \dots, g_q)$ est libre (sous-famille d'une base de $G$), donc $\nu_i = 0$ et $\mu_i = 0$ pour $i > n$, d'où $x = 0$. Alors $\sum_{i=1}^{n} \lambda_i e_i + \sum_{i=n+1}^{p} \lambda_i f_i = 0$, et $(e_1, \dots, e_n, f_{n+1}, \dots, f_p)$ est une base de $F$, donc libre, donc $\forall i \leq n,\ \lambda_i = 0$. Ainsi $\Sigma$ est libre, c'est une base de $F + G$, et

$$\dim(F + G) = p + q - n = \dim F + \dim G - \dim(F \cap G)$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$\dim(F \oplus G) = \dim F + \dim G$$

</div>

#### 3) Dimension finie et supplémentaire

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $\dim E = n$ et $F$ est un sous-espace vectoriel de $E$, alors $F$ admet un supplémentaire.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $\mathcal{B} = (e_1, \dots, e_n)$ une base de $E$ et $\mathcal{F} = (f_1, \dots, f_p)$ une base de $F$. On complète $\mathcal{F}$ en une base de $E$ en puisant dans $\mathcal{B}$ : $\mathcal{B}' = (f_1, \dots, f_p, e_{p+1}, \dots, e_n)$ quitte à renuméroter. Soit $G = \operatorname{Vect}(e_{p+1}, \dots, e_n)$.

$F \cap G = \{0\}$ : si $x = \sum_{i \leq p} \lambda_i f_i = \sum_{i > p} \lambda_i e_i$, alors $\sum_{i \leq p} \lambda_i f_i - \sum_{i > p} \lambda_i e_i = 0$, et comme $\mathcal{B}'$ est libre, tous les coefficients sont nuls, donc $x = 0$.

$F + G = E$ : $\dim(F + G) = \dim F + \dim G = p + (n - p) = n = \dim E$, donc $F \oplus G = E$.

</div>

#### 4) Rang d'une famille de vecteurs

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $\mathcal{F}$ est une famille de vecteurs d'un espace vectoriel $E$ et si $\operatorname{Vect} \mathcal{F}$ est de dimension finie, on appelle **rang** de $\mathcal{F}$ la dimension de $\operatorname{Vect}(\mathcal{F})$ :

$$\operatorname{rg}(\mathcal{F}) = \dim\big(\operatorname{Vect}(\mathcal{F})\big)$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $\dim E = n$, $\operatorname{rg}$ est défini et $\operatorname{rg}(\mathcal{F}) \leq n$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Le rang de $\mathcal{F}$ est égal à l'ordre maximum des familles libres de $\mathcal{F}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $p = \operatorname{rg} \mathcal{F}$. Soit $A = \{k \in \mathbb{N} \mid \mathcal{F} \text{ contient une sous-famille libre de } k \text{ vecteurs}\}$. Si $p = 0$, $\operatorname{Vect} \mathcal{F} = \{0_E\}$, donc $\mathcal{F} = \varnothing$ ou $\mathcal{F} = \{0_E\}$, et $A = \{0\}$, $\max A = 0$. Si $p \geq 1$, $A$ contient $0$ et est majorée par $p$ : $\dim \operatorname{Vect} \mathcal{F} = p$, donc $\operatorname{Vect} \mathcal{F}$ admet une base de $p$ vecteurs et toute famille libre de $\operatorname{Vect} \mathcal{F}$ a au plus $p$ vecteurs. Soit le plus grand élément de $A$ : c'est $p$, car une base de $\operatorname{Vect} \mathcal{F}$ est une famille libre de $p$ vecteurs de $\mathcal{F}$. Donc $\operatorname{rg} \mathcal{F} = p = \max A$.

</div>

### III. Applications linéaires en dimension finie

#### 1) Rang d'une application linéaire

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $u \in \mathcal{L}(E, F)$ et si $\operatorname{Im} u$ est de dimension finie, on appelle **rang** de $u$ et on note $\operatorname{rg}(u)$ la dimension de $\operatorname{Im} u$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $\dim E = n$ ou $\dim F = p$, alors $\operatorname{rg}(u)$ est défini.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $\dim F = p$, $\operatorname{Im} u$ est un sous-espace vectoriel de $F$, donc $\dim \operatorname{Im} u$ est finie. Si $\dim E = n$, $\operatorname{Im} u$ est engendrée par l'image d'une base de $E$ : soit $\mathcal{B}$ une base (finie) de $E$, $\mathcal{B} = (e_1, \dots, e_n)$ ; $\operatorname{Im} u$ est engendrée par $(u(e_1), \dots, u(e_n))$, donc admet une famille génératrice finie, et on a $\operatorname{rg} u$ défini (car si $p = \operatorname{rg} u$, $u(\mathcal{B})$ est une famille génératrice de $\operatorname{Im} u$ de cardinal $n \geq p$).

</div>

#### 2) Isomorphisme et dimension

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $u$ est un isomorphisme de $E \to F$, si $\dim E = n$ (resp. $\dim F = n$), alors $\dim F = n$ (resp. $\dim E = n$).

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $\dim E = n$, soit $\mathcal{B}$ une base de $E$, $\mathcal{B} = (e_1, \dots, e_n)$ ; $u(\mathcal{B}) = (u(e_1), \dots, u(e_n))$ admet $n$ vecteurs distincts car $u$ est injective, donc $\dim F \geq n$. Si $\dim F = n$, en appliquant ce qui précède à $u^{-1}$, on a $\dim E = n$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $\dim E = \dim F = n$ et $u \in \mathcal{L}(E, F)$, on a les équivalences :

1. $u$ injective ;
2. $u$ bijective ;
3. $u$ surjective ;
4. $\operatorname{rg}(u) = n$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\dim \operatorname{Im} u = n \iff \operatorname{Im} u = F$ (car $\operatorname{Im} u \subset F$ et si $\dim \operatorname{Im} u = \dim F$ alors $\operatorname{Im} u = F$), donc $u$ est surjective si $\operatorname{rg} u = n$. Montrons que $1 \Rightarrow 2$ : si $u$ est injective, $\mathcal{B}$ base de $E$, $u(\mathcal{B})$ est une famille libre de $n$ vecteurs, or $\dim F = n$, donc $u(\mathcal{B})$ est une base de $F$, donc $u$ est bijective (image d'une base est une base). $2 \Rightarrow 3 \Rightarrow 4$ : OK. $4 \Rightarrow 1$ : on suppose $\operatorname{rg} u = n$ ; $u(\mathcal{B})$ est une famille génératrice de $F$ de $n$ vecteurs, $\dim F = n$, donc c'est une base.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

On a démontré (au passage) que si $F$ est de dimension finie, $u$ surjective $\Rightarrow \operatorname{rg} u = \dim F$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $G$ est un supplémentaire de $\operatorname{Ker} u$, alors $G$ est isomorphe à $\operatorname{Im} u$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $\dim E = n$, on connaît l'existence d'un tel supplémentaire. Soit $\varphi : G \to \operatorname{Im} u$, $x \mapsto u(x)$ ; $\varphi$ est linéaire. $\operatorname{Ker} \varphi = \operatorname{Ker} u \cap G = \{0_E\}$ car $G$ est supplémentaire de $\operatorname{Ker} u$. $\varphi$ est surjective : si $y \in \operatorname{Im} u$, $y = u(x)$ avec $x \in E$ ; or $x = x_1 + x_2$ avec $x_1 \in G$, $x_2 \in \operatorname{Ker} u$ ($E = G \oplus \operatorname{Ker} u$) ; $y = u(x_1) + u(x_2) = u(x_1)$ avec $x_1 \in G$, donc $\varphi$ est surjective.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème du rang</span>

Si $\dim E = n$, alors

$$n = \dim \operatorname{Ker} u + \operatorname{rg} u$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

En dimension finie, on connaît l'existence d'un supplémentaire fini de $\operatorname{Ker} u$ dans $E$ : $G$ isomorphe à $\operatorname{Im} u$, $\dim G = \operatorname{rg} u$, $E = G \oplus \operatorname{Ker} u$, donc $\dim E = n = \dim G + \dim \operatorname{Ker} u = \operatorname{rg} u + \dim \operatorname{Ker} u$.

</div>

#### 3) Application à l'étude des suites

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Application</span>

Soient $a \in \mathbb{C}$, $b \in \mathbb{C}^*$. Posons

$$E = \{(u_n)_n \in \mathbb{C}^{\mathbb{N}} \mid u_{n+2} = a u_{n+1} + b u_n,\ n \geq 0\}$$

- $E$ est un sous-espace vectoriel de $\mathbb{C}^{\mathbb{N}}$ : $(0) \in E$ ; si $(u_n), (v_n) \in E$ et $\lambda \in \mathbb{C}$, alors $(u_{n+2} + \lambda v_{n+2}) = a(u_{n+1} + \lambda v_{n+1}) + b(u_n + \lambda v_n)$.
- Soit $\varphi : E \to \mathbb{C}^2$, $(u_n)_n \mapsto (u_0, u_1)$.
  - $\varphi$ est linéaire ;
  - pour tout couple $(\alpha, \beta) \in \mathbb{C}^2$, il existe une unique suite $(u_n)$ de $E$ telle que $u_0 = \alpha$ et $u_1 = \beta$ ;
  - donc $\varphi$ est bijective : $\varphi$ est un isomorphisme, et $\dim E = 2$.

Cherchons une base de $E$. On cherche des solutions géométriques de $E$ : $(x^n)_n \in E \iff x^{n+2} = a x^{n+1} + b x^n$ pour $n \geq 0$ ; pour $x \neq 0$ : $x^2 = ax + b$ (équation (1), de discriminant $\Delta = a^2 + 4b$), qui admet 2 solutions $x_1$ et $x_2$.

- **1er cas** $\Delta \neq 0$ : (1) admet 2 solutions distinctes $x_1 \neq x_2$. Posons $(u_n) = (x_1^n)_n$, $(v_n) = (x_2^n)_n$. Si $\forall n,\ \lambda_1 x_1^n = \lambda_2 x_2^n$ : pour $n = 0$, $\lambda_1 = \lambda_2$ ; pour $n = 1$, $\lambda_1 x_1 = \lambda_2 x_2$, incompatible car $x_1 \neq x_2$. Donc $((u_n), (v_n))$ est libre, c'est une base ($\dim E = 2$). Pour tout $(u_n) \in E$, $u_n = \lambda_1 x_1^n + \lambda_2 x_2^n$ ; on détermine $\lambda_1, \lambda_2$ par 2 conditions (en $n = 0$ et $n = 1$).
- **2ème cas** $\Delta = 0$ : $x_1$ racine double. $(x_1^n)_n \in E$ et $(n x_1^n)_n \in E$ : en effet, avec $x_1 = \frac{a}{2}$,

$$(n+2) x_1^{n+2} = (n+2)(a x_1^{n+1} + b x_1^n) = a(n+1) x_1^{n+1} + \big(a x_1 + b(n+2)\big) x_1^n = a(n+1) x_1^{n+1} + nb\, x_1^n$$

$(x_1^n)$ et $(n x_1^n)$ sont non proportionnelles, donc forment une base, et

$$E = \big\{\big(\lambda x_1^n + \mu n x_1^n\big)_n \mid \lambda, \mu \in \mathbb{C}\big\}$$

Soit maintenant $a, b \in \mathbb{R}$, $b \neq 0$. $F = \{(u_n)_n \in \mathbb{R}^{\mathbb{N}} \mid u_{n+2} = a u_{n+1} + b u_n\}$ est un sous-espace vectoriel de $\mathbb{R}^{\mathbb{N}}$ (vu comme $\mathbb{R}$-espace vectoriel) de dimension $2$. $x^2 = ax + b$.

- si $\Delta > 0$ : $x_1$ et $x_2$ racines réelles distinctes, $F = \{(\lambda x_1^n + \mu x_2^n)_n \mid \lambda, \mu \in \mathbb{R}\}$ ;
- si $\Delta = 0$ : $x_1$ racine double, $F = \{((\lambda + n\mu) x_1^n)_n \mid \lambda, \mu \in \mathbb{R}\}$ ;
- si $\Delta < 0$ : $x_1, \overline{x_1} \in \mathbb{C} \setminus \mathbb{R}$ racines de (1). $E = \{(u_n)_n \in \mathbb{C}^{\mathbb{N}} \mid u_{n+2} = a u_{n+1} + b u_n\} = \{(\lambda x_1^n + \mu \overline{x_1}^n)_n \mid \lambda, \mu \in \mathbb{C}\}$. Posons $u_n = \dfrac{x_1^n + \overline{x_1}^n}{2}$ et $v_n = \dfrac{x_1^n - \overline{x_1}^n}{2i}$ : $x_1^n = u_n + i v_n$, $\overline{x_1}^n = u_n - i v_n$. Tout élément de $E$ est combinaison linéaire de $(x_1^n)_n$ et $(\overline{x_1}^n)_n$, donc de $(u_n)$ et $(v_n)$ : $E \subset \operatorname{Vect}((u_n), (v_n))$ et réciproquement $\operatorname{Vect}((u_n), (v_n)) \subset \operatorname{Vect}((x_1^n), (\overline{x_1}^n)) = E$. $((u_n), (v_n))$ est une base. $u_n = \mathrm{Re}(x_1^n)$ et $v_n = \mathrm{Im}(x_1^n)$ ; $(u_n)$ et $(v_n)$ sont des suites réelles. $\lambda (u_n)_n + \mu (v_n)_n \in \mathbb{R}^{\mathbb{N}} \iff \forall n,\ \overline{\lambda} u_n + \overline{\mu} v_n = \lambda u_n + \mu v_n \iff \overline{\lambda} = \lambda$ et $\overline{\mu} = \mu$ car $((u_n), (v_n))$ est libre. Donc

$$F = \{\lambda (u_n)_n + \mu (v_n)_n \mid \lambda, \mu \in \mathbb{R}\}$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">À retenir</span>

Pour $F = \{(u_n)_n \in \mathbb{R}^{\mathbb{N}} \mid u_{n+2} = a u_{n+1} + b u_n\}$ ($b \neq 0$), avec $x^2 - ax - b = 0$ de discriminant $\Delta$ :

- si $\Delta > 0$ : $F = \{\lambda x_1^n + \mu x_2^n \mid \lambda, \mu \in \mathbb{R}\}$ ;
- si $\Delta = 0$ : $F = \{(\lambda + n\mu) x_1^n \mid \lambda, \mu \in \mathbb{R}\}$ ;
- si $\Delta < 0$ et $x_1 = \rho e^{i\theta}$ solution de $x^2 - ax - b = 0$ : $F = \{(( \lambda \cos n\theta + \mu \sin n\theta) \rho^n)_n \mid \lambda, \mu \in \mathbb{R}\}$.

</div>

## VI. Étude d'applications linéaires particulières

### I. Isomorphismes

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $u \in \mathcal{L}(E, F)$ est bijective, alors $u^{-1} \in \mathcal{L}(F, E)$ et est bijective.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

On pose $v = u^{-1}$. Alors

$$v(x + \lambda y) = v\big(u(v(x)) + \lambda u(y)\big) = v\big(u(v(x) + \lambda v(y))\big) = (v \circ u)(v(x) + \lambda v(y)) = v(x) + \lambda v(y)$$

car $u$ est linéaire. Donc $v$ est linéaire.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Les automorphismes de $E$ forment un groupe pour $\circ$, appelé **groupe linéaire** (noté $\operatorname{GL}(E)$).

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Montrons que $\operatorname{GL}(E)$ est un sous-groupe de $\mathcal{G}(E)$ : $\operatorname{Id} \in \operatorname{GL}(E)$ ; la composée de 2 automorphismes est un automorphisme ; si $u$ est bijective et linéaire $E \to E$, alors $u^{-1}$ est bijective et linéaire $E \to E$.

</div>

### II. Projecteurs

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soient $E_1$ et $E_2$ deux sous-espaces vectoriels supplémentaires. Pour tout $x \in E$, $x$ s'écrit de manière unique $x = x_1 + x_2$ avec $x_i \in E_i$. L'application $p : E \to E$, $x \mapsto x_1$, est linéaire et s'appelle le **projecteur sur $E_1$ parallèlement à $E_2$**.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$p(x + \lambda y)$ : $x = x_1 + x_2$, $y = y_1 + y_2$ ; $\lambda y + x = (x_1 + \lambda y_1) + (x_2 + \lambda y_2)$ avec $x_1 + \lambda y_1 \in E_1$, $x_2 + \lambda y_2 \in E_2$ ; d'après l'unicité de la décomposition, $p(x + \lambda y) = x_1 + \lambda y_1 = p(x) + \lambda p(y)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$\operatorname{Ker} p = E_2$, $\operatorname{Im} p = E_1$, $p \circ p = p$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$p(x) = 0 \iff x = x_2 \iff x \in E_2$. Soit $y = p(x) \in E_1$ ; l'écriture $y = y + 0$ avec $y \in E_1$ donne $y_1 = p(x)$, $y_2 = 0$ ; donc $p \circ p(x) = p(y) = y_1 = y = p(x)$ pour tout $x$, d'où $p \circ p = p$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Si $q$ est le projecteur sur $E_2$ parallèlement à $E_1$, alors $p + q = \operatorname{Id}_E$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$p \in \mathcal{L}(E)$ est un projecteur si et seulement si $p \circ p = p$, et dans ce cas $p$ est le projecteur sur $\operatorname{Im} p$ parallèlement à $\operatorname{Ker} p$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

On a déjà vu que $\operatorname{Ker} p \cap \operatorname{Im} p = \{0\}$ : soit $x \in \operatorname{Ker} p \cap \operatorname{Im} p$, $x = p(y)$ avec $y \in E$ ; $p(x) = 0$, donc $p \circ p(y) = 0 = p(y) = x$ (car $p \circ p = p$). $\operatorname{Im} p$ et $\operatorname{Ker} p$ sont donc en somme directe, et $x = x - p(x) + p(x)$ avec $p(x - p(x)) = p(x) - p \circ p(x) = p(x) - p(x) = 0$, donc $E = \operatorname{Ker} p \oplus \operatorname{Im} p$. Soit $\tilde{p}$ la projection sur $\operatorname{Im} p$ parallèlement à $\operatorname{Ker} p$ ; la décomposition de $x$ selon $\operatorname{Im} p$ et $\operatorname{Ker} p$ est $x = p(x) + (x - p(x))$, donc $\tilde{p}(x) = p(x)$, d'où $p = \tilde{p}$ : $p$ est bien la projection sur $\operatorname{Im} p$ parallèlement à $\operatorname{Ker} p$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

En dimension finie, si $H$ et $G$ sont deux supplémentaires de $F$, alors ils sont isomorphes.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$F \oplus G = E$, $F \oplus H = E$. Soit $p$ la projection sur $G$ parallèlement à $F$ : $\operatorname{Ker} p = F$, $G = \operatorname{Im} p$. $H$ est un supplémentaire de $\operatorname{Ker} p$, donc $H$ est isomorphe à $\operatorname{Im} p$, c'est-à-dire à $G$.

</div>

### III. Symétries

#### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soient $E_1$ et $E_2$ deux sous-espaces vectoriels supplémentaires. L'application $E \to E$, $x \mapsto x_1 - x_2$ (où $x = x_1 + x_2$, $x_i \in E_i$), s'appelle la **symétrie par rapport à $E_1$ de direction $E_2$** ; c'est une application linéaire $s = p - q$ (où $p$, $q$ sont les projecteurs associés).

</div>

#### 2) Propriétés

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$s^2 = \operatorname{Id}$, $\operatorname{Ker}(s - \operatorname{Id}) = E_1$, $\operatorname{Ker}(s + \operatorname{Id}) = E_2$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$s^2 = (p - q) \circ (p - q) = p^2 - q \circ p - p \circ q + q^2 = p + q - p \circ q - q \circ p$ ; or $\operatorname{Ker} p = E_2 = \operatorname{Im} q$ donc $p \circ q = 0$, et $\operatorname{Ker} q = E_1 = \operatorname{Im} p$ donc $q \circ p = 0$ ; donc $s^2 = p + q = \operatorname{Id}$.

$x \in \operatorname{Ker}(s - \operatorname{Id}) \iff s(x) = x \iff x_1 - x_2 = x_1 + x_2 \iff x_2 = 0 \iff x \in E_1$. De même $x \in \operatorname{Ker}(s + \operatorname{Id}) \iff x_1 = 0 \iff x \in E_2$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $s \in \mathcal{L}(E)$, $s$ est une symétrie si et seulement si $s^2 = \operatorname{Id}$, et dans ce cas $s$ est la symétrie par rapport à $\operatorname{Ker}(s - \operatorname{Id})$, de direction $\operatorname{Ker}(s + \operatorname{Id})$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $x \in \operatorname{Ker}(s - \operatorname{Id}) \cap \operatorname{Ker}(s + \operatorname{Id})$, alors $s(x) = x = -x$, donc $2x = 0_E$ et $x = 0_E$ (car $\mathbb{K}$ est de caractéristique $\neq 2$) : la somme est directe. $\operatorname{Ker}(s - \operatorname{Id}) \oplus \operatorname{Ker}(s + \operatorname{Id}) = E$ : pour $x \in E$,

$$x = \frac{s(x) + x}{2} + \frac{x - s(x)}{2} = x_1 + x_2$$

avec $s(x_1) = \frac{1}{2}(s^2(x) + s(x)) = x_1$, donc $x_1 \in \operatorname{Ker}(s - \operatorname{Id})$, et $s(x_2) = \frac{1}{2}(s(x) - s^2(x)) = -x_2$, donc $x_2 \in \operatorname{Ker}(s + \operatorname{Id})$.

Soit $\tilde{s}$ la symétrie par rapport à $E_1 = \operatorname{Ker}(s - \operatorname{Id})$ de direction $E_2 = \operatorname{Ker}(s + \operatorname{Id})$. D'après ce qui précède, tout $x \in E$ s'écrit de manière unique $x = x_1 + x_2$ avec $x_i \in E_i$, et $\tilde{s}(x) = x_1 - x_2 = \frac{x + s(x)}{2} - \frac{x - s(x)}{2} = s(x)$ pour tout $x \in E$, donc $\tilde{s} = s$ : $s$ est une symétrie.

</div>

### 4) Homothéties

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Une **homothétie** est une application de $E \to E$ de la forme $\lambda \operatorname{Id}$, avec $\lambda \in \mathbb{K}^*$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Les homothéties forment un sous-groupe de $\operatorname{GL}(E)$.

</div>

### 5) Formes linéaires

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Une **forme linéaire** est un élément de $\mathcal{L}_{\mathbb{K}}(E, \mathbb{K})$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Pour $a = (a_1, \dots, a_n) \in \mathbb{K}^n$, l'application $a^* : \mathbb{K}^n \to \mathbb{K}$, $x \mapsto \sum_{i=1}^{n} a_i x_i$, est une forme linéaire.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On note $E^* = \mathcal{L}_{\mathbb{K}}(E, \mathbb{K})$ et on l'appelle **dual** de $E$.

</div>

##### II. Propriétés en dimension finie

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$u^* : \mathbb{R}^3 \to \mathbb{R}$, $(x, y, z) \mapsto 2x + y + z$ est une forme linéaire, et

$$\operatorname{Ker} u^* = \{(x, y, z) \mid 2x + y + z = 0\}$$

est un hyperplan vectoriel de base $\big((1, 0, -2), (0, 1, -1)\big)$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$H$ sous-espace vectoriel de $E$ : $H$ est un hyperplan de $E$ si et seulement si $\exists u^* \in E^*$ non nulle telle que $H = \operatorname{Ker} u^*$, $u^* \neq 0$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$\Rightarrow$ Si $H = \operatorname{Ker} u^*$ avec $u^* \neq 0$ : $\dim H = \dim \operatorname{Ker} u^* = n - \operatorname{rg} u^*$. Or $\operatorname{Im} u^* \subset \mathbb{K}$, donc $\operatorname{rg} u^* \leq 1$ ; si $\operatorname{rg} u^* = 0$, $\operatorname{Im} u^* = \{0\}$ et $u^* = 0$, impossible. Donc $\operatorname{rg} u^* = 1$ et $\dim H = n - 1$ : $H$ est un hyperplan.

$\Leftarrow$ Soit $H$ un hyperplan : soit $\mathcal{B} = (e_1, \dots, e_{n-1})$ une base de $H$ ($\dim H = n - 1$). Complétons $\mathcal{B}$ en une base de $E$ : $(e_1, \dots, e_n)$. Définissons $u^*$ par $u^*(e_i) = 0$ pour $i = 1, \dots, n-1$ et $u^*(e_n) = 1$. J'ai déterminé l'image d'une base, donc une forme linéaire $u^*$. Alors

$$\operatorname{Ker} u^* = \Big\{x = \sum_{i=1}^{n} \lambda_i e_i \mid u^*(x) = 0\Big\} = \Big\{\sum_{i=1}^{n-1} \lambda_i e_i \mid \lambda_n = 0\Big\} = \operatorname{Vect}(e_1, \dots, e_{n-1}) = H$$

et $u^*(e_n) = 1$, donc $u^* \neq 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $H$ est un hyperplan, $\operatorname{Ker} u^* = \operatorname{Ker} v^* = H$, alors $u^* = \lambda v^*$ avec $\lambda \in \mathbb{K}^*$ ($u^*$ et $v^*$ forment une droite non nulle).

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $e_n \in E \setminus H$ ; soit $e_n^*$ la forme linéaire définie en posant $e_n^*(e_i) = 0$ pour $i = 1, \dots, n-1$ et $e_n^*(e_n) = 1$ : $x = \sum x_i e_i \mapsto x_n$. Soit $u^* \in E^*$, $u^* \neq 0$, avec $\operatorname{Ker} u^* = H$. Alors $u^*(e_i) = \lambda e_n^*(e_i) = 0$ pour $i = 1, \dots, n-1$ ($(e_1, \dots, e_{n-1})$ est une base de $H$, donc $u^*$ nulle sur $H$) ; et $u^*(e_n) = \lambda e_n^*(e_n)$ avec $\lambda \in \mathbb{K}$. Si $\lambda = 0$, alors $\forall i,\ u^*(e_i) = 0$ et $u^* = 0$, impossible. Donc $\lambda \neq 0$, et $u^*$ et $\lambda e_n^*$ coïncident sur $e_1, \dots, e_n$, donc sur $E$ (par linéarité) : $u^* = \lambda e_n^*$. Ainsi toute forme linéaire non nulle de noyau $H$ est de la forme $\lambda e_n^*$, $\lambda \in \mathbb{K}^*$.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque (équations d'hyperplan)</span>

On appelle **équation d'un hyperplan** une équation du type $u^*(x) = 0$ avec $H = \operatorname{Ker} u^*$ ; une telle équation est définie à une constante multiplicative non nulle près.

</div>

## VII. Sous-espaces affines d'un espace vectoriel

### I. Définition et thèmes

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $A$ une partie de $E$. $A$ est un **sous-espace affine** de $E$ si

$$\forall (x_i)_{i \in I} \in A^I,\ \forall (\lambda_i)_{i \in I} \in \mathbb{K}^I,\quad \sum_{i \in I} \lambda_i = 1 \ \Rightarrow\ \sum_{i \in I} \lambda_i x_i \in A$$

(autrement dit, $A$ est stable par barycentre).

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemples</span>

- $\varnothing$ est un sous-espace affine ;
- si $H$ est un sous-espace vectoriel et $x_0 \in E$, alors $x_0 + H$ est un sous-espace affine : si $\lambda + \mu = 1$,

$$\lambda(x_0 + k x_1) + \mu(x_0 + k' x_1) = (\lambda + \mu) x_0 + (\lambda k + \mu k') x_1 = x_0 + k'' x_1 \in A$$

- $A = \{(u_n)_n \in \mathbb{R}^{\mathbb{N}} \mid u_{n+1} = 2u_n + a\}$, $a \in \mathbb{R}$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Soit $A$ un sous-espace affine non vide et $x_0 \in A$. $E_0 = \{x - x_0 \mid x \in A\}$ est un sous-espace vectoriel de $E$, indépendant du choix de $x_0$, appelé **espace directeur** de $A$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $x_1 \in A$, $E_1 = \{x - x_1 \mid x \in A\}$. Si $y = x - x_0 \in E_0$ (avec $x \in A$), alors $x - x_0 + x_1 = 1 \cdot x + (-1) \cdot x_0 + 1 \cdot x_1 \in A$ (barycentre, car $1 - 1 + 1 = 1$), donc $y = (x - x_0 + x_1) - x_1 \in E_1$ : ainsi $E_0 \subset E_1$. En échangeant les rôles de $x_1$ et $x_0$, on a de même $E_1 \subset E_0$ ; donc $E_0 = E_1$ : l'espace directeur ne dépend pas du choix de $x_0$.

Montrons que $E_0$ est un sous-espace vectoriel : soient $x, y \in A$ et $\lambda \in \mathbb{K}$ ; $\lambda(x - x_0) + (y - x_0) = \lambda x + (1 - \lambda) y - x_0$, et $\lambda x + (1 - \lambda) y \in A$ (barycentre, car $\lambda + (1 - \lambda) = 1$), donc $\lambda(x - x_0) + (y - x_0) \in E_0$. Donc $E_0$ est un sous-espace vectoriel.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $A$ est non vide, son espace directeur est $E_0 = \{x - y \mid x, y \in A\}$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $x_0 \in A$ ; l'espace directeur de $A$ est $E_0 = \{x - x_0 \mid x \in A\}$. Posons $F = \{x - y \mid x, y \in A\}$. $E_0 \subset F$ (prendre $y = x_0$). Réciproquement, si $z \in F$, $z = x - y$ avec $x, y \in A$, alors $z = (x - x_0) - (y - x_0) \in E_0$ car $E_0$ est un sous-espace vectoriel. Donc $F = E_0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Soit $V$ un sous-espace vectoriel de $E$ et $x_0 \in E$ : il existe un unique sous-espace affine contenant $x_0$ d'espace directeur $V$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Si $A$ existe, d'après ce qui précède $V = \{x - x_0 \mid x \in A\}$, donc $A = \{x_0 + y \mid y \in V\}$ : unicité. Réciproquement, posons $A = x_0 + V$. $x_0 \in A$ (car $0 \in V$). Soit $(x_i)_{i \in I}$ une famille de vecteurs de $A$ et $(\lambda_i)_{i \in I}$ une famille de scalaires telle que $\sum \lambda_i = 1$. $x_i \in A$, donc $x_i = x_0 + y_i$ avec $y_i \in V$. Alors

$$\sum_{i \in I} \lambda_i x_i = x_0 + \sum_{i \in I} \lambda_i y_i \in A$$

car $\sum \lambda_i y_i \in V$ ($V$ est un sous-espace vectoriel). Donc $A$ est un sous-espace affine non vide, de sous-espace directeur $\{x - x_0 \mid x \in A\} = V$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$V = \{(u_n)_n \in \mathbb{R}^{\mathbb{N}} \mid u_{n+1} = u_n + u_{n-1},\ n \geq 1\}$ est un sous-espace vectoriel de $\mathbb{R}^{\mathbb{N}}$ ; pour $x_0 = (1/n)_n$, $A = x_0 + V$ est l'unique sous-espace affine contenant $x_0$ de direction $V$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Soient $A_1$ et $A_2$ deux sous-espaces affines, $A_1 \cap A_2 \neq \varnothing$ : alors $A_1 \cap A_2$ est un sous-espace affine ; de plus si $x \in A_1 \cap A_2$, alors $V_1 \cap V_2$ est son espace directeur, où $V_i$ est l'espace directeur de $A_i$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $(x_i)_{i \in I} \in (A_1 \cap A_2)^I$ et $(\lambda_i)_{i \in I} \in \mathbb{K}^I$ avec $\sum \lambda_i = 1$. $x = \sum \lambda_i x_i$ : comme $(x_i) \in A_1^I$ et $\sum \lambda_i = 1$ et $A_1$ est un sous-espace affine, $x \in A_1$ ; de même $x \in A_2$. Donc $x \in A_1 \cap A_2$.

Supposons $A_1 \cap A_2 \neq \varnothing$ ; soient $V_1$, $V_2$ les espaces directeurs de $A_1$, $A_2$. Soit $x_0 \in A_1 \cap A_2$ : $A_1 = x_0 + V_1$, $A_2 = x_0 + V_2$. Soit $V$ l'espace directeur de $A_1 \cap A_2$ :

$$V = \{x - x_0 \mid x \in A_1 \cap A_2\} = \{x - x_0 \mid (x - x_0) \in V_1 \text{ et } (x - x_0) \in V_2\} = V_1 \cap V_2$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $V_1$ et $V_2$ sont deux sous-espaces vectoriels supplémentaires, alors $A_1 \cap A_2$ est un singleton.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$A_1 \neq \varnothing$ (de même $A_2$) ; soient $x_1 \in A_1$, $x_2 \in A_2$. $x_1 - x_2 \in E = V_1 \oplus V_2$, donc $x_1 - x_2 = y_1 + y_2$ avec $y_1 \in V_1$, $y_2 \in V_2$. Alors $y = x_1 - y_1 = x_2 + y_2 \in A_1 \cap A_2$ (car $x_1 + V_1 = A_1$, $x_2 + V_2 = A_2$). D'après la propriété précédente, $A_1 \cap A_2$ admet pour espace directeur $V_1 \cap V_2 = \{0\}$ ; donc $A_1 \cap A_2 = \{y\} + \{0\} = \{y\}$.

</div>

### II. Dimension d'un sous-espace affine

#### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Si $A$ est un sous-espace affine non vide et si $V$ son espace directeur est de dimension finie $n$, on dit que $A$ est un sous-espace affine de dimension $n$ : droite affine, plan affine, hyperplan affine.

</div>

#### 2) Hyperplans affines

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

Dans $\mathbb{R}^3$, $H = \{(x, y, z) \mid x + y + z = a\}$ est un hyperplan affine, de direction l'hyperplan vectoriel $x + y + z = 0$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

L'équation d'un hyperplan affine est $u^*(x) = a$ avec $a \in \mathbb{K}$, et cette équation est unique à une constante multiplicative près.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

**Lemme.** Si $u^*$ est une forme linéaire et $a \in \mathbb{K}$, soit $A = \{x \in E \mid u^*(x) = a\}$. Si $u^* = 0$ : si $a = 0$, $A = E$ ; si $a \neq 0$, $A = \varnothing$. Si $u^* \neq 0$ : d'abord $A \neq \varnothing$ car $\operatorname{rg} u^* = 1$, $\operatorname{Im} u^* = \mathbb{K}$, donc $\exists b \in E$ tel que $u^*(b) = a$ ; alors

$$A = \{x \in E \mid u^*(x) = u^*(b)\} = \{x \in E \mid x - b \in \operatorname{Ker} u^*\} = b + \operatorname{Ker} u^*$$

sea affine de direction $\operatorname{Ker} u^*$. Si $\dim E = n$ et $u^* \neq 0$ : $A = \{x \in E \mid u^*(x) = a\}$ est un sous-espace affine de direction l'hyperplan vectoriel $\operatorname{Ker} u^*$, d'équation $u^*(x) = 0$. Donc $A$ est un hyperplan affine.

Réciproque : si $A$ est un hyperplan affine, $A = b + H$ avec $H$ hyperplan vectoriel. $H$ admet une équation $u^*(x) = 0$, $u^* \in E^*$, $u^* \neq 0$. Alors $x \in A \iff x - b \in H \iff u^*(x - b) = 0 \iff u^*(x) = u^*(b)$. Donc $A$ admet une équation $u^*(x) = a$ avec $a = u^*(b)$.

</div>

### III. Exemples importants

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple 1</span>

Soit $u \in \mathcal{L}(E, F)$, $y \in F$, $A_y = \{x \in E \mid u(x) = y\}$. Si $y \notin \operatorname{Im} u$, $A_y = \varnothing$. Si $y \in \operatorname{Im} u$ : $y = u(x_0)$, alors $A_y = \{x \in E \mid u(x) = u(x_0)\} = x_0 + \operatorname{Ker} u$. $A_y$ est le sous-espace affine contenant $x_0$ d'espace directeur $\operatorname{Ker} u$.

**Conclusion** : si $u \in \mathcal{L}(E, F)$ et $y \in F$, alors $A = \{x \in E \mid u(x) = y\}$ est soit vide (si $y \notin \operatorname{Im} u$), soit c'est un sous-espace affine de direction $\operatorname{Ker} u$.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple 2</span>

$A = \{(u_n)_n \in \mathbb{C}^{\mathbb{N}} \mid u_{n+2} = a u_{n+1} + b u_n + c\}$. Soient $u^0, u^1, \dots, u^k \in A$ et $\lambda_0, \dots, \lambda_k \in \mathbb{K}$ tels que $\sum_{i=0}^{k} \lambda_i = 1$. Alors

$$\Big(\sum_{i=0}^{k} \lambda_i u^i\Big)_{n+2} = \sum_{i=0}^{k} \lambda_i u^i_{n+2} = \sum_{i=0}^{k} \lambda_i \big(a u^i_{n+1} + b u^i_n + c\big) = a\Big(\sum_{i=0}^{k} \lambda_i u^i\Big)_{n+1} + b\Big(\sum_{i=0}^{k} \lambda_i u^i\Big)_n + c$$

donc $\big(\sum_{i=0}^{k} \lambda_i u^i\big) \in A$ : $A$ est un sous-espace affine.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple 2 (suite) — espace directeur et direction</span>

$V = \{(u_n - u^0_n)_n \mid (u_n), (u^0_n) \in A\} = \{(v_n)_n \mid v_{n+2} = a v_{n+1} + b v_n\}$ : c'est un sous-espace vectoriel de dimension $2$ ($b \neq 0$), c'est l'espace directeur de $A$.

Cherchons un élément de $A$, suite constante : $(u_n) = (u)_n \in A$ ssi $u = au + bu + c$, c'est-à-dire $u(1 - a - b) = c$.

- **1er cas** : $c = 0$, la suite nulle est dans $A$ ; $A = V$.
- **2ème cas** : $c \neq 0$ et $a + b \neq 1$ : la suite constante $\big(\frac{c}{1-a-b}\big)_n \in A$ ; $A = \big(\frac{c}{1-a-b}\big)_n + V$.
- **3ème cas** : $a + b = 1$, $c \neq 0$. Cherchons une solution de la forme $(xn)_n$ : $(n+2)x = a(n+1)x + bnx + c \iff x\big(n + 2 - a(n+1) - bn\big) = c \iff x(2 - a) = c$ (car $a + b = 1$).
  - si $2 \neq a$ : $x = \frac{c}{2-a}$, $(nx)_n \in A$ ; $A = \big(\frac{c}{2-a} n\big)_n + V$ ;
  - si $2 = a$, $b = -1$ : cherchons $x$ tel que $(xn^2)_n \in A$ : $(n+2)^2 x = a(n+1)^2 x - n^2 x + c \iff 2nx = c \iff x = \frac{c}{2}$. Alors $A = \big(\frac{c}{2} n^2\big)_n + V$ ($a = 2$, $b = -1$, $c \neq 0$).

</div>

### Complément

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit qu'un sous-espace affine $A \neq \varnothing$ est **parallèle** à un sous-espace affine $A' \neq \varnothing$ si $V$, l'espace directeur de $A$, est inclus dans $V'$, sous-espace directeur de $A'$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $A$ et $A'$, deux sous-espaces affines non vides, sont **parallèles** si leurs espaces directeurs sont égaux.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Tout plan qui contient $D$ a une équation de la forme $\alpha(x + y + z) + \beta(z - 2) = 0$, où $D : \{x + y + z = 2,\ z = 0\}$.

</div>

## VIII. Exercices — feuille n° 17

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 17 — Espaces vectoriels (énoncés)</span>

**Structure d'espace vectoriel, sous-espaces.**

<ol class="enonces">
<li>Soit $E = \mathbb{R}_+^* \times \mathbb{R}$ muni des lois $+$ et $\cdot$ définies ci-dessous. Montrer que $(E, +, \cdot)$ est un $\mathbb{R}$-espace vectoriel.
$$(a, b) + (c, d) = (ac, b + d) \qquad \lambda(a, b) = (a^\lambda, \lambda b)$$</li>
<li>Dans $\mathbb{R}^3$ muni des lois usuelles, les ensembles suivants sont-ils des sous-espaces vectoriels ?
$A = \{x + 2y + 3z \mid (x, y, z) \in \mathbb{R}^3\}$, $B = \{(x, y, z) \mid x^2 + y^2 + z^2 = 1\}$, $C = \{(x, y, z) \mid x \geq 0\}$.</li>
<li>Soit $E = \mathbb{R}^n$ muni des lois usuelles. Les ensembles suivants sont-ils des sous-espaces vectoriels ?
$A = \{(x_1, \dots, x_n) \mid x_1 = x_n = 0\}$, $B = \{(x_1, \dots, x_n) \mid x_1 = 0 \text{ ou } x_2 = 0\}$, $C = \{(x_1, \dots, x_n) \mid x_1 = 0\}$.</li>
<li>Soit $E = \mathbb{R}^{\mathbb{R}}$. Les ensembles suivants sont-ils des sous-espaces de $E$ ?
$A = \{\text{trinômes du second degré}\}$, $B = \{f \mid f(1) = 2f(0)\}$, $C = \{f \mid f(1) - f(0) = 1\}$, $D = \{f \mid \forall x \in \mathbb{R},\ f(1 - x) = f(x)\}$, $E = \{f \mid f \text{ bornée sur } \mathbb{R}\}$, $F = \{f \mid f \text{ est } \mathcal{C}^\infty \text{ sur } \mathbb{R}\}$, $G = \{f \mid f \text{ tend vers } 0 \text{ en } +\infty\}$, $H = \{f \mid f \text{ continue par morceaux sur } \mathbb{R}\}$.</li>
<li>Soit $A$, $B$, $C$ trois sous-espaces d'un $\mathbb{K}$-espace vectoriel $E$ tels que $A \cap B = A \cap C$, $A + B = A + C$ et $B \subset C$. Montrer que $B = C$.</li>
<li>Soit $A$, $B$, $C$ trois sous-espaces d'un $\mathbb{K}$-espace vectoriel $E$. Montrer l'équivalence :
$$\{A \cap B = \{0\},\ (A + B) \cap C = \{0\}\} \iff \{A \cap C = \{0\},\ (A + C) \cap B = \{0\}\}$$</li>
<li>Montrer que dans $\mathbb{R}^3$, $\operatorname{Vect}\big((1, 2, 3), (2, -1, 1)\big) = \operatorname{Vect}\big((1, 0, 1), (0, 1, 1)\big)$.</li>
<li>Soit $E$ un $\mathbb{K}$-ev, $A$ et $B$ deux parties non vides de $E$. Comparer :
$\operatorname{Vect}(A \cap B)$ et $\operatorname{Vect}(A) \cap \operatorname{Vect}(B)$ ;
$\operatorname{Vect}(A \cup B)$ et $\operatorname{Vect}(A) \cup \operatorname{Vect}(B)$ ;
$\operatorname{Vect}(\operatorname{Vect}(A))$ et $\operatorname{Vect}(A)$.</li>
</ol>

**Familles de vecteurs.**

<ol class="enonces">
<li value="9">La famille formée des 4 vecteurs de $\mathbb{R}^4$ ci-dessous est-elle libre ?
$a = (1, 1, 1, 1)$, $b = (0, 1, 2, -1)$, $c = (1, 0, 1, -2)$, $d = (2, 1, 0, -1)$.</li>
<li value="10">Dans $\mathbb{R}^3$, pour quelles valeurs de $m$ les trois vecteurs $a = (1, 1, m)$, $b = (1, m, 1)$ et $c = (m, 1, 1)$ forment-ils une famille liée ?</li>
<li value="11">On considère $\mathbb{R}$ comme un $\mathbb{Q}$-espace vectoriel. Les familles suivantes de $\mathbb{R}$ sont-elles libres ?
<ol>
<li>$(1, \sqrt{2}, \sqrt{3})$ ;</li>
<li>$(1, \sqrt[3]{2}, \sqrt[3]{3})$.</li>
</ol>
</li>
<li value="12">Montrer que dans $\mathbb{R}^{\mathbb{R}}$, les trois fonctions suivantes forment une famille libre : $f(x) = e^x$, $g(x) = x$, $h(x) = \sin(x)$.</li>
<li value="13">Montrer que dans $\mathbb{R}^{\mathbb{R}}$, la famille suivante de fonctions est libre : $F = (f_a)_{a \in \mathbb{R}}$ avec $f_a(x) = e^{ax}$.</li>
<li value="14">Montrer que dans $E = \mathbb{R}^{\mathbb{R}}$, pour tout $(p, q) \in \mathbb{R}^2$, la famille $(f, g, h)$ avec $f(x) = \sin(x)$, $g(x) = \cos(p + x)$ et $h(x) = \sin(x + q)$ est liée.</li>
<li value="15">Soit $E = \mathbb{R}^{\mathbb{N}}$ l'ensemble des suites réelles. Soit $S_x = (x^n)_{n \in \mathbb{N}}$ pour $x$ réel. Montrer que $(S_x)_{x > 0}$ est une famille libre de $E$.</li>
<li value="16">Soit $V$ la partie de $\mathbb{R}^4$ définie par $V = \{(x_1, x_2, x_3, x_4) \in \mathbb{R}^4 \mid x_1 = x_2 - 2x_3 \text{ et } x_3 = 2x_4\}$. Montrer que $V$ est un sous-espace vectoriel de $E$ et trouver une base de $V$.</li>
</ol>

**Applications linéaires.**

<ol class="enonces">
<li value="17">Soit $E = \mathcal{C}^\infty(\mathbb{R}^*)$, l'ensemble des fonctions $\mathcal{C}^\infty$ sur $\mathbb{R}^*$. Montrer que $T : f \mapsto f''$ est un endomorphisme de $E$ et déterminer son noyau.</li>
<li value="18">Dire si les applications suivantes sont linéaires et si oui déterminer leur noyau et leur image.
<ol>
<li>$f : \mathbb{R}[X] \to \mathbb{R}$, $P \mapsto P(0)$ ;</li>
<li>$g : \mathbb{R}[X] \to \mathbb{R}[X]$, $P \mapsto P'$ ;</li>
<li>$h : \mathbb{R}[X] \to \mathbb{R}[X]$, $P \mapsto P^2(1)$ ;</li>
<li>$t : \mathbb{R}[X] \to \mathbb{R}[X]$, $P \mapsto P(X + 1)$ ;</li>
<li>$s : \mathbb{R}[X] \to \mathbb{R}[X]$, $P \mapsto P - X^2 P''$.</li>
</ol>
</li>
<li value="19">Soit $E$ un $\mathbb{R}$-ev et $f \in \mathcal{L}(E)$ telle que $f \circ f = f$ (donner des exemples). Montrer que $\operatorname{Ker} f$ et $\operatorname{Im} f$ sont supplémentaires.</li>
<li value="20">Soit $f$ un endomorphisme d'un espace vectoriel $E$, tel que $f^2 = f^4$. Montrer que $E = \operatorname{Ker}(f^2) \oplus \operatorname{Ker}(f - \operatorname{Id}) \oplus \operatorname{Ker}(f + \operatorname{Id})$.</li>
<li value="21">Soit $E$ un $\mathbb{R}$-ev et $f \in \mathcal{L}(E)$ telle que $\forall x \in E,\ \exists \lambda_x \in \mathbb{R},\ f(x) = \lambda_x x$. Montrer que $f$ est une homothétie.</li>
<li value="22">Soit $p$ et $q$ deux projecteurs d'un $\mathbb{R}$-ev $E$.
<ol>
<li>Montrer que $p + q$ est un projecteur si et seulement si $p \circ q = q \circ p = 0$ ;</li>
<li>On suppose que $p + q$ est un projecteur. Montrer que :
$$\operatorname{Im}(p + q) = \operatorname{Im}(p) \oplus \operatorname{Im}(q) \qquad \operatorname{Ker}(p + q) = \operatorname{Ker}(p) \cap \operatorname{Ker}(q)$$</li>
</ol>
</li>
<li value="23">Soit $p$ et $q$ deux projecteurs d'un $\mathbb{R}$-ev $E$ tels que $p \circ q = q \circ p$.
<ol>
<li>Montrer que $p \circ q$ est un projecteur.</li>
<li>Montrer que :
$$\operatorname{Im}(p \circ q) = \operatorname{Im}(p) \cap \operatorname{Im}(q) \qquad \operatorname{Ker}(p \circ q) = \operatorname{Ker}(p) + \operatorname{Ker}(q)$$</li>
</ol>
</li>
<li value="24">Soit $E$ l'ensemble des fonctions $\mathcal{C}^\infty$ et $2\pi$-périodiques sur $\mathbb{R}$. Montrer que $E$ est un $\mathbb{R}$-espace vectoriel et que $T : f \mapsto f'$ est un endomorphisme de $E$. Montrer que $\operatorname{Ker} T$ et $\operatorname{Im} T$ sont supplémentaires.</li>
</ol>

</div>

## IX. Exercices supplémentaires

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Espaces vectoriels — Exercices supplémentaires (énoncés)</span>

<ol class="enonces">
<li>Soit $E = \mathbb{R}^3$ et $u \in \mathcal{L}(E)$ telle que $u^2 = 0$ et $u \neq 0$.
<ol>
<li>Déterminer les dimensions de $\operatorname{Im} u$ et $\operatorname{Ker} u$.</li>
<li>Montrer qu'il existe une base $(e_1, e_2, e_3)$ de $E$ telle que $u(e_1) = u(e_2) = 0$ et $u(e_3) = e_1$.</li>
</ol>
</li>
<li>Soit $u \in \mathcal{L}(\mathbb{R}^3)$ définie par
$$u(e_1) = \frac{2}{3}(e_1 + e_2 - e_3) \qquad u(e_2) = \frac{1}{3}(-e_1 - e_2 + e_3) \qquad u(e_3) = 2e_3$$
Déterminer les valeurs propres de $u$ et les sous-espaces propres associés.</li>
<li>Montrer que $|\operatorname{rg} f - \operatorname{rg} g| \leq \operatorname{rg}(f \circ g) \leq \operatorname{rg}(f) + \operatorname{rg}(g)$. En déduire $\operatorname{rg} f + \operatorname{rg} g \leq n$ si $f \circ g = 0$, et $\operatorname{rg} f + \operatorname{rg} g \geq n$ si $f \circ g$ est inversible.</li>
<li>Soit $f \in \mathcal{L}(E)$. On suppose que $(\forall x \in E,\ \exists q \in \mathbb{N} \mid f^q(x) = 0)$. Montrer qu'il existe $p \in \mathbb{N}$ tel que $f^p = 0$.</li>
<li>Soit $E$ de dimension $2$. Caractériser les endomorphismes de $E$ dont l'image et le noyau ne sont pas en somme directe.</li>
<li>Soit $u \in \mathcal{L}(E)$ telle que $\exists p \in \mathbb{N},\ u^p = 0$. Montrer que $u^n = 0$ (où $n = \dim E$). (On pourra supposer $u^{n-1}(x) \neq 0$ et étudier $(x, u(x), \dots, u^{n-1}(x))$.)</li>
</ol>

</div>
