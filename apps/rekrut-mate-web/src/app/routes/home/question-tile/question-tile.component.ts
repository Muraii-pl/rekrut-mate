import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { Question } from '../../../core/interfaces/question.interface';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rm-question-tile',
  imports: [
    DatePipe,
    RouterLink,
    TitleCasePipe
  ],
  templateUrl: './question-tile.component.html',
  styleUrl: './question-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionTileComponent {

  public question: InputSignal<Question> = input.required();
}
