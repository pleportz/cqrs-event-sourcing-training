import { ICommand } from '@nestjs/cqrs';
import { ArticleDTO } from 'src/article.dto';


class CreateArticleCommand implements ICommand {
  constructor(public readonly articleDto: ArticleDTO) {}
}
