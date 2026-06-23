import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.8:0',
  releaseNotes: {
    en_US: `Updated the runner to 1.0.8.

- Upstream renamed the project from act_runner to gitea-runner (binary, image, and repository); config format, registration, and your saved settings are unchanged, so existing installs keep working.
- New idle-time workspace janitor cleans up stale job workspaces in the background.
- Added \`cache.offline_mode\` to reuse cached actions, and opt-in pseudo-TTY allocation.
- Step-failure log output now matches GitHub Actions, plus many container, cache, and matrix-job fixes.

Full notes: https://gitea.com/gitea/runner/releases`,
    es_ES: `Se actualizó el ejecutor a 1.0.8.

- El proyecto upstream se renombró de act_runner a gitea-runner (binario, imagen y repositorio); el formato de configuración, el registro y tus ajustes guardados no cambian, por lo que las instalaciones existentes siguen funcionando.
- Nuevo limpiador en tiempo de inactividad que elimina en segundo plano los espacios de trabajo de tareas obsoletos.
- Se añadió \`cache.offline_mode\` para reutilizar acciones en caché y la asignación opcional de pseudo-TTY.
- La salida de registro de fallos de pasos ahora coincide con GitHub Actions, además de muchas correcciones de contenedores, caché y trabajos de matriz.

Notas completas: https://gitea.com/gitea/runner/releases`,
    de_DE: `Runner auf 1.0.8 aktualisiert.

- Das Upstream-Projekt wurde von act_runner in gitea-runner umbenannt (Binärdatei, Image und Repository); Konfigurationsformat, Registrierung und gespeicherte Einstellungen bleiben unverändert, sodass bestehende Installationen weiterlaufen.
- Neuer Leerlauf-Aufräumer entfernt veraltete Auftrags-Arbeitsverzeichnisse im Hintergrund.
- \`cache.offline_mode\` zum Wiederverwenden zwischengespeicherter Aktionen sowie optionale Pseudo-TTY-Zuweisung hinzugefügt.
- Die Protokollausgabe bei Schrittfehlern entspricht jetzt GitHub Actions, dazu viele Container-, Cache- und Matrix-Job-Korrekturen.

Vollständige Hinweise: https://gitea.com/gitea/runner/releases`,
    pl_PL: `Zaktualizowano runnera do 1.0.8.

- Projekt upstream zmienił nazwę z act_runner na gitea-runner (plik binarny, obraz i repozytorium); format konfiguracji, rejestracja i zapisane ustawienia pozostają bez zmian, więc istniejące instalacje działają dalej.
- Nowy mechanizm czyszczenia w czasie bezczynności usuwa w tle przestarzałe przestrzenie robocze zadań.
- Dodano \`cache.offline_mode\` do ponownego wykorzystania zbuforowanych akcji oraz opcjonalne przydzielanie pseudo-TTY.
- Wyjście dziennika błędów kroków jest teraz zgodne z GitHub Actions, a także wiele poprawek kontenerów, pamięci podręcznej i zadań macierzowych.

Pełne informacje: https://gitea.com/gitea/runner/releases`,
    fr_FR: `Mise à jour de l'exécuteur vers 1.0.8.

- Le projet en amont a été renommé act_runner en gitea-runner (binaire, image et dépôt) ; le format de configuration, l'enregistrement et vos paramètres enregistrés sont inchangés, les installations existantes continuent donc de fonctionner.
- Nouveau nettoyeur en période d'inactivité qui supprime en arrière-plan les espaces de travail de tâches obsolètes.
- Ajout de \`cache.offline_mode\` pour réutiliser les actions en cache, ainsi que l'allocation optionnelle de pseudo-TTY.
- La sortie de journal en cas d'échec d'étape correspond désormais à GitHub Actions, en plus de nombreux correctifs de conteneurs, de cache et de tâches matricielles.

Notes complètes : https://gitea.com/gitea/runner/releases`,
  },
  migrations: {
    // Config, registration file, and saved settings are unchanged across the rename — nothing to migrate.
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
