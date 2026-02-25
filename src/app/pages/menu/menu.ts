import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: number;
  name: string;
  value: number;
  selected: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {
  items = signal<MenuItem[]>([
    { id: 1, name: 'Item 1', value: 20, selected: false },
    { id: 2, name: 'Item 2', value: 30, selected: false },
    { id: 3, name: 'Item 3', value: 40, selected: false },
    { id: 4, name: 'Item 4', value: 50, selected: false },
  ]);

  selectedCount = computed(() => 
    this.items().filter(i => i.selected).length
  );

  totalValue = computed(() => 
    this.items().filter(i => i.selected).reduce((sum, i) => sum + i.value, 0)
  );

  toggleItem(id: number) {
    this.items.update(items => 
      items.map(i => i.id === id ? { ...i, selected: !i.selected } : i)
    );
  }
}