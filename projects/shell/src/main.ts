import { loadManifest } from '@angular-architects/module-federation';

loadManifest('assets/mf.manifest.json')
	.catch((err) => console.error('Error loading remote entries\n', err))
	.then(() => import('./bootstrap'))
	.catch((err) => console.error(err));
