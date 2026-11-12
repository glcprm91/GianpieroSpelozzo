# gianpierospelozzo.it – sito statico

Sito statico (HTML + CSS + un piccolo JS), nessuna build e nessuna dipendenza.

```
index.html        versione italiana  → https://gianpierospelozzo.it/
en/index.html     versione inglese   → https://gianpierospelozzo.it/en/
css/ js/ img/     risorse
pdf/              portfolio in PDF (IT e EN)
sitemap.xml       con hreflang IT/EN
robots.txt        consente tutto e indica la sitemap
404.html          pagina di errore
_headers          cache (Netlify e Cloudflare Pages; Vercel lo ignora)
vercel.json       cache di immagini e PDF su Vercel (CSS/JS restano col default di Vercel,
                  così le modifiche si vedono subito anche senza nomi file versionati)
```

Tutto il testo, compresi i case study, è già nell'HTML: Google e i motori AI lo leggono
senza eseguire JavaScript. Il JS aggiunge solo le schede espandibili, la ricerca animata,
la scelta del percorso e il pulsante "copia email".

## Pubblicazione (consigliato: Cloudflare Pages, gratuito)

1. Crea un account su Cloudflare e vai in **Workers & Pages → Create → Pages → Upload assets**.
2. Dai un nome al progetto, trascina la **cartella** estratta dallo zip (con `index.html` in radice) e fai Deploy.
3. In **Custom domains** aggiungi `gianpierospelozzo.it` e `www.gianpierospelozzo.it`.
   - Se il dominio è già su Cloudflare, i record DNS si creano da soli.
   - Altrimenti, dal registrar (dove hai comprato il dominio) imposta i nameserver indicati da Cloudflare,
     oppure aggiungi i record che ti mostra (CNAME verso `<progetto>.pages.dev`).
4. Il certificato HTTPS è automatico. Attendi qualche minuto (a volte fino a qualche ora) per la propagazione DNS.
5. Imposta il reindirizzamento `www` → dominio senza www (Bulk Redirects o regola di redirect).

Alternative equivalenti: **Netlify** (Sites → Add new site → Deploy manually, trascina la cartella),
**Vercel** (`vercel --prod` dalla cartella, scegliendo "Other" come framework) o **GitHub Pages**
(carica i file in un repository e attiva Pages; per il dominio aggiungi un file `CNAME` con `gianpierospelozzo.it`).
Su GitHub Pages `404.html` e `_headers` funzionano solo in parte.

## Dopo la pubblicazione

1. **Google Search Console**: aggiungi la proprietà "Dominio" `gianpierospelozzo.it` (verifica via record DNS TXT),
   poi Sitemap → invia `https://gianpierospelozzo.it/sitemap.xml`, e "Controllo URL" → richiedi l'indicizzazione di `/` e `/en/`.
2. **Bing Webmaster Tools**: importa la proprietà da Search Console (utile anche per la visibilità nelle risposte AI).
3. Controlla l'anteprima social con il debugger di LinkedIn (Post Inspector) incollando `https://gianpierospelozzo.it/`.
4. Aggiungi il link del sito nei PDF/DOCX e nel profilo LinkedIn.

## Come modificare

- Testi e struttura: i file HTML sono leggibili e modificabili a mano. Ogni modifica va fatta in **entrambe** le lingue.
- Aggiungere il case study Slowride: sostituire la scheda `id="cs6"` con una scheda completa uguale alle altre.
- Aggiornare data in `sitemap.xml` (`lastmod`) quando cambi i contenuti.
