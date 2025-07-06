import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuestionStore } from '../../../shared/services/store/question.store';
import { QuestionTileComponent } from '../question-tile/question-tile.component';
import { MatDialog } from '@angular/material/dialog';
import { TagsFilterModal } from '../tags-filter/tags-filter.modal';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';

@Component({
  selector: 'rm-home',
  imports: [
    QuestionTileComponent,
    MatMiniFabButton,
    MatIconModule,
    FormsModule,
    MatInput,
    MatFormField,
    MatLabel
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  protected readonly questionStore = inject(QuestionStore);

  private readonly _dialog = inject(MatDialog);

  public search(searchTerm: string): void {
    this.questionStore.updateSearchTerm(searchTerm);
  }

  public openTagsModal(): void {
    const dialogRef = this._dialog.open(TagsFilterModal);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.questionStore.updateSelectedTags(result)
      }
    })
  }
}
