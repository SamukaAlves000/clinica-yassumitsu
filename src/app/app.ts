import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Navbar} from './core/navbar';
import {Footer} from './core/footer';
import {WhatsAppButton} from './shared/whatsapp-button';
import {DeveloperButton} from './shared/developer-button';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, WhatsAppButton, DeveloperButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
