# Carosello Mono Array

Questo programma implementa un carosello di immagini che consente agli utenti di scorrere diverse immagini al click delle frecce, oppure selezionandole attraverso miniature.

## MILESTONE 1

Le immagini vengono inserite dinamicamente nel DOM attraverso un array fornito e un ciclo for. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

1. Viene inizializzato un array contenente le immagini;
2. Viene inizializzata una variabile che seleziona il conenitore delle immagini nel DOM;
3. Viene inizializzata una variabile che identifica l'indice dell'immagine attualmente visualizzata;
4. Tramite un ciclo for vengono eseguite le seguenti operazioni per ogni immagine contenuta nell'array:
   1. Viene creato un elemento div con la classe "item" che funge da contenitore per l'immagine e che rappresenta una slide nel carosello;
   2. Se l'indice corrente coincide con l'indice dell'immagine attualmente visualizzata, viene aggiunta la classe "active" all'elemento;
   3. Viene creato un elemento img;
   4.  L'elemento immagine appena creato viene appeso come figlio dell'elemento di slide;
   5. L'elemento di slide viene appeso come figlio del contenitore principale.

## MILESTONE 2

L'utente può scorrere avanti e indietro tra le immagini utilizzando i pulsanti "Precedente" e "Successivo".

1. Vengono inizializzate due variabili per selezionare i pulsanti nel DOM;
2. Viene inizializzata una variabile che seleziona tutti gli elementi "item" nel DOM creati precedentemente;
3. Vengono aggiunti event listeners per gestire il click su questi pulsanti;
4. Il click del pulsante "precedente" da il via ad una funzione che sposta la classe active sull'elemento precedente:
   1. Viene rimossa la classe active dall'elemento corrente;
   2. SE l'indice dell'immagine corrente è maggiore di 0 (non è all'inizio della lista) viene decrementato;
   3. Viene aggiunta la classe active all'elemento corrente;
5. Il click del pulsante "successivo" da il via ad una funzione che sposta la classe active sull'elemento successivo:
   1. Viene rimossa la classe active dall'elemento corrente;
   2. SE l'indice dell'immagine corrente è minore della lunghezza della lista meno uno (non è alla fine della lista) viene incrementato;
   3. Viene aggiunta la classe active all'elemento corrente;

## Bonus 1

Il carosello ha un ciclo infinito, ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

1. Alla condizione all'interno della funzione legata al click sul pulsante "precedente" viene aggiunto un else, che assegna all'indice dell'immagine corrente il valore corrispondente all'ultimo indice della lista;
2. Alla condizione all'interno della funzione legata al click sul pulsante "successivo" viene aggiunto un else, che assegna all'indice dell'immagine corrente il valore corrispondente al primo indice della lista;

## Bonus 2

Viene aggiunta la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva. Tutte le miniature hanno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece ha un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, cambia la miniatura attiva.

1. Dichiarazione di una variabile che seleziona il contenitore delle thumbnails nel DOM;
2. Tramite un ciclo for vengono eseguite le seguenti operazioni per ogni immagine contenuta nell'array:
   1. Viene creato un elemento div con la classe "thumbnail" che funge da contenitore per l'immagine;
   2. Se l'indice corrente coincide con l'indice dell'immagine attualmente visualizzata, viene aggiunta la classe "active_thumbanail" all'elemento;
   3. Viene creato un elemento img;
   4.  L'elemento immagine appena creato viene appeso come figlio dell'elemento thumbnail;
   5. L'elemento thumbnail viene appeso come figlio del contenitore delle thumbnails nel DOM;
3. Viene dichiarata una variabile che seleziona tutti gli elementi con la la classe "thumbnail" precedentemente creati;
4. Vengono modificate le funzoni per la gestione dei pulsanti:
   1. Al "click" viene rimossa la classe "active" alla thumbnail attiva;
   2. Dopo aver modificato l'indice dell'immagine attiva, viene aggiunta la classe "active" alla thumbnail attiva.

## Bonus 3

Al click sulla thumbnail, viene visualizzata l'immagine selezionata.

1. Inizia un ciclo che scorre tutte le miniature del carosello;
2. Per ogni iterazione del ciclo, viene assegnata la thumbnail corrente a una variabile;
3. Quando l'utente fa clic su una miniatura, verrà eseguita una funzione che ripete queste operazioni per ogni thumbnail:
    1. Si determina l'indice della thumbnail cliccata all'interno della lista di tutte le miniature.
    2. Ricerca la miniatura attualmente attiva (SE presente) e rimuove la classe "active_thumbnail".
    3. Aggiunge la classe "active_thumbnail" alla miniatura cliccata.
    4. Assegna l'indice del thumbnail cliccato alla variabile che rappresenta l'immagine principale visualizzata.
    5. Scorre tutte le immagini all'interno della slide principale:
       1. SE l'indice dell'immagine principale visualizzata corrisponde all'indice della thumbnail cliccata aggiunge la classe "active" all'immagine corrispondente;
       2. Altrimenti rimuove la classe "active".