import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommomService {
  private idList: string[] = [];

  constructor() {
    this.loadIdList();
  }

  private loadIdList(): void {
    const idListString = localStorage.getItem('order');
    if (idListString) {
      this.idList = JSON.parse(idListString);
    }
  }

  private saveIdList(): void {
    localStorage.setItem('order', JSON.stringify(this.idList));
  }

  addIdToList(data: string): void {
    if (!this.idList.includes(data)) {
      this.idList.push(data);
      this.saveIdList();
    }
  }

  removeIdFromList(data: string): void {
    const index = this.idList.indexOf(data);
    if (index !== -1) {
      this.idList.splice(index, 1);
      this.saveIdList();
    }
  }
  remove(): void {
    localStorage.removeItem("order")
    
  }
  getIdList(): string[] {
    return [...this.idList];
  }
}
