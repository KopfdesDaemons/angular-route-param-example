import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabs-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './tabs-page.component.html',
  styleUrl: './tabs-page.component.scss'
})
export class TabsPage implements OnInit {
  private route = inject(ActivatedRoute);

  id: string | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log('ID from TabsPage: ', this.id);
    });
  }
}
