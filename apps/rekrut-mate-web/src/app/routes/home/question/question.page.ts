import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '@rm/rekrut-mate-lib';

@Component({
  selector: 'rm-question',
  imports: [],
  templateUrl: './question.page.html',
  styleUrl: './question.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionPage implements OnInit {

  protected question = signal<Question>({} as Question);

  private readonly _route = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.question.set(this._route.snapshot.data['question']);
  }
}
