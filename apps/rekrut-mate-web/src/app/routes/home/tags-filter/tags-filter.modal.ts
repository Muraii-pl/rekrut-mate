import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TagsRepository } from '../../../shared/services/api/tags.repository';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import { map } from 'rxjs';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatCheckbox,
    MatDialogActions,
    MatDialogClose,
    MatButton
  ],
  templateUrl: './tags-filter.modal.html',
  styleUrl: './tags-filter.modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsFilterModal implements OnInit {

  protected selectedTags: string[] = [];
  protected tags: string[] = [];

  private data = inject<string[]>(MAT_DIALOG_DATA);
  private readonly _tagsRepository = inject(TagsRepository);
  private readonly _cdr = inject(ChangeDetectorRef);

  public ngOnInit() {
    this.selectedTags = this.data || [];
    this._tagsRepository.getAll()
    .pipe(map((tags) => tags.map((tag) => tag.name)))
    .subscribe((tags) => {
      this.tags = tags;
      console.log(tags);
      this._cdr.markForCheck();
    });
  }

  public toggleTag(tag: string): void {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter((selectedTag) => selectedTag !== tag);
    } else {
      this.selectedTags.push(tag);
    }
  }

}
