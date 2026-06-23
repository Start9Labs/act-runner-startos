import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.8:1',
  releaseNotes: {
    en_US: `Health check now reflects actual runner registration (the .runner state file) rather than the saved token, so a runner registered out-of-band no longer shows unhealthy. Translated the in-app strings to Spanish, German, Polish, and French.`,
    es_ES: `La comprobación de estado ahora refleja el registro real del ejecutor (el archivo de estado .runner) en lugar del token guardado, por lo que un ejecutor registrado de forma externa ya no aparece como no saludable. Se tradujeron los textos de la aplicación al español, alemán, polaco y francés.`,
    de_DE: `Die Zustandsprüfung spiegelt jetzt die tatsächliche Runner-Registrierung (die Statusdatei .runner) statt des gespeicherten Tokens wider, sodass ein extern registrierter Runner nicht mehr als fehlerhaft angezeigt wird. Die In-App-Texte wurden ins Spanische, Deutsche, Polnische und Französische übersetzt.`,
    pl_PL: `Kontrola stanu odzwierciedla teraz rzeczywistą rejestrację runnera (plik stanu .runner) zamiast zapisanego tokenu, więc runner zarejestrowany zewnętrznie nie jest już pokazywany jako niesprawny. Przetłumaczono teksty w aplikacji na hiszpański, niemiecki, polski i francuski.`,
    fr_FR: `La vérification d'état reflète désormais l'enregistrement réel de l'exécuteur (le fichier d'état .runner) plutôt que le jeton enregistré, de sorte qu'un exécuteur enregistré en externe n'apparaît plus comme défaillant. Les textes de l'application ont été traduits en espagnol, allemand, polonais et français.`,
  },
  migrations: {
    // No data migration: this bump only changes health-check logic and adds
    // translations; the store schema is unchanged.
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
