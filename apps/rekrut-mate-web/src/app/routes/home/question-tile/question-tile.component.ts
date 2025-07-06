import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { QuestionDto } from '@rm/dtos';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rm-question-tile',
  imports: [
    CommonModule,
    DatePipe,
    RouterLink,
    TitleCasePipe
  ],
  templateUrl: './question-tile.component.html',
  styleUrl: './question-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionTileComponent {

  public question: InputSignal<QuestionDto> = input.required();
}
