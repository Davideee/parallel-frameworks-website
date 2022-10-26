/* eslint-disable no-console */
import { interval, switchMap, tap } from 'rxjs';
import { mountVanillaApp } from './apps/vanilla/mount';

mountVanillaApp();

const a = interval(1000);
const b = interval(198);

a.pipe(
  switchMap((val) => {
    console.log('Int: ', val);
    return b;
  }),
  tap((val) => console.log('Interval2: ', val))
).subscribe();
