---
layout: chapitre
title: "Intégrale de Riemann"
numero: 9
matiere: "Mathématiques"
matiere_slug: "math"
niveau: "Math Sup"
niveau_slug: "math-sup"
partie: "Analyse"
source: "Math/Math Sup/Analyse/09 Intégrale de Riemann"
pages: 36
interactif: true
---

Dans tout ce chapitre, $a$ et $b$ désignent deux réels tels que $a \leq b$,
et $f$ une fonction **bornée** définie sur $[a, b]$.

## I. Subdivisions d'un segment

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

Une **subdivision** $\sigma$ du segment $[a, b]$ est une suite finie
croissante

$$\sigma = (x_0, x_1, \dots, x_n), \qquad a = x_0 < x_1 < \dots < x_n = b$$

Les $x_i$ sont les **points** de la subdivision, les segments
$[x_{i-1}, x_i]$ (pour $1 \leq i \leq n$) ses **intervalles**.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Ordre sur les subdivisions</span>

On dit que $\sigma'$ est **plus fine** que $\sigma$, et on note $\sigma \leq \sigma'$,
si tout point de $\sigma$ est un point de $\sigma'$ (c'est-à-dire $\sigma \subset \sigma'$).

Si $\sigma$ et $\sigma'$ sont deux subdivisions de $[a, b]$, leur **réunion**
$\sigma \cup \sigma'$ (l'ensemble de leurs points, ordonné) est encore une
subdivision de $[a, b]$, plus fine que $\sigma$ et que $\sigma'$.

</div>

## II. Sommes de Darboux — définition de l'intégrale

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Sommes de Darboux</span>

Soit $f$ bornée sur $[a, b]$ et $\sigma = (x_0, \dots, x_n)$ une subdivision de
$[a, b]$. Pour $1 \leq i \leq n$, on pose

$$m_i = \inf_{x \in [x_{i-1}, x_i]} f(x), \qquad M_i = \sup_{x \in [x_{i-1}, x_i]} f(x)$$

(extrémums atteints ou non, $f$ étant bornée ces bornes sont finies). Les
**sommes de Darboux** inférieure et supérieure de $f$ associées à $\sigma$ sont

$$s(\sigma, f) = \sum_{i=1}^{n} (x_i - x_{i-1})\, m_i, \qquad
S(\sigma, f) = \sum_{i=1}^{n} (x_i - x_{i-1})\, M_i$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés</span>

- Pour toute subdivision $\sigma$ : $s(\sigma, f) \leq S(\sigma, f)$ ;
- si $\sigma'$ est plus fine que $\sigma$ :

$$s(\sigma, f) \leq s(\sigma', f) \leq S(\sigma', f) \leq S(\sigma, f)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$s(\sigma, f) \leq S(\sigma, f)$ car $m_i \leq M_i$. Si $\sigma'$ est plus fine que
$\sigma$, chaque intervalle $[x_{i-1}, x_i]$ de $\sigma$ est découpé par $\sigma'$
en sous-intervalles $[y_{j-1}, y_j]$ ; sur chacun, $\inf_{[y_{j-1},y_j]} f \geq m_i$
et $\sup_{[y_{j-1},y_j]} f \leq M_i$, d'où en sommant
$s(\sigma, f) \leq s(\sigma', f)$ et $S(\sigma', f) \leq S(\sigma, f)$.

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (intégrabilité au sens de Riemann)</span>

La fonction $f$, bornée sur $[a, b]$, est dite **intégrable sur $[a, b]$** si

$$\sup_{\sigma} s(\sigma, f) = \inf_{\sigma} S(\sigma, f)$$

la borne supérieure et la borne inférieure étant prises sur toutes les
subdivisions $\sigma$ de $[a, b]$. Cette valeur commune est notée

$$I = \int_a^b f(x)\, \mathrm{d}x = \int_a^b f$$

</div>

<div class="bloc remarque" markdown="1">

<span class="bloc-titre">Conventions</span>

