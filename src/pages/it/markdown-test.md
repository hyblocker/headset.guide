---
layout: $layouts/StandardLayout.astro
title: Test markdown
locale: it
description: Questa pagina è designata solo per testare markdown
image: content/shared/favicon.png
---
# Test dello syntax markdown

## Intestazioni

# Questa è una Intestazione h1
## Questa è una Intestazione h2
### Questa è una Intestazione h3
#### Questa è una Intestazione h4
##### Questa è una Intestazione h5
###### Questa è una Intestazione h6

## Enfasi

*Questo testo sarà corsivo*
_Anche questo testo sarà corsivo_

**Questo testo sarà grassetto**
__Anche questo testo sarà grassetto__

_**Puoi** combinarli_

## Liste

### In ordine sparso

* Oggetto 1
* Oggetto 2
* Oggetto 2a
* Oggetto 2b

### In ordine

1. Oggetto 1
1. Oggetto 2
1. Oggetto 3
1. Oggetto 3a
1. Oggetto 3b

## Immagini

![Questo è un testo alternattivo.](/content/shared/favicon.png "Questa è un'immagina di esempio.")

## Links

Puoi guardare il codice di questo sito su [GitHub](https://github.com/hyblocker/headset.guide/).

## Citazioni

> Markdown è un linguaggio di markup leggero con sintassi di formattazione del testo semplice, creato nel 2004 da John Gruber con Aaron Swartz.
>
>> Markdown è spesso usato per formattare file readme, per scrivere messaggi nei forum di discussione online e per creare testo ricco usando un editor di testo semplice.

## Tables

| Colonni sinistri  | Colonni destri |
| ----------------- |:--------------:|
| foo sinistra      | destra foo     |
| bar sinistra      | destra bar     |
| baz sinistra      | destra baz     |

## Blocchi di codice

```
let messaggio = 'Ciao mondo';
alert(messaggio);
```

## Codice inline

Lorem ipsum `dolor sit` amet.
