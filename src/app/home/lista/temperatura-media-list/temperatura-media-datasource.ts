import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TemperaturaMediaMensal {
  mes: string;
  media: number;
}
// TODO: Replace this with your own data model type
export interface TemperaturaMedia {
  cidade: string;
  temperaturaMediaMensal: TemperaturaMediaMensal[];
}
/**
 * Data source for the TemperaturaMedia view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TemperaturaMediaDataSource extends DataSource<TemperaturaMedia> {

  constructor(private data:TemperaturaMedia[], private sort: MatSort) {
    super();
    this.getSortedData(data);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TemperaturaMedia[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getSortedData([...this.data]);
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TemperaturaMedia[]) {
    return data.sort((a, b) => {
      return compare(a.cidade, b.cidade, true);
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