- si $a = b$ : $\displaystyle\int_a^a f = 0$ ;
- si $a > b$ : $\displaystyle\int_a^b f = -\int_b^a f$ ;
- si $f$ est constante égale à $c$ sur $[a, b]$ :
  $\displaystyle\int_a^b c\,\mathrm{d}x = c\,(b-a)$
  (car alors $m_i = M_i = c$ pour tout $i$, donc $s(\sigma, f) = S(\sigma, f) = b-a$).

</div>

## III. Propriétés fondamentales

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème (caractérisation par les sommes de Darboux)</span>

$f$ est intégrable sur $[a, b]$ si et seulement si

$$\forall \varepsilon > 0,\ \exists \sigma \text{ subdivision de } [a,b],\quad
S(\sigma, f) - s(\sigma, f) \leq \varepsilon$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Notons $I' = \sup_\sigma s(\sigma, f)$ et $I'' = \inf_\sigma S(\sigma, f)$ ; on a
toujours $I' \leq I''$.

**Sens direct.** Si $f$ est intégrable, $I' = I'' = I$. Soit $\varepsilon > 0$ :
il existe $\sigma_1$ avec $s(\sigma_1, f) > I - \dfrac{\varepsilon}{2}$ et
$\sigma_2$ avec $S(\sigma_2, f) < I + \dfrac{\varepsilon}{2}$. Pour
$\sigma = \sigma_1 \cup \sigma_2$ (plus fine que $\sigma_1$ et $\sigma_2$) :

$$S(\sigma, f) - s(\sigma, f) \leq S(\sigma_2, f) - s(\sigma_1, f) < \varepsilon$$

**Réciproque.** Supposons la condition vraie. Alors
$I'' - I' \leq S(\sigma, f) - s(\sigma, f) \leq \varepsilon$ pour une certaine
subdivision, et ce pour tout $\varepsilon > 0$ : donc $I'' - I' \leq 0$, soit
$I' = I''$ : $f$ est intégrable.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (structure d'espace vectoriel, linéarité)</span>

L'ensemble $\mathcal{I}_{[a,b]}$ des fonctions intégrables sur $[a, b]$ est un
sous-espace vectoriel de l'espace des fonctions bornées sur $[a, b]$, et
l'application

$$f \longmapsto \int_a^b f$$

est une **forme linéaire** : si $f, g \in \mathcal{I}_{[a,b]}$ et
$\lambda \in \mathbb{R}$, alors $f + \lambda g \in \mathcal{I}_{[a,b]}$ et

$$\int_a^b (f + \lambda g) = \int_a^b f + \lambda \int_a^b g$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriété (relation de Chasles)</span>

Quels que soient les réels $a, b, c$, si $f$ est intégrable sur deux des trois
intervalles $[a, b]$, $[b, c]$, $[a, c]$ (le plus grand des trois), alors $f$
est intégrable sur le troisième et

$$\int_a^c f = \int_a^b f + \int_b^c f$$

</div>

## IV. Classes de fonctions intégrables

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1 — fonctions en escalier</span>

