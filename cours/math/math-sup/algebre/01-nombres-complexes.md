---
layout: chapitre
title: "Nombres complexes"
numero: 1
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Algèbre"
source: "Math/Math Sup/Algèbre/01 Nombres complexes"
pages: 30
---

## I. Généralités

### 1) Définition

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On munit $\mathbb{R}^2$ de deux lois $+$ et $\times$ :

$$(a, b) + (c, d) = (a + c,\ b + d)$$

$$(a, b) \times (c, d) = (ac - bd,\ bc + ad)$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $+$ est une loi de $\mathbb{R}^2$ ;
- $\times$ est **commutative** et **associative** ;
- $\times$ est **distributive** sur $+$ ;
- $(1, 0)$ est élément neutre pour $\times$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

**Commutativité** : $(a, b) \times (c, d) = (c, d) \times (a, b)$.

**Associativité** :

$$(a,b) \times \big[(c,d)\times(e,f)\big] = (a,b)\times(ce-df,\ cf+de)$$
$$= \big(a(ce-df) - b(cf+de),\ b(ce-df) + a(cf+de)\big)$$
$$= (ace - adf - bcf - bde,\ bce - bdf + acf + ade)$$

et, de même,

$$\big[(a,b)\times(c,d)\big]\times(e,f) = (ac-bd,\ ad+bc)\times(e,f)$$
$$= (ace - bde - adf + bcf,\ acf - bdf + dac + bce)$$

les deux expressions sont égales.

**Distributivité** : $(a,b)\times\big((c,d)+(e,f)\big) = (a,b)\times(c,d) + (a,b)\times(e,f)$.

**Élément neutre** : $(1,0)\times(a,b) = (a,b)\times(1,0) = (a,b)$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$\mathbb{C}$, c'est $\mathbb{R}^2$ muni de ces deux lois.

</div>

### 2) Immersion de $\mathbb{R}$

Graphiquement, $&#92;&#123;(x, 0) \mid x \in \mathbb{R}&#92;&#125; \overset{\sim}{=} \mathbb{R}$ (cas isomorphe).

Soit $i = (0, 1)$ et $(a, b) = (a, 0) + (0, b) \to (a, 0) + (0, 1) \times (b, 0)$. On écrit $(a, b) = a + ib$.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

$z = a + ib$ est la **forme algébrique** d'un complexe.

$a$ s'appelle **partie réelle** ($\mathrm{Re}(z)$) et $b$ s'appelle **partie imaginaire** ($\mathrm{Im}(z)$).

</div>

### 3) Calculs dans $\mathbb{C}$

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Il n'y a qu'un seul nombre $i$, paramètre, avec $i^2 = -1$ :

$$i^2 = -1, \qquad i^3 = -i, \qquad i^4 = 1, \qquad i^{4n} = 1, \qquad i^{4n+1} = i, \qquad i^{4n+2} = -1, \qquad i^{4n+3} = -i$$

</div>

## II. Module et argument

### 1) Conjugué

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On appelle **conjugué** de $z = a + ib$ le complexe $\overline{z} = a - ib$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $\overline{z + z'} = \overline{z} + \overline{z'}$ ;
- $\overline{z \cdot z'} = \overline{z} \cdot \overline{z'}$ ;
- $\overline{\overline{z}} = z$ ;
- $\mathrm{Re}(z) = \dfrac{z + \overline{z}}{2}$ et $\mathrm{Im}(z) = \dfrac{z - \overline{z}}{2i}$.

D'où $z \in \mathbb{R} \Leftrightarrow z = \overline{z}$ ; si $z \in i\mathbb{R} \Leftrightarrow z = -\overline{z}$.

</div>

### 2) Module

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

La quantité $N(z) = a^2 + b^2$ est dans $\mathbb{R}^+$. On appelle **module** de $z$ la quantité notée

