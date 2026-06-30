import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.0.0:0',
  releaseNotes: {
    en_US: `Updated Gitea Runner to 2.0.0.

**Breaking:** the secrets \`DOCKER_USERNAME\` / \`DOCKER_PASSWORD\` are no longer used implicitly as Docker image-pull credentials. Workflows that relied on this must switch to explicit \`container.credentials\` (or \`docker login\` on the runner).

**Highlights:** complete runner-side job cancellation, per-job \`timeout-minutes\` and \`continue-on-error\`, shallow clones of action repositories, an optional \`post_task_script\` hook, \`ssh://\` action URLs, IPv6 network options, job-summary upload, and numerous cancellation/cleanup fixes (Docker CLI bumped to v29.6.0).

Full changelog: https://gitea.com/gitea/runner/releases/tag/v2.0.0`,
    es_ES: `Se actualizó Gitea Runner a 2.0.0.

**Cambio incompatible:** los secretos \`DOCKER_USERNAME\` / \`DOCKER_PASSWORD\` ya no se usan implícitamente como credenciales para descargar imágenes de Docker. Los flujos de trabajo que dependían de esto deben pasar a \`container.credentials\` explícitas (o \`docker login\` en el ejecutor).

**Novedades:** cancelación completa de trabajos en el ejecutor, \`timeout-minutes\` y \`continue-on-error\` por trabajo, clones superficiales de los repositorios de acciones, un hook opcional \`post_task_script\`, URLs de acciones \`ssh://\`, opciones de red IPv6, subida del resumen de trabajo y numerosas correcciones de cancelación/limpieza (Docker CLI actualizado a v29.6.0).

Registro de cambios completo: https://gitea.com/gitea/runner/releases/tag/v2.0.0`,
    de_DE: `Gitea Runner auf 2.0.0 aktualisiert.

**Breaking Change:** Die Secrets \`DOCKER_USERNAME\` / \`DOCKER_PASSWORD\` werden nicht mehr implizit als Anmeldedaten zum Abrufen von Docker-Images verwendet. Workflows, die sich darauf verließen, müssen auf explizite \`container.credentials\` (oder \`docker login\` auf dem Runner) umstellen.

**Highlights:** vollständige Job-Abbruchbehandlung auf der Runner-Seite, \`timeout-minutes\` und \`continue-on-error\` pro Job, flache Klone der Action-Repositories, ein optionaler \`post_task_script\`-Hook, \`ssh://\`-Action-URLs, IPv6-Netzwerkoptionen, Hochladen der Job-Zusammenfassung sowie zahlreiche Abbruch-/Aufräum-Fehlerbehebungen (Docker CLI auf v29.6.0 aktualisiert).

Vollständiges Änderungsprotokoll: https://gitea.com/gitea/runner/releases/tag/v2.0.0`,
    pl_PL: `Zaktualizowano Gitea Runner do 2.0.0.

**Zmiana niezgodna wstecznie:** sekrety \`DOCKER_USERNAME\` / \`DOCKER_PASSWORD\` nie są już niejawnie używane jako dane logowania do pobierania obrazów Docker. Przepływy pracy, które na tym polegały, muszą przejść na jawne \`container.credentials\` (lub \`docker login\` na runnerze).

**Najważniejsze zmiany:** pełna obsługa anulowania zadań po stronie runnera, \`timeout-minutes\` i \`continue-on-error\` na poziomie zadania, płytkie klony repozytoriów akcji, opcjonalny hook \`post_task_script\`, adresy akcji \`ssh://\`, opcje sieci IPv6, przesyłanie podsumowania zadania oraz liczne poprawki anulowania/sprzątania (Docker CLI podbity do v29.6.0).

Pełny dziennik zmian: https://gitea.com/gitea/runner/releases/tag/v2.0.0`,
    fr_FR: `Mise à jour de Gitea Runner vers 2.0.0.

**Changement incompatible :** les secrets \`DOCKER_USERNAME\` / \`DOCKER_PASSWORD\` ne sont plus utilisés implicitement comme identifiants pour récupérer les images Docker. Les workflows qui en dépendaient doivent passer à des \`container.credentials\` explicites (ou \`docker login\` sur l'exécuteur).

**Points forts :** gestion complète de l'annulation des tâches côté exécuteur, \`timeout-minutes\` et \`continue-on-error\` par tâche, clones superficiels des dépôts d'actions, un hook optionnel \`post_task_script\`, des URL d'action \`ssh://\`, des options réseau IPv6, l'envoi du résumé de tâche et de nombreuses corrections d'annulation/nettoyage (Docker CLI mis à jour vers v29.6.0).

Journal des modifications complet : https://gitea.com/gitea/runner/releases/tag/v2.0.0`,
  },
  migrations: {
    // No data migration: the store schema is unchanged across this bump.
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