Toute fonction **en escalier** sur $[a, b]$ est intégrable. Plus précisément, si
$f$ est constante égale à $\lambda_i$ sur chaque intervalle ouvert
$\,]x_{i-1}, x_i[$ d'une subdivision $\sigma = (x_0, \dots, x_n)$ de $[a, b]$,
alors

$$\int_a^b f = \sum_{i=1}^{n} \lambda_i\, (x_i - x_{i-1})$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (esquisse)</span>

Sur chaque $[x_{i-1}, x_i]$, $f$ coïncide avec la constante $\lambda_i$ sauf
éventuellement aux extrémités. En posant $h = f - g$ où $g$ vaut $\lambda_i$
sur $[x_{i-1}, x_i]$, on a $h = 0$ sur $]x_{i-1}, x_i[$ et $h$ bornée
($|h| \leq 2M$) : pour la subdivision $\sigma$, $S(\sigma, h) - s(\sigma, h)$
est arbitrairement petit (les seuls intervalles où $h$ varie sont les
voisinages des points $x_i$, de longueur totale contrôlée), donc $h$ est
intégrable d'intégrale nulle. Par Chasles, $f$ est intégrable sur $[a, b]$ et
$\int_a^b f = \sum \lambda_i (x_i - x_{i-1})$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2 — fonctions continues</span>

Toute fonction **continue** sur $[a, b]$ est intégrable.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (théorème de Heine)</span>

$f$ continue sur le segment $[a, b]$ y est **uniformément continue** :

$$\forall \varepsilon > 0,\ \exists \alpha > 0,\ \forall x, y \in [a, b],\quad
|x - y| < \alpha \Rightarrow |f(x) - f(y)| \leq \dfrac{\varepsilon}{b-a}$$
Prenons une subdivision $\sigma$ dont tous les intervalles sont de longueur
$< \alpha$ : alors $M_i - m_i \leq \dfrac{\varepsilon}{b-a}$ pour tout $i$, donc

$$S(\sigma, f) - s(\sigma, f) = \sum_{i=1}^n (x_i - x_{i-1})(M_i - m_i)
\leq \frac{\varepsilon}{b-a} \sum_{i=1}^n (x_i - x_{i-1}) = \varepsilon$$

et la caractérisation du théorème du II s'applique.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 3 — fonctions continues par morceaux</span>

Toute fonction **continue par morceaux** sur $[a, b]$ est intégrable.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (esquisse)</span>

Si $f$ est continue par morceaux, il existe une subdivision
$\sigma = (x_0, \dots, x_n)$ telle que $f$ soit continue sur chaque
$\,]x_{i-1}, x_i[$. En prolongeant $f$ par continuité aux points $x_i$, on
écrit $f = g + h$ où $g$ est continue sur $[a, b]$ et $h$ en escalier (nulle
sur chaque $]x_{i-1}, x_i[$). Alors $g$ et $h$ sont intégrables, donc $f$ aussi.

</div>

## V. Positivité et conséquences

Dans toute la suite, les fonctions considérées sont supposées continues par
morceaux sur $[a, b]$ (donc intégrables).

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1 (positivité)</span>

Si $f \geq 0$ sur $[a, b]$, alors $\displaystyle\int_a^b f \geq 0$.

En particulier, si $f \leq g$ sur $[a, b]$, alors
$\displaystyle\int_a^b f \leq \int_a^b g$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2 (majorations)</span>

$$\left| \int_a^b f \right| \leq \int_a^b |f| \leq (b-a)\, \sup_{x \in [a,b]} |f(x)|$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 3</span>

Si $f$ est continue sur $[a, b]$, si $f \geq 0$ et si
$\displaystyle\int_a^b f = 0$, alors $f$ est identiquement nulle sur $[a, b]$.

**Corollaire.** Si $f$ et $g$ sont continues sur $[a, b]$, si $f \leq g$ et si
$\displaystyle\int_a^b f = \int_a^b g$, alors $f = g$ sur $[a, b]$.

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Raisonnons par l'absurde : s'il existe $c \in [a, b]$ avec $f(c) > 0$, la
continuité de $f$ en $c$ donne un segment $[\alpha, \beta] \subset [a, b]$
voisin de $c$ sur lequel $f \geq \dfrac{f(c)}{2}$. Par positivité et Chasles :

$$\int_a^b f \geq \int_\alpha^\beta f \geq (\beta - \alpha)\frac{f(c)}{2} > 0$$

contradiction.

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème de la moyenne</span>

Si $f$ et $g$ sont continues sur $[a, b]$ et si $g$ est de signe constant, il
existe $c \in [a, b]$ tel que

$$\int_a^b f(x)\, g(x)\, \mathrm{d}x = f(c) \int_a^b g(x)\, \mathrm{d}x$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Posons $m = \min_{[a,b]} f$ et $M = \max_{[a,b]} f$ (atteints car $f$ continue sur
le segment $[a, b]$). Si $g \geq 0$ : $m\, g \leq f g \leq M\, g$, donc par
positivité

$$m \int_a^b g \leq \int_a^b f g \leq M \int_a^b g$$

Si $\int_a^b g = 0$, l'encadrement donne $\int_a^b fg = 0$ et tout $c$ convient.
Sinon, $\dfrac{\int_a^b fg}{\int_a^b g} \in [m, M]$ et le théorème des valeurs
intermédiaires (appliqué à $f$ continue) fournit $c \in [a, b]$ tel que
$f(c) = \dfrac{\int_a^b fg}{\int_a^b g}$. Le cas $g \leq 0$ est analogue.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire (moyenne d'une fonction continue)</span>

Si $f$ est continue sur $[a, b]$, il existe $c \in [a, b]$ tel que

$$\int_a^b f(x)\, \mathrm{d}x = f(c)\, (b - a)$$

(appliquer le théorème de la moyenne avec $g = 1$).

</div>

## VI. Sommes de Riemann

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition (subdivision pointée, somme de Riemann)</span>

Une **subdivision pointée** de $[a, b]$ est un couple $(\sigma, \lambda)$ où
$\sigma = (x_0, \dots, x_n)$ est une subdivision de $[a, b]$ et
$\lambda = (\lambda_1, \dots, \lambda_n)$ avec

$$\lambda_i \in [x_{i-1}, x_i] \quad \text{pour tout } i$$

La **somme de Riemann** de $f$ associée à $(\sigma, \lambda)$ est

$$S(\sigma, \lambda, f) = \sum_{i=1}^{n} (x_i - x_{i-1})\, f(\lambda_i)$$

</div>

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Cas d'une subdivision régulière</span>

La subdivision régulière à $n$ intervalles de $[a, b]$ est
$\sigma_n = (x_0, \dots, x_n)$ avec $x_i = a + i\,\dfrac{b-a}{n}$. Pour une suite
de points de taguage $\lambda_i^{(n)} \in [x_{i-1}, x_i]$, la somme de Riemann
vaut

$$S_n = S(\sigma_n, \lambda^{(n)}, f)
= \frac{b-a}{n} \sum_{i=1}^{n} f\big(\lambda_i^{(n)}\big)$$

</div>

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème (convergence des sommes de Riemann)</span>

Si $f$ est **continue** sur $[a, b]$, alors, pour tout choix de points de
taguage $\lambda_i^{(n)} \in [x_{i-1}, x_i]$,

$$S_n = \frac{b-a}{n} \sum_{i=1}^{n} f\big(\lambda_i^{(n)}\big)
\xrightarrow[n \to +\infty]{} \int_a^b f$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$f$ continue sur $[a, b]$ y est uniformément continue : soit $\varepsilon > 0$ ;
il existe $N$ tel que, pour $n \geq N$, deux points de $[x_{i-1}, x_i]$ sont à
distance $\leq \dfrac{b-a}{n} \leq \dfrac{b-a}{N}$, donc
$|f(x) - f(y)| \leq \dfrac{\varepsilon}{b-a}$. Alors $M_i^{(n)} - m_i^{(n)}
\leq \dfrac{\varepsilon}{b-a}$ et

$$S(\sigma_n, f) - s(\sigma_n, f) \leq \varepsilon$$

Or $s(\sigma_n, f) \leq S_n \leq S(\sigma_n, f)$ (car
$m_i^{(n)} \leq f(\lambda_i^{(n)}) \leq M_i^{(n)}$), et
$s(\sigma_n, f) \to I = \int_a^b f$ ainsi que $S(\sigma_n, f)$ : le théorème
d'encadrement conclut que $S_n \to I$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaires (moyennes de valeurs)</span>

- points de taguage à droite ($\lambda_i^{(n)} = x_i$) :

$$\frac{1}{n} \sum_{i=1}^{n} f\!\left(a + i\,\frac{b-a}{n}\right)
\xrightarrow[n\to+\infty]{} \frac{1}{b-a} \int_a^b f$$

- points de taguage à gauche ($\lambda_i^{(n)} = x_{i-1}$) :

$$\frac{1}{n} \sum_{i=0}^{n-1} f\!\left(a + i\,\frac{b-a}{n}\right)
\xrightarrow[n\to+\infty]{} \frac{1}{b-a} \int_a^b f$$

</div>

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Exemple</span>

$$\lim_{n \to +\infty} \frac{1}{n} \sum_{k=0}^{n} \frac{n+k}{n^2 + k^2}
= \int_0^1 \frac{1+x}{1+x^2}\, \mathrm{d}x
= \Big[ \arctan x + \frac{1}{2} \ln(1+x^2) \Big]_0^1
= \frac{\pi}{4} + \frac{1}{2} \ln 2$$

</div>

### Visualisation interactive

<div class="composant" data-composant="riemann"></div>

Choisis une fonction sur $[0,1]$, une méthode de rectangles (gauche, droite, point
milieu, ou sommes de Darboux inférieure/supérieure) et fais varier le nombre $n$
de subdivisions : les rectangles visualisent la somme $S_n$, comparée à
l'intégrale exacte (ligne verte), et le second graphique montre la vitesse de
convergence de l'erreur $|S_n - \int_0^1 f|$.

## VII. Intégrale fonction de la borne supérieure — primitives

### 1) Étude de $x \mapsto \int_c^x f(t)\, \mathrm{d}t$

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1 (continuité)</span>

Soit $f$ intégrable sur $[a, b]$ et $c \in [a, b]$. Alors

$$g : x \longmapsto \int_c^x f(t)\, \mathrm{d}t$$

est bien définie et **continue** sur $[a, b]$. Si de plus $f$ est bornée sur
$[a, b]$ ($|f| \leq M$), alors $g$ est $M$-lipschitzienne :

$$\forall x, y \in [a, b],\quad |g(x) - g(y)| \leq M\, |x - y|$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$g$ est bien définie car $[c, x]$ et $[x, c]$ sont contenus dans $[a, b]$.
Quels que soient $x, y \in [a, b]$, Chasles donne
$g(x) - g(y) = \int_y^x f$, d'où
$|g(x) - g(y)| = \left|\int_y^x f\right| \leq \left|\int_y^x |f|\right|
\leq M\,|x - y|$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2 (dérivabilité)</span>

Si $f$ est **continue** sur $[a, b]$, alors $g$ est de classe $\mathcal{C}^1$
sur $[a, b]$ et

$$g' = f$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Pour $x_0 \in [a, b]$ et $x \neq x_0$ :

$$\frac{g(x) - g(x_0)}{x - x_0}
= \frac{1}{x - x_0} \int_{x_0}^x f(t)\, \mathrm{d}t$$

est la valeur moyenne de $f$ entre $x_0$ et $x$ (corollaire du théorème de la
moyenne) ; elle tend vers $f(x_0)$ quand $x \to x_0$ par continuité de $f$.
Donc $g$ est dérivable en $x_0$ avec $g'(x_0) = f(x_0)$, et $g' = f$ est
continue : $g$ est $\mathcal{C}^1$.

</div>

### 2) Primitives

<div class="bloc definition" markdown="1">

<span class="bloc-titre">Définition</span>

On dit que $F$ est une **primitive** de $f$ sur l'intervalle $I$ ($I \neq \varnothing$)
si $F$ est dérivable sur $I$ et si $F' = f$ sur $I$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 1</span>

Si $f$ admet une primitive $F$ sur $I$, alors les primitives de $f$ sur $I$ sont
exactement les fonctions $F + c$, où $c \in \mathbb{R}$.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition 2</span>

Si $f$ est **continue** sur l'intervalle $I$, alors $f$ admet des primitives
sur $I$. De plus, si $a \in I$, l'unique primitive de $f$ qui s'annule en $a$
est

$$F(x) = \int_a^x f(t)\, \mathrm{d}t$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

D'après la proposition 2 ci-dessus, $F : x \mapsto \int_a^x f(t)\,\mathrm{d}t$
est de classe $\mathcal{C}^1$ sur $I$, avec $F' = f$ : c'est une primitive de
$f$, et $F(a) = 0$. Si $G$ est une autre primitive de $f$ nulle en $a$, alors
$(G - F)' = f - f = 0$ sur $I$, donc $G - F$ est constante ; comme elle
s'annule en $a$, cette constante est $0$ et $G = F$.

</div>

## VIII. Calcul intégral

### 1) Formule fondamentale

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

Si $f$ est continue sur $[a, b]$ et si $F$ est une primitive de $f$ sur
$[a, b]$, alors

$$\int_a^b f(x)\, \mathrm{d}x = F(b) - F(a) = \Big[ F \Big]_a^b$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

$F$ s'écrit $F = c + \int_a^x f(t)\,\mathrm{d}t$ (proposition 1 du VII), donc

$$F(b) - F(a) = \int_a^b f(t)\, \mathrm{d}t$$

</div>

### 2) Intégrations par parties

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Proposition</span>

Si $u$ et $v$ sont de classe $\mathcal{C}^1$ sur $[a, b]$, alors

$$\int_a^b u(x)\, v'(x)\, \mathrm{d}x
= \Big[ u(x)\, v(x) \Big]_a^b - \int_a^b u'(x)\, v(x)\, \mathrm{d}x$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Justification</span>

$(uv)' = u'v + uv'$ ; comme $u$ et $v$ sont $\mathcal{C}^1$, les fonctions
$u'v$ et $uv'$ sont continues, donc intégrables, et en intégrant l'égalité
ci-dessus entre $a$ et $b$ (formule fondamentale appliquée à $uv$) :

$$\Big[uv\Big]_a^b = \int_a^b u'v + \int_a^b uv'$$

</div>

### 3) Changement de variable

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Théorème</span>

Soit $f$ continue sur $[a, b]$ et $\varphi$ de classe $\mathcal{C}^1$ sur
$[\alpha, \beta]$ telle que $\varphi([\alpha, \beta]) \subset [a, b]$,
$\varphi(\alpha) = a$ et $\varphi(\beta) = b$. Alors

$$\int_a^b f(x)\, \mathrm{d}x
= \int_\alpha^\beta f\big(\varphi(t)\big)\, \varphi'(t)\, \mathrm{d}t$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

Soit $F$ une primitive de $f$ sur $[a, b]$ ($f$ étant continue). Alors
$F \circ \varphi$ est $\mathcal{C}^1$ sur $[\alpha, \beta]$ et

$$(F \circ \varphi)'(t) = F'\big(\varphi(t)\big)\, \varphi'(t)
= f\big(\varphi(t)\big)\, \varphi'(t)$$

donc $F \circ \varphi$ est une primitive de $(f \circ \varphi)\, \varphi'$, et

$$\int_\alpha^\beta (f \circ \varphi)(t)\, \varphi'(t)\, \mathrm{d}t
= \Big[ F \circ \varphi \Big]_\alpha^\beta
= F(b) - F(a) = \int_a^b f$$

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Propriétés usuelles</span>

- si $f$ est **paire** et intégrable sur $[-a, a]$ :
  $\displaystyle\int_{-a}^{a} f = 2 \int_0^a f$ ;
- si $f$ est **impaire** et intégrable sur $[-a, a]$ :
  $\displaystyle\int_{-a}^{a} f = 0$ ;
- si $f$ est **$T$-périodique** et intégrable sur une période :
  $\displaystyle\int_a^{a+T} f(t)\, \mathrm{d}t = \int_0^T f(t)\, \mathrm{d}t$
  pour tout $a$.

</div>

## IX. Formule de Taylor avec reste intégral

<div class="bloc theoreme" markdown="1">

<span class="bloc-titre">Proposition</span>

Si $f$ est de classe $\mathcal{C}^{n+1}$ sur $[a, b]$, alors

$$f(b) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}\, (b-a)^k
+ \int_a^b \frac{(b-t)^n}{n!}\, f^{(n+1)}(t)\, \mathrm{d}t$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration (récurrence sur $n$)</span>

- **Initialisation ($n = 0$)** : si $f$ est $\mathcal{C}^1$,
  $\int_a^b f'(t)\,\mathrm{d}t = f(b) - f(a)$ (formule fondamentale).
- **Hérédité** : supposons la propriété vraie au rang $n$ pour $f$ de classe
  $\mathcal{C}^{n+1}$, et prenons $f$ de classe $\mathcal{C}^{n+2}$. Une intégration
  par parties avec $u(t) = \dfrac{(b-t)^n}{n!}$ et
  $\mathrm{d}v = f^{(n+1)}(t)\,\mathrm{d}t$ donne

$$\int_a^b \frac{(b-t)^n}{n!} f^{(n+1)}(t)\, \mathrm{d}t
= \frac{(b-a)^{n+1}}{(n+1)!}\, f^{(n+1)}(a)
+ \int_a^b \frac{(b-t)^{n+1}}{(n+1)!}\, f^{(n+2)}(t)\, \mathrm{d}t$$

ce qui conclut la récurrence.

</div>

<div class="bloc propriete" markdown="1">

<span class="bloc-titre">Corollaire (reste de Lagrange)</span>

Sous les mêmes hypothèses, il existe $c \in [a, b]$ tel que

$$f(b) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}\, (b-a)^k
+ \frac{(b-a)^{n+1}}{(n+1)!}\, f^{(n+1)}(c)$$