$$|z| = \sqrt{N(z)}$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $&#124;z \cdot z'&#124; = &#124;z&#124; \cdot &#124;z'&#124;$ ;
- $&#124;z \cdot z'&#124;^2 = &#124;z&#124;^2 \cdot &#124;z'&#124;^2$ ;
- $N(z) = z&#92;&#44;\overline{z}$, soit $&#124;z&#124;^2 = z&#92;&#44;\overline{z}$ ;
- $&#124;z&#124; = 0 \Leftrightarrow z = 0$ ;
- tout complexe non nul a un inverse dans $\mathbb{C}$, car $\dfrac{z&#92;&#44;\overline{z}}{&#124;z&#124;^2} = 1$, d'où $\dfrac{\overline{z}}{&#124;z&#124;^2} = \dfrac{a - ib}{a^2 + b^2}$ est l'inverse de $z$ ;
- $&#124;z^{-1}&#124; = &#124;z&#124;^{-1}$ ;
- $&#124;\overline{z}&#124; = &#124;z&#124;$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$|\mathrm{Re}(z)| \leq |z| \quad \text{et} \quad |\mathrm{Im}(z)| \leq |z|$$

car $&#124;z&#124;^2 = \mathrm{Re}(z)^2 + \mathrm{Im}(z)^2$, avec égalité si $z \in \mathbb{R}$.

Il y a égalité si $&#124;\mathrm{Re}(z)&#124; = &#124;z&#124;$ et $&#124;\mathrm{Im}(z)&#124; = 0$, donc $z \in \mathbb{R}$ ; réciproquement, si $z \in \mathbb{R}$, $&#124;z&#124; = \sqrt{a^2} = &#124;\mathrm{Re}(z)&#124;$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Inégalité triangulaire</span>

$$|z + z'| \leq |z| + |z'|$$

et il y a égalité si et seulement si $z$ ou $z'$ est nul, ou bien $z' = \lambda z$ avec $\lambda \in \mathbb{R}&#95;+$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$$|z+z'|^2 = (z+z')(\overline{z}+\overline{z'}) = |z|^2 + |z'|^2 + z'\overline{z} + z\overline{z'} = |z|^2 + |z'|^2 + 2\,\mathrm{Re}(z'\overline{z})$$

$$(|z|+|z'|)^2 = |z|^2 + |z'|^2 + 2|z|\,|z'|$$

D'où $&#124;z&#124; \geq &#124;\mathrm{Re}(z)&#124; \geq \mathrm{Re}(z)$, on a $&#124;z+z'&#124;^2 \leq (&#124;z&#124;+&#124;z'&#124;)^2$, soit $&#124;z+z'&#124; \leq &#124;z&#124; + &#124;z'&#124;$.

**Cas d'égalité** : $&#124;z+z'&#124;^2 = (&#124;z&#124;+&#124;z'&#124;)^2$ si et seulement si $&#124;z'\overline{z}&#124; = \mathrm{Re}(z'\overline{z})$, soit $&#124;z'\overline{z}&#124; = &#124;\mathrm{Re}(z'\overline{z})&#124;$, donc $z'\overline{z} \in \mathbb{R}$, avec $z'\overline{z} = \lambda &#124;z&#124;^2$, $\lambda \in \mathbb{R}$.

Si $z \neq 0$, $z' = \dfrac{\lambda}{&#124;z&#124;^2}&#92;&#44;z = \mu z$ avec $\mu \in \mathbb{R}$. De plus $z'\overline{z} = \mu&#124;z&#124;^2$ et $&#124;\mu&#124;&#92;&#44;&#124;z&#124;^2 = \mathrm{Re}(\mu&#124;z&#124;^2) = \mu&#124;z&#124;^2$ ; comme $z \neq 0$, $&#124;\mu&#124; = \mu$, donc $\mu \in \mathbb{R}&#95;+$.

Il y a égalité si et seulement si $z = 0$ ou $z' = \mu z$ avec $\mu \in \mathbb{R}&#95;+$.

**Réciproque** : si $z = 0$ ou $z' = 0$ ; si $z' = \mu z$ avec $\mu \in \mathbb{R}&#95;+$,

$$|z+z'| = |z|\,|1+\mu| = |z|(1+\mu) \ \text{car } \mu \geq 0, = |z| + |\mu z| = |z| + |z'|$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

$$|z - z'| \geq \big||z| - |z'|\big|, \qquad |z + z'| \geq \big||z| - |z'|\big|$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Posons $Z = z + z'$, soit $z = Z - z'$, donc $&#124;z&#124; = &#124;Z - z'&#124; \leq &#124;Z&#124; + &#124;z'&#124;$, soit $&#124;Z - z'&#124; \leq &#124;Z&#124; + &#124;z'&#124;$ ; en échangeant $z$ et $z'$ : $&#124;z'&#124; - &#124;z&#124; \leq &#124;Z&#124;$, d'où $&#124;Z&#124; \geq \big&#124;&#124;z&#124; - &#124;z'&#124;\big&#124;$.

</div>

### 3) Argument

On se place dans le plan euclidien $\mathcal{P}$ rapporté à un repère orthonormé direct.

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définitions (image, affixe)</span>

Si $z = x + iy$, on associe le point $M(x, y)$ dans $\mathcal{P}$ : $M$ s'appelle **image** de $z$, et réciproquement, à tout $M$ de coordonnées $(x, y)$ du plan, on associe le complexe $z = x + iy$, appelé **affixe** de $M$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (argument)</span>

On appelle **argument** de $z \neq 0$ l'angle $(\overrightarrow{Ox}, \overrightarrow{OM})$. Tout argument est défini modulo $2\pi$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $\mathrm{Re}(z) = OM\cos\theta = &#124;z&#124;\cos\theta$ et $\mathrm{Im}(z) = &#124;z&#124;\sin\theta$, d'où

$$z = |z|(\cos\theta + i\sin\theta) = |z|\,e^{i\theta}$$

$&#124;z&#124;&#92;&#44;e^{i\theta}$ est l'**écriture trigonométrique** de $z$ ; elle est **unique**, car si $z = r e^{i\alpha}$ avec $r > 0$, alors $&#124;z&#124; = r$ et $\alpha = \mathrm{Arg}&#92;&#44;z$ $[2\pi]$.

- $e^{i\theta} = 1$ si et seulement si $\theta = 0$ $[2\pi]$ ;
- $e^{i\theta} = e^{i\theta'}$ si et seulement si $e^{i(\theta-\theta')} = 1$, soit $\theta - \theta' = 0$ $[2\pi]$, donc $\theta = \theta'$ $[2\pi]$.

**Application** : si $z = r e^{i\alpha}$ avec $r > 0$, de $&#124;z&#124; = &#124;r e^{i\alpha}&#124; = &#124;r&#124;&#92;&#44;&#124;e^{i\alpha}&#124; = &#124;r&#124; = r$, alors $z = &#124;z&#124;e^{i\theta} = &#124;z&#124;e^{i\alpha}$ avec $\theta = \mathrm{Arg}&#92;&#44;z$ ; pour $z \neq 0$, $&#124;z&#124; > 0$, donc $e^{i\theta} = e^{i\alpha}$, d'où $e^{i(\theta-\alpha)} = 1$, et $\theta - \alpha = 0$ $[2\pi]$ : $\theta = \alpha$ $[2\pi]$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- $\mathrm{Arg}(z z') = \mathrm{Arg}&#92;&#44;z + \mathrm{Arg}&#92;&#44;z'$ $[2\pi]$ ;
- $\mathrm{Arg}(z^{-1}) = -\mathrm{Arg}&#92;&#44;z$ ;
- $\mathrm{Arg}(-z) = \pi + \mathrm{Arg}&#92;&#44;z$.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$$\mathrm{Arg}(zz') = \mathrm{Arg}\big(|z|e^{i\theta} \cdot |z'|e^{i\theta'}\big) = \mathrm{Arg}\big(|zz'|\,e^{i(\theta+\theta')}\big)$$

d'après l'unicité de la forme trigonométrique : $\mathrm{Arg}(zz') = \theta + \theta' = \mathrm{Arg}(z) + \mathrm{Arg}(z')$.

**Corollaire** : avec $z' = z^{-1}$, $z \neq 0$ : $\mathrm{Arg}(1) = \mathrm{Arg}(z) + \mathrm{Arg}(z^{-1}) = 0$.

De plus $-z = -&#124;z&#124;e^{i\theta} = &#124;z&#124;e^{i\pi}e^{i\theta} = &#124;z&#124;e^{i(\theta+\pi)}$, d'où $\mathrm{Arg}(-z) = \theta + \pi$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (complexes de module 1)</span>

Soit $z \in \mathbb{C}$ tel que $&#124;z&#124; = 1$. Alors $z \neq 0$ et $z = &#124;z&#124;e^{i\theta} = e^{i\theta}$ ; réciproquement, tout $e^{i\theta}$ est de module $1$ :

$$U = \{z \in \mathbb{C} \mid |z| = 1\} = \{e^{i\theta} \mid \theta \in [0, 2\pi[\}$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Formules d'Euler</span>

$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$

</div>

## III. Puissances et racine n-ième

### 1) Puissance

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (formule de Moivre)</span>

$$\forall n \in \mathbb{Z}, \quad (e^{i\theta})^n = e^{in\theta}$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Si $n = 0$ : $(e^{i\theta})^0 = 1 = e^{i0}$.

Supposons que $(e^{i\theta})^n = e^{in\theta}$ pour un certain $n \geq 0$ :

$$(e^{i\theta})^{n+1} = (e^{i\theta})^n \times e^{i\theta} = e^{in\theta} e^{i\theta} = e^{i(n+1)\theta}$$

Donc $\forall n \in \mathbb{N}$, $e^{in\theta} = (e^{i\theta})^n$. Si $n \in \mathbb{Z}$, alors $-n \in \mathbb{N}$ :

$$(e^{i\theta})^n = (e^{i\theta})^{-(-n)} = \Big[e^{i(-n)\theta}\Big]^{-1} = \Big[e^{-in\theta}\Big]^{-1} = e^{in\theta}$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Application (Moivre)</span>

Si $z = &#124;z&#124;e^{i\theta}$, alors $z^n = &#124;z&#124;^n e^{in\theta}$.

</div>

**Application à la trigonométrie.**

- **Linéarisation** : pour $k \in \mathbb{N}$,

$$\cos^k\theta = \left(\frac{e^{i\theta} + e^{-i\theta}}{2}\right)^k = \frac{1}{2^k}\sum_{i=0}^{k} \binom{k}{i} e^{i\theta i} \times e^{i\theta(k-i)} = \frac{1}{2^k}\sum_{i=0}^{k}\binom{k}{i} e^{i(2i-k)\theta}$$

En utilisant $\binom{k}{i} = \binom{k}{k-i}$ et en regroupant les termes $i$ et $k-i$ :

$$\cos^k\theta = \frac{1}{2^{k-1}}\sum_{i \leq k/2} \binom{k}{i} \cos\big((2i-k)\theta\big)$$

En particulier, si $n$ est pair, $n = 2n'$ :

$$\cos^n\theta = \frac{1}{2^{n-1}}\sum_{k=0}^{n'-1} \binom{n}{k} \cos\big((2k-n)\theta\big) + \frac{1}{2^n}\binom{n}{n'}$$

- $\cos n\theta$ s'exprime comme un polynôme en $\cos\theta$ :

$$e^{in\theta} = (\cos\theta + i\sin\theta)^n = \sum_{k=0}^{n}\binom{n}{k} i^k \sin^k\theta \cos^{n-k}\theta = \cos^n\theta + n\,i\sin\theta\cos^{n-1}\theta + (-1)\binom{n}{2}\sin^2\theta\cos^{n-2}\theta + \dots$$

$$\cos n\theta = \sum_{k' \leq n/2} (-1)^{k'}\binom{n}{2k'} \sin^{2k'}\theta \cos^{n-2k'}\theta = \sum_{k' \leq n/2} (-1)^{k'}\binom{n}{2k'} (1 - \cos^2\theta)^{k'} \cos^{n-2k'}\theta$$

$$\sin n\theta = \sum_{k' \leq (n-1)/2} (-1)^{k'}\binom{n}{2k'+1} \sin^{2k'+1}\theta \cos^{n-(2k'+1)}\theta$$

### 2) Racine n-ième

Soit $z = re^{i\theta}$, $z \neq 0$. But : trouver $u \in \mathbb{C}$ tel que $u^n = z$ et $u \neq 0$.

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Tout complexe non nul admet exactement $n$ racines $n$-ièmes distinctes.

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Soit $u \neq 0$, $u = r'e^{i\alpha}$ avec $r' > 0$. Alors

$$u^n = z \Leftrightarrow r'^n e^{in\alpha} = |z|e^{i\theta} \Leftrightarrow \begin{cases} r'^n = |z| \\ n\alpha = \theta \ [2\pi] \end{cases} \Leftrightarrow \begin{cases} r' = \sqrt[n]{|z|} \\ \alpha = \dfrac{\theta}{n} + \dfrac{2k\pi}{n},\ k \in \mathbb{Z} \end{cases}$$

Si $u$ est racine $n$-ième, $u$ est de la forme
$u = &#124;z&#124;^{\frac{1}{n}} e^{i\left(\frac{\theta}{n} + \frac{2k\pi}{n}\right)}$, $k \in \mathbb{Z}$ ; réciproquement, les
$&#124;z&#124;^{\frac{1}{n}} e^{i(\frac{\theta}{n} + \frac{2k\pi}{n})}$ pour $k \in [0, n-1]$ sont $n$ racines distinctes, et ce sont les seules.

Posons $r = &#124;z&#124;^{1/n}$ et $u_k = r e^{i(\frac{\theta}{n} + \frac{2k\pi}{n})}$ pour $0 \leq k \leq n-1$. Alors

$$\frac{\theta}{n} + \frac{2k\pi}{n} = \frac{\theta}{n} + \frac{2k'\pi}{n} \ [2\pi] \Leftrightarrow \frac{2(k-k')\pi}{n} = 0 \ [2\pi] \Leftrightarrow k = k'$$

donc $u_k \neq u&#95;{k'}$ pour $0 \leq k \neq k' \leq n-1$ : on a $n$ racines distinctes.

D'après l'équivalence ci-dessus, si $u$ est racine $n$-ième, $u$ est de la forme
$&#124;z&#124;^{1/n} e^{i(\frac{\theta}{n} + \frac{2k\pi}{n})} = u_k$, $k \in \mathbb{Z}$. En écrivant $q = \left\lfloor \dfrac{k}{n} \right\rfloor$ (donc $q \leq \dfrac{k}{n} < q+1$) et $k = qn + r$ avec $0 \leq r \leq n-1$ :

$$u_k = |z|^{\frac{1}{n}} e^{i\left(\frac{\theta}{n} + \frac{2(qn+r)\pi}{n}\right)} = |z|^{\frac{1}{n}} e^{i\left(\frac{\theta}{n} + \frac{2r\pi}{n} + 2q\pi\right)} = |z|^{\frac{1}{n}} e^{i(\frac{\theta}{n} + \frac{2r\pi}{n})} = u_r$$

d'où $u_k \in &#92;&#123;u_0, u_1, \dots, u&#95;{n-1}&#92;&#125;$.

</div>

**Conclusion** : $&#92;&#123;u_0, u_1, \dots, u&#95;{n-1}&#92;&#125;$ sont les $n$ racines $n$-ièmes de $z$.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire</span>

- Les racines $n$-ièmes de l'unité ($1$) sont $\omega_0 = 1$, $\omega_1 = e^{2i\pi/n}$, $\omega_2 = e^{2\cdot 2i\pi/n} = \omega_1^2$, $\omega_3 = e^{3\cdot 2i\pi/n} = \omega_1^3$, \dots, $\omega&#95;{n-1} = e^{(n-1)2i\pi/n}$ (en notant $\omega = e^{2i\pi/n}$ : $\omega_k = \omega^k$) ;
- si $z_0$ est une racine $n$-ième de $z$, les racines $n$-ièmes de $z$ sont

$$\{z_0\omega^k,\ 0 \leq k \leq n-1\} = \{z_0,\ z_0\omega,\ z_0\omega^2,\ \dots,\ z_0\omega^{n-1}\}$$

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

Car $(z_0\omega^k)^n = z_0^n&#92;&#44;\omega^{kn} = z$ ; de plus elles sont distinctes, et on a $n$ racines d'une équation de degré $n$ : ce sont toutes les racines.

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque</span>

Les images des racines $n$-ièmes de l'unité forment un polygone régulier inscrit dans le cercle trigonométrique.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

La somme des racines $n$-ièmes de $z \neq 0$ est nulle ($n \geq 2$).

</div>

<div class="bloc demo" markdown="1">
<span class="bloc-titre">Démonstration</span>

$$S = \sum_{k=0}^{n-1} z_0\omega^k = z_0\,\frac{\omega^n - 1}{\omega - 1} = 0$$

car $\omega \neq 1$ et $n \geq 2$.

</div>

### 3) Résolution de $az^2 + bz + c = 0$

On recherche les racines sous forme algébrique. Soit $z \neq 0$, $z = A + iB$, et cherchons $u = \alpha + i\beta$ tel que $u^2 = z$ :

$$u^2 = z \Leftrightarrow \alpha^2 - \beta^2 + 2i\alpha\beta = A + iB \Leftrightarrow \begin{cases} \alpha^2 - \beta^2 = A & (1)\\ 2\alpha\beta = B & (2) \end{cases}$$

On a $\alpha^2 + \beta^2 = &#124;u&#124;^2 = &#124;u^2&#124; = &#124;z&#124; = \sqrt{A^2 + B^2}$. On en déduit $\alpha^2$ et $\beta^2$ ; d'après (2), on connaît le signe de $\alpha \times \beta$ ; on en déduit les deux couples $(\alpha, \beta)$ et $(-\alpha, -\beta)$.

**b) Équation du second degré.** Soit $T = az^2 + bz + c$, avec $a \in \mathbb{C}^&#42;$, $b, c \in \mathbb{C}$ :

$$T = a\left(z^2 + \frac{b}{a}z + \frac{c}{a}\right) = a\left(\left(z + \frac{b}{2a}\right)^2 + \frac{c}{a} - \frac{b^2}{4a^2}\right) = a\left(\left(z + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a^2}\right)$$

où $\Delta = b^2 - 4ac$. Soit $\delta$ une racine carrée de $\Delta$ ($\delta^2 = \Delta$). Alors

$$T = a\left(z + \frac{b}{2a} - \frac{\delta}{2a}\right)\left(z + \frac{b}{2a} + \frac{\delta}{2a}\right)$$

Les racines sont $\left&#92;&#123;-\dfrac{b+\delta}{2a},\ -\dfrac{b-\delta}{2a}\right&#92;&#125;$.

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Remarque (relations coefficients-racines)</span>

Si $z_1$ et $z_2$ sont les deux solutions :

$$z_1 + z_2 = -\frac{b}{a}, \qquad z_1 z_2 = \frac{c}{a}$$

</div>

## IV. Complexes et géométrie

### 1) Rappels

- une distance s'écrit comme un module : $&#124;AB&#124; = &#124;b - a&#124;$ pour $A(a)$, $B(b)$ ;
- un angle de vecteurs s'écrit comme un argument (relation de Chasles) :

$$(\overrightarrow{MA}, \overrightarrow{MB}) = (\overrightarrow{MA}, \vec{u}) + (\vec{u}, \overrightarrow{MB}) \ [2\pi]$$

- si le vecteur $\overrightarrow{MA}$ a pour coordonnées $x' = a_1 - m_1$, $y' = a_2 - m_2$, on associe au vecteur $\overrightarrow{MA}$ le complexe $z = a - m$. Alors, pour $M \neq A$ et $M \neq B$ :

$$(\overrightarrow{MA}, \overrightarrow{MB}) = \mathrm{Arg}(a - m) - \mathrm{Arg}(b - m) = \mathrm{Arg}\!\left(\frac{a-m}{b-m}\right) \ [2\pi]$$

### 2) Transformations

**Translation.** $z \mapsto z + b = z'$, soit $\overrightarrow{OM'} = \overrightarrow{OM} + \overrightarrow{OB}$.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Ajouter un complexe $b$ revient à faire subir à $M(z)$ la **translation** de vecteur $\overrightarrow{OB}$ ($B$ d'affixe $b$).

</div>

### 3) Multiplication par un scalaire

Soit $z \mapsto z' = az$ avec $a \neq 0$ ; on écrit $a = &#124;a&#124;e^{i\theta}$ avec $\theta = \mathrm{Arg}&#92;&#44;a$.

- si $z = 0$, alors $z' = 0$ ;
- si $z \neq 0$, $z = &#124;z&#124;e^{i\alpha}$, donc $z' = az = &#124;a&#124;&#92;&#44;&#124;z&#124;&#92;&#44;e^{i(\alpha+\theta)}$, soit $&#124;z'&#124; = &#124;a&#124;&#92;&#44;&#124;z&#124;$ et $\mathrm{Arg}&#92;&#44;z' = \alpha + \theta$ $[2\pi]$.

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Multiplier $z$ par $a$ revient à faire subir à $M(z)$ la **similitude** $s\big(O, &#124;a&#124;, \mathrm{Arg}(a)\big)$.

</div>

### 4) Transformation $z \mapsto az + b$

**a) Point invariant.** $z' = z \Leftrightarrow z = az + b$, soit $(1-a)z = b$ :

- si $a = 1$, il n'y a pas de point invariant ;
- si $a \neq 1$, il existe un unique point invariant $\Omega(\omega)$ avec $\omega = \dfrac{b}{1-a}$.

**b) Changement d'origine.** Faisons subir à $(O, 1, z)$ la transformation qui amène $O$ sur $\Omega$. Soit $Z$ la nouvelle affixe de $z$ : $Z = z - \omega$, et

$$Z' = z' - \omega = az + b - (a\omega + b) = a(z - \omega) = aZ$$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété</span>

Si $a \neq 1$, effectuer la transformation $z \mapsto az + b$ revient à faire subir à $M(z)$ la similitude $s\big(\Omega, &#124;a&#124;, \mathrm{Arg}&#92;&#44;a\big)$, où $\Omega$ est l'unique point invariant.

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple — $z' = jz - 7$</span>

Avec $j = e^{2i\pi/3} = -\dfrac{1}{2} + i\dfrac{\sqrt{3}}{2}$, on a
$j^2 = e^{4i\pi/3} = \overline{j} = -\dfrac{1}{2} - i\dfrac{\sqrt{3}}{2}$, et $1 + j + j^2 = 0$.

Le point invariant $\Omega$ a pour affixe

$$\omega = j\omega - 7 \Leftrightarrow \omega(1 - j) = -7 \Leftrightarrow \omega = \frac{7}{j-1} = \frac{7}{3}(\overline{j} - 1)$$

La transformation $z \mapsto jz - 7$ est la rotation $\mathrm{Rot}&#92;&#33;\left(\Omega, \dfrac{2\pi}{3}\right)$.

</div>

## V. Exercices — feuille n° 1 (révisions)

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 1 — Révisions (énoncés)</span>

<ol class="enonces">
<li>Simplifier $A = \sqrt{a + 2\sqrt{a-1}} + \sqrt{a - 2\sqrt{a-1}}$.</li>
<li>Montrer que :
<ol>
<li>$a + b < 2 + a^2 + b^2$ ;</li>
<li>$a + b < (1 + a^2)(1 + b^2)$.</li>
</ol>
</li>
<li>Montrer que $\forall a, b, c \in \mathbb{R}&#95;+^&#42;,\ \dfrac{a}{b+c} + \dfrac{b}{a+c} + \dfrac{c}{b+a} \geq \dfrac{3}{2}$. Étudier les cas d'égalité.</li>
<li>Soient $x_1, x_2, \dots, x_n \in \mathbb{R}$ tels que $\displaystyle\sum&#95;{i=1}^{n} x_i^2 = x_1x_2 + x_2x_3 + \dots + x&#95;{n-1}x_n + x_nx_1$. Montrer que tous les $x_i$ sont égaux.</li>
<li>Résoudre dans $\mathbb{R}$ les systèmes suivants :
$$\begin{cases} x + y = 2 \\ \dfrac{1}{x} + \dfrac{1}{y} = \dfrac{1}{2} \end{cases} \qquad \text{et} \qquad \begin{cases} x + y + z = 2 \\ \dfrac{1}{x} + \dfrac{1}{y} + \dfrac{1}{z} = \dfrac{1}{3} \end{cases}$$</li>
<li>Résoudre : $\cos x - \sin x < 1$.</li>
<li>
<ol>
<li>Transformer en produit $S = \sin a + \sin b + \sin \gamma - \sin(a + b + \gamma)$ ;</li>
<li>Prouver que, dans un triangle, $\sin A + \sin B + \sin C = 4\cos\dfrac{A}{2}\cos\dfrac{B}{2}\cos\dfrac{C}{2}$ ;</li>
<li>Montrer que tout triangle tel que $\sin 3A + \sin 3B + \sin 3C = 0$ admet au moins un angle de $60°$.</li>
</ol>
</li>
<li>Simplifier $S_n = \dfrac{1}{\cos x \cos 2x} + \dfrac{1}{\cos 2x \cos 3x} + \dots + \dfrac{1}{\cos nx \cos(n+1)x}$.</li>
</ol>

</div>

## VI. Exercices — feuille n° 3 (nombres complexes)

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 3 — Nombres complexes (énoncés)</span>

<ol class="enonces">
<li>Soit $z$ et $z'$, deux complexes de module 1. Montrer alors que :
$$Z = \frac{z + z'}{1 + zz'} \in \mathbb{R}$$</li>
<li>Montrer que : $\forall u, v \in \mathbb{C}$, $&#124;u + v&#124;^2 + &#124;u - v&#124;^2 = 2(&#124;u&#124;^2 + &#124;v&#124;^2)$. Interpréter.</li>
<li>Trouver tous les complexes $z$ tels que $&#124;z&#124; = &#124;z - 4&#124;$ et $\arg(z) = \arg(z + 1 - i) \mod 2\pi$.</li>
<li>Calculer le module et l'argument de $\dfrac{1 + \sin a + i\cos a}{1 + \sin a - i\cos a}$ ($a \in \mathbb{R}$).</li>
<li>Calculer les deux quantités suivantes :
$$C_n = 1 + \cos x + \cos 2x + \dots + \cos nx$$
$$\Sigma_n = 1 + \binom{n}{1}\cos x + \binom{n}{2}\cos 2x + \dots + \binom{n}{n}\cos nx$$</li>
<li value="7">Soit $u$ une racine carrée de $z\overline{z'}$. Démontrer que :
$$|z| + |z'| = \left|\frac{z+z'}{2} - u\right| + \left|\frac{z+z'}{2} + u\right|$$</li>
<li>Résoudre les équations :
$$(4+2i)z^2 - 2(3+2i)z + 2 - i = 0$$
$$z^6 - (3-2i)z^3 + (2-2i) = 0$$</li>
<li>Résoudre dans $\mathbb{C}$ l'équation : $\left(\dfrac{1-iz}{1+iz}\right)^n = \dfrac{1 - i\tan a}{1 + i\tan a}$, $a \in \mathbb{R}$ donné.</li>
<li>
<ol>
<li>Montrer qu'une CNS pour que $A(a)$, $B(b)$, $C(c)$ soient alignés est :
$$(b\overline{c} - \overline{b}c) - (a\overline{c} - \overline{a}c) + (a\overline{b} - \overline{a}b) = 0$$</li>
<li>Trouver le lieu des points $M(z)$ tels que les images de $1$, $z$, $1 + z^2$ soient alignées.</li>
</ol>
</li>
<li>Trouver une CNS pour que $i$, $z$, $iz$ soient alignés.</li>
<li>Trouver une CNS pour que $A(i)$, $M_1(z)$, $M_2(z^2)$, $M_3(z^3)$ soient cocycliques.</li>
</ol>

</div>

## VII. Exercices — TD n° 1 du lundi 13 septembre 1993

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">TD n° 1 — Résolution des équations du 3ème degré (énoncés)</span>

<ol class="enonces">
<li>Soit $(z, a, b) \in \mathbb{C}^3$ et
$$E = (z + a + b)(z + aj + bj^2)(z + aj^2 + bj)$$
Développer $E$ selon les puissances de $z$.</li>
<li>On cherche à résoudre dans $\mathbb{C}$ l'équation $z^3 + pz + q = 0$ (1).
Montrer qu'on peut trouver $a$ et $b$ tels que, pour tout $z$,
$z^3 + pz + q = E$. On montrera que $a^3$ et $b^3$ sont solutions de

$$X^2 - qX - \frac{p^3}{27} = 0$$

Expliquer alors la méthode de résolution de (1).</li>
<li>Soit $\Delta = 4p^3 + 27q^2$ (discriminant de (1)).
<ol>
<li>Montrer que si $\Delta > 0$, il y a une racine réelle et 2 complexes ; on donnera son expression algébrique.</li>
<li>Si $\Delta = 0$, il y a 2 racines réelles dont 1 double — donner les expressions.</li>
<li>Si $\Delta < 0$, il y a 3 racines réelles, que l'on exprimera en fonction de $\rho$ et $\theta$ avec $a = \rho&#92;&#44; e^{i\theta}$, $\rho \in \mathbb{R}&#95;+$. Comment détermine-t-on $\rho$ et $\theta$ ?</li>
</ol>
</li>
<li>Expliquer comment ramener l'équation suivante à une équation du type (1) :
$$z^3 + az^2 + bz + c = 0 \qquad (2)$$</li>
<li>Application : résoudre dans $\mathbb{R}$ :
<ol>
<li>$x^3 - 2x + 12 = 0$ ;</li>
<li>$x^3 - 15x - 4 = 0$.</li>
</ol>
</li>
</ol>

</div>
