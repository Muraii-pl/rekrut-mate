export interface ReplyDto {
  id?: string;
  content: string;
  author: {
    name: string;
  };
  createdAt?: string | Date;
}

export interface GetRepliesCommentDto {
  content: string;
  author: {
    name: string;
  }
}
