# Portfolio guide

The guide runs entirely in the browser on GitHub Pages. It uses the experience, projects, education, skills, and contact details in `src/config.js`. No AI provider, API key, backend, or external chat request is required.

Visitors can choose topic buttons or type questions. Known topics return portfolio facts; unsupported questions get a clear explanation and contact option. Follow-up technology questions can refer to the most recently discussed employer. This is a deterministic guide, not generative AI, and the UI says so.

## Verify and publish

Run `node --test tests/chat.test.js` and `npm run build`. Push to `main` to deploy through the existing GitHub Pages workflow. Check TU Dresden, Zeltask, a follow-up, and an unsupported question on the live site.

The obsolete `VITE_OPENROUTER_API_KEY` is no longer read or included by the build workflow. Revoke the previously exposed key in OpenRouter and remove the obsolete GitHub secret. Existing historical deployment assets may still contain the old key until revoked.
