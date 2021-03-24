import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Minecraft Java ED', cols: 1, rows: 2, content: 'Online', statusColor: 'green' },
          { title: 'Minecraft Bedrock ED', cols: 1, rows: 2, content: 'Offline', statusColor: 'red' },
          { title: 'API', cols: 1, rows: 2, content: 'Offline', statusColor: 'red' },
          { title: 'Teamspeak', cols: 1, rows: 2, content: 'Offline', statusColor: 'red' },
        ];
      }

      return [
        { title: 'Minecraft Java ED', cols: 2, rows: 1, content: 'Online', statusColor: 'green' },
        { title: 'Minecraft Bedrock ED', cols: 2, rows: 1, content: 'Offline', statusColor: 'red' },
        { title: 'API', cols: 2, rows: 1, content: 'Offline', statusColor: 'red' },
        { title: 'Teamspeak', cols: 2, rows: 1, content: 'Offline', statusColor: 'red' },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
