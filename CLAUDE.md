# gianpierospelozzo.it – istruzioni per Claude

Portfolio di Gianpiero Spelozzo. Sito statico (HTML + CSS + un piccolo JS), nessuna build e nessuna dipendenza.
È pubblicato su Vercel: ogni push su `main` va online in circa un minuto, ogni altro branch genera un'anteprima.

## Come lavorare

- Lavora sempre su un branch nuovo e apri una pull request. Non fare mai push diretti su `main`:
  Gianpiero controlla l'anteprima Vercel della PR e la unisce lui.
- Alla fine riassumi in italiano cosa hai cambiato, in quali file e in quali lingue.

## Regole del sito

- **Due lingue, sempre allineate.** `index.html` è l'italiano, `en/index.html` l'inglese (inglese britannico, `en_GB`).
  Ogni modifica di testo o di struttura va fatta in entrambe le pagine. Se la richiesta è solo in italiano,
  scrivi tu la versione inglese nello stesso tono e riportala nel riepilogo, così Gianpiero può controllarla.
- **Il testo resta nell'HTML.** Niente contenuti generati via JavaScript: Google e i motori AI devono leggere tutto
  senza eseguire script.
- **Metadati coerenti.** Se cambiano nome, ruolo o descrizione, aggiorna in entrambe le lingue `<title>`,
  meta description, `og:*`, `twitter:*` e il blocco `<script type="application/ld+json">`.
- **Testi dell'interfaccia** (ricerca animata, percorsi "ruolo in azienda / consulente", pulsanti) stanno nel blocco
  `<script type="application/json" id="sitedata">` di ciascuna pagina: deve restare JSON valido.
- **Case study.** Sono schede `<article class="case" id="csN">` con titolo `id="csN-t"` e pulsante `button.more`
  con `data-id="csN"`.
  - La scheda `cs6` (Slowride Cicloturismo) è un segnaposto "In arrivo" (`class="case soon"`): per completarla
    sostituiscila con una scheda completa uguale alle altre e togli la classe `soon`.
  - In `js/site.js` la funzione `fromHash` apre dall'URL solo `#cs1`–`#cs5` (regex `/^#cs[1-5]$/`):
    se completi o aggiungi schede, aggiorna la regex.
  - La nota sotto i case study dice "cinque case study" / "five case studies": aggiorna il numero.
- **Immagini** in `img/`: quelle con testo hanno una versione `-it` e una `-en`. **PDF** in `pdf/`: per aggiornarli
  sostituisci i file mantenendo lo stesso nome, così i link restano validi.
- **Sitemap.** Dopo ogni modifica ai contenuti aggiorna `lastmod` in `sitemap.xml` (entrambi gli URL).
- Non modificare `vercel.json`, `.vercelignore`, `robots.txt`, `_headers` senza un motivo esplicito.

## Prima di aprire la PR

- Controlla che ogni link interno e ogni immagine puntino a file esistenti.
- Controlla che i blocchi JSON nelle pagine siano validi.
- Controlla che le due lingue abbiano le stesse sezioni e gli stessi case study.
