import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { QuestionDetailsDto } from '@rm/dtos';

@Component({
  selector: 'rm-question',
  imports: [CommonModule, DatePipe],
  templateUrl: './question.page.html',
  styleUrl: './question.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionPage implements OnInit {

  protected question = signal<QuestionDetailsDto>({} as QuestionDetailsDto);

  private readonly _route = inject(ActivatedRoute);

  public ngOnInit(): void {
    const questionData = this._route.snapshot.data['question'];
    if (questionData && questionData.data) {
      this.question.set(questionData.data);
    }
  }
}
