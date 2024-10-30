# Swalle Image Slider

Questo progetto è un semplice slider per immagini in JavaScript. Permette di navigare tra le immagini tramite pulsanti, navigazione tramite swipe e con un sistema di paginazione. Lo slider supporta l'autoplay e può essere personalizzato.

## Demo

Per vedere il progetto visita questa [DEMO](https://kevinbism.github.io/swalle/)

## Funzionalità Principali

- **Navigazione tramite pulsanti**: supporta un pulsante "prev" per l'immagine precedente e un pulsante "next" per l'immagine successiva.
- **Autoplay**: lo slider cambia automaticamente le immagini a intervalli di tempo definiti.
- **Paginazione**: mostra gli indicatori di paginazione, che permettono di navigare tra le immagini.
- **Swipe**: supporta la navigazione tramite swipe (su dispositivi touch).
- **Personalizzazione**: l'utente può definire il tempo di autoplay e i selettori per le immagini, i pulsanti e la paginazione.

## Installazione

Aggiungi il codice JavaScript al tuo progetto. Assicurati di avere gli elementi HTML necessari per le immagini, i pulsanti e la paginazione.

### Esempio di HTML

```html
<div class="swalle-container">
  <div class="swalle-image active">Image 1</div>
  <div class="swalle-image">Image 2</div>
  <div class="swalle-image">Image 3</div>
</div>

<button class="swalle-prev">Previous</button>
<button class="swalle-next">Next</button>

<div class="swalle-pagination"></div>
```

## Utilizzo

Inizializza lo slider chiamando la funzione initSwalle con i selettori appropriati.

### Esempio di Inizializzazione

```javascript
initSwalle('.swalle-image', '.swalle-prev', '.swalle-next', '.swalle-pagination', 3000);
```

### Parametri

- `img` (string): Selettore CSS per gli elementi immagine.
- `prev` (string): Selettore CSS per il pulsante "precedente".
- `next` (string): Selettore CSS per il pulsante "successivo".
- `paginationEl` (string): Selettore CSS per l'elemento di paginazione.
- `setTime` (number): Intervallo di tempo (in millisecondi) per l'autoplay. Predefinito: 5000 ms.

### Esempio Completo

```javascript
document.addEventListener('DOMContentLoaded', function () {
  initSwalle('.swalle-image', '.swalle-prev', '.swalle-next', '.swalle-pagination', 5000);
});
```