</div>

<div class="bloc demo" markdown="1">

<span class="bloc-titre">Démonstration</span>

On applique le théorème de la moyenne à
$\int_a^b \dfrac{(b-t)^n}{n!} f^{(n+1)}(t)\,\mathrm{d}t$ : la fonction
$t \mapsto \dfrac{(b-t)^n}{n!}$ est continue et de signe constant (positive) sur
$[a, b]$, donc il existe $c \in [a, b]$ avec

$$\int_a^b \frac{(b-t)^n}{n!} f^{(n+1)}(t)\, \mathrm{d}t
= f^{(n+1)}(c) \int_a^b \frac{(b-t)^n}{n!}\, \mathrm{d}t
= \frac{(b-a)^{n+1}}{(n+1)!}\, f^{(n+1)}(c)$$

</div>

## X. Exercices — feuille n° 20

<div class="bloc exemple" markdown="1">

<span class="bloc-titre">Feuille d'exercices n° 20 — Intégration (énoncés)</span>

<ol class="enonces">
<li>Soit $f$ l'application qui à tout $x$ de $[0, 1]$ associe la seconde décimale de sa représentation décimale. Montrer que $f$ est intégrable sur $[0, 1]$ et calculer son intégrale.</li>
<li>La fonction $f$, définie par $f(x) = (-1)^{E(1/x)}$ (où $E$ désigne la partie entière) pour $x \neq 0$ et $f(0) = 0$, est-elle intégrable sur $[0, 1]$ ?</li>
<li>Soit $a < b < c < d$ et $f$ intégrable sur $[a, d]$. Montrer que :
$$\int_a^b f + \int_b^c f + \int_c^d f + \int_d^a f = 0$$</li>
<li>Soit $f$ continue sur $[a, b]$ telle que $\int_a^b f^2 = \int_a^b f^3 = \int_a^b f^4$. Montrer que $f$ est constante, égale à $0$ ou à $1$.</li>
<li>Soit $f$ continue sur $[a, b]$ telle que, pour tout $k \in \{0, 1, \dots, n\}$,
$\int_a^b t^k f(t)\, \mathrm{d}t = 0$. Montrer que $f$ admet au moins $n+1$ zéros dans $[a, b]$.</li>
<li>
<ol>
<li>Montrer que si $(f_n)_{n \in \mathbb{N}}$ est une suite de fonctions intégrables qui convergent uniformément vers $f$ sur $[a, b]$, alors $f$ est intégrable et
$$\lim_{n \to +\infty} \int_a^b f_n(t)\, \mathrm{d}t = \int_a^b f(t)\, \mathrm{d}t$$</li>
<li>On pose $f_n(t) = 2nt\, e^{-nt^2}$. Calculer
$\lim_{n \to +\infty} \int_0^1 f_n(t)\, \mathrm{d}t$ et
$\int_0^1 \left( \lim_{n \to +\infty} f_n(t) \right) \mathrm{d}t$. Que peut-on dire de cette suite de fonctions ?</li>
</ol>
</li>
<li>Soit $f$ définie par $f(x) = 2x \sin\frac{1}{x} - \cos\frac{1}{x}$ pour $x \neq 0$ et $f(0) = 0$. Montrer que $f$ n'est pas continue en $0$ mais admet des primitives sur $\mathbb{R}$.</li>
<li>Étudier la limite en $0$ de $f : x \mapsto \int_x^{3x} \frac{\cos t}{t}\, \mathrm{d}t$.</li>
<li>On pose $f(x) = \int_{x - 1/x}^{x + 1/x} \frac{\mathrm{d}t}{\arctan^2 t}$. Quel est le domaine de définition de $f$ ? Quelle est la limite en $+\infty$ de $f$ ?</li>
<li>Étudier et tracer le graphe de :
<ol>
<li>$f : x \mapsto \int_x^{x^2} e^{-t^2}\, \mathrm{d}t$ ;</li>
<li>$f : x \mapsto \int_x^{x^2} \frac{\mathrm{d}t}{1 + \ln t}$.</li>
</ol>
</li>
<li>
<ol>
<li>Soit $a > 0$. Soit $f$ une application vérifiant
$\forall x \in \mathbb{R},\ f(x) = \frac{1}{2a} \int_{x-a}^{x+a} f(t)\, \mathrm{d}t$.
Montrer que $f$ est définie sur $\mathbb{R}$ et $\mathcal{C}^\infty$ sur $\mathbb{R}$.</li>
<li>En déduire les applications vérifiant
$\forall a > 0,\ \forall x \in \mathbb{R},\ f(x) = \frac{1}{2a} \int_{x-a}^{x+a} f(t)\, \mathrm{d}t$.</li>
</ol>
</li>
<li>On pose $f(x) = \int_x^{x+1} \frac{\sin(xt)}{t}\, \mathrm{d}t$. Quel est le domaine de définition de $f$ ? Quelle est la limite en $+\infty$ de $f$, en $0$ ? $f$ est-elle prolongeable par continuité et, si oui, est-elle dérivable en $0$ ?</li>
<li>Calculer les limites des suites suivantes :
<ol>
<li>$u_n = \int_0^1 \frac{x^n}{1+x}\, \mathrm{d}x$ ;</li>
<li>$u_n = \int_1^{1 + 1/\sqrt{n}} \sqrt{1 + nt}\, \mathrm{d}t$.</li>
</ol>
</li>
<li>Calculer la limite des suites suivantes :
<ol>
<li>$u_n = \sum_{k=0}^{n} \frac{n+k}{k^2 + n^2}$ ;</li>
<li>$u_n = \frac{1}{n}\Big( 2n\,(2n-1)\cdots(n+2)(n+1) \Big)^{1/n}$ ;</li>
<li>$u_n = \sum_{k=1}^{n} rac{k}{n^2} \sin\!\left( \frac{k\pi}{n+1} \right)$ ;</li>
<li>$u_n = \left( \frac{(2n)!}{n!\, n!} \right)^{1/n}$ ;</li>
<li>$u_n = \sum_{k=1}^{n} \sin\!\left(\frac{k}{n}\right) \sin\!\left(\frac{k}{n^2}\right)$.</li>
</ol>
</li>
<li>Montrer que la quantité $\int_{-1/x}^{x} \frac{\mathrm{d}t}{\sqrt{1 - t^2 + t^4}}$ ne dépend que du signe de $x$.</li>
<li>Soit $f$ une application $T$-périodique. Montrer que
$\int_a^{a+T} f(t)\, \mathrm{d}t = \int_0^T f(t)\, \mathrm{d}t$.</li>
<li>Calculer les intégrales suivantes :
<ol>
<li>$\int_0^1 \ln(1 + t^2)\, \mathrm{d}t$ ;</li>
<li>$\int_{1/2}^{2} \left( 1 + \frac{1}{t^2} \right) \arctan t\, \mathrm{d}t$ ;</li>
<li>$\int_0^1 \frac{\sqrt{1+t}}{\sqrt{t} + \sqrt{2+t}}\, \mathrm{d}t$.</li>
</ol>
</li>
<li>Soit $f$ continue positive sur $[0, 1]$. Montrer que
$$\lim_{n \to +\infty} \left( \int_0^1 f^n(t)\, \mathrm{d}t \right)^{1/n} = \sup_{[0,1]} f$$</li>
<li>
<ol>
<li>Soit $f$ de classe $\mathcal{C}^1$ sur $[a, b]$. Montrer que
$\lim_{\lambda \to +\infty} \int_a^b \sin(\lambda t)\, f(t)\, \mathrm{d}t = 0$.</li>
<li>Montrer le même résultat si l'on suppose $f$ seulement continue (commencer par $f$ constante, puis $f$ en escalier...).</li>
</ol>
</li>
</ol>

</div>
