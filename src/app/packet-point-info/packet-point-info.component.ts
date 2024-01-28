import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-packet-point-info',
  templateUrl: './packet-point-info.component.html',
  styleUrls: ['./packet-point-info.component.css']
})
export class PacketPointInfoComponent {
  @Input() data: any; // Assuming data is the JSON object you provided
  days = ['hetfo', 'kedd', 'szerda', 'csutortok', 'pentek', 'szombat', 'vasarnap'];
}